"""Application server bootstrap for API and background workers."""

from __future__ import annotations

from fastapi import FastAPI

from stock_predictor.api import create_app
from stock_predictor.models.inference import InferenceService


def init_server(inference_service: InferenceService) -> FastAPI:
    """Instantiate and return the FastAPI server."""
    raise NotImplementedError("Implement init_server")

