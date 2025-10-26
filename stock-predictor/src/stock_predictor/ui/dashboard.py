"""Dashboard scaffolding for visualizing signals and performance."""

from __future__ import annotations

import pandas as pd


def build_dashboard(predictions: pd.Series, backtest_summary: dict[str, float]) -> None:
    """Render an interactive dashboard for stakeholders."""
    raise NotImplementedError("Implement build_dashboard")

