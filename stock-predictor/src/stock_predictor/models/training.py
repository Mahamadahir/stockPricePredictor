"""Model training orchestration."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Protocol

import pandas as pd

from .registry import ModelRecord, ModelRegistry


class Estimator(Protocol):
    """Protocol for estimators compatible with scikit-learn style APIs."""

    def fit(self, x_train, y_train) -> "Estimator":
        ...

    def predict(self, x_test) -> pd.Series:
        ...


@dataclass
class TrainingArtifacts:
    """Bundle of artifacts produced during training."""

    model_record: ModelRecord
    metrics: dict[str, float]


@dataclass
class ModelTrainer:
    """Coordinate data preparation, model fitting, and evaluation."""

    registry: ModelRegistry
    estimator: Estimator

    def train(self, features: pd.DataFrame, target: pd.Series) -> TrainingArtifacts:
        """Fit the estimator and package artifacts for persistence."""
        raise NotImplementedError("Implement ModelTrainer.train")

    def run_backtest(self, features: pd.DataFrame, target: pd.Series) -> dict[str, float]:
        """Compute offline validation metrics across rolling windows."""
        raise NotImplementedError("Implement ModelTrainer.run_backtest")

    def save(self, artifacts: TrainingArtifacts) -> None:
        """Persist the trained model via the registry."""
        raise NotImplementedError("Implement ModelTrainer.save")

