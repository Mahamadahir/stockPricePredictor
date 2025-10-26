"""Adapter for fetching historical market data from Yahoo Finance."""

from __future__ import annotations

from datetime import date, datetime
from typing import Iterable, Optional

import pandas as pd


class YahooFinanceAdapter:
    """Fetch price, volume, and fundamental data using yfinance."""

    def fetch_daily_bars(
        self,
        ticker: str,
        start: date,
        end: Optional[date] = None,
        auto_adjust: bool = True,
    ) -> pd.DataFrame:
        """Return daily OHLCV data for a ticker."""
        raise NotImplementedError("Implement YahooFinanceAdapter.fetch_daily_bars")

    def fetch_intraday_bars(
        self,
        ticker: str,
        interval: str,
        start: datetime,
        end: Optional[datetime] = None,
    ) -> pd.DataFrame:
        """Return intraday OHLCV data for a ticker."""
        raise NotImplementedError("Implement YahooFinanceAdapter.fetch_intraday_bars")

    def fetch_metadata(self, tickers: Iterable[str]) -> pd.DataFrame:
        """Return company metadata for a list of tickers."""
        raise NotImplementedError("Implement YahooFinanceAdapter.fetch_metadata")

