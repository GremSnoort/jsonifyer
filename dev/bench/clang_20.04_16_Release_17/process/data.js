window.BENCHMARK_DATA = {
  "lastUpdate": 1705960618821,
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
        "date": 1702493038870,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1362.3985680562025,
            "unit": "ns/iter",
            "extra": "iterations: 512171\ncpu: 1362.3526127016173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16085.119869191065,
            "unit": "ns/iter",
            "extra": "iterations: 50455\ncpu: 16084.201763948073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33929.086591720334,
            "unit": "ns/iter",
            "extra": "iterations: 24552\ncpu: 33927.76555881394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50399.645981264024,
            "unit": "ns/iter",
            "extra": "iterations: 16759\ncpu: 50397.75642938121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56360.28209999041,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56360.58000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70510.78328223269,
            "unit": "ns/iter",
            "extra": "iterations: 12394\ncpu: 70505.33322575441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83959.50956337537,
            "unit": "ns/iter",
            "extra": "iterations: 10352\ncpu: 83958.39451313758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97097.62226683926,
            "unit": "ns/iter",
            "extra": "iterations: 8964\ncpu: 97097.0437304775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113609.37963328033,
            "unit": "ns/iter",
            "extra": "iterations: 7581\ncpu: 113609.62933649923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1138.6998569757939,
            "unit": "ns/iter",
            "extra": "iterations: 615280\ncpu: 1138.6848264204932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 962.4575337447352,
            "unit": "ns/iter",
            "extra": "iterations: 726259\ncpu: 962.4633911593518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 954.2604951648914,
            "unit": "ns/iter",
            "extra": "iterations: 736482\ncpu: 954.2769544944757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 946.6349741304995,
            "unit": "ns/iter",
            "extra": "iterations: 737934\ncpu: 946.6433312464264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1867.934113113998,
            "unit": "ns/iter",
            "extra": "iterations: 372669\ncpu: 1867.9667479720601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5457.382370000232,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5457.283999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29526.220875882744,
            "unit": "ns/iter",
            "extra": "iterations: 27812\ncpu: 29526.74385157487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23073.605523240258,
            "unit": "ns/iter",
            "extra": "iterations: 35414\ncpu: 23078.324956232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22161.146939223665,
            "unit": "ns/iter",
            "extra": "iterations: 36396\ncpu: 22159.99560391254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22237.560814110566,
            "unit": "ns/iter",
            "extra": "iterations: 36850\ncpu: 22236.34192672996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64781.74117561311,
            "unit": "ns/iter",
            "extra": "iterations: 13712\ncpu: 64778.35472578751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 566911.6939999412,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566909.3000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 570243.6259894519,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 570218.865435357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 562386.9768041696,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 562350.3865979394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 619893.5391705027,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 619471.8235681354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 331149.3419729175,
            "unit": "ns/iter",
            "extra": "iterations: 2585\ncpu: 331135.70599613123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 571698.0604681224,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 571657.5422626784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2423251.741514317,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2423112.2715404723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1124415.736330471,
            "unit": "ns/iter",
            "extra": "iterations: 823\ncpu: 1124413.7302551651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3354374.743589654,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3354357.875457874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8479.595031391615,
            "unit": "ns/iter",
            "extra": "iterations: 99867\ncpu: 8479.59185717003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47388.342509383074,
            "unit": "ns/iter",
            "extra": "iterations: 17582\ncpu: 47388.255033556976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36301.694387599026,
            "unit": "ns/iter",
            "extra": "iterations: 22967\ncpu: 36302.242347716194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 35938.27874865108,
            "unit": "ns/iter",
            "extra": "iterations: 23175\ncpu: 35937.65264293403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 35849.10424676932,
            "unit": "ns/iter",
            "extra": "iterations: 23147\ncpu: 35848.98690975044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79493.0706713835,
            "unit": "ns/iter",
            "extra": "iterations: 11037\ncpu: 79492.85131829281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 594648.7870000964,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594657.0999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 599450.4704669983,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 599447.8708791224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 597369.4310344807,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 597363.103448277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 596077.8329897048,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 596086.5979381439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 355608.8539415573,
            "unit": "ns/iter",
            "extra": "iterations: 2499\ncpu: 355608.1232492996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 588379.6885578899,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 588377.6574136791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2584618.3666667836,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2584623.6111111096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1140270.0775861298,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 1140257.266009857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5480.022839999492,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5480.030000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29086.72757930327,
            "unit": "ns/iter",
            "extra": "iterations: 28467\ncpu: 29085.76246179781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 22964.9823116463,
            "unit": "ns/iter",
            "extra": "iterations: 36182\ncpu: 22964.606710519012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22461.749080405574,
            "unit": "ns/iter",
            "extra": "iterations: 36701\ncpu: 22462.066428707705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22607.0486764386,
            "unit": "ns/iter",
            "extra": "iterations: 36568\ncpu: 22606.76821264484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63861.78775869716,
            "unit": "ns/iter",
            "extra": "iterations: 13626\ncpu: 63861.544106854235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 578297.1989999623,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578254.2000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 574497.1911667937,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 574505.273566249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 571099.6813114866,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 571067.80327869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 570071.7891644471,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 570043.2114882473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 340778.5452427296,
            "unit": "ns/iter",
            "extra": "iterations: 2575\ncpu: 340766.52427184355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 567853.1937984613,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 567822.8036175699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 559.0848485575765,
            "unit": "ns/iter",
            "extra": "iterations: 1250145\ncpu: 559.0930652044375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3239.614954674268,
            "unit": "ns/iter",
            "extra": "iterations: 215772\ncpu: 3239.4648054427944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2570.9264232222795,
            "unit": "ns/iter",
            "extra": "iterations: 272287\ncpu: 2570.965194812822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2556.3247877570498,
            "unit": "ns/iter",
            "extra": "iterations: 274567\ncpu: 2556.285351116474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2002.3843401917084,
            "unit": "ns/iter",
            "extra": "iterations: 349685\ncpu: 2002.395012654239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17790.597074367215,
            "unit": "ns/iter",
            "extra": "iterations: 39171\ncpu: 17790.365321283538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31252.223123093903,
            "unit": "ns/iter",
            "extra": "iterations: 22324\ncpu: 31252.67425192665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7340.490708814075,
            "unit": "ns/iter",
            "extra": "iterations: 95413\ncpu: 7340.060578747055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7250.335417401659,
            "unit": "ns/iter",
            "extra": "iterations: 96286\ncpu: 7249.909644185005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7257.6465270584085,
            "unit": "ns/iter",
            "extra": "iterations: 96460\ncpu: 7257.563756997619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14826.627523246774,
            "unit": "ns/iter",
            "extra": "iterations: 47211\ncpu: 14826.690813581772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13959.311744042878,
            "unit": "ns/iter",
            "extra": "iterations: 50102\ncpu: 13959.396830465883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5153.0092932296675,
            "unit": "ns/iter",
            "extra": "iterations: 136013\ncpu: 5152.983170726365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26493.002381314236,
            "unit": "ns/iter",
            "extra": "iterations: 26456\ncpu: 26492.780465679156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20860.172795099832,
            "unit": "ns/iter",
            "extra": "iterations: 33641\ncpu: 20860.01307927834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20620.417891109868,
            "unit": "ns/iter",
            "extra": "iterations: 33961\ncpu: 20620.723771384917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21276.19196455524,
            "unit": "ns/iter",
            "extra": "iterations: 32954\ncpu: 21276.018085816533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49190.80070298108,
            "unit": "ns/iter",
            "extra": "iterations: 14225\ncpu: 49190.411247802294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156446.32372655376,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 156445.93386952454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132926.5797073841,
            "unit": "ns/iter",
            "extra": "iterations: 5263\ncpu: 132928.5768573066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131811.3085487804,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 131810.36044536936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131501.16066741533,
            "unit": "ns/iter",
            "extra": "iterations: 5334\ncpu: 131500.54368203873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83763.31638756486,
            "unit": "ns/iter",
            "extra": "iterations: 8360\ncpu: 83761.78229665081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132089.1879258074,
            "unit": "ns/iter",
            "extra": "iterations: 5284\ncpu: 132084.70855412452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5457.095488698266,
            "unit": "ns/iter",
            "extra": "iterations: 128832\ncpu: 5457.176788375528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26578.848003339644,
            "unit": "ns/iter",
            "extra": "iterations: 26369\ncpu: 26578.584701733234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21549.160847572486,
            "unit": "ns/iter",
            "extra": "iterations: 32422\ncpu: 21548.501017827773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21831.729549974883,
            "unit": "ns/iter",
            "extra": "iterations: 32176\ncpu: 21830.38289408239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22431.96922685786,
            "unit": "ns/iter",
            "extra": "iterations: 31456\ncpu: 22431.106943031962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50139.04458324597,
            "unit": "ns/iter",
            "extra": "iterations: 13929\ncpu: 50137.68396869838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152979.82899626528,
            "unit": "ns/iter",
            "extra": "iterations: 4573\ncpu: 152977.4546249718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130273.45911367211,
            "unit": "ns/iter",
            "extra": "iterations: 5393\ncpu: 130272.3345076973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128273.6373787216,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 128263.68295808173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128207.54410959168,
            "unit": "ns/iter",
            "extra": "iterations: 5475\ncpu: 128202.66666666805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83317.53258534624,
            "unit": "ns/iter",
            "extra": "iterations: 8378\ncpu: 83312.29410360406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130070.31449814481,
            "unit": "ns/iter",
            "extra": "iterations: 5380\ncpu: 130064.86988847528 ns\nthreads: 1"
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
        "date": 1702504630715,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1384.9224160514045,
            "unit": "ns/iter",
            "extra": "iterations: 507721\ncpu: 1384.845614028177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16041.945862138675,
            "unit": "ns/iter",
            "extra": "iterations: 50630\ncpu: 16041.032984396605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34373.89098133425,
            "unit": "ns/iter",
            "extra": "iterations: 24161\ncpu: 34372.43905467489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50419.26522911429,
            "unit": "ns/iter",
            "extra": "iterations: 16695\ncpu: 50419.32914046119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56319.21330000296,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56318.139999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70575.13714701998,
            "unit": "ns/iter",
            "extra": "iterations: 12359\ncpu: 70573.95420341456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 91272.07400915088,
            "unit": "ns/iter",
            "extra": "iterations: 10269\ncpu: 91270.00681663258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97530.17635853402,
            "unit": "ns/iter",
            "extra": "iterations: 8925\ncpu: 97528.08963585431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114193.9964436126,
            "unit": "ns/iter",
            "extra": "iterations: 7592\ncpu: 114193.36143308735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1141.323564398004,
            "unit": "ns/iter",
            "extra": "iterations: 609483\ncpu: 1141.2626767276531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 945.6883496529331,
            "unit": "ns/iter",
            "extra": "iterations: 743686\ncpu: 945.6239595743356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 923.7726825324161,
            "unit": "ns/iter",
            "extra": "iterations: 756893\ncpu: 923.7544804879946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 923.1104875594614,
            "unit": "ns/iter",
            "extra": "iterations: 756954\ncpu: 923.1023285430817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1857.8445168053643,
            "unit": "ns/iter",
            "extra": "iterations: 374973\ncpu: 1857.803895213789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5503.394490000345,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5503.107000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29174.53107384952,
            "unit": "ns/iter",
            "extra": "iterations: 28207\ncpu: 29172.871982132066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23152.770791758958,
            "unit": "ns/iter",
            "extra": "iterations: 35579\ncpu: 23151.36175834062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 21508.61420360597,
            "unit": "ns/iter",
            "extra": "iterations: 38103\ncpu: 21507.794661837674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22050.015573793156,
            "unit": "ns/iter",
            "extra": "iterations: 36921\ncpu: 22048.934210882697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65278.37123504899,
            "unit": "ns/iter",
            "extra": "iterations: 13878\ncpu: 65275.39991353231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 571433.5600000594,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571397.6000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 564071.7701823247,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 564062.5651041666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 565350.3525973537,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 565333.3116883131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 562755.0584795203,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 562729.4996751131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 338926.35498839803,
            "unit": "ns/iter",
            "extra": "iterations: 2586\ncpu: 338912.064965198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 565680.7647823468,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 565657.1799870036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2424303.7415142767,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2424192.1671018256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1091095.8680800106,
            "unit": "ns/iter",
            "extra": "iterations: 849\ncpu: 1091051.1189634833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3375373.9450548394,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3375330.0366300326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8503.37049485122,
            "unit": "ns/iter",
            "extra": "iterations: 97888\ncpu: 8503.312969924842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46761.39559006834,
            "unit": "ns/iter",
            "extra": "iterations: 17642\ncpu: 46758.213354495056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36598.82182921691,
            "unit": "ns/iter",
            "extra": "iterations: 22731\ncpu: 36597.43522062399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36074.17239127309,
            "unit": "ns/iter",
            "extra": "iterations: 22971\ncpu: 36072.1561969441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 35770.807805470205,
            "unit": "ns/iter",
            "extra": "iterations: 23112\ncpu: 35769.2281066112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78202.85738646894,
            "unit": "ns/iter",
            "extra": "iterations: 11142\ncpu: 78198.9409441749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 599130.6370000301,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 599097.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 596570.5447098883,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 595334.7440273039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 594494.3704715673,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 594478.8106630225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 589638.7422680261,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 589609.8281786941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 355550.7374392238,
            "unit": "ns/iter",
            "extra": "iterations: 2468\ncpu: 355535.2917341969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 577771.3353333335,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 577760.0666666654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2591771.8222223762,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2591658.055555553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1142150.1882640745,
            "unit": "ns/iter",
            "extra": "iterations: 818\ncpu: 1142103.7897310501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5531.1947699999555,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5531.136999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29348.923284752156,
            "unit": "ns/iter",
            "extra": "iterations: 28130\ncpu: 29347.35513686464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23353.73436449255,
            "unit": "ns/iter",
            "extra": "iterations: 35688\ncpu: 23353.589441829026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22143.97674110221,
            "unit": "ns/iter",
            "extra": "iterations: 37706\ncpu: 22143.79939532163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22705.34799857559,
            "unit": "ns/iter",
            "extra": "iterations: 36549\ncpu: 22705.193028536938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63846.048875499735,
            "unit": "ns/iter",
            "extra": "iterations: 13606\ncpu: 63843.89240041147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 575405.0010000356,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575355.5000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 577807.1750663109,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 577793.3687002658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 570248.2095612665,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 570222.1349050422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 570887.9487516474,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 570863.0749014464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 344072.7242187691,
            "unit": "ns/iter",
            "extra": "iterations: 2560\ncpu: 344060.03906250204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 566461.8883841389,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 566439.130434786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 533.6635349656815,
            "unit": "ns/iter",
            "extra": "iterations: 1311215\ncpu: 533.6560365767637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3179.9967984669306,
            "unit": "ns/iter",
            "extra": "iterations: 220207\ncpu: 3179.9742969115373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2553.091354775926,
            "unit": "ns/iter",
            "extra": "iterations: 274348\ncpu: 2553.072010730895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2443.0370191750053,
            "unit": "ns/iter",
            "extra": "iterations: 286149\ncpu: 2443.0184973562577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1994.1283441310459,
            "unit": "ns/iter",
            "extra": "iterations: 351773\ncpu: 1994.0976140863684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17652.911419316028,
            "unit": "ns/iter",
            "extra": "iterations: 39512\ncpu: 17652.935816967056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30836.059293598322,
            "unit": "ns/iter",
            "extra": "iterations: 22650\ncpu: 30835.5761589402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7305.793268428298,
            "unit": "ns/iter",
            "extra": "iterations: 95936\ncpu: 7305.7475817211935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7279.657380229733,
            "unit": "ns/iter",
            "extra": "iterations: 96413\ncpu: 7279.61374503424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7259.822633727263,
            "unit": "ns/iter",
            "extra": "iterations: 96016\ncpu: 7259.503624395953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14754.69158661429,
            "unit": "ns/iter",
            "extra": "iterations: 47365\ncpu: 14754.7112847041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13831.185549075159,
            "unit": "ns/iter",
            "extra": "iterations: 50585\ncpu: 13831.00128496594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5113.963058218638,
            "unit": "ns/iter",
            "extra": "iterations: 136864\ncpu: 5113.940115735249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26044.90211325619,
            "unit": "ns/iter",
            "extra": "iterations: 26878\ncpu: 26044.7466329345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20597.594819964495,
            "unit": "ns/iter",
            "extra": "iterations: 33938\ncpu: 20596.92969532684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20426.713169480387,
            "unit": "ns/iter",
            "extra": "iterations: 34299\ncpu: 20426.467243942843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20870.333273754677,
            "unit": "ns/iter",
            "extra": "iterations: 33570\ncpu: 20869.600834078017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48900.89465222096,
            "unit": "ns/iter",
            "extra": "iterations: 14305\ncpu: 48899.41978329269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156137.7177545204,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 156133.74916462298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131361.7410948676,
            "unit": "ns/iter",
            "extra": "iterations: 5334\ncpu: 131361.94225721565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130441.12196940667,
            "unit": "ns/iter",
            "extra": "iterations: 5362\ncpu: 130437.07571801502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131328.38158634916,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 131328.57678605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83819.65293412174,
            "unit": "ns/iter",
            "extra": "iterations: 8350\ncpu: 83818.44311377213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131135.64572818202,
            "unit": "ns/iter",
            "extra": "iterations: 5349\ncpu: 131134.64198915608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5045.193257048368,
            "unit": "ns/iter",
            "extra": "iterations: 138515\ncpu: 5045.200158827607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26605.728041567098,
            "unit": "ns/iter",
            "extra": "iterations: 26368\ncpu: 26605.055370145834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21670.202125368378,
            "unit": "ns/iter",
            "extra": "iterations: 32465\ncpu: 21669.78284306206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21789.491362705143,
            "unit": "ns/iter",
            "extra": "iterations: 32186\ncpu: 21788.71869757033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22088.224564274962,
            "unit": "ns/iter",
            "extra": "iterations: 31786\ncpu: 22088.10482602423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49736.605024131524,
            "unit": "ns/iter",
            "extra": "iterations: 14092\ncpu: 49735.261141073504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155600.31996455474,
            "unit": "ns/iter",
            "extra": "iterations: 4513\ncpu: 155599.313095502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129106.16933259874,
            "unit": "ns/iter",
            "extra": "iterations: 5439\ncpu: 129102.84978856263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129336.16857883446,
            "unit": "ns/iter",
            "extra": "iterations: 5404\ncpu: 129336.3804589178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127790.58359218853,
            "unit": "ns/iter",
            "extra": "iterations: 5473\ncpu: 127787.39265485026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83384.10510009009,
            "unit": "ns/iter",
            "extra": "iterations: 8392\ncpu: 83383.57959961823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130093.9508686726,
            "unit": "ns/iter",
            "extra": "iterations: 5353\ncpu: 130093.14403138272 ns\nthreads: 1"
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
        "date": 1705575710955,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1401.2421015202106,
            "unit": "ns/iter",
            "extra": "iterations: 503388\ncpu: 1401.20602795458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16179.453499595187,
            "unit": "ns/iter",
            "extra": "iterations: 50763\ncpu: 16178.840888048382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34841.27802432652,
            "unit": "ns/iter",
            "extra": "iterations: 24336\ncpu: 34840.67636423406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50797.18089541171,
            "unit": "ns/iter",
            "extra": "iterations: 16551\ncpu: 50796.924657120384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56148.11670000108,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56146.75 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71072.15538011251,
            "unit": "ns/iter",
            "extra": "iterations: 12286\ncpu: 71070.40533941072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85501.50004937699,
            "unit": "ns/iter",
            "extra": "iterations: 10125\ncpu: 85494.70617283956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 100567.28107803654,
            "unit": "ns/iter",
            "extra": "iterations: 8905\ncpu: 100563.84053902296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113719.69489512705,
            "unit": "ns/iter",
            "extra": "iterations: 7581\ncpu: 113715.2750296794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1179.8577840279063,
            "unit": "ns/iter",
            "extra": "iterations: 593780\ncpu: 1179.8438815723005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 971.5752810266483,
            "unit": "ns/iter",
            "extra": "iterations: 720839\ncpu: 971.5115303139803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 963.7169442749405,
            "unit": "ns/iter",
            "extra": "iterations: 725903\ncpu: 963.6489999352519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 966.6777034448611,
            "unit": "ns/iter",
            "extra": "iterations: 724668\ncpu: 966.6205765950748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1911.0408673348466,
            "unit": "ns/iter",
            "extra": "iterations: 367286\ncpu: 1910.913838262284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5580.280130000119,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5580.195999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29723.075555712574,
            "unit": "ns/iter",
            "extra": "iterations: 27847\ncpu: 29722.081373217938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22782.938289775993,
            "unit": "ns/iter",
            "extra": "iterations: 36007\ncpu: 22782.833893409606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22329.177762153005,
            "unit": "ns/iter",
            "extra": "iterations: 36982\ncpu: 22328.59228814023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22489.430727850635,
            "unit": "ns/iter",
            "extra": "iterations: 36436\ncpu: 22488.728180919985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64501.45141611779,
            "unit": "ns/iter",
            "extra": "iterations: 13770\ncpu: 64499.36819172103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 570381.0410000187,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570360.4999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 570386.8883811724,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 570372.8459530018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 568709.1618610709,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 568293.7090432512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 570383.9656992189,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 570341.5567282325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 339416.0703846165,
            "unit": "ns/iter",
            "extra": "iterations: 2600\ncpu: 339404.76923076855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 571269.4278249244,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 571236.0548660996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2441891.900262421,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2441709.186351704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1114865.616586486,
            "unit": "ns/iter",
            "extra": "iterations: 832\ncpu: 1114837.9807692317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3423487.1838236814,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3423393.3823529338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8694.751590463708,
            "unit": "ns/iter",
            "extra": "iterations: 97613\ncpu: 8694.622642475908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47240.232965535266,
            "unit": "ns/iter",
            "extra": "iterations: 17582\ncpu: 47239.02286429303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38324.59334376104,
            "unit": "ns/iter",
            "extra": "iterations: 22385\ncpu: 38324.11882957341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36698.16712341194,
            "unit": "ns/iter",
            "extra": "iterations: 22624\ncpu: 36697.12694483721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36406.13474650146,
            "unit": "ns/iter",
            "extra": "iterations: 22880\ncpu: 36404.88636363647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78882.29237480159,
            "unit": "ns/iter",
            "extra": "iterations: 11003\ncpu: 78881.98673089102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 612464.0529999397,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 612447.7999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 630508.7220291785,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 630480.7505211957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 606836.3244755754,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 606823.8461538434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 596472.7228748801,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 596452.5915687628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 354137.84186993685,
            "unit": "ns/iter",
            "extra": "iterations: 2460\ncpu: 354122.8455284558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 590337.385346004,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 590315.6037991885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2599586.1142060515,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2599522.841225629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1114863.504201686,
            "unit": "ns/iter",
            "extra": "iterations: 833\ncpu: 1114830.3721488572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5552.420919999577,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5552.269000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29523.142165905763,
            "unit": "ns/iter",
            "extra": "iterations: 28727\ncpu: 29521.975841542753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23212.838954656334,
            "unit": "ns/iter",
            "extra": "iterations: 35816\ncpu: 23212.206834933975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22645.017915574706,
            "unit": "ns/iter",
            "extra": "iterations: 36672\ncpu: 22643.93542757417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22860.086654538558,
            "unit": "ns/iter",
            "extra": "iterations: 36282\ncpu: 22859.42891792085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63410.34620447697,
            "unit": "ns/iter",
            "extra": "iterations: 13674\ncpu: 63407.8908878166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 581850.7999999837,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581834.6000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 579451.0099536069,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 579428.0026542814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 577594.3671305524,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 577569.7150430764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 578832.9517195256,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 578830.8201058159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 339460.9861003824,
            "unit": "ns/iter",
            "extra": "iterations: 2590\ncpu: 339447.8764478772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 567368.6777560333,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 567344.6183953027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 574.8454884617855,
            "unit": "ns/iter",
            "extra": "iterations: 1226012\ncpu: 574.8250424955005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3220.028422881383,
            "unit": "ns/iter",
            "extra": "iterations: 217536\ncpu: 3219.966350397197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2502.6190093561204,
            "unit": "ns/iter",
            "extra": "iterations: 280020\ncpu: 2502.551246339562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2586.1306633883087,
            "unit": "ns/iter",
            "extra": "iterations: 270068\ncpu: 2586.0090791948464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2024.8304985270545,
            "unit": "ns/iter",
            "extra": "iterations: 345879\ncpu: 2024.7577910194166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17706.496207687036,
            "unit": "ns/iter",
            "extra": "iterations: 39290\ncpu: 17706.116060066066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30980.35514390624,
            "unit": "ns/iter",
            "extra": "iterations: 22619\ncpu: 30978.836376497515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7331.907636987402,
            "unit": "ns/iter",
            "extra": "iterations: 95666\ncpu: 7331.496038299819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7276.612807186328,
            "unit": "ns/iter",
            "extra": "iterations: 96399\ncpu: 7276.386684509234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7287.650498456746,
            "unit": "ns/iter",
            "extra": "iterations: 96197\ncpu: 7287.6160379220355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14732.027180543531,
            "unit": "ns/iter",
            "extra": "iterations: 47534\ncpu: 14731.958177304614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13948.386728605154,
            "unit": "ns/iter",
            "extra": "iterations: 49942\ncpu: 13947.765407873056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5104.018413082549,
            "unit": "ns/iter",
            "extra": "iterations: 137348\ncpu: 5103.715379910861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26511.94860025654,
            "unit": "ns/iter",
            "extra": "iterations: 26362\ncpu: 26510.60996889445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20870.074125748368,
            "unit": "ns/iter",
            "extra": "iterations: 33686\ncpu: 20869.18898058553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20592.692781379323,
            "unit": "ns/iter",
            "extra": "iterations: 33940\ncpu: 20591.829699469734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21075.78957180624,
            "unit": "ns/iter",
            "extra": "iterations: 33256\ncpu: 21074.84664421462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49804.03494070387,
            "unit": "ns/iter",
            "extra": "iterations: 14081\ncpu: 49802.08081812411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157478.22232224868,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 157472.18721872184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131602.48395622356,
            "unit": "ns/iter",
            "extra": "iterations: 5298\ncpu: 131597.4707436754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130119.46002596559,
            "unit": "ns/iter",
            "extra": "iterations: 5391\ncpu: 130117.78890743812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129875.75174569285,
            "unit": "ns/iter",
            "extra": "iterations: 5442\ncpu: 129872.76736494052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82917.8670961555,
            "unit": "ns/iter",
            "extra": "iterations: 8382\ncpu: 82914.41183488452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130548.92833082817,
            "unit": "ns/iter",
            "extra": "iterations: 5344\ncpu: 130546.29491017961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5349.612480002423,
            "unit": "ns/iter",
            "extra": "iterations: 130641\ncpu: 5349.322953743523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26604.054092903723,
            "unit": "ns/iter",
            "extra": "iterations: 26436\ncpu: 26602.541988197892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21771.612203074237,
            "unit": "ns/iter",
            "extra": "iterations: 32205\ncpu: 21770.52010557362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21351.314667154686,
            "unit": "ns/iter",
            "extra": "iterations: 32733\ncpu: 21350.499495921587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21561.934609939202,
            "unit": "ns/iter",
            "extra": "iterations: 32482\ncpu: 21561.190813373785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49633.025310995174,
            "unit": "ns/iter",
            "extra": "iterations: 13907\ncpu: 49632.14927734236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152906.32663754778,
            "unit": "ns/iter",
            "extra": "iterations: 4580\ncpu: 152897.7292576436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128124.43515797595,
            "unit": "ns/iter",
            "extra": "iterations: 5444\ncpu: 128119.8567229981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 134920.0935555042,
            "unit": "ns/iter",
            "extra": "iterations: 4981\ncpu: 134906.52479421697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127712.71189219946,
            "unit": "ns/iter",
            "extra": "iterations: 5491\ncpu: 127701.09269714082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82836.3702827489,
            "unit": "ns/iter",
            "extra": "iterations: 8453\ncpu: 82835.95173311299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130720.11352657717,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 130500.53883314857 ns\nthreads: 1"
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
        "date": 1705774011092,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1351.8439576487285,
            "unit": "ns/iter",
            "extra": "iterations: 520410\ncpu: 1351.8289425645166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16523.842944982447,
            "unit": "ns/iter",
            "extra": "iterations: 49766\ncpu: 16523.791343487523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34982.33754687633,
            "unit": "ns/iter",
            "extra": "iterations: 23733\ncpu: 34981.31715333081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52041.31209642319,
            "unit": "ns/iter",
            "extra": "iterations: 16261\ncpu: 52040.05903695957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57871.08260000195,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57870.05000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72632.67023661638,
            "unit": "ns/iter",
            "extra": "iterations: 12045\ncpu: 72631.81403071815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87160.9660726929,
            "unit": "ns/iter",
            "extra": "iterations: 9933\ncpu: 87159.09594281692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 101110.00713867224,
            "unit": "ns/iter",
            "extra": "iterations: 8545\ncpu: 101105.99180807492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 117104.43306122396,
            "unit": "ns/iter",
            "extra": "iterations: 7350\ncpu: 117101.46938775513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1235.4916077176206,
            "unit": "ns/iter",
            "extra": "iterations: 566592\ncpu: 1235.4614961030152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 991.1293296336983,
            "unit": "ns/iter",
            "extra": "iterations: 707479\ncpu: 991.0880746990396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 970.9232694108631,
            "unit": "ns/iter",
            "extra": "iterations: 719726\ncpu: 970.8846144227127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 964.2839822508118,
            "unit": "ns/iter",
            "extra": "iterations: 721612\ncpu: 964.2669467802646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1904.118212455162,
            "unit": "ns/iter",
            "extra": "iterations: 369132\ncpu: 1904.1001592926104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5533.343150000292,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5533.216000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 28933.41287399999,
            "unit": "ns/iter",
            "extra": "iterations: 28476\ncpu: 28932.940019665697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23178.188015655705,
            "unit": "ns/iter",
            "extra": "iterations: 35513\ncpu: 23177.16610818573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22364.824608829906,
            "unit": "ns/iter",
            "extra": "iterations: 36621\ncpu: 22364.296441932252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22627.677170149273,
            "unit": "ns/iter",
            "extra": "iterations: 36115\ncpu: 22627.23522082244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64352.30371706717,
            "unit": "ns/iter",
            "extra": "iterations: 13855\ncpu: 64350.22735474541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 569720.785999948,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569705.9000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 565185.7632439918,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 565168.7377370822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 560384.5647969048,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 560378.5299806572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 563980.7362281592,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 563963.5126377187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 337294.11390478554,
            "unit": "ns/iter",
            "extra": "iterations: 2625\ncpu: 337286.7809523812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 566462.2007722382,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 566451.3513513507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2422177.5445026527,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2422110.9947644044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1095962.8404256296,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1095934.3971631199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3409064.003649607,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3408992.7007299243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8567.280115426882,
            "unit": "ns/iter",
            "extra": "iterations: 97724\ncpu: 8567.055175801217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46366.80169387422,
            "unit": "ns/iter",
            "extra": "iterations: 17947\ncpu: 46365.4984119909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36613.9935931179,
            "unit": "ns/iter",
            "extra": "iterations: 22788\ncpu: 36613.524662102995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36364.56037499609,
            "unit": "ns/iter",
            "extra": "iterations: 23147\ncpu: 36363.723160668975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36307.63233208868,
            "unit": "ns/iter",
            "extra": "iterations: 23271\ncpu: 36306.92277942496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77434.2540621761,
            "unit": "ns/iter",
            "extra": "iterations: 11324\ncpu: 77432.6474743908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 595436.8120000026,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595420.6999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 599657.9993154769,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 599652.8405201931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 597994.3935439639,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 597971.5659340663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 595202.1321525669,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 595196.7983651243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 354378.88095239905,
            "unit": "ns/iter",
            "extra": "iterations: 2478\ncpu: 354375.38337368815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 586719.8784419004,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 586711.6185359341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2588200.5434173164,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2588121.568627454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1126420.1878788245,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 1126393.696969699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5486.970520000795,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5486.749000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29258.75500716694,
            "unit": "ns/iter",
            "extra": "iterations: 28609\ncpu: 29258.17400118842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23008.13130887068,
            "unit": "ns/iter",
            "extra": "iterations: 35565\ncpu: 23007.223393786022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22917.154066984833,
            "unit": "ns/iter",
            "extra": "iterations: 36575\ncpu: 22916.803827751126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22455.43824821534,
            "unit": "ns/iter",
            "extra": "iterations: 36420\ncpu: 22454.942339373883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63496.43874352745,
            "unit": "ns/iter",
            "extra": "iterations: 13721\ncpu: 63495.13883827703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 579121.5579999972,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579096.799999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 579136.132978737,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 579129.654255321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 580044.3750000111,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 580034.7883597887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 578761.1716171794,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 578751.3531353138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 344725.6272119781,
            "unit": "ns/iter",
            "extra": "iterations: 2543\ncpu: 344721.1167911913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 570100.3986970885,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 570085.0814332273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 557.0353917251277,
            "unit": "ns/iter",
            "extra": "iterations: 1255689\ncpu: 557.0192141525498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3231.1114788665473,
            "unit": "ns/iter",
            "extra": "iterations: 217234\ncpu: 3230.995608422249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2512.755076785838,
            "unit": "ns/iter",
            "extra": "iterations: 277981\ncpu: 2512.6825214672745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2582.222659818777,
            "unit": "ns/iter",
            "extra": "iterations: 271432\ncpu: 2582.1531728020295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2018.1202445693598,
            "unit": "ns/iter",
            "extra": "iterations: 346078\ncpu: 2018.0514219337874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17838.821894381585,
            "unit": "ns/iter",
            "extra": "iterations: 39179\ncpu: 17838.362388014077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30961.152716980392,
            "unit": "ns/iter",
            "extra": "iterations: 22617\ncpu: 30960.122916390206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7282.754161357444,
            "unit": "ns/iter",
            "extra": "iterations: 95762\ncpu: 7282.626720410978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7267.20102627854,
            "unit": "ns/iter",
            "extra": "iterations: 96465\ncpu: 7266.95174415582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7251.121099040702,
            "unit": "ns/iter",
            "extra": "iterations: 96739\ncpu: 7250.863664085829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14795.194487890823,
            "unit": "ns/iter",
            "extra": "iterations: 47314\ncpu: 14794.768990151042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13977.128353180216,
            "unit": "ns/iter",
            "extra": "iterations: 49878\ncpu: 13976.857532378983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5288.55381728579,
            "unit": "ns/iter",
            "extra": "iterations: 132699\ncpu: 5288.498782959956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26631.204024187413,
            "unit": "ns/iter",
            "extra": "iterations: 26291\ncpu: 26631.09429082234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20931.91044731145,
            "unit": "ns/iter",
            "extra": "iterations: 33310\ncpu: 20931.49804863398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20661.634693095657,
            "unit": "ns/iter",
            "extra": "iterations: 33903\ncpu: 20661.54912544588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21429.877673775813,
            "unit": "ns/iter",
            "extra": "iterations: 32585\ncpu: 21429.627129047283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49776.49932418446,
            "unit": "ns/iter",
            "extra": "iterations: 14057\ncpu: 49774.29750302374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156512.50858033646,
            "unit": "ns/iter",
            "extra": "iterations: 4487\ncpu: 156509.00378872236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131981.32872618694,
            "unit": "ns/iter",
            "extra": "iterations: 5354\ncpu: 131980.68733657038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133893.25529074125,
            "unit": "ns/iter",
            "extra": "iterations: 5245\ncpu: 133890.21925643444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131637.08595071133,
            "unit": "ns/iter",
            "extra": "iterations: 5317\ncpu: 131633.74083129628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84039.33937140624,
            "unit": "ns/iter",
            "extra": "iterations: 8336\ncpu: 84036.86420345593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132219.1961596351,
            "unit": "ns/iter",
            "extra": "iterations: 5312\ncpu: 132214.175451807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5769.062454112674,
            "unit": "ns/iter",
            "extra": "iterations: 125308\ncpu: 5768.934146263542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26843.654352653815,
            "unit": "ns/iter",
            "extra": "iterations: 26122\ncpu: 26843.105428374216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21612.569571912005,
            "unit": "ns/iter",
            "extra": "iterations: 32470\ncpu: 21612.429935324868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21566.164294955837,
            "unit": "ns/iter",
            "extra": "iterations: 32466\ncpu: 21565.246719644994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21538.5112409648,
            "unit": "ns/iter",
            "extra": "iterations: 32515\ncpu: 21538.3638320774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50320.28287912208,
            "unit": "ns/iter",
            "extra": "iterations: 13907\ncpu: 50320.457323650124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155868.67813540675,
            "unit": "ns/iter",
            "extra": "iterations: 4505\ncpu: 155865.4162042182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130156.17621883871,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 130154.13100111653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128061.23168497384,
            "unit": "ns/iter",
            "extra": "iterations: 5460\ncpu: 128057.43589743607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129034.244059679,
            "unit": "ns/iter",
            "extra": "iterations: 5429\ncpu: 129034.70252348641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83931.58015542186,
            "unit": "ns/iter",
            "extra": "iterations: 8365\ncpu: 83928.57142857103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130467.53879070608,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 130464.46511627838 ns\nthreads: 1"
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
        "date": 1705775500878,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1364.7977156586994,
            "unit": "ns/iter",
            "extra": "iterations: 514459\ncpu: 1364.7769793122484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15832.508110060502,
            "unit": "ns/iter",
            "extra": "iterations: 52589\ncpu: 15832.522010306335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33227.27058262682,
            "unit": "ns/iter",
            "extra": "iterations: 25179\ncpu: 33225.71984590333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50309.649760025306,
            "unit": "ns/iter",
            "extra": "iterations: 16877\ncpu: 50308.87598506843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55318.79320000144,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55314.90000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70145.44556451227,
            "unit": "ns/iter",
            "extra": "iterations: 12400\ncpu: 70143.94354838709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84259.64013573233,
            "unit": "ns/iter",
            "extra": "iterations: 10315\ncpu: 84256.76199709164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97867.75185019542,
            "unit": "ns/iter",
            "extra": "iterations: 8918\ncpu: 97865.41825521423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112864.06315651326,
            "unit": "ns/iter",
            "extra": "iterations: 7616\ncpu: 112860.25472689084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1127.5049976725404,
            "unit": "ns/iter",
            "extra": "iterations: 545654\ncpu: 1127.4992944246724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 905.1871848007312,
            "unit": "ns/iter",
            "extra": "iterations: 756664\ncpu: 905.1645115929922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 899.9498341957362,
            "unit": "ns/iter",
            "extra": "iterations: 775010\ncpu: 899.9179365427558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 874.771907196483,
            "unit": "ns/iter",
            "extra": "iterations: 777644\ncpu: 874.7558008548905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1856.5052433306107,
            "unit": "ns/iter",
            "extra": "iterations: 366847\ncpu: 1856.4747701357794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5022.947139999587,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5022.8000000000075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 26353.062475811366,
            "unit": "ns/iter",
            "extra": "iterations: 31004\ncpu: 26352.470648948558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 21026.016173267155,
            "unit": "ns/iter",
            "extra": "iterations: 39015\ncpu: 21025.490196078397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19368.010952690176,
            "unit": "ns/iter",
            "extra": "iterations: 41451\ncpu: 19367.8005355721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 20259.28091899582,
            "unit": "ns/iter",
            "extra": "iterations: 39652\ncpu: 20258.82174921822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64525.43177174838,
            "unit": "ns/iter",
            "extra": "iterations: 13704\ncpu: 64523.489492119166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 556126.6920000208,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 556097.7000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 549899.760436696,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 549888.3750802805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 549015.0640051049,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 549010.3929024081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 579864.5061647984,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 579847.7611940303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 331526.4241835144,
            "unit": "ns/iter",
            "extra": "iterations: 2572\ncpu: 331514.73561430734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 552868.3393201155,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 552846.4400256571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2360995.1834624703,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2360968.475452201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1069780.6350113382,
            "unit": "ns/iter",
            "extra": "iterations: 874\ncpu: 1069777.4599542331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3334980.776173574,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3334902.166064987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8389.251928072656,
            "unit": "ns/iter",
            "extra": "iterations: 98155\ncpu: 8389.191584738424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46661.14845499397,
            "unit": "ns/iter",
            "extra": "iterations: 17864\ncpu: 46661.0613524407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37035.60625722,
            "unit": "ns/iter",
            "extra": "iterations: 22502\ncpu: 37034.69024975557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36125.55916202902,
            "unit": "ns/iter",
            "extra": "iterations: 23199\ncpu: 36125.048493469556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36103.608003461166,
            "unit": "ns/iter",
            "extra": "iterations: 23115\ncpu: 36102.80770062722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77519.3200739229,
            "unit": "ns/iter",
            "extra": "iterations: 11363\ncpu: 77519.3346827422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 587382.5520000082,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 587373.7000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 590680.3744911976,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 590675.5766621449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 597616.304288631,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 597605.7862491511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 589130.0454237291,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 589117.1525423734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 349716.40701336076,
            "unit": "ns/iter",
            "extra": "iterations: 2538\ncpu: 349713.3569739971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 577879.1484686546,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 577864.9800266327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2509225.168975297,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2509155.955678683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1118106.1745283082,
            "unit": "ns/iter",
            "extra": "iterations: 848\ncpu: 1118079.2452830174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5493.582909999759,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5493.623999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28913.862419014335,
            "unit": "ns/iter",
            "extra": "iterations: 28863\ncpu: 28913.39084641249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23121.52531610578,
            "unit": "ns/iter",
            "extra": "iterations: 36222\ncpu: 23121.213627077504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22549.94225146452,
            "unit": "ns/iter",
            "extra": "iterations: 36936\ncpu: 22549.537037036913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22655.431140520788,
            "unit": "ns/iter",
            "extra": "iterations: 36422\ncpu: 22654.98050628744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63863.57922078137,
            "unit": "ns/iter",
            "extra": "iterations: 13860\ncpu: 63861.83261183277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 570785.4390000193,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570783.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 568431.3084479395,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 568419.5153896566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 566328.2330728621,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 566321.8098958348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 565411.0939118976,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 565400.3886010353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 337856.2922843088,
            "unit": "ns/iter",
            "extra": "iterations: 2631\ncpu: 337856.1003420751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 552991.5813953367,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 552984.6637335015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 524.7176133193245,
            "unit": "ns/iter",
            "extra": "iterations: 1304456\ncpu: 524.7006414934651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2974.562476583395,
            "unit": "ns/iter",
            "extra": "iterations: 234872\ncpu: 2974.50398514934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2503.1014010164686,
            "unit": "ns/iter",
            "extra": "iterations: 275086\ncpu: 2503.065950284657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2479.676094216353,
            "unit": "ns/iter",
            "extra": "iterations: 281480\ncpu: 2479.6266164558756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1919.7795740450285,
            "unit": "ns/iter",
            "extra": "iterations: 374171\ncpu: 1919.7794591243105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17001.63034365381,
            "unit": "ns/iter",
            "extra": "iterations: 42223\ncpu: 17001.757336049206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31003.74563172082,
            "unit": "ns/iter",
            "extra": "iterations: 23808\ncpu: 31003.977654569782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7225.706584768339,
            "unit": "ns/iter",
            "extra": "iterations: 96055\ncpu: 7225.688407683083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 6989.991776888625,
            "unit": "ns/iter",
            "extra": "iterations: 97530\ncpu: 6989.905670050375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7068.682044431816,
            "unit": "ns/iter",
            "extra": "iterations: 101055\ncpu: 7068.298451338285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14561.627791926385,
            "unit": "ns/iter",
            "extra": "iterations: 47906\ncpu: 14561.307560639649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13909.085604737063,
            "unit": "ns/iter",
            "extra": "iterations: 50336\ncpu: 13909.102828989178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5162.440265259411,
            "unit": "ns/iter",
            "extra": "iterations: 136018\ncpu: 5162.3917422694485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27253.867894106283,
            "unit": "ns/iter",
            "extra": "iterations: 26668\ncpu: 27253.851057447122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20729.130912312143,
            "unit": "ns/iter",
            "extra": "iterations: 33870\ncpu: 20728.47948036585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20250.565711963445,
            "unit": "ns/iter",
            "extra": "iterations: 34461\ncpu: 20250.26261571051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20982.881062944452,
            "unit": "ns/iter",
            "extra": "iterations: 33379\ncpu: 20982.10251954803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48863.56241658122,
            "unit": "ns/iter",
            "extra": "iterations: 14235\ncpu: 48863.56164383617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154267.79492831847,
            "unit": "ns/iter",
            "extra": "iterations: 4535\ncpu: 154261.4553472981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130927.194819807,
            "unit": "ns/iter",
            "extra": "iterations: 5328\ncpu: 130924.92492492567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129354.26294302332,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 129348.54332900472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129982.08833395198,
            "unit": "ns/iter",
            "extra": "iterations: 5366\ncpu: 129979.70555348515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83024.07200473912,
            "unit": "ns/iter",
            "extra": "iterations: 8430\ncpu: 83023.4045077106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131086.3282128125,
            "unit": "ns/iter",
            "extra": "iterations: 5338\ncpu: 131086.47433495708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5004.051529999742,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5003.923999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26883.153890115216,
            "unit": "ns/iter",
            "extra": "iterations: 26246\ncpu: 26882.16109121363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21589.699633353863,
            "unit": "ns/iter",
            "extra": "iterations: 31638\ncpu: 21589.003729692162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20958.412774100758,
            "unit": "ns/iter",
            "extra": "iterations: 33975\ncpu: 20957.713024282657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20223.818682809382,
            "unit": "ns/iter",
            "extra": "iterations: 33207\ncpu: 20223.010208690743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48232.51579456497,
            "unit": "ns/iter",
            "extra": "iterations: 14467\ncpu: 48229.190571645224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154322.21504191292,
            "unit": "ns/iter",
            "extra": "iterations: 4534\ncpu: 154316.9166299096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129499.30682239549,
            "unit": "ns/iter",
            "extra": "iterations: 5394\ncpu: 129494.49388209303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127798.59423940975,
            "unit": "ns/iter",
            "extra": "iterations: 5555\ncpu: 127799.56795679619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 131136.87307548858,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 131132.36950807227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80210.0989010954,
            "unit": "ns/iter",
            "extra": "iterations: 8372\ncpu: 80209.43621595734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129748.35786754765,
            "unit": "ns/iter",
            "extra": "iterations: 5421\ncpu: 129749.38203283428 ns\nthreads: 1"
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
        "date": 1705778504005,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1393.6374952803187,
            "unit": "ns/iter",
            "extra": "iterations: 500559\ncpu: 1393.60714720942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16175.951206995158,
            "unit": "ns/iter",
            "extra": "iterations: 50663\ncpu: 16175.04293073841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33935.12942245099,
            "unit": "ns/iter",
            "extra": "iterations: 24223\ncpu: 33933.71176154895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51087.95668629292,
            "unit": "ns/iter",
            "extra": "iterations: 16646\ncpu: 51087.10801393727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56019.391500001344,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56019.630000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70591.86942055187,
            "unit": "ns/iter",
            "extra": "iterations: 12322\ncpu: 70588.946599578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85553.42724458284,
            "unit": "ns/iter",
            "extra": "iterations: 10336\ncpu: 85550.33862229106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99161.8572386787,
            "unit": "ns/iter",
            "extra": "iterations: 8945\ncpu: 99156.29960872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115255.36636314799,
            "unit": "ns/iter",
            "extra": "iterations: 7468\ncpu: 115249.51794322455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1154.443144636066,
            "unit": "ns/iter",
            "extra": "iterations: 605132\ncpu: 1154.3863157129372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 965.3830966727076,
            "unit": "ns/iter",
            "extra": "iterations: 725159\ncpu: 965.3350506578543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 957.5199443997521,
            "unit": "ns/iter",
            "extra": "iterations: 730932\ncpu: 957.5380473149353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 945.472611014342,
            "unit": "ns/iter",
            "extra": "iterations: 735040\ncpu: 945.4241946016547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1843.0822221175154,
            "unit": "ns/iter",
            "extra": "iterations: 382014\ncpu: 1843.0743375897262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5175.56227,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5175.508000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 27880.090878220362,
            "unit": "ns/iter",
            "extra": "iterations: 29446\ncpu: 27880.398016708517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 21739.049515694303,
            "unit": "ns/iter",
            "extra": "iterations: 37786\ncpu: 21739.141480971783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 20207.44129403086,
            "unit": "ns/iter",
            "extra": "iterations: 40030\ncpu: 20207.369472895298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 20453.602565736808,
            "unit": "ns/iter",
            "extra": "iterations: 39209\ncpu: 20453.536177918355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64791.95100779649,
            "unit": "ns/iter",
            "extra": "iterations: 13594\ncpu: 64792.2024422538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 565211.9599999423,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565223.7000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 562023.0435914268,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 562019.4534808067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 558300.5151710811,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 558298.8379599737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 563034.2454780289,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 563045.0258397921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 336289.4067266465,
            "unit": "ns/iter",
            "extra": "iterations: 2557\ncpu: 336287.44622604636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 563948.3216602348,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 563942.1530479887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2431225.7421875335,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2431230.468749999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1105095.982227453,
            "unit": "ns/iter",
            "extra": "iterations: 844\ncpu: 1105088.9810426543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3384999.724637691,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3384965.9420289802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8561.184742198278,
            "unit": "ns/iter",
            "extra": "iterations: 100329\ncpu: 8561.164767913544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46807.91445310653,
            "unit": "ns/iter",
            "extra": "iterations: 17581\ncpu: 46808.77083214818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37097.014658987704,
            "unit": "ns/iter",
            "extra": "iterations: 22580\ncpu: 37096.705048715674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36011.80160277162,
            "unit": "ns/iter",
            "extra": "iterations: 23085\ncpu: 36011.912497292426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36056.18077006642,
            "unit": "ns/iter",
            "extra": "iterations: 22985\ncpu: 36056.85011964305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77719.56376436706,
            "unit": "ns/iter",
            "extra": "iterations: 11221\ncpu: 77719.65956688339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 598133.3920000225,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598137.3999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 589481.3678473999,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 589478.5422343339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 583189.5367498503,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 583200.6743088372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 584585.1813891045,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 584583.6817262307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 352545.92619334196,
            "unit": "ns/iter",
            "extra": "iterations: 2493\ncpu: 352546.77095868357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 582228.1803607296,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 582229.9265197021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2599012.679665608,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2598972.423398331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1153787.3791822116,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 1153787.484510531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5590.5729100004455,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5590.553999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29210.207690129886,
            "unit": "ns/iter",
            "extra": "iterations: 28244\ncpu: 29210.497804843617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23536.834109526186,
            "unit": "ns/iter",
            "extra": "iterations: 35644\ncpu: 23536.438110200732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22575.595016937485,
            "unit": "ns/iter",
            "extra": "iterations: 36604\ncpu: 22575.60102721028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22837.467781548487,
            "unit": "ns/iter",
            "extra": "iterations: 36237\ncpu: 22837.56657559949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64390.65986098358,
            "unit": "ns/iter",
            "extra": "iterations: 13812\ncpu: 64390.9064581525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 571061.9379999571,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571057.8000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 578222.6162386764,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 578203.74739764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 573254.8491182157,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 573210.7772697567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 571114.1625326192,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 571090.1436031339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 340602.6922480458,
            "unit": "ns/iter",
            "extra": "iterations: 2580\ncpu: 340588.3333333326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 563508.7341040367,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 563505.8445728967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 541.6699083218377,
            "unit": "ns/iter",
            "extra": "iterations: 1294092\ncpu: 541.6801896619393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3202.5250722205274,
            "unit": "ns/iter",
            "extra": "iterations: 218429\ncpu: 3202.524847891078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2579.514619258488,
            "unit": "ns/iter",
            "extra": "iterations: 271457\ncpu: 2579.4873589555373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2493.9900914374875,
            "unit": "ns/iter",
            "extra": "iterations: 294190\ncpu: 2493.990278391524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2015.279519729487,
            "unit": "ns/iter",
            "extra": "iterations: 348970\ncpu: 2015.3176490815788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17741.138604062402,
            "unit": "ns/iter",
            "extra": "iterations: 39400\ncpu: 17740.847715736094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30955.283904292555,
            "unit": "ns/iter",
            "extra": "iterations: 22652\ncpu: 30955.125375243308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7346.574713368506,
            "unit": "ns/iter",
            "extra": "iterations: 95244\ncpu: 7346.477468397034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7310.922155499304,
            "unit": "ns/iter",
            "extra": "iterations: 95087\ncpu: 7310.953127136164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7271.495036770205,
            "unit": "ns/iter",
            "extra": "iterations: 96409\ncpu: 7271.540001452219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14708.797254976767,
            "unit": "ns/iter",
            "extra": "iterations: 47577\ncpu: 14708.792063391946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13929.654606831695,
            "unit": "ns/iter",
            "extra": "iterations: 50360\ncpu: 13929.571088165241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5174.524578906398,
            "unit": "ns/iter",
            "extra": "iterations: 135421\ncpu: 5174.348882374129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26214.666866678053,
            "unit": "ns/iter",
            "extra": "iterations: 26665\ncpu: 26215.173448340287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20742.37237798692,
            "unit": "ns/iter",
            "extra": "iterations: 33705\ncpu: 20741.83355585245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20443.019429859185,
            "unit": "ns/iter",
            "extra": "iterations: 33711\ncpu: 20442.88214529376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21266.322303291126,
            "unit": "ns/iter",
            "extra": "iterations: 33031\ncpu: 21265.935030728353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51275.643462642736,
            "unit": "ns/iter",
            "extra": "iterations: 13920\ncpu: 51276.573275862254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156752.87647592614,
            "unit": "ns/iter",
            "extra": "iterations: 4404\ncpu: 156755.85831062656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132754.8682566602,
            "unit": "ns/iter",
            "extra": "iterations: 5283\ncpu: 132752.29982964287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130295.75879110297,
            "unit": "ns/iter",
            "extra": "iterations: 5261\ncpu: 130289.81182284893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130059.72998692928,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 130052.49113640511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82971.70227110964,
            "unit": "ns/iter",
            "extra": "iterations: 8454\ncpu: 82968.12159924171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131916.69589763164,
            "unit": "ns/iter",
            "extra": "iterations: 5314\ncpu: 131913.53029732936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5534.6855958957385,
            "unit": "ns/iter",
            "extra": "iterations: 126700\ncpu: 5534.696132596779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26636.05504273514,
            "unit": "ns/iter",
            "extra": "iterations: 26325\ncpu: 26636.193732193835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22613.86768743902,
            "unit": "ns/iter",
            "extra": "iterations: 30957\ncpu: 22613.425073489132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22327.761930346314,
            "unit": "ns/iter",
            "extra": "iterations: 31642\ncpu: 22326.93571834917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 23081.571316101657,
            "unit": "ns/iter",
            "extra": "iterations: 30484\ncpu: 23080.045269649265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51087.48855852346,
            "unit": "ns/iter",
            "extra": "iterations: 13722\ncpu: 51084.55764465871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151740.36064486354,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 151732.26590106092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128644.45222345598,
            "unit": "ns/iter",
            "extra": "iterations: 5442\ncpu: 128646.87614847453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128258.64698352834,
            "unit": "ns/iter",
            "extra": "iterations: 5470\ncpu: 128257.07495429653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128156.40948195971,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 128155.72030020141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82948.28377735062,
            "unit": "ns/iter",
            "extra": "iterations: 8408\ncpu: 82946.78877259714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129526.70113025786,
            "unit": "ns/iter",
            "extra": "iterations: 5397\ncpu: 129524.0318695565 ns\nthreads: 1"
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
        "date": 1705953669659,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1354.3553369103909,
            "unit": "ns/iter",
            "extra": "iterations: 492223\ncpu: 1354.310749396107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16061.732541179068,
            "unit": "ns/iter",
            "extra": "iterations: 51421\ncpu: 16061.402928764515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34148.17392733986,
            "unit": "ns/iter",
            "extra": "iterations: 24332\ncpu: 34147.143679105706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50703.535239918965,
            "unit": "ns/iter",
            "extra": "iterations: 16714\ncpu: 50701.818834510006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56403.311500002936,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56401.17 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70897.75261632107,
            "unit": "ns/iter",
            "extra": "iterations: 12422\ncpu: 70896.6350024151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84077.22302784094,
            "unit": "ns/iter",
            "extra": "iterations: 10344\ncpu: 84071.92575406028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98031.74619460526,
            "unit": "ns/iter",
            "extra": "iterations: 8869\ncpu: 98031.46916225058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115412.013123013,
            "unit": "ns/iter",
            "extra": "iterations: 7544\ncpu: 115406.74708377513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1152.2710150820235,
            "unit": "ns/iter",
            "extra": "iterations: 607409\ncpu: 1152.2613263879846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 952.0462206698429,
            "unit": "ns/iter",
            "extra": "iterations: 733503\ncpu: 951.9992419935578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 957.2859892574269,
            "unit": "ns/iter",
            "extra": "iterations: 746570\ncpu: 957.2790227306217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 927.2980100234074,
            "unit": "ns/iter",
            "extra": "iterations: 754431\ncpu: 927.3040211762241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1881.2621869040754,
            "unit": "ns/iter",
            "extra": "iterations: 371731\ncpu: 1881.17940123369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5485.490930000196,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5485.533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29477.39927167125,
            "unit": "ns/iter",
            "extra": "iterations: 28284\ncpu: 29476.35058690426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23043.131590081586,
            "unit": "ns/iter",
            "extra": "iterations: 35451\ncpu: 23042.534766297173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22389.540712156246,
            "unit": "ns/iter",
            "extra": "iterations: 36537\ncpu: 22388.584174945932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22473.353610068672,
            "unit": "ns/iter",
            "extra": "iterations: 36232\ncpu: 22472.96312651797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65045.87884516916,
            "unit": "ns/iter",
            "extra": "iterations: 13751\ncpu: 65043.02232564904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 570664.1049999916,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570647.9999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 565607.2330287509,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 565566.8407310701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 568437.0520155471,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 568425.5526658001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 561434.8893229574,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 561417.3177083334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 333627.9575379656,
            "unit": "ns/iter",
            "extra": "iterations: 2567\ncpu: 333609.1156992594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 569321.2220064747,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 568094.6278317143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2414632.6961039,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2414552.467532468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1108882.7044100056,
            "unit": "ns/iter",
            "extra": "iterations: 839\ncpu: 1108843.6233611437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3364042.5547442967,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3363817.5182481664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8522.21089565012,
            "unit": "ns/iter",
            "extra": "iterations: 98755\ncpu: 8521.881423725375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46732.31056353466,
            "unit": "ns/iter",
            "extra": "iterations: 17816\ncpu: 46730.191962280944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36620.70516208542,
            "unit": "ns/iter",
            "extra": "iterations: 22704\ncpu: 36618.63107822406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36073.68494693259,
            "unit": "ns/iter",
            "extra": "iterations: 23085\ncpu: 36071.75655187336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 35614.07683654898,
            "unit": "ns/iter",
            "extra": "iterations: 23114\ncpu: 35612.94886216159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77992.33464110513,
            "unit": "ns/iter",
            "extra": "iterations: 11215\ncpu: 77988.00713330394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 599882.4800000193,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 599829.3000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 601995.3731138711,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 601975.445816182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 594233.3875171634,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 594208.9163237333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 591214.5783378374,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 591165.3269754761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 355711.1495553573,
            "unit": "ns/iter",
            "extra": "iterations: 2474\ncpu: 355685.97413095983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 582243.8481605743,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 582200.8026755871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2573316.986072605,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2573191.6434540427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1123976.6065375342,
            "unit": "ns/iter",
            "extra": "iterations: 826\ncpu: 1123892.251815977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5464.081329999999,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5464.0260000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29001.544405347067,
            "unit": "ns/iter",
            "extra": "iterations: 28420\ncpu: 29000.760028149267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 22899.056578430984,
            "unit": "ns/iter",
            "extra": "iterations: 35738\ncpu: 22898.866752476413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22430.83862129486,
            "unit": "ns/iter",
            "extra": "iterations: 36498\ncpu: 22430.31398980782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22624.998899375667,
            "unit": "ns/iter",
            "extra": "iterations: 36343\ncpu: 22623.253446330837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63884.339382012935,
            "unit": "ns/iter",
            "extra": "iterations: 13722\ncpu: 63882.03614633429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 573044.5780000082,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573023.9999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 577182.6337475621,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 577159.4506213206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 574775.0530104379,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 574733.9005235607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 574104.2356021055,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 574080.5628272261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 342492.5960342223,
            "unit": "ns/iter",
            "extra": "iterations: 2572\ncpu: 342473.01710730913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 566483.4086507029,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 566437.4435119445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 541.369881779039,
            "unit": "ns/iter",
            "extra": "iterations: 1290634\ncpu: 541.3609125437595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3205.2072107967356,
            "unit": "ns/iter",
            "extra": "iterations: 218367\ncpu: 3205.04700801862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2569.9204434710605,
            "unit": "ns/iter",
            "extra": "iterations: 278079\ncpu: 2569.7366575685282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2572.1167947296353,
            "unit": "ns/iter",
            "extra": "iterations: 271091\ncpu: 2571.9455828485584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1959.2896823498547,
            "unit": "ns/iter",
            "extra": "iterations: 355265\ncpu: 1959.2619593824284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17560.79751376374,
            "unit": "ns/iter",
            "extra": "iterations: 40141\ncpu: 17560.905308786445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30819.757330949597,
            "unit": "ns/iter",
            "extra": "iterations: 22405\ncpu: 30818.8529346122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7286.939478275371,
            "unit": "ns/iter",
            "extra": "iterations: 96296\ncpu: 7286.635997341561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7208.244393508167,
            "unit": "ns/iter",
            "extra": "iterations: 96852\ncpu: 7207.695246355347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7216.5157256651455,
            "unit": "ns/iter",
            "extra": "iterations: 97166\ncpu: 7216.166148652827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14992.750213364461,
            "unit": "ns/iter",
            "extra": "iterations: 46868\ncpu: 14992.107621404788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13983.474319392531,
            "unit": "ns/iter",
            "extra": "iterations: 49882\ncpu: 13982.809430255416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5127.410999577054,
            "unit": "ns/iter",
            "extra": "iterations: 137078\ncpu: 5127.032054742551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26329.44828753123,
            "unit": "ns/iter",
            "extra": "iterations: 26599\ncpu: 26328.06120530873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20687.463713836616,
            "unit": "ns/iter",
            "extra": "iterations: 33911\ncpu: 20686.951136799355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20505.433790622563,
            "unit": "ns/iter",
            "extra": "iterations: 34187\ncpu: 20504.35838184132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21228.53716277684,
            "unit": "ns/iter",
            "extra": "iterations: 32990\ncpu: 21227.38102455257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50216.05409084026,
            "unit": "ns/iter",
            "extra": "iterations: 13958\ncpu: 50212.19372402912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155151.12244898142,
            "unit": "ns/iter",
            "extra": "iterations: 4508\ncpu: 155143.38952972688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131688.3271186257,
            "unit": "ns/iter",
            "extra": "iterations: 5310\ncpu: 131687.53295668637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131127.9632050798,
            "unit": "ns/iter",
            "extra": "iterations: 5354\ncpu: 131126.16735151308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131336.6133508414,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 131331.10819426193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83696.635333414,
            "unit": "ns/iter",
            "extra": "iterations: 8383\ncpu: 83690.26601455377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132028.71114037858,
            "unit": "ns/iter",
            "extra": "iterations: 5314\ncpu: 132020.6059465549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5046.204069738331,
            "unit": "ns/iter",
            "extra": "iterations: 138977\ncpu: 5045.896803068164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25348.255820754115,
            "unit": "ns/iter",
            "extra": "iterations: 27359\ncpu: 25346.807266347627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21690.893056885176,
            "unit": "ns/iter",
            "extra": "iterations: 32363\ncpu: 21690.340821307924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21764.849727452744,
            "unit": "ns/iter",
            "extra": "iterations: 32288\ncpu: 21763.51895441049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21597.346177536758,
            "unit": "ns/iter",
            "extra": "iterations: 32466\ncpu: 21597.21246842852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 52286.01810018103,
            "unit": "ns/iter",
            "extra": "iterations: 14254\ncpu: 52142.47930405461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154563.97221610337,
            "unit": "ns/iter",
            "extra": "iterations: 4535\ncpu: 154555.43550165417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130608.4457921353,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 130605.05691360262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128675.34350864451,
            "unit": "ns/iter",
            "extra": "iterations: 5438\ncpu: 128676.24126516984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128846.06445098805,
            "unit": "ns/iter",
            "extra": "iterations: 5446\ncpu: 128839.5886889476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83235.97765629651,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 83232.0418350364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130537.16626190653,
            "unit": "ns/iter",
            "extra": "iterations: 5353\ncpu: 130527.06893330986 ns\nthreads: 1"
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
        "date": 1705955734228,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1357.0945712563548,
            "unit": "ns/iter",
            "extra": "iterations: 517652\ncpu: 1357.0259556613325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15950.704719413927,
            "unit": "ns/iter",
            "extra": "iterations: 50430\ncpu: 15950.396589331749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34074.77584156887,
            "unit": "ns/iter",
            "extra": "iterations: 24389\ncpu: 34062.14686949036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50330.08328832943,
            "unit": "ns/iter",
            "extra": "iterations: 16665\ncpu: 50328.9768976898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56329.008000000154,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56328.289999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71153.72560238068,
            "unit": "ns/iter",
            "extra": "iterations: 12409\ncpu: 71152.57474413734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83926.98581907245,
            "unit": "ns/iter",
            "extra": "iterations: 10225\ncpu: 83923.8239608802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97631.57845353043,
            "unit": "ns/iter",
            "extra": "iterations: 8846\ncpu: 97630.63531539681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112963.5072388204,
            "unit": "ns/iter",
            "extra": "iterations: 7667\ncpu: 112960.23216381889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1141.4551966462739,
            "unit": "ns/iter",
            "extra": "iterations: 611606\ncpu: 1141.4464540897247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 967.4439994205937,
            "unit": "ns/iter",
            "extra": "iterations: 718064\ncpu: 967.4198957196022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 957.849052098097,
            "unit": "ns/iter",
            "extra": "iterations: 732829\ncpu: 957.8390047337099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 947.5360826836489,
            "unit": "ns/iter",
            "extra": "iterations: 738526\ncpu: 947.5078737918514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1968.981293799182,
            "unit": "ns/iter",
            "extra": "iterations: 376720\ncpu: 1968.962624761096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5495.117740000524,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5495.116000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 28970.856161231346,
            "unit": "ns/iter",
            "extra": "iterations: 28233\ncpu: 28970.495519427608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23079.53478788538,
            "unit": "ns/iter",
            "extra": "iterations: 35429\ncpu: 23079.33331451638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22481.29581632203,
            "unit": "ns/iter",
            "extra": "iterations: 36499\ncpu: 22480.851530178894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22761.803694832353,
            "unit": "ns/iter",
            "extra": "iterations: 36321\ncpu: 22761.776933454476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65138.04661511778,
            "unit": "ns/iter",
            "extra": "iterations: 13708\ncpu: 65137.35045229075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 581294.5949999176,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581287.4999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 560365.1842959287,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 560356.1972744967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 561179.4419355061,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 561170.5806451631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 566233.8335500372,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 566224.447334202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 334425.51648773515,
            "unit": "ns/iter",
            "extra": "iterations: 2608\ncpu: 334411.84815950855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 562165.0580270778,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 562153.1914893633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2420992.761038816,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2420922.3376623364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1135156.3501229072,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 1135111.179361178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3373507.689780724,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3373207.299270075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8568.160662231268,
            "unit": "ns/iter",
            "extra": "iterations: 98455\ncpu: 8567.584175511669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46699.219634605084,
            "unit": "ns/iter",
            "extra": "iterations: 17734\ncpu: 46696.53772414565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36517.54475848755,
            "unit": "ns/iter",
            "extra": "iterations: 22856\ncpu: 36515.44889744487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36449.850404369994,
            "unit": "ns/iter",
            "extra": "iterations: 22875\ncpu: 36447.956284153115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36105.09291017419,
            "unit": "ns/iter",
            "extra": "iterations: 23033\ncpu: 36103.55142621456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77276.75512923028,
            "unit": "ns/iter",
            "extra": "iterations: 11259\ncpu: 77272.34212629891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 597378.1080000435,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597333.8000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 594254.4972714289,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 594216.5757162306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 589899.7574728936,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 589865.2853260898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 584679.9015614154,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 584647.9293957916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 350718.8287671196,
            "unit": "ns/iter",
            "extra": "iterations: 2482\ncpu: 350697.6631748575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 584547.1048063457,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 584507.4098798389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2585666.9555556285,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2585512.500000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1169596.4609571013,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 1169513.6020151065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5418.124819999548,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5417.818999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29151.12896860391,
            "unit": "ns/iter",
            "extra": "iterations: 28379\ncpu: 29149.8678600374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23032.007280261827,
            "unit": "ns/iter",
            "extra": "iterations: 35713\ncpu: 23030.767507630095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22420.975937141982,
            "unit": "ns/iter",
            "extra": "iterations: 36654\ncpu: 22420.221531074432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22453.20964967325,
            "unit": "ns/iter",
            "extra": "iterations: 36623\ncpu: 22451.72159571865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63377.27762704578,
            "unit": "ns/iter",
            "extra": "iterations: 13637\ncpu: 63372.992593679126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 577930.4540000112,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577931.1000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 573020.9520367851,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 572986.5308804186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 566286.4430709241,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 566265.6473649957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 567946.298188839,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 567915.3298835717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 340816.5804953555,
            "unit": "ns/iter",
            "extra": "iterations: 2584\ncpu: 340812.0743034062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 562617.3576031253,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 562586.7268041238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 550.3413510024326,
            "unit": "ns/iter",
            "extra": "iterations: 1273188\ncpu: 550.3114229791688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3218.4219117538632,
            "unit": "ns/iter",
            "extra": "iterations: 217664\ncpu: 3218.246012202282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2539.8486148369625,
            "unit": "ns/iter",
            "extra": "iterations: 278812\ncpu: 2539.6822948797094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2486.2804681683924,
            "unit": "ns/iter",
            "extra": "iterations: 281950\ncpu: 2486.1035644617887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2121.993469276704,
            "unit": "ns/iter",
            "extra": "iterations: 352794\ncpu: 2121.894363282815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17562.079416042954,
            "unit": "ns/iter",
            "extra": "iterations: 39866\ncpu: 17562.105553604517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30772.653479695477,
            "unit": "ns/iter",
            "extra": "iterations: 22775\ncpu: 30771.1086717892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7286.146390521582,
            "unit": "ns/iter",
            "extra": "iterations: 95457\ncpu: 7285.258283834713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7147.616966738596,
            "unit": "ns/iter",
            "extra": "iterations: 97921\ncpu: 7147.209485197271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7186.936313100416,
            "unit": "ns/iter",
            "extra": "iterations: 97681\ncpu: 7186.487648570439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14805.102043839079,
            "unit": "ns/iter",
            "extra": "iterations: 47264\ncpu: 14804.220971564135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13917.62788982791,
            "unit": "ns/iter",
            "extra": "iterations: 50176\ncpu: 13916.659359056172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5103.551781359876,
            "unit": "ns/iter",
            "extra": "iterations: 137395\ncpu: 5103.451362858932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26184.622920792794,
            "unit": "ns/iter",
            "extra": "iterations: 26753\ncpu: 26184.203640713353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20560.735657546553,
            "unit": "ns/iter",
            "extra": "iterations: 33990\ncpu: 20560.741394527973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20420.977834087676,
            "unit": "ns/iter",
            "extra": "iterations: 34332\ncpu: 20419.684259583104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21027.59088177022,
            "unit": "ns/iter",
            "extra": "iterations: 33274\ncpu: 21026.723567950863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49180.195178523514,
            "unit": "ns/iter",
            "extra": "iterations: 14228\ncpu: 49179.23812201269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 153863.07785888348,
            "unit": "ns/iter",
            "extra": "iterations: 4521\ncpu: 153861.46870161392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 129933.5763914928,
            "unit": "ns/iter",
            "extra": "iterations: 5354\ncpu: 129924.85991782104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130038.45814564853,
            "unit": "ns/iter",
            "extra": "iterations: 5328\ncpu: 130031.43768768782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130331.74125352479,
            "unit": "ns/iter",
            "extra": "iterations: 5345\ncpu: 130322.45088868092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83647.53908484112,
            "unit": "ns/iter",
            "extra": "iterations: 8392\ncpu: 83642.34985700755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131402.25018799072,
            "unit": "ns/iter",
            "extra": "iterations: 5320\ncpu: 131402.27443608968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5297.4185274962265,
            "unit": "ns/iter",
            "extra": "iterations: 132020\ncpu: 5297.10119678839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25666.856273958052,
            "unit": "ns/iter",
            "extra": "iterations: 27128\ncpu: 25665.85815393661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21477.52055764077,
            "unit": "ns/iter",
            "extra": "iterations: 32494\ncpu: 21476.30639502659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21144.21980270337,
            "unit": "ns/iter",
            "extra": "iterations: 32743\ncpu: 21143.10845066121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22433.149522026677,
            "unit": "ns/iter",
            "extra": "iterations: 31487\ncpu: 22431.724203639933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49932.18504806351,
            "unit": "ns/iter",
            "extra": "iterations: 14045\ncpu: 49931.5984336062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152063.4299411734,
            "unit": "ns/iter",
            "extra": "iterations: 4589\ncpu: 152053.03987796762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128094.49208104389,
            "unit": "ns/iter",
            "extra": "iterations: 5430\ncpu: 128087.14548802828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129677.3216874245,
            "unit": "ns/iter",
            "extra": "iterations: 5381\ncpu: 129669.13213157568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128711.4414198965,
            "unit": "ns/iter",
            "extra": "iterations: 5437\ncpu: 128703.58653669301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83087.03336510145,
            "unit": "ns/iter",
            "extra": "iterations: 8392\ncpu: 83086.20114394577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129563.52293408426,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 129561.26276694646 ns\nthreads: 1"
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
        "date": 1705957261311,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1356.2287005292003,
            "unit": "ns/iter",
            "extra": "iterations: 486221\ncpu: 1355.9944963298583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 15943.334431631121,
            "unit": "ns/iter",
            "extra": "iterations: 52202\ncpu: 15942.241676564116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34115.57576500441,
            "unit": "ns/iter",
            "extra": "iterations: 24477\ncpu: 34112.052130571574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50307.56431757514,
            "unit": "ns/iter",
            "extra": "iterations: 16815\ncpu: 50304.52572108237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55791.39059999534,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55786.91999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70491.41097649216,
            "unit": "ns/iter",
            "extra": "iterations: 12463\ncpu: 70486.00657947524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83400.10524290703,
            "unit": "ns/iter",
            "extra": "iterations: 10395\ncpu: 83393.0062530063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96896.05661012972,
            "unit": "ns/iter",
            "extra": "iterations: 8903\ncpu: 96889.57654723122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 112998.81844608697,
            "unit": "ns/iter",
            "extra": "iterations: 7568\ncpu: 112990.85623678658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1148.674435590629,
            "unit": "ns/iter",
            "extra": "iterations: 606519\ncpu: 1148.5620401009712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 940.5305067551052,
            "unit": "ns/iter",
            "extra": "iterations: 745212\ncpu: 940.4768039162004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 938.5514875026507,
            "unit": "ns/iter",
            "extra": "iterations: 749444\ncpu: 938.5072133474945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 927.9167906638139,
            "unit": "ns/iter",
            "extra": "iterations: 753377\ncpu: 927.8797998877052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1865.2363443543825,
            "unit": "ns/iter",
            "extra": "iterations: 372465\ncpu: 1865.1357845703626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5442.292509999334,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5442.146000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30883.867899797468,
            "unit": "ns/iter",
            "extra": "iterations: 27464\ncpu: 30883.003204194585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23320.862564363342,
            "unit": "ns/iter",
            "extra": "iterations: 35151\ncpu: 23320.110380928014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22751.429575598468,
            "unit": "ns/iter",
            "extra": "iterations: 34001\ncpu: 22750.363224610992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22866.461771218124,
            "unit": "ns/iter",
            "extra": "iterations: 35693\ncpu: 22865.161236096792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64045.7111756138,
            "unit": "ns/iter",
            "extra": "iterations: 13780\ncpu: 64041.36429608133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 562377.7479999034,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562370.7000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 564783.8282168729,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 564754.9314173736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 561062.1189398955,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 561023.4001292806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 558057.4793013963,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 558028.5899094442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 335418.570601865,
            "unit": "ns/iter",
            "extra": "iterations: 2592\ncpu: 335401.77469135897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 566530.7772020564,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 566481.347150258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2426942.311518498,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2426440.8376963283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1115952.280912427,
            "unit": "ns/iter",
            "extra": "iterations: 833\ncpu: 1115894.3577430965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3389180.3186813276,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3388915.3846153873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8563.708145072911,
            "unit": "ns/iter",
            "extra": "iterations: 98268\ncpu: 8562.982863190462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46228.9267940492,
            "unit": "ns/iter",
            "extra": "iterations: 18004\ncpu: 46225.02777160641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36613.56096915432,
            "unit": "ns/iter",
            "extra": "iterations: 22659\ncpu: 36611.02431704849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36541.88059701733,
            "unit": "ns/iter",
            "extra": "iterations: 23048\ncpu: 36538.931794515905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36180.69829304189,
            "unit": "ns/iter",
            "extra": "iterations: 23082\ncpu: 36179.00528550384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77936.87186731331,
            "unit": "ns/iter",
            "extra": "iterations: 10973\ncpu: 77935.21370636999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 605483.376000052,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605463.2000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 600645.1540055189,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 600621.8232044193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 596584.2756756649,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 596551.6891891899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 596055.0842465257,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 596040.4794520547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 353578.7621753468,
            "unit": "ns/iter",
            "extra": "iterations: 2464\ncpu: 353560.2272727268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 586463.3442513118,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 586435.4946524068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2590089.565826468,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2590038.375350132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1146218.6979038168,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 1146093.5881627607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5596.3333099998645,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5596.177999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29137.73475266757,
            "unit": "ns/iter",
            "extra": "iterations: 28464\ncpu: 29136.38982574488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23162.71512254396,
            "unit": "ns/iter",
            "extra": "iterations: 36191\ncpu: 23161.634107927446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22527.07300860739,
            "unit": "ns/iter",
            "extra": "iterations: 36708\ncpu: 22526.57731284743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22708.08579264959,
            "unit": "ns/iter",
            "extra": "iterations: 36460\ncpu: 22707.026878771252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63954.210780727335,
            "unit": "ns/iter",
            "extra": "iterations: 13654\ncpu: 63950.600556613535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 576300.4020000153,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576238.8999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 579390.665346575,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 579357.7557755776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 575855.8590163315,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 575830.2950819684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 571437.2171353301,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 571409.4833224303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 340725.0339375251,
            "unit": "ns/iter",
            "extra": "iterations: 2593\ncpu: 340708.52294639504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 568716.5637886744,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 568673.7113402074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 532.0333337886963,
            "unit": "ns/iter",
            "extra": "iterations: 1317612\ncpu: 532.0224770266195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3216.0450995050733,
            "unit": "ns/iter",
            "extra": "iterations: 218029\ncpu: 3216.013924753135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2588.2003724489596,
            "unit": "ns/iter",
            "extra": "iterations: 281381\ncpu: 2588.1075836676964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2630.024357183992,
            "unit": "ns/iter",
            "extra": "iterations: 292891\ncpu: 2629.8623037239104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1997.792432758457,
            "unit": "ns/iter",
            "extra": "iterations: 351568\ncpu: 1997.7381331634328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17641.561584167335,
            "unit": "ns/iter",
            "extra": "iterations: 39718\ncpu: 17641.40188327706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29510.778837227263,
            "unit": "ns/iter",
            "extra": "iterations: 23702\ncpu: 29510.032908615478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7276.849867950993,
            "unit": "ns/iter",
            "extra": "iterations: 96555\ncpu: 7276.285018901038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7273.9999061448925,
            "unit": "ns/iter",
            "extra": "iterations: 95892\ncpu: 7273.630751261892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7216.521729682827,
            "unit": "ns/iter",
            "extra": "iterations: 96642\ncpu: 7216.05720080295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14723.793029500555,
            "unit": "ns/iter",
            "extra": "iterations: 49896\ncpu: 14722.947731281163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13996.732761915358,
            "unit": "ns/iter",
            "extra": "iterations: 54951\ncpu: 13996.171134283162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5165.364083859026,
            "unit": "ns/iter",
            "extra": "iterations: 135705\ncpu: 5165.1619321322305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26270.434816839872,
            "unit": "ns/iter",
            "extra": "iterations: 26671\ncpu: 26269.761163810428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20753.87026512298,
            "unit": "ns/iter",
            "extra": "iterations: 33607\ncpu: 20752.5485761895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20497.763211115787,
            "unit": "ns/iter",
            "extra": "iterations: 34119\ncpu: 20496.629444004895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21047.25140758169,
            "unit": "ns/iter",
            "extra": "iterations: 33213\ncpu: 21045.14497335388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49721.7881325876,
            "unit": "ns/iter",
            "extra": "iterations: 14089\ncpu: 49720.63311803523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155751.69545859768,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 155741.8076580583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131468.64757790542,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 131461.84754036678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131103.2139378106,
            "unit": "ns/iter",
            "extra": "iterations: 5338\ncpu: 131087.82315473957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130372.59168065802,
            "unit": "ns/iter",
            "extra": "iterations: 5361\ncpu: 130362.18988994553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82883.84569732983,
            "unit": "ns/iter",
            "extra": "iterations: 8425\ncpu: 82881.9228486646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130323.67985812936,
            "unit": "ns/iter",
            "extra": "iterations: 5357\ncpu: 130322.2512600339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5039.069327746241,
            "unit": "ns/iter",
            "extra": "iterations: 139367\ncpu: 5038.487590319079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25531.849762878133,
            "unit": "ns/iter",
            "extra": "iterations: 27623\ncpu: 25530.525286898737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20396.21581534205,
            "unit": "ns/iter",
            "extra": "iterations: 34182\ncpu: 20395.038324264213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21520.706653535257,
            "unit": "ns/iter",
            "extra": "iterations: 32494\ncpu: 21520.037545393046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22092.394447418075,
            "unit": "ns/iter",
            "extra": "iterations: 31733\ncpu: 22091.869662496454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48716.201663631735,
            "unit": "ns/iter",
            "extra": "iterations: 14306\ncpu: 48714.11994967089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153093.8480069981,
            "unit": "ns/iter",
            "extra": "iterations: 4566\ncpu: 153089.07139728498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128357.79486238674,
            "unit": "ns/iter",
            "extra": "iterations: 5450\ncpu: 128352.58715596276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128337.23621037652,
            "unit": "ns/iter",
            "extra": "iterations: 5457\ncpu: 128335.60564412795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128292.68417200929,
            "unit": "ns/iter",
            "extra": "iterations: 5465\ncpu: 128285.43458371387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83507.43227424899,
            "unit": "ns/iter",
            "extra": "iterations: 8372\ncpu: 83504.65838509302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128278.3634200066,
            "unit": "ns/iter",
            "extra": "iterations: 5462\ncpu: 128273.30648114318 ns\nthreads: 1"
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
        "date": 1705959041267,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1364.1341235788414,
            "unit": "ns/iter",
            "extra": "iterations: 505750\ncpu: 1364.1059812160158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16252.665966305156,
            "unit": "ns/iter",
            "extra": "iterations: 51402\ncpu: 16252.11664915762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35225.46703366011,
            "unit": "ns/iter",
            "extra": "iterations: 23797\ncpu: 35224.79724335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51896.78895218997,
            "unit": "ns/iter",
            "extra": "iterations: 16148\ncpu: 51896.569234580136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58046.9035999954,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58046.59000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72055.05110520292,
            "unit": "ns/iter",
            "extra": "iterations: 12034\ncpu: 72053.7394050191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87700.99164400926,
            "unit": "ns/iter",
            "extra": "iterations: 9933\ncpu: 87697.05023658511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99449.11230131675,
            "unit": "ns/iter",
            "extra": "iterations: 8682\ncpu: 99446.29117714816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115443.04782491425,
            "unit": "ns/iter",
            "extra": "iterations: 7402\ncpu: 115440.24587949192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1164.0126460988156,
            "unit": "ns/iter",
            "extra": "iterations: 601134\ncpu: 1163.9882289140187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 949.3624584784945,
            "unit": "ns/iter",
            "extra": "iterations: 736065\ncpu: 949.3187422306454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 941.6224203644477,
            "unit": "ns/iter",
            "extra": "iterations: 746714\ncpu: 941.5966487838716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 931.4097482648606,
            "unit": "ns/iter",
            "extra": "iterations: 746102\ncpu: 931.4079040131236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1859.6013441291395,
            "unit": "ns/iter",
            "extra": "iterations: 374220\ncpu: 1859.6023729357091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5512.502150000955,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5512.221999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29695.254385013504,
            "unit": "ns/iter",
            "extra": "iterations: 27765\ncpu: 29693.495407887618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22973.930707512664,
            "unit": "ns/iter",
            "extra": "iterations: 35646\ncpu: 22973.53700274927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 21781.931540666144,
            "unit": "ns/iter",
            "extra": "iterations: 37672\ncpu: 21781.545975791058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 21923.410073098996,
            "unit": "ns/iter",
            "extra": "iterations: 37347\ncpu: 21923.046027793425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66026.23458679594,
            "unit": "ns/iter",
            "extra": "iterations: 13722\ncpu: 66022.89753680209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 574776.3000000531,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574756.7000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 577759.1867835873,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 577727.3769386385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 558198.7784237957,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 558182.2351421181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 574427.297900242,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 574402.4934383199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 334782.99845500744,
            "unit": "ns/iter",
            "extra": "iterations: 2589\ncpu: 334753.1865585161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 574855.5205843529,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 574815.9362549792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2426776.592689354,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2426596.3446475156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1126393.8507281702,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 1126357.888349516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3358247.9563636463,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3358050.545454538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8469.887952424524,
            "unit": "ns/iter",
            "extra": "iterations: 97530\ncpu: 8469.69240233773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47508.28662201614,
            "unit": "ns/iter",
            "extra": "iterations: 17469\ncpu: 47506.417081687636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36661.701501130374,
            "unit": "ns/iter",
            "extra": "iterations: 22583\ncpu: 36660.0274542798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36007.42371561959,
            "unit": "ns/iter",
            "extra": "iterations: 23124\ncpu: 36005.97215014715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 35698.205264523545,
            "unit": "ns/iter",
            "extra": "iterations: 23136\ncpu: 35695.96300138306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77893.59104290813,
            "unit": "ns/iter",
            "extra": "iterations: 11209\ncpu: 77796.22624676625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 614971.4349999159,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 614913.7999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 617068.0784594028,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 617030.8131241046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 592744.5084976397,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 592713.0523453437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 608241.1666666125,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 608218.8981868885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 352514.53574267926,
            "unit": "ns/iter",
            "extra": "iterations: 2518\ncpu: 352504.0905480528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 594455.8506448966,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 594437.8818737286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2592348.0446926835,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2592344.9720670483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1125717.1690821494,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 1125708.6956521745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5380.200879999393,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5380.256999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29408.13623499662,
            "unit": "ns/iter",
            "extra": "iterations: 27915\ncpu: 29407.723446175776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23576.509929016378,
            "unit": "ns/iter",
            "extra": "iterations: 34797\ncpu: 23576.75374313886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22675.83371191156,
            "unit": "ns/iter",
            "extra": "iterations: 36100\ncpu: 22676.041551246515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22772.696029363924,
            "unit": "ns/iter",
            "extra": "iterations: 35964\ncpu: 22772.208319430538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64164.72466340913,
            "unit": "ns/iter",
            "extra": "iterations: 13518\ncpu: 64161.85086551299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 590515.3689999451,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590521.5000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 595250.375256348,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 595248.4620642522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 575098.7071240438,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 575075.6596306079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 585535.6203209216,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 585510.3609625661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 343282.1348183224,
            "unit": "ns/iter",
            "extra": "iterations: 2559\ncpu: 343281.12543962663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 583323.0040187725,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 583256.9993302068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 549.1251905933852,
            "unit": "ns/iter",
            "extra": "iterations: 1282836\ncpu: 549.1058872685207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3215.8851957899874,
            "unit": "ns/iter",
            "extra": "iterations: 217222\ncpu: 3215.787535332512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2476.266991579101,
            "unit": "ns/iter",
            "extra": "iterations: 282743\ncpu: 2476.2010023236585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2482.8880440064777,
            "unit": "ns/iter",
            "extra": "iterations: 281959\ncpu: 2482.9109906050294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1972.7985904034222,
            "unit": "ns/iter",
            "extra": "iterations: 355137\ncpu: 1972.7983848486788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17652.390700023258,
            "unit": "ns/iter",
            "extra": "iterations: 39570\ncpu: 17652.340156684444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31011.277918050568,
            "unit": "ns/iter",
            "extra": "iterations: 22575\ncpu: 31010.790697674805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7372.058419569547,
            "unit": "ns/iter",
            "extra": "iterations: 95088\ncpu: 7371.983846542152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7276.3034952853095,
            "unit": "ns/iter",
            "extra": "iterations: 96387\ncpu: 7276.138898399156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7289.788079263481,
            "unit": "ns/iter",
            "extra": "iterations: 95984\ncpu: 7289.679529921566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15033.28493608962,
            "unit": "ns/iter",
            "extra": "iterations: 46628\ncpu: 15033.267564553442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14162.861859306804,
            "unit": "ns/iter",
            "extra": "iterations: 49341\ncpu: 14162.866581544651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5177.690998445141,
            "unit": "ns/iter",
            "extra": "iterations: 135721\ncpu: 5177.62468593656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26825.45009911692,
            "unit": "ns/iter",
            "extra": "iterations: 26232\ncpu: 26824.824641659143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21024.266331507668,
            "unit": "ns/iter",
            "extra": "iterations: 33417\ncpu: 21024.065595355813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20642.367460973004,
            "unit": "ns/iter",
            "extra": "iterations: 33824\ncpu: 20642.336802270685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21329.884507213064,
            "unit": "ns/iter",
            "extra": "iterations: 32712\ncpu: 21329.48459280958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49478.5238500241,
            "unit": "ns/iter",
            "extra": "iterations: 14109\ncpu: 49476.51853426923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159314.55745166502,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 159313.26507394668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134511.2000383733,
            "unit": "ns/iter",
            "extra": "iterations: 5214\ncpu: 134509.68546221516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130863.84245934577,
            "unit": "ns/iter",
            "extra": "iterations: 5351\ncpu: 130860.30648476844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132629.93848193318,
            "unit": "ns/iter",
            "extra": "iterations: 5283\ncpu: 132625.59151996908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83983.96199952842,
            "unit": "ns/iter",
            "extra": "iterations: 8342\ncpu: 83981.22752337583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133569.07038740395,
            "unit": "ns/iter",
            "extra": "iterations: 5214\ncpu: 133566.28308400404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5038.588642348308,
            "unit": "ns/iter",
            "extra": "iterations: 137863\ncpu: 5038.406969237497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25624.042921275424,
            "unit": "ns/iter",
            "extra": "iterations: 27399\ncpu: 25622.197890433676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21516.525256874098,
            "unit": "ns/iter",
            "extra": "iterations: 32506\ncpu: 21515.181812588307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21683.38589327256,
            "unit": "ns/iter",
            "extra": "iterations: 32325\ncpu: 21681.617942768542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21866.55681889329,
            "unit": "ns/iter",
            "extra": "iterations: 31926\ncpu: 21865.817828728705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49339.29408033357,
            "unit": "ns/iter",
            "extra": "iterations: 14190\ncpu: 49335.369978857714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 157246.52848810737,
            "unit": "ns/iter",
            "extra": "iterations: 4458\ncpu: 157237.05697622235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131331.75936329455,
            "unit": "ns/iter",
            "extra": "iterations: 5340\ncpu: 131319.34456928773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129641.43579765534,
            "unit": "ns/iter",
            "extra": "iterations: 5397\ncpu: 129638.79933296303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 131989.5840090657,
            "unit": "ns/iter",
            "extra": "iterations: 5303\ncpu: 131984.97077126388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83747.02955194622,
            "unit": "ns/iter",
            "extra": "iterations: 8392\ncpu: 83747.28312678853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 133146.67375615312,
            "unit": "ns/iter",
            "extra": "iterations: 5266\ncpu: 133144.13216862676 ns\nthreads: 1"
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
        "date": 1705960613984,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1395.7189622669662,
            "unit": "ns/iter",
            "extra": "iterations: 501285\ncpu: 1395.6148697846534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16282.20171327142,
            "unit": "ns/iter",
            "extra": "iterations: 50780\ncpu: 16280.842851516347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34766.48092083032,
            "unit": "ns/iter",
            "extra": "iterations: 23848\ncpu: 34762.71804763502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51363.61594956939,
            "unit": "ns/iter",
            "extra": "iterations: 16339\ncpu: 51358.730644470284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57004.35719999178,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56999.98000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71557.76346986776,
            "unit": "ns/iter",
            "extra": "iterations: 12231\ncpu: 71551.0260812689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85641.50758024203,
            "unit": "ns/iter",
            "extra": "iterations: 10158\ncpu: 85631.69915337668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98912.30030679516,
            "unit": "ns/iter",
            "extra": "iterations: 8801\ncpu: 98903.94273378028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114389.90979040532,
            "unit": "ns/iter",
            "extra": "iterations: 7538\ncpu: 114380.63146723261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1151.4936241130765,
            "unit": "ns/iter",
            "extra": "iterations: 607837\ncpu: 1151.3757800199724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 964.8401497727752,
            "unit": "ns/iter",
            "extra": "iterations: 726968\ncpu: 964.8016143764225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 942.894830498808,
            "unit": "ns/iter",
            "extra": "iterations: 742915\ncpu: 942.7927824852104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 941.4308008099031,
            "unit": "ns/iter",
            "extra": "iterations: 746844\ncpu: 941.3510719775472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1869.1419602175317,
            "unit": "ns/iter",
            "extra": "iterations: 375091\ncpu: 1868.959532486788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5528.890180000872,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5528.484999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29130.492757198153,
            "unit": "ns/iter",
            "extra": "iterations: 28373\ncpu: 29128.735065026587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22982.675053460294,
            "unit": "ns/iter",
            "extra": "iterations: 36009\ncpu: 22980.71315504455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22363.59127352017,
            "unit": "ns/iter",
            "extra": "iterations: 36670\ncpu: 22361.810744477734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22368.92874612988,
            "unit": "ns/iter",
            "extra": "iterations: 36798\ncpu: 22367.036251970283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65258.3255336345,
            "unit": "ns/iter",
            "extra": "iterations: 13633\ncpu: 65252.02083180525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 564912.4289999463,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564892.099999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 565552.6785022354,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 565512.2014202719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 567017.3352864498,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 566966.5364583336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 568250.0973855841,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 568176.7320261436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 334693.5055195961,
            "unit": "ns/iter",
            "extra": "iterations: 2627\ncpu: 334684.5451084899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 568798.070504539,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 568422.2509702443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2668735.5183245703,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2668453.4031413626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1129217.1909424963,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 1129180.4161566696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3408915.2454213775,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3408817.2161172144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8511.50656332405,
            "unit": "ns/iter",
            "extra": "iterations: 98959\ncpu: 8511.219798098231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47675.118299865564,
            "unit": "ns/iter",
            "extra": "iterations: 17481\ncpu: 47674.58955437345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36782.37008258333,
            "unit": "ns/iter",
            "extra": "iterations: 22522\ncpu: 36781.67569487602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 35880.880683539726,
            "unit": "ns/iter",
            "extra": "iterations: 23115\ncpu: 35880.33311702328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36050.28494740207,
            "unit": "ns/iter",
            "extra": "iterations: 23099\ncpu: 36048.603835664035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78182.41002399681,
            "unit": "ns/iter",
            "extra": "iterations: 11253\ncpu: 78180.96507597958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 605119.3319999584,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605118.8999999937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 597881.0227272676,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 597868.5950413239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 589060.5742778545,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 589021.5955983524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 592411.0783783706,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 592410.3378378361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 351739.89681275684,
            "unit": "ns/iter",
            "extra": "iterations: 2510\ncpu: 351733.6653386458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 580696.2337317673,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 580669.6547144742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2590437.7972220043,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2590358.611111101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1150822.223181168,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 1150753.7607891555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5571.826269999748,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5571.835000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 28984.35327321879,
            "unit": "ns/iter",
            "extra": "iterations: 28168\ncpu: 28981.936949730367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23023.747617727844,
            "unit": "ns/iter",
            "extra": "iterations: 36100\ncpu: 23021.96952908578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22403.892076207074,
            "unit": "ns/iter",
            "extra": "iterations: 36952\ncpu: 22401.875405931976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22633.437210451604,
            "unit": "ns/iter",
            "extra": "iterations: 36479\ncpu: 22631.8100825132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63800.324030544594,
            "unit": "ns/iter",
            "extra": "iterations: 13616\ncpu: 63793.90423031695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 582618.4130000911,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582537.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 575021.8334434672,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 574970.0594844681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 575233.0320680892,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 575225.261780109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 569522.8272251362,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 569515.4450261771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 343456.5140296307,
            "unit": "ns/iter",
            "extra": "iterations: 2566\ncpu: 343453.11769290606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 562404.7122580211,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 562375.0322580638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 544.5923075191776,
            "unit": "ns/iter",
            "extra": "iterations: 1288427\ncpu: 544.5767591023774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3224.79282492669,
            "unit": "ns/iter",
            "extra": "iterations: 217280\ncpu: 3224.7243188512584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2314.4106980270703,
            "unit": "ns/iter",
            "extra": "iterations: 302037\ncpu: 2314.383668226084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2585.3655828619303,
            "unit": "ns/iter",
            "extra": "iterations: 270836\ncpu: 2585.250114460424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1973.7851389487964,
            "unit": "ns/iter",
            "extra": "iterations: 354699\ncpu: 1973.6647128974141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17665.34904828058,
            "unit": "ns/iter",
            "extra": "iterations: 39665\ncpu: 17663.922853901273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30720.479343193674,
            "unit": "ns/iter",
            "extra": "iterations: 22777\ncpu: 30718.035737805665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7221.362901151337,
            "unit": "ns/iter",
            "extra": "iterations: 97189\ncpu: 7220.555824218697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7195.209797973874,
            "unit": "ns/iter",
            "extra": "iterations: 97265\ncpu: 7194.362823214796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7161.648310811215,
            "unit": "ns/iter",
            "extra": "iterations: 97680\ncpu: 7161.264332514282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14826.773597666508,
            "unit": "ns/iter",
            "extra": "iterations: 47314\ncpu: 14826.233250200836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13941.690999603756,
            "unit": "ns/iter",
            "extra": "iterations: 50220\ncpu: 13941.477499004424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5077.496561409568,
            "unit": "ns/iter",
            "extra": "iterations: 138138\ncpu: 5077.30240773724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26003.647840283895,
            "unit": "ns/iter",
            "extra": "iterations: 26948\ncpu: 26000.649398842197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20567.089202014293,
            "unit": "ns/iter",
            "extra": "iterations: 34136\ncpu: 20564.84063745021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20477.89082726757,
            "unit": "ns/iter",
            "extra": "iterations: 34221\ncpu: 20475.59685573188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20844.568078467477,
            "unit": "ns/iter",
            "extra": "iterations: 33645\ncpu: 20842.321295883197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49246.007102669646,
            "unit": "ns/iter",
            "extra": "iterations: 14220\ncpu: 49239.20534458505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154764.98499225505,
            "unit": "ns/iter",
            "extra": "iterations: 4531\ncpu: 154747.71573604117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130820.49402984935,
            "unit": "ns/iter",
            "extra": "iterations: 5360\ncpu: 130809.27238805777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130150.40287635422,
            "unit": "ns/iter",
            "extra": "iterations: 5354\ncpu: 130137.76615614456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130088.0677744644,
            "unit": "ns/iter",
            "extra": "iterations: 5356\ncpu: 130078.97684839422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84390.38578254638,
            "unit": "ns/iter",
            "extra": "iterations: 8370\ncpu: 84383.99044205493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129759.08200666292,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 129755.64605701643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5363.338870048321,
            "unit": "ns/iter",
            "extra": "iterations: 130041\ncpu: 5363.126244799744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27663.515720041032,
            "unit": "ns/iter",
            "extra": "iterations: 25318\ncpu: 27662.05071490651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22109.42991187346,
            "unit": "ns/iter",
            "extra": "iterations: 31546\ncpu: 22108.111963481955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21568.302616960835,
            "unit": "ns/iter",
            "extra": "iterations: 32404\ncpu: 21567.664485865957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21485.563962075223,
            "unit": "ns/iter",
            "extra": "iterations: 32488\ncpu: 21484.89288352645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50505.26203823225,
            "unit": "ns/iter",
            "extra": "iterations: 13914\ncpu: 50503.852235159065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151816.3567553867,
            "unit": "ns/iter",
            "extra": "iterations: 3871\ncpu: 151796.22836476093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130225.82741966652,
            "unit": "ns/iter",
            "extra": "iterations: 5383\ncpu: 130213.31971019958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128833.531797229,
            "unit": "ns/iter",
            "extra": "iterations: 5425\ncpu: 128816.22119815779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127704.66307522394,
            "unit": "ns/iter",
            "extra": "iterations: 5476\ncpu: 127690.88750913038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82518.96128956691,
            "unit": "ns/iter",
            "extra": "iterations: 8499\ncpu: 82512.71914342891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130011.20568561608,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 130006.22445187836 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}