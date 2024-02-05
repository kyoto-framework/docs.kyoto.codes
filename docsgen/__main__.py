"""docsgen - Tool for generating markdown documentation from godoc."""
import argparse
import pathlib
import sys

import docsgen
import docsgen.repository


def main() -> None:
    """Tool cli entrypoint."""
    argparser = argparse.ArgumentParser()

    argparser.add_argument("-r", "--repository", required=True, help="Repository remote path")
    argparser.add_argument("-b", "--repository-branch", required=False, help="Repository branch")
    argparser.add_argument("-d", "--repository-dirs", required=False, help="Additional repository directories to include in the documentation (comma separated)")
    argparser.add_argument("-o", "--outpath", required=True, help="Output path (directory)")
    argparser.add_argument("-t", "--tmppath", help="Temporary path (directory)")
    argparser.add_argument("-p", "--prefix", help="URL prefix")

    args = argparser.parse_args()

    docsgen.generate(docsgen.Arguments(
        repository=docsgen.repository.Repository(args.repository),
        repository_branch=args.repository_branch,
        repository_dirs=(args.repository_dirs.split(",") if args.repository_dirs else None),
        outpath=pathlib.Path(args.outpath),
        tmppath=(pathlib.Path(args.tmppath) if args.tmppath else None),
        prefix=args.prefix,
    ))

if __name__ == "__main__":
    main()
