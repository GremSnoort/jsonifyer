window.BENCHMARK_DATA = {
  "lastUpdate": 1702392424674,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-11 18.04 Debug c++-17": [
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
        "date": 1702392423828,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 18418.154138112703,
            "unit": "ns/iter",
            "extra": "iterations: 37940\ncpu: 18417.746441750132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 171865.82380278176,
            "unit": "ns/iter",
            "extra": "iterations: 4949\ncpu: 171859.72923823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 326010.2063134152,
            "unit": "ns/iter",
            "extra": "iterations: 2661\ncpu: 325998.42164599785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 477973.80033186986,
            "unit": "ns/iter",
            "extra": "iterations: 1808\ncpu: 477955.5309734512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 507331.4000000551,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507331.5000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 636378.1009999912,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 636352.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 759377.9513201647,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 759338.6963696374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 887722.7280534556,
            "unit": "ns/iter",
            "extra": "iterations: 1048\ncpu: 887698.9503816799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 1007121.637569061,
            "unit": "ns/iter",
            "extra": "iterations: 905\ncpu: 1007069.5027624317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14710.094533219011,
            "unit": "ns/iter",
            "extra": "iterations: 47560\ncpu: 14709.291421362504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 12494.812436452512,
            "unit": "ns/iter",
            "extra": "iterations: 56061\ncpu: 12493.89771855658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 12254.504216668776,
            "unit": "ns/iter",
            "extra": "iterations: 57747\ncpu: 12253.753441737224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 12280.08387730829,
            "unit": "ns/iter",
            "extra": "iterations: 56988\ncpu: 12279.960693479337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 21051.32970306219,
            "unit": "ns/iter",
            "extra": "iterations: 33239\ncpu: 21050.816811576722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 73198.9931170973,
            "unit": "ns/iter",
            "extra": "iterations: 11623\ncpu: 73194.62273079244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 388338.8225147633,
            "unit": "ns/iter",
            "extra": "iterations: 2203\ncpu: 388326.0553790287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 307410.8901692297,
            "unit": "ns/iter",
            "extra": "iterations: 2777\ncpu: 307401.90853438934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 301286.78122791176,
            "unit": "ns/iter",
            "extra": "iterations: 2834\ncpu: 301285.532815808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 298386.66223312536,
            "unit": "ns/iter",
            "extra": "iterations: 2857\ncpu: 298366.25831291615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 608845.4260000162,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608831.900000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5323854.148570848,
            "unit": "ns/iter",
            "extra": "iterations: 175\ncpu: 5323651.428571432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4445922.626168008,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4445781.775700934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4262125.798165216,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4261992.201834856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4309060.398148395,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4308828.2407407435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2558016.90082644,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2557983.1955922814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4339482.968181714,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4339170.90909092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 16908442.492063075,
            "unit": "ns/iter",
            "extra": "iterations: 63\ncpu: 16907249.20634925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 7457355.9399993885,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7457267.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 21076987.90195948,
            "unit": "ns/iter",
            "extra": "iterations: 51\ncpu: 21075654.901960783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 77919.3058092818,
            "unit": "ns/iter",
            "extra": "iterations: 10948\ncpu: 77916.24954329543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 419378.02239534725,
            "unit": "ns/iter",
            "extra": "iterations: 2054\ncpu: 419367.2833495609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 338342.6491919684,
            "unit": "ns/iter",
            "extra": "iterations: 2537\ncpu: 338342.45171462354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 333433.2284382168,
            "unit": "ns/iter",
            "extra": "iterations: 2574\ncpu: 333415.73426573264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 327947.0605828634,
            "unit": "ns/iter",
            "extra": "iterations: 2608\ncpu: 327943.711656443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 619618.781999975,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 619597.5999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5424877.697674108,
            "unit": "ns/iter",
            "extra": "iterations: 172\ncpu: 5424826.162790709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4406135.132701226,
            "unit": "ns/iter",
            "extra": "iterations: 211\ncpu: 4405973.933649275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4326767.576744291,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4326668.372093034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4345804.612149597,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4345796.728971989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2579728.861495851,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2579521.8836565046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4268581.867580238,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4268484.018264843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 17310949.725805543,
            "unit": "ns/iter",
            "extra": "iterations: 62\ncpu: 17310008.064516094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 7611495.290000221,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7611222.9999999665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 69663.34176902549,
            "unit": "ns/iter",
            "extra": "iterations: 12131\ncpu: 69661.29750226662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 397928.2957486106,
            "unit": "ns/iter",
            "extra": "iterations: 2164\ncpu: 397910.4436229212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 303382.5012406993,
            "unit": "ns/iter",
            "extra": "iterations: 2821\ncpu: 303362.1765331446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 294180.6223751884,
            "unit": "ns/iter",
            "extra": "iterations: 2905\ncpu: 294158.7607573163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 291198.688737208,
            "unit": "ns/iter",
            "extra": "iterations: 2930\ncpu: 291180.6825938576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 567494.5629999684,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 567446.6000000038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5382097.77011522,
            "unit": "ns/iter",
            "extra": "iterations: 174\ncpu: 5381762.643678152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4362585.827102606,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4362334.579439234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4278947.500000276,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4278762.385321102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4336718.625000176,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4336499.53703703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2519524.0000000056,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2519354.4715447123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4210551.095022673,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4210372.850678759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6998.681928241441,
            "unit": "ns/iter",
            "extra": "iterations: 99946\ncpu: 6998.309086906985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 45516.09738022356,
            "unit": "ns/iter",
            "extra": "iterations: 15383\ncpu: 45515.53013066346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 36269.03238554438,
            "unit": "ns/iter",
            "extra": "iterations: 20750\ncpu: 36267.85542168677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 36074.94673947186,
            "unit": "ns/iter",
            "extra": "iterations: 19414\ncpu: 36074.13722056249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 27230.26096943737,
            "unit": "ns/iter",
            "extra": "iterations: 25685\ncpu: 27229.92018687934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 201687.83087596254,
            "unit": "ns/iter",
            "extra": "iterations: 3459\ncpu: 201685.2558542898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 374728.74344473,
            "unit": "ns/iter",
            "extra": "iterations: 1945\ncpu: 374701.0796915182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 89429.85663264198,
            "unit": "ns/iter",
            "extra": "iterations: 7840\ncpu: 89429.77040816317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 88016.79547739286,
            "unit": "ns/iter",
            "extra": "iterations: 7960\ncpu: 88011.52010050221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 89206.89437516335,
            "unit": "ns/iter",
            "extra": "iterations: 7858\ncpu: 89199.78365996442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 176704.51998993568,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 176688.6346492344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 170164.418649829,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 170152.2583778538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 53961.68793504189,
            "unit": "ns/iter",
            "extra": "iterations: 12930\ncpu: 53960.9590100534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 263787.40319513547,
            "unit": "ns/iter",
            "extra": "iterations: 2629\ncpu: 263779.15557245986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 212216.45830797925,
            "unit": "ns/iter",
            "extra": "iterations: 3286\ncpu: 212210.98600121815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 213623.40293487697,
            "unit": "ns/iter",
            "extra": "iterations: 3271\ncpu: 213614.39926628183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 213301.18594036755,
            "unit": "ns/iter",
            "extra": "iterations: 3286\ncpu: 213301.03469263206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 383105.85337728506,
            "unit": "ns/iter",
            "extra": "iterations: 1821\ncpu: 383100.6040637024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1522198.895652161,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 1522197.3913043647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1283203.2142856347,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1283109.3406593346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1251860.7155633112,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1251768.1574239733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1266508.4231465324,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1266435.9855334423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 813097.1254356158,
            "unit": "ns/iter",
            "extra": "iterations: 861\ncpu: 813028.9198606176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1255260.827648211,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1255229.443447031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 53620.47348744391,
            "unit": "ns/iter",
            "extra": "iterations: 13107\ncpu: 53617.601281758056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 265735.5699619822,
            "unit": "ns/iter",
            "extra": "iterations: 2630\ncpu: 265724.22053231875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 214078.53516820451,
            "unit": "ns/iter",
            "extra": "iterations: 3270\ncpu: 214063.33333333372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 212813.35709950957,
            "unit": "ns/iter",
            "extra": "iterations: 3296\ncpu: 212799.72694174765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 215172.71367126738,
            "unit": "ns/iter",
            "extra": "iterations: 3255\ncpu: 215151.12135176343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 385175.8960967242,
            "unit": "ns/iter",
            "extra": "iterations: 1819\ncpu: 385154.7553600897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1516619.4307359008,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 1516516.8831168811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1273460.3890910214,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1273392.3636363638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1239611.5354610374,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1239513.2978723322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1257439.5135135166,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1257356.0360360325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 808272.1895953579,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 808271.0982659027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1250856.2049911257,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1250786.631016056 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}