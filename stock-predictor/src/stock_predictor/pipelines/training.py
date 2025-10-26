"""End-to-end training pipeline orchestrating data, features, and models."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Protocol

import pandas as pd

from ..features import build_feature_matrix
from ..models.training import ModelTrainer, TrainingArtifacts


class DatasetProvider(Protocol):
    """Protocol for retrieving training datasets."""

    def load_supervised_frame(self) -> tuple[pd.DataFrame, pd.Series]:
        ...


@dataclass
class TrainingPipeline:
    """Coordinate full training workflow."""

    data_provider: DatasetProvider
    trainer: ModelTrainer

    def run(self) -> TrainingArtifacts:
        """Execute the training lifecycle from raw data to registry."""
        raise NotImplementedError("Implement TrainingPipeline.run")

