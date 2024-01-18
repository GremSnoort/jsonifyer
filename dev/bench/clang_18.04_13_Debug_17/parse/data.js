window.BENCHMARK_DATA = {
  "lastUpdate": 1705574915586,
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
      }
    ]
  }
}