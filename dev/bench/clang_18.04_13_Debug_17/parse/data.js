window.BENCHMARK_DATA = {
  "lastUpdate": 1702503248158,
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
      }
    ]
  }
}