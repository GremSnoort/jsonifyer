window.BENCHMARK_DATA = {
  "lastUpdate": 1702490279733,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-16 22.04 Debug c++-17": [
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
        "date": 1702490278306,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6621.903772692369,
            "unit": "ns/iter",
            "extra": "iterations: 105760\ncpu: 6621.715204236008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57057.731847086194,
            "unit": "ns/iter",
            "extra": "iterations: 14309\ncpu: 57054.58802152492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 89922.41613410992,
            "unit": "ns/iter",
            "extra": "iterations: 9545\ncpu: 89915.61026715559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 130101.0337163633,
            "unit": "ns/iter",
            "extra": "iterations: 6614\ncpu: 130095.78167523432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 171431.18178218722,
            "unit": "ns/iter",
            "extra": "iterations: 5050\ncpu: 171423.44554455442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 211814.202831325,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 211801.7817915548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 253291.70915986339,
            "unit": "ns/iter",
            "extra": "iterations: 3428\ncpu: 253273.13302217037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 292883.9138804287,
            "unit": "ns/iter",
            "extra": "iterations: 2961\ncpu: 292870.6855791963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 334577.4863513986,
            "unit": "ns/iter",
            "extra": "iterations: 2601\ncpu: 334573.6639753941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5562.471378921054,
            "unit": "ns/iter",
            "extra": "iterations: 126026\ncpu: 5562.395854823609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4479.221034673827,
            "unit": "ns/iter",
            "extra": "iterations: 157093\ncpu: 4479.193853322552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4500.957464204622,
            "unit": "ns/iter",
            "extra": "iterations: 155328\ncpu: 4500.876854140915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4431.3375050459845,
            "unit": "ns/iter",
            "extra": "iterations: 158528\ncpu: 4431.40707004441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7079.024542437867,
            "unit": "ns/iter",
            "extra": "iterations: 98238\ncpu: 7078.836091939983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24814.969178604766,
            "unit": "ns/iter",
            "extra": "iterations: 32737\ncpu: 24814.95555487671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 116922.24524168714,
            "unit": "ns/iter",
            "extra": "iterations: 7303\ncpu: 116921.00506641113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 89743.49100910034,
            "unit": "ns/iter",
            "extra": "iterations: 9454\ncpu: 89743.37846414215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 89747.52202318046,
            "unit": "ns/iter",
            "extra": "iterations: 9490\ncpu: 89744.97365648045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 86585.77373902185,
            "unit": "ns/iter",
            "extra": "iterations: 9794\ncpu: 86586.39983663474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 184055.09275834297,
            "unit": "ns/iter",
            "extra": "iterations: 4916\ncpu: 184047.03010577697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1640310.3634752613,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1640263.4751773076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1279722.098900975,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1279695.4670329674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1294635.90782127,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1294587.430167597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1287940.405555648,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1287939.5833333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 709660.9476116836,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 709672.0338983033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1248993.1763123155,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 1248970.6594885578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 29541.066381848945,
            "unit": "ns/iter",
            "extra": "iterations: 27854\ncpu: 29538.960292956068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 152294.34140306155,
            "unit": "ns/iter",
            "extra": "iterations: 5659\ncpu: 152283.65435589358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 116608.58852324773,
            "unit": "ns/iter",
            "extra": "iterations: 7354\ncpu: 116602.77400054391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 119073.90222038433,
            "unit": "ns/iter",
            "extra": "iterations: 7251\ncpu: 119071.82457592011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 113167.82182921626,
            "unit": "ns/iter",
            "extra": "iterations: 7577\ncpu: 113164.39223967261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 198868.89080458556,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 198867.9999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1686552.1934901886,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1686467.2694394225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1305936.0434783094,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1305871.2482468484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1328211.3465908905,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1328118.4659090883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1324004.817403723,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1323957.061340942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 734660.1508688735,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 734620.6161137429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1282127.3539944221,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1282007.5757575748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6059351.300653397,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6058966.013071886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2842447.9664634853,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2842346.036585375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26852.993790434884,
            "unit": "ns/iter",
            "extra": "iterations: 30759\ncpu: 26852.80405734911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 111379.44029076837,
            "unit": "ns/iter",
            "extra": "iterations: 7704\ncpu: 111378.9460020767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 90319.42825419782,
            "unit": "ns/iter",
            "extra": "iterations: 9457\ncpu: 90317.3416516862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 88181.71939562309,
            "unit": "ns/iter",
            "extra": "iterations: 9729\ncpu: 88177.89084181288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 91317.64680124124,
            "unit": "ns/iter",
            "extra": "iterations: 9363\ncpu: 91312.29306846083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 178489.2108941339,
            "unit": "ns/iter",
            "extra": "iterations: 4865\ncpu: 178479.23946557066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1658679.6453900225,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1658577.3049645394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1285356.0523414807,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1285288.4297520695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1305952.8569425212,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1305848.246844324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1286695.1244813048,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1286634.7164592035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 732204.0272161195,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 731238.3359253517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1256227.141700305,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 1256247.2334682855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2532.236372059495,
            "unit": "ns/iter",
            "extra": "iterations: 276289\ncpu: 2532.1464119092802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17529.485889416046,
            "unit": "ns/iter",
            "extra": "iterations: 39970\ncpu: 17529.509632224137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14333.88921222893,
            "unit": "ns/iter",
            "extra": "iterations: 48796\ncpu: 14333.019099926329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13586.288436881241,
            "unit": "ns/iter",
            "extra": "iterations: 51474\ncpu: 13585.654893732797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10420.315600126656,
            "unit": "ns/iter",
            "extra": "iterations: 66711\ncpu: 10419.536508222003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63436.575201956475,
            "unit": "ns/iter",
            "extra": "iterations: 11017\ncpu: 63430.5890895889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 105224.48565420645,
            "unit": "ns/iter",
            "extra": "iterations: 6657\ncpu: 105219.45320715012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28220.84362289203,
            "unit": "ns/iter",
            "extra": "iterations: 24831\ncpu: 28220.051548467774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28228.740136769247,
            "unit": "ns/iter",
            "extra": "iterations: 24713\ncpu: 28228.410148504692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28621.901308257013,
            "unit": "ns/iter",
            "extra": "iterations: 24460\ncpu: 28620.797219950888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55335.32973696655,
            "unit": "ns/iter",
            "extra": "iterations: 12698\ncpu: 55334.73775397709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 50351.98142147729,
            "unit": "ns/iter",
            "extra": "iterations: 13887\ncpu: 50347.00079210739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19352.19279538146,
            "unit": "ns/iter",
            "extra": "iterations: 36199\ncpu: 19351.310809690603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 96369.05448275589,
            "unit": "ns/iter",
            "extra": "iterations: 7250\ncpu: 96362.85517241512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 79841.87238661382,
            "unit": "ns/iter",
            "extra": "iterations: 8753\ncpu: 79839.3465097684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 78854.8252394321,
            "unit": "ns/iter",
            "extra": "iterations: 8875\ncpu: 78853.88169014233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 79055.21751890254,
            "unit": "ns/iter",
            "extra": "iterations: 8859\ncpu: 79048.31245061496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 119487.08655490915,
            "unit": "ns/iter",
            "extra": "iterations: 5846\ncpu: 119479.30208689692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 483935.587950139,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 483913.157894739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 395286.97178327246,
            "unit": "ns/iter",
            "extra": "iterations: 1772\ncpu: 395284.7629796905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 393824.64449415787,
            "unit": "ns/iter",
            "extra": "iterations: 1789\ncpu: 393816.3219675834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 406935.73957163893,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 406905.3551296491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 251513.94208630576,
            "unit": "ns/iter",
            "extra": "iterations: 2780\ncpu: 251489.20863309348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 388279.9174515415,
            "unit": "ns/iter",
            "extra": "iterations: 1805\ncpu: 388249.75069251686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20025.64153921365,
            "unit": "ns/iter",
            "extra": "iterations: 34849\ncpu: 20024.25033716901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 94846.03705707486,
            "unit": "ns/iter",
            "extra": "iterations: 7394\ncpu: 94845.37462807643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 78959.10615974323,
            "unit": "ns/iter",
            "extra": "iterations: 8864\ncpu: 78959.03655234758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 79106.59398326826,
            "unit": "ns/iter",
            "extra": "iterations: 8842\ncpu: 79099.66071024678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 78736.76655481227,
            "unit": "ns/iter",
            "extra": "iterations: 8940\ncpu: 78731.364653244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 118098.7346043614,
            "unit": "ns/iter",
            "extra": "iterations: 5927\ncpu: 118089.26944491283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 483007.7618394392,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 482979.68428277277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 391106.7812499677,
            "unit": "ns/iter",
            "extra": "iterations: 1792\ncpu: 391072.5446428549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 395070.91124923923,
            "unit": "ns/iter",
            "extra": "iterations: 1769\ncpu: 395061.33408705576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 390289.02634530247,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 390295.17937220156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 255064.17219990102,
            "unit": "ns/iter",
            "extra": "iterations: 2741\ncpu: 255059.79569499733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 386874.69745575555,
            "unit": "ns/iter",
            "extra": "iterations: 1808\ncpu: 386870.68584070756 ns\nthreads: 1"
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
        "date": 1702490278306,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6621.903772692369,
            "unit": "ns/iter",
            "extra": "iterations: 105760\ncpu: 6621.715204236008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57057.731847086194,
            "unit": "ns/iter",
            "extra": "iterations: 14309\ncpu: 57054.58802152492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 89922.41613410992,
            "unit": "ns/iter",
            "extra": "iterations: 9545\ncpu: 89915.61026715559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 130101.0337163633,
            "unit": "ns/iter",
            "extra": "iterations: 6614\ncpu: 130095.78167523432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 171431.18178218722,
            "unit": "ns/iter",
            "extra": "iterations: 5050\ncpu: 171423.44554455442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 211814.202831325,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 211801.7817915548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 253291.70915986339,
            "unit": "ns/iter",
            "extra": "iterations: 3428\ncpu: 253273.13302217037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 292883.9138804287,
            "unit": "ns/iter",
            "extra": "iterations: 2961\ncpu: 292870.6855791963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 334577.4863513986,
            "unit": "ns/iter",
            "extra": "iterations: 2601\ncpu: 334573.6639753941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5562.471378921054,
            "unit": "ns/iter",
            "extra": "iterations: 126026\ncpu: 5562.395854823609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4479.221034673827,
            "unit": "ns/iter",
            "extra": "iterations: 157093\ncpu: 4479.193853322552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4500.957464204622,
            "unit": "ns/iter",
            "extra": "iterations: 155328\ncpu: 4500.876854140915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4431.3375050459845,
            "unit": "ns/iter",
            "extra": "iterations: 158528\ncpu: 4431.40707004441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7079.024542437867,
            "unit": "ns/iter",
            "extra": "iterations: 98238\ncpu: 7078.836091939983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24814.969178604766,
            "unit": "ns/iter",
            "extra": "iterations: 32737\ncpu: 24814.95555487671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 116922.24524168714,
            "unit": "ns/iter",
            "extra": "iterations: 7303\ncpu: 116921.00506641113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 89743.49100910034,
            "unit": "ns/iter",
            "extra": "iterations: 9454\ncpu: 89743.37846414215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 89747.52202318046,
            "unit": "ns/iter",
            "extra": "iterations: 9490\ncpu: 89744.97365648045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 86585.77373902185,
            "unit": "ns/iter",
            "extra": "iterations: 9794\ncpu: 86586.39983663474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 184055.09275834297,
            "unit": "ns/iter",
            "extra": "iterations: 4916\ncpu: 184047.03010577697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1640310.3634752613,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1640263.4751773076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1279722.098900975,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1279695.4670329674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1294635.90782127,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1294587.430167597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1287940.405555648,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1287939.5833333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 709660.9476116836,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 709672.0338983033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1248993.1763123155,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 1248970.6594885578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 29541.066381848945,
            "unit": "ns/iter",
            "extra": "iterations: 27854\ncpu: 29538.960292956068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 152294.34140306155,
            "unit": "ns/iter",
            "extra": "iterations: 5659\ncpu: 152283.65435589358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 116608.58852324773,
            "unit": "ns/iter",
            "extra": "iterations: 7354\ncpu: 116602.77400054391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 119073.90222038433,
            "unit": "ns/iter",
            "extra": "iterations: 7251\ncpu: 119071.82457592011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 113167.82182921626,
            "unit": "ns/iter",
            "extra": "iterations: 7577\ncpu: 113164.39223967261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 198868.89080458556,
            "unit": "ns/iter",
            "extra": "iterations: 4350\ncpu: 198867.9999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1686552.1934901886,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1686467.2694394225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1305936.0434783094,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1305871.2482468484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1328211.3465908905,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1328118.4659090883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1324004.817403723,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1323957.061340942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 734660.1508688735,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 734620.6161137429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1282127.3539944221,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1282007.5757575748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6059351.300653397,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6058966.013071886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2842447.9664634853,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2842346.036585375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26852.993790434884,
            "unit": "ns/iter",
            "extra": "iterations: 30759\ncpu: 26852.80405734911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 111379.44029076837,
            "unit": "ns/iter",
            "extra": "iterations: 7704\ncpu: 111378.9460020767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 90319.42825419782,
            "unit": "ns/iter",
            "extra": "iterations: 9457\ncpu: 90317.3416516862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 88181.71939562309,
            "unit": "ns/iter",
            "extra": "iterations: 9729\ncpu: 88177.89084181288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 91317.64680124124,
            "unit": "ns/iter",
            "extra": "iterations: 9363\ncpu: 91312.29306846083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 178489.2108941339,
            "unit": "ns/iter",
            "extra": "iterations: 4865\ncpu: 178479.23946557066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1658679.6453900225,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1658577.3049645394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1285356.0523414807,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1285288.4297520695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1305952.8569425212,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1305848.246844324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1286695.1244813048,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1286634.7164592035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 732204.0272161195,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 731238.3359253517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1256227.141700305,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 1256247.2334682855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2532.236372059495,
            "unit": "ns/iter",
            "extra": "iterations: 276289\ncpu: 2532.1464119092802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17529.485889416046,
            "unit": "ns/iter",
            "extra": "iterations: 39970\ncpu: 17529.509632224137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14333.88921222893,
            "unit": "ns/iter",
            "extra": "iterations: 48796\ncpu: 14333.019099926329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13586.288436881241,
            "unit": "ns/iter",
            "extra": "iterations: 51474\ncpu: 13585.654893732797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10420.315600126656,
            "unit": "ns/iter",
            "extra": "iterations: 66711\ncpu: 10419.536508222003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63436.575201956475,
            "unit": "ns/iter",
            "extra": "iterations: 11017\ncpu: 63430.5890895889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 105224.48565420645,
            "unit": "ns/iter",
            "extra": "iterations: 6657\ncpu: 105219.45320715012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28220.84362289203,
            "unit": "ns/iter",
            "extra": "iterations: 24831\ncpu: 28220.051548467774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28228.740136769247,
            "unit": "ns/iter",
            "extra": "iterations: 24713\ncpu: 28228.410148504692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28621.901308257013,
            "unit": "ns/iter",
            "extra": "iterations: 24460\ncpu: 28620.797219950888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55335.32973696655,
            "unit": "ns/iter",
            "extra": "iterations: 12698\ncpu: 55334.73775397709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 50351.98142147729,
            "unit": "ns/iter",
            "extra": "iterations: 13887\ncpu: 50347.00079210739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19352.19279538146,
            "unit": "ns/iter",
            "extra": "iterations: 36199\ncpu: 19351.310809690603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 96369.05448275589,
            "unit": "ns/iter",
            "extra": "iterations: 7250\ncpu: 96362.85517241512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 79841.87238661382,
            "unit": "ns/iter",
            "extra": "iterations: 8753\ncpu: 79839.3465097684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 78854.8252394321,
            "unit": "ns/iter",
            "extra": "iterations: 8875\ncpu: 78853.88169014233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 79055.21751890254,
            "unit": "ns/iter",
            "extra": "iterations: 8859\ncpu: 79048.31245061496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 119487.08655490915,
            "unit": "ns/iter",
            "extra": "iterations: 5846\ncpu: 119479.30208689692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 483935.587950139,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 483913.157894739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 395286.97178327246,
            "unit": "ns/iter",
            "extra": "iterations: 1772\ncpu: 395284.7629796905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 393824.64449415787,
            "unit": "ns/iter",
            "extra": "iterations: 1789\ncpu: 393816.3219675834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 406935.73957163893,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 406905.3551296491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 251513.94208630576,
            "unit": "ns/iter",
            "extra": "iterations: 2780\ncpu: 251489.20863309348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 388279.9174515415,
            "unit": "ns/iter",
            "extra": "iterations: 1805\ncpu: 388249.75069251686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20025.64153921365,
            "unit": "ns/iter",
            "extra": "iterations: 34849\ncpu: 20024.25033716901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 94846.03705707486,
            "unit": "ns/iter",
            "extra": "iterations: 7394\ncpu: 94845.37462807643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 78959.10615974323,
            "unit": "ns/iter",
            "extra": "iterations: 8864\ncpu: 78959.03655234758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 79106.59398326826,
            "unit": "ns/iter",
            "extra": "iterations: 8842\ncpu: 79099.66071024678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 78736.76655481227,
            "unit": "ns/iter",
            "extra": "iterations: 8940\ncpu: 78731.364653244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 118098.7346043614,
            "unit": "ns/iter",
            "extra": "iterations: 5927\ncpu: 118089.26944491283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 483007.7618394392,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 482979.68428277277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 391106.7812499677,
            "unit": "ns/iter",
            "extra": "iterations: 1792\ncpu: 391072.5446428549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 395070.91124923923,
            "unit": "ns/iter",
            "extra": "iterations: 1769\ncpu: 395061.33408705576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 390289.02634530247,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 390295.17937220156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 255064.17219990102,
            "unit": "ns/iter",
            "extra": "iterations: 2741\ncpu: 255059.79569499733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 386874.69745575555,
            "unit": "ns/iter",
            "extra": "iterations: 1808\ncpu: 386870.68584070756 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}