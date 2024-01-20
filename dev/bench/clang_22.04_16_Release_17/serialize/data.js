window.BENCHMARK_DATA = {
  "lastUpdate": 1705775578484,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-16 22.04 Release c++-17": [
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
        "date": 1702491024376,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 734.5095922895795,
            "unit": "ns/iter",
            "extra": "iterations: 953005\ncpu: 734.4563774586702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11442.251029716672,
            "unit": "ns/iter",
            "extra": "iterations: 72350\ncpu: 11441.814789219074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25738.758848485137,
            "unit": "ns/iter",
            "extra": "iterations: 33000\ncpu: 25737.309090909082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38958.518290441985,
            "unit": "ns/iter",
            "extra": "iterations: 21760\ncpu: 38954.77941176469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49319.43230476383,
            "unit": "ns/iter",
            "extra": "iterations: 16301\ncpu: 49318.69823937181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50647.11009999883,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50646.530000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60666.856499994996,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60664.81000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70788.43275284267,
            "unit": "ns/iter",
            "extra": "iterations: 12231\ncpu: 70786.62415174552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81545.72164853016,
            "unit": "ns/iter",
            "extra": "iterations: 10749\ncpu: 81543.08307749557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 590.833620947668,
            "unit": "ns/iter",
            "extra": "iterations: 1186195\ncpu: 590.8037042813362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 504.3074055135465,
            "unit": "ns/iter",
            "extra": "iterations: 1382659\ncpu: 504.294912917791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 496.9244812830021,
            "unit": "ns/iter",
            "extra": "iterations: 1407704\ncpu: 496.9078016401167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 503.7867714756187,
            "unit": "ns/iter",
            "extra": "iterations: 1391357\ncpu: 503.75762654732097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1025.1126746581165,
            "unit": "ns/iter",
            "extra": "iterations: 684910\ncpu: 1025.0755573725012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4448.882454124976,
            "unit": "ns/iter",
            "extra": "iterations: 180219\ncpu: 4448.686875412688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19375.43463264844,
            "unit": "ns/iter",
            "extra": "iterations: 42330\ncpu: 19374.642097802942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15481.284166932193,
            "unit": "ns/iter",
            "extra": "iterations: 53363\ncpu: 15480.342184659787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15098.434188286266,
            "unit": "ns/iter",
            "extra": "iterations: 54428\ncpu: 15097.76953038878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15171.047776498175,
            "unit": "ns/iter",
            "extra": "iterations: 53834\ncpu: 15170.689527064656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47439.92923565181,
            "unit": "ns/iter",
            "extra": "iterations: 17636\ncpu: 47437.933771830314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 492266.56316675997,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 492155.5867490169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 398943.49930970796,
            "unit": "ns/iter",
            "extra": "iterations: 2173\ncpu: 398931.6612977444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 400425.44592725456,
            "unit": "ns/iter",
            "extra": "iterations: 2173\ncpu: 400412.655315233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 397376.392255096,
            "unit": "ns/iter",
            "extra": "iterations: 2195\ncpu: 397360.2733485208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 243854.07026875913,
            "unit": "ns/iter",
            "extra": "iterations: 3572\ncpu: 243845.63269876843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 391774.9525547804,
            "unit": "ns/iter",
            "extra": "iterations: 2192\ncpu: 391753.6952554744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2072176.7494554417,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2071977.5599128553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 803172.9819587868,
            "unit": "ns/iter",
            "extra": "iterations: 1164\ncpu: 803130.841924397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2545312.711111099,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2544977.222222222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4355.915185928653,
            "unit": "ns/iter",
            "extra": "iterations: 183861\ncpu: 4355.784532880825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19298.28564422214,
            "unit": "ns/iter",
            "extra": "iterations: 42819\ncpu: 19297.3960157874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15528.676488608144,
            "unit": "ns/iter",
            "extra": "iterations: 52230\ncpu: 15528.184951177487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15187.909308271071,
            "unit": "ns/iter",
            "extra": "iterations: 54371\ncpu: 15187.566901473161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15307.762799235945,
            "unit": "ns/iter",
            "extra": "iterations: 53929\ncpu: 15307.44126536735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47544.29636591625,
            "unit": "ns/iter",
            "extra": "iterations: 17556\ncpu: 47543.61471861503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 495334.2188222173,
            "unit": "ns/iter",
            "extra": "iterations: 1732\ncpu: 495327.309468824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 410708.591615663,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 410699.01083372434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 408318.0800187336,
            "unit": "ns/iter",
            "extra": "iterations: 2137\ncpu: 408310.76275152137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 401980.9778699864,
            "unit": "ns/iter",
            "extra": "iterations: 2169\ncpu: 401962.60949746304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 242562.4142385885,
            "unit": "ns/iter",
            "extra": "iterations: 3638\ncpu: 242562.91918636765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 403236.6295951846,
            "unit": "ns/iter",
            "extra": "iterations: 2149\ncpu: 403224.6161005123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2007659.9466665357,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2007502.6666666751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 782880.6691729067,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 782856.892230575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4361.217476505743,
            "unit": "ns/iter",
            "extra": "iterations: 187280\ncpu: 4361.083938487813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19643.84435017343,
            "unit": "ns/iter",
            "extra": "iterations: 43373\ncpu: 19620.955433103587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15346.977051943577,
            "unit": "ns/iter",
            "extra": "iterations: 54558\ncpu: 15346.029913120046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15165.250326845622,
            "unit": "ns/iter",
            "extra": "iterations: 55072\ncpu: 15165.076626961136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15322.455265971186,
            "unit": "ns/iter",
            "extra": "iterations: 54254\ncpu: 15322.094223467395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48569.31840074317,
            "unit": "ns/iter",
            "extra": "iterations: 17233\ncpu: 48566.349445830754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 489886.8072829015,
            "unit": "ns/iter",
            "extra": "iterations: 1785\ncpu: 489862.5210084024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 398953.8760292784,
            "unit": "ns/iter",
            "extra": "iterations: 2186\ncpu: 398939.89021043276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 398080.6037391996,
            "unit": "ns/iter",
            "extra": "iterations: 2193\ncpu: 398068.1714546272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 395284.94746376015,
            "unit": "ns/iter",
            "extra": "iterations: 2208\ncpu: 395278.7137681136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 244890.63583653935,
            "unit": "ns/iter",
            "extra": "iterations: 3622\ncpu: 244890.94422970703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 398741.6080107651,
            "unit": "ns/iter",
            "extra": "iterations: 2222\ncpu: 398733.393339333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 321.67230896816284,
            "unit": "ns/iter",
            "extra": "iterations: 2184924\ncpu: 321.6665659766638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1715.868210129551,
            "unit": "ns/iter",
            "extra": "iterations: 409728\ncpu: 1715.8541764292324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1358.5781940423246,
            "unit": "ns/iter",
            "extra": "iterations: 514630\ncpu: 1358.5795620154342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1259.0312633646931,
            "unit": "ns/iter",
            "extra": "iterations: 551828\ncpu: 1258.9567763868456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1096.7218250260778,
            "unit": "ns/iter",
            "extra": "iterations: 638084\ncpu: 1096.6911879940615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8179.098349332919,
            "unit": "ns/iter",
            "extra": "iterations: 85420\ncpu: 8178.773121048978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19992.427084820345,
            "unit": "ns/iter",
            "extra": "iterations: 35075\ncpu: 19991.409836065344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4702.492528875063,
            "unit": "ns/iter",
            "extra": "iterations: 148572\ncpu: 4702.3941254071815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4718.113278693693,
            "unit": "ns/iter",
            "extra": "iterations: 148245\ncpu: 4718.12202772438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4694.669105361928,
            "unit": "ns/iter",
            "extra": "iterations: 148440\ncpu: 4694.586364861193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9884.931894483543,
            "unit": "ns/iter",
            "extra": "iterations: 70890\ncpu: 9884.947101142703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8996.234981967791,
            "unit": "ns/iter",
            "extra": "iterations: 77640\ncpu: 8996.151468315264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2439.224103450104,
            "unit": "ns/iter",
            "extra": "iterations: 286515\ncpu: 2439.1738652426156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12116.772837789515,
            "unit": "ns/iter",
            "extra": "iterations: 57580\ncpu: 12116.451893018357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9596.705861436514,
            "unit": "ns/iter",
            "extra": "iterations: 73122\ncpu: 9596.626186373422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9559.26517510531,
            "unit": "ns/iter",
            "extra": "iterations: 72899\ncpu: 9559.283392090401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10190.025802022781,
            "unit": "ns/iter",
            "extra": "iterations: 68483\ncpu: 10189.958091789109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24622.632681119892,
            "unit": "ns/iter",
            "extra": "iterations: 28365\ncpu: 24622.037722545057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98830.42912674697,
            "unit": "ns/iter",
            "extra": "iterations: 7203\ncpu: 98828.50201305012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84450.48984526144,
            "unit": "ns/iter",
            "extra": "iterations: 8272\ncpu: 84449.63733075456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83203.90048343134,
            "unit": "ns/iter",
            "extra": "iterations: 8481\ncpu: 83204.10328970588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84010.16818073616,
            "unit": "ns/iter",
            "extra": "iterations: 8366\ncpu: 84008.40306000478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52569.25136082177,
            "unit": "ns/iter",
            "extra": "iterations: 13411\ncpu: 52568.77936022593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84343.99939555486,
            "unit": "ns/iter",
            "extra": "iterations: 8272\ncpu: 84342.40812379059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2376.7137535863753,
            "unit": "ns/iter",
            "extra": "iterations: 294505\ncpu: 2376.6913974295626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11734.8256848403,
            "unit": "ns/iter",
            "extra": "iterations: 59576\ncpu: 11734.841211225961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9425.469861620317,
            "unit": "ns/iter",
            "extra": "iterations: 74722\ncpu: 9425.407510505542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9357.056254315688,
            "unit": "ns/iter",
            "extra": "iterations: 73861\ncpu: 9356.799935012978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9847.003690611498,
            "unit": "ns/iter",
            "extra": "iterations: 70720\ncpu: 9846.94145927608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23833.001862826455,
            "unit": "ns/iter",
            "extra": "iterations: 29525\ncpu: 23832.785774766864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 95747.30142425818,
            "unit": "ns/iter",
            "extra": "iterations: 7302\ncpu: 95745.91892632112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81982.20119592705,
            "unit": "ns/iter",
            "extra": "iterations: 8529\ncpu: 81980.61906436908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82702.59093598345,
            "unit": "ns/iter",
            "extra": "iterations: 8451\ncpu: 82697.24292983008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82875.90944928883,
            "unit": "ns/iter",
            "extra": "iterations: 8371\ncpu: 82870.06331382212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52709.17342307863,
            "unit": "ns/iter",
            "extra": "iterations: 13222\ncpu: 52706.239600665096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83506.83945172769,
            "unit": "ns/iter",
            "extra": "iterations: 8390\ncpu: 83505.56615018 ns\nthreads: 1"
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
        "date": 1702493669984,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 760.8756642871991,
            "unit": "ns/iter",
            "extra": "iterations: 923170\ncpu: 760.8321327599467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11525.493891773622,
            "unit": "ns/iter",
            "extra": "iterations: 71461\ncpu: 11524.8457200431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25392.49044178094,
            "unit": "ns/iter",
            "extra": "iterations: 32799\ncpu: 25391.28631970487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40017.93838412332,
            "unit": "ns/iter",
            "extra": "iterations: 21066\ncpu: 40015.090667426186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50924.80936497988,
            "unit": "ns/iter",
            "extra": "iterations: 15590\ncpu: 50921.821680564455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51778.06909999844,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51774.33999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62829.70805224993,
            "unit": "ns/iter",
            "extra": "iterations: 13934\ncpu: 62826.654227070474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71901.74629365581,
            "unit": "ns/iter",
            "extra": "iterations: 11939\ncpu: 71899.1456570902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 82737.9809290056,
            "unit": "ns/iter",
            "extra": "iterations: 10592\ncpu: 82736.9901812688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 632.3859702355292,
            "unit": "ns/iter",
            "extra": "iterations: 1120532\ncpu: 632.3700706450157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 531.2103320696647,
            "unit": "ns/iter",
            "extra": "iterations: 1313580\ncpu: 531.1991656389412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 526.5573836010815,
            "unit": "ns/iter",
            "extra": "iterations: 1331112\ncpu: 526.5375114941498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 529.9297379092483,
            "unit": "ns/iter",
            "extra": "iterations: 1328967\ncpu: 529.8826080707798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1062.667537291484,
            "unit": "ns/iter",
            "extra": "iterations: 658531\ncpu: 1062.6375979262934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4427.858054305679,
            "unit": "ns/iter",
            "extra": "iterations: 181344\ncpu: 4427.5939650608825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19211.410419106607,
            "unit": "ns/iter",
            "extra": "iterations: 42710\ncpu: 19210.16623741513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15444.071560115603,
            "unit": "ns/iter",
            "extra": "iterations: 53214\ncpu: 15443.020633667848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15120.005879207994,
            "unit": "ns/iter",
            "extra": "iterations: 54259\ncpu: 15119.12862382277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15293.78753218631,
            "unit": "ns/iter",
            "extra": "iterations: 53594\ncpu: 15292.989886927673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47573.831516187856,
            "unit": "ns/iter",
            "extra": "iterations: 17610\ncpu: 47571.54457694497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 493364.3392245852,
            "unit": "ns/iter",
            "extra": "iterations: 1754\ncpu: 493327.42303306767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 407677.9341428975,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 407652.17188229715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 408037.63580824,
            "unit": "ns/iter",
            "extra": "iterations: 2128\ncpu: 408017.19924811996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 408380.60431317665,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 408359.6343178637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 253600.60579960607,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 253597.41602067192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 403059.11620371847,
            "unit": "ns/iter",
            "extra": "iterations: 2160\ncpu: 403046.1574074076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2051264.9376392064,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2051030.5122494486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 839168.7923691858,
            "unit": "ns/iter",
            "extra": "iterations: 1127\ncpu: 839148.0922803875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2589598.704225288,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2589509.8591549294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4351.283109568037,
            "unit": "ns/iter",
            "extra": "iterations: 181813\ncpu: 4350.974352769047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18821.389505664163,
            "unit": "ns/iter",
            "extra": "iterations: 43776\ncpu: 18820.191429093546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15144.78413419238,
            "unit": "ns/iter",
            "extra": "iterations: 54608\ncpu: 15144.116246703863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14883.794390327106,
            "unit": "ns/iter",
            "extra": "iterations: 55333\ncpu: 14882.899896987316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14990.326461044653,
            "unit": "ns/iter",
            "extra": "iterations: 54858\ncpu: 14989.62594334454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47310.660503250874,
            "unit": "ns/iter",
            "extra": "iterations: 17685\ncpu: 47308.159457167196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 515369.46559903177,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 515340.80664294306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 420034.2603918089,
            "unit": "ns/iter",
            "extra": "iterations: 2093\ncpu: 420021.40468227444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 416842.9148429642,
            "unit": "ns/iter",
            "extra": "iterations: 2102\ncpu: 416815.03330161574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 410784.3859896483,
            "unit": "ns/iter",
            "extra": "iterations: 2127\ncpu: 410750.91678420303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 249388.5842437935,
            "unit": "ns/iter",
            "extra": "iterations: 3478\ncpu: 249372.8004600337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 411736.3327040695,
            "unit": "ns/iter",
            "extra": "iterations: 2119\ncpu: 411709.15526191634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2065004.0770974278,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2064761.6780045251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 809897.685763931,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 809843.8368055522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4385.96836007628,
            "unit": "ns/iter",
            "extra": "iterations: 181606\ncpu: 4385.874916027012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18962.706019524776,
            "unit": "ns/iter",
            "extra": "iterations: 43741\ncpu: 18962.072197709218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15204.251251614505,
            "unit": "ns/iter",
            "extra": "iterations: 54929\ncpu: 15203.737552112794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15001.616203961144,
            "unit": "ns/iter",
            "extra": "iterations: 55579\ncpu: 15001.03996113633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15114.29554994319,
            "unit": "ns/iter",
            "extra": "iterations: 55033\ncpu: 15113.537332146156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46572.688987335656,
            "unit": "ns/iter",
            "extra": "iterations: 17607\ncpu: 46570.68211506775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 500485.48254147643,
            "unit": "ns/iter",
            "extra": "iterations: 1747\ncpu: 500482.7704636524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 408509.15120596375,
            "unit": "ns/iter",
            "extra": "iterations: 2156\ncpu: 408506.6790352507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 409081.03302325436,
            "unit": "ns/iter",
            "extra": "iterations: 2150\ncpu: 409076.0930232571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 407722.2717593069,
            "unit": "ns/iter",
            "extra": "iterations: 2160\ncpu: 407720.00000000274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 252621.43530764576,
            "unit": "ns/iter",
            "extra": "iterations: 3478\ncpu: 252620.3565267399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 404621.9423962884,
            "unit": "ns/iter",
            "extra": "iterations: 2170\ncpu: 404619.5391705074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 336.2177243601117,
            "unit": "ns/iter",
            "extra": "iterations: 2072639\ncpu: 336.21576164493706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1757.4099124231868,
            "unit": "ns/iter",
            "extra": "iterations: 396109\ncpu: 1757.34456929783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1371.703981250863,
            "unit": "ns/iter",
            "extra": "iterations: 509890\ncpu: 1371.6946792445378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1366.3263079092865,
            "unit": "ns/iter",
            "extra": "iterations: 511618\ncpu: 1366.312756783387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1126.9362161257022,
            "unit": "ns/iter",
            "extra": "iterations: 621897\ncpu: 1126.9306653674203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7963.969879107531,
            "unit": "ns/iter",
            "extra": "iterations: 87846\ncpu: 7963.999499123513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19535.617135991484,
            "unit": "ns/iter",
            "extra": "iterations: 35796\ncpu: 19535.512347748343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4943.336784154633,
            "unit": "ns/iter",
            "extra": "iterations: 141319\ncpu: 4943.355812028135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4947.266861526569,
            "unit": "ns/iter",
            "extra": "iterations: 141298\ncpu: 4947.1860889750715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4916.815376854833,
            "unit": "ns/iter",
            "extra": "iterations: 142734\ncpu: 4916.794176580284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10502.62613508834,
            "unit": "ns/iter",
            "extra": "iterations: 66845\ncpu: 10502.534220958898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8466.816131568212,
            "unit": "ns/iter",
            "extra": "iterations: 82695\ncpu: 8466.665457403677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2519.0405448712586,
            "unit": "ns/iter",
            "extra": "iterations: 277717\ncpu: 2518.9916353698172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12240.07055477127,
            "unit": "ns/iter",
            "extra": "iterations: 57303\ncpu: 12240.134024396755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9619.173701300087,
            "unit": "ns/iter",
            "extra": "iterations: 72688\ncpu: 9619.121450583407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9612.169157927754,
            "unit": "ns/iter",
            "extra": "iterations: 72654\ncpu: 9612.08742808375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10209.079786924503,
            "unit": "ns/iter",
            "extra": "iterations: 68708\ncpu: 10208.971298829774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24995.731994136335,
            "unit": "ns/iter",
            "extra": "iterations: 27977\ncpu: 24995.05307931543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100215.47463456154,
            "unit": "ns/iter",
            "extra": "iterations: 6978\ncpu: 100215.92146746832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86454.4556351981,
            "unit": "ns/iter",
            "extra": "iterations: 8092\ncpu: 86453.96688086972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 86202.58064914511,
            "unit": "ns/iter",
            "extra": "iterations: 8103\ncpu: 86201.86350734299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 86414.06468095655,
            "unit": "ns/iter",
            "extra": "iterations: 8024\ncpu: 86413.23529411618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53990.03010006989,
            "unit": "ns/iter",
            "extra": "iterations: 12990\ncpu: 53988.90685142397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85676.10650526153,
            "unit": "ns/iter",
            "extra": "iterations: 8178\ncpu: 85675.28735632233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2382.1495813126216,
            "unit": "ns/iter",
            "extra": "iterations: 294014\ncpu: 2382.139285884349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11959.210588476164,
            "unit": "ns/iter",
            "extra": "iterations: 58422\ncpu: 11959.267056930546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9468.39210166575,
            "unit": "ns/iter",
            "extra": "iterations: 73889\ncpu: 9468.148168198184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9404.399600992612,
            "unit": "ns/iter",
            "extra": "iterations: 74184\ncpu: 9404.33112261403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9936.584969820773,
            "unit": "ns/iter",
            "extra": "iterations: 70578\ncpu: 9936.627560996492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23960.420789368683,
            "unit": "ns/iter",
            "extra": "iterations: 29188\ncpu: 23960.247361929356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99105.46657243851,
            "unit": "ns/iter",
            "extra": "iterations: 7075\ncpu: 99103.71731448587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83658.44684662743,
            "unit": "ns/iter",
            "extra": "iterations: 8372\ncpu: 83657.76397515526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 83512.00143626207,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 83511.23877917544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 84105.36131430317,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 84104.8926729814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54614.87058914944,
            "unit": "ns/iter",
            "extra": "iterations: 12866\ncpu: 54614.4100730608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 84974.29879081929,
            "unit": "ns/iter",
            "extra": "iterations: 8270\ncpu: 84973.4099153563 ns\nthreads: 1"
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
        "date": 1702504692367,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 728.4949975026624,
            "unit": "ns/iter",
            "extra": "iterations: 963019\ncpu: 728.4783581632347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11352.382285245492,
            "unit": "ns/iter",
            "extra": "iterations: 72990\ncpu: 11352.00164406083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24883.82893498027,
            "unit": "ns/iter",
            "extra": "iterations: 32929\ncpu: 24882.39545689209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38771.4852607735,
            "unit": "ns/iter",
            "extra": "iterations: 20286\ncpu: 38770.63985014296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48749.57249737124,
            "unit": "ns/iter",
            "extra": "iterations: 16173\ncpu: 48749.23638162374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50298.959799999924,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50295.84000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61024.72000000034,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61019.99000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70271.66097166421,
            "unit": "ns/iter",
            "extra": "iterations: 12350\ncpu: 70271.3198380567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81341.04513856354,
            "unit": "ns/iter",
            "extra": "iterations: 10789\ncpu: 81340.17981277223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 610.8691799888904,
            "unit": "ns/iter",
            "extra": "iterations: 1188679\ncpu: 610.8549070018059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 503.83190194544534,
            "unit": "ns/iter",
            "extra": "iterations: 1390492\ncpu: 503.80484030113047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 504.0932443440099,
            "unit": "ns/iter",
            "extra": "iterations: 1388481\ncpu: 504.0734442891189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 501.2361852036946,
            "unit": "ns/iter",
            "extra": "iterations: 1374595\ncpu: 501.2376008933546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1020.8741975628866,
            "unit": "ns/iter",
            "extra": "iterations: 690241\ncpu: 1020.8650311992473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4320.213945151123,
            "unit": "ns/iter",
            "extra": "iterations: 188553\ncpu: 4320.22614331249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19318.096200410208,
            "unit": "ns/iter",
            "extra": "iterations: 42952\ncpu: 19317.575433041533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15495.24680335695,
            "unit": "ns/iter",
            "extra": "iterations: 53650\ncpu: 15495.015843429648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15095.352487902166,
            "unit": "ns/iter",
            "extra": "iterations: 54765\ncpu: 15094.956632885996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15283.048077812648,
            "unit": "ns/iter",
            "extra": "iterations: 54079\ncpu: 15282.969359640483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 45354.28967971273,
            "unit": "ns/iter",
            "extra": "iterations: 18265\ncpu: 45352.92088694234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 498054.97816347086,
            "unit": "ns/iter",
            "extra": "iterations: 1786\ncpu: 497970.5487122073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 400383.8884809588,
            "unit": "ns/iter",
            "extra": "iterations: 2179\ncpu: 400368.1964203768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 398838.03942004265,
            "unit": "ns/iter",
            "extra": "iterations: 2207\ncpu: 398832.07974626234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 401738.7142856787,
            "unit": "ns/iter",
            "extra": "iterations: 2198\ncpu: 401730.1637852598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 248818.24020442876,
            "unit": "ns/iter",
            "extra": "iterations: 3522\ncpu: 248808.74503123187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 398889.8299539366,
            "unit": "ns/iter",
            "extra": "iterations: 2170\ncpu: 398867.9262672811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2010649.757642014,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2010436.2445414886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 778944.360833312,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 778921.833333331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2537132.046703144,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2536939.01098901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4450.576431916802,
            "unit": "ns/iter",
            "extra": "iterations: 182535\ncpu: 4450.454981236475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18907.83353556548,
            "unit": "ns/iter",
            "extra": "iterations: 43679\ncpu: 18907.887085327005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15066.485958507536,
            "unit": "ns/iter",
            "extra": "iterations: 54517\ncpu: 15066.39947172439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14825.954013119028,
            "unit": "ns/iter",
            "extra": "iterations: 54733\ncpu: 14825.394186322674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15065.6274996804,
            "unit": "ns/iter",
            "extra": "iterations: 54757\ncpu: 15065.063827455857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47625.330810083644,
            "unit": "ns/iter",
            "extra": "iterations: 17702\ncpu: 47623.895605016114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 499077.0325714818,
            "unit": "ns/iter",
            "extra": "iterations: 1750\ncpu: 499053.1999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 406879.51099673583,
            "unit": "ns/iter",
            "extra": "iterations: 2137\ncpu: 406866.3079082839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 403142.23466542247,
            "unit": "ns/iter",
            "extra": "iterations: 2152\ncpu: 403139.9163568769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 402453.0993989713,
            "unit": "ns/iter",
            "extra": "iterations: 2163\ncpu: 402444.4290337497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 239724.47863250875,
            "unit": "ns/iter",
            "extra": "iterations: 3627\ncpu: 239723.021781086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 401224.3175398444,
            "unit": "ns/iter",
            "extra": "iterations: 2195\ncpu: 401215.30751708534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2012232.3837720538,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2012088.377192979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 795473.3088607537,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 795457.5527426167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4306.541599570724,
            "unit": "ns/iter",
            "extra": "iterations: 186300\ncpu: 4306.446591519076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19102.740680858366,
            "unit": "ns/iter",
            "extra": "iterations: 43915\ncpu: 19102.249800751404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15328.264682663628,
            "unit": "ns/iter",
            "extra": "iterations: 54469\ncpu: 15328.309680735932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15064.628921151885,
            "unit": "ns/iter",
            "extra": "iterations: 55309\ncpu: 15064.309606031618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15213.801397023768,
            "unit": "ns/iter",
            "extra": "iterations: 54974\ncpu: 15213.457270709732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48409.45255348115,
            "unit": "ns/iter",
            "extra": "iterations: 17388\ncpu: 48409.24775707352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 485342.39789123693,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 485320.25527192064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 397482.6355013425,
            "unit": "ns/iter",
            "extra": "iterations: 2214\ncpu: 397473.4869015348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 397390.47709751304,
            "unit": "ns/iter",
            "extra": "iterations: 2205\ncpu: 397379.9546485232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 398574.730856343,
            "unit": "ns/iter",
            "extra": "iterations: 2207\ncpu: 398575.75894879847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 243134.45562949136,
            "unit": "ns/iter",
            "extra": "iterations: 3606\ncpu: 243130.94841930235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 393383.89887643134,
            "unit": "ns/iter",
            "extra": "iterations: 2225\ncpu: 393369.6179775309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 311.3741736015674,
            "unit": "ns/iter",
            "extra": "iterations: 2244680\ncpu: 311.37498440757525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1720.0391139738688,
            "unit": "ns/iter",
            "extra": "iterations: 406760\ncpu: 1720.01253810602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1291.8376135798305,
            "unit": "ns/iter",
            "extra": "iterations: 542570\ncpu: 1291.8285198223373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1340.0432736427972,
            "unit": "ns/iter",
            "extra": "iterations: 552461\ncpu: 1340.0200195126915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1101.9607503675454,
            "unit": "ns/iter",
            "extra": "iterations: 635955\ncpu: 1101.936929499729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8125.675024085519,
            "unit": "ns/iter",
            "extra": "iterations: 86151\ncpu: 8125.699063272577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19698.855825460825,
            "unit": "ns/iter",
            "extra": "iterations: 35568\ncpu: 19698.355263157762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4664.091360264341,
            "unit": "ns/iter",
            "extra": "iterations: 149912\ncpu: 4663.984871124429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4640.698410488733,
            "unit": "ns/iter",
            "extra": "iterations: 150801\ncpu: 4640.622409665706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4697.077659815618,
            "unit": "ns/iter",
            "extra": "iterations: 150142\ncpu: 4697.03280894095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9836.705108977367,
            "unit": "ns/iter",
            "extra": "iterations: 71345\ncpu: 9836.60522811696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8011.561191332334,
            "unit": "ns/iter",
            "extra": "iterations: 87398\ncpu: 8011.417881416097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2419.9601870456354,
            "unit": "ns/iter",
            "extra": "iterations: 289127\ncpu: 2419.901289052889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12003.407151949106,
            "unit": "ns/iter",
            "extra": "iterations: 58138\ncpu: 12003.450411091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9539.982750182759,
            "unit": "ns/iter",
            "extra": "iterations: 73566\ncpu: 9539.69496778405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9490.271675359638,
            "unit": "ns/iter",
            "extra": "iterations: 73632\ncpu: 9490.197196870879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10047.225402427335,
            "unit": "ns/iter",
            "extra": "iterations: 69702\ncpu: 10047.051734527102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24555.03003780935,
            "unit": "ns/iter",
            "extra": "iterations: 28564\ncpu: 24554.89427251083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97696.00027728011,
            "unit": "ns/iter",
            "extra": "iterations: 7213\ncpu: 97696.29835020207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83998.1077622361,
            "unit": "ns/iter",
            "extra": "iterations: 8361\ncpu: 83994.71355101057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83212.04565449615,
            "unit": "ns/iter",
            "extra": "iterations: 8411\ncpu: 83211.4017358224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83292.28263715022,
            "unit": "ns/iter",
            "extra": "iterations: 8403\ncpu: 83289.44424610175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52060.16289223905,
            "unit": "ns/iter",
            "extra": "iterations: 13512\ncpu: 52059.4582593247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83066.11623483771,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 83066.34181126735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2355.8036194406423,
            "unit": "ns/iter",
            "extra": "iterations: 297173\ncpu: 2355.733528954508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11744.39275425453,
            "unit": "ns/iter",
            "extra": "iterations: 59704\ncpu: 11744.02217606856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9292.825714362398,
            "unit": "ns/iter",
            "extra": "iterations: 74332\ncpu: 9292.217349190016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9020.027482292251,
            "unit": "ns/iter",
            "extra": "iterations: 77650\ncpu: 9020.05408886028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9486.640476446937,
            "unit": "ns/iter",
            "extra": "iterations: 74048\ncpu: 9486.268366465003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23480.486568163924,
            "unit": "ns/iter",
            "extra": "iterations: 29780\ncpu: 23479.637340496854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97593.27901441895,
            "unit": "ns/iter",
            "extra": "iterations: 7143\ncpu: 97587.83424331549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81186.98274456027,
            "unit": "ns/iter",
            "extra": "iterations: 8577\ncpu: 81182.58132214066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80999.72396077357,
            "unit": "ns/iter",
            "extra": "iterations: 8564\ncpu: 80997.4194301739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81737.43581671946,
            "unit": "ns/iter",
            "extra": "iterations: 8577\ncpu: 81737.67051416606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52318.510335527724,
            "unit": "ns/iter",
            "extra": "iterations: 13352\ncpu: 52315.690533253335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82675.11385847745,
            "unit": "ns/iter",
            "extra": "iterations: 8493\ncpu: 82670.49334746339 ns\nthreads: 1"
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
        "date": 1705576341072,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 720.5743533280081,
            "unit": "ns/iter",
            "extra": "iterations: 968188\ncpu: 720.5799906629704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11149.077717987679,
            "unit": "ns/iter",
            "extra": "iterations: 74706\ncpu: 11148.54496292132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24747.08939703085,
            "unit": "ns/iter",
            "extra": "iterations: 33849\ncpu: 24747.05308871753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39162.11474724998,
            "unit": "ns/iter",
            "extra": "iterations: 21543\ncpu: 39160.96643921459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49001.94254678332,
            "unit": "ns/iter",
            "extra": "iterations: 15926\ncpu: 48999.55418812004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50456.34010000413,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50455.450000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61103.76400000632,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61100.99 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69884.29112694082,
            "unit": "ns/iter",
            "extra": "iterations: 12352\ncpu: 69880.69948186527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 80749.9016875213,
            "unit": "ns/iter",
            "extra": "iterations: 10548\ncpu: 80747.92377701926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 593.1374407421118,
            "unit": "ns/iter",
            "extra": "iterations: 1171574\ncpu: 593.1144767637387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 493.32008231807333,
            "unit": "ns/iter",
            "extra": "iterations: 1420344\ncpu: 493.3052133849264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 501.21937938643134,
            "unit": "ns/iter",
            "extra": "iterations: 1399776\ncpu: 501.2059786708721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 501.8079559106729,
            "unit": "ns/iter",
            "extra": "iterations: 1395893\ncpu: 501.80214386059623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1009.9543534315833,
            "unit": "ns/iter",
            "extra": "iterations: 692626\ncpu: 1009.936531403672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4450.254349924177,
            "unit": "ns/iter",
            "extra": "iterations: 181325\ncpu: 4450.173445470836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19202.594178726144,
            "unit": "ns/iter",
            "extra": "iterations: 42568\ncpu: 19202.0296936666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14749.39190178252,
            "unit": "ns/iter",
            "extra": "iterations: 54654\ncpu: 14749.160171259206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15403.47924965565,
            "unit": "ns/iter",
            "extra": "iterations: 55228\ncpu: 15403.55073513435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14658.510995567263,
            "unit": "ns/iter",
            "extra": "iterations: 56159\ncpu: 14658.035221424894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46660.032216348125,
            "unit": "ns/iter",
            "extra": "iterations: 17786\ncpu: 46659.36129540087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 485243.8662563198,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 485236.09401231067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 395088.70266543655,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 395072.97794117697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 396230.3956043859,
            "unit": "ns/iter",
            "extra": "iterations: 2184\ncpu: 396219.551282052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 397636.49568766466,
            "unit": "ns/iter",
            "extra": "iterations: 2203\ncpu: 397627.5533363598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 245155.8641837023,
            "unit": "ns/iter",
            "extra": "iterations: 3571\ncpu: 245150.2660319245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 393810.9054298897,
            "unit": "ns/iter",
            "extra": "iterations: 2210\ncpu: 393793.8461538458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2007171.954248549,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2007020.2614379087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 791110.4974747328,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 791098.9057239068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2539830.596153971,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2539728.5714285704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4317.087419209285,
            "unit": "ns/iter",
            "extra": "iterations: 184273\ncpu: 4316.9872960227485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18923.125781982286,
            "unit": "ns/iter",
            "extra": "iterations: 43639\ncpu: 18922.2942780541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15093.096155608384,
            "unit": "ns/iter",
            "extra": "iterations: 54547\ncpu: 15092.84470273344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14847.036638630276,
            "unit": "ns/iter",
            "extra": "iterations: 55406\ncpu: 14846.471501281478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14807.863511829477,
            "unit": "ns/iter",
            "extra": "iterations: 56210\ncpu: 14807.470201031894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46644.93308402828,
            "unit": "ns/iter",
            "extra": "iterations: 17649\ncpu: 46644.63142387676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 503505.35426266486,
            "unit": "ns/iter",
            "extra": "iterations: 1736\ncpu: 503491.9354838722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 418490.163525013,
            "unit": "ns/iter",
            "extra": "iterations: 2122\ncpu: 418479.2648444867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 405818.2980102,
            "unit": "ns/iter",
            "extra": "iterations: 2161\ncpu: 405805.13651087694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 400663.7131747246,
            "unit": "ns/iter",
            "extra": "iterations: 2186\ncpu: 400667.24611161975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 241611.1352244613,
            "unit": "ns/iter",
            "extra": "iterations: 3631\ncpu: 241604.51666207623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 398004.2588181457,
            "unit": "ns/iter",
            "extra": "iterations: 2183\ncpu: 397995.785616124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2019859.4879650476,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2019708.0962800893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 806458.393073579,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 806445.0216450208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4284.768141450975,
            "unit": "ns/iter",
            "extra": "iterations: 187485\ncpu: 4284.63983785371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18847.166068914983,
            "unit": "ns/iter",
            "extra": "iterations: 44054\ncpu: 18846.66999591407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15246.32764767175,
            "unit": "ns/iter",
            "extra": "iterations: 54699\ncpu: 15246.223879778356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14962.320394465414,
            "unit": "ns/iter",
            "extra": "iterations: 55569\ncpu: 14961.948208533537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14777.911225825143,
            "unit": "ns/iter",
            "extra": "iterations: 55016\ncpu: 14777.651955794721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48003.01894737333,
            "unit": "ns/iter",
            "extra": "iterations: 17575\ncpu: 47909.308677098496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 482905.77759384544,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 482901.8763796907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 395961.55600906094,
            "unit": "ns/iter",
            "extra": "iterations: 2205\ncpu: 395950.1587301586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 394985.7511353505,
            "unit": "ns/iter",
            "extra": "iterations: 2202\ncpu: 394972.5703905538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 393360.2734234027,
            "unit": "ns/iter",
            "extra": "iterations: 2220\ncpu: 393355.6756756762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 241206.38379706073,
            "unit": "ns/iter",
            "extra": "iterations: 3666\ncpu: 241203.00054555287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 393068.37128712493,
            "unit": "ns/iter",
            "extra": "iterations: 2222\ncpu: 393057.06570656993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 311.1738496338001,
            "unit": "ns/iter",
            "extra": "iterations: 2246263\ncpu: 311.17077563936095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1701.66486749333,
            "unit": "ns/iter",
            "extra": "iterations: 411300\ncpu: 1701.6416241186412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1347.1309127535303,
            "unit": "ns/iter",
            "extra": "iterations: 521225\ncpu: 1347.1042256223352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1308.7843036486952,
            "unit": "ns/iter",
            "extra": "iterations: 527320\ncpu: 1308.7741788667163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1090.987348510539,
            "unit": "ns/iter",
            "extra": "iterations: 642454\ncpu: 1090.9601309977052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8091.2807587381785,
            "unit": "ns/iter",
            "extra": "iterations: 86512\ncpu: 8091.148048825581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19789.879733499063,
            "unit": "ns/iter",
            "extra": "iterations: 35122\ncpu: 19789.593417231452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4607.082833277143,
            "unit": "ns/iter",
            "extra": "iterations: 150483\ncpu: 4606.915066818238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4655.744368371452,
            "unit": "ns/iter",
            "extra": "iterations: 150001\ncpu: 4655.4182972113085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4632.471572142357,
            "unit": "ns/iter",
            "extra": "iterations: 141692\ncpu: 4632.507833893238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9903.973362253611,
            "unit": "ns/iter",
            "extra": "iterations: 70539\ncpu: 9903.47467358492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8850.550833753976,
            "unit": "ns/iter",
            "extra": "iterations: 79160\ncpu: 8850.405507832156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2412.859426616961,
            "unit": "ns/iter",
            "extra": "iterations: 289998\ncpu: 2412.793191677222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11898.148243608994,
            "unit": "ns/iter",
            "extra": "iterations: 58586\ncpu: 11897.705936571698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9496.002059871858,
            "unit": "ns/iter",
            "extra": "iterations: 73791\ncpu: 9495.804366386214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9429.214271304105,
            "unit": "ns/iter",
            "extra": "iterations: 74359\ncpu: 9429.119541682932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9963.150316320376,
            "unit": "ns/iter",
            "extra": "iterations: 70498\ncpu: 9963.139379840666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24418.81283571919,
            "unit": "ns/iter",
            "extra": "iterations: 28670\ncpu: 24417.983955354277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 96901.82195970614,
            "unit": "ns/iter",
            "extra": "iterations: 7195\ncpu: 96900.27797081326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83759.63028632362,
            "unit": "ns/iter",
            "extra": "iterations: 8347\ncpu: 83757.99688510863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83432.24144508816,
            "unit": "ns/iter",
            "extra": "iterations: 8387\ncpu: 83429.42649338277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 82317.32751246744,
            "unit": "ns/iter",
            "extra": "iterations: 8418\ncpu: 82314.93228795506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 51315.185757153704,
            "unit": "ns/iter",
            "extra": "iterations: 13663\ncpu: 51312.85954768308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 82680.49940953788,
            "unit": "ns/iter",
            "extra": "iterations: 8468\ncpu: 82679.61738308915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2340.6236745784627,
            "unit": "ns/iter",
            "extra": "iterations: 296698\ncpu: 2340.5890838495793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11633.201822678162,
            "unit": "ns/iter",
            "extra": "iterations: 60241\ncpu: 11632.819840308124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9303.375004976997,
            "unit": "ns/iter",
            "extra": "iterations: 75327\ncpu: 9303.057336678852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9154.659734583258,
            "unit": "ns/iter",
            "extra": "iterations: 76408\ncpu: 9154.54402680346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9600.794937195105,
            "unit": "ns/iter",
            "extra": "iterations: 72924\ncpu: 9600.702100817327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23472.725274356664,
            "unit": "ns/iter",
            "extra": "iterations: 29615\ncpu: 23471.781191963804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96940.69731220507,
            "unit": "ns/iter",
            "extra": "iterations: 7255\ncpu: 96937.84975878574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81349.20543175732,
            "unit": "ns/iter",
            "extra": "iterations: 8616\ncpu: 81347.20287836669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80136.51860057173,
            "unit": "ns/iter",
            "extra": "iterations: 8575\ncpu: 80135.53352769716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81596.65911467256,
            "unit": "ns/iter",
            "extra": "iterations: 8607\ncpu: 81597.35099337662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 51743.74693968562,
            "unit": "ns/iter",
            "extra": "iterations: 13479\ncpu: 51741.286445582264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 81788.80915492612,
            "unit": "ns/iter",
            "extra": "iterations: 8520\ncpu: 81786.29107981139 ns\nthreads: 1"
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
        "date": 1705774155240,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 727.0483639443662,
            "unit": "ns/iter",
            "extra": "iterations: 958586\ncpu: 727.0118695662154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11360.841002408144,
            "unit": "ns/iter",
            "extra": "iterations: 73064\ncpu: 11360.441530712798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25087.386417003905,
            "unit": "ns/iter",
            "extra": "iterations: 33218\ncpu: 25085.96243000783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39675.68341353134,
            "unit": "ns/iter",
            "extra": "iterations: 21198\ncpu: 39674.445702424775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50147.35211001404,
            "unit": "ns/iter",
            "extra": "iterations: 15853\ncpu: 50144.635084842026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 52006.78219999872,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52003.15 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62238.5764459838,
            "unit": "ns/iter",
            "extra": "iterations: 13866\ncpu: 62235.94403577098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71991.09895832589,
            "unit": "ns/iter",
            "extra": "iterations: 12096\ncpu: 71986.63194444445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 82709.5312144245,
            "unit": "ns/iter",
            "extra": "iterations: 10540\ncpu: 82705.39848197342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 601.4884174656404,
            "unit": "ns/iter",
            "extra": "iterations: 1165030\ncpu: 601.4857128142629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 505.4696427381257,
            "unit": "ns/iter",
            "extra": "iterations: 1379604\ncpu: 505.44293869835127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 523.4375785988531,
            "unit": "ns/iter",
            "extra": "iterations: 1390765\ncpu: 523.4079804999402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 494.43126194670083,
            "unit": "ns/iter",
            "extra": "iterations: 1419323\ncpu: 494.42896366788864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1012.179762321193,
            "unit": "ns/iter",
            "extra": "iterations: 691858\ncpu: 1012.1565407930544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4541.106189047942,
            "unit": "ns/iter",
            "extra": "iterations: 180367\ncpu: 4541.055181934603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19161.498019200528,
            "unit": "ns/iter",
            "extra": "iterations: 42912\ncpu: 19161.13674496645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15507.321484843987,
            "unit": "ns/iter",
            "extra": "iterations: 53312\ncpu: 15507.127851140443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15276.303326595047,
            "unit": "ns/iter",
            "extra": "iterations: 54410\ncpu: 15275.85186546592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14892.257825097811,
            "unit": "ns/iter",
            "extra": "iterations: 54568\ncpu: 14892.08876997505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47238.728428548566,
            "unit": "ns/iter",
            "extra": "iterations: 17697\ncpu: 47237.58264112552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 501690.46632709994,
            "unit": "ns/iter",
            "extra": "iterations: 1767\ncpu: 501522.24108658766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 398861.5916473474,
            "unit": "ns/iter",
            "extra": "iterations: 2155\ncpu: 398844.87238979014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 398298.4304788215,
            "unit": "ns/iter",
            "extra": "iterations: 2172\ncpu: 398279.604051565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 398542.0652573503,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 398529.733455883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 243446.29519773507,
            "unit": "ns/iter",
            "extra": "iterations: 3540\ncpu: 243443.3898305089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 394517.9072727259,
            "unit": "ns/iter",
            "extra": "iterations: 2200\ncpu: 394497.81818181794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1997140.1533477162,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 1996917.278617708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 772598.3880229797,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 772535.6029532404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2520389.763736143,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2520220.3296703226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4198.905500155387,
            "unit": "ns/iter",
            "extra": "iterations: 187122\ncpu: 4198.799713555852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 18896.55347275551,
            "unit": "ns/iter",
            "extra": "iterations: 42891\ncpu: 18895.90823249643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15370.654599651041,
            "unit": "ns/iter",
            "extra": "iterations: 53341\ncpu: 15370.257400498658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15154.314554500801,
            "unit": "ns/iter",
            "extra": "iterations: 55062\ncpu: 15154.049980022592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14984.241510132746,
            "unit": "ns/iter",
            "extra": "iterations: 54035\ncpu: 14984.047376700295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47509.38235790459,
            "unit": "ns/iter",
            "extra": "iterations: 17787\ncpu: 47508.87164783234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 489140.60569799057,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 489126.552706555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 404740.80037313554,
            "unit": "ns/iter",
            "extra": "iterations: 2144\ncpu: 404736.00746268564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 404978.1459685131,
            "unit": "ns/iter",
            "extra": "iterations: 2158\ncpu: 404966.86746988044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 401331.9110500144,
            "unit": "ns/iter",
            "extra": "iterations: 2181\ncpu: 401324.9426868424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 241577.6641729137,
            "unit": "ns/iter",
            "extra": "iterations: 3609\ncpu: 241574.8406760871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 398619.6177676533,
            "unit": "ns/iter",
            "extra": "iterations: 2195\ncpu: 398607.38041002466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2016462.6017698583,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2016309.0707964525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 792997.7682512602,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 792973.514431237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4383.291484428026,
            "unit": "ns/iter",
            "extra": "iterations: 181996\ncpu: 4383.217763027761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 18942.36338822818,
            "unit": "ns/iter",
            "extra": "iterations: 43598\ncpu: 18941.827606771047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15140.378285127865,
            "unit": "ns/iter",
            "extra": "iterations: 54488\ncpu: 15140.144618998727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 14914.062142704024,
            "unit": "ns/iter",
            "extra": "iterations: 55276\ncpu: 14913.816122729611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 14771.740775612667,
            "unit": "ns/iter",
            "extra": "iterations: 56291\ncpu: 14771.563837913673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47418.633831521445,
            "unit": "ns/iter",
            "extra": "iterations: 17664\ncpu: 47417.3007246377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 491175.5059154683,
            "unit": "ns/iter",
            "extra": "iterations: 1775\ncpu: 491154.08450704056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 404229.9834024908,
            "unit": "ns/iter",
            "extra": "iterations: 2169\ncpu: 404225.5878284935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 402262.7922374349,
            "unit": "ns/iter",
            "extra": "iterations: 2190\ncpu: 402238.5844748848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 398818.7739130733,
            "unit": "ns/iter",
            "extra": "iterations: 2185\ncpu: 398794.41647597234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 243060.69621297217,
            "unit": "ns/iter",
            "extra": "iterations: 3644\ncpu: 243051.28979143852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 399261.1859296557,
            "unit": "ns/iter",
            "extra": "iterations: 2189\ncpu: 399232.61763362295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 313.2456750052335,
            "unit": "ns/iter",
            "extra": "iterations: 2234916\ncpu: 313.24416667114355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1772.352817588461,
            "unit": "ns/iter",
            "extra": "iterations: 407902\ncpu: 1772.297512637846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1407.4440201544558,
            "unit": "ns/iter",
            "extra": "iterations: 498349\ncpu: 1407.4279270150032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1390.2171838660017,
            "unit": "ns/iter",
            "extra": "iterations: 502611\ncpu: 1390.1804775462565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1104.6768234542114,
            "unit": "ns/iter",
            "extra": "iterations: 612464\ncpu: 1104.6487630293411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8190.753785400477,
            "unit": "ns/iter",
            "extra": "iterations: 85592\ncpu: 8190.648658753228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19109.16171039403,
            "unit": "ns/iter",
            "extra": "iterations: 36553\ncpu: 19108.647717013624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4755.349151942763,
            "unit": "ns/iter",
            "extra": "iterations: 147042\ncpu: 4755.327049414483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4724.316462164065,
            "unit": "ns/iter",
            "extra": "iterations: 146779\ncpu: 4724.192152828384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4726.7729684543965,
            "unit": "ns/iter",
            "extra": "iterations: 148323\ncpu: 4726.653991626463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9997.237270004129,
            "unit": "ns/iter",
            "extra": "iterations: 70110\ncpu: 9997.05748110105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9108.157701902019,
            "unit": "ns/iter",
            "extra": "iterations: 76968\ncpu: 9108.021515435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2421.235889719082,
            "unit": "ns/iter",
            "extra": "iterations: 289080\ncpu: 2421.177874636782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12017.942484872903,
            "unit": "ns/iter",
            "extra": "iterations: 58176\ncpu: 12017.773652365218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9482.561761358369,
            "unit": "ns/iter",
            "extra": "iterations: 73784\ncpu: 9482.267158191446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9431.301984142387,
            "unit": "ns/iter",
            "extra": "iterations: 74037\ncpu: 9431.18981050013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9999.521831006472,
            "unit": "ns/iter",
            "extra": "iterations: 70038\ncpu: 9999.280390645128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24722.63107378542,
            "unit": "ns/iter",
            "extra": "iterations: 28339\ncpu: 24722.192032182003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97528.83165689187,
            "unit": "ns/iter",
            "extra": "iterations: 7158\ncpu: 97527.42386141446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84334.57947661047,
            "unit": "ns/iter",
            "extra": "iterations: 8254\ncpu: 84331.82699297302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 82927.60941567073,
            "unit": "ns/iter",
            "extra": "iterations: 8454\ncpu: 82926.5081618168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83017.30876018183,
            "unit": "ns/iter",
            "extra": "iterations: 8356\ncpu: 83014.49258018118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 51852.60955180027,
            "unit": "ns/iter",
            "extra": "iterations: 13610\ncpu: 51851.29316678892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83611.604464184,
            "unit": "ns/iter",
            "extra": "iterations: 8333\ncpu: 83610.47641905754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2391.068988732592,
            "unit": "ns/iter",
            "extra": "iterations: 292613\ncpu: 2391.025347472642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11695.86723815341,
            "unit": "ns/iter",
            "extra": "iterations: 59844\ncpu: 11695.730566138469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9329.163205182711,
            "unit": "ns/iter",
            "extra": "iterations: 75016\ncpu: 9328.82451743635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9263.95345484299,
            "unit": "ns/iter",
            "extra": "iterations: 75604\ncpu: 9263.757208613451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9752.308005181338,
            "unit": "ns/iter",
            "extra": "iterations: 71791\ncpu: 9752.1026312491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23310.246108300107,
            "unit": "ns/iter",
            "extra": "iterations: 30064\ncpu: 23309.802421500786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97065.96843275588,
            "unit": "ns/iter",
            "extra": "iterations: 7191\ncpu: 97064.23306911397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 79735.497908438,
            "unit": "ns/iter",
            "extra": "iterations: 8606\ncpu: 79731.10620497233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80665.76189376369,
            "unit": "ns/iter",
            "extra": "iterations: 8660\ncpu: 80664.68822170886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82452.25402003944,
            "unit": "ns/iter",
            "extra": "iterations: 8582\ncpu: 82449.33581915584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52452.102510452976,
            "unit": "ns/iter",
            "extra": "iterations: 13384\ncpu: 52451.09085475227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82860.10612872169,
            "unit": "ns/iter",
            "extra": "iterations: 8452\ncpu: 82859.73734027361 ns\nthreads: 1"
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
        "date": 1705775578057,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 759.4627626524898,
            "unit": "ns/iter",
            "extra": "iterations: 920608\ncpu: 759.4162770690674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11140.998552995632,
            "unit": "ns/iter",
            "extra": "iterations: 74637\ncpu: 11140.439728284897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25302.581445687247,
            "unit": "ns/iter",
            "extra": "iterations: 32801\ncpu: 25301.11886832719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39859.00383954864,
            "unit": "ns/iter",
            "extra": "iterations: 19794\ncpu: 39856.44639789837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49303.54608498517,
            "unit": "ns/iter",
            "extra": "iterations: 15862\ncpu: 49303.07023074014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50411.756899995904,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50410.04999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61465.31399999731,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61464.27000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 70630.75931842707,
            "unit": "ns/iter",
            "extra": "iterations: 12207\ncpu: 70630.0974850496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81512.47546356532,
            "unit": "ns/iter",
            "extra": "iterations: 10678\ncpu: 81508.6626709122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 600.7185112237279,
            "unit": "ns/iter",
            "extra": "iterations: 1165709\ncpu: 600.7114125394935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 501.44427609914175,
            "unit": "ns/iter",
            "extra": "iterations: 1390660\ncpu: 501.4224181323981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 502.7543120304955,
            "unit": "ns/iter",
            "extra": "iterations: 1390992\ncpu: 502.7486858299677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 501.13759599992136,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 501.1273000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 994.9999957315409,
            "unit": "ns/iter",
            "extra": "iterations: 702847\ncpu: 994.9607809380982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4413.394571112343,
            "unit": "ns/iter",
            "extra": "iterations: 180700\ncpu: 4413.353071389042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18551.832064644543,
            "unit": "ns/iter",
            "extra": "iterations: 42695\ncpu: 18550.851387750325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15121.85778079866,
            "unit": "ns/iter",
            "extra": "iterations: 54416\ncpu: 15096.74176712733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14842.49932939434,
            "unit": "ns/iter",
            "extra": "iterations: 55174\ncpu: 14841.340123971462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14984.438221750723,
            "unit": "ns/iter",
            "extra": "iterations: 54728\ncpu: 14983.925961116773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46781.39574202161,
            "unit": "ns/iter",
            "extra": "iterations: 17567\ncpu: 46778.08959981779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 479704.03093923023,
            "unit": "ns/iter",
            "extra": "iterations: 1810\ncpu: 479676.35359116056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 396618.8411172176,
            "unit": "ns/iter",
            "extra": "iterations: 2184\ncpu: 396601.32783882803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 398926.84099265013,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 398897.97794117674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 396189.18464354554,
            "unit": "ns/iter",
            "extra": "iterations: 2188\ncpu: 396175.13711151737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 244873.00195421345,
            "unit": "ns/iter",
            "extra": "iterations: 3582\ncpu: 244865.3824678953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 392323.2407407477,
            "unit": "ns/iter",
            "extra": "iterations: 2214\ncpu: 392293.4507678414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2001918.1285401443,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2001729.1938997863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 795495.1834319636,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 795463.736263737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2517886.435967127,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2517537.3297002725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4148.40142671153,
            "unit": "ns/iter",
            "extra": "iterations: 190508\ncpu: 4148.19797593802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 17667.14694143401,
            "unit": "ns/iter",
            "extra": "iterations: 47604\ncpu: 17666.662465339108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 14153.385011421597,
            "unit": "ns/iter",
            "extra": "iterations: 58658\ncpu: 14152.717446895565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 13907.120116647848,
            "unit": "ns/iter",
            "extra": "iterations: 59667\ncpu: 13906.84130256251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14021.584945254517,
            "unit": "ns/iter",
            "extra": "iterations: 59091\ncpu: 14021.263813440277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 47988.952668108606,
            "unit": "ns/iter",
            "extra": "iterations: 17578\ncpu: 47987.78586869952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 486155.62773724325,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 486139.58450308826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 400154.74097763863,
            "unit": "ns/iter",
            "extra": "iterations: 2189\ncpu: 400144.6779351291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 396226.182648387,
            "unit": "ns/iter",
            "extra": "iterations: 2190\ncpu: 396217.3515981742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 402009.4417542187,
            "unit": "ns/iter",
            "extra": "iterations: 2189\ncpu: 401996.2996802188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 244336.16353436807,
            "unit": "ns/iter",
            "extra": "iterations: 3565\ncpu: 244329.84572230084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 400586.2481584122,
            "unit": "ns/iter",
            "extra": "iterations: 2172\ncpu: 400576.9797421736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1983790.7379911786,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 1983588.4279476039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 762115.111111149,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 762077.0424836597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4093.8232761694435,
            "unit": "ns/iter",
            "extra": "iterations: 196278\ncpu: 4093.7675134248393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 17643.936038308486,
            "unit": "ns/iter",
            "extra": "iterations: 46778\ncpu: 17643.50549403561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 14114.56265966788,
            "unit": "ns/iter",
            "extra": "iterations: 57150\ncpu: 14114.243219597567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 13826.991903916352,
            "unit": "ns/iter",
            "extra": "iterations: 59782\ncpu: 13826.49626978029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 13943.359187192751,
            "unit": "ns/iter",
            "extra": "iterations: 59153\ncpu: 13943.340151809676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47644.51360445541,
            "unit": "ns/iter",
            "extra": "iterations: 17237\ncpu: 47643.88814758934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 477694.4273176046,
            "unit": "ns/iter",
            "extra": "iterations: 1823\ncpu: 477676.6867800327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 393735.62667862646,
            "unit": "ns/iter",
            "extra": "iterations: 2234\ncpu: 393731.0653536245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 393531.7701975051,
            "unit": "ns/iter",
            "extra": "iterations: 2228\ncpu: 393514.72172352043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 391658.90442159516,
            "unit": "ns/iter",
            "extra": "iterations: 2239\ncpu: 391658.46359982196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 240384.721498399,
            "unit": "ns/iter",
            "extra": "iterations: 3684\ncpu: 240379.56026058618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 396419.1404444237,
            "unit": "ns/iter",
            "extra": "iterations: 2250\ncpu: 396408.533333335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 304.8874193636787,
            "unit": "ns/iter",
            "extra": "iterations: 2293787\ncpu: 304.8828858128501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1663.2527704356805,
            "unit": "ns/iter",
            "extra": "iterations: 416180\ncpu: 1663.2043827190234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1311.4009047178463,
            "unit": "ns/iter",
            "extra": "iterations: 533426\ncpu: 1311.3813349930451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1259.1332489977783,
            "unit": "ns/iter",
            "extra": "iterations: 556507\ncpu: 1259.1324098349164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1062.8636703914478,
            "unit": "ns/iter",
            "extra": "iterations: 659886\ncpu: 1062.8482798543994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8164.276570949449,
            "unit": "ns/iter",
            "extra": "iterations: 85808\ncpu: 8164.156022748445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19649.325658260197,
            "unit": "ns/iter",
            "extra": "iterations: 36004\ncpu: 19648.45572714139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4669.489234297655,
            "unit": "ns/iter",
            "extra": "iterations: 149967\ncpu: 4669.419939053316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4626.433342340392,
            "unit": "ns/iter",
            "extra": "iterations: 151723\ncpu: 4626.2432195514475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4630.845680483764,
            "unit": "ns/iter",
            "extra": "iterations: 150966\ncpu: 4630.711550945308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9328.996843367573,
            "unit": "ns/iter",
            "extra": "iterations: 75080\ncpu: 9328.72935535447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8803.554382831102,
            "unit": "ns/iter",
            "extra": "iterations: 79492\ncpu: 8803.54626880687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2360.749108432995,
            "unit": "ns/iter",
            "extra": "iterations: 296949\ncpu: 2360.678769755053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 11842.677116410307,
            "unit": "ns/iter",
            "extra": "iterations: 59204\ncpu: 11842.451523545737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9355.484758515131,
            "unit": "ns/iter",
            "extra": "iterations: 74435\ncpu: 9355.12326190627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9239.761501852146,
            "unit": "ns/iter",
            "extra": "iterations: 75640\ncpu: 9239.63775780016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9873.702698885625,
            "unit": "ns/iter",
            "extra": "iterations: 70807\ncpu: 9873.693278913097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24872.442205160303,
            "unit": "ns/iter",
            "extra": "iterations: 28134\ncpu: 24871.518447430168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 96453.36031519069,
            "unit": "ns/iter",
            "extra": "iterations: 6980\ncpu: 96453.22349570376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83201.31873738402,
            "unit": "ns/iter",
            "extra": "iterations: 8427\ncpu: 83197.54360982549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 82325.69749969886,
            "unit": "ns/iter",
            "extra": "iterations: 8519\ncpu: 82324.5333959375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 82788.65236406334,
            "unit": "ns/iter",
            "extra": "iterations: 8460\ncpu: 82784.06619385284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 51518.15239775745,
            "unit": "ns/iter",
            "extra": "iterations: 13596\ncpu: 51517.1668137684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 82470.84197531483,
            "unit": "ns/iter",
            "extra": "iterations: 8505\ncpu: 82470.77013521525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2356.464512480413,
            "unit": "ns/iter",
            "extra": "iterations: 302388\ncpu: 2356.317049618347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11759.57889428554,
            "unit": "ns/iter",
            "extra": "iterations: 59491\ncpu: 11758.91815568741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9441.002207416066,
            "unit": "ns/iter",
            "extra": "iterations: 74295\ncpu: 9440.617807389523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9389.78253814913,
            "unit": "ns/iter",
            "extra": "iterations: 74574\ncpu: 9389.230831120765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9877.983931387753,
            "unit": "ns/iter",
            "extra": "iterations: 71008\ncpu: 9877.257492113687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23554.52667901161,
            "unit": "ns/iter",
            "extra": "iterations: 29705\ncpu: 23553.546540986626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96933.32298739628,
            "unit": "ns/iter",
            "extra": "iterations: 7217\ncpu: 96932.10475266642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81717.2567282946,
            "unit": "ns/iter",
            "extra": "iterations: 8546\ncpu: 81711.44395038641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81449.12804948665,
            "unit": "ns/iter",
            "extra": "iterations: 8567\ncpu: 81442.2668378669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81851.31673052788,
            "unit": "ns/iter",
            "extra": "iterations: 8613\ncpu: 81847.34703355351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52443.38372613811,
            "unit": "ns/iter",
            "extra": "iterations: 13408\ncpu: 52441.41557279164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82590.45131284623,
            "unit": "ns/iter",
            "extra": "iterations: 8493\ncpu: 82588.41398798964 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}