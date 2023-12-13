window.BENCHMARK_DATA = {
  "lastUpdate": 1702493670372,
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
      }
    ]
  }
}