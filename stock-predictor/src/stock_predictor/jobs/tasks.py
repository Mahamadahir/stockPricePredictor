"""Definition of recurring ETL and monitoring jobs."""

from __future__ import annotations

from datetime import time
from typing import Iterable, Protocol


class JobScheduler(Protocol):
    """Protocol for scheduling recurring tasks."""

    def cron(self, expression: str, func) -> None:
        ...


def schedule_jobs(scheduler: JobScheduler) -> None:
    """Register recurring project jobs with the provided scheduler."""
    raise NotImplementedError("Implement schedule_jobs")


def trading_day_close() -> time:
    """Return the canonical end-of-day time for job alignment."""
    raise NotImplementedError("Implement trading_day_close")


def registered_jobs() -> Iterable[str]:
    """Return a human-readable list of scheduled job identifiers."""
    raise NotImplementedError("Implement registered_jobs")

