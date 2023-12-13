window.BENCHMARK_DATA = {
  "lastUpdate": 1702490276801,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-16 22.04 Debug c++-17": [
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
        "date": 1702490276334,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7647.311128090193,
            "unit": "ns/iter",
            "extra": "iterations: 91615\ncpu: 7646.823118484965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 68740.73516351034,
            "unit": "ns/iter",
            "extra": "iterations: 12385\ncpu: 68737.77149777957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 131555.22775855652,
            "unit": "ns/iter",
            "extra": "iterations: 6643\ncpu: 131552.3859701942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 194240.7387608923,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 194238.984567211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 256522.97232855254,
            "unit": "ns/iter",
            "extra": "iterations: 3397\ncpu: 256514.2184280246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 314850.4615105128,
            "unit": "ns/iter",
            "extra": "iterations: 2754\ncpu: 314834.0232389252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 377226.8321041267,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 377207.0715835143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 438865.3472993442,
            "unit": "ns/iter",
            "extra": "iterations: 1981\ncpu: 438872.18576476525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 498799.7013135877,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 498784.63735008595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5634.237021983811,
            "unit": "ns/iter",
            "extra": "iterations: 124499\ncpu: 5634.192242507976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4740.363563322239,
            "unit": "ns/iter",
            "extra": "iterations: 148109\ncpu: 4740.347311777132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4703.18408779365,
            "unit": "ns/iter",
            "extra": "iterations: 148804\ncpu: 4703.071154001242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4820.594661743396,
            "unit": "ns/iter",
            "extra": "iterations: 145703\ncpu: 4820.562376889984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8435.952926146249,
            "unit": "ns/iter",
            "extra": "iterations: 82976\ncpu: 8435.759737755501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 26707.60352308067,
            "unit": "ns/iter",
            "extra": "iterations: 30655\ncpu: 26707.767085304244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 111715.34649580545,
            "unit": "ns/iter",
            "extra": "iterations: 7648\ncpu: 111710.17259414225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 88720.58238105733,
            "unit": "ns/iter",
            "extra": "iterations: 9626\ncpu: 88717.20340743811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 87739.80055459113,
            "unit": "ns/iter",
            "extra": "iterations: 9737\ncpu: 87737.20858580648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 89099.12122475111,
            "unit": "ns/iter",
            "extra": "iterations: 9602\ncpu: 89097.51093522213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 235997.75212038594,
            "unit": "ns/iter",
            "extra": "iterations: 3655\ncpu: 235984.2134062923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2027996.7058824243,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2027879.5206971718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1649703.9928952476,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1649660.3907637605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1699986.8831859622,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1699993.097345133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1690456.3164558127,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1690416.6365280296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1020420.121278989,
            "unit": "ns/iter",
            "extra": "iterations: 907\ncpu: 1020400.2205071654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1617215.7773913252,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1617165.7391304367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6801928.900000576,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6801896.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3860663.3471075357,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3860495.8677686057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8348149.409090582,
            "unit": "ns/iter",
            "extra": "iterations: 132\ncpu: 8347949.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 26543.205624185008,
            "unit": "ns/iter",
            "extra": "iterations: 30760\ncpu: 26542.76332899878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 111071.59186844158,
            "unit": "ns/iter",
            "extra": "iterations: 7723\ncpu: 111073.36527256282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 91584.51927195054,
            "unit": "ns/iter",
            "extra": "iterations: 9340\ncpu: 91581.68094218406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 88863.30224777244,
            "unit": "ns/iter",
            "extra": "iterations: 9565\ncpu: 88861.59958180896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 90193.0534448152,
            "unit": "ns/iter",
            "extra": "iterations: 9449\ncpu: 90190.80325960397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 240037.66713013372,
            "unit": "ns/iter",
            "extra": "iterations: 3596\ncpu: 240038.70967742064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2020021.5995671826,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2019909.307359304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1668497.4671402634,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1668465.0088809913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1654595.4750889812,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1654579.3594306058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1680897.6018019002,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1680899.9999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1009311.4467391318,
            "unit": "ns/iter",
            "extra": "iterations: 920\ncpu: 1009271.086956524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1616906.6052173984,
            "unit": "ns/iter",
            "extra": "iterations: 575\ncpu: 1616836.3478260764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6820030.109998925,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6819911.999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3793292.7357725403,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3793173.5772357574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 25724.832070866032,
            "unit": "ns/iter",
            "extra": "iterations: 31948\ncpu: 25724.120445724235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 111365.54260554178,
            "unit": "ns/iter",
            "extra": "iterations: 7722\ncpu: 111361.71976171916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 87869.0929653439,
            "unit": "ns/iter",
            "extra": "iterations: 9638\ncpu: 87867.30649512296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 86682.65221814952,
            "unit": "ns/iter",
            "extra": "iterations: 9828\ncpu: 86684.06593406598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 88943.86889190899,
            "unit": "ns/iter",
            "extra": "iterations: 9557\ncpu: 88940.94381081956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 235116.75244831154,
            "unit": "ns/iter",
            "extra": "iterations: 3676\ncpu: 235115.2067464633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2006809.5634407792,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 2006746.0215053784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1664641.0860215344,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1664601.9713261537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1637535.565371132,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1637463.604240286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1679201.7607913997,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1679160.4316546698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1000688.8034557053,
            "unit": "ns/iter",
            "extra": "iterations: 926\ncpu: 1000667.710583147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1609323.7167531098,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1609217.2711571727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2869.7797618313034,
            "unit": "ns/iter",
            "extra": "iterations: 243945\ncpu: 2869.6411076267277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14658.360354282255,
            "unit": "ns/iter",
            "extra": "iterations: 47420\ncpu: 14657.762547448332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11195.740628247182,
            "unit": "ns/iter",
            "extra": "iterations: 62555\ncpu: 11195.62784749417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10762.202845124099,
            "unit": "ns/iter",
            "extra": "iterations: 65375\ncpu: 10762.377055449379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9767.260649114256,
            "unit": "ns/iter",
            "extra": "iterations: 71790\ncpu: 9766.648558295026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57079.6296506917,
            "unit": "ns/iter",
            "extra": "iterations: 12310\ncpu: 57076.51502843224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 133154.89965726738,
            "unit": "ns/iter",
            "extra": "iterations: 5252\ncpu: 133151.0281797414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 34856.37891227508,
            "unit": "ns/iter",
            "extra": "iterations: 20097\ncpu: 34855.17241379313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 34609.92256878815,
            "unit": "ns/iter",
            "extra": "iterations: 20134\ncpu: 34607.35571669846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34330.65522996395,
            "unit": "ns/iter",
            "extra": "iterations: 20373\ncpu: 34329.116968536575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 70562.28364075786,
            "unit": "ns/iter",
            "extra": "iterations: 9921\ncpu: 70560.19554480321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 62278.542133339615,
            "unit": "ns/iter",
            "extra": "iterations: 11250\ncpu: 62276.73777777783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18130.326267781562,
            "unit": "ns/iter",
            "extra": "iterations: 38591\ncpu: 18130.63149438966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 85148.28274352332,
            "unit": "ns/iter",
            "extra": "iterations: 8223\ncpu: 85144.76468442135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 69650.55732358123,
            "unit": "ns/iter",
            "extra": "iterations: 10118\ncpu: 69646.54081834393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 67914.89158027194,
            "unit": "ns/iter",
            "extra": "iterations: 10321\ncpu: 67911.96589477798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 69978.56555655286,
            "unit": "ns/iter",
            "extra": "iterations: 9999\ncpu: 69974.97749774963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 134185.9556877095,
            "unit": "ns/iter",
            "extra": "iterations: 5213\ncpu: 134188.27930174523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 571793.2968110355,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 571763.2052330327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 484527.117810125,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 484528.3437283366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 472821.3862864901,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 472815.81805838173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 488348.4982529909,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 488338.853948283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 319538.3254330356,
            "unit": "ns/iter",
            "extra": "iterations: 2194\ncpu: 319526.16226070945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 470923.2420768537,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 470898.9885367475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18067.00190510321,
            "unit": "ns/iter",
            "extra": "iterations: 38843\ncpu: 18067.059701876777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 86701.75578087581,
            "unit": "ns/iter",
            "extra": "iterations: 8087\ncpu: 86698.03388153823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 69893.2504486592,
            "unit": "ns/iter",
            "extra": "iterations: 10030\ncpu: 69892.78165503456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 68601.40084637512,
            "unit": "ns/iter",
            "extra": "iterations: 10161\ncpu: 68601.61401436776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 71744.2995188451,
            "unit": "ns/iter",
            "extra": "iterations: 9976\ncpu: 71738.8331996784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 135804.96408947447,
            "unit": "ns/iter",
            "extra": "iterations: 5096\ncpu: 135805.08241758123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 569809.8978102216,
            "unit": "ns/iter",
            "extra": "iterations: 1233\ncpu: 569810.3811841003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 480349.781121799,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 480352.46238029865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 474339.847354117,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 474330.93622794695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 484451.9140082873,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 484438.1414701791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 316698.0343736178,
            "unit": "ns/iter",
            "extra": "iterations: 2211\ncpu: 316690.99954772106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 468501.11447811016,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 468508.3501683535 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}