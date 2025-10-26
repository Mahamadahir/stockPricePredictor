"""Pydantic schemas for request and response payloads."""

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
from typing import Sequence


@dataclass
class PredictionRequest:
    """Payload for requesting forecasts."""

    model_name: str
    features: Sequence[float]
    timestamp: datetime


@dataclass
class PredictionResponse:
    """Payload returned after generating predictions."""

    model_name: str
    prediction: float
    confidence: float

