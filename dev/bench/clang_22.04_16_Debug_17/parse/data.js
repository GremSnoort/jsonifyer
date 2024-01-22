window.BENCHMARK_DATA = {
  "lastUpdate": 1705954983728,
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
        "date": 1702492888654,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6641.768896314684,
            "unit": "ns/iter",
            "extra": "iterations: 105338\ncpu: 6641.2206421234505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56299.46465481743,
            "unit": "ns/iter",
            "extra": "iterations: 14514\ncpu: 56296.41725230811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 88820.04401734834,
            "unit": "ns/iter",
            "extra": "iterations: 9678\ncpu: 88814.51746228561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 128674.01271692677,
            "unit": "ns/iter",
            "extra": "iterations: 6684\ncpu: 128665.4099341711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 170017.84313724696,
            "unit": "ns/iter",
            "extra": "iterations: 5100\ncpu: 170009.3137254902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 210439.615963126,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 210427.12275594386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 249610.0514072236,
            "unit": "ns/iter",
            "extra": "iterations: 3482\ncpu: 249594.42848937417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 291711.1749163655,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 291691.6053511704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 331941.97679726663,
            "unit": "ns/iter",
            "extra": "iterations: 2629\ncpu: 331925.5230125523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5530.9459860743955,
            "unit": "ns/iter",
            "extra": "iterations: 125949\ncpu: 5526.097865008861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4467.1941152218815,
            "unit": "ns/iter",
            "extra": "iterations: 155248\ncpu: 4467.026306297019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4458.0522003284295,
            "unit": "ns/iter",
            "extra": "iterations: 157681\ncpu: 4457.977181778398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4417.775985138364,
            "unit": "ns/iter",
            "extra": "iterations: 157186\ncpu: 4417.759215197283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7070.936719853924,
            "unit": "ns/iter",
            "extra": "iterations: 99020\ncpu: 7070.67360129267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24423.18829783991,
            "unit": "ns/iter",
            "extra": "iterations: 33293\ncpu: 24422.662421530025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 119323.61598222947,
            "unit": "ns/iter",
            "extra": "iterations: 7208\ncpu: 119317.28634850148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 93462.06791004087,
            "unit": "ns/iter",
            "extra": "iterations: 9115\ncpu: 93457.60833790441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 92086.09748460722,
            "unit": "ns/iter",
            "extra": "iterations: 9263\ncpu: 92082.2843571197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 88979.10807142127,
            "unit": "ns/iter",
            "extra": "iterations: 9577\ncpu: 88975.35762764956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 184013.7936938814,
            "unit": "ns/iter",
            "extra": "iterations: 4789\ncpu: 184001.60785132545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1603092.59792009,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1602984.4020797266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1259785.0623305894,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 1259729.4037940395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1266179.055934591,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1266103.9563437952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1264811.8814712446,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 1264753.5422343314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 690761.8412340332,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 690718.8863807373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1225042.0252324184,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 1224969.8539176648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 29714.05597743355,
            "unit": "ns/iter",
            "extra": "iterations: 27654\ncpu: 29711.835539162523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 160208.1086875462,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 160200.0186428037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 122131.40005707128,
            "unit": "ns/iter",
            "extra": "iterations: 7009\ncpu: 122125.66699957184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 122338.17691647536,
            "unit": "ns/iter",
            "extra": "iterations: 6992\ncpu: 122334.23913043507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 117400.95767339427,
            "unit": "ns/iter",
            "extra": "iterations: 7324\ncpu: 117393.33697433103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 203118.77398065582,
            "unit": "ns/iter",
            "extra": "iterations: 4243\ncpu: 203112.75041244403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1638898.734154922,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1638794.3661971781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1305474.8270041735,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1305401.406469766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1329506.8726752945,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1329448.3547925611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1296380.8228730666,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1296303.0683402994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 724930.6209866669,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 724897.0242756471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1260754.5929444155,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1260683.3107191273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5988902.2820508825,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5988735.897435896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2805782.6546544717,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2805661.8618618413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26434.566016036213,
            "unit": "ns/iter",
            "extra": "iterations: 31303\ncpu: 26433.859374500804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 114261.4563391542,
            "unit": "ns/iter",
            "extra": "iterations: 7501\ncpu: 114256.00586588486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 93185.68926123643,
            "unit": "ns/iter",
            "extra": "iterations: 9191\ncpu: 93179.0882384941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 89901.0484142022,
            "unit": "ns/iter",
            "extra": "iterations: 9522\ncpu: 89897.62654904416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93919.89202493984,
            "unit": "ns/iter",
            "extra": "iterations: 9141\ncpu: 93918.40061262462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 182653.32893083885,
            "unit": "ns/iter",
            "extra": "iterations: 4770\ncpu: 182649.22431865794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1632781.5989491772,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1632757.6182136512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1275713.8890411588,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1275637.1232876654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1285599.6234483083,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1285453.2413793101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1272780.6807641168,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1272730.6957708008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 706102.514783963,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 706064.2153146317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1239022.5672435479,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1238974.5672436825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2546.801514133839,
            "unit": "ns/iter",
            "extra": "iterations: 275405\ncpu: 2546.7304515168526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17034.988760764856,
            "unit": "ns/iter",
            "extra": "iterations: 41106\ncpu: 17034.57159538759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13015.516933550036,
            "unit": "ns/iter",
            "extra": "iterations: 53769\ncpu: 13014.422808681482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14010.556682470886,
            "unit": "ns/iter",
            "extra": "iterations: 49989\ncpu: 14009.410070215416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10258.154593406616,
            "unit": "ns/iter",
            "extra": "iterations: 68250\ncpu: 10257.327472527406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 65126.66944753987,
            "unit": "ns/iter",
            "extra": "iterations: 10788\ncpu: 65122.30255839814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 108058.08003709426,
            "unit": "ns/iter",
            "extra": "iterations: 6472\ncpu: 108053.80098887508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28236.61964501917,
            "unit": "ns/iter",
            "extra": "iterations: 24790\ncpu: 28236.15974183147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28277.25058472523,
            "unit": "ns/iter",
            "extra": "iterations: 24798\ncpu: 28276.12710702472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28201.511660749587,
            "unit": "ns/iter",
            "extra": "iterations: 24784\ncpu: 28200.157359586585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56267.830044912,
            "unit": "ns/iter",
            "extra": "iterations: 12468\ncpu: 56265.32723772852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51663.38019524204,
            "unit": "ns/iter",
            "extra": "iterations: 13522\ncpu: 51659.865404526434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19066.660031046766,
            "unit": "ns/iter",
            "extra": "iterations: 36721\ncpu: 19064.919256011497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 95319.96794435449,
            "unit": "ns/iter",
            "extra": "iterations: 7331\ncpu: 95313.61342245246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 77702.8615897807,
            "unit": "ns/iter",
            "extra": "iterations: 8995\ncpu: 77698.47693162841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 76669.4077733886,
            "unit": "ns/iter",
            "extra": "iterations: 9108\ncpu: 76664.89898989905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 77226.7133561254,
            "unit": "ns/iter",
            "extra": "iterations: 9067\ncpu: 77221.0102569753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 115137.76770491441,
            "unit": "ns/iter",
            "extra": "iterations: 6100\ncpu: 115126.80327868917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 471636.69014082535,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 470689.7384305844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 386177.1999999626,
            "unit": "ns/iter",
            "extra": "iterations: 1820\ncpu: 386167.1978021996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 387336.8864265922,
            "unit": "ns/iter",
            "extra": "iterations: 1805\ncpu: 387324.3767313055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 385130.59023586113,
            "unit": "ns/iter",
            "extra": "iterations: 1823\ncpu: 385125.5074053741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 246057.728104088,
            "unit": "ns/iter",
            "extra": "iterations: 2843\ncpu: 246050.68589518467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 377021.03679656406,
            "unit": "ns/iter",
            "extra": "iterations: 1848\ncpu: 377014.12337662466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 19890.85182869823,
            "unit": "ns/iter",
            "extra": "iterations: 35189\ncpu: 19890.13043848943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 93935.32399464563,
            "unit": "ns/iter",
            "extra": "iterations: 7460\ncpu: 93932.2788203762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 77422.90650900833,
            "unit": "ns/iter",
            "extra": "iterations: 9049\ncpu: 77420.67631782583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 77851.61262665024,
            "unit": "ns/iter",
            "extra": "iterations: 8981\ncpu: 77848.51352856169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 77367.3861725638,
            "unit": "ns/iter",
            "extra": "iterations: 9040\ncpu: 77364.0818584066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 116201.1912350545,
            "unit": "ns/iter",
            "extra": "iterations: 6024\ncpu: 116198.33997344137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 465771.6819999677,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 465764.33333333017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 382990.2431394282,
            "unit": "ns/iter",
            "extra": "iterations: 1822\ncpu: 382978.32052689715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 388454.8607103351,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 388447.61376248527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 388458.59116020106,
            "unit": "ns/iter",
            "extra": "iterations: 1810\ncpu: 388445.58011049597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 246751.89749909614,
            "unit": "ns/iter",
            "extra": "iterations: 2839\ncpu: 246747.34061289576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 379983.2331154386,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 379968.1917211279 ns\nthreads: 1"
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
        "date": 1702503922744,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6567.755865006111,
            "unit": "ns/iter",
            "extra": "iterations: 106138\ncpu: 6567.48195745162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56123.961765920976,
            "unit": "ns/iter",
            "extra": "iterations: 14542\ncpu: 56122.12212900565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 88227.02261512242,
            "unit": "ns/iter",
            "extra": "iterations: 9728\ncpu: 88223.38610197367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 128779.57258064838,
            "unit": "ns/iter",
            "extra": "iterations: 6696\ncpu: 128771.47550776576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 169141.3863725205,
            "unit": "ns/iter",
            "extra": "iterations: 5122\ncpu: 169135.7672784069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 208903.38253231542,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 208892.72993413033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 249036.84803923097,
            "unit": "ns/iter",
            "extra": "iterations: 3468\ncpu: 249028.5467128027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 289235.62919853907,
            "unit": "ns/iter",
            "extra": "iterations: 3007\ncpu: 289230.6285334217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 329336.36243386334,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 329328.0801209376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5471.975587312547,
            "unit": "ns/iter",
            "extra": "iterations: 129318\ncpu: 5471.867025472083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4477.022927421205,
            "unit": "ns/iter",
            "extra": "iterations: 157497\ncpu: 4476.971624856347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4446.197202850293,
            "unit": "ns/iter",
            "extra": "iterations: 157589\ncpu: 4446.093318696105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4503.542905687057,
            "unit": "ns/iter",
            "extra": "iterations: 154793\ncpu: 4503.4562286408345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7167.030772530801,
            "unit": "ns/iter",
            "extra": "iterations: 97912\ncpu: 7166.554661328536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24154.414658243157,
            "unit": "ns/iter",
            "extra": "iterations: 33401\ncpu: 24153.29780545493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 124425.89587569627,
            "unit": "ns/iter",
            "extra": "iterations: 6886\ncpu: 124420.47632878325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 95956.18716938494,
            "unit": "ns/iter",
            "extra": "iterations: 8885\ncpu: 95951.15362971311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99191.74517329305,
            "unit": "ns/iter",
            "extra": "iterations: 8598\ncpu: 99189.85810653669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 90879.57237332981,
            "unit": "ns/iter",
            "extra": "iterations: 9375\ncpu: 90876.55466666698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 182568.85053896214,
            "unit": "ns/iter",
            "extra": "iterations: 4824\ncpu: 182563.08043117716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1619730.7587410912,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1619681.2937062941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1272847.4677639506,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1272807.2702331962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1277932.78129302,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 1277913.342503439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1274701.1426612872,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1274604.8010973956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 694112.3388554032,
            "unit": "ns/iter",
            "extra": "iterations: 1328\ncpu: 694077.4096385537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1232258.6906667918,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1232198.4000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 29155.282064889358,
            "unit": "ns/iter",
            "extra": "iterations: 28263\ncpu: 29153.918550755465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 165984.41477492094,
            "unit": "ns/iter",
            "extra": "iterations: 5198\ncpu: 165979.1843016543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125254.19003069334,
            "unit": "ns/iter",
            "extra": "iterations: 6841\ncpu: 125247.05452419269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 126996.49307396577,
            "unit": "ns/iter",
            "extra": "iterations: 6786\ncpu: 126989.90568818139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 116646.59697630607,
            "unit": "ns/iter",
            "extra": "iterations: 7342\ncpu: 116640.90166167267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 201783.02448124927,
            "unit": "ns/iter",
            "extra": "iterations: 4289\ncpu: 201775.58871531847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1660954.0142856156,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1660874.2857142773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1301848.2657342476,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1301776.9230769249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1322103.9744316956,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1322044.0340909038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1300133.2569832972,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1300070.9497206628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 722558.7418352084,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 722527.4494556786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1263712.897959095,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1263661.2244898013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5974570.506410624,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 5974305.128205106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2791290.464285469,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2791202.083333346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26836.18101141967,
            "unit": "ns/iter",
            "extra": "iterations: 30650\ncpu: 26835.030995106117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 120999.14938638272,
            "unit": "ns/iter",
            "extra": "iterations: 7089\ncpu: 120993.05966991086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 99490.87489855193,
            "unit": "ns/iter",
            "extra": "iterations: 8625\ncpu: 99489.05507246352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94981.29100121344,
            "unit": "ns/iter",
            "extra": "iterations: 9079\ncpu: 94974.0830487938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 96264.90149053479,
            "unit": "ns/iter",
            "extra": "iterations: 8923\ncpu: 96260.40569315312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 180831.42538557836,
            "unit": "ns/iter",
            "extra": "iterations: 4798\ncpu: 180829.9708211754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1632339.1730768802,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1632308.041958038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1273420.1650751028,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1273376.6712141915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1282979.5564739571,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1282904.2699724576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1268195.2092392163,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1268108.4239130348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 700628.2308845558,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 700591.7541229386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1239725.5915119478,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 1239637.6657824952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2479.9912692010457,
            "unit": "ns/iter",
            "extra": "iterations: 281303\ncpu: 2479.842731858533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17040.947490420447,
            "unit": "ns/iter",
            "extra": "iterations: 40983\ncpu: 17040.184954737448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13794.51236623646,
            "unit": "ns/iter",
            "extra": "iterations: 50743\ncpu: 13794.395286049366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14071.852668169457,
            "unit": "ns/iter",
            "extra": "iterations: 51496\ncpu: 14071.72207550099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10294.37876153101,
            "unit": "ns/iter",
            "extra": "iterations: 67858\ncpu: 10294.376492086434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62761.03442093431,
            "unit": "ns/iter",
            "extra": "iterations: 11156\ncpu: 62761.00752958081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 113786.98210508819,
            "unit": "ns/iter",
            "extra": "iterations: 6147\ncpu: 113786.9529851951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28330.414592688783,
            "unit": "ns/iter",
            "extra": "iterations: 24711\ncpu: 28330.07972158138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28154.522567142154,
            "unit": "ns/iter",
            "extra": "iterations: 24837\ncpu: 28154.50336191954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28082.96665596364,
            "unit": "ns/iter",
            "extra": "iterations: 24922\ncpu: 28081.393949121444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56238.683393644395,
            "unit": "ns/iter",
            "extra": "iterations: 12435\ncpu: 56238.11821471691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52039.1393885523,
            "unit": "ns/iter",
            "extra": "iterations: 13509\ncpu: 52036.14627285542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19167.0541414361,
            "unit": "ns/iter",
            "extra": "iterations: 36497\ncpu: 19165.698550565692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 94120.5459307125,
            "unit": "ns/iter",
            "extra": "iterations: 7446\ncpu: 94109.72334139049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 77597.67246922798,
            "unit": "ns/iter",
            "extra": "iterations: 9019\ncpu: 77592.93713271986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 77510.88392460224,
            "unit": "ns/iter",
            "extra": "iterations: 9020\ncpu: 77508.3259423507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 77845.5639831348,
            "unit": "ns/iter",
            "extra": "iterations: 9018\ncpu: 77844.67731204271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 116798.77987315795,
            "unit": "ns/iter",
            "extra": "iterations: 5992\ncpu: 116790.08678237611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 480927.00615594274,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 480922.6402188808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 391097.6091569085,
            "unit": "ns/iter",
            "extra": "iterations: 1791\ncpu: 391084.701284195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 394020.825514926,
            "unit": "ns/iter",
            "extra": "iterations: 1748\ncpu: 394012.47139588586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 394201.43704936263,
            "unit": "ns/iter",
            "extra": "iterations: 1803\ncpu: 394186.6888519094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 248474.54381623538,
            "unit": "ns/iter",
            "extra": "iterations: 2830\ncpu: 248466.8904593607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 383152.5623631913,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 383132.71334792644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 19823.55735244392,
            "unit": "ns/iter",
            "extra": "iterations: 35308\ncpu: 19822.530304746575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 95018.67861035303,
            "unit": "ns/iter",
            "extra": "iterations: 7340\ncpu: 95012.82016348923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 78098.14459443407,
            "unit": "ns/iter",
            "extra": "iterations: 8963\ncpu: 78096.44092379852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 76940.43550516895,
            "unit": "ns/iter",
            "extra": "iterations: 9086\ncpu: 76936.3196125901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 76853.16538462367,
            "unit": "ns/iter",
            "extra": "iterations: 9100\ncpu: 76847.0219780213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 118272.14767931131,
            "unit": "ns/iter",
            "extra": "iterations: 5925\ncpu: 118263.45991561153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 480553.27079039504,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 480512.3711340208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 384361.7624794416,
            "unit": "ns/iter",
            "extra": "iterations: 1823\ncpu: 384340.9764125044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 389629.5363128118,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 389625.8100558656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 385531.45549451903,
            "unit": "ns/iter",
            "extra": "iterations: 1820\ncpu: 385520.10989010416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 250880.88355428123,
            "unit": "ns/iter",
            "extra": "iterations: 2791\ncpu: 250874.52525975896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 382152.5079538871,
            "unit": "ns/iter",
            "extra": "iterations: 1823\ncpu: 382121.5578716363 ns\nthreads: 1"
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
        "date": 1705575564409,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6682.0028293525165,
            "unit": "ns/iter",
            "extra": "iterations: 104971\ncpu: 6681.543473911843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56626.50308022144,
            "unit": "ns/iter",
            "extra": "iterations: 14447\ncpu: 56622.98747144735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 89117.24503999499,
            "unit": "ns/iter",
            "extra": "iterations: 9627\ncpu: 89113.23361379455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 128313.36892334642,
            "unit": "ns/iter",
            "extra": "iterations: 6706\ncpu: 128304.8911422606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 171392.98427363986,
            "unit": "ns/iter",
            "extra": "iterations: 5087\ncpu: 171379.9685472773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 211047.22298289125,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 211038.28850855754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 250474.20634921305,
            "unit": "ns/iter",
            "extra": "iterations: 3465\ncpu: 250465.19480519462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 293320.3522842772,
            "unit": "ns/iter",
            "extra": "iterations: 2955\ncpu: 293298.8832487307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 332304.0651091674,
            "unit": "ns/iter",
            "extra": "iterations: 2611\ncpu: 332283.7993106094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5479.0404138071635,
            "unit": "ns/iter",
            "extra": "iterations: 127209\ncpu: 5478.730278518026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4528.28491832999,
            "unit": "ns/iter",
            "extra": "iterations: 152198\ncpu: 4528.090382265208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4574.010839459244,
            "unit": "ns/iter",
            "extra": "iterations: 154528\ncpu: 4573.8843445848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4460.885629643624,
            "unit": "ns/iter",
            "extra": "iterations: 154262\ncpu: 4460.691550738356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7214.154087075189,
            "unit": "ns/iter",
            "extra": "iterations: 96744\ncpu: 7213.970892251727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24139.644671256316,
            "unit": "ns/iter",
            "extra": "iterations: 33704\ncpu: 24139.063612627568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 117810.10557385175,
            "unit": "ns/iter",
            "extra": "iterations: 7284\ncpu: 117804.3931905544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 92200.25583153423,
            "unit": "ns/iter",
            "extra": "iterations: 9260\ncpu: 92193.90928725676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 92219.15436097237,
            "unit": "ns/iter",
            "extra": "iterations: 9264\ncpu: 92214.21632124357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 89234.24028083993,
            "unit": "ns/iter",
            "extra": "iterations: 9543\ncpu: 89230.3782877503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 188408.27801539225,
            "unit": "ns/iter",
            "extra": "iterations: 4676\ncpu: 188393.41317365263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1623451.5866899735,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1623340.980735552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1271741.927397147,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1271674.7945205497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1276445.9134615436,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1276390.7967032995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1247051.7466489163,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 1246951.8766756014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 704324.4249809008,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 704266.6412795134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1233550.958776495,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 1233489.361702127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 29536.479287212867,
            "unit": "ns/iter",
            "extra": "iterations: 28171\ncpu: 29534.556813744683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 154465.5319907303,
            "unit": "ns/iter",
            "extra": "iterations: 5611\ncpu: 154452.45054357516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 118925.07402292514,
            "unit": "ns/iter",
            "extra": "iterations: 7241\ncpu: 118918.31238779174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 120677.38112573203,
            "unit": "ns/iter",
            "extra": "iterations: 7142\ncpu: 120673.25679081483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 118587.44364040579,
            "unit": "ns/iter",
            "extra": "iterations: 7186\ncpu: 118582.24325076502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 209479.89320386547,
            "unit": "ns/iter",
            "extra": "iterations: 4120\ncpu: 209472.57281553373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1669467.3942652117,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1669336.200716844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1303339.458741152,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1303280.9790209776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1320455.404829572,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1320391.7613636404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1284363.5247933462,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1284325.2066115725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 729528.8236676757,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 729510.4231974902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1269394.8092643889,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 1269335.2861035415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6020204.432258153,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 6020132.903225776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2820910.1636362406,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2820833.3333333344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25239.375452032153,
            "unit": "ns/iter",
            "extra": "iterations: 32907\ncpu: 25239.06463670344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 113939.39691202344,
            "unit": "ns/iter",
            "extra": "iterations: 7513\ncpu: 113937.94755756613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 92805.66561617117,
            "unit": "ns/iter",
            "extra": "iterations: 9202\ncpu: 92804.56422516881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 90892.9591231602,
            "unit": "ns/iter",
            "extra": "iterations: 9443\ncpu: 90890.18320449047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94218.88688579173,
            "unit": "ns/iter",
            "extra": "iterations: 9097\ncpu: 94216.89567989505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 184032.47288135826,
            "unit": "ns/iter",
            "extra": "iterations: 4720\ncpu: 184022.54237288094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1653453.9111899238,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1653407.4600355264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1281227.2465565568,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1281186.08815427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1297036.1347222417,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1297004.3055555515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1252158.1355704195,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 1252108.8590604004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 718101.0631254767,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 718084.3725943045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1249841.5455763948,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 1249788.337801608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2620.310607837027,
            "unit": "ns/iter",
            "extra": "iterations: 272968\ncpu: 2617.7266199700953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17051.097483125162,
            "unit": "ns/iter",
            "extra": "iterations: 41043\ncpu: 17050.69804838825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13715.55228348916,
            "unit": "ns/iter",
            "extra": "iterations: 51106\ncpu: 13715.326967479354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13756.637606447077,
            "unit": "ns/iter",
            "extra": "iterations: 52374\ncpu: 13755.710848894509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10415.066816137125,
            "unit": "ns/iter",
            "extra": "iterations: 67349\ncpu: 10414.150172979587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66223.65375553441,
            "unit": "ns/iter",
            "extra": "iterations: 10611\ncpu: 66219.02742437157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 110427.79246175109,
            "unit": "ns/iter",
            "extra": "iterations: 6341\ncpu: 110427.77164485135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28169.355740149836,
            "unit": "ns/iter",
            "extra": "iterations: 24799\ncpu: 28168.942296060526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28445.33436067997,
            "unit": "ns/iter",
            "extra": "iterations: 24659\ncpu: 28444.803114481667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28332.431279047032,
            "unit": "ns/iter",
            "extra": "iterations: 24745\ncpu: 28332.442917761164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56459.39871123635,
            "unit": "ns/iter",
            "extra": "iterations: 12415\ncpu: 56458.78372935935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52182.46906789058,
            "unit": "ns/iter",
            "extra": "iterations: 13271\ncpu: 52178.60749001601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 18985.36162582231,
            "unit": "ns/iter",
            "extra": "iterations: 36806\ncpu: 18983.74449817948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 96232.1661597927,
            "unit": "ns/iter",
            "extra": "iterations: 7234\ncpu: 96228.98811169565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 78906.56307068728,
            "unit": "ns/iter",
            "extra": "iterations: 8871\ncpu: 78906.43670386642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 77792.45498837889,
            "unit": "ns/iter",
            "extra": "iterations: 9031\ncpu: 77791.57346916162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 78113.05069793582,
            "unit": "ns/iter",
            "extra": "iterations: 8955\ncpu: 78110.3294249022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 115443.5775978381,
            "unit": "ns/iter",
            "extra": "iterations: 5928\ncpu: 115436.21794871765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 483869.02080441505,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 483868.44660194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 394986.1540632075,
            "unit": "ns/iter",
            "extra": "iterations: 1772\ncpu: 394985.94808126317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 392096.68665919383,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 392083.4080717485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 384739.6958195903,
            "unit": "ns/iter",
            "extra": "iterations: 1818\ncpu: 384718.64686468267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 254767.18556325996,
            "unit": "ns/iter",
            "extra": "iterations: 2743\ncpu: 254771.41815530777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 385097.60264905175,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 385069.53642383835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 19917.750554073038,
            "unit": "ns/iter",
            "extra": "iterations: 35194\ncpu: 19916.49428879947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 95107.38614267476,
            "unit": "ns/iter",
            "extra": "iterations: 7303\ncpu: 95104.24483089127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 79689.61888814782,
            "unit": "ns/iter",
            "extra": "iterations: 8958\ncpu: 79684.00312569704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 77912.20890220371,
            "unit": "ns/iter",
            "extra": "iterations: 9009\ncpu: 77907.89210789175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 78773.54077734366,
            "unit": "ns/iter",
            "extra": "iterations: 8902\ncpu: 78767.69265333598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 116454.93782210904,
            "unit": "ns/iter",
            "extra": "iterations: 6015\ncpu: 116446.60016624929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 479645.99242948485,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 479609.15347556304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 392326.0705882572,
            "unit": "ns/iter",
            "extra": "iterations: 1785\ncpu: 392308.12324930157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 388552.9061111331,
            "unit": "ns/iter",
            "extra": "iterations: 1800\ncpu: 388516.8333333332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 385577.4837644105,
            "unit": "ns/iter",
            "extra": "iterations: 1817\ncpu: 385547.330765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 255732.59633697974,
            "unit": "ns/iter",
            "extra": "iterations: 2730\ncpu: 255713.80952381052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 385774.1998898529,
            "unit": "ns/iter",
            "extra": "iterations: 1816\ncpu: 385769.2180616792 ns\nthreads: 1"
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
        "date": 1705773394257,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6573.656467211077,
            "unit": "ns/iter",
            "extra": "iterations: 106607\ncpu: 6573.557083493579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54459.37566066624,
            "unit": "ns/iter",
            "extra": "iterations: 14947\ncpu: 54457.938047768796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 85795.7963110721,
            "unit": "ns/iter",
            "extra": "iterations: 10030\ncpu: 85793.6590229312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 124913.58468678316,
            "unit": "ns/iter",
            "extra": "iterations: 6896\ncpu: 124907.62761020887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 165161.5157555054,
            "unit": "ns/iter",
            "extra": "iterations: 5268\ncpu: 165157.2323462414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 202065.30609387334,
            "unit": "ns/iter",
            "extra": "iterations: 4283\ncpu: 202054.4711650712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 240985.0649819436,
            "unit": "ns/iter",
            "extra": "iterations: 3601\ncpu: 240973.5351291309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 279578.103971587,
            "unit": "ns/iter",
            "extra": "iterations: 3097\ncpu: 279564.255731353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 319030.71976615995,
            "unit": "ns/iter",
            "extra": "iterations: 2737\ncpu: 319004.0920716112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5527.0788328216395,
            "unit": "ns/iter",
            "extra": "iterations: 126356\ncpu: 5526.779891734462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4511.426766606078,
            "unit": "ns/iter",
            "extra": "iterations: 155694\ncpu: 4511.119889013074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4439.550816772773,
            "unit": "ns/iter",
            "extra": "iterations: 143614\ncpu: 4439.329034773771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4485.958026323228,
            "unit": "ns/iter",
            "extra": "iterations: 154311\ncpu: 4485.676977013946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 6952.786648389519,
            "unit": "ns/iter",
            "extra": "iterations: 99943\ncpu: 6952.485916972682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23871.50647397121,
            "unit": "ns/iter",
            "extra": "iterations: 33905\ncpu: 23871.411296269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 117526.25812671034,
            "unit": "ns/iter",
            "extra": "iterations: 7260\ncpu: 117524.6969696968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 91316.9859622742,
            "unit": "ns/iter",
            "extra": "iterations: 9332\ncpu: 91315.57008144028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 91186.5669948692,
            "unit": "ns/iter",
            "extra": "iterations: 9344\ncpu: 91185.23116438377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 89107.65371320602,
            "unit": "ns/iter",
            "extra": "iterations: 9547\ncpu: 89106.29517125788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 184470.95332774802,
            "unit": "ns/iter",
            "extra": "iterations: 4778\ncpu: 184463.0389284217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1595261.579759889,
            "unit": "ns/iter",
            "extra": "iterations: 583\ncpu: 1595198.9708404816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1240943.6251673263,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1240913.7884872865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1252229.3432031,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 1252200.9421265156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1253388.4339622597,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1253323.0458221028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 678568.7929515752,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 678555.8002936849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1210078.8526726677,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 1210050.0651890473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 29327.058681870763,
            "unit": "ns/iter",
            "extra": "iterations: 28237\ncpu: 29326.468817508918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 153365.05010662464,
            "unit": "ns/iter",
            "extra": "iterations: 5628\ncpu: 153361.336176262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 118609.19352182005,
            "unit": "ns/iter",
            "extra": "iterations: 7286\ncpu: 118606.4644523742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 120856.75024322669,
            "unit": "ns/iter",
            "extra": "iterations: 7195\ncpu: 120855.09381514939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 115478.87941256145,
            "unit": "ns/iter",
            "extra": "iterations: 7422\ncpu: 115473.1878199946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 203519.94771550063,
            "unit": "ns/iter",
            "extra": "iterations: 4246\ncpu: 203513.75412152696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1651470.9592919508,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1651423.8938053048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1271924.6643928397,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1271877.353342427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1294470.7524338835,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1294445.0625869273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1284723.5619834608,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1284693.3884297507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 709285.8004587773,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 709264.2201834872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1244354.5794392107,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 1244301.2016021367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5893047.069620583,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5892875.316455734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2731486.665689156,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2731398.533724337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27036.209775768177,
            "unit": "ns/iter",
            "extra": "iterations: 30504\ncpu: 27035.62811434553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 113922.50417273187,
            "unit": "ns/iter",
            "extra": "iterations: 7549\ncpu: 113920.96966485579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 92678.04325726455,
            "unit": "ns/iter",
            "extra": "iterations: 9247\ncpu: 92674.27273710429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 89740.96227205727,
            "unit": "ns/iter",
            "extra": "iterations: 9542\ncpu: 89738.24145881331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93185.14321444879,
            "unit": "ns/iter",
            "extra": "iterations: 9196\ncpu: 93183.24271422357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 182598.436394276,
            "unit": "ns/iter",
            "extra": "iterations: 4748\ncpu: 182595.89300758296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1607983.1706896396,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1607927.413793099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1253699.3512785705,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 1253670.3903095587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1263545.4634147543,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 1263512.6016260171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1245769.4886515138,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 1245735.5140186907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 691284.0245353417,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 691268.7732342033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1216345.6784313822,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 1216314.2483660136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2495.599970834312,
            "unit": "ns/iter",
            "extra": "iterations: 281152\ncpu: 2495.542624630092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17236.663489014314,
            "unit": "ns/iter",
            "extra": "iterations: 40596\ncpu: 17236.41984431961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13035.933826269766,
            "unit": "ns/iter",
            "extra": "iterations: 53692\ncpu: 13035.42799672204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13902.301455836816,
            "unit": "ns/iter",
            "extra": "iterations: 50349\ncpu: 13902.117221791868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10349.547241006028,
            "unit": "ns/iter",
            "extra": "iterations: 67579\ncpu: 10349.373326033245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63844.590279049284,
            "unit": "ns/iter",
            "extra": "iterations: 10966\ncpu: 63841.31862119303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 111377.49077608588,
            "unit": "ns/iter",
            "extra": "iterations: 6288\ncpu: 111375.74745546994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27804.712257187177,
            "unit": "ns/iter",
            "extra": "iterations: 25071\ncpu: 27803.310597901902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27469.054181762287,
            "unit": "ns/iter",
            "extra": "iterations: 25396\ncpu: 27467.668136714452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27559.633147997607,
            "unit": "ns/iter",
            "extra": "iterations: 25359\ncpu: 27558.768090224403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55720.51467070078,
            "unit": "ns/iter",
            "extra": "iterations: 12542\ncpu: 55719.43868601465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 50913.29942558212,
            "unit": "ns/iter",
            "extra": "iterations: 13753\ncpu: 50913.095324656526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 18975.26840835722,
            "unit": "ns/iter",
            "extra": "iterations: 36899\ncpu: 18974.874657849905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 98595.35618751736,
            "unit": "ns/iter",
            "extra": "iterations: 7103\ncpu: 98593.62241306496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 77947.01058142612,
            "unit": "ns/iter",
            "extra": "iterations: 8978\ncpu: 77942.90487859245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 77178.91719886026,
            "unit": "ns/iter",
            "extra": "iterations: 9082\ncpu: 77176.9764369071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 77072.34086401438,
            "unit": "ns/iter",
            "extra": "iterations: 9074\ncpu: 77069.8479171254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 113958.05215124947,
            "unit": "ns/iter",
            "extra": "iterations: 6136\ncpu: 113955.11734028648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 466182.7004669894,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 466180.65376918274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 376565.4124597401,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 376554.6186895813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 378643.34143702296,
            "unit": "ns/iter",
            "extra": "iterations: 1851\ncpu: 378617.179902754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 383168.44310720894,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 383157.27571116044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 243183.11277407708,
            "unit": "ns/iter",
            "extra": "iterations: 2873\ncpu: 243177.13191785497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 373616.61624803924,
            "unit": "ns/iter",
            "extra": "iterations: 1871\ncpu: 373609.7808658397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 19670.64408683751,
            "unit": "ns/iter",
            "extra": "iterations: 35607\ncpu: 19669.890751818246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 93679.15765524798,
            "unit": "ns/iter",
            "extra": "iterations: 7472\ncpu: 93675.89668094131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 76455.891782469,
            "unit": "ns/iter",
            "extra": "iterations: 9139\ncpu: 76453.5726009406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 76572.30087335735,
            "unit": "ns/iter",
            "extra": "iterations: 9160\ncpu: 76570.25109170369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 75927.31535045303,
            "unit": "ns/iter",
            "extra": "iterations: 9231\ncpu: 75925.89101939225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 114365.6036227144,
            "unit": "ns/iter",
            "extra": "iterations: 6128\ncpu: 114360.21540469874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 462380.92994054593,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 462373.2980832806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 380099.71219510766,
            "unit": "ns/iter",
            "extra": "iterations: 1845\ncpu: 380090.89430894447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 377154.15118787804,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 377147.62419006566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 379015.83378455706,
            "unit": "ns/iter",
            "extra": "iterations: 1847\ncpu: 379005.0351922039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 241335.19688581195,
            "unit": "ns/iter",
            "extra": "iterations: 2890\ncpu: 241334.048442905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 372250.24612919905,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 372240.2562733628 ns\nthreads: 1"
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
        "date": 1705774823199,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6705.794622881838,
            "unit": "ns/iter",
            "extra": "iterations: 104145\ncpu: 6705.685342551251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56928.378648875114,
            "unit": "ns/iter",
            "extra": "iterations: 14388\ncpu: 56927.82874617737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 90352.5273720638,
            "unit": "ns/iter",
            "extra": "iterations: 9517\ncpu: 90352.09624881794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 130992.98069909791,
            "unit": "ns/iter",
            "extra": "iterations: 6580\ncpu: 130994.51367781148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 172461.2282025919,
            "unit": "ns/iter",
            "extra": "iterations: 5035\ncpu: 172454.9553128104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 212671.20139233902,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 212660.2187966186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 253190.1088355583,
            "unit": "ns/iter",
            "extra": "iterations: 3418\ncpu: 253177.7940315975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 294115.13568522816,
            "unit": "ns/iter",
            "extra": "iterations: 2948\ncpu: 294105.22388059675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 333270.38722094643,
            "unit": "ns/iter",
            "extra": "iterations: 2598\ncpu: 333258.6605080835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5647.210339313634,
            "unit": "ns/iter",
            "extra": "iterations: 123838\ncpu: 5646.778856247681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4632.005727165457,
            "unit": "ns/iter",
            "extra": "iterations: 151733\ncpu: 4632.059604700358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4543.179807535493,
            "unit": "ns/iter",
            "extra": "iterations: 153275\ncpu: 4543.231446746047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4547.886120424642,
            "unit": "ns/iter",
            "extra": "iterations: 155682\ncpu: 4547.508382471963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7218.368762925921,
            "unit": "ns/iter",
            "extra": "iterations: 96219\ncpu: 7218.3217451854625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24054.058593283964,
            "unit": "ns/iter",
            "extra": "iterations: 33724\ncpu: 24052.60052188353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 114244.68176943049,
            "unit": "ns/iter",
            "extra": "iterations: 7460\ncpu: 114245.06702412858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 89417.77146756368,
            "unit": "ns/iter",
            "extra": "iterations: 9526\ncpu: 89417.20554272507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 90133.81907685677,
            "unit": "ns/iter",
            "extra": "iterations: 9446\ncpu: 90129.22930340855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 86344.5874617673,
            "unit": "ns/iter",
            "extra": "iterations: 9810\ncpu: 86341.15188583056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 183269.39221806903,
            "unit": "ns/iter",
            "extra": "iterations: 4806\ncpu: 183260.23720349523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1639043.5364121478,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1638955.772646532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1293843.7635605868,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1293756.1891515995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1288059.2382272133,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1288020.498614959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1273881.153635235,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1273829.0809327858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 710514.1910632327,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 710490.3697996899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1245787.0550334647,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 1245756.375838923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 29172.089957497446,
            "unit": "ns/iter",
            "extra": "iterations: 28469\ncpu: 29170.76117882603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 150362.7500872634,
            "unit": "ns/iter",
            "extra": "iterations: 5730\ncpu: 150358.01047120476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 117463.88158973331,
            "unit": "ns/iter",
            "extra": "iterations: 7322\ncpu: 117461.69079486484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 118458.61543735123,
            "unit": "ns/iter",
            "extra": "iterations: 7294\ncpu: 118456.36139292584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 113508.10679740575,
            "unit": "ns/iter",
            "extra": "iterations: 7547\ncpu: 113508.34768782312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 202330.73027393516,
            "unit": "ns/iter",
            "extra": "iterations: 4271\ncpu: 202331.25731678845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1692835.3170289872,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1692832.9710145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1327961.446504988,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1327947.6462196847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1321782.4666666505,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1321718.5815602883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1306178.645070368,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1306110.4225352062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 737673.965079376,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 737623.8888888899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1276257.7782369482,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1276191.1845730022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6027005.090909147,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6026987.412587398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2918138.652173695,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2918151.86335403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26440.03049094044,
            "unit": "ns/iter",
            "extra": "iterations: 31124\ncpu: 26439.20125947827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 110759.64885791903,
            "unit": "ns/iter",
            "extra": "iterations: 7749\ncpu: 110757.76229190892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 92364.35513025621,
            "unit": "ns/iter",
            "extra": "iterations: 9405\ncpu: 92364.34875066431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 88299.219298245,
            "unit": "ns/iter",
            "extra": "iterations: 9690\ncpu: 88298.97832817299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 92332.63614796555,
            "unit": "ns/iter",
            "extra": "iterations: 9273\ncpu: 92326.90607139056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 182424.7503674325,
            "unit": "ns/iter",
            "extra": "iterations: 4763\ncpu: 182416.37623346623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1664822.6678573303,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1664748.571428579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1309364.7848100644,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1309335.5836849508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1300127.0111110506,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1300038.6111111082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1272743.6739425738,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1272687.4488403767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 719093.5324073273,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 719055.4012345675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1258101.7651098636,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1258059.752747249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2615.2811701498367,
            "unit": "ns/iter",
            "extra": "iterations: 266906\ncpu: 2615.1322937663185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17006.902376148013,
            "unit": "ns/iter",
            "extra": "iterations: 41117\ncpu: 17006.89009412175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13595.338621027293,
            "unit": "ns/iter",
            "extra": "iterations: 51125\ncpu: 13594.650366748116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12983.053472967473,
            "unit": "ns/iter",
            "extra": "iterations: 54046\ncpu: 12982.520445546324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10417.600860476867,
            "unit": "ns/iter",
            "extra": "iterations: 67172\ncpu: 10416.752515929276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64164.43706358504,
            "unit": "ns/iter",
            "extra": "iterations: 10884\ncpu: 64160.464902609645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 110428.32695023983,
            "unit": "ns/iter",
            "extra": "iterations: 6371\ncpu: 110427.93909904211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28425.065240339885,
            "unit": "ns/iter",
            "extra": "iterations: 24632\ncpu: 28424.68739850614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28663.259080697426,
            "unit": "ns/iter",
            "extra": "iterations: 24475\ncpu: 28662.945863125784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28394.030276011577,
            "unit": "ns/iter",
            "extra": "iterations: 24673\ncpu: 28393.3895351194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 57936.06576770244,
            "unit": "ns/iter",
            "extra": "iterations: 12088\ncpu: 57933.76902713458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52832.42199893708,
            "unit": "ns/iter",
            "extra": "iterations: 13237\ncpu: 52829.82548915915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19288.20270940067,
            "unit": "ns/iter",
            "extra": "iterations: 36318\ncpu: 19287.06701910871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 97329.41630842291,
            "unit": "ns/iter",
            "extra": "iterations: 7211\ncpu: 97318.09735126923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 79279.20452233868,
            "unit": "ns/iter",
            "extra": "iterations: 8845\ncpu: 79276.98134539212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 78233.73751815401,
            "unit": "ns/iter",
            "extra": "iterations: 8953\ncpu: 78233.45247403019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 78660.30740446571,
            "unit": "ns/iter",
            "extra": "iterations: 8819\ncpu: 78656.78648372713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 118716.33531510236,
            "unit": "ns/iter",
            "extra": "iterations: 5887\ncpu: 118707.30422965734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 488796.87927426514,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 488759.94417305733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 400338.2334096409,
            "unit": "ns/iter",
            "extra": "iterations: 1748\ncpu: 400336.49885583547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 398232.0079635594,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 398226.6780432353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 389874.97718418925,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 389849.3043962163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 252569.34920633846,
            "unit": "ns/iter",
            "extra": "iterations: 2772\ncpu: 252541.81096681324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 388960.14118954015,
            "unit": "ns/iter",
            "extra": "iterations: 1799\ncpu: 388927.01500834036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 19762.717208011054,
            "unit": "ns/iter",
            "extra": "iterations: 35344\ncpu: 19761.586124943395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 95768.7040065345,
            "unit": "ns/iter",
            "extra": "iterations: 7338\ncpu: 95769.73289724712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 77363.6347490353,
            "unit": "ns/iter",
            "extra": "iterations: 9065\ncpu: 77358.89685603975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 78203.04239177959,
            "unit": "ns/iter",
            "extra": "iterations: 8964\ncpu: 78198.1258366804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 78110.51020180917,
            "unit": "ns/iter",
            "extra": "iterations: 8969\ncpu: 78105.65280410256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 118121.13344593105,
            "unit": "ns/iter",
            "extra": "iterations: 5920\ncpu: 118112.8378378387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 484331.5733057068,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 484296.9571231028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 392601.1301178065,
            "unit": "ns/iter",
            "extra": "iterations: 1783\ncpu: 392581.8283791389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 392888.7498591073,
            "unit": "ns/iter",
            "extra": "iterations: 1775\ncpu: 392856.0563380236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 389663.70044540166,
            "unit": "ns/iter",
            "extra": "iterations: 1796\ncpu: 389662.5835189285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 249534.03857141762,
            "unit": "ns/iter",
            "extra": "iterations: 2800\ncpu: 249527.07142857276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 385678.36042014236,
            "unit": "ns/iter",
            "extra": "iterations: 1809\ncpu: 385682.2553897194 ns\nthreads: 1"
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
        "date": 1705778364112,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6721.372434493775,
            "unit": "ns/iter",
            "extra": "iterations: 104609\ncpu: 6721.432190346911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50259.25349999625,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50258.78 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92898.91652116181,
            "unit": "ns/iter",
            "extra": "iterations: 9164\ncpu: 92897.02095154955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 135628.05464566842,
            "unit": "ns/iter",
            "extra": "iterations: 6350\ncpu: 135629.25984251974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 178396.72316846548,
            "unit": "ns/iter",
            "extra": "iterations: 4873\ncpu: 178392.05828032017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 223304.57339800044,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 223304.3655859075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 262724.4266263344,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 262721.99697428156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 303977.90632648545,
            "unit": "ns/iter",
            "extra": "iterations: 2861\ncpu: 303974.0650122336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 346244.9001193864,
            "unit": "ns/iter",
            "extra": "iterations: 2513\ncpu: 346236.6892160768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5829.20828875251,
            "unit": "ns/iter",
            "extra": "iterations: 119632\ncpu: 5829.138524809415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4767.149236104286,
            "unit": "ns/iter",
            "extra": "iterations: 146486\ncpu: 4767.15658834292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4663.097374958119,
            "unit": "ns/iter",
            "extra": "iterations: 148950\ncpu: 4663.0802282645145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4764.007057846342,
            "unit": "ns/iter",
            "extra": "iterations: 146787\ncpu: 4763.955254893144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7509.49408249197,
            "unit": "ns/iter",
            "extra": "iterations: 93367\ncpu: 7509.40375078989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24022.6398993643,
            "unit": "ns/iter",
            "extra": "iterations: 33785\ncpu: 24021.61906171375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 114324.49105235349,
            "unit": "ns/iter",
            "extra": "iterations: 7488\ncpu: 114321.16720085462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 89454.40347551377,
            "unit": "ns/iter",
            "extra": "iterations: 9495\ncpu: 89452.22748815155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 91233.56904660563,
            "unit": "ns/iter",
            "extra": "iterations: 9356\ncpu: 91228.78366823435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 89117.65668058384,
            "unit": "ns/iter",
            "extra": "iterations: 9580\ncpu: 89118.42379958255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 187932.21219251023,
            "unit": "ns/iter",
            "extra": "iterations: 4675\ncpu: 187922.88770053448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1706281.0645757725,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1706221.0332103292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1338114.6426513363,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1338031.4121037486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1341600.6324167415,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1341560.7814761254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1336749.2074928281,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1336690.345821326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 730220.3588327705,
            "unit": "ns/iter",
            "extra": "iterations: 1268\ncpu: 730180.9936908497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1298077.6694677246,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1298020.8683473435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 30059.35538573303,
            "unit": "ns/iter",
            "extra": "iterations: 27480\ncpu: 30057.729257641844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158213.73101094898,
            "unit": "ns/iter",
            "extra": "iterations: 5569\ncpu: 158208.9603160353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 122434.65433493671,
            "unit": "ns/iter",
            "extra": "iterations: 7082\ncpu: 122428.12764755702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 119580.19199221703,
            "unit": "ns/iter",
            "extra": "iterations: 7193\ncpu: 119576.56054497403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 115311.73117127013,
            "unit": "ns/iter",
            "extra": "iterations: 7462\ncpu: 115306.23157330486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 204623.3721315328,
            "unit": "ns/iter",
            "extra": "iterations: 4227\ncpu: 204616.1816891413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1760018.727272888,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1759911.931818186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1351500.6168360342,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1351445.5732946272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1363999.8411764174,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1363921.9117647044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1362564.406754686,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1362524.229074896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 757453.1021417308,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 757385.3377265219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1323077.278174133,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1323014.9786019963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6230297.97333326,
            "unit": "ns/iter",
            "extra": "iterations: 150\ncpu: 6230199.333333341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2825006.9393941364,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2824889.0909090755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26936.335018264195,
            "unit": "ns/iter",
            "extra": "iterations: 30664\ncpu: 26935.106313592314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 111142.15836003392,
            "unit": "ns/iter",
            "extra": "iterations: 7805\ncpu: 111139.42344650914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 92109.45756139577,
            "unit": "ns/iter",
            "extra": "iterations: 9284\ncpu: 92102.00344679011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 89197.88286401611,
            "unit": "ns/iter",
            "extra": "iterations: 9553\ncpu: 89192.71433057674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93791.61778164431,
            "unit": "ns/iter",
            "extra": "iterations: 9178\ncpu: 93783.34059707976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 184379.63726944197,
            "unit": "ns/iter",
            "extra": "iterations: 4717\ncpu: 184369.62052151695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1738380.7068644997,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1738278.1076066745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1352929.9999999646,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1352867.0537010217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1353006.1353710683,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1352941.4847161635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1332852.412857132,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1332821.142857138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 742229.3075697813,
            "unit": "ns/iter",
            "extra": "iterations: 1255\ncpu: 742193.6254980061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1302738.8783217515,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1302673.0069930062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2546.367007250529,
            "unit": "ns/iter",
            "extra": "iterations: 275703\ncpu: 2546.2425145899692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17591.160243308703,
            "unit": "ns/iter",
            "extra": "iterations: 41100\ncpu: 17590.47688564463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14400.97116607331,
            "unit": "ns/iter",
            "extra": "iterations: 48762\ncpu: 14400.35478446337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14201.279061779123,
            "unit": "ns/iter",
            "extra": "iterations: 49498\ncpu: 14200.93741161267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10501.579633017176,
            "unit": "ns/iter",
            "extra": "iterations: 66706\ncpu: 10501.110844601633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 65397.02633790397,
            "unit": "ns/iter",
            "extra": "iterations: 10707\ncpu: 65393.17269076324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 118223.6781492715,
            "unit": "ns/iter",
            "extra": "iterations: 5922\ncpu: 118215.40020263442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29217.89581248179,
            "unit": "ns/iter",
            "extra": "iterations: 23976\ncpu: 29216.37470804145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29174.314297656685,
            "unit": "ns/iter",
            "extra": "iterations: 23920\ncpu: 29171.693143812583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29271.07952735893,
            "unit": "ns/iter",
            "extra": "iterations: 23866\ncpu: 29269.806419173685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58250.80929034574,
            "unit": "ns/iter",
            "extra": "iterations: 12034\ncpu: 58249.19395047369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54062.34625781417,
            "unit": "ns/iter",
            "extra": "iterations: 12947\ncpu: 54061.72086197572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19597.995961977562,
            "unit": "ns/iter",
            "extra": "iterations: 35661\ncpu: 19597.97257508198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 97041.75614840233,
            "unit": "ns/iter",
            "extra": "iterations: 7197\ncpu: 97034.79227455899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 79465.03223601781,
            "unit": "ns/iter",
            "extra": "iterations: 8779\ncpu: 79461.14591639118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 78912.3969404139,
            "unit": "ns/iter",
            "extra": "iterations: 8694\ncpu: 78906.08465608433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 79614.3170898343,
            "unit": "ns/iter",
            "extra": "iterations: 8783\ncpu: 79608.90356370332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 123138.7404606874,
            "unit": "ns/iter",
            "extra": "iterations: 5687\ncpu: 123138.47371197453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 500164.6167621653,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 500120.70200572646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 405174.58550727065,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 405173.4492753667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 408396.56074765744,
            "unit": "ns/iter",
            "extra": "iterations: 1712\ncpu: 408392.5817756976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 402671.6799078857,
            "unit": "ns/iter",
            "extra": "iterations: 1737\ncpu: 402654.9222797955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 256816.15818380646,
            "unit": "ns/iter",
            "extra": "iterations: 2731\ncpu: 256803.6250457707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 398170.7562642092,
            "unit": "ns/iter",
            "extra": "iterations: 1756\ncpu: 398157.2892938488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20180.82536022983,
            "unit": "ns/iter",
            "extra": "iterations: 34700\ncpu: 20179.72046109511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 94915.932382893,
            "unit": "ns/iter",
            "extra": "iterations: 7365\ncpu: 94915.83163611806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 78897.71385271793,
            "unit": "ns/iter",
            "extra": "iterations: 8908\ncpu: 78895.30758868472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 78857.40648575229,
            "unit": "ns/iter",
            "extra": "iterations: 8881\ncpu: 78852.38148857116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 79236.38532533712,
            "unit": "ns/iter",
            "extra": "iterations: 8668\ncpu: 79233.28334102448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 119376.64283287343,
            "unit": "ns/iter",
            "extra": "iterations: 5888\ncpu: 119370.27853260789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 501511.4641833473,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 501510.6733524381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 403348.05824683025,
            "unit": "ns/iter",
            "extra": "iterations: 1734\ncpu: 403332.41061130364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 407417.265424946,
            "unit": "ns/iter",
            "extra": "iterations: 1718\ncpu: 407403.9580908067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 407436.71345370717,
            "unit": "ns/iter",
            "extra": "iterations: 1717\ncpu: 407419.27781013824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 255011.57551318695,
            "unit": "ns/iter",
            "extra": "iterations: 2728\ncpu: 254995.38123166873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 398248.0967372309,
            "unit": "ns/iter",
            "extra": "iterations: 1747\ncpu: 398229.3073840836 ns\nthreads: 1"
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
        "date": 1705953554367,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6759.99581176197,
            "unit": "ns/iter",
            "extra": "iterations: 103146\ncpu: 6759.738622922849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59347.1825119455,
            "unit": "ns/iter",
            "extra": "iterations: 14021\ncpu: 59343.5632265887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92187.0700719064,
            "unit": "ns/iter",
            "extra": "iterations: 9319\ncpu: 92181.89719927027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 133696.2118525346,
            "unit": "ns/iter",
            "extra": "iterations: 6429\ncpu: 133685.8764971224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 176075.5735174705,
            "unit": "ns/iter",
            "extra": "iterations: 4924\ncpu: 176066.1657189278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 217302.0519447659,
            "unit": "ns/iter",
            "extra": "iterations: 3985\ncpu: 217291.49309912184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 258847.55971264336,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 258831.30799161928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 300667.74818403315,
            "unit": "ns/iter",
            "extra": "iterations: 2891\ncpu: 300653.6838464199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 341515.14923014416,
            "unit": "ns/iter",
            "extra": "iterations: 2533\ncpu: 341500.0789577574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5691.4984298983045,
            "unit": "ns/iter",
            "extra": "iterations: 122922\ncpu: 5691.152112721893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4611.637037280148,
            "unit": "ns/iter",
            "extra": "iterations: 152495\ncpu: 4611.541362011867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4532.801747707821,
            "unit": "ns/iter",
            "extra": "iterations: 152886\ncpu: 4532.590296037568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4583.139641697193,
            "unit": "ns/iter",
            "extra": "iterations: 153278\ncpu: 4582.877516669055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7274.193654153012,
            "unit": "ns/iter",
            "extra": "iterations: 96378\ncpu: 7273.900682728418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24254.2046448921,
            "unit": "ns/iter",
            "extra": "iterations: 33370\ncpu: 24253.71591249621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 123075.6616400961,
            "unit": "ns/iter",
            "extra": "iterations: 6963\ncpu: 123069.63952319372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 91900.5491042568,
            "unit": "ns/iter",
            "extra": "iterations: 9266\ncpu: 91895.72631124522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 94333.61592039009,
            "unit": "ns/iter",
            "extra": "iterations: 9045\ncpu: 94329.78441127724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 88289.67824193873,
            "unit": "ns/iter",
            "extra": "iterations: 9647\ncpu: 88284.73100445724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 182641.2372285477,
            "unit": "ns/iter",
            "extra": "iterations: 4835\ncpu: 182632.59565667072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1696355.2146789713,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1696266.9724770645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1326285.7945791453,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1326220.3994293865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1332366.3524355858,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1332307.4498567358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1311019.5353107683,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1310954.5197740097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 719314.7151751572,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 719294.5525291836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1286348.2119112676,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1286290.58171745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 30507.290961494524,
            "unit": "ns/iter",
            "extra": "iterations: 27062\ncpu: 30506.00842509789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 157802.99725676826,
            "unit": "ns/iter",
            "extra": "iterations: 5468\ncpu: 157794.42209217296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 120953.51924157962,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 120946.29213483135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 122422.6263000348,
            "unit": "ns/iter",
            "extra": "iterations: 7019\ncpu: 122416.48382960547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 116895.25167099059,
            "unit": "ns/iter",
            "extra": "iterations: 7331\ncpu: 116889.57850225092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 201095.37444729632,
            "unit": "ns/iter",
            "extra": "iterations: 4297\ncpu: 201082.2434256458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1739683.3177569797,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1739614.2056074727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1345350.7066475071,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1345271.0982658914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1365531.071847524,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1365483.5777126092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1346327.5332369935,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1346250.578034675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 748781.7185725525,
            "unit": "ns/iter",
            "extra": "iterations: 1233\ncpu: 748745.7420924571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1317161.1878532155,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1317077.824858757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6171041.569536589,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6170711.920529772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2945488.858044137,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2945352.3659305978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25426.22498850197,
            "unit": "ns/iter",
            "extra": "iterations: 32615\ncpu: 25425.31963820328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 127253.38973751465,
            "unit": "ns/iter",
            "extra": "iterations: 6743\ncpu: 127248.95447130343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 98183.8784448286,
            "unit": "ns/iter",
            "extra": "iterations: 8745\ncpu: 98178.51343624917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 92290.97019261062,
            "unit": "ns/iter",
            "extra": "iterations: 9293\ncpu: 92287.74346282151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94336.96616871677,
            "unit": "ns/iter",
            "extra": "iterations: 9104\ncpu: 94332.89762741678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 180350.06135607546,
            "unit": "ns/iter",
            "extra": "iterations: 4808\ncpu: 180342.8244592344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1720468.8819187582,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1720385.7933579327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1333041.7814285867,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1332975.8571428536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1342655.0129310698,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1342602.7298850596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1312195.5710266968,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1312154.571026717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 736508.7062992206,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 736478.8188976374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1291992.2538141573,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1291924.549237172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2571.708378836731,
            "unit": "ns/iter",
            "extra": "iterations: 271959\ncpu: 2571.5615221411963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17378.962146444574,
            "unit": "ns/iter",
            "extra": "iterations: 40234\ncpu: 17378.31436098825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13207.819549578766,
            "unit": "ns/iter",
            "extra": "iterations: 53239\ncpu: 13172.709855557097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13558.260454677917,
            "unit": "ns/iter",
            "extra": "iterations: 51245\ncpu: 13557.740267343135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10618.778726696584,
            "unit": "ns/iter",
            "extra": "iterations: 65923\ncpu: 10618.21822429202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67429.63015812496,
            "unit": "ns/iter",
            "extra": "iterations: 10372\ncpu: 67425.75202468236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 119391.61243611293,
            "unit": "ns/iter",
            "extra": "iterations: 5870\ncpu: 119384.13969335519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28686.699092511062,
            "unit": "ns/iter",
            "extra": "iterations: 24353\ncpu: 28684.223709604717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28819.223194387247,
            "unit": "ns/iter",
            "extra": "iterations: 24230\ncpu: 28817.73834089956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28783.028467121807,
            "unit": "ns/iter",
            "extra": "iterations: 24379\ncpu: 28782.06243078059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58377.60260260317,
            "unit": "ns/iter",
            "extra": "iterations: 11988\ncpu: 58375.94260927549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53875.69429253888,
            "unit": "ns/iter",
            "extra": "iterations: 12983\ncpu: 53873.804205499124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19328.098774650687,
            "unit": "ns/iter",
            "extra": "iterations: 36153\ncpu: 19327.54404890316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 96179.94650261496,
            "unit": "ns/iter",
            "extra": "iterations: 7234\ncpu: 96177.8683992246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 79486.35637514312,
            "unit": "ns/iter",
            "extra": "iterations: 8839\ncpu: 79483.43704038922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 77578.83961426608,
            "unit": "ns/iter",
            "extra": "iterations: 9022\ncpu: 77575.16071824361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 78428.28670701706,
            "unit": "ns/iter",
            "extra": "iterations: 8922\ncpu: 78425.70051558042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 117841.01966387585,
            "unit": "ns/iter",
            "extra": "iterations: 5950\ncpu: 117834.90756302478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 493999.8910120837,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 493983.58103326807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 399468.6098397977,
            "unit": "ns/iter",
            "extra": "iterations: 1748\ncpu: 399456.63615560054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 409637.0376249758,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 409620.63492063654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 402627.06497982907,
            "unit": "ns/iter",
            "extra": "iterations: 1739\ncpu: 402614.3185738931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 256863.34249088017,
            "unit": "ns/iter",
            "extra": "iterations: 2730\ncpu: 256854.2124542118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 395555.24263041734,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 395546.0884353736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20030.76495335228,
            "unit": "ns/iter",
            "extra": "iterations: 34942\ncpu: 20030.218648044964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 95537.31309817561,
            "unit": "ns/iter",
            "extra": "iterations: 7314\ncpu: 95533.08722996994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 78757.08265766286,
            "unit": "ns/iter",
            "extra": "iterations: 8880\ncpu: 78753.34459459377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 77604.66085895442,
            "unit": "ns/iter",
            "extra": "iterations: 9011\ncpu: 77596.94817445391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 77778.13273252411,
            "unit": "ns/iter",
            "extra": "iterations: 8988\ncpu: 77770.22696929218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 115511.51740062711,
            "unit": "ns/iter",
            "extra": "iterations: 6063\ncpu: 115502.72142503744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 502105.5089350053,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 502083.1308077205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 403335.7603686846,
            "unit": "ns/iter",
            "extra": "iterations: 1736\ncpu: 403309.2741935472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 410688.5096660534,
            "unit": "ns/iter",
            "extra": "iterations: 1707\ncpu: 410665.84651435236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 401370.88748567697,
            "unit": "ns/iter",
            "extra": "iterations: 1742\ncpu: 401352.87026406615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 255554.8373537993,
            "unit": "ns/iter",
            "extra": "iterations: 2736\ncpu: 255539.2543859631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 397962.43771427596,
            "unit": "ns/iter",
            "extra": "iterations: 1750\ncpu: 397944.40000000416 ns\nthreads: 1"
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
        "date": 1705954983215,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6781.1797735452665,
            "unit": "ns/iter",
            "extra": "iterations: 103597\ncpu: 6781.0592970838925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50645.20879999464,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50642.18000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93587.21767522475,
            "unit": "ns/iter",
            "extra": "iterations: 9188\ncpu: 93580.87723117109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 135589.00456406004,
            "unit": "ns/iter",
            "extra": "iterations: 6354\ncpu: 135576.58168083095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 179272.08312704615,
            "unit": "ns/iter",
            "extra": "iterations: 4848\ncpu: 179259.79785478555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 221214.94218034542,
            "unit": "ns/iter",
            "extra": "iterations: 3926\ncpu: 221197.1217524198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 262945.36286407255,
            "unit": "ns/iter",
            "extra": "iterations: 3296\ncpu: 262933.3131067962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 305029.7830354087,
            "unit": "ns/iter",
            "extra": "iterations: 2853\ncpu: 305014.30073606723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 351287.5703437395,
            "unit": "ns/iter",
            "extra": "iterations: 2502\ncpu: 351285.5715427654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5704.01571837356,
            "unit": "ns/iter",
            "extra": "iterations: 122659\ncpu: 5703.759202341459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4644.663691207548,
            "unit": "ns/iter",
            "extra": "iterations: 150677\ncpu: 4644.615966604059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4597.313948588097,
            "unit": "ns/iter",
            "extra": "iterations: 151872\ncpu: 4597.152865571013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4545.79085949762,
            "unit": "ns/iter",
            "extra": "iterations: 154346\ncpu: 4545.583299858757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7310.603459969491,
            "unit": "ns/iter",
            "extra": "iterations: 95839\ncpu: 7310.202527154903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23874.27905748277,
            "unit": "ns/iter",
            "extra": "iterations: 34079\ncpu: 23873.06258986472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 116970.80806561925,
            "unit": "ns/iter",
            "extra": "iterations: 7315\ncpu: 116964.97607655491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 90591.16620469002,
            "unit": "ns/iter",
            "extra": "iterations: 9380\ncpu: 90591.74840085288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 90886.54244881464,
            "unit": "ns/iter",
            "extra": "iterations: 9376\ncpu: 90887.08404436879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 88789.49879543055,
            "unit": "ns/iter",
            "extra": "iterations: 9547\ncpu: 88786.90688174289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 184843.33815818297,
            "unit": "ns/iter",
            "extra": "iterations: 4767\ncpu: 184834.34025592572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1682726.7065216477,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1682692.0289855076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1313333.678924963,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1313313.4370579883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1325709.0057224873,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1325651.2160228924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1303671.867977497,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1303607.0224719075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 712496.0355212383,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 712475.7528957509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1271467.7239010776,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1271431.4560439545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 29337.259680282896,
            "unit": "ns/iter",
            "extra": "iterations: 28150\ncpu: 29335.733570159762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 153974.94023192808,
            "unit": "ns/iter",
            "extra": "iterations: 5605\ncpu: 153972.13202497788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 119488.2258689908,
            "unit": "ns/iter",
            "extra": "iterations: 7221\ncpu: 119480.48746710969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 120894.76128850342,
            "unit": "ns/iter",
            "extra": "iterations: 7109\ncpu: 120892.75566183697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 114402.54409805094,
            "unit": "ns/iter",
            "extra": "iterations: 7506\ncpu: 114400.94590993886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 201459.38450771663,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 201452.56649556707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1725774.6722222052,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1725712.9629629652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1356502.1270073387,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1356479.7080291917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1361615.421282727,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1361533.236151604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1349594.3072463386,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1349568.9855072447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 742989.7039106053,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 742976.695929769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1312907.7221438924,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1312865.867418897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6140123.703947833,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6139803.2894736985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2870832.4320985517,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2870781.7901234613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26606.543619370615,
            "unit": "ns/iter",
            "extra": "iterations: 30812\ncpu: 26605.179800077975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 111682.0477802381,
            "unit": "ns/iter",
            "extra": "iterations: 7681\ncpu: 111678.6746517381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 92365.65975820702,
            "unit": "ns/iter",
            "extra": "iterations: 9264\ncpu: 92362.05742659727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 89845.36429547112,
            "unit": "ns/iter",
            "extra": "iterations: 9517\ncpu: 89844.66743721731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93612.0653950911,
            "unit": "ns/iter",
            "extra": "iterations: 9175\ncpu: 93610.44141689372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 181590.84607353606,
            "unit": "ns/iter",
            "extra": "iterations: 4788\ncpu: 181588.88888888905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1685788.5388788476,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1685685.5334538762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1327411.9709724225,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1327420.0290275712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1334560.4688856378,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1334548.1910274941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1311237.0956399818,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1311231.0829817113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 733104.7620173345,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 733049.5665878673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1284935.7410467705,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1284887.0523415988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2573.468841585886,
            "unit": "ns/iter",
            "extra": "iterations: 272286\ncpu: 2573.458789654977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16841.363875167568,
            "unit": "ns/iter",
            "extra": "iterations: 41495\ncpu: 16840.976021207305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14306.566730269742,
            "unit": "ns/iter",
            "extra": "iterations: 48741\ncpu: 14305.845181674546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13679.042121104543,
            "unit": "ns/iter",
            "extra": "iterations: 51162\ncpu: 13678.622805988922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10507.49916745314,
            "unit": "ns/iter",
            "extra": "iterations: 66663\ncpu: 10507.150893299142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62137.408223065606,
            "unit": "ns/iter",
            "extra": "iterations: 11261\ncpu: 62136.97717787071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 118043.37657324492,
            "unit": "ns/iter",
            "extra": "iterations: 5959\ncpu: 118039.46970968365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28799.688582739724,
            "unit": "ns/iter",
            "extra": "iterations: 24244\ncpu: 28799.48853324514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28852.299140020074,
            "unit": "ns/iter",
            "extra": "iterations: 24303\ncpu: 28852.512035550957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28902.672304268362,
            "unit": "ns/iter",
            "extra": "iterations: 24242\ncpu: 28902.190413332042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 57634.74180025051,
            "unit": "ns/iter",
            "extra": "iterations: 12165\ncpu: 57633.57172215368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53622.26288817214,
            "unit": "ns/iter",
            "extra": "iterations: 13074\ncpu: 53618.38763959016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 18977.87864943905,
            "unit": "ns/iter",
            "extra": "iterations: 36992\ncpu: 18977.55190311432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 95154.565229228,
            "unit": "ns/iter",
            "extra": "iterations: 7351\ncpu: 95151.92490817503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 78402.4252206025,
            "unit": "ns/iter",
            "extra": "iterations: 8953\ncpu: 78401.39618005125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 77235.44171914582,
            "unit": "ns/iter",
            "extra": "iterations: 9051\ncpu: 77233.21179980105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 78301.96194858143,
            "unit": "ns/iter",
            "extra": "iterations: 8909\ncpu: 78298.30508474635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 115257.89121477597,
            "unit": "ns/iter",
            "extra": "iterations: 6067\ncpu: 115252.8432503718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 490611.07228074735,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 490592.8421052614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 404463.29907616373,
            "unit": "ns/iter",
            "extra": "iterations: 1732\ncpu: 404460.2771362594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 404743.2427745993,
            "unit": "ns/iter",
            "extra": "iterations: 1730\ncpu: 404717.6878612724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 400667.26415095513,
            "unit": "ns/iter",
            "extra": "iterations: 1749\ncpu: 400632.18982275605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 253973.09249183835,
            "unit": "ns/iter",
            "extra": "iterations: 2757\ncpu: 253963.80123322833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 394418.3967360823,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 394382.4985931355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 19611.870450787075,
            "unit": "ns/iter",
            "extra": "iterations: 35693\ncpu: 19611.34676267062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 95535.47529604669,
            "unit": "ns/iter",
            "extra": "iterations: 7347\ncpu: 95533.80971825306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 77647.1430470922,
            "unit": "ns/iter",
            "extra": "iterations: 9025\ncpu: 77647.822714681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 77845.84900000229,
            "unit": "ns/iter",
            "extra": "iterations: 9000\ncpu: 77842.7999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 78312.72836054026,
            "unit": "ns/iter",
            "extra": "iterations: 8942\ncpu: 78306.54216059083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 118282.5344362007,
            "unit": "ns/iter",
            "extra": "iterations: 5924\ncpu: 118280.2667116813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 484384.2376992407,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 484353.15315315704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 401549.3438035068,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 401542.0331239294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 401368.2356321493,
            "unit": "ns/iter",
            "extra": "iterations: 1740\ncpu: 401340.9195402342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 401092.5238095418,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 401095.1233505478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 253808.4083484526,
            "unit": "ns/iter",
            "extra": "iterations: 2755\ncpu: 253810.16333938285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 393257.4482758549,
            "unit": "ns/iter",
            "extra": "iterations: 1769\ncpu: 393244.48841153295 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}