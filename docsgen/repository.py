"""Repository wrapper."""
from dataclasses import dataclass


@dataclass
class Repository:
    """Repository wrapper."""

    path: str

    @property
    def name(self: "Repository") -> str:
        """Extract repository name."""
        tokens = self.path.split("/")
        last = tokens[-1]
        return last.replace(".git", "")
    
    @property
    def is_remote(self: "Repository") -> bool:
        """Determine repository is remote."""
        return self.path.startswith("https://") or self.path.startswith("git@")

    def __str__(self: "Repository") -> str:
        """Repository string representation."""
        return self.path
