"""Logging configuration helpers."""

from __future__ import annotations

import logging


def configure_logging(level: int = logging.INFO) -> None:
    """Configure the root logger used across the project."""
    raise NotImplementedError("Implement configure_logging")

