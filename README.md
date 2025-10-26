# Stock Price Predictor

This repository now focuses exclusively on building a production-ready stock price prediction platform. The goal is to move from exploratory notebooks to a reliable ML system with automated ingestion, feature engineering, model training, deployment, and monitoring.

## Project Vision

- Provide a repeatable data pipeline for equities, fundamentals, and alternative datasets.
- Experiment with multiple modeling approaches (tree-based, deep learning, probabilistic) within a governed registry.
- Serve forecasts via an API, drive an analyst dashboard, and maintain feedback loops for continuous improvement.

## Ten-Week Roadmap (Planning Complete)

| Week | Theme | Key Outcomes |
| ---- | ----- | ------------ |
| 1 | Foundations | Finalize architecture, configure repo tooling, document environments. |
| 2 | Data Ingestion | Implement Yahoo Finance adapter and raw data ingestion pipeline. |
| 3 | Data Quality | Add validation rules, schema checks, and persistence strategy. |
| 4 | Feature Layer | Implement technical + fundamental feature engineering and storage. |
| 5 | Modeling | Stand up baseline models, training orchestrator, and registry writes. |
| 6 | Backtesting | Build rolling evaluation, risk metrics, and comparison reports. |
| 7 | Serving | Implement inference service, REST API, and batch scoring pipeline. |
| 8 | UX & Monitoring | Ship Streamlit dashboard, logging, alerting, and health checks. |
| 9 | Automation | Add job scheduler, CI pipelines, and data/model cron tasks. |
| 10 | Hardening | Execute integration tests, load testing, and launch readiness review. |

## Feature Method Checklist

Click to expand each feature domain and see the methods that must be implemented.

<details>
  <summary>Data Ingestion &amp; Storage</summary>

- [ ] `stock_predictor.data.adapters.YahooFinanceAdapter.fetch_daily_bars`
- [ ] `stock_predictor.data.adapters.YahooFinanceAdapter.fetch_intraday_bars`
- [ ] `stock_predictor.data.adapters.YahooFinanceAdapter.fetch_metadata`
- [ ] `stock_predictor.data.adapters.TimeseriesDatabaseAdapter.write_price_history`
- [ ] `stock_predictor.data.adapters.TimeseriesDatabaseAdapter.load_price_history`
- [ ] `stock_predictor.data.adapters.TimeseriesDatabaseAdapter.dump_snapshot`
- [ ] `stock_predictor.data.pipelines.DataIngestionPipeline.collect`
- [ ] `stock_predictor.data.pipelines.DataIngestionPipeline.persist`
- [ ] `stock_predictor.data.pipelines.DataIngestionPipeline.run`
</details>

<details>
  <summary>Data Validation</summary>

- [ ] `stock_predictor.data.pipelines.DataValidationPipeline.run`
- [ ] `stock_predictor.utils.logging.configure_logging`
- [ ] `stock_predictor.jobs.tasks.trading_day_close`
</details>

<details>
  <summary>Feature Engineering &amp; Selection</summary>

- [ ] `stock_predictor.features.engineering.add_technical_indicators`
- [ ] `stock_predictor.features.engineering.add_fundamental_factors`
- [ ] `stock_predictor.features.engineering.build_feature_matrix`
- [ ] `stock_predictor.features.selection.rank_features_by_importance`
- [ ] `stock_predictor.features.selection.select_feature_view`
- [ ] `tests/features/test_engineering.py`
</details>

<details>
  <summary>Model Training &amp; Registry</summary>

- [ ] `stock_predictor.models.training.ModelTrainer.train`
- [ ] `stock_predictor.models.training.ModelTrainer.run_backtest`
- [ ] `stock_predictor.models.training.ModelTrainer.save`
- [ ] `stock_predictor.models.registry.ModelRegistry.register`
- [ ] `stock_predictor.models.registry.ModelRegistry.latest`
- [ ] `stock_predictor.models.registry.ModelRegistry.list_models`
</details>

<details>
  <summary>Evaluation &amp; Backtesting</summary>

- [ ] `stock_predictor.evaluation.metrics.compute_forecast_metrics`
- [ ] `stock_predictor.evaluation.backtesting.Backtester.run`
</details>

<details>
  <summary>Serving &amp; Pipelines</summary>

- [ ] `stock_predictor.models.inference.InferenceService.load_model`
- [ ] `stock_predictor.models.inference.InferenceService.predict`
- [ ] `stock_predictor.pipelines.training.TrainingPipeline.run`
- [ ] `stock_predictor.pipelines.inference.InferencePipeline.run`
- [ ] `stock_predictor.api.routes.create_app`
- [ ] `stock_predictor.server.init_server`
</details>

<details>
  <summary>Interfaces &amp; Automation</summary>

- [ ] `stock_predictor.ui.dashboard.build_dashboard`
- [ ] `stock_predictor.jobs.tasks.schedule_jobs`
- [ ] `stock_predictor.jobs.tasks.registered_jobs`
- [ ] `stock_predictor.cli.build_parser`
- [ ] `stock_predictor.cli.main`
</details>

## Repository Skeleton

```text
stock-predictor/
|-- data/
|   |-- raw/
|   |-- processed/
|   `-- feature_store/
|-- notebooks/
|   `-- prediction_lstm.ipynb
|-- src/
|   |-- cli.py
|   |-- server.py
|   `-- stock_predictor/
|       |-- api/
|       |-- config/
|       |-- data/
|       |-- evaluation/
|       |-- features/
|       |-- jobs/
|       |-- models/
|       |-- pipelines/
|       |-- ui/
|       `-- utils/
|-- tests/
|   `-- test_placeholder.py
|-- requirements.txt
`-- README.md
```

Each module contains documented method stubs that match the feature checklist above, making it straightforward to assign work units, track completion, and plug into CI/CD as the implementations arrive.

## Testing Expectations

- Pair every implemented method with unit tests under `tests/`, expanding suites per package (e.g., `tests/features/test_engineering.py`, `tests/data/test_ingestion_pipeline.py`).
- Introduce integration tests that exercise end-to-end workflows once pipelines stabilize.
- Maintain high coverage thresholds and run the full suite before merging changes.

## Next Steps

1. Containerize the application with Docker to standardize environments across contributors.
2. Implement methods according to the roadmap milestones, adding unit tests in parallel for every module.
3. Expand integration and end-to-end tests as features solidify, then wire up continuous integration to execute linting, tests, and type checks.
