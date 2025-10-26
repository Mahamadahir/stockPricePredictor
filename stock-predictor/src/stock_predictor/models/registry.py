"""Model registry responsible for versioning trained artifacts."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Optional


@dataclass
class ModelRecord:
    """Metadata tracked per trained model artifact."""

    name: str
    version: str
    path: Path
    metrics: dict[str, float]


class ModelRegistry:
    """Handle registration and retrieval of trained models."""

    def __init__(self, base_dir: Path) -> None:
        self.base_dir = base_dir

    def register(self, record: ModelRecord) -> None:
        """Persist model metadata and artifacts."""
        raise NotImplementedError("Implement ModelRegistry.register")

    def latest(self, name: str) -> Optional[ModelRecord]:
        """Return the most recent model for the supplied name."""
        raise NotImplementedError("Implement ModelRegistry.latest")

    def list_models(self) -> list[ModelRecord]:
        """Return the catalog of models managed by the registry."""
        raise NotImplementedError("Implement ModelRegistry.list_models")

