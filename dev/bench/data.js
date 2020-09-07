window.BENCHMARK_DATA = {
  "lastUpdate": 1599498006138,
  "repoUrl": "https://github.com/MoBlaa/irc_rust",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "moblaa@pm.me",
            "name": "moblaa"
          },
          "committer": {
            "email": "moblaa@pm.me",
            "name": "moblaa"
          },
          "distinct": true,
          "id": "9cf8e9829f1c1e5fa86141a4e464f7ab6d87d643",
          "message": "added personal token to benchmark uploads",
          "timestamp": "2020-09-07T18:49:28+02:00",
          "tree_id": "47c2c603c9b8437059ee1bd5c4048b839a2458dd",
          "url": "https://github.com/MoBlaa/irc_rust/commit/9cf8e9829f1c1e5fa86141a4e464f7ab6d87d643"
        },
        "date": 1599497466782,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench__bench_params_create",
            "value": 283,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench__bench_params_iter",
            "value": 2559,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench__bench_parse",
            "value": 1168,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench__bench_tag_create",
            "value": 1764,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench__bench_tag_index",
            "value": 152,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "moblaa@pm.me",
            "name": "moblaa"
          },
          "committer": {
            "email": "moblaa@pm.me",
            "name": "moblaa"
          },
          "distinct": true,
          "id": "75a3b69de98c887fab5b33c928bda8c610fa5f57",
          "message": "only running test coverage for irc-rust package",
          "timestamp": "2020-09-07T18:52:58+02:00",
          "tree_id": "f7801e91fc061b0675d01797d6ceefcc4a238d4a",
          "url": "https://github.com/MoBlaa/irc_rust/commit/75a3b69de98c887fab5b33c928bda8c610fa5f57"
        },
        "date": 1599497670262,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench__bench_params_create",
            "value": 240,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench__bench_params_iter",
            "value": 2084,
            "range": "± 588",
            "unit": "ns/iter"
          },
          {
            "name": "bench__bench_parse",
            "value": 1056,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench__bench_tag_create",
            "value": 1497,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench__bench_tag_index",
            "value": 136,
            "range": "± 18",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mo.blaa@pm.me",
            "name": "MoBlaa",
            "username": "MoBlaa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07084d3b163a9f6ff257aac02612778e0fd90eac",
          "message": "Setup Github actions (#1)\n\n* converted project to workspace to extract benchmark code from library to enable building for stable\r\n\r\n* added workflow to build on nightly, stable and perform benchmarks\r\n\r\n* fixed clippy lints\r\n\r\n* reformatted everything with rustfmt\r\n\r\n* reformatted everything with rustfmt\r\n\r\n* using single workflow which includes build, check, fmt, clippy, test and benchmarks\r\n\r\n* only building on push\r\n\r\n* fixed typos and removed pull_request target\r\n\r\n* only building irc-rust\r\n\r\n* using 1.40.0 as MSRV and updated install instructions in readme\r\n\r\n* running github-actions check and clippy only for irc-rust project\r\n\r\n* added missing parallel-finished arg for grcov-finalize\r\n\r\n* only testing on nightly so benchmarks are also counted\r\n\r\n* removed panic_abort flags for tests with coverage as they fail if benchmarks are present too\r\n\r\n* enabling lto for benchmarks\r\n\r\n* added coveralls test coverage\r\n\r\n* added workaround to replace double colons in github-action\r\n\r\n* using underscores instead of spaces for benchmark result workaround\r\n\r\n* added personal token to benchmark uploads\r\n\r\n* only running test coverage for irc-rust package\r\n\r\nCo-authored-by: moblaa <moblaa@pm.me>",
          "timestamp": "2020-09-07T18:58:57+02:00",
          "tree_id": "f7801e91fc061b0675d01797d6ceefcc4a238d4a",
          "url": "https://github.com/MoBlaa/irc_rust/commit/07084d3b163a9f6ff257aac02612778e0fd90eac"
        },
        "date": 1599498005563,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench__bench_params_create",
            "value": 288,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench__bench_params_iter",
            "value": 2516,
            "range": "± 1020",
            "unit": "ns/iter"
          },
          {
            "name": "bench__bench_parse",
            "value": 1283,
            "range": "± 389",
            "unit": "ns/iter"
          },
          {
            "name": "bench__bench_tag_create",
            "value": 1714,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "bench__bench_tag_index",
            "value": 140,
            "range": "± 40",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}