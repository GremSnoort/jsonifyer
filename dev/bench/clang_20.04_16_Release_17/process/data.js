window.BENCHMARK_DATA = {
  "lastUpdate": 1702490403743,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-16 20.04 Release c++-17": [
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
        "date": 1702490401817,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1374.2174507847405,
            "unit": "ns/iter",
            "extra": "iterations: 508023\ncpu: 1374.1720355180769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16292.928462134234,
            "unit": "ns/iter",
            "extra": "iterations: 50323\ncpu: 16292.651471494146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34195.68166549289,
            "unit": "ns/iter",
            "extra": "iterations: 24113\ncpu: 34194.60871728942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50742.314841413776,
            "unit": "ns/iter",
            "extra": "iterations: 16710\ncpu: 50739.54518252546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56413.98350001055,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56411.259999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70621.72275472977,
            "unit": "ns/iter",
            "extra": "iterations: 12415\ncpu: 70618.6790173177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84701.7525995636,
            "unit": "ns/iter",
            "extra": "iterations: 10194\ncpu: 84698.01844222091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98212.67902493734,
            "unit": "ns/iter",
            "extra": "iterations: 8820\ncpu: 98210.94104308389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114140.38802985786,
            "unit": "ns/iter",
            "extra": "iterations: 7502\ncpu: 114135.32391362311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1151.2566599789357,
            "unit": "ns/iter",
            "extra": "iterations: 602104\ncpu: 1151.232013074152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 945.5173011430951,
            "unit": "ns/iter",
            "extra": "iterations: 742003\ncpu: 945.4773093909319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 946.3553844660499,
            "unit": "ns/iter",
            "extra": "iterations: 741262\ncpu: 946.3525716952981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 941.9531462892784,
            "unit": "ns/iter",
            "extra": "iterations: 744210\ncpu: 941.9326534177181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1907.2861786104888,
            "unit": "ns/iter",
            "extra": "iterations: 368892\ncpu: 1907.235993190422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5449.141539999117,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5449.0129999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29144.336189120924,
            "unit": "ns/iter",
            "extra": "iterations: 28130\ncpu: 29143.210095982908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23123.39735687699,
            "unit": "ns/iter",
            "extra": "iterations: 36018\ncpu: 23123.163418290853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22450.359801289298,
            "unit": "ns/iter",
            "extra": "iterations: 36837\ncpu: 22449.360697125197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22422.90868823455,
            "unit": "ns/iter",
            "extra": "iterations: 36348\ncpu: 22422.70551337073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64539.792171284746,
            "unit": "ns/iter",
            "extra": "iterations: 13872\ncpu: 64537.211649365825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 582005.7689999202,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581991.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 558417.4844961236,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 558386.3695090441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 562126.9343729566,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 562116.6341780383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 564051.2887138687,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 564050.3937007879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 338395.5757812363,
            "unit": "ns/iter",
            "extra": "iterations: 2560\ncpu: 338377.9296875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 563669.8147668539,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 563658.9378238347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2428624.175392795,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2428554.973821987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1084917.6561771587,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1084898.7179487187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3372012.4000001303,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3371894.9090909176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8524.435111512748,
            "unit": "ns/iter",
            "extra": "iterations: 99540\ncpu: 8524.136025718293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46692.12219367528,
            "unit": "ns/iter",
            "extra": "iterations: 17906\ncpu: 46691.628504411914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37126.299251650526,
            "unit": "ns/iter",
            "extra": "iterations: 22583\ncpu: 37124.673426913985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36124.38337121914,
            "unit": "ns/iter",
            "extra": "iterations: 22876\ncpu: 36121.97062423487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 35428.30430540779,
            "unit": "ns/iter",
            "extra": "iterations: 23575\ncpu: 35426.50265111342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76829.79031971536,
            "unit": "ns/iter",
            "extra": "iterations: 11260\ncpu: 76827.46003552414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 600810.6909999924,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600801.599999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 593910.546334751,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 593877.6625172907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 592675.2373806121,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 592651.8417462503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 584233.633964858,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 584221.109607575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 350707.8533547428,
            "unit": "ns/iter",
            "extra": "iterations: 2489\ncpu: 350691.3218159904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 584202.8569518601,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 584181.2834224587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2587685.6527774963,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2587501.6666666656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1128224.490820008,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 1128149.4492044067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5507.630500000005,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5507.278000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29519.53791443618,
            "unit": "ns/iter",
            "extra": "iterations: 27839\ncpu: 29518.3986493768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23865.30949213386,
            "unit": "ns/iter",
            "extra": "iterations: 34576\ncpu: 23864.431975936874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22847.053481415714,
            "unit": "ns/iter",
            "extra": "iterations: 36106\ncpu: 22845.31379826077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22791.08809510678,
            "unit": "ns/iter",
            "extra": "iterations: 36086\ncpu: 22790.043230061463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63444.363192421806,
            "unit": "ns/iter",
            "extra": "iterations: 13720\ncpu: 63441.86588921249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 578425.6050000067,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578425.100000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 582441.1870882551,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 582403.0303030277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 580480.838014387,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 580453.6250816463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 579640.4241042148,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 579612.1172638402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 347248.3400235956,
            "unit": "ns/iter",
            "extra": "iterations: 2541\ncpu: 347211.92443919537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 575582.9764705868,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 575556.7973856176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 541.4415108451934,
            "unit": "ns/iter",
            "extra": "iterations: 1294163\ncpu: 541.4224483314666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3215.8574023282426,
            "unit": "ns/iter",
            "extra": "iterations: 218026\ncpu: 3215.6875785456878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2416.526967505873,
            "unit": "ns/iter",
            "extra": "iterations: 288792\ncpu: 2416.3491370952056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2450.325675960309,
            "unit": "ns/iter",
            "extra": "iterations: 284780\ncpu: 2450.22087225227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1981.8349618721245,
            "unit": "ns/iter",
            "extra": "iterations: 354203\ncpu: 1981.7432376349173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17647.309556124175,
            "unit": "ns/iter",
            "extra": "iterations: 39786\ncpu: 17646.423365002818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31079.54385809331,
            "unit": "ns/iter",
            "extra": "iterations: 22607\ncpu: 31076.971734418228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7170.288257325485,
            "unit": "ns/iter",
            "extra": "iterations: 97184\ncpu: 7169.734729996803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7214.363898648613,
            "unit": "ns/iter",
            "extra": "iterations: 97049\ncpu: 7214.039299735114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7206.453530448877,
            "unit": "ns/iter",
            "extra": "iterations: 96999\ncpu: 7206.281508056798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14769.769300635015,
            "unit": "ns/iter",
            "extra": "iterations: 47343\ncpu: 14769.114758253598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13860.801583375376,
            "unit": "ns/iter",
            "extra": "iterations: 50525\ncpu: 13860.136566056479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5142.252751708374,
            "unit": "ns/iter",
            "extra": "iterations: 135643\ncpu: 5142.183525872995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26473.991190913584,
            "unit": "ns/iter",
            "extra": "iterations: 26677\ncpu: 26473.14915470233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20588.33032651184,
            "unit": "ns/iter",
            "extra": "iterations: 33812\ncpu: 20588.311841949773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20503.5136795895,
            "unit": "ns/iter",
            "extra": "iterations: 34175\ncpu: 20502.583760058493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21047.62376506799,
            "unit": "ns/iter",
            "extra": "iterations: 33099\ncpu: 21046.99839874304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48894.07535058903,
            "unit": "ns/iter",
            "extra": "iterations: 14333\ncpu: 48892.63936370627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155222.0814650421,
            "unit": "ns/iter",
            "extra": "iterations: 4505\ncpu: 155220.15538290556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132291.96068053794,
            "unit": "ns/iter",
            "extra": "iterations: 5290\ncpu: 132285.46313799647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132356.3030647126,
            "unit": "ns/iter",
            "extra": "iterations: 5286\ncpu: 132352.87552024212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131938.7226511134,
            "unit": "ns/iter",
            "extra": "iterations: 5311\ncpu: 131932.64921860196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84581.00834038133,
            "unit": "ns/iter",
            "extra": "iterations: 8273\ncpu: 84580.88964100085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131933.75330314646,
            "unit": "ns/iter",
            "extra": "iterations: 5298\ncpu: 131931.14382786007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4983.904022386648,
            "unit": "ns/iter",
            "extra": "iterations: 140439\ncpu: 4983.725318465738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26262.635183443475,
            "unit": "ns/iter",
            "extra": "iterations: 26575\ncpu: 26262.325493885397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21696.647996540043,
            "unit": "ns/iter",
            "extra": "iterations: 32369\ncpu: 21696.25876610347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21504.075943165277,
            "unit": "ns/iter",
            "extra": "iterations: 32656\ncpu: 21503.78797158239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21401.581778568445,
            "unit": "ns/iter",
            "extra": "iterations: 32588\ncpu: 21400.880692279112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49064.29677056362,
            "unit": "ns/iter",
            "extra": "iterations: 14213\ncpu: 49062.731302329266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155001.1143805441,
            "unit": "ns/iter",
            "extra": "iterations: 4520\ncpu: 155000.90707964436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130627.10520425705,
            "unit": "ns/iter",
            "extra": "iterations: 5361\ncpu: 130625.4430143628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130102.18215960878,
            "unit": "ns/iter",
            "extra": "iterations: 5325\ncpu: 130095.88732394362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128956.75179523374,
            "unit": "ns/iter",
            "extra": "iterations: 5431\ncpu: 128955.20162032827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83727.27368421793,
            "unit": "ns/iter",
            "extra": "iterations: 8360\ncpu: 83723.28947368322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 131441.90929535835,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 131440.06746626695 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}