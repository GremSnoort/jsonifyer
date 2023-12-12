window.BENCHMARK_DATA = {
  "lastUpdate": 1702409132513,
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
      }
    ]
  }
}