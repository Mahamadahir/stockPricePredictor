"""Backtesting utilities for strategy evaluation."""

from __future__ import annotations

from dataclasses import dataclass

import pandas as pd


@dataclass
class BacktestResult:
    """Outcome of a backtest run."""

    equity_curve: pd.Series
    summary: dict[str, float]


@dataclass
class Backtester:
    """Execute walk-forward or rolling-window backtests."""

    def run(
        self,
        predictions: pd.Series,
        actuals: pd.Series,
        transaction_cost_bps: float,
    ) -> BacktestResult:
        """Evaluate signal quality using a trading simulation."""
        raise NotImplementedError("Implement Backtester.run")

