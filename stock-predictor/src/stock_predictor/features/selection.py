"""Feature selection routines."""

from __future__ import annotations

import pandas as pd


def rank_features_by_importance(
    feature_matrix: pd.DataFrame, target: pd.Series
) -> pd.DataFrame:
    """Score candidate features using model-based importance metrics."""
    raise NotImplementedError("Implement rank_features_by_importance")


def select_feature_view(feature_matrix: pd.DataFrame, k: int) -> pd.DataFrame:
    """Return the top-k features for downstream pipelines."""
    raise NotImplementedError("Implement select_feature_view")

