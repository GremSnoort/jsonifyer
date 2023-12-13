window.BENCHMARK_DATA = {
  "lastUpdate": 1702490322445,
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
      }
    ]
  }
}