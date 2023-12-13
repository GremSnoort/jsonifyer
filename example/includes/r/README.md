

```json
{
 "object_id": 7,
 "packt_idx": 6,
 "timestamp": 1,
 "iunit_width": 3,
 "iunit_height": 1,
 "detections": [
     {
         "bbox": {
             "x": 7,
             "y": 2,
             "width": 4,
             "height": 1
         },
         "score": 5.0,
         "ssl_class": 0,
         "ufc_class": 0,
         "prn_class": 0
     },
     ...
 ]
}
```

(gcc-11 22.04 Release c++-17)
| Array Size  | Parse time (ns) | Serialize time (ns) | Count per second | P & S time (microseconds) | Count per second |
| ----------- | --------------- | ------------------- | ---------------- | ------------------------- | ---------------- |
| 0           |  | 0.9| |  1.6 | 625000 |
| 1           |  | 16 | |   20 | 50000 |
| 2           |  | | |   50 | 20000 |
| 3           |  | | |   60 | 16666 |
| 4           |  | | |   90 | 11111 |
| 5           |  | | |  100 | 10000 |
| 6           |  | | |  120 | 8333 |
| 7           |  | | |  140 | 7142 |
| 8           |  | | |  160 | 6250 |
