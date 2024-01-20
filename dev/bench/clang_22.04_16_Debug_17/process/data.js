window.BENCHMARK_DATA = {
  "lastUpdate": 1705773390095,
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
      }
    ]
  }
}