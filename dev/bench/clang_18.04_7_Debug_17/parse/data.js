window.BENCHMARK_DATA = {
  "lastUpdate": 1702394230066,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-7 18.04 Debug c++-17": [
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392449176,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8954.173790978884,
            "unit": "ns/iter",
            "extra": "iterations: 80499\ncpu: 8953.58700108076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 62465.291534435426,
            "unit": "ns/iter",
            "extra": "iterations: 13549\ncpu: 62459.18517971806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 114800.75828302823,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 114791.21395036885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 167040.35288424272,
            "unit": "ns/iter",
            "extra": "iterations: 5166\ncpu: 167024.95160665896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 219402.37420503923,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 219385.47443398618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 272014.60861365014,
            "unit": "ns/iter",
            "extra": "iterations: 3181\ncpu: 271950.61301477515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 323409.44373112125,
            "unit": "ns/iter",
            "extra": "iterations: 2648\ncpu: 323389.728096677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 375876.4435555754,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 375858.2222222226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 428414.2088670307,
            "unit": "ns/iter",
            "extra": "iterations: 2030\ncpu: 428381.13300492626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7495.221838638608,
            "unit": "ns/iter",
            "extra": "iterations: 96169\ncpu: 7494.526302654698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5919.189021967728,
            "unit": "ns/iter",
            "extra": "iterations: 118309\ncpu: 5918.883601416639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5876.092743970512,
            "unit": "ns/iter",
            "extra": "iterations: 118908\ncpu: 5875.907424227139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5909.318068105863,
            "unit": "ns/iter",
            "extra": "iterations: 117522\ncpu: 5908.880039481983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10041.57924844868,
            "unit": "ns/iter",
            "extra": "iterations: 69749\ncpu: 10040.449325438345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31141.825215333636,
            "unit": "ns/iter",
            "extra": "iterations: 26238\ncpu: 31139.454226694077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 157700.23294203248,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 157689.23330887774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 121310.50120550544,
            "unit": "ns/iter",
            "extra": "iterations: 7051\ncpu: 121301.50333286045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 121777.71039109775,
            "unit": "ns/iter",
            "extra": "iterations: 7006\ncpu: 121768.04167856126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111706.02112306992,
            "unit": "ns/iter",
            "extra": "iterations: 7622\ncpu: 111696.07714510617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 374948.7662285722,
            "unit": "ns/iter",
            "extra": "iterations: 2511\ncpu: 374922.8594185589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2105282.4153498095,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2105137.923250561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1642099.793286286,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1641976.6784452284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1621264.677758306,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1621139.2294220647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1625295.442105206,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1625250.5263157869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 869645.6056338615,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 869583.8497652577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1577998.7091835963,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1577885.2040816378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37095.86528940653,
            "unit": "ns/iter",
            "extra": "iterations: 22218\ncpu: 37092.15050859671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 198114.58593930132,
            "unit": "ns/iter",
            "extra": "iterations: 4381\ncpu: 198106.29993152234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 146693.9093383165,
            "unit": "ns/iter",
            "extra": "iterations: 5879\ncpu: 146682.07178091496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 145809.7351845581,
            "unit": "ns/iter",
            "extra": "iterations: 5906\ncpu: 145805.68912969893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 142751.5249916614,
            "unit": "ns/iter",
            "extra": "iterations: 6002\ncpu: 142743.01899366843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 324309.32100147987,
            "unit": "ns/iter",
            "extra": "iterations: 2676\ncpu: 324287.25710014906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2138198.3317970764,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 2138002.764976958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1681495.19314076,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1681353.9711191438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1687631.940108811,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1687507.9854809414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1671427.529623025,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1671308.0789946108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 897234.0000000513,
            "unit": "ns/iter",
            "extra": "iterations: 1036\ncpu: 897177.3166023144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1620003.6597222579,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1619891.8402777761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5557407.539999986,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5541297.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3375180.231047036,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3374949.819494582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 31234.086332306608,
            "unit": "ns/iter",
            "extra": "iterations: 26259\ncpu: 31232.076621348733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 149502.21742148296,
            "unit": "ns/iter",
            "extra": "iterations: 5763\ncpu: 149491.75776505226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 118003.66735196614,
            "unit": "ns/iter",
            "extra": "iterations: 7296\ncpu: 117991.99561403522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 117548.73018919842,
            "unit": "ns/iter",
            "extra": "iterations: 7294\ncpu: 117541.02001645188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 110081.77774922321,
            "unit": "ns/iter",
            "extra": "iterations: 7784\ncpu: 110070.65775950716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 290934.04020098585,
            "unit": "ns/iter",
            "extra": "iterations: 2985\ncpu: 290913.3668341693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2093873.3378075156,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2093787.9194630822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1626688.4816111887,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1626660.7705779418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1603045.1982760106,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1602992.5862069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1603083.9965635058,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1603059.4501718222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 857266.4392265942,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 857256.998158383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1568501.2630690844,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1568474.8735244595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3182.9113770348554,
            "unit": "ns/iter",
            "extra": "iterations: 221534\ncpu: 3182.6482616663916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21369.13428963885,
            "unit": "ns/iter",
            "extra": "iterations: 32765\ncpu: 21367.694185869157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16912.02011043954,
            "unit": "ns/iter",
            "extra": "iterations: 41471\ncpu: 16911.364568011344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15758.889031443747,
            "unit": "ns/iter",
            "extra": "iterations: 44427\ncpu: 15757.97825646574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12530.431739729625,
            "unit": "ns/iter",
            "extra": "iterations: 55911\ncpu: 12529.564844127319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 102200.05538551116,
            "unit": "ns/iter",
            "extra": "iterations: 6861\ncpu: 102190.35126074875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 144796.85413223796,
            "unit": "ns/iter",
            "extra": "iterations: 4840\ncpu: 144783.18181818165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 35124.823219659476,
            "unit": "ns/iter",
            "extra": "iterations: 19940\ncpu: 35121.990972918844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34743.545436537315,
            "unit": "ns/iter",
            "extra": "iterations: 20193\ncpu: 34739.88015649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34771.99325631223,
            "unit": "ns/iter",
            "extra": "iterations: 20167\ncpu: 34769.22695492644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65841.0984377947,
            "unit": "ns/iter",
            "extra": "iterations: 10626\ncpu: 65834.21795595677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 65590.16761816091,
            "unit": "ns/iter",
            "extra": "iterations: 10685\ncpu: 65585.85868039327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24635.733295881422,
            "unit": "ns/iter",
            "extra": "iterations: 28481\ncpu: 24634.17365963288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 124686.38782051233,
            "unit": "ns/iter",
            "extra": "iterations: 5616\ncpu: 124681.12535612595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 99005.76994906171,
            "unit": "ns/iter",
            "extra": "iterations: 7068\ncpu: 99000.60837577986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 100137.40923384205,
            "unit": "ns/iter",
            "extra": "iterations: 6996\ncpu: 100125.68610634618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 99719.16338751616,
            "unit": "ns/iter",
            "extra": "iterations: 7014\ncpu: 99711.50556030791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 171865.5526122191,
            "unit": "ns/iter",
            "extra": "iterations: 4077\ncpu: 171847.65759136598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 621204.4693333559,
            "unit": "ns/iter",
            "extra": "iterations: 1125\ncpu: 621175.2888888972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 510540.8268550828,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 510477.6678445239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 497801.22325252544,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 497762.3395149756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 500056.3319027932,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 500014.94992846466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 309148.8529281798,
            "unit": "ns/iter",
            "extra": "iterations: 2271\ncpu: 309137.4724790839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 488407.5531619331,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 488400.34746351535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24859.65804922915,
            "unit": "ns/iter",
            "extra": "iterations: 28276\ncpu: 24859.081906917847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 125645.50017877437,
            "unit": "ns/iter",
            "extra": "iterations: 5594\ncpu: 125641.5802645687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 100550.78678894081,
            "unit": "ns/iter",
            "extra": "iterations: 6979\ncpu: 100547.32769737877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 100707.94051561652,
            "unit": "ns/iter",
            "extra": "iterations: 6943\ncpu: 100702.52052427092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 97150.89481727246,
            "unit": "ns/iter",
            "extra": "iterations: 7197\ncpu: 97150.79894400472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 173131.22433835856,
            "unit": "ns/iter",
            "extra": "iterations: 4043\ncpu: 173120.5293099152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 613642.585237181,
            "unit": "ns/iter",
            "extra": "iterations: 1138\ncpu: 613562.7416520247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 497479.54850216064,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 497462.12553495093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 496874.77004968165,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 496874.09510290803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 489533.4062937039,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 489525.5244755183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 306500.14085738343,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 306484.2519685009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 486418.5605849462,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 486396.93593314505 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392449176,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8954.173790978884,
            "unit": "ns/iter",
            "extra": "iterations: 80499\ncpu: 8953.58700108076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 62465.291534435426,
            "unit": "ns/iter",
            "extra": "iterations: 13549\ncpu: 62459.18517971806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 114800.75828302823,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 114791.21395036885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 167040.35288424272,
            "unit": "ns/iter",
            "extra": "iterations: 5166\ncpu: 167024.95160665896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 219402.37420503923,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 219385.47443398618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 272014.60861365014,
            "unit": "ns/iter",
            "extra": "iterations: 3181\ncpu: 271950.61301477515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 323409.44373112125,
            "unit": "ns/iter",
            "extra": "iterations: 2648\ncpu: 323389.728096677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 375876.4435555754,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 375858.2222222226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 428414.2088670307,
            "unit": "ns/iter",
            "extra": "iterations: 2030\ncpu: 428381.13300492626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7495.221838638608,
            "unit": "ns/iter",
            "extra": "iterations: 96169\ncpu: 7494.526302654698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5919.189021967728,
            "unit": "ns/iter",
            "extra": "iterations: 118309\ncpu: 5918.883601416639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5876.092743970512,
            "unit": "ns/iter",
            "extra": "iterations: 118908\ncpu: 5875.907424227139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5909.318068105863,
            "unit": "ns/iter",
            "extra": "iterations: 117522\ncpu: 5908.880039481983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10041.57924844868,
            "unit": "ns/iter",
            "extra": "iterations: 69749\ncpu: 10040.449325438345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31141.825215333636,
            "unit": "ns/iter",
            "extra": "iterations: 26238\ncpu: 31139.454226694077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 157700.23294203248,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 157689.23330887774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 121310.50120550544,
            "unit": "ns/iter",
            "extra": "iterations: 7051\ncpu: 121301.50333286045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 121777.71039109775,
            "unit": "ns/iter",
            "extra": "iterations: 7006\ncpu: 121768.04167856126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111706.02112306992,
            "unit": "ns/iter",
            "extra": "iterations: 7622\ncpu: 111696.07714510617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 374948.7662285722,
            "unit": "ns/iter",
            "extra": "iterations: 2511\ncpu: 374922.8594185589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2105282.4153498095,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2105137.923250561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1642099.793286286,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1641976.6784452284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1621264.677758306,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1621139.2294220647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1625295.442105206,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1625250.5263157869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 869645.6056338615,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 869583.8497652577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1577998.7091835963,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1577885.2040816378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37095.86528940653,
            "unit": "ns/iter",
            "extra": "iterations: 22218\ncpu: 37092.15050859671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 198114.58593930132,
            "unit": "ns/iter",
            "extra": "iterations: 4381\ncpu: 198106.29993152234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 146693.9093383165,
            "unit": "ns/iter",
            "extra": "iterations: 5879\ncpu: 146682.07178091496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 145809.7351845581,
            "unit": "ns/iter",
            "extra": "iterations: 5906\ncpu: 145805.68912969893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 142751.5249916614,
            "unit": "ns/iter",
            "extra": "iterations: 6002\ncpu: 142743.01899366843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 324309.32100147987,
            "unit": "ns/iter",
            "extra": "iterations: 2676\ncpu: 324287.25710014906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2138198.3317970764,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 2138002.764976958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1681495.19314076,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1681353.9711191438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1687631.940108811,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1687507.9854809414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1671427.529623025,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1671308.0789946108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 897234.0000000513,
            "unit": "ns/iter",
            "extra": "iterations: 1036\ncpu: 897177.3166023144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1620003.6597222579,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1619891.8402777761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5557407.539999986,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5541297.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3375180.231047036,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3374949.819494582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 31234.086332306608,
            "unit": "ns/iter",
            "extra": "iterations: 26259\ncpu: 31232.076621348733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 149502.21742148296,
            "unit": "ns/iter",
            "extra": "iterations: 5763\ncpu: 149491.75776505226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 118003.66735196614,
            "unit": "ns/iter",
            "extra": "iterations: 7296\ncpu: 117991.99561403522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 117548.73018919842,
            "unit": "ns/iter",
            "extra": "iterations: 7294\ncpu: 117541.02001645188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 110081.77774922321,
            "unit": "ns/iter",
            "extra": "iterations: 7784\ncpu: 110070.65775950716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 290934.04020098585,
            "unit": "ns/iter",
            "extra": "iterations: 2985\ncpu: 290913.3668341693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2093873.3378075156,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2093787.9194630822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1626688.4816111887,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1626660.7705779418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1603045.1982760106,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1602992.5862069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1603083.9965635058,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1603059.4501718222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 857266.4392265942,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 857256.998158383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1568501.2630690844,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1568474.8735244595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3182.9113770348554,
            "unit": "ns/iter",
            "extra": "iterations: 221534\ncpu: 3182.6482616663916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21369.13428963885,
            "unit": "ns/iter",
            "extra": "iterations: 32765\ncpu: 21367.694185869157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16912.02011043954,
            "unit": "ns/iter",
            "extra": "iterations: 41471\ncpu: 16911.364568011344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15758.889031443747,
            "unit": "ns/iter",
            "extra": "iterations: 44427\ncpu: 15757.97825646574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12530.431739729625,
            "unit": "ns/iter",
            "extra": "iterations: 55911\ncpu: 12529.564844127319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 102200.05538551116,
            "unit": "ns/iter",
            "extra": "iterations: 6861\ncpu: 102190.35126074875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 144796.85413223796,
            "unit": "ns/iter",
            "extra": "iterations: 4840\ncpu: 144783.18181818165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 35124.823219659476,
            "unit": "ns/iter",
            "extra": "iterations: 19940\ncpu: 35121.990972918844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34743.545436537315,
            "unit": "ns/iter",
            "extra": "iterations: 20193\ncpu: 34739.88015649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34771.99325631223,
            "unit": "ns/iter",
            "extra": "iterations: 20167\ncpu: 34769.22695492644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65841.0984377947,
            "unit": "ns/iter",
            "extra": "iterations: 10626\ncpu: 65834.21795595677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 65590.16761816091,
            "unit": "ns/iter",
            "extra": "iterations: 10685\ncpu: 65585.85868039327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24635.733295881422,
            "unit": "ns/iter",
            "extra": "iterations: 28481\ncpu: 24634.17365963288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 124686.38782051233,
            "unit": "ns/iter",
            "extra": "iterations: 5616\ncpu: 124681.12535612595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 99005.76994906171,
            "unit": "ns/iter",
            "extra": "iterations: 7068\ncpu: 99000.60837577986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 100137.40923384205,
            "unit": "ns/iter",
            "extra": "iterations: 6996\ncpu: 100125.68610634618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 99719.16338751616,
            "unit": "ns/iter",
            "extra": "iterations: 7014\ncpu: 99711.50556030791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 171865.5526122191,
            "unit": "ns/iter",
            "extra": "iterations: 4077\ncpu: 171847.65759136598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 621204.4693333559,
            "unit": "ns/iter",
            "extra": "iterations: 1125\ncpu: 621175.2888888972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 510540.8268550828,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 510477.6678445239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 497801.22325252544,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 497762.3395149756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 500056.3319027932,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 500014.94992846466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 309148.8529281798,
            "unit": "ns/iter",
            "extra": "iterations: 2271\ncpu: 309137.4724790839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 488407.5531619331,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 488400.34746351535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24859.65804922915,
            "unit": "ns/iter",
            "extra": "iterations: 28276\ncpu: 24859.081906917847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 125645.50017877437,
            "unit": "ns/iter",
            "extra": "iterations: 5594\ncpu: 125641.5802645687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 100550.78678894081,
            "unit": "ns/iter",
            "extra": "iterations: 6979\ncpu: 100547.32769737877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 100707.94051561652,
            "unit": "ns/iter",
            "extra": "iterations: 6943\ncpu: 100702.52052427092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 97150.89481727246,
            "unit": "ns/iter",
            "extra": "iterations: 7197\ncpu: 97150.79894400472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 173131.22433835856,
            "unit": "ns/iter",
            "extra": "iterations: 4043\ncpu: 173120.5293099152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 613642.585237181,
            "unit": "ns/iter",
            "extra": "iterations: 1138\ncpu: 613562.7416520247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 497479.54850216064,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 497462.12553495093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 496874.77004968165,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 496874.09510290803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 489533.4062937039,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 489525.5244755183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 306500.14085738343,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 306484.2519685009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 486418.5605849462,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 486396.93593314505 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394229020,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8247.518755878868,
            "unit": "ns/iter",
            "extra": "iterations: 85040\ncpu: 8246.98847601129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60380.89420000006,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60380.58999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 112234.19091967722,
            "unit": "ns/iter",
            "extra": "iterations: 7731\ncpu: 112230.28068813866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 162739.0774836952,
            "unit": "ns/iter",
            "extra": "iterations: 5214\ncpu: 162735.99923283476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 213492.38846438628,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 213486.3199408431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 264754.6303215979,
            "unit": "ns/iter",
            "extra": "iterations: 3265\ncpu: 264742.9709035222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 315037.0171033402,
            "unit": "ns/iter",
            "extra": "iterations: 2748\ncpu: 315020.16011644824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 367374.3703547288,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 367353.16722972976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 416755.28578530403,
            "unit": "ns/iter",
            "extra": "iterations: 2012\ncpu: 416727.4353876738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7159.227639054158,
            "unit": "ns/iter",
            "extra": "iterations: 98397\ncpu: 7158.891023100297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5710.493628632958,
            "unit": "ns/iter",
            "extra": "iterations: 123129\ncpu: 5710.101600760165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5768.1925438705775,
            "unit": "ns/iter",
            "extra": "iterations: 121323\ncpu: 5767.925290340668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5838.8295323445955,
            "unit": "ns/iter",
            "extra": "iterations: 119618\ncpu: 5838.2049524319045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9910.068363852113,
            "unit": "ns/iter",
            "extra": "iterations: 70666\ncpu: 9909.723204935894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31251.98663029892,
            "unit": "ns/iter",
            "extra": "iterations: 26029\ncpu: 31251.073802297422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 163145.41784302713,
            "unit": "ns/iter",
            "extra": "iterations: 5313\ncpu: 163138.22699040096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 124651.51435165794,
            "unit": "ns/iter",
            "extra": "iterations: 6933\ncpu: 124645.08870618754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 122721.7057388819,
            "unit": "ns/iter",
            "extra": "iterations: 6970\ncpu: 122716.64275466285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 117186.58820286965,
            "unit": "ns/iter",
            "extra": "iterations: 7256\ncpu: 117184.45424476327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 372987.700396807,
            "unit": "ns/iter",
            "extra": "iterations: 2520\ncpu: 372978.65079365054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2072994.657718252,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2072900.8948545812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1566012.8504201688,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1565940.3361344496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1585845.3287671092,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1585790.75342466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1586647.8515358225,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1586597.7815699682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 829051.363554772,
            "unit": "ns/iter",
            "extra": "iterations: 1114\ncpu: 829014.5421903026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1539164.8286655536,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1536291.4332784205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 39647.91206356444,
            "unit": "ns/iter",
            "extra": "iterations: 20765\ncpu: 39646.982903924865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 202073.43177046545,
            "unit": "ns/iter",
            "extra": "iterations: 4287\ncpu: 202065.31373921107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 149181.17664410578,
            "unit": "ns/iter",
            "extra": "iterations: 5763\ncpu: 149178.30990803405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 152980.58585679063,
            "unit": "ns/iter",
            "extra": "iterations: 5614\ncpu: 152976.986106163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 146420.3105325924,
            "unit": "ns/iter",
            "extra": "iterations: 5877\ncpu: 146415.10974987238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 323605.401271527,
            "unit": "ns/iter",
            "extra": "iterations: 2674\ncpu: 323591.69783096405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2102187.0157301747,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2102073.2584269717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1622045.1010454095,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1622013.5888501804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1655172.6518650744,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1655105.6838365854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1603689.4248703893,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1603626.7702936193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 866779.2635010064,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 866752.3277467411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1569435.8636363111,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1569400.5050504997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5336162.280000281,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5335949.999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3199149.2842467306,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3199082.8767123306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 32532.01623153429,
            "unit": "ns/iter",
            "extra": "iterations: 24705\ncpu: 32531.953045942122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 154139.90860214471,
            "unit": "ns/iter",
            "extra": "iterations: 5580\ncpu: 154136.9892473115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 123051.71734781307,
            "unit": "ns/iter",
            "extra": "iterations: 6998\ncpu: 123050.48585310095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 118083.22115516027,
            "unit": "ns/iter",
            "extra": "iterations: 7289\ncpu: 118079.18781725886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 114841.7922994907,
            "unit": "ns/iter",
            "extra": "iterations: 7506\ncpu: 114841.50013322652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 295009.8301571321,
            "unit": "ns/iter",
            "extra": "iterations: 2991\ncpu: 295008.9267803411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2034777.1843817672,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 2034732.971800448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1567828.1705685167,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1567792.809364548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1580587.5228426175,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1580584.2639593876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1553602.4466666733,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1553600.3333333307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 823431.0079364938,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 823422.9276895978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1520332.3447154409,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1520325.5284552805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3209.6582096455572,
            "unit": "ns/iter",
            "extra": "iterations: 218359\ncpu: 3209.6226855774003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21259.410216060103,
            "unit": "ns/iter",
            "extra": "iterations: 33046\ncpu: 21259.383889124234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16154.05438790678,
            "unit": "ns/iter",
            "extra": "iterations: 43392\ncpu: 16153.60896017701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 17064.839568308744,
            "unit": "ns/iter",
            "extra": "iterations: 41326\ncpu: 17064.15815709236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12524.42340012971,
            "unit": "ns/iter",
            "extra": "iterations: 55692\ncpu: 12524.378725849363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 106035.78013647742,
            "unit": "ns/iter",
            "extra": "iterations: 6595\ncpu: 106036.5276724792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 139665.98086886533,
            "unit": "ns/iter",
            "extra": "iterations: 5018\ncpu: 139666.6998804308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33458.38760951917,
            "unit": "ns/iter",
            "extra": "iterations: 20887\ncpu: 33456.96366160785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33544.05427063261,
            "unit": "ns/iter",
            "extra": "iterations: 20840\ncpu: 33543.77159309007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34016.80863715906,
            "unit": "ns/iter",
            "extra": "iterations: 20516\ncpu: 34015.31487619448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66572.7245605617,
            "unit": "ns/iter",
            "extra": "iterations: 10525\ncpu: 66572.04750593868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62531.677851149776,
            "unit": "ns/iter",
            "extra": "iterations: 11206\ncpu: 62529.70729966132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24897.411706174593,
            "unit": "ns/iter",
            "extra": "iterations: 28139\ncpu: 24896.997050356833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 121338.33003987938,
            "unit": "ns/iter",
            "extra": "iterations: 5769\ncpu: 121337.73617611386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 98711.05700141817,
            "unit": "ns/iter",
            "extra": "iterations: 7070\ncpu: 98710.59405940706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 100207.72781911565,
            "unit": "ns/iter",
            "extra": "iterations: 6988\ncpu: 100207.39839725183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 99830.45275478679,
            "unit": "ns/iter",
            "extra": "iterations: 7006\ncpu: 99826.93405652301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 174461.27173373304,
            "unit": "ns/iter",
            "extra": "iterations: 4026\ncpu: 174461.40089418663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 605331.57835494,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 605317.056277056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 489023.3469812322,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 489022.6231783489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 491756.69662927283,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 491744.1713483156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 492444.33121912595,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 492442.14235377195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 312934.46157285635,
            "unit": "ns/iter",
            "extra": "iterations: 2238\ncpu: 312927.0777479907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 480954.38255489664,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 480936.3324175802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24614.072094905878,
            "unit": "ns/iter",
            "extra": "iterations: 28407\ncpu: 24613.58115957319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 123789.2669379242,
            "unit": "ns/iter",
            "extra": "iterations: 5653\ncpu: 123788.50168052444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 101037.68716461796,
            "unit": "ns/iter",
            "extra": "iterations: 6895\ncpu: 101037.08484408878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 101671.65787566594,
            "unit": "ns/iter",
            "extra": "iterations: 6901\ncpu: 101672.38081437521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 97626.15877437188,
            "unit": "ns/iter",
            "extra": "iterations: 7180\ncpu: 97623.13370473505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 175413.72556389435,
            "unit": "ns/iter",
            "extra": "iterations: 3990\ncpu: 175412.35588972646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 602596.7934595024,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 602589.2426850175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 491678.217146826,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 491677.44202389463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 492684.49753691966,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 492675.72132301214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 503364.3925362607,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 503361.16102280194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 309350.6215616629,
            "unit": "ns/iter",
            "extra": "iterations: 2254\ncpu: 309348.3141082497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 479790.3125428336,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 479773.33790267206 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}