window.BENCHMARK_DATA = {
  "lastUpdate": 1702490819863,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-7 20.04 Debug c++-17": [
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397917965,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16049.873338764377,
            "unit": "ns/iter",
            "extra": "iterations: 42965\ncpu: 16049.58454556034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 150726.5192755952,
            "unit": "ns/iter",
            "extra": "iterations: 5577\ncpu: 150721.33763672225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 285160.37232289714,
            "unit": "ns/iter",
            "extra": "iterations: 3035\ncpu: 285151.5321252059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417951.69238234306,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 417929.5002426004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 556924.1150667513,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 556879.9109980924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 558083.8559999961,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558046.3999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 669784.6995677173,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 669770.2449567727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 774980.727272711,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 774974.728940784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 879410.4195075647,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 879352.3674242424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13146.271395164724,
            "unit": "ns/iter",
            "extra": "iterations: 53026\ncpu: 13145.920869007652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10964.097627023388,
            "unit": "ns/iter",
            "extra": "iterations: 63886\ncpu: 10963.85436558871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10940.70791268109,
            "unit": "ns/iter",
            "extra": "iterations: 64087\ncpu: 10939.822428885727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10932.632205767806,
            "unit": "ns/iter",
            "extra": "iterations: 64150\ncpu: 10932.149649259542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18653.33157051312,
            "unit": "ns/iter",
            "extra": "iterations: 37440\ncpu: 18652.179487179495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69458.5854497775,
            "unit": "ns/iter",
            "extra": "iterations: 12206\ncpu: 69455.9970506309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 359850.23887489986,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 359829.63895885804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288556.2726659955,
            "unit": "ns/iter",
            "extra": "iterations: 2967\ncpu: 288301.48297944065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 287256.850489364,
            "unit": "ns/iter",
            "extra": "iterations: 2963\ncpu: 287256.6655416798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 285063.04881310934,
            "unit": "ns/iter",
            "extra": "iterations: 2991\ncpu: 285049.8161150118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 547446.3019999973,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547451.5999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4709494.035532909,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4709356.345177675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3854185.714876086,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3854091.3223140435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3855850.2448132588,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3855678.838174283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3850920.020746868,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3850905.39419088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2248815.949029158,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2248643.6893203864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3749346.951612933,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3749179.435483864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14972981.394366493,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14972226.760563385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6539393.250000102,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6539240 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18835697.543860227,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18834945.614035092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75802.44501733719,
            "unit": "ns/iter",
            "extra": "iterations: 11249\ncpu: 75799.81331673922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 395100.42745279695,
            "unit": "ns/iter",
            "extra": "iterations: 2171\ncpu: 395092.12344541744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 313897.21556449274,
            "unit": "ns/iter",
            "extra": "iterations: 2737\ncpu: 313883.8509316767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 313309.1249089674,
            "unit": "ns/iter",
            "extra": "iterations: 2746\ncpu: 313305.13474144303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 313929.52781844704,
            "unit": "ns/iter",
            "extra": "iterations: 2732\ncpu: 313925.03660322307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 546498.081999971,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546503.8000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4771493.295918367,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4771288.2653061235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3900262.37238507,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3900103.347280347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3897329.092050385,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3897361.0878660935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3904770.3514644355,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3904611.7154811574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2283014.9631448914,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2282999.0171990227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3784007.5447153193,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3783952.0325203124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15325181.857143173,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15324451.428571401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6706393.009999943,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6705948.000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 68209.85380491309,
            "unit": "ns/iter",
            "extra": "iterations: 12497\ncpu: 68209.01016243931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 352994.3277068846,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 352981.7620419919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 280942.2632786909,
            "unit": "ns/iter",
            "extra": "iterations: 3050\ncpu: 280932.7868852459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 280789.660006562,
            "unit": "ns/iter",
            "extra": "iterations: 3053\ncpu: 280792.30265312974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 277688.843932511,
            "unit": "ns/iter",
            "extra": "iterations: 3082\ncpu: 277675.01622323185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 509311.3369999855,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509316.59999999823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4736312.583756287,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4736088.324873112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3856496.1239667675,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3856376.8595041605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3872888.1404960128,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3872544.214876025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3858552.082644474,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3858540.082644656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2258035.19902912,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2257984.466019422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3751674.586345438,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3751506.8273092243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6285.423704552162,
            "unit": "ns/iter",
            "extra": "iterations: 111776\ncpu: 6285.487045519586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40843.19885608675,
            "unit": "ns/iter",
            "extra": "iterations: 17309\ncpu: 40841.8915015313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32076.028039951238,
            "unit": "ns/iter",
            "extra": "iterations: 21826\ncpu: 32075.923210849425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32168.363080459705,
            "unit": "ns/iter",
            "extra": "iterations: 21750\ncpu: 32164.983908046124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24755.431582303965,
            "unit": "ns/iter",
            "extra": "iterations: 28231\ncpu: 24755.672841911393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 179524.81391171343,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 179518.09548254384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 298573.11423699587,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 298576.172208012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77441.01282335001,
            "unit": "ns/iter",
            "extra": "iterations: 9046\ncpu: 77436.87817820099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77368.62498619301,
            "unit": "ns/iter",
            "extra": "iterations: 9053\ncpu: 77366.60775433645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76796.38868792605,
            "unit": "ns/iter",
            "extra": "iterations: 9123\ncpu: 76797.15006028778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 160641.21699196193,
            "unit": "ns/iter",
            "extra": "iterations: 4355\ncpu: 160628.7944890917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 135746.7124322262,
            "unit": "ns/iter",
            "extra": "iterations: 5164\ncpu: 135748.10224632116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49120.40483214029,
            "unit": "ns/iter",
            "extra": "iterations: 14238\ncpu: 49117.3830594179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 238633.50904126954,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 238631.9686113965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 193561.18879380965,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 193549.6825834927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 193222.1971286582,
            "unit": "ns/iter",
            "extra": "iterations: 3622\ncpu: 193223.99226946186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 193912.43874723263,
            "unit": "ns/iter",
            "extra": "iterations: 3608\ncpu: 193901.94013303684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 343028.13607438165,
            "unit": "ns/iter",
            "extra": "iterations: 2043\ncpu: 343031.3754282941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1341141.3238095734,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1340646.6666666681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1124439.133226377,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1124419.7431781695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1124891.0353697978,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1124854.50160771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1120613.5032051196,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1120554.647435904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 728773.3132780042,
            "unit": "ns/iter",
            "extra": "iterations: 964\ncpu: 728780.7053941867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1114256.5723370295,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1114214.626391092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 49901.43192990232,
            "unit": "ns/iter",
            "extra": "iterations: 14037\ncpu: 49901.95198404242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 242971.764115001,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 242954.7280914466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 197568.56635407853,
            "unit": "ns/iter",
            "extra": "iterations: 3519\ncpu: 197570.47456663832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 197746.83911938887,
            "unit": "ns/iter",
            "extra": "iterations: 3543\ncpu: 197736.04290149658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 199377.19116397243,
            "unit": "ns/iter",
            "extra": "iterations: 3531\ncpu: 199376.72047578543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 341685.3483201639,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 341670.8003952579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1331278.8653845603,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1331299.0384615539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1151453.9230769826,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1151418.910256397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1118341.5047923063,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1118297.7635782731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1122364.5105007815,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1122372.8594507258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 723543.6649431195,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 723364.2192347384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1112148.7365080107,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1112145.2380952258 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397917965,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16049.873338764377,
            "unit": "ns/iter",
            "extra": "iterations: 42965\ncpu: 16049.58454556034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 150726.5192755952,
            "unit": "ns/iter",
            "extra": "iterations: 5577\ncpu: 150721.33763672225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 285160.37232289714,
            "unit": "ns/iter",
            "extra": "iterations: 3035\ncpu: 285151.5321252059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417951.69238234306,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 417929.5002426004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 556924.1150667513,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 556879.9109980924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 558083.8559999961,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558046.3999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 669784.6995677173,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 669770.2449567727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 774980.727272711,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 774974.728940784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 879410.4195075647,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 879352.3674242424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13146.271395164724,
            "unit": "ns/iter",
            "extra": "iterations: 53026\ncpu: 13145.920869007652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10964.097627023388,
            "unit": "ns/iter",
            "extra": "iterations: 63886\ncpu: 10963.85436558871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10940.70791268109,
            "unit": "ns/iter",
            "extra": "iterations: 64087\ncpu: 10939.822428885727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10932.632205767806,
            "unit": "ns/iter",
            "extra": "iterations: 64150\ncpu: 10932.149649259542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18653.33157051312,
            "unit": "ns/iter",
            "extra": "iterations: 37440\ncpu: 18652.179487179495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69458.5854497775,
            "unit": "ns/iter",
            "extra": "iterations: 12206\ncpu: 69455.9970506309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 359850.23887489986,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 359829.63895885804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288556.2726659955,
            "unit": "ns/iter",
            "extra": "iterations: 2967\ncpu: 288301.48297944065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 287256.850489364,
            "unit": "ns/iter",
            "extra": "iterations: 2963\ncpu: 287256.6655416798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 285063.04881310934,
            "unit": "ns/iter",
            "extra": "iterations: 2991\ncpu: 285049.8161150118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 547446.3019999973,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547451.5999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4709494.035532909,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4709356.345177675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3854185.714876086,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3854091.3223140435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3855850.2448132588,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3855678.838174283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3850920.020746868,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3850905.39419088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2248815.949029158,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2248643.6893203864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3749346.951612933,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3749179.435483864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14972981.394366493,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14972226.760563385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6539393.250000102,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6539240 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18835697.543860227,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18834945.614035092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75802.44501733719,
            "unit": "ns/iter",
            "extra": "iterations: 11249\ncpu: 75799.81331673922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 395100.42745279695,
            "unit": "ns/iter",
            "extra": "iterations: 2171\ncpu: 395092.12344541744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 313897.21556449274,
            "unit": "ns/iter",
            "extra": "iterations: 2737\ncpu: 313883.8509316767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 313309.1249089674,
            "unit": "ns/iter",
            "extra": "iterations: 2746\ncpu: 313305.13474144303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 313929.52781844704,
            "unit": "ns/iter",
            "extra": "iterations: 2732\ncpu: 313925.03660322307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 546498.081999971,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546503.8000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4771493.295918367,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4771288.2653061235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3900262.37238507,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3900103.347280347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3897329.092050385,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3897361.0878660935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3904770.3514644355,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3904611.7154811574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2283014.9631448914,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2282999.0171990227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3784007.5447153193,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3783952.0325203124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15325181.857143173,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15324451.428571401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6706393.009999943,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6705948.000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 68209.85380491309,
            "unit": "ns/iter",
            "extra": "iterations: 12497\ncpu: 68209.01016243931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 352994.3277068846,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 352981.7620419919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 280942.2632786909,
            "unit": "ns/iter",
            "extra": "iterations: 3050\ncpu: 280932.7868852459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 280789.660006562,
            "unit": "ns/iter",
            "extra": "iterations: 3053\ncpu: 280792.30265312974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 277688.843932511,
            "unit": "ns/iter",
            "extra": "iterations: 3082\ncpu: 277675.01622323185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 509311.3369999855,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509316.59999999823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4736312.583756287,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4736088.324873112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3856496.1239667675,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3856376.8595041605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3872888.1404960128,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3872544.214876025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3858552.082644474,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3858540.082644656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2258035.19902912,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2257984.466019422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3751674.586345438,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3751506.8273092243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6285.423704552162,
            "unit": "ns/iter",
            "extra": "iterations: 111776\ncpu: 6285.487045519586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40843.19885608675,
            "unit": "ns/iter",
            "extra": "iterations: 17309\ncpu: 40841.8915015313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32076.028039951238,
            "unit": "ns/iter",
            "extra": "iterations: 21826\ncpu: 32075.923210849425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32168.363080459705,
            "unit": "ns/iter",
            "extra": "iterations: 21750\ncpu: 32164.983908046124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24755.431582303965,
            "unit": "ns/iter",
            "extra": "iterations: 28231\ncpu: 24755.672841911393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 179524.81391171343,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 179518.09548254384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 298573.11423699587,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 298576.172208012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77441.01282335001,
            "unit": "ns/iter",
            "extra": "iterations: 9046\ncpu: 77436.87817820099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77368.62498619301,
            "unit": "ns/iter",
            "extra": "iterations: 9053\ncpu: 77366.60775433645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76796.38868792605,
            "unit": "ns/iter",
            "extra": "iterations: 9123\ncpu: 76797.15006028778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 160641.21699196193,
            "unit": "ns/iter",
            "extra": "iterations: 4355\ncpu: 160628.7944890917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 135746.7124322262,
            "unit": "ns/iter",
            "extra": "iterations: 5164\ncpu: 135748.10224632116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49120.40483214029,
            "unit": "ns/iter",
            "extra": "iterations: 14238\ncpu: 49117.3830594179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 238633.50904126954,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 238631.9686113965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 193561.18879380965,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 193549.6825834927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 193222.1971286582,
            "unit": "ns/iter",
            "extra": "iterations: 3622\ncpu: 193223.99226946186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 193912.43874723263,
            "unit": "ns/iter",
            "extra": "iterations: 3608\ncpu: 193901.94013303684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 343028.13607438165,
            "unit": "ns/iter",
            "extra": "iterations: 2043\ncpu: 343031.3754282941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1341141.3238095734,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1340646.6666666681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1124439.133226377,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1124419.7431781695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1124891.0353697978,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1124854.50160771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1120613.5032051196,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1120554.647435904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 728773.3132780042,
            "unit": "ns/iter",
            "extra": "iterations: 964\ncpu: 728780.7053941867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1114256.5723370295,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1114214.626391092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 49901.43192990232,
            "unit": "ns/iter",
            "extra": "iterations: 14037\ncpu: 49901.95198404242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 242971.764115001,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 242954.7280914466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 197568.56635407853,
            "unit": "ns/iter",
            "extra": "iterations: 3519\ncpu: 197570.47456663832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 197746.83911938887,
            "unit": "ns/iter",
            "extra": "iterations: 3543\ncpu: 197736.04290149658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 199377.19116397243,
            "unit": "ns/iter",
            "extra": "iterations: 3531\ncpu: 199376.72047578543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 341685.3483201639,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 341670.8003952579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1331278.8653845603,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1331299.0384615539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1151453.9230769826,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1151418.910256397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1118341.5047923063,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1118297.7635782731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1122364.5105007815,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1122372.8594507258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 723543.6649431195,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 723364.2192347384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1112148.7365080107,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1112145.2380952258 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397917965,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16049.873338764377,
            "unit": "ns/iter",
            "extra": "iterations: 42965\ncpu: 16049.58454556034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 150726.5192755952,
            "unit": "ns/iter",
            "extra": "iterations: 5577\ncpu: 150721.33763672225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 285160.37232289714,
            "unit": "ns/iter",
            "extra": "iterations: 3035\ncpu: 285151.5321252059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417951.69238234306,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 417929.5002426004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 556924.1150667513,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 556879.9109980924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 558083.8559999961,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558046.3999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 669784.6995677173,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 669770.2449567727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 774980.727272711,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 774974.728940784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 879410.4195075647,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 879352.3674242424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13146.271395164724,
            "unit": "ns/iter",
            "extra": "iterations: 53026\ncpu: 13145.920869007652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10964.097627023388,
            "unit": "ns/iter",
            "extra": "iterations: 63886\ncpu: 10963.85436558871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10940.70791268109,
            "unit": "ns/iter",
            "extra": "iterations: 64087\ncpu: 10939.822428885727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10932.632205767806,
            "unit": "ns/iter",
            "extra": "iterations: 64150\ncpu: 10932.149649259542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18653.33157051312,
            "unit": "ns/iter",
            "extra": "iterations: 37440\ncpu: 18652.179487179495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 69458.5854497775,
            "unit": "ns/iter",
            "extra": "iterations: 12206\ncpu: 69455.9970506309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 359850.23887489986,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 359829.63895885804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288556.2726659955,
            "unit": "ns/iter",
            "extra": "iterations: 2967\ncpu: 288301.48297944065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 287256.850489364,
            "unit": "ns/iter",
            "extra": "iterations: 2963\ncpu: 287256.6655416798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 285063.04881310934,
            "unit": "ns/iter",
            "extra": "iterations: 2991\ncpu: 285049.8161150118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 547446.3019999973,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547451.5999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4709494.035532909,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4709356.345177675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3854185.714876086,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3854091.3223140435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3855850.2448132588,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3855678.838174283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3850920.020746868,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3850905.39419088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2248815.949029158,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2248643.6893203864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3749346.951612933,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3749179.435483864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14972981.394366493,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14972226.760563385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6539393.250000102,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6539240 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18835697.543860227,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18834945.614035092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75802.44501733719,
            "unit": "ns/iter",
            "extra": "iterations: 11249\ncpu: 75799.81331673922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 395100.42745279695,
            "unit": "ns/iter",
            "extra": "iterations: 2171\ncpu: 395092.12344541744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 313897.21556449274,
            "unit": "ns/iter",
            "extra": "iterations: 2737\ncpu: 313883.8509316767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 313309.1249089674,
            "unit": "ns/iter",
            "extra": "iterations: 2746\ncpu: 313305.13474144303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 313929.52781844704,
            "unit": "ns/iter",
            "extra": "iterations: 2732\ncpu: 313925.03660322307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 546498.081999971,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546503.8000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4771493.295918367,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4771288.2653061235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3900262.37238507,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3900103.347280347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3897329.092050385,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3897361.0878660935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3904770.3514644355,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3904611.7154811574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2283014.9631448914,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2282999.0171990227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3784007.5447153193,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3783952.0325203124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15325181.857143173,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15324451.428571401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6706393.009999943,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6705948.000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 68209.85380491309,
            "unit": "ns/iter",
            "extra": "iterations: 12497\ncpu: 68209.01016243931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 352994.3277068846,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 352981.7620419919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 280942.2632786909,
            "unit": "ns/iter",
            "extra": "iterations: 3050\ncpu: 280932.7868852459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 280789.660006562,
            "unit": "ns/iter",
            "extra": "iterations: 3053\ncpu: 280792.30265312974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 277688.843932511,
            "unit": "ns/iter",
            "extra": "iterations: 3082\ncpu: 277675.01622323185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 509311.3369999855,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509316.59999999823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4736312.583756287,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4736088.324873112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3856496.1239667675,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3856376.8595041605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3872888.1404960128,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3872544.214876025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3858552.082644474,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3858540.082644656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2258035.19902912,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2257984.466019422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3751674.586345438,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3751506.8273092243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6285.423704552162,
            "unit": "ns/iter",
            "extra": "iterations: 111776\ncpu: 6285.487045519586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 40843.19885608675,
            "unit": "ns/iter",
            "extra": "iterations: 17309\ncpu: 40841.8915015313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32076.028039951238,
            "unit": "ns/iter",
            "extra": "iterations: 21826\ncpu: 32075.923210849425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32168.363080459705,
            "unit": "ns/iter",
            "extra": "iterations: 21750\ncpu: 32164.983908046124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24755.431582303965,
            "unit": "ns/iter",
            "extra": "iterations: 28231\ncpu: 24755.672841911393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 179524.81391171343,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 179518.09548254384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 298573.11423699587,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 298576.172208012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77441.01282335001,
            "unit": "ns/iter",
            "extra": "iterations: 9046\ncpu: 77436.87817820099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77368.62498619301,
            "unit": "ns/iter",
            "extra": "iterations: 9053\ncpu: 77366.60775433645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76796.38868792605,
            "unit": "ns/iter",
            "extra": "iterations: 9123\ncpu: 76797.15006028778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 160641.21699196193,
            "unit": "ns/iter",
            "extra": "iterations: 4355\ncpu: 160628.7944890917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 135746.7124322262,
            "unit": "ns/iter",
            "extra": "iterations: 5164\ncpu: 135748.10224632116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 49120.40483214029,
            "unit": "ns/iter",
            "extra": "iterations: 14238\ncpu: 49117.3830594179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 238633.50904126954,
            "unit": "ns/iter",
            "extra": "iterations: 2931\ncpu: 238631.9686113965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 193561.18879380965,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 193549.6825834927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 193222.1971286582,
            "unit": "ns/iter",
            "extra": "iterations: 3622\ncpu: 193223.99226946186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 193912.43874723263,
            "unit": "ns/iter",
            "extra": "iterations: 3608\ncpu: 193901.94013303684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 343028.13607438165,
            "unit": "ns/iter",
            "extra": "iterations: 2043\ncpu: 343031.3754282941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1341141.3238095734,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1340646.6666666681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1124439.133226377,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1124419.7431781695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1124891.0353697978,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1124854.50160771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1120613.5032051196,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1120554.647435904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 728773.3132780042,
            "unit": "ns/iter",
            "extra": "iterations: 964\ncpu: 728780.7053941867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1114256.5723370295,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1114214.626391092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 49901.43192990232,
            "unit": "ns/iter",
            "extra": "iterations: 14037\ncpu: 49901.95198404242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 242971.764115001,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 242954.7280914466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 197568.56635407853,
            "unit": "ns/iter",
            "extra": "iterations: 3519\ncpu: 197570.47456663832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 197746.83911938887,
            "unit": "ns/iter",
            "extra": "iterations: 3543\ncpu: 197736.04290149658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 199377.19116397243,
            "unit": "ns/iter",
            "extra": "iterations: 3531\ncpu: 199376.72047578543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 341685.3483201639,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 341670.8003952579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1331278.8653845603,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1331299.0384615539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1151453.9230769826,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1151418.910256397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1118341.5047923063,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1118297.7635782731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1122364.5105007815,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1122372.8594507258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 723543.6649431195,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 723364.2192347384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1112148.7365080107,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1112145.2380952258 ns\nthreads: 1"
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
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409121382,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15922.658864632895,
            "unit": "ns/iter",
            "extra": "iterations: 43792\ncpu: 15921.227621483376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 150699.212943258,
            "unit": "ns/iter",
            "extra": "iterations: 5640\ncpu: 150698.13829787233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 284931.93442623346,
            "unit": "ns/iter",
            "extra": "iterations: 3050\ncpu: 284918.22950819676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 417629.7378313141,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 417624.9156626509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 562915.6091370604,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 562873.47715736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 555898.8339999473,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555903.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 665751.493543724,
            "unit": "ns/iter",
            "extra": "iterations: 1394\ncpu: 665716.3558106163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 771845.7113144903,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 771803.9933444262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 878935.8230841621,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 878884.2005676435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12766.61729834125,
            "unit": "ns/iter",
            "extra": "iterations: 54907\ncpu: 12766.00615586355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10624.969767512335,
            "unit": "ns/iter",
            "extra": "iterations: 66154\ncpu: 10624.520059255688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10735.962043504822,
            "unit": "ns/iter",
            "extra": "iterations: 65417\ncpu: 10735.123897457843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10726.030066780884,
            "unit": "ns/iter",
            "extra": "iterations: 65288\ncpu: 10725.801066045833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18362.01126982136,
            "unit": "ns/iter",
            "extra": "iterations: 38155\ncpu: 18361.22395492071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 67457.94345845841,
            "unit": "ns/iter",
            "extra": "iterations: 12734\ncpu: 67455.59918328894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 368906.4869267002,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 368896.1851693097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 291640.00272664597,
            "unit": "ns/iter",
            "extra": "iterations: 2934\ncpu: 291629.072937969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 285312.46489183407,
            "unit": "ns/iter",
            "extra": "iterations: 3005\ncpu: 285295.14143094816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 284760.0757223664,
            "unit": "ns/iter",
            "extra": "iterations: 3011\ncpu: 284755.7289936897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 551139.0249999976,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551135.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4680259.13636381,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4680000.505050506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3827735.8312756754,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3827607.4074073946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3815797.20987642,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3815516.460905346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3825207.6106557595,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3825034.0163934436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2251873.4009661395,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2251791.5458937255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3722003.285140572,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3721867.0682731033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14782373.534245998,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14781454.794520555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6248479.280000083,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6248155.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18145934.491525106,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 18141738.983050834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 73675.51573891196,
            "unit": "ns/iter",
            "extra": "iterations: 11659\ncpu: 73674.38888412381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 386191.0724832256,
            "unit": "ns/iter",
            "extra": "iterations: 2235\ncpu: 386172.9753914983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 313091.52039329486,
            "unit": "ns/iter",
            "extra": "iterations: 2746\ncpu: 313064.4209759656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 310148.6043243181,
            "unit": "ns/iter",
            "extra": "iterations: 2775\ncpu: 310145.0810810817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 312168.04604786116,
            "unit": "ns/iter",
            "extra": "iterations: 2758\ncpu: 312148.0058013054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 554614.5200000297,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554584.9000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4739977.045918302,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4739704.591836729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3868748.5020748237,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3868727.800829875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3866671.273858836,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3866592.116182557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3861259.87551865,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3861082.987551892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2279754.1764705842,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2279732.8431372447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3755061.8097167113,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3754930.769230754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15128025.225352194,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15127215.492957734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6521280.800000113,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6520857.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 66725.17079846471,
            "unit": "ns/iter",
            "extra": "iterations: 12787\ncpu: 66724.68913740478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 350273.6640942383,
            "unit": "ns/iter",
            "extra": "iterations: 2462\ncpu: 350256.8237205518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 280379.81382458843,
            "unit": "ns/iter",
            "extra": "iterations: 3067\ncpu: 280372.48125203873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 280957.79679843073,
            "unit": "ns/iter",
            "extra": "iterations: 3061\ncpu: 280946.4554067281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 278970.19356933836,
            "unit": "ns/iter",
            "extra": "iterations: 3079\ncpu: 278971.87398505834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 515457.7920000065,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515414.8000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4704518.924242363,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4704182.323232349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3840544.337448724,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3840379.0123456735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3827225.9382717116,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3826982.71604938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3830116.131687313,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3829951.4403292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2244420.7836538674,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 2244308.653846155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3745226.7240000763,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3745149.200000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6233.097748926391,
            "unit": "ns/iter",
            "extra": "iterations: 111991\ncpu: 6232.9687207007655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39272.62819604322,
            "unit": "ns/iter",
            "extra": "iterations: 18343\ncpu: 39270.800850460706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 32378.236801925654,
            "unit": "ns/iter",
            "extra": "iterations: 21613\ncpu: 32376.2041363991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32183.450268754958,
            "unit": "ns/iter",
            "extra": "iterations: 21767\ncpu: 32181.8532641153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 24347.317808410873,
            "unit": "ns/iter",
            "extra": "iterations: 28728\ncpu: 24346.237120579313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 178145.26597098913,
            "unit": "ns/iter",
            "extra": "iterations: 3929\ncpu: 178138.91575464632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 308312.80043957534,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 308293.75824175763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76648.01539814968,
            "unit": "ns/iter",
            "extra": "iterations: 9092\ncpu: 76648.54817421843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 77069.41961432752,
            "unit": "ns/iter",
            "extra": "iterations: 9075\ncpu: 77064.04407713465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 77030.27317825792,
            "unit": "ns/iter",
            "extra": "iterations: 9071\ncpu: 77026.11619446568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 158935.140072538,
            "unit": "ns/iter",
            "extra": "iterations: 4412\ncpu: 158929.21577515855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 149115.3143221925,
            "unit": "ns/iter",
            "extra": "iterations: 4699\ncpu: 149108.29963821897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 45727.45827624206,
            "unit": "ns/iter",
            "extra": "iterations: 15327\ncpu: 45724.86461799497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 221216.74372815806,
            "unit": "ns/iter",
            "extra": "iterations: 3149\ncpu: 221210.19371228633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 181243.88762299504,
            "unit": "ns/iter",
            "extra": "iterations: 3862\ncpu: 181238.7364060078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 179989.01237432708,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 179979.4534673863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 182363.98152484893,
            "unit": "ns/iter",
            "extra": "iterations: 3843\ncpu: 182363.3099141308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 332237.5813181392,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 332230.5357989543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1313634.3689138547,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1313608.2397003586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1099825.670329632,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1099747.0957613783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1103821.0630914501,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1103791.482649839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1100268.0537125247,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1100207.4249605064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 697646.5029880384,
            "unit": "ns/iter",
            "extra": "iterations: 1004\ncpu: 697626.4940239061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1083937.9165378637,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1083915.1468315315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 46444.59887342479,
            "unit": "ns/iter",
            "extra": "iterations: 15090\ncpu: 46441.45791915212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 225771.06518947132,
            "unit": "ns/iter",
            "extra": "iterations: 3114\ncpu: 225764.73988439317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 185289.3372123786,
            "unit": "ns/iter",
            "extra": "iterations: 3781\ncpu: 185283.15260513127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 185483.0134671264,
            "unit": "ns/iter",
            "extra": "iterations: 3787\ncpu: 185481.8325851579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 185234.72529800198,
            "unit": "ns/iter",
            "extra": "iterations: 3775\ncpu: 185224.37086092873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 331145.9058656614,
            "unit": "ns/iter",
            "extra": "iterations: 2114\ncpu: 331148.0132450349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1301234.6171004015,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1301155.5762081929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1102037.012558848,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1101991.5227629524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1098037.9451411173,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1097952.821316611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1098614.405660375,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1098601.2578616512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 697881.8727634416,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 697886.5805169006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1086382.9069767974,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1086314.573643412 ns\nthreads: 1"
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412517216,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15733.458393491599,
            "unit": "ns/iter",
            "extra": "iterations: 43635\ncpu: 15732.14850464077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 127279.60766561335,
            "unit": "ns/iter",
            "extra": "iterations: 6627\ncpu: 127274.75479100647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 241078.99334811367,
            "unit": "ns/iter",
            "extra": "iterations: 3608\ncpu: 241059.64523281602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 351650.910721555,
            "unit": "ns/iter",
            "extra": "iterations: 2453\ncpu: 351648.5935589075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 464036.2548077001,
            "unit": "ns/iter",
            "extra": "iterations: 1872\ncpu: 464003.6324786322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 575620.8394648769,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 575601.0033444818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 553211.5510000039,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553188.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 641930.4579999902,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641891.8000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 734339.6229248715,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 734309.249011858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12464.781862308131,
            "unit": "ns/iter",
            "extra": "iterations: 56038\ncpu: 12463.77993504407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10490.522709234892,
            "unit": "ns/iter",
            "extra": "iterations: 66779\ncpu: 10489.731801913778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10454.96146761443,
            "unit": "ns/iter",
            "extra": "iterations: 66775\ncpu: 10454.620741295399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10373.049200000052,
            "unit": "ns/iter",
            "extra": "iterations: 67500\ncpu: 10372.991111111096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17624.808488117156,
            "unit": "ns/iter",
            "extra": "iterations: 39679\ncpu: 17624.186597444488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 52971.0936000015,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52966.200000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 288848.5808403368,
            "unit": "ns/iter",
            "extra": "iterations: 2975\ncpu: 288832.7058823531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 227859.59647718447,
            "unit": "ns/iter",
            "extra": "iterations: 3747\ncpu: 227846.70402989085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 225424.72026490988,
            "unit": "ns/iter",
            "extra": "iterations: 3775\ncpu: 225413.72185430452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 223197.9320616584,
            "unit": "ns/iter",
            "extra": "iterations: 3827\ncpu: 223181.3692187086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 605024.2696177108,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 604984.4399731721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3990927.27155168,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 3990640.086206888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3261830.644599243,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3261671.777003475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3239337.678321606,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3239037.4125874145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3238893.6306619737,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3238788.5017421665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1908119.6152263675,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1907999.176954739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3149582.6530612228,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3149483.67346939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12185410.10227302,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12183932.954545451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5377851.609999879,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5377668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15629906.73529478,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15628926.47058825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59597.32160000044,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59597.07999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 327243.34232521884,
            "unit": "ns/iter",
            "extra": "iterations: 2632\ncpu: 327218.35106383025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 252744.12338044596,
            "unit": "ns/iter",
            "extra": "iterations: 3396\ncpu: 252742.28504122503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 253333.319199057,
            "unit": "ns/iter",
            "extra": "iterations: 3396\ncpu: 253325.29446407605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 250134.66307514405,
            "unit": "ns/iter",
            "extra": "iterations: 3434\ncpu: 250120.55911473458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 582689.4661301117,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 582656.8745808166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4055180.5851527993,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4054997.37991267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3294689.718309785,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3294581.6901408397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3294433.351063843,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3294212.41134753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3263705.3438596316,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3263469.4736842103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1941591.8225470064,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1941474.321503122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3187113.7123287427,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3186899.3150684927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12410626.790697701,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12409968.60465118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5404316.240000072,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5404005.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51938.40829999772,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51937.079999999725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 278544.6381045076,
            "unit": "ns/iter",
            "extra": "iterations: 3081\ncpu: 278542.87568971125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 217351.65455008374,
            "unit": "ns/iter",
            "extra": "iterations: 3934\ncpu: 217341.15404168714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 217444.39279369722,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 217443.11088556141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 214419.08611599912,
            "unit": "ns/iter",
            "extra": "iterations: 3983\ncpu: 214411.4737634937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 541517.847731506,
            "unit": "ns/iter",
            "extra": "iterations: 1609\ncpu: 541475.8234928533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4013841.343347617,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4013812.875536466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3245159.944444372,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3245017.7083333344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3246247.8556337296,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3246116.5492957835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3240614.2996515827,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3240550.5226480947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1903991.5430328555,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1903941.3934426263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3157568.1864406546,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3157546.4406779623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6276.847784269668,
            "unit": "ns/iter",
            "extra": "iterations: 111769\ncpu: 6276.495271497486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33479.73773241454,
            "unit": "ns/iter",
            "extra": "iterations: 20868\ncpu: 33479.03967797572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28143.793777921797,
            "unit": "ns/iter",
            "extra": "iterations: 24847\ncpu: 28141.667002052523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27967.651084740886,
            "unit": "ns/iter",
            "extra": "iterations: 25029\ncpu: 27967.493707299465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22200.331987667334,
            "unit": "ns/iter",
            "extra": "iterations: 31459\ncpu: 22198.709431323394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 157775.53750844675,
            "unit": "ns/iter",
            "extra": "iterations: 4439\ncpu: 157761.97341743586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 266187.9680851215,
            "unit": "ns/iter",
            "extra": "iterations: 2632\ncpu: 266171.54255319195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66007.61184583591,
            "unit": "ns/iter",
            "extra": "iterations: 10586\ncpu: 66001.68146608738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66451.13943127873,
            "unit": "ns/iter",
            "extra": "iterations: 10550\ncpu: 66450.79620853081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66527.8490941882,
            "unit": "ns/iter",
            "extra": "iterations: 10543\ncpu: 66523.35198709983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 137887.83951104345,
            "unit": "ns/iter",
            "extra": "iterations: 5072\ncpu: 137879.3966876973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 125043.88918582453,
            "unit": "ns/iter",
            "extra": "iterations: 5613\ncpu: 125037.48441118708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42422.77561034672,
            "unit": "ns/iter",
            "extra": "iterations: 16507\ncpu: 42419.94911249741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 205784.14684288163,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 205757.0337738633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 165812.3882966065,
            "unit": "ns/iter",
            "extra": "iterations: 4221\ncpu: 165797.2755271268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 165844.5688225461,
            "unit": "ns/iter",
            "extra": "iterations: 4221\ncpu: 165835.13385453535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 166470.94965567108,
            "unit": "ns/iter",
            "extra": "iterations: 4211\ncpu: 166457.9909760159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 300751.9772532065,
            "unit": "ns/iter",
            "extra": "iterations: 2330\ncpu: 300726.56652360817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1147238.1047462616,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1147192.4713584464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 963230.342935543,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 963210.4252400397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 963982.9765840349,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 963936.3636363513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 957281.8961748349,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 957214.2076502742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 632470.7445848607,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 632421.389891699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 951013.4884038153,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 950978.7175989206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43633.7234214645,
            "unit": "ns/iter",
            "extra": "iterations: 16075\ncpu: 43630.35769828921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 206666.77955083008,
            "unit": "ns/iter",
            "extra": "iterations: 3384\ncpu: 206651.1229314406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 169771.6722464795,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 169766.54536633013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 169594.09108527357,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 169588.4205426369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 170883.77780488017,
            "unit": "ns/iter",
            "extra": "iterations: 4100\ncpu: 170882.68292683005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 305981.7999128187,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 305975.1089799465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1144953.2553191865,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1144879.5417348524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 960612.3722527194,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 960522.6648351566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 961730.5920329343,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 961648.3516483513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 954857.3705722619,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 954822.4795640369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 635223.8586956826,
            "unit": "ns/iter",
            "extra": "iterations: 1104\ncpu: 635203.7137681143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 952661.9144022419,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 952603.8043478116 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702415991143,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16245.818278451337,
            "unit": "ns/iter",
            "extra": "iterations: 43275\ncpu: 16245.264009243212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 131643.91583385132,
            "unit": "ns/iter",
            "extra": "iterations: 6404\ncpu: 131636.69581511558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 248683.6498711709,
            "unit": "ns/iter",
            "extra": "iterations: 3493\ncpu: 248673.46120813058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 364284.47053871833,
            "unit": "ns/iter",
            "extra": "iterations: 2376\ncpu: 364280.85016835027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 478507.40738699253,
            "unit": "ns/iter",
            "extra": "iterations: 1814\ncpu: 478484.17861080467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 593896.0664383604,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 593873.0821917807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 571685.4289999844,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571651.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 661913.0552763884,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 661880.3302225422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 758751.2724306821,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 758715.9053833612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13032.480859698922,
            "unit": "ns/iter",
            "extra": "iterations: 54205\ncpu: 13031.961996125843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10785.995218041731,
            "unit": "ns/iter",
            "extra": "iterations: 64827\ncpu: 10785.541518194583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10834.75567222345,
            "unit": "ns/iter",
            "extra": "iterations: 65142\ncpu: 10834.321942832572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10702.254138042585,
            "unit": "ns/iter",
            "extra": "iterations: 65067\ncpu: 10701.69056510982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18097.50652202013,
            "unit": "ns/iter",
            "extra": "iterations: 38715\ncpu: 18096.975332558457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54518.22329999913,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54516.049999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 294364.5320974929,
            "unit": "ns/iter",
            "extra": "iterations: 2913\ncpu: 294353.8619979406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 233841.94009847392,
            "unit": "ns/iter",
            "extra": "iterations: 3656\ncpu: 233832.87746170646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 230697.16756465757,
            "unit": "ns/iter",
            "extra": "iterations: 3712\ncpu: 230686.93426724122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 228854.59338313513,
            "unit": "ns/iter",
            "extra": "iterations: 3748\ncpu: 228843.24973319116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 604383.1970509401,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 604359.3163538873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4116634.132743427,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4116429.20353983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3324130.442857052,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3323990.7142857104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3302004.067615645,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3301856.5836299025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3303344.5177304833,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3303170.5673758807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1929316.4499999923,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1929231.0416666607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3230090.881533067,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3230030.6620209026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12216807.750000022,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12215905.681818174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5483292.6500000665,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5483288.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15849287.537313651,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15848767.164179113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 61003.52439286479,
            "unit": "ns/iter",
            "extra": "iterations: 13959\ncpu: 61001.61186331377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 325875.66957511374,
            "unit": "ns/iter",
            "extra": "iterations: 2636\ncpu: 325861.22913505376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 258563.77050165602,
            "unit": "ns/iter",
            "extra": "iterations: 3329\ncpu: 258558.54610994138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 257336.1288105195,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 257322.35505080604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 252510.45091122555,
            "unit": "ns/iter",
            "extra": "iterations: 3402\ncpu: 252504.61493239124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 580250.8536260779,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 580230.4723885566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4196058.30316746,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4195946.153846157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3350691.510791408,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3350563.6690647416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3370581.425992826,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3370426.7148014507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3370313.3068592176,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3370226.3537906134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1976018.976645416,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1975906.1571125258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3284111.4522968167,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3283983.0388692636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12603871.46428565,
            "unit": "ns/iter",
            "extra": "iterations: 84\ncpu: 12603397.619047554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5440378.539999813,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5440149.999999946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52685.6897000016,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52683.50999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 289241.9457547174,
            "unit": "ns/iter",
            "extra": "iterations: 2968\ncpu: 289233.96226415277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 223495.71976017102,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 223487.95620437953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 222065.66856994433,
            "unit": "ns/iter",
            "extra": "iterations: 3853\ncpu: 222059.9013755517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 220572.94630872575,
            "unit": "ns/iter",
            "extra": "iterations: 3874\ncpu: 220566.15900877703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 539574.951642915,
            "unit": "ns/iter",
            "extra": "iterations: 1613\ncpu: 539556.8505889672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4130660.678571501,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4130562.053571429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3330596.647686789,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3330487.1886121016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3321962.5871885815,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3321824.555160158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3326381.483985692,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3326270.46263346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1922985.7417355373,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1922936.3636363666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3230923.737762238,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3230805.2447552416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6311.2703175862625,
            "unit": "ns/iter",
            "extra": "iterations: 109671\ncpu: 6311.027527787646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35507.030945617196,
            "unit": "ns/iter",
            "extra": "iterations: 19712\ncpu: 35505.40787337674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30018.807937451762,
            "unit": "ns/iter",
            "extra": "iterations: 23534\ncpu: 30018.81958018179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29782.02536772527,
            "unit": "ns/iter",
            "extra": "iterations: 23455\ncpu: 29781.62865060743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22805.33501875716,
            "unit": "ns/iter",
            "extra": "iterations: 30655\ncpu: 22805.10194095589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 157315.9589103308,
            "unit": "ns/iter",
            "extra": "iterations: 4405\ncpu: 157308.94438138756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 274166.374021915,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 274154.77308293874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 68756.00667386441,
            "unit": "ns/iter",
            "extra": "iterations: 10189\ncpu: 68752.44871920733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 68875.00854868862,
            "unit": "ns/iter",
            "extra": "iterations: 10177\ncpu: 68872.85054534725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 68648.30729268763,
            "unit": "ns/iter",
            "extra": "iterations: 10202\ncpu: 68647.58870809716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133504.15292096292,
            "unit": "ns/iter",
            "extra": "iterations: 5238\ncpu: 133502.0045819001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 128263.05963302929,
            "unit": "ns/iter",
            "extra": "iterations: 5450\ncpu: 128259.87155963242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44754.114735151954,
            "unit": "ns/iter",
            "extra": "iterations: 15575\ncpu: 44753.5280898876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 219431.893036388,
            "unit": "ns/iter",
            "extra": "iterations: 3188\ncpu: 219429.64240903308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174908.5708917893,
            "unit": "ns/iter",
            "extra": "iterations: 3992\ncpu: 174900.67635270677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 173553.25446428388,
            "unit": "ns/iter",
            "extra": "iterations: 4032\ncpu: 173549.20634920613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 175763.23933768048,
            "unit": "ns/iter",
            "extra": "iterations: 3986\ncpu: 175755.2433517312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 311935.7736771901,
            "unit": "ns/iter",
            "extra": "iterations: 2249\ncpu: 311916.45175633795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1193266.8115449573,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1193216.1290322526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1002213.9670487171,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1002182.9512893988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1001081.2389126878,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1001080.2575107359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 992705.1232294692,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 992686.6855524145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 649495.9296296192,
            "unit": "ns/iter",
            "extra": "iterations: 1080\ncpu: 649469.9074074151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 987551.3554301535,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 987505.6417489434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 45580.419377927705,
            "unit": "ns/iter",
            "extra": "iterations: 15368\ncpu: 45576.94560124975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 219633.35380758546,
            "unit": "ns/iter",
            "extra": "iterations: 3191\ncpu: 219629.86524600242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 179328.0685597275,
            "unit": "ns/iter",
            "extra": "iterations: 3909\ncpu: 179319.23765669056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 176975.67551174658,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 176971.1650240072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178190.1435126165,
            "unit": "ns/iter",
            "extra": "iterations: 3923\ncpu: 178183.6349732337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 316486.1134206887,
            "unit": "ns/iter",
            "extra": "iterations: 2213\ncpu: 316476.999548126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1193226.5969388252,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1193176.5306122426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 996284.9317212313,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 996244.6657183346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 994657.3516643154,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 994629.3777134569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 989342.4908321608,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 989302.256699568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 645668.4669117654,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 645649.2647058747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 986483.3028168954,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 986438.8732394322 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418345630,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15969.228238566931,
            "unit": "ns/iter",
            "extra": "iterations: 43862\ncpu: 15968.845469882814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 131417.30572359977,
            "unit": "ns/iter",
            "extra": "iterations: 6447\ncpu: 131414.4253140996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 246915.1969429633,
            "unit": "ns/iter",
            "extra": "iterations: 3402\ncpu: 246907.96590241036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 362196.8236279941,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 362186.42647674895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 477398.53930732055,
            "unit": "ns/iter",
            "extra": "iterations: 1819\ncpu: 477377.7350192412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 593263.5919618668,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 593257.9700272481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 579825.6080000214,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579829.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 659285.4159999888,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 659267.5999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 756163.0867098811,
            "unit": "ns/iter",
            "extra": "iterations: 1234\ncpu: 756142.9497568879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12617.584323467869,
            "unit": "ns/iter",
            "extra": "iterations: 55548\ncpu: 12616.65946568734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10614.681127752594,
            "unit": "ns/iter",
            "extra": "iterations: 65901\ncpu: 10614.51267810808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10673.027288945214,
            "unit": "ns/iter",
            "extra": "iterations: 66144\ncpu: 10672.984700048364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10466.11839626871,
            "unit": "ns/iter",
            "extra": "iterations: 66894\ncpu: 10465.893802134711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17633.880797036676,
            "unit": "ns/iter",
            "extra": "iterations: 39697\ncpu: 17633.58944000804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 52685.84379999766,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52683.609999999884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 296459.1936475397,
            "unit": "ns/iter",
            "extra": "iterations: 2928\ncpu: 296449.9658469942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 233052.48633132895,
            "unit": "ns/iter",
            "extra": "iterations: 3658\ncpu: 233038.98305084746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 230888.03870094664,
            "unit": "ns/iter",
            "extra": "iterations: 3695\ncpu: 230876.1028416782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 227406.2867783857,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 227398.004788507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 592873.795811529,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 592831.0209424071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4098115.6666668695,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4098081.5789473685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3298873.3629893064,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3298822.0640569385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3290396.8723404263,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3290291.4893617015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3277304.5053004785,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3277251.2367491154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1933149.751565734,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1933041.544885178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3212861.607638907,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3212817.0138888936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12252145.264368268,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12251791.954022955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5340825.4100003205,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5340857.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15745967.926470846,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15744763.235294122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59162.40909999715,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59160.90999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 331192.18495778996,
            "unit": "ns/iter",
            "extra": "iterations: 2606\ncpu: 331179.1634689177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 259433.71056615113,
            "unit": "ns/iter",
            "extra": "iterations: 3303\ncpu: 259430.69936421388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 257019.36456151304,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 257006.43519904136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 254661.68612922536,
            "unit": "ns/iter",
            "extra": "iterations: 3374\ncpu: 254654.23829282704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 577525.4220305446,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 577512.475116123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4157129.6250000647,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4156962.053571427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3337661.1618705806,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3337571.582733801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3344701.050359691,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3344528.417266195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3400607.6808511144,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3396104.9645390073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1968456.2860169886,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1968404.025423727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3235090.393728151,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3234999.303135893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12544676.247058734,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12544390.58823535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5243067.00000011,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5243026.000000057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51647.20059999581,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51645.290000000445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 286672.01930116693,
            "unit": "ns/iter",
            "extra": "iterations: 3005\ncpu: 286666.98835274513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 223938.2473876754,
            "unit": "ns/iter",
            "extra": "iterations: 3828\ncpu: 223931.32183908197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 223211.61959353788,
            "unit": "ns/iter",
            "extra": "iterations: 3838\ncpu: 223212.71495570557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 221289.63942059124,
            "unit": "ns/iter",
            "extra": "iterations: 3866\ncpu: 221274.8577340909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 530001.0231425429,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 529984.2874543231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4090771.359649013,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4090795.614035084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3305391.663120451,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3305305.6737588784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3296149.985865792,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3296114.134275632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3275106.933098531,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3275072.887323931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1918430.2484472513,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1918390.476190483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3197192.3367696987,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3197170.103092788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6224.5317236409755,
            "unit": "ns/iter",
            "extra": "iterations: 112361\ncpu: 6224.30825642352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36075.77963220311,
            "unit": "ns/iter",
            "extra": "iterations: 19413\ncpu: 36075.95940864364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29445.89400578732,
            "unit": "ns/iter",
            "extra": "iterations: 24190\ncpu: 29445.080611822836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28298.151221089265,
            "unit": "ns/iter",
            "extra": "iterations: 24732\ncpu: 28297.610383309184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22197.386943432015,
            "unit": "ns/iter",
            "extra": "iterations: 31555\ncpu: 22197.131991760518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 156008.10091335236,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 156006.70527957226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 272455.37514609454,
            "unit": "ns/iter",
            "extra": "iterations: 2567\ncpu: 272451.5777171795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67901.6216744901,
            "unit": "ns/iter",
            "extra": "iterations: 10224\ncpu: 67901.23239436607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67547.2039518091,
            "unit": "ns/iter",
            "extra": "iterations: 10375\ncpu: 67545.96626505935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67692.4814957608,
            "unit": "ns/iter",
            "extra": "iterations: 10376\ncpu: 67690.81534309991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133252.31821645965,
            "unit": "ns/iter",
            "extra": "iterations: 5248\ncpu: 133253.39176829247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 127899.91287670536,
            "unit": "ns/iter",
            "extra": "iterations: 5475\ncpu: 127893.64383561572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43162.02735843181,
            "unit": "ns/iter",
            "extra": "iterations: 16229\ncpu: 43161.772136299805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 209425.90266547777,
            "unit": "ns/iter",
            "extra": "iterations: 3339\ncpu: 209420.0359389031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 169611.43514035462,
            "unit": "ns/iter",
            "extra": "iterations: 4132\ncpu: 169609.4869312674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 169629.15173585678,
            "unit": "ns/iter",
            "extra": "iterations: 4119\ncpu: 169628.25928623514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 171112.45110023636,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 171111.49144254127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 306422.28826417145,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 306416.956715752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1183242.6880269751,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1183215.1770657734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 985925.3159379542,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 985931.3117066324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 981429.8237762267,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 981381.6783216728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 982643.1025281181,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 982649.016853926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 639891.9881169826,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 639868.0073126146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 971396.1442440859,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 971381.5533980535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43925.66373626381,
            "unit": "ns/iter",
            "extra": "iterations: 15925\ncpu: 43925.90266875935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 213918.40612557554,
            "unit": "ns/iter",
            "extra": "iterations: 3265\ncpu: 213916.87595712187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 174661.61260587507,
            "unit": "ns/iter",
            "extra": "iterations: 4014\ncpu: 174657.149975088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 173138.27846534635,
            "unit": "ns/iter",
            "extra": "iterations: 4040\ncpu: 173132.30198019842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 174285.0880377902,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 174285.8990300921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 310310.0778760984,
            "unit": "ns/iter",
            "extra": "iterations: 2260\ncpu: 310300.4424778759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1174337.9278523177,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1174320.637583903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 982595.3089887847,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 982581.4606741498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 979277.3767506534,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 979282.6330532163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 977856.5097765207,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 977849.441340792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 642463.191000944,
            "unit": "ns/iter",
            "extra": "iterations: 1089\ncpu: 642435.0780532594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 974825.6248256989,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 974805.1603904994 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420962197,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15430.387223461054,
            "unit": "ns/iter",
            "extra": "iterations: 43032\ncpu: 15429.650027886228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126516.30325178699,
            "unit": "ns/iter",
            "extra": "iterations: 6704\ncpu: 126510.93377088307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 236851.64094875052,
            "unit": "ns/iter",
            "extra": "iterations: 3668\ncpu: 236843.320610687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 347613.0157004858,
            "unit": "ns/iter",
            "extra": "iterations: 2484\ncpu: 347596.45732689206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 457988.41772152204,
            "unit": "ns/iter",
            "extra": "iterations: 1896\ncpu: 457966.1919831223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 571756.1230263088,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 571728.4868421053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 545334.7629999997,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 545326.4000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 633763.7960000393,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633725.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 724034.0859375305,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 724010.0000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12506.203196305943,
            "unit": "ns/iter",
            "extra": "iterations: 56315\ncpu: 12505.559797567255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10505.501500284865,
            "unit": "ns/iter",
            "extra": "iterations: 66654\ncpu: 10505.169982296655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10407.783707447172,
            "unit": "ns/iter",
            "extra": "iterations: 67270\ncpu: 10407.220157573956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10367.812735081015,
            "unit": "ns/iter",
            "extra": "iterations: 67530\ncpu: 10365.449429883018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17659.673794769937,
            "unit": "ns/iter",
            "extra": "iterations: 39702\ncpu: 17659.60656893859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 52933.95740000051,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52931.18000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 287881.69207522494,
            "unit": "ns/iter",
            "extra": "iterations: 2978\ncpu: 287873.270651444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 228977.0929298463,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 228962.23888591296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 230172.4631918299,
            "unit": "ns/iter",
            "extra": "iterations: 3722\ncpu: 230163.97098334163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 224809.14154169668,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 224799.3159694818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 585554.9895833108,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 585534.1145833322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3999322.3448276133,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 3999168.965517242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3232526.701388849,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3232385.4166666684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3218075.3321798635,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3217918.6851211097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3226423.6712802523,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3226246.3667820026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1901634.471311518,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1901528.6885245873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3146264.8644066374,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3146151.8644067775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12071079.102272816,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12070522.727272725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5410637.25000015,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5410427.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15522366.637681253,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15521898.550724616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59250.266099996916,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59246.99999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 327531.08634462353,
            "unit": "ns/iter",
            "extra": "iterations: 2629\ncpu: 327522.1376949416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 257112.38035339367,
            "unit": "ns/iter",
            "extra": "iterations: 3339\ncpu: 257099.76040730803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 257255.437687239,
            "unit": "ns/iter",
            "extra": "iterations: 3338\ncpu: 257246.3750748968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 252196.83681885304,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 252190.81001472776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 576432.5365206123,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 576404.7144754317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4105787.021834197,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4105672.925764196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3278675.2332155514,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3278632.5088339183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3302803.1936619845,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3302678.8732394334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3268643.550877203,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3268552.9824561356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1938931.9081419965,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1938831.106471817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3183446.9657533797,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3183356.849315062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12447228.465116179,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12446454.651162779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5397077.069999909,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5396843.000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51295.70470000431,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51295.66000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 286713.1781781929,
            "unit": "ns/iter",
            "extra": "iterations: 2997\ncpu: 286701.8351685015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 222003.94301327883,
            "unit": "ns/iter",
            "extra": "iterations: 3843\ncpu: 221992.53187613867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 221358.34773609738,
            "unit": "ns/iter",
            "extra": "iterations: 3865\ncpu: 221351.79818887546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 220226.2404019506,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 220217.34089152305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 527140.9648271771,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 527118.1322013306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4007346.6293104677,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4007100.862068967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3234230.7395831523,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3234094.7916666726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3224321.055363299,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3224230.103806216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3225500.9757784083,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3225307.958477528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1888141.7845528536,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1888086.585365858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3141729.0608108277,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3141630.4054054213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6216.867456399126,
            "unit": "ns/iter",
            "extra": "iterations: 112612\ncpu: 6216.663410648954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34917.54644808848,
            "unit": "ns/iter",
            "extra": "iterations: 20130\ncpu: 34915.46448087429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29404.59894980031,
            "unit": "ns/iter",
            "extra": "iterations: 23805\ncpu: 29403.03297626561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29221.946103424132,
            "unit": "ns/iter",
            "extra": "iterations: 24714\ncpu: 29220.652261875864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22382.73847044451,
            "unit": "ns/iter",
            "extra": "iterations: 31094\ncpu: 22381.726378079315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 156877.9101864498,
            "unit": "ns/iter",
            "extra": "iterations: 4398\ncpu: 156868.23556161876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 265350.0425693579,
            "unit": "ns/iter",
            "extra": "iterations: 2631\ncpu: 265341.0490307834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66266.8054135894,
            "unit": "ns/iter",
            "extra": "iterations: 10566\ncpu: 66263.9314783263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66306.56822041499,
            "unit": "ns/iter",
            "extra": "iterations: 10598\ncpu: 66306.39743347802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66070.63723916849,
            "unit": "ns/iter",
            "extra": "iterations: 10591\ncpu: 66070.45604758814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 135378.92221362938,
            "unit": "ns/iter",
            "extra": "iterations: 5168\ncpu: 135355.20510836036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124756.42951462686,
            "unit": "ns/iter",
            "extra": "iterations: 5604\ncpu: 124754.58600999262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41585.71085986302,
            "unit": "ns/iter",
            "extra": "iterations: 16805\ncpu: 41583.86789645921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 201364.3432020732,
            "unit": "ns/iter",
            "extra": "iterations: 3479\ncpu: 201357.9189422218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 163738.5685219855,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 163729.32647333908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 164443.9270931344,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 164438.68767638865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 166571.61388493242,
            "unit": "ns/iter",
            "extra": "iterations: 4206\ncpu: 166564.14645744156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 305353.1810645791,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 305344.1099476395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1150067.5024629752,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1150013.300492615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 968072.5988934643,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 968056.4315352681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 962916.8443526777,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 962883.3333333371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 954961.0560109382,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 954918.7158469901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 632398.8292237135,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 632375.6164383579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 954955.9822646547,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 954929.4679399634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42529.24540138754,
            "unit": "ns/iter",
            "extra": "iterations: 16418\ncpu: 42527.78048483359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 204955.90413368543,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 204941.24890061468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 167823.52443699187,
            "unit": "ns/iter",
            "extra": "iterations: 4174\ncpu: 167818.9746046956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 168654.71376985835,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 168652.31102551776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 169152.88070513797,
            "unit": "ns/iter",
            "extra": "iterations: 4141\ncpu: 169150.03622313452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 305231.47778747574,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 305230.48780487577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1150862.4264462383,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1150806.1157024987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 965114.9655646911,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 965080.1652892608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 961956.5145228023,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 961899.1701244935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1053858.1475861976,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1053822.3448275889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 630070.0835579475,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 630067.9245283012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 957341.8712328906,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 957326.7123287629 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421378444,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15780.080203068374,
            "unit": "ns/iter",
            "extra": "iterations: 44911\ncpu: 15778.51083253546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 128160.53626903819,
            "unit": "ns/iter",
            "extra": "iterations: 6631\ncpu: 128149.73608807116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 248550.548199444,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 247958.28254847648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 352373.4593711761,
            "unit": "ns/iter",
            "extra": "iterations: 2449\ncpu: 352369.4160881991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 465348.0534188157,
            "unit": "ns/iter",
            "extra": "iterations: 1872\ncpu: 465327.56410256395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 576868.4501992102,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 576840.2390438241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 553665.9450000059,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553665.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 642193.5189999886,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642177.9000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 732134.420221163,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 732083.6492890993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12390.071252810696,
            "unit": "ns/iter",
            "extra": "iterations: 56489\ncpu: 12389.01733080777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10436.355308245167,
            "unit": "ns/iter",
            "extra": "iterations: 67122\ncpu: 10435.971812520487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10398.529893967643,
            "unit": "ns/iter",
            "extra": "iterations: 67338\ncpu: 10398.25358638509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10389.196431220173,
            "unit": "ns/iter",
            "extra": "iterations: 67418\ncpu: 10388.344359073248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17528.58672820203,
            "unit": "ns/iter",
            "extra": "iterations: 40085\ncpu: 17527.446675813862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 53221.70159999473,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53216.929999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 285504.03572619864,
            "unit": "ns/iter",
            "extra": "iterations: 2995\ncpu: 285478.5976627716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 226651.6563163432,
            "unit": "ns/iter",
            "extra": "iterations: 3768\ncpu: 226639.7823779195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 231747.8674537108,
            "unit": "ns/iter",
            "extra": "iterations: 3727\ncpu: 231727.79715588974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 228656.75709694487,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 228584.60096411346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 591648.3866929915,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 591608.3003952566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4001737.6695279414,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4001402.5751072895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3240321.4390244484,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3240214.2857142794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3269019.658536608,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3268942.160278743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3227314.1381818443,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3227050.181818188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1916709.0724638067,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1916609.3167701797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3166248.51369866,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3166103.4246575315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12158411.079545446,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12157172.727272721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5321249.790000024,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5321142.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15516180.9130432,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15515297.10144924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 59806.00849999859,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59803.65000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 326513.10265150917,
            "unit": "ns/iter",
            "extra": "iterations: 2640\ncpu: 326503.21969696955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 254414.50399526107,
            "unit": "ns/iter",
            "extra": "iterations: 3379\ncpu: 254393.8147380874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 252278.04668231079,
            "unit": "ns/iter",
            "extra": "iterations: 3406\ncpu: 252261.80270111625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 251014.35344071643,
            "unit": "ns/iter",
            "extra": "iterations: 3415\ncpu: 251004.4509516843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 572963.7849604392,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 572956.3324538262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4058372.0478260284,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4058292.6086956477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3273107.042105438,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3273040.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3289250.44876323,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3289183.392226165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3256427.220279576,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3256326.573426561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1949554.2851153775,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1949530.398322855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3192759.746575388,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3192504.7945205476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12502741.802325225,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12501890.697674405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5404737.650000015,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5404590.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51405.74409999772,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51404.98000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 278497.1841507023,
            "unit": "ns/iter",
            "extra": "iterations: 3079\ncpu: 278493.4069503093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 216567.5022715756,
            "unit": "ns/iter",
            "extra": "iterations: 3962\ncpu: 216563.50328117117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 219161.81894789846,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 219161.56792645532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 217091.37706585185,
            "unit": "ns/iter",
            "extra": "iterations: 3933\ncpu: 217086.93109585508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 534198.5690607575,
            "unit": "ns/iter",
            "extra": "iterations: 1629\ncpu: 534188.8888888898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3995438.66239333,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3995467.0940170786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3232387.4982698504,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3232328.0276816487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3232403.2698963466,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3232364.013840821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3223665.294117665,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3223659.169550176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1909323.9098360352,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1909292.4180327863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3144187.161615991,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3144148.82154884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6218.164071600514,
            "unit": "ns/iter",
            "extra": "iterations: 112457\ncpu: 6218.0468979254365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35329.106526784184,
            "unit": "ns/iter",
            "extra": "iterations: 19826\ncpu: 35329.11832946636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29096.74543564102,
            "unit": "ns/iter",
            "extra": "iterations: 24045\ncpu: 29096.194635059303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26867.459307907557,
            "unit": "ns/iter",
            "extra": "iterations: 26037\ncpu: 26867.477051887654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22158.108463850323,
            "unit": "ns/iter",
            "extra": "iterations: 31605\ncpu: 22157.64594209761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 156112.38630753066,
            "unit": "ns/iter",
            "extra": "iterations: 4455\ncpu: 156112.2783389447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 263975.21606333245,
            "unit": "ns/iter",
            "extra": "iterations: 2652\ncpu: 263967.5716440408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66184.88913105047,
            "unit": "ns/iter",
            "extra": "iterations: 10553\ncpu: 66183.26542215454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66714.43787213694,
            "unit": "ns/iter",
            "extra": "iterations: 10245\ncpu: 66712.4158125921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66089.38209331571,
            "unit": "ns/iter",
            "extra": "iterations: 10309\ncpu: 66087.79707052128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 137487.28490195746,
            "unit": "ns/iter",
            "extra": "iterations: 5100\ncpu: 137487.29411764938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 125140.66946578183,
            "unit": "ns/iter",
            "extra": "iterations: 5597\ncpu: 125140.70037520079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41631.01295091733,
            "unit": "ns/iter",
            "extra": "iterations: 16910\ncpu: 41629.33175635725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 205736.79706313254,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 205694.9486049905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 165342.60321969067,
            "unit": "ns/iter",
            "extra": "iterations: 4224\ncpu: 165334.09090909018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 165578.1543926005,
            "unit": "ns/iter",
            "extra": "iterations: 4223\ncpu: 165574.37840397912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 167616.57050514233,
            "unit": "ns/iter",
            "extra": "iterations: 4177\ncpu: 167614.62772324486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 299741.2108872815,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 299726.57522503764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1151582.8467874953,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1151556.5074135228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 957142.8821918089,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 957113.8356164382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 959205.4787961148,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 959163.3378932886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 955320.7896174842,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 955310.1092896151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 631395.7746606711,
            "unit": "ns/iter",
            "extra": "iterations: 1105\ncpu: 631387.3303167401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 949037.825439712,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 949014.7496617002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42724.56186290768,
            "unit": "ns/iter",
            "extra": "iterations: 16383\ncpu: 42724.501007140774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 205560.58754406965,
            "unit": "ns/iter",
            "extra": "iterations: 3404\ncpu: 205553.93654523714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 169680.15543161525,
            "unit": "ns/iter",
            "extra": "iterations: 4124\ncpu: 169677.61881668464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 169485.99249212918,
            "unit": "ns/iter",
            "extra": "iterations: 4129\ncpu: 169476.07168805954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 171138.74268293387,
            "unit": "ns/iter",
            "extra": "iterations: 4100\ncpu: 171138.75609756133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 302821.3748378642,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 302811.7596195423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1148175.2036125355,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1148156.4860426993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 957210.8780822443,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 957199.4520547922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 955453.3625171279,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 955434.8837209261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 956240.7295082284,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 956239.7540983602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 628094.0636771048,
            "unit": "ns/iter",
            "extra": "iterations: 1115\ncpu: 628080.7174887909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 948799.461956478,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 948782.4728260856 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702422461629,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15923.673862708169,
            "unit": "ns/iter",
            "extra": "iterations: 44052\ncpu: 15923.022791246709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 131097.35287781205,
            "unit": "ns/iter",
            "extra": "iterations: 6498\ncpu: 131084.28747306863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 245876.80724597024,
            "unit": "ns/iter",
            "extra": "iterations: 3533\ncpu: 245863.2040758562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 359056.65708333126,
            "unit": "ns/iter",
            "extra": "iterations: 2400\ncpu: 359036.16666666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 473059.9180868573,
            "unit": "ns/iter",
            "extra": "iterations: 1819\ncpu: 473034.79934029694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 586975.0155510458,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 586966.6666666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 563970.3169999848,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563967.4999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 654803.874999999,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 654800.5000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 746179.113709667,
            "unit": "ns/iter",
            "extra": "iterations: 1240\ncpu: 746164.7580645155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12766.793987203944,
            "unit": "ns/iter",
            "extra": "iterations: 55016\ncpu: 12766.464301294169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10724.749885896697,
            "unit": "ns/iter",
            "extra": "iterations: 65730\ncpu: 10724.57629697246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10660.968657239066,
            "unit": "ns/iter",
            "extra": "iterations: 65693\ncpu: 10660.785776262333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10663.079361695463,
            "unit": "ns/iter",
            "extra": "iterations: 65674\ncpu: 10662.848311356101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17705.22942889655,
            "unit": "ns/iter",
            "extra": "iterations: 39485\ncpu: 17704.903127770027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54173.1833,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54172.100000000086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 298043.36183745496,
            "unit": "ns/iter",
            "extra": "iterations: 2830\ncpu: 298041.80212014134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 231610.92168511538,
            "unit": "ns/iter",
            "extra": "iterations: 3703\ncpu: 231609.45179584096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 230404.50175248878,
            "unit": "ns/iter",
            "extra": "iterations: 3709\ncpu: 230402.66918306757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 224821.87319126632,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 224816.12733491216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 595712.5659630569,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 595704.0237467014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4057007.5152838426,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4056943.668122262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3290184.4078014903,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3290096.0992907765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3289147.5744680497,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3289090.425531926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3294783.427046274,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3294720.9964412847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1929664.231732815,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1929618.1628392502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3208769.737024235,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3208698.269896195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12264663.597701246,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12264391.954022987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5442068.959999915,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5441975.999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15743274.149253802,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15743038.805970155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60570.23310000033,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60568.5900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 324869.81375141646,
            "unit": "ns/iter",
            "extra": "iterations: 2647\ncpu: 324867.96373252844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 259064.17657712713,
            "unit": "ns/iter",
            "extra": "iterations: 3313\ncpu: 259062.78297615534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 254883.92296252635,
            "unit": "ns/iter",
            "extra": "iterations: 3362\ncpu: 254882.36168946902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 253431.49107926252,
            "unit": "ns/iter",
            "extra": "iterations: 3419\ncpu: 253429.8332845857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 579110.408122502,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 579107.1238348858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4132178.194690275,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4132114.6017699093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3326079.9714285433,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3326026.4285714366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3354480.643884876,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3354461.151079156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3320435.7571428036,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3320418.214285732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1974965.4638297535,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1974933.4042553238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3236184.216027928,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3236163.0662021027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12618391.635294301,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12618071.76470589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5434591.800000135,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5434571.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52635.48429999787,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52633.34999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 289081.7615358701,
            "unit": "ns/iter",
            "extra": "iterations: 2969\ncpu: 289077.2987537879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 221846.66295337077,
            "unit": "ns/iter",
            "extra": "iterations: 3860\ncpu: 221841.26943005298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 221417.79306776857,
            "unit": "ns/iter",
            "extra": "iterations: 3866\ncpu: 221416.4252457311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 218344.2713336769,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 218338.37506387307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 532304.4966361027,
            "unit": "ns/iter",
            "extra": "iterations: 1635\ncpu: 532296.3914373115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4075647.666666738,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4075624.1228070115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3290079.4310953063,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3289743.81625443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3304747.8551235986,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3304646.996466433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3283900.3653138094,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3283851.2915129303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1925232.444214883,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1925185.5371900913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3198223.948453675,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3198149.4845360806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6306.905253207626,
            "unit": "ns/iter",
            "extra": "iterations: 111075\ncpu: 6306.7792032410325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35975.94990732799,
            "unit": "ns/iter",
            "extra": "iterations: 19963\ncpu: 35975.76015628888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28706.89674983569,
            "unit": "ns/iter",
            "extra": "iterations: 24368\ncpu: 28706.37311227865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27301.54690244748,
            "unit": "ns/iter",
            "extra": "iterations: 25617\ncpu: 27301.046180271118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22422.77332223739,
            "unit": "ns/iter",
            "extra": "iterations: 31247\ncpu: 22422.184529714847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 156942.2667713752,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 156941.50774063403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 269255.9215082684,
            "unit": "ns/iter",
            "extra": "iterations: 2599\ncpu: 269246.6333205117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67504.99373192228,
            "unit": "ns/iter",
            "extra": "iterations: 10370\ncpu: 67502.80617164909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67577.07626218686,
            "unit": "ns/iter",
            "extra": "iterations: 10359\ncpu: 67576.65797856946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67353.24015027565,
            "unit": "ns/iter",
            "extra": "iterations: 10381\ncpu: 67351.1126095748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132611.3753793601,
            "unit": "ns/iter",
            "extra": "iterations: 5272\ncpu: 132610.58421851293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 126921.58633810226,
            "unit": "ns/iter",
            "extra": "iterations: 5519\ncpu: 126918.04674760063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43348.414745974966,
            "unit": "ns/iter",
            "extra": "iterations: 16140\ncpu: 43347.60842627037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 208968.72295276882,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 208963.09025702337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 170100.84974472012,
            "unit": "ns/iter",
            "extra": "iterations: 4113\ncpu: 170097.93338195892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 169616.9375605052,
            "unit": "ns/iter",
            "extra": "iterations: 4132\ncpu: 169616.09390125755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 169767.6824357037,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 169764.36196021174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 309834.5289438854,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 309832.6999558111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1167952.2675585735,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1167933.277591968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 987656.6183098494,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 987651.2676056267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 984483.2278480446,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 984454.1490857953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 977372.5111731996,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 977353.9106145196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 642321.7431192553,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 642317.8899082532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 970846.0180055494,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 970830.4709141247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44332.578287308526,
            "unit": "ns/iter",
            "extra": "iterations: 15788\ncpu: 44331.56827970571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 212783.3674900899,
            "unit": "ns/iter",
            "extra": "iterations: 3279\ncpu: 212777.00518450912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 173948.87620937618,
            "unit": "ns/iter",
            "extra": "iterations: 4031\ncpu: 173947.97816918735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 172938.29512254888,
            "unit": "ns/iter",
            "extra": "iterations: 4039\ncpu: 172933.3003218593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 173210.95701580922,
            "unit": "ns/iter",
            "extra": "iterations: 4048\ncpu: 173210.02964427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 307874.2605448099,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 307863.22495606093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1164207.5773710841,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1164200.6655574003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 981481.5588235544,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 981445.5182072864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 984977.0000000289,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 984971.6690042091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 978236.6147426567,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 978211.2656467372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 640667.8359303566,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 640648.6709440926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 969203.9750346739,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 969174.6185852835 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453372442,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15641.865430220996,
            "unit": "ns/iter",
            "extra": "iterations: 44698\ncpu: 15640.608080898473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 127183.94846754888,
            "unit": "ns/iter",
            "extra": "iterations: 6656\ncpu: 127178.57572115383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 239926.66243445873,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 239904.71984543186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 349677.5111111077,
            "unit": "ns/iter",
            "extra": "iterations: 2475\ncpu: 349661.01010101003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 464255.18842887756,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 464212.04883227166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 571489.7475280311,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 571484.9703361904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 550921.9369999982,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550905.4999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 638102.9959999864,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 638098.1000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 731908.2606299194,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 731895.4330708673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12473.26868722804,
            "unit": "ns/iter",
            "extra": "iterations: 56255\ncpu: 12473.040618611709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10505.247364628101,
            "unit": "ns/iter",
            "extra": "iterations: 66594\ncpu: 10505.180646905146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10508.09355328209,
            "unit": "ns/iter",
            "extra": "iterations: 66561\ncpu: 10507.9100374093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10529.771049727367,
            "unit": "ns/iter",
            "extra": "iterations: 66141\ncpu: 10529.819627764917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17706.842808601315,
            "unit": "ns/iter",
            "extra": "iterations: 39436\ncpu: 17706.506745106017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 53370.42410000095,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53366.459999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 288687.42991597,
            "unit": "ns/iter",
            "extra": "iterations: 2975\ncpu: 288662.35294117656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 228999.03666043415,
            "unit": "ns/iter",
            "extra": "iterations: 3737\ncpu: 228990.55392025705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 229296.29516128107,
            "unit": "ns/iter",
            "extra": "iterations: 3720\ncpu: 229292.25806451665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 224508.7156011495,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 224503.65693238672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 593589.4432717679,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 593563.3245382584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4125804.8841202385,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4125778.1115879845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3208204.9896195247,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3208163.6678200676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3212972.865517141,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3212888.965517243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3219787.3194444384,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3219690.6249999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1898895.4077868913,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1898718.0327868848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3259509.176271199,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3259212.5423728814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12101945.931817682,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12101573.863636367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5362273.149999623,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5362194.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15493749.130434705,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15493098.550724639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58905.661000000015,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58905.769999999786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 325966.2582106567,
            "unit": "ns/iter",
            "extra": "iterations: 2649\ncpu: 325931.0305775764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 269252.48577305576,
            "unit": "ns/iter",
            "extra": "iterations: 2917\ncpu: 269253.2396297582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 254780.82914573594,
            "unit": "ns/iter",
            "extra": "iterations: 3383\ncpu: 254753.38456990797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 251484.47055392925,
            "unit": "ns/iter",
            "extra": "iterations: 3430\ncpu: 251413.20699708344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 580178.2379999926,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 580155.1999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4034329.796536883,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4034207.7922077654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3283018.6818182007,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3282984.6153846104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3270540.04577476,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3270392.957746467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3251036.2299651047,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3250940.766550544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1933447.2494802524,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1933400.2079002112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3173210.445578279,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3173113.945578234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12348383.034883665,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12347909.302325616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5389492.749999931,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5389154.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54430.208600001606,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54428.74000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 281127.5055774369,
            "unit": "ns/iter",
            "extra": "iterations: 3048\ncpu: 281127.88713910745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 221297.69352330733,
            "unit": "ns/iter",
            "extra": "iterations: 3860\ncpu: 221289.37823834197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 219359.4768364516,
            "unit": "ns/iter",
            "extra": "iterations: 3907\ncpu: 219355.6437164063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 217807.81417282796,
            "unit": "ns/iter",
            "extra": "iterations: 3923\ncpu: 217801.09609992386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 534412.0611247161,
            "unit": "ns/iter",
            "extra": "iterations: 1636\ncpu: 534397.3716381424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3994517.2918454045,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3994460.0858369214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3212883.9344826746,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3212803.7931034346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3227173.712802673,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3227056.4013840794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3209038.689655292,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3208966.8965517343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1890159.9120654599,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1890096.9325153267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3127703.4362417543,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3127564.429530217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6322.54631608354,
            "unit": "ns/iter",
            "extra": "iterations: 110901\ncpu: 6322.220719380369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34713.3850873288,
            "unit": "ns/iter",
            "extra": "iterations: 20211\ncpu: 34712.28044134395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29407.29919341334,
            "unit": "ns/iter",
            "extra": "iterations: 23804\ncpu: 29406.545118467347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26987.313543314256,
            "unit": "ns/iter",
            "extra": "iterations: 25939\ncpu: 26986.43355564958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22026.048728413705,
            "unit": "ns/iter",
            "extra": "iterations: 31850\ncpu: 22025.177394034432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 157911.5467447691,
            "unit": "ns/iter",
            "extra": "iterations: 4439\ncpu: 157906.84838927747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 265580.30159332656,
            "unit": "ns/iter",
            "extra": "iterations: 2636\ncpu: 265572.9135053083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66113.40413090367,
            "unit": "ns/iter",
            "extra": "iterations: 10603\ncpu: 66110.80826181236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67726.53403092035,
            "unit": "ns/iter",
            "extra": "iterations: 10608\ncpu: 67723.94419306185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66416.00228180463,
            "unit": "ns/iter",
            "extra": "iterations: 10518\ncpu: 66414.35634150937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 136532.58260019214,
            "unit": "ns/iter",
            "extra": "iterations: 5115\ncpu: 136529.1691104598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 125911.49436997523,
            "unit": "ns/iter",
            "extra": "iterations: 5595\ncpu: 125908.3467381604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43592.50780829217,
            "unit": "ns/iter",
            "extra": "iterations: 16713\ncpu: 43591.46771973923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 215543.23196767626,
            "unit": "ns/iter",
            "extra": "iterations: 3466\ncpu: 215538.31506058807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 164805.5182567799,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 164801.17785630366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 165438.6517730496,
            "unit": "ns/iter",
            "extra": "iterations: 4230\ncpu: 165428.20330969067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 166160.24732716128,
            "unit": "ns/iter",
            "extra": "iterations: 4209\ncpu: 166151.6274649562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 302920.3357821969,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 302914.6067415719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1145053.3481116681,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1144981.7733990236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 970130.8524137763,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 970134.8965517284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 977749.9159780246,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 977726.7217630744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 957223.9479452542,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 957213.8356164386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 627756.0646900205,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 627740.1617250602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 949969.0027174493,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 949948.6413043332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42759.659815256586,
            "unit": "ns/iter",
            "extra": "iterations: 16347\ncpu: 42758.1268734327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 207132.60709010749,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 207127.68094534767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 169308.498065763,
            "unit": "ns/iter",
            "extra": "iterations: 4136\ncpu: 169304.98065764023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 167895.58103241137,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 167892.292917167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 170001.49190235024,
            "unit": "ns/iter",
            "extra": "iterations: 4137\ncpu: 170002.10297317014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 308878.56746031845,
            "unit": "ns/iter",
            "extra": "iterations: 2268\ncpu: 308875.35273368587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1143933.271241811,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1143912.2549019794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 959699.009562859,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 959668.4426229483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 956734.8581172924,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 956702.0463847102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 955388.1841746435,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 955360.8458390089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 628350.8032637984,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 628345.8748866626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 949928.400271333,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 949917.6390773432 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702479257852,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15824.389007579144,
            "unit": "ns/iter",
            "extra": "iterations: 44467\ncpu: 15822.585287966356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 128571.90001522005,
            "unit": "ns/iter",
            "extra": "iterations: 6571\ncpu: 128565.75863643283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 243880.01459853954,
            "unit": "ns/iter",
            "extra": "iterations: 3562\ncpu: 243867.04098820887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 354487.6640592809,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 354470.7698641417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 470663.42139384645,
            "unit": "ns/iter",
            "extra": "iterations: 1851\ncpu: 470620.36736898974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 582312.0724346082,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 582311.5358819588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 562185.6279999805,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562191.0999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 647303.9190000236,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647272.2000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 740577.9464856352,
            "unit": "ns/iter",
            "extra": "iterations: 1252\ncpu: 740526.6773162937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12472.551564310406,
            "unit": "ns/iter",
            "extra": "iterations: 56095\ncpu: 12471.562527854547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10611.032935171737,
            "unit": "ns/iter",
            "extra": "iterations: 66221\ncpu: 10610.073843644765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10567.750142724082,
            "unit": "ns/iter",
            "extra": "iterations: 66562\ncpu: 10567.194495357724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10525.650630441303,
            "unit": "ns/iter",
            "extra": "iterations: 66620\ncpu: 10525.135094566198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17819.655179420104,
            "unit": "ns/iter",
            "extra": "iterations: 39377\ncpu: 17818.249231785034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54370.82939999982,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54369.40000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 282457.6009852229,
            "unit": "ns/iter",
            "extra": "iterations: 3045\ncpu: 282435.40229885036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 228080.47690253324,
            "unit": "ns/iter",
            "extra": "iterations: 3745\ncpu: 228067.42323097447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 226463.5442231071,
            "unit": "ns/iter",
            "extra": "iterations: 3765\ncpu: 226447.38379814124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 226528.32421561086,
            "unit": "ns/iter",
            "extra": "iterations: 3729\ncpu: 226516.3850898362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 595016.7952443856,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 594993.2628797891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3959451.5384614896,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3959140.1709401696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3242255.4982578773,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3242053.3101045373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3249252.3298245897,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3249061.7543859687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3236169.699300737,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3235907.342657337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1914327.1118012432,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1914240.3726708107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3162218.017064896,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3162194.539249145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12139910.193182018,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12139868.181818174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5394920.900000103,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5394880.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15530695.455882521,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15530538.23529413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60630.28740522843,
            "unit": "ns/iter",
            "extra": "iterations: 12926\ncpu: 60629.390375986135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 321278.1178664678,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 321280.34315553895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 256602.4701314212,
            "unit": "ns/iter",
            "extra": "iterations: 3348\ncpu: 256601.79211469495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 252744.29385835264,
            "unit": "ns/iter",
            "extra": "iterations: 3403\ncpu: 252742.3449897152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 253228.3553403703,
            "unit": "ns/iter",
            "extra": "iterations: 3408\ncpu: 253227.81690140968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 578788.0602006675,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 578779.6655518373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4068439.5065502147,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4068390.3930131136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3299905.2446808033,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3299928.368794315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3292469.0139859496,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3292442.6573426733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3263622.000000005,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3263611.9298245558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1955528.5525209797,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1955499.1596638602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3187724.1099655987,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3187554.982817879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12394474.12941204,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12393727.058823476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5231195.249999984,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5230892.9999999525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52033.44880000032,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52027.00000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 276348.8388549415,
            "unit": "ns/iter",
            "extra": "iterations: 3109\ncpu: 276329.8809906711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 219878.28005115155,
            "unit": "ns/iter",
            "extra": "iterations: 3910\ncpu: 219860.4603580572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 218827.59078105068,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 218807.88732394445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 220286.6048969085,
            "unit": "ns/iter",
            "extra": "iterations: 3880\ncpu: 220272.3711340208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 530832.422509226,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 530818.4501845025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4014897.780172396,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4014647.41379309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3254288.9407665636,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3254077.0034843264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3260308.3986013606,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3260106.9930070103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3238653.5416666362,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3238456.5972222043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1908628.0369610325,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1908502.6694045211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3154300.1672355486,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3154070.6484641787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6311.4855210353635,
            "unit": "ns/iter",
            "extra": "iterations: 110885\ncpu: 6311.351400099184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35717.28104977179,
            "unit": "ns/iter",
            "extra": "iterations: 19509\ncpu: 35717.56625147385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26580.754566385218,
            "unit": "ns/iter",
            "extra": "iterations: 26060\ncpu: 26580.583269378316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29249.312978696445,
            "unit": "ns/iter",
            "extra": "iterations: 23893\ncpu: 29249.541706775843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22462.83026828574,
            "unit": "ns/iter",
            "extra": "iterations: 31049\ncpu: 22462.997197977482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 157318.11681296676,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 157317.10555930642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 253158.4867705839,
            "unit": "ns/iter",
            "extra": "iterations: 2759\ncpu: 253156.86843059407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66878.07750904722,
            "unit": "ns/iter",
            "extra": "iterations: 10502\ncpu: 66877.25195200913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66788.23455016053,
            "unit": "ns/iter",
            "extra": "iterations: 10437\ncpu: 66782.41831944093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66689.11148102258,
            "unit": "ns/iter",
            "extra": "iterations: 10513\ncpu: 66685.45610196944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 138978.4872914933,
            "unit": "ns/iter",
            "extra": "iterations: 5036\ncpu: 138974.98014297025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 125771.95449621334,
            "unit": "ns/iter",
            "extra": "iterations: 5538\ncpu: 125765.29433008388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42753.11625633882,
            "unit": "ns/iter",
            "extra": "iterations: 16369\ncpu: 42752.599425744185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 207639.34028605185,
            "unit": "ns/iter",
            "extra": "iterations: 3356\ncpu: 207633.01549463737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 165380.60879961215,
            "unit": "ns/iter",
            "extra": "iterations: 4182\ncpu: 165374.19894787142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 165342.43451536493,
            "unit": "ns/iter",
            "extra": "iterations: 4230\ncpu: 165326.47754137137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 167145.47230181878,
            "unit": "ns/iter",
            "extra": "iterations: 4188\ncpu: 167133.14231136595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 306370.8945295246,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 306344.0262582088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1145841.9917898146,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1145768.4729064007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 968019.7720994962,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 967972.2375690481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 964189.4827586054,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 964101.9310344808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 962614.3201692131,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 962590.1269393496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 632061.5902527274,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 632011.9133573952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 955004.9863574461,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 954954.8431105012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43553.05512007082,
            "unit": "ns/iter",
            "extra": "iterations: 16074\ncpu: 43548.66865745904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 206899.55893647994,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 206880.768094534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 169120.47762998455,
            "unit": "ns/iter",
            "extra": "iterations: 4135\ncpu: 169108.99637242997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 170359.98552124208,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 170353.57142857194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 171286.79946524213,
            "unit": "ns/iter",
            "extra": "iterations: 4114\ncpu: 171276.3247447749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 307956.5417398912,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 307942.1792618623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1144320.944353535,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1144228.9689034196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 959061.3612637433,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 959034.6153846006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 964153.7400275123,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 964115.8184319185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 958699.0658436912,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 958585.5967078232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 635621.6204710193,
            "unit": "ns/iter",
            "extra": "iterations: 1104\ncpu: 635592.5724637605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 953317.8987688222,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 953218.8782489584 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479539463,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15829.239904285034,
            "unit": "ns/iter",
            "extra": "iterations: 43880\ncpu: 15827.470373746582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 129352.01266016687,
            "unit": "ns/iter",
            "extra": "iterations: 6556\ncpu: 129341.38194020744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 243894.46125770925,
            "unit": "ns/iter",
            "extra": "iterations: 3562\ncpu: 243876.5861875352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 355966.1792336247,
            "unit": "ns/iter",
            "extra": "iterations: 2427\ncpu: 355937.2888339513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 470457.94378379005,
            "unit": "ns/iter",
            "extra": "iterations: 1850\ncpu: 470431.13513513503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 582143.4124748482,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 582098.7927565392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 560606.4639999885,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560614.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 649165.7650000206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649068.4 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 740939.2564516148,
            "unit": "ns/iter",
            "extra": "iterations: 1240\ncpu: 740883.2258064518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12747.86390510962,
            "unit": "ns/iter",
            "extra": "iterations: 54969\ncpu: 12746.74998635596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10775.905373513011,
            "unit": "ns/iter",
            "extra": "iterations: 66102\ncpu: 10774.999243593233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10527.87413874404,
            "unit": "ns/iter",
            "extra": "iterations: 65747\ncpu: 10527.750315603764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10995.541149056795,
            "unit": "ns/iter",
            "extra": "iterations: 66089\ncpu: 10995.136860899687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17846.65718654484,
            "unit": "ns/iter",
            "extra": "iterations: 39240\ncpu: 17845.843527013243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 53722.28830000267,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53715.62000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 288409.1676767667,
            "unit": "ns/iter",
            "extra": "iterations: 2970\ncpu: 288386.3299663299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 231211.40999999293,
            "unit": "ns/iter",
            "extra": "iterations: 3700\ncpu: 231194.21621621674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 229860.24845221662,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 229842.9609690444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 226090.3673147746,
            "unit": "ns/iter",
            "extra": "iterations: 3806\ncpu: 225489.5691014186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 603342.2807486419,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 603336.1631016042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4044968.9301312384,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4044580.786026201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3298266.3427561717,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3298021.2014134317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3277260.059859108,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3277046.830985915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3274993.5053003714,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3274743.1095406376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1922671.3513513212,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1922571.7255717323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3193796.8034483297,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3193608.620689648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12304770.689655632,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12304575.862068987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5508233.250000102,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5507837.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15902647.149253717,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15902440.298507461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60098.59239999856,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60094.88000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 326616.5049504822,
            "unit": "ns/iter",
            "extra": "iterations: 2626\ncpu: 326615.1180502662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 257150.87391435218,
            "unit": "ns/iter",
            "extra": "iterations: 3339\ncpu: 257149.2662473796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 255498.6669642865,
            "unit": "ns/iter",
            "extra": "iterations: 3360\ncpu: 255498.66071428702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 252735.62240663907,
            "unit": "ns/iter",
            "extra": "iterations: 3374\ncpu: 252730.1719027858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 590366.3260869755,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 590363.4510869548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4094069.343612334,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4094043.171806146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3323166.526690436,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3323118.149466204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3328148.039426527,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3328113.261648737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3323920.7758007566,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3323838.0782917943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2030097.4807692904,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 2030050.6410256436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3225001.366906503,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3224925.5395683357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12633555.364706194,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12633017.647058781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5446382.790000257,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5446488.000000046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51686.63030000289,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51686.37000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 285069.2824933628,
            "unit": "ns/iter",
            "extra": "iterations: 3016\ncpu: 285010.47745358146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 220421.15964010538,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 220404.01028277646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 219484.94006630772,
            "unit": "ns/iter",
            "extra": "iterations: 3921\ncpu: 219464.5498597296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 218322.16607234295,
            "unit": "ns/iter",
            "extra": "iterations: 3926\ncpu: 218303.15843097234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 542381.6283405868,
            "unit": "ns/iter",
            "extra": "iterations: 1609\ncpu: 542336.2958359239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4062795.082608733,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4062320.8695652373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3273173.989473714,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3273016.140350873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3271119.361403507,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3270787.719298228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3260997.700348342,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3260795.4703832627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1910658.8845360908,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1910437.1134020702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3174313.047781641,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3174016.723549474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6339.540418551291,
            "unit": "ns/iter",
            "extra": "iterations: 110333\ncpu: 6338.985616270773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35845.15579691575,
            "unit": "ns/iter",
            "extra": "iterations: 19519\ncpu: 35842.90178800125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28749.91879150469,
            "unit": "ns/iter",
            "extra": "iterations: 24394\ncpu: 28748.614413380372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28394.23831927236,
            "unit": "ns/iter",
            "extra": "iterations: 24656\ncpu: 28392.038449058902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22397.986829455953,
            "unit": "ns/iter",
            "extra": "iterations: 31206\ncpu: 22396.856373774062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 159253.67273140774,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 159237.4346145116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 268226.45932463196,
            "unit": "ns/iter",
            "extra": "iterations: 2606\ncpu: 268200.1534919415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67883.9756546998,
            "unit": "ns/iter",
            "extra": "iterations: 10310\ncpu: 67877.68186226932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67515.0267745338,
            "unit": "ns/iter",
            "extra": "iterations: 10383\ncpu: 67506.39506886303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67685.69541231176,
            "unit": "ns/iter",
            "extra": "iterations: 10332\ncpu: 67686.58536585317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 139280.73597294744,
            "unit": "ns/iter",
            "extra": "iterations: 5026\ncpu: 139271.44846796617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 126870.95262297774,
            "unit": "ns/iter",
            "extra": "iterations: 5509\ncpu: 126856.8705754213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42668.30930729584,
            "unit": "ns/iter",
            "extra": "iterations: 16385\ncpu: 42665.39517851692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 208207.1294642858,
            "unit": "ns/iter",
            "extra": "iterations: 3360\ncpu: 208196.51785714147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 167908.0673886897,
            "unit": "ns/iter",
            "extra": "iterations: 4155\ncpu: 167906.28158844833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 168832.4893975924,
            "unit": "ns/iter",
            "extra": "iterations: 4150\ncpu: 168828.14457831622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 169467.09082124775,
            "unit": "ns/iter",
            "extra": "iterations: 4140\ncpu: 169460.9178743954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 312742.60133929184,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 312734.86607142433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1166178.737104797,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1166186.6888518988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 980600.7088414851,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 980597.5609756038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 974417.5730180936,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 974410.7093185012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 975972.6587743674,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 975971.5877437321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 642848.1774348889,
            "unit": "ns/iter",
            "extra": "iterations: 1037\ncpu: 642856.4127290301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 969165.3158620284,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 969138.758620696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43796.85216958742,
            "unit": "ns/iter",
            "extra": "iterations: 16086\ncpu: 43794.87131667227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 212095.62044016065,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 212092.40277358852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 172074.4382685583,
            "unit": "ns/iter",
            "extra": "iterations: 4066\ncpu: 172070.36399409774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 172142.66814049784,
            "unit": "ns/iter",
            "extra": "iterations: 4071\ncpu: 172140.874478014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 173732.53806228528,
            "unit": "ns/iter",
            "extra": "iterations: 4046\ncpu: 173719.50074147328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 314224.95150425954,
            "unit": "ns/iter",
            "extra": "iterations: 2227\ncpu: 314217.0184104138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1165878.579034959,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1165814.8086522482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 978907.9243697384,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 978856.7226890591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 975121.2715876752,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 974995.6824512588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 972133.2246879521,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 972009.8474341248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 636499.9210526203,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 636456.7150635294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 966321.6864641065,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 966261.7403314912 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488589724,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15567.919170243564,
            "unit": "ns/iter",
            "extra": "iterations: 44736\ncpu: 15567.270207439202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 128413.78092938982,
            "unit": "ns/iter",
            "extra": "iterations: 6628\ncpu: 128404.828002414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 239304.31139380863,
            "unit": "ns/iter",
            "extra": "iterations: 3616\ncpu: 239300.82964601775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 349522.3140194401,
            "unit": "ns/iter",
            "extra": "iterations: 2468\ncpu: 349505.6726094003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 460526.210721881,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 460513.05732484086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 571200.5578876174,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 571157.0074475287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 549731.0260000176,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549660.0000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 637914.2850000222,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 637876.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 727212.1084053275,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 727182.5608798127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12415.931041814045,
            "unit": "ns/iter",
            "extra": "iterations: 56440\ncpu: 12415.715804394034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10482.553895824249,
            "unit": "ns/iter",
            "extra": "iterations: 67213\ncpu: 10482.064481573496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10548.992034932495,
            "unit": "ns/iter",
            "extra": "iterations: 66415\ncpu: 10547.436573063304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10526.771449193167,
            "unit": "ns/iter",
            "extra": "iterations: 66506\ncpu: 10525.787147024323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17623.5877389606,
            "unit": "ns/iter",
            "extra": "iterations: 39703\ncpu: 17622.192277661627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 53317.8386999964,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53316.71 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 286371.87838290486,
            "unit": "ns/iter",
            "extra": "iterations: 2993\ncpu: 286366.5552956901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 227545.59643996146,
            "unit": "ns/iter",
            "extra": "iterations: 3764\ncpu: 227535.83953241224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 228960.3646334877,
            "unit": "ns/iter",
            "extra": "iterations: 3738\ncpu: 228949.78598180905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 225660.0471024118,
            "unit": "ns/iter",
            "extra": "iterations: 3779\ncpu: 225641.7570785925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 608057.8130081372,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 608010.7723577258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4026066.681034465,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4025954.741379311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3234741.167832167,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3234460.4895104943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3252525.034965133,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3252469.5804195865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3233872.524305662,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3233776.041666661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1959845.797938149,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1959678.7628865975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3164336.856655224,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3164238.5665528993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12220543.425287202,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12219539.080459781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5489295.230000266,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5489059.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15656175.764705688,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15655322.058823545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60462.799800001216,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60460.52999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 320703.0476013363,
            "unit": "ns/iter",
            "extra": "iterations: 2689\ncpu: 320674.3027147638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 255756.24366995238,
            "unit": "ns/iter",
            "extra": "iterations: 3357\ncpu: 255752.51712838965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 252405.01770957216,
            "unit": "ns/iter",
            "extra": "iterations: 3388\ncpu: 252387.01298701295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 250796.79614485893,
            "unit": "ns/iter",
            "extra": "iterations: 3424\ncpu: 250792.7570093469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 597748.2105987438,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 597704.6111493498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4059870.204347659,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4059691.3043478243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3285419.8197879237,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3285262.8975265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3293451.6382979043,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3293179.0780141903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3269696.5403508265,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3269599.2982456204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1959134.1160337294,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1959014.1350210898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3188278.60137452,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3188212.371134021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12574724.388235502,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12573930.588235319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5444427.179999706,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5444273.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51726.0699000019,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51721.729999999865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 278035.8830029203,
            "unit": "ns/iter",
            "extra": "iterations: 3077\ncpu: 278026.61683457915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 217893.37277353718,
            "unit": "ns/iter",
            "extra": "iterations: 3930\ncpu: 217875.47073791418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 218667.42298851264,
            "unit": "ns/iter",
            "extra": "iterations: 3915\ncpu: 218663.55044700007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 216719.18988622437,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 216704.5512010101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 547158.5050441268,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 547140.8575031547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4008021.484978579,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4007790.128755351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3255198.0139373485,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3254901.393728232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3257245.580419658,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3256977.622377616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3235247.9513889025,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3235018.055555545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1920668.749999929,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1920630.122950814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3152527.9256756394,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3152327.3648648695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6338.74554150816,
            "unit": "ns/iter",
            "extra": "iterations: 110183\ncpu: 6338.5976058012775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35477.901883352766,
            "unit": "ns/iter",
            "extra": "iterations: 19752\ncpu: 35475.91130012147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29337.620449587925,
            "unit": "ns/iter",
            "extra": "iterations: 23844\ncpu: 29336.66750545205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 29084.639020339288,
            "unit": "ns/iter",
            "extra": "iterations: 24090\ncpu: 29083.22125363208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22443.47273953128,
            "unit": "ns/iter",
            "extra": "iterations: 31144\ncpu: 22443.096583611787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 162527.04017649702,
            "unit": "ns/iter",
            "extra": "iterations: 4306\ncpu: 162515.65257779838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 262972.9146295611,
            "unit": "ns/iter",
            "extra": "iterations: 2659\ncpu: 262972.6212861961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66454.77768281424,
            "unit": "ns/iter",
            "extra": "iterations: 10530\ncpu: 66450.35137701771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66452.30254172663,
            "unit": "ns/iter",
            "extra": "iterations: 10544\ncpu: 66451.23292867903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66384.31652900441,
            "unit": "ns/iter",
            "extra": "iterations: 10533\ncpu: 66382.037406247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 137046.87661842274,
            "unit": "ns/iter",
            "extra": "iterations: 5252\ncpu: 137041.52703732002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 125921.84347513877,
            "unit": "ns/iter",
            "extra": "iterations: 5571\ncpu: 125919.22455573356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42211.73589341829,
            "unit": "ns/iter",
            "extra": "iterations: 16588\ncpu: 42209.35616108031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 203657.57930029093,
            "unit": "ns/iter",
            "extra": "iterations: 3430\ncpu: 203650.58309038263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 165137.633057843,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 165127.39079102714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 164580.64703110038,
            "unit": "ns/iter",
            "extra": "iterations: 4244\ncpu: 164580.3016022629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 166853.2013773439,
            "unit": "ns/iter",
            "extra": "iterations: 4211\ncpu: 166840.84540489185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 305503.0239651365,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 305502.74509803584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1151727.8423645229,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1151591.297208549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 972387.1295265044,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 972372.8412256198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 969609.3222683045,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 969585.4771784135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 962104.5287671323,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 962035.6164383573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 635908.3762465825,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 635907.0716228402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 956304.5567715649,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 956206.5663474726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42922.39591135219,
            "unit": "ns/iter",
            "extra": "iterations: 16289\ncpu: 42922.34022960287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 207404.9910793849,
            "unit": "ns/iter",
            "extra": "iterations: 3363\ncpu: 207392.29854296424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 170600.0981251462,
            "unit": "ns/iter",
            "extra": "iterations: 4107\ncpu: 170597.34599464227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 168198.48175887595,
            "unit": "ns/iter",
            "extra": "iterations: 4139\ncpu: 168183.2085044699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 169718.8645959707,
            "unit": "ns/iter",
            "extra": "iterations: 4121\ncpu: 169715.2632856103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 308799.2930048363,
            "unit": "ns/iter",
            "extra": "iterations: 2273\ncpu: 308775.846898372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1147562.433497546,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1147540.3940886639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 965817.8587257562,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 965817.451523536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 963699.2548209338,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 963623.8292011075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 957975.0587431404,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 957955.0546448185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 631698.6438232717,
            "unit": "ns/iter",
            "extra": "iterations: 1109\ncpu: 631661.1361586939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 953544.113233305,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 953526.6030013529 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490816706,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15948.322746135853,
            "unit": "ns/iter",
            "extra": "iterations: 43858\ncpu: 15947.52154681016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 129671.54464967022,
            "unit": "ns/iter",
            "extra": "iterations: 6551\ncpu: 129665.5014501603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 245051.58333333133,
            "unit": "ns/iter",
            "extra": "iterations: 3564\ncpu: 245028.73176206506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 355767.77002479247,
            "unit": "ns/iter",
            "extra": "iterations: 2422\ncpu: 355754.417836499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 469740.428494026,
            "unit": "ns/iter",
            "extra": "iterations: 1846\ncpu: 469708.55904658715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 583145.4516778543,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 583135.6375838926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 560818.4149999715,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560803.1000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 650352.0850000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650297.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 750008.6498800733,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 749579.1366906479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12767.005165214428,
            "unit": "ns/iter",
            "extra": "iterations: 54596\ncpu: 12766.07443768773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10765.035152650702,
            "unit": "ns/iter",
            "extra": "iterations: 65116\ncpu: 10764.868849437935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10737.212148643717,
            "unit": "ns/iter",
            "extra": "iterations: 65176\ncpu: 10736.630047870394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10621.055074503682,
            "unit": "ns/iter",
            "extra": "iterations: 65366\ncpu: 10621.085885628618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17841.658072890245,
            "unit": "ns/iter",
            "extra": "iterations: 39292\ncpu: 17841.051613560012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54520.91590000236,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54516.70999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 303313.52527394175,
            "unit": "ns/iter",
            "extra": "iterations: 2829\ncpu: 303313.997879109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 235665.18820924716,
            "unit": "ns/iter",
            "extra": "iterations: 3613\ncpu: 235654.8297813449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 238074.4049266468,
            "unit": "ns/iter",
            "extra": "iterations: 3613\ncpu: 238074.86853030816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 229633.61954766492,
            "unit": "ns/iter",
            "extra": "iterations: 3714\ncpu: 229624.1249326876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 600075.8224734063,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 600042.6196808508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4056743.497816655,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4056617.0305676768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3280346.4330986426,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3280139.7887323983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3277773.2720849635,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3277554.063604238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3252920.2587412884,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3252589.510489502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1910725.4090909385,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1910554.752066111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3197355.573883202,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3197134.0206185547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12155471.63636382,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12153730.681818161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5256066.619999729,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5255798.000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15848722.253730923,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15847694.029850729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 60643.21450000421,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60642.419999999925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 339202.60715688614,
            "unit": "ns/iter",
            "extra": "iterations: 2543\ncpu: 339192.0959496653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 264833.5226567288,
            "unit": "ns/iter",
            "extra": "iterations: 3222\ncpu: 264834.8541278702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 260683.86192213613,
            "unit": "ns/iter",
            "extra": "iterations: 3288\ncpu: 260658.48540146003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 257186.24236070336,
            "unit": "ns/iter",
            "extra": "iterations: 3338\ncpu: 257186.93828640005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 582404.8988613274,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 582377.6289350279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4123462.6946902107,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4123406.6371681485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3329064.577060903,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3329018.279569891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3331544.357142897,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3331342.142857149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3308898.251773234,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3308856.3829787318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1941527.7787057043,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1941374.530271395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3232167.5868054456,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3232123.9583333265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12537631.176470608,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12537007.058823487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5492191.100000241,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5492071.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52598.54019999466,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52593.629999999794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 292643.25153166143,
            "unit": "ns/iter",
            "extra": "iterations: 2938\ncpu: 292643.7031994552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 227293.98619956867,
            "unit": "ns/iter",
            "extra": "iterations: 3768\ncpu: 227284.39490445974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 228039.2967003699,
            "unit": "ns/iter",
            "extra": "iterations: 3758\ncpu: 228039.88823842467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 223763.69832548854,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 223750.81109366706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 538565.5754017007,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 538559.703337454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4074013.279476109,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4073944.104803497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3294992.3758865437,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3294749.2907801294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3288726.307420341,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3288624.381625429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3262436.569929985,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3262313.286713274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1903154.766871155,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1903137.8323108433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3201742.8453608337,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3201596.5635738755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6321.936229314111,
            "unit": "ns/iter",
            "extra": "iterations: 110521\ncpu: 6321.970485247121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 36238.02763949454,
            "unit": "ns/iter",
            "extra": "iterations: 19284\ncpu: 36237.49222153082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29181.243110481715,
            "unit": "ns/iter",
            "extra": "iterations: 24022\ncpu: 29180.380484555983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28807.79976152294,
            "unit": "ns/iter",
            "extra": "iterations: 24321\ncpu: 28807.89441223626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22737.8818022249,
            "unit": "ns/iter",
            "extra": "iterations: 30762\ncpu: 22737.952668877264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 158426.17539502884,
            "unit": "ns/iter",
            "extra": "iterations: 4430\ncpu: 158418.05869074436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 268696.2732156595,
            "unit": "ns/iter",
            "extra": "iterations: 2606\ncpu: 268697.08365310763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67537.80119437723,
            "unit": "ns/iter",
            "extra": "iterations: 10382\ncpu: 67533.86630706975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67390.02784492252,
            "unit": "ns/iter",
            "extra": "iterations: 10343\ncpu: 67390.21560475708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67629.2886597957,
            "unit": "ns/iter",
            "extra": "iterations: 10379\ncpu: 67629.47297427466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 140521.04960784636,
            "unit": "ns/iter",
            "extra": "iterations: 5100\ncpu: 140521.47058823364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 126464.33471896323,
            "unit": "ns/iter",
            "extra": "iterations: 5533\ncpu: 126462.13627327161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42787.28155220921,
            "unit": "ns/iter",
            "extra": "iterations: 16338\ncpu: 42787.330150568974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 209802.14985073288,
            "unit": "ns/iter",
            "extra": "iterations: 3350\ncpu: 209797.88059701098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 168715.9523924529,
            "unit": "ns/iter",
            "extra": "iterations: 4138\ncpu: 168706.16239729433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 167457.4339894458,
            "unit": "ns/iter",
            "extra": "iterations: 4166\ncpu: 167457.94527124375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 168729.9599903559,
            "unit": "ns/iter",
            "extra": "iterations: 4149\ncpu: 168720.3422511439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 302804.69373649184,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 302805.8315334794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1170133.8227425236,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1170062.3745819347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 991289.533994334,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 991291.7847025596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 982205.5111420762,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 982193.0362116863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 976215.3687150517,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 976183.2402234725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 643296.878453029,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 643302.670349913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 974247.8222222752,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 974188.1944444585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43497.8777032048,
            "unit": "ns/iter",
            "extra": "iterations: 16092\ncpu: 43496.59458115815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 208932.66626937283,
            "unit": "ns/iter",
            "extra": "iterations: 3356\ncpu: 208919.78545888126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 173035.11409560565,
            "unit": "ns/iter",
            "extra": "iterations: 4058\ncpu: 173035.70724494997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 172887.63427299587,
            "unit": "ns/iter",
            "extra": "iterations: 4044\ncpu: 172878.3877349149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 171693.953071253,
            "unit": "ns/iter",
            "extra": "iterations: 4070\ncpu: 171694.57002456774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 308586.2455985888,
            "unit": "ns/iter",
            "extra": "iterations: 2272\ncpu: 308564.0404929597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1165666.8797997108,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1165671.6193656134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 984906.8213782894,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 984912.0956399395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 975160.1058495551,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 975109.3314763304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 977038.2022314607,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 977041.2831241107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 639918.1805682457,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 639864.2529789131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 969008.5817174544,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 969012.1883656372 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}