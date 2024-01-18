window.BENCHMARK_DATA = {
  "lastUpdate": 1705574930221,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-14 20.04 Debug c++-17": [
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
        "date": 1702489572551,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7728.824354651605,
            "unit": "ns/iter",
            "extra": "iterations: 90455\ncpu: 7728.449505278868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55967.06500000436,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55962.04 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 103101.05516248201,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 103098.76483990885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 149934.64797074097,
            "unit": "ns/iter",
            "extra": "iterations: 5741\ncpu: 149934.55843929623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 196795.059986348,
            "unit": "ns/iter",
            "extra": "iterations: 4401\ncpu: 196790.02499431942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 243076.60269739162,
            "unit": "ns/iter",
            "extra": "iterations: 3559\ncpu: 243070.2163529083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 289233.7071619695,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 289220.2811244981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 336314.6688562504,
            "unit": "ns/iter",
            "extra": "iterations: 2588\ncpu: 336308.6166924269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 382586.2810026452,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 382575.90149516286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6416.8033685929395,
            "unit": "ns/iter",
            "extra": "iterations: 110135\ncpu: 6416.373541562622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5217.572593072866,
            "unit": "ns/iter",
            "extra": "iterations: 134331\ncpu: 5217.204517200052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5263.0785399230535,
            "unit": "ns/iter",
            "extra": "iterations: 132404\ncpu: 5262.99809673424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5241.880323615495,
            "unit": "ns/iter",
            "extra": "iterations: 133368\ncpu: 5241.706406334356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8006.446844863945,
            "unit": "ns/iter",
            "extra": "iterations: 87207\ncpu: 8006.138268716955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26003.457586998848,
            "unit": "ns/iter",
            "extra": "iterations: 31264\ncpu: 26002.46609518935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 132802.16557936877,
            "unit": "ns/iter",
            "extra": "iterations: 6438\ncpu: 132794.2062752407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104956.28752616656,
            "unit": "ns/iter",
            "extra": "iterations: 8121\ncpu: 104953.40475310918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101768.30706781319,
            "unit": "ns/iter",
            "extra": "iterations: 8376\ncpu: 101763.57449856744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98440.10909300818,
            "unit": "ns/iter",
            "extra": "iterations: 8644\ncpu: 98437.47107820472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199804.098740437,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 199789.78857399948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1831950.362919059,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1831922.6824457643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1432633.4489163328,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1432549.3808049504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1448030.6911076831,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1447980.1872074886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1433462.983024715,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1433399.0740740732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 819703.8365896934,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 819680.9946714018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1395075.7304216102,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1395040.512048193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34959.88949275115,
            "unit": "ns/iter",
            "extra": "iterations: 23736\ncpu: 34957.541287495704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 174042.1735636795,
            "unit": "ns/iter",
            "extra": "iterations: 4978\ncpu: 174038.67014865397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 131510.8887181118,
            "unit": "ns/iter",
            "extra": "iterations: 6506\ncpu: 131504.34983092485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132626.10805803645,
            "unit": "ns/iter",
            "extra": "iterations: 6478\ncpu: 132616.82618091974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127768.51257628982,
            "unit": "ns/iter",
            "extra": "iterations: 6719\ncpu: 127762.53906831372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 217045.57200403552,
            "unit": "ns/iter",
            "extra": "iterations: 3972\ncpu: 217027.59315206448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1877624.164990037,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1877503.621730392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1479829.0095238069,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1479708.571428574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1494277.2728731737,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1494240.4494381973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1483768.3035142408,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1483653.6741214104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 840248.4836660948,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 840200.9981851197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1434813.9503875407,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1434701.8604651166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5186897.1399994735,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5186816.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3077632.432342944,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3077353.4653465305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24813.92435776912,
            "unit": "ns/iter",
            "extra": "iterations: 32971\ncpu: 24813.345060811094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142469.6153208588,
            "unit": "ns/iter",
            "extra": "iterations: 6031\ncpu: 142460.60354833258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108046.98097277217,
            "unit": "ns/iter",
            "extra": "iterations: 7936\ncpu: 108040.1209677413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106486.2710991048,
            "unit": "ns/iter",
            "extra": "iterations: 8152\ncpu: 106475.67468106018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99920.24883394974,
            "unit": "ns/iter",
            "extra": "iterations: 8576\ncpu: 99914.24906716436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 193926.4073990975,
            "unit": "ns/iter",
            "extra": "iterations: 4460\ncpu: 193912.062780269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1836748.5481335074,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1836708.8408644379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1446054.6868217217,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1446014.728682169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1444680.0309597855,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1444671.2074303476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1435200.1246152213,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1435175.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 816559.872265946,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 816545.4943132065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1399223.0029984294,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1399132.233883056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2900.1982894208177,
            "unit": "ns/iter",
            "extra": "iterations: 240971\ncpu: 2900.1274012225667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18815.6492416904,
            "unit": "ns/iter",
            "extra": "iterations: 37188\ncpu: 18815.655587824087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15262.94275542589,
            "unit": "ns/iter",
            "extra": "iterations: 45786\ncpu: 15262.591185078434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14750.223639348354,
            "unit": "ns/iter",
            "extra": "iterations: 47514\ncpu: 14749.776907858664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11246.477080751582,
            "unit": "ns/iter",
            "extra": "iterations: 62153\ncpu: 11246.174762280134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66517.83769980303,
            "unit": "ns/iter",
            "extra": "iterations: 10573\ncpu: 66515.02884706369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 126579.95342120992,
            "unit": "ns/iter",
            "extra": "iterations: 5539\ncpu: 126578.4076548111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30824.47923844854,
            "unit": "ns/iter",
            "extra": "iterations: 22638\ncpu: 30824.180581323595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30969.080293910003,
            "unit": "ns/iter",
            "extra": "iterations: 22592\ncpu: 30968.72344192641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30914.403701739153,
            "unit": "ns/iter",
            "extra": "iterations: 22638\ncpu: 30913.2299673116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63830.881878950844,
            "unit": "ns/iter",
            "extra": "iterations: 10921\ncpu: 63829.38375606636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57955.19676326576,
            "unit": "ns/iter",
            "extra": "iterations: 12111\ncpu: 57953.69498802729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21658.53321575629,
            "unit": "ns/iter",
            "extra": "iterations: 32319\ncpu: 21657.78953556742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111957.53901502295,
            "unit": "ns/iter",
            "extra": "iterations: 6254\ncpu: 111954.81291973073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89859.4241100204,
            "unit": "ns/iter",
            "extra": "iterations: 7781\ncpu: 89851.67716231868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91682.48554609588,
            "unit": "ns/iter",
            "extra": "iterations: 7645\ncpu: 91680.52321779002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91107.86905384253,
            "unit": "ns/iter",
            "extra": "iterations: 7652\ncpu: 91105.71092524934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132202.4528087848,
            "unit": "ns/iter",
            "extra": "iterations: 5287\ncpu: 132194.81747683036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 548661.4065934021,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 548640.1883830479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 454397.55316375644,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 454369.47162427375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 453455.3907971739,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 453441.9313026558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 448142.5462131045,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 448124.77535300975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 292313.1028428223,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 292291.34615384426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 443296.7596703165,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 443275.7133798399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22332.990269888654,
            "unit": "ns/iter",
            "extra": "iterations: 31346\ncpu: 22331.774389076716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113650.65596106103,
            "unit": "ns/iter",
            "extra": "iterations: 6165\ncpu: 113649.22952149266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92773.10898457009,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 92769.86975013373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91624.25687351788,
            "unit": "ns/iter",
            "extra": "iterations: 7638\ncpu: 91619.28515318043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92033.83953702632,
            "unit": "ns/iter",
            "extra": "iterations: 7603\ncpu: 92030.72471392945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 135777.05778553901,
            "unit": "ns/iter",
            "extra": "iterations: 5157\ncpu: 135770.38976148862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 549296.695141078,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 549279.858934161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 453185.9785853107,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 453159.9610642418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 449741.8367609375,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 449728.2133676129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 448603.2692307746,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 448580.5128205118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 290560.7840862214,
            "unit": "ns/iter",
            "extra": "iterations: 2413\ncpu: 290556.1127227521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 442857.5375317961,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 442857.56997455365 ns\nthreads: 1"
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
        "date": 1702489572551,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7728.824354651605,
            "unit": "ns/iter",
            "extra": "iterations: 90455\ncpu: 7728.449505278868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55967.06500000436,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55962.04 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 103101.05516248201,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 103098.76483990885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 149934.64797074097,
            "unit": "ns/iter",
            "extra": "iterations: 5741\ncpu: 149934.55843929623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 196795.059986348,
            "unit": "ns/iter",
            "extra": "iterations: 4401\ncpu: 196790.02499431942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 243076.60269739162,
            "unit": "ns/iter",
            "extra": "iterations: 3559\ncpu: 243070.2163529083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 289233.7071619695,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 289220.2811244981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 336314.6688562504,
            "unit": "ns/iter",
            "extra": "iterations: 2588\ncpu: 336308.6166924269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 382586.2810026452,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 382575.90149516286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6416.8033685929395,
            "unit": "ns/iter",
            "extra": "iterations: 110135\ncpu: 6416.373541562622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5217.572593072866,
            "unit": "ns/iter",
            "extra": "iterations: 134331\ncpu: 5217.204517200052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5263.0785399230535,
            "unit": "ns/iter",
            "extra": "iterations: 132404\ncpu: 5262.99809673424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5241.880323615495,
            "unit": "ns/iter",
            "extra": "iterations: 133368\ncpu: 5241.706406334356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8006.446844863945,
            "unit": "ns/iter",
            "extra": "iterations: 87207\ncpu: 8006.138268716955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26003.457586998848,
            "unit": "ns/iter",
            "extra": "iterations: 31264\ncpu: 26002.46609518935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 132802.16557936877,
            "unit": "ns/iter",
            "extra": "iterations: 6438\ncpu: 132794.2062752407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104956.28752616656,
            "unit": "ns/iter",
            "extra": "iterations: 8121\ncpu: 104953.40475310918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101768.30706781319,
            "unit": "ns/iter",
            "extra": "iterations: 8376\ncpu: 101763.57449856744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98440.10909300818,
            "unit": "ns/iter",
            "extra": "iterations: 8644\ncpu: 98437.47107820472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199804.098740437,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 199789.78857399948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1831950.362919059,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1831922.6824457643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1432633.4489163328,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1432549.3808049504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1448030.6911076831,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1447980.1872074886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1433462.983024715,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1433399.0740740732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 819703.8365896934,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 819680.9946714018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1395075.7304216102,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1395040.512048193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34959.88949275115,
            "unit": "ns/iter",
            "extra": "iterations: 23736\ncpu: 34957.541287495704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 174042.1735636795,
            "unit": "ns/iter",
            "extra": "iterations: 4978\ncpu: 174038.67014865397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 131510.8887181118,
            "unit": "ns/iter",
            "extra": "iterations: 6506\ncpu: 131504.34983092485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132626.10805803645,
            "unit": "ns/iter",
            "extra": "iterations: 6478\ncpu: 132616.82618091974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127768.51257628982,
            "unit": "ns/iter",
            "extra": "iterations: 6719\ncpu: 127762.53906831372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 217045.57200403552,
            "unit": "ns/iter",
            "extra": "iterations: 3972\ncpu: 217027.59315206448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1877624.164990037,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1877503.621730392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1479829.0095238069,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1479708.571428574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1494277.2728731737,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1494240.4494381973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1483768.3035142408,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1483653.6741214104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 840248.4836660948,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 840200.9981851197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1434813.9503875407,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1434701.8604651166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5186897.1399994735,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5186816.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3077632.432342944,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3077353.4653465305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24813.92435776912,
            "unit": "ns/iter",
            "extra": "iterations: 32971\ncpu: 24813.345060811094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142469.6153208588,
            "unit": "ns/iter",
            "extra": "iterations: 6031\ncpu: 142460.60354833258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108046.98097277217,
            "unit": "ns/iter",
            "extra": "iterations: 7936\ncpu: 108040.1209677413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106486.2710991048,
            "unit": "ns/iter",
            "extra": "iterations: 8152\ncpu: 106475.67468106018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99920.24883394974,
            "unit": "ns/iter",
            "extra": "iterations: 8576\ncpu: 99914.24906716436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 193926.4073990975,
            "unit": "ns/iter",
            "extra": "iterations: 4460\ncpu: 193912.062780269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1836748.5481335074,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1836708.8408644379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1446054.6868217217,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1446014.728682169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1444680.0309597855,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1444671.2074303476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1435200.1246152213,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1435175.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 816559.872265946,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 816545.4943132065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1399223.0029984294,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1399132.233883056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2900.1982894208177,
            "unit": "ns/iter",
            "extra": "iterations: 240971\ncpu: 2900.1274012225667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18815.6492416904,
            "unit": "ns/iter",
            "extra": "iterations: 37188\ncpu: 18815.655587824087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15262.94275542589,
            "unit": "ns/iter",
            "extra": "iterations: 45786\ncpu: 15262.591185078434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14750.223639348354,
            "unit": "ns/iter",
            "extra": "iterations: 47514\ncpu: 14749.776907858664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11246.477080751582,
            "unit": "ns/iter",
            "extra": "iterations: 62153\ncpu: 11246.174762280134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66517.83769980303,
            "unit": "ns/iter",
            "extra": "iterations: 10573\ncpu: 66515.02884706369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 126579.95342120992,
            "unit": "ns/iter",
            "extra": "iterations: 5539\ncpu: 126578.4076548111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30824.47923844854,
            "unit": "ns/iter",
            "extra": "iterations: 22638\ncpu: 30824.180581323595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30969.080293910003,
            "unit": "ns/iter",
            "extra": "iterations: 22592\ncpu: 30968.72344192641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30914.403701739153,
            "unit": "ns/iter",
            "extra": "iterations: 22638\ncpu: 30913.2299673116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63830.881878950844,
            "unit": "ns/iter",
            "extra": "iterations: 10921\ncpu: 63829.38375606636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57955.19676326576,
            "unit": "ns/iter",
            "extra": "iterations: 12111\ncpu: 57953.69498802729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21658.53321575629,
            "unit": "ns/iter",
            "extra": "iterations: 32319\ncpu: 21657.78953556742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111957.53901502295,
            "unit": "ns/iter",
            "extra": "iterations: 6254\ncpu: 111954.81291973073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89859.4241100204,
            "unit": "ns/iter",
            "extra": "iterations: 7781\ncpu: 89851.67716231868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91682.48554609588,
            "unit": "ns/iter",
            "extra": "iterations: 7645\ncpu: 91680.52321779002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91107.86905384253,
            "unit": "ns/iter",
            "extra": "iterations: 7652\ncpu: 91105.71092524934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132202.4528087848,
            "unit": "ns/iter",
            "extra": "iterations: 5287\ncpu: 132194.81747683036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 548661.4065934021,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 548640.1883830479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 454397.55316375644,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 454369.47162427375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 453455.3907971739,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 453441.9313026558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 448142.5462131045,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 448124.77535300975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 292313.1028428223,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 292291.34615384426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 443296.7596703165,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 443275.7133798399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22332.990269888654,
            "unit": "ns/iter",
            "extra": "iterations: 31346\ncpu: 22331.774389076716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113650.65596106103,
            "unit": "ns/iter",
            "extra": "iterations: 6165\ncpu: 113649.22952149266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92773.10898457009,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 92769.86975013373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91624.25687351788,
            "unit": "ns/iter",
            "extra": "iterations: 7638\ncpu: 91619.28515318043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92033.83953702632,
            "unit": "ns/iter",
            "extra": "iterations: 7603\ncpu: 92030.72471392945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 135777.05778553901,
            "unit": "ns/iter",
            "extra": "iterations: 5157\ncpu: 135770.38976148862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 549296.695141078,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 549279.858934161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 453185.9785853107,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 453159.9610642418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 449741.8367609375,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 449728.2133676129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 448603.2692307746,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 448580.5128205118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 290560.7840862214,
            "unit": "ns/iter",
            "extra": "iterations: 2413\ncpu: 290556.1127227521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 442857.5375317961,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 442857.56997455365 ns\nthreads: 1"
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
        "date": 1702489572551,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7728.824354651605,
            "unit": "ns/iter",
            "extra": "iterations: 90455\ncpu: 7728.449505278868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55967.06500000436,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55962.04 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 103101.05516248201,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 103098.76483990885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 149934.64797074097,
            "unit": "ns/iter",
            "extra": "iterations: 5741\ncpu: 149934.55843929623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 196795.059986348,
            "unit": "ns/iter",
            "extra": "iterations: 4401\ncpu: 196790.02499431942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 243076.60269739162,
            "unit": "ns/iter",
            "extra": "iterations: 3559\ncpu: 243070.2163529083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 289233.7071619695,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 289220.2811244981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 336314.6688562504,
            "unit": "ns/iter",
            "extra": "iterations: 2588\ncpu: 336308.6166924269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 382586.2810026452,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 382575.90149516286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6416.8033685929395,
            "unit": "ns/iter",
            "extra": "iterations: 110135\ncpu: 6416.373541562622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5217.572593072866,
            "unit": "ns/iter",
            "extra": "iterations: 134331\ncpu: 5217.204517200052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5263.0785399230535,
            "unit": "ns/iter",
            "extra": "iterations: 132404\ncpu: 5262.99809673424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5241.880323615495,
            "unit": "ns/iter",
            "extra": "iterations: 133368\ncpu: 5241.706406334356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8006.446844863945,
            "unit": "ns/iter",
            "extra": "iterations: 87207\ncpu: 8006.138268716955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26003.457586998848,
            "unit": "ns/iter",
            "extra": "iterations: 31264\ncpu: 26002.46609518935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 132802.16557936877,
            "unit": "ns/iter",
            "extra": "iterations: 6438\ncpu: 132794.2062752407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104956.28752616656,
            "unit": "ns/iter",
            "extra": "iterations: 8121\ncpu: 104953.40475310918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101768.30706781319,
            "unit": "ns/iter",
            "extra": "iterations: 8376\ncpu: 101763.57449856744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98440.10909300818,
            "unit": "ns/iter",
            "extra": "iterations: 8644\ncpu: 98437.47107820472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199804.098740437,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 199789.78857399948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1831950.362919059,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1831922.6824457643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1432633.4489163328,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1432549.3808049504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1448030.6911076831,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1447980.1872074886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1433462.983024715,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1433399.0740740732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 819703.8365896934,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 819680.9946714018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1395075.7304216102,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1395040.512048193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34959.88949275115,
            "unit": "ns/iter",
            "extra": "iterations: 23736\ncpu: 34957.541287495704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 174042.1735636795,
            "unit": "ns/iter",
            "extra": "iterations: 4978\ncpu: 174038.67014865397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 131510.8887181118,
            "unit": "ns/iter",
            "extra": "iterations: 6506\ncpu: 131504.34983092485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132626.10805803645,
            "unit": "ns/iter",
            "extra": "iterations: 6478\ncpu: 132616.82618091974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127768.51257628982,
            "unit": "ns/iter",
            "extra": "iterations: 6719\ncpu: 127762.53906831372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 217045.57200403552,
            "unit": "ns/iter",
            "extra": "iterations: 3972\ncpu: 217027.59315206448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1877624.164990037,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1877503.621730392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1479829.0095238069,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1479708.571428574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1494277.2728731737,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1494240.4494381973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1483768.3035142408,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1483653.6741214104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 840248.4836660948,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 840200.9981851197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1434813.9503875407,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1434701.8604651166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5186897.1399994735,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5186816.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3077632.432342944,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3077353.4653465305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24813.92435776912,
            "unit": "ns/iter",
            "extra": "iterations: 32971\ncpu: 24813.345060811094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142469.6153208588,
            "unit": "ns/iter",
            "extra": "iterations: 6031\ncpu: 142460.60354833258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108046.98097277217,
            "unit": "ns/iter",
            "extra": "iterations: 7936\ncpu: 108040.1209677413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106486.2710991048,
            "unit": "ns/iter",
            "extra": "iterations: 8152\ncpu: 106475.67468106018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99920.24883394974,
            "unit": "ns/iter",
            "extra": "iterations: 8576\ncpu: 99914.24906716436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 193926.4073990975,
            "unit": "ns/iter",
            "extra": "iterations: 4460\ncpu: 193912.062780269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1836748.5481335074,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1836708.8408644379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1446054.6868217217,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1446014.728682169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1444680.0309597855,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1444671.2074303476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1435200.1246152213,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1435175.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 816559.872265946,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 816545.4943132065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1399223.0029984294,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1399132.233883056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2900.1982894208177,
            "unit": "ns/iter",
            "extra": "iterations: 240971\ncpu: 2900.1274012225667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18815.6492416904,
            "unit": "ns/iter",
            "extra": "iterations: 37188\ncpu: 18815.655587824087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15262.94275542589,
            "unit": "ns/iter",
            "extra": "iterations: 45786\ncpu: 15262.591185078434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14750.223639348354,
            "unit": "ns/iter",
            "extra": "iterations: 47514\ncpu: 14749.776907858664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11246.477080751582,
            "unit": "ns/iter",
            "extra": "iterations: 62153\ncpu: 11246.174762280134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66517.83769980303,
            "unit": "ns/iter",
            "extra": "iterations: 10573\ncpu: 66515.02884706369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 126579.95342120992,
            "unit": "ns/iter",
            "extra": "iterations: 5539\ncpu: 126578.4076548111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30824.47923844854,
            "unit": "ns/iter",
            "extra": "iterations: 22638\ncpu: 30824.180581323595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30969.080293910003,
            "unit": "ns/iter",
            "extra": "iterations: 22592\ncpu: 30968.72344192641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30914.403701739153,
            "unit": "ns/iter",
            "extra": "iterations: 22638\ncpu: 30913.2299673116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63830.881878950844,
            "unit": "ns/iter",
            "extra": "iterations: 10921\ncpu: 63829.38375606636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57955.19676326576,
            "unit": "ns/iter",
            "extra": "iterations: 12111\ncpu: 57953.69498802729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21658.53321575629,
            "unit": "ns/iter",
            "extra": "iterations: 32319\ncpu: 21657.78953556742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111957.53901502295,
            "unit": "ns/iter",
            "extra": "iterations: 6254\ncpu: 111954.81291973073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89859.4241100204,
            "unit": "ns/iter",
            "extra": "iterations: 7781\ncpu: 89851.67716231868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91682.48554609588,
            "unit": "ns/iter",
            "extra": "iterations: 7645\ncpu: 91680.52321779002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91107.86905384253,
            "unit": "ns/iter",
            "extra": "iterations: 7652\ncpu: 91105.71092524934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132202.4528087848,
            "unit": "ns/iter",
            "extra": "iterations: 5287\ncpu: 132194.81747683036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 548661.4065934021,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 548640.1883830479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 454397.55316375644,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 454369.47162427375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 453455.3907971739,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 453441.9313026558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 448142.5462131045,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 448124.77535300975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 292313.1028428223,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 292291.34615384426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 443296.7596703165,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 443275.7133798399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22332.990269888654,
            "unit": "ns/iter",
            "extra": "iterations: 31346\ncpu: 22331.774389076716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113650.65596106103,
            "unit": "ns/iter",
            "extra": "iterations: 6165\ncpu: 113649.22952149266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92773.10898457009,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 92769.86975013373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91624.25687351788,
            "unit": "ns/iter",
            "extra": "iterations: 7638\ncpu: 91619.28515318043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92033.83953702632,
            "unit": "ns/iter",
            "extra": "iterations: 7603\ncpu: 92030.72471392945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 135777.05778553901,
            "unit": "ns/iter",
            "extra": "iterations: 5157\ncpu: 135770.38976148862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 549296.695141078,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 549279.858934161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 453185.9785853107,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 453159.9610642418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 449741.8367609375,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 449728.2133676129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 448603.2692307746,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 448580.5128205118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 290560.7840862214,
            "unit": "ns/iter",
            "extra": "iterations: 2413\ncpu: 290556.1127227521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 442857.5375317961,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 442857.56997455365 ns\nthreads: 1"
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
        "date": 1702489572551,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7728.824354651605,
            "unit": "ns/iter",
            "extra": "iterations: 90455\ncpu: 7728.449505278868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55967.06500000436,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55962.04 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 103101.05516248201,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 103098.76483990885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 149934.64797074097,
            "unit": "ns/iter",
            "extra": "iterations: 5741\ncpu: 149934.55843929623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 196795.059986348,
            "unit": "ns/iter",
            "extra": "iterations: 4401\ncpu: 196790.02499431942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 243076.60269739162,
            "unit": "ns/iter",
            "extra": "iterations: 3559\ncpu: 243070.2163529083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 289233.7071619695,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 289220.2811244981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 336314.6688562504,
            "unit": "ns/iter",
            "extra": "iterations: 2588\ncpu: 336308.6166924269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 382586.2810026452,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 382575.90149516286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6416.8033685929395,
            "unit": "ns/iter",
            "extra": "iterations: 110135\ncpu: 6416.373541562622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5217.572593072866,
            "unit": "ns/iter",
            "extra": "iterations: 134331\ncpu: 5217.204517200052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5263.0785399230535,
            "unit": "ns/iter",
            "extra": "iterations: 132404\ncpu: 5262.99809673424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5241.880323615495,
            "unit": "ns/iter",
            "extra": "iterations: 133368\ncpu: 5241.706406334356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8006.446844863945,
            "unit": "ns/iter",
            "extra": "iterations: 87207\ncpu: 8006.138268716955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26003.457586998848,
            "unit": "ns/iter",
            "extra": "iterations: 31264\ncpu: 26002.46609518935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 132802.16557936877,
            "unit": "ns/iter",
            "extra": "iterations: 6438\ncpu: 132794.2062752407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104956.28752616656,
            "unit": "ns/iter",
            "extra": "iterations: 8121\ncpu: 104953.40475310918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101768.30706781319,
            "unit": "ns/iter",
            "extra": "iterations: 8376\ncpu: 101763.57449856744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98440.10909300818,
            "unit": "ns/iter",
            "extra": "iterations: 8644\ncpu: 98437.47107820472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199804.098740437,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 199789.78857399948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1831950.362919059,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1831922.6824457643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1432633.4489163328,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1432549.3808049504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1448030.6911076831,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1447980.1872074886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1433462.983024715,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1433399.0740740732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 819703.8365896934,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 819680.9946714018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1395075.7304216102,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1395040.512048193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34959.88949275115,
            "unit": "ns/iter",
            "extra": "iterations: 23736\ncpu: 34957.541287495704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 174042.1735636795,
            "unit": "ns/iter",
            "extra": "iterations: 4978\ncpu: 174038.67014865397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 131510.8887181118,
            "unit": "ns/iter",
            "extra": "iterations: 6506\ncpu: 131504.34983092485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132626.10805803645,
            "unit": "ns/iter",
            "extra": "iterations: 6478\ncpu: 132616.82618091974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127768.51257628982,
            "unit": "ns/iter",
            "extra": "iterations: 6719\ncpu: 127762.53906831372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 217045.57200403552,
            "unit": "ns/iter",
            "extra": "iterations: 3972\ncpu: 217027.59315206448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1877624.164990037,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1877503.621730392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1479829.0095238069,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1479708.571428574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1494277.2728731737,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1494240.4494381973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1483768.3035142408,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1483653.6741214104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 840248.4836660948,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 840200.9981851197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1434813.9503875407,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1434701.8604651166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5186897.1399994735,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5186816.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3077632.432342944,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3077353.4653465305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24813.92435776912,
            "unit": "ns/iter",
            "extra": "iterations: 32971\ncpu: 24813.345060811094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142469.6153208588,
            "unit": "ns/iter",
            "extra": "iterations: 6031\ncpu: 142460.60354833258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108046.98097277217,
            "unit": "ns/iter",
            "extra": "iterations: 7936\ncpu: 108040.1209677413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106486.2710991048,
            "unit": "ns/iter",
            "extra": "iterations: 8152\ncpu: 106475.67468106018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99920.24883394974,
            "unit": "ns/iter",
            "extra": "iterations: 8576\ncpu: 99914.24906716436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 193926.4073990975,
            "unit": "ns/iter",
            "extra": "iterations: 4460\ncpu: 193912.062780269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1836748.5481335074,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1836708.8408644379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1446054.6868217217,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1446014.728682169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1444680.0309597855,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1444671.2074303476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1435200.1246152213,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1435175.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 816559.872265946,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 816545.4943132065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1399223.0029984294,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1399132.233883056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2900.1982894208177,
            "unit": "ns/iter",
            "extra": "iterations: 240971\ncpu: 2900.1274012225667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18815.6492416904,
            "unit": "ns/iter",
            "extra": "iterations: 37188\ncpu: 18815.655587824087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15262.94275542589,
            "unit": "ns/iter",
            "extra": "iterations: 45786\ncpu: 15262.591185078434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14750.223639348354,
            "unit": "ns/iter",
            "extra": "iterations: 47514\ncpu: 14749.776907858664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11246.477080751582,
            "unit": "ns/iter",
            "extra": "iterations: 62153\ncpu: 11246.174762280134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66517.83769980303,
            "unit": "ns/iter",
            "extra": "iterations: 10573\ncpu: 66515.02884706369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 126579.95342120992,
            "unit": "ns/iter",
            "extra": "iterations: 5539\ncpu: 126578.4076548111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30824.47923844854,
            "unit": "ns/iter",
            "extra": "iterations: 22638\ncpu: 30824.180581323595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30969.080293910003,
            "unit": "ns/iter",
            "extra": "iterations: 22592\ncpu: 30968.72344192641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30914.403701739153,
            "unit": "ns/iter",
            "extra": "iterations: 22638\ncpu: 30913.2299673116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63830.881878950844,
            "unit": "ns/iter",
            "extra": "iterations: 10921\ncpu: 63829.38375606636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57955.19676326576,
            "unit": "ns/iter",
            "extra": "iterations: 12111\ncpu: 57953.69498802729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21658.53321575629,
            "unit": "ns/iter",
            "extra": "iterations: 32319\ncpu: 21657.78953556742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111957.53901502295,
            "unit": "ns/iter",
            "extra": "iterations: 6254\ncpu: 111954.81291973073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89859.4241100204,
            "unit": "ns/iter",
            "extra": "iterations: 7781\ncpu: 89851.67716231868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91682.48554609588,
            "unit": "ns/iter",
            "extra": "iterations: 7645\ncpu: 91680.52321779002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91107.86905384253,
            "unit": "ns/iter",
            "extra": "iterations: 7652\ncpu: 91105.71092524934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132202.4528087848,
            "unit": "ns/iter",
            "extra": "iterations: 5287\ncpu: 132194.81747683036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 548661.4065934021,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 548640.1883830479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 454397.55316375644,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 454369.47162427375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 453455.3907971739,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 453441.9313026558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 448142.5462131045,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 448124.77535300975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 292313.1028428223,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 292291.34615384426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 443296.7596703165,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 443275.7133798399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22332.990269888654,
            "unit": "ns/iter",
            "extra": "iterations: 31346\ncpu: 22331.774389076716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113650.65596106103,
            "unit": "ns/iter",
            "extra": "iterations: 6165\ncpu: 113649.22952149266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92773.10898457009,
            "unit": "ns/iter",
            "extra": "iterations: 7524\ncpu: 92769.86975013373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91624.25687351788,
            "unit": "ns/iter",
            "extra": "iterations: 7638\ncpu: 91619.28515318043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92033.83953702632,
            "unit": "ns/iter",
            "extra": "iterations: 7603\ncpu: 92030.72471392945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 135777.05778553901,
            "unit": "ns/iter",
            "extra": "iterations: 5157\ncpu: 135770.38976148862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 549296.695141078,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 549279.858934161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 453185.9785853107,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 453159.9610642418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 449741.8367609375,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 449728.2133676129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 448603.2692307746,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 448580.5128205118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 290560.7840862214,
            "unit": "ns/iter",
            "extra": "iterations: 2413\ncpu: 290556.1127227521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 442857.5375317961,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 442857.56997455365 ns\nthreads: 1"
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
        "date": 1702492204956,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7409.566837719195,
            "unit": "ns/iter",
            "extra": "iterations: 94318\ncpu: 7409.348162598868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54385.41380000288,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54379.62 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102062.9498105959,
            "unit": "ns/iter",
            "extra": "iterations: 8448\ncpu: 102054.01278409094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 155153.0891566298,
            "unit": "ns/iter",
            "extra": "iterations: 5810\ncpu: 155140.00000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 195483.0462544957,
            "unit": "ns/iter",
            "extra": "iterations: 4432\ncpu: 195480.23465703978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 240726.60528509764,
            "unit": "ns/iter",
            "extra": "iterations: 3595\ncpu: 240716.68984700972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 285553.3054089905,
            "unit": "ns/iter",
            "extra": "iterations: 3032\ncpu: 285551.813984169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 331988.1578143157,
            "unit": "ns/iter",
            "extra": "iterations: 2617\ncpu: 331971.4176538021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 377969.5154280754,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 377960.93003042205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6169.804871391067,
            "unit": "ns/iter",
            "extra": "iterations: 113561\ncpu: 6169.645388821873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5139.851694759145,
            "unit": "ns/iter",
            "extra": "iterations: 135801\ncpu: 5139.825185381548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5185.608130874665,
            "unit": "ns/iter",
            "extra": "iterations: 135336\ncpu: 5185.462109120998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5200.895462134542,
            "unit": "ns/iter",
            "extra": "iterations: 134755\ncpu: 5200.759897591918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7866.681118504398,
            "unit": "ns/iter",
            "extra": "iterations: 89262\ncpu: 7866.645381013205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27640.581903275513,
            "unit": "ns/iter",
            "extra": "iterations: 29486\ncpu: 27639.71037102352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 137663.76326333496,
            "unit": "ns/iter",
            "extra": "iterations: 6239\ncpu: 137661.5162686328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 105111.90816452041,
            "unit": "ns/iter",
            "extra": "iterations: 8145\ncpu: 105107.30509515044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105673.43449131232,
            "unit": "ns/iter",
            "extra": "iterations: 8060\ncpu: 105673.07692307714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99238.82115809497,
            "unit": "ns/iter",
            "extra": "iterations: 8583\ncpu: 99233.72946522206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199522.64215466427,
            "unit": "ns/iter",
            "extra": "iterations: 4474\ncpu: 199503.19624497078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1804171.7848836747,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1803990.8914728714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1424157.0750381309,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1424058.0398162303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1426132.744615398,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1426005.538461543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1420108.1972476249,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1420062.385321102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 798315.5194133078,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 798230.3710094889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1377795.4317842189,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1377744.8275862054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35224.62467976206,
            "unit": "ns/iter",
            "extra": "iterations: 23420\ncpu: 35222.40819812124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 173726.07757403803,
            "unit": "ns/iter",
            "extra": "iterations: 4963\ncpu: 173708.56336892993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 132237.57932430282,
            "unit": "ns/iter",
            "extra": "iterations: 6423\ncpu: 132227.52607815678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 135588.29793278084,
            "unit": "ns/iter",
            "extra": "iterations: 6337\ncpu: 135578.64920309297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 125022.18101804823,
            "unit": "ns/iter",
            "extra": "iterations: 6817\ncpu: 125014.4198327708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 220861.07197743608,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 220843.05840163934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1848174.6706348145,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1848007.539682541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1473023.240887537,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1472903.4865293254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1453253.6012462243,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1453109.3457943844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1464882.484992131,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1464716.113744085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 832476.4789615242,
            "unit": "ns/iter",
            "extra": "iterations: 1117\ncpu: 832453.2676812876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1413445.8801213035,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1413433.687405163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5101899.109999977,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5101845.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3104235.8770762207,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3104130.5647840356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26051.13097445207,
            "unit": "ns/iter",
            "extra": "iterations: 31823\ncpu: 26050.454074097353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 144128.61640389814,
            "unit": "ns/iter",
            "extra": "iterations: 5962\ncpu: 144127.80945991183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110516.74082157115,
            "unit": "ns/iter",
            "extra": "iterations: 7790\ncpu: 110515.07060333808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 102736.74301474758,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 102735.32797697547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 98571.20516350247,
            "unit": "ns/iter",
            "extra": "iterations: 8715\ncpu: 98567.61904761895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 196181.92591753756,
            "unit": "ns/iter",
            "extra": "iterations: 4414\ncpu: 196178.7041232433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1799222.7673077495,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1799194.615384618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1435802.076922965,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1435775.8461538486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1416562.1960486227,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1416536.7781155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1408471.3791541047,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1408459.2145015125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 787580.3172589001,
            "unit": "ns/iter",
            "extra": "iterations: 1182\ncpu: 787572.5888324869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1376688.6514033435,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1376675.7754800583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2847.7402898782752,
            "unit": "ns/iter",
            "extra": "iterations: 245620\ncpu: 2847.68585620065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18479.425503213162,
            "unit": "ns/iter",
            "extra": "iterations: 37807\ncpu: 18479.27367947722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14138.509550415505,
            "unit": "ns/iter",
            "extra": "iterations: 49579\ncpu: 14138.05441820123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14834.734005592123,
            "unit": "ns/iter",
            "extra": "iterations: 47204\ncpu: 14834.607236674883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11321.155994439334,
            "unit": "ns/iter",
            "extra": "iterations: 61874\ncpu: 11320.895691243486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66761.37198021161,
            "unit": "ns/iter",
            "extra": "iterations: 10514\ncpu: 66760.71904127815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 123687.41592919541,
            "unit": "ns/iter",
            "extra": "iterations: 5650\ncpu: 123686.37168141699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30833.364144300493,
            "unit": "ns/iter",
            "extra": "iterations: 22730\ncpu: 30833.145622525502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30689.07188225807,
            "unit": "ns/iter",
            "extra": "iterations: 22829\ncpu: 30688.38319681098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30814.506271181905,
            "unit": "ns/iter",
            "extra": "iterations: 22723\ncpu: 30812.22549839365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63156.20547062613,
            "unit": "ns/iter",
            "extra": "iterations: 10858\ncpu: 63151.12359550575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57070.35202085829,
            "unit": "ns/iter",
            "extra": "iterations: 12272\ncpu: 57065.60462842229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22167.850352767415,
            "unit": "ns/iter",
            "extra": "iterations: 32316\ncpu: 22155.099641044744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 110439.15033916627,
            "unit": "ns/iter",
            "extra": "iterations: 6339\ncpu: 110439.8327811956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89256.11537480162,
            "unit": "ns/iter",
            "extra": "iterations: 7844\ncpu: 89252.03977562592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89690.69989774193,
            "unit": "ns/iter",
            "extra": "iterations: 7824\ncpu: 89686.59253578763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89654.03355104003,
            "unit": "ns/iter",
            "extra": "iterations: 7809\ncpu: 89650.83877577115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 131558.7894538607,
            "unit": "ns/iter",
            "extra": "iterations: 5310\ncpu: 131556.76082862605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 538835.3939861611,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 538830.2235929072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 448558.99292604154,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 448552.8617363309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 447823.0357827429,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 447812.7795527181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 443936.68742064526,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 443921.0292249023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 294126.4686468388,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 294117.7392739296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 437910.66583225946,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 437907.00876095565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21486.963560518452,
            "unit": "ns/iter",
            "extra": "iterations: 32602\ncpu: 21486.574443285786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109598.78442738805,
            "unit": "ns/iter",
            "extra": "iterations: 6383\ncpu: 109592.8246905833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90804.42112767207,
            "unit": "ns/iter",
            "extra": "iterations: 7715\ncpu: 90802.2164614388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89918.98798914428,
            "unit": "ns/iter",
            "extra": "iterations: 7743\ncpu: 89916.25984760444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89924.96321455495,
            "unit": "ns/iter",
            "extra": "iterations: 7802\ncpu: 89925.48064598783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 135739.56063850614,
            "unit": "ns/iter",
            "extra": "iterations: 5137\ncpu: 135738.7969632104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 537185.3711656609,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 537158.0521472406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 443715.8252858816,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 443712.4523506922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 438734.69679850305,
            "unit": "ns/iter",
            "extra": "iterations: 1593\ncpu: 438737.2881355943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 442012.3084702807,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 442006.38432363485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 292187.1655546334,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 292171.60133444367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 436028.84572142875,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 436012.36727045075 ns\nthreads: 1"
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
        "date": 1702503255099,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7739.389859772099,
            "unit": "ns/iter",
            "extra": "iterations: 90353\ncpu: 7739.462995141281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55746.939200003006,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55741.85 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101400.12985479477,
            "unit": "ns/iter",
            "extra": "iterations: 8471\ncpu: 101394.74678314246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 148307.67455109768,
            "unit": "ns/iter",
            "extra": "iterations: 5792\ncpu: 148295.1830110497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 195385.50191829176,
            "unit": "ns/iter",
            "extra": "iterations: 4431\ncpu: 195374.7912435116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 242011.38305556923,
            "unit": "ns/iter",
            "extra": "iterations: 3600\ncpu: 241992.58333333326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 287537.5344371036,
            "unit": "ns/iter",
            "extra": "iterations: 3020\ncpu: 287507.18543046364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 334020.5889145343,
            "unit": "ns/iter",
            "extra": "iterations: 2598\ncpu: 333992.1862971517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 380254.15072080283,
            "unit": "ns/iter",
            "extra": "iterations: 2289\ncpu: 380228.39667977265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6364.342607776421,
            "unit": "ns/iter",
            "extra": "iterations: 109764\ncpu: 6364.40362960533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5207.537920773139,
            "unit": "ns/iter",
            "extra": "iterations: 134425\ncpu: 5207.053003533568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5209.865745082894,
            "unit": "ns/iter",
            "extra": "iterations: 134334\ncpu: 5209.2813435169055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5293.837553649571,
            "unit": "ns/iter",
            "extra": "iterations: 132573\ncpu: 5293.456435322425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7916.785526987832,
            "unit": "ns/iter",
            "extra": "iterations: 88095\ncpu: 7916.752369600999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25798.91192532501,
            "unit": "ns/iter",
            "extra": "iterations: 31496\ncpu: 25798.8379476759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 135219.47904475871,
            "unit": "ns/iter",
            "extra": "iterations: 6323\ncpu: 135217.08049976273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 105047.10599703596,
            "unit": "ns/iter",
            "extra": "iterations: 8104\ncpu: 105040.81934846975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105350.11411225743,
            "unit": "ns/iter",
            "extra": "iterations: 8071\ncpu: 105345.5210011151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 101866.71074379895,
            "unit": "ns/iter",
            "extra": "iterations: 8349\ncpu: 101862.67816504993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 198750.0447392017,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 198733.76798561166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1817834.7504911246,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1817703.3398821235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1408229.2701062537,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1408144.3095599392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1422127.7886677007,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1422132.0061255717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1392164.9715568211,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1392110.479041916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 793351.7792985734,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 793344.5680068427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1369350.131268518,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1369319.0265486746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33920.787738742394,
            "unit": "ns/iter",
            "extra": "iterations: 24451\ncpu: 33920.26910964786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 169088.99624654587,
            "unit": "ns/iter",
            "extra": "iterations: 5062\ncpu: 169075.46424338204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 133532.57810806882,
            "unit": "ns/iter",
            "extra": "iterations: 6459\ncpu: 133523.88914692707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136004.36438400715,
            "unit": "ns/iter",
            "extra": "iterations: 6323\ncpu: 135995.35030839752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 131340.80895614257,
            "unit": "ns/iter",
            "extra": "iterations: 6543\ncpu: 131330.5670181878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 220072.7508263399,
            "unit": "ns/iter",
            "extra": "iterations: 3933\ncpu: 220046.2751080604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1866675.8895580487,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1866698.1927710832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1451575.0780031604,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1451513.4165366602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1454407.9424572098,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1454322.395023328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1439682.012383875,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1439643.0340557322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 824450.0809607919,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 824464.1459074718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1409003.7610349916,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1408906.0882800585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5041687.350000074,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5041239.999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3122520.043478268,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3122194.9832775923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24367.378913031425,
            "unit": "ns/iter",
            "extra": "iterations: 33414\ncpu: 24366.25665888536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142531.054533387,
            "unit": "ns/iter",
            "extra": "iterations: 6033\ncpu: 142520.65307475618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 114312.28880359058,
            "unit": "ns/iter",
            "extra": "iterations: 7815\ncpu: 114309.08509276979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 105262.5763534225,
            "unit": "ns/iter",
            "extra": "iterations: 7832\ncpu: 105250.93207354419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103532.02319680342,
            "unit": "ns/iter",
            "extra": "iterations: 8277\ncpu: 103526.67633200476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 196030.28474267523,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 196018.68057129995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1826560.1276595274,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1825727.4661508666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1411461.2450832678,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1411403.1770045406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1415236.1588501693,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1415229.1981845642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1391837.5970148705,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1391841.1940298497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 781146.1872375924,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 781139.8824517224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1365927.9602941696,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1365876.617647058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2813.9251674761404,
            "unit": "ns/iter",
            "extra": "iterations: 246751\ncpu: 2813.9411795696924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18737.507013596787,
            "unit": "ns/iter",
            "extra": "iterations: 37356\ncpu: 18737.822572009893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14090.46571480234,
            "unit": "ns/iter",
            "extra": "iterations: 49657\ncpu: 14090.559236361525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14175.015101213574,
            "unit": "ns/iter",
            "extra": "iterations: 49400\ncpu: 14174.587044534384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11243.011038803092,
            "unit": "ns/iter",
            "extra": "iterations: 62235\ncpu: 11242.969390214532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67480.36088047565,
            "unit": "ns/iter",
            "extra": "iterations: 10358\ncpu: 67477.5632361459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 126470.48159507949,
            "unit": "ns/iter",
            "extra": "iterations: 5542\ncpu: 126463.40671237839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30629.560225931862,
            "unit": "ns/iter",
            "extra": "iterations: 22839\ncpu: 30628.232409475022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30731.41948632154,
            "unit": "ns/iter",
            "extra": "iterations: 22816\ncpu: 30729.91760168307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30350.860332047516,
            "unit": "ns/iter",
            "extra": "iterations: 23069\ncpu: 30349.672720967552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62150.93397817637,
            "unit": "ns/iter",
            "extra": "iterations: 11269\ncpu: 62148.63785606593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56860.24619268767,
            "unit": "ns/iter",
            "extra": "iterations: 12279\ncpu: 56858.22135353022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22704.788141089277,
            "unit": "ns/iter",
            "extra": "iterations: 30846\ncpu: 22703.890293717082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113708.47472778296,
            "unit": "ns/iter",
            "extra": "iterations: 6153\ncpu: 113708.38615309603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 92805.72300158607,
            "unit": "ns/iter",
            "extra": "iterations: 7556\ncpu: 92804.92323980841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93540.5239930946,
            "unit": "ns/iter",
            "extra": "iterations: 7523\ncpu: 93537.32553502586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 93304.55108565406,
            "unit": "ns/iter",
            "extra": "iterations: 7507\ncpu: 93299.90675369676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 133009.64925658284,
            "unit": "ns/iter",
            "extra": "iterations: 5246\ncpu: 133001.01029355833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 546750.356528487,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 546750.8991399526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 452060.8782383116,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 452041.3860103578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 446177.07525512634,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 446152.04081633233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 438897.26081499737,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 438868.6520376176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 290318.52361225255,
            "unit": "ns/iter",
            "extra": "iterations: 2414\ncpu: 290291.5492957764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 438105.0282840385,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 438111.94217472733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22973.089801678965,
            "unit": "ns/iter",
            "extra": "iterations: 30456\ncpu: 22972.27147360151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 115674.84953704983,
            "unit": "ns/iter",
            "extra": "iterations: 6048\ncpu: 115669.06415343967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94712.85888904365,
            "unit": "ns/iter",
            "extra": "iterations: 7363\ncpu: 94707.79573543381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95254.00490529838,
            "unit": "ns/iter",
            "extra": "iterations: 7339\ncpu: 95247.24076849785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 95445.63186588814,
            "unit": "ns/iter",
            "extra": "iterations: 7337\ncpu: 95447.29453455143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 136440.97664462667,
            "unit": "ns/iter",
            "extra": "iterations: 5138\ncpu: 136432.01634877364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 544929.9766172592,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 544916.21200312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 449926.95057765796,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 449916.94480102113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 446358.9451530617,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 446365.24234693917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 444214.296578017,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 444201.26742711477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 292798.57502095104,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 292799.8323554048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 440535.46527775016,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 440511.7424242414 ns\nthreads: 1"
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
        "date": 1705574929766,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7552.351824611785,
            "unit": "ns/iter",
            "extra": "iterations: 92458\ncpu: 7552.336195894353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53985.314400006246,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53983.640000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100194.77418601989,
            "unit": "ns/iter",
            "extra": "iterations: 8569\ncpu: 100188.69179600888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145742.21597833055,
            "unit": "ns/iter",
            "extra": "iterations: 5908\ncpu: 145738.08395396077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 191396.7805795109,
            "unit": "ns/iter",
            "extra": "iterations: 4521\ncpu: 191385.71112585705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 236453.8260038234,
            "unit": "ns/iter",
            "extra": "iterations: 3661\ncpu: 236438.0770281344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 282824.37317311286,
            "unit": "ns/iter",
            "extra": "iterations: 3079\ncpu: 282805.87853199075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 328881.59947349055,
            "unit": "ns/iter",
            "extra": "iterations: 2659\ncpu: 328878.9770590448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 372219.3263472816,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 372214.7134302817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6237.539667707851,
            "unit": "ns/iter",
            "extra": "iterations: 112371\ncpu: 6237.561292504288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5152.291573814931,
            "unit": "ns/iter",
            "extra": "iterations: 135969\ncpu: 5152.324426891424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5165.981677731607,
            "unit": "ns/iter",
            "extra": "iterations: 135409\ncpu: 5166.062078591529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5247.764634568341,
            "unit": "ns/iter",
            "extra": "iterations: 132802\ncpu: 5247.851688980581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7938.4007745419785,
            "unit": "ns/iter",
            "extra": "iterations: 88052\ncpu: 7938.521555444503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25460.03743197472,
            "unit": "ns/iter",
            "extra": "iterations: 31791\ncpu: 25459.485388946552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 135284.93135553706,
            "unit": "ns/iter",
            "extra": "iterations: 6337\ncpu: 135285.51364999227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100662.63405111487,
            "unit": "ns/iter",
            "extra": "iterations: 8452\ncpu: 100664.23331755809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100016.98542953387,
            "unit": "ns/iter",
            "extra": "iterations: 8579\ncpu: 100018.55694136821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96616.62193312755,
            "unit": "ns/iter",
            "extra": "iterations: 8763\ncpu: 96609.0950587698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 212449.9230398054,
            "unit": "ns/iter",
            "extra": "iterations: 4145\ncpu: 212432.1351025332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1774953.1679389537,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1774904.1984732805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1398089.3288085738,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1397979.9396681734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1411011.079027376,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1411051.2158054702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1390656.0762331355,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1390610.911808671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 773979.5602006676,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 773961.6220735784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1351137.2842566234,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1351071.282798833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34249.58210434922,
            "unit": "ns/iter",
            "extra": "iterations: 24207\ncpu: 34248.66774073619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 173171.78854271094,
            "unit": "ns/iter",
            "extra": "iterations: 4975\ncpu: 173169.78894472338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 129207.57747964523,
            "unit": "ns/iter",
            "extra": "iterations: 6634\ncpu: 129209.45131142605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132342.69151395056,
            "unit": "ns/iter",
            "extra": "iterations: 6493\ncpu: 132342.98475281082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123933.91390536395,
            "unit": "ns/iter",
            "extra": "iterations: 6911\ncpu: 123933.33815656201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 235396.53206004464,
            "unit": "ns/iter",
            "extra": "iterations: 3665\ncpu: 235400.51841746265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1891551.2558140482,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1891581.9767441857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1457122.640502261,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1457124.803767657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1435197.8918083292,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1435200.7727975284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1442932.8558139259,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1442945.2713178266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 821130.2362204386,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 821132.2834645658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1388085.8985074346,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1388062.5373134338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5008507.060000511,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5008562.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3021907.5275081755,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3021951.7799352733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24283.94797241015,
            "unit": "ns/iter",
            "extra": "iterations: 33636\ncpu: 24284.513616363387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142080.31579819453,
            "unit": "ns/iter",
            "extra": "iterations: 6045\ncpu: 142079.76840363827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106599.33428855769,
            "unit": "ns/iter",
            "extra": "iterations: 8026\ncpu: 106598.86618489969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 100737.98227490667,
            "unit": "ns/iter",
            "extra": "iterations: 8519\ncpu: 100739.67601831256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94848.86666666328,
            "unit": "ns/iter",
            "extra": "iterations: 8985\ncpu: 94849.03728436289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 209310.64040599467,
            "unit": "ns/iter",
            "extra": "iterations: 4138\ncpu: 209310.87481875325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1770955.5950570228,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1770927.3764258528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1413357.2390317845,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1413364.4478063467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1410958.2045453847,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1410962.8787878891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1401320.3876320294,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1401326.5460030169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 769697.0331125496,
            "unit": "ns/iter",
            "extra": "iterations: 1208\ncpu: 769693.4602649012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1353622.4067054868,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1353645.772594753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2874.665313103604,
            "unit": "ns/iter",
            "extra": "iterations: 243801\ncpu: 2874.714623812044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18862.698079667196,
            "unit": "ns/iter",
            "extra": "iterations: 37129\ncpu: 18862.79188774271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14614.631021737814,
            "unit": "ns/iter",
            "extra": "iterations: 47889\ncpu: 14614.738248867112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15259.892163283104,
            "unit": "ns/iter",
            "extra": "iterations: 45810\ncpu: 15260.139707487435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11201.899217347263,
            "unit": "ns/iter",
            "extra": "iterations: 62352\ncpu: 11202.081729535503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66236.75723578598,
            "unit": "ns/iter",
            "extra": "iterations: 10607\ncpu: 66237.94663901154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122218.82267643817,
            "unit": "ns/iter",
            "extra": "iterations: 5724\ncpu: 122213.92382949036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30180.39425981893,
            "unit": "ns/iter",
            "extra": "iterations: 23170\ncpu: 30180.129477772894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30288.051142265133,
            "unit": "ns/iter",
            "extra": "iterations: 23112\ncpu: 30288.560055382615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30402.32036563788,
            "unit": "ns/iter",
            "extra": "iterations: 23083\ncpu: 30402.508339470525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61238.468232409825,
            "unit": "ns/iter",
            "extra": "iterations: 11411\ncpu: 61238.67321006031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56532.89303340929,
            "unit": "ns/iter",
            "extra": "iterations: 12359\ncpu: 56533.109474876794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21289.462288805473,
            "unit": "ns/iter",
            "extra": "iterations: 32908\ncpu: 21289.80794943488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 110847.06538643746,
            "unit": "ns/iter",
            "extra": "iterations: 6301\ncpu: 110846.86557689228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87675.40062579312,
            "unit": "ns/iter",
            "extra": "iterations: 7990\ncpu: 87676.84605757128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88636.1462826702,
            "unit": "ns/iter",
            "extra": "iterations: 7882\ncpu: 88634.77543770491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88643.95948340923,
            "unit": "ns/iter",
            "extra": "iterations: 7898\ncpu: 88643.6312990622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 131644.66017766015,
            "unit": "ns/iter",
            "extra": "iterations: 5291\ncpu: 131645.1143451163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 529308.6367069895,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 529317.7492447163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 444091.69083965785,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 444090.83969465323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 442217.0526315437,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 442219.5307545959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 433338.8159850999,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 433345.9727385428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 279931.52483974677,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 279926.7227564118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 429392.90964962315,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 429377.6889981594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21336.727896549837,
            "unit": "ns/iter",
            "extra": "iterations: 32789\ncpu: 21336.85077312504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107759.71985815032,
            "unit": "ns/iter",
            "extra": "iterations: 6486\ncpu: 107761.54794942883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89095.26738853236,
            "unit": "ns/iter",
            "extra": "iterations: 7850\ncpu: 89096.75159235689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89900.0874134906,
            "unit": "ns/iter",
            "extra": "iterations: 7802\ncpu: 89900.32043065855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89021.70146402794,
            "unit": "ns/iter",
            "extra": "iterations: 7855\ncpu: 89017.54296626407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 132555.06220457554,
            "unit": "ns/iter",
            "extra": "iterations: 5289\ncpu: 132541.57685762833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 526841.474040624,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 526808.5778781032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 439924.23773584364,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 439887.2955974834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 437001.07942466275,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 436974.0462789185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 435965.73333328526,
            "unit": "ns/iter",
            "extra": "iterations: 1605\ncpu: 435959.68847351655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 285113.97841142485,
            "unit": "ns/iter",
            "extra": "iterations: 2455\ncpu: 285118.9409368639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 430810.18777021347,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 430803.4589252655 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}