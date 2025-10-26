"""End-to-end pipeline for ingesting raw market data."""

from __future__ import annotations

from dataclasses import dataclass
from datetime import date
from typing import Iterable, Protocol

import pandas as pd


class MarketDataAdapter(Protocol):
    """Typed protocol for market data adapters."""

    def fetch_daily_bars(self, ticker: str, start: date, end: date) -> pd.DataFrame:
        ...


class TimeseriesSink(Protocol):
    """Typed protocol for data stores."""

    def write_price_history(self, data: pd.DataFrame, table: str) -> None:
        ...


@dataclass
class DataIngestionPipeline:
    """Orchestrate raw data collection and persistence."""

    source: MarketDataAdapter
    sink: TimeseriesSink

    def collect(self, ticker: str, start: date, end: date) -> pd.DataFrame:
        """Fetch raw data from the external source."""
        raise NotImplementedError("Implement DataIngestionPipeline.collect")

    def persist(self, data: pd.DataFrame, ticker: str) -> None:
        """Store fetched data in the canonical repository."""
        raise NotImplementedError("Implement DataIngestionPipeline.persist")

    def run(self, tickers: Iterable[str], start: date, end: date) -> None:
        """Execute the ingestion workflow for a batch of tickers."""
        raise NotImplementedError("Implement DataIngestionPipeline.run")

