"""Inference-time helpers for serving forecasts."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Protocol

import pandas as pd

from .registry import ModelRegistry


class PredictiveModel(Protocol):
    """Protocol describing the inference interface."""

    def predict(self, features: pd.DataFrame) -> pd.Series:
        ...


@dataclass
class InferenceService:
    """Load trained models and produce predictions."""

    registry: ModelRegistry

    def load_model(self, name: str) -> PredictiveModel:
        """Retrieve the latest model instance."""
        raise NotImplementedError("Implement InferenceService.load_model")

    def predict(self, model_name: str, features: pd.DataFrame) -> pd.Series:
        """Generate predictions for the provided feature matrix."""
        raise NotImplementedError("Implement InferenceService.predict")

