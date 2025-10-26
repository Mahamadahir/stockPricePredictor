"""Utility functions for computing evaluation metrics."""

from __future__ import annotations

import pandas as pd


def compute_forecast_metrics(predictions: pd.Series, actuals: pd.Series) -> dict[str, float]:
    """Return core performance metrics such as RMSE and MAPE."""
    raise NotImplementedError("Implement compute_forecast_metrics")

