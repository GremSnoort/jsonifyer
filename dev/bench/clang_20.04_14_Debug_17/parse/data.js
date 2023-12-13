window.BENCHMARK_DATA = {
  "lastUpdate": 1702489574923,
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
      }
    ]
  }
}