window.BENCHMARK_DATA = {
  "lastUpdate": 1702415992799,
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
      }
    ]
  }
}