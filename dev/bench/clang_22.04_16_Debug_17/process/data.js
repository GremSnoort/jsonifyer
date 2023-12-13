window.BENCHMARK_DATA = {
  "lastUpdate": 1702492884063,
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
      }
    ]
  }
}