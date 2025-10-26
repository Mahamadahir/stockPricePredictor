"""Runtime settings and configuration loading helpers."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Optional


@dataclass
class Settings:
    """Application-wide configuration values."""

    data_dir: Path
    model_registry_dir: Path
    feature_store_dir: Path
    default_ticker: str = "SPY"
    environment: str = "development"
    api_host: str = "127.0.0.1"
    api_port: int = 8000


def load_settings(config_path: Optional[Path] = None) -> Settings:
    """Load settings from a configuration source or return defaults."""

    base_dir = config_path or Path.cwd() / "artifacts"
    return Settings(
        data_dir=base_dir / "data",
        model_registry_dir=base_dir / "models",
        feature_store_dir=base_dir / "features",
    )

