"""Placeholder tests for feature engineering module."""

from stock_predictor.features import engineering


def test_feature_module_exists() -> None:
    """Sanity check that the engineering module is importable."""
    assert hasattr(engineering, "build_feature_matrix")

