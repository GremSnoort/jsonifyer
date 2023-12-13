window.BENCHMARK_DATA = {
  "lastUpdate": 1702489574116,
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
      }
    ]
  }
}