"""Command-line entrypoints for orchestrating project workflows."""

from __future__ import annotations

import argparse


def build_parser() -> argparse.ArgumentParser:
    """Return the root CLI parser."""
    raise NotImplementedError("Implement build_parser")


def main(argv: list[str] | None = None) -> int:
    """Parse CLI arguments and dispatch to the requested command."""
    raise NotImplementedError("Implement cli.main")

