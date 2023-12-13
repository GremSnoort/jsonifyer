window.BENCHMARK_DATA = {
  "lastUpdate": 1702492208361,
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
      }
    ]
  }
}