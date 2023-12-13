window.BENCHMARK_DATA = {
  "lastUpdate": 1702503921294,
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
      }
    ]
  }
}