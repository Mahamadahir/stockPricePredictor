"""Inference pipeline for generating real-time or batch forecasts."""

from __future__ import annotations

from dataclasses import dataclass

import pandas as pd

from ..models.inference import InferenceService


@dataclass
class InferencePipeline:
    """Orchestrate loading features and serving predictions."""

    inference_service: InferenceService

    def run(self, model_name: str, feature_view: pd.DataFrame) -> pd.Series:
        """Produce predictions using the requested model and feature view."""
        raise NotImplementedError("Implement InferencePipeline.run")

