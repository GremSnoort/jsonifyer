window.BENCHMARK_DATA = {
  "lastUpdate": 1702491024740,
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
      }
    ]
  }
}