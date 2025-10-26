"""Feature construction logic for the stock predictor."""

from __future__ import annotations

import pandas as pd


def add_technical_indicators(frame: pd.DataFrame) -> pd.DataFrame:
    """Append rolling indicators and oscillators."""
    raise NotImplementedError("Implement add_technical_indicators")


def add_fundamental_factors(frame: pd.DataFrame) -> pd.DataFrame:
    """Join fundamental ratios and alternative data signals."""
    raise NotImplementedError("Implement add_fundamental_factors")


def build_feature_matrix(price_history: pd.DataFrame) -> pd.DataFrame:
    """Construct the full feature matrix consumed by the model."""
    raise NotImplementedError("Implement build_feature_matrix")

