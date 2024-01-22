window.BENCHMARK_DATA = {
  "lastUpdate": 1705954979837,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-16 22.04 Debug c++-17": [
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
        "date": 1702490272898,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14441.717964958876,
            "unit": "ns/iter",
            "extra": "iterations: 42633\ncpu: 14440.705556728355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 113599.40731280492,
            "unit": "ns/iter",
            "extra": "iterations: 7439\ncpu: 113595.48326387956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 213533.66707558834,
            "unit": "ns/iter",
            "extra": "iterations: 4076\ncpu: 213520.24043179592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 310930.11884057644,
            "unit": "ns/iter",
            "extra": "iterations: 2760\ncpu: 310926.3043478261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 410073.5228881289,
            "unit": "ns/iter",
            "extra": "iterations: 2119\ncpu: 410047.28645587544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 507963.77008797193,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 507931.2023460412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 606447.65874123,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 606434.7552447558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 566140.8220000794,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566094.099999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 647942.4719999542,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647935.0999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11523.642501811786,
            "unit": "ns/iter",
            "extra": "iterations: 60708\ncpu: 11523.454898860111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9619.077163969492,
            "unit": "ns/iter",
            "extra": "iterations: 72806\ncpu: 9618.549295387742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9614.5425948726,
            "unit": "ns/iter",
            "extra": "iterations: 70701\ncpu: 9614.44109701419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9497.44972351523,
            "unit": "ns/iter",
            "extra": "iterations: 73603\ncpu: 9497.437604445457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15753.925109735228,
            "unit": "ns/iter",
            "extra": "iterations: 44425\ncpu: 15753.796285875087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 52960.50607763578,
            "unit": "ns/iter",
            "extra": "iterations: 15302\ncpu: 52959.16873611294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 226067.90453461558,
            "unit": "ns/iter",
            "extra": "iterations: 3771\ncpu: 226068.94722885176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 176837.72481828777,
            "unit": "ns/iter",
            "extra": "iterations: 4815\ncpu: 176827.64278296992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 177128.68117743346,
            "unit": "ns/iter",
            "extra": "iterations: 4824\ncpu: 177123.23797678298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 173800.08019538134,
            "unit": "ns/iter",
            "extra": "iterations: 4913\ncpu: 173791.39018929366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 458201.2848898033,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 458178.226652677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3586694.0038318243,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3586570.498084293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2854889.529230954,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2854742.153846158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2872301.3695653686,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2872175.1552795055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2869718.089783382,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2869534.984520121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1673466.4402174135,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1673379.8913043465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2801086.778787742,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2800879.3939393987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10745427.76767646,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10745282.828282801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6448536.451388678,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6448286.805555536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13876496.922078675,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 13875790.909090918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58314.60663607585,
            "unit": "ns/iter",
            "extra": "iterations: 14165\ncpu: 58313.17331450764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 265401.2850525209,
            "unit": "ns/iter",
            "extra": "iterations: 3238\ncpu: 265389.067325511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 207391.56210575523,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 207389.64095099375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 207615.1686046586,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 207607.80038759712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 204308.9171257487,
            "unit": "ns/iter",
            "extra": "iterations: 4175\ncpu: 204308.57485029934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 480430.81616832956,
            "unit": "ns/iter",
            "extra": "iterations: 1806\ncpu: 480407.14285714517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3620508.7898834976,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3620391.439688705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2907028.280373908,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2906987.538940814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2924576.0880503124,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2924395.2830188544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2913139.959247692,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2913056.1128526637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1715770.709796484,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1715627.1719038868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2842994.1938461177,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2842958.461538453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11006211.711340014,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11006147.422680395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6402459.828766589,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6402176.027397262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 50242.60321864614,
            "unit": "ns/iter",
            "extra": "iterations: 16218\ncpu: 50242.791959551374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 244069.4759206834,
            "unit": "ns/iter",
            "extra": "iterations: 3530\ncpu: 244068.49858357056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 183436.91412090368,
            "unit": "ns/iter",
            "extra": "iterations: 4681\ncpu: 183435.398419141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 176597.47413794213,
            "unit": "ns/iter",
            "extra": "iterations: 4872\ncpu: 176592.59031198762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 178758.06674985465,
            "unit": "ns/iter",
            "extra": "iterations: 4809\ncpu: 178742.12934081958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 450223.29114582745,
            "unit": "ns/iter",
            "extra": "iterations: 1920\ncpu: 450189.73958333244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3578615.7076922967,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3578411.9230769128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2875946.1370369806,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 2875903.3333333535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2908890.2710280144,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2908739.8753894144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2882884.891640964,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2882825.3869969174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1674484.2563176027,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1674398.9169675054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2822842.4561934858,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2822728.3987915204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5616.46432162369,
            "unit": "ns/iter",
            "extra": "iterations: 124319\ncpu: 5616.45203066306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31925.030644867307,
            "unit": "ns/iter",
            "extra": "iterations: 21896\ncpu: 31924.438253562137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 24113.11639791685,
            "unit": "ns/iter",
            "extra": "iterations: 28961\ncpu: 24112.223334829512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25297.133571663777,
            "unit": "ns/iter",
            "extra": "iterations: 27693\ncpu: 25296.753692268667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20047.317882123687,
            "unit": "ns/iter",
            "extra": "iterations: 34884\ncpu: 20046.883958262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 130161.27985839931,
            "unit": "ns/iter",
            "extra": "iterations: 5367\ncpu: 130161.46823178603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 243171.81350037607,
            "unit": "ns/iter",
            "extra": "iterations: 2874\ncpu: 243163.67432150553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 60938.408869985615,
            "unit": "ns/iter",
            "extra": "iterations: 11522\ncpu: 60937.207082103574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61311.47276708229,
            "unit": "ns/iter",
            "extra": "iterations: 11420\ncpu: 61307.93345008698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61157.232501318715,
            "unit": "ns/iter",
            "extra": "iterations: 11458\ncpu: 61155.61179961611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 123528.1694287662,
            "unit": "ns/iter",
            "extra": "iterations: 5672\ncpu: 123526.58674188948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 114106.62593802293,
            "unit": "ns/iter",
            "extra": "iterations: 6130\ncpu: 114101.30505709743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 36713.78912884385,
            "unit": "ns/iter",
            "extra": "iterations: 19078\ncpu: 36714.393542299826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 181710.7156990373,
            "unit": "ns/iter",
            "extra": "iterations: 3841\ncpu: 181711.61155948768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 148705.21517913602,
            "unit": "ns/iter",
            "extra": "iterations: 4717\ncpu: 148698.60080559755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 146408.92047587977,
            "unit": "ns/iter",
            "extra": "iterations: 4791\ncpu: 146399.93738259145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 147357.90332771285,
            "unit": "ns/iter",
            "extra": "iterations: 4748\ncpu: 147353.8753159226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 254869.90495264347,
            "unit": "ns/iter",
            "extra": "iterations: 2746\ncpu: 254856.0451565954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1046265.0582958534,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1046214.4992526128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 864534.6138614863,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 864462.9950495008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 860646.572660024,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 860638.4236453198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 861317.0862068792,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 861303.8177339863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 568356.3119414729,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 568315.6783103222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 856902.481617636,
            "unit": "ns/iter",
            "extra": "iterations: 816\ncpu: 856836.6421568508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 37534.093970876325,
            "unit": "ns/iter",
            "extra": "iterations: 18676\ncpu: 37532.758620689754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 182261.3748047626,
            "unit": "ns/iter",
            "extra": "iterations: 3842\ncpu: 182262.41540863982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 147700.860160534,
            "unit": "ns/iter",
            "extra": "iterations: 4734\ncpu: 147701.2251795516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 146571.67482736707,
            "unit": "ns/iter",
            "extra": "iterations: 4779\ncpu: 146567.10608913845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 148084.47252749003,
            "unit": "ns/iter",
            "extra": "iterations: 4732\ncpu: 148079.45900253503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 251092.6157706178,
            "unit": "ns/iter",
            "extra": "iterations: 2790\ncpu: 251076.34408602066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1047628.745508863,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1047611.5269461276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 865147.2401477696,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 865078.3251231466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 862724.3222632423,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 862690.8979089863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 859868.7469287475,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 859869.6560196446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 565941.9192897655,
            "unit": "ns/iter",
            "extra": "iterations: 1239\ncpu: 565913.5593220372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 859128.6429447422,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 859101.9631901829 ns\nthreads: 1"
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
        "date": 1702492880752,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14647.82638701307,
            "unit": "ns/iter",
            "extra": "iterations: 48107\ncpu: 14643.004136612135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 116816.40886056055,
            "unit": "ns/iter",
            "extra": "iterations: 6117\ncpu: 116809.56351152525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 221611.85856014182,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 221603.12897481554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 322551.2502801747,
            "unit": "ns/iter",
            "extra": "iterations: 2677\ncpu: 322537.8408666418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 424585.35955055966,
            "unit": "ns/iter",
            "extra": "iterations: 2047\ncpu: 424571.76355642424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 527031.0986085921,
            "unit": "ns/iter",
            "extra": "iterations: 1653\ncpu: 527019.8427102237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 507836.205999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507816.49999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 591657.58000006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 591631.7000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 680953.040491629,
            "unit": "ns/iter",
            "extra": "iterations: 1383\ncpu: 680927.042660882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11720.03960911487,
            "unit": "ns/iter",
            "extra": "iterations: 59557\ncpu: 11719.326023809126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9758.934121526623,
            "unit": "ns/iter",
            "extra": "iterations: 70964\ncpu: 9758.442308776279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9779.934737311032,
            "unit": "ns/iter",
            "extra": "iterations: 71986\ncpu: 9755.316311505007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9703.12217062444,
            "unit": "ns/iter",
            "extra": "iterations: 71924\ncpu: 9702.818252599976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16190.116167195525,
            "unit": "ns/iter",
            "extra": "iterations: 43446\ncpu: 16189.863278552692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51360.624261097386,
            "unit": "ns/iter",
            "extra": "iterations: 15902\ncpu: 51358.539806313616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 221733.14682018984,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 221721.01544098364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 176366.86103033583,
            "unit": "ns/iter",
            "extra": "iterations: 4814\ncpu: 176354.88159534673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 173431.49827411253,
            "unit": "ns/iter",
            "extra": "iterations: 4925\ncpu: 173424.34517766477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 172804.67442329106,
            "unit": "ns/iter",
            "extra": "iterations: 4942\ncpu: 172796.74220963183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 437275.04312942864,
            "unit": "ns/iter",
            "extra": "iterations: 1994\ncpu: 437254.91474423266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3711645.8159998725,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3711454.399999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2979109.3826364903,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2978982.315112542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2984323.216560442,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2984105.4140127418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2940597.037974661,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2940425.316455699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1730094.274253617,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1729977.6119402947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2903309.3385582743,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2902926.018808771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11092125.529410837,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 11091741.176470585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6590115.262411147,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6589912.056737583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14264666.146667272,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14264090.666666694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 50865.07409999967,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50864.16000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 263509.02430770546,
            "unit": "ns/iter",
            "extra": "iterations: 3250\ncpu: 263499.4769230773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 207589.55238327308,
            "unit": "ns/iter",
            "extra": "iterations: 4133\ncpu: 207586.49891120178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 205876.84000001027,
            "unit": "ns/iter",
            "extra": "iterations: 4175\ncpu: 205868.93413173684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 203791.27621543306,
            "unit": "ns/iter",
            "extra": "iterations: 4196\ncpu: 203786.96377502507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 452019.4008394404,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 452001.1017838372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3759882.5934960074,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3759796.7479674676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3026183.675324496,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3025937.66233766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3021054.948051896,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3020939.2857142836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2982669.2788463724,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2982543.9102564245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1774328.2657743876,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1774262.1414913884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2932918.713836572,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2932835.220125776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11375911.180850642,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11375408.510638274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6686665.879432769,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6686365.248226938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51481.93582550945,
            "unit": "ns/iter",
            "extra": "iterations: 15863\ncpu: 51479.02036184851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 239242.36214106818,
            "unit": "ns/iter",
            "extra": "iterations: 3587\ncpu: 239224.75606356232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 181502.45689473426,
            "unit": "ns/iter",
            "extra": "iterations: 4721\ncpu: 181488.43465367556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 174885.74257223267,
            "unit": "ns/iter",
            "extra": "iterations: 4914\ncpu: 174874.84737484623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 179326.05347033706,
            "unit": "ns/iter",
            "extra": "iterations: 4769\ncpu: 179312.72803522716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 430655.6012846032,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 430623.270750987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3709229.820717257,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3709009.561752992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3008353.0032257955,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3008211.9354838664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2984972.8338657864,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2984792.6517572007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2987442.0223642723,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2987251.7571885083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1733266.1858735548,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1733150.7434944224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2913385.3062500493,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2913185.624999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5709.043139890939,
            "unit": "ns/iter",
            "extra": "iterations: 123482\ncpu: 5708.565620900194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32288.626948980174,
            "unit": "ns/iter",
            "extra": "iterations: 21678\ncpu: 32286.502444875026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25243.175582695414,
            "unit": "ns/iter",
            "extra": "iterations: 27759\ncpu: 25241.29111279206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25366.01719332505,
            "unit": "ns/iter",
            "extra": "iterations: 27627\ncpu: 25364.2487421726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20390.30773035414,
            "unit": "ns/iter",
            "extra": "iterations: 34371\ncpu: 20388.309912426215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 123745.99294034489,
            "unit": "ns/iter",
            "extra": "iterations: 5666\ncpu: 123737.363219202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 249621.52442068743,
            "unit": "ns/iter",
            "extra": "iterations: 2805\ncpu: 249602.13903743008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62682.079387815065,
            "unit": "ns/iter",
            "extra": "iterations: 11173\ncpu: 62680.488678062335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 63131.06438195245,
            "unit": "ns/iter",
            "extra": "iterations: 11059\ncpu: 63127.01871778656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 62597.797083299054,
            "unit": "ns/iter",
            "extra": "iterations: 11177\ncpu: 62592.3503623505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 126487.96607724136,
            "unit": "ns/iter",
            "extra": "iterations: 5542\ncpu: 126477.5712739074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 117252.65256646233,
            "unit": "ns/iter",
            "extra": "iterations: 5981\ncpu: 117245.96221367679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 37168.030891909446,
            "unit": "ns/iter",
            "extra": "iterations: 18937\ncpu: 37162.713206949134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 184385.89347536856,
            "unit": "ns/iter",
            "extra": "iterations: 3755\ncpu: 184377.5765645779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 149292.9796878505,
            "unit": "ns/iter",
            "extra": "iterations: 4677\ncpu: 149292.2813769507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 148552.0189200796,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 148548.150510203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 148687.46924877117,
            "unit": "ns/iter",
            "extra": "iterations: 4699\ncpu: 148684.0817195121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 261664.02323838326,
            "unit": "ns/iter",
            "extra": "iterations: 2668\ncpu: 261653.7106446764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1059748.6585367494,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1059713.4146341453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 888895.1050632295,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 888879.4936708952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 878300.9599500553,
            "unit": "ns/iter",
            "extra": "iterations: 799\ncpu: 878224.5306633349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 876792.5037593449,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 876765.0375939828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 576714.0486397538,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 576684.9958779893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 871025.1533666179,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 870975.9351620924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 37212.40174393626,
            "unit": "ns/iter",
            "extra": "iterations: 18808\ncpu: 37210.95810293463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 182389.33601036918,
            "unit": "ns/iter",
            "extra": "iterations: 3860\ncpu: 182382.22797927374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 148061.115776093,
            "unit": "ns/iter",
            "extra": "iterations: 4716\ncpu: 148056.99745547152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 146714.72906197334,
            "unit": "ns/iter",
            "extra": "iterations: 4776\ncpu: 146700.64907872662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 148959.18419375402,
            "unit": "ns/iter",
            "extra": "iterations: 4707\ncpu: 148946.80263437337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 257316.62476959906,
            "unit": "ns/iter",
            "extra": "iterations: 2713\ncpu: 257307.11389605366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1059033.0698027704,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1059005.311077391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 888304.8201530053,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 888264.6683673448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 881639.5232704665,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 881553.5849056502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 878421.4380474634,
            "unit": "ns/iter",
            "extra": "iterations: 799\ncpu: 878352.8160200269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 573096.6595570494,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 573062.1821164929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 874573.8637500721,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 874549.000000009 ns\nthreads: 1"
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
        "date": 1702503917590,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14672.246856811336,
            "unit": "ns/iter",
            "extra": "iterations: 48279\ncpu: 14671.432714016446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 117128.84055363575,
            "unit": "ns/iter",
            "extra": "iterations: 7225\ncpu: 117124.70588235294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 220012.53257286455,
            "unit": "ns/iter",
            "extra": "iterations: 3945\ncpu: 220010.3675538656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 322443.7034150125,
            "unit": "ns/iter",
            "extra": "iterations: 2694\ncpu: 322428.0623608017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 421929.06326030265,
            "unit": "ns/iter",
            "extra": "iterations: 2055\ncpu: 421896.3990267639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 523427.20963856,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 523414.3373493978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 504271.9330000409,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504235.40000000066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 584727.7909999775,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584702.4999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 674402.0830860615,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 674368.4718100894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11501.397304352697,
            "unit": "ns/iter",
            "extra": "iterations: 60913\ncpu: 11500.723983386135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9604.719352584389,
            "unit": "ns/iter",
            "extra": "iterations: 72967\ncpu: 9604.27727602888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9621.715872668263,
            "unit": "ns/iter",
            "extra": "iterations: 73006\ncpu: 9621.44618250554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9563.369817556451,
            "unit": "ns/iter",
            "extra": "iterations: 73228\ncpu: 9562.98956683237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15905.64640531667,
            "unit": "ns/iter",
            "extra": "iterations: 43926\ncpu: 15905.24746164003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50739.16202814316,
            "unit": "ns/iter",
            "extra": "iterations: 16133\ncpu: 50737.41399615687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 221060.90246430616,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 221051.46562905333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 178502.72172088202,
            "unit": "ns/iter",
            "extra": "iterations: 4765\ncpu: 178496.537250787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 178715.7450442977,
            "unit": "ns/iter",
            "extra": "iterations: 4742\ncpu: 178704.87136229436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 176827.55228216568,
            "unit": "ns/iter",
            "extra": "iterations: 4820\ncpu: 176818.67219917016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 461938.5297872363,
            "unit": "ns/iter",
            "extra": "iterations: 1880\ncpu: 461906.9680851051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3704239.0239040502,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3704039.8406374524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2965918.493589907,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2965865.7051282027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2992743.093247432,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2992638.9067524076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2942607.4794953144,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2942475.394321766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1712997.4092593212,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1712902.777777773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2898822.062499917,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2898694.687500003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10906891.020408925,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10906244.897959195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6554681.774647934,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6554420.422535201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14127744.839999346,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14126981.333333313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58140.54412075838,
            "unit": "ns/iter",
            "extra": "iterations: 14177\ncpu: 58137.03181208999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 260328.49196728377,
            "unit": "ns/iter",
            "extra": "iterations: 3299\ncpu: 260316.15641103333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 207010.20387878089,
            "unit": "ns/iter",
            "extra": "iterations: 4125\ncpu: 207000.4606060596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 206629.61421686053,
            "unit": "ns/iter",
            "extra": "iterations: 4150\ncpu: 206627.2771084346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 206085.0210084031,
            "unit": "ns/iter",
            "extra": "iterations: 4046\ncpu: 206078.64557587734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 474303.6506090964,
            "unit": "ns/iter",
            "extra": "iterations: 1806\ncpu: 474275.6367663357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3756849.2886177367,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3756717.4796747896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3037568.6372547066,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3037387.2549019787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3033204.009772124,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3033075.5700325556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2998351.519354694,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2998258.0645161252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1744048.3641507854,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1743980.9433962211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2942659.076432965,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2942545.5414012736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11166228.958333118,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11165782.291666647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6555217.619718309,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6554914.788732407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51241.11370775542,
            "unit": "ns/iter",
            "extra": "iterations: 15918\ncpu: 51238.00728734736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 239678.86990727994,
            "unit": "ns/iter",
            "extra": "iterations: 3559\ncpu: 239667.0413037372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 185674.38544178454,
            "unit": "ns/iter",
            "extra": "iterations: 4561\ncpu: 185666.19162464357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 180357.29791711483,
            "unit": "ns/iter",
            "extra": "iterations: 4753\ncpu: 180350.17883442045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 180805.94410333558,
            "unit": "ns/iter",
            "extra": "iterations: 4723\ncpu: 180794.13508363348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 448766.29467088834,
            "unit": "ns/iter",
            "extra": "iterations: 1914\ncpu: 448731.87042842235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3713226.4439997016,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3713048.4000000195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2996212.8878202937,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2996064.743589736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2994561.1639871215,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2994391.3183279783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2968501.6783442027,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2968334.0764331184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1706444.9047619074,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1706374.1758241693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2904937.721874745,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2904833.125000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5632.81427322356,
            "unit": "ns/iter",
            "extra": "iterations: 124667\ncpu: 5632.389485589636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32267.637657057283,
            "unit": "ns/iter",
            "extra": "iterations: 21648\ncpu: 32265.969142645983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25572.804531028672,
            "unit": "ns/iter",
            "extra": "iterations: 27411\ncpu: 25571.391047389763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26288.747289440314,
            "unit": "ns/iter",
            "extra": "iterations: 26655\ncpu: 26287.62333520944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20161.69208852467,
            "unit": "ns/iter",
            "extra": "iterations: 34747\ncpu: 20159.96201110883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 130627.4976692141,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 130619.28025359094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 236763.22500846282,
            "unit": "ns/iter",
            "extra": "iterations: 2951\ncpu: 236751.40630294738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62121.208909926514,
            "unit": "ns/iter",
            "extra": "iterations: 11201\ncpu: 62118.7126149439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62586.00017852929,
            "unit": "ns/iter",
            "extra": "iterations: 11203\ncpu: 62581.96911541619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 62459.557325967304,
            "unit": "ns/iter",
            "extra": "iterations: 11234\ncpu: 62455.05607975784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 125862.35428263317,
            "unit": "ns/iter",
            "extra": "iterations: 5569\ncpu: 125858.37672831787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 115834.8167218561,
            "unit": "ns/iter",
            "extra": "iterations: 6040\ncpu: 115829.37086092713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 37651.87582298747,
            "unit": "ns/iter",
            "extra": "iterations: 18530\ncpu: 37649.9136535345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 187834.67088269145,
            "unit": "ns/iter",
            "extra": "iterations: 3716\ncpu: 187820.96340150665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 153248.50547766354,
            "unit": "ns/iter",
            "extra": "iterations: 4564\ncpu: 153241.2576687105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 147823.25380712227,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 147823.2868020308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 149017.25999149506,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 149013.41411564747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 261165.83097012242,
            "unit": "ns/iter",
            "extra": "iterations: 2680\ncpu: 261160.1865671648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1086822.3456219619,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1086794.4700460688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 900523.4020618604,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 900499.6134020762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 892531.8119440557,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 892532.274459977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 892624.3439491024,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 892587.0063694277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 580589.9867659339,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 580575.8478081054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 882693.9090909037,
            "unit": "ns/iter",
            "extra": "iterations: 792\ncpu: 882675.0000000091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 37833.66430311204,
            "unit": "ns/iter",
            "extra": "iterations: 18475\ncpu: 37833.19079837673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 186114.1976589577,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 186111.758446395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 151608.08568963813,
            "unit": "ns/iter",
            "extra": "iterations: 4633\ncpu: 151603.73408158842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 149376.61445012767,
            "unit": "ns/iter",
            "extra": "iterations: 4692\ncpu: 149371.69650468833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 148980.9842183704,
            "unit": "ns/iter",
            "extra": "iterations: 4689\ncpu: 148976.34890168297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 258072.96714658322,
            "unit": "ns/iter",
            "extra": "iterations: 2709\ncpu: 258064.67331118387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1067297.2106870662,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1067250.0763358776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 893177.6109693658,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 893177.0408163164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 889269.002541305,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 889259.5933926326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 882981.971032823,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 882972.9219143619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 571684.0089795665,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 571684.3265306161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 879971.0552070445,
            "unit": "ns/iter",
            "extra": "iterations: 797\ncpu: 879937.7666248394 ns\nthreads: 1"
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
        "date": 1705575558578,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14388.472061933926,
            "unit": "ns/iter",
            "extra": "iterations: 48697\ncpu: 14388.299073864922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 117436.39910938033,
            "unit": "ns/iter",
            "extra": "iterations: 7186\ncpu: 117435.34650709713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 221229.3317234296,
            "unit": "ns/iter",
            "extra": "iterations: 3934\ncpu: 221223.23335027957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 323161.01084923284,
            "unit": "ns/iter",
            "extra": "iterations: 2673\ncpu: 323161.0549943883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 424729.9149975699,
            "unit": "ns/iter",
            "extra": "iterations: 2047\ncpu: 424720.9574987786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 530038.4204752971,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 530009.2626447286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 507659.17299997906,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507600.4999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 588499.8349999932,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 588480.5999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 674209.215942005,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 674177.6086956519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11666.940232098197,
            "unit": "ns/iter",
            "extra": "iterations: 60233\ncpu: 11666.099978417122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9657.399994482113,
            "unit": "ns/iter",
            "extra": "iterations: 72491\ncpu: 9657.289870466671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9541.527969976412,
            "unit": "ns/iter",
            "extra": "iterations: 73275\ncpu: 9541.008529512119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9544.936054997273,
            "unit": "ns/iter",
            "extra": "iterations: 73313\ncpu: 9544.821518693805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16080.81857921044,
            "unit": "ns/iter",
            "extra": "iterations: 43694\ncpu: 16080.505332539948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50390.501517309975,
            "unit": "ns/iter",
            "extra": "iterations: 16147\ncpu: 50389.78757663955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 230347.99514955524,
            "unit": "ns/iter",
            "extra": "iterations: 3711\ncpu: 230334.3842630019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 182078.51375559863,
            "unit": "ns/iter",
            "extra": "iterations: 4689\ncpu: 182072.40349754732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 180887.15728196295,
            "unit": "ns/iter",
            "extra": "iterations: 4724\ncpu: 180879.0431837421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 177849.80054301964,
            "unit": "ns/iter",
            "extra": "iterations: 4788\ncpu: 177845.65580618187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 435835.58711932425,
            "unit": "ns/iter",
            "extra": "iterations: 2003\ncpu: 435812.3315027458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3720452.14285709,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3720383.730158726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2975946.2411575327,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2975852.411575566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2931790.3449368295,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2931575.316455699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2931936.331230239,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2931894.952681382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1717811.2774673898,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1717697.9515828637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2889403.287499981,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2889204.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10960587.17346945,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10960093.877551015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6439084.54482761,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6438886.896551738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14038742.486841958,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 14038092.105263188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 51113.95029999812,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51111.21999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 271027.47945638676,
            "unit": "ns/iter",
            "extra": "iterations: 3164\ncpu: 271016.78255372937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 213764.78747817557,
            "unit": "ns/iter",
            "extra": "iterations: 4009\ncpu: 213755.0760788226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 213572.60263092248,
            "unit": "ns/iter",
            "extra": "iterations: 4029\ncpu: 213564.6066021345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 209972.47622548466,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 209956.81372548876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 446155.5596282974,
            "unit": "ns/iter",
            "extra": "iterations: 1937\ncpu: 446134.7960764099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3755972.441295146,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3755777.732793509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3029435.267100768,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3029254.071661231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2999346.580645212,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2999157.419354847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2972383.1054312517,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2972235.782747592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1765219.7689393528,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1765138.0681818132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2934868.367088363,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2934629.1139240447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11248777.789473694,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11248324.210526343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6589961.021276433,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6589785.106382976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52907.729877308084,
            "unit": "ns/iter",
            "extra": "iterations: 15567\ncpu: 52903.82861180705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 248726.63098672836,
            "unit": "ns/iter",
            "extra": "iterations: 3466\ncpu: 248714.8586266578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 187518.4137172893,
            "unit": "ns/iter",
            "extra": "iterations: 4549\ncpu: 187511.0353923939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 181586.49251175625,
            "unit": "ns/iter",
            "extra": "iterations: 4674\ncpu: 181576.95763799717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 183368.79931168302,
            "unit": "ns/iter",
            "extra": "iterations: 4649\ncpu: 183345.1064745112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 422682.7655945278,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 422645.46783625457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3697871.742063503,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3697806.3492063493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2993076.696774214,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2992951.290322585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2974001.2420382495,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2973964.649681544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2946764.583606875,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 2946557.377049174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1703746.4816850356,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1703638.095238102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2894575.375776312,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2894134.7826086865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5620.627128163153,
            "unit": "ns/iter",
            "extra": "iterations: 124638\ncpu: 5620.370192076251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31927.50198440008,
            "unit": "ns/iter",
            "extra": "iterations: 21921\ncpu: 31925.596460015477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25503.880005462568,
            "unit": "ns/iter",
            "extra": "iterations: 29293\ncpu: 25502.570580002037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25669.68411552532,
            "unit": "ns/iter",
            "extra": "iterations: 28254\ncpu: 25667.434699511523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20030.18520640407,
            "unit": "ns/iter",
            "extra": "iterations: 34907\ncpu: 20029.280660039603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 124736.95145457539,
            "unit": "ns/iter",
            "extra": "iterations: 5603\ncpu: 124730.03747992072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 250538.49946332234,
            "unit": "ns/iter",
            "extra": "iterations: 2795\ncpu: 250521.89624328812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62070.304086319484,
            "unit": "ns/iter",
            "extra": "iterations: 11306\ncpu: 62064.19600212322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62285.68521646711,
            "unit": "ns/iter",
            "extra": "iterations: 11249\ncpu: 62280.52271313048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61700.91102702521,
            "unit": "ns/iter",
            "extra": "iterations: 11363\ncpu: 61696.7262166685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 125433.58652811754,
            "unit": "ns/iter",
            "extra": "iterations: 5582\ncpu: 125424.3281977779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 115625.96772057582,
            "unit": "ns/iter",
            "extra": "iterations: 6041\ncpu: 115615.22926667875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 36752.0573636868,
            "unit": "ns/iter",
            "extra": "iterations: 19019\ncpu: 36748.630317051284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 185205.50543333884,
            "unit": "ns/iter",
            "extra": "iterations: 3773\ncpu: 185192.60535382884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 151917.16137393628,
            "unit": "ns/iter",
            "extra": "iterations: 4629\ncpu: 151904.32058759828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 150583.62043795685,
            "unit": "ns/iter",
            "extra": "iterations: 4658\ncpu: 150569.77243452016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 148900.37106382844,
            "unit": "ns/iter",
            "extra": "iterations: 4700\ncpu: 148894.0638297871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 268560.2659248065,
            "unit": "ns/iter",
            "extra": "iterations: 2606\ncpu: 268547.3906369894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1075308.044546832,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1075304.1474654404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 897689.1922076914,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 897635.584415579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 897314.2279129706,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 897258.7708066569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 885497.1840101886,
            "unit": "ns/iter",
            "extra": "iterations: 788\ncpu: 885485.4060913656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 572890.5639771834,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 572873.6756316234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 880586.4334172112,
            "unit": "ns/iter",
            "extra": "iterations: 796\ncpu: 880583.0402010062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 37581.806593645415,
            "unit": "ns/iter",
            "extra": "iterations: 18624\ncpu: 37581.29295532606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 185525.67160622182,
            "unit": "ns/iter",
            "extra": "iterations: 3779\ncpu: 185522.78380523963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 149319.15817521382,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 149310.2749946693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 148798.95879354223,
            "unit": "ns/iter",
            "extra": "iterations: 4708\ncpu: 148795.05097706078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 148837.9715196627,
            "unit": "ns/iter",
            "extra": "iterations: 4705\ncpu: 148835.6641870372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 261439.99738612026,
            "unit": "ns/iter",
            "extra": "iterations: 2678\ncpu: 261431.47871545947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1073149.8820827266,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1073106.5849923557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 893077.9757961927,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 893049.0445859837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 881696.0239294883,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 881693.3249370231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 881406.5942211795,
            "unit": "ns/iter",
            "extra": "iterations: 796\ncpu: 881390.0753768904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 572202.97549019,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 572193.3823529482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 883245.3189874102,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 883172.4050632898 ns\nthreads: 1"
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
        "date": 1705773387083,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14383.341659288399,
            "unit": "ns/iter",
            "extra": "iterations: 48563\ncpu: 14383.104421061302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 115597.07551936751,
            "unit": "ns/iter",
            "extra": "iterations: 7124\ncpu: 115593.5569904548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 216391.3438202423,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 216385.41822721594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 316428.3704111543,
            "unit": "ns/iter",
            "extra": "iterations: 2724\ncpu: 316413.32599118946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 416246.75946334255,
            "unit": "ns/iter",
            "extra": "iterations: 2087\ncpu: 416235.0742692863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 517711.5600475614,
            "unit": "ns/iter",
            "extra": "iterations: 1682\ncpu: 517708.977407848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 613895.7473461323,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 613879.9009200281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 576211.6490000152,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576165.3999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 655111.9579999067,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 655048.8999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11306.807413245706,
            "unit": "ns/iter",
            "extra": "iterations: 62159\ncpu: 11305.405492366357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9426.374093039887,
            "unit": "ns/iter",
            "extra": "iterations: 74011\ncpu: 9426.229884746857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9334.18001223831,
            "unit": "ns/iter",
            "extra": "iterations: 73545\ncpu: 9333.74396627914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9333.316471042637,
            "unit": "ns/iter",
            "extra": "iterations: 75059\ncpu: 9332.35854461157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15680.868318732235,
            "unit": "ns/iter",
            "extra": "iterations: 44752\ncpu: 15679.379692527687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50018.75355217505,
            "unit": "ns/iter",
            "extra": "iterations: 16328\ncpu: 50015.16413522791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 219193.52797742008,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 219176.6683778237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 172478.2906104092,
            "unit": "ns/iter",
            "extra": "iterations: 4931\ncpu: 172465.34171567607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 172778.82757920818,
            "unit": "ns/iter",
            "extra": "iterations: 4924\ncpu: 172765.272136474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 171947.12145015216,
            "unit": "ns/iter",
            "extra": "iterations: 4965\ncpu: 171930.211480362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 427315.3516028908,
            "unit": "ns/iter",
            "extra": "iterations: 1934\ncpu: 427293.64012409607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3616957.298850382,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3616622.6053639906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2868658.5077398224,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2868566.873065017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2848969.3251533774,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2848775.1533742337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2866967.7314816075,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2866939.8148148125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1658919.2969586991,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1658829.3381037589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2801240.617469876,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2801060.5421686787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10746069.525252134,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10745364.646464642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6374639.29452034,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6374150.684931507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13804040.29870173,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 13803649.35064936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 50454.53669999915,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50453.80000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 263051.77730195504,
            "unit": "ns/iter",
            "extra": "iterations: 3269\ncpu: 263024.56408687757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 206825.54256089425,
            "unit": "ns/iter",
            "extra": "iterations: 4147\ncpu: 206822.40173619628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 205309.67473054054,
            "unit": "ns/iter",
            "extra": "iterations: 4175\ncpu: 205303.0419161685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 205856.38319771568,
            "unit": "ns/iter",
            "extra": "iterations: 4178\ncpu: 205851.8669219734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 444971.0313302689,
            "unit": "ns/iter",
            "extra": "iterations: 1947\ncpu: 444969.3374422199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3612381.50194562,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3612261.478599228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2916016.0815049964,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2916002.8213166134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2907809.7133954703,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2907686.6043613534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2890511.7732917336,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2890412.111801245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1696323.8446069758,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1696278.2449725813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2835720.3353658076,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2835653.9634146425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10946641.567009643,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 10946454.63917524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6646048.804195647,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6645912.587412564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52029.6037963456,
            "unit": "ns/iter",
            "extra": "iterations: 15752\ncpu: 52029.01853732868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 237660.33194905677,
            "unit": "ns/iter",
            "extra": "iterations: 3612\ncpu: 237659.49612403172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 181964.19587847928,
            "unit": "ns/iter",
            "extra": "iterations: 4707\ncpu: 181957.27639685574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 173695.1481105127,
            "unit": "ns/iter",
            "extra": "iterations: 4922\ncpu: 173694.65664364133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 178148.33423913733,
            "unit": "ns/iter",
            "extra": "iterations: 4784\ncpu: 178142.57943143893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 430439.7594412794,
            "unit": "ns/iter",
            "extra": "iterations: 1933\ncpu: 430429.3843766167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3587241.289575599,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3587089.9613899584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2895441.065217261,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2895403.105590068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2902674.5432098005,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2902603.0864197733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2885058.61300319,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2884982.0433436376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1657926.9129663596,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1657899.6447602098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2805647.731927858,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2805542.4698795276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5740.016893719902,
            "unit": "ns/iter",
            "extra": "iterations: 121998\ncpu: 5739.9973770061515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 30812.36083564941,
            "unit": "ns/iter",
            "extra": "iterations: 22689\ncpu: 30811.35351932665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25066.78057424945,
            "unit": "ns/iter",
            "extra": "iterations: 27932\ncpu: 25064.478018043697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 24839.602289291975,
            "unit": "ns/iter",
            "extra": "iterations: 28131\ncpu: 24838.10742597123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20050.38468579338,
            "unit": "ns/iter",
            "extra": "iterations: 34961\ncpu: 20048.442550270498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 124627.81344748373,
            "unit": "ns/iter",
            "extra": "iterations: 5607\ncpu: 124617.06795077735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 240377.5292498118,
            "unit": "ns/iter",
            "extra": "iterations: 2906\ncpu: 240349.58706125224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 60623.66155711307,
            "unit": "ns/iter",
            "extra": "iterations: 11547\ncpu: 60619.260413960365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61098.43505927445,
            "unit": "ns/iter",
            "extra": "iterations: 11472\ncpu: 61096.28661087929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61129.81417774242,
            "unit": "ns/iter",
            "extra": "iterations: 11511\ncpu: 61125.14116931701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 122502.76172148927,
            "unit": "ns/iter",
            "extra": "iterations: 5716\ncpu: 122491.42757172749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 113690.19149626204,
            "unit": "ns/iter",
            "extra": "iterations: 6162\ncpu: 113678.31872768741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 36478.20123561035,
            "unit": "ns/iter",
            "extra": "iterations: 18938\ncpu: 36475.33530467877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 175121.13305043057,
            "unit": "ns/iter",
            "extra": "iterations: 4006\ncpu: 175113.3300049925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 143394.19799345848,
            "unit": "ns/iter",
            "extra": "iterations: 4884\ncpu: 143380.56920556718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 144795.92026441984,
            "unit": "ns/iter",
            "extra": "iterations: 4841\ncpu: 144782.33835984196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 145055.71049907885,
            "unit": "ns/iter",
            "extra": "iterations: 4829\ncpu: 145050.1760198785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 258004.0457564456,
            "unit": "ns/iter",
            "extra": "iterations: 2710\ncpu: 257997.78597785952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1059900.5884100727,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1059873.25408619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 856182.4173806924,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 856109.0575275414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 850924.1433778157,
            "unit": "ns/iter",
            "extra": "iterations: 823\ncpu: 850846.9015795924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 850537.6009732378,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 850466.0583941553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 557740.7553785695,
            "unit": "ns/iter",
            "extra": "iterations: 1255\ncpu: 557723.187250996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 843716.2515114425,
            "unit": "ns/iter",
            "extra": "iterations: 827\ncpu: 843651.7533252691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 37297.97926719261,
            "unit": "ns/iter",
            "extra": "iterations: 18859\ncpu: 37297.126040616866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 177371.19964576632,
            "unit": "ns/iter",
            "extra": "iterations: 3952\ncpu: 177359.46356275133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 144604.3630877885,
            "unit": "ns/iter",
            "extra": "iterations: 4806\ncpu: 144595.81772783844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 143865.22530291404,
            "unit": "ns/iter",
            "extra": "iterations: 4869\ncpu: 143850.72910248424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 144736.52097539956,
            "unit": "ns/iter",
            "extra": "iterations: 4839\ncpu: 144724.81917751645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 255180.82429975632,
            "unit": "ns/iter",
            "extra": "iterations: 2749\ncpu: 255157.18443070338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1025541.2368420374,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1025473.8304093523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 850638.5698663736,
            "unit": "ns/iter",
            "extra": "iterations: 823\ncpu: 850611.9076549258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 850580.6626212976,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 850533.0097087431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 853407.8634145372,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 853328.2926829357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 568114.3279742779,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 568076.0450160753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 853186.8373787066,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 853137.4999999935 ns\nthreads: 1"
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
        "date": 1705774817920,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14394.434037235489,
            "unit": "ns/iter",
            "extra": "iterations: 48823\ncpu: 14394.324396288637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 115557.22558968267,
            "unit": "ns/iter",
            "extra": "iterations: 7292\ncpu: 115555.51289083928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 217239.34656678734,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 217238.7016229713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 316687.1423317683,
            "unit": "ns/iter",
            "extra": "iterations: 2719\ncpu: 316669.03273262235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 417612.26009619725,
            "unit": "ns/iter",
            "extra": "iterations: 2080\ncpu: 417580.6730769231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 519470.01610982174,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 519468.4367541768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 506622.28999999573,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506614.2999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 577771.9060000663,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577755.1999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 661346.6730000256,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 661322.3000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11687.432595709131,
            "unit": "ns/iter",
            "extra": "iterations: 59922\ncpu: 11687.375254497498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9695.503802308502,
            "unit": "ns/iter",
            "extra": "iterations: 72193\ncpu: 9695.485711911118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9709.48632983558,
            "unit": "ns/iter",
            "extra": "iterations: 71945\ncpu: 9709.447494613929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9698.714461887841,
            "unit": "ns/iter",
            "extra": "iterations: 72169\ncpu: 9698.664246421593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16133.946228372817,
            "unit": "ns/iter",
            "extra": "iterations: 43350\ncpu: 16133.298731257206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50361.84932696487,
            "unit": "ns/iter",
            "extra": "iterations: 16121\ncpu: 50360.982569319465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 229594.24059139422,
            "unit": "ns/iter",
            "extra": "iterations: 3720\ncpu: 229571.69354838692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 180131.875422297,
            "unit": "ns/iter",
            "extra": "iterations: 4736\ncpu: 180119.08783783758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 177277.06491884068,
            "unit": "ns/iter",
            "extra": "iterations: 4806\ncpu: 177267.6654182275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 175449.67661071636,
            "unit": "ns/iter",
            "extra": "iterations: 4827\ncpu: 175439.48622332723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 452999.39488781337,
            "unit": "ns/iter",
            "extra": "iterations: 1917\ncpu: 452969.3792383943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3638696.3333334993,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3638377.2549019605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2922221.104101083,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2922076.6561514167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2861425.185185271,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2861300.3086419813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2898494.147335487,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2898247.962382453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1667054.3009009175,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1666952.6126126077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2828917.954128249,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2828759.327217129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10691267.529999778,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10690640.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6384130.157534264,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6383711.643835632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13903940.447368026,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 13902674.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58571.298248106286,
            "unit": "ns/iter",
            "extra": "iterations: 14099\ncpu: 58568.56514646423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 270875.57856697054,
            "unit": "ns/iter",
            "extra": "iterations: 3182\ncpu: 270856.47391577676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 210476.82998531728,
            "unit": "ns/iter",
            "extra": "iterations: 4082\ncpu: 210468.81430671262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 207476.72074922803,
            "unit": "ns/iter",
            "extra": "iterations: 4111\ncpu: 207463.68280223635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 205103.18624161012,
            "unit": "ns/iter",
            "extra": "iterations: 4172\ncpu: 205091.4429530195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 467860.81768261024,
            "unit": "ns/iter",
            "extra": "iterations: 1821\ncpu: 467854.85996705433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3702681.6150793303,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3702499.9999999804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2959098.066666561,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2958967.9365079473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2924769.1446541506,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2924469.182389938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2947607.6761006853,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2947392.4528301894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1711079.288389421,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1711076.5917603038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2868545.299382622,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2868439.1975308615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11010342.618556727,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11009854.63917527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6365222.917808085,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6365155.479452034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 50978.35761093493,
            "unit": "ns/iter",
            "extra": "iterations: 16023\ncpu: 50977.36378955253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 244990.4848658054,
            "unit": "ns/iter",
            "extra": "iterations: 3502\ncpu: 244985.4368932044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 184800.4517107048,
            "unit": "ns/iter",
            "extra": "iterations: 4618\ncpu: 184797.37981810415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 179147.95787047077,
            "unit": "ns/iter",
            "extra": "iterations: 4771\ncpu: 179144.1207294062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 180252.09801854868,
            "unit": "ns/iter",
            "extra": "iterations: 4744\ncpu: 180248.25042158554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 442388.69408742024,
            "unit": "ns/iter",
            "extra": "iterations: 1945\ncpu: 442381.4395886899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3640332.760784415,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3640208.6274509816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2951752.113564595,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2951615.141955838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2886721.229102173,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2886579.2569659394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2916034.457680083,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2915866.4576802375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1664889.385996302,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1664852.0646319508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2841651.409785884,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2841482.2629969455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5790.299018270832,
            "unit": "ns/iter",
            "extra": "iterations: 124678\ncpu: 5790.023099504312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31071.56918504288,
            "unit": "ns/iter",
            "extra": "iterations: 22541\ncpu: 31070.742203096484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25244.736921910306,
            "unit": "ns/iter",
            "extra": "iterations: 27699\ncpu: 25243.608072493593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25960.700018542808,
            "unit": "ns/iter",
            "extra": "iterations: 26965\ncpu: 25959.440014834126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 19394.029114379162,
            "unit": "ns/iter",
            "extra": "iterations: 36099\ncpu: 19392.27125405152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 125760.76235843707,
            "unit": "ns/iter",
            "extra": "iterations: 5563\ncpu: 125759.590149202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 246245.82822948127,
            "unit": "ns/iter",
            "extra": "iterations: 2841\ncpu: 246240.05631819757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61597.0049964897,
            "unit": "ns/iter",
            "extra": "iterations: 11408\ncpu: 61595.8450210385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61733.01875330412,
            "unit": "ns/iter",
            "extra": "iterations: 11358\ncpu: 61732.07430885691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61444.67033831082,
            "unit": "ns/iter",
            "extra": "iterations: 11439\ncpu: 61442.468747268074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 122945.74982345679,
            "unit": "ns/iter",
            "extra": "iterations: 5664\ncpu: 122944.63276836304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 115515.11783176436,
            "unit": "ns/iter",
            "extra": "iterations: 6051\ncpu: 115512.77474797645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 37541.5908381304,
            "unit": "ns/iter",
            "extra": "iterations: 18577\ncpu: 37540.695483662814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 182178.5033819038,
            "unit": "ns/iter",
            "extra": "iterations: 3844\ncpu: 182171.22788761748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 147488.92145270435,
            "unit": "ns/iter",
            "extra": "iterations: 4736\ncpu: 147488.02787162134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 148045.5778247303,
            "unit": "ns/iter",
            "extra": "iterations: 4735\ncpu: 148044.9208025344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 148051.20582646888,
            "unit": "ns/iter",
            "extra": "iterations: 4737\ncpu: 148047.11842938742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 265500.27965137083,
            "unit": "ns/iter",
            "extra": "iterations: 2639\ncpu: 265487.419477078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1060525.2995460206,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1060490.92284416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 875189.666666664,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 875152.5062656765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 873427.1573034726,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 873401.2484394447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 870746.2924412269,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 870719.4547707617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 569934.0862489989,
            "unit": "ns/iter",
            "extra": "iterations: 1229\ncpu: 569909.3572009814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 872761.2421971934,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 872732.209737836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 37803.235106667256,
            "unit": "ns/iter",
            "extra": "iterations: 18515\ncpu: 37803.53227113122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 183756.5617300184,
            "unit": "ns/iter",
            "extra": "iterations: 3815\ncpu: 183747.3132372224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 148060.8042417837,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 148052.13149522993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 147151.41933446858,
            "unit": "ns/iter",
            "extra": "iterations: 4748\ncpu: 147143.1971356359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 147444.44339424078,
            "unit": "ns/iter",
            "extra": "iterations: 4761\ncpu: 147441.12581390433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 262278.2544910324,
            "unit": "ns/iter",
            "extra": "iterations: 2672\ncpu: 262260.51646706456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1058429.138972797,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1058368.126888212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 871818.3096128743,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 871750.5617977417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 875722.9662076961,
            "unit": "ns/iter",
            "extra": "iterations: 799\ncpu: 875650.438047551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 862440.3795256205,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 862397.0037453229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 568976.7190553719,
            "unit": "ns/iter",
            "extra": "iterations: 1228\ncpu: 568938.843648211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 868832.1288723402,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 868795.4151177198 ns\nthreads: 1"
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
        "date": 1705778358570,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15919.124710196285,
            "unit": "ns/iter",
            "extra": "iterations: 47446\ncpu: 15918.836150571176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 118641.9422240931,
            "unit": "ns/iter",
            "extra": "iterations: 7131\ncpu: 118638.01710839996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 222734.30318601802,
            "unit": "ns/iter",
            "extra": "iterations: 3892\ncpu: 222732.34840698872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 326236.78469079745,
            "unit": "ns/iter",
            "extra": "iterations: 2652\ncpu: 326231.97586726985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 427930.37173806183,
            "unit": "ns/iter",
            "extra": "iterations: 2031\ncpu: 427918.46381093055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 530094.9271280039,
            "unit": "ns/iter",
            "extra": "iterations: 1633\ncpu: 530089.834660135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 510549.932999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510483.4999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 591302.5199999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 591271.2000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 677532.4901675018,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 677496.1398397663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11897.644613921728,
            "unit": "ns/iter",
            "extra": "iterations: 58874\ncpu: 11897.620341746784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9962.763700043954,
            "unit": "ns/iter",
            "extra": "iterations: 70237\ncpu: 9962.346056921575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10016.934063107286,
            "unit": "ns/iter",
            "extra": "iterations: 69976\ncpu: 10016.335600777404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9962.305385226771,
            "unit": "ns/iter",
            "extra": "iterations: 70452\ncpu: 9961.85913813662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16310.405601731523,
            "unit": "ns/iter",
            "extra": "iterations: 42951\ncpu: 16309.103396894105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50647.65660330457,
            "unit": "ns/iter",
            "extra": "iterations: 16098\ncpu: 50646.34737234445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 228486.5118825016,
            "unit": "ns/iter",
            "extra": "iterations: 3745\ncpu: 228472.87049399235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 179722.1596125527,
            "unit": "ns/iter",
            "extra": "iterations: 4749\ncpu: 179717.7511054959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 176756.5819689155,
            "unit": "ns/iter",
            "extra": "iterations: 4825\ncpu: 176740.8911917096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 175758.33449620716,
            "unit": "ns/iter",
            "extra": "iterations: 4873\ncpu: 175752.10342704682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 432277.49253730115,
            "unit": "ns/iter",
            "extra": "iterations: 2010\ncpu: 432250.89552238805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3730516.707627039,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3730388.135593221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3051549.6611841205,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3051501.9736842066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3005354.4350650255,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3005324.9999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2999043.7540452653,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2998970.873786418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1755845.1254682043,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1755750.3745318323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2930457.1451104726,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2930364.98422712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11026349.092783665,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11025617.525773186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5072834.980000493,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5072885.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14225447.079999564,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14224862.666666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53167.47179999766,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53159.25999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 268018.22656249645,
            "unit": "ns/iter",
            "extra": "iterations: 3200\ncpu: 268003.6562499999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 208783.2311057253,
            "unit": "ns/iter",
            "extra": "iterations: 4115\ncpu: 208775.01822600217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 208524.92682928554,
            "unit": "ns/iter",
            "extra": "iterations: 4100\ncpu: 208517.09756097588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 204283.16180687535,
            "unit": "ns/iter",
            "extra": "iterations: 4184\ncpu: 204278.20267686452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 448789.3459739913,
            "unit": "ns/iter",
            "extra": "iterations: 1925\ncpu: 448779.1168831162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3785849.9430895546,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3785783.7398373876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3070606.314569558,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3070513.245033092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3079595.2607262516,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3079518.4818481784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3034487.0977199352,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3034438.4364820705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1801165.518375146,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1801094.7775628578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2996679.2443730216,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2996588.1028938866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11426122.182796149,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11425694.623655941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5020031.809999636,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5019877.999999949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51732.477060748875,
            "unit": "ns/iter",
            "extra": "iterations: 15868\ncpu: 51731.119233678255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 247276.5662337598,
            "unit": "ns/iter",
            "extra": "iterations: 3465\ncpu: 247276.01731601672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 185588.60043383908,
            "unit": "ns/iter",
            "extra": "iterations: 4610\ncpu: 185587.96095444594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 176886.23937822037,
            "unit": "ns/iter",
            "extra": "iterations: 4825\ncpu: 176887.9378238353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 179003.0401176108,
            "unit": "ns/iter",
            "extra": "iterations: 4761\ncpu: 179003.0455786593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 420463.4526008476,
            "unit": "ns/iter",
            "extra": "iterations: 2057\ncpu: 420449.7812348065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3739493.055999901,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3739404.0000000075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3063392.026315775,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3063299.0131578976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3044915.4052288416,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3044809.8039215757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3015607.8896106333,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3015633.1168831172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1716185.3364140508,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1716152.125693167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2950244.7841268224,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2950140.317460321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5728.675933493995,
            "unit": "ns/iter",
            "extra": "iterations: 122336\ncpu: 5728.729891446526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32993.92238581245,
            "unit": "ns/iter",
            "extra": "iterations: 21259\ncpu: 32992.91123759344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 24780.438217779752,
            "unit": "ns/iter",
            "extra": "iterations: 28212\ncpu: 24780.313341840556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25270.039377191053,
            "unit": "ns/iter",
            "extra": "iterations: 27681\ncpu: 25270.044434810683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20202.52043171942,
            "unit": "ns/iter",
            "extra": "iterations: 34652\ncpu: 20202.695371118618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 124824.86306981563,
            "unit": "ns/iter",
            "extra": "iterations: 5616\ncpu: 124825.99715099788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 254583.25981103,
            "unit": "ns/iter",
            "extra": "iterations: 2752\ncpu: 254585.7921511609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 64618.1887679822,
            "unit": "ns/iter",
            "extra": "iterations: 10844\ncpu: 64615.62154186659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 63857.21912059417,
            "unit": "ns/iter",
            "extra": "iterations: 10962\ncpu: 63854.06860062114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 63602.03021257153,
            "unit": "ns/iter",
            "extra": "iterations: 11055\ncpu: 63599.25825418369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 126611.10114192554,
            "unit": "ns/iter",
            "extra": "iterations: 5517\ncpu: 126610.94797897423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 118755.23464539881,
            "unit": "ns/iter",
            "extra": "iterations: 5894\ncpu: 118756.34543603787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 36769.0323275864,
            "unit": "ns/iter",
            "extra": "iterations: 19024\ncpu: 36769.07064760284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 186695.0053333312,
            "unit": "ns/iter",
            "extra": "iterations: 3750\ncpu: 186694.1866666669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 152899.34279473833,
            "unit": "ns/iter",
            "extra": "iterations: 4580\ncpu: 152893.1659388642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 150980.50700582884,
            "unit": "ns/iter",
            "extra": "iterations: 4639\ncpu: 150972.75274843528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 151626.75530993115,
            "unit": "ns/iter",
            "extra": "iterations: 4614\ncpu: 151618.29215431286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 259625.21056547653,
            "unit": "ns/iter",
            "extra": "iterations: 2688\ncpu: 259616.96428571694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1080728.1329211728,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1080699.2272024627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 907537.2688311905,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 907545.1948051847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 905894.1536458735,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 905902.0833333357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 909908.9598965911,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 909860.6727037653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 584750.7268170356,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 584724.7284878888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 894322.9820051421,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 894286.6323907526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 37530.40210368977,
            "unit": "ns/iter",
            "extra": "iterations: 18729\ncpu: 37529.22740135623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 189651.18651441447,
            "unit": "ns/iter",
            "extra": "iterations: 3678\ncpu: 189645.35073409532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 152171.64662472147,
            "unit": "ns/iter",
            "extra": "iterations: 4607\ncpu: 152163.0779248957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 152799.29617485858,
            "unit": "ns/iter",
            "extra": "iterations: 4575\ncpu: 152800.7213114736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 151663.3316670342,
            "unit": "ns/iter",
            "extra": "iterations: 4601\ncpu: 151663.2471201919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 258667.2786400348,
            "unit": "ns/iter",
            "extra": "iterations: 2706\ncpu: 258669.73392461223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1079478.765793461,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1079399.5377503803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 904443.5174643636,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 904418.1112548622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 909522.1264667267,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 909508.4745762682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 897723.9035989663,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 897722.7506426596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 582928.09197326,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 582933.4448160549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 894178.6998722138,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 894138.8250319236 ns\nthreads: 1"
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
        "date": 1705953547598,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14445.652312101456,
            "unit": "ns/iter",
            "extra": "iterations: 48138\ncpu: 14444.910465744319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 118738.90666100757,
            "unit": "ns/iter",
            "extra": "iterations: 7071\ncpu: 118735.41224720688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 220852.06687008057,
            "unit": "ns/iter",
            "extra": "iterations: 3933\ncpu: 220841.29163488437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 320509.5069418009,
            "unit": "ns/iter",
            "extra": "iterations: 2665\ncpu: 320496.6604127578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 421877.0374331405,
            "unit": "ns/iter",
            "extra": "iterations: 2057\ncpu: 421848.2741857075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 527267.4404833551,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 527239.6978851961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 503236.58199999953,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503197.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 583398.3730000227,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583377.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 665753.2168587985,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 665713.0403458213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11585.604738567494,
            "unit": "ns/iter",
            "extra": "iterations: 60398\ncpu: 11585.04586244579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9693.642264067848,
            "unit": "ns/iter",
            "extra": "iterations: 72383\ncpu: 9693.019079065527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9689.411355336173,
            "unit": "ns/iter",
            "extra": "iterations: 72565\ncpu: 9688.595052711355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9562.368368069368,
            "unit": "ns/iter",
            "extra": "iterations: 73508\ncpu: 9561.933395004626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15917.903172978902,
            "unit": "ns/iter",
            "extra": "iterations: 43965\ncpu: 15917.538951438642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51247.062666330814,
            "unit": "ns/iter",
            "extra": "iterations: 15782\ncpu: 51245.35546825492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 224396.57734663377,
            "unit": "ns/iter",
            "extra": "iterations: 3814\ncpu: 224392.10802307262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 179339.27563698535,
            "unit": "ns/iter",
            "extra": "iterations: 4749\ncpu: 179334.1124447253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 179750.0090373891,
            "unit": "ns/iter",
            "extra": "iterations: 4758\ncpu: 179742.7490542242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 176844.90213119786,
            "unit": "ns/iter",
            "extra": "iterations: 4833\ncpu: 176838.56817711593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 452766.3604772016,
            "unit": "ns/iter",
            "extra": "iterations: 1928\ncpu: 452745.53941908653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3654156.905882505,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3654050.588235287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2927107.8396226754,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2926980.5031446535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2901584.1818179092,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2901466.771159877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2938714.803174604,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2938600.952380962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1674754.0601092959,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1674699.8178506338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2844081.4492306835,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2843992.3076923015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10779806.141413521,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10779295.959595975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6479826.377622167,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6479590.909090917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13730316.480518924,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 13729738.961038973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 50006.24399999651,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50004.50999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 265640.3313737655,
            "unit": "ns/iter",
            "extra": "iterations: 3232\ncpu: 265629.7339108912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 207768.58718948538,
            "unit": "ns/iter",
            "extra": "iterations: 4106\ncpu: 207757.13589868444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 208759.3018959526,
            "unit": "ns/iter",
            "extra": "iterations: 4114\ncpu: 208750.63198833333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 203924.2219827505,
            "unit": "ns/iter",
            "extra": "iterations: 4176\ncpu: 203911.94923371632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 471105.0914066271,
            "unit": "ns/iter",
            "extra": "iterations: 1827\ncpu: 471076.7925561028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3705344.920318798,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3705178.0876493873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2976287.706070171,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2976092.971245986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2977616.1757188574,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2977507.9872204363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2980747.67731643,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2980599.361022362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1721345.6846009376,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1721296.8460111336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2897331.6687501697,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2897272.812500007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11064765.5567004,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11064354.639175238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6497450.27083368,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6497168.055555571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 51024.27148925216,
            "unit": "ns/iter",
            "extra": "iterations: 16008\ncpu: 51022.438780609766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 241725.6560473625,
            "unit": "ns/iter",
            "extra": "iterations: 3547\ncpu: 241718.6354665901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 184722.34965487645,
            "unit": "ns/iter",
            "extra": "iterations: 4636\ncpu: 184713.74029335595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 177572.64034904994,
            "unit": "ns/iter",
            "extra": "iterations: 4813\ncpu: 177561.27155620142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 180801.65577942922,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 180794.9310710506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 440962.71566633636,
            "unit": "ns/iter",
            "extra": "iterations: 1966\ncpu: 440940.08138351893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3659982.38039181,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3659804.3137254985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2936165.3710690727,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2935985.220125786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2926032.2915360373,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2925900.626959266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2950058.6730158655,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2949959.0476190527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1675090.8709676417,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1675025.9856630892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2849389.284403726,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2849229.663608558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5669.432287570766,
            "unit": "ns/iter",
            "extra": "iterations: 123323\ncpu: 5669.022810019193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32436.823020321655,
            "unit": "ns/iter",
            "extra": "iterations: 21607\ncpu: 32435.067339288005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26158.64253951405,
            "unit": "ns/iter",
            "extra": "iterations: 26761\ncpu: 26156.5487089421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25904.400649901418,
            "unit": "ns/iter",
            "extra": "iterations: 27081\ncpu: 25903.08703519072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20185.174184453736,
            "unit": "ns/iter",
            "extra": "iterations: 34762\ncpu: 20183.65168862541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 129954.56536249287,
            "unit": "ns/iter",
            "extra": "iterations: 5393\ncpu: 129947.2093454476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 247542.48514849562,
            "unit": "ns/iter",
            "extra": "iterations: 2828\ncpu: 247532.31966053648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61463.45864397762,
            "unit": "ns/iter",
            "extra": "iterations: 11401\ncpu: 61461.77528287051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62048.93085153425,
            "unit": "ns/iter",
            "extra": "iterations: 11309\ncpu: 62047.59041471401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61655.18241816389,
            "unit": "ns/iter",
            "extra": "iterations: 11364\ncpu: 61653.739880324225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 123808.79760225823,
            "unit": "ns/iter",
            "extra": "iterations: 5672\ncpu: 123802.06276445749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 115146.9043235263,
            "unit": "ns/iter",
            "extra": "iterations: 6083\ncpu: 115139.56929146849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 37252.540776646405,
            "unit": "ns/iter",
            "extra": "iterations: 18773\ncpu: 37250.881585255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 186291.9877659559,
            "unit": "ns/iter",
            "extra": "iterations: 3760\ncpu: 186285.10638298045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 150480.21626855573,
            "unit": "ns/iter",
            "extra": "iterations: 4647\ncpu: 150474.93006240646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 148554.74187378827,
            "unit": "ns/iter",
            "extra": "iterations: 4707\ncpu: 148550.39303165436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 149794.0489630114,
            "unit": "ns/iter",
            "extra": "iterations: 4677\ncpu: 149790.91297840545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 263753.6187429362,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 263741.0613473852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1062959.250379352,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1062921.699544763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 877105.745911958,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 877072.5786163511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 876018.753750003,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 875985.3749999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 881266.0290770197,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 881220.1011377963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 562291.5797101888,
            "unit": "ns/iter",
            "extra": "iterations: 1242\ncpu: 562284.2190016115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 872855.3751554093,
            "unit": "ns/iter",
            "extra": "iterations: 805\ncpu: 872778.6335403625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 37312.80217611045,
            "unit": "ns/iter",
            "extra": "iterations: 18749\ncpu: 37311.57928422856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 184790.0590405935,
            "unit": "ns/iter",
            "extra": "iterations: 3794\ncpu: 184779.62572483002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 150181.64966787782,
            "unit": "ns/iter",
            "extra": "iterations: 4667\ncpu: 150177.03021212993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 149482.4377664188,
            "unit": "ns/iter",
            "extra": "iterations: 4692\ncpu: 149477.21653878782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 149470.66040555717,
            "unit": "ns/iter",
            "extra": "iterations: 4685\ncpu: 149461.92102454673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 262686.83302063483,
            "unit": "ns/iter",
            "extra": "iterations: 2665\ncpu: 262673.7711069432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1058414.5742424163,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1058381.6666666544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 879153.4178167701,
            "unit": "ns/iter",
            "extra": "iterations: 797\ncpu: 879127.1016311162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 876812.2889447187,
            "unit": "ns/iter",
            "extra": "iterations: 796\ncpu: 876786.5577889441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 878024.904761958,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 877984.0852130298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 561069.1297037887,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 561051.5612489963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 868745.0719602506,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 868725.1861042184 ns\nthreads: 1"
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
        "date": 1705954976910,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14520.849761118918,
            "unit": "ns/iter",
            "extra": "iterations: 48769\ncpu: 14520.570444339644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 117898.00697388059,
            "unit": "ns/iter",
            "extra": "iterations: 7313\ncpu: 117891.24846164364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 216532.54064837933,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 216520.7481296758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 315543.0928099793,
            "unit": "ns/iter",
            "extra": "iterations: 2726\ncpu: 315515.15040352166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 418437.4061302768,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 418392.6724137931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 514837.2240047498,
            "unit": "ns/iter",
            "extra": "iterations: 1683\ncpu: 514819.4890077247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 612763.6527581379,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 612758.0622347946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 574220.7490000055,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574176.6000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 654296.5449999656,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 654246.0000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11543.636164329691,
            "unit": "ns/iter",
            "extra": "iterations: 61121\ncpu: 11543.554588439325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9639.152374261559,
            "unit": "ns/iter",
            "extra": "iterations: 72591\ncpu: 9638.446914906794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9650.259872313603,
            "unit": "ns/iter",
            "extra": "iterations: 72678\ncpu: 9650.03990203365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9679.709212813537,
            "unit": "ns/iter",
            "extra": "iterations: 72486\ncpu: 9679.442926910026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16141.695764570013,
            "unit": "ns/iter",
            "extra": "iterations: 43325\ncpu: 16140.175418349663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50590.33374774724,
            "unit": "ns/iter",
            "extra": "iterations: 16087\ncpu: 50589.63759557405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 224573.5042016861,
            "unit": "ns/iter",
            "extra": "iterations: 3808\ncpu: 224568.1197478994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 177392.56724535173,
            "unit": "ns/iter",
            "extra": "iterations: 4781\ncpu: 177389.27002719088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 176384.1632355872,
            "unit": "ns/iter",
            "extra": "iterations: 4809\ncpu: 176375.89935537483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 174096.89084218614,
            "unit": "ns/iter",
            "extra": "iterations: 4892\ncpu: 174092.45707277238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 440429.69545456703,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 440421.666666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3576571.0154440035,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3576342.4710424785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2866703.236024551,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2866642.236024844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2888330.5141064716,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2888265.2037617643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2877828.027950168,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2877643.167701861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1665629.4101634386,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1665564.2468239574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2821144.449847944,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2821083.5866261316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10652434.669999594,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10652337.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6370947.41496556,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6370588.435374158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13869018.842106136,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 13868707.894736854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 50238.52240000224,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50237.8199999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 264533.550774001,
            "unit": "ns/iter",
            "extra": "iterations: 3230\ncpu: 264529.0402476772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 207408.89212119687,
            "unit": "ns/iter",
            "extra": "iterations: 4125\ncpu: 207396.8484848496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 206899.48572810605,
            "unit": "ns/iter",
            "extra": "iterations: 4134\ncpu: 206895.93613933199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 202915.99286904468,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 202911.48086522453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 454607.41430076427,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 454590.48370136536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3641114.2980390578,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3640991.764705868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2945244.3924050173,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2945129.746835445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2942846.4620253444,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2942788.6075949445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2947367.2349208104,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2947195.8730158894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1710721.8191880817,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1710685.9778597837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2870572.5507692336,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2870511.0769230765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10938714.628865296,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 10938073.195876336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6554395.901408613,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6554346.478873215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 50302.31417647634,
            "unit": "ns/iter",
            "extra": "iterations: 16217\ncpu: 50302.03490164645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 241297.14511130066,
            "unit": "ns/iter",
            "extra": "iterations: 3549\ncpu: 241290.4761904747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 182665.44029053082,
            "unit": "ns/iter",
            "extra": "iterations: 4681\ncpu: 182657.8936124761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 175341.5363357267,
            "unit": "ns/iter",
            "extra": "iterations: 4885\ncpu: 175340.0818833152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 175744.37505147036,
            "unit": "ns/iter",
            "extra": "iterations: 4858\ncpu: 175739.6871140385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 428079.75233410456,
            "unit": "ns/iter",
            "extra": "iterations: 2035\ncpu: 428066.04422604234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3603290.046332042,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3603226.640926658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2898001.049844053,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2897957.0093457852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2922394.6782334456,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2922306.6246056734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2916987.6708463244,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2916881.8181818207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1664769.335125284,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1664779.0322580724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2832577.481818231,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2832476.9696969595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5646.206679997849,
            "unit": "ns/iter",
            "extra": "iterations: 124521\ncpu: 5646.149645441331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 29331.661518502337,
            "unit": "ns/iter",
            "extra": "iterations: 23892\ncpu: 29331.16105809488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25331.451500051848,
            "unit": "ns/iter",
            "extra": "iterations: 28299\ncpu: 25331.619491854774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25048.32116396476,
            "unit": "ns/iter",
            "extra": "iterations: 27939\ncpu: 25048.502093847303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 19969.32315208998,
            "unit": "ns/iter",
            "extra": "iterations: 34999\ncpu: 19969.124832137913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 122929.82527164897,
            "unit": "ns/iter",
            "extra": "iterations: 5706\ncpu: 122924.58815282234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 242221.2326064475,
            "unit": "ns/iter",
            "extra": "iterations: 2889\ncpu: 242214.64174455212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61507.136187788215,
            "unit": "ns/iter",
            "extra": "iterations: 11374\ncpu: 61506.21593107023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62346.44383122833,
            "unit": "ns/iter",
            "extra": "iterations: 11234\ncpu: 62342.593911340606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61717.26784458942,
            "unit": "ns/iter",
            "extra": "iterations: 11376\ncpu: 61716.80731364302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 118401.83017591198,
            "unit": "ns/iter",
            "extra": "iterations: 5912\ncpu: 118399.0020297701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 115134.3680052702,
            "unit": "ns/iter",
            "extra": "iterations: 6076\ncpu: 115133.45951283597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 37422.967581452955,
            "unit": "ns/iter",
            "extra": "iterations: 18693\ncpu: 37422.69833627597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 182814.40895993085,
            "unit": "ns/iter",
            "extra": "iterations: 3817\ncpu: 182807.17841236762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 149920.49646604434,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 149909.89505247245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 149510.5767918083,
            "unit": "ns/iter",
            "extra": "iterations: 4688\ncpu: 149503.77559726714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 148485.89669071216,
            "unit": "ns/iter",
            "extra": "iterations: 4714\ncpu: 148477.89563003927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 266501.1137747373,
            "unit": "ns/iter",
            "extra": "iterations: 2628\ncpu: 266498.8203957427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1043569.2522388485,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1043503.4328358102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 869081.1455223798,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 869058.830845768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 881571.0403021761,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 881565.491183875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 870529.5949999936,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 870478.8749999893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 567431.0478896287,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 567421.3474025888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 862121.1995043432,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 862116.480793064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 37619.27682218811,
            "unit": "ns/iter",
            "extra": "iterations: 18604\ncpu: 37618.34014190433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 181810.81832339018,
            "unit": "ns/iter",
            "extra": "iterations: 3853\ncpu: 181812.09447184182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 147299.54100083286,
            "unit": "ns/iter",
            "extra": "iterations: 4756\ncpu: 147297.66610597167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 148622.44974555544,
            "unit": "ns/iter",
            "extra": "iterations: 4716\ncpu: 148621.2468193369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 149012.03796927916,
            "unit": "ns/iter",
            "extra": "iterations: 4688\ncpu: 149002.06911262812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 257623.1009208028,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 257615.8379373849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1032343.2555391764,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1032280.9453471189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 866584.4579208549,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 866566.7079208021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 869004.9465838637,
            "unit": "ns/iter",
            "extra": "iterations: 805\ncpu: 868980.2484472131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 871381.0469715277,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 871373.4239802215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 567238.4959612859,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 567223.1017770666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 859546.2496925542,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 859518.8191881952 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}