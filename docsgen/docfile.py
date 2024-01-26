"""Resulting documentation file representation."""
from dataclasses import dataclass

from slugify import slugify


@dataclass
class Docfile:
    """Resulting documentation file representation."""

    title: str
    documentation: str
    is_index: bool = False

    @property
    def filename(self: "Docfile") -> str:
        """Generate filename from an existing title."""
        if self.is_index:
            return "index"
        return slugify(self.title)
