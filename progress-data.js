window.progressData = {
  "generatedAt": "2026-01-31T18:00:00Z",
  "release": "Spring 2026 Production Launch",
  "features": [
    {
      "id": "feature-foundations",
      "title": "Week 1 - Foundations & Tooling",
      "start": "2026-02-02",
      "due": "2026-02-08",
      "state": "in-progress",
      "methods": [
        {
          "id": "method-architecture-blueprint",
          "title": "docs/architecture.md baseline blueprint",
          "start": "2026-02-02",
          "due": "2026-02-04",
          "state": "complete",
          "tests": [
            {
              "id": "test-architecture-docs",
              "title": "tests/docs/test_architecture_links.py::test_blueprint_references",
              "start": "2026-02-02",
              "due": "2026-02-04",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-devcontainer",
          "title": "infra/devcontainer + pre-commit automation",
          "start": "2026-02-02",
          "due": "2026-02-06",
          "state": "in-progress",
          "tests": [
            {
              "id": "test-devcontainer-smoke",
              "title": "tests/infra/test_devcontainer.py::test_image_builds",
              "start": "2026-02-03",
              "due": "2026-02-06",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-ci-baseline",
          "title": ".github/workflows/ci.yml baseline lint + tests",
          "start": "2026-02-04",
          "due": "2026-02-08",
          "state": "pending",
          "tests": [
            {
              "id": "test-ci-config",
              "title": "tests/infra/test_ci_config.py::test_required_jobs",
              "start": "2026-02-05",
              "due": "2026-02-08",
              "state": "pending"
            }
          ]
        }
      ]
    },
    {
      "id": "feature-data-ingestion",
      "title": "Week 2 - Data Ingestion & Storage",
      "start": "2026-02-09",
      "due": "2026-02-15",
      "state": "pending",
      "methods": [
        {
          "id": "method-yahoo-daily",
          "title": "stock_predictor.data.adapters.YahooFinanceAdapter.fetch_daily_bars",
          "start": "2026-02-09",
          "due": "2026-02-11",
          "state": "in-progress",
          "tests": [
            {
              "id": "test-yahoo-daily",
              "title": "tests/data/test_yahoo_adapter.py::test_fetch_daily_bars",
              "start": "2026-02-10",
              "due": "2026-02-11",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-yahoo-intraday",
          "title": "stock_predictor.data.adapters.YahooFinanceAdapter.fetch_intraday_bars",
          "start": "2026-02-10",
          "due": "2026-02-12",
          "state": "pending",
          "tests": [
            {
              "id": "test-yahoo-intraday",
              "title": "tests/data/test_yahoo_adapter.py::test_fetch_intraday_bars",
              "start": "2026-02-11",
              "due": "2026-02-12",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-yahoo-metadata",
          "title": "stock_predictor.data.adapters.YahooFinanceAdapter.fetch_metadata",
          "start": "2026-02-10",
          "due": "2026-02-12",
          "state": "pending",
          "tests": [
            {
              "id": "test-yahoo-metadata",
              "title": "tests/data/test_yahoo_adapter.py::test_fetch_metadata",
              "start": "2026-02-11",
              "due": "2026-02-12",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-timeseries-write",
          "title": "stock_predictor.data.adapters.TimeseriesDatabaseAdapter.write_price_history",
          "start": "2026-02-11",
          "due": "2026-02-13",
          "state": "in-progress",
          "tests": [
            {
              "id": "test-timeseries-write",
              "title": "tests/data/test_timeseries_adapter.py::test_write_price_history",
              "start": "2026-02-12",
              "due": "2026-02-13",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-timeseries-load",
          "title": "stock_predictor.data.adapters.TimeseriesDatabaseAdapter.load_price_history",
          "start": "2026-02-11",
          "due": "2026-02-14",
          "state": "blocked",
          "tests": [
            {
              "id": "test-timeseries-load",
              "title": "tests/data/test_timeseries_adapter.py::test_load_price_history",
              "start": "2026-02-13",
              "due": "2026-02-14",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-timeseries-snapshot",
          "title": "stock_predictor.data.adapters.TimeseriesDatabaseAdapter.dump_snapshot",
          "start": "2026-02-12",
          "due": "2026-02-14",
          "state": "pending",
          "tests": [
            {
              "id": "test-timeseries-snapshot",
              "title": "tests/data/test_timeseries_adapter.py::test_dump_snapshot",
              "start": "2026-02-13",
              "due": "2026-02-14",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-ingestion-collect",
          "title": "stock_predictor.data.pipelines.DataIngestionPipeline.collect",
          "start": "2026-02-12",
          "due": "2026-02-14",
          "state": "pending",
          "tests": [
            {
              "id": "test-ingestion-collect",
              "title": "tests/data/test_ingestion_pipeline.py::test_collect",
              "start": "2026-02-13",
              "due": "2026-02-14",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-ingestion-persist",
          "title": "stock_predictor.data.pipelines.DataIngestionPipeline.persist",
          "start": "2026-02-13",
          "due": "2026-02-15",
          "state": "pending",
          "tests": [
            {
              "id": "test-ingestion-persist",
              "title": "tests/data/test_ingestion_pipeline.py::test_persist",
              "start": "2026-02-14",
              "due": "2026-02-15",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-ingestion-run",
          "title": "stock_predictor.data.pipelines.DataIngestionPipeline.run",
          "start": "2026-02-13",
          "due": "2026-02-15",
          "state": "pending",
          "tests": [
            {
              "id": "test-ingestion-run",
              "title": "tests/data/test_ingestion_pipeline.py::test_run",
              "start": "2026-02-14",
              "due": "2026-02-15",
              "state": "pending"
            }
          ]
        }
      ]
    },
    {
      "id": "feature-data-validation",
      "title": "Week 3 - Data Validation & Quality Gates",
      "start": "2026-02-16",
      "due": "2026-02-22",
      "state": "pending",
      "methods": [
        {
          "id": "method-validation-run",
          "title": "stock_predictor.data.pipelines.DataValidationPipeline.run",
          "start": "2026-02-16",
          "due": "2026-02-19",
          "state": "pending",
          "tests": [
            {
              "id": "test-validation-run",
              "title": "tests/data/test_validation_pipeline.py::test_run_happy_path",
              "start": "2026-02-17",
              "due": "2026-02-19",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-logging-config",
          "title": "stock_predictor.utils.logging.configure_logging",
          "start": "2026-02-17",
          "due": "2026-02-20",
          "state": "pending",
          "tests": [
            {
              "id": "test-logging-config",
              "title": "tests/utils/test_logging.py::test_structured_handlers",
              "start": "2026-02-18",
              "due": "2026-02-20",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-trading-close",
          "title": "stock_predictor.jobs.tasks.trading_day_close",
          "start": "2026-02-18",
          "due": "2026-02-22",
          "state": "pending",
          "tests": [
            {
              "id": "test-trading-close",
              "title": "tests/jobs/test_tasks.py::test_trading_day_close",
              "start": "2026-02-19",
              "due": "2026-02-22",
              "state": "pending"
            }
          ]
        }
      ]
    },
    {
      "id": "feature-feature-engineering",
      "title": "Week 4 - Feature Engineering & Selection",
      "start": "2026-02-23",
      "due": "2026-03-01",
      "state": "pending",
      "methods": [
        {
          "id": "method-add-technical-indicators",
          "title": "stock_predictor.features.engineering.add_technical_indicators",
          "start": "2026-02-23",
          "due": "2026-02-25",
          "state": "pending",
          "tests": [
            {
              "id": "test-add-technical-indicators",
              "title": "tests/features/test_engineering.py::test_add_technical_indicators",
              "start": "2026-02-24",
              "due": "2026-02-25",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-add-fundamental-factors",
          "title": "stock_predictor.features.engineering.add_fundamental_factors",
          "start": "2026-02-24",
          "due": "2026-02-26",
          "state": "pending",
          "tests": [
            {
              "id": "test-add-fundamental-factors",
              "title": "tests/features/test_engineering.py::test_add_fundamental_factors",
              "start": "2026-02-25",
              "due": "2026-02-26",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-build-feature-matrix",
          "title": "stock_predictor.features.engineering.build_feature_matrix",
          "start": "2026-02-25",
          "due": "2026-02-28",
          "state": "pending",
          "tests": [
            {
              "id": "test-build-feature-matrix",
              "title": "tests/features/test_engineering.py::test_build_feature_matrix",
              "start": "2026-02-26",
              "due": "2026-02-28",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-rank-features",
          "title": "stock_predictor.features.selection.rank_features_by_importance",
          "start": "2026-02-26",
          "due": "2026-02-28",
          "state": "pending",
          "tests": [
            {
              "id": "test-rank-features",
              "title": "tests/features/test_selection.py::test_rank_features_by_importance",
              "start": "2026-02-27",
              "due": "2026-02-28",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-select-feature-view",
          "title": "stock_predictor.features.selection.select_feature_view",
          "start": "2026-02-27",
          "due": "2026-03-01",
          "state": "pending",
          "tests": [
            {
              "id": "test-select-feature-view",
              "title": "tests/features/test_selection.py::test_select_feature_view",
              "start": "2026-02-28",
              "due": "2026-03-01",
              "state": "pending"
            }
          ]
        }
      ]
    },
    {
      "id": "feature-model-training",
      "title": "Week 5 - Model Training & Registry",
      "start": "2026-03-02",
      "due": "2026-03-08",
      "state": "pending",
      "methods": [
        {
          "id": "method-trainer-train",
          "title": "stock_predictor.models.training.ModelTrainer.train",
          "start": "2026-03-02",
          "due": "2026-03-04",
          "state": "pending",
          "tests": [
            {
              "id": "test-trainer-train",
              "title": "tests/models/test_trainer.py::test_train_returns_artifacts",
              "start": "2026-03-03",
              "due": "2026-03-04",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-trainer-backtest",
          "title": "stock_predictor.models.training.ModelTrainer.run_backtest",
          "start": "2026-03-03",
          "due": "2026-03-05",
          "state": "pending",
          "tests": [
            {
              "id": "test-trainer-backtest",
              "title": "tests/models/test_trainer.py::test_run_backtest",
              "start": "2026-03-04",
              "due": "2026-03-05",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-trainer-save",
          "title": "stock_predictor.models.training.ModelTrainer.save",
          "start": "2026-03-04",
          "due": "2026-03-06",
          "state": "pending",
          "tests": [
            {
              "id": "test-trainer-save",
              "title": "tests/models/test_trainer.py::test_save_artifacts",
              "start": "2026-03-05",
              "due": "2026-03-06",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-registry-register",
          "title": "stock_predictor.models.registry.ModelRegistry.register",
          "start": "2026-03-05",
          "due": "2026-03-07",
          "state": "pending",
          "tests": [
            {
              "id": "test-registry-register",
              "title": "tests/models/test_registry.py::test_register_model",
              "start": "2026-03-06",
              "due": "2026-03-07",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-registry-latest",
          "title": "stock_predictor.models.registry.ModelRegistry.latest",
          "start": "2026-03-06",
          "due": "2026-03-08",
          "state": "pending",
          "tests": [
            {
              "id": "test-registry-latest",
              "title": "tests/models/test_registry.py::test_latest_model",
              "start": "2026-03-07",
              "due": "2026-03-08",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-registry-list",
          "title": "stock_predictor.models.registry.ModelRegistry.list_models",
          "start": "2026-03-06",
          "due": "2026-03-08",
          "state": "pending",
          "tests": [
            {
              "id": "test-registry-list",
              "title": "tests/models/test_registry.py::test_list_models",
              "start": "2026-03-07",
              "due": "2026-03-08",
              "state": "pending"
            }
          ]
        }
      ]
    },
    {
      "id": "feature-evaluation-backtesting",
      "title": "Week 6 - Evaluation & Backtesting",
      "start": "2026-03-09",
      "due": "2026-03-15",
      "state": "pending",
      "methods": [
        {
          "id": "method-compute-metrics",
          "title": "stock_predictor.evaluation.metrics.compute_forecast_metrics",
          "start": "2026-03-09",
          "due": "2026-03-12",
          "state": "pending",
          "tests": [
            {
              "id": "test-compute-metrics",
              "title": "tests/evaluation/test_metrics.py::test_compute_forecast_metrics",
              "start": "2026-03-10",
              "due": "2026-03-12",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-backtester-run",
          "title": "stock_predictor.evaluation.backtesting.Backtester.run",
          "start": "2026-03-11",
          "due": "2026-03-15",
          "state": "pending",
          "tests": [
            {
              "id": "test-backtester-run",
              "title": "tests/evaluation/test_backtester.py::test_run_scenario",
              "start": "2026-03-12",
              "due": "2026-03-15",
              "state": "pending"
            }
          ]
        }
      ]
    },
    {
      "id": "feature-serving-pipelines",
      "title": "Week 7 - Serving & Pipelines",
      "start": "2026-03-16",
      "due": "2026-03-22",
      "state": "pending",
      "methods": [
        {
          "id": "method-inference-load",
          "title": "stock_predictor.models.inference.InferenceService.load_model",
          "start": "2026-03-16",
          "due": "2026-03-18",
          "state": "pending",
          "tests": [
            {
              "id": "test-inference-load",
              "title": "tests/models/test_inference_service.py::test_load_model",
              "start": "2026-03-17",
              "due": "2026-03-18",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-inference-predict",
          "title": "stock_predictor.models.inference.InferenceService.predict",
          "start": "2026-03-17",
          "due": "2026-03-20",
          "state": "pending",
          "tests": [
            {
              "id": "test-inference-predict",
              "title": "tests/models/test_inference_service.py::test_predict_shape",
              "start": "2026-03-18",
              "due": "2026-03-20",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-training-pipeline",
          "title": "stock_predictor.pipelines.training.TrainingPipeline.run",
          "start": "2026-03-18",
          "due": "2026-03-21",
          "state": "pending",
          "tests": [
            {
              "id": "test-training-pipeline",
              "title": "tests/pipelines/test_training_pipeline.py::test_run",
              "start": "2026-03-19",
              "due": "2026-03-21",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-inference-pipeline",
          "title": "stock_predictor.pipelines.inference.InferencePipeline.run",
          "start": "2026-03-18",
          "due": "2026-03-21",
          "state": "pending",
          "tests": [
            {
              "id": "test-inference-pipeline",
              "title": "tests/pipelines/test_inference_pipeline.py::test_run",
              "start": "2026-03-19",
              "due": "2026-03-21",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-api-create-app",
          "title": "stock_predictor.api.routes.create_app",
          "start": "2026-03-19",
          "due": "2026-03-22",
          "state": "pending",
          "tests": [
            {
              "id": "test-api-create-app",
              "title": "tests/api/test_routes.py::test_create_app",
              "start": "2026-03-20",
              "due": "2026-03-22",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-server-init",
          "title": "stock_predictor.server.init_server",
          "start": "2026-03-19",
          "due": "2026-03-22",
          "state": "pending",
          "tests": [
            {
              "id": "test-server-init",
              "title": "tests/server/test_server.py::test_init_server",
              "start": "2026-03-20",
              "due": "2026-03-22",
              "state": "pending"
            }
          ]
        }
      ]
    },
    {
      "id": "feature-interfaces-automation",
      "title": "Week 8 - Interfaces & Automation",
      "start": "2026-03-23",
      "due": "2026-03-29",
      "state": "pending",
      "methods": [
        {
          "id": "method-dashboard-build",
          "title": "stock_predictor.ui.dashboard.build_dashboard",
          "start": "2026-03-23",
          "due": "2026-03-26",
          "state": "pending",
          "tests": [
            {
              "id": "test-dashboard-build",
              "title": "tests/ui/test_dashboard.py::test_build_dashboard",
              "start": "2026-03-24",
              "due": "2026-03-26",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-schedule-jobs",
          "title": "stock_predictor.jobs.tasks.schedule_jobs",
          "start": "2026-03-24",
          "due": "2026-03-27",
          "state": "pending",
          "tests": [
            {
              "id": "test-schedule-jobs",
              "title": "tests/jobs/test_tasks.py::test_schedule_jobs",
              "start": "2026-03-25",
              "due": "2026-03-27",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-registered-jobs",
          "title": "stock_predictor.jobs.tasks.registered_jobs",
          "start": "2026-03-24",
          "due": "2026-03-28",
          "state": "pending",
          "tests": [
            {
              "id": "test-registered-jobs",
              "title": "tests/jobs/test_tasks.py::test_registered_jobs",
              "start": "2026-03-25",
              "due": "2026-03-28",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-cli-build-parser",
          "title": "stock_predictor.cli.build_parser",
          "start": "2026-03-25",
          "due": "2026-03-28",
          "state": "pending",
          "tests": [
            {
              "id": "test-cli-build-parser",
              "title": "tests/test_cli.py::test_build_parser",
              "start": "2026-03-26",
              "due": "2026-03-28",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-cli-main",
          "title": "stock_predictor.cli.main",
          "start": "2026-03-26",
          "due": "2026-03-29",
          "state": "pending",
          "tests": [
            {
              "id": "test-cli-main",
              "title": "tests/test_cli.py::test_main_entrypoint",
              "start": "2026-03-27",
              "due": "2026-03-29",
              "state": "pending"
            }
          ]
        }
      ]
    },
    {
      "id": "feature-hardening-monitoring",
      "title": "Weeks 9-10 - Hardening & Monitoring",
      "start": "2026-03-30",
      "due": "2026-04-12",
      "state": "pending",
      "methods": [
        {
          "id": "method-integration-suite",
          "title": "tests/integration/test_end_to_end.py coverage",
          "start": "2026-03-30",
          "due": "2026-04-04",
          "state": "pending",
          "tests": [
            {
              "id": "test-integration-suite",
              "title": "tests/integration/test_end_to_end.py::test_daily_forecast_flow",
              "start": "2026-03-31",
              "due": "2026-04-04",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-load-testing",
          "title": "tests/performance/test_load.py runner",
          "start": "2026-04-03",
          "due": "2026-04-07",
          "state": "pending",
          "tests": [
            {
              "id": "test-load-testing",
              "title": "tests/performance/test_load.py::test_peak_rps",
              "start": "2026-04-04",
              "due": "2026-04-07",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-monitoring-alerts",
          "title": "stock_predictor.observability.alerts.configure_channels",
          "start": "2026-04-05",
          "due": "2026-04-10",
          "state": "pending",
          "tests": [
            {
              "id": "test-monitoring-alerts",
              "title": "tests/observability/test_alerts.py::test_configure_channels",
              "start": "2026-04-06",
              "due": "2026-04-10",
              "state": "pending"
            }
          ]
        },
        {
          "id": "method-launch-runbook",
          "title": "docs/runbook.md launch readiness",
          "start": "2026-04-06",
          "due": "2026-04-12",
          "state": "pending",
          "tests": [
            {
              "id": "test-launch-runbook",
              "title": "tests/docs/test_runbook.py::test_incident_checklist",
              "start": "2026-04-07",
              "due": "2026-04-12",
              "state": "pending"
            }
          ]
        }
      ]
    }
  ]
};
