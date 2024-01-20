window.BENCHMARK_DATA = {
  "lastUpdate": 1705774132944,
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
      }
    ]
  }
}