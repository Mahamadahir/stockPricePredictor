"""IO helpers for reading and writing common artifact formats."""

from __future__ import annotations

from pathlib import Path

import pandas as pd


def load_parquet(path: Path) -> pd.DataFrame:
    """Load a parquet file into a DataFrame."""
    raise NotImplementedError("Implement load_parquet")


def save_parquet(frame: pd.DataFrame, path: Path) -> None:
    """Persist a DataFrame as parquet."""
    raise NotImplementedError("Implement save_parquet")

