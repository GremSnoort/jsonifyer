# Benchmarks

Compare `nlohmann` VS `boost` realizations:
```bash
python3.10 -m pip install -r requirements.txt
python3.10 compare.py benchmarks $BUILD_DIR/bin/benchmark_parse_nlohmann $BUILD_DIR/bin/benchmark_parse_boost
python3.10 compare.py benchmarks $BUILD_DIR/bin/benchmark_serialize_nlohmann $BUILD_DIR/bin/benchmark_serialize_boost
python3.10 compare.py benchmarks $BUILD_DIR/bin/benchmark_process_nlohmann $BUILD_DIR/bin/benchmark_process_boost
```
