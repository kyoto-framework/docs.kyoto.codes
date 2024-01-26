"""External tools wrappers, used by docsgen."""
import os
import pathlib
import shutil
import sys

# Required system tools list
required = ["git", "gomarkdoc"]


def require() -> None:
    """Check the availability of utilities. If something is missing, exit with -1 code."""
    for tool in required:
        if not shutil.which(tool):
            sys.stderr.write(f"{tool} is missing") # type: ignore
            sys.exit(-1)


def clone(repository: str, dstpath: pathlib.Path, branch: str | None = None) -> None:
    """Clone remote repository into local directory."""
    cmd = f"git clone {repository} {dstpath}"
    print(cmd)
    os.system(cmd)
    if branch:
        cmd = f"cd {dstpath} && git fetch && git switch {branch}"
        print(cmd)
        os.system(cmd)


def clean(dstpath: pathlib.Path) -> None:
    """Cleanup destination path."""
    cmd = f"rm -rf {dstpath}"
    print(cmd)
    os.system(cmd)


def gomarkdoc(pkgpath: pathlib.Path, outpath: pathlib.Path) -> None:
    """Use gomarkdoc to generate raw markdown documentation for provided package path."""
    cmd = f"gomarkdoc {pkgpath} > {outpath}"
    print(cmd)
    os.system(cmd)
