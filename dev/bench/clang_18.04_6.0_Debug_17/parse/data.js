window.BENCHMARK_DATA = {
  "lastUpdate": 1705962725153,
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
        "date": 1705772721060,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8229.000141760293,
            "unit": "ns/iter",
            "extra": "iterations: 84650\ncpu: 8229.083284111046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59485.01999999962,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59481.71 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110096.35684965499,
            "unit": "ns/iter",
            "extra": "iterations: 7796\ncpu: 110096.934325295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 161109.7927557874,
            "unit": "ns/iter",
            "extra": "iterations: 5356\ncpu: 161105.17176997758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 212978.25834757002,
            "unit": "ns/iter",
            "extra": "iterations: 4103\ncpu: 212977.9917133804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 262570.92014519643,
            "unit": "ns/iter",
            "extra": "iterations: 3306\ncpu: 262556.14035087713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 312632.21889654046,
            "unit": "ns/iter",
            "extra": "iterations: 2773\ncpu: 312630.4724125496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 364599.6544393556,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 363882.4093372241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 413621.2172462677,
            "unit": "ns/iter",
            "extra": "iterations: 2099\ncpu: 413603.71605526406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6748.162237749767,
            "unit": "ns/iter",
            "extra": "iterations: 104051\ncpu: 6747.895743433513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5597.353108768652,
            "unit": "ns/iter",
            "extra": "iterations: 124953\ncpu: 5597.387817819497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5566.074413064344,
            "unit": "ns/iter",
            "extra": "iterations: 125099\ncpu: 5565.89421178427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5594.439427610139,
            "unit": "ns/iter",
            "extra": "iterations: 125998\ncpu: 5594.351497642813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9714.496125001106,
            "unit": "ns/iter",
            "extra": "iterations: 72000\ncpu: 9714.293055555576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30966.33867173047,
            "unit": "ns/iter",
            "extra": "iterations: 26350\ncpu: 30965.552182163174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 142984.26647709415,
            "unit": "ns/iter",
            "extra": "iterations: 5978\ncpu: 142984.39277350283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 110574.56950789834,
            "unit": "ns/iter",
            "extra": "iterations: 7661\ncpu: 110571.10037854072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 111230.14866449301,
            "unit": "ns/iter",
            "extra": "iterations: 7675\ncpu: 111229.65472312713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 106254.20451146955,
            "unit": "ns/iter",
            "extra": "iterations: 8024\ncpu: 106253.16550348942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 352850.76656740427,
            "unit": "ns/iter",
            "extra": "iterations: 2686\ncpu: 352844.9739389428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1940971.8565400366,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1940935.6540084388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1561368.65714282,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1561348.0672268935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1562897.8626464887,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1562862.1440536035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1528518.7277227093,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1528495.8745874572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 840703.5579908825,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 840687.1232876697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1494856.4871381961,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1494834.083601284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37856.31695196016,
            "unit": "ns/iter",
            "extra": "iterations: 21732\ncpu: 37855.30093870794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 172822.02935264853,
            "unit": "ns/iter",
            "extra": "iterations: 4974\ncpu: 172817.61158021714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 139132.04058441834,
            "unit": "ns/iter",
            "extra": "iterations: 6160\ncpu: 139131.73701298656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 141307.31355237783,
            "unit": "ns/iter",
            "extra": "iterations: 6117\ncpu: 141305.7381069152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 135752.12563291512,
            "unit": "ns/iter",
            "extra": "iterations: 6320\ncpu: 135748.7974683543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 301036.1109167263,
            "unit": "ns/iter",
            "extra": "iterations: 2858\ncpu: 301029.7410776768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2013160.885775817,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 2013159.2672413841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1604579.9982788884,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1604523.2358003478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1600251.2768165465,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1600229.5847750856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1562160.5143339273,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1562106.0708263093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 859764.7462825908,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 859729.3680297381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1523706.8998357363,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1523579.9671592854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5411137.139999483,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5411107.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3308649.5928573967,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3308529.642857166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27634.887625194107,
            "unit": "ns/iter",
            "extra": "iterations: 29455\ncpu: 27635.104396537055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 141587.66337611788,
            "unit": "ns/iter",
            "extra": "iterations: 6078\ncpu: 141581.40835801314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107872.06641461822,
            "unit": "ns/iter",
            "extra": "iterations: 7935\ncpu: 107871.88405797104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104321.12165450874,
            "unit": "ns/iter",
            "extra": "iterations: 8220\ncpu: 104317.61557177624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101397.68464730319,
            "unit": "ns/iter",
            "extra": "iterations: 8435\ncpu: 101396.72791938299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 271723.4539184981,
            "unit": "ns/iter",
            "extra": "iterations: 3190\ncpu: 271708.9028213161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1941755.2526096234,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1941675.156576194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1557655.3121871057,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1557606.8447412313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1556480.8311037542,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1556478.4280936467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1520744.575409816,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1520653.4426229445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 853259.2962625427,
            "unit": "ns/iter",
            "extra": "iterations: 1097\ncpu: 853244.758432085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1483449.5285714502,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1483408.7301587313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3149.5847947162756,
            "unit": "ns/iter",
            "extra": "iterations: 222278\ncpu: 3149.4452892324216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20343.59785351925,
            "unit": "ns/iter",
            "extra": "iterations: 34475\ncpu: 20343.124002900757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16415.76616331197,
            "unit": "ns/iter",
            "extra": "iterations: 42581\ncpu: 16416.035320917807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15665.84192092737,
            "unit": "ns/iter",
            "extra": "iterations: 44541\ncpu: 15665.470016389438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11886.700156080638,
            "unit": "ns/iter",
            "extra": "iterations: 58944\ncpu: 11886.300556460385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 109724.86177205722,
            "unit": "ns/iter",
            "extra": "iterations: 6388\ncpu: 109722.41703193575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 134241.33448674434,
            "unit": "ns/iter",
            "extra": "iterations: 5202\ncpu: 134237.10111495547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33287.35161121414,
            "unit": "ns/iter",
            "extra": "iterations: 21009\ncpu: 33287.17692417534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33498.73152850963,
            "unit": "ns/iter",
            "extra": "iterations: 20870\ncpu: 33498.77815045495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33200.16509456249,
            "unit": "ns/iter",
            "extra": "iterations: 21097\ncpu: 33198.971417737164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64359.32234297505,
            "unit": "ns/iter",
            "extra": "iterations: 10858\ncpu: 64357.7730705473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61355.01127819881,
            "unit": "ns/iter",
            "extra": "iterations: 11438\ncpu: 61354.065396048165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23633.308037521583,
            "unit": "ns/iter",
            "extra": "iterations: 29636\ncpu: 23632.885679578718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116609.1080674766,
            "unit": "ns/iter",
            "extra": "iterations: 5987\ncpu: 116611.25772507144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94852.55709061235,
            "unit": "ns/iter",
            "extra": "iterations: 7383\ncpu: 94850.68400379365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94842.89271199825,
            "unit": "ns/iter",
            "extra": "iterations: 7382\ncpu: 94840.74776483391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 99422.19200108139,
            "unit": "ns/iter",
            "extra": "iterations: 7401\ncpu: 99418.28131333597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 165192.0698390075,
            "unit": "ns/iter",
            "extra": "iterations: 4224\ncpu: 165183.92518939284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 571388.8474714686,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 571359.7063621612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 482362.33287295897,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 482333.5635359124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 474816.99117445847,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 474802.17243720597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 476331.37465942866,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 476324.727520432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 296862.96246308705,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 296857.57064529805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 464060.23768310837,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 464047.73635152605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23658.01099272712,
            "unit": "ns/iter",
            "extra": "iterations: 29565\ncpu: 23657.699983088165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 122492.28528949266,
            "unit": "ns/iter",
            "extra": "iterations: 5717\ncpu: 122492.23368899677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97595.50807798647,
            "unit": "ns/iter",
            "extra": "iterations: 7180\ncpu: 97591.30919219945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 98089.07713806743,
            "unit": "ns/iter",
            "extra": "iterations: 7156\ncpu: 98077.93460033437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 98685.55181165093,
            "unit": "ns/iter",
            "extra": "iterations: 7093\ncpu: 98680.64288735442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 170907.4926506589,
            "unit": "ns/iter",
            "extra": "iterations: 4082\ncpu: 170898.04017638537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 575836.5713108153,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 575833.3058532566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 483252.95401516464,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 483228.55181879766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 478649.48907101236,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 478638.04644808546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 474522.37027022656,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 474502.5000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 302898.9086580379,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 302885.06493506377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 465294.87850467744,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 465296.7289719684 ns\nthreads: 1"
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
        "date": 1705774131771,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8337.417043596828,
            "unit": "ns/iter",
            "extra": "iterations: 84454\ncpu: 8336.996471451914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60276.35420000479,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60275.709999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 111060.7820314588,
            "unit": "ns/iter",
            "extra": "iterations: 7758\ncpu: 111052.51353441608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160715.3812640283,
            "unit": "ns/iter",
            "extra": "iterations: 5348\ncpu: 160708.26477187735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 211708.32013686627,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 211703.00586510266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 261527.76311030926,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 261517.63110307418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 311572.7393024028,
            "unit": "ns/iter",
            "extra": "iterations: 2781\ncpu: 311570.7299532544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 361316.85868663044,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 361296.5087281799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 412014.6909262521,
            "unit": "ns/iter",
            "extra": "iterations: 2116\ncpu: 412001.7485822306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6790.470622956199,
            "unit": "ns/iter",
            "extra": "iterations: 103346\ncpu: 6789.956069901122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5593.110602209075,
            "unit": "ns/iter",
            "extra": "iterations: 125106\ncpu: 5593.05948555624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5570.31349638183,
            "unit": "ns/iter",
            "extra": "iterations: 125893\ncpu: 5570.096828258921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5607.998324716833,
            "unit": "ns/iter",
            "extra": "iterations: 124755\ncpu: 5607.557212135786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9759.614188492054,
            "unit": "ns/iter",
            "extra": "iterations: 71706\ncpu: 9759.268401528472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 32142.98308618081,
            "unit": "ns/iter",
            "extra": "iterations: 25423\ncpu: 32140.754434960447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 138556.713731208,
            "unit": "ns/iter",
            "extra": "iterations: 6183\ncpu: 138551.75481158015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 109734.62151034898,
            "unit": "ns/iter",
            "extra": "iterations: 7773\ncpu: 109729.34516917543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 108392.88450739399,
            "unit": "ns/iter",
            "extra": "iterations: 7836\ncpu: 108391.33486472696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 105871.47633873117,
            "unit": "ns/iter",
            "extra": "iterations: 8030\ncpu: 105865.76587795776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 365877.4091084499,
            "unit": "ns/iter",
            "extra": "iterations: 2591\ncpu: 365866.2292551146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1923574.049792582,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1923506.2240663937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1539010.3305784848,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1538955.2066115679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1526913.1674876723,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1526830.7060755354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1492807.4428341745,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1492765.861513687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 851295.2352397593,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 851265.8671586722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1475800.7551669339,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1475763.9109697915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38342.20976197875,
            "unit": "ns/iter",
            "extra": "iterations: 21553\ncpu: 38341.8410430102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176409.562384776,
            "unit": "ns/iter",
            "extra": "iterations: 4881\ncpu: 176408.72771973026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136573.64530528488,
            "unit": "ns/iter",
            "extra": "iterations: 6273\ncpu: 136575.41846006733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132802.03508771278,
            "unit": "ns/iter",
            "extra": "iterations: 6498\ncpu: 132800.4770698678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 131957.37030769823,
            "unit": "ns/iter",
            "extra": "iterations: 6500\ncpu: 131953.15384615358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 318812.2307973397,
            "unit": "ns/iter",
            "extra": "iterations: 2734\ncpu: 318795.6839795169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1968607.4173730062,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1968530.9322033883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1565838.3148148102,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1565740.7407407432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1586905.6188034653,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1586883.9316239387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1540450.0066225538,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1540430.1324503357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 861715.6710037007,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 861713.382899627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1510022.2025932227,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1509973.581847647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5348972.019999109,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5348850.999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3355487.4877190264,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3355408.0701754517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28511.64151534225,
            "unit": "ns/iter",
            "extra": "iterations: 28746\ncpu: 28511.664231545034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 139535.028008465,
            "unit": "ns/iter",
            "extra": "iterations: 6141\ncpu: 139527.1454160566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 105281.89530151217,
            "unit": "ns/iter",
            "extra": "iterations: 8109\ncpu: 105279.59057836932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 102884.85052046026,
            "unit": "ns/iter",
            "extra": "iterations: 8262\ncpu: 102880.67053982118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100889.20146088365,
            "unit": "ns/iter",
            "extra": "iterations: 8488\ncpu: 100889.32610744628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 284144.62106659455,
            "unit": "ns/iter",
            "extra": "iterations: 3019\ncpu: 284136.13779397187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1916574.9422680484,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1916550.1030927792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1530012.0800652858,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1529974.3464052316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1519182.5203251804,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1519170.2439024404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1476725.0810810463,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1476682.1939586622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 843813.2130552888,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 843789.1205802374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1462233.2050078076,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1462201.7214397404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3155.512717536964,
            "unit": "ns/iter",
            "extra": "iterations: 221112\ncpu: 3155.27877274863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20139.629478405885,
            "unit": "ns/iter",
            "extra": "iterations: 34778\ncpu: 20138.47834838112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15775.521983329465,
            "unit": "ns/iter",
            "extra": "iterations: 44511\ncpu: 15774.812967581029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16217.5313938885,
            "unit": "ns/iter",
            "extra": "iterations: 43002\ncpu: 16216.964327240526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11337.81056041473,
            "unit": "ns/iter",
            "extra": "iterations: 61740\ncpu: 11337.61094914159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 106599.0890044294,
            "unit": "ns/iter",
            "extra": "iterations: 6539\ncpu: 106597.26257837628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135666.08932714883,
            "unit": "ns/iter",
            "extra": "iterations: 5172\ncpu: 135663.43774168636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33184.93384790429,
            "unit": "ns/iter",
            "extra": "iterations: 21118\ncpu: 33184.21252012506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33470.412300029995,
            "unit": "ns/iter",
            "extra": "iterations: 20878\ncpu: 33470.46173005067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33266.31610206009,
            "unit": "ns/iter",
            "extra": "iterations: 21047\ncpu: 33265.36323466502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67144.21425150965,
            "unit": "ns/iter",
            "extra": "iterations: 10441\ncpu: 67142.55339526884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61500.71014238402,
            "unit": "ns/iter",
            "extra": "iterations: 11378\ncpu: 61498.444366321084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24059.144893518813,
            "unit": "ns/iter",
            "extra": "iterations: 28973\ncpu: 24058.029889897527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 114215.76331265306,
            "unit": "ns/iter",
            "extra": "iterations: 6122\ncpu: 114213.5903299579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94140.68366661597,
            "unit": "ns/iter",
            "extra": "iterations: 7451\ncpu: 94135.06911823878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95438.7335970507,
            "unit": "ns/iter",
            "extra": "iterations: 7331\ncpu: 95439.16246078454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94398.61308160017,
            "unit": "ns/iter",
            "extra": "iterations: 7415\ncpu: 94398.7322993926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 166874.96571429554,
            "unit": "ns/iter",
            "extra": "iterations: 4200\ncpu: 166870.0714285688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 573198.1857610872,
            "unit": "ns/iter",
            "extra": "iterations: 1222\ncpu: 573167.0212765951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 478659.28767123475,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 478632.87671233545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 476189.16847825196,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 476181.725543481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 467376.2575050194,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 467368.51234155725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 300775.73063680035,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 300757.0137693625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 462772.72944298806,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 462758.222811666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24127.161531310066,
            "unit": "ns/iter",
            "extra": "iterations: 29047\ncpu: 24126.305642578995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 121227.21047157043,
            "unit": "ns/iter",
            "extra": "iterations: 5768\ncpu: 121225.22538141253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97166.1952810537,
            "unit": "ns/iter",
            "extra": "iterations: 7205\ncpu: 97162.41498959174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97449.91599330313,
            "unit": "ns/iter",
            "extra": "iterations: 7178\ncpu: 97447.31122875442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 98033.14119787913,
            "unit": "ns/iter",
            "extra": "iterations: 7146\ncpu: 98027.53988245035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 168819.8853012127,
            "unit": "ns/iter",
            "extra": "iterations: 4150\ncpu: 168812.57831325213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 573526.3696721415,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 573503.3606557342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 476242.3226684733,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 476214.2273655529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 476820.3362892368,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 476805.04774898395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 468789.04356571846,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 468790.8176943683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 299116.32378098246,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 299108.0410607331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 463444.86578070256,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 463444.91694351874 ns\nthreads: 1"
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
        "date": 1705777685236,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8303.673023459025,
            "unit": "ns/iter",
            "extra": "iterations: 84529\ncpu: 8303.449703652002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60744.72083870057,
            "unit": "ns/iter",
            "extra": "iterations: 13974\ncpu: 60743.74552740804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 112527.55256275275,
            "unit": "ns/iter",
            "extra": "iterations: 7648\ncpu: 112525.16997907945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 165025.52991452508,
            "unit": "ns/iter",
            "extra": "iterations: 5265\ncpu: 165020.1709401709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 216940.40863704676,
            "unit": "ns/iter",
            "extra": "iterations: 4006\ncpu: 216928.10783824252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 267068.6939403256,
            "unit": "ns/iter",
            "extra": "iterations: 3251\ncpu: 267056.2596124271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 318223.34908423683,
            "unit": "ns/iter",
            "extra": "iterations: 2730\ncpu: 318197.619047619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 370218.22099447553,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 370206.6723331915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 420786.7523069535,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 420760.5148130155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6718.454704986237,
            "unit": "ns/iter",
            "extra": "iterations: 104283\ncpu: 6718.335682709546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5592.112245629364,
            "unit": "ns/iter",
            "extra": "iterations: 125457\ncpu: 5591.829869995306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5638.978160446694,
            "unit": "ns/iter",
            "extra": "iterations: 124041\ncpu: 5638.601752646309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5583.95170841719,
            "unit": "ns/iter",
            "extra": "iterations: 125467\ncpu: 5583.663433412768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9716.948675979482,
            "unit": "ns/iter",
            "extra": "iterations: 72091\ncpu: 9716.488882107356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 33014.29031997725,
            "unit": "ns/iter",
            "extra": "iterations: 24783\ncpu: 33012.23822781745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 141863.99635278273,
            "unit": "ns/iter",
            "extra": "iterations: 6032\ncpu: 141856.54840848813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 111281.1913225374,
            "unit": "ns/iter",
            "extra": "iterations: 7652\ncpu: 111273.43178254073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 110692.24114671214,
            "unit": "ns/iter",
            "extra": "iterations: 7709\ncpu: 110683.94084835901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 107656.89970911469,
            "unit": "ns/iter",
            "extra": "iterations: 7907\ncpu: 107651.28367269524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 366272.82029435795,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 366253.79550735874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1953012.782240901,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1952954.54545454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1574103.4890016804,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1574095.9390862952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1565970.65313043,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1565957.191201356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1550180.786666715,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1550117.8333333302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 873227.112370224,
            "unit": "ns/iter",
            "extra": "iterations: 1059\ncpu: 873203.9660056626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1510965.1333334364,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1510948.4552845526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38406.101301246395,
            "unit": "ns/iter",
            "extra": "iterations: 21441\ncpu: 38404.42609952881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 171751.73919107774,
            "unit": "ns/iter",
            "extra": "iterations: 5019\ncpu: 171742.0601713489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138515.33241889792,
            "unit": "ns/iter",
            "extra": "iterations: 6197\ncpu: 138507.47135710786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136522.61370123492,
            "unit": "ns/iter",
            "extra": "iterations: 6306\ncpu: 136513.60608943895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 135716.32858498752,
            "unit": "ns/iter",
            "extra": "iterations: 6318\ncpu: 135708.57866413417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 316374.0699633408,
            "unit": "ns/iter",
            "extra": "iterations: 2730\ncpu: 316363.0769230778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2007159.244060448,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2007088.336933044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1633058.6333334683,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1633014.3859649077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1605843.5553634316,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1605753.1141868476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1575438.3760682903,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1575311.452991457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 890493.1811248406,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 890434.0324118211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1546280.9202657493,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1546199.8338870425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5480607.87000054,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5480435.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3322099.5392858707,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3321924.2857142915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28466.85476803365,
            "unit": "ns/iter",
            "extra": "iterations: 28754\ncpu: 28465.486541003098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138239.66441659434,
            "unit": "ns/iter",
            "extra": "iterations: 6222\ncpu: 138233.94406943172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106914.17686735309,
            "unit": "ns/iter",
            "extra": "iterations: 8006\ncpu: 106908.65600799433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 105227.72958996038,
            "unit": "ns/iter",
            "extra": "iterations: 8121\ncpu: 105225.03386282537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101770.85472328808,
            "unit": "ns/iter",
            "extra": "iterations: 8384\ncpu: 101766.2810114505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 288625.33786024136,
            "unit": "ns/iter",
            "extra": "iterations: 3019\ncpu: 288030.2749254734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1963820.9768421995,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1963690.947368422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1568830.9494096842,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1568726.4755480608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1565216.8412161148,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1565135.6418919014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1539738.4649999896,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1539680.1666666705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 865829.969416091,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 865769.7868396663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1500131.0726978278,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1500056.5428109914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3174.54612487757,
            "unit": "ns/iter",
            "extra": "iterations: 221193\ncpu: 3174.4354477763654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20100.290948833972,
            "unit": "ns/iter",
            "extra": "iterations: 34769\ncpu: 20099.234950674378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15110.085343428595,
            "unit": "ns/iter",
            "extra": "iterations: 46225\ncpu: 15109.101135749033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16323.443996549464,
            "unit": "ns/iter",
            "extra": "iterations: 46390\ncpu: 16322.647122224638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11865.001137810732,
            "unit": "ns/iter",
            "extra": "iterations: 58885\ncpu: 11864.389912541488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 107161.08476394303,
            "unit": "ns/iter",
            "extra": "iterations: 6524\ncpu: 107161.78724708752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135131.97983714286,
            "unit": "ns/iter",
            "extra": "iterations: 5158\ncpu: 135122.83830942298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33403.56788474363,
            "unit": "ns/iter",
            "extra": "iterations: 20962\ncpu: 33402.948191966476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33700.685497874045,
            "unit": "ns/iter",
            "extra": "iterations: 20728\ncpu: 33699.78772674623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33334.52154248999,
            "unit": "ns/iter",
            "extra": "iterations: 21005\ncpu: 33334.658414663274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68908.03027919421,
            "unit": "ns/iter",
            "extra": "iterations: 10172\ncpu: 68904.41407786118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61523.30021234619,
            "unit": "ns/iter",
            "extra": "iterations: 11302\ncpu: 61518.15607857054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22956.053789650126,
            "unit": "ns/iter",
            "extra": "iterations: 30359\ncpu: 22954.79758885333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 115862.40439960649,
            "unit": "ns/iter",
            "extra": "iterations: 6046\ncpu: 115855.98742970401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93089.26949219513,
            "unit": "ns/iter",
            "extra": "iterations: 7503\ncpu: 93083.73983739832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94321.6372443531,
            "unit": "ns/iter",
            "extra": "iterations: 7432\ncpu: 94318.28579117377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93432.32273513412,
            "unit": "ns/iter",
            "extra": "iterations: 7517\ncpu: 93427.83025143029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 166843.94866284152,
            "unit": "ns/iter",
            "extra": "iterations: 4188\ncpu: 166830.659025789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 577708.8146622812,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 577683.36079078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 483245.17403307697,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 483210.49723757186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 479049.87268989556,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 479040.5886379253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 477142.6154367224,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 477137.37305348594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 305206.7151594674,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 305207.8636959373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 468086.19012675126,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 468073.4489659779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23777.271677871595,
            "unit": "ns/iter",
            "extra": "iterations: 29454\ncpu: 23777.072723568952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 121006.47586086758,
            "unit": "ns/iter",
            "extra": "iterations: 5779\ncpu: 121005.46807406085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96379.05715855873,
            "unit": "ns/iter",
            "extra": "iterations: 7278\ncpu: 96379.51360263646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97010.99944560394,
            "unit": "ns/iter",
            "extra": "iterations: 7215\ncpu: 97004.50450450486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 97310.79060719808,
            "unit": "ns/iter",
            "extra": "iterations: 7197\ncpu: 97307.72544115779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 170922.21878046097,
            "unit": "ns/iter",
            "extra": "iterations: 4100\ncpu: 170918.36585365864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 583192.2975000717,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 583195.5833333425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 480495.1565934143,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 480490.8653846194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 481563.58928573126,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 481555.76923076867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 474409.2362524747,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 474404.20909707365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 303192.34391304635,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 303193.60869565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 469111.1767068549,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 469102.409638546 ns\nthreads: 1"
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
        "date": 1705952853399,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8755.739430726479,
            "unit": "ns/iter",
            "extra": "iterations: 80067\ncpu: 8755.038904917132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 65448.662638692665,
            "unit": "ns/iter",
            "extra": "iterations: 13158\ncpu: 65444.03404772762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 118215.24817116094,
            "unit": "ns/iter",
            "extra": "iterations: 7245\ncpu: 118213.44375431334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 171268.24513695625,
            "unit": "ns/iter",
            "extra": "iterations: 5038\ncpu: 171266.0182612148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 226523.68575162496,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 226516.1045751633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 280494.2511341746,
            "unit": "ns/iter",
            "extra": "iterations: 3086\ncpu: 280482.27478937124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 333792.6520231185,
            "unit": "ns/iter",
            "extra": "iterations: 2595\ncpu: 333788.1695568404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 388939.61046513024,
            "unit": "ns/iter",
            "extra": "iterations: 2236\ncpu: 388933.09481216496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 442019.85772357316,
            "unit": "ns/iter",
            "extra": "iterations: 1968\ncpu: 442011.7378048782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6999.461760909212,
            "unit": "ns/iter",
            "extra": "iterations: 99937\ncpu: 6999.28154737483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5747.244869777943,
            "unit": "ns/iter",
            "extra": "iterations: 119488\ncpu: 5747.224825923936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5801.80650636674,
            "unit": "ns/iter",
            "extra": "iterations: 120774\ncpu: 5801.3189924983835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5740.923888833454,
            "unit": "ns/iter",
            "extra": "iterations: 122124\ncpu: 5740.7061675018895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9849.60111693962,
            "unit": "ns/iter",
            "extra": "iterations: 70908\ncpu: 9849.313194561953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31083.51745160937,
            "unit": "ns/iter",
            "extra": "iterations: 26244\ncpu: 31081.89681450994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 146751.35953895244,
            "unit": "ns/iter",
            "extra": "iterations: 5813\ncpu: 146743.5403406158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113449.81712993224,
            "unit": "ns/iter",
            "extra": "iterations: 7519\ncpu: 113444.75329166096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 113557.40962893704,
            "unit": "ns/iter",
            "extra": "iterations: 7519\ncpu: 113553.43795717525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109661.8913351335,
            "unit": "ns/iter",
            "extra": "iterations: 7767\ncpu: 109656.95892880166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 357268.1675471461,
            "unit": "ns/iter",
            "extra": "iterations: 2650\ncpu: 357266.15094339603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 2045947.1866666314,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2045872.666666671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1617361.9114583617,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1617313.368055558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1612887.0535405145,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1612850.949913646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1595919.8775862723,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1595881.3793103425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 894835.7268340283,
            "unit": "ns/iter",
            "extra": "iterations: 1036\ncpu: 894820.2702702705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1560711.560606015,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1560662.2895622882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38559.917280607864,
            "unit": "ns/iter",
            "extra": "iterations: 21446\ncpu: 38559.83400167861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 181506.24610196866,
            "unit": "ns/iter",
            "extra": "iterations: 4746\ncpu: 181496.18626211555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 142154.10660066822,
            "unit": "ns/iter",
            "extra": "iterations: 6060\ncpu: 142150.19801980155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 139859.91992188085,
            "unit": "ns/iter",
            "extra": "iterations: 6144\ncpu: 139851.09049479206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 137075.87675383178,
            "unit": "ns/iter",
            "extra": "iterations: 6272\ncpu: 137070.20089285725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 308503.96271307126,
            "unit": "ns/iter",
            "extra": "iterations: 2816\ncpu: 308487.2514204551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2088265.227477528,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2088165.5405405445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1657604.3932385142,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1657556.5836298924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1668769.6654740283,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1668674.5974955293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1636289.6795773793,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1636210.38732394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 907900.4985308402,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 907860.528893239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1597333.1543738516,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1597201.2006860995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5607612.570000811,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5607550.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3358367.938628217,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3358163.176895289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28982.39269762566,
            "unit": "ns/iter",
            "extra": "iterations: 28210\ncpu: 28980.772775611396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143697.4067513453,
            "unit": "ns/iter",
            "extra": "iterations: 5984\ncpu: 143687.98462566786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110416.95943335428,
            "unit": "ns/iter",
            "extra": "iterations: 7765\ncpu: 110411.2685125562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 109111.54165600982,
            "unit": "ns/iter",
            "extra": "iterations: 7826\ncpu: 109109.55788397584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105365.45021539216,
            "unit": "ns/iter",
            "extra": "iterations: 8125\ncpu: 105363.39692307681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 293273.38982480613,
            "unit": "ns/iter",
            "extra": "iterations: 2968\ncpu: 293259.09703504044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 2047645.141280372,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2047609.9337748338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1607006.16782018,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1606942.3875432555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1600368.0879311466,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1600328.2758620782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1596516.4263698389,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1596481.8493150729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 895305.1494695663,
            "unit": "ns/iter",
            "extra": "iterations: 1037\ncpu: 895284.9566055913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1546133.36956513,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1546115.050167219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3165.304106091249,
            "unit": "ns/iter",
            "extra": "iterations: 220867\ncpu: 3165.239261637097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20749.216482310097,
            "unit": "ns/iter",
            "extra": "iterations: 33721\ncpu: 20748.57507191357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16784.682156222603,
            "unit": "ns/iter",
            "extra": "iterations: 41684\ncpu: 16784.27454179066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16621.700831091457,
            "unit": "ns/iter",
            "extra": "iterations: 41993\ncpu: 16621.246398209154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12130.642606212405,
            "unit": "ns/iter",
            "extra": "iterations: 57785\ncpu: 12130.471575668318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 105081.25924812852,
            "unit": "ns/iter",
            "extra": "iterations: 6650\ncpu: 105080.55639097773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 142031.8560713686,
            "unit": "ns/iter",
            "extra": "iterations: 4933\ncpu: 142030.89397932345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 34683.618268374674,
            "unit": "ns/iter",
            "extra": "iterations: 20166\ncpu: 34683.32837449174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 35058.30106669373,
            "unit": "ns/iter",
            "extra": "iterations: 20062\ncpu: 34970.26218721967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 34447.4406251585,
            "unit": "ns/iter",
            "extra": "iterations: 20219\ncpu: 34446.85197091832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 69116.68675411909,
            "unit": "ns/iter",
            "extra": "iterations: 10139\ncpu: 69116.39214912755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 63814.98501499303,
            "unit": "ns/iter",
            "extra": "iterations: 11011\ncpu: 63809.054581781864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24266.187350298063,
            "unit": "ns/iter",
            "extra": "iterations: 28807\ncpu: 24265.088346582663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 118408.10098272047,
            "unit": "ns/iter",
            "extra": "iterations: 5902\ncpu: 118400.44052863412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95940.19484437178,
            "unit": "ns/iter",
            "extra": "iterations: 7293\ncpu: 95935.56835321453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96847.28946278813,
            "unit": "ns/iter",
            "extra": "iterations: 7241\ncpu: 96844.80044192742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 96658.9057280896,
            "unit": "ns/iter",
            "extra": "iterations: 7245\ncpu: 96654.31331953054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 168221.70377495652,
            "unit": "ns/iter",
            "extra": "iterations: 4159\ncpu: 168212.74344794295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 602977.1981050948,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 602936.692506454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 498106.82219061436,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 498087.90896158747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 495699.1436659781,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 495690.0920028303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 486671.367432126,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 486644.67640919046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 310493.3498891312,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 310477.2062084282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 483113.27586204774,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 483075.8620689603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24984.114301036672,
            "unit": "ns/iter",
            "extra": "iterations: 27970\ncpu: 24983.521630318162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 123149.95456938159,
            "unit": "ns/iter",
            "extra": "iterations: 5701\ncpu: 123147.04437817872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 99054.74200396438,
            "unit": "ns/iter",
            "extra": "iterations: 7066\ncpu: 99053.02858760385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 100076.77126519238,
            "unit": "ns/iter",
            "extra": "iterations: 6995\ncpu: 100075.6969263759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 99364.6765081503,
            "unit": "ns/iter",
            "extra": "iterations: 7045\ncpu: 99358.26827537449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 170701.15369603108,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 170693.41302756846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 599519.3179880311,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 599483.8022165467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 498051.4449182609,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 498037.668798872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 493308.3363828138,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 493290.007037301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 489446.80699297204,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 489410.83916084433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 312147.5244662135,
            "unit": "ns/iter",
            "extra": "iterations: 2248\ncpu: 312132.74021352385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 483775.6505189976,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 483734.186851211 ns\nthreads: 1"
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
        "date": 1705954279966,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8476.787616398015,
            "unit": "ns/iter",
            "extra": "iterations: 82690\ncpu: 8475.718950296288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61007.14458533957,
            "unit": "ns/iter",
            "extra": "iterations: 13722\ncpu: 61000.82349511733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 113589.08760090674,
            "unit": "ns/iter",
            "extra": "iterations: 7557\ncpu: 113581.07714701598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 165475.1233218252,
            "unit": "ns/iter",
            "extra": "iterations: 5214\ncpu: 165464.05830456468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 216377.13714714334,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 216371.64626530107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 269256.33032659255,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 269246.4385692068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 320645.90188120404,
            "unit": "ns/iter",
            "extra": "iterations: 2711\ncpu: 320631.53817779437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 371829.2746268466,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 371813.21961620485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 422957.11994148995,
            "unit": "ns/iter",
            "extra": "iterations: 2051\ncpu: 422937.3963920043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6845.744201328209,
            "unit": "ns/iter",
            "extra": "iterations: 101963\ncpu: 6845.456685268191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5675.821039864413,
            "unit": "ns/iter",
            "extra": "iterations: 123670\ncpu: 5675.589067680113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5645.331625402514,
            "unit": "ns/iter",
            "extra": "iterations: 123151\ncpu: 5645.021152893604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5658.864560841475,
            "unit": "ns/iter",
            "extra": "iterations: 123657\ncpu: 5658.642050187211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9955.558614211483,
            "unit": "ns/iter",
            "extra": "iterations: 70256\ncpu: 9954.859371441595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29462.29710144992,
            "unit": "ns/iter",
            "extra": "iterations: 27600\ncpu: 29461.079710144924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 138108.58020698905,
            "unit": "ns/iter",
            "extra": "iterations: 6184\ncpu: 138100.87322121617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 108545.44727457843,
            "unit": "ns/iter",
            "extra": "iterations: 7852\ncpu: 108542.5241976567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109255.78265332305,
            "unit": "ns/iter",
            "extra": "iterations: 7794\ncpu: 109250.39774185295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 106242.86934798892,
            "unit": "ns/iter",
            "extra": "iterations: 8006\ncpu: 106238.65850612028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 369857.18595528207,
            "unit": "ns/iter",
            "extra": "iterations: 2549\ncpu: 369835.2687328361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1998275.5809934915,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 1998168.4665226794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1597119.8161511964,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1597019.4158075608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1578966.6428570414,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1578895.0680272114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1564681.4314721103,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1564514.0439932311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 870387.5973659648,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 870311.0065851386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1521375.1527094299,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1521242.0361247947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38947.72707659062,
            "unit": "ns/iter",
            "extra": "iterations: 21321\ncpu: 38944.80559073216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 170645.62269025532,
            "unit": "ns/iter",
            "extra": "iterations: 5033\ncpu: 170631.75044704907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137076.7741319004,
            "unit": "ns/iter",
            "extra": "iterations: 6278\ncpu: 137067.20293086942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 135502.25524529672,
            "unit": "ns/iter",
            "extra": "iterations: 6339\ncpu: 135491.65483514752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132754.85348837415,
            "unit": "ns/iter",
            "extra": "iterations: 6450\ncpu: 132743.39534883696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 326335.049642729,
            "unit": "ns/iter",
            "extra": "iterations: 2659\ncpu: 326314.0654381335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 2037770.6600442592,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2037545.2538631253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1629063.5123241004,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1629024.119718316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1638818.347368486,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1638680.3508771837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1613060.3535527783,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1612937.2616984444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 871421.2084507013,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 871344.9765258194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1562160.2744107367,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1562022.3905723977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5427098.250000881,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5426815.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3334408.651245759,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3334261.921708175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28312.3071113272,
            "unit": "ns/iter",
            "extra": "iterations: 28996\ncpu: 28309.801351910744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 136828.04620041684,
            "unit": "ns/iter",
            "extra": "iterations: 6277\ncpu: 136814.44957782322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106072.72953560311,
            "unit": "ns/iter",
            "extra": "iterations: 8075\ncpu: 106062.24148606777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103746.56025344471,
            "unit": "ns/iter",
            "extra": "iterations: 8207\ncpu: 103742.08602412602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101810.85884498405,
            "unit": "ns/iter",
            "extra": "iterations: 8225\ncpu: 101805.75075987831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 290435.834508217,
            "unit": "ns/iter",
            "extra": "iterations: 2979\ncpu: 290422.5243370252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1991597.212446379,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1991384.5493562121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1599711.3550600645,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1599590.0514579755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1578628.6135592537,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1578483.559322043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1565863.2335023948,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1565719.7969543082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 859811.8212290464,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 859728.5847299842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1513442.7512193946,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1513310.2439024376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3138.608144561966,
            "unit": "ns/iter",
            "extra": "iterations: 223904\ncpu: 3138.2230777475866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19986.45490587616,
            "unit": "ns/iter",
            "extra": "iterations: 35060\ncpu: 19984.161437535597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15581.913138135007,
            "unit": "ns/iter",
            "extra": "iterations: 45014\ncpu: 15580.266139423287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16209.395394006619,
            "unit": "ns/iter",
            "extra": "iterations: 43248\ncpu: 16207.944876063511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11864.336111771376,
            "unit": "ns/iter",
            "extra": "iterations: 58906\ncpu: 11863.429871320473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 107975.25767156282,
            "unit": "ns/iter",
            "extra": "iterations: 6485\ncpu: 107972.58288357854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 138056.03821781304,
            "unit": "ns/iter",
            "extra": "iterations: 5050\ncpu: 138045.98019801953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33936.2358984316,
            "unit": "ns/iter",
            "extra": "iterations: 20636\ncpu: 33934.66272533431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33884.21400928468,
            "unit": "ns/iter",
            "extra": "iterations: 20672\ncpu: 33883.49458204348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33791.31214375561,
            "unit": "ns/iter",
            "extra": "iterations: 20702\ncpu: 33789.88503526229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 68606.00117797198,
            "unit": "ns/iter",
            "extra": "iterations: 10187\ncpu: 68601.50191420391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62560.120657321066,
            "unit": "ns/iter",
            "extra": "iterations: 11197\ncpu: 62552.22827543081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23628.20020161195,
            "unit": "ns/iter",
            "extra": "iterations: 29760\ncpu: 23625.823252688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116016.63981435263,
            "unit": "ns/iter",
            "extra": "iterations: 6033\ncpu: 116012.14984253165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95119.65084746377,
            "unit": "ns/iter",
            "extra": "iterations: 7375\ncpu: 95116.82711864346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 96137.4511742922,
            "unit": "ns/iter",
            "extra": "iterations: 7281\ncpu: 96135.88792748199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95853.22313708505,
            "unit": "ns/iter",
            "extra": "iterations: 7287\ncpu: 95849.37560038464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 171460.3212447735,
            "unit": "ns/iter",
            "extra": "iterations: 4081\ncpu: 171459.2011761825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 593316.4923728821,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 593305.4237288107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 492855.0522229933,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 492836.7678193426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 490528.5713291589,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 490514.47459985985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 484980.4785318601,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 484967.17451524345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 311855.93009794777,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 311843.0097951892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 478542.8186813498,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 478523.9010988993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24061.571448208924,
            "unit": "ns/iter",
            "extra": "iterations: 29098\ncpu: 24060.969826104592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 123437.14363958838,
            "unit": "ns/iter",
            "extra": "iterations: 5660\ncpu: 123433.93992932892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 99116.4053212587,
            "unit": "ns/iter",
            "extra": "iterations: 7066\ncpu: 99112.51061420838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 99912.66481322792,
            "unit": "ns/iter",
            "extra": "iterations: 7014\ncpu: 99908.05531793687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 99855.77511756416,
            "unit": "ns/iter",
            "extra": "iterations: 7017\ncpu: 99848.79578167242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 171978.12849435414,
            "unit": "ns/iter",
            "extra": "iterations: 4078\ncpu: 171973.68808239294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 589069.7307047091,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 589045.9731543541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 491213.30266851356,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 491191.50280898804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 485294.4319444595,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 485279.02777777653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 488174.53454285813,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 488162.17725052306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 305579.8233755016,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 305571.95813344966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 476657.53688522294,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 476644.740437159 ns\nthreads: 1"
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
        "date": 1705956307397,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8231.911229251535,
            "unit": "ns/iter",
            "extra": "iterations: 84645\ncpu: 8231.726622954695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58931.06070000159,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58927.34 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109542.02681992884,
            "unit": "ns/iter",
            "extra": "iterations: 7830\ncpu: 109532.4521072797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 158470.36064668774,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 158463.21881315453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 208520.45222007038,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 208507.67374517376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 259909.63128159882,
            "unit": "ns/iter",
            "extra": "iterations: 3363\ncpu: 259890.9604519773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 305745.4098765563,
            "unit": "ns/iter",
            "extra": "iterations: 2835\ncpu: 305726.98412698397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 356742.14959018456,
            "unit": "ns/iter",
            "extra": "iterations: 2440\ncpu: 356724.0573770489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 406158.01120972494,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 406116.95469406864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6729.254120970741,
            "unit": "ns/iter",
            "extra": "iterations: 104041\ncpu: 6728.578156688235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5574.6651173520995,
            "unit": "ns/iter",
            "extra": "iterations: 125647\ncpu: 5574.248489816702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5592.450059533391,
            "unit": "ns/iter",
            "extra": "iterations: 125139\ncpu: 5592.072815029693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5572.5789356397045,
            "unit": "ns/iter",
            "extra": "iterations: 125653\ncpu: 5572.079456917058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9732.83171053569,
            "unit": "ns/iter",
            "extra": "iterations: 71995\ncpu: 9732.077227585236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29732.721073853918,
            "unit": "ns/iter",
            "extra": "iterations: 27527\ncpu: 29729.926980782464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 140522.61656493138,
            "unit": "ns/iter",
            "extra": "iterations: 6061\ncpu: 140513.79310344814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 112896.10727513964,
            "unit": "ns/iter",
            "extra": "iterations: 7560\ncpu: 112883.18783068782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 110663.1320705837,
            "unit": "ns/iter",
            "extra": "iterations: 7708\ncpu: 110656.69434353917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109525.19205043363,
            "unit": "ns/iter",
            "extra": "iterations: 7774\ncpu: 109515.61615641849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 360779.3232284903,
            "unit": "ns/iter",
            "extra": "iterations: 2639\ncpu: 360747.82114437275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1922108.2605041785,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1921929.8319327796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1538774.4876032546,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1538664.132231407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1530475.7107437842,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1530361.4876033037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1494756.4847021485,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1494662.9629629634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 821884.3144376228,
            "unit": "ns/iter",
            "extra": "iterations: 1129\ncpu: 821804.0744021278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1467006.833070978,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1466965.5118110233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 39694.6660077156,
            "unit": "ns/iter",
            "extra": "iterations: 20740\ncpu: 39691.43683702995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 175913.83688088975,
            "unit": "ns/iter",
            "extra": "iterations: 4886\ncpu: 175901.59639787133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137695.79861781432,
            "unit": "ns/iter",
            "extra": "iterations: 6222\ncpu: 137686.08164577332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136091.64719810896,
            "unit": "ns/iter",
            "extra": "iterations: 6335\ncpu: 136081.3733228097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 133904.7270595726,
            "unit": "ns/iter",
            "extra": "iterations: 6397\ncpu: 133893.15304048764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 311517.7363075582,
            "unit": "ns/iter",
            "extra": "iterations: 2757\ncpu: 311490.60573086626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1967267.761099491,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1967228.32980972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1571049.5025293755,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1571027.9932546334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1577865.5414551364,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1577832.9949238638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1538834.8905472604,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1538755.389718076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 839460.0253853259,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 839447.5067996389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1506005.702922067,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1505956.4935064884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5238129.220000474,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5238089.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3186681.0445208475,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3186507.5342465956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29078.336843975856,
            "unit": "ns/iter",
            "extra": "iterations: 28105\ncpu: 29078.210282867778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 140303.09422542137,
            "unit": "ns/iter",
            "extra": "iterations: 6113\ncpu: 140300.9651562245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108513.13522410626,
            "unit": "ns/iter",
            "extra": "iterations: 7898\ncpu: 108512.69941757376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107604.99056128577,
            "unit": "ns/iter",
            "extra": "iterations: 7946\ncpu: 107602.2778756609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 104280.97306806596,
            "unit": "ns/iter",
            "extra": "iterations: 8243\ncpu: 104280.61385417891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 279448.32364338625,
            "unit": "ns/iter",
            "extra": "iterations: 3096\ncpu: 279438.9211886312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1937419.2727272755,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1937367.9752066126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1529176.1060358752,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1529070.6362153396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1526864.1178396218,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1526780.1963993474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1490813.9138754448,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1490658.6921850098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 825922.5288376521,
            "unit": "ns/iter",
            "extra": "iterations: 1127\ncpu: 825855.4569653919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1464313.7115987118,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1464205.6426332295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3156.941046356022,
            "unit": "ns/iter",
            "extra": "iterations: 222429\ncpu: 3156.9673918419066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20312.920064875627,
            "unit": "ns/iter",
            "extra": "iterations: 34528\ncpu: 20312.575301204815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15104.111695338142,
            "unit": "ns/iter",
            "extra": "iterations: 46215\ncpu: 15103.124526668844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16226.1976103363,
            "unit": "ns/iter",
            "extra": "iterations: 43186\ncpu: 16224.58898717172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11857.956406892028,
            "unit": "ns/iter",
            "extra": "iterations: 58679\ncpu: 11857.211268085599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 108756.59651873847,
            "unit": "ns/iter",
            "extra": "iterations: 6377\ncpu: 108748.40834248111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 134961.04829708682,
            "unit": "ns/iter",
            "extra": "iterations: 5197\ncpu: 134957.78333654007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33495.87277341416,
            "unit": "ns/iter",
            "extra": "iterations: 20884\ncpu: 33493.26757326194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33517.148533357344,
            "unit": "ns/iter",
            "extra": "iterations: 20864\ncpu: 33514.78623466258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32884.999577939736,
            "unit": "ns/iter",
            "extra": "iterations: 21324\ncpu: 32882.517351340975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65743.03154632958,
            "unit": "ns/iter",
            "extra": "iterations: 10651\ncpu: 65742.07116702673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61528.097764870225,
            "unit": "ns/iter",
            "extra": "iterations: 11364\ncpu: 61527.446321717835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23417.32973045274,
            "unit": "ns/iter",
            "extra": "iterations: 29976\ncpu: 23415.292233787033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117778.20988899306,
            "unit": "ns/iter",
            "extra": "iterations: 5946\ncpu: 117771.34207870817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94791.45174845023,
            "unit": "ns/iter",
            "extra": "iterations: 7378\ncpu: 94784.84684196096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95283.4170861073,
            "unit": "ns/iter",
            "extra": "iterations: 7351\ncpu: 95277.09155216928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95698.90438465729,
            "unit": "ns/iter",
            "extra": "iterations: 7321\ncpu: 95698.31990165218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170823.87381010957,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 170818.28166951143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 574567.8016460766,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 574518.9300411562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 474038.44029843586,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 474023.5413839936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 475197.8968792009,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 475146.8792401636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 461870.2949735218,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 461839.15343915235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 296492.11360745324,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 296473.2513777005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 461737.3428005813,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 461714.8612945859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24181.356893756085,
            "unit": "ns/iter",
            "extra": "iterations: 28961\ncpu: 24179.313559614224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 122261.75402096807,
            "unit": "ns/iter",
            "extra": "iterations: 5720\ncpu: 122255.17482517293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97835.06256109521,
            "unit": "ns/iter",
            "extra": "iterations: 7161\ncpu: 97829.70255550896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 98365.09761570817,
            "unit": "ns/iter",
            "extra": "iterations: 7130\ncpu: 98361.66900420781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 99003.81656553474,
            "unit": "ns/iter",
            "extra": "iterations: 7087\ncpu: 99001.3404825736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 176051.17087520435,
            "unit": "ns/iter",
            "extra": "iterations: 4079\ncpu: 176037.9749938717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 576544.9504950515,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 576509.1584158369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 478001.09208730154,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 477969.98635742674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 469674.5238094919,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 469671.5627095928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 465826.9400399723,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 465804.4636908748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 296414.3946700427,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 296400.08460237156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 461621.7478490926,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 461596.9556585058 ns\nthreads: 1"
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
        "date": 1705957755250,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8260.656850374411,
            "unit": "ns/iter",
            "extra": "iterations: 84791\ncpu: 8259.995754266372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58978.27810000535,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58976.61999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109050.13292745636,
            "unit": "ns/iter",
            "extra": "iterations: 7884\ncpu: 109040.99441907658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 156876.05078267812,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 156867.5464142701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 208351.7640287902,
            "unit": "ns/iter",
            "extra": "iterations: 4170\ncpu: 208348.65707434044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 256598.68239834567,
            "unit": "ns/iter",
            "extra": "iterations: 3369\ncpu: 256588.0973582665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 305248.01126760774,
            "unit": "ns/iter",
            "extra": "iterations: 2840\ncpu: 305228.87323943677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 355551.74295057793,
            "unit": "ns/iter",
            "extra": "iterations: 2447\ncpu: 355526.7674703719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 404012.54114364315,
            "unit": "ns/iter",
            "extra": "iterations: 2151\ncpu: 404004.0446304048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6819.311628814952,
            "unit": "ns/iter",
            "extra": "iterations: 102375\ncpu: 6818.986080586093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5534.81376050178,
            "unit": "ns/iter",
            "extra": "iterations: 126289\ncpu: 5534.552494674904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5543.175203469394,
            "unit": "ns/iter",
            "extra": "iterations: 125203\ncpu: 5542.915904570988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5606.819893336173,
            "unit": "ns/iter",
            "extra": "iterations: 124504\ncpu: 5606.6793034762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9702.973559909278,
            "unit": "ns/iter",
            "extra": "iterations: 71558\ncpu: 9702.715279912809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 32409.24787216878,
            "unit": "ns/iter",
            "extra": "iterations: 24908\ncpu: 32408.210213585986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 139542.84835163766,
            "unit": "ns/iter",
            "extra": "iterations: 5915\ncpu: 139538.22485207085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 109862.41850845996,
            "unit": "ns/iter",
            "extra": "iterations: 7737\ncpu: 109858.69199948313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 108525.19900812984,
            "unit": "ns/iter",
            "extra": "iterations: 7864\ncpu: 108520.8545269585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 106625.20514106177,
            "unit": "ns/iter",
            "extra": "iterations: 7975\ncpu: 106619.9749216303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 381850.68588709953,
            "unit": "ns/iter",
            "extra": "iterations: 2480\ncpu: 381827.177419355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1932697.574112697,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1932594.989561583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1503626.9659090112,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1503552.9220779215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1516453.941080161,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1516391.3256955803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1519950.5908347408,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1519857.9378068743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 831910.665464366,
            "unit": "ns/iter",
            "extra": "iterations: 1109\ncpu: 831872.6780883671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1471880.0508744435,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1471807.631160573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38319.470407918154,
            "unit": "ns/iter",
            "extra": "iterations: 21205\ncpu: 38317.37797689221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 169972.911660078,
            "unit": "ns/iter",
            "extra": "iterations: 5060\ncpu: 169961.9367588934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138328.33816891245,
            "unit": "ns/iter",
            "extra": "iterations: 6204\ncpu: 138322.11476466787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 134125.33071239004,
            "unit": "ns/iter",
            "extra": "iterations: 6359\ncpu: 134121.04104418965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 131856.39729396958,
            "unit": "ns/iter",
            "extra": "iterations: 6504\ncpu: 131849.13899139015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 329799.4353481362,
            "unit": "ns/iter",
            "extra": "iterations: 2614\ncpu: 329781.0635042087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1997814.9253731475,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1997673.7739872069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1572786.6165539387,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1572718.4121621586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1556146.1335558433,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1555998.4974958287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1550154.389999913,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1550035.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 844898.73272725,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 844871.2727272775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1511204.6191247453,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1510066.612641817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5248521.749999782,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5248263.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3262899.657342914,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3262615.7342657284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28282.87246642471,
            "unit": "ns/iter",
            "extra": "iterations: 28369\ncpu: 28281.645458070558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 135833.23956845823,
            "unit": "ns/iter",
            "extra": "iterations: 6303\ncpu: 135829.84293193615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107045.4112207941,
            "unit": "ns/iter",
            "extra": "iterations: 8003\ncpu: 107040.79720104975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104077.13911240762,
            "unit": "ns/iter",
            "extra": "iterations: 8202\ncpu: 104073.1528895393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101030.9338705833,
            "unit": "ns/iter",
            "extra": "iterations: 8438\ncpu: 101026.07252903514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 301509.8740894782,
            "unit": "ns/iter",
            "extra": "iterations: 2883\ncpu: 301500.69372181874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1966233.9957894322,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1966065.6842105302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1500787.1723027064,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1500716.4251207693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1527872.9901478721,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1527779.4745484393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1511504.3719413446,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1511427.895595436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 829593.7571684968,
            "unit": "ns/iter",
            "extra": "iterations: 1116\ncpu: 829536.3799283144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1461128.229559763,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1461091.3522012488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3153.6108503604,
            "unit": "ns/iter",
            "extra": "iterations: 220730\ncpu: 3153.489330856714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20251.422054567116,
            "unit": "ns/iter",
            "extra": "iterations: 34197\ncpu: 20250.820247390082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16550.819277963004,
            "unit": "ns/iter",
            "extra": "iterations: 42297\ncpu: 16550.56150554408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16460.430942849824,
            "unit": "ns/iter",
            "extra": "iterations: 42711\ncpu: 16460.08054131254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12069.6494461774,
            "unit": "ns/iter",
            "extra": "iterations: 58051\ncpu: 12069.425160634688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 110897.62706480919,
            "unit": "ns/iter",
            "extra": "iterations: 6296\ncpu: 110896.15628970732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 129200.82170543351,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 129196.08711701701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33086.596908387786,
            "unit": "ns/iter",
            "extra": "iterations: 21154\ncpu: 33083.974662002634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33804.47889500171,
            "unit": "ns/iter",
            "extra": "iterations: 20706\ncpu: 33803.853955375256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33000.198798884325,
            "unit": "ns/iter",
            "extra": "iterations: 21147\ncpu: 32999.0731545845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66523.56770387701,
            "unit": "ns/iter",
            "extra": "iterations: 10509\ncpu: 66521.68617375541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61694.164351044994,
            "unit": "ns/iter",
            "extra": "iterations: 11372\ncpu: 61692.11220541652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23978.592952986866,
            "unit": "ns/iter",
            "extra": "iterations: 29289\ncpu: 23978.51070367739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 115932.62489626177,
            "unit": "ns/iter",
            "extra": "iterations: 6025\ncpu: 115930.78838174207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94658.22550480803,
            "unit": "ns/iter",
            "extra": "iterations: 7379\ncpu: 94657.853367665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95558.64435032249,
            "unit": "ns/iter",
            "extra": "iterations: 7319\ncpu: 95558.28665118183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95021.9596315407,
            "unit": "ns/iter",
            "extra": "iterations: 7382\ncpu: 95020.48225413043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170847.0178266133,
            "unit": "ns/iter",
            "extra": "iterations: 4095\ncpu: 170846.2271062283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 581878.1377593419,
            "unit": "ns/iter",
            "extra": "iterations: 1205\ncpu: 581862.1576763529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 468215.28915666416,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 468199.799196794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 471543.84490899974,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 471523.60080917046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 466215.0353097682,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 466209.59360426175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 296383.9945194223,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 296384.9494097829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 459775.48815795005,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 459750.32894736616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24043.428429082764,
            "unit": "ns/iter",
            "extra": "iterations: 29104\ncpu: 24043.35830126424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 127733.73652903785,
            "unit": "ns/iter",
            "extra": "iterations: 5716\ncpu: 127731.35059482332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97616.41024206366,
            "unit": "ns/iter",
            "extra": "iterations: 7147\ncpu: 97614.87337344358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 99155.77506388826,
            "unit": "ns/iter",
            "extra": "iterations: 7042\ncpu: 99153.36552115926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 97914.23194187024,
            "unit": "ns/iter",
            "extra": "iterations: 7019\ncpu: 97909.77347200537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 175031.3799301175,
            "unit": "ns/iter",
            "extra": "iterations: 4006\ncpu: 175028.30753869165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 582634.2004991128,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 582623.211314478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 469770.56524679996,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 469768.4922244746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 467882.72069664043,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 467865.1707970516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 474378.79497625394,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 474370.87576375116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 295261.1593406488,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 295254.05748097855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 461333.0866401979,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 461331.3492063539 ns\nthreads: 1"
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
        "date": 1705959211681,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8183.478629485163,
            "unit": "ns/iter",
            "extra": "iterations: 85632\ncpu: 8183.100943572497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59550.9088999961,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59549.05 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110104.12455197138,
            "unit": "ns/iter",
            "extra": "iterations: 7812\ncpu: 110097.72145417308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 160310.16015625812,
            "unit": "ns/iter",
            "extra": "iterations: 5376\ncpu: 160303.4412202381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 210555.4377734363,
            "unit": "ns/iter",
            "extra": "iterations: 4114\ncpu: 210543.75303840556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 260589.50800845568,
            "unit": "ns/iter",
            "extra": "iterations: 3309\ncpu: 260567.9359323057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 309599.3799500525,
            "unit": "ns/iter",
            "extra": "iterations: 2803\ncpu: 309577.880841955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 359845.56865179096,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 359823.65591397864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 409821.59726804687,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 409790.2025435698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6689.136294572641,
            "unit": "ns/iter",
            "extra": "iterations: 103988\ncpu: 6688.463091895225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5583.002353523252,
            "unit": "ns/iter",
            "extra": "iterations: 125344\ncpu: 5582.641370947152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5568.422311327288,
            "unit": "ns/iter",
            "extra": "iterations: 125694\ncpu: 5567.953124254147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5560.929171126353,
            "unit": "ns/iter",
            "extra": "iterations: 126135\ncpu: 5560.737305268171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9613.84121635669,
            "unit": "ns/iter",
            "extra": "iterations: 72709\ncpu: 9613.2734599568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29506.769110709392,
            "unit": "ns/iter",
            "extra": "iterations: 27550\ncpu: 29503.568058076216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 138844.29650122768,
            "unit": "ns/iter",
            "extra": "iterations: 6145\ncpu: 138836.19202603746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 110265.85050010278,
            "unit": "ns/iter",
            "extra": "iterations: 5699\ncpu: 110256.18529566609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109320.78590680742,
            "unit": "ns/iter",
            "extra": "iterations: 7791\ncpu: 109320.24130406849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 107274.18667337221,
            "unit": "ns/iter",
            "extra": "iterations: 7939\ncpu: 107270.95352059482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 371653.97287735215,
            "unit": "ns/iter",
            "extra": "iterations: 2544\ncpu: 371639.6619496849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1917720.8962656376,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1917660.9958506231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1509746.5944624469,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1509711.72638436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1515829.1819671667,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1515795.0819672167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1519858.1147540638,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1519820.4918032761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 859669.8014911409,
            "unit": "ns/iter",
            "extra": "iterations: 1073\ncpu: 859656.570363466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1470110.4777777295,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1470069.3650793664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38697.26861627499,
            "unit": "ns/iter",
            "extra": "iterations: 21406\ncpu: 38696.79061945245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 173769.4652904275,
            "unit": "ns/iter",
            "extra": "iterations: 4941\ncpu: 173764.4606354987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137025.18542833906,
            "unit": "ns/iter",
            "extra": "iterations: 6245\ncpu: 137024.3074459567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138886.88387823018,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 138883.74939603766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132020.73090519113,
            "unit": "ns/iter",
            "extra": "iterations: 6507\ncpu: 132015.99815583215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 323794.39118976705,
            "unit": "ns/iter",
            "extra": "iterations: 2656\ncpu: 323781.77710843337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1953080.6743696705,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1953008.8235294125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1558887.8187918684,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1558848.6577181288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1558715.9090908838,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1558687.5420875382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1539915.2483443357,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1539855.2980132375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 872809.5792453175,
            "unit": "ns/iter",
            "extra": "iterations: 1060\ncpu: 872798.3018867921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1499915.770597897,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1499868.9822293972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5425499.729999501,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5425398.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3285123.2535211747,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3285020.422535207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28429.143802689945,
            "unit": "ns/iter",
            "extra": "iterations: 28706\ncpu: 28428.95561903424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138336.3681238912,
            "unit": "ns/iter",
            "extra": "iterations: 6199\ncpu: 138330.94047426942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107218.04997500386,
            "unit": "ns/iter",
            "extra": "iterations: 8004\ncpu: 107216.70414792589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104109.62080373138,
            "unit": "ns/iter",
            "extra": "iterations: 8162\ncpu: 104106.46900269522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101843.36844619257,
            "unit": "ns/iter",
            "extra": "iterations: 8373\ncpu: 101842.672877105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 292170.6074225524,
            "unit": "ns/iter",
            "extra": "iterations: 2937\ncpu: 292155.6009533535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1920203.8703702623,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1920177.9835391035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1512242.3392857509,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1512189.7727272797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1513746.1120128937,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1513737.66233766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1511147.2207792813,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1511077.2727272788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 858056.7071823385,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 858052.302025783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1463176.8677165785,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1463140.3149606304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3171.031146878835,
            "unit": "ns/iter",
            "extra": "iterations: 220311\ncpu: 3171.0218736241027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20176.374899249146,
            "unit": "ns/iter",
            "extra": "iterations: 34740\ncpu: 20176.036269429867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16483.44759558775,
            "unit": "ns/iter",
            "extra": "iterations: 42630\ncpu: 16483.37555711948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16326.176161570129,
            "unit": "ns/iter",
            "extra": "iterations: 42830\ncpu: 16325.468129815421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11997.461112830239,
            "unit": "ns/iter",
            "extra": "iterations: 58194\ncpu: 11997.266041172612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 109459.21451938368,
            "unit": "ns/iter",
            "extra": "iterations: 6419\ncpu: 109457.25190839649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 127955.2513711226,
            "unit": "ns/iter",
            "extra": "iterations: 5470\ncpu: 127953.03473491778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32923.678207548575,
            "unit": "ns/iter",
            "extra": "iterations: 21200\ncpu: 32922.16037735832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33334.114716435826,
            "unit": "ns/iter",
            "extra": "iterations: 20895\ncpu: 33332.80210576686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33098.77173292652,
            "unit": "ns/iter",
            "extra": "iterations: 21028\ncpu: 33097.75061822332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67650.40391853172,
            "unit": "ns/iter",
            "extra": "iterations: 10361\ncpu: 67647.38924814257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61193.248905619315,
            "unit": "ns/iter",
            "extra": "iterations: 11422\ncpu: 61192.882157240056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23528.538391806815,
            "unit": "ns/iter",
            "extra": "iterations: 29785\ncpu: 23527.84623132453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 115849.40579470506,
            "unit": "ns/iter",
            "extra": "iterations: 6040\ncpu: 115845.77814569534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95243.51272282185,
            "unit": "ns/iter",
            "extra": "iterations: 7349\ncpu: 95240.03265750555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95345.54545453859,
            "unit": "ns/iter",
            "extra": "iterations: 7337\ncpu: 95342.00626959346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95265.00775298364,
            "unit": "ns/iter",
            "extra": "iterations: 7352\ncpu: 95264.37704025966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 169799.31486882738,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 169796.86588921247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 574100.7397034818,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 574083.3607907806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 478414.67600818357,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 478395.2153110005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 478319.00478796853,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 478304.99316005653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 468802.97119888,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 468787.2739450815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 307218.1533715404,
            "unit": "ns/iter",
            "extra": "iterations: 2269\ncpu: 307202.77655354864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 466670.71428572206,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 466661.0146862457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24733.174025239085,
            "unit": "ns/iter",
            "extra": "iterations: 28289\ncpu: 24732.532079607143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 123455.88103629256,
            "unit": "ns/iter",
            "extra": "iterations: 5674\ncpu: 123454.37081423916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 98520.55543018079,
            "unit": "ns/iter",
            "extra": "iterations: 7090\ncpu: 98518.80112834938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 98743.44510468616,
            "unit": "ns/iter",
            "extra": "iterations: 7068\ncpu: 98740.06791171481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 100149.36662867611,
            "unit": "ns/iter",
            "extra": "iterations: 7018\ncpu: 100145.75377600471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 173725.9246592229,
            "unit": "ns/iter",
            "extra": "iterations: 4035\ncpu: 173717.84386617155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 572255.8542178277,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 572247.5020475002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 477919.7192017021,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 477897.8664831313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 469265.6628686995,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 469258.713136733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 472961.4139566721,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 472942.4119241225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 307492.4053097438,
            "unit": "ns/iter",
            "extra": "iterations: 2260\ncpu: 307487.12389380514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 465436.53364423726,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 465428.3810792758 ns\nthreads: 1"
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
        "date": 1705961267585,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8329.30016520685,
            "unit": "ns/iter",
            "extra": "iterations: 84137\ncpu: 8328.605726374843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59428.6229999966,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59426.86 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 108798.61748357405,
            "unit": "ns/iter",
            "extra": "iterations: 7916\ncpu: 108794.90904497221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 158544.3741709655,
            "unit": "ns/iter",
            "extra": "iterations: 5428\ncpu: 158543.01768607218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 209920.70768858615,
            "unit": "ns/iter",
            "extra": "iterations: 4136\ncpu: 209914.31334622824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 258749.2407074307,
            "unit": "ns/iter",
            "extra": "iterations: 3336\ncpu: 258735.46163069553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 308162.08604813897,
            "unit": "ns/iter",
            "extra": "iterations: 2824\ncpu: 308145.3966005665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 359812.2018992227,
            "unit": "ns/iter",
            "extra": "iterations: 2422\ncpu: 359796.4079273329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 407810.75561797695,
            "unit": "ns/iter",
            "extra": "iterations: 2136\ncpu: 407804.07303370826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6651.297713910635,
            "unit": "ns/iter",
            "extra": "iterations: 105289\ncpu: 6650.822972960142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5612.51074126731,
            "unit": "ns/iter",
            "extra": "iterations: 125218\ncpu: 5612.36323851204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5551.417121095114,
            "unit": "ns/iter",
            "extra": "iterations: 125249\ncpu: 5551.372066842846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5550.45422294347,
            "unit": "ns/iter",
            "extra": "iterations: 125718\ncpu: 5550.32453586598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9773.945979196962,
            "unit": "ns/iter",
            "extra": "iterations: 71528\ncpu: 9773.780896991393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30390.83160563826,
            "unit": "ns/iter",
            "extra": "iterations: 26818\ncpu: 30390.70773361176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 141624.4861640385,
            "unit": "ns/iter",
            "extra": "iterations: 6035\ncpu: 141620.51367025677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 110772.38236060055,
            "unit": "ns/iter",
            "extra": "iterations: 7676\ncpu: 110771.9906201144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109884.81343669986,
            "unit": "ns/iter",
            "extra": "iterations: 7740\ncpu: 109882.82945736451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 106416.85497997284,
            "unit": "ns/iter",
            "extra": "iterations: 7992\ncpu: 106415.39039039053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 373259.92871130485,
            "unit": "ns/iter",
            "extra": "iterations: 2553\ncpu: 373237.0936153536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1893070.2991804176,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1893021.311475414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1531697.568369008,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1531591.4332784195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1516599.892156859,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1516553.2679738551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1488538.7717042654,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1488459.8070739552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 841678.6999999782,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 841641.1818181821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1456546.1037734735,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1456472.327044027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38839.29021652392,
            "unit": "ns/iter",
            "extra": "iterations: 21291\ncpu: 38836.02461133808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 173373.88599149915,
            "unit": "ns/iter",
            "extra": "iterations: 4947\ncpu: 173366.58580958142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136764.71008469124,
            "unit": "ns/iter",
            "extra": "iterations: 6257\ncpu: 136758.6862713759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132965.4999999998,
            "unit": "ns/iter",
            "extra": "iterations: 6424\ncpu: 132959.40224159422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132997.85763026914,
            "unit": "ns/iter",
            "extra": "iterations: 6448\ncpu: 132983.00248138973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 316329.8993042742,
            "unit": "ns/iter",
            "extra": "iterations: 2731\ncpu: 316312.04686927854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1925901.8029046673,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1925805.8091286262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1566904.1942566372,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1566838.175675669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1562222.7609427797,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1562108.5858585837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1521175.0967214208,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1521102.6229508207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 852815.0660550352,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 852775.8715596324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1533129.8926282553,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1532243.5897435874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5287042.0499994,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5286894.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3340496.603571199,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3340331.785714287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28331.815913830076,
            "unit": "ns/iter",
            "extra": "iterations: 28780\ncpu: 28331.56358582364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137937.46096775023,
            "unit": "ns/iter",
            "extra": "iterations: 6200\ncpu: 137932.22580645193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106586.53926241596,
            "unit": "ns/iter",
            "extra": "iterations: 7972\ncpu: 106583.07827395832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104500.22056486663,
            "unit": "ns/iter",
            "extra": "iterations: 8179\ncpu: 104497.11456168184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101114.36059962846,
            "unit": "ns/iter",
            "extra": "iterations: 8472\ncpu: 101112.22851746976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 285725.0612785695,
            "unit": "ns/iter",
            "extra": "iterations: 3019\ncpu: 285717.7873468023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1904791.7909836462,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1904746.3114754139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1511207.638436304,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1511142.996742676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1505733.174193511,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1505725.1612903213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1476515.4729299205,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1476463.8535031804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 835114.301615762,
            "unit": "ns/iter",
            "extra": "iterations: 1114\ncpu: 835077.1992818664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1444819.5482865127,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1444773.6760124587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3166.356840358597,
            "unit": "ns/iter",
            "extra": "iterations: 220544\ncpu: 3166.172736506101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20336.60636413836,
            "unit": "ns/iter",
            "extra": "iterations: 34443\ncpu: 20336.724443283176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16246.042149239227,
            "unit": "ns/iter",
            "extra": "iterations: 43085\ncpu: 16245.542532203684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15594.353917913033,
            "unit": "ns/iter",
            "extra": "iterations: 44807\ncpu: 15594.20849420852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11985.831170167083,
            "unit": "ns/iter",
            "extra": "iterations: 58402\ncpu: 11984.926886065521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 112949.03064201612,
            "unit": "ns/iter",
            "extra": "iterations: 6168\ncpu: 112943.22308690025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 131384.45051643797,
            "unit": "ns/iter",
            "extra": "iterations: 5325\ncpu: 131374.44131455317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32796.19454596624,
            "unit": "ns/iter",
            "extra": "iterations: 21342\ncpu: 32793.44953612575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33248.96712704158,
            "unit": "ns/iter",
            "extra": "iterations: 21142\ncpu: 33246.074165168866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32786.35427418518,
            "unit": "ns/iter",
            "extra": "iterations: 21314\ncpu: 32784.00112602047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67178.81252998061,
            "unit": "ns/iter",
            "extra": "iterations: 10423\ncpu: 67173.91346061607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 60190.679882774064,
            "unit": "ns/iter",
            "extra": "iterations: 11602\ncpu: 60188.958800207285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23296.434092271826,
            "unit": "ns/iter",
            "extra": "iterations: 30042\ncpu: 23296.55482324745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116941.35338095835,
            "unit": "ns/iter",
            "extra": "iterations: 6019\ncpu: 116938.99318823717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93199.82983249048,
            "unit": "ns/iter",
            "extra": "iterations: 7522\ncpu: 93194.4562616329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 92823.41956002839,
            "unit": "ns/iter",
            "extra": "iterations: 7546\ncpu: 92814.9218128807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93108.87028175202,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 93105.51568314758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 166218.84478250777,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 166212.31281198247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 568620.1535974294,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 568599.272433301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 474528.99187542463,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 474498.0365605929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 473475.1147099057,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 473441.02564103046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 460241.27188936254,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 460209.8749177111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 295434.3701517694,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 295412.8161888739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 457125.19620669464,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 457105.88620012504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23681.53932127465,
            "unit": "ns/iter",
            "extra": "iterations: 29526\ncpu: 23681.277518119314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 121007.07741270479,
            "unit": "ns/iter",
            "extra": "iterations: 5813\ncpu: 120999.15706175914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96165.00289375927,
            "unit": "ns/iter",
            "extra": "iterations: 7257\ncpu: 96158.79840154358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 97184.7311274819,
            "unit": "ns/iter",
            "extra": "iterations: 7193\ncpu: 97179.43834283328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 96193.23804943716,
            "unit": "ns/iter",
            "extra": "iterations: 7280\ncpu: 96189.12087912162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 169216.8407936245,
            "unit": "ns/iter",
            "extra": "iterations: 4133\ncpu: 169215.02540527494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 562191.0192926122,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 562149.5176848883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 473570.9063136828,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 473557.63747453986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 465219.61747192184,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 465183.189940439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 460739.2646478503,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 460716.984858461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 293301.8329103296,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 293284.98307952733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 455275.8794002294,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 455232.4641460244 ns\nthreads: 1"
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
        "date": 1705962724219,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8203.535577622939,
            "unit": "ns/iter",
            "extra": "iterations: 85194\ncpu: 8203.428645209759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59650.239099994455,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59648.21 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109843.32455579795,
            "unit": "ns/iter",
            "extra": "iterations: 7823\ncpu: 109843.28262814776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159807.69051148646,
            "unit": "ns/iter",
            "extra": "iterations: 5396\ncpu: 159805.39288361743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 209939.180626359,
            "unit": "ns/iter",
            "extra": "iterations: 4119\ncpu: 209937.46054867693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 259510.17276545704,
            "unit": "ns/iter",
            "extra": "iterations: 3334\ncpu: 259504.49910017994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 309057.98041310086,
            "unit": "ns/iter",
            "extra": "iterations: 2808\ncpu: 309060.25641025644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 360397.75547295314,
            "unit": "ns/iter",
            "extra": "iterations: 2421\ncpu: 360392.1520033045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 408701.42991534283,
            "unit": "ns/iter",
            "extra": "iterations: 2126\ncpu: 408691.0159924744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6855.299710914606,
            "unit": "ns/iter",
            "extra": "iterations: 102392\ncpu: 6855.236737245095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5653.525317882331,
            "unit": "ns/iter",
            "extra": "iterations: 124260\ncpu: 5653.573957830363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5645.872761683225,
            "unit": "ns/iter",
            "extra": "iterations: 123642\ncpu: 5645.839601429935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5695.885687792894,
            "unit": "ns/iter",
            "extra": "iterations: 122944\ncpu: 5695.885118427903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9748.576124015019,
            "unit": "ns/iter",
            "extra": "iterations: 71863\ncpu: 9748.283539512684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31419.3779065307,
            "unit": "ns/iter",
            "extra": "iterations: 26062\ncpu: 31418.755275880587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 140392.5307528361,
            "unit": "ns/iter",
            "extra": "iterations: 6097\ncpu: 140388.42053468924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 110654.47325749774,
            "unit": "ns/iter",
            "extra": "iterations: 7647\ncpu: 110654.28272525153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 110550.5420255874,
            "unit": "ns/iter",
            "extra": "iterations: 7662\ncpu: 110549.4779430955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 107601.1137225136,
            "unit": "ns/iter",
            "extra": "iterations: 7914\ncpu: 107600.92241597173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 383531.9042595901,
            "unit": "ns/iter",
            "extra": "iterations: 2465\ncpu: 383526.08519269753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1943559.991666651,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1943539.3749999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1528535.7841845877,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1528513.838550249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1518285.7016393652,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1518275.7377049183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1537014.0198676505,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1536985.7615894077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 853577.5591497091,
            "unit": "ns/iter",
            "extra": "iterations: 1082\ncpu: 853563.4011090575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1480915.0875797009,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1480867.3566879015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 39954.28485290461,
            "unit": "ns/iter",
            "extra": "iterations: 20565\ncpu: 39954.271821055205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 170584.21843887123,
            "unit": "ns/iter",
            "extra": "iterations: 5022\ncpu: 170582.65631222655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137451.06017330068,
            "unit": "ns/iter",
            "extra": "iterations: 6232\ncpu: 137449.8876765081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 135591.0639406506,
            "unit": "ns/iter",
            "extra": "iterations: 6334\ncpu: 135589.73792232407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 133643.71381783436,
            "unit": "ns/iter",
            "extra": "iterations: 6412\ncpu: 133644.75982532708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 341688.34765472217,
            "unit": "ns/iter",
            "extra": "iterations: 2537\ncpu: 341683.5632636984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1984483.1556502501,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1984434.3283582048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1569583.5692566573,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1569530.9121621526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1570884.0796609581,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1570872.0338983033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1568320.866101658,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1568294.2372881412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 872045.486866787,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 872017.8236397775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1517646.469820539,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1517593.474714523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5391459.349999649,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5391356.999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3147102.498305145,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3147035.254237289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28440.77096135718,
            "unit": "ns/iter",
            "extra": "iterations: 28803\ncpu: 28440.481894247358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 136876.59141850818,
            "unit": "ns/iter",
            "extra": "iterations: 6246\ncpu: 136873.56708293344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108678.92424625866,
            "unit": "ns/iter",
            "extra": "iterations: 7894\ncpu: 108678.97137066173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106149.58140111635,
            "unit": "ns/iter",
            "extra": "iterations: 8065\ncpu: 106146.27402355846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102717.7903730398,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 102714.50060168482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 296203.3755129714,
            "unit": "ns/iter",
            "extra": "iterations: 2924\ncpu: 296189.021887823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1925951.0226803971,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1925868.865979381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1516895.0491802653,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1516838.8524590102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1509378.2236629108,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1509297.893030795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1524602.7037643385,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1524552.5368248725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 848574.8089579727,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 848543.3272394852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1465508.4913112163,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1465442.654028438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3178.910003625739,
            "unit": "ns/iter",
            "extra": "iterations: 220620\ncpu: 3178.8137974798215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19626.916549986792,
            "unit": "ns/iter",
            "extra": "iterations: 35710\ncpu: 19626.55838700645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15098.610641655248,
            "unit": "ns/iter",
            "extra": "iterations: 46271\ncpu: 15098.296989475008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15091.172096529233,
            "unit": "ns/iter",
            "extra": "iterations: 46410\ncpu: 15090.433096315464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11352.024052866307,
            "unit": "ns/iter",
            "extra": "iterations: 61739\ncpu: 11351.343559176536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 109182.83069359077,
            "unit": "ns/iter",
            "extra": "iterations: 5493\ncpu: 109176.16967049039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 133491.366266904,
            "unit": "ns/iter",
            "extra": "iterations: 5253\ncpu: 133484.63735008493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33022.06805862769,
            "unit": "ns/iter",
            "extra": "iterations: 21217\ncpu: 33020.52128010567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32849.82528985203,
            "unit": "ns/iter",
            "extra": "iterations: 21218\ncpu: 32849.7266471865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33224.760115885016,
            "unit": "ns/iter",
            "extra": "iterations: 21056\ncpu: 33223.779445288616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66731.61484517019,
            "unit": "ns/iter",
            "extra": "iterations: 10980\ncpu: 66731.5118397085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54769.87618154442,
            "unit": "ns/iter",
            "extra": "iterations: 12801\ncpu: 54769.721115537504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23604.255186162558,
            "unit": "ns/iter",
            "extra": "iterations: 29598\ncpu: 23604.00364889504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113789.93966080542,
            "unit": "ns/iter",
            "extra": "iterations: 6132\ncpu: 113786.82322244054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 92968.6249169878,
            "unit": "ns/iter",
            "extra": "iterations: 7529\ncpu: 92966.26378005109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 92618.45598730538,
            "unit": "ns/iter",
            "extra": "iterations: 7566\ncpu: 92619.12503304187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 92238.7622831428,
            "unit": "ns/iter",
            "extra": "iterations: 7551\ncpu: 92238.51145543688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170132.1209912595,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 170128.036929055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 572666.3692810732,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 572648.6928104504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 468840.4764785277,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 468826.61290321726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 472038.4576613152,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 472012.4327957074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 472346.0998650829,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 472315.45209177036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 302438.4566723994,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 302422.05372616916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 461591.03044344106,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 461566.24751819985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23775.993562231382,
            "unit": "ns/iter",
            "extra": "iterations: 29358\ncpu: 23775.499012194257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 119164.82083969879,
            "unit": "ns/iter",
            "extra": "iterations: 5883\ncpu: 119157.77664457106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95913.80939982987,
            "unit": "ns/iter",
            "extra": "iterations: 7298\ncpu: 95909.01616881367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 96411.19403600588,
            "unit": "ns/iter",
            "extra": "iterations: 7277\ncpu: 96408.60244606194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 96439.74274315848,
            "unit": "ns/iter",
            "extra": "iterations: 7269\ncpu: 96437.9419452462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 173236.43393429616,
            "unit": "ns/iter",
            "extra": "iterations: 4049\ncpu: 173227.63645344495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 566406.1977401115,
            "unit": "ns/iter",
            "extra": "iterations: 1239\ncpu: 566371.4285714205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 471089.9164983214,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 471065.92592593154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 469374.2493297782,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 469367.8284182236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 472782.47158320603,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 472756.7658998554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 301511.38939199114,
            "unit": "ns/iter",
            "extra": "iterations: 2319\ncpu: 301508.8400172458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 460401.44752473664,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 460404.6864686434 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}