window.BENCHMARK_DATA = {
  "lastUpdate": 1705774013324,
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
      }
    ]
  }
}