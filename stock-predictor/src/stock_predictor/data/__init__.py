"""Data access and transformation entry points."""

from .adapters.yfinance_adapter import YahooFinanceAdapter
from .pipelines.ingestion_pipeline import DataIngestionPipeline

__all__ = ["YahooFinanceAdapter", "DataIngestionPipeline"]

