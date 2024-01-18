window.BENCHMARK_DATA = {
  "lastUpdate": 1705574883780,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-6.0 18.04 Debug c++-17": [
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
        "date": 1702489561197,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8342.314348875214,
            "unit": "ns/iter",
            "extra": "iterations: 84139\ncpu: 8342.324011457233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60473.75173797841,
            "unit": "ns/iter",
            "extra": "iterations: 13953\ncpu: 60470.744642729165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 111467.50783983857,
            "unit": "ns/iter",
            "extra": "iterations: 7717\ncpu: 111457.47051963198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 161636.17068574612,
            "unit": "ns/iter",
            "extra": "iterations: 5308\ncpu: 161625.39562923886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 212717.9780463801,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 212715.54020720263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 263424.0249088573,
            "unit": "ns/iter",
            "extra": "iterations: 3292\ncpu: 263415.03645200474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 313248.65691584256,
            "unit": "ns/iter",
            "extra": "iterations: 2769\ncpu: 313234.0195016252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 364113.6123901178,
            "unit": "ns/iter",
            "extra": "iterations: 2389\ncpu: 364090.707408958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 412135.0823417443,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 412095.62113279384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6808.4127620342515,
            "unit": "ns/iter",
            "extra": "iterations: 103040\ncpu: 6808.0337732919315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5639.284942400456,
            "unit": "ns/iter",
            "extra": "iterations: 124741\ncpu: 5638.883767165555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5697.392334222834,
            "unit": "ns/iter",
            "extra": "iterations: 122936\ncpu: 5697.22701242924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5625.28948619356,
            "unit": "ns/iter",
            "extra": "iterations: 124113\ncpu: 5624.51797958312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9819.219566674596,
            "unit": "ns/iter",
            "extra": "iterations: 71632\ncpu: 9818.21253071254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30867.49585187443,
            "unit": "ns/iter",
            "extra": "iterations: 26518\ncpu: 30865.42348593413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 143449.14927877966,
            "unit": "ns/iter",
            "extra": "iterations: 5962\ncpu: 143438.10801744388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 112490.96435125022,
            "unit": "ns/iter",
            "extra": "iterations: 7630\ncpu: 112479.89515072087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 110700.42275791669,
            "unit": "ns/iter",
            "extra": "iterations: 7716\ncpu: 110687.84344219779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 108321.73679510002,
            "unit": "ns/iter",
            "extra": "iterations: 7838\ncpu: 108316.45828017339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 364999.322543382,
            "unit": "ns/iter",
            "extra": "iterations: 2595\ncpu: 364957.45664739783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1949942.289640755,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1949812.2621564507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1569100.087837721,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1568957.7702702724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1551221.1090602984,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1551133.8926174492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1542486.4276205418,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1542297.004991677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 871861.6629002135,
            "unit": "ns/iter",
            "extra": "iterations: 1062\ncpu: 871811.5819209035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1501837.0907617905,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1501652.025931927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38294.88673304071,
            "unit": "ns/iter",
            "extra": "iterations: 21595\ncpu: 38292.377865246446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 172653.64035264344,
            "unit": "ns/iter",
            "extra": "iterations: 4991\ncpu: 172648.88799839697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138536.9254237244,
            "unit": "ns/iter",
            "extra": "iterations: 6195\ncpu: 138529.39467312337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 134954.04028212276,
            "unit": "ns/iter",
            "extra": "iterations: 6380\ncpu: 134950.0940438875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134459.99688666637,
            "unit": "ns/iter",
            "extra": "iterations: 6424\ncpu: 134449.29950186796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 320751.81358436693,
            "unit": "ns/iter",
            "extra": "iterations: 2709\ncpu: 320743.89073458867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1985171.9531915323,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1984912.9787234114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1604093.5847750746,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1604031.1418685215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1596409.6843911165,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1596250.4288164638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1587346.6450511918,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1587291.467576795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 881048.0955534062,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 880984.0113528905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1532917.588429724,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1532902.8099173557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5480515.790000026,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5480135.000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3318819.7642857633,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3318671.428571435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28309.521348547183,
            "unit": "ns/iter",
            "extra": "iterations: 28831\ncpu: 28308.34518400334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137664.96886535134,
            "unit": "ns/iter",
            "extra": "iterations: 6231\ncpu: 137665.31856844862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107460.2160571203,
            "unit": "ns/iter",
            "extra": "iterations: 7984\ncpu: 107452.98096192356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108946.82898587929,
            "unit": "ns/iter",
            "extra": "iterations: 7859\ncpu: 108942.1809390514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102672.55020466134,
            "unit": "ns/iter",
            "extra": "iterations: 8306\ncpu: 102668.39633999568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 280161.77568879444,
            "unit": "ns/iter",
            "extra": "iterations: 3085\ncpu: 280151.4748784446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1949036.1903766515,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1948895.3974895305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1565339.648739403,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1565275.2941176454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1560619.3628762788,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1560552.5083612043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1533770.3597360693,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1533745.5445544561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 870444.0846511631,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 870411.2558139508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1501288.8665595509,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1501239.8713826407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3174.4652986470437,
            "unit": "ns/iter",
            "extra": "iterations: 218954\ncpu: 3174.3937082674906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20181.07626949054,
            "unit": "ns/iter",
            "extra": "iterations: 34955\ncpu: 20180.855385495735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16408.72143144466,
            "unit": "ns/iter",
            "extra": "iterations: 39764\ncpu: 16407.851322804505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15693.285560659882,
            "unit": "ns/iter",
            "extra": "iterations: 44635\ncpu: 15690.995855270683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11942.831011579347,
            "unit": "ns/iter",
            "extra": "iterations: 58720\ncpu: 11940.655653950893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 108863.70866510468,
            "unit": "ns/iter",
            "extra": "iterations: 6405\ncpu: 108858.28259172484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 134635.13476673738,
            "unit": "ns/iter",
            "extra": "iterations: 5209\ncpu: 134633.25014398163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33842.03072519393,
            "unit": "ns/iter",
            "extra": "iterations: 20960\ncpu: 33811.927480915954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33570.92446491681,
            "unit": "ns/iter",
            "extra": "iterations: 20838\ncpu: 33569.41165178999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33353.052090278856,
            "unit": "ns/iter",
            "extra": "iterations: 21002\ncpu: 33352.46643176838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67972.93029802693,
            "unit": "ns/iter",
            "extra": "iterations: 10301\ncpu: 67972.36190661091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61664.75859928304,
            "unit": "ns/iter",
            "extra": "iterations: 11280\ncpu: 61659.592198581944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24159.889383429698,
            "unit": "ns/iter",
            "extra": "iterations: 28983\ncpu: 24157.44401890755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116018.90091133735,
            "unit": "ns/iter",
            "extra": "iterations: 6035\ncpu: 116007.25766362778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95173.91541072147,
            "unit": "ns/iter",
            "extra": "iterations: 7365\ncpu: 95164.16836388464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95112.96855859568,
            "unit": "ns/iter",
            "extra": "iterations: 7347\ncpu: 95105.64856403983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94263.88658404812,
            "unit": "ns/iter",
            "extra": "iterations: 7424\ncpu: 94259.42887931022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 168919.31447910902,
            "unit": "ns/iter",
            "extra": "iterations: 4137\ncpu: 168908.89533478106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 574393.4617284039,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 574326.3374485585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 478852.78272789076,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 478829.5407813624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 476650.2314499123,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 476643.63512593147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 471212.3515151621,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 471157.1717171671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 304159.2013888699,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 304127.90798610577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 465403.6946108114,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 465348.36992681393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23924.011571940486,
            "unit": "ns/iter",
            "extra": "iterations: 29295\ncpu: 23920.959208056167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 124515.43258127676,
            "unit": "ns/iter",
            "extra": "iterations: 5629\ncpu: 124500.21318173791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 98169.63333801362,
            "unit": "ns/iter",
            "extra": "iterations: 7121\ncpu: 98168.12245471193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97047.27876351196,
            "unit": "ns/iter",
            "extra": "iterations: 7214\ncpu: 97045.91072913691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 97613.18925331734,
            "unit": "ns/iter",
            "extra": "iterations: 7165\ncpu: 97601.270062805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 169787.0269679468,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 169773.32361515934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 575517.571193417,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 575447.4897119353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 479230.17671234434,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 479192.05479452095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 474923.0204638628,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 474895.3615279627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 473198.0548408566,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 473192.4847664135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 303749.72407812165,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 303742.51626898494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 464724.75882748695,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 464701.59893404326 ns\nthreads: 1"
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
        "date": 1702492165460,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8274.728463403984,
            "unit": "ns/iter",
            "extra": "iterations: 84902\ncpu: 8274.589526748487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59882.155500008594,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59881.23999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109716.16679438214,
            "unit": "ns/iter",
            "extra": "iterations: 7830\ncpu: 109713.89527458492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159744.49116936137,
            "unit": "ns/iter",
            "extra": "iterations: 5379\ncpu: 159744.04164342815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 212925.93654266858,
            "unit": "ns/iter",
            "extra": "iterations: 4113\ncpu: 212911.0867979576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 259448.95248122158,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 259448.60150375936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 309754.7487508918,
            "unit": "ns/iter",
            "extra": "iterations: 2802\ncpu: 309731.6559600285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 359021.41903587757,
            "unit": "ns/iter",
            "extra": "iterations: 2427\ncpu: 359009.1882983107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 408004.5381355977,
            "unit": "ns/iter",
            "extra": "iterations: 2124\ncpu: 407995.19774011325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6761.32048942061,
            "unit": "ns/iter",
            "extra": "iterations: 103551\ncpu: 6761.190138192786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5457.924755578718,
            "unit": "ns/iter",
            "extra": "iterations: 128262\ncpu: 5457.682711948981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5497.321511457989,
            "unit": "ns/iter",
            "extra": "iterations: 127109\ncpu: 5497.257471933539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5521.247628680691,
            "unit": "ns/iter",
            "extra": "iterations: 125563\ncpu: 5521.089811489052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9726.716226374116,
            "unit": "ns/iter",
            "extra": "iterations: 71846\ncpu: 9726.46215516521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30220.292520283117,
            "unit": "ns/iter",
            "extra": "iterations: 26993\ncpu: 30219.542103508298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 139965.93860222888,
            "unit": "ns/iter",
            "extra": "iterations: 6124\ncpu: 139959.5362508164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 109800.6477316581,
            "unit": "ns/iter",
            "extra": "iterations: 7781\ncpu: 109798.18789358679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 110677.34745433215,
            "unit": "ns/iter",
            "extra": "iterations: 7719\ncpu: 110672.13369607455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 106060.9754601281,
            "unit": "ns/iter",
            "extra": "iterations: 7987\ncpu: 106059.98497558529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 364903.5204633311,
            "unit": "ns/iter",
            "extra": "iterations: 2590\ncpu: 364873.3590733597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1938535.7331932504,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1938446.0084033667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1524520.8505747018,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1524412.4794745487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1538000.0149006618,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1537888.4105960266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1498491.5542950288,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1498399.6758508913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 833268.9577337765,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 833211.1510791351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1471837.976265857,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1471782.7531645584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 39659.94574135482,
            "unit": "ns/iter",
            "extra": "iterations: 20476\ncpu: 39656.612619652326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 171882.4700258909,
            "unit": "ns/iter",
            "extra": "iterations: 5021\ncpu: 171862.1788488354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138624.1001456082,
            "unit": "ns/iter",
            "extra": "iterations: 6181\ncpu: 138612.8943536645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136120.38907363595,
            "unit": "ns/iter",
            "extra": "iterations: 6315\ncpu: 136110.46714172597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 133090.5463981367,
            "unit": "ns/iter",
            "extra": "iterations: 6455\ncpu: 133078.35786212233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 316264.80095305975,
            "unit": "ns/iter",
            "extra": "iterations: 2728\ncpu: 316239.1862170084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1987401.8123668015,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1987228.7846481837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1573672.9055648649,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1573569.9831365917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1568142.3764706915,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1568023.5294117674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1532374.417763175,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1532347.3684210521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 862510.0490741455,
            "unit": "ns/iter",
            "extra": "iterations: 1080\ncpu: 862460.4629629613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1508246.828478924,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1508207.9288025838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5290006.760000097,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5289512.999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3220420.474048403,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3220275.4325259463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28118.25225659534,
            "unit": "ns/iter",
            "extra": "iterations: 29026\ncpu: 28116.705712120245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138067.4646480982,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 138066.24255113603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 105765.27975308917,
            "unit": "ns/iter",
            "extra": "iterations: 8100\ncpu: 105759.09876543222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106517.44304898672,
            "unit": "ns/iter",
            "extra": "iterations: 8042\ncpu: 106514.10096990768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102341.67396243976,
            "unit": "ns/iter",
            "extra": "iterations: 8361\ncpu: 102336.50281066836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 285246.7684728887,
            "unit": "ns/iter",
            "extra": "iterations: 3045\ncpu: 285239.37602627324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1953190.697916559,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1953065.8333333374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1525449.3366014417,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1525367.1568627444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1532696.6529603906,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1532611.1842105235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1494496.5088281669,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1494469.3418940622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 833161.3854446913,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 833117.969451932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1467230.9700787498,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1467212.9133858306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3155.426997420036,
            "unit": "ns/iter",
            "extra": "iterations: 220184\ncpu: 3155.422283181356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20343.115887306187,
            "unit": "ns/iter",
            "extra": "iterations: 34430\ncpu: 20342.677897182613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16385.989486994087,
            "unit": "ns/iter",
            "extra": "iterations: 42709\ncpu: 16385.302863565106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16342.777091085829,
            "unit": "ns/iter",
            "extra": "iterations: 42717\ncpu: 16342.22908912138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11906.969501505888,
            "unit": "ns/iter",
            "extra": "iterations: 58757\ncpu: 11906.143948806104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 110121.09267608375,
            "unit": "ns/iter",
            "extra": "iterations: 6431\ncpu: 110120.26123464404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136055.48481899343,
            "unit": "ns/iter",
            "extra": "iterations: 5138\ncpu: 136047.56714674988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33169.84042603454,
            "unit": "ns/iter",
            "extra": "iterations: 21125\ncpu: 33168.73372781079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33091.08697088483,
            "unit": "ns/iter",
            "extra": "iterations: 21191\ncpu: 33089.372846963306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32662.463647813605,
            "unit": "ns/iter",
            "extra": "iterations: 21443\ncpu: 32661.48859767756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66359.77776721233,
            "unit": "ns/iter",
            "extra": "iterations: 10516\ncpu: 66355.12552301222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61569.531238547665,
            "unit": "ns/iter",
            "extra": "iterations: 10916\ncpu: 61567.62550384778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23413.63028157124,
            "unit": "ns/iter",
            "extra": "iterations: 29939\ncpu: 23412.79601857091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 115380.24555334433,
            "unit": "ns/iter",
            "extra": "iterations: 6072\ncpu: 115374.60474308129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93772.04578313064,
            "unit": "ns/iter",
            "extra": "iterations: 7470\ncpu: 93770.82998661243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95763.99986322635,
            "unit": "ns/iter",
            "extra": "iterations: 7311\ncpu: 95759.34892627478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95751.70630802267,
            "unit": "ns/iter",
            "extra": "iterations: 7324\ncpu: 95749.97269251749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 173237.97368419098,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 173234.65739821314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 577132.5746083544,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 577117.0651277889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 470110.7348586427,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 470101.07671601063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 481330.05635741795,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 481314.77663230815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 466826.9606404516,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 466795.1967978641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 297373.1592356669,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 297362.3354564743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 462998.90825083765,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 462954.32343233924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23994.187956518395,
            "unit": "ns/iter",
            "extra": "iterations: 29161\ncpu: 23992.79860087087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 123093.34106075665,
            "unit": "ns/iter",
            "extra": "iterations: 5694\ncpu: 123080.94485423353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97518.64013359562,
            "unit": "ns/iter",
            "extra": "iterations: 7186\ncpu: 97511.53632062355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 106477.13891260796,
            "unit": "ns/iter",
            "extra": "iterations: 7026\ncpu: 106468.06148590948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 98025.98390934068,
            "unit": "ns/iter",
            "extra": "iterations: 7147\ncpu: 98025.46523016597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 174668.5649999904,
            "unit": "ns/iter",
            "extra": "iterations: 4000\ncpu: 174665.09999999858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 571026.8045601771,
            "unit": "ns/iter",
            "extra": "iterations: 1228\ncpu: 570994.2182410515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 468784.7639168206,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 468777.9342722959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 471502.0861372521,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 471492.7994616477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 467658.44310577726,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 467632.5301204847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 299356.3068035604,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 299351.73299101373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 461689.8663594489,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 461663.9236339698 ns\nthreads: 1"
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
        "date": 1702506073300,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8513.20858599948,
            "unit": "ns/iter",
            "extra": "iterations: 82949\ncpu: 8512.834392216906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 62379.68402034688,
            "unit": "ns/iter",
            "extra": "iterations: 13561\ncpu: 62377.6343927439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 115875.4344538982,
            "unit": "ns/iter",
            "extra": "iterations: 7407\ncpu: 115873.8760631835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 168726.1330589894,
            "unit": "ns/iter",
            "extra": "iterations: 5103\ncpu: 168722.3202038017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 220823.18293618565,
            "unit": "ns/iter",
            "extra": "iterations: 3903\ncpu: 220813.96361772998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 274434.9392981458,
            "unit": "ns/iter",
            "extra": "iterations: 3163\ncpu: 274355.7698387606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 326162.3752352348,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 326148.7015430936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 379868.09833914804,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 379842.91958041926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 430939.71563742537,
            "unit": "ns/iter",
            "extra": "iterations: 2008\ncpu: 430924.80079681275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6959.533275576373,
            "unit": "ns/iter",
            "extra": "iterations: 100419\ncpu: 6959.298539121073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5799.050190871753,
            "unit": "ns/iter",
            "extra": "iterations: 120500\ncpu: 5798.947717842321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5707.983669642823,
            "unit": "ns/iter",
            "extra": "iterations: 122655\ncpu: 5707.706167706173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5739.099028759727,
            "unit": "ns/iter",
            "extra": "iterations: 121803\ncpu: 5739.124652102167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 10059.542631200082,
            "unit": "ns/iter",
            "extra": "iterations: 69550\ncpu: 10059.386053199123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29625.209145811274,
            "unit": "ns/iter",
            "extra": "iterations: 27488\ncpu: 29624.67258440046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 145757.0308085122,
            "unit": "ns/iter",
            "extra": "iterations: 5875\ncpu: 145754.79148936152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 111938.7281069715,
            "unit": "ns/iter",
            "extra": "iterations: 7628\ncpu: 111935.4221289985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 111588.14198015361,
            "unit": "ns/iter",
            "extra": "iterations: 7656\ncpu: 111585.67136886113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 108591.93226176506,
            "unit": "ns/iter",
            "extra": "iterations: 7839\ncpu: 108588.88888888874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 361522.2323540682,
            "unit": "ns/iter",
            "extra": "iterations: 2621\ncpu: 361511.7130866088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2021391.2586956688,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2021359.347826089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1622026.2286214344,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1621942.2338568883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1617001.0261325384,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1616959.2334494772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1599551.758620668,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1599462.068965517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 890398.5086705184,
            "unit": "ns/iter",
            "extra": "iterations: 1038\ncpu: 890353.9499036619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1555660.5226132371,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1555566.6666666663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37472.46625152952,
            "unit": "ns/iter",
            "extra": "iterations: 22001\ncpu: 37470.67860551796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176392.54690700799,
            "unit": "ns/iter",
            "extra": "iterations: 4882\ncpu: 176380.3359278986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 139987.5783308939,
            "unit": "ns/iter",
            "extra": "iterations: 6147\ncpu: 139978.85147226235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138749.47881219303,
            "unit": "ns/iter",
            "extra": "iterations: 6230\ncpu: 138741.7335473519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 133795.537883546,
            "unit": "ns/iter",
            "extra": "iterations: 6388\ncpu: 133787.13212273028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 312218.14398283255,
            "unit": "ns/iter",
            "extra": "iterations: 2792\ncpu: 312197.88681948435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2070471.4285714028,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2070379.0178571474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1646728.3049645717,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1646653.900709219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1650505.2017699971,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1650431.3274336192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1611106.11937719,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1611021.4532871959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 903607.7976766634,
            "unit": "ns/iter",
            "extra": "iterations: 1033\ncpu: 903569.3126815144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1579698.7108844519,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1579594.0476190415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5611622.720000468,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5611280.000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3398222.260073406,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3397983.882783891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28160.164989800785,
            "unit": "ns/iter",
            "extra": "iterations: 28923\ncpu: 28159.039518722144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 147945.35892152588,
            "unit": "ns/iter",
            "extra": "iterations: 5823\ncpu: 147937.90142538236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111568.6407754356,
            "unit": "ns/iter",
            "extra": "iterations: 7686\ncpu: 111563.5961488418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107794.06084322787,
            "unit": "ns/iter",
            "extra": "iterations: 7922\ncpu: 107787.98283261758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 104549.88395153341,
            "unit": "ns/iter",
            "extra": "iterations: 8169\ncpu: 104547.90059982869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 282374.63405087264,
            "unit": "ns/iter",
            "extra": "iterations: 3066\ncpu: 282366.7318982397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2036490.8231441528,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2036442.1397379905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1616612.9758203768,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1616531.6062176118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1605512.6672415163,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1605479.4827586152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1595638.3493151434,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1595615.0684931488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 888608.0889952831,
            "unit": "ns/iter",
            "extra": "iterations: 1045\ncpu: 888578.5645933028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1548923.5466666666,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1548864.1666666681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3169.566709619218,
            "unit": "ns/iter",
            "extra": "iterations: 221175\ncpu: 3169.4725895783686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19670.26172279539,
            "unit": "ns/iter",
            "extra": "iterations: 35721\ncpu: 19670.042831947558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15158.459483486044,
            "unit": "ns/iter",
            "extra": "iterations: 46117\ncpu: 15158.360257605544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15757.281639203413,
            "unit": "ns/iter",
            "extra": "iterations: 44241\ncpu: 15757.030808526033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11925.473560317563,
            "unit": "ns/iter",
            "extra": "iterations: 58624\ncpu: 11925.353097707395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 109945.65494505667,
            "unit": "ns/iter",
            "extra": "iterations: 6370\ncpu: 109940.54945054927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 132629.8585227343,
            "unit": "ns/iter",
            "extra": "iterations: 5280\ncpu: 132621.74242424205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34483.152653345554,
            "unit": "ns/iter",
            "extra": "iterations: 20314\ncpu: 34480.57497292522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34627.50516585189,
            "unit": "ns/iter",
            "extra": "iterations: 20229\ncpu: 34625.62657570815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34068.50272745157,
            "unit": "ns/iter",
            "extra": "iterations: 20532\ncpu: 34065.33216442625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 69332.95311412793,
            "unit": "ns/iter",
            "extra": "iterations: 10067\ncpu: 69328.69772524104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57088.935541632294,
            "unit": "ns/iter",
            "extra": "iterations: 12287\ncpu: 57085.464311874865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24142.430136797484,
            "unit": "ns/iter",
            "extra": "iterations: 29021\ncpu: 24141.30457255069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 115258.1566106201,
            "unit": "ns/iter",
            "extra": "iterations: 6066\ncpu: 115258.737223872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94502.21264523455,
            "unit": "ns/iter",
            "extra": "iterations: 7402\ncpu: 94501.09429883845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94880.75596205142,
            "unit": "ns/iter",
            "extra": "iterations: 7380\ncpu: 94876.17886178731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94742.12461143581,
            "unit": "ns/iter",
            "extra": "iterations: 7399\ncpu: 94736.80227057647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 168681.09047042936,
            "unit": "ns/iter",
            "extra": "iterations: 4145\ncpu: 168673.14837153326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 594945.9846547457,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 594920.6308610403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 491383.967651197,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 491352.95358649665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 493289.64507037494,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 493248.8732394381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 485713.19169549586,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 485709.8269896154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 305710.38896189944,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 305705.86946999305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 478907.09302325494,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 478886.4569083423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23730.842248257948,
            "unit": "ns/iter",
            "extra": "iterations: 29445\ncpu: 23729.83868228868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 122848.05670645538,
            "unit": "ns/iter",
            "extra": "iterations: 5696\ncpu: 122846.52387640523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 98287.85880865328,
            "unit": "ns/iter",
            "extra": "iterations: 7118\ncpu: 98280.38774936822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 99330.93956588893,
            "unit": "ns/iter",
            "extra": "iterations: 7049\ncpu: 99326.50021279637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 98977.52742735723,
            "unit": "ns/iter",
            "extra": "iterations: 7055\ncpu: 98973.93338058062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 174406.66550953678,
            "unit": "ns/iter",
            "extra": "iterations: 4033\ncpu: 174401.43813538333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 598933.5774166205,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 598937.3823781005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 495817.0304317183,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 495796.53220099706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 495469.64989515685,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 495453.3193570884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 508454.016000087,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508455.6999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 309647.5683930912,
            "unit": "ns/iter",
            "extra": "iterations: 2259\ncpu: 309646.5692784426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 484688.1558621041,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 484677.93103448045 ns\nthreads: 1"
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
        "date": 1705574883335,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8510.373853461091,
            "unit": "ns/iter",
            "extra": "iterations: 82313\ncpu: 8510.121123030383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 62296.02637006136,
            "unit": "ns/iter",
            "extra": "iterations: 13576\ncpu: 62295.66882734236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 115203.17305631084,
            "unit": "ns/iter",
            "extra": "iterations: 7460\ncpu: 115201.86327077748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 166747.28073571683,
            "unit": "ns/iter",
            "extra": "iterations: 5165\ncpu: 166746.00193610846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 219760.84369449512,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 219755.9502664298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 273095.406811747,
            "unit": "ns/iter",
            "extra": "iterations: 3171\ncpu: 273084.89435509295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 326488.04232209676,
            "unit": "ns/iter",
            "extra": "iterations: 2670\ncpu: 326484.49438202265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 377480.5973855965,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 377478.77995642717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 428700.14046324615,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 428688.56579595833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 7017.219625093401,
            "unit": "ns/iter",
            "extra": "iterations: 100025\ncpu: 7017.135716070978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5768.586247797119,
            "unit": "ns/iter",
            "extra": "iterations: 121406\ncpu: 5768.490025204685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5802.242901999163,
            "unit": "ns/iter",
            "extra": "iterations: 120703\ncpu: 5802.318086542995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5767.445556132299,
            "unit": "ns/iter",
            "extra": "iterations: 121437\ncpu: 5767.445671418102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9991.596147800512,
            "unit": "ns/iter",
            "extra": "iterations: 69986\ncpu: 9991.444003086339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30637.759172757567,
            "unit": "ns/iter",
            "extra": "iterations: 26546\ncpu: 30637.109168989675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 142255.15192818764,
            "unit": "ns/iter",
            "extra": "iterations: 6016\ncpu: 142247.4069148935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 112228.22941562276,
            "unit": "ns/iter",
            "extra": "iterations: 7615\ncpu: 112224.12344057787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 112145.29414851834,
            "unit": "ns/iter",
            "extra": "iterations: 7622\ncpu: 112139.33350826547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110056.22256768195,
            "unit": "ns/iter",
            "extra": "iterations: 7719\ncpu: 110050.51172431644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 367144.68157075404,
            "unit": "ns/iter",
            "extra": "iterations: 2572\ncpu: 367127.56609642296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2030689.3311404414,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2030659.4298245618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1617224.3811189325,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1617099.6503496484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1605901.229166583,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1605830.0347222183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1597647.8436426364,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1597566.838487967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 876650.0823863442,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 876583.996212121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1550575.4431436355,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1550475.4180602012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38766.700173716876,
            "unit": "ns/iter",
            "extra": "iterations: 21299\ncpu: 38775.365040612385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 174145.3869011424,
            "unit": "ns/iter",
            "extra": "iterations: 4947\ncpu: 174142.44996967856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138315.41776633123,
            "unit": "ns/iter",
            "extra": "iterations: 6214\ncpu: 138307.1773414872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 135571.13283959575,
            "unit": "ns/iter",
            "extra": "iterations: 6346\ncpu: 135562.57485029896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 134372.64723397564,
            "unit": "ns/iter",
            "extra": "iterations: 6381\ncpu: 134363.4069895003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 320822.17547098506,
            "unit": "ns/iter",
            "extra": "iterations: 2707\ncpu: 320810.0480236414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2087862.1718749865,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2087740.1785714321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1649984.3896796356,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1649881.3167259742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1643856.084805771,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1643819.4346289726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1631830.2697023419,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1631706.8301225852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 884377.8445497958,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 884292.0379146901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1578417.4804754136,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1578327.8438030537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5485519.169999407,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5485460.999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3301761.666666962,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3301814.184397168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28461.225452017734,
            "unit": "ns/iter",
            "extra": "iterations: 28760\ncpu: 28461.13699582769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 141811.86247316023,
            "unit": "ns/iter",
            "extra": "iterations: 6057\ncpu: 141809.0308733698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109352.24457493212,
            "unit": "ns/iter",
            "extra": "iterations: 7834\ncpu: 109352.80827163646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107221.76458752448,
            "unit": "ns/iter",
            "extra": "iterations: 7952\ncpu: 107223.91851106613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105923.98179779114,
            "unit": "ns/iter",
            "extra": "iterations: 8021\ncpu: 105919.37414287431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 289229.19293568155,
            "unit": "ns/iter",
            "extra": "iterations: 3001\ncpu: 289223.05898034194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2056553.3722465602,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2056512.3348017759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1611457.0034602494,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1611465.9169550221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1600762.7285222602,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1600753.4364261138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1581893.6933559834,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1581904.7700170407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 861754.5318559578,
            "unit": "ns/iter",
            "extra": "iterations: 1083\ncpu: 861746.0757156027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1540849.8658940285,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1540876.4900662228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3157.034076663581,
            "unit": "ns/iter",
            "extra": "iterations: 222557\ncpu: 3157.019550047859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19991.099557080688,
            "unit": "ns/iter",
            "extra": "iterations: 34995\ncpu: 19991.467352478892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15861.463295895372,
            "unit": "ns/iter",
            "extra": "iterations: 44164\ncpu: 15861.586359931165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15788.79775685671,
            "unit": "ns/iter",
            "extra": "iterations: 44402\ncpu: 15789.104094410095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12125.305813208499,
            "unit": "ns/iter",
            "extra": "iterations: 57679\ncpu: 12125.283031952724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 109306.74944671904,
            "unit": "ns/iter",
            "extra": "iterations: 6326\ncpu: 109304.64748656326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 141165.0453263357,
            "unit": "ns/iter",
            "extra": "iterations: 4964\ncpu: 141162.89282836462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34564.884964933335,
            "unit": "ns/iter",
            "extra": "iterations: 20246\ncpu: 34565.50923639214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 34483.130891858986,
            "unit": "ns/iter",
            "extra": "iterations: 20261\ncpu: 34483.006761758996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34321.21726350494,
            "unit": "ns/iter",
            "extra": "iterations: 20413\ncpu: 34320.96703081376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68248.07616443963,
            "unit": "ns/iter",
            "extra": "iterations: 10241\ncpu: 68247.69065520926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 63477.569283525365,
            "unit": "ns/iter",
            "extra": "iterations: 10789\ncpu: 63478.607841319645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23623.60777361532,
            "unit": "ns/iter",
            "extra": "iterations: 29613\ncpu: 23624.002971667775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117423.72881356772,
            "unit": "ns/iter",
            "extra": "iterations: 5959\ncpu: 117423.27571740418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96434.79644432598,
            "unit": "ns/iter",
            "extra": "iterations: 7256\ncpu: 96434.23373759557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 97356.88964937687,
            "unit": "ns/iter",
            "extra": "iterations: 7159\ncpu: 97356.3905573407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 97324.17775307981,
            "unit": "ns/iter",
            "extra": "iterations: 7201\ncpu: 97324.71878905628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 169908.75297546588,
            "unit": "ns/iter",
            "extra": "iterations: 4117\ncpu: 169909.4486276421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 597563.0810580378,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 597566.4675767893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 494484.2031139006,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 494480.8917197442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 494925.21257061564,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 494913.98305084335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 489009.21648046165,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 488999.3016759808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 306907.41439860716,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 306906.14574188244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 480037.1623287304,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 480009.2465753393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24476.306683455055,
            "unit": "ns/iter",
            "extra": "iterations: 28593\ncpu: 24475.598922813304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 123244.89672766486,
            "unit": "ns/iter",
            "extra": "iterations: 5684\ncpu: 123242.6636171714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 99523.96558588912,
            "unit": "ns/iter",
            "extra": "iterations: 7032\ncpu: 99519.53924914742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 100642.7087643737,
            "unit": "ns/iter",
            "extra": "iterations: 6960\ncpu: 100634.41091953896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 101079.23017941031,
            "unit": "ns/iter",
            "extra": "iterations: 6912\ncpu: 101075.72337962972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 172668.47358025276,
            "unit": "ns/iter",
            "extra": "iterations: 4050\ncpu: 172661.97530864176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 602303.9597258115,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 602297.6863753175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 494139.2542372821,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 494116.8079096079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 491005.89628584444,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 490990.1191310479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 489874.18903722137,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 489856.9219957915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 306501.1836109045,
            "unit": "ns/iter",
            "extra": "iterations: 2282\ncpu: 306498.2471516192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 481361.34228648554,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 481364.46280991257 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}