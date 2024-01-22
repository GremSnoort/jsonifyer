window.BENCHMARK_DATA = {
  "lastUpdate": 1705962981627,
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
        "date": 1705772761844,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7573.085595776014,
            "unit": "ns/iter",
            "extra": "iterations: 92820\ncpu: 7572.401422107305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54019.421200007404,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54019.06 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100551.55429307578,
            "unit": "ns/iter",
            "extra": "iterations: 8537\ncpu: 100545.26180156962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145929.5533321915,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 145919.58623028666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 191599.72733303212,
            "unit": "ns/iter",
            "extra": "iterations: 4522\ncpu: 191591.30915524115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 237212.37500000309,
            "unit": "ns/iter",
            "extra": "iterations: 3648\ncpu: 237189.93969298227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 281219.8520806138,
            "unit": "ns/iter",
            "extra": "iterations: 3076\ncpu: 281203.99869960995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 326771.48360346595,
            "unit": "ns/iter",
            "extra": "iterations: 2653\ncpu: 326764.7945721826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 372609.1010706521,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 372578.7580299789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6173.918363382794,
            "unit": "ns/iter",
            "extra": "iterations: 113258\ncpu: 6173.781984495566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5137.215883044056,
            "unit": "ns/iter",
            "extra": "iterations: 136120\ncpu: 5136.914487217158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5073.759844057129,
            "unit": "ns/iter",
            "extra": "iterations: 138256\ncpu: 5073.348715426446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5144.914248310269,
            "unit": "ns/iter",
            "extra": "iterations: 136732\ncpu: 5144.678641429947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8017.482545050666,
            "unit": "ns/iter",
            "extra": "iterations: 87511\ncpu: 8017.069854075503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26043.691687464532,
            "unit": "ns/iter",
            "extra": "iterations: 31254\ncpu: 26042.772125168012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 138931.14419809397,
            "unit": "ns/iter",
            "extra": "iterations: 6179\ncpu: 138921.475966985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104647.5341759769,
            "unit": "ns/iter",
            "extra": "iterations: 8149\ncpu: 104644.5576144313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104803.46121747313,
            "unit": "ns/iter",
            "extra": "iterations: 8148\ncpu: 104801.38684339725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99187.71777207391,
            "unit": "ns/iter",
            "extra": "iterations: 8564\ncpu: 99182.97524521238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 215213.66788855835,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 215199.92668621708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1781399.4042144537,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1781352.4904214568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1395829.1184407636,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1393213.4932533728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1398789.7496229573,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1398716.5912518864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1383775.2797618986,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1383647.3214285674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 778606.5949580305,
            "unit": "ns/iter",
            "extra": "iterations: 1190\ncpu: 778580.7563025202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1347338.1947674132,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1347233.8662790686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35120.55488869139,
            "unit": "ns/iter",
            "extra": "iterations: 23493\ncpu: 35117.22215127896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 174387.78092157407,
            "unit": "ns/iter",
            "extra": "iterations: 4948\ncpu: 174376.27324171338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 131820.85386029002,
            "unit": "ns/iter",
            "extra": "iterations: 6528\ncpu: 131812.79105392194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 134032.62125679074,
            "unit": "ns/iter",
            "extra": "iterations: 6445\ncpu: 134023.55314197025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127127.25845195008,
            "unit": "ns/iter",
            "extra": "iterations: 6744\ncpu: 127123.81376037974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 234278.185195253,
            "unit": "ns/iter",
            "extra": "iterations: 3688\ncpu: 234274.37635574842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1825501.514676926,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1825468.101761251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1442765.737909485,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1442705.3042121693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1439506.2256569203,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1439431.5301391047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1437302.589783271,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1437251.2383900955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 811019.7193744938,
            "unit": "ns/iter",
            "extra": "iterations: 1151\ncpu: 810992.5282363164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1387932.0985075308,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1387874.0298507502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6636115.071428808,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 6635770.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3046050.1274508275,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3045997.7124183043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24815.358794121003,
            "unit": "ns/iter",
            "extra": "iterations: 33005\ncpu: 24814.770489319646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142171.80453116514,
            "unit": "ns/iter",
            "extra": "iterations: 6047\ncpu: 142166.61154291395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110594.62719979922,
            "unit": "ns/iter",
            "extra": "iterations: 7728\ncpu: 110592.35248447166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103581.22879707775,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 103580.53462940454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102092.69010198058,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 102089.65806838621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 212872.41033211644,
            "unit": "ns/iter",
            "extra": "iterations: 4065\ncpu: 212859.77859778696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1768326.051233417,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1768229.0322580729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1395790.2215568533,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1395713.9221556822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1396121.634730569,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1396031.736526952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1376626.4948301218,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1376521.7134416583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 774015.3739635489,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 773962.0232172464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1344229.490620601,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1344176.190476182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2832.688004989761,
            "unit": "ns/iter",
            "extra": "iterations: 246911\ncpu: 2832.4797194130656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18610.630955544093,
            "unit": "ns/iter",
            "extra": "iterations: 37654\ncpu: 18609.101290699404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14612.169438884774,
            "unit": "ns/iter",
            "extra": "iterations: 47976\ncpu: 14611.416124729125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13471.260605125111,
            "unit": "ns/iter",
            "extra": "iterations: 51791\ncpu: 13470.68409569233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11291.177221325432,
            "unit": "ns/iter",
            "extra": "iterations: 61900\ncpu: 11290.849757673688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 70372.71892599312,
            "unit": "ns/iter",
            "extra": "iterations: 9944\ncpu: 70367.92035398193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 123183.6540559678,
            "unit": "ns/iter",
            "extra": "iterations: 5683\ncpu: 123172.63769136035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30298.642263042402,
            "unit": "ns/iter",
            "extra": "iterations: 23084\ncpu: 30296.802980419205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30430.328765932052,
            "unit": "ns/iter",
            "extra": "iterations: 22989\ncpu: 30428.770281438785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30195.709692730496,
            "unit": "ns/iter",
            "extra": "iterations: 23172\ncpu: 30193.617296737448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58226.05751438572,
            "unit": "ns/iter",
            "extra": "iterations: 11997\ncpu: 58220.8635492203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56212.12305595487,
            "unit": "ns/iter",
            "extra": "iterations: 12474\ncpu: 56207.66394099734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22063.26977713311,
            "unit": "ns/iter",
            "extra": "iterations: 31678\ncpu: 22062.213523580933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111405.76940274466,
            "unit": "ns/iter",
            "extra": "iterations: 6262\ncpu: 111402.0440753736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90354.83490504583,
            "unit": "ns/iter",
            "extra": "iterations: 7741\ncpu: 90351.77625629776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90711.44169794192,
            "unit": "ns/iter",
            "extra": "iterations: 7727\ncpu: 90708.74854406653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89827.55220624962,
            "unit": "ns/iter",
            "extra": "iterations: 7796\ncpu: 89824.2688558221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 138452.50921703153,
            "unit": "ns/iter",
            "extra": "iterations: 5045\ncpu: 138451.85332011932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 536718.2050497107,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 536694.9502677949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 444184.28989190055,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 444164.52638270956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 442589.41187618626,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 442579.9747315266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 435806.86741020705,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 435805.14250309794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 286064.0495292604,
            "unit": "ns/iter",
            "extra": "iterations: 2443\ncpu: 286048.05566925945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 432958.187616139,
            "unit": "ns/iter",
            "extra": "iterations: 1615\ncpu: 432923.4674922584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21986.12637863307,
            "unit": "ns/iter",
            "extra": "iterations: 31825\ncpu: 21985.583660643817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 114950.41477001851,
            "unit": "ns/iter",
            "extra": "iterations: 6283\ncpu: 114949.78513449176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90422.86036907788,
            "unit": "ns/iter",
            "extra": "iterations: 7749\ncpu: 90421.12530649186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92234.22298096408,
            "unit": "ns/iter",
            "extra": "iterations: 7615\ncpu: 92228.99540380854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91746.75317699077,
            "unit": "ns/iter",
            "extra": "iterations: 7633\ncpu: 91737.7178042721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 139366.80750048772,
            "unit": "ns/iter",
            "extra": "iterations: 5013\ncpu: 139364.53221623556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 533024.4782940234,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 533023.4577303875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 449030.31658290885,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 449019.5979899498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 434872.15336268395,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 434864.48774355854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 438381.5494710625,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 438378.5936527661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 281970.277956573,
            "unit": "ns/iter",
            "extra": "iterations: 2486\ncpu: 281962.1078036998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 433080.08510637726,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 433055.5694618296 ns\nthreads: 1"
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
        "date": 1705774705866,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7504.528631231329,
            "unit": "ns/iter",
            "extra": "iterations: 92923\ncpu: 7504.347685718284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54051.17800000881,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54048.67 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99161.81129460341,
            "unit": "ns/iter",
            "extra": "iterations: 8659\ncpu: 99159.8106016861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 144072.45795017405,
            "unit": "ns/iter",
            "extra": "iterations: 5981\ncpu: 144071.09179067044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 190167.6870479905,
            "unit": "ns/iter",
            "extra": "iterations: 4563\ncpu: 190162.76572430425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 234637.38492816943,
            "unit": "ns/iter",
            "extra": "iterations: 3689\ncpu: 234626.4028191922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 279046.1397295598,
            "unit": "ns/iter",
            "extra": "iterations: 3106\ncpu: 279037.31487443653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 324426.18537861976,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 324413.39052592317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 368020.71822036186,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 368004.83050847455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6122.2416349729465,
            "unit": "ns/iter",
            "extra": "iterations: 114375\ncpu: 6122.1158469945385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5067.005713789021,
            "unit": "ns/iter",
            "extra": "iterations: 138087\ncpu: 5066.812227074233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5019.071484529412,
            "unit": "ns/iter",
            "extra": "iterations: 139135\ncpu: 5018.919035469147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5049.136023483874,
            "unit": "ns/iter",
            "extra": "iterations: 138307\ncpu: 5048.94835402402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7829.37182985687,
            "unit": "ns/iter",
            "extra": "iterations: 89783\ncpu: 7829.055611864156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25821.254082905692,
            "unit": "ns/iter",
            "extra": "iterations: 31289\ncpu: 25820.33302438557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 136311.1933683969,
            "unit": "ns/iter",
            "extra": "iterations: 6273\ncpu: 136306.04176629995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103669.80971064839,
            "unit": "ns/iter",
            "extra": "iterations: 8156\ncpu: 103667.93771456597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103342.30652780074,
            "unit": "ns/iter",
            "extra": "iterations: 8257\ncpu: 103334.89160712117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 101287.50370016614,
            "unit": "ns/iter",
            "extra": "iterations: 8378\ncpu: 101283.32537598448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 202027.73035755337,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 202017.55864267863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1765618.0611854359,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1765556.405353723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1387021.314925522,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1386936.4179104497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1397354.3057227836,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1397289.6084337316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1376441.7696879306,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1376372.065378901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 792235.5047048068,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 792217.023096664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1347818.9999999565,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1347728.0931586614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34329.95124580259,
            "unit": "ns/iter",
            "extra": "iterations: 24121\ncpu: 34328.63894531736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 166743.765182201,
            "unit": "ns/iter",
            "extra": "iterations: 5187\ncpu: 166735.87815693062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 130783.59108202795,
            "unit": "ns/iter",
            "extra": "iterations: 6571\ncpu: 130776.22888449245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 131942.133877675,
            "unit": "ns/iter",
            "extra": "iterations: 6491\ncpu: 131934.0163303038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127552.9199762122,
            "unit": "ns/iter",
            "extra": "iterations: 6723\ncpu: 127548.63900044608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 223085.35823211746,
            "unit": "ns/iter",
            "extra": "iterations: 3869\ncpu: 223074.747996898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1816926.0740741252,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1816879.9220272903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1444069.0868216613,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1443985.8914728751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1429751.2080123872,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1429687.519260392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1413716.8109756333,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1413658.0792682986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 822768.8749999627,
            "unit": "ns/iter",
            "extra": "iterations: 1144\ncpu: 821553.6713286723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1387869.4300751192,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1387805.112781955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5018542.190000516,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5018353.999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3102267.9023566744,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3102191.2457912425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24504.089802682654,
            "unit": "ns/iter",
            "extra": "iterations: 33195\ncpu: 24503.63006476877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 141060.41352148968,
            "unit": "ns/iter",
            "extra": "iterations: 6094\ncpu: 141056.80997702703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109334.92242810942,
            "unit": "ns/iter",
            "extra": "iterations: 7825\ncpu: 109329.12460063948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107240.03199711333,
            "unit": "ns/iter",
            "extra": "iterations: 8282\ncpu: 107232.95097802518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99819.73200701823,
            "unit": "ns/iter",
            "extra": "iterations: 8545\ncpu: 99811.67934464567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 200359.74322763167,
            "unit": "ns/iter",
            "extra": "iterations: 4319\ncpu: 200349.13174345862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1759534.1789078128,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1759414.6892655434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1382598.1703700598,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1382509.6296296301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1398750.452238604,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1398670.2985074637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1379336.9703705173,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1379249.18518519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 789204.2667230007,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 789162.1507197298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1347304.0752530668,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1347301.4471779973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2916.4646912939174,
            "unit": "ns/iter",
            "extra": "iterations: 241541\ncpu: 2916.304892337113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18473.74262763086,
            "unit": "ns/iter",
            "extra": "iterations: 37844\ncpu: 18473.171440651102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14081.192187406998,
            "unit": "ns/iter",
            "extra": "iterations: 49561\ncpu: 14080.149714493304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14663.804916964478,
            "unit": "ns/iter",
            "extra": "iterations: 47631\ncpu: 14662.950599399554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11183.77892496084,
            "unit": "ns/iter",
            "extra": "iterations: 65765\ncpu: 11183.295065764458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 65893.21345989921,
            "unit": "ns/iter",
            "extra": "iterations: 10639\ncpu: 65890.70401353543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 117670.22889747894,
            "unit": "ns/iter",
            "extra": "iterations: 5959\ncpu: 117662.39301896183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30047.528012345298,
            "unit": "ns/iter",
            "extra": "iterations: 23329\ncpu: 30046.002829097033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29995.767481765124,
            "unit": "ns/iter",
            "extra": "iterations: 23310\ncpu: 29995.47833547827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29953.011918999633,
            "unit": "ns/iter",
            "extra": "iterations: 23408\ncpu: 29952.140293916895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61920.519999989614,
            "unit": "ns/iter",
            "extra": "iterations: 11325\ncpu: 61915.72626931553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56209.776067702565,
            "unit": "ns/iter",
            "extra": "iterations: 12410\ncpu: 56206.00322320758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21324.60572196553,
            "unit": "ns/iter",
            "extra": "iterations: 32751\ncpu: 21323.190131599087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108388.50030961461,
            "unit": "ns/iter",
            "extra": "iterations: 6460\ncpu: 108380.72755417938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87556.69445486892,
            "unit": "ns/iter",
            "extra": "iterations: 7989\ncpu: 87552.29690824934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88174.40368360172,
            "unit": "ns/iter",
            "extra": "iterations: 7927\ncpu: 88168.70190488217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88442.35417457581,
            "unit": "ns/iter",
            "extra": "iterations: 7917\ncpu: 88435.08904888184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 129495.42759256643,
            "unit": "ns/iter",
            "extra": "iterations: 5400\ncpu: 129486.72222222248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 529078.9449887268,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 529053.8055764841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 443882.60927571607,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 443843.837357055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 444108.8151206702,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 444071.98221092863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 426426.8703590495,
            "unit": "ns/iter",
            "extra": "iterations: 1643\ncpu: 426403.4692635457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 278626.1472343808,
            "unit": "ns/iter",
            "extra": "iterations: 2513\ncpu: 278608.3167528853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 428249.3923972803,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 428239.8528510129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21861.362402675997,
            "unit": "ns/iter",
            "extra": "iterations: 31981\ncpu: 21860.457771802216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108684.60950605458,
            "unit": "ns/iter",
            "extra": "iterations: 6438\ncpu: 108678.4560422489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90884.25577148043,
            "unit": "ns/iter",
            "extra": "iterations: 7667\ncpu: 90877.84009390925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90082.32159384157,
            "unit": "ns/iter",
            "extra": "iterations: 7780\ncpu: 90072.4935732638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89985.50475457717,
            "unit": "ns/iter",
            "extra": "iterations: 7782\ncpu: 89978.7201233607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 138330.04157593544,
            "unit": "ns/iter",
            "extra": "iterations: 5051\ncpu: 138322.60938428016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 527123.8389767695,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 527093.453724608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 437542.6935080945,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 437522.22222222236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 433734.8137376507,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 433712.43811880995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 436695.6240648773,
            "unit": "ns/iter",
            "extra": "iterations: 1604\ncpu: 436666.45885286626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 280946.7428915141,
            "unit": "ns/iter",
            "extra": "iterations: 2497\ncpu: 280934.0408490238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 428704.178726035,
            "unit": "ns/iter",
            "extra": "iterations: 1617\ncpu: 428665.36796537024 ns\nthreads: 1"
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
        "date": 1705777698197,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7486.295550146399,
            "unit": "ns/iter",
            "extra": "iterations: 93666\ncpu: 7486.1977665321465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53512.12809999879,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53508.28999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98829.24151420698,
            "unit": "ns/iter",
            "extra": "iterations: 8691\ncpu: 98826.03843056037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143361.2741074434,
            "unit": "ns/iter",
            "extra": "iterations: 5994\ncpu: 143356.80680680677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 188425.09162304626,
            "unit": "ns/iter",
            "extra": "iterations: 4584\ncpu: 188421.13874345552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 233358.05516683304,
            "unit": "ns/iter",
            "extra": "iterations: 3716\ncpu: 233348.9235737353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 278150.6533034012,
            "unit": "ns/iter",
            "extra": "iterations: 3118\ncpu: 278145.0609364978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 323137.9305607043,
            "unit": "ns/iter",
            "extra": "iterations: 2693\ncpu: 323124.2480505014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 374163.4710359686,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 374153.0232558137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6154.153112194163,
            "unit": "ns/iter",
            "extra": "iterations: 113714\ncpu: 6154.228151327028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5126.388976459072,
            "unit": "ns/iter",
            "extra": "iterations: 135764\ncpu: 5126.297103797769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5105.294034774665,
            "unit": "ns/iter",
            "extra": "iterations: 136994\ncpu: 5105.273223644825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5125.256997604361,
            "unit": "ns/iter",
            "extra": "iterations: 136904\ncpu: 5125.191374978086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7836.33647689507,
            "unit": "ns/iter",
            "extra": "iterations: 89177\ncpu: 7836.275048499055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26785.68024820956,
            "unit": "ns/iter",
            "extra": "iterations: 30458\ncpu: 26785.524328583568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 139754.46394780086,
            "unit": "ns/iter",
            "extra": "iterations: 6130\ncpu: 139753.36052202276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107568.0898015662,
            "unit": "ns/iter",
            "extra": "iterations: 7962\ncpu: 107567.15649334346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107746.71020151293,
            "unit": "ns/iter",
            "extra": "iterations: 7940\ncpu: 107744.88664987421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102536.92738640029,
            "unit": "ns/iter",
            "extra": "iterations: 8318\ncpu: 102535.82591969201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 214365.43627570788,
            "unit": "ns/iter",
            "extra": "iterations: 4135\ncpu: 214357.19467956465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1738693.7909604658,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1738665.9133709937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1367613.2359881725,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1367595.427728616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1377436.8118518193,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1377418.962962964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1371796.7932053832,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1371805.1698670636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 779114.6186868694,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 779115.0673400662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1332792.5395683679,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1332774.6762589891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36561.95650835525,
            "unit": "ns/iter",
            "extra": "iterations: 22740\ncpu: 36561.84696569929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176552.333333337,
            "unit": "ns/iter",
            "extra": "iterations: 4887\ncpu: 176551.115203601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134514.55687129762,
            "unit": "ns/iter",
            "extra": "iterations: 6418\ncpu: 134512.5895917729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 139118.4416612915,
            "unit": "ns/iter",
            "extra": "iterations: 6188\ncpu: 139116.03102779563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132025.51812596168,
            "unit": "ns/iter",
            "extra": "iterations: 6510\ncpu: 132023.87096774206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 234324.59836957057,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 234322.25543478332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1797409.0714284526,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1797376.061776058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1437970.5771604262,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1437927.006172829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1428604.273700266,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1428592.3547400618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1423630.2538226042,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1423607.3394495423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 813166.9238845082,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 813161.5923009625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1380324.2946427271,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1380296.1309523736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5022722.600000407,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5022706.999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3047149.9379087603,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3047107.1895424956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25684.041026933963,
            "unit": "ns/iter",
            "extra": "iterations: 31784\ncpu: 25683.6584445004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 144678.7608330503,
            "unit": "ns/iter",
            "extra": "iterations: 5954\ncpu: 144675.545851529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110714.98143372935,
            "unit": "ns/iter",
            "extra": "iterations: 7756\ncpu: 110712.76431150027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106257.30492331588,
            "unit": "ns/iter",
            "extra": "iterations: 8084\ncpu: 106255.65314200896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103684.94681366341,
            "unit": "ns/iter",
            "extra": "iterations: 8254\ncpu: 103684.0925611827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 212094.07540261347,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 212091.1664226452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1750409.2776735798,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1750359.4746716688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1390177.2222223168,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1389682.666666669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1376903.9690265588,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1376874.9262536892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1370657.9455881703,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1370594.2647058829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 780085.8921404405,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 780072.324414715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1336744.571839179,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1336697.413793108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2896.0509561319113,
            "unit": "ns/iter",
            "extra": "iterations: 239559\ncpu: 2895.9809483258778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18708.214387299737,
            "unit": "ns/iter",
            "extra": "iterations: 38673\ncpu: 18707.31000956744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15220.878034972424,
            "unit": "ns/iter",
            "extra": "iterations: 45923\ncpu: 15220.667203797615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15321.449363212401,
            "unit": "ns/iter",
            "extra": "iterations: 45698\ncpu: 15320.858680904992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11307.11124204904,
            "unit": "ns/iter",
            "extra": "iterations: 61946\ncpu: 11306.914086462406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 68338.91095689236,
            "unit": "ns/iter",
            "extra": "iterations: 10231\ncpu: 68337.55253640919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122832.60621487262,
            "unit": "ns/iter",
            "extra": "iterations: 5696\ncpu: 122826.14115168495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30048.352976570677,
            "unit": "ns/iter",
            "extra": "iterations: 23265\ncpu: 30047.307113690076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30422.616594266543,
            "unit": "ns/iter",
            "extra": "iterations: 23020\ncpu: 30421.39009556921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30096.32615053746,
            "unit": "ns/iter",
            "extra": "iterations: 23250\ncpu: 30095.42795698917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62219.55824683253,
            "unit": "ns/iter",
            "extra": "iterations: 11271\ncpu: 62217.08810220874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56325.932275735955,
            "unit": "ns/iter",
            "extra": "iterations: 12418\ncpu: 56324.60138508649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21541.00703813939,
            "unit": "ns/iter",
            "extra": "iterations: 32537\ncpu: 21540.157359313976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108313.72229081941,
            "unit": "ns/iter",
            "extra": "iterations: 6478\ncpu: 108315.03550478592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87857.71059884869,
            "unit": "ns/iter",
            "extra": "iterations: 7982\ncpu: 87856.4269606625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87753.67202006899,
            "unit": "ns/iter",
            "extra": "iterations: 7970\ncpu: 87748.85821831974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88434.6491538275,
            "unit": "ns/iter",
            "extra": "iterations: 7918\ncpu: 88433.46804748672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 130801.04170563073,
            "unit": "ns/iter",
            "extra": "iterations: 5347\ncpu: 130794.63250420931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 524896.902694611,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 524895.4341317376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 433347.4304347795,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 433322.79503105563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 431308.15055764193,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 431302.2924411365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 428452.8714199134,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 428429.18951858376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 281324.3301166272,
            "unit": "ns/iter",
            "extra": "iterations: 2487\ncpu: 281317.289907516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 424917.7000607116,
            "unit": "ns/iter",
            "extra": "iterations: 1647\ncpu: 424903.64298724645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21412.95257964254,
            "unit": "ns/iter",
            "extra": "iterations: 32834\ncpu: 21412.38350490336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107243.28993718981,
            "unit": "ns/iter",
            "extra": "iterations: 6529\ncpu: 107239.56195435772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88961.7187301574,
            "unit": "ns/iter",
            "extra": "iterations: 7875\ncpu: 88961.40952381013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90185.57429667546,
            "unit": "ns/iter",
            "extra": "iterations: 7820\ncpu: 90182.5575447571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88795.93047198077,
            "unit": "ns/iter",
            "extra": "iterations: 7479\ncpu: 88796.14921781102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 147557.30098588718,
            "unit": "ns/iter",
            "extra": "iterations: 5173\ncpu: 147550.18364585275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 524014.62518743944,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 524003.22338830645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 428914.37738174916,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 428935.09526736947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 432156.74352650944,
            "unit": "ns/iter",
            "extra": "iterations: 1622\ncpu: 432183.04562268604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 429135.36558476347,
            "unit": "ns/iter",
            "extra": "iterations: 1633\ncpu: 429124.00489895255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 282282.1051995543,
            "unit": "ns/iter",
            "extra": "iterations: 2481\ncpu: 282281.66062072007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 425135.3686776794,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 425123.76599634544 ns\nthreads: 1"
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
        "date": 1705952891385,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7584.538102711445,
            "unit": "ns/iter",
            "extra": "iterations: 92395\ncpu: 7584.359543265328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55583.94380000209,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55584.66000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102467.45350499754,
            "unit": "ns/iter",
            "extra": "iterations: 8388\ncpu: 102466.57129232238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 149040.2495670133,
            "unit": "ns/iter",
            "extra": "iterations: 5774\ncpu: 149038.69068236926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 195880.3510397964,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 195868.03797468345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 242053.6116694718,
            "unit": "ns/iter",
            "extra": "iterations: 3582\ncpu: 242049.99999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 288985.58244678983,
            "unit": "ns/iter",
            "extra": "iterations: 3008\ncpu: 288984.6409574468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 336548.95366793894,
            "unit": "ns/iter",
            "extra": "iterations: 2590\ncpu: 336545.7142857141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 383139.6508292129,
            "unit": "ns/iter",
            "extra": "iterations: 2231\ncpu: 383136.5755266695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6279.193346726902,
            "unit": "ns/iter",
            "extra": "iterations: 111494\ncpu: 6279.102911367428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5139.887174669061,
            "unit": "ns/iter",
            "extra": "iterations: 136246\ncpu: 5139.827958251988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5161.725783171863,
            "unit": "ns/iter",
            "extra": "iterations: 135794\ncpu: 5161.613178785517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5171.926237423133,
            "unit": "ns/iter",
            "extra": "iterations: 135665\ncpu: 5171.853462573255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7955.822932406847,
            "unit": "ns/iter",
            "extra": "iterations: 88678\ncpu: 7955.605674462667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26430.85217672693,
            "unit": "ns/iter",
            "extra": "iterations: 30895\ncpu: 26429.396342450233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 134483.48029011762,
            "unit": "ns/iter",
            "extra": "iterations: 6342\ncpu: 134482.33995585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 105714.12690355827,
            "unit": "ns/iter",
            "extra": "iterations: 8077\ncpu: 105714.08938962476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104587.75413248646,
            "unit": "ns/iter",
            "extra": "iterations: 8167\ncpu: 104585.56385453662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 103663.94401262845,
            "unit": "ns/iter",
            "extra": "iterations: 8234\ncpu: 103661.13675006105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199495.8643160094,
            "unit": "ns/iter",
            "extra": "iterations: 4481\ncpu: 199481.9459941979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1830657.4901576308,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1830641.338582673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1442599.2546582888,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1442536.180124221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1448588.6183799997,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1448499.5327102786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1426349.7595711711,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1426288.514548236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 833490.0980215559,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 833450.6294964044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1395272.5852186698,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1395184.1628959253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34464.429530759226,
            "unit": "ns/iter",
            "extra": "iterations: 24124\ncpu: 34464.48350190686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 173015.3796630485,
            "unit": "ns/iter",
            "extra": "iterations: 4986\ncpu: 173012.59526674714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 133437.2198108875,
            "unit": "ns/iter",
            "extra": "iterations: 6451\ncpu: 133436.18043714142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 135609.37503928912,
            "unit": "ns/iter",
            "extra": "iterations: 6362\ncpu: 135607.8591637852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 131822.90854595994,
            "unit": "ns/iter",
            "extra": "iterations: 6506\ncpu: 131821.85674761757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 218923.1502156788,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 218921.466632834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1868332.2851404636,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1868194.176706823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1487138.4329073855,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1487040.5750798772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1488945.3906751622,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1488876.5273311876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1468016.3391167428,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1467949.2113564669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 854441.6681985258,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 854409.1911764737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1440725.7430768649,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1440658.9230769274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5232392.289999552,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5231775.999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3062074.9374998463,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3061889.473684196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24937.981456025234,
            "unit": "ns/iter",
            "extra": "iterations: 32733\ncpu: 24936.25393333932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143242.4612693587,
            "unit": "ns/iter",
            "extra": "iterations: 6003\ncpu: 143231.7008162594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111766.6675375467,
            "unit": "ns/iter",
            "extra": "iterations: 7655\ncpu: 111758.43239712575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104638.67125624426,
            "unit": "ns/iter",
            "extra": "iterations: 8207\ncpu: 104633.16680882173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102784.81859464842,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 102781.16634799205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 198161.44917957022,
            "unit": "ns/iter",
            "extra": "iterations: 4388\ncpu: 198153.07657247075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1824797.197265582,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1824731.8359374958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1439749.9861110596,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1439686.2654320984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1437700.0339505335,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1437648.7654320935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1422178.9754978435,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1422084.3797856062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 821250.632275087,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 821223.5449735486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1400464.4482758788,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1400409.4452773598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2944.6774871169246,
            "unit": "ns/iter",
            "extra": "iterations: 238499\ncpu: 2944.5423251250368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18766.45550341759,
            "unit": "ns/iter",
            "extra": "iterations: 37295\ncpu: 18765.70049604511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14673.607100965024,
            "unit": "ns/iter",
            "extra": "iterations: 47740\ncpu: 14672.764976958559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14767.089117704863,
            "unit": "ns/iter",
            "extra": "iterations: 47297\ncpu: 14766.329788358673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10639.200342491684,
            "unit": "ns/iter",
            "extra": "iterations: 65987\ncpu: 10638.74702592935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 68871.44491358622,
            "unit": "ns/iter",
            "extra": "iterations: 10184\ncpu: 68870.28672427325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 125911.42268968692,
            "unit": "ns/iter",
            "extra": "iterations: 5562\ncpu: 125911.99208917758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30906.324865486546,
            "unit": "ns/iter",
            "extra": "iterations: 22674\ncpu: 30906.22739701867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31117.004529506397,
            "unit": "ns/iter",
            "extra": "iterations: 22519\ncpu: 31117.132199475865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30674.68599860117,
            "unit": "ns/iter",
            "extra": "iterations: 22812\ncpu: 30674.601087147297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63252.23602315084,
            "unit": "ns/iter",
            "extra": "iterations: 11054\ncpu: 63250.370906458986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57866.50230908449,
            "unit": "ns/iter",
            "extra": "iterations: 12126\ncpu: 57863.62361867073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21302.054761179614,
            "unit": "ns/iter",
            "extra": "iterations: 32870\ncpu: 21300.690599330737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 110050.75172846956,
            "unit": "ns/iter",
            "extra": "iterations: 6364\ncpu: 110049.4814582025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88546.00000000009,
            "unit": "ns/iter",
            "extra": "iterations: 7900\ncpu: 88545.17721519026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91586.58180627499,
            "unit": "ns/iter",
            "extra": "iterations: 7640\ncpu: 91587.76178010486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90980.07026464473,
            "unit": "ns/iter",
            "extra": "iterations: 7671\ncpu: 90977.36931299687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 129444.3852291828,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 129442.80942661029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 538570.1268255145,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 538557.8785549585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 448067.05965363304,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 448058.4348941647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 443190.3761062013,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 443180.4677623327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 440775.59534294956,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 440777.21837633755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 288798.6643269657,
            "unit": "ns/iter",
            "extra": "iterations: 2422\ncpu: 288796.1189099893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 435808.5180348297,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 435809.70149253967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21658.98249690358,
            "unit": "ns/iter",
            "extra": "iterations: 32280\ncpu: 21659.175960346947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112215.10468850122,
            "unit": "ns/iter",
            "extra": "iterations: 6228\ncpu: 112215.5266538221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92714.74113756152,
            "unit": "ns/iter",
            "extra": "iterations: 7560\ncpu: 92712.60582010545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91261.1459749175,
            "unit": "ns/iter",
            "extra": "iterations: 7652\ncpu: 91259.0695243075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91444.75844969078,
            "unit": "ns/iter",
            "extra": "iterations: 7663\ncpu: 91443.74265953338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 130310.56909359741,
            "unit": "ns/iter",
            "extra": "iterations: 5384\ncpu: 130307.81946508375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 539137.0530769388,
            "unit": "ns/iter",
            "extra": "iterations: 1300\ncpu: 539139.1538461548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 446695.7324393255,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 446686.7177522296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 444630.61093453405,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 444620.91544818826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 444354.5627376742,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 444345.5640050682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 290227.6626455587,
            "unit": "ns/iter",
            "extra": "iterations: 2404\ncpu: 290220.0915141452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 438160.04591196857,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 438150.62893082376 ns\nthreads: 1"
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
        "date": 1705954332672,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7555.069110875528,
            "unit": "ns/iter",
            "extra": "iterations: 92518\ncpu: 7554.682332086731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54532.461700000575,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54533.04 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100547.90232775467,
            "unit": "ns/iter",
            "extra": "iterations: 8549\ncpu: 100543.12785121068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145974.28297402782,
            "unit": "ns/iter",
            "extra": "iterations: 5891\ncpu: 145966.4403327109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 191803.9275587025,
            "unit": "ns/iter",
            "extra": "iterations: 4514\ncpu: 191795.45857332737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 237334.58728420557,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 237325.67826801864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 285917.35604826425,
            "unit": "ns/iter",
            "extra": "iterations: 3067\ncpu: 285905.93413759384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 328815.95535376004,
            "unit": "ns/iter",
            "extra": "iterations: 2643\ncpu: 328806.6969353007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 373792.96134018264,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 373776.1168384877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6270.8197088262605,
            "unit": "ns/iter",
            "extra": "iterations: 111686\ncpu: 6270.656125208172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5229.515260497231,
            "unit": "ns/iter",
            "extra": "iterations: 133744\ncpu: 5229.294024404831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5239.468362310465,
            "unit": "ns/iter",
            "extra": "iterations: 133322\ncpu: 5239.205082432009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5248.151369122546,
            "unit": "ns/iter",
            "extra": "iterations: 133224\ncpu: 5247.865249504586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8098.897966989552,
            "unit": "ns/iter",
            "extra": "iterations: 86276\ncpu: 8098.959154341871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27026.846204733185,
            "unit": "ns/iter",
            "extra": "iterations: 30235\ncpu: 27026.294030097575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 131988.31782467506,
            "unit": "ns/iter",
            "extra": "iterations: 6491\ncpu: 131984.62486519775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 102251.89033723902,
            "unit": "ns/iter",
            "extra": "iterations: 8362\ncpu: 102250.33484812247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102032.69798015404,
            "unit": "ns/iter",
            "extra": "iterations: 8367\ncpu: 102029.23389506376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98211.11924151915,
            "unit": "ns/iter",
            "extra": "iterations: 8596\ncpu: 98210.06281991635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 206997.128835802,
            "unit": "ns/iter",
            "extra": "iterations: 4269\ncpu: 206991.8013586322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1787928.3468992317,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1787806.0077519368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1378343.9020771873,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1378320.4747774487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1387369.8971684596,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1387340.2384500732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1380573.3124999823,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1380540.3273809492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 785957.9405771833,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 785932.937181664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1345123.1565217432,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1345085.6521739135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34550.15285329088,
            "unit": "ns/iter",
            "extra": "iterations: 24095\ncpu: 34549.66590578958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 174494.9569174725,
            "unit": "ns/iter",
            "extra": "iterations: 4944\ncpu: 174489.84627831719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 131553.28580169927,
            "unit": "ns/iter",
            "extra": "iterations: 6536\ncpu: 131551.4993880053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 131027.00702182436,
            "unit": "ns/iter",
            "extra": "iterations: 6551\ncpu: 131022.9735918178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 129973.43367115875,
            "unit": "ns/iter",
            "extra": "iterations: 6611\ncpu: 129961.88171229769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 230853.74571734577,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 230845.3961456108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1830122.1679842982,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1830019.1699604648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1424413.579754639,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1424372.392638034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1426112.8162328668,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1426040.4287901968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1432051.6902929295,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1431973.3436055477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 820861.4368932056,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 820823.5657546375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1388910.0687593431,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1388845.2914798146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5061835.530000281,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5061396.999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3112032.167785282,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3111874.8322147653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25005.74267180488,
            "unit": "ns/iter",
            "extra": "iterations: 32682\ncpu: 25003.996083471036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 139654.62735235426,
            "unit": "ns/iter",
            "extra": "iterations: 6164\ncpu: 139648.31278390635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108018.39962217057,
            "unit": "ns/iter",
            "extra": "iterations: 7940\ncpu: 108013.2745591944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 100434.96677196394,
            "unit": "ns/iter",
            "extra": "iterations: 8547\ncpu: 100430.80613080613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 98649.07439926539,
            "unit": "ns/iter",
            "extra": "iterations: 8656\ncpu: 98642.89510166354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 205017.76528925486,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 205009.61038961046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1780008.5142858906,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1779920.5714285632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1384900.5637982874,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1384839.3175074158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1393366.6726190706,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1393270.0892857183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1364941.8900292371,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1364871.5542521935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 780312.7246861893,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 780270.9623430981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1343789.5335277177,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1343719.825072888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2917.8762619638915,
            "unit": "ns/iter",
            "extra": "iterations: 240201\ncpu: 2917.686021290511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18783.166362512784,
            "unit": "ns/iter",
            "extra": "iterations: 37262\ncpu: 18782.792120659167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14226.200789611994,
            "unit": "ns/iter",
            "extra": "iterations: 49898\ncpu: 14211.078600344725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14818.016979769825,
            "unit": "ns/iter",
            "extra": "iterations: 47056\ncpu: 14817.621557293394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11283.310527161491,
            "unit": "ns/iter",
            "extra": "iterations: 62220\ncpu: 11283.397621343609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 68234.36956521799,
            "unit": "ns/iter",
            "extra": "iterations: 10304\ncpu: 68233.41420807468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 124400.47330140583,
            "unit": "ns/iter",
            "extra": "iterations: 5637\ncpu: 124397.40996984133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30449.2503701759,
            "unit": "ns/iter",
            "extra": "iterations: 22962\ncpu: 30448.41477223242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30946.057420294725,
            "unit": "ns/iter",
            "extra": "iterations: 22553\ncpu: 30945.395291091936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30272.719317983923,
            "unit": "ns/iter",
            "extra": "iterations: 23108\ncpu: 30271.47308291494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62185.51960958288,
            "unit": "ns/iter",
            "extra": "iterations: 11270\ncpu: 62185.43921916613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56829.622355516585,
            "unit": "ns/iter",
            "extra": "iterations: 12337\ncpu: 56829.35073356549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21827.968043937988,
            "unit": "ns/iter",
            "extra": "iterations: 32044\ncpu: 21827.36861814985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112621.86232931662,
            "unit": "ns/iter",
            "extra": "iterations: 6225\ncpu: 112621.39759036171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 91333.17081757235,
            "unit": "ns/iter",
            "extra": "iterations: 7669\ncpu: 91331.46433694167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90880.94162666131,
            "unit": "ns/iter",
            "extra": "iterations: 7709\ncpu: 90881.74860552544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91539.18600995913,
            "unit": "ns/iter",
            "extra": "iterations: 7634\ncpu: 91537.14959392184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 135472.74167801885,
            "unit": "ns/iter",
            "extra": "iterations: 5137\ncpu: 135469.3400817613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 534643.4961772999,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 534641.0550458683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 439334.1586206606,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 439317.68025078333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 435843.59011266317,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 435831.9148936227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 436440.8820225003,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 436433.3333333381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 286365.15950920194,
            "unit": "ns/iter",
            "extra": "iterations: 2445\ncpu: 286355.91002045275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 431968.76252314745,
            "unit": "ns/iter",
            "extra": "iterations: 1617\ncpu: 431972.04700061586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22473.067481739068,
            "unit": "ns/iter",
            "extra": "iterations: 31490\ncpu: 22472.489679263585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113196.29114944866,
            "unit": "ns/iter",
            "extra": "iterations: 6203\ncpu: 113194.43817507586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 92755.06571278503,
            "unit": "ns/iter",
            "extra": "iterations: 7548\ncpu: 92754.65023847355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 94484.13276491674,
            "unit": "ns/iter",
            "extra": "iterations: 7389\ncpu: 94482.94762484703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94124.73109470379,
            "unit": "ns/iter",
            "extra": "iterations: 7445\ncpu: 94123.86836803179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 138085.45763711326,
            "unit": "ns/iter",
            "extra": "iterations: 5087\ncpu: 138078.23864753317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 543094.6221198249,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 543061.9047618974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 434345.8267081016,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 434343.5403726654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 433398.4312267705,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 433392.62701363076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 438389.4413792881,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 438375.8620689623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 284192.25638943975,
            "unit": "ns/iter",
            "extra": "iterations: 2465\ncpu: 284185.2332657202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 431407.1440049343,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 431400.3708281855 ns\nthreads: 1"
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
        "date": 1705956396187,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7786.797366038308,
            "unit": "ns/iter",
            "extra": "iterations: 89447\ncpu: 7786.640133263273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55891.13839999982,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55888.03 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 103587.93713803192,
            "unit": "ns/iter",
            "extra": "iterations: 8288\ncpu: 103585.54536679537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 150558.8043021964,
            "unit": "ns/iter",
            "extra": "iterations: 5718\ncpu: 150558.14970269328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 197632.15022831157,
            "unit": "ns/iter",
            "extra": "iterations: 4380\ncpu: 197631.30136986298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 244973.5945182343,
            "unit": "ns/iter",
            "extra": "iterations: 3539\ncpu: 244974.34303475558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 291131.4307795697,
            "unit": "ns/iter",
            "extra": "iterations: 2976\ncpu: 291132.1908602151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 338971.9517321942,
            "unit": "ns/iter",
            "extra": "iterations: 2569\ncpu: 338963.4877384197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 385958.07317074557,
            "unit": "ns/iter",
            "extra": "iterations: 2255\ncpu: 385956.62971175165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6452.661037082675,
            "unit": "ns/iter",
            "extra": "iterations: 108593\ncpu: 6452.556794636841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5260.376182870113,
            "unit": "ns/iter",
            "extra": "iterations: 132728\ncpu: 5260.398710144047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5306.867737714253,
            "unit": "ns/iter",
            "extra": "iterations: 132207\ncpu: 5306.831710877632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5332.929661075425,
            "unit": "ns/iter",
            "extra": "iterations: 131563\ncpu: 5332.891466445736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8123.561136054242,
            "unit": "ns/iter",
            "extra": "iterations: 86193\ncpu: 8123.472903832088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26819.54531095805,
            "unit": "ns/iter",
            "extra": "iterations: 30390\ncpu: 26819.157617637364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 139383.12107914628,
            "unit": "ns/iter",
            "extra": "iterations: 6153\ncpu: 139382.44758654307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107819.9461809958,
            "unit": "ns/iter",
            "extra": "iterations: 7934\ncpu: 107818.74212251065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105664.48302679183,
            "unit": "ns/iter",
            "extra": "iterations: 8101\ncpu: 105664.80681397338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 101296.16599141981,
            "unit": "ns/iter",
            "extra": "iterations: 8392\ncpu: 101295.44804575798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199035.63564312467,
            "unit": "ns/iter",
            "extra": "iterations: 4416\ncpu: 199034.46557971055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1821236.1796874355,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1821209.5703124958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1422148.7151607836,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1422140.7350689142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1442788.785714171,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1442752.018633539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1431670.414860777,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1431669.1950464402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 816506.3471366244,
            "unit": "ns/iter",
            "extra": "iterations: 1135\ncpu: 816493.8325991174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1392550.7297297881,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1392527.7777777775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35132.30813755424,
            "unit": "ns/iter",
            "extra": "iterations: 23496\ncpu: 35132.37572352737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 174674.0991518684,
            "unit": "ns/iter",
            "extra": "iterations: 4952\ncpu: 174675.74717286002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 135107.271764896,
            "unit": "ns/iter",
            "extra": "iterations: 6329\ncpu: 135108.51635329434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136894.01626793318,
            "unit": "ns/iter",
            "extra": "iterations: 6270\ncpu: 136896.06060606058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 130352.22902391183,
            "unit": "ns/iter",
            "extra": "iterations: 6567\ncpu: 130346.56616415415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 222348.3257906927,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 222340.11313962392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1848661.7205588503,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1848603.1936127716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1474246.07142847,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1474241.9047619044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1463367.0723271135,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1463304.874213843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1478013.40952388,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1477973.0158730152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 844072.7497724714,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 844040.4003639698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1429699.2288786203,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1429655.60675883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5234386.520000953,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5234309.999999952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3183764.4778157645,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3183626.2798634847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25320.329932503486,
            "unit": "ns/iter",
            "extra": "iterations: 32149\ncpu: 25320.041058819876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 146882.09994883568,
            "unit": "ns/iter",
            "extra": "iterations: 5863\ncpu: 146881.47705952678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109660.93719621652,
            "unit": "ns/iter",
            "extra": "iterations: 7818\ncpu: 109659.51650038379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103449.10817308663,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 103449.57932692309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100551.51654303454,
            "unit": "ns/iter",
            "extra": "iterations: 8493\ncpu: 100552.76109737431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 195915.60790959807,
            "unit": "ns/iter",
            "extra": "iterations: 4425\ncpu: 195916.65536723076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1815519.9280154319,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1815508.7548638138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1424929.947611824,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1424911.556240374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1456825.2312498586,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1456804.5312499888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1433190.584992358,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1433136.9065849946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 815321.6864628907,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 815291.6157205238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1391403.0298952647,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1391391.3303437945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2898.1556710972254,
            "unit": "ns/iter",
            "extra": "iterations: 241567\ncpu: 2897.9359763544026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18943.435220532614,
            "unit": "ns/iter",
            "extra": "iterations: 36933\ncpu: 18942.761216256447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15562.025540624656,
            "unit": "ns/iter",
            "extra": "iterations: 44948\ncpu: 15561.733558778993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14729.920321991063,
            "unit": "ns/iter",
            "extra": "iterations: 47579\ncpu: 14730.004834065467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11314.841641945008,
            "unit": "ns/iter",
            "extra": "iterations: 62024\ncpu: 11314.410550754461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 65181.02828338756,
            "unit": "ns/iter",
            "extra": "iterations: 10713\ncpu: 65177.04657892318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 127268.27180232175,
            "unit": "ns/iter",
            "extra": "iterations: 5504\ncpu: 127264.0261627919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31163.910822355818,
            "unit": "ns/iter",
            "extra": "iterations: 22472\ncpu: 31162.18850124615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31305.75496155696,
            "unit": "ns/iter",
            "extra": "iterations: 22372\ncpu: 31304.429644198117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31085.41199183571,
            "unit": "ns/iter",
            "extra": "iterations: 22532\ncpu: 31083.81856914622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64528.47123161873,
            "unit": "ns/iter",
            "extra": "iterations: 10880\ncpu: 64526.222426470755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 58423.54536349021,
            "unit": "ns/iter",
            "extra": "iterations: 11981\ncpu: 58422.51898839827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22330.241937030118,
            "unit": "ns/iter",
            "extra": "iterations: 31285\ncpu: 22329.873741409527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 115705.2930063071,
            "unit": "ns/iter",
            "extra": "iterations: 6034\ncpu: 115705.0546900898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 92384.21426679508,
            "unit": "ns/iter",
            "extra": "iterations: 7556\ncpu: 92376.9587083118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93202.00252725431,
            "unit": "ns/iter",
            "extra": "iterations: 7518\ncpu: 93197.32641660089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 92738.26010335775,
            "unit": "ns/iter",
            "extra": "iterations: 7547\ncpu: 92733.47025308099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 135642.59844961518,
            "unit": "ns/iter",
            "extra": "iterations: 5160\ncpu: 135642.17054263607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 557689.0900398842,
            "unit": "ns/iter",
            "extra": "iterations: 1255\ncpu: 557687.5697211126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 456586.2619515967,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 456585.3307138126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 458434.8657498372,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 458404.97707924375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 448917.39537871565,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 448891.4634146343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 293945.3559748516,
            "unit": "ns/iter",
            "extra": "iterations: 2385\ncpu: 293926.20545073407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 450521.20641020546,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 450481.7307692249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22320.73129576673,
            "unit": "ns/iter",
            "extra": "iterations: 31410\ncpu: 22319.175421839856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 116655.35829320147,
            "unit": "ns/iter",
            "extra": "iterations: 6023\ncpu: 116649.80906524824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 95837.21147248546,
            "unit": "ns/iter",
            "extra": "iterations: 7287\ncpu: 95829.628104843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 94382.48508570685,
            "unit": "ns/iter",
            "extra": "iterations: 7409\ncpu: 94382.22432177061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94578.03316188397,
            "unit": "ns/iter",
            "extra": "iterations: 7388\ncpu: 94577.58527341518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 142867.80824151705,
            "unit": "ns/iter",
            "extra": "iterations: 4902\ncpu: 142860.68951448373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 549286.4662161724,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 549269.5945945953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 448546.7692307729,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 448517.8846153851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 449249.21943373146,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 449246.332046327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 452330.97142860154,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 452329.1558441557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 296816.6377118612,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 296804.74576271675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 447718.39859248674,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 447706.5259117055 ns\nthreads: 1"
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
        "date": 1705958154168,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7514.126135022126,
            "unit": "ns/iter",
            "extra": "iterations: 93170\ncpu: 7513.67392937641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54694.19050000397,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54689.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100854.8623562519,
            "unit": "ns/iter",
            "extra": "iterations: 8522\ncpu: 100852.25299225537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146714.72554024577,
            "unit": "ns/iter",
            "extra": "iterations: 5877\ncpu: 146707.18053428622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193141.04816052757,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 193131.90635451503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 238658.90350148518,
            "unit": "ns/iter",
            "extra": "iterations: 3627\ncpu: 238645.51971326175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 284970.3245729137,
            "unit": "ns/iter",
            "extra": "iterations: 3044\ncpu: 284965.3416557161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 330960.95784279576,
            "unit": "ns/iter",
            "extra": "iterations: 2633\ncpu: 330943.37257880747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 381836.2726484574,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 381818.8990030336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6243.840574579442,
            "unit": "ns/iter",
            "extra": "iterations: 112987\ncpu: 6243.542177418637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5175.966055664015,
            "unit": "ns/iter",
            "extra": "iterations: 135133\ncpu: 5175.711336239116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5174.996510077352,
            "unit": "ns/iter",
            "extra": "iterations: 134960\ncpu: 5174.786603438065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5164.992783865039,
            "unit": "ns/iter",
            "extra": "iterations: 134421\ncpu: 5164.9481851794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7767.878480843195,
            "unit": "ns/iter",
            "extra": "iterations: 89813\ncpu: 7767.327669713754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26102.721081430725,
            "unit": "ns/iter",
            "extra": "iterations: 31070\ncpu: 26100.878661087885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 137271.64700240383,
            "unit": "ns/iter",
            "extra": "iterations: 6255\ncpu: 137266.45883293357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104505.51627508005,
            "unit": "ns/iter",
            "extra": "iterations: 8172\ncpu: 104501.1135584925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104398.50547047029,
            "unit": "ns/iter",
            "extra": "iterations: 7769\ncpu: 104392.1354099629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99186.26857141628,
            "unit": "ns/iter",
            "extra": "iterations: 8575\ncpu: 99182.29737609341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 201160.3871701463,
            "unit": "ns/iter",
            "extra": "iterations: 4396\ncpu: 201147.5659690628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1807416.2787525249,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1807375.2436647138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1419587.3532109868,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1419502.7522935742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1422573.548238911,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1422564.1653905043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1405356.9635812307,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1405311.987860397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 804538.1854419541,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 804523.3968804153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1377707.844213669,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1377665.578635016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35032.18773083984,
            "unit": "ns/iter",
            "extra": "iterations: 23555\ncpu: 35031.67055826792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 173016.00961732963,
            "unit": "ns/iter",
            "extra": "iterations: 4991\ncpu: 173013.24383890966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134278.34849906733,
            "unit": "ns/iter",
            "extra": "iterations: 6396\ncpu: 134274.90619136958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 133826.36917340825,
            "unit": "ns/iter",
            "extra": "iterations: 6436\ncpu: 133819.68614045987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 129444.43502400091,
            "unit": "ns/iter",
            "extra": "iterations: 6664\ncpu: 129441.43157262936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 219198.7381134009,
            "unit": "ns/iter",
            "extra": "iterations: 3933\ncpu: 219194.17747266704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1846756.178571421,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1846718.2539682523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1468533.7056962696,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1468474.6835443105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1460616.9119498138,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1460602.2012578566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1452223.8476189836,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1452184.1269841262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 827097.428063939,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 827089.964476018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1414926.672755061,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1414871.9939117115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5120168.290000037,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5120205.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3218643.555172501,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3218530.6896551703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 25812.01757037323,
            "unit": "ns/iter",
            "extra": "iterations: 31758\ncpu: 25811.57188739844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143589.81745369782,
            "unit": "ns/iter",
            "extra": "iterations: 5993\ncpu: 143584.49858167907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109314.30965692498,
            "unit": "ns/iter",
            "extra": "iterations: 7870\ncpu: 109313.71029224951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103767.91586859466,
            "unit": "ns/iter",
            "extra": "iterations: 8249\ncpu: 103766.7474845436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 98995.77499419235,
            "unit": "ns/iter",
            "extra": "iterations: 8622\ncpu: 98992.83228949216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 195352.52232746372,
            "unit": "ns/iter",
            "extra": "iterations: 4434\ncpu: 195344.24898511532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1800168.5444015146,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1800130.5019305067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1415367.0303489813,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1415341.8816388415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1419134.2188449842,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1419111.3981762927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1395254.7574850165,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1395118.2634730537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 802312.0412371189,
            "unit": "ns/iter",
            "extra": "iterations: 1164\ncpu: 802267.7835051547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1369007.4889868363,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1368939.3538913433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2887.202207700106,
            "unit": "ns/iter",
            "extra": "iterations: 242696\ncpu: 2887.0673599894603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18845.07278609175,
            "unit": "ns/iter",
            "extra": "iterations: 37095\ncpu: 18844.051758997128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15218.787481424233,
            "unit": "ns/iter",
            "extra": "iterations: 49798\ncpu: 15218.882284429008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14594.120015784314,
            "unit": "ns/iter",
            "extra": "iterations: 48152\ncpu: 14593.890181093224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11174.082295978686,
            "unit": "ns/iter",
            "extra": "iterations: 62579\ncpu: 11173.513478962654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66692.53181214696,
            "unit": "ns/iter",
            "extra": "iterations: 10562\ncpu: 66688.02310168554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 124818.22412563296,
            "unit": "ns/iter",
            "extra": "iterations: 5604\ncpu: 124809.77872947833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30579.949194708002,
            "unit": "ns/iter",
            "extra": "iterations: 22911\ncpu: 30579.17157697183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31033.292608886226,
            "unit": "ns/iter",
            "extra": "iterations: 22730\ncpu: 31031.465024197252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30433.61720243145,
            "unit": "ns/iter",
            "extra": "iterations: 23020\ncpu: 30431.65942658535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63023.81592219471,
            "unit": "ns/iter",
            "extra": "iterations: 11104\ncpu: 63019.3804034579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56770.386693709064,
            "unit": "ns/iter",
            "extra": "iterations: 12325\ncpu: 56770.71805273864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22625.274399390826,
            "unit": "ns/iter",
            "extra": "iterations: 32675\ncpu: 22625.006885998497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 109217.59712456181,
            "unit": "ns/iter",
            "extra": "iterations: 6399\ncpu: 109216.67448038784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89905.00591640166,
            "unit": "ns/iter",
            "extra": "iterations: 7775\ncpu: 89898.9453376206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90757.32180333837,
            "unit": "ns/iter",
            "extra": "iterations: 7719\ncpu: 90750.86151055785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90130.6051651164,
            "unit": "ns/iter",
            "extra": "iterations: 7783\ncpu: 90128.34382628922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 130210.33277465763,
            "unit": "ns/iter",
            "extra": "iterations: 5370\ncpu: 130206.72253258881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 535929.3491577512,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 535927.7947932653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 467187.42495254567,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 467172.64091196936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 438677.96238242404,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 438660.37617554696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 437421.8753132778,
            "unit": "ns/iter",
            "extra": "iterations: 1596\ncpu: 437408.7719298279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 287716.4513347172,
            "unit": "ns/iter",
            "extra": "iterations: 2435\ncpu: 287710.6776180696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 432957.0827160801,
            "unit": "ns/iter",
            "extra": "iterations: 1620\ncpu: 432948.1481481546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21700.140997022856,
            "unit": "ns/iter",
            "extra": "iterations: 32256\ncpu: 21699.848090277705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111884.09616912431,
            "unit": "ns/iter",
            "extra": "iterations: 6291\ncpu: 111882.86440947586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91103.70106715942,
            "unit": "ns/iter",
            "extra": "iterations: 7684\ncpu: 91101.5096304007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 95870.68780232235,
            "unit": "ns/iter",
            "extra": "iterations: 7649\ncpu: 95866.97607530282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91966.74316798073,
            "unit": "ns/iter",
            "extra": "iterations: 7721\ncpu: 91964.68074083635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 134486.7523094657,
            "unit": "ns/iter",
            "extra": "iterations: 5196\ncpu: 134484.58429561203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 532767.0494296593,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 532762.205323189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 443601.55316458596,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 443573.16455695813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 437164.26381907787,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 437159.17085426976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 437416.53740653984,
            "unit": "ns/iter",
            "extra": "iterations: 1604\ncpu: 437406.7955112206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 288615.3431048931,
            "unit": "ns/iter",
            "extra": "iterations: 2422\ncpu: 288612.7580511967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 433887.58245178935,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 433877.8469197302 ns\nthreads: 1"
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
        "date": 1705959731417,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7684.647534259848,
            "unit": "ns/iter",
            "extra": "iterations: 91433\ncpu: 7684.718865179969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 60766.69178489662,
            "unit": "ns/iter",
            "extra": "iterations: 11771\ncpu: 60763.588480163104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101297.5781526482,
            "unit": "ns/iter",
            "extra": "iterations: 8477\ncpu: 101293.01639731035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147357.52718878558,
            "unit": "ns/iter",
            "extra": "iterations: 5848\ncpu: 147351.62448700407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 196647.10508702128,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 196637.68406961177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 239483.12250551823,
            "unit": "ns/iter",
            "extra": "iterations: 3608\ncpu: 239483.03769401327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 287870.3300460159,
            "unit": "ns/iter",
            "extra": "iterations: 3042\ncpu: 287863.6423405656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 331548.960000007,
            "unit": "ns/iter",
            "extra": "iterations: 2625\ncpu: 331533.37142857135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 376351.6941789769,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 376343.91833188524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6440.884109938555,
            "unit": "ns/iter",
            "extra": "iterations: 109043\ncpu: 6440.803169391903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5288.278013799506,
            "unit": "ns/iter",
            "extra": "iterations: 132756\ncpu: 5288.281508933685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5220.158315122769,
            "unit": "ns/iter",
            "extra": "iterations: 132710\ncpu: 5220.10700022605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5272.569835093432,
            "unit": "ns/iter",
            "extra": "iterations: 132863\ncpu: 5272.434763628695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7965.499829183777,
            "unit": "ns/iter",
            "extra": "iterations: 87814\ncpu: 7965.33696221558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28156.876875627553,
            "unit": "ns/iter",
            "extra": "iterations: 28857\ncpu: 28156.04879232076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 135344.92565643875,
            "unit": "ns/iter",
            "extra": "iterations: 6322\ncpu: 135342.7238215754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 102857.84556961899,
            "unit": "ns/iter",
            "extra": "iterations: 8295\ncpu: 102854.71971066894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103388.83058452688,
            "unit": "ns/iter",
            "extra": "iterations: 8246\ncpu: 103388.6611690516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98586.68498721674,
            "unit": "ns/iter",
            "extra": "iterations: 8606\ncpu: 98584.7896816177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 200812.8955696009,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 200805.99005424985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1780799.9826924987,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1780779.6153846106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1408322.8755690472,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1408320.789074358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1426202.0903521723,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1426161.102603368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1398814.075528647,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1398778.2477341369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 792668.5620690015,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 792632.0689655169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1367590.4127218656,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1367535.0591715989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37170.53545417856,
            "unit": "ns/iter",
            "extra": "iterations: 22381\ncpu: 37168.50900317223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176712.26157311833,
            "unit": "ns/iter",
            "extra": "iterations: 4882\ncpu: 176706.20647275654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 132190.35302282317,
            "unit": "ns/iter",
            "extra": "iterations: 6484\ncpu: 132183.97594077725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 134439.48459734186,
            "unit": "ns/iter",
            "extra": "iterations: 6395\ncpu: 134438.8115715403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 125714.27200702908,
            "unit": "ns/iter",
            "extra": "iterations: 6816\ncpu: 125710.9154929577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 220172.97909761698,
            "unit": "ns/iter",
            "extra": "iterations: 3923\ncpu: 220171.9602345137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1816043.8669353642,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1815986.6935483932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1467759.5204403994,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1467723.1132075484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1451038.0443037844,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1450994.145569629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1453780.3203732525,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1451085.536547433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 825274.4738242932,
            "unit": "ns/iter",
            "extra": "iterations: 1127\ncpu: 825245.6965394873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1405713.4479637877,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1405661.0859728453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5111859.859999868,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5111616.9999999525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3130421.979865836,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3130339.5973154553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26758.334701114465,
            "unit": "ns/iter",
            "extra": "iterations: 30463\ncpu: 26757.66667760892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142709.0500912283,
            "unit": "ns/iter",
            "extra": "iterations: 6029\ncpu: 142706.10383148098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109037.66831431356,
            "unit": "ns/iter",
            "extra": "iterations: 7890\ncpu: 109034.03041825091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103199.35374640027,
            "unit": "ns/iter",
            "extra": "iterations: 8328\ncpu: 103199.00336215181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 97165.29892670328,
            "unit": "ns/iter",
            "extra": "iterations: 8758\ncpu: 97162.2059831012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 196709.5985071299,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 196704.1167156757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1777087.347248507,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1777045.5407969675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1414705.8320726564,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1414665.0529500786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1420306.709284549,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1420280.8219178054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1392574.3710879248,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1392540.685543964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 791812.3065198564,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 791796.5283657919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1363883.5043859247,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1363848.9766081935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2886.017172658719,
            "unit": "ns/iter",
            "extra": "iterations: 242362\ncpu: 2885.925186291583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18879.29545311772,
            "unit": "ns/iter",
            "extra": "iterations: 31846\ncpu: 18878.653520065225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14759.264620253705,
            "unit": "ns/iter",
            "extra": "iterations: 47400\ncpu: 14758.879746835393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14755.523556343938,
            "unit": "ns/iter",
            "extra": "iterations: 47397\ncpu: 14755.267211004802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11339.615661829872,
            "unit": "ns/iter",
            "extra": "iterations: 61602\ncpu: 11339.092886594608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 66199.39020701134,
            "unit": "ns/iter",
            "extra": "iterations: 10579\ncpu: 66199.21542678903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 113553.60257855778,
            "unit": "ns/iter",
            "extra": "iterations: 6205\ncpu: 113547.9290894442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30436.88577642311,
            "unit": "ns/iter",
            "extra": "iterations: 22990\ncpu: 30436.820356676784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30658.597178406028,
            "unit": "ns/iter",
            "extra": "iterations: 22824\ncpu: 30658.271994391875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30460.734825395033,
            "unit": "ns/iter",
            "extra": "iterations: 22966\ncpu: 30460.515544718124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59772.52311518749,
            "unit": "ns/iter",
            "extra": "iterations: 11659\ncpu: 59771.1639077107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51402.139017408525,
            "unit": "ns/iter",
            "extra": "iterations: 13617\ncpu: 51400.92531394598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21698.03326319804,
            "unit": "ns/iter",
            "extra": "iterations: 32318\ncpu: 21697.765950863453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112139.96823868291,
            "unit": "ns/iter",
            "extra": "iterations: 6234\ncpu: 112134.2476740462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89435.22558406633,
            "unit": "ns/iter",
            "extra": "iterations: 7833\ncpu: 89433.99719136964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 90370.55948387676,
            "unit": "ns/iter",
            "extra": "iterations: 7750\ncpu: 90367.96129032243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89945.35912954016,
            "unit": "ns/iter",
            "extra": "iterations: 7766\ncpu: 89941.63018284879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132115.24863027138,
            "unit": "ns/iter",
            "extra": "iterations: 5293\ncpu: 132111.65690534783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 532398.6165528133,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 532380.2581624971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 444034.18256997294,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 443988.6132315611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 447555.36404348403,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 447528.8547664824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 438475.8229036478,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 438454.13016270316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 292208.82075863145,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 292198.74947894976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 436565.6649969086,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 436552.3481527942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21929.706056821044,
            "unit": "ns/iter",
            "extra": "iterations: 32030\ncpu: 21929.38495160757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112996.88092170058,
            "unit": "ns/iter",
            "extra": "iterations: 6206\ncpu: 112990.04189493884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91351.95744680673,
            "unit": "ns/iter",
            "extra": "iterations: 7520\ncpu: 91351.50265957475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91319.50078205686,
            "unit": "ns/iter",
            "extra": "iterations: 7672\ncpu: 91318.28727841517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91296.39328631126,
            "unit": "ns/iter",
            "extra": "iterations: 7656\ncpu: 91292.20219435802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 132922.24089528222,
            "unit": "ns/iter",
            "extra": "iterations: 5272\ncpu: 132921.7754172993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 533815.080854313,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 533800.8390541554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 442383.6710942601,
            "unit": "ns/iter",
            "extra": "iterations: 1581\ncpu: 442382.92220113747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 441924.0530637939,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 441909.9810486445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 443926.41941625945,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 443924.3654822304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 292174.67237063585,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 292159.1402337207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 436833.8213616636,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 436818.67582760303 ns\nthreads: 1"
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
        "date": 1705961386024,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7490.227606823002,
            "unit": "ns/iter",
            "extra": "iterations: 93332\ncpu: 7489.689495564222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53885.808899997304,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53884.11999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98888.17932780221,
            "unit": "ns/iter",
            "extra": "iterations: 8688\ncpu: 98881.80248618787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143357.65469062282,
            "unit": "ns/iter",
            "extra": "iterations: 6012\ncpu: 143349.63406520293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 188960.44977120918,
            "unit": "ns/iter",
            "extra": "iterations: 4589\ncpu: 188946.96012203096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 233963.80562315992,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 233947.36415247378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 278996.75668710953,
            "unit": "ns/iter",
            "extra": "iterations: 3103\ncpu: 278979.6970673542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 323992.57047229406,
            "unit": "ns/iter",
            "extra": "iterations: 2689\ncpu: 323992.45072517684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 368806.8738357506,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 368783.8696020324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6101.414883154029,
            "unit": "ns/iter",
            "extra": "iterations: 114895\ncpu: 6101.2446146481525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5144.894559910936,
            "unit": "ns/iter",
            "extra": "iterations: 136836\ncpu: 5144.299014879138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5133.331778677542,
            "unit": "ns/iter",
            "extra": "iterations: 136579\ncpu: 5133.055594198229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5179.347831861396,
            "unit": "ns/iter",
            "extra": "iterations: 135531\ncpu: 5179.346422589666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7961.315800240648,
            "unit": "ns/iter",
            "extra": "iterations: 87986\ncpu: 7961.127906712434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25643.54899854536,
            "unit": "ns/iter",
            "extra": "iterations: 31654\ncpu: 25642.88873444115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 139783.710504818,
            "unit": "ns/iter",
            "extra": "iterations: 6121\ncpu: 139777.667047868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106814.70382841563,
            "unit": "ns/iter",
            "extra": "iterations: 8019\ncpu: 106811.90921561288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105960.5054469002,
            "unit": "ns/iter",
            "extra": "iterations: 8078\ncpu: 105952.94627383025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 101281.8366734693,
            "unit": "ns/iter",
            "extra": "iterations: 8333\ncpu: 101277.7631105244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 197144.08794423065,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 197130.4093567256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1752777.6880908213,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1752742.344045369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1385780.871833076,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1385712.9657228026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1398425.2345864621,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1398361.8045112826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1379176.6854599777,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1379084.7181008926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 758165.6241829843,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 758139.7058823545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1338186.734870342,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1338108.213256488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35050.00008448217,
            "unit": "ns/iter",
            "extra": "iterations: 23673\ncpu: 35047.27326490087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176902.0106644786,
            "unit": "ns/iter",
            "extra": "iterations: 4876\ncpu: 176895.42657916303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 133033.54173764086,
            "unit": "ns/iter",
            "extra": "iterations: 6457\ncpu: 133029.99845129333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136769.4039471559,
            "unit": "ns/iter",
            "extra": "iterations: 6283\ncpu: 136765.39869489064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 131251.48979903202,
            "unit": "ns/iter",
            "extra": "iterations: 6568\ncpu: 131245.64555420214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 216162.426032538,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 216155.36921151477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1791350.1192308646,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1791297.500000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1429326.6917178994,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1429253.527607361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1424150.4449539946,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1424042.813455663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1432460.5913978054,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1432401.0752688204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 790126.4580152859,
            "unit": "ns/iter",
            "extra": "iterations: 1179\ncpu: 790091.6878710756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1374165.7905603705,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1374094.6902654865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6533519.153846145,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6533051.748251748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3029597.7337661865,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3029548.376623375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24264.68470309392,
            "unit": "ns/iter",
            "extra": "iterations: 33765\ncpu: 24263.201540056187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 144825.79916107276,
            "unit": "ns/iter",
            "extra": "iterations: 5960\ncpu: 144816.61073825494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110714.10014177476,
            "unit": "ns/iter",
            "extra": "iterations: 7759\ncpu: 110708.58358035769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106467.1627647764,
            "unit": "ns/iter",
            "extra": "iterations: 8073\ncpu: 106464.22643379171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100560.9277927493,
            "unit": "ns/iter",
            "extra": "iterations: 8531\ncpu: 100557.2500293043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 195037.4976388669,
            "unit": "ns/iter",
            "extra": "iterations: 4447\ncpu: 195031.23454013854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1753241.077067569,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1753153.383458643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1396779.8032786422,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1396745.1564828604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1396311.5793413585,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1396237.1257485051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1376981.326923053,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1376909.6153846232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 750602.5350523698,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 750577.2763900064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1391337.8177905027,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1391247.7761836436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2878.139426278917,
            "unit": "ns/iter",
            "extra": "iterations: 243254\ncpu: 2878.0262606164665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18626.157270266584,
            "unit": "ns/iter",
            "extra": "iterations: 37674\ncpu: 18625.38886234532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14603.244815522829,
            "unit": "ns/iter",
            "extra": "iterations: 48028\ncpu: 14602.592237861283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14619.690087724059,
            "unit": "ns/iter",
            "extra": "iterations: 47991\ncpu: 14619.720364235043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11141.956046227982,
            "unit": "ns/iter",
            "extra": "iterations: 62907\ncpu: 11141.030409970206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 67366.50540018437,
            "unit": "ns/iter",
            "extra": "iterations: 10370\ncpu: 67364.0405014468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121705.97924298588,
            "unit": "ns/iter",
            "extra": "iterations: 5733\ncpu: 121696.28466771405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29876.909336074306,
            "unit": "ns/iter",
            "extra": "iterations: 23361\ncpu: 29876.268139206233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30129.192091605943,
            "unit": "ns/iter",
            "extra": "iterations: 23317\ncpu: 30127.310545953816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29744.03055862023,
            "unit": "ns/iter",
            "extra": "iterations: 23594\ncpu: 29743.036365177715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60498.047014086995,
            "unit": "ns/iter",
            "extra": "iterations: 11571\ncpu: 60493.87261256567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55824.67039821003,
            "unit": "ns/iter",
            "extra": "iterations: 12506\ncpu: 55821.669598592714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21877.09703280528,
            "unit": "ns/iter",
            "extra": "iterations: 32556\ncpu: 21877.113281730133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112985.72012678089,
            "unit": "ns/iter",
            "extra": "iterations: 6310\ncpu: 112978.90649762347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89069.82867712682,
            "unit": "ns/iter",
            "extra": "iterations: 7839\ncpu: 89062.26559510117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89262.01543171216,
            "unit": "ns/iter",
            "extra": "iterations: 7841\ncpu: 89253.8961867099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91605.17807865849,
            "unit": "ns/iter",
            "extra": "iterations: 7755\ncpu: 91598.4268214054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 130143.89674417755,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 130139.88837209326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 528118.9480811993,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 528083.8224228706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 441098.077166357,
            "unit": "ns/iter",
            "extra": "iterations: 1581\ncpu: 441073.3712839914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 440545.3587641747,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 440507.12484236946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 432999.4526901774,
            "unit": "ns/iter",
            "extra": "iterations: 1617\ncpu: 432967.16141001356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 277207.8753980677,
            "unit": "ns/iter",
            "extra": "iterations: 2512\ncpu: 277187.81847133813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 427282.82771306834,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 427282.34212140145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21836.66772910714,
            "unit": "ns/iter",
            "extra": "iterations: 31688\ncpu: 21835.688588740162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112011.91244608272,
            "unit": "ns/iter",
            "extra": "iterations: 6259\ncpu: 112006.24700431325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91210.8818300534,
            "unit": "ns/iter",
            "extra": "iterations: 7650\ncpu: 91206.84967320348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92004.76323010497,
            "unit": "ns/iter",
            "extra": "iterations: 7653\ncpu: 91999.43812883837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90974.58864138731,
            "unit": "ns/iter",
            "extra": "iterations: 7677\ncpu: 90973.5834310276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 135280.31375578817,
            "unit": "ns/iter",
            "extra": "iterations: 5176\ncpu: 135278.86398763652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 524158.26547355426,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 524145.0410141663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 429195.7808471347,
            "unit": "ns/iter",
            "extra": "iterations: 1629\ncpu: 429189.4413750757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 431386.90791104274,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 431374.2274412857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 433560.3216049218,
            "unit": "ns/iter",
            "extra": "iterations: 1620\ncpu: 433544.8765432115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 276016.04023670795,
            "unit": "ns/iter",
            "extra": "iterations: 2535\ncpu: 276006.7061143961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 423576.91438976186,
            "unit": "ns/iter",
            "extra": "iterations: 1647\ncpu: 423561.2021857963 ns\nthreads: 1"
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
        "date": 1705962981129,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7675.0948467776725,
            "unit": "ns/iter",
            "extra": "iterations: 91632\ncpu: 7674.902872359001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55039.57020000598,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55037.97999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102502.72422404529,
            "unit": "ns/iter",
            "extra": "iterations: 8409\ncpu: 102495.58806041146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147878.34502319855,
            "unit": "ns/iter",
            "extra": "iterations: 5817\ncpu: 147872.06463812967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 194185.05804571937,
            "unit": "ns/iter",
            "extra": "iterations: 4462\ncpu: 194176.46795159116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 240252.7762975312,
            "unit": "ns/iter",
            "extra": "iterations: 3603\ncpu: 240242.74215931157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 285713.44945671863,
            "unit": "ns/iter",
            "extra": "iterations: 3037\ncpu: 285695.1267698388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 331671.5024837539,
            "unit": "ns/iter",
            "extra": "iterations: 2617\ncpu: 331651.85326709953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 377097.59600346396,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 377065.8123370977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6200.87167685608,
            "unit": "ns/iter",
            "extra": "iterations: 112544\ncpu: 6200.296772817746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5159.303123758616,
            "unit": "ns/iter",
            "extra": "iterations: 135862\ncpu: 5158.854573022622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5179.55043841852,
            "unit": "ns/iter",
            "extra": "iterations: 135145\ncpu: 5179.542713381926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5204.114317960841,
            "unit": "ns/iter",
            "extra": "iterations: 134677\ncpu: 5203.789065690497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8016.704202198104,
            "unit": "ns/iter",
            "extra": "iterations: 87597\ncpu: 8016.2494149343165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27268.181598551906,
            "unit": "ns/iter",
            "extra": "iterations: 29802\ncpu: 27266.810952285086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 138329.8396638219,
            "unit": "ns/iter",
            "extra": "iterations: 6187\ncpu: 138325.7960239211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107293.45642057995,
            "unit": "ns/iter",
            "extra": "iterations: 7951\ncpu: 107293.09520814988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 106485.0949706663,
            "unit": "ns/iter",
            "extra": "iterations: 8013\ncpu: 106482.24135779362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102442.3810556769,
            "unit": "ns/iter",
            "extra": "iterations: 8298\ncpu: 102442.35960472438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 201654.40965767772,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 201645.90795737947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1839216.0376983776,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1839174.603174601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1419028.4510704293,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1418968.0428134557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1468027.3359622492,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1468010.883280755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1442635.7422361341,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1442596.7391304392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 817884.9257950902,
            "unit": "ns/iter",
            "extra": "iterations: 1132\ncpu: 817861.3957597188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1399615.2684765118,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1399587.782805425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35984.7826333452,
            "unit": "ns/iter",
            "extra": "iterations: 22929\ncpu: 35983.52741070259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176265.90816535352,
            "unit": "ns/iter",
            "extra": "iterations: 4911\ncpu: 176259.9266951743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 135187.8393391178,
            "unit": "ns/iter",
            "extra": "iterations: 6355\ncpu: 135185.1455546812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136952.38560533646,
            "unit": "ns/iter",
            "extra": "iterations: 6294\ncpu: 136949.04671115353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132543.6025207562,
            "unit": "ns/iter",
            "extra": "iterations: 6506\ncpu: 132534.29142330124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 223455.73932178214,
            "unit": "ns/iter",
            "extra": "iterations: 3863\ncpu: 223452.5757183544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1893073.4276987494,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1893044.602851328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1478696.706814546,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1478631.3787638664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1500691.1109325467,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1500619.7749196142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1483967.6347687158,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1483913.2376395557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 851559.4366971895,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 851511.9266055048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1443956.436335354,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1443889.5962732893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5253158.720000783,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5253097.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3196333.462328813,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3196221.917808222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 26165.0580577069,
            "unit": "ns/iter",
            "extra": "iterations: 31262\ncpu: 26164.496833216013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 145897.78241758628,
            "unit": "ns/iter",
            "extra": "iterations: 5915\ncpu: 145896.3651732872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 113187.72435218719,
            "unit": "ns/iter",
            "extra": "iterations: 7564\ncpu: 113185.43098889438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107554.20895144079,
            "unit": "ns/iter",
            "extra": "iterations: 7887\ncpu: 107550.22188411283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102862.12954735899,
            "unit": "ns/iter",
            "extra": "iterations: 8329\ncpu: 102859.77908512419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 200446.32266910782,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 200445.01828153527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1807621.8349512857,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1807570.873786415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1413799.562974225,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1413772.2306525067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1457684.6333853942,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1457656.3182527295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1430195.0076804457,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1430175.8832565264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 807399.3809523324,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 807392.6406926404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1391029.5574017742,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1391011.9335347437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2969.236994562052,
            "unit": "ns/iter",
            "extra": "iterations: 236132\ncpu: 2969.1613165517765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18439.47087928177,
            "unit": "ns/iter",
            "extra": "iterations: 37997\ncpu: 18439.39258362514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14926.85926919626,
            "unit": "ns/iter",
            "extra": "iterations: 46962\ncpu: 14926.666240790308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14930.22605723991,
            "unit": "ns/iter",
            "extra": "iterations: 46820\ncpu: 14930.017086715112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11248.607834953173,
            "unit": "ns/iter",
            "extra": "iterations: 62285\ncpu: 11248.404912900325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 68953.79207726197,
            "unit": "ns/iter",
            "extra": "iterations: 10148\ncpu: 68952.70989357495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 124838.64764814235,
            "unit": "ns/iter",
            "extra": "iterations: 5889\ncpu: 124836.61062998771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30547.011070913726,
            "unit": "ns/iter",
            "extra": "iterations: 22943\ncpu: 30544.73695680607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30969.06030016864,
            "unit": "ns/iter",
            "extra": "iterations: 22587\ncpu: 30967.702660822477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30575.125245986907,
            "unit": "ns/iter",
            "extra": "iterations: 22867\ncpu: 30572.891065727945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 63743.45640885638,
            "unit": "ns/iter",
            "extra": "iterations: 10977\ncpu: 63740.30245057827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 57326.58314963753,
            "unit": "ns/iter",
            "extra": "iterations: 12249\ncpu: 57326.59808963996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21422.62602894901,
            "unit": "ns/iter",
            "extra": "iterations: 32679\ncpu: 21422.366045472747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108684.03337990573,
            "unit": "ns/iter",
            "extra": "iterations: 6441\ncpu: 108681.88169538922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89749.8585509496,
            "unit": "ns/iter",
            "extra": "iterations: 7812\ncpu: 89743.94521249282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89481.17543859014,
            "unit": "ns/iter",
            "extra": "iterations: 7809\ncpu: 89476.06607760361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 89227.33316339055,
            "unit": "ns/iter",
            "extra": "iterations: 7846\ncpu: 89223.31124139618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 130532.20840335796,
            "unit": "ns/iter",
            "extra": "iterations: 5355\ncpu: 130529.4304388425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 537430.0215053525,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 537419.5084485419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 449250.966537938,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 449230.3732303737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 452389.08846155746,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 452352.243589743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 440940.45862288546,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 440931.9014529337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 288155.6780568484,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 288147.87978592113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 436613.6872658956,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 436608.7390761514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22162.759586371914,
            "unit": "ns/iter",
            "extra": "iterations: 31816\ncpu: 22162.42456625589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 114386.2122384118,
            "unit": "ns/iter",
            "extra": "iterations: 4396\ncpu: 114382.96178343838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90519.46996511234,
            "unit": "ns/iter",
            "extra": "iterations: 7741\ncpu: 90516.39323084959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89871.42188727653,
            "unit": "ns/iter",
            "extra": "iterations: 7630\ncpu: 89869.29226736662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91176.1003261634,
            "unit": "ns/iter",
            "extra": "iterations: 7665\ncpu: 91176.00782778978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 135061.11927315124,
            "unit": "ns/iter",
            "extra": "iterations: 5173\ncpu: 135060.3131645081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 532021.6694528183,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 531998.8601823769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 442285.4731860853,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 442266.750788649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 438921.4996861172,
            "unit": "ns/iter",
            "extra": "iterations: 1593\ncpu: 438920.4645323296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 445024.9143037444,
            "unit": "ns/iter",
            "extra": "iterations: 1587\ncpu: 445013.9256458699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 295893.8335445939,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 295891.80397127656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 435422.5720523725,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 435405.8640049908 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}