window.BENCHMARK_DATA = {
  "lastUpdate": 1705960016886,
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
        "date": 1705575647878,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 572.9832267043436,
            "unit": "ns/iter",
            "extra": "iterations: 1215742\ncpu: 572.9506753900089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5420.178440000427,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5419.959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10634.539465466669,
            "unit": "ns/iter",
            "extra": "iterations: 78461\ncpu: 10634.562394055645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16080.115806596727,
            "unit": "ns/iter",
            "extra": "iterations: 52864\ncpu: 16080.13014527845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20956.866450575708,
            "unit": "ns/iter",
            "extra": "iterations: 39798\ncpu: 20956.284235388703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26041.67011301792,
            "unit": "ns/iter",
            "extra": "iterations: 32208\ncpu: 26040.325384997508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31311.219713988616,
            "unit": "ns/iter",
            "extra": "iterations: 26712\ncpu: 31309.654836777474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36105.8553912109,
            "unit": "ns/iter",
            "extra": "iterations: 23325\ncpu: 36105.02893890677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40751.76009774233,
            "unit": "ns/iter",
            "extra": "iterations: 20871\ncpu: 40749.88740357436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 562.1644854177077,
            "unit": "ns/iter",
            "extra": "iterations: 1236906\ncpu: 562.1319647572245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 434.24536377403257,
            "unit": "ns/iter",
            "extra": "iterations: 1606533\ncpu: 434.22600095983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 440.29709595659295,
            "unit": "ns/iter",
            "extra": "iterations: 1572566\ncpu: 440.3017107072131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 424.4210792300425,
            "unit": "ns/iter",
            "extra": "iterations: 1652252\ncpu: 424.4167354616614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 891.3551958279222,
            "unit": "ns/iter",
            "extra": "iterations: 785409\ncpu: 891.309750715868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2003.82079360847,
            "unit": "ns/iter",
            "extra": "iterations: 398786\ncpu: 2003.7488778442548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10357.854743386026,
            "unit": "ns/iter",
            "extra": "iterations: 78172\ncpu: 10357.410581793998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8387.859982210288,
            "unit": "ns/iter",
            "extra": "iterations: 97809\ncpu: 8387.501150200897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8221.566674996246,
            "unit": "ns/iter",
            "extra": "iterations: 100045\ncpu: 8221.220450797146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8266.18138349474,
            "unit": "ns/iter",
            "extra": "iterations: 98085\ncpu: 8265.969312331124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36826.524717357046,
            "unit": "ns/iter",
            "extra": "iterations: 22555\ncpu: 36824.69518953663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 263306.67138555564,
            "unit": "ns/iter",
            "extra": "iterations: 3320\ncpu: 263290.90361445834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 195508.861091593,
            "unit": "ns/iter",
            "extra": "iterations: 4269\ncpu: 195497.44670883118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 195997.89487299215,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 195988.21730950155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 199174.35476248187,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 199166.698180099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104968.07494595445,
            "unit": "ns/iter",
            "extra": "iterations: 8326\ncpu: 104964.88109536366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 198326.17162832615,
            "unit": "ns/iter",
            "extra": "iterations: 4434\ncpu: 198314.07307171862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5420.257983773321,
            "unit": "ns/iter",
            "extra": "iterations: 152215\ncpu: 5420.254902604865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24929.48975919985,
            "unit": "ns/iter",
            "extra": "iterations: 33347\ncpu: 24928.878159954475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19701.64461838545,
            "unit": "ns/iter",
            "extra": "iterations: 42543\ncpu: 19700.493618221542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19566.69757055762,
            "unit": "ns/iter",
            "extra": "iterations: 42767\ncpu: 19566.200575209907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18834.138195952542,
            "unit": "ns/iter",
            "extra": "iterations: 43735\ncpu: 18834.039099119673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51372.3362909308,
            "unit": "ns/iter",
            "extra": "iterations: 16004\ncpu: 51371.16345913539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 277535.2917865166,
            "unit": "ns/iter",
            "extra": "iterations: 3129\ncpu: 277529.21061041846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 211977.22687437912,
            "unit": "ns/iter",
            "extra": "iterations: 4108\ncpu: 211969.4741966894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 210959.65537267568,
            "unit": "ns/iter",
            "extra": "iterations: 4132\ncpu: 210960.4549854789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 210191.41030579954,
            "unit": "ns/iter",
            "extra": "iterations: 4153\ncpu: 210184.85432217742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112807.54968177697,
            "unit": "ns/iter",
            "extra": "iterations: 7699\ncpu: 112803.98753084842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 201700.29156011686,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 201692.18786328752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 820492.6873935615,
            "unit": "ns/iter",
            "extra": "iterations: 1174\ncpu: 820454.0885860283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 466152.9354155171,
            "unit": "ns/iter",
            "extra": "iterations: 1889\ncpu: 466139.7035468503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1870.3172585160478,
            "unit": "ns/iter",
            "extra": "iterations: 428600\ncpu: 1870.3170788614011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10011.841155454293,
            "unit": "ns/iter",
            "extra": "iterations: 82011\ncpu: 10011.65575349649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7762.693732153251,
            "unit": "ns/iter",
            "extra": "iterations: 106113\ncpu: 7762.477735998416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7872.534465218552,
            "unit": "ns/iter",
            "extra": "iterations: 104192\ncpu: 7872.270423832949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7444.647110538962,
            "unit": "ns/iter",
            "extra": "iterations: 110332\ncpu: 7444.24011166301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 36381.05115511966,
            "unit": "ns/iter",
            "extra": "iterations: 23028\ncpu: 36379.77679346904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 263449.6805759504,
            "unit": "ns/iter",
            "extra": "iterations: 3403\ncpu: 263443.1090214524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 198068.85058242932,
            "unit": "ns/iter",
            "extra": "iterations: 4464\ncpu: 198055.82437276046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 197721.34393193695,
            "unit": "ns/iter",
            "extra": "iterations: 4466\ncpu: 197716.21137483104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 193550.48591549962,
            "unit": "ns/iter",
            "extra": "iterations: 4544\ncpu: 193544.05809859178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 99921.72471910145,
            "unit": "ns/iter",
            "extra": "iterations: 8722\ncpu: 99920.1559275392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 186629.3639253908,
            "unit": "ns/iter",
            "extra": "iterations: 4718\ncpu: 186626.17634591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 181.75446436941803,
            "unit": "ns/iter",
            "extra": "iterations: 3841304\ncpu: 181.75163954740302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1479.4785679267939,
            "unit": "ns/iter",
            "extra": "iterations: 473216\ncpu: 1479.4613876115734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1121.2764744573597,
            "unit": "ns/iter",
            "extra": "iterations: 624857\ncpu: 1121.287750637339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1060.2081485432534,
            "unit": "ns/iter",
            "extra": "iterations: 661787\ncpu: 1060.1627109628928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 854.8187667947041,
            "unit": "ns/iter",
            "extra": "iterations: 817593\ncpu: 854.7989036109602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9851.794338156198,
            "unit": "ns/iter",
            "extra": "iterations: 70825\ncpu: 9851.45217084358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13053.487441026711,
            "unit": "ns/iter",
            "extra": "iterations: 53627\ncpu: 13053.212001417192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2838.1196734098103,
            "unit": "ns/iter",
            "extra": "iterations: 244833\ncpu: 2838.121903501556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2844.2115934292196,
            "unit": "ns/iter",
            "extra": "iterations: 247347\ncpu: 2844.1707398917306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2814.0135781530325,
            "unit": "ns/iter",
            "extra": "iterations: 248782\ncpu: 2813.969660184427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5046.312923947942,
            "unit": "ns/iter",
            "extra": "iterations: 139168\ncpu: 5046.250574844775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5255.719307856405,
            "unit": "ns/iter",
            "extra": "iterations: 127777\ncpu: 5255.632860373923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1910.212983826344,
            "unit": "ns/iter",
            "extra": "iterations: 364361\ncpu: 1910.1731524504648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10326.025898114447,
            "unit": "ns/iter",
            "extra": "iterations: 67920\ncpu: 10325.780329799856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8157.172184579239,
            "unit": "ns/iter",
            "extra": "iterations: 85600\ncpu: 8157.004672897124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8094.23813266508,
            "unit": "ns/iter",
            "extra": "iterations: 86519\ncpu: 8094.127301517658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8195.961934480638,
            "unit": "ns/iter",
            "extra": "iterations: 85563\ncpu: 8195.898928275159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18080.409418023613,
            "unit": "ns/iter",
            "extra": "iterations: 38352\ncpu: 18076.57749269912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55711.15366545619,
            "unit": "ns/iter",
            "extra": "iterations: 12345\ncpu: 55709.226407451795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45776.92929490429,
            "unit": "ns/iter",
            "extra": "iterations: 15303\ncpu: 45775.33163431987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45347.80457837266,
            "unit": "ns/iter",
            "extra": "iterations: 15464\ncpu: 45348.29280910436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 45374.74364462231,
            "unit": "ns/iter",
            "extra": "iterations: 15420\ncpu: 45374.15693904013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26215.105471374547,
            "unit": "ns/iter",
            "extra": "iterations: 26794\ncpu: 26214.689855937817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44965.52898642932,
            "unit": "ns/iter",
            "extra": "iterations: 15628\ncpu: 44964.81955464541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1960.8104572787279,
            "unit": "ns/iter",
            "extra": "iterations: 357703\ncpu: 1960.8110639273605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10215.44305642725,
            "unit": "ns/iter",
            "extra": "iterations: 68603\ncpu: 10215.385624535491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8095.973716762387,
            "unit": "ns/iter",
            "extra": "iterations: 84883\ncpu: 8095.317083514977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8128.308142846239,
            "unit": "ns/iter",
            "extra": "iterations: 86051\ncpu: 8128.061265993366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8029.557125138695,
            "unit": "ns/iter",
            "extra": "iterations: 87072\ncpu: 8029.117282249155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17640.448539778565,
            "unit": "ns/iter",
            "extra": "iterations: 39720\ncpu: 17640.63444108773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55345.34246685036,
            "unit": "ns/iter",
            "extra": "iterations: 12518\ncpu: 55342.850295573706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43781.198867174535,
            "unit": "ns/iter",
            "extra": "iterations: 16066\ncpu: 43780.72949084996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43368.9538951742,
            "unit": "ns/iter",
            "extra": "iterations: 16007\ncpu: 43368.476291622406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43496.93777639324,
            "unit": "ns/iter",
            "extra": "iterations: 16055\ncpu: 43496.0074743067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25296.588745874822,
            "unit": "ns/iter",
            "extra": "iterations: 26959\ncpu: 25294.66226492048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42397.9599609907,
            "unit": "ns/iter",
            "extra": "iterations: 16409\ncpu: 42396.1179840327 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705773469605,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 616.7424553536915,
            "unit": "ns/iter",
            "extra": "iterations: 1139119\ncpu: 616.736442812384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5544.612109999889,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5544.682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10776.373196358441,
            "unit": "ns/iter",
            "extra": "iterations: 76997\ncpu: 10776.283491564607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16674.911853985974,
            "unit": "ns/iter",
            "extra": "iterations: 51721\ncpu: 16675.116490400418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21313.622228438355,
            "unit": "ns/iter",
            "extra": "iterations: 39328\ncpu: 21313.730675345818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26381.790040968535,
            "unit": "ns/iter",
            "extra": "iterations: 31730\ncpu: 26381.82792310119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31333.436522847693,
            "unit": "ns/iter",
            "extra": "iterations: 26608\ncpu: 31332.535327720987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36151.40459103977,
            "unit": "ns/iter",
            "extra": "iterations: 23132\ncpu: 36151.551962649144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41110.77176794193,
            "unit": "ns/iter",
            "extra": "iterations: 20374\ncpu: 41110.434867968965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 560.2876704969982,
            "unit": "ns/iter",
            "extra": "iterations: 1247309\ncpu: 560.2901927269024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 433.67465927686584,
            "unit": "ns/iter",
            "extra": "iterations: 1617369\ncpu: 433.6716605796209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 443.2331758394845,
            "unit": "ns/iter",
            "extra": "iterations: 1578474\ncpu: 443.23555535282776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 420.4465221610435,
            "unit": "ns/iter",
            "extra": "iterations: 1685932\ncpu: 420.4514772837814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 876.4321376138265,
            "unit": "ns/iter",
            "extra": "iterations: 798292\ncpu: 876.4363165358036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1999.131468877378,
            "unit": "ns/iter",
            "extra": "iterations: 400224\ncpu: 1999.142979931235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10567.75638153175,
            "unit": "ns/iter",
            "extra": "iterations: 77215\ncpu: 10567.881888234147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8258.88942209895,
            "unit": "ns/iter",
            "extra": "iterations: 98356\ncpu: 8258.815933954194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7979.281013902221,
            "unit": "ns/iter",
            "extra": "iterations: 101785\ncpu: 7979.298521393135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8048.560901100545,
            "unit": "ns/iter",
            "extra": "iterations: 101476\ncpu: 8048.4114470417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36986.48277255809,
            "unit": "ns/iter",
            "extra": "iterations: 22261\ncpu: 36986.73464803915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 249638.69741587367,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 249635.7271634621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 188131.58086763992,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 188132.19132369343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 192836.89317976602,
            "unit": "ns/iter",
            "extra": "iterations: 4428\ncpu: 192832.5429087628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 201606.96117834706,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 201608.08403745177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 101963.31329908142,
            "unit": "ns/iter",
            "extra": "iterations: 8369\ncpu: 101962.81515115323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193705.28063152212,
            "unit": "ns/iter",
            "extra": "iterations: 4497\ncpu: 193704.9588614629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5315.668036931635,
            "unit": "ns/iter",
            "extra": "iterations: 153255\ncpu: 5315.66474177026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24931.554101462054,
            "unit": "ns/iter",
            "extra": "iterations: 32781\ncpu: 24931.45114548052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19647.90511085692,
            "unit": "ns/iter",
            "extra": "iterations: 42713\ncpu: 19648.151616603853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18957.26080025955,
            "unit": "ns/iter",
            "extra": "iterations: 43286\ncpu: 18956.935267754063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18819.227746483517,
            "unit": "ns/iter",
            "extra": "iterations: 43847\ncpu: 18818.804023080254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 52363.018239590085,
            "unit": "ns/iter",
            "extra": "iterations: 15735\ncpu: 52362.986971719205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 268220.20808710245,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 268219.9377916024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 210490.18592233423,
            "unit": "ns/iter",
            "extra": "iterations: 4120\ncpu: 210486.72330096964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 210776.46406820958,
            "unit": "ns/iter",
            "extra": "iterations: 4105\ncpu: 210778.9524969558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 209864.42438196484,
            "unit": "ns/iter",
            "extra": "iterations: 4126\ncpu: 209863.81483276843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 113921.2485284581,
            "unit": "ns/iter",
            "extra": "iterations: 7645\ncpu: 113920.30085022973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 201815.19413407356,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 201811.2662942267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 806010.3353501167,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 805987.208297323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 457314.5332656383,
            "unit": "ns/iter",
            "extra": "iterations: 1969\ncpu: 457298.4763839538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1922.256087122957,
            "unit": "ns/iter",
            "extra": "iterations: 418260\ncpu: 1922.1830918567352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10625.344945311563,
            "unit": "ns/iter",
            "extra": "iterations: 77621\ncpu: 10625.104031125535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7860.280408897243,
            "unit": "ns/iter",
            "extra": "iterations: 104476\ncpu: 7860.04919790194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8051.253162044819,
            "unit": "ns/iter",
            "extra": "iterations: 100805\ncpu: 8051.147264520612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7750.714544540305,
            "unit": "ns/iter",
            "extra": "iterations: 105421\ncpu: 7750.456740118205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 36214.249347598285,
            "unit": "ns/iter",
            "extra": "iterations: 22992\ncpu: 36213.82219902584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 264618.50060167426,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 264608.27316486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 198163.14330778166,
            "unit": "ns/iter",
            "extra": "iterations: 4438\ncpu: 198159.84677782864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 198111.98888384958,
            "unit": "ns/iter",
            "extra": "iterations: 4408\ncpu: 198104.19691470184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 196368.48508136396,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 196364.62477395975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101239.26509949572,
            "unit": "ns/iter",
            "extra": "iterations: 8593\ncpu: 101233.5622017923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 184559.4709480165,
            "unit": "ns/iter",
            "extra": "iterations: 4578\ncpu: 184554.01922236805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 182.0391180735858,
            "unit": "ns/iter",
            "extra": "iterations: 3828256\ncpu: 182.03140019894127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1414.0129333153473,
            "unit": "ns/iter",
            "extra": "iterations: 487578\ncpu: 1414.0049386969863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1170.3762648587501,
            "unit": "ns/iter",
            "extra": "iterations: 598387\ncpu: 1170.3446097592366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1217.3369960825,
            "unit": "ns/iter",
            "extra": "iterations: 619025\ncpu: 1217.2983320544406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 856.5833398694975,
            "unit": "ns/iter",
            "extra": "iterations: 815984\ncpu: 856.5514764995426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10011.231000084947,
            "unit": "ns/iter",
            "extra": "iterations: 70974\ncpu: 10010.4503057458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 13056.553410262097,
            "unit": "ns/iter",
            "extra": "iterations: 53295\ncpu: 13055.971479500942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2876.3788165705973,
            "unit": "ns/iter",
            "extra": "iterations: 243445\ncpu: 2876.2418616114333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2706.467792377948,
            "unit": "ns/iter",
            "extra": "iterations: 239493\ncpu: 2706.351751408211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2843.11674204809,
            "unit": "ns/iter",
            "extra": "iterations: 246081\ncpu: 2842.933830730514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5389.612443574346,
            "unit": "ns/iter",
            "extra": "iterations: 128709\ncpu: 5389.519769402327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5326.624968273981,
            "unit": "ns/iter",
            "extra": "iterations: 130021\ncpu: 5326.4495735304345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1922.945674944405,
            "unit": "ns/iter",
            "extra": "iterations: 366608\ncpu: 1922.9244860995775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10159.290006502868,
            "unit": "ns/iter",
            "extra": "iterations: 69195\ncpu: 10159.053399812183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8037.606014021501,
            "unit": "ns/iter",
            "extra": "iterations: 85866\ncpu: 8037.382666014445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7977.3289567150905,
            "unit": "ns/iter",
            "extra": "iterations: 87282\ncpu: 7977.360738754858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7995.257016164234,
            "unit": "ns/iter",
            "extra": "iterations: 87726\ncpu: 7995.354854889148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17973.092487179012,
            "unit": "ns/iter",
            "extra": "iterations: 39000\ncpu: 17973.166666666955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56909.25186277165,
            "unit": "ns/iter",
            "extra": "iterations: 12213\ncpu: 56909.9156636372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44747.96799158066,
            "unit": "ns/iter",
            "extra": "iterations: 16152\ncpu: 44746.390539870925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 45105.53453683977,
            "unit": "ns/iter",
            "extra": "iterations: 15621\ncpu: 45105.60143396664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44597.58742727106,
            "unit": "ns/iter",
            "extra": "iterations: 16671\ncpu: 44597.34269090016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26089.37897026164,
            "unit": "ns/iter",
            "extra": "iterations: 26667\ncpu: 26089.481381482914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44030.33683548635,
            "unit": "ns/iter",
            "extra": "iterations: 15895\ncpu: 44030.05347593554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1953.7357216290618,
            "unit": "ns/iter",
            "extra": "iterations: 358917\ncpu: 1953.711582343558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10065.301049839427,
            "unit": "ns/iter",
            "extra": "iterations: 69344\ncpu: 10065.317835717657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8221.929622989239,
            "unit": "ns/iter",
            "extra": "iterations: 84772\ncpu: 8221.942386637078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8139.228608022559,
            "unit": "ns/iter",
            "extra": "iterations: 85102\ncpu: 8139.12834010944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8058.199281573874,
            "unit": "ns/iter",
            "extra": "iterations: 85743\ncpu: 8058.293971519579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17598.302715193935,
            "unit": "ns/iter",
            "extra": "iterations: 39813\ncpu: 17598.251827292894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55456.90357599427,
            "unit": "ns/iter",
            "extra": "iterations: 12528\ncpu: 55456.58524904298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43642.19480599876,
            "unit": "ns/iter",
            "extra": "iterations: 16057\ncpu: 43641.471009528876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43563.39622290493,
            "unit": "ns/iter",
            "extra": "iterations: 16097\ncpu: 43563.61433807478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43584.63991705247,
            "unit": "ns/iter",
            "extra": "iterations: 15913\ncpu: 43584.45924715681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25932.424650516863,
            "unit": "ns/iter",
            "extra": "iterations: 27326\ncpu: 25932.47822586558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43322.07121425312,
            "unit": "ns/iter",
            "extra": "iterations: 16331\ncpu: 43321.47449635639 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705774900588,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 600.1343530649508,
            "unit": "ns/iter",
            "extra": "iterations: 1171354\ncpu: 600.1093606202736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5553.676539999515,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5553.726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10845.197205860231,
            "unit": "ns/iter",
            "extra": "iterations: 76732\ncpu: 10844.818328728561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16291.6814162763,
            "unit": "ns/iter",
            "extra": "iterations: 50894\ncpu: 16291.684677958112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21132.18759839627,
            "unit": "ns/iter",
            "extra": "iterations: 39382\ncpu: 21131.67944746331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26448.536060142775,
            "unit": "ns/iter",
            "extra": "iterations: 31392\ncpu: 26448.228848114166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31850.291131129245,
            "unit": "ns/iter",
            "extra": "iterations: 26531\ncpu: 31849.248049451577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36960.85640345271,
            "unit": "ns/iter",
            "extra": "iterations: 22605\ncpu: 36960.74762220745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41874.25067175057,
            "unit": "ns/iter",
            "extra": "iterations: 20469\ncpu: 41873.301089452405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 592.9487595476712,
            "unit": "ns/iter",
            "extra": "iterations: 1186543\ncpu: 592.9480010416823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 417.29226536566586,
            "unit": "ns/iter",
            "extra": "iterations: 1532768\ncpu: 417.2724769828178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 421.0804994767713,
            "unit": "ns/iter",
            "extra": "iterations: 1578532\ncpu: 421.05747618673524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 407.80873797981576,
            "unit": "ns/iter",
            "extra": "iterations: 1719505\ncpu: 407.78648506401566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 880.858122580344,
            "unit": "ns/iter",
            "extra": "iterations: 793227\ncpu: 880.8322207892586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1864.3065818530163,
            "unit": "ns/iter",
            "extra": "iterations: 420687\ncpu: 1864.1859624851704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10374.231023269998,
            "unit": "ns/iter",
            "extra": "iterations: 78728\ncpu: 10373.851742709083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7725.644120823106,
            "unit": "ns/iter",
            "extra": "iterations: 107396\ncpu: 7725.454393087265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7733.656478512339,
            "unit": "ns/iter",
            "extra": "iterations: 105711\ncpu: 7733.597260455366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7359.063209514907,
            "unit": "ns/iter",
            "extra": "iterations: 110727\ncpu: 7358.7860232824905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 37290.87039538685,
            "unit": "ns/iter",
            "extra": "iterations: 22206\ncpu: 37290.06574799615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 249247.34938022422,
            "unit": "ns/iter",
            "extra": "iterations: 3469\ncpu: 249242.34649754994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 193491.59120370407,
            "unit": "ns/iter",
            "extra": "iterations: 4320\ncpu: 193474.99999999933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 202418.19375875525,
            "unit": "ns/iter",
            "extra": "iterations: 4294\ncpu: 202404.2850489061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 192865.17275822224,
            "unit": "ns/iter",
            "extra": "iterations: 4405\ncpu: 192854.6651532352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102871.84196186099,
            "unit": "ns/iter",
            "extra": "iterations: 8441\ncpu: 102869.39936026544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 190896.19229909327,
            "unit": "ns/iter",
            "extra": "iterations: 4467\ncpu: 190895.81374524254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5351.1964137642035,
            "unit": "ns/iter",
            "extra": "iterations: 150743\ncpu: 5351.158594428914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24435.09076475152,
            "unit": "ns/iter",
            "extra": "iterations: 34011\ncpu: 24434.52412454794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19142.126970227648,
            "unit": "ns/iter",
            "extra": "iterations: 43396\ncpu: 19142.107567517756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19435.514339589026,
            "unit": "ns/iter",
            "extra": "iterations: 42958\ncpu: 19435.381069882216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18566.632806674654,
            "unit": "ns/iter",
            "extra": "iterations: 44241\ncpu: 18566.41802852557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50691.5678654992,
            "unit": "ns/iter",
            "extra": "iterations: 16238\ncpu: 50690.60229092233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 271669.9183800817,
            "unit": "ns/iter",
            "extra": "iterations: 3210\ncpu: 271670.46728972025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 212134.3940719077,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 212133.21185617172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 210343.53593034216,
            "unit": "ns/iter",
            "extra": "iterations: 4133\ncpu: 210342.10016936949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 204720.4263456037,
            "unit": "ns/iter",
            "extra": "iterations: 4236\ncpu: 204714.54202077352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 113309.69935317831,
            "unit": "ns/iter",
            "extra": "iterations: 7730\ncpu: 113309.8576972841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 201583.42074725576,
            "unit": "ns/iter",
            "extra": "iterations: 4309\ncpu: 201580.52912508763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 816367.3751073377,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 816358.7982832586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 452192.84871791385,
            "unit": "ns/iter",
            "extra": "iterations: 1950\ncpu: 452181.487179487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1904.4848877466777,
            "unit": "ns/iter",
            "extra": "iterations: 423729\ncpu: 1904.4511940414734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9943.903102034197,
            "unit": "ns/iter",
            "extra": "iterations: 83139\ncpu: 9943.71474278013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7786.012404380446,
            "unit": "ns/iter",
            "extra": "iterations: 105366\ncpu: 7786.015412941566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7679.01278194782,
            "unit": "ns/iter",
            "extra": "iterations: 106713\ncpu: 7678.951018151452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7397.063596631016,
            "unit": "ns/iter",
            "extra": "iterations: 110509\ncpu: 7397.044584604013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 36506.50268782335,
            "unit": "ns/iter",
            "extra": "iterations: 22881\ncpu: 36506.2366155326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 260925.21790340662,
            "unit": "ns/iter",
            "extra": "iterations: 3396\ncpu: 260922.70318021026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 194604.3258402041,
            "unit": "ns/iter",
            "extra": "iterations: 4493\ncpu: 194599.59937680827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 194481.057542786,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 194481.31526327442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 196885.68026137303,
            "unit": "ns/iter",
            "extra": "iterations: 4438\ncpu: 196884.09193330279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101490.76945277535,
            "unit": "ns/iter",
            "extra": "iterations: 8662\ncpu: 101489.93304086872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 188512.8327615771,
            "unit": "ns/iter",
            "extra": "iterations: 4664\ncpu: 188510.54888507616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 181.63748044422644,
            "unit": "ns/iter",
            "extra": "iterations: 3847329\ncpu: 181.63905400344024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1467.314686228472,
            "unit": "ns/iter",
            "extra": "iterations: 474533\ncpu: 1467.3146019349451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1164.5564277660612,
            "unit": "ns/iter",
            "extra": "iterations: 601282\ncpu: 1164.5555662733912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1066.5961498595195,
            "unit": "ns/iter",
            "extra": "iterations: 656028\ncpu: 1066.5762741834235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 843.4151910811792,
            "unit": "ns/iter",
            "extra": "iterations: 830066\ncpu: 843.4072712290267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 10016.295449765648,
            "unit": "ns/iter",
            "extra": "iterations: 71315\ncpu: 10016.15368435818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12110.600131421023,
            "unit": "ns/iter",
            "extra": "iterations: 57829\ncpu: 12110.544882325445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2801.4631530187276,
            "unit": "ns/iter",
            "extra": "iterations: 250414\ncpu: 2801.4571868984976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2715.13012316506,
            "unit": "ns/iter",
            "extra": "iterations: 253237\ncpu: 2714.930677586619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2727.158289893587,
            "unit": "ns/iter",
            "extra": "iterations: 257060\ncpu: 2727.006146424959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5293.274463938143,
            "unit": "ns/iter",
            "extra": "iterations: 133380\ncpu: 5293.152646573731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5126.092208282076,
            "unit": "ns/iter",
            "extra": "iterations: 135259\ncpu: 5126.001227275094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1931.615356012416,
            "unit": "ns/iter",
            "extra": "iterations: 363063\ncpu: 1931.515191578311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10217.115296372702,
            "unit": "ns/iter",
            "extra": "iterations: 68866\ncpu: 10216.479830395234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8162.40397320021,
            "unit": "ns/iter",
            "extra": "iterations: 85674\ncpu: 8162.038658169355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8029.206578233647,
            "unit": "ns/iter",
            "extra": "iterations: 86771\ncpu: 8028.746931578617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8024.707764500476,
            "unit": "ns/iter",
            "extra": "iterations: 86947\ncpu: 8024.498832622228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17970.99609194414,
            "unit": "ns/iter",
            "extra": "iterations: 38894\ncpu: 17970.625289247637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56172.31356068629,
            "unit": "ns/iter",
            "extra": "iterations: 12374\ncpu: 56169.20963310236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44729.969186964256,
            "unit": "ns/iter",
            "extra": "iterations: 15805\ncpu: 44727.43435621628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44831.16195520288,
            "unit": "ns/iter",
            "extra": "iterations: 15671\ncpu: 44829.73007466065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44551.18082000843,
            "unit": "ns/iter",
            "extra": "iterations: 15756\ncpu: 44551.22493018579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26161.478810685454,
            "unit": "ns/iter",
            "extra": "iterations: 26570\ncpu: 26161.701166729523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44278.373015369885,
            "unit": "ns/iter",
            "extra": "iterations: 15935\ncpu: 44278.35582052106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1955.5923225607567,
            "unit": "ns/iter",
            "extra": "iterations: 358531\ncpu: 1955.5901721190046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10207.095584709888,
            "unit": "ns/iter",
            "extra": "iterations: 68829\ncpu: 10206.844498685077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8242.812321375513,
            "unit": "ns/iter",
            "extra": "iterations: 84325\ncpu: 8242.661132522948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8044.601647151339,
            "unit": "ns/iter",
            "extra": "iterations: 86938\ncpu: 8044.201614943991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7940.942770537074,
            "unit": "ns/iter",
            "extra": "iterations: 88084\ncpu: 7940.460242495786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17690.98647726445,
            "unit": "ns/iter",
            "extra": "iterations: 39563\ncpu: 17690.122083764894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55995.74468931391,
            "unit": "ns/iter",
            "extra": "iterations: 12569\ncpu: 55991.55064046392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43723.41560981741,
            "unit": "ns/iter",
            "extra": "iterations: 15849\ncpu: 43720.84043157351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43958.4160460644,
            "unit": "ns/iter",
            "extra": "iterations: 15979\ncpu: 43955.86707553735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43786.6210493622,
            "unit": "ns/iter",
            "extra": "iterations: 16105\ncpu: 43786.333436821296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25860.137765467913,
            "unit": "ns/iter",
            "extra": "iterations: 27075\ncpu: 25859.859649123195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43223.667276388114,
            "unit": "ns/iter",
            "extra": "iterations: 16401\ncpu: 43222.98030607853 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705778477621,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 599.2130617004017,
            "unit": "ns/iter",
            "extra": "iterations: 1164611\ncpu: 599.1942373891369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5463.508990000037,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5462.997999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10559.006584257053,
            "unit": "ns/iter",
            "extra": "iterations: 78065\ncpu: 10558.389803368987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16233.395828607205,
            "unit": "ns/iter",
            "extra": "iterations: 52884\ncpu: 16232.412449890322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20716.78903947924,
            "unit": "ns/iter",
            "extra": "iterations: 40728\ncpu: 20715.281869966617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25782.967199950323,
            "unit": "ns/iter",
            "extra": "iterations: 32378\ncpu: 25781.385508678726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30380.809075095665,
            "unit": "ns/iter",
            "extra": "iterations: 27592\ncpu: 30378.221948390827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36007.09918594997,
            "unit": "ns/iter",
            "extra": "iterations: 23340\ncpu: 36005.31276778064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40925.51708483571,
            "unit": "ns/iter",
            "extra": "iterations: 20486\ncpu: 40924.32880991895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 556.9613061498156,
            "unit": "ns/iter",
            "extra": "iterations: 1264051\ncpu: 556.9213583945585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 426.2660769443941,
            "unit": "ns/iter",
            "extra": "iterations: 1635572\ncpu: 426.2565023123419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 434.66327393415423,
            "unit": "ns/iter",
            "extra": "iterations: 1609617\ncpu: 434.6538338002151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 421.884507335596,
            "unit": "ns/iter",
            "extra": "iterations: 1661283\ncpu: 421.859671109618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 901.4877781775045,
            "unit": "ns/iter",
            "extra": "iterations: 775539\ncpu: 901.46195097861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1995.4842395980866,
            "unit": "ns/iter",
            "extra": "iterations: 399736\ncpu: 1995.449746832909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10809.589752434664,
            "unit": "ns/iter",
            "extra": "iterations: 75374\ncpu: 10809.402446466956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8172.300802339685,
            "unit": "ns/iter",
            "extra": "iterations: 99833\ncpu: 8171.821942644212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8341.681838721537,
            "unit": "ns/iter",
            "extra": "iterations: 97372\ncpu: 8341.131947582475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8015.915424108208,
            "unit": "ns/iter",
            "extra": "iterations: 101672\ncpu: 8015.31690140845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36961.652835713845,
            "unit": "ns/iter",
            "extra": "iterations: 22534\ncpu: 36959.67870773056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 244589.16524048976,
            "unit": "ns/iter",
            "extra": "iterations: 3389\ncpu: 244574.03363824164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 193248.6435826663,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 193236.49584487494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 200145.5899330219,
            "unit": "ns/iter",
            "extra": "iterations: 4331\ncpu: 200131.95566843738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 185630.4965261724,
            "unit": "ns/iter",
            "extra": "iterations: 4318\ncpu: 185622.34830940262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104629.94459767731,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 104623.2042211295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 191205.61018437732,
            "unit": "ns/iter",
            "extra": "iterations: 4556\ncpu: 191195.5882352942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5295.3249914781545,
            "unit": "ns/iter",
            "extra": "iterations: 155481\ncpu: 5295.018683954953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24733.43341835198,
            "unit": "ns/iter",
            "extra": "iterations: 33718\ncpu: 24731.810902188703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18781.624329078055,
            "unit": "ns/iter",
            "extra": "iterations: 43783\ncpu: 18780.645455998885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18955.481798665303,
            "unit": "ns/iter",
            "extra": "iterations: 43788\ncpu: 18953.848086233644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18727.132512148,
            "unit": "ns/iter",
            "extra": "iterations: 44245\ncpu: 18725.783704373363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 52319.755964757285,
            "unit": "ns/iter",
            "extra": "iterations: 16346\ncpu: 52315.55120518793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 272484.5435801113,
            "unit": "ns/iter",
            "extra": "iterations: 3201\ncpu: 272462.1993127151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201944.08743962695,
            "unit": "ns/iter",
            "extra": "iterations: 4140\ncpu: 201928.69565217357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 203259.63793933662,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 203248.1463649507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 212353.74114774578,
            "unit": "ns/iter",
            "extra": "iterations: 4095\ncpu: 212338.48595848636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 114565.66544117294,
            "unit": "ns/iter",
            "extra": "iterations: 7616\ncpu: 114557.51050420167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194979.81161807754,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 194966.7685794919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 858011.1568965447,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 857973.620689654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 450311.19156501,
            "unit": "ns/iter",
            "extra": "iterations: 1968\ncpu: 450273.42479674984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1873.6869623336743,
            "unit": "ns/iter",
            "extra": "iterations: 417429\ncpu: 1873.601259136294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9772.73481786288,
            "unit": "ns/iter",
            "extra": "iterations: 84112\ncpu: 9772.528295605845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7815.607712333156,
            "unit": "ns/iter",
            "extra": "iterations: 104482\ncpu: 7815.26387320305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 8019.1409587698445,
            "unit": "ns/iter",
            "extra": "iterations: 102569\ncpu: 8018.662558862824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7559.92922952363,
            "unit": "ns/iter",
            "extra": "iterations: 108647\ncpu: 7559.366572477856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 36497.539741135595,
            "unit": "ns/iter",
            "extra": "iterations: 23024\ncpu: 36495.30924252961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 244576.1999412037,
            "unit": "ns/iter",
            "extra": "iterations: 3401\ncpu: 244565.80417524264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 198551.48055677852,
            "unit": "ns/iter",
            "extra": "iterations: 4526\ncpu: 198538.82015024364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 200669.9300476907,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 200661.59436747688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 199779.6322829444,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 199775.35706189062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98538.1978733258,
            "unit": "ns/iter",
            "extra": "iterations: 8652\ncpu: 98535.43689320382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 182733.92316040728,
            "unit": "ns/iter",
            "extra": "iterations: 4607\ncpu: 182728.50010853136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 183.01197643522173,
            "unit": "ns/iter",
            "extra": "iterations: 3787688\ncpu: 183.00802494820115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1490.8065401525748,
            "unit": "ns/iter",
            "extra": "iterations: 470356\ncpu: 1490.7814506458894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1170.6842460918717,
            "unit": "ns/iter",
            "extra": "iterations: 597858\ncpu: 1170.6574136333304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1137.3741746527908,
            "unit": "ns/iter",
            "extra": "iterations: 617316\ncpu: 1137.3486188597085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 856.7330759381392,
            "unit": "ns/iter",
            "extra": "iterations: 819233\ncpu: 856.7119488594786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9696.666657399604,
            "unit": "ns/iter",
            "extra": "iterations: 71944\ncpu: 9696.486155899109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12780.001038478278,
            "unit": "ns/iter",
            "extra": "iterations: 54888\ncpu: 12779.782466112838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2820.640427462364,
            "unit": "ns/iter",
            "extra": "iterations: 247975\ncpu: 2820.6182074805924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2821.4259888235547,
            "unit": "ns/iter",
            "extra": "iterations: 248199\ncpu: 2821.3268385448882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2814.99468871187,
            "unit": "ns/iter",
            "extra": "iterations: 248339\ncpu: 2814.9118744941366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5401.652933619104,
            "unit": "ns/iter",
            "extra": "iterations: 128425\ncpu: 5401.557329180441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5400.484707811693,
            "unit": "ns/iter",
            "extra": "iterations: 129249\ncpu: 5400.44178291514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1930.4085319940482,
            "unit": "ns/iter",
            "extra": "iterations: 361252\ncpu: 1930.3926345044556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10301.510314044728,
            "unit": "ns/iter",
            "extra": "iterations: 68111\ncpu: 10301.221535434852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8143.226661815944,
            "unit": "ns/iter",
            "extra": "iterations: 85193\ncpu: 8142.973014214777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8070.251937492945,
            "unit": "ns/iter",
            "extra": "iterations: 86581\ncpu: 8069.977246740076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8231.554906044254,
            "unit": "ns/iter",
            "extra": "iterations: 84508\ncpu: 8231.479859895042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17948.68889345063,
            "unit": "ns/iter",
            "extra": "iterations: 38977\ncpu: 17948.338763886237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56614.24422496209,
            "unit": "ns/iter",
            "extra": "iterations: 12251\ncpu: 56612.45612603018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44926.06522849035,
            "unit": "ns/iter",
            "extra": "iterations: 15668\ncpu: 44925.67653816706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43970.449935568235,
            "unit": "ns/iter",
            "extra": "iterations: 15520\ncpu: 43970.057989690875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44346.28272847992,
            "unit": "ns/iter",
            "extra": "iterations: 15789\ncpu: 44345.56336690121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26315.444743834363,
            "unit": "ns/iter",
            "extra": "iterations: 26721\ncpu: 26314.76741139913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44537.0354440445,
            "unit": "ns/iter",
            "extra": "iterations: 15066\ncpu: 44536.22062923113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1958.8398642394743,
            "unit": "ns/iter",
            "extra": "iterations: 356510\ncpu: 1958.8300468429932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10181.752323060926,
            "unit": "ns/iter",
            "extra": "iterations: 68767\ncpu: 10181.446042433143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8295.165087317988,
            "unit": "ns/iter",
            "extra": "iterations: 84634\ncpu: 8294.895668407447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8138.1543891634665,
            "unit": "ns/iter",
            "extra": "iterations: 85563\ncpu: 8138.099412129102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8221.542790386644,
            "unit": "ns/iter",
            "extra": "iterations: 85171\ncpu: 8221.308896220582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17637.870002024232,
            "unit": "ns/iter",
            "extra": "iterations: 39516\ncpu: 17637.73661301745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 57054.77273834087,
            "unit": "ns/iter",
            "extra": "iterations: 12325\ncpu: 57053.28194726181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43972.584982762004,
            "unit": "ns/iter",
            "extra": "iterations: 15662\ncpu: 43971.17226407864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 45119.55821164985,
            "unit": "ns/iter",
            "extra": "iterations: 15478\ncpu: 45118.74273161918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44758.164746545765,
            "unit": "ns/iter",
            "extra": "iterations: 15624\ncpu: 44757.840501791376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26386.629280342982,
            "unit": "ns/iter",
            "extra": "iterations: 26721\ncpu: 26385.603083717062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44506.45122412651,
            "unit": "ns/iter",
            "extra": "iterations: 15848\ncpu: 44506.082786471685 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705953630587,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 602.0097372196193,
            "unit": "ns/iter",
            "extra": "iterations: 1164090\ncpu: 601.9842108428043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5514.309110000113,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5513.996000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10684.798351555177,
            "unit": "ns/iter",
            "extra": "iterations: 76921\ncpu: 10684.41907931514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15957.089780615688,
            "unit": "ns/iter",
            "extra": "iterations: 52283\ncpu: 15956.875083679208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20412.561890010642,
            "unit": "ns/iter",
            "extra": "iterations: 40677\ncpu: 20412.122329571986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26012.837759921676,
            "unit": "ns/iter",
            "extra": "iterations: 32606\ncpu: 26011.267864810143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30345.666220178708,
            "unit": "ns/iter",
            "extra": "iterations: 27623\ncpu: 30345.078376715035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35230.17556834914,
            "unit": "ns/iter",
            "extra": "iterations: 23797\ncpu: 35228.20523595412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39991.919861963994,
            "unit": "ns/iter",
            "extra": "iterations: 20864\ncpu: 39991.39187116567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 552.0763976195778,
            "unit": "ns/iter",
            "extra": "iterations: 1264686\ncpu: 552.0657301496179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 425.1130899220673,
            "unit": "ns/iter",
            "extra": "iterations: 1651553\ncpu: 425.10570354084973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 431.34552159570103,
            "unit": "ns/iter",
            "extra": "iterations: 1623748\ncpu: 431.32493465734797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 413.141509261104,
            "unit": "ns/iter",
            "extra": "iterations: 1691755\ncpu: 413.1267825423896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 880.2890837133154,
            "unit": "ns/iter",
            "extra": "iterations: 785551\ncpu: 880.2695178288878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2000.0565413313268,
            "unit": "ns/iter",
            "extra": "iterations: 398558\ncpu: 1999.9586007557286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10575.80343747143,
            "unit": "ns/iter",
            "extra": "iterations: 76917\ncpu: 10575.00162512838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8176.097419773614,
            "unit": "ns/iter",
            "extra": "iterations: 100185\ncpu: 8175.921545141475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8387.176987888202,
            "unit": "ns/iter",
            "extra": "iterations: 97679\ncpu: 8386.915304210748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7768.478347575537,
            "unit": "ns/iter",
            "extra": "iterations: 103799\ncpu: 7768.296419040621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36808.21548256383,
            "unit": "ns/iter",
            "extra": "iterations: 22619\ncpu: 36805.81811751173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 254099.47869236054,
            "unit": "ns/iter",
            "extra": "iterations: 3426\ncpu: 254093.3158201984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 192083.50334076004,
            "unit": "ns/iter",
            "extra": "iterations: 4490\ncpu: 192071.0690423165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 201764.02065444403,
            "unit": "ns/iter",
            "extra": "iterations: 4309\ncpu: 201756.486423764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 187293.1339203115,
            "unit": "ns/iter",
            "extra": "iterations: 4316\ncpu: 187278.61445783105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102664.55037029089,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 102661.97249324105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186904.0787436601,
            "unit": "ns/iter",
            "extra": "iterations: 4521\ncpu: 186891.06392391003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5395.34778263398,
            "unit": "ns/iter",
            "extra": "iterations: 153087\ncpu: 5395.262824407034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24759.902858512254,
            "unit": "ns/iter",
            "extra": "iterations: 33374\ncpu: 24758.428716965285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19050.420467593634,
            "unit": "ns/iter",
            "extra": "iterations: 43542\ncpu: 19049.96095723672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18306.8952825299,
            "unit": "ns/iter",
            "extra": "iterations: 44367\ncpu: 18306.30198120217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18434.452972611565,
            "unit": "ns/iter",
            "extra": "iterations: 44910\ncpu: 18434.02582943666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 52441.61623686992,
            "unit": "ns/iter",
            "extra": "iterations: 15705\ncpu: 52438.27443489325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 273628.27352025564,
            "unit": "ns/iter",
            "extra": "iterations: 3210\ncpu: 273621.1526479745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 211129.22583777318,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 211126.0806216612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 207728.35030012127,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 207708.23529411704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201391.15586810088,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 201388.93244178113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111296.51152664098,
            "unit": "ns/iter",
            "extra": "iterations: 7808\ncpu: 111290.1639344259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194589.50122521305,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 194586.92359100046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 812047.0845431844,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 811994.6199829224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 452731.9499744717,
            "unit": "ns/iter",
            "extra": "iterations: 1959\ncpu: 452725.16590096935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1912.804846168753,
            "unit": "ns/iter",
            "extra": "iterations: 420786\ncpu: 1912.7345016231425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10295.527899568733,
            "unit": "ns/iter",
            "extra": "iterations: 80055\ncpu: 10295.03966023353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7937.559021881803,
            "unit": "ns/iter",
            "extra": "iterations: 103055\ncpu: 7937.046237446041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7875.568366198192,
            "unit": "ns/iter",
            "extra": "iterations: 103048\ncpu: 7875.2532800248555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7622.613665736593,
            "unit": "ns/iter",
            "extra": "iterations: 106778\ncpu: 7622.285489520315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 36439.65897492304,
            "unit": "ns/iter",
            "extra": "iterations: 22925\ncpu: 36438.63467829884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 271657.4714724038,
            "unit": "ns/iter",
            "extra": "iterations: 3260\ncpu: 271639.8159509211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 199890.5417337375,
            "unit": "ns/iter",
            "extra": "iterations: 4349\ncpu: 199886.755575994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 200400.1180305708,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 200389.63579136625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 198870.87269870212,
            "unit": "ns/iter",
            "extra": "iterations: 4454\ncpu: 198868.3206106868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 100626.863345509,
            "unit": "ns/iter",
            "extra": "iterations: 8752\ncpu: 100618.9670932362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191463.6016101054,
            "unit": "ns/iter",
            "extra": "iterations: 4596\ncpu: 191460.87902523938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 182.5479934803562,
            "unit": "ns/iter",
            "extra": "iterations: 3848679\ncpu: 182.14891395203367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1475.7979519735902,
            "unit": "ns/iter",
            "extra": "iterations: 476654\ncpu: 1475.7748807310993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1120.7644871764314,
            "unit": "ns/iter",
            "extra": "iterations: 625605\ncpu: 1120.7076350093103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1178.8038289371032,
            "unit": "ns/iter",
            "extra": "iterations: 589093\ncpu: 1178.7631155012882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 856.6820359647638,
            "unit": "ns/iter",
            "extra": "iterations: 816910\ncpu: 856.6572817078995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9979.880061880902,
            "unit": "ns/iter",
            "extra": "iterations: 69811\ncpu: 9979.546203320448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11790.162979699842,
            "unit": "ns/iter",
            "extra": "iterations: 59308\ncpu: 11790.12443515206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2869.555751007816,
            "unit": "ns/iter",
            "extra": "iterations: 243879\ncpu: 2869.4192611910244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2886.9077689455676,
            "unit": "ns/iter",
            "extra": "iterations: 243302\ncpu: 2886.8994089650055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2900.3348044612703,
            "unit": "ns/iter",
            "extra": "iterations: 239952\ncpu: 2900.2162932586557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5102.423880272713,
            "unit": "ns/iter",
            "extra": "iterations: 138315\ncpu: 5102.32223547697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5498.293402245147,
            "unit": "ns/iter",
            "extra": "iterations: 127119\ncpu: 5498.019965544089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1927.2539012831219,
            "unit": "ns/iter",
            "extra": "iterations: 363342\ncpu: 1927.185681809436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10348.445563802925,
            "unit": "ns/iter",
            "extra": "iterations: 67896\ncpu: 10348.073524213576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8256.574481124593,
            "unit": "ns/iter",
            "extra": "iterations: 84847\ncpu: 8256.289556495805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8091.93742783231,
            "unit": "ns/iter",
            "extra": "iterations: 86604\ncpu: 8091.805228395973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8222.065379336756,
            "unit": "ns/iter",
            "extra": "iterations: 85241\ncpu: 8221.508429042357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18004.550250866898,
            "unit": "ns/iter",
            "extra": "iterations: 38666\ncpu: 18003.706098381128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58043.27466247266,
            "unit": "ns/iter",
            "extra": "iterations: 12073\ncpu: 58040.83492089792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45632.201621865854,
            "unit": "ns/iter",
            "extra": "iterations: 15291\ncpu: 45631.06402458917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43042.75560055645,
            "unit": "ns/iter",
            "extra": "iterations: 15802\ncpu: 43041.24161498564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44627.43148564412,
            "unit": "ns/iter",
            "extra": "iterations: 16471\ncpu: 44622.894784773285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26444.18212298723,
            "unit": "ns/iter",
            "extra": "iterations: 27141\ncpu: 26442.135514535512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44123.16649262176,
            "unit": "ns/iter",
            "extra": "iterations: 15322\ncpu: 44121.779141104766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1952.8042721751665,
            "unit": "ns/iter",
            "extra": "iterations: 359489\ncpu: 1952.718163838095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9833.997076609297,
            "unit": "ns/iter",
            "extra": "iterations: 69782\ncpu: 9833.51437333417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8053.99362325566,
            "unit": "ns/iter",
            "extra": "iterations: 87035\ncpu: 8053.7668753950065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8045.82575731408,
            "unit": "ns/iter",
            "extra": "iterations: 86655\ncpu: 8045.349950954907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8119.695129186248,
            "unit": "ns/iter",
            "extra": "iterations: 85961\ncpu: 8119.422761484851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17672.643065158554,
            "unit": "ns/iter",
            "extra": "iterations: 39489\ncpu: 17671.488262553856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55621.3683073226,
            "unit": "ns/iter",
            "extra": "iterations: 12495\ncpu: 55619.81592637114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44300.821669422316,
            "unit": "ns/iter",
            "extra": "iterations: 15718\ncpu: 44298.2504135382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44909.02474690429,
            "unit": "ns/iter",
            "extra": "iterations: 16002\ncpu: 44906.46794150788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44658.59951409889,
            "unit": "ns/iter",
            "extra": "iterations: 15641\ncpu: 44654.60648296151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26279.005246271663,
            "unit": "ns/iter",
            "extra": "iterations: 26495\ncpu: 26278.014719758405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43790.62400805379,
            "unit": "ns/iter",
            "extra": "iterations: 16886\ncpu: 43785.25997868066 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705955086123,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 599.9423075108173,
            "unit": "ns/iter",
            "extra": "iterations: 1165455\ncpu: 599.921404086816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5453.249869999581,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5453.216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10718.81662354524,
            "unit": "ns/iter",
            "extra": "iterations: 77300\ncpu: 10718.181112548507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15622.22647871788,
            "unit": "ns/iter",
            "extra": "iterations: 54270\ncpu: 15621.601252994285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20626.966021813652,
            "unit": "ns/iter",
            "extra": "iterations: 40526\ncpu: 20626.052410798005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25867.633174480812,
            "unit": "ns/iter",
            "extra": "iterations: 32525\ncpu: 25866.72713297463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31394.18848618463,
            "unit": "ns/iter",
            "extra": "iterations: 26681\ncpu: 31392.57149282259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35863.9500710175,
            "unit": "ns/iter",
            "extra": "iterations: 23233\ncpu: 35862.325140963294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39815.64755311669,
            "unit": "ns/iter",
            "extra": "iterations: 20945\ncpu: 39812.74767247555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 553.926926726565,
            "unit": "ns/iter",
            "extra": "iterations: 1263581\ncpu: 553.9151823270524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 431.2695423874369,
            "unit": "ns/iter",
            "extra": "iterations: 1630200\ncpu: 431.25880260090713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 438.2244520456543,
            "unit": "ns/iter",
            "extra": "iterations: 1598582\ncpu: 438.2009180636334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 418.4562343131861,
            "unit": "ns/iter",
            "extra": "iterations: 1672189\ncpu: 418.4400208349655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 881.1447351483902,
            "unit": "ns/iter",
            "extra": "iterations: 792406\ncpu: 881.1062763280457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2000.2716576407577,
            "unit": "ns/iter",
            "extra": "iterations: 406427\ncpu: 2000.1960991764827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10655.118438637424,
            "unit": "ns/iter",
            "extra": "iterations: 75575\ncpu: 10654.596096592775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8247.583148648926,
            "unit": "ns/iter",
            "extra": "iterations: 98366\ncpu: 8247.177886668163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8758.052273488687,
            "unit": "ns/iter",
            "extra": "iterations: 95536\ncpu: 8757.910107184725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8504.926660492989,
            "unit": "ns/iter",
            "extra": "iterations: 98269\ncpu: 8504.877428283597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 37125.62235162418,
            "unit": "ns/iter",
            "extra": "iterations: 22325\ncpu: 37123.30571108611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 256084.06958020452,
            "unit": "ns/iter",
            "extra": "iterations: 3478\ncpu: 256069.4652098911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 200224.47122970934,
            "unit": "ns/iter",
            "extra": "iterations: 4310\ncpu: 200215.38283062648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 194372.63925668361,
            "unit": "ns/iter",
            "extra": "iterations: 4305\ncpu: 194364.97096399506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 186944.14478585284,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 186935.4748603346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103206.46380251304,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 103200.97317825798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193897.93925859642,
            "unit": "ns/iter",
            "extra": "iterations: 4478\ncpu: 193888.58865565012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5367.291349083159,
            "unit": "ns/iter",
            "extra": "iterations: 152978\ncpu: 5366.986756265608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24468.88330335699,
            "unit": "ns/iter",
            "extra": "iterations: 33917\ncpu: 24467.753633870932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19267.050503645307,
            "unit": "ns/iter",
            "extra": "iterations: 43185\ncpu: 19265.712631700793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18737.18960967544,
            "unit": "ns/iter",
            "extra": "iterations: 43579\ncpu: 18736.22616397807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18883.027918319403,
            "unit": "ns/iter",
            "extra": "iterations: 43878\ncpu: 18882.129996809395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 53094.869769260986,
            "unit": "ns/iter",
            "extra": "iterations: 15342\ncpu: 53093.89910050835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 279543.02371794847,
            "unit": "ns/iter",
            "extra": "iterations: 3120\ncpu: 279534.519230769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 213157.83220993736,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 213147.37602311018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 208090.57788697153,
            "unit": "ns/iter",
            "extra": "iterations: 4070\ncpu: 208080.17199017055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 209307.25839908645,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 209291.7925591875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 113894.56669720876,
            "unit": "ns/iter",
            "extra": "iterations: 7639\ncpu: 113888.54562115438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 200145.83167399783,
            "unit": "ns/iter",
            "extra": "iterations: 4319\ncpu: 200132.36860384338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 818948.872758295,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 818907.6857386864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 452075.06157760206,
            "unit": "ns/iter",
            "extra": "iterations: 1965\ncpu: 452044.6310432571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1906.7378114071453,
            "unit": "ns/iter",
            "extra": "iterations: 421193\ncpu: 1906.6589425750199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10491.219584908582,
            "unit": "ns/iter",
            "extra": "iterations: 78826\ncpu: 10490.68581432523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8019.176470588068,
            "unit": "ns/iter",
            "extra": "iterations: 102442\ncpu: 8018.749145858133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7815.411897597652,
            "unit": "ns/iter",
            "extra": "iterations: 105349\ncpu: 7814.9541049273985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 8066.9270933073685,
            "unit": "ns/iter",
            "extra": "iterations: 102350\ncpu: 8066.572545188132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 36418.467797648176,
            "unit": "ns/iter",
            "extra": "iterations: 22871\ncpu: 36416.88164050566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 254310.2575849677,
            "unit": "ns/iter",
            "extra": "iterations: 3296\ncpu: 254291.38349514484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 200090.41972788717,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 200076.41723356003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 200163.15449564674,
            "unit": "ns/iter",
            "extra": "iterations: 4382\ncpu: 200149.7946143315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 194590.27260305104,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 194571.48713277088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101591.95634046968,
            "unit": "ns/iter",
            "extra": "iterations: 8635\ncpu: 101586.7747539087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 187171.01754768295,
            "unit": "ns/iter",
            "extra": "iterations: 4616\ncpu: 187155.71923743485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 183.6485392699759,
            "unit": "ns/iter",
            "extra": "iterations: 3812443\ncpu: 183.63878489462056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1487.9389301041447,
            "unit": "ns/iter",
            "extra": "iterations: 473261\ncpu: 1487.863145283467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1124.4210297973648,
            "unit": "ns/iter",
            "extra": "iterations: 622336\ncpu: 1124.355332167833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1189.4450305470148,
            "unit": "ns/iter",
            "extra": "iterations: 589582\ncpu: 1189.4157216468684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 862.7540162412919,
            "unit": "ns/iter",
            "extra": "iterations: 810895\ncpu: 862.7454849271479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9737.316703303763,
            "unit": "ns/iter",
            "extra": "iterations: 71878\ncpu: 9736.660730682595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12527.857156066006,
            "unit": "ns/iter",
            "extra": "iterations: 54073\ncpu: 12527.093003902108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2666.735277666209,
            "unit": "ns/iter",
            "extra": "iterations: 239568\ncpu: 2666.596123021457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2819.444137219083,
            "unit": "ns/iter",
            "extra": "iterations: 248099\ncpu: 2819.182664984527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2852.3477958662424,
            "unit": "ns/iter",
            "extra": "iterations: 246015\ncpu: 2852.190313598767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5447.197809538842,
            "unit": "ns/iter",
            "extra": "iterations: 128740\ncpu: 5447.0459841540915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5338.340839969831,
            "unit": "ns/iter",
            "extra": "iterations: 129219\ncpu: 5338.175500506913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1939.441097242579,
            "unit": "ns/iter",
            "extra": "iterations: 358608\ncpu: 1939.393990095056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10272.418512507798,
            "unit": "ns/iter",
            "extra": "iterations: 68397\ncpu: 10271.973916984749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8184.538389808143,
            "unit": "ns/iter",
            "extra": "iterations: 85791\ncpu: 8184.104393234739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8045.597310605008,
            "unit": "ns/iter",
            "extra": "iterations: 87529\ncpu: 8045.207873961767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8172.846648408073,
            "unit": "ns/iter",
            "extra": "iterations: 86168\ncpu: 8172.701002692302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17906.66904540221,
            "unit": "ns/iter",
            "extra": "iterations: 38676\ncpu: 17906.15627262379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56320.079168012635,
            "unit": "ns/iter",
            "extra": "iterations: 12404\ncpu: 56317.48629474278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44374.052342466675,
            "unit": "ns/iter",
            "extra": "iterations: 15838\ncpu: 44373.2415709055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44877.63549237423,
            "unit": "ns/iter",
            "extra": "iterations: 15547\ncpu: 44875.57728179058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44519.31934806475,
            "unit": "ns/iter",
            "extra": "iterations: 15707\ncpu: 44517.05608964111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26309.33569421283,
            "unit": "ns/iter",
            "extra": "iterations: 26685\ncpu: 26308.079445381274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 45046.402772648726,
            "unit": "ns/iter",
            "extra": "iterations: 16230\ncpu: 45043.579790511605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1966.8868521975046,
            "unit": "ns/iter",
            "extra": "iterations: 357497\ncpu: 1966.806994184572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10137.598487145373,
            "unit": "ns/iter",
            "extra": "iterations: 69273\ncpu: 10137.12846274882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8336.76293584623,
            "unit": "ns/iter",
            "extra": "iterations: 83315\ncpu: 8336.405209146096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8143.661735068381,
            "unit": "ns/iter",
            "extra": "iterations: 85841\ncpu: 8143.554944606925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8096.632955253727,
            "unit": "ns/iter",
            "extra": "iterations: 86578\ncpu: 8096.115641386993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17711.150299990502,
            "unit": "ns/iter",
            "extra": "iterations: 39501\ncpu: 17709.74405711258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55984.59451857129,
            "unit": "ns/iter",
            "extra": "iterations: 12442\ncpu: 55981.97235171229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43698.30750909002,
            "unit": "ns/iter",
            "extra": "iterations: 15954\ncpu: 43695.349128745365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43813.19508217624,
            "unit": "ns/iter",
            "extra": "iterations: 15942\ncpu: 43810.757746831856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44739.896825882104,
            "unit": "ns/iter",
            "extra": "iterations: 16351\ncpu: 44738.60925937256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26132.175320044713,
            "unit": "ns/iter",
            "extra": "iterations: 26637\ncpu: 26131.92551713778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44165.04638497763,
            "unit": "ns/iter",
            "extra": "iterations: 15975\ncpu: 44164.38184663575 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705957145291,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 596.8543336404463,
            "unit": "ns/iter",
            "extra": "iterations: 1165602\ncpu: 596.8447205821541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5479.582969999229,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5479.123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10845.001637214418,
            "unit": "ns/iter",
            "extra": "iterations: 76960\ncpu: 10844.260654885657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16256.077270085396,
            "unit": "ns/iter",
            "extra": "iterations: 51650\ncpu: 16255.157792836395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21791.017237894874,
            "unit": "ns/iter",
            "extra": "iterations: 39564\ncpu: 21789.720452937003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26155.05964351849,
            "unit": "ns/iter",
            "extra": "iterations: 31923\ncpu: 26152.776994643376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31552.375527746648,
            "unit": "ns/iter",
            "extra": "iterations: 26528\ncpu: 31550.565440289498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36568.52767184048,
            "unit": "ns/iter",
            "extra": "iterations: 22550\ncpu: 36566.69623059867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40485.10355435674,
            "unit": "ns/iter",
            "extra": "iterations: 21129\ncpu: 40484.00776184395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 535.9907616566462,
            "unit": "ns/iter",
            "extra": "iterations: 1258126\ncpu: 535.9417101307821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 425.56563440365653,
            "unit": "ns/iter",
            "extra": "iterations: 1651291\ncpu: 425.55830559241286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 429.8612190693308,
            "unit": "ns/iter",
            "extra": "iterations: 1630260\ncpu: 429.8334008072334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 412.4801517018904,
            "unit": "ns/iter",
            "extra": "iterations: 1693848\ncpu: 412.46463673245785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 875.814933839638,
            "unit": "ns/iter",
            "extra": "iterations: 792241\ncpu: 875.7542212533813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2055.0255560905325,
            "unit": "ns/iter",
            "extra": "iterations: 417513\ncpu: 2054.9918206139682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9968.052797613287,
            "unit": "ns/iter",
            "extra": "iterations: 81784\ncpu: 9967.30656363103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7955.897426163503,
            "unit": "ns/iter",
            "extra": "iterations: 102726\ncpu: 7955.566263652824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7787.338407482614,
            "unit": "ns/iter",
            "extra": "iterations: 104451\ncpu: 7786.590841638666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7554.999648905341,
            "unit": "ns/iter",
            "extra": "iterations: 108233\ncpu: 7554.7069747674095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36591.323235462456,
            "unit": "ns/iter",
            "extra": "iterations: 22513\ncpu: 36586.29236441164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 247380.40865672904,
            "unit": "ns/iter",
            "extra": "iterations: 3350\ncpu: 247370.656716418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 200294.7111459928,
            "unit": "ns/iter",
            "extra": "iterations: 4459\ncpu: 200272.4377663152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 198834.35668499352,
            "unit": "ns/iter",
            "extra": "iterations: 4368\ncpu: 198818.10897435952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 201158.59516684597,
            "unit": "ns/iter",
            "extra": "iterations: 4345\ncpu: 201141.70310701986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102965.97552901806,
            "unit": "ns/iter",
            "extra": "iterations: 8459\ncpu: 102960.71639673709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 192170.28772859415,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 192151.39898656114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5203.571520573285,
            "unit": "ns/iter",
            "extra": "iterations: 158381\ncpu: 5203.2901673811875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23944.752645692566,
            "unit": "ns/iter",
            "extra": "iterations: 34679\ncpu: 23943.23654084602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18957.581070579323,
            "unit": "ns/iter",
            "extra": "iterations: 43752\ncpu: 18956.98710916072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18392.46748031214,
            "unit": "ns/iter",
            "extra": "iterations: 44573\ncpu: 18390.653534651003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18636.059346654216,
            "unit": "ns/iter",
            "extra": "iterations: 45091\ncpu: 18635.268678893757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51403.540048622504,
            "unit": "ns/iter",
            "extra": "iterations: 16043\ncpu: 51400.36152839215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 272607.380771664,
            "unit": "ns/iter",
            "extra": "iterations: 3162\ncpu: 272571.9481340936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 211569.15150778243,
            "unit": "ns/iter",
            "extra": "iterations: 4112\ncpu: 211568.26361867733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 211537.57319435666,
            "unit": "ns/iter",
            "extra": "iterations: 4126\ncpu: 211524.2365487152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 207555.80937501002,
            "unit": "ns/iter",
            "extra": "iterations: 4160\ncpu: 207552.35576923093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 116678.3680245247,
            "unit": "ns/iter",
            "extra": "iterations: 7831\ncpu: 116671.80436725917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 198347.10788098688,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 198337.86054962492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 825230.7705479614,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 825191.2671232899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 459900.765838835,
            "unit": "ns/iter",
            "extra": "iterations: 1973\ncpu: 459888.95083629014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1909.9592643497776,
            "unit": "ns/iter",
            "extra": "iterations: 416883\ncpu: 1909.8324949686044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10427.463431964958,
            "unit": "ns/iter",
            "extra": "iterations: 78812\ncpu: 10427.190021824019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8155.499386296267,
            "unit": "ns/iter",
            "extra": "iterations: 101026\ncpu: 8155.0363272820905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7764.207997414229,
            "unit": "ns/iter",
            "extra": "iterations: 105184\ncpu: 7764.095299665317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7789.074387902693,
            "unit": "ns/iter",
            "extra": "iterations: 105743\ncpu: 7788.406797613128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 36534.752458874085,
            "unit": "ns/iter",
            "extra": "iterations: 22978\ncpu: 36534.607015405825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 267921.7506816124,
            "unit": "ns/iter",
            "extra": "iterations: 3301\ncpu: 267908.36110269435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 199363.5188871372,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 199360.89120108567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 188430.26967047658,
            "unit": "ns/iter",
            "extra": "iterations: 4461\ncpu: 188421.9905850704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 198143.66189305118,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 198134.8847616919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101539.1045774338,
            "unit": "ns/iter",
            "extra": "iterations: 8673\ncpu: 101534.0251354777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 189665.21963321898,
            "unit": "ns/iter",
            "extra": "iterations: 4635\ncpu: 189664.25026968712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 182.08781215104588,
            "unit": "ns/iter",
            "extra": "iterations: 3865957\ncpu: 182.0844618809782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1481.899659092991,
            "unit": "ns/iter",
            "extra": "iterations: 467576\ncpu: 1481.8709685698204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1128.224871260324,
            "unit": "ns/iter",
            "extra": "iterations: 622574\ncpu: 1128.18074638517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1139.0368880537033,
            "unit": "ns/iter",
            "extra": "iterations: 614535\ncpu: 1138.9898052999386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 819.6250737604456,
            "unit": "ns/iter",
            "extra": "iterations: 855811\ncpu: 819.5878529254721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9714.512451584524,
            "unit": "ns/iter",
            "extra": "iterations: 71517\ncpu: 9714.002265195733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12741.427903749256,
            "unit": "ns/iter",
            "extra": "iterations: 54774\ncpu: 12741.090663453531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2806.841411021668,
            "unit": "ns/iter",
            "extra": "iterations: 248359\ncpu: 2806.8320455469743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2822.810839463897,
            "unit": "ns/iter",
            "extra": "iterations: 249016\ncpu: 2822.799739775775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2790.777084244367,
            "unit": "ns/iter",
            "extra": "iterations: 249287\ncpu: 2790.72996185118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5247.441417037407,
            "unit": "ns/iter",
            "extra": "iterations: 132897\ncpu: 5247.345688766473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5181.836927103925,
            "unit": "ns/iter",
            "extra": "iterations: 135234\ncpu: 5181.663634884754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1928.8055854129282,
            "unit": "ns/iter",
            "extra": "iterations: 362838\ncpu: 1928.772069077675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10332.358390843987,
            "unit": "ns/iter",
            "extra": "iterations: 68682\ncpu: 10331.906467487797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8046.962855196082,
            "unit": "ns/iter",
            "extra": "iterations: 86607\ncpu: 8046.842633967242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8009.354813637788,
            "unit": "ns/iter",
            "extra": "iterations: 87491\ncpu: 8008.885485364254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8245.66909932472,
            "unit": "ns/iter",
            "extra": "iterations: 84681\ncpu: 8245.299417815195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17964.354033602773,
            "unit": "ns/iter",
            "extra": "iterations: 38985\ncpu: 17964.027189944703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56177.261196445994,
            "unit": "ns/iter",
            "extra": "iterations: 12370\ncpu: 56175.05254648375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44108.16278341638,
            "unit": "ns/iter",
            "extra": "iterations: 15966\ncpu: 44107.50344482005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44423.73876263204,
            "unit": "ns/iter",
            "extra": "iterations: 15840\ncpu: 44421.97601010044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43856.14844093208,
            "unit": "ns/iter",
            "extra": "iterations: 15939\ncpu: 43856.02609950462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25983.60920390402,
            "unit": "ns/iter",
            "extra": "iterations: 27032\ncpu: 25982.51701686912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43610.39004975005,
            "unit": "ns/iter",
            "extra": "iterations: 16080\ncpu: 43609.415422885046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1940.0810625175318,
            "unit": "ns/iter",
            "extra": "iterations: 361067\ncpu: 1940.0438145828768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10212.57292030758,
            "unit": "ns/iter",
            "extra": "iterations: 68664\ncpu: 10212.54369101724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8279.431232430106,
            "unit": "ns/iter",
            "extra": "iterations: 84662\ncpu: 8278.976400274012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8076.763131692347,
            "unit": "ns/iter",
            "extra": "iterations: 81349\ncpu: 8076.590984523532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8039.242763814904,
            "unit": "ns/iter",
            "extra": "iterations: 87097\ncpu: 8039.104676395167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17595.89537639183,
            "unit": "ns/iter",
            "extra": "iterations: 39666\ncpu: 17595.583119043822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53469.07939162382,
            "unit": "ns/iter",
            "extra": "iterations: 12558\ncpu: 53468.888358018936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 44340.12713376155,
            "unit": "ns/iter",
            "extra": "iterations: 15700\ncpu: 44338.41401273918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44372.580873519546,
            "unit": "ns/iter",
            "extra": "iterations: 15821\ncpu: 44371.84122369007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44187.7619439846,
            "unit": "ns/iter",
            "extra": "iterations: 15782\ncpu: 44186.83310100064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25931.076329077474,
            "unit": "ns/iter",
            "extra": "iterations: 26936\ncpu: 25929.95247995244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 44113.5994796813,
            "unit": "ns/iter",
            "extra": "iterations: 16144\ncpu: 44112.79732408355 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705958573407,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 598.3935732382881,
            "unit": "ns/iter",
            "extra": "iterations: 1164350\ncpu: 598.3699059561128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5335.0688799991985,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5334.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10405.910246775726,
            "unit": "ns/iter",
            "extra": "iterations: 79830\ncpu: 10405.289991231364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15578.995746891987,
            "unit": "ns/iter",
            "extra": "iterations: 51962\ncpu: 15578.047419267928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20771.278284579883,
            "unit": "ns/iter",
            "extra": "iterations: 40340\ncpu: 20769.814080317316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25619.846304394414,
            "unit": "ns/iter",
            "extra": "iterations: 32701\ncpu: 25618.644689764853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30512.874413230817,
            "unit": "ns/iter",
            "extra": "iterations: 27694\ncpu: 30511.128764353303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35720.49094506855,
            "unit": "ns/iter",
            "extra": "iterations: 23247\ncpu: 35719.7659913107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40677.19409043317,
            "unit": "ns/iter",
            "extra": "iterations: 21186\ncpu: 40675.4932502596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 561.9911337601727,
            "unit": "ns/iter",
            "extra": "iterations: 1215848\ncpu: 561.9776485218547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 402.4711070967044,
            "unit": "ns/iter",
            "extra": "iterations: 1648519\ncpu: 402.45578000617525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 432.6951901467857,
            "unit": "ns/iter",
            "extra": "iterations: 1648595\ncpu: 432.68049460298033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 383.6634830277046,
            "unit": "ns/iter",
            "extra": "iterations: 1717322\ncpu: 383.6525706885482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 879.1043353756904,
            "unit": "ns/iter",
            "extra": "iterations: 793403\ncpu: 879.0774675669226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1896.3985234678646,
            "unit": "ns/iter",
            "extra": "iterations: 420851\ncpu: 1896.3554797303548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10567.38787964593,
            "unit": "ns/iter",
            "extra": "iterations: 77671\ncpu: 10566.703145318093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7992.112634614625,
            "unit": "ns/iter",
            "extra": "iterations: 101958\ncpu: 7991.724043233504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7679.140583855765,
            "unit": "ns/iter",
            "extra": "iterations: 105574\ncpu: 7678.895371966578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7563.783555815712,
            "unit": "ns/iter",
            "extra": "iterations: 107649\ncpu: 7563.730271530622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36751.61420123446,
            "unit": "ns/iter",
            "extra": "iterations: 22491\ncpu: 36750.309012493766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 253301.91314486053,
            "unit": "ns/iter",
            "extra": "iterations: 3431\ncpu: 253290.20693675338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 197533.96026640772,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 197529.03077629686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 188993.21848352265,
            "unit": "ns/iter",
            "extra": "iterations: 4339\ncpu: 188986.2180225866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 201415.95653179093,
            "unit": "ns/iter",
            "extra": "iterations: 4325\ncpu: 201411.0057803469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103632.41753553737,
            "unit": "ns/iter",
            "extra": "iterations: 8440\ncpu: 103629.1587677722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193999.3584905587,
            "unit": "ns/iter",
            "extra": "iterations: 4505\ncpu: 193995.07214206434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5275.408743480446,
            "unit": "ns/iter",
            "extra": "iterations: 154904\ncpu: 5275.239503176165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24850.175466159257,
            "unit": "ns/iter",
            "extra": "iterations: 33733\ncpu: 24849.624996294377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18892.11991888477,
            "unit": "ns/iter",
            "extra": "iterations: 43888\ncpu: 18891.6628691214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19047.157007471305,
            "unit": "ns/iter",
            "extra": "iterations: 43896\ncpu: 19046.91771459816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18808.582250102638,
            "unit": "ns/iter",
            "extra": "iterations: 44158\ncpu: 18807.088183341686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51977.570376379284,
            "unit": "ns/iter",
            "extra": "iterations: 16021\ncpu: 51974.26502715186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 279074.7962251862,
            "unit": "ns/iter",
            "extra": "iterations: 3126\ncpu: 279058.31733845186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201539.57289000563,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 201531.6670541742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 212979.49755263893,
            "unit": "ns/iter",
            "extra": "iterations: 4086\ncpu: 212968.9427312774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 211963.44565482624,
            "unit": "ns/iter",
            "extra": "iterations: 4131\ncpu: 211946.81675139253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 114281.90430999284,
            "unit": "ns/iter",
            "extra": "iterations: 7587\ncpu: 114277.39554501101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 202079.45790698536,
            "unit": "ns/iter",
            "extra": "iterations: 4300\ncpu: 202068.3023255816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 825764.5608695503,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 825720.3478260869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 466447.9648936249,
            "unit": "ns/iter",
            "extra": "iterations: 1880\ncpu: 466408.8829787253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1865.5536500056585,
            "unit": "ns/iter",
            "extra": "iterations: 425424\ncpu: 1865.4358945428505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10410.026454691397,
            "unit": "ns/iter",
            "extra": "iterations: 79003\ncpu: 10409.742667999924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7806.367238286827,
            "unit": "ns/iter",
            "extra": "iterations: 105373\ncpu: 7806.245432890761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7878.361217312772,
            "unit": "ns/iter",
            "extra": "iterations: 104361\ncpu: 7877.742643324595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7779.120896295571,
            "unit": "ns/iter",
            "extra": "iterations: 108134\ncpu: 7778.785580853375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 36593.76723463037,
            "unit": "ns/iter",
            "extra": "iterations: 23006\ncpu: 36591.815178649165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 271569.90895201237,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 271562.23648029467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 202588.16807296727,
            "unit": "ns/iter",
            "extra": "iterations: 4385\ncpu: 202572.88483466476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 201382.79158133946,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 201374.40273037596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 201129.2261146556,
            "unit": "ns/iter",
            "extra": "iterations: 4396\ncpu: 201119.10828025438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 99685.56309564754,
            "unit": "ns/iter",
            "extra": "iterations: 8709\ncpu: 99681.78895395565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 192648.85708069036,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 192642.46247552807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 182.34194880039536,
            "unit": "ns/iter",
            "extra": "iterations: 3848234\ncpu: 182.33649512997346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1487.3928582087306,
            "unit": "ns/iter",
            "extra": "iterations: 469126\ncpu: 1487.3490277665371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1124.835256283673,
            "unit": "ns/iter",
            "extra": "iterations: 622221\ncpu: 1124.7886201205017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1119.0191945169677,
            "unit": "ns/iter",
            "extra": "iterations: 611633\ncpu: 1118.9324317033258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 855.859108960542,
            "unit": "ns/iter",
            "extra": "iterations: 818370\ncpu: 855.802143284823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9858.320954389706,
            "unit": "ns/iter",
            "extra": "iterations: 71627\ncpu: 9857.6486520447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12502.776829003995,
            "unit": "ns/iter",
            "extra": "iterations: 55276\ncpu: 12502.39525291264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2922.115039091456,
            "unit": "ns/iter",
            "extra": "iterations: 241996\ncpu: 2921.943751136366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2811.0136439635485,
            "unit": "ns/iter",
            "extra": "iterations: 242818\ncpu: 2810.9213484997053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2784.1713742700654,
            "unit": "ns/iter",
            "extra": "iterations: 251508\ncpu: 2783.9683031951095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5310.130736282411,
            "unit": "ns/iter",
            "extra": "iterations: 130507\ncpu: 5309.955787812166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5336.942757018594,
            "unit": "ns/iter",
            "extra": "iterations: 130409\ncpu: 5336.7566655675455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1904.2397258596006,
            "unit": "ns/iter",
            "extra": "iterations: 367549\ncpu: 1904.186380591412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10256.786553659227,
            "unit": "ns/iter",
            "extra": "iterations: 68078\ncpu: 10256.245776903132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8168.599168861425,
            "unit": "ns/iter",
            "extra": "iterations: 85425\ncpu: 8168.35001463275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8071.682870935832,
            "unit": "ns/iter",
            "extra": "iterations: 85965\ncpu: 8071.46164136562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8087.754973809797,
            "unit": "ns/iter",
            "extra": "iterations: 85146\ncpu: 8087.403988443276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17950.931795487646,
            "unit": "ns/iter",
            "extra": "iterations: 39059\ncpu: 17950.216339383885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56472.586790306406,
            "unit": "ns/iter",
            "extra": "iterations: 12294\ncpu: 56471.09972344228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44595.3666223658,
            "unit": "ns/iter",
            "extra": "iterations: 15801\ncpu: 44595.031960002845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44560.65965089128,
            "unit": "ns/iter",
            "extra": "iterations: 15869\ncpu: 44559.480748629074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43888.349273004555,
            "unit": "ns/iter",
            "extra": "iterations: 15956\ncpu: 43885.71697167163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25988.140579117993,
            "unit": "ns/iter",
            "extra": "iterations: 26903\ncpu: 25987.38802364071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43929.00764355014,
            "unit": "ns/iter",
            "extra": "iterations: 16092\ncpu: 43927.790206313526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1944.6837880910155,
            "unit": "ns/iter",
            "extra": "iterations: 360192\ncpu: 1944.582889125808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9910.584096174905,
            "unit": "ns/iter",
            "extra": "iterations: 70788\ncpu: 9910.106232694878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8015.784200208451,
            "unit": "ns/iter",
            "extra": "iterations: 87229\ncpu: 8015.420330394708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8046.123103215644,
            "unit": "ns/iter",
            "extra": "iterations: 87187\ncpu: 8046.067647699687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8075.857890498571,
            "unit": "ns/iter",
            "extra": "iterations: 86940\ncpu: 8075.60501495283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17666.557453689893,
            "unit": "ns/iter",
            "extra": "iterations: 39571\ncpu: 17665.80323974641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55503.252941647304,
            "unit": "ns/iter",
            "extra": "iterations: 12493\ncpu: 55500.488273433286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42808.37178205632,
            "unit": "ns/iter",
            "extra": "iterations: 16004\ncpu: 42806.760809797954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43519.49987513656,
            "unit": "ns/iter",
            "extra": "iterations: 16018\ncpu: 43517.99225870872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43664.92541677188,
            "unit": "ns/iter",
            "extra": "iterations: 16076\ncpu: 43663.12515551131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25962.59738629542,
            "unit": "ns/iter",
            "extra": "iterations: 27088\ncpu: 25961.901949202453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43283.32794189399,
            "unit": "ns/iter",
            "extra": "iterations: 16384\ncpu: 43283.01391601577 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705960016209,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 588.2424726962162,
            "unit": "ns/iter",
            "extra": "iterations: 1216405\ncpu: 588.1951323777854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5395.882565274285,
            "unit": "ns/iter",
            "extra": "iterations: 128267\ncpu: 5395.591227673524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10465.789791798343,
            "unit": "ns/iter",
            "extra": "iterations: 79250\ncpu: 10465.538170347001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15596.86397694443,
            "unit": "ns/iter",
            "extra": "iterations: 53785\ncpu: 15596.430231477178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20866.626648124653,
            "unit": "ns/iter",
            "extra": "iterations: 40273\ncpu: 20866.188265090757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25881.006671839572,
            "unit": "ns/iter",
            "extra": "iterations: 32225\ncpu: 25879.363847944147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31239.49349824459,
            "unit": "ns/iter",
            "extra": "iterations: 26762\ncpu: 31237.784918914876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36460.67079454277,
            "unit": "ns/iter",
            "extra": "iterations: 23095\ncpu: 36458.506170166685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41099.015274346086,
            "unit": "ns/iter",
            "extra": "iterations: 20230\ncpu: 41095.98615916961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 568.777432779468,
            "unit": "ns/iter",
            "extra": "iterations: 1230280\ncpu: 568.7387424001039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 434.485858416979,
            "unit": "ns/iter",
            "extra": "iterations: 1609049\ncpu: 434.45631550064616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 441.65236234582846,
            "unit": "ns/iter",
            "extra": "iterations: 1582389\ncpu: 441.6244046185865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 422.33280783549225,
            "unit": "ns/iter",
            "extra": "iterations: 1651767\ncpu: 422.32161073565436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 896.711128731907,
            "unit": "ns/iter",
            "extra": "iterations: 783162\ncpu: 896.6511398663359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2008.3445511855614,
            "unit": "ns/iter",
            "extra": "iterations: 398472\ncpu: 2008.2211548113798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10774.325434357012,
            "unit": "ns/iter",
            "extra": "iterations: 75917\ncpu: 10773.273443365777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8069.489931228267,
            "unit": "ns/iter",
            "extra": "iterations: 101204\ncpu: 8068.930081814935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8080.39861218247,
            "unit": "ns/iter",
            "extra": "iterations: 101166\ncpu: 8079.7609868928375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7907.5335490897205,
            "unit": "ns/iter",
            "extra": "iterations: 102894\ncpu: 7907.0664956168275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36842.092155132836,
            "unit": "ns/iter",
            "extra": "iterations: 22690\ncpu: 36840.39224327891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 254876.28435754313,
            "unit": "ns/iter",
            "extra": "iterations: 3580\ncpu: 254859.02234636873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 187268.72261769275,
            "unit": "ns/iter",
            "extra": "iterations: 4355\ncpu: 187256.80826636066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 193386.27933730927,
            "unit": "ns/iter",
            "extra": "iterations: 4346\ncpu: 193371.2379199267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 189142.5479007193,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 189128.69403850642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102532.59402667911,
            "unit": "ns/iter",
            "extra": "iterations: 8471\ncpu: 102524.53075197729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 193007.3829078802,
            "unit": "ns/iter",
            "extra": "iterations: 4505\ncpu: 192990.72142064373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5226.134603509544,
            "unit": "ns/iter",
            "extra": "iterations: 155464\ncpu: 5225.885735604386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24451.858488597456,
            "unit": "ns/iter",
            "extra": "iterations: 33545\ncpu: 24450.77060664774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19482.117993754415,
            "unit": "ns/iter",
            "extra": "iterations: 42587\ncpu: 19481.348768403463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19083.834545371876,
            "unit": "ns/iter",
            "extra": "iterations: 43728\ncpu: 19082.811928283907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18900.14375313584,
            "unit": "ns/iter",
            "extra": "iterations: 43846\ncpu: 18899.425261141238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 52056.6337427957,
            "unit": "ns/iter",
            "extra": "iterations: 15956\ncpu: 52053.597392830336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 272546.4105918948,
            "unit": "ns/iter",
            "extra": "iterations: 3210\ncpu: 272532.2741433002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 210774.17442417156,
            "unit": "ns/iter",
            "extra": "iterations: 4168\ncpu: 210756.11804222767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 212002.30191422277,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 211990.9377271617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 212732.89590363312,
            "unit": "ns/iter",
            "extra": "iterations: 4150\ncpu: 212713.51807228825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112960.40481771166,
            "unit": "ns/iter",
            "extra": "iterations: 7680\ncpu: 112953.8151041674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 203247.41153033316,
            "unit": "ns/iter",
            "extra": "iterations: 4267\ncpu: 203234.80196859676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 826503.7356521965,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 826448.782608694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 459424.6709978846,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 459392.09979209944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1917.307403622229,
            "unit": "ns/iter",
            "extra": "iterations: 417809\ncpu: 1917.2136071745724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10847.70108994697,
            "unit": "ns/iter",
            "extra": "iterations: 76334\ncpu: 10847.035397070718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8050.173505102293,
            "unit": "ns/iter",
            "extra": "iterations: 101997\ncpu: 8049.610282655378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7737.3709230426775,
            "unit": "ns/iter",
            "extra": "iterations: 106084\ncpu: 7736.848158063427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7665.488177326055,
            "unit": "ns/iter",
            "extra": "iterations: 107463\ncpu: 7665.050296381121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 36281.715451790966,
            "unit": "ns/iter",
            "extra": "iterations: 22787\ncpu: 36278.6369421163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 268183.2235605158,
            "unit": "ns/iter",
            "extra": "iterations: 3404\ncpu: 268178.4077555817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 198765.06518786223,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 198756.42824807635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 197711.28440160168,
            "unit": "ns/iter",
            "extra": "iterations: 4462\ncpu: 197701.63603765078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 196591.66456124454,
            "unit": "ns/iter",
            "extra": "iterations: 4433\ncpu: 196578.61493345437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 101573.90802732533,
            "unit": "ns/iter",
            "extra": "iterations: 8633\ncpu: 101565.27279045507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 191575.0520105064,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 191569.711538462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 186.58037183806388,
            "unit": "ns/iter",
            "extra": "iterations: 3758518\ncpu: 186.5721010249251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1481.425386943107,
            "unit": "ns/iter",
            "extra": "iterations: 471258\ncpu: 1481.3318818990908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1153.1405208535152,
            "unit": "ns/iter",
            "extra": "iterations: 593065\ncpu: 1153.0956977734259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1188.4695999443302,
            "unit": "ns/iter",
            "extra": "iterations: 589193\ncpu: 1188.4068547997003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 864.7282653759403,
            "unit": "ns/iter",
            "extra": "iterations: 808031\ncpu: 864.674003843912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9843.010431582665,
            "unit": "ns/iter",
            "extra": "iterations: 71226\ncpu: 9842.543453233378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12824.80647473913,
            "unit": "ns/iter",
            "extra": "iterations: 54396\ncpu: 12824.387822633968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2856.8868453039076,
            "unit": "ns/iter",
            "extra": "iterations: 245973\ncpu: 2856.7850942989635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2866.891075006834,
            "unit": "ns/iter",
            "extra": "iterations: 245031\ncpu: 2866.799711056961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2872.016542603506,
            "unit": "ns/iter",
            "extra": "iterations: 246515\ncpu: 2871.8268665192763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5141.04581359725,
            "unit": "ns/iter",
            "extra": "iterations: 135964\ncpu: 5140.87111294166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5463.010995159159,
            "unit": "ns/iter",
            "extra": "iterations: 128693\ncpu: 5462.785077665449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1938.638135543668,
            "unit": "ns/iter",
            "extra": "iterations: 359397\ncpu: 1938.5431709224029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10330.787520880764,
            "unit": "ns/iter",
            "extra": "iterations: 68242\ncpu: 10330.201342281822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8231.930431425171,
            "unit": "ns/iter",
            "extra": "iterations: 85484\ncpu: 8231.552103317561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8124.103720406068,
            "unit": "ns/iter",
            "extra": "iterations: 86039\ncpu: 8123.738072269564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8203.550305842884,
            "unit": "ns/iter",
            "extra": "iterations: 85338\ncpu: 8202.965853429892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18002.523174897833,
            "unit": "ns/iter",
            "extra": "iterations: 38943\ncpu: 18001.905348843244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56439.7974858071,
            "unit": "ns/iter",
            "extra": "iterations: 12330\ncpu: 56436.139497161115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44083.76998870236,
            "unit": "ns/iter",
            "extra": "iterations: 15934\ncpu: 44081.56144094406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44327.26200378067,
            "unit": "ns/iter",
            "extra": "iterations: 15870\ncpu: 44325.60806553256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44257.09310625193,
            "unit": "ns/iter",
            "extra": "iterations: 15971\ncpu: 44252.39496587572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 26097.890399730866,
            "unit": "ns/iter",
            "extra": "iterations: 26843\ncpu: 26097.273032075296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43868.97502837906,
            "unit": "ns/iter",
            "extra": "iterations: 15858\ncpu: 43866.326144533086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1948.4068690851946,
            "unit": "ns/iter",
            "extra": "iterations: 360310\ncpu: 1948.3231106546991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10090.57255009552,
            "unit": "ns/iter",
            "extra": "iterations: 69166\ncpu: 10090.14544718507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8218.338999122305,
            "unit": "ns/iter",
            "extra": "iterations: 85425\ncpu: 8217.731343283604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8145.107535257418,
            "unit": "ns/iter",
            "extra": "iterations: 86009\ncpu: 8144.739504005404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8109.194337298881,
            "unit": "ns/iter",
            "extra": "iterations: 86072\ncpu: 8108.556789664465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17739.352202526537,
            "unit": "ns/iter",
            "extra": "iterations: 39659\ncpu: 17738.460374694205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55608.88354410136,
            "unit": "ns/iter",
            "extra": "iterations: 12494\ncpu: 55606.23499279626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43232.507926598446,
            "unit": "ns/iter",
            "extra": "iterations: 16022\ncpu: 43230.252153289475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44627.23701019265,
            "unit": "ns/iter",
            "extra": "iterations: 16282\ncpu: 44623.805429307904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 44541.49542159042,
            "unit": "ns/iter",
            "extra": "iterations: 15726\ncpu: 44539.64771715605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25284.020816141663,
            "unit": "ns/iter",
            "extra": "iterations: 26662\ncpu: 25282.506938714305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43129.5584099353,
            "unit": "ns/iter",
            "extra": "iterations: 16427\ncpu: 43127.73482680873 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}