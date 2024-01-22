window.BENCHMARK_DATA = {
  "lastUpdate": 1705959878659,
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
        "date": 1702492885706,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7505.240577970676,
            "unit": "ns/iter",
            "extra": "iterations: 93292\ncpu: 7504.958624533723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 67506.25274637293,
            "unit": "ns/iter",
            "extra": "iterations: 12562\ncpu: 67502.48368094252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 128699.67657446799,
            "unit": "ns/iter",
            "extra": "iterations: 6796\ncpu: 128692.21600941727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 194397.865590236,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 194374.49269037755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 250272.12935325468,
            "unit": "ns/iter",
            "extra": "iterations: 3417\ncpu: 250259.61369622473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 308119.3780488087,
            "unit": "ns/iter",
            "extra": "iterations: 2788\ncpu: 308097.20229555236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 369469.3843869264,
            "unit": "ns/iter",
            "extra": "iterations: 2357\ncpu: 369464.31904963957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 432229.9379004499,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 432195.7121734846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 490642.35109366785,
            "unit": "ns/iter",
            "extra": "iterations: 1783\ncpu: 490596.63488502597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5724.4285351469025,
            "unit": "ns/iter",
            "extra": "iterations: 122060\ncpu: 5724.11436998198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4798.68429604685,
            "unit": "ns/iter",
            "extra": "iterations: 145855\ncpu: 4798.327791299569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4784.61547192487,
            "unit": "ns/iter",
            "extra": "iterations: 146252\ncpu: 4784.278505593083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4815.563191913726,
            "unit": "ns/iter",
            "extra": "iterations: 145430\ncpu: 4815.539434779625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8463.31551391899,
            "unit": "ns/iter",
            "extra": "iterations: 82513\ncpu: 8463.19610243234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 27573.137727793823,
            "unit": "ns/iter",
            "extra": "iterations: 29522\ncpu: 27571.59406544269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 111243.29361369646,
            "unit": "ns/iter",
            "extra": "iterations: 7704\ncpu: 111236.40965732119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 90047.87573777729,
            "unit": "ns/iter",
            "extra": "iterations: 9488\ncpu: 90041.44182124789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 87983.5331817301,
            "unit": "ns/iter",
            "extra": "iterations: 9674\ncpu: 87978.49906967122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 87505.0877913593,
            "unit": "ns/iter",
            "extra": "iterations: 9739\ncpu: 87500.20535989292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 230407.04529802382,
            "unit": "ns/iter",
            "extra": "iterations: 3775\ncpu: 230387.60264900653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1948787.7866110036,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1948744.7698744766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1607850.6275862076,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1607842.9310344835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1586092.2753378607,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1586069.0878378383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1600345.6833047797,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1600337.693631667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 991368.9052745535,
            "unit": "ns/iter",
            "extra": "iterations: 929\ncpu: 991363.8320775033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1561935.3327731707,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1561927.8991596596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6765283.920000229,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6765159.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3937613.4938272303,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3937536.625514414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8229757.8646616815,
            "unit": "ns/iter",
            "extra": "iterations: 133\ncpu: 8229478.9473684225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 26218.296999839476,
            "unit": "ns/iter",
            "extra": "iterations: 31165\ncpu: 26217.939996791283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 109386.46311738761,
            "unit": "ns/iter",
            "extra": "iterations: 7795\ncpu: 109385.2212957023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 89564.62270869716,
            "unit": "ns/iter",
            "extra": "iterations: 9547\ncpu: 89563.36021786915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 88712.77930603469,
            "unit": "ns/iter",
            "extra": "iterations: 9597\ncpu: 88711.65989371715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 89812.47748226071,
            "unit": "ns/iter",
            "extra": "iterations: 9437\ncpu: 89812.01653067683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 231291.48798717387,
            "unit": "ns/iter",
            "extra": "iterations: 3746\ncpu: 231287.88040576625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1973644.2569000577,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1973618.0467091368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1621793.4097222139,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1621773.4375000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1616430.1854419129,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1616420.6239168106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1712202.664921485,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1712161.2565445115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1003835.4006478849,
            "unit": "ns/iter",
            "extra": "iterations: 926\ncpu: 1003793.5205183637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1582778.1353636933,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1582770.3891709044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6874767.3200005,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6874619.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3824185.4180328716,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3824139.7540983655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 25306.54488620573,
            "unit": "ns/iter",
            "extra": "iterations: 32471\ncpu: 25305.731267900574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 107361.2438006139,
            "unit": "ns/iter",
            "extra": "iterations: 7904\ncpu: 107360.84261133597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 88802.93231578961,
            "unit": "ns/iter",
            "extra": "iterations: 9500\ncpu: 88799.78947368423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 86463.70455469977,
            "unit": "ns/iter",
            "extra": "iterations: 9836\ncpu: 86462.60675071171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 88371.43479185106,
            "unit": "ns/iter",
            "extra": "iterations: 9416\ncpu: 88369.46686491082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 228935.77880064817,
            "unit": "ns/iter",
            "extra": "iterations: 3802\ncpu: 228932.40399789612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1956231.0838574686,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1956173.5849056586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1614183.594127637,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1614162.5215889418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1607114.0274914303,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1607054.8109965567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1611469.051903194,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1611461.4186851103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 992650.0448717934,
            "unit": "ns/iter",
            "extra": "iterations: 936\ncpu: 992618.6965811974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1568874.8100841576,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1568857.3109243712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2868.376317204726,
            "unit": "ns/iter",
            "extra": "iterations: 243603\ncpu: 2868.286515354886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14494.317930942012,
            "unit": "ns/iter",
            "extra": "iterations: 45296\ncpu: 14494.25335570459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11920.874236313244,
            "unit": "ns/iter",
            "extra": "iterations: 58761\ncpu: 11920.297476217243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11629.04560190261,
            "unit": "ns/iter",
            "extra": "iterations: 60151\ncpu: 11628.435104985852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9744.712034303055,
            "unit": "ns/iter",
            "extra": "iterations: 71828\ncpu: 9744.33507824251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55171.05170517802,
            "unit": "ns/iter",
            "extra": "iterations: 12726\ncpu: 55167.397454031074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 129078.34151292263,
            "unit": "ns/iter",
            "extra": "iterations: 5420\ncpu: 129068.91143911445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 34230.49476066187,
            "unit": "ns/iter",
            "extra": "iterations: 20327\ncpu: 34228.272740689674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33915.66808696034,
            "unit": "ns/iter",
            "extra": "iterations: 20653\ncpu: 33913.24262818928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33863.52488972967,
            "unit": "ns/iter",
            "extra": "iterations: 20631\ncpu: 33861.05375405913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 70914.00131766246,
            "unit": "ns/iter",
            "extra": "iterations: 9866\ncpu: 70909.4668558677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 61394.76973626304,
            "unit": "ns/iter",
            "extra": "iterations: 11413\ncpu: 61390.55463068437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 17251.10887792999,
            "unit": "ns/iter",
            "extra": "iterations: 40550\ncpu: 17250.34032059172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 82743.84353581877,
            "unit": "ns/iter",
            "extra": "iterations: 8462\ncpu: 82741.20775230453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 65572.16688804493,
            "unit": "ns/iter",
            "extra": "iterations: 10540\ncpu: 65570.37001897604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 66111.52304931435,
            "unit": "ns/iter",
            "extra": "iterations: 10586\ncpu: 66107.71774041138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 67456.61308033319,
            "unit": "ns/iter",
            "extra": "iterations: 10382\ncpu: 67451.18474282409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 132887.65148064814,
            "unit": "ns/iter",
            "extra": "iterations: 5268\ncpu: 132878.79650721396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 560368.6517213893,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 560345.7165732561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 469471.2067113423,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 469469.0604026831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 464009.8313413104,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 463989.6414342668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 467795.76592890645,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 467764.6545942333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 314028.16001795063,
            "unit": "ns/iter",
            "extra": "iterations: 2231\ncpu: 314009.6817570602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 458984.54229513917,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 458973.6393442678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 17312.11014557216,
            "unit": "ns/iter",
            "extra": "iterations: 40392\ncpu: 17310.883343236554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 81623.49877522525,
            "unit": "ns/iter",
            "extra": "iterations: 8573\ncpu: 81619.01318091647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 66802.86714814535,
            "unit": "ns/iter",
            "extra": "iterations: 10523\ncpu: 66798.34647914038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 66627.0261431754,
            "unit": "ns/iter",
            "extra": "iterations: 10519\ncpu: 66623.44329308861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 67752.5216802163,
            "unit": "ns/iter",
            "extra": "iterations: 10332\ncpu: 67750.02903600491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 131782.06857573605,
            "unit": "ns/iter",
            "extra": "iterations: 5308\ncpu: 131773.4740015068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 561404.1573034028,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 561378.8121990477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 462118.37997352984,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 462085.67639256775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 458225.4123847208,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 458213.8339920958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 469810.63978496875,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 469789.5833333327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 315020.80774426047,
            "unit": "ns/iter",
            "extra": "iterations: 2221\ncpu: 314996.8032417846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 458653.351475419,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 458626.22950820514 ns\nthreads: 1"
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
        "date": 1702503920880,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7417.865141570086,
            "unit": "ns/iter",
            "extra": "iterations: 94158\ncpu: 7417.6830433951445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 66935.46652438238,
            "unit": "ns/iter",
            "extra": "iterations: 12651\ncpu: 66933.17524306379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 130414.6278013696,
            "unit": "ns/iter",
            "extra": "iterations: 6827\ncpu: 130409.37454225868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 190125.5219480213,
            "unit": "ns/iter",
            "extra": "iterations: 4579\ncpu: 190113.45271893428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 249783.49335260855,
            "unit": "ns/iter",
            "extra": "iterations: 3460\ncpu: 249775.28901734116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 309640.46540655644,
            "unit": "ns/iter",
            "extra": "iterations: 2804\ncpu: 309626.1412268187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 370973.01319150534,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 370965.27659574454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 430024.54249007074,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 430000.44466403173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 489638.7211917339,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 489606.913996627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5585.556884511316,
            "unit": "ns/iter",
            "extra": "iterations: 125579\ncpu: 5585.355831787164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4751.821984085419,
            "unit": "ns/iter",
            "extra": "iterations: 147161\ncpu: 4751.574126297048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4615.534471161212,
            "unit": "ns/iter",
            "extra": "iterations: 151634\ncpu: 4615.348800400965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4714.143508508025,
            "unit": "ns/iter",
            "extra": "iterations: 148918\ncpu: 4714.100377388895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8237.513226580057,
            "unit": "ns/iter",
            "extra": "iterations: 85056\ncpu: 8237.51645974417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 26682.699534823627,
            "unit": "ns/iter",
            "extra": "iterations: 30526\ncpu: 26682.18895367881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 114234.85909822873,
            "unit": "ns/iter",
            "extra": "iterations: 7452\ncpu: 114232.58185721951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 94393.40978856794,
            "unit": "ns/iter",
            "extra": "iterations: 9317\ncpu: 94391.86433401321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 89201.4551948777,
            "unit": "ns/iter",
            "extra": "iterations: 9519\ncpu: 89200.7458766678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 90077.91941469572,
            "unit": "ns/iter",
            "extra": "iterations: 9431\ncpu: 90077.00137843283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 245699.15347653028,
            "unit": "ns/iter",
            "extra": "iterations: 3538\ncpu: 245694.0927077444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 1963421.6223628463,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1963381.0126582326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1642993.4428821576,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1642981.1950790859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1596900.459552477,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 1596875.7314974205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1697087.6428571444,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1697076.829268297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1015423.5470460107,
            "unit": "ns/iter",
            "extra": "iterations: 914\ncpu: 1015409.4091903728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1583260.6371379937,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1583262.350936968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6857765.800000379,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6857498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3935593.768907526,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3935530.2521008467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8303132.719697371,
            "unit": "ns/iter",
            "extra": "iterations: 132\ncpu: 8302830.303030281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 26879.922419812206,
            "unit": "ns/iter",
            "extra": "iterations: 30085\ncpu: 26879.32856905435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 113686.31486414452,
            "unit": "ns/iter",
            "extra": "iterations: 7508\ncpu: 113684.32338838521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 90447.4548555519,
            "unit": "ns/iter",
            "extra": "iterations: 9381\ncpu: 90445.9119496855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 90252.5199617822,
            "unit": "ns/iter",
            "extra": "iterations: 9418\ncpu: 90251.18921214671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 92372.39036092896,
            "unit": "ns/iter",
            "extra": "iterations: 9171\ncpu: 92371.36626322089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 250431.6996537578,
            "unit": "ns/iter",
            "extra": "iterations: 3466\ncpu: 250424.0911713807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 1968924.787233894,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1968892.1276595658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1640541.4263158091,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1640516.3157894788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1604715.1913792747,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1604684.310344828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1637581.5272408265,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1637554.657293494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1009529.2080610238,
            "unit": "ns/iter",
            "extra": "iterations: 918\ncpu: 1009494.8801742947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1589333.2759796404,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1589290.8006814313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6883848.290000287,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6883583.000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3921226.5374999335,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3921051.6666666525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 26176.475843546243,
            "unit": "ns/iter",
            "extra": "iterations: 32393\ncpu: 26175.41752847835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 114348.97643414336,
            "unit": "ns/iter",
            "extra": "iterations: 7426\ncpu: 114346.63345004008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 90964.81730666975,
            "unit": "ns/iter",
            "extra": "iterations: 9349\ncpu: 90962.88373088016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 90256.03336157555,
            "unit": "ns/iter",
            "extra": "iterations: 9442\ncpu: 90254.50116500781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 92110.16384548366,
            "unit": "ns/iter",
            "extra": "iterations: 9216\ncpu: 92106.81423611139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 244094.482313312,
            "unit": "ns/iter",
            "extra": "iterations: 3562\ncpu: 244084.16619876583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 1962605.337552734,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1962541.7721519072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1656114.5115452362,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1656029.4849023097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1599981.0068964947,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1599897.7586206908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1614584.4545453212,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1614532.3426573446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1011954.5038251687,
            "unit": "ns/iter",
            "extra": "iterations: 915\ncpu: 1011903.1693989122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1590614.494863038,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1590565.239726034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2886.7562641898908,
            "unit": "ns/iter",
            "extra": "iterations: 242250\ncpu: 2886.583281733737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15108.010476395602,
            "unit": "ns/iter",
            "extra": "iterations: 46390\ncpu: 15107.37658978235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11720.444171758656,
            "unit": "ns/iter",
            "extra": "iterations: 59083\ncpu: 11719.953286055226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11353.991863990143,
            "unit": "ns/iter",
            "extra": "iterations: 61701\ncpu: 11353.237386752213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9747.402060850856,
            "unit": "ns/iter",
            "extra": "iterations: 71815\ncpu: 9746.83561929963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57940.04284772329,
            "unit": "ns/iter",
            "extra": "iterations: 12136\ncpu: 57938.32399472693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 130414.97809047853,
            "unit": "ns/iter",
            "extra": "iterations: 5614\ncpu: 130409.975062344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 34104.35015558443,
            "unit": "ns/iter",
            "extra": "iterations: 20568\ncpu: 34102.54278490847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33139.57977464256,
            "unit": "ns/iter",
            "extra": "iterations: 21122\ncpu: 33139.21503645498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 33752.25361656907,
            "unit": "ns/iter",
            "extra": "iterations: 20807\ncpu: 33751.96328158809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71368.28126272075,
            "unit": "ns/iter",
            "extra": "iterations: 9820\ncpu: 71367.64765784185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 61401.09164987293,
            "unit": "ns/iter",
            "extra": "iterations: 11413\ncpu: 61398.860948041714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 17542.528627489362,
            "unit": "ns/iter",
            "extra": "iterations: 39752\ncpu: 17541.942543771325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 83214.00225813569,
            "unit": "ns/iter",
            "extra": "iterations: 8414\ncpu: 83211.75421915832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 66711.37646156871,
            "unit": "ns/iter",
            "extra": "iterations: 10434\ncpu: 66710.1207590566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 64741.77395804745,
            "unit": "ns/iter",
            "extra": "iterations: 10821\ncpu: 64741.16994732486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 67659.04213374523,
            "unit": "ns/iter",
            "extra": "iterations: 10348\ncpu: 67657.28643216068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 128228.82727606787,
            "unit": "ns/iter",
            "extra": "iterations: 5448\ncpu: 128224.55947136595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 558665.6282973478,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 558647.7218225313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 473083.2597840295,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 473073.414304998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 457859.4288524654,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 457848.5901639363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 467656.89140569814,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 467645.1698867398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 314238.8902821134,
            "unit": "ns/iter",
            "extra": "iterations: 2233\ncpu: 314231.6166592033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 458967.9776756428,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 458959.81615233474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 17596.47567648976,
            "unit": "ns/iter",
            "extra": "iterations: 39838\ncpu: 17595.913449470365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 85238.85111844075,
            "unit": "ns/iter",
            "extra": "iterations: 8181\ncpu: 85235.15462657226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 67190.92649735993,
            "unit": "ns/iter",
            "extra": "iterations: 10435\ncpu: 67187.51317680837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 65092.54620600093,
            "unit": "ns/iter",
            "extra": "iterations: 10767\ncpu: 65089.44924305809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 67330.59177977128,
            "unit": "ns/iter",
            "extra": "iterations: 10389\ncpu: 67329.77187409758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 128330.45905251274,
            "unit": "ns/iter",
            "extra": "iterations: 5446\ncpu: 128326.27616599409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 559913.6875501694,
            "unit": "ns/iter",
            "extra": "iterations: 1245\ncpu: 559883.0522088344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 468658.1986621653,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 468642.94314381306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 453156.03232061665,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 453136.0051713056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 461243.53714660555,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 461219.92110453604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 311840.3383793645,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 311828.53962599806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 458288.5515430262,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 458269.73079448583 ns\nthreads: 1"
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
        "date": 1705575562307,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7676.529950979177,
            "unit": "ns/iter",
            "extra": "iterations: 90982\ncpu: 7676.301905871493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70464.56218452344,
            "unit": "ns/iter",
            "extra": "iterations: 12085\ncpu: 70462.17625155151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135040.51418877364,
            "unit": "ns/iter",
            "extra": "iterations: 6484\ncpu: 135036.76742751384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 199073.61263735572,
            "unit": "ns/iter",
            "extra": "iterations: 4368\ncpu: 199071.22252747254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 262230.92675542796,
            "unit": "ns/iter",
            "extra": "iterations: 3304\ncpu: 262225.30266343814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 322862.41879700514,
            "unit": "ns/iter",
            "extra": "iterations: 2660\ncpu: 322861.4661654135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 383770.0747330919,
            "unit": "ns/iter",
            "extra": "iterations: 2248\ncpu: 383744.7508896798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 456940.9195402096,
            "unit": "ns/iter",
            "extra": "iterations: 1914\ncpu: 456910.60606060567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 512535.97290930914,
            "unit": "ns/iter",
            "extra": "iterations: 1698\ncpu: 512503.4157832744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5746.725621148293,
            "unit": "ns/iter",
            "extra": "iterations: 122032\ncpu: 5746.328831781826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4786.545400483799,
            "unit": "ns/iter",
            "extra": "iterations: 146298\ncpu: 4786.431803578997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4813.899503218572,
            "unit": "ns/iter",
            "extra": "iterations: 145537\ncpu: 4813.600665122957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4840.953691976078,
            "unit": "ns/iter",
            "extra": "iterations: 144489\ncpu: 4840.74150973431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8422.09680473641,
            "unit": "ns/iter",
            "extra": "iterations: 83436\ncpu: 8421.51109832685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 26651.86748010157,
            "unit": "ns/iter",
            "extra": "iterations: 30652\ncpu: 26650.009787289517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 118283.53262333805,
            "unit": "ns/iter",
            "extra": "iterations: 7418\ncpu: 118272.79590186037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 90213.69787686004,
            "unit": "ns/iter",
            "extra": "iterations: 9420\ncpu: 90209.46921443712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 88973.76484137899,
            "unit": "ns/iter",
            "extra": "iterations: 9551\ncpu: 88968.47450528751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 91067.88861623753,
            "unit": "ns/iter",
            "extra": "iterations: 9373\ncpu: 91065.69934919469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 243118.5260212783,
            "unit": "ns/iter",
            "extra": "iterations: 3574\ncpu: 243098.90878567414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2045048.0857144801,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2044920.439560434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1703904.4944854374,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1703790.2573529389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1658310.9910233978,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1658208.2585278307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1712738.9247705801,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1712639.9999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1045898.7342342435,
            "unit": "ns/iter",
            "extra": "iterations: 888\ncpu: 1045861.7117117103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1643614.2149200796,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1643523.090586149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7016156.040000397,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7015703.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3942056.177214993,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3941815.6118143466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8520047.94531247,
            "unit": "ns/iter",
            "extra": "iterations: 128\ncpu: 8519619.531249994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 26484.53038692056,
            "unit": "ns/iter",
            "extra": "iterations: 30885\ncpu: 26483.017646106473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 114328.64274214937,
            "unit": "ns/iter",
            "extra": "iterations: 7454\ncpu: 114319.07700563464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 91081.84181333249,
            "unit": "ns/iter",
            "extra": "iterations: 9375\ncpu: 91076.18133333365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 89624.13048060222,
            "unit": "ns/iter",
            "extra": "iterations: 9488\ncpu: 89619.45615514339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 92104.89398529018,
            "unit": "ns/iter",
            "extra": "iterations: 9244\ncpu: 92099.67546516615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 244788.53228523597,
            "unit": "ns/iter",
            "extra": "iterations: 3562\ncpu: 244779.3093767545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2069600.2783965326,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2069483.0734966556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1717965.3253234844,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1717866.3585951908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1665115.4616755517,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1665000.534759359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1729668.5018518725,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1729564.6296296285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1045466.3153153773,
            "unit": "ns/iter",
            "extra": "iterations: 888\ncpu: 1045409.5720720721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1648441.5336880302,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1648297.5177305033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7052575.219998972,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7051747.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3986236.1059320746,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3985722.0338982893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 25651.69168497029,
            "unit": "ns/iter",
            "extra": "iterations: 31870\ncpu: 25651.631628490773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 112119.93174417081,
            "unit": "ns/iter",
            "extra": "iterations: 7677\ncpu: 112117.0509313528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 90802.1215957433,
            "unit": "ns/iter",
            "extra": "iterations: 9400\ncpu: 90799.0638297872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 88373.25743600095,
            "unit": "ns/iter",
            "extra": "iterations: 9649\ncpu: 88370.81562856282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 90060.87685459892,
            "unit": "ns/iter",
            "extra": "iterations: 9436\ncpu: 90060.18440016975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 243437.39228835798,
            "unit": "ns/iter",
            "extra": "iterations: 3579\ncpu: 243435.233305393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2076401.0378619796,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2076334.07572383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1716324.4972478242,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1716249.1743119329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1678090.927927835,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1678072.252252259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1722331.6789666088,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1722297.4169741692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1035581.4476614196,
            "unit": "ns/iter",
            "extra": "iterations: 898\ncpu: 1035557.906458801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1655652.2724014393,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1655606.8100358427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2878.4892858606636,
            "unit": "ns/iter",
            "extra": "iterations: 243510\ncpu: 2878.4908217321536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14859.684265294896,
            "unit": "ns/iter",
            "extra": "iterations: 47087\ncpu: 14859.534478730864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11136.269400870855,
            "unit": "ns/iter",
            "extra": "iterations: 62858\ncpu: 11136.102007699901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11215.964333210966,
            "unit": "ns/iter",
            "extra": "iterations: 62411\ncpu: 11215.431574562173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9652.018986205312,
            "unit": "ns/iter",
            "extra": "iterations: 72421\ncpu: 9651.89793015837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57226.41170675369,
            "unit": "ns/iter",
            "extra": "iterations: 12181\ncpu: 57225.53156555289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 135817.08360815223,
            "unit": "ns/iter",
            "extra": "iterations: 5155\ncpu: 135815.2861299717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35221.46652257208,
            "unit": "ns/iter",
            "extra": "iterations: 19894\ncpu: 35219.97084548138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 34575.801032448326,
            "unit": "ns/iter",
            "extra": "iterations: 20340\ncpu: 34575.363815142504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35178.910522079794,
            "unit": "ns/iter",
            "extra": "iterations: 19882\ncpu: 35178.40760486898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72702.13179742641,
            "unit": "ns/iter",
            "extra": "iterations: 9636\ncpu: 72701.16230801187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63483.23828939074,
            "unit": "ns/iter",
            "extra": "iterations: 11037\ncpu: 63481.43517260032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18175.887745019452,
            "unit": "ns/iter",
            "extra": "iterations: 38466\ncpu: 18175.162481151932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 85208.13259466662,
            "unit": "ns/iter",
            "extra": "iterations: 8213\ncpu: 85206.85498599857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 69840.70567092329,
            "unit": "ns/iter",
            "extra": "iterations: 10016\ncpu: 69838.12899361088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 68242.544037409,
            "unit": "ns/iter",
            "extra": "iterations: 10264\ncpu: 68241.10483242483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 69864.07408886701,
            "unit": "ns/iter",
            "extra": "iterations: 10015\ncpu: 69862.48627059287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 135398.4049139137,
            "unit": "ns/iter",
            "extra": "iterations: 5169\ncpu: 135392.41632811105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 585168.7347280459,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 585161.7573221758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 496241.9879603483,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 496230.1699716706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 483493.268832088,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 483485.4872149338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 496072.5557909214,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 496066.2429378462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 320917.07005493774,
            "unit": "ns/iter",
            "extra": "iterations: 2184\ncpu: 320908.69963369437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 477916.4819112661,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 477908.1911262811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 17841.50705231298,
            "unit": "ns/iter",
            "extra": "iterations: 39207\ncpu: 17840.630499655534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 86159.36359168997,
            "unit": "ns/iter",
            "extra": "iterations: 8141\ncpu: 86157.7201817953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 69753.12754084585,
            "unit": "ns/iter",
            "extra": "iterations: 10036\ncpu: 69752.08250298914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 68118.2593385221,
            "unit": "ns/iter",
            "extra": "iterations: 10280\ncpu: 68116.78015564129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 69996.64232191717,
            "unit": "ns/iter",
            "extra": "iterations: 10009\ncpu: 69995.76381256926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 134714.67238058598,
            "unit": "ns/iter",
            "extra": "iterations: 5192\ncpu: 134708.6286594781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 583436.5546289246,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 583429.7748123447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 490958.0483193744,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 490946.2885154028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 479934.5041095726,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 479920.0684931566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 491887.24964737834,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 491876.37517630454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 321982.93477263296,
            "unit": "ns/iter",
            "extra": "iterations: 2177\ncpu: 321982.1313734504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 478753.45585216477,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 478745.17453799455 ns\nthreads: 1"
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
        "date": 1705773391672,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7640.852838479848,
            "unit": "ns/iter",
            "extra": "iterations: 84200\ncpu: 7640.703087885986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 69510.34882959699,
            "unit": "ns/iter",
            "extra": "iterations: 12218\ncpu: 69510.03437551155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 132827.99646642353,
            "unit": "ns/iter",
            "extra": "iterations: 6509\ncpu: 132822.56875096026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 195204.6409162373,
            "unit": "ns/iter",
            "extra": "iterations: 4453\ncpu: 195201.23512238948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 258671.06541217206,
            "unit": "ns/iter",
            "extra": "iterations: 3348\ncpu: 258667.38351254488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 324905.1502399154,
            "unit": "ns/iter",
            "extra": "iterations: 2709\ncpu: 324901.107419712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 380893.1425438507,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 380888.2894736843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 442520.8548223354,
            "unit": "ns/iter",
            "extra": "iterations: 1970\ncpu: 442508.78172588797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 506724.43793501274,
            "unit": "ns/iter",
            "extra": "iterations: 1724\ncpu: 506722.7378190256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5714.579198223864,
            "unit": "ns/iter",
            "extra": "iterations: 122528\ncpu: 5714.32407286498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4884.932438837242,
            "unit": "ns/iter",
            "extra": "iterations: 143470\ncpu: 4884.837945215025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4816.927932326666,
            "unit": "ns/iter",
            "extra": "iterations: 145405\ncpu: 4816.8006602249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4848.085139394165,
            "unit": "ns/iter",
            "extra": "iterations: 145021\ncpu: 4847.977879065793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8456.804147101013,
            "unit": "ns/iter",
            "extra": "iterations: 82419\ncpu: 8456.661692085565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 26918.246916022574,
            "unit": "ns/iter",
            "extra": "iterations: 30318\ncpu: 26918.20040899794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 109059.89474361482,
            "unit": "ns/iter",
            "extra": "iterations: 7781\ncpu: 109059.56817889716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 92030.5592891771,
            "unit": "ns/iter",
            "extra": "iterations: 9285\ncpu: 92028.98222940211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 87591.2609411954,
            "unit": "ns/iter",
            "extra": "iterations: 9711\ncpu: 87590.02162496148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 88835.55697384581,
            "unit": "ns/iter",
            "extra": "iterations: 9636\ncpu: 88835.27397260288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 232567.40780619098,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 232556.04306864121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2007063.2770564188,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2007013.4199134274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1672220.4703770783,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1672126.0323159792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1662015.6397058181,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1661944.669117647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1676279.0792793706,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1676217.2972973017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1021891.7858719628,
            "unit": "ns/iter",
            "extra": "iterations: 906\ncpu: 1021842.7152317846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1619461.926573301,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1619455.7692307679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6934554.910000089,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6934419.999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3922625.6302517406,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3922586.554621838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8368769.42857092,
            "unit": "ns/iter",
            "extra": "iterations: 133\ncpu: 8368573.684210517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 27433.60475696786,
            "unit": "ns/iter",
            "extra": "iterations: 29893\ncpu: 27433.258622419886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 110892.06455384225,
            "unit": "ns/iter",
            "extra": "iterations: 7699\ncpu: 110888.1153396544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 89952.85504645082,
            "unit": "ns/iter",
            "extra": "iterations: 9472\ncpu: 89949.88386824344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 90122.15042842907,
            "unit": "ns/iter",
            "extra": "iterations: 9453\ncpu: 90121.09383264591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 90091.74928593352,
            "unit": "ns/iter",
            "extra": "iterations: 9453\ncpu: 90089.19919602272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 236328.588810432,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 236325.14937533953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2025219.684095941,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2025211.1111111094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1675416.973214234,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1675397.3214285749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1663448.8999999673,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1663442.321428578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1683252.6363635804,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1683208.1818181812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1022035.4698794676,
            "unit": "ns/iter",
            "extra": "iterations: 913\ncpu: 1022020.8105147838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1627926.6335078457,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1627889.3542757435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6956472.660000372,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6956100.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3881062.421487607,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3880949.586776835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 25773.09494625759,
            "unit": "ns/iter",
            "extra": "iterations: 31818\ncpu: 25772.73241561393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 109106.74222335625,
            "unit": "ns/iter",
            "extra": "iterations: 7844\ncpu: 109103.70984191731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 89546.65776242063,
            "unit": "ns/iter",
            "extra": "iterations: 9546\ncpu: 89544.88791116714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 87516.48793120793,
            "unit": "ns/iter",
            "extra": "iterations: 9653\ncpu: 87514.14068165349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 89183.92080973835,
            "unit": "ns/iter",
            "extra": "iterations: 9534\ncpu: 89183.52213131996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 230737.08056367896,
            "unit": "ns/iter",
            "extra": "iterations: 3761\ncpu: 230733.82079234198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2029440.0740739547,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2029429.193899784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1690601.765765653,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1690577.6576576626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1675003.8237409918,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1674981.2949640278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1677647.5683452284,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1677624.6402877711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1000648.3056154619,
            "unit": "ns/iter",
            "extra": "iterations: 926\ncpu: 1000633.5853131765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1628982.9318181875,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1628957.167832172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2935.8702874565492,
            "unit": "ns/iter",
            "extra": "iterations: 238088\ncpu: 2935.8216289775282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14531.221933849265,
            "unit": "ns/iter",
            "extra": "iterations: 48163\ncpu: 14530.863941199632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11730.244126421978,
            "unit": "ns/iter",
            "extra": "iterations: 59674\ncpu: 11730.19740590546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11843.61216959622,
            "unit": "ns/iter",
            "extra": "iterations: 59624\ncpu: 11843.385214007798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9875.440968405865,
            "unit": "ns/iter",
            "extra": "iterations: 70962\ncpu: 9875.360051858692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55004.89903997175,
            "unit": "ns/iter",
            "extra": "iterations: 12708\ncpu: 55002.54957507044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 132862.92662114868,
            "unit": "ns/iter",
            "extra": "iterations: 5274\ncpu: 132859.46150929085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 34824.262919448985,
            "unit": "ns/iter",
            "extra": "iterations: 20086\ncpu: 34824.10136413424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 34840.156408329996,
            "unit": "ns/iter",
            "extra": "iterations: 19935\ncpu: 34840.025081515196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35041.39304705744,
            "unit": "ns/iter",
            "extra": "iterations: 19934\ncpu: 35040.56887729516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71868.66256157559,
            "unit": "ns/iter",
            "extra": "iterations: 9744\ncpu: 71867.67241379354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 62917.31432683108,
            "unit": "ns/iter",
            "extra": "iterations: 11119\ncpu: 62916.99793146797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 17857.560772915247,
            "unit": "ns/iter",
            "extra": "iterations: 39228\ncpu: 17857.28051391856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 83794.32380040917,
            "unit": "ns/iter",
            "extra": "iterations: 8357\ncpu: 83793.40672490254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 67619.44442299954,
            "unit": "ns/iter",
            "extra": "iterations: 10364\ncpu: 67617.40640679304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 66877.35639412161,
            "unit": "ns/iter",
            "extra": "iterations: 10494\ncpu: 66875.31923003601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 69194.20790904849,
            "unit": "ns/iter",
            "extra": "iterations: 10115\ncpu: 69193.33662876808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 132378.62041588398,
            "unit": "ns/iter",
            "extra": "iterations: 5290\ncpu: 132374.49905482153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 571958.0990990782,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 571937.755937754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 487969.64320560783,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 487960.9059233531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 484981.1823242598,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 484979.40153097344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 489093.86392183386,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 489086.67131891527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 316387.53797468287,
            "unit": "ns/iter",
            "extra": "iterations: 2212\ncpu: 316382.2332730565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 475750.9762551005,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 475744.233378568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18219.9943527847,
            "unit": "ns/iter",
            "extra": "iterations: 38426\ncpu: 18219.68458855995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 85135.02090209023,
            "unit": "ns/iter",
            "extra": "iterations: 8181\ncpu: 85133.82227111499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 68069.76309395995,
            "unit": "ns/iter",
            "extra": "iterations: 10291\ncpu: 68068.91458556028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 68253.78130478089,
            "unit": "ns/iter",
            "extra": "iterations: 10270\ncpu: 68252.84323271587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 69227.29747899833,
            "unit": "ns/iter",
            "extra": "iterations: 10115\ncpu: 69225.91201186314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 132600.16256625217,
            "unit": "ns/iter",
            "extra": "iterations: 5284\ncpu: 132597.72899318632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 570910.4176803972,
            "unit": "ns/iter",
            "extra": "iterations: 1233\ncpu: 570903.2441200359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 480517.4436038612,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 480511.0729023415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 481405.8004129767,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 481400.2752924997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 482162.96565937815,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 482155.151098902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 313788.5544110946,
            "unit": "ns/iter",
            "extra": "iterations: 2233\ncpu: 313787.32646663504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 475439.1183673513,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 475426.93877550255 ns\nthreads: 1"
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
        "date": 1705774821618,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7605.5940704097375,
            "unit": "ns/iter",
            "extra": "iterations: 91777\ncpu: 7604.786602307769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 68801.71669094828,
            "unit": "ns/iter",
            "extra": "iterations: 12354\ncpu: 68797.45831309697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 132590.77114275753,
            "unit": "ns/iter",
            "extra": "iterations: 6598\ncpu: 132579.69081539864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 195655.86723671295,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 195642.73177317728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 258074.11785715813,
            "unit": "ns/iter",
            "extra": "iterations: 3360\ncpu: 258053.27380952387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 319169.74815633433,
            "unit": "ns/iter",
            "extra": "iterations: 2712\ncpu: 319157.30088495585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 380246.5741145753,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 380213.07389593386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 442695.1162436518,
            "unit": "ns/iter",
            "extra": "iterations: 1970\ncpu: 442681.42131979694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 504139.6350491834,
            "unit": "ns/iter",
            "extra": "iterations: 1729\ncpu: 504126.37362637406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5717.272066738981,
            "unit": "ns/iter",
            "extra": "iterations: 122628\ncpu: 5717.175522719114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4725.133446265511,
            "unit": "ns/iter",
            "extra": "iterations: 148172\ncpu: 4724.964905650188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4751.949002518526,
            "unit": "ns/iter",
            "extra": "iterations: 147321\ncpu: 4751.891447926636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4750.995801852531,
            "unit": "ns/iter",
            "extra": "iterations: 147446\ncpu: 4750.827421564499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8419.847943443785,
            "unit": "ns/iter",
            "extra": "iterations: 83173\ncpu: 8419.390908107189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 27902.318577747723,
            "unit": "ns/iter",
            "extra": "iterations: 29390\ncpu: 27900.76896903708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 109351.22444502551,
            "unit": "ns/iter",
            "extra": "iterations: 7748\ncpu: 109344.78575116179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 88534.44566684215,
            "unit": "ns/iter",
            "extra": "iterations: 9635\ncpu: 88530.6382978725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 87077.56613810144,
            "unit": "ns/iter",
            "extra": "iterations: 9775\ncpu: 87072.08184143224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 88017.93648830368,
            "unit": "ns/iter",
            "extra": "iterations: 9699\ncpu: 88012.53737498695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 234470.70262942865,
            "unit": "ns/iter",
            "extra": "iterations: 3689\ncpu: 234452.61588506322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2025245.1899563507,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2025141.484716159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1671438.8815080873,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1671347.3967684056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1638088.5228874804,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1637994.7183098602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1683466.2109090458,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1683324.3636363642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 994161.4310159845,
            "unit": "ns/iter",
            "extra": "iterations: 935\ncpu: 994123.2085561473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1619241.2003484599,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1619142.1602787427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6746235.860000525,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6746026.999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3891645.271604972,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3892524.279835404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8217519.0751877725,
            "unit": "ns/iter",
            "extra": "iterations: 133\ncpu: 8217572.9323308375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 27594.133306320018,
            "unit": "ns/iter",
            "extra": "iterations: 29616\ncpu: 27593.49675850898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 117073.72932950262,
            "unit": "ns/iter",
            "extra": "iterations: 7293\ncpu: 117073.12491430184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 91567.39497962588,
            "unit": "ns/iter",
            "extra": "iterations: 9322\ncpu: 91564.91096331301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 91228.11721415617,
            "unit": "ns/iter",
            "extra": "iterations: 9376\ncpu: 91226.61049488047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 90220.40795442274,
            "unit": "ns/iter",
            "extra": "iterations: 9479\ncpu: 90217.67064036259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 234183.7587885465,
            "unit": "ns/iter",
            "extra": "iterations: 3698\ncpu: 234182.2065981602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2046712.1788077552,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2046744.591611483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1667904.838998071,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1667905.7245080532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1648762.2275132018,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1648747.442680774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1695851.5471014176,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1695826.9927536193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 995802.6262084208,
            "unit": "ns/iter",
            "extra": "iterations: 931\ncpu: 995774.9731471561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1628073.291958198,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1628047.7272727245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6832038.000000012,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6831855.999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3810871.8244896466,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3810631.020408144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 26809.22046651595,
            "unit": "ns/iter",
            "extra": "iterations: 30567\ncpu: 26808.002093761326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 109298.90213364422,
            "unit": "ns/iter",
            "extra": "iterations: 7827\ncpu: 109292.90916059792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 87469.14353037928,
            "unit": "ns/iter",
            "extra": "iterations: 9761\ncpu: 87466.4276201215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 86107.18805578038,
            "unit": "ns/iter",
            "extra": "iterations: 9896\ncpu: 86104.6988682296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 88619.68945130476,
            "unit": "ns/iter",
            "extra": "iterations: 9641\ncpu: 88614.51094284806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 231536.72247402518,
            "unit": "ns/iter",
            "extra": "iterations: 3751\ncpu: 231533.08451079662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2045410.3391685376,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2045373.7417943075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1678004.7280858664,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1677879.7853309368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1647894.4708993654,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1647804.7619047589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1670666.382405913,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1670562.1184919262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1013604.402347893,
            "unit": "ns/iter",
            "extra": "iterations: 937\ncpu: 1013560.512273214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1622263.1146383015,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1622126.455026455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2915.849523296459,
            "unit": "ns/iter",
            "extra": "iterations: 241240\ncpu: 2915.727076770046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14712.370699594867,
            "unit": "ns/iter",
            "extra": "iterations: 47699\ncpu: 14711.522254135352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11736.787112917831,
            "unit": "ns/iter",
            "extra": "iterations: 59548\ncpu: 11736.39081077451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11181.21734059762,
            "unit": "ns/iter",
            "extra": "iterations: 62593\ncpu: 11180.999472784551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9763.88673694196,
            "unit": "ns/iter",
            "extra": "iterations: 71718\ncpu: 9763.56702640899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 54817.20929685617,
            "unit": "ns/iter",
            "extra": "iterations: 12757\ncpu: 54817.10433487502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 133907.76124237353,
            "unit": "ns/iter",
            "extra": "iterations: 5248\ncpu: 133907.75533536694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 34648.84854330338,
            "unit": "ns/iter",
            "extra": "iterations: 20217\ncpu: 34649.300093980244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 34087.43233100809,
            "unit": "ns/iter",
            "extra": "iterations: 20519\ncpu: 34087.09488766476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34438.61946163863,
            "unit": "ns/iter",
            "extra": "iterations: 20358\ncpu: 34438.176638177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 70234.64230690188,
            "unit": "ns/iter",
            "extra": "iterations: 9866\ncpu: 70235.55645651848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 62858.99551248317,
            "unit": "ns/iter",
            "extra": "iterations: 11142\ncpu: 62853.86824627477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 17943.016662821432,
            "unit": "ns/iter",
            "extra": "iterations: 39009\ncpu: 17942.29280422482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 85846.25732063751,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 85844.363103954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 69830.78924795314,
            "unit": "ns/iter",
            "extra": "iterations: 10026\ncpu: 69829.43347297038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 70704.82690405256,
            "unit": "ns/iter",
            "extra": "iterations: 10110\ncpu: 70541.8397626112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 71231.86013205096,
            "unit": "ns/iter",
            "extra": "iterations: 9845\ncpu: 71227.31335703339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 131720.28169542798,
            "unit": "ns/iter",
            "extra": "iterations: 5332\ncpu: 131713.05326331485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 575637.1460213547,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 575602.2969647208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 483364.24913737626,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 483349.1373360973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 478346.2929155293,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 478292.438692098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 483809.3206634187,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 483778.16171389475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 311117.99866725656,
            "unit": "ns/iter",
            "extra": "iterations: 2251\ncpu: 311108.21856952267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 473053.391891884,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 473033.5810810855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18082.578356860355,
            "unit": "ns/iter",
            "extra": "iterations: 38682\ncpu: 18082.08210537176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 87978.57343358344,
            "unit": "ns/iter",
            "extra": "iterations: 7980\ncpu: 87972.70676691752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 70364.2530156814,
            "unit": "ns/iter",
            "extra": "iterations: 9948\ncpu: 70362.78648974626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 68874.28376373753,
            "unit": "ns/iter",
            "extra": "iterations: 10107\ncpu: 68873.46393588596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 70871.9684178541,
            "unit": "ns/iter",
            "extra": "iterations: 9879\ncpu: 70870.81688429917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 130281.40066841459,
            "unit": "ns/iter",
            "extra": "iterations: 5386\ncpu: 130280.82064611826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 574360.100902437,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 574351.8457752212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 487773.3976323012,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 487752.15877437906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 472003.5199459546,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 471982.01487491565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 479873.3671928295,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 479837.54289636004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 312563.78999102506,
            "unit": "ns/iter",
            "extra": "iterations: 2238\ncpu: 312547.14030384587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 473845.69054053054,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 473815.4054054101 ns\nthreads: 1"
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
        "date": 1705778362224,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7601.653295660493,
            "unit": "ns/iter",
            "extra": "iterations: 91666\ncpu: 7601.534920253966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 69479.61103864327,
            "unit": "ns/iter",
            "extra": "iterations: 12266\ncpu: 69478.32219142346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 131954.49705215916,
            "unit": "ns/iter",
            "extra": "iterations: 6615\ncpu: 131949.59939531365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 193884.84771913776,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 193879.71824686942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 255619.11679907324,
            "unit": "ns/iter",
            "extra": "iterations: 3399\ncpu: 255616.53427478657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 317068.61805554887,
            "unit": "ns/iter",
            "extra": "iterations: 2736\ncpu: 317061.22076023393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 378990.3382608412,
            "unit": "ns/iter",
            "extra": "iterations: 2300\ncpu: 378979.39130434784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 439461.87259859935,
            "unit": "ns/iter",
            "extra": "iterations: 1978\ncpu: 439450.5055611732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 502716.4709602917,
            "unit": "ns/iter",
            "extra": "iterations: 1739\ncpu: 502704.88786659006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5757.766266348648,
            "unit": "ns/iter",
            "extra": "iterations: 121570\ncpu: 5757.681993912967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4884.371535672705,
            "unit": "ns/iter",
            "extra": "iterations: 145122\ncpu: 4884.2677195738725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4825.868071555469,
            "unit": "ns/iter",
            "extra": "iterations: 145397\ncpu: 4825.651836007617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4778.846568788376,
            "unit": "ns/iter",
            "extra": "iterations: 145896\ncpu: 4778.830810988639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8411.006443701577,
            "unit": "ns/iter",
            "extra": "iterations: 83182\ncpu: 8410.955495179243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 27467.089336597717,
            "unit": "ns/iter",
            "extra": "iterations: 29831\ncpu: 27466.42754181895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 110954.17897727527,
            "unit": "ns/iter",
            "extra": "iterations: 7744\ncpu: 110951.79493801678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 90161.21196111823,
            "unit": "ns/iter",
            "extra": "iterations: 9464\ncpu: 90155.43110735391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 88318.98186528888,
            "unit": "ns/iter",
            "extra": "iterations: 9650\ncpu: 88317.02590673575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 89715.59452919137,
            "unit": "ns/iter",
            "extra": "iterations: 9505\ncpu: 89712.41451867434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 236282.1202946199,
            "unit": "ns/iter",
            "extra": "iterations: 3666\ncpu: 236280.30551009238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2032382.8774615966,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2032339.3873085338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1660962.0807900259,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1660928.0071813317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1672806.5824372116,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1672738.7096774185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1664903.4640287852,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1664880.3956834504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1014446.3220153874,
            "unit": "ns/iter",
            "extra": "iterations: 913\ncpu: 1014422.672508214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1623876.4325743911,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1623854.816112085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6862019.979998877,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6861516.000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3824209.2040815935,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3824177.5510204183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8190948.571428408,
            "unit": "ns/iter",
            "extra": "iterations: 133\ncpu: 8190590.977443616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 26360.41541049563,
            "unit": "ns/iter",
            "extra": "iterations: 30914\ncpu: 26360.45804489876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 111472.14150942968,
            "unit": "ns/iter",
            "extra": "iterations: 7632\ncpu: 111470.9905660383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 89166.11207800117,
            "unit": "ns/iter",
            "extra": "iterations: 9538\ncpu: 89162.82239463173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 88109.34972507534,
            "unit": "ns/iter",
            "extra": "iterations: 9639\ncpu: 88106.67081647436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 90983.74259656144,
            "unit": "ns/iter",
            "extra": "iterations: 9320\ncpu: 90980.81545064389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 242677.98677544997,
            "unit": "ns/iter",
            "extra": "iterations: 3554\ncpu: 242665.41924591857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2048180.9252747293,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2048095.3846153773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1667810.69784191,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1667778.776978413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1681347.5525361728,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1681333.5144927623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1660300.6744184857,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1660241.86046512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1017204.2677595528,
            "unit": "ns/iter",
            "extra": "iterations: 915\ncpu: 1017189.6174863395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1627223.9492117448,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1627175.83187391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6888337.9600003995,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6888199.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3789696.634146644,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3789540.650406494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 25831.79565217245,
            "unit": "ns/iter",
            "extra": "iterations: 31740\ncpu: 25831.146817895326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 110625.47246338366,
            "unit": "ns/iter",
            "extra": "iterations: 7717\ncpu: 110622.10703641355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 89262.20123417622,
            "unit": "ns/iter",
            "extra": "iterations: 9561\ncpu: 89259.48122581348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 88159.73503741437,
            "unit": "ns/iter",
            "extra": "iterations: 9624\ncpu: 88155.7876142978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 88475.43866707789,
            "unit": "ns/iter",
            "extra": "iterations: 9693\ncpu: 88476.19931909654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 235813.03198696888,
            "unit": "ns/iter",
            "extra": "iterations: 3689\ncpu: 235758.57956085715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2027320.969162924,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2027277.3127753246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1659952.878354124,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1659900 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1663810.1552346447,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1663797.6534295948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1659449.8658318352,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1659405.0089445428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1000201.5200000864,
            "unit": "ns/iter",
            "extra": "iterations: 925\ncpu: 1000164.1081081101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1620704.5416665424,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1620677.2569444433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2897.132877592184,
            "unit": "ns/iter",
            "extra": "iterations: 241365\ncpu: 2897.000807905027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14852.709665767992,
            "unit": "ns/iter",
            "extra": "iterations: 47063\ncpu: 14852.557210547478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11486.641672827596,
            "unit": "ns/iter",
            "extra": "iterations: 60855\ncpu: 11486.423465614997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11554.1430008571,
            "unit": "ns/iter",
            "extra": "iterations: 60636\ncpu: 11553.913516722787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9952.575149359478,
            "unit": "ns/iter",
            "extra": "iterations: 70300\ncpu: 9952.59743954478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 57250.35543006718,
            "unit": "ns/iter",
            "extra": "iterations: 12219\ncpu: 57248.92380718526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 133062.55254107868,
            "unit": "ns/iter",
            "extra": "iterations: 5234\ncpu: 133059.93504012268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 34513.95870700744,
            "unit": "ns/iter",
            "extra": "iterations: 20294\ncpu: 34512.43717354908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 34341.54655452265,
            "unit": "ns/iter",
            "extra": "iterations: 20331\ncpu: 34340.671880379516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34334.672713901986,
            "unit": "ns/iter",
            "extra": "iterations: 20395\ncpu: 34333.57195391025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67925.79546115067,
            "unit": "ns/iter",
            "extra": "iterations: 10311\ncpu: 67924.31383958946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 62684.94666308894,
            "unit": "ns/iter",
            "extra": "iterations: 11193\ncpu: 62682.542660590334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 17478.10101388647,
            "unit": "ns/iter",
            "extra": "iterations: 40044\ncpu: 17477.552192588046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 83276.53101235606,
            "unit": "ns/iter",
            "extra": "iterations: 8416\ncpu: 83276.52091254662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 67299.05770895122,
            "unit": "ns/iter",
            "extra": "iterations: 10397\ncpu: 67296.06617293415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 66078.33308178837,
            "unit": "ns/iter",
            "extra": "iterations: 10601\ncpu: 66077.11536647526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 67774.69013540004,
            "unit": "ns/iter",
            "extra": "iterations: 10340\ncpu: 67772.93036750432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 130147.00744601534,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 130142.8332092332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 568872.8193653155,
            "unit": "ns/iter",
            "extra": "iterations: 1229\ncpu: 568871.5215622463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 478914.7830253151,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 478897.946611912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 468696.97523427696,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 468683.40026774106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 474894.27155462804,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 474878.2077393115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 308251.13018535386,
            "unit": "ns/iter",
            "extra": "iterations: 2266\ncpu: 308232.8773168564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 465677.4503663983,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 465668.6209193875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 17510.606735922487,
            "unit": "ns/iter",
            "extra": "iterations: 39757\ncpu: 17509.46751515465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 83544.32884386345,
            "unit": "ns/iter",
            "extra": "iterations: 8390\ncpu: 83541.75208581542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 67195.75767721584,
            "unit": "ns/iter",
            "extra": "iterations: 10453\ncpu: 67194.25045441513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 66058.41345519491,
            "unit": "ns/iter",
            "extra": "iterations: 10613\ncpu: 66057.52379157687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 67992.04746682549,
            "unit": "ns/iter",
            "extra": "iterations: 10323\ncpu: 67990.99099099208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 130079.10217349982,
            "unit": "ns/iter",
            "extra": "iterations: 5383\ncpu: 130072.52461452602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 570561.7786818255,
            "unit": "ns/iter",
            "extra": "iterations: 1229\ncpu: 570552.2375915454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 477492.1425647704,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 477469.84993177926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 467994.411882469,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 467986.6488651508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 471656.63814022485,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 471640.7008086266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 311625.99060818146,
            "unit": "ns/iter",
            "extra": "iterations: 2236\ncpu: 311621.1538461526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 465540.17545030214,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 465538.29219479667 ns\nthreads: 1"
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
        "date": 1705953552337,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7685.836708484864,
            "unit": "ns/iter",
            "extra": "iterations: 91107\ncpu: 7685.738746748329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71413.24132438806,
            "unit": "ns/iter",
            "extra": "iterations: 11930\ncpu: 71412.33025984911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136658.80165288958,
            "unit": "ns/iter",
            "extra": "iterations: 6413\ncpu: 136655.79292063002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 200933.5578922916,
            "unit": "ns/iter",
            "extra": "iterations: 4327\ncpu: 200929.4199214236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 265430.78490679606,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 265425.81729300355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 334177.4232804223,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 334171.23960695387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 394082.93037974305,
            "unit": "ns/iter",
            "extra": "iterations: 2212\ncpu: 394073.2368896922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 456528.19463437,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 456513.83482377673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 522059.519161695,
            "unit": "ns/iter",
            "extra": "iterations: 1670\ncpu: 522033.95209580887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5794.807116321263,
            "unit": "ns/iter",
            "extra": "iterations: 121130\ncpu: 5794.577726409638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4846.718093537471,
            "unit": "ns/iter",
            "extra": "iterations: 144477\ncpu: 4846.60811063353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4893.322292727111,
            "unit": "ns/iter",
            "extra": "iterations: 143410\ncpu: 4893.261278850842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4894.60241787991,
            "unit": "ns/iter",
            "extra": "iterations: 143266\ncpu: 4894.494157720605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8414.14349851199,
            "unit": "ns/iter",
            "extra": "iterations: 83304\ncpu: 8414.04014213001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 28234.027024248953,
            "unit": "ns/iter",
            "extra": "iterations: 29196\ncpu: 28233.473763529197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 117607.8644698768,
            "unit": "ns/iter",
            "extra": "iterations: 7253\ncpu: 117606.39735281942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 92965.89280647125,
            "unit": "ns/iter",
            "extra": "iterations: 9161\ncpu: 92964.74184041037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 91738.18139230969,
            "unit": "ns/iter",
            "extra": "iterations: 9179\ncpu: 91736.30025057192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 92042.47128926449,
            "unit": "ns/iter",
            "extra": "iterations: 9230\ncpu: 92040.75839653297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 238291.54022361792,
            "unit": "ns/iter",
            "extra": "iterations: 3667\ncpu: 238284.0741750753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2031330.4571428178,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2031274.945054943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1672918.8938847329,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1672889.3884892089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1674878.0505414477,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1674847.1119133586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1690487.4018182042,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1690467.0909090864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1021227.6574890837,
            "unit": "ns/iter",
            "extra": "iterations: 908\ncpu: 1021212.7753303967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1673087.6373239593,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1673078.6971831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6939680.70999972,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6939400.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3969384.6610172214,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3969283.4745762707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8426063.292308055,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 8425727.692307698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 27510.389352816404,
            "unit": "ns/iter",
            "extra": "iterations: 29698\ncpu: 27509.421509866006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 110896.45028316417,
            "unit": "ns/iter",
            "extra": "iterations: 7593\ncpu: 110890.63611220829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 92198.78601183859,
            "unit": "ns/iter",
            "extra": "iterations: 9122\ncpu: 92195.25323394034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 92725.82227826655,
            "unit": "ns/iter",
            "extra": "iterations: 9121\ncpu: 92720.46924679367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 92216.14796926775,
            "unit": "ns/iter",
            "extra": "iterations: 9110\ncpu: 92213.21624588373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 242322.56751466898,
            "unit": "ns/iter",
            "extra": "iterations: 3577\ncpu: 242307.8277886496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2039838.0703297264,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2039775.8241758365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1686944.6990991032,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1686851.8918918858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1693976.9364791934,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1693918.511796735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1689601.7472725527,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1689514.181818184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1027921.9779005911,
            "unit": "ns/iter",
            "extra": "iterations: 905\ncpu: 1027888.1767955779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1647039.4162257751,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1646949.029982373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6997988.10999937,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6997676.999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4032168.630901105,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4031909.01287554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 26891.163798180158,
            "unit": "ns/iter",
            "extra": "iterations: 30562\ncpu: 26890.681238138804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 114375.72741826548,
            "unit": "ns/iter",
            "extra": "iterations: 7495\ncpu: 114371.31420947319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 92180.86110513839,
            "unit": "ns/iter",
            "extra": "iterations: 9302\ncpu: 92177.12319931254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 91272.80528615229,
            "unit": "ns/iter",
            "extra": "iterations: 9383\ncpu: 91266.82297772546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 92511.21612797608,
            "unit": "ns/iter",
            "extra": "iterations: 9189\ncpu: 92508.30340624652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 237956.92383026166,
            "unit": "ns/iter",
            "extra": "iterations: 3676\ncpu: 237941.59412404726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2058044.0397351661,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2057957.1743929365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1695720.6320583161,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1695630.9653916142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1698073.1366119452,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1698038.7978142148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1697465.2072727538,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1697400.3636363735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1030199.4057971273,
            "unit": "ns/iter",
            "extra": "iterations: 897\ncpu: 1030158.7513935348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1651506.7362830306,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1651443.539823007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2932.3555474430723,
            "unit": "ns/iter",
            "extra": "iterations: 238317\ncpu: 2932.1768904442524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14692.526385197161,
            "unit": "ns/iter",
            "extra": "iterations: 47773\ncpu: 14692.345048458334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11536.939446508894,
            "unit": "ns/iter",
            "extra": "iterations: 60525\ncpu: 11536.616274266751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11422.164334232348,
            "unit": "ns/iter",
            "extra": "iterations: 61095\ncpu: 11422.029625992265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10040.540028382104,
            "unit": "ns/iter",
            "extra": "iterations: 69763\ncpu: 10040.418273296735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 56221.49390340877,
            "unit": "ns/iter",
            "extra": "iterations: 12466\ncpu: 56219.36467190785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 129407.2064635236,
            "unit": "ns/iter",
            "extra": "iterations: 5415\ncpu: 129405.63250230902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35086.243263546996,
            "unit": "ns/iter",
            "extra": "iterations: 19966\ncpu: 35085.2248823002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35230.84718727843,
            "unit": "ns/iter",
            "extra": "iterations: 19874\ncpu: 35230.43171983472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35255.50548454913,
            "unit": "ns/iter",
            "extra": "iterations: 19874\ncpu: 35254.65935392985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71788.00803212717,
            "unit": "ns/iter",
            "extra": "iterations: 9711\ncpu: 71787.09710637432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63366.69678061016,
            "unit": "ns/iter",
            "extra": "iterations: 11058\ncpu: 63365.337312352174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18276.84639686728,
            "unit": "ns/iter",
            "extra": "iterations: 38300\ncpu: 18276.485639686864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 84336.69642641606,
            "unit": "ns/iter",
            "extra": "iterations: 8311\ncpu: 84334.11141860178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 67848.87243117437,
            "unit": "ns/iter",
            "extra": "iterations: 10316\ncpu: 67846.3067080257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 68027.40907317169,
            "unit": "ns/iter",
            "extra": "iterations: 10250\ncpu: 68025.34634146458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 69398.80260023398,
            "unit": "ns/iter",
            "extra": "iterations: 10076\ncpu: 69397.33028979739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 130882.00448347599,
            "unit": "ns/iter",
            "extra": "iterations: 5353\ncpu: 130878.44199514495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 573232.1088379971,
            "unit": "ns/iter",
            "extra": "iterations: 1222\ncpu: 573224.9590834716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 475457.6634615271,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 475445.94780219794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 471134.5033692643,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 471124.66307278007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 483238.08555779915,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 483232.16974674904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 316774.86345017847,
            "unit": "ns/iter",
            "extra": "iterations: 2197\ncpu: 316763.9963586722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 475806.5971467295,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 475800.8831521767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18251.499830680375,
            "unit": "ns/iter",
            "extra": "iterations: 38389\ncpu: 18250.81924509638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 84538.95542402306,
            "unit": "ns/iter",
            "extra": "iterations: 8278\ncpu: 84536.74800676454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 68140.10515063362,
            "unit": "ns/iter",
            "extra": "iterations: 10290\ncpu: 68138.77551020304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 68807.17790207146,
            "unit": "ns/iter",
            "extra": "iterations: 10191\ncpu: 68804.76891374782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 69794.27932237949,
            "unit": "ns/iter",
            "extra": "iterations: 10035\ncpu: 69793.4230194323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 131618.41630578059,
            "unit": "ns/iter",
            "extra": "iterations: 5311\ncpu: 131614.42289587465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 567343.8593621778,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 567337.2035977063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 479435.64637479343,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 479419.08344732854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 511974.12715959805,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 511967.93365583953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 486113.87282834103,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 486099.9999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 319368.7661805013,
            "unit": "ns/iter",
            "extra": "iterations: 2194\ncpu: 319364.85870556213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 475203.979577873,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 475198.1620149799 ns\nthreads: 1"
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
        "date": 1705954981204,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7658.764085508689,
            "unit": "ns/iter",
            "extra": "iterations: 91406\ncpu: 7658.445835065531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70284.82999337808,
            "unit": "ns/iter",
            "extra": "iterations: 12076\ncpu: 70281.10301424313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 134078.66984616354,
            "unit": "ns/iter",
            "extra": "iterations: 6500\ncpu: 134072.84615384616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 195558.7672413771,
            "unit": "ns/iter",
            "extra": "iterations: 4408\ncpu: 195552.74500907442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 258826.72271914553,
            "unit": "ns/iter",
            "extra": "iterations: 3354\ncpu: 258822.5104353012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 318899.89335794654,
            "unit": "ns/iter",
            "extra": "iterations: 2710\ncpu: 318876.4206642065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 381857.2802101288,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 381839.1856392294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 444796.37006664264,
            "unit": "ns/iter",
            "extra": "iterations: 1951\ncpu: 444781.9579702716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 504376.57292879984,
            "unit": "ns/iter",
            "extra": "iterations: 1714\ncpu: 504345.2158693123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5809.83031994643,
            "unit": "ns/iter",
            "extra": "iterations: 120739\ncpu: 5809.699434317009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4874.564715346992,
            "unit": "ns/iter",
            "extra": "iterations: 144193\ncpu: 4874.528583218332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4805.505523459747,
            "unit": "ns/iter",
            "extra": "iterations: 145742\ncpu: 4805.37593830193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4833.717468246336,
            "unit": "ns/iter",
            "extra": "iterations: 144943\ncpu: 4833.376568720113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8373.728916667676,
            "unit": "ns/iter",
            "extra": "iterations: 84000\ncpu: 8373.659523809529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 26590.53391614122,
            "unit": "ns/iter",
            "extra": "iterations: 30885\ncpu: 26589.96924073168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 111891.34409727159,
            "unit": "ns/iter",
            "extra": "iterations: 7649\ncpu: 111890.7831089034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 88124.89396766468,
            "unit": "ns/iter",
            "extra": "iterations: 9648\ncpu: 88121.56923714762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 87599.85764245762,
            "unit": "ns/iter",
            "extra": "iterations: 9722\ncpu: 87599.58856202407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 88953.97732734901,
            "unit": "ns/iter",
            "extra": "iterations: 9571\ncpu: 88952.8575906386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 233287.0553465835,
            "unit": "ns/iter",
            "extra": "iterations: 3722\ncpu: 233284.76625470177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2028677.5076586644,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2028587.9649890568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1660209.5347595427,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1660137.4331550808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1637568.5202822268,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1637491.1816578489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1653510.7460035188,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1653326.998223797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1003251.0702703311,
            "unit": "ns/iter",
            "extra": "iterations: 925\ncpu: 1003190.7027027003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1608245.5260417245,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1608220.486111114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6763141.889999815,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6762799.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3771579.6693549366,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3771485.8870967627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8183016.932836136,
            "unit": "ns/iter",
            "extra": "iterations: 134\ncpu: 8182466.417910445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 26169.838783704512,
            "unit": "ns/iter",
            "extra": "iterations: 31374\ncpu: 26169.70421368015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 110332.99313383365,
            "unit": "ns/iter",
            "extra": "iterations: 7719\ncpu: 110330.50913330783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 89203.1659846814,
            "unit": "ns/iter",
            "extra": "iterations: 9531\ncpu: 89202.57055922793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 89298.97335291527,
            "unit": "ns/iter",
            "extra": "iterations: 9532\ncpu: 89295.39446076381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 90579.325650881,
            "unit": "ns/iter",
            "extra": "iterations: 9372\ncpu: 90578.45710627416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 237602.3896636549,
            "unit": "ns/iter",
            "extra": "iterations: 3657\ncpu: 237594.58572600532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2056772.9314159632,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2056737.3893805246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1667521.4362657254,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1667452.7827648113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1656239.4937833464,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1656233.0373001718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1667506.8449198736,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1667497.1479500963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1000361.4237837463,
            "unit": "ns/iter",
            "extra": "iterations: 925\ncpu: 1000340.2162162099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1625071.1794424849,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1624973.344947731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6814266.129999851,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6814186.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3747544.273091971,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3747451.0040160813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 25298.8155905316,
            "unit": "ns/iter",
            "extra": "iterations: 32276\ncpu: 25297.694881645693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 110596.87181138898,
            "unit": "ns/iter",
            "extra": "iterations: 7762\ncpu: 110594.76938933233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 87842.71118203699,
            "unit": "ns/iter",
            "extra": "iterations: 9712\ncpu: 87840.73311367368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 86890.93444466994,
            "unit": "ns/iter",
            "extra": "iterations: 9778\ncpu: 86889.03661280424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 89106.72589573979,
            "unit": "ns/iter",
            "extra": "iterations: 9573\ncpu: 89104.95142588532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 231794.4487935587,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 231776.7292225214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2039212.2527472575,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2039202.1978022063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1668205.425760281,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1668182.2898032265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1632781.39649133,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1632701.9298245579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1647598.8758865395,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1647570.9219858227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1000525.1170784449,
            "unit": "ns/iter",
            "extra": "iterations: 931\ncpu: 1000508.0558539171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1612095.6412479077,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1612058.405545931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2836.2298310801893,
            "unit": "ns/iter",
            "extra": "iterations: 246803\ncpu: 2836.0931593214173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14450.967348618631,
            "unit": "ns/iter",
            "extra": "iterations: 48635\ncpu: 14450.924231520441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11349.391027198899,
            "unit": "ns/iter",
            "extra": "iterations: 61653\ncpu: 11349.103855449086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 10994.04006790777,
            "unit": "ns/iter",
            "extra": "iterations: 63617\ncpu: 10993.668359086476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9705.174536140637,
            "unit": "ns/iter",
            "extra": "iterations: 72220\ncpu: 9705.058155635503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 55710.05999522159,
            "unit": "ns/iter",
            "extra": "iterations: 12551\ncpu: 55706.88391363238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 127876.42667152989,
            "unit": "ns/iter",
            "extra": "iterations: 5489\ncpu: 127873.82036800911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 34729.43787510584,
            "unit": "ns/iter",
            "extra": "iterations: 20161\ncpu: 34727.6176776947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 33846.328376224286,
            "unit": "ns/iter",
            "extra": "iterations: 20711\ncpu: 33843.947660663995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34102.135890195816,
            "unit": "ns/iter",
            "extra": "iterations: 20546\ncpu: 34098.26730263772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 70443.79435686793,
            "unit": "ns/iter",
            "extra": "iterations: 9959\ncpu: 70443.54854905125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 62429.490782792476,
            "unit": "ns/iter",
            "extra": "iterations: 11229\ncpu: 62428.71137233872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 17383.386756865322,
            "unit": "ns/iter",
            "extra": "iterations: 39764\ncpu: 17383.263756161443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 86790.54271917665,
            "unit": "ns/iter",
            "extra": "iterations: 8076\ncpu: 86789.73501733573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 68965.37785341848,
            "unit": "ns/iter",
            "extra": "iterations: 9988\ncpu: 68962.76531838153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 68135.23256265621,
            "unit": "ns/iter",
            "extra": "iterations: 10294\ncpu: 68132.6112298422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 70235.2380283199,
            "unit": "ns/iter",
            "extra": "iterations: 9961\ncpu: 70234.80574239546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 134845.2229262727,
            "unit": "ns/iter",
            "extra": "iterations: 5208\ncpu: 134844.41244239674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 576187.8270491848,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 576172.0491803285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 484563.02071824746,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 484559.2541436495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 473455.3921568807,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 473458.6206896496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 482409.09628610604,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 482406.7400275047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 313650.89296908025,
            "unit": "ns/iter",
            "extra": "iterations: 2233\ncpu: 313637.975817286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 470672.3431834114,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 470666.95768973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 17885.982255631436,
            "unit": "ns/iter",
            "extra": "iterations: 39111\ncpu: 17885.83263020634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 85162.99805258344,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 85162.2322297958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 69096.73985985554,
            "unit": "ns/iter",
            "extra": "iterations: 10133\ncpu: 69095.89460179608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 69123.34377160511,
            "unit": "ns/iter",
            "extra": "iterations: 10123\ncpu: 69120.75471698145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 69693.38099960853,
            "unit": "ns/iter",
            "extra": "iterations: 10084\ncpu: 69692.8203094014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 134106.19708868783,
            "unit": "ns/iter",
            "extra": "iterations: 5221\ncpu: 134102.3175636853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 577127.1784539815,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 577121.9572368386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 481374.4903846025,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 481351.4423077001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 469400.4805890459,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 469393.90896921745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 475382.32244893943,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 475380.61224489514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 314782.901676493,
            "unit": "ns/iter",
            "extra": "iterations: 2207\ncpu: 314777.1635704555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 470250.50940859,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 470244.3548387088 ns\nthreads: 1"
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
        "date": 1705956790328,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7568.809001002259,
            "unit": "ns/iter",
            "extra": "iterations: 92723\ncpu: 7568.577375624172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 68855.89426276123,
            "unit": "ns/iter",
            "extra": "iterations: 12323\ncpu: 68852.95788363222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 131852.12167873653,
            "unit": "ns/iter",
            "extra": "iterations: 6624\ncpu: 131850.81521739133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 193917.3352018101,
            "unit": "ns/iter",
            "extra": "iterations: 4460\ncpu: 193912.08520179373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 255176.93047338352,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 255176.56804733732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 316607.17044620326,
            "unit": "ns/iter",
            "extra": "iterations: 2734\ncpu: 316572.86027798103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 378919.9317094365,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 378899.9130056544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 439745.1528340319,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 439724.54453441314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 502574.0420749162,
            "unit": "ns/iter",
            "extra": "iterations: 1735\ncpu: 502538.5590778098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5668.48468556213,
            "unit": "ns/iter",
            "extra": "iterations: 123315\ncpu: 5668.476665450267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4830.382101457989,
            "unit": "ns/iter",
            "extra": "iterations: 144671\ncpu: 4829.998410185866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4715.2705811792175,
            "unit": "ns/iter",
            "extra": "iterations: 148388\ncpu: 4715.017386850691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4786.857878229757,
            "unit": "ns/iter",
            "extra": "iterations: 146670\ncpu: 4781.5129201609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8540.281381007333,
            "unit": "ns/iter",
            "extra": "iterations: 82056\ncpu: 8540.187189236616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 27250.14265311572,
            "unit": "ns/iter",
            "extra": "iterations: 30108\ncpu: 27249.003587086558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 111518.95118750106,
            "unit": "ns/iter",
            "extra": "iterations: 7621\ncpu: 111517.7798189213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 89640.99059891781,
            "unit": "ns/iter",
            "extra": "iterations: 9467\ncpu: 89638.82961867533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 88257.92765072694,
            "unit": "ns/iter",
            "extra": "iterations: 9620\ncpu: 88257.162162162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 89072.33092545884,
            "unit": "ns/iter",
            "extra": "iterations: 9552\ncpu: 89070.06909547701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 240566.07244357243,
            "unit": "ns/iter",
            "extra": "iterations: 3589\ncpu: 240559.82167734776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2065002.3184855839,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2064874.8329621425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1714261.521178482,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1714187.6611418063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1687145.310909066,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1687056.363636369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1694484.4689780346,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1694393.4306569323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1020308.5516482983,
            "unit": "ns/iter",
            "extra": "iterations: 910\ncpu: 1020246.8131868128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1656909.852049985,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1656830.6595365421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6842078.419999779,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6841587.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3917076.100000353,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3916791.666666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8391525.084615435,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 8391020.76923077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 26412.58752904643,
            "unit": "ns/iter",
            "extra": "iterations: 30984\ncpu: 26411.38006713137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 109674.11653989025,
            "unit": "ns/iter",
            "extra": "iterations: 7757\ncpu: 109668.06755188914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 90192.6696655349,
            "unit": "ns/iter",
            "extra": "iterations: 9448\ncpu: 90187.36240474167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 90603.15807340891,
            "unit": "ns/iter",
            "extra": "iterations: 9426\ncpu: 90598.48291958423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 90108.08520609181,
            "unit": "ns/iter",
            "extra": "iterations: 9389\ncpu: 90104.05794014283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 241950.24817517097,
            "unit": "ns/iter",
            "extra": "iterations: 3562\ncpu: 241934.83997754095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2095616.7932584148,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2095511.9101123475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1727740.3178438793,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1727635.5018587338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1708634.9488117844,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1708537.6599634404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1726300.3210332096,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1726218.634686352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1021700.7125550127,
            "unit": "ns/iter",
            "extra": "iterations: 908\ncpu: 1021634.471365641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1667322.908765519,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1667318.7835420344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6939869.249999901,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6939856.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3985272.1228814935,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3985261.864406806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 25764.505834377076,
            "unit": "ns/iter",
            "extra": "iterations: 31880\ncpu: 25763.660602258456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 109132.12176696009,
            "unit": "ns/iter",
            "extra": "iterations: 7810\ncpu: 109128.78361075548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 88470.87419422157,
            "unit": "ns/iter",
            "extra": "iterations: 9618\ncpu: 88469.9105843213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 87735.74806560799,
            "unit": "ns/iter",
            "extra": "iterations: 9693\ncpu: 87733.16826575888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 88444.21111342196,
            "unit": "ns/iter",
            "extra": "iterations: 9592\ncpu: 88443.37989991636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 241044.70823993575,
            "unit": "ns/iter",
            "extra": "iterations: 3568\ncpu: 241042.51681614394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2091666.1454138064,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2091606.0402684505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1731807.5222221892,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1731790.0000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1693079.9855333855,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1693015.9132007246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1715364.3981650972,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1715361.1009174373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1021503.7146018912,
            "unit": "ns/iter",
            "extra": "iterations: 904\ncpu: 1021478.3185840716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1672453.6487453566,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1672434.4086021527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2956.3629420003326,
            "unit": "ns/iter",
            "extra": "iterations: 237104\ncpu: 2956.2592786287832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14891.319948021604,
            "unit": "ns/iter",
            "extra": "iterations: 46942\ncpu: 14891.291380852988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11630.453886406445,
            "unit": "ns/iter",
            "extra": "iterations: 60004\ncpu: 11630.211319245322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11760.348649778365,
            "unit": "ns/iter",
            "extra": "iterations: 59805\ncpu: 11760.334420198968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9798.856060817232,
            "unit": "ns/iter",
            "extra": "iterations: 71558\ncpu: 9798.700354956873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 56786.228257359704,
            "unit": "ns/iter",
            "extra": "iterations: 12372\ncpu: 56784.14969285494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 135135.49951747246,
            "unit": "ns/iter",
            "extra": "iterations: 5181\ncpu: 135135.3213665319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 34968.5127205466,
            "unit": "ns/iter",
            "extra": "iterations: 20007\ncpu: 34967.25646023889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 34830.56171059255,
            "unit": "ns/iter",
            "extra": "iterations: 20110\ncpu: 34830.19393336654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34870.2819082721,
            "unit": "ns/iter",
            "extra": "iterations: 20081\ncpu: 34869.130023404796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72466.3306025024,
            "unit": "ns/iter",
            "extra": "iterations: 9643\ncpu: 72466.19309343552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63204.728373866856,
            "unit": "ns/iter",
            "extra": "iterations: 11063\ncpu: 63203.263129349296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 17652.266291595362,
            "unit": "ns/iter",
            "extra": "iterations: 39637\ncpu: 17652.25925271813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 84592.00060343133,
            "unit": "ns/iter",
            "extra": "iterations: 8286\ncpu: 84589.80207579037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 68011.72150789257,
            "unit": "ns/iter",
            "extra": "iterations: 10266\ncpu: 68009.05902980764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 67691.72918882089,
            "unit": "ns/iter",
            "extra": "iterations: 10343\ncpu: 67690.77637049221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 70370.53969848492,
            "unit": "ns/iter",
            "extra": "iterations: 9950\ncpu: 70367.93969849189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 135362.08793970136,
            "unit": "ns/iter",
            "extra": "iterations: 5174\ncpu: 135361.88635485177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 586938.0980720428,
            "unit": "ns/iter",
            "extra": "iterations: 1193\ncpu: 586922.1290863323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 489313.4144968166,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 489312.737508789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 487710.47928173834,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 487651.2430939234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 497391.55003544927,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 497357.06174591824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 323051.11080331187,
            "unit": "ns/iter",
            "extra": "iterations: 2166\ncpu: 323019.1135734079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 482803.934482788,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 482794.8275862057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18573.61019867782,
            "unit": "ns/iter",
            "extra": "iterations: 37750\ncpu: 18572.25695364257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 85259.78006579842,
            "unit": "ns/iter",
            "extra": "iterations: 8207\ncpu: 85251.80943097343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 68902.53105956617,
            "unit": "ns/iter",
            "extra": "iterations: 10174\ncpu: 68895.50815805006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 68144.60764665794,
            "unit": "ns/iter",
            "extra": "iterations: 10279\ncpu: 68143.73966339185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 69730.81468566862,
            "unit": "ns/iter",
            "extra": "iterations: 10037\ncpu: 69730.81598087115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 135006.120813168,
            "unit": "ns/iter",
            "extra": "iterations: 5165\ncpu: 134992.95256534478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 586274.9145728704,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 586228.3919598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 493943.85804639396,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 493885.9451862262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 482803.6204278966,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 482794.1338854385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 492847.3638283111,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 492839.408866998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 318962.1317474832,
            "unit": "ns/iter",
            "extra": "iterations: 2186\ncpu: 318946.61482159444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 475239.6659877935,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 475230.68567549577 ns\nthreads: 1"
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
        "date": 1705958395598,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8021.573151854414,
            "unit": "ns/iter",
            "extra": "iterations: 87209\ncpu: 8021.074659725487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71136.86291607072,
            "unit": "ns/iter",
            "extra": "iterations: 11927\ncpu: 71134.20809927056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136499.88418255854,
            "unit": "ns/iter",
            "extra": "iterations: 6398\ncpu: 136493.10722100656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 200671.75554528373,
            "unit": "ns/iter",
            "extra": "iterations: 4328\ncpu: 200665.52680221814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 264562.5078835615,
            "unit": "ns/iter",
            "extra": "iterations: 3298\ncpu: 264548.87810794404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 325187.11567446205,
            "unit": "ns/iter",
            "extra": "iterations: 2654\ncpu: 325173.09721175587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 387456.88153779024,
            "unit": "ns/iter",
            "extra": "iterations: 2237\ncpu: 387442.42288779625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 449305.7884416811,
            "unit": "ns/iter",
            "extra": "iterations: 1938\ncpu: 449296.64602683164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 512877.7119341394,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 512876.3668430337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5801.810380971247,
            "unit": "ns/iter",
            "extra": "iterations: 121164\ncpu: 5801.694397675869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4914.973494798693,
            "unit": "ns/iter",
            "extra": "iterations: 143519\ncpu: 4914.995923884638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4949.71938759914,
            "unit": "ns/iter",
            "extra": "iterations: 130764\ncpu: 4949.503686029795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5108.533019999868,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5108.559999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8330.138195526253,
            "unit": "ns/iter",
            "extra": "iterations: 84091\ncpu: 8330.093589088016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 26347.907207528544,
            "unit": "ns/iter",
            "extra": "iterations: 31037\ncpu: 26347.572252472823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 110684.46095163406,
            "unit": "ns/iter",
            "extra": "iterations: 7734\ncpu: 110684.94957331264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 88223.75291567754,
            "unit": "ns/iter",
            "extra": "iterations: 9689\ncpu: 88222.47910001031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 87233.0254679388,
            "unit": "ns/iter",
            "extra": "iterations: 9777\ncpu: 87231.72752378033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 88242.19579121291,
            "unit": "ns/iter",
            "extra": "iterations: 9694\ncpu: 88237.94099442972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 237558.7399397659,
            "unit": "ns/iter",
            "extra": "iterations: 3653\ncpu: 237550.67068163113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2011664.250540078,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2011551.1879049644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1654095.9358290543,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1654015.1515151549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1642149.6943462924,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1642069.7879858667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1691312.32604731,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1691271.7668488151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1004821.4110628808,
            "unit": "ns/iter",
            "extra": "iterations: 922\ncpu: 1004755.748373103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1617501.2447915785,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1617440.9722222232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6782880.429999523,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6781778.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3836649.277550629,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3836558.775510213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8348029.696969315,
            "unit": "ns/iter",
            "extra": "iterations: 132\ncpu: 8347706.818181826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 26799.618803362977,
            "unit": "ns/iter",
            "extra": "iterations: 30803\ncpu: 26799.276044541144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 110072.8327924208,
            "unit": "ns/iter",
            "extra": "iterations: 7703\ncpu: 110072.28352589917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 89085.05109335449,
            "unit": "ns/iter",
            "extra": "iterations: 9512\ncpu: 89085.46047098412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 88987.69342683307,
            "unit": "ns/iter",
            "extra": "iterations: 9554\ncpu: 88986.36173330554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 89811.38813901356,
            "unit": "ns/iter",
            "extra": "iterations: 9409\ncpu: 89811.06387501326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 236833.45678336787,
            "unit": "ns/iter",
            "extra": "iterations: 3656\ncpu: 236833.041575493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2025703.6579520698,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2025712.2004357323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1668091.639785017,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1668046.5949820708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1652937.1207816182,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1652897.5133214921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1692159.6479128583,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1692167.8765880177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1003995.6904762079,
            "unit": "ns/iter",
            "extra": "iterations: 924\ncpu: 1003981.8181818182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1627841.3937282206,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1627848.780487807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6812355.480000179,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6812146.000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3855097.7078187885,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3854986.8312757174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 25079.480300935764,
            "unit": "ns/iter",
            "extra": "iterations: 32565\ncpu: 25078.24044219255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 111597.93499544165,
            "unit": "ns/iter",
            "extra": "iterations: 7661\ncpu: 111593.5125962673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 88511.0551344663,
            "unit": "ns/iter",
            "extra": "iterations: 9631\ncpu: 88508.19229571195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 86969.69544901192,
            "unit": "ns/iter",
            "extra": "iterations: 9844\ncpu: 86965.77610727352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 87585.42078029449,
            "unit": "ns/iter",
            "extra": "iterations: 9663\ncpu: 87582.7279312839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 234589.42791575534,
            "unit": "ns/iter",
            "extra": "iterations: 3704\ncpu: 234579.42764578876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2034850.0262580134,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2034788.402625816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1670733.344086023,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1670682.9749103922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1658716.11387907,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1658601.067615663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1683336.0108695321,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1683272.4637681155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 997491.4801715715,
            "unit": "ns/iter",
            "extra": "iterations: 933\ncpu: 997443.3011789909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1621416.5905922807,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1621375.0871080107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2873.2431038727527,
            "unit": "ns/iter",
            "extra": "iterations: 243760\ncpu: 2873.06941253691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14608.79917844619,
            "unit": "ns/iter",
            "extra": "iterations: 47958\ncpu: 14608.21135159936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 10944.222809099594,
            "unit": "ns/iter",
            "extra": "iterations: 63992\ncpu: 10943.789848731034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11179.639429746807,
            "unit": "ns/iter",
            "extra": "iterations: 62709\ncpu: 11179.51490216721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9605.151792565855,
            "unit": "ns/iter",
            "extra": "iterations: 72968\ncpu: 9605.195428132918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 54837.530081686586,
            "unit": "ns/iter",
            "extra": "iterations: 12732\ncpu: 54834.77851083843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 133552.1876072424,
            "unit": "ns/iter",
            "extra": "iterations: 5245\ncpu: 133545.30028598724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35143.734898155846,
            "unit": "ns/iter",
            "extra": "iterations: 19981\ncpu: 35141.50943396227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 34411.11678473251,
            "unit": "ns/iter",
            "extra": "iterations: 20328\ncpu: 34410.32073986639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34920.59860488222,
            "unit": "ns/iter",
            "extra": "iterations: 20070\ncpu: 34918.45042351734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71370.21221700533,
            "unit": "ns/iter",
            "extra": "iterations: 9806\ncpu: 71367.42810524108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63210.18862113114,
            "unit": "ns/iter",
            "extra": "iterations: 11038\ncpu: 63207.54665700425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18180.5198462177,
            "unit": "ns/iter",
            "extra": "iterations: 38496\ncpu: 18179.76672901079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 86404.50012358587,
            "unit": "ns/iter",
            "extra": "iterations: 8092\ncpu: 86403.62086010844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 70086.256276879,
            "unit": "ns/iter",
            "extra": "iterations: 9997\ncpu: 70082.15464639448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 67969.08860882309,
            "unit": "ns/iter",
            "extra": "iterations: 10315\ncpu: 67965.98158022278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 70092.83992841051,
            "unit": "ns/iter",
            "extra": "iterations: 10058\ncpu: 70087.91012129647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 132597.41062984287,
            "unit": "ns/iter",
            "extra": "iterations: 5287\ncpu: 132591.50747115386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 572517.2781402981,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 572514.0293637783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 483765.99308434845,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 483746.74965422077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 479312.286694103,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 479288.5459533619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 486441.4182324027,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 486431.94154488103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 315339.42812074703,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 315301.7575484463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 474679.7178619331,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 474673.61299052095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18533.07646093582,
            "unit": "ns/iter",
            "extra": "iterations: 37784\ncpu: 18532.669913190486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 88460.89431716433,
            "unit": "ns/iter",
            "extra": "iterations: 7901\ncpu: 88457.33451461981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 70726.8365966926,
            "unit": "ns/iter",
            "extra": "iterations: 9908\ncpu: 70723.13282196238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 68683.92831366743,
            "unit": "ns/iter",
            "extra": "iterations: 10253\ncpu: 68681.45908514666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 69968.99660102463,
            "unit": "ns/iter",
            "extra": "iterations: 10003\ncpu: 69968.12956113128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 133058.6517195602,
            "unit": "ns/iter",
            "extra": "iterations: 5263\ncpu: 133053.61960858823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 573318.9026185801,
            "unit": "ns/iter",
            "extra": "iterations: 1222\ncpu: 573296.153846162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 480732.0454545311,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 480714.39393939206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 475488.3908905059,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 475486.5397688624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 487885.1220362648,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 487864.2956764308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 317566.6339691524,
            "unit": "ns/iter",
            "extra": "iterations: 2202\ncpu: 317550.9990917331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 475480.5960624207,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 475456.2118126229 ns\nthreads: 1"
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
        "date": 1705959878154,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7564.38087411638,
            "unit": "ns/iter",
            "extra": "iterations: 92482\ncpu: 7563.8924331221215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 69450.24120808297,
            "unit": "ns/iter",
            "extra": "iterations: 12284\ncpu: 69448.10322370564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 132569.82420091165,
            "unit": "ns/iter",
            "extra": "iterations: 6570\ncpu: 132558.66057838663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 195145.50923424173,
            "unit": "ns/iter",
            "extra": "iterations: 4440\ncpu: 195138.22072072068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 258776.82068142132,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 258764.7638971907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 320468.16437845427,
            "unit": "ns/iter",
            "extra": "iterations: 2695\ncpu: 320455.47309833014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 381113.8284463974,
            "unit": "ns/iter",
            "extra": "iterations: 2285\ncpu: 381093.0853391684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 446570.726717544,
            "unit": "ns/iter",
            "extra": "iterations: 1965\ncpu: 446557.30279898236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 505254.1649244724,
            "unit": "ns/iter",
            "extra": "iterations: 1722\ncpu: 505239.14053426246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5644.738643966656,
            "unit": "ns/iter",
            "extra": "iterations: 124053\ncpu: 5644.448743682142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4729.70920434313,
            "unit": "ns/iter",
            "extra": "iterations: 148104\ncpu: 4729.686571598343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4787.946177457669,
            "unit": "ns/iter",
            "extra": "iterations: 146277\ncpu: 4787.921546107731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4718.025221912431,
            "unit": "ns/iter",
            "extra": "iterations: 148482\ncpu: 4717.934833851924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8437.161825676909,
            "unit": "ns/iter",
            "extra": "iterations: 82972\ncpu: 8437.106493756919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 27500.655959764877,
            "unit": "ns/iter",
            "extra": "iterations: 29825\ncpu: 27500.268231349553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 114660.6274324319,
            "unit": "ns/iter",
            "extra": "iterations: 7400\ncpu: 114660.06756756776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 93451.86790585173,
            "unit": "ns/iter",
            "extra": "iterations: 9092\ncpu: 93450.08798944135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 96213.41819842302,
            "unit": "ns/iter",
            "extra": "iterations: 8759\ncpu: 96211.19990866534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 92857.92509653508,
            "unit": "ns/iter",
            "extra": "iterations: 9065\ncpu: 92856.75675675667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 249462.72444570574,
            "unit": "ns/iter",
            "extra": "iterations: 3473\ncpu: 249454.85171321646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2052513.9426049474,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2052494.0397351042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1688344.818511766,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1688323.7749546294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1672395.5949819894,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1672362.5448028701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1688401.7649184878,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1688390.7775768538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1030051.5858249523,
            "unit": "ns/iter",
            "extra": "iterations: 903\ncpu: 1030017.607973423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1639640.4495575535,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1639612.2123893772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6947877.939999217,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6947679.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3953647.457627208,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3953529.237288138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8383528.492307644,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 8383143.846153839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 27114.295712175594,
            "unit": "ns/iter",
            "extra": "iterations: 30435\ncpu: 27114.023328404797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 114685.7556910571,
            "unit": "ns/iter",
            "extra": "iterations: 7380\ncpu: 114683.11653116521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 98204.204611297,
            "unit": "ns/iter",
            "extra": "iterations: 8631\ncpu: 98204.68080176073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 97942.26129439914,
            "unit": "ns/iter",
            "extra": "iterations: 8699\ncpu: 97938.02735946703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 95409.20573891592,
            "unit": "ns/iter",
            "extra": "iterations: 8817\ncpu: 95402.69933083776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 253174.5152224874,
            "unit": "ns/iter",
            "extra": "iterations: 3416\ncpu: 253162.14871194478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2060825.9223948047,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 2060735.920177381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1694979.3970854878,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1694928.5974499127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1695984.214545454,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1695852.3636363572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1697654.3825136744,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1697536.9763205887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1027966.8301886023,
            "unit": "ns/iter",
            "extra": "iterations: 901\ncpu: 1027911.7647058864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1650798.5222025008,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1650688.9875666078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6998329.389999753,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6997926.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4058523.017241296,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4058374.137931037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 26064.172307303154,
            "unit": "ns/iter",
            "extra": "iterations: 31409\ncpu: 26063.96892610411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 113077.02277905018,
            "unit": "ns/iter",
            "extra": "iterations: 7463\ncpu: 113075.2780383225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 93167.39193853043,
            "unit": "ns/iter",
            "extra": "iterations: 8981\ncpu: 93166.86337824298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 92945.89597166411,
            "unit": "ns/iter",
            "extra": "iterations: 9036\ncpu: 92944.02390438243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 94071.62674717532,
            "unit": "ns/iter",
            "extra": "iterations: 8943\ncpu: 94070.87107234768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 249628.02890171838,
            "unit": "ns/iter",
            "extra": "iterations: 3460\ncpu: 249618.43930635834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2070423.093750051,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2070417.6339285832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1693010.3941604516,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1692976.8248175129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1693540.914389708,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1693510.746812374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1704061.0383913005,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1704022.4862888518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1027763.868508383,
            "unit": "ns/iter",
            "extra": "iterations: 905\ncpu: 1027739.226519337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1656792.2459892426,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1656739.3939393917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2944.0326096074973,
            "unit": "ns/iter",
            "extra": "iterations: 238488\ncpu: 2943.9607024252814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15537.074145035445,
            "unit": "ns/iter",
            "extra": "iterations: 44885\ncpu: 15535.853848724653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11966.376540152163,
            "unit": "ns/iter",
            "extra": "iterations: 58517\ncpu: 11965.922723311127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12164.40847135168,
            "unit": "ns/iter",
            "extra": "iterations: 57299\ncpu: 12164.311768093703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10174.645080095297,
            "unit": "ns/iter",
            "extra": "iterations: 68731\ncpu: 10174.518048624348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58570.55003756153,
            "unit": "ns/iter",
            "extra": "iterations: 11981\ncpu: 58567.70720307144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 135097.35391741435,
            "unit": "ns/iter",
            "extra": "iterations: 5182\ncpu: 135089.38633732148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35185.450264684805,
            "unit": "ns/iter",
            "extra": "iterations: 19835\ncpu: 35184.113940005256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35154.90569823414,
            "unit": "ns/iter",
            "extra": "iterations: 19936\ncpu: 35154.60473515232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35003.9748071693,
            "unit": "ns/iter",
            "extra": "iterations: 19966\ncpu: 35002.4541720925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72227.74337286671,
            "unit": "ns/iter",
            "extra": "iterations: 9695\ncpu: 72227.23053120168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63483.625079161415,
            "unit": "ns/iter",
            "extra": "iterations: 11053\ncpu: 63481.67013480524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 17365.256153100523,
            "unit": "ns/iter",
            "extra": "iterations: 40183\ncpu: 17364.8159669511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 82593.49422032764,
            "unit": "ns/iter",
            "extra": "iterations: 8478\ncpu: 82593.85468270887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 67292.93207437424,
            "unit": "ns/iter",
            "extra": "iterations: 10379\ncpu: 67291.34791405704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 67039.06201550068,
            "unit": "ns/iter",
            "extra": "iterations: 10449\ncpu: 67037.25715379475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 68679.55539214965,
            "unit": "ns/iter",
            "extra": "iterations: 10200\ncpu: 68677.69607843159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 132472.63818526088,
            "unit": "ns/iter",
            "extra": "iterations: 5290\ncpu: 132468.90359168264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 581787.7363184209,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 581790.4643449509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 490554.48563416454,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 490537.56131745235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 495172.2715877508,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 495157.10306407075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 493176.6401151678,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 493162.3800383888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 319621.3680841162,
            "unit": "ns/iter",
            "extra": "iterations: 2187\ncpu: 319622.72519433417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 479801.0685401078,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 479787.59424263204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 17407.507836053213,
            "unit": "ns/iter",
            "extra": "iterations: 40135\ncpu: 17407.32776878032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 82547.114703802,
            "unit": "ns/iter",
            "extra": "iterations: 8474\ncpu: 82545.92872315361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 67102.91741093056,
            "unit": "ns/iter",
            "extra": "iterations: 10413\ncpu: 67102.38163833693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 67319.82169946616,
            "unit": "ns/iter",
            "extra": "iterations: 10415\ncpu: 67319.27028324478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 68978.5001470936,
            "unit": "ns/iter",
            "extra": "iterations: 10197\ncpu: 68976.55192703698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 132190.82574896913,
            "unit": "ns/iter",
            "extra": "iterations: 5274\ncpu: 132189.95070155433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 575961.206414408,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 575942.3519736859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 485843.24495478556,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 485839.94432846725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 488563.52653627814,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 488546.92737429775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 492157.40308986476,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 492154.91573033296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 317349.84291534324,
            "unit": "ns/iter",
            "extra": "iterations: 2209\ncpu: 317343.0058850148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 478993.24812030216,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 478974.7095010227 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}