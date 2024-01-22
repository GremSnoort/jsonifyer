window.BENCHMARK_DATA = {
  "lastUpdate": 1705954336617,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-13 18.04 Debug c++-17": [
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
        "date": 1702489573567,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8066.920224537345,
            "unit": "ns/iter",
            "extra": "iterations: 86756\ncpu: 8066.805754068883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58502.819800003184,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58501.19999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 108430.11631438782,
            "unit": "ns/iter",
            "extra": "iterations: 7901\ncpu: 108430.2746487786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 156823.63746113138,
            "unit": "ns/iter",
            "extra": "iterations: 5467\ncpu: 156820.431680995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 206199.9120458914,
            "unit": "ns/iter",
            "extra": "iterations: 4184\ncpu: 206198.54206500953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 254405.57488922693,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 254392.14180206804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 302747.2435629849,
            "unit": "ns/iter",
            "extra": "iterations: 2874\ncpu: 302732.42867084185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 352869.72528365883,
            "unit": "ns/iter",
            "extra": "iterations: 2468\ncpu: 352846.39384116716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 400200.2978821707,
            "unit": "ns/iter",
            "extra": "iterations: 2172\ncpu: 400178.31491712714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6751.965377654377,
            "unit": "ns/iter",
            "extra": "iterations: 104990\ncpu: 6751.455376702547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5473.012281211292,
            "unit": "ns/iter",
            "extra": "iterations: 127349\ncpu: 5472.95699220253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5575.772820819987,
            "unit": "ns/iter",
            "extra": "iterations: 123418\ncpu: 5575.74745985189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5501.541769369613,
            "unit": "ns/iter",
            "extra": "iterations: 127390\ncpu: 5501.592746683408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9630.991102521006,
            "unit": "ns/iter",
            "extra": "iterations: 72942\ncpu: 9630.968440678898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30457.057959151934,
            "unit": "ns/iter",
            "extra": "iterations: 26881\ncpu: 30456.221866746055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 160339.75252337972,
            "unit": "ns/iter",
            "extra": "iterations: 5350\ncpu: 160339.36448598138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 124450.27825454996,
            "unit": "ns/iter",
            "extra": "iterations: 6875\ncpu: 124449.25090909103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 126334.40330189551,
            "unit": "ns/iter",
            "extra": "iterations: 6784\ncpu: 126334.30129716957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 120562.33554302964,
            "unit": "ns/iter",
            "extra": "iterations: 7090\ncpu: 120560.56417489423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 357909.67020875367,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 357910.0569259953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1870814.226720776,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1870794.129554653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1506210.411003197,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1504940.4530744331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1531149.8418451375,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1531063.2619439845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1502270.7622150586,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1502216.612377848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 849421.900552447,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 849383.7937384906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1457749.4588606926,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1457670.4113924028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 40994.74655360597,
            "unit": "ns/iter",
            "extra": "iterations: 20166\ncpu: 40991.90717048489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 197560.35671847462,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 197549.6115173679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 156463.56073239885,
            "unit": "ns/iter",
            "extra": "iterations: 5516\ncpu: 156452.84626540958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 156470.9105972407,
            "unit": "ns/iter",
            "extra": "iterations: 5492\ncpu: 156461.87181354684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 147849.66459842076,
            "unit": "ns/iter",
            "extra": "iterations: 5802\ncpu: 147840.86521889034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 334228.3132715824,
            "unit": "ns/iter",
            "extra": "iterations: 2592\ncpu: 334211.61265432014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1933794.7178423577,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1933687.1369294678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1543174.4975124474,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1543081.7578772875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1605505.3473861997,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1605420.910623955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1530464.906403952,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1530376.8472906344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 891335.9722222249,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 891306.7049808436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1490195.4549839376,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1490140.6752411576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5481876.150000744,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5481435.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3266872.702797341,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3266658.741258729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27989.519601824977,
            "unit": "ns/iter",
            "extra": "iterations: 29334\ncpu: 27988.065043976232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 153692.60853268465,
            "unit": "ns/iter",
            "extra": "iterations: 5602\ncpu: 153681.72081399529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 116874.12171902948,
            "unit": "ns/iter",
            "extra": "iterations: 7353\ncpu: 116869.23704610326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 117834.81086658027,
            "unit": "ns/iter",
            "extra": "iterations: 7270\ncpu: 117825.68088033015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 113024.62103175298,
            "unit": "ns/iter",
            "extra": "iterations: 7560\ncpu: 113015.42328042249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 277446.86980166094,
            "unit": "ns/iter",
            "extra": "iterations: 3126\ncpu: 277425.52783109294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1908532.8691205601,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1908414.7239263693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1505407.524959721,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1505357.8099838982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1520269.730832107,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1520239.9673735786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1490738.2519936436,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1490722.1690590184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 845150.1018181386,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 845151.636363636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1453279.2830481578,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1453262.9860031172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3251.9893193902085,
            "unit": "ns/iter",
            "extra": "iterations: 214969\ncpu: 3251.947955286595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20625.656834173013,
            "unit": "ns/iter",
            "extra": "iterations: 33969\ncpu: 20625.649857222757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16873.29787953562,
            "unit": "ns/iter",
            "extra": "iterations: 41406\ncpu: 16872.27213447339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16241.221630916234,
            "unit": "ns/iter",
            "extra": "iterations: 43031\ncpu: 16240.758987706547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12009.884574430964,
            "unit": "ns/iter",
            "extra": "iterations: 58228\ncpu: 12009.641409631087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 104813.76350539569,
            "unit": "ns/iter",
            "extra": "iterations: 6664\ncpu: 104806.107442977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 131195.3649004308,
            "unit": "ns/iter",
            "extra": "iterations: 5322\ncpu: 131188.6884629829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32235.89767570929,
            "unit": "ns/iter",
            "extra": "iterations: 21598\ncpu: 32233.646633947432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32937.40827761557,
            "unit": "ns/iter",
            "extra": "iterations: 21238\ncpu: 32935.62953197117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32226.160798447927,
            "unit": "ns/iter",
            "extra": "iterations: 21642\ncpu: 32223.7408742259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65884.9771164932,
            "unit": "ns/iter",
            "extra": "iterations: 10619\ncpu: 65880.20529240026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 60004.770847629596,
            "unit": "ns/iter",
            "extra": "iterations: 11656\ncpu: 60001.55284831881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23552.945156193193,
            "unit": "ns/iter",
            "extra": "iterations: 29739\ncpu: 23551.50139547375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 114975.68488219604,
            "unit": "ns/iter",
            "extra": "iterations: 6112\ncpu: 114975.7035340312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95474.0995765644,
            "unit": "ns/iter",
            "extra": "iterations: 7321\ncpu: 95468.26936210843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95223.04836298963,
            "unit": "ns/iter",
            "extra": "iterations: 7361\ncpu: 95216.95421817634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95125.33832538582,
            "unit": "ns/iter",
            "extra": "iterations: 7345\ncpu: 95115.98366235447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 168194.18498915923,
            "unit": "ns/iter",
            "extra": "iterations: 4157\ncpu: 168184.82078421948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 558389.970470872,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 558388.1085395092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 463537.3649635298,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 463508.75912408315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 471931.5256757092,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 471888.37837838015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 471522.3277141504,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 471497.63991908124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 306659.4518389193,
            "unit": "ns/iter",
            "extra": "iterations: 2284\ncpu: 306628.458844135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 458233.23363874055,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 458230.7591622983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24010.977410620268,
            "unit": "ns/iter",
            "extra": "iterations: 29173\ncpu: 24009.796729853053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117489.44172806139,
            "unit": "ns/iter",
            "extra": "iterations: 5972\ncpu: 117485.18084393865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96973.78903769466,
            "unit": "ns/iter",
            "extra": "iterations: 7243\ncpu: 96959.07773022364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 94065.39532069367,
            "unit": "ns/iter",
            "extra": "iterations: 7437\ncpu: 94054.51122764437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95134.5965531256,
            "unit": "ns/iter",
            "extra": "iterations: 7369\ncpu: 95129.06771610811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 165845.3531227674,
            "unit": "ns/iter",
            "extra": "iterations: 4211\ncpu: 165832.55758727115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 557348.908802561,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 557337.7478191982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 467205.57849036955,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 467160.05344020715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 465710.36551260855,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 465672.5033288974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 461861.1164791517,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 461835.73792190466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 298209.7668372071,
            "unit": "ns/iter",
            "extra": "iterations: 2346\ncpu: 298167.9880647927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 454846.8458035437,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 454843.5914118473 ns\nthreads: 1"
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
        "date": 1702503245889,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8086.821498341806,
            "unit": "ns/iter",
            "extra": "iterations: 86509\ncpu: 8086.296223514317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58940.807900000895,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58938.80999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 108464.55911672968,
            "unit": "ns/iter",
            "extra": "iterations: 7925\ncpu: 108456.27760252365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 157929.0630614139,
            "unit": "ns/iter",
            "extra": "iterations: 5455\ncpu: 157921.09990834096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 207606.50179639555,
            "unit": "ns/iter",
            "extra": "iterations: 4175\ncpu: 207590.97005988032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 256828.5328791359,
            "unit": "ns/iter",
            "extra": "iterations: 3376\ncpu: 256823.87440758297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 305872.8261636266,
            "unit": "ns/iter",
            "extra": "iterations: 2836\ncpu: 305851.97461212974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 355468.8441080165,
            "unit": "ns/iter",
            "extra": "iterations: 2444\ncpu: 355438.7479541736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 405488.28238581656,
            "unit": "ns/iter",
            "extra": "iterations: 2146\ncpu: 405464.4454799628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6707.862693182265,
            "unit": "ns/iter",
            "extra": "iterations: 104241\ncpu: 6707.394403353771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5480.717820504321,
            "unit": "ns/iter",
            "extra": "iterations: 127791\ncpu: 5480.583139657715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5473.266264493588,
            "unit": "ns/iter",
            "extra": "iterations: 127640\ncpu: 5473.209025383893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5467.770261203487,
            "unit": "ns/iter",
            "extra": "iterations: 128176\ncpu: 5467.376888028971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9601.112519873539,
            "unit": "ns/iter",
            "extra": "iterations: 72956\ncpu: 9600.653818740075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31369.993238082432,
            "unit": "ns/iter",
            "extra": "iterations: 26176\ncpu: 31367.325030562388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 162930.61139601358,
            "unit": "ns/iter",
            "extra": "iterations: 5265\ncpu: 162920.20892687576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 124701.68744525204,
            "unit": "ns/iter",
            "extra": "iterations: 6850\ncpu: 124695.31386861319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 125809.05615012714,
            "unit": "ns/iter",
            "extra": "iterations: 6821\ncpu: 125801.62732737121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 119172.75722059212,
            "unit": "ns/iter",
            "extra": "iterations: 7167\ncpu: 119164.19701409216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 354284.7092278977,
            "unit": "ns/iter",
            "extra": "iterations: 2655\ncpu: 354264.70809792913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1926418.2645831814,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1926297.9166666674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1522586.6683085873,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1522533.004926109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1525832.416393396,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1525795.2459016389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1500808.8673137766,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1500785.1132686133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 846578.4657534297,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 846548.5844748842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1465172.2575040346,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1465137.5987361781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 41110.690430023096,
            "unit": "ns/iter",
            "extra": "iterations: 20115\ncpu: 41109.694258016454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 197302.35096152697,
            "unit": "ns/iter",
            "extra": "iterations: 4368\ncpu: 197298.7179487182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 153729.09471050478,
            "unit": "ns/iter",
            "extra": "iterations: 5596\ncpu: 153723.3202287349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 156029.51051866668,
            "unit": "ns/iter",
            "extra": "iterations: 5514\ncpu: 156022.74211098993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 148206.5964458235,
            "unit": "ns/iter",
            "extra": "iterations: 5796\ncpu: 148204.4685990337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 332136.3388208177,
            "unit": "ns/iter",
            "extra": "iterations: 2612\ncpu: 332128.4456355284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1995664.0451612177,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1995567.5268817225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1556622.56345187,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1556562.6057529568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1568656.919327829,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1568598.1512605103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1552107.1258278398,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1552067.21854304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 888960.0885466313,
            "unit": "ns/iter",
            "extra": "iterations: 1039\ncpu: 888934.9374398505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1512280.569805107,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1512230.0324675369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5466024.800000468,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5465809.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3355772.7338128635,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3355588.848920847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28791.319576383434,
            "unit": "ns/iter",
            "extra": "iterations: 28422\ncpu: 28789.75793399465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 155199.76646814056,
            "unit": "ns/iter",
            "extra": "iterations: 5541\ncpu: 155192.81718101416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 115912.20183609969,
            "unit": "ns/iter",
            "extra": "iterations: 7407\ncpu: 115906.57486161719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 119237.98914555345,
            "unit": "ns/iter",
            "extra": "iterations: 7186\ncpu: 119232.93904814914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 111519.59502410314,
            "unit": "ns/iter",
            "extra": "iterations: 7677\ncpu: 111515.24032825397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 272378.94614173693,
            "unit": "ns/iter",
            "extra": "iterations: 3175\ncpu: 272365.8267716536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1957464.1194967018,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1957386.5828092168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1511299.4652666003,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1511240.7108239164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1581084.57281546,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1581036.4077669894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1496353.4519231357,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1496290.3846153836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 835662.0816143344,
            "unit": "ns/iter",
            "extra": "iterations: 1115\ncpu: 835635.9641255605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1467982.2668759318,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1467907.692307697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3208.596782373606,
            "unit": "ns/iter",
            "extra": "iterations: 218857\ncpu: 3208.560384177791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20041.88847253839,
            "unit": "ns/iter",
            "extra": "iterations: 34960\ncpu: 20041.521739130447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16238.006558137913,
            "unit": "ns/iter",
            "extra": "iterations: 43000\ncpu: 16237.83953488365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16917.63755848261,
            "unit": "ns/iter",
            "extra": "iterations: 41466\ncpu: 16917.115226932892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12175.988219508137,
            "unit": "ns/iter",
            "extra": "iterations: 57383\ncpu: 12175.496227105617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 102116.97440000453,
            "unit": "ns/iter",
            "extra": "iterations: 6875\ncpu: 102109.83272727286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 134867.98751200503,
            "unit": "ns/iter",
            "extra": "iterations: 5205\ncpu: 134861.84438040375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32259.081654248137,
            "unit": "ns/iter",
            "extra": "iterations: 21738\ncpu: 32258.82785904859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32938.20994397225,
            "unit": "ns/iter",
            "extra": "iterations: 21239\ncpu: 32937.36522435154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32257.56648199722,
            "unit": "ns/iter",
            "extra": "iterations: 21660\ncpu: 32255.7756232686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66810.54170249782,
            "unit": "ns/iter",
            "extra": "iterations: 10467\ncpu: 66808.35960638219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61012.12216997609,
            "unit": "ns/iter",
            "extra": "iterations: 11484\ncpu: 61011.36363636353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24316.079165941137,
            "unit": "ns/iter",
            "extra": "iterations: 28775\ncpu: 24314.884448305704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 118908.05463830706,
            "unit": "ns/iter",
            "extra": "iterations: 5875\ncpu: 118903.38723404231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 96078.5642749419,
            "unit": "ns/iter",
            "extra": "iterations: 7289\ncpu: 96071.09342845347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95376.17847411588,
            "unit": "ns/iter",
            "extra": "iterations: 7340\ncpu: 95366.7438692099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94750.62097864634,
            "unit": "ns/iter",
            "extra": "iterations: 7398\ncpu: 94746.55312246569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170443.5227660142,
            "unit": "ns/iter",
            "extra": "iterations: 4107\ncpu: 170437.8621865111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 577343.8500823865,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 577306.3426688703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 470966.2948717856,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 470949.59514169744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 470941.71908599394,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 470898.3870967761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 469915.4887983745,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 469891.4460285079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 308307.46942368714,
            "unit": "ns/iter",
            "extra": "iterations: 2273\ncpu: 308280.2903651542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 462210.50992068026,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 462184.5899470889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24478.18770793095,
            "unit": "ns/iter",
            "extra": "iterations: 28555\ncpu: 24476.69760112041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118844.35036497483,
            "unit": "ns/iter",
            "extra": "iterations: 5891\ncpu: 118836.4963503657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 97458.05584957845,
            "unit": "ns/iter",
            "extra": "iterations: 7180\ncpu: 97446.25348189312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95408.66371681567,
            "unit": "ns/iter",
            "extra": "iterations: 7345\ncpu: 95400.36759700331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95787.4039961686,
            "unit": "ns/iter",
            "extra": "iterations: 7307\ncpu: 95786.35554947394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 165749.97140135593,
            "unit": "ns/iter",
            "extra": "iterations: 4196\ncpu: 165740.03813155595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 569179.3934958947,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 569143.4959349587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 473192.01282918395,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 473166.5091154611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 468357.9425133568,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 468352.6069518692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 463166.331564965,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 463132.75862068887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 306519.4189723002,
            "unit": "ns/iter",
            "extra": "iterations: 2277\ncpu: 306497.62845849653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 461112.63331142487,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 461061.5536537155 ns\nthreads: 1"
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
        "date": 1705574913162,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8074.272418823601,
            "unit": "ns/iter",
            "extra": "iterations: 86356\ncpu: 8073.521237667332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58724.17079999649,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58721.86999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 108108.84997478848,
            "unit": "ns/iter",
            "extra": "iterations: 7932\ncpu: 108104.95461422086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 157970.1425426491,
            "unit": "ns/iter",
            "extra": "iterations: 5451\ncpu: 157961.36488717663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 207556.78211889492,
            "unit": "ns/iter",
            "extra": "iterations: 4172\ncpu: 207559.3000958773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 257553.34373145644,
            "unit": "ns/iter",
            "extra": "iterations: 3366\ncpu: 257546.3458110518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 305908.2435580528,
            "unit": "ns/iter",
            "extra": "iterations: 2833\ncpu: 305878.4327567948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 354852.5932272576,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 354835.2101183188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 405116.84955753945,
            "unit": "ns/iter",
            "extra": "iterations: 2147\ncpu: 405104.09874243115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6702.207309949518,
            "unit": "ns/iter",
            "extra": "iterations: 104433\ncpu: 6702.103741154625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5490.791270404937,
            "unit": "ns/iter",
            "extra": "iterations: 126810\ncpu: 5490.481034618717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5496.504201352061,
            "unit": "ns/iter",
            "extra": "iterations: 127816\ncpu: 5496.328315703829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5497.607156647284,
            "unit": "ns/iter",
            "extra": "iterations: 126903\ncpu: 5497.598953531442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9513.257397616904,
            "unit": "ns/iter",
            "extra": "iterations: 73571\ncpu: 9513.077163556307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30847.261585364722,
            "unit": "ns/iter",
            "extra": "iterations: 26240\ncpu: 30846.69969512192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 161767.44243453018,
            "unit": "ns/iter",
            "extra": "iterations: 5307\ncpu: 161753.64612775572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 124960.61722628048,
            "unit": "ns/iter",
            "extra": "iterations: 6850\ncpu: 124956.94890510937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 125660.94926254111,
            "unit": "ns/iter",
            "extra": "iterations: 6780\ncpu: 125655.05899705015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 118028.55888828737,
            "unit": "ns/iter",
            "extra": "iterations: 7268\ncpu: 118023.88552559183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 361484.6451116505,
            "unit": "ns/iter",
            "extra": "iterations: 2598\ncpu: 361470.8237105464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1933362.3368198976,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1933327.8242677806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1522632.0441897828,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1522559.5744680837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1532056.328358161,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1532030.3482587067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1498665.1354837292,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1498604.6774193565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 840429.7554545791,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 840417.3636363636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1464498.7389239091,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1464386.7088607587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 40835.46788400821,
            "unit": "ns/iter",
            "extra": "iterations: 20208\ncpu: 40833.046318289795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 201850.62765707952,
            "unit": "ns/iter",
            "extra": "iterations: 4281\ncpu: 201840.36440084156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 154520.31189363135,
            "unit": "ns/iter",
            "extra": "iterations: 5566\ncpu: 154509.93532159567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 153446.26476867896,
            "unit": "ns/iter",
            "extra": "iterations: 5620\ncpu: 153439.44839857653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 149533.01915709546,
            "unit": "ns/iter",
            "extra": "iterations: 5742\ncpu: 149522.7272727276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 338642.57847003045,
            "unit": "ns/iter",
            "extra": "iterations: 2536\ncpu: 338634.46372239746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1992530.2222223573,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1992426.495726505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1569081.6973243156,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1569014.2140468254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1581271.0628183666,
            "unit": "ns/iter",
            "extra": "iterations: 589\ncpu: 1581144.8217317567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1528935.7754098645,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1528876.7213114807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 880887.3478673166,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 880793.7440758275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1510426.6699346402,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1510370.0980392133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5423861.619999571,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5423248.00000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3289537.0246477905,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3289404.577464804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28358.529285591325,
            "unit": "ns/iter",
            "extra": "iterations: 28905\ncpu: 28356.630340771684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 149244.5687467359,
            "unit": "ns/iter",
            "extra": "iterations: 5753\ncpu: 149239.07526507907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 117210.02941176116,
            "unit": "ns/iter",
            "extra": "iterations: 7310\ncpu: 117199.69904240816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 120610.91987630256,
            "unit": "ns/iter",
            "extra": "iterations: 7114\ncpu: 120608.47624402575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 111310.52449568141,
            "unit": "ns/iter",
            "extra": "iterations: 7634\ncpu: 111303.60230547565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 280713.97734627733,
            "unit": "ns/iter",
            "extra": "iterations: 3090\ncpu: 280699.3851132698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1947287.137499861,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1947156.2499999853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1511625.8260163001,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1511565.8536585306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1523477.7918033719,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1523366.0655737692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1499374.56661321,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1499342.6966292078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 838887.2407906961,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 838839.5327942529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1496100.553459139,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1496065.880503144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3205.8971150503166,
            "unit": "ns/iter",
            "extra": "iterations: 218652\ncpu: 3205.8609114026035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20773.846573392268,
            "unit": "ns/iter",
            "extra": "iterations: 33736\ncpu: 20773.867678444363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16167.506341100841,
            "unit": "ns/iter",
            "extra": "iterations: 43289\ncpu: 16167.13021783814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16884.709567609316,
            "unit": "ns/iter",
            "extra": "iterations: 41421\ncpu: 16884.22297868233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12032.712425178595,
            "unit": "ns/iter",
            "extra": "iterations: 57971\ncpu: 12031.872832968236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 104118.9343629357,
            "unit": "ns/iter",
            "extra": "iterations: 6734\ncpu: 104114.79061478992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 133409.33699633062,
            "unit": "ns/iter",
            "extra": "iterations: 5187\ncpu: 133401.2916907666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32316.028673010558,
            "unit": "ns/iter",
            "extra": "iterations: 21658\ncpu: 32314.45193461989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32876.255110192185,
            "unit": "ns/iter",
            "extra": "iterations: 21281\ncpu: 32874.06606832386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32529.866180164256,
            "unit": "ns/iter",
            "extra": "iterations: 21514\ncpu: 32528.8277400762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66750.25667684485,
            "unit": "ns/iter",
            "extra": "iterations: 10484\ncpu: 66748.03510110652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54155.49891557523,
            "unit": "ns/iter",
            "extra": "iterations: 12910\ncpu: 54154.92641363237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23735.6946136302,
            "unit": "ns/iter",
            "extra": "iterations: 29389\ncpu: 23735.948824390172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 114650.04064906343,
            "unit": "ns/iter",
            "extra": "iterations: 6101\ncpu: 114640.4687756105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94943.00895765847,
            "unit": "ns/iter",
            "extra": "iterations: 7368\ncpu: 94942.4945711191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95331.1484396265,
            "unit": "ns/iter",
            "extra": "iterations: 7370\ncpu: 95329.02306648601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94099.48656636312,
            "unit": "ns/iter",
            "extra": "iterations: 7444\ncpu: 94096.53412144016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170540.23486505923,
            "unit": "ns/iter",
            "extra": "iterations: 4113\ncpu: 170535.27838560665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 571369.7609755725,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 571344.9593495895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 473078.3615436414,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 473067.6371022328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 468677.4397590386,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 468660.5756358751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 467038.102204372,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 467031.596526383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 304928.79070776975,
            "unit": "ns/iter",
            "extra": "iterations: 2303\ncpu: 304916.4133738623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 459623.6233595544,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 459584.58005249634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23978.69166410409,
            "unit": "ns/iter",
            "extra": "iterations: 29283\ncpu: 23977.334972510074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 118048.82824877734,
            "unit": "ns/iter",
            "extra": "iterations: 5933\ncpu: 118043.3001854043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96749.18316694583,
            "unit": "ns/iter",
            "extra": "iterations: 7212\ncpu: 96743.19190238512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 94177.63346345162,
            "unit": "ns/iter",
            "extra": "iterations: 7429\ncpu: 94169.75366805792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95055.09128010401,
            "unit": "ns/iter",
            "extra": "iterations: 7351\ncpu: 95056.14202149388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 167697.67779914595,
            "unit": "ns/iter",
            "extra": "iterations: 4162\ncpu: 167696.0115329171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 564233.4481927466,
            "unit": "ns/iter",
            "extra": "iterations: 1245\ncpu: 564214.2168674666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 475559.5729877356,
            "unit": "ns/iter",
            "extra": "iterations: 1466\ncpu: 475559.07230559987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 466485.975349714,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 466491.73884076846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 460649.9129861227,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 460629.2682926877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 298060.08400849375,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 298041.0660980829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 458430.27373937936,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 458404.91159135365 ns\nthreads: 1"
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
        "date": 1705772691162,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8107.975359151678,
            "unit": "ns/iter",
            "extra": "iterations: 86036\ncpu: 8107.737458738203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58870.72149999994,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58868.71 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109268.72976069541,
            "unit": "ns/iter",
            "extra": "iterations: 7856\ncpu: 109265.98778004071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 158787.18663467103,
            "unit": "ns/iter",
            "extra": "iterations: 5417\ncpu: 158782.68414251425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 210475.46029445206,
            "unit": "ns/iter",
            "extra": "iterations: 4143\ncpu: 210467.6562877143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 258033.65402985783,
            "unit": "ns/iter",
            "extra": "iterations: 3350\ncpu: 258016.3880597016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 306045.47706423,
            "unit": "ns/iter",
            "extra": "iterations: 2834\ncpu: 306037.2971065631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 356172.1932050785,
            "unit": "ns/iter",
            "extra": "iterations: 2443\ncpu: 356154.5231273025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 406021.39720281196,
            "unit": "ns/iter",
            "extra": "iterations: 2145\ncpu: 406010.48951048957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6730.427353953673,
            "unit": "ns/iter",
            "extra": "iterations: 104197\ncpu: 6730.140982945767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5529.082847711924,
            "unit": "ns/iter",
            "extra": "iterations: 126642\ncpu: 5528.91220921969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5595.979106321428,
            "unit": "ns/iter",
            "extra": "iterations: 124631\ncpu: 5595.810833580726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5467.078000015366,
            "unit": "ns/iter",
            "extra": "iterations: 128141\ncpu: 5466.93642159809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9528.008456084,
            "unit": "ns/iter",
            "extra": "iterations: 73320\ncpu: 9527.805510092729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29750.174913991345,
            "unit": "ns/iter",
            "extra": "iterations: 27322\ncpu: 29749.20942829958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 151967.41170212405,
            "unit": "ns/iter",
            "extra": "iterations: 5640\ncpu: 151964.29078014175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115971.73480212018,
            "unit": "ns/iter",
            "extra": "iterations: 7353\ncpu: 115967.63225894194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116805.76701967946,
            "unit": "ns/iter",
            "extra": "iterations: 7271\ncpu: 116803.32829046909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110446.67707927892,
            "unit": "ns/iter",
            "extra": "iterations: 7683\ncpu: 110443.18625536923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 353750.7434161121,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 353731.97893152706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1884442.3312882504,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1884352.556237217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1502521.4910857643,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1502474.2301458637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1502029.7951220002,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1502001.7886178882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1464340.5933545376,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1464277.689873419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 862109.6756756973,
            "unit": "ns/iter",
            "extra": "iterations: 1073\ncpu: 862078.4715750257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1444799.3666146938,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1444760.686427456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 39302.51354057834,
            "unit": "ns/iter",
            "extra": "iterations: 20974\ncpu: 39301.38743205861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 185943.8575731426,
            "unit": "ns/iter",
            "extra": "iterations: 4648\ncpu: 185937.7581755589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 141817.15684975413,
            "unit": "ns/iter",
            "extra": "iterations: 6044\ncpu: 141811.82991396423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 147893.63603510108,
            "unit": "ns/iter",
            "extra": "iterations: 5811\ncpu: 147887.95388057147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 141817.9189412843,
            "unit": "ns/iter",
            "extra": "iterations: 6045\ncpu: 141813.449131514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 326738.50131928636,
            "unit": "ns/iter",
            "extra": "iterations: 2653\ncpu: 326721.7112702592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1939447.5344468956,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1939372.0250521947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1541187.9717609368,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1541108.9700996617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1552544.539101545,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1552470.216306155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1506247.1326860364,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1506127.9935275137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 892675.4051972975,
            "unit": "ns/iter",
            "extra": "iterations: 1039\ncpu: 892632.1462945105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1482987.0706260256,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1482893.7399679017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5518764.40000001,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5518293.999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3309433.4007091355,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3309190.4255319214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27863.357935212643,
            "unit": "ns/iter",
            "extra": "iterations: 29388\ncpu: 27862.038927453435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143611.54651747184,
            "unit": "ns/iter",
            "extra": "iterations: 5987\ncpu: 143603.39067980685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108873.09409218296,
            "unit": "ns/iter",
            "extra": "iterations: 7854\ncpu: 108866.45021645073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108863.86367108295,
            "unit": "ns/iter",
            "extra": "iterations: 7856\ncpu: 108858.91038696561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 104169.6619443091,
            "unit": "ns/iter",
            "extra": "iterations: 8188\ncpu: 104164.72887151936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 274099.62685157836,
            "unit": "ns/iter",
            "extra": "iterations: 3173\ncpu: 274083.0129215261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1894586.443991945,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1894487.576374746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1482963.7500000102,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1482875.9615384617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1481129.3189102896,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1481039.2628205135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1453797.8742139216,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1453709.2767295649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 851425.2740604216,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 851385.9761686493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1433023.8531683325,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1432972.0247295154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3241.425601432537,
            "unit": "ns/iter",
            "extra": "iterations: 216691\ncpu: 3241.2707495927475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20250.837534366477,
            "unit": "ns/iter",
            "extra": "iterations: 34555\ncpu: 20250.094052959066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16096.135899737845,
            "unit": "ns/iter",
            "extra": "iterations: 43407\ncpu: 16095.777178796046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16086.449145533183,
            "unit": "ns/iter",
            "extra": "iterations: 43536\ncpu: 16085.896729143771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12106.65711370081,
            "unit": "ns/iter",
            "extra": "iterations: 57818\ncpu: 12106.037912068914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 101510.49870205045,
            "unit": "ns/iter",
            "extra": "iterations: 6934\ncpu: 101504.52841072917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 134962.1853805707,
            "unit": "ns/iter",
            "extra": "iterations: 5308\ncpu: 134950.82893745264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32493.558551867634,
            "unit": "ns/iter",
            "extra": "iterations: 21545\ncpu: 32491.73358087723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33097.876571317036,
            "unit": "ns/iter",
            "extra": "iterations: 21081\ncpu: 33095.403443859286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32059.77389747852,
            "unit": "ns/iter",
            "extra": "iterations: 21791\ncpu: 32058.450736542396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 66886.58321397801,
            "unit": "ns/iter",
            "extra": "iterations: 10473\ncpu: 66882.58378688061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 60415.262803928425,
            "unit": "ns/iter",
            "extra": "iterations: 11598\ncpu: 60413.96792550424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22991.777628166834,
            "unit": "ns/iter",
            "extra": "iterations: 30449\ncpu: 22991.122861177624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113617.655239969,
            "unit": "ns/iter",
            "extra": "iterations: 6126\ncpu: 113616.5850473377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 91811.58711623991,
            "unit": "ns/iter",
            "extra": "iterations: 7622\ncpu: 91807.32091314626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91916.68112711827,
            "unit": "ns/iter",
            "extra": "iterations: 7630\ncpu: 91911.82175622489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91719.70193566101,
            "unit": "ns/iter",
            "extra": "iterations: 7646\ncpu: 91716.00837038945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 169101.46204060447,
            "unit": "ns/iter",
            "extra": "iterations: 4136\ncpu: 169096.9052224382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 560146.1655999628,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 560130.6399999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 460730.77221861953,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 460721.39565503784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 459943.4894736395,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 459922.1710526367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 457725.15926894307,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 457713.5770235001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 304066.78951926256,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 304057.81723690237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 453104.38561246294,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 453094.75048607367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23366.799013892596,
            "unit": "ns/iter",
            "extra": "iterations: 30017\ncpu: 23365.003164873066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 117829.3815700714,
            "unit": "ns/iter",
            "extra": "iterations: 5936\ncpu: 117822.13611859691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93554.39388273186,
            "unit": "ns/iter",
            "extra": "iterations: 7487\ncpu: 93548.13677040287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90164.70202606652,
            "unit": "ns/iter",
            "extra": "iterations: 7749\ncpu: 90158.84630274886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91892.39635266106,
            "unit": "ns/iter",
            "extra": "iterations: 7622\ncpu: 91890.84229860846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 162639.03258845222,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 162632.82122905023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 553334.4280094401,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 553300.786782055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 462696.8523178745,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 462681.9205298042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 454968.0447180954,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 454958.91121192655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 451345.4570690857,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 451311.29761135887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 303705.5734204727,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 303691.7647058865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 448012.4922480473,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 447991.60206718906 ns\nthreads: 1"
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
        "date": 1705774124813,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8053.754122177292,
            "unit": "ns/iter",
            "extra": "iterations: 86726\ncpu: 8053.056753453407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58451.57129999734,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58445.72 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 108017.91442572795,
            "unit": "ns/iter",
            "extra": "iterations: 7958\ncpu: 108009.7637597386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 157189.51489827462,
            "unit": "ns/iter",
            "extra": "iterations: 5504\ncpu: 157177.41642441862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 206519.2941316783,
            "unit": "ns/iter",
            "extra": "iterations: 4192\ncpu: 206503.1965648856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 255105.34799181073,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 255080.47493403696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 304128.8493533413,
            "unit": "ns/iter",
            "extra": "iterations: 2861\ncpu: 304109.19259000354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 352947.49472831923,
            "unit": "ns/iter",
            "extra": "iterations: 2466\ncpu: 352942.3763179237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 402397.6241890829,
            "unit": "ns/iter",
            "extra": "iterations: 2158\ncpu: 402297.6830398511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6685.474189812834,
            "unit": "ns/iter",
            "extra": "iterations: 104513\ncpu: 6683.94840833196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5441.250044519712,
            "unit": "ns/iter",
            "extra": "iterations: 129157\ncpu: 5439.965313533146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5531.895028191172,
            "unit": "ns/iter",
            "extra": "iterations: 126815\ncpu: 5531.3243701455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5439.192577803095,
            "unit": "ns/iter",
            "extra": "iterations: 128722\ncpu: 5439.103649725765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9583.998554084974,
            "unit": "ns/iter",
            "extra": "iterations: 73310\ncpu: 9583.6734415496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30654.409662198716,
            "unit": "ns/iter",
            "extra": "iterations: 26495\ncpu: 30652.80996414421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 163374.23192826702,
            "unit": "ns/iter",
            "extra": "iterations: 5243\ncpu: 163366.73660118235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118817.99763659204,
            "unit": "ns/iter",
            "extra": "iterations: 7193\ncpu: 118802.66926178255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118689.89054109773,
            "unit": "ns/iter",
            "extra": "iterations: 7263\ncpu: 118625.49910505308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111689.61098007257,
            "unit": "ns/iter",
            "extra": "iterations: 7632\ncpu: 111680.29350104851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 348251.85503507353,
            "unit": "ns/iter",
            "extra": "iterations: 2711\ncpu: 348224.861674658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1937204.8562366506,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1937068.0761099379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1518733.2303921394,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1518558.1699346395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1514505.1870967285,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1512015.16129032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1472638.5920001122,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1472518.4000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 843261.7281910094,
            "unit": "ns/iter",
            "extra": "iterations: 1089\ncpu: 843210.5601469233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1459349.0382165206,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1459233.7579617829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 41085.71153462404,
            "unit": "ns/iter",
            "extra": "iterations: 20044\ncpu: 41082.58830572744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 195228.7294303675,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 195218.73869801115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 149055.29380194118,
            "unit": "ns/iter",
            "extra": "iterations: 5776\ncpu: 149045.58518005506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 146203.46460704427,
            "unit": "ns/iter",
            "extra": "iterations: 5891\ncpu: 146192.63282973995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 139234.91768342385,
            "unit": "ns/iter",
            "extra": "iterations: 6147\ncpu: 139222.69399707223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 323039.27045196627,
            "unit": "ns/iter",
            "extra": "iterations: 2677\ncpu: 323026.1486738882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1999771.7118280155,
            "unit": "ns/iter",
            "extra": "iterations: 465\ncpu: 1999641.2903225827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1554947.7483331962,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1554825.666666666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1553582.2800001143,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1553427.1666666656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1530843.5871710612,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1530717.5986842134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 878544.687795628,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 878471.4285714274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1505497.1944894015,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1505380.3889789274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5431572.029999643,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5431189.000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3245830.2972027585,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3245637.4125874266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28405.830702121228,
            "unit": "ns/iter",
            "extra": "iterations: 28884\ncpu: 28402.7073812492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 152710.58238434896,
            "unit": "ns/iter",
            "extra": "iterations: 5620\ncpu: 152699.359430606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111367.40472807354,
            "unit": "ns/iter",
            "extra": "iterations: 7741\ncpu: 111356.51724583391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113252.9201747387,
            "unit": "ns/iter",
            "extra": "iterations: 7554\ncpu: 113241.73947577503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103732.20176298403,
            "unit": "ns/iter",
            "extra": "iterations: 8168\ncpu: 103724.05729676865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 280870.7542949872,
            "unit": "ns/iter",
            "extra": "iterations: 3085\ncpu: 280844.40842787694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1950259.9110169439,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1950090.4661016848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1512204.5640194817,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1512087.5202593182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1500331.1970919548,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1500167.2051696305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1486621.457142757,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1486511.1111111182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 840212.5091240486,
            "unit": "ns/iter",
            "extra": "iterations: 1096\ncpu: 840134.1240875951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1463420.687106994,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1463298.8993710726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3187.1886659158226,
            "unit": "ns/iter",
            "extra": "iterations: 219409\ncpu: 3186.857421527835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 21036.12807851875,
            "unit": "ns/iter",
            "extra": "iterations: 33214\ncpu: 21034.097067501538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16754.57397989772,
            "unit": "ns/iter",
            "extra": "iterations: 41883\ncpu: 16752.9952486689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16834.189982437852,
            "unit": "ns/iter",
            "extra": "iterations: 41567\ncpu: 16832.83854981124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12038.325125267193,
            "unit": "ns/iter",
            "extra": "iterations: 58276\ncpu: 12037.264053812822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 100177.06581014491,
            "unit": "ns/iter",
            "extra": "iterations: 7005\ncpu: 100170.86366880825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 132003.98725993297,
            "unit": "ns/iter",
            "extra": "iterations: 5259\ncpu: 131994.44761361415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31919.92956525977,
            "unit": "ns/iter",
            "extra": "iterations: 21921\ncpu: 31917.955385247158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32390.151672139895,
            "unit": "ns/iter",
            "extra": "iterations: 21619\ncpu: 32388.00592071797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31739.77865957118,
            "unit": "ns/iter",
            "extra": "iterations: 21799\ncpu: 31737.767787513174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65564.91250116595,
            "unit": "ns/iter",
            "extra": "iterations: 10663\ncpu: 65558.75457188401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 59822.276144910524,
            "unit": "ns/iter",
            "extra": "iterations: 11704\ncpu: 59816.806220095765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23138.19252758766,
            "unit": "ns/iter",
            "extra": "iterations: 30084\ncpu: 23135.87288924344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 114765.51284148128,
            "unit": "ns/iter",
            "extra": "iterations: 6113\ncpu: 114752.57647636143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94816.05077914994,
            "unit": "ns/iter",
            "extra": "iterations: 7444\ncpu: 94808.47662546954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 94760.05081547753,
            "unit": "ns/iter",
            "extra": "iterations: 7419\ncpu: 94755.19611807521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93117.10452355235,
            "unit": "ns/iter",
            "extra": "iterations: 7472\ncpu: 93109.02034261217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 169307.1748607368,
            "unit": "ns/iter",
            "extra": "iterations: 4129\ncpu: 169293.65463792844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 570239.8489795867,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 570174.204081628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 461414.5230460761,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 461374.68269872887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 464173.93774836516,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 464140.59602648614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 459380.40748034185,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 459352.49343831977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 303466.0704712433,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 303446.217034157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 455921.1910621896,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 455880.2461139862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23926.9970642452,
            "unit": "ns/iter",
            "extra": "iterations: 29294\ncpu: 23925.11435788889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 114934.17172878498,
            "unit": "ns/iter",
            "extra": "iterations: 6091\ncpu: 114927.97570185596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95012.39597770825,
            "unit": "ns/iter",
            "extra": "iterations: 7359\ncpu: 95007.41948634347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92407.63862558096,
            "unit": "ns/iter",
            "extra": "iterations: 7596\ncpu: 92399.223275408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 93888.68088805408,
            "unit": "ns/iter",
            "extra": "iterations: 7477\ncpu: 93880.21933930817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 165345.41062114574,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 165330.41725936387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 562011.2884614788,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 561975.0000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 467163.16045272065,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 465982.8894806985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 455903.44596354215,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 455861.19791666634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 460386.25377053395,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 460349.5737704973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 298561.2318471387,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 298534.69214437774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 451280.2299222215,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 451258.03108807694 ns\nthreads: 1"
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
        "date": 1705777706679,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8090.1770604367175,
            "unit": "ns/iter",
            "extra": "iterations: 88258\ncpu: 8089.672324321876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59040.2145999974,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59037.069999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 109350.52814127764,
            "unit": "ns/iter",
            "extra": "iterations: 7871\ncpu: 109348.86291449623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 157553.26063049643,
            "unit": "ns/iter",
            "extra": "iterations: 5456\ncpu: 157549.4501466276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 206428.37291370681,
            "unit": "ns/iter",
            "extra": "iterations: 4194\ncpu: 206411.42107773005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 256260.73467573998,
            "unit": "ns/iter",
            "extra": "iterations: 3377\ncpu: 256254.6639028723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 303431.8744755081,
            "unit": "ns/iter",
            "extra": "iterations: 2860\ncpu: 303423.8111888112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 353386.76097559644,
            "unit": "ns/iter",
            "extra": "iterations: 2460\ncpu: 353375.44715447165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 402821.70319001935,
            "unit": "ns/iter",
            "extra": "iterations: 2163\ncpu: 402819.78733240836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6712.135142389768,
            "unit": "ns/iter",
            "extra": "iterations: 104327\ncpu: 6711.934590278646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5596.056499401123,
            "unit": "ns/iter",
            "extra": "iterations: 126904\ncpu: 5590.762308516674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5514.966167546401,
            "unit": "ns/iter",
            "extra": "iterations: 126890\ncpu: 5514.626054062586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5452.860037718921,
            "unit": "ns/iter",
            "extra": "iterations: 128849\ncpu: 5452.786595161775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9600.580609797273,
            "unit": "ns/iter",
            "extra": "iterations: 72975\ncpu: 9599.817745803362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29821.1295446274,
            "unit": "ns/iter",
            "extra": "iterations: 27450\ncpu: 29819.304189435377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 158677.60207291172,
            "unit": "ns/iter",
            "extra": "iterations: 5403\ncpu: 158668.75809735322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 121228.34606137943,
            "unit": "ns/iter",
            "extra": "iterations: 7071\ncpu: 121226.6723235753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 123545.36413356582,
            "unit": "ns/iter",
            "extra": "iterations: 6948\ncpu: 123540.42890040284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 116641.9857221276,
            "unit": "ns/iter",
            "extra": "iterations: 7284\ncpu: 116638.82482152684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 350146.41756208544,
            "unit": "ns/iter",
            "extra": "iterations: 2699\ncpu: 350129.7517599107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1916506.7293388892,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1916403.3057851277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1492237.4357005302,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1492180.0383877154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1516374.4517184405,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1516319.9672667726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1493178.8443017546,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1493091.1717495986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 833636.4702166801,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 833585.2888086617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1454816.8459119399,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1454790.723270442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 39492.754682724866,
            "unit": "ns/iter",
            "extra": "iterations: 20928\ncpu: 39490.5867737003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 197524.7059092026,
            "unit": "ns/iter",
            "extra": "iterations: 4383\ncpu: 197513.57517681926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 151890.23131170418,
            "unit": "ns/iter",
            "extra": "iterations: 5672\ncpu: 151880.0246826515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 150880.23139044794,
            "unit": "ns/iter",
            "extra": "iterations: 5696\ncpu: 150869.92626404527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 141165.67559523656,
            "unit": "ns/iter",
            "extra": "iterations: 6048\ncpu: 141157.29166666695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 329706.4417364953,
            "unit": "ns/iter",
            "extra": "iterations: 2626\ncpu: 329685.45316070033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1981928.6417909358,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1981793.8166311297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1534658.9355371073,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1534540.1652892588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1559868.1308724598,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1559761.9127516763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1527977.2266008782,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1527887.3563218392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 880443.458412141,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 880375.0472589793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1501614.9661291013,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1501518.7096774261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5402172.660000133,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5401675.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3188162.441780565,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3188086.6438356214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27329.71870087514,
            "unit": "ns/iter",
            "extra": "iterations: 29897\ncpu: 27328.4878081414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 155882.9418162109,
            "unit": "ns/iter",
            "extra": "iterations: 5517\ncpu: 155877.72340039845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 112502.95730986289,
            "unit": "ns/iter",
            "extra": "iterations: 7613\ncpu: 112496.54538289827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 115193.14709832656,
            "unit": "ns/iter",
            "extra": "iterations: 7444\ncpu: 115189.70983342339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 107973.79739471439,
            "unit": "ns/iter",
            "extra": "iterations: 7907\ncpu: 107968.21803465213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 270674.9373246206,
            "unit": "ns/iter",
            "extra": "iterations: 3207\ncpu: 270666.3236669797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1975082.7838982937,
            "unit": "ns/iter",
            "extra": "iterations: 472\ncpu: 1975000.6355932164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1508327.9627832733,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1508302.1035598735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1529866.674304432,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1529815.057283141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1522484.3584289125,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1522429.4599018018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 842974.3730664365,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 842940.8553230208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1480157.473767919,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1480117.6470588208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3178.647719917739,
            "unit": "ns/iter",
            "extra": "iterations: 220935\ncpu: 3178.516305700788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20475.206563031395,
            "unit": "ns/iter",
            "extra": "iterations: 34222\ncpu: 20474.349833440392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16122.359314359015,
            "unit": "ns/iter",
            "extra": "iterations: 43288\ncpu: 16121.809739419567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16728.13514288508,
            "unit": "ns/iter",
            "extra": "iterations: 41852\ncpu: 16727.876803975883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11987.718483283856,
            "unit": "ns/iter",
            "extra": "iterations: 58231\ncpu: 11987.070460751082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 100143.19672836602,
            "unit": "ns/iter",
            "extra": "iterations: 6969\ncpu: 100139.73310374464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 135340.88391471704,
            "unit": "ns/iter",
            "extra": "iterations: 5160\ncpu: 135337.61627906936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32574.030766367894,
            "unit": "ns/iter",
            "extra": "iterations: 21517\ncpu: 32573.588325509867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32883.69038109163,
            "unit": "ns/iter",
            "extra": "iterations: 21281\ncpu: 32882.55721065747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32338.844465998598,
            "unit": "ns/iter",
            "extra": "iterations: 21648\ncpu: 32338.35920177397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65654.03575525757,
            "unit": "ns/iter",
            "extra": "iterations: 10460\ncpu: 65652.37093690276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 60756.92371188328,
            "unit": "ns/iter",
            "extra": "iterations: 11509\ncpu: 60753.723173168626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23858.207820964744,
            "unit": "ns/iter",
            "extra": "iterations: 29357\ncpu: 23857.819259461216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112380.87861271722,
            "unit": "ns/iter",
            "extra": "iterations: 6228\ncpu: 112376.92678227337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95129.32773336697,
            "unit": "ns/iter",
            "extra": "iterations: 7381\ncpu: 95125.09145102416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93137.00146336213,
            "unit": "ns/iter",
            "extra": "iterations: 7517\ncpu: 93133.35107090554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 92659.77608782405,
            "unit": "ns/iter",
            "extra": "iterations: 7561\ncpu: 92656.76497817814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 172074.93753061237,
            "unit": "ns/iter",
            "extra": "iterations: 4082\ncpu: 172068.6918177363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 582269.7620632525,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 582249.4176372736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 467684.2906666631,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 467672.06666666537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 472254.26788126625,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 472239.06882590306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 466551.7375082652,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 466529.7801465689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 300027.2756989161,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 300016.7311827948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 463999.56052633683,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 463971.57894736476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23664.5403103132,
            "unit": "ns/iter",
            "extra": "iterations: 29583\ncpu: 23664.07058107686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113416.95944191172,
            "unit": "ns/iter",
            "extra": "iterations: 6164\ncpu: 113411.58338740986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95429.8987566591,
            "unit": "ns/iter",
            "extra": "iterations: 7319\ncpu: 95428.33720453488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93652.18361355174,
            "unit": "ns/iter",
            "extra": "iterations: 7494\ncpu: 93648.47878302699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94075.61740998598,
            "unit": "ns/iter",
            "extra": "iterations: 7444\ncpu: 94070.71466953248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 165832.11785629112,
            "unit": "ns/iter",
            "extra": "iterations: 4217\ncpu: 165825.94261323113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 577218.7261513108,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 577185.7730263219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 472000.13862721185,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 471986.27187079523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 468390.45911525463,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 468371.6487935707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 466413.78690715303,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 466392.71877087693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 298655.6058020719,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 298650.4266211622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 459355.7626895309,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 459337.9696769953 ns\nthreads: 1"
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
        "date": 1705952882096,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7979.552603977158,
            "unit": "ns/iter",
            "extra": "iterations: 87712\ncpu: 7978.969810288218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57090.3029999954,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57087.24 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 105476.02850122393,
            "unit": "ns/iter",
            "extra": "iterations: 8140\ncpu: 105469.2014742015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 152567.38709675946,
            "unit": "ns/iter",
            "extra": "iterations: 5642\ncpu: 152561.14852889045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 200858.6271970555,
            "unit": "ns/iter",
            "extra": "iterations: 4324\ncpu: 200848.70490286767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 248812.53452242338,
            "unit": "ns/iter",
            "extra": "iterations: 3476\ncpu: 248800.97813578811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 294878.68789585633,
            "unit": "ns/iter",
            "extra": "iterations: 2842\ncpu: 294862.2097114708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 343406.8370078722,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 343398.1102362204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 390184.5430493365,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 390159.68609865516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6778.14455038108,
            "unit": "ns/iter",
            "extra": "iterations: 103521\ncpu: 6777.874054539651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5535.466378094244,
            "unit": "ns/iter",
            "extra": "iterations: 126138\ncpu: 5535.1678320569545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5537.019995572797,
            "unit": "ns/iter",
            "extra": "iterations: 126478\ncpu: 5536.6063663245895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5484.176413516185,
            "unit": "ns/iter",
            "extra": "iterations: 126776\ncpu: 5484.124755474213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9447.238119722619,
            "unit": "ns/iter",
            "extra": "iterations: 73904\ncpu: 9446.564462004762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31805.97479220107,
            "unit": "ns/iter",
            "extra": "iterations: 25746\ncpu: 31804.738600170862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 158006.78542509952,
            "unit": "ns/iter",
            "extra": "iterations: 5434\ncpu: 157998.30695620162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 123612.20529130401,
            "unit": "ns/iter",
            "extra": "iterations: 6917\ncpu: 123608.86222350721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 122548.64788733418,
            "unit": "ns/iter",
            "extra": "iterations: 6958\ncpu: 122541.64989939642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 117312.31008390788,
            "unit": "ns/iter",
            "extra": "iterations: 7269\ncpu: 117307.73146237456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 360865.11839080596,
            "unit": "ns/iter",
            "extra": "iterations: 2610\ncpu: 360845.3639846746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1889916.0285131235,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1889808.9613034609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1497729.6893202374,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1497627.3462783156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1486857.7849117639,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1486833.7078651674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1456945.0535432906,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1456860.6299212626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 821045.5788067939,
            "unit": "ns/iter",
            "extra": "iterations: 1123\ncpu: 821007.7471059657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1430327.0279069764,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1430233.6434108533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 42016.96386093015,
            "unit": "ns/iter",
            "extra": "iterations: 19674\ncpu: 42014.04391582801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 190119.74802457186,
            "unit": "ns/iter",
            "extra": "iterations: 4556\ncpu: 190111.23792800683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 151240.6056982127,
            "unit": "ns/iter",
            "extra": "iterations: 5686\ncpu: 151230.3200844175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 153351.46406972545,
            "unit": "ns/iter",
            "extra": "iterations: 5622\ncpu: 153339.45215225915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 149796.76933796742,
            "unit": "ns/iter",
            "extra": "iterations: 5740\ncpu: 149788.10104529638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 342570.3025477437,
            "unit": "ns/iter",
            "extra": "iterations: 2512\ncpu: 342549.1242038215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1960390.9684872273,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1960276.050420165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1541506.2731788878,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1541455.463576158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1511875.3895253628,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1511798.854337158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1499691.2147435928,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1499648.076923075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 879656.0975378344,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 879603.8825757632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1469649.9269840994,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1469592.8571428559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5374060.749999217,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5373622.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3218970.761245728,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3218880.276816625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29324.75091247347,
            "unit": "ns/iter",
            "extra": "iterations: 27946\ncpu: 29322.919201316854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 150184.28534259193,
            "unit": "ns/iter",
            "extra": "iterations: 5765\ncpu: 150175.64614050245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114374.50997339952,
            "unit": "ns/iter",
            "extra": "iterations: 7520\ncpu: 114367.4335106381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 115166.38898567394,
            "unit": "ns/iter",
            "extra": "iterations: 7463\ncpu: 115162.62896958296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 109995.48290871509,
            "unit": "ns/iter",
            "extra": "iterations: 7811\ncpu: 109987.56881321207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 282627.578450508,
            "unit": "ns/iter",
            "extra": "iterations: 3072\ncpu: 282608.5937499996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1892681.1955192396,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1892584.3177189424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1496091.66773686,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1496017.1749598724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1455587.0563380094,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1455468.3881064141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1443485.1953488097,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1443462.3255813979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 808784.001743673,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 808745.4228422017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1421130.4473281917,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1421081.2213740477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3201.6074864156426,
            "unit": "ns/iter",
            "extra": "iterations: 218823\ncpu: 3201.422610968669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20426.730815295123,
            "unit": "ns/iter",
            "extra": "iterations: 34233\ncpu: 20426.21739257443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16698.156878191552,
            "unit": "ns/iter",
            "extra": "iterations: 41886\ncpu: 16697.419185408016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16743.842811119226,
            "unit": "ns/iter",
            "extra": "iterations: 41905\ncpu: 16743.70361532032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12043.32203564913,
            "unit": "ns/iter",
            "extra": "iterations: 58124\ncpu: 12042.521161654491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103926.96000592965,
            "unit": "ns/iter",
            "extra": "iterations: 6751\ncpu: 103920.57472966959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 131742.94392172064,
            "unit": "ns/iter",
            "extra": "iterations: 5314\ncpu: 131736.563793753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32230.806585116225,
            "unit": "ns/iter",
            "extra": "iterations: 21746\ncpu: 32230.157270302512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32592.623138496027,
            "unit": "ns/iter",
            "extra": "iterations: 21488\ncpu: 32590.95774385692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31993.757998993682,
            "unit": "ns/iter",
            "extra": "iterations: 21909\ncpu: 31991.743119266146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 65169.82899628953,
            "unit": "ns/iter",
            "extra": "iterations: 10760\ncpu: 65167.444237918084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57122.79200652698,
            "unit": "ns/iter",
            "extra": "iterations: 12260\ncpu: 57119.22512234893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24299.686163609884,
            "unit": "ns/iter",
            "extra": "iterations: 28996\ncpu: 24299.46544350945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112482.69951846068,
            "unit": "ns/iter",
            "extra": "iterations: 6230\ncpu: 112475.61797752883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93818.00227303724,
            "unit": "ns/iter",
            "extra": "iterations: 7479\ncpu: 93811.00414493862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93894.94535445544,
            "unit": "ns/iter",
            "extra": "iterations: 7448\ncpu: 93888.41299677835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 92348.32529645029,
            "unit": "ns/iter",
            "extra": "iterations: 7590\ncpu: 92345.99472990743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170552.6202933819,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 170548.0195599036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 562802.437198002,
            "unit": "ns/iter",
            "extra": "iterations: 1242\ncpu: 562775.764895326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 461247.13143996394,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 461238.70541611523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 464076.2961741385,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 464062.26912928297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 457398.39437541476,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 457364.87900588644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 300865.52554745827,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 300851.95362816565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 454501.95548387605,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 454470.25806451374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23939.45661241508,
            "unit": "ns/iter",
            "extra": "iterations: 29248\ncpu: 23939.264223194557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 116190.30728299696,
            "unit": "ns/iter",
            "extra": "iterations: 6014\ncpu: 116181.74260059894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94983.11526479428,
            "unit": "ns/iter",
            "extra": "iterations: 7383\ncpu: 94977.421102532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93258.17856668982,
            "unit": "ns/iter",
            "extra": "iterations: 7521\ncpu: 93255.03257545577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94872.93276630677,
            "unit": "ns/iter",
            "extra": "iterations: 7407\ncpu: 94869.08329958175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 164037.26012643866,
            "unit": "ns/iter",
            "extra": "iterations: 4271\ncpu: 164036.01030203962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 555987.4810126183,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 555936.4715189879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 465041.6972111959,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 465034.5285524515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 459785.28047187504,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 459750.00000000704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 458241.9501639379,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 458226.62295081763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 299338.0409556105,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 299321.71501706936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 451055.26890756696,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 451028.7653522898 ns\nthreads: 1"
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
        "date": 1705954325714,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7964.807966022519,
            "unit": "ns/iter",
            "extra": "iterations: 87823\ncpu: 7964.497910570124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57604.98719999987,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57598.87 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 105409.44456776528,
            "unit": "ns/iter",
            "extra": "iterations: 8109\ncpu: 105408.1514366753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 153824.69367588905,
            "unit": "ns/iter",
            "extra": "iterations: 5566\ncpu: 153815.1455264103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 201680.30916298166,
            "unit": "ns/iter",
            "extra": "iterations: 4289\ncpu: 201671.29867101894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 260064.12070458417,
            "unit": "ns/iter",
            "extra": "iterations: 3463\ncpu: 260056.5983251516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 296621.4812779071,
            "unit": "ns/iter",
            "extra": "iterations: 2911\ncpu: 296613.7753349362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 345040.9357143028,
            "unit": "ns/iter",
            "extra": "iterations: 2520\ncpu: 345010.67460317444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 391528.4298602149,
            "unit": "ns/iter",
            "extra": "iterations: 2217\ncpu: 391514.9751917004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6630.820729994046,
            "unit": "ns/iter",
            "extra": "iterations: 105316\ncpu: 6630.51293250788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5688.058457750535,
            "unit": "ns/iter",
            "extra": "iterations: 126724\ncpu: 5687.84050377197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5453.3393928066025,
            "unit": "ns/iter",
            "extra": "iterations: 128394\ncpu: 5453.157468417529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5653.474441869939,
            "unit": "ns/iter",
            "extra": "iterations: 127748\ncpu: 5653.177349156162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9680.965949146574,
            "unit": "ns/iter",
            "extra": "iterations: 71775\ncpu: 9680.663183559738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 33027.57903030039,
            "unit": "ns/iter",
            "extra": "iterations: 24750\ncpu: 33025.18383838383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 162787.44518083485,
            "unit": "ns/iter",
            "extra": "iterations: 5281\ncpu: 162778.4889225524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 122756.27717235315,
            "unit": "ns/iter",
            "extra": "iterations: 6974\ncpu: 122753.01118439918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 122359.33447734604,
            "unit": "ns/iter",
            "extra": "iterations: 6993\ncpu: 122353.75375375418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 114629.95410628866,
            "unit": "ns/iter",
            "extra": "iterations: 7452\ncpu: 114630.17981749863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 361271.2161063704,
            "unit": "ns/iter",
            "extra": "iterations: 2707\ncpu: 361255.44883635064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1882545.6666666232,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1882460.327198365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1523387.1644736265,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1523270.7236842124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1526796.775244407,
            "unit": "ns/iter",
            "extra": "iterations: 614\ncpu: 1525735.0162866435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1465685.014285634,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1465636.5079365026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 835608.5348415485,
            "unit": "ns/iter",
            "extra": "iterations: 1105\ncpu: 835575.20361991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1449312.2021772612,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1449218.6625194363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 40920.865567091,
            "unit": "ns/iter",
            "extra": "iterations: 20129\ncpu: 40918.27711262348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 197953.58006387457,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 197939.32481751897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 151965.50845069758,
            "unit": "ns/iter",
            "extra": "iterations: 5680\ncpu: 151955.42253521137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 154012.15716296446,
            "unit": "ns/iter",
            "extra": "iterations: 5682\ncpu: 153993.85779655006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 142758.35591810028,
            "unit": "ns/iter",
            "extra": "iterations: 6007\ncpu: 142751.10704178453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 339882.1167513098,
            "unit": "ns/iter",
            "extra": "iterations: 2561\ncpu: 339853.49472862197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1944730.6054280677,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1944626.7223382168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1573172.2094592918,
            "unit": "ns/iter",
            "extra": "iterations: 592\ncpu: 1573061.3175675625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1559997.3653198192,
            "unit": "ns/iter",
            "extra": "iterations: 594\ncpu: 1559881.1447811539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1509657.9708736788,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1509548.0582524233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 894565.296260793,
            "unit": "ns/iter",
            "extra": "iterations: 1043\ncpu: 894496.1649089191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1491317.99678457,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1491230.225080393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5462756.039999021,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5462463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3209049.048109982,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3208775.2577319685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28870.22847493956,
            "unit": "ns/iter",
            "extra": "iterations: 28130\ncpu: 28868.407394241025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 157296.11267347084,
            "unit": "ns/iter",
            "extra": "iterations: 5476\ncpu: 157288.45872899937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 116232.44317873947,
            "unit": "ns/iter",
            "extra": "iterations: 7374\ncpu: 116224.76267968539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 114663.91730228992,
            "unit": "ns/iter",
            "extra": "iterations: 7473\ncpu: 114652.48226950325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 108357.10495163797,
            "unit": "ns/iter",
            "extra": "iterations: 6927\ncpu: 108348.7223906456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 269269.0999069174,
            "unit": "ns/iter",
            "extra": "iterations: 3223\ncpu: 269251.9081601005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1888041.7914979244,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1887969.230769224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1505629.1809370741,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1505527.1405492714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1486913.2376395175,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1486803.3492822913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1457986.3703124472,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1457929.2187499981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 823386.882042258,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 823337.7640845068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1439079.1620370199,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1439009.7222222218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3214.0024030366417,
            "unit": "ns/iter",
            "extra": "iterations: 216809\ncpu: 3213.9251599333793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20863.326621925444,
            "unit": "ns/iter",
            "extra": "iterations: 33525\ncpu: 20863.090231170834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15416.203566549377,
            "unit": "ns/iter",
            "extra": "iterations: 45366\ncpu: 15415.723228849778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16156.06426788807,
            "unit": "ns/iter",
            "extra": "iterations: 43272\ncpu: 16154.922351636245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12089.719390663298,
            "unit": "ns/iter",
            "extra": "iterations: 57899\ncpu: 12089.184614587468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 104373.18210290915,
            "unit": "ns/iter",
            "extra": "iterations: 6705\ncpu: 104365.04101416873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 130420.07117571696,
            "unit": "ns/iter",
            "extra": "iterations: 5367\ncpu: 130410.76951742121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 32334.536840647677,
            "unit": "ns/iter",
            "extra": "iterations: 21688\ncpu: 32331.081704168286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32245.157575450336,
            "unit": "ns/iter",
            "extra": "iterations: 19781\ncpu: 32243.501339669423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31882.00342668743,
            "unit": "ns/iter",
            "extra": "iterations: 21887\ncpu: 31878.416411568614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64924.3845369491,
            "unit": "ns/iter",
            "extra": "iterations: 10787\ncpu: 64921.15509409487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 59485.356562629,
            "unit": "ns/iter",
            "extra": "iterations: 11695\ncpu: 59483.240701154195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23806.814989804298,
            "unit": "ns/iter",
            "extra": "iterations: 29420\ncpu: 23806.203263086554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 116581.53638634624,
            "unit": "ns/iter",
            "extra": "iterations: 6005\ncpu: 116575.38717735255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 94148.57295850401,
            "unit": "ns/iter",
            "extra": "iterations: 7470\ncpu: 94141.49933065615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 98563.44081632093,
            "unit": "ns/iter",
            "extra": "iterations: 7350\ncpu: 98556.62585034006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 94287.91464728942,
            "unit": "ns/iter",
            "extra": "iterations: 7428\ncpu: 94277.51750134525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 170774.0149107699,
            "unit": "ns/iter",
            "extra": "iterations: 4091\ncpu: 170770.373991688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 562764.7847389136,
            "unit": "ns/iter",
            "extra": "iterations: 1245\ncpu: 562725.7028112422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 461215.5814569127,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 461216.35761588905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 460269.8095863303,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 460223.37491792435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 458419.8728098254,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 458393.70538611355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 305972.11732080235,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 305944.0699658685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 452724.05620156747,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 452707.5581395295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23982.853322857958,
            "unit": "ns/iter",
            "extra": "iterations: 29282\ncpu: 23980.209685130496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 115203.0031342893,
            "unit": "ns/iter",
            "extra": "iterations: 6062\ncpu: 115197.6080501477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 96195.19395189079,
            "unit": "ns/iter",
            "extra": "iterations: 7275\ncpu: 96185.12714776825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92888.45397794989,
            "unit": "ns/iter",
            "extra": "iterations: 7529\ncpu: 92886.97038119346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 97752.19337837838,
            "unit": "ns/iter",
            "extra": "iterations: 7400\ncpu: 97748.18918918866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 167286.72701149783,
            "unit": "ns/iter",
            "extra": "iterations: 4176\ncpu: 167283.09386973083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 555092.2565114797,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 555060.9313338688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 466262.9206455877,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 466256.6913248107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 457682.53997376544,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 457659.89515071537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 460659.7119422335,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 460633.20209973736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 299519.507712057,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 299495.11568123166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 451637.0735198462,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 451615.5497722849 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}