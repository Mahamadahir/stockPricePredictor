"""API application factory and route declarations."""

from __future__ import annotations

from fastapi import FastAPI

from ..models.inference import InferenceService


def create_app(inference_service: InferenceService) -> FastAPI:
    """Create and configure the FastAPI application."""
    raise NotImplementedError("Implement create_app")

