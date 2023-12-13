window.BENCHMARK_DATA = {
  "lastUpdate": 1702504033205,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-14 18.04 Release c++-17": [
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490322042,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 602.273966605171,
            "unit": "ns/iter",
            "extra": "iterations: 1180841\ncpu: 602.2540714626272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5420.603470000743,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5420.383999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10564.208097352379,
            "unit": "ns/iter",
            "extra": "iterations: 78396\ncpu: 10563.92673095566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15937.59815564231,
            "unit": "ns/iter",
            "extra": "iterations: 52376\ncpu: 15937.066595387205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20834.508974773693,
            "unit": "ns/iter",
            "extra": "iterations: 40391\ncpu: 20833.797133024676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25812.511997769412,
            "unit": "ns/iter",
            "extra": "iterations: 32256\ncpu: 25811.948164682548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31068.50135965436,
            "unit": "ns/iter",
            "extra": "iterations: 26845\ncpu: 31066.593406593405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35852.76093944219,
            "unit": "ns/iter",
            "extra": "iterations: 23333\ncpu: 35851.900741439174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40868.18110123465,
            "unit": "ns/iter",
            "extra": "iterations: 20922\ncpu: 40866.2221584935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 561.5354478137837,
            "unit": "ns/iter",
            "extra": "iterations: 1242827\ncpu: 561.5340670905936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 430.98270261811575,
            "unit": "ns/iter",
            "extra": "iterations: 1610764\ncpu: 430.9707691505396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 438.61722513908495,
            "unit": "ns/iter",
            "extra": "iterations: 1646396\ncpu: 438.6103343302579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 420.83194293824965,
            "unit": "ns/iter",
            "extra": "iterations: 1661638\ncpu: 420.83191405107505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 888.7463675386908,
            "unit": "ns/iter",
            "extra": "iterations: 789272\ncpu: 888.735062183886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1999.2337410654418,
            "unit": "ns/iter",
            "extra": "iterations: 398873\ncpu: 1999.1784352412933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10730.842323597548,
            "unit": "ns/iter",
            "extra": "iterations: 75934\ncpu: 10730.455395475019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8064.875745899769,
            "unit": "ns/iter",
            "extra": "iterations: 101220\ncpu: 8064.539616676546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8183.168187940298,
            "unit": "ns/iter",
            "extra": "iterations: 100245\ncpu: 8183.1692353733215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8033.149400142534,
            "unit": "ns/iter",
            "extra": "iterations: 101024\ncpu: 8032.847640164744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 37272.08525180229,
            "unit": "ns/iter",
            "extra": "iterations: 22240\ncpu: 37270.795863309264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 253338.99706918013,
            "unit": "ns/iter",
            "extra": "iterations: 3412\ncpu: 253322.2450175848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 193458.941736308,
            "unit": "ns/iter",
            "extra": "iterations: 4308\ncpu: 193457.05663881157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 180794.4157772706,
            "unit": "ns/iter",
            "extra": "iterations: 4310\ncpu: 180792.088167053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 185549.28737774395,
            "unit": "ns/iter",
            "extra": "iterations: 4294\ncpu: 185535.6544014903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102872.71323703857,
            "unit": "ns/iter",
            "extra": "iterations: 8446\ncpu: 102868.93203883496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184957.57919358366,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 184957.47382490544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5416.137047770886,
            "unit": "ns/iter",
            "extra": "iterations: 149758\ncpu: 5415.927696683988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24284.04234771741,
            "unit": "ns/iter",
            "extra": "iterations: 33343\ncpu: 24283.357826230396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19454.84486688346,
            "unit": "ns/iter",
            "extra": "iterations: 42557\ncpu: 19454.14385412504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19223.973783632715,
            "unit": "ns/iter",
            "extra": "iterations: 43408\ncpu: 19223.532528566153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19258.664333558198,
            "unit": "ns/iter",
            "extra": "iterations: 43147\ncpu: 19258.004032725294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51501.8553649922,
            "unit": "ns/iter",
            "extra": "iterations: 16151\ncpu: 51499.65327224334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 278916.43579890736,
            "unit": "ns/iter",
            "extra": "iterations: 3123\ncpu: 278912.1677873852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 208711.62549116687,
            "unit": "ns/iter",
            "extra": "iterations: 4072\ncpu: 208701.4243614935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 212964.87631641963,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 212954.7391623802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 205689.60087721428,
            "unit": "ns/iter",
            "extra": "iterations: 4104\ncpu: 205681.1159844051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 113123.03980098288,
            "unit": "ns/iter",
            "extra": "iterations: 7638\ncpu: 113123.05577376217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 198421.33231636055,
            "unit": "ns/iter",
            "extra": "iterations: 4261\ncpu: 198407.55691152264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 820399.953043445,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 820353.3913043484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 463465.8063660581,
            "unit": "ns/iter",
            "extra": "iterations: 1885\ncpu: 463452.9973474805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1918.9635575468267,
            "unit": "ns/iter",
            "extra": "iterations: 419154\ncpu: 1918.9639130248202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10340.868773500486,
            "unit": "ns/iter",
            "extra": "iterations: 79519\ncpu: 10340.483406481475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7895.640408041602,
            "unit": "ns/iter",
            "extra": "iterations: 104499\ncpu: 7895.487995100467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8109.721760877988,
            "unit": "ns/iter",
            "extra": "iterations: 102358\ncpu: 8109.402293909615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7723.735491426819,
            "unit": "ns/iter",
            "extra": "iterations: 106730\ncpu: 7723.738405321836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 36398.50326882551,
            "unit": "ns/iter",
            "extra": "iterations: 22944\ncpu: 36396.39557182702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 270231.4220799118,
            "unit": "ns/iter",
            "extra": "iterations: 3279\ncpu: 270223.5742604456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 189192.29956251243,
            "unit": "ns/iter",
            "extra": "iterations: 4343\ncpu: 189182.86898457186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 199942.5402638888,
            "unit": "ns/iter",
            "extra": "iterations: 4396\ncpu: 199942.470427661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 189168.81755828904,
            "unit": "ns/iter",
            "extra": "iterations: 4374\ncpu: 189161.79698216612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101009.56194587519,
            "unit": "ns/iter",
            "extra": "iterations: 8572\ncpu: 101007.9094727022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 193371.97015250006,
            "unit": "ns/iter",
            "extra": "iterations: 4590\ncpu: 193362.5490196086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 185.64804701545467,
            "unit": "ns/iter",
            "extra": "iterations: 3756891\ncpu: 185.6482394618321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1476.1558092239943,
            "unit": "ns/iter",
            "extra": "iterations: 474022\ncpu: 1476.0897173548808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1122.9286264549944,
            "unit": "ns/iter",
            "extra": "iterations: 620482\ncpu: 1122.871412869354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1145.4203916139895,
            "unit": "ns/iter",
            "extra": "iterations: 614125\ncpu: 1145.3795237126049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 863.5794727680641,
            "unit": "ns/iter",
            "extra": "iterations: 810611\ncpu: 863.5598332615825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9854.713983293763,
            "unit": "ns/iter",
            "extra": "iterations: 69440\ncpu: 9854.552131336428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12794.044968817114,
            "unit": "ns/iter",
            "extra": "iterations: 54838\ncpu: 12793.323972427825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2667.4974368980425,
            "unit": "ns/iter",
            "extra": "iterations: 245991\ncpu: 2667.4366135346377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2835.0131321823733,
            "unit": "ns/iter",
            "extra": "iterations: 248702\ncpu: 2834.869040055988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2862.3442219008234,
            "unit": "ns/iter",
            "extra": "iterations: 246344\ncpu: 2862.345744162632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5417.808290196469,
            "unit": "ns/iter",
            "extra": "iterations: 128272\ncpu: 5417.565797679917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5427.064170998565,
            "unit": "ns/iter",
            "extra": "iterations: 128703\ncpu: 5426.936435048164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1955.6484815863637,
            "unit": "ns/iter",
            "extra": "iterations: 360442\ncpu: 1955.5923005642962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10301.635703897944,
            "unit": "ns/iter",
            "extra": "iterations: 67382\ncpu: 10301.47665548662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8158.007549873057,
            "unit": "ns/iter",
            "extra": "iterations: 85167\ncpu: 8158.0177768385365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8078.052363385752,
            "unit": "ns/iter",
            "extra": "iterations: 86740\ncpu: 8077.620474982709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8199.465280543538,
            "unit": "ns/iter",
            "extra": "iterations: 85370\ncpu: 8199.204638631809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18175.100280650615,
            "unit": "ns/iter",
            "extra": "iterations: 38482\ncpu: 18174.385426952627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56744.88103845457,
            "unit": "ns/iter",
            "extra": "iterations: 12172\ncpu: 56743.32895169225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44495.732961108595,
            "unit": "ns/iter",
            "extra": "iterations: 15582\ncpu: 44494.13425747639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45454.07282227213,
            "unit": "ns/iter",
            "extra": "iterations: 15119\ncpu: 45452.2785898534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44941.51639660562,
            "unit": "ns/iter",
            "extra": "iterations: 15552\ncpu: 44939.23611111159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 27724.603637042903,
            "unit": "ns/iter",
            "extra": "iterations: 26670\ncpu: 27724.638170228707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44669.86765827696,
            "unit": "ns/iter",
            "extra": "iterations: 15732\ncpu: 44668.35113145138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1961.3191551970583,
            "unit": "ns/iter",
            "extra": "iterations: 356817\ncpu: 1961.244839791856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10284.415117029721,
            "unit": "ns/iter",
            "extra": "iterations: 68188\ncpu: 10283.692145245512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8356.98792968991,
            "unit": "ns/iter",
            "extra": "iterations: 83345\ncpu: 8356.892435059142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8240.352810101334,
            "unit": "ns/iter",
            "extra": "iterations: 84819\ncpu: 8240.138412383989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8196.379084966866,
            "unit": "ns/iter",
            "extra": "iterations: 85374\ncpu: 8195.997610513845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18007.67203100626,
            "unit": "ns/iter",
            "extra": "iterations: 38961\ncpu: 18007.469007468968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54690.49625174601,
            "unit": "ns/iter",
            "extra": "iterations: 12139\ncpu: 54685.270615372276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 45197.88534824846,
            "unit": "ns/iter",
            "extra": "iterations: 15377\ncpu: 45197.90596345122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45125.61637681988,
            "unit": "ns/iter",
            "extra": "iterations: 15583\ncpu: 45124.27645511072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44183.6702154163,
            "unit": "ns/iter",
            "extra": "iterations: 16062\ncpu: 44182.12551363463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25973.970440972935,
            "unit": "ns/iter",
            "extra": "iterations: 26963\ncpu: 25973.712124021764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43856.043215641206,
            "unit": "ns/iter",
            "extra": "iterations: 16059\ncpu: 43854.075596238225 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702492955150,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 581.869595383747,
            "unit": "ns/iter",
            "extra": "iterations: 1202028\ncpu: 581.8346161653474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5482.351089999612,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5481.896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10654.621474289002,
            "unit": "ns/iter",
            "extra": "iterations: 77963\ncpu: 10654.153893513589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15909.18925179957,
            "unit": "ns/iter",
            "extra": "iterations: 52232\ncpu: 15908.701562260681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21120.270109711666,
            "unit": "ns/iter",
            "extra": "iterations: 39558\ncpu: 21118.772435411287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26096.860824257416,
            "unit": "ns/iter",
            "extra": "iterations: 31859\ncpu: 26095.207005869608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31760.610123530594,
            "unit": "ns/iter",
            "extra": "iterations: 26552\ncpu: 31758.55679421514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36813.5651033671,
            "unit": "ns/iter",
            "extra": "iterations: 22879\ncpu: 36810.8265221382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41100.77438813486,
            "unit": "ns/iter",
            "extra": "iterations: 20225\ncpu: 41098.704573547555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 585.5029521271435,
            "unit": "ns/iter",
            "extra": "iterations: 1197611\ncpu: 585.4758348077977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 449.1341522462894,
            "unit": "ns/iter",
            "extra": "iterations: 1555151\ncpu: 449.11478049398465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 456.0519046844591,
            "unit": "ns/iter",
            "extra": "iterations: 1531461\ncpu: 456.02826320748574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 437.59142410183557,
            "unit": "ns/iter",
            "extra": "iterations: 1596171\ncpu: 437.5822515256821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 906.4136295496107,
            "unit": "ns/iter",
            "extra": "iterations: 773129\ncpu: 906.4044939460306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2065.065708982305,
            "unit": "ns/iter",
            "extra": "iterations: 386279\ncpu: 2064.960041835047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10524.249048324866,
            "unit": "ns/iter",
            "extra": "iterations: 77495\ncpu: 10523.308600554876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8567.351885061307,
            "unit": "ns/iter",
            "extra": "iterations: 95912\ncpu: 8566.75077154059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8181.780931264266,
            "unit": "ns/iter",
            "extra": "iterations: 99220\ncpu: 8181.259826647862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8059.533396142534,
            "unit": "ns/iter",
            "extra": "iterations: 100835\ncpu: 8059.130262309728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36967.38218882106,
            "unit": "ns/iter",
            "extra": "iterations: 22222\ncpu: 36964.00864008638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 258466.49745476784,
            "unit": "ns/iter",
            "extra": "iterations: 3536\ncpu: 258446.09728506854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185102.35430977546,
            "unit": "ns/iter",
            "extra": "iterations: 4513\ncpu: 185090.82650121875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 195675.9406392503,
            "unit": "ns/iter",
            "extra": "iterations: 4161\ncpu: 195665.20067291506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 186015.71791474338,
            "unit": "ns/iter",
            "extra": "iterations: 4527\ncpu: 186001.5020985203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 101031.77721342476,
            "unit": "ns/iter",
            "extra": "iterations: 8663\ncpu: 101026.30728385125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193487.77145396874,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 193477.10093374795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5318.825652343478,
            "unit": "ns/iter",
            "extra": "iterations: 154060\ncpu: 5318.672595092822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24971.72948256304,
            "unit": "ns/iter",
            "extra": "iterations: 33898\ncpu: 24969.97167974505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19865.25970460084,
            "unit": "ns/iter",
            "extra": "iterations: 42248\ncpu: 19864.559269077836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19316.55858215829,
            "unit": "ns/iter",
            "extra": "iterations: 43136\ncpu: 19315.52299703264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18859.38026589647,
            "unit": "ns/iter",
            "extra": "iterations: 43701\ncpu: 18858.717191826254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51958.15307017921,
            "unit": "ns/iter",
            "extra": "iterations: 15960\ncpu: 51956.02130325806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 278435.8663903051,
            "unit": "ns/iter",
            "extra": "iterations: 3136\ncpu: 278419.3558673472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 212303.63049851902,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 212291.39784946176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 215615.7930022146,
            "unit": "ns/iter",
            "extra": "iterations: 4087\ncpu: 215598.5319305109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 215401.69332008125,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 215390.83685125542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 114837.74562102622,
            "unit": "ns/iter",
            "extra": "iterations: 7536\ncpu: 114831.82059447991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 204938.5028544272,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 204927.42626070313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 830037.4295774865,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 829971.2147887296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 464639.1616640548,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 464634.8077935732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1908.1392515980456,
            "unit": "ns/iter",
            "extra": "iterations: 418839\ncpu: 1908.1002485441925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10657.324844648061,
            "unit": "ns/iter",
            "extra": "iterations: 77083\ncpu: 10657.124138915218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7977.670801971441,
            "unit": "ns/iter",
            "extra": "iterations: 103096\ncpu: 7977.075735237048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7887.178276415185,
            "unit": "ns/iter",
            "extra": "iterations: 104596\ncpu: 7886.846533328272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7785.131953684056,
            "unit": "ns/iter",
            "extra": "iterations: 105969\ncpu: 7784.7266653454735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 36670.041417536355,
            "unit": "ns/iter",
            "extra": "iterations: 22913\ncpu: 36668.75572818922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 257744.59245282784,
            "unit": "ns/iter",
            "extra": "iterations: 3180\ncpu: 257724.6855345907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 202236.86570247434,
            "unit": "ns/iter",
            "extra": "iterations: 4356\ncpu: 202230.48668503194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 203815.7643400004,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 203809.56000921555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 200336.13187068567,
            "unit": "ns/iter",
            "extra": "iterations: 4330\ncpu: 200332.51732101775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102114.8012436921,
            "unit": "ns/iter",
            "extra": "iterations: 8523\ncpu: 102108.91704798843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191893.85758720548,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 191889.4912241729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 182.94421977517686,
            "unit": "ns/iter",
            "extra": "iterations: 3823398\ncpu: 182.93727202870267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1504.5276353078664,
            "unit": "ns/iter",
            "extra": "iterations: 460136\ncpu: 1504.4984526314038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1117.1410700796266,
            "unit": "ns/iter",
            "extra": "iterations: 623449\ncpu: 1117.0443773267832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1193.4761495686796,
            "unit": "ns/iter",
            "extra": "iterations: 585524\ncpu: 1193.441430240264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 834.2479692898031,
            "unit": "ns/iter",
            "extra": "iterations: 817448\ncpu: 834.1763635118069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9776.98751706248,
            "unit": "ns/iter",
            "extra": "iterations: 71057\ncpu: 9776.659583151535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12825.99514916339,
            "unit": "ns/iter",
            "extra": "iterations: 53599\ncpu: 12825.666523629183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2814.727271617293,
            "unit": "ns/iter",
            "extra": "iterations: 245662\ncpu: 2814.5455951673575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2851.659509065957,
            "unit": "ns/iter",
            "extra": "iterations: 247243\ncpu: 2851.5982252278054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2835.9482092515605,
            "unit": "ns/iter",
            "extra": "iterations: 249002\ncpu: 2835.8872619497124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5298.190986960331,
            "unit": "ns/iter",
            "extra": "iterations: 130988\ncpu: 5297.931108193088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5350.077065795738,
            "unit": "ns/iter",
            "extra": "iterations: 130434\ncpu: 5349.619731051751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1930.8227700015432,
            "unit": "ns/iter",
            "extra": "iterations: 363285\ncpu: 1930.7061948607713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10244.23491407458,
            "unit": "ns/iter",
            "extra": "iterations: 68723\ncpu: 10243.697161066917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8104.160393423858,
            "unit": "ns/iter",
            "extra": "iterations: 86319\ncpu: 8103.936560896214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8056.772351563446,
            "unit": "ns/iter",
            "extra": "iterations: 87108\ncpu: 8056.394361023098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8056.811331050024,
            "unit": "ns/iter",
            "extra": "iterations: 86135\ncpu: 8056.07824925987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17967.40100740157,
            "unit": "ns/iter",
            "extra": "iterations: 38912\ncpu: 17966.39597039474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56117.359609482126,
            "unit": "ns/iter",
            "extra": "iterations: 12394\ncpu: 56114.20848797728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44576.067945796334,
            "unit": "ns/iter",
            "extra": "iterations: 15792\ncpu: 44573.66388044563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45264.797419853116,
            "unit": "ns/iter",
            "extra": "iterations: 15658\ncpu: 45261.31051219809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45583.01187000553,
            "unit": "ns/iter",
            "extra": "iterations: 15754\ncpu: 45581.40789640667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26274.134069811797,
            "unit": "ns/iter",
            "extra": "iterations: 26613\ncpu: 26273.56179310857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45130.61888810434,
            "unit": "ns/iter",
            "extra": "iterations: 15523\ncpu: 45129.86536107686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1947.030434105653,
            "unit": "ns/iter",
            "extra": "iterations: 359728\ncpu: 1946.9371302761951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10146.42598387796,
            "unit": "ns/iter",
            "extra": "iterations: 69343\ncpu: 10145.87918030648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8117.197726826231,
            "unit": "ns/iter",
            "extra": "iterations: 86311\ncpu: 8116.799712667096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8111.859207529547,
            "unit": "ns/iter",
            "extra": "iterations: 86489\ncpu: 8111.581819653396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8141.469236298808,
            "unit": "ns/iter",
            "extra": "iterations: 86238\ncpu: 8141.412138500407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17839.367040910314,
            "unit": "ns/iter",
            "extra": "iterations: 39279\ncpu: 17838.78408309758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55071.24811851243,
            "unit": "ns/iter",
            "extra": "iterations: 12623\ncpu: 55070.94985344279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43739.05485179466,
            "unit": "ns/iter",
            "extra": "iterations: 16025\ncpu: 43734.371294851066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42276.17072562924,
            "unit": "ns/iter",
            "extra": "iterations: 16055\ncpu: 42275.490501401946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44908.37344503875,
            "unit": "ns/iter",
            "extra": "iterations: 15756\ncpu: 44907.38766184285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25998.806339994757,
            "unit": "ns/iter",
            "extra": "iterations: 26877\ncpu: 25998.571269115102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44037.083041085585,
            "unit": "ns/iter",
            "extra": "iterations: 15968\ncpu: 44036.71092184346 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702504032309,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 581.2223224205092,
            "unit": "ns/iter",
            "extra": "iterations: 1171011\ncpu: 581.1877087405669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5489.797239999916,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5489.708000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10685.582851875059,
            "unit": "ns/iter",
            "extra": "iterations: 77023\ncpu: 10685.567947236541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16348.60606178284,
            "unit": "ns/iter",
            "extra": "iterations: 51470\ncpu: 16347.938605012627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21168.28159914839,
            "unit": "ns/iter",
            "extra": "iterations: 39471\ncpu: 21168.526259785667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26479.468256962115,
            "unit": "ns/iter",
            "extra": "iterations: 31818\ncpu: 26478.795021685826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31673.681292694007,
            "unit": "ns/iter",
            "extra": "iterations: 26642\ncpu: 31672.070415133996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36650.88919522108,
            "unit": "ns/iter",
            "extra": "iterations: 22851\ncpu: 36649.61270841539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40616.666138535686,
            "unit": "ns/iter",
            "extra": "iterations: 20197\ncpu: 40614.492251324446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 583.0726760376236,
            "unit": "ns/iter",
            "extra": "iterations: 1203010\ncpu: 583.0230006400607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 413.5535665335051,
            "unit": "ns/iter",
            "extra": "iterations: 1659833\ncpu: 413.5213602814261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 435.708250457071,
            "unit": "ns/iter",
            "extra": "iterations: 1628431\ncpu: 435.69405151338924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 405.9241439623722,
            "unit": "ns/iter",
            "extra": "iterations: 1683162\ncpu: 405.906680402719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 864.9076111259297,
            "unit": "ns/iter",
            "extra": "iterations: 807305\ncpu: 864.8648280389688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2002.9996793617452,
            "unit": "ns/iter",
            "extra": "iterations: 399204\ncpu: 2002.851424334424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10847.791295248899,
            "unit": "ns/iter",
            "extra": "iterations: 75499\ncpu: 10847.09863706805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7909.008978675357,
            "unit": "ns/iter",
            "extra": "iterations: 103356\ncpu: 7908.574248229426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7830.354113428732,
            "unit": "ns/iter",
            "extra": "iterations: 102919\ncpu: 7829.872035289906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7803.941422049233,
            "unit": "ns/iter",
            "extra": "iterations: 107549\ncpu: 7803.682042603827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 37074.42227564025,
            "unit": "ns/iter",
            "extra": "iterations: 22464\ncpu: 37071.906160968625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 264083.016831108,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 264063.0295995361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 188201.65093056674,
            "unit": "ns/iter",
            "extra": "iterations: 4406\ncpu: 188186.9042215157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 193728.7107587571,
            "unit": "ns/iter",
            "extra": "iterations: 4415\ncpu: 193715.3567383921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 192327.60472113345,
            "unit": "ns/iter",
            "extra": "iterations: 4321\ncpu: 192314.16338810488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 105247.76048603226,
            "unit": "ns/iter",
            "extra": "iterations: 8559\ncpu: 105238.71947657429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 191371.31057797614,
            "unit": "ns/iter",
            "extra": "iterations: 4585\ncpu: 191353.21701199622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5258.982987807125,
            "unit": "ns/iter",
            "extra": "iterations: 152714\ncpu: 5258.584019801712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24339.908769935504,
            "unit": "ns/iter",
            "extra": "iterations: 33421\ncpu: 24339.53203075908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19254.044813566765,
            "unit": "ns/iter",
            "extra": "iterations: 43045\ncpu: 19252.41956092457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18988.309983276074,
            "unit": "ns/iter",
            "extra": "iterations: 44254\ncpu: 18987.16726171645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18722.899097916932,
            "unit": "ns/iter",
            "extra": "iterations: 44231\ncpu: 18722.10440641181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51480.769691301844,
            "unit": "ns/iter",
            "extra": "iterations: 16035\ncpu: 51479.23916432814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 276441.11262801057,
            "unit": "ns/iter",
            "extra": "iterations: 3223\ncpu: 276420.10549177695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203540.1137533847,
            "unit": "ns/iter",
            "extra": "iterations: 4079\ncpu: 203528.02157391442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 209146.14101336474,
            "unit": "ns/iter",
            "extra": "iterations: 4184\ncpu: 209134.58413001982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 200671.5458473297,
            "unit": "ns/iter",
            "extra": "iterations: 4166\ncpu: 200656.43302928537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 114403.1129242809,
            "unit": "ns/iter",
            "extra": "iterations: 7660\ncpu: 114394.2689295034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197069.23058713783,
            "unit": "ns/iter",
            "extra": "iterations: 4224\ncpu: 197056.51041666535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 822611.4238753925,
            "unit": "ns/iter",
            "extra": "iterations: 1156\ncpu: 822567.128027683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 454703.41041665326,
            "unit": "ns/iter",
            "extra": "iterations: 1920\ncpu: 454666.25000000204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1871.7368738250161,
            "unit": "ns/iter",
            "extra": "iterations: 429752\ncpu: 1871.6324764049941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10236.149401100805,
            "unit": "ns/iter",
            "extra": "iterations: 80314\ncpu: 10235.478247877103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7946.313400971925,
            "unit": "ns/iter",
            "extra": "iterations: 102112\ncpu: 7945.822234409229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7908.502854058033,
            "unit": "ns/iter",
            "extra": "iterations: 103712\ncpu: 7908.200593952439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7300.222838646002,
            "unit": "ns/iter",
            "extra": "iterations: 111215\ncpu: 7299.777008497072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 36443.40219275697,
            "unit": "ns/iter",
            "extra": "iterations: 23076\ncpu: 36443.36540128273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 263097.01297936536,
            "unit": "ns/iter",
            "extra": "iterations: 3390\ncpu: 263089.6755162246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 198414.2684833436,
            "unit": "ns/iter",
            "extra": "iterations: 4477\ncpu: 198408.86754523194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 195700.485623727,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 195696.21915327202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 199700.14088958403,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 199688.55272070412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 102079.78794203329,
            "unit": "ns/iter",
            "extra": "iterations: 8625\ncpu: 102076.66086956493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 181844.70033004004,
            "unit": "ns/iter",
            "extra": "iterations: 4545\ncpu: 181837.11771177067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 182.80490091887614,
            "unit": "ns/iter",
            "extra": "iterations: 3829690\ncpu: 182.7946126187763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1483.237543862415,
            "unit": "ns/iter",
            "extra": "iterations: 472498\ncpu: 1483.1571773848734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1127.1165275056105,
            "unit": "ns/iter",
            "extra": "iterations: 622780\ncpu: 1127.049359324326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1069.1929135658388,
            "unit": "ns/iter",
            "extra": "iterations: 656014\ncpu: 1069.1492864481545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 834.5761707836886,
            "unit": "ns/iter",
            "extra": "iterations: 812490\ncpu: 834.5481175152888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9896.874095900128,
            "unit": "ns/iter",
            "extra": "iterations: 70927\ncpu: 9896.872841090191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12783.89215308735,
            "unit": "ns/iter",
            "extra": "iterations: 54531\ncpu: 12783.726687572249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2825.034448017696,
            "unit": "ns/iter",
            "extra": "iterations: 248142\ncpu: 2825.0356650627614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2797.7427538977868,
            "unit": "ns/iter",
            "extra": "iterations: 250721\ncpu: 2797.6774980954915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2818.897133837212,
            "unit": "ns/iter",
            "extra": "iterations: 248974\ncpu: 2818.8284720493043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5362.0239124586615,
            "unit": "ns/iter",
            "extra": "iterations: 130225\ncpu: 5362.071798809734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5331.088639801622,
            "unit": "ns/iter",
            "extra": "iterations: 130878\ncpu: 5330.9349164871155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1923.1503967991175,
            "unit": "ns/iter",
            "extra": "iterations: 361896\ncpu: 1923.1677056391663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10308.860478494098,
            "unit": "ns/iter",
            "extra": "iterations: 67796\ncpu: 10308.603752433648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8138.515545270958,
            "unit": "ns/iter",
            "extra": "iterations: 86425\ncpu: 8138.383569569004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8020.429977184642,
            "unit": "ns/iter",
            "extra": "iterations: 86786\ncpu: 8020.350056460693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8120.535952194845,
            "unit": "ns/iter",
            "extra": "iterations: 86017\ncpu: 8120.357603729576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18311.188818291455,
            "unit": "ns/iter",
            "extra": "iterations: 38402\ncpu: 18311.356179365725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54560.33120340336,
            "unit": "ns/iter",
            "extra": "iterations: 12207\ncpu: 54558.13877283472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44984.7187377953,
            "unit": "ns/iter",
            "extra": "iterations: 15370\ncpu: 44984.625894599754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44356.096706103635,
            "unit": "ns/iter",
            "extra": "iterations: 15635\ncpu: 44355.6763671258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45720.40697523854,
            "unit": "ns/iter",
            "extra": "iterations: 15426\ncpu: 45720.87384934574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26269.368185913623,
            "unit": "ns/iter",
            "extra": "iterations: 26636\ncpu: 26269.01937227802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45076.528544766355,
            "unit": "ns/iter",
            "extra": "iterations: 15537\ncpu: 45075.7160326961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1949.6322028493591,
            "unit": "ns/iter",
            "extra": "iterations: 357428\ncpu: 1949.6541960898376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10174.171206732493,
            "unit": "ns/iter",
            "extra": "iterations: 69162\ncpu: 10174.102831034284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8240.13326346532,
            "unit": "ns/iter",
            "extra": "iterations: 84922\ncpu: 8239.810649772795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8198.551696011897,
            "unit": "ns/iter",
            "extra": "iterations: 85819\ncpu: 8198.432747992825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8169.362079532549,
            "unit": "ns/iter",
            "extra": "iterations: 84846\ncpu: 8169.197133630353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17970.052145113135,
            "unit": "ns/iter",
            "extra": "iterations: 38949\ncpu: 17970.24057100285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 56392.049186991615,
            "unit": "ns/iter",
            "extra": "iterations: 12300\ncpu: 56392.65040650359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44351.486194551035,
            "unit": "ns/iter",
            "extra": "iterations: 15646\ncpu: 44350.23648216803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44107.10143092468,
            "unit": "ns/iter",
            "extra": "iterations: 15794\ncpu: 44106.21755096822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 45104.264579496594,
            "unit": "ns/iter",
            "extra": "iterations: 16290\ncpu: 45104.708410068015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26523.532437722584,
            "unit": "ns/iter",
            "extra": "iterations: 26574\ncpu: 26522.63866937596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44811.61062225245,
            "unit": "ns/iter",
            "extra": "iterations: 15910\ncpu: 44811.34506599597 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}