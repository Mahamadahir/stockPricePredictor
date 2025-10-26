"""Data quality checks for ingested market data."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Protocol

import pandas as pd


class DataValidator(Protocol):
    """Typed protocol for validation rules."""

    def validate(self, frame: pd.DataFrame) -> None:
        ...


@dataclass
class DataValidationPipeline:
    """Apply configured validation rules to incoming datasets."""

    rules: list[DataValidator]

    def run(self, frame: pd.DataFrame) -> None:
        """Execute the full validation suite."""
        raise NotImplementedError("Implement DataValidationPipeline.run")

