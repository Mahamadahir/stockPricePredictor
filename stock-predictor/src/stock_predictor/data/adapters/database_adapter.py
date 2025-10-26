"""Adapter for persisting and loading time-series data from long-term storage."""

from __future__ import annotations

from pathlib import Path
from typing import Iterable

import pandas as pd


class TimeseriesDatabaseAdapter:
    """Interact with the project's analytical data store."""

    def __init__(self, connection_uri: str) -> None:
        self.connection_uri = connection_uri

    def write_price_history(self, data: pd.DataFrame, table: str) -> None:
        """Persist OHLCV data into a database table."""
        raise NotImplementedError("Implement TimeseriesDatabaseAdapter.write_price_history")

    def load_price_history(self, ticker: str, table: str) -> pd.DataFrame:
        """Load persisted OHLCV data for a ticker."""
        raise NotImplementedError("Implement TimeseriesDatabaseAdapter.load_price_history")

    def dump_snapshot(self, output_path: Path, tables: Iterable[str]) -> None:
        """Export a collection of tables to disk for reproducibility."""
        raise NotImplementedError("Implement TimeseriesDatabaseAdapter.dump_snapshot")

