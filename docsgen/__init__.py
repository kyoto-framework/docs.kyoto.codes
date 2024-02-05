"""docsgen - Tool for generating markdown documentation from godoc."""
import json
import pathlib
import tempfile
import collections
import dataclasses

import docsgen.tools
import docsgen.docfile
import docsgen.repository


@dataclasses.dataclass
class Arguments:
    """Docsgen tool arguments."""

    repository: docsgen.repository.Repository
    outpath: pathlib.Path
    repository_branch: str | None = None
    repository_dirs: list[str] | None = None
    tmppath: pathlib.Path | None = None
    prefix: str | None = None


def parse(rawpath: pathlib.Path) -> list[docsgen.docfile.Docfile]:
    """Parse raw documentation into set of docfiles."""
    # Define shortcuts
    def preproc(c: str) -> str:
        c = c.replace("<!-- Code generated by gomarkdoc. DO NOT EDIT -->\n\n", "")
        c = c.replace("\\-", "-")
        c = c.replace("```\npackage", "```go\npackage")
        c = c.replace("```\nfunc", "```go\nfunc")
        c = c.replace("```\n//", "```go\n//")
        c = c.replace("```\n<", "```html\n<")
        c = c.replace("```\n{{ define", "```html\n{{ define")
        c = c.replace("```\n$", "```bash\n$")
        return c
    def gettitle(c: str) -> str:
        return c.split("\n")[0].replace("#", "").strip()
    def getdoc(c: str) -> str:
        if not c.startswith("#"):
            return "# " + c
        return c
    # Read raw doc
    with rawpath.open() as f:
        doc = f.read()
    # Separate doc and definitions parts
    doc, docdef = doc.split("##", maxsplit=1)
    # Split doc into chunks
    chunks = doc.split(r"\# ")
    # Preprocess chunks
    chunks = [preproc(c) for c in chunks]
    # Join chunks with the same title prefix
    joins: collections.defaultdict[str, list[int]] = collections.defaultdict(list[int])
    for i, chunk in enumerate(chunks):
        maintitle = gettitle(chunk).split(" - ")[0]
        joins[maintitle].append(i)
    chunks = [
        "## ".join([
            c.replace(gettitle(c).split(" - ")[0] + " - ", "")
            for i, c in enumerate(chunks)
            if i in indexes
        ])
        for title, indexes in joins.items()
    ]
    # Promote chunks into docfiles
    return [
        docsgen.docfile.Docfile(
            gettitle(c),
            getdoc(c),
        )
        for c in chunks
    ] + [
        docsgen.docfile.Docfile(
            title="Definitions index",
            documentation=docdef,
        ),
    ]


def generate(args: Arguments) -> None:
    """Docsgen tool entrypoint."""
    # Defaults
    args.tmppath = args.tmppath or pathlib.Path(tempfile.gettempdir())
    args.prefix = args.prefix or ""

    # Define paths
    reppath = (args.tmppath / args.repository.name) \
        if args.repository.is_remote \
        else pathlib.Path(str(args.repository))

    # Cleanup paths (if needed)
    docsgen.tools.clean(args.outpath)
    if args.repository.is_remote:
        docsgen.tools.clean(reppath)

    # Create paths (if needed)
    if not args.outpath.exists():
        args.outpath.mkdir(parents=True, exist_ok=True)

    # Require tools
    docsgen.tools.require()
    # Clone repo into temporary dir, if remote
    if args.repository.is_remote:
        docsgen.tools.clone(str(args.repository), reppath, branch=args.repository_branch)
    # Iterate over dirs and generate docfiles
    for directory in [""] + (args.repository_dirs or []):
        # Generate raw docfile
        rawpath = args.tmppath / (directory or args.repository.name + ".md")
        docsgen.tools.gomarkdoc(reppath / directory, rawpath)
        # Parse docfiles
        docfiles = parse(rawpath)
        # Set first docfile as index
        docfiles[0].is_index = True
        # Save docfiles
        for docfile in docfiles:
            docdir = args.outpath / args.prefix / directory
            docpath = docdir / (docfile.filename + ".md")
            print(f"Saving {docpath}")
            docdir.mkdir(parents=True, exist_ok=True)
            with docpath.open("w") as f:
                f.write(docfile.documentation)
