window.BENCHMARK_DATA = {
  "lastUpdate": 1702388134766,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-9 22.04 Release c++-17": [
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381083828,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1631.6840252103996,
            "unit": "ns/iter",
            "extra": "iterations: 426015\ncpu: 1631.6383225942748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25649.757615440292,
            "unit": "ns/iter",
            "extra": "iterations: 32073\ncpu: 25648.929005705733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 52817.0019650101,
            "unit": "ns/iter",
            "extra": "iterations: 15776\ncpu: 52814.503042596334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 66253.87552087245,
            "unit": "ns/iter",
            "extra": "iterations: 13199\ncpu: 66252.2918402909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 94132.61745102107,
            "unit": "ns/iter",
            "extra": "iterations: 9902\ncpu: 94129.40820036353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 117239.36861215874,
            "unit": "ns/iter",
            "extra": "iterations: 7436\ncpu: 117235.90640129098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 145148.19597423507,
            "unit": "ns/iter",
            "extra": "iterations: 6210\ncpu: 145139.66183574873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 166334.27751011637,
            "unit": "ns/iter",
            "extra": "iterations: 5189\ncpu: 166332.26055116596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 189164.86062335633,
            "unit": "ns/iter",
            "extra": "iterations: 4556\ncpu: 189154.87269534677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1428.6943678285004,
            "unit": "ns/iter",
            "extra": "iterations: 491267\ncpu: 1428.6245565038962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1135.2655416383332,
            "unit": "ns/iter",
            "extra": "iterations: 616103\ncpu: 1135.1694440702295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1132.8814840400148,
            "unit": "ns/iter",
            "extra": "iterations: 616668\ncpu: 1132.8312803647966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1150.9072035423299,
            "unit": "ns/iter",
            "extra": "iterations: 605702\ncpu: 1150.875678138756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2272.0854083415607,
            "unit": "ns/iter",
            "extra": "iterations: 308553\ncpu: 2272.028144273429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7454.157060919703,
            "unit": "ns/iter",
            "extra": "iterations: 111409\ncpu: 7453.869077004557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 44250.68402759066,
            "unit": "ns/iter",
            "extra": "iterations: 18701\ncpu: 44249.15245174052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 34041.21753616081,
            "unit": "ns/iter",
            "extra": "iterations: 24612\ncpu: 34039.074435234805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 33486.22638515995,
            "unit": "ns/iter",
            "extra": "iterations: 24582\ncpu: 33484.13066471398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32642.425199045185,
            "unit": "ns/iter",
            "extra": "iterations: 25120\ncpu: 32639.359076433182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 78573.45720761488,
            "unit": "ns/iter",
            "extra": "iterations: 11030\ncpu: 78571.1514052582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 876467.9877474138,
            "unit": "ns/iter",
            "extra": "iterations: 1061\ncpu: 876431.3854853887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 711532.4579025167,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 711524.7415066464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 720982.8064764731,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 720960.3700848117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 734250.6799686841,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 734238.8888888888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 524284.1733895318,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 524276.45996387734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 716413.8021390482,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 716402.2918258215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3846737.3414634056,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3846609.756097567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1671928.5837742568,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1671893.4744268039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4952956.05235605,
            "unit": "ns/iter",
            "extra": "iterations: 191\ncpu: 4952780.104712041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 11399.715278994423,
            "unit": "ns/iter",
            "extra": "iterations: 74213\ncpu: 11399.20499103934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51908.64219999866,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51908.50000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 47327.65582104762,
            "unit": "ns/iter",
            "extra": "iterations: 17703\ncpu: 47326.20459809079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 47031.112564115974,
            "unit": "ns/iter",
            "extra": "iterations: 17741\ncpu: 47030.20122879212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 46607.56944908223,
            "unit": "ns/iter",
            "extra": "iterations: 17970\ncpu: 46606.04340567622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 91306.48731826525,
            "unit": "ns/iter",
            "extra": "iterations: 9423\ncpu: 91306.0278043082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 922497.7882352931,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 922477.3529411774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 725931.1813989261,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 725927.8247501923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 732488.2785104817,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 732465.1667959666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 736626.861502342,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 736623.3176838799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 525133.1224004859,
            "unit": "ns/iter",
            "extra": "iterations: 1683\ncpu: 525125.430778373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 719376.2435703444,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 719361.9515884985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 4102249.2347826012,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4102174.782608707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1740304.6981481519,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1740252.5925925947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7524.699972779092,
            "unit": "ns/iter",
            "extra": "iterations: 110210\ncpu: 7524.671989837633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 43141.23094065876,
            "unit": "ns/iter",
            "extra": "iterations: 19295\ncpu: 43139.80305778706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 34419.953569954385,
            "unit": "ns/iter",
            "extra": "iterations: 24230\ncpu: 34419.80189847296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 33880.71304807525,
            "unit": "ns/iter",
            "extra": "iterations: 24586\ncpu: 33880.143170910356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 34888.9156010219,
            "unit": "ns/iter",
            "extra": "iterations: 23851\ncpu: 34888.41138736328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 75903.77740950607,
            "unit": "ns/iter",
            "extra": "iterations: 11465\ncpu: 75901.83166157898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 870083.8101382621,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 870065.5299539175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 697989.4885777461,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 697977.8187177586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 697698.27864006,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 697689.1352549869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 709455.777526396,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 709438.6877828096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 499545.59240363265,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 499534.2403628135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 690699.9163027591,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 690696.7976710353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 612.0767548491108,
            "unit": "ns/iter",
            "extra": "iterations: 1145882\ncpu: 612.0669493019376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4672.320929085789,
            "unit": "ns/iter",
            "extra": "iterations: 150083\ncpu: 4672.307989579096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3459.2318854891846,
            "unit": "ns/iter",
            "extra": "iterations: 202531\ncpu: 3459.1376135011283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3400.2307598979055,
            "unit": "ns/iter",
            "extra": "iterations: 206054\ncpu: 3400.216448115563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2651.004133872369,
            "unit": "ns/iter",
            "extra": "iterations: 264401\ncpu: 2650.8250725224193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 21641.29664673474,
            "unit": "ns/iter",
            "extra": "iterations: 32446\ncpu: 21640.343956111752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 50299.01093524936,
            "unit": "ns/iter",
            "extra": "iterations: 13900\ncpu: 50297.7266187047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11379.943071075928,
            "unit": "ns/iter",
            "extra": "iterations: 61568\ncpu: 11379.377273908436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11399.193819172342,
            "unit": "ns/iter",
            "extra": "iterations: 61351\ncpu: 11398.606379684146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11509.92330112941,
            "unit": "ns/iter",
            "extra": "iterations: 61070\ncpu: 11508.945472408579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21209.11993948579,
            "unit": "ns/iter",
            "extra": "iterations: 33050\ncpu: 21207.82753403898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22053.781243129455,
            "unit": "ns/iter",
            "extra": "iterations: 31839\ncpu: 22052.190709507122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6226.667271562571,
            "unit": "ns/iter",
            "extra": "iterations: 112416\ncpu: 6226.323654995673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 32085.126169081974,
            "unit": "ns/iter",
            "extra": "iterations: 21812\ncpu: 32080.556574362607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 26821.80490946581,
            "unit": "ns/iter",
            "extra": "iterations: 27172\ncpu: 26820.631532459873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 25867.789854805775,
            "unit": "ns/iter",
            "extra": "iterations: 27067\ncpu: 25865.651900838155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 26508.30623633158,
            "unit": "ns/iter",
            "extra": "iterations: 26522\ncpu: 26507.19779805464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 60851.89154746619,
            "unit": "ns/iter",
            "extra": "iterations: 11535\ncpu: 60850.888599913276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 231518.11785462874,
            "unit": "ns/iter",
            "extra": "iterations: 2834\ncpu: 231511.36203246439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 186775.97744361887,
            "unit": "ns/iter",
            "extra": "iterations: 3724\ncpu: 186772.87862513578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 186488.91170928994,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 186471.17092866515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 191624.98494388966,
            "unit": "ns/iter",
            "extra": "iterations: 3653\ncpu: 191615.5214891841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 112454.7495588002,
            "unit": "ns/iter",
            "extra": "iterations: 6233\ncpu: 112442.48355526914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 190252.9641401884,
            "unit": "ns/iter",
            "extra": "iterations: 3681\ncpu: 190241.99945666982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6181.594362484937,
            "unit": "ns/iter",
            "extra": "iterations: 113064\ncpu: 6181.315007429375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 32867.09081106475,
            "unit": "ns/iter",
            "extra": "iterations: 21330\ncpu: 32865.55555555581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 25886.92560975627,
            "unit": "ns/iter",
            "extra": "iterations: 27060\ncpu: 25885.044345898095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 25795.212427315266,
            "unit": "ns/iter",
            "extra": "iterations: 26828\ncpu: 25793.65588191447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 26310.18279005248,
            "unit": "ns/iter",
            "extra": "iterations: 26659\ncpu: 26308.638733636035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 59604.850686790785,
            "unit": "ns/iter",
            "extra": "iterations: 11794\ncpu: 59603.416991690734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 220884.28472222926,
            "unit": "ns/iter",
            "extra": "iterations: 3168\ncpu: 220880.61868686625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 183721.08011790068,
            "unit": "ns/iter",
            "extra": "iterations: 3732\ncpu: 183709.24437299205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 187360.8632592959,
            "unit": "ns/iter",
            "extra": "iterations: 3737\ncpu: 187352.4484880944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 191830.01834109979,
            "unit": "ns/iter",
            "extra": "iterations: 3653\ncpu: 191814.56337257318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 113758.32314694325,
            "unit": "ns/iter",
            "extra": "iterations: 6152\ncpu: 113751.6417425235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 186502.4693823261,
            "unit": "ns/iter",
            "extra": "iterations: 3756\ncpu: 186488.23216187465 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382260751,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1656.4424590346327,
            "unit": "ns/iter",
            "extra": "iterations: 422247\ncpu: 1656.3724549848785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25761.921540126117,
            "unit": "ns/iter",
            "extra": "iterations: 32335\ncpu: 25760.831915880626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 52843.35602720672,
            "unit": "ns/iter",
            "extra": "iterations: 15878\ncpu: 52841.14498047612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 65179.97215586711,
            "unit": "ns/iter",
            "extra": "iterations: 13396\ncpu: 65177.724693938464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 92618.4363672383,
            "unit": "ns/iter",
            "extra": "iterations: 10097\ncpu: 92614.05367931063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115491.96988508906,
            "unit": "ns/iter",
            "extra": "iterations: 7571\ncpu: 115487.53136970017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141631.742793793,
            "unit": "ns/iter",
            "extra": "iterations: 6314\ncpu: 141626.4966740577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 163031.68568190534,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 163025.04722327177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186563.50709677333,
            "unit": "ns/iter",
            "extra": "iterations: 4650\ncpu: 186554.25806451633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1415.2862937763816,
            "unit": "ns/iter",
            "extra": "iterations: 495016\ncpu: 1415.2441537243262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1124.2921602175725,
            "unit": "ns/iter",
            "extra": "iterations: 623627\ncpu: 1124.2556848885624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1128.4542646168773,
            "unit": "ns/iter",
            "extra": "iterations: 619575\ncpu: 1128.401081386432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1165.051482864491,
            "unit": "ns/iter",
            "extra": "iterations: 602550\ncpu: 1165.0387519707913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2245.04247843728,
            "unit": "ns/iter",
            "extra": "iterations: 312229\ncpu: 2244.9221564941085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7412.204781111055,
            "unit": "ns/iter",
            "extra": "iterations: 112066\ncpu: 7412.128567094397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 44146.47889947378,
            "unit": "ns/iter",
            "extra": "iterations: 18791\ncpu: 44144.58517375341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 33799.09423672753,
            "unit": "ns/iter",
            "extra": "iterations: 24205\ncpu: 33798.63251394345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 33216.567127283684,
            "unit": "ns/iter",
            "extra": "iterations: 24677\ncpu: 33214.53175021267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32568.623130172142,
            "unit": "ns/iter",
            "extra": "iterations: 25136\ncpu: 32567.731540420114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 80118.99233197875,
            "unit": "ns/iter",
            "extra": "iterations: 11085\ncpu: 80118.09652683785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 840334.6669699714,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 840294.5404913544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 701621.5808605446,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 701614.3916913953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 695355.6238872517,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 695327.8931750734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 708753.2004555755,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 708713.7433561117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 504913.42054484616,
            "unit": "ns/iter",
            "extra": "iterations: 1762\ncpu: 504870.715096481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 696548.1676601932,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 696491.4307004467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3772793.859437674,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3772471.084337347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1628081.6872852326,
            "unit": "ns/iter",
            "extra": "iterations: 582\ncpu: 1627979.7250859134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4872650.481865356,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 4872256.476683935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 11665.484411481964,
            "unit": "ns/iter",
            "extra": "iterations: 72810\ncpu: 11664.65732729021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 52003.814299999365,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52001.54000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 47294.209076450636,
            "unit": "ns/iter",
            "extra": "iterations: 17606\ncpu: 47292.10496421683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 46671.56262258318,
            "unit": "ns/iter",
            "extra": "iterations: 17845\ncpu: 46668.366489212625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 46525.576154876115,
            "unit": "ns/iter",
            "extra": "iterations: 17924\ncpu: 46521.373577326594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 90803.59311993362,
            "unit": "ns/iter",
            "extra": "iterations: 9622\ncpu: 90797.609644564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 890430.0521821548,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 890356.4516129027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 726456.7967791377,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 726448.92638037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 719563.345274392,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 719541.8445121971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 730073.2224788447,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 730064.8190916068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 514899.63170163526,
            "unit": "ns/iter",
            "extra": "iterations: 1716\ncpu: 514870.33799534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 711026.5812220721,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 711005.8122205682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 4009933.3333333293,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 4009700.8547008364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1644222.5766550254,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1644180.6620209077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7585.895366872967,
            "unit": "ns/iter",
            "extra": "iterations: 109602\ncpu: 7585.75482199231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 44605.488114020736,
            "unit": "ns/iter",
            "extra": "iterations: 19014\ncpu: 44604.1074997372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 34770.679633867156,
            "unit": "ns/iter",
            "extra": "iterations: 24035\ncpu: 34770.143540669575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 33951.504816955676,
            "unit": "ns/iter",
            "extra": "iterations: 24393\ncpu: 33950.489894641956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 34149.65212201112,
            "unit": "ns/iter",
            "extra": "iterations: 24293\ncpu: 34149.6027662289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 76459.41754110019,
            "unit": "ns/iter",
            "extra": "iterations: 11436\ncpu: 76457.76495278037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 867258.46069469,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 867257.0383912221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 698963.6036764658,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 698934.5588235274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 691946.6027596297,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 691944.952795933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 709894.9880328901,
            "unit": "ns/iter",
            "extra": "iterations: 1337\ncpu: 709867.1652954359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 497619.87253242533,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 497610.43429215916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 680849.3851691963,
            "unit": "ns/iter",
            "extra": "iterations: 1389\ncpu: 680817.9985601165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 639.1998650762854,
            "unit": "ns/iter",
            "extra": "iterations: 1095434\ncpu: 639.1992580109821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4582.524106069345,
            "unit": "ns/iter",
            "extra": "iterations: 153032\ncpu: 4582.440273929621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3410.3664941817583,
            "unit": "ns/iter",
            "extra": "iterations: 205815\ncpu: 3410.3627043704137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3436.369830124917,
            "unit": "ns/iter",
            "extra": "iterations: 209507\ncpu: 3436.30714009557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2598.181198138251,
            "unit": "ns/iter",
            "extra": "iterations: 270069\ncpu: 2598.1449185208176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 21059.303498779784,
            "unit": "ns/iter",
            "extra": "iterations: 33183\ncpu: 21058.80722056487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 47010.74556451934,
            "unit": "ns/iter",
            "extra": "iterations: 14880\ncpu: 47008.918010753194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10916.77282507048,
            "unit": "ns/iter",
            "extra": "iterations: 64140\ncpu: 10916.365762394802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10897.554894015151,
            "unit": "ns/iter",
            "extra": "iterations: 64160\ncpu: 10897.54052369077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11368.278799262136,
            "unit": "ns/iter",
            "extra": "iterations: 60696\ncpu: 11367.787004085874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 22651.316645119176,
            "unit": "ns/iter",
            "extra": "iterations: 30940\ncpu: 22651.27989657412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 21584.43436269642,
            "unit": "ns/iter",
            "extra": "iterations: 32512\ncpu: 21583.602977362265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6190.296200452313,
            "unit": "ns/iter",
            "extra": "iterations: 113224\ncpu: 6190.238818625004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 32003.259171489764,
            "unit": "ns/iter",
            "extra": "iterations: 21943\ncpu: 32002.429020644355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 25569.951443235524,
            "unit": "ns/iter",
            "extra": "iterations: 27473\ncpu: 25569.92683725826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 25461.306008348507,
            "unit": "ns/iter",
            "extra": "iterations: 27545\ncpu: 25460.49373752062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 25941.610605606937,
            "unit": "ns/iter",
            "extra": "iterations: 26816\ncpu: 25941.564737469755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 57529.05702547258,
            "unit": "ns/iter",
            "extra": "iterations: 12170\ncpu: 57527.91290057521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 215825.37810173485,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 215817.6178660054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 181646.6317839489,
            "unit": "ns/iter",
            "extra": "iterations: 3851\ncpu: 181646.42949883075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 184286.55672270097,
            "unit": "ns/iter",
            "extra": "iterations: 3808\ncpu: 184282.5367647061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 186125.77337262555,
            "unit": "ns/iter",
            "extra": "iterations: 3733\ncpu: 186122.1001875166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 109201.74470074956,
            "unit": "ns/iter",
            "extra": "iterations: 6416\ncpu: 109195.88528678141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 185125.30351944934,
            "unit": "ns/iter",
            "extra": "iterations: 3779\ncpu: 185125.3506218594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6055.528447177119,
            "unit": "ns/iter",
            "extra": "iterations: 115319\ncpu: 6055.321326060749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 31871.28375849963,
            "unit": "ns/iter",
            "extra": "iterations: 21913\ncpu: 31870.925934377028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 25257.504500271178,
            "unit": "ns/iter",
            "extra": "iterations: 27665\ncpu: 25256.804626784706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 25371.152708288697,
            "unit": "ns/iter",
            "extra": "iterations: 27582\ncpu: 25370.694655935164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 25887.989471726345,
            "unit": "ns/iter",
            "extra": "iterations: 26880\ncpu: 25887.038690476318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 57259.34172661569,
            "unit": "ns/iter",
            "extra": "iterations: 12232\ncpu: 57257.31687377394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 213399.26912526996,
            "unit": "ns/iter",
            "extra": "iterations: 3281\ncpu: 213399.20755867148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 180461.0740550198,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 180457.0069426576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 180710.73994844736,
            "unit": "ns/iter",
            "extra": "iterations: 3880\ncpu: 180710.61855670033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 184169.90913879717,
            "unit": "ns/iter",
            "extra": "iterations: 3797\ncpu: 184157.3347379535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 108066.22791846935,
            "unit": "ns/iter",
            "extra": "iterations: 6476\ncpu: 108063.44966028363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 180080.14568346273,
            "unit": "ns/iter",
            "extra": "iterations: 3892\ncpu: 180073.45837615736 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387015504,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1739.3588863036919,
            "unit": "ns/iter",
            "extra": "iterations: 384665\ncpu: 1739.3162881988226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25606.610696015392,
            "unit": "ns/iter",
            "extra": "iterations: 32255\ncpu: 25606.216090528604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 52161.96758529202,
            "unit": "ns/iter",
            "extra": "iterations: 15857\ncpu: 52160.15009144225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 65433.91888485399,
            "unit": "ns/iter",
            "extra": "iterations: 13487\ncpu: 65432.38674278932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 92478.67694741083,
            "unit": "ns/iter",
            "extra": "iterations: 10116\ncpu: 92476.03795966787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115388.40981222069,
            "unit": "ns/iter",
            "extra": "iterations: 7562\ncpu: 115381.57894736849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 140250.5489731415,
            "unit": "ns/iter",
            "extra": "iterations: 6330\ncpu: 140243.75987361776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 164712.80433542604,
            "unit": "ns/iter",
            "extra": "iterations: 5259\ncpu: 164710.32515687388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186331.739057586,
            "unit": "ns/iter",
            "extra": "iterations: 4775\ncpu: 186326.24083769633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1447.853435158622,
            "unit": "ns/iter",
            "extra": "iterations: 483704\ncpu: 1447.7961728660496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1230.165449959248,
            "unit": "ns/iter",
            "extra": "iterations: 569296\ncpu: 1230.1707723223074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1207.940705517516,
            "unit": "ns/iter",
            "extra": "iterations: 580425\ncpu: 1207.9462462850504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1217.7197847760367,
            "unit": "ns/iter",
            "extra": "iterations: 580047\ncpu: 1217.6296058767668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2266.4657121474193,
            "unit": "ns/iter",
            "extra": "iterations: 307310\ncpu: 2266.32032800755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7289.720124196299,
            "unit": "ns/iter",
            "extra": "iterations: 112725\ncpu: 7289.381237524955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 44085.73734580999,
            "unit": "ns/iter",
            "extra": "iterations: 18808\ncpu: 44084.29923436835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 33634.0051921524,
            "unit": "ns/iter",
            "extra": "iterations: 24460\ncpu: 33632.61242845462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 33732.24197210545,
            "unit": "ns/iter",
            "extra": "iterations: 24664\ncpu: 33731.377716509895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32296.572670807996,
            "unit": "ns/iter",
            "extra": "iterations: 25760\ncpu: 32296.12189440987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 80185.86986550258,
            "unit": "ns/iter",
            "extra": "iterations: 11004\ncpu: 80184.15121773895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 836590.0392157004,
            "unit": "ns/iter",
            "extra": "iterations: 1122\ncpu: 836562.9233511583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 701890.780669178,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 701851.6728624549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 694894.3688464204,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 694880.2351212341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 694005.7943578342,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 693973.422420191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 495094.2182539705,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 495071.145124717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 692287.930215333,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 692251.076466221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3749359.301587272,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3749117.8571428554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1619467.9264956973,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1619373.8461538428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 5154828.020942399,
            "unit": "ns/iter",
            "extra": "iterations: 191\ncpu: 5154573.298429328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 11387.685457449938,
            "unit": "ns/iter",
            "extra": "iterations: 73866\ncpu: 11387.318928871231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51518.37139999885,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51518.74000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 47035.37195329243,
            "unit": "ns/iter",
            "extra": "iterations: 17642\ncpu: 47033.800022673364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 46303.420463406255,
            "unit": "ns/iter",
            "extra": "iterations: 17954\ncpu: 46301.28662136564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 46626.98027822764,
            "unit": "ns/iter",
            "extra": "iterations: 17899\ncpu: 46625.91206212632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 91593.13662912097,
            "unit": "ns/iter",
            "extra": "iterations: 9588\ncpu: 91590.03963287434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 878977.8698501693,
            "unit": "ns/iter",
            "extra": "iterations: 1068\ncpu: 878922.3782771514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 728890.6924846474,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 728873.1595092051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 713130.5643939227,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 713075.6060606041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 710890.557721153,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 710869.2653673153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 511891.161364952,
            "unit": "ns/iter",
            "extra": "iterations: 1729\ncpu: 511877.0965876233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 702680.555141584,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 702656.7809239982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3961163.2605042723,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3961028.571428574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1704715.8922261584,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1704324.0282685459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7539.75696625142,
            "unit": "ns/iter",
            "extra": "iterations: 110820\ncpu: 7539.474824038977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 44273.929153899124,
            "unit": "ns/iter",
            "extra": "iterations: 19253\ncpu: 44272.383524645236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 34457.947233584186,
            "unit": "ns/iter",
            "extra": "iterations: 24201\ncpu: 34457.319945456686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 33643.96870198106,
            "unit": "ns/iter",
            "extra": "iterations: 24730\ncpu: 33642.9397492925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 34472.90203357545,
            "unit": "ns/iter",
            "extra": "iterations: 24243\ncpu: 34471.814544404486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 76430.52967837187,
            "unit": "ns/iter",
            "extra": "iterations: 11473\ncpu: 76429.18155669884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 862458.0363967048,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 862443.4940855317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 698552.3044117853,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 698530.294117649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 698989.1109488767,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 698974.1605839417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 695173.7828612918,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 695158.0973129984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 494926.35078828194,
            "unit": "ns/iter",
            "extra": "iterations: 1776\ncpu: 494908.84009008924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 690858.4020319523,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 690841.0740203152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 632.2971040751839,
            "unit": "ns/iter",
            "extra": "iterations: 1109352\ncpu: 632.2816382897441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4682.067594353895,
            "unit": "ns/iter",
            "extra": "iterations: 149835\ncpu: 4682.088964527671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3379.9054258178776,
            "unit": "ns/iter",
            "extra": "iterations: 207213\ncpu: 3379.8839841129566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3315.5711987548466,
            "unit": "ns/iter",
            "extra": "iterations: 210727\ncpu: 3315.5499769844296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2587.29961639724,
            "unit": "ns/iter",
            "extra": "iterations: 270853\ncpu: 2587.2746471333057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20998.095388937392,
            "unit": "ns/iter",
            "extra": "iterations: 33463\ncpu: 20998.177091115456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 47129.92376077302,
            "unit": "ns/iter",
            "extra": "iterations: 14848\ncpu: 47129.29687500079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10907.820750318248,
            "unit": "ns/iter",
            "extra": "iterations: 64346\ncpu: 10907.646162931549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10725.033182526446,
            "unit": "ns/iter",
            "extra": "iterations: 65426\ncpu: 10724.601840246929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10699.553124616752,
            "unit": "ns/iter",
            "extra": "iterations: 65224\ncpu: 10699.382129277572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 22076.035816436193,
            "unit": "ns/iter",
            "extra": "iterations: 31466\ncpu: 22075.52596453293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 21299.126563449456,
            "unit": "ns/iter",
            "extra": "iterations: 32940\ncpu: 21298.342440801513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6186.171480879261,
            "unit": "ns/iter",
            "extra": "iterations: 113068\ncpu: 6186.11543495947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 32451.02234170818,
            "unit": "ns/iter",
            "extra": "iterations: 21574\ncpu: 32450.69064614827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 25826.939028869976,
            "unit": "ns/iter",
            "extra": "iterations: 27226\ncpu: 25826.342466760194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 25730.793209523614,
            "unit": "ns/iter",
            "extra": "iterations: 26331\ncpu: 25730.43560821834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 26688.824813063748,
            "unit": "ns/iter",
            "extra": "iterations: 26212\ncpu: 26688.448039065748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 58944.897496413534,
            "unit": "ns/iter",
            "extra": "iterations: 11863\ncpu: 58944.1119447029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 220322.46922112096,
            "unit": "ns/iter",
            "extra": "iterations: 3184\ncpu: 220323.30402010246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 186051.54325901612,
            "unit": "ns/iter",
            "extra": "iterations: 3768\ncpu: 186040.57855626242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 185449.6410459521,
            "unit": "ns/iter",
            "extra": "iterations: 3786\ncpu: 185438.85367142165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 184472.89671609827,
            "unit": "ns/iter",
            "extra": "iterations: 3776\ncpu: 184467.87605932285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 110970.67458808549,
            "unit": "ns/iter",
            "extra": "iterations: 6312\ncpu: 110969.2648922673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 188953.91512220103,
            "unit": "ns/iter",
            "extra": "iterations: 3723\ncpu: 188949.5299489668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6258.566530856266,
            "unit": "ns/iter",
            "extra": "iterations: 113639\ncpu: 6258.435044306942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 32204.978219914075,
            "unit": "ns/iter",
            "extra": "iterations: 21763\ncpu: 32204.64090428664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 26971.158742978612,
            "unit": "ns/iter",
            "extra": "iterations: 25998\ncpu: 26970.059235325993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 26316.800622818922,
            "unit": "ns/iter",
            "extra": "iterations: 26653\ncpu: 26316.18579521969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 26732.156657962285,
            "unit": "ns/iter",
            "extra": "iterations: 26044\ncpu: 26730.993702964497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 57576.37335958222,
            "unit": "ns/iter",
            "extra": "iterations: 12192\ncpu: 57574.868766404266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 215046.6094565661,
            "unit": "ns/iter",
            "extra": "iterations: 3257\ncpu: 215041.08074915534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 184130.6259968083,
            "unit": "ns/iter",
            "extra": "iterations: 3762\ncpu: 184127.2993088778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 182205.01067429662,
            "unit": "ns/iter",
            "extra": "iterations: 3841\ncpu: 182197.68289507847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 183563.21468180258,
            "unit": "ns/iter",
            "extra": "iterations: 3787\ncpu: 183557.01082651084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 116267.25035139915,
            "unit": "ns/iter",
            "extra": "iterations: 6403\ncpu: 116265.98469467313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 184167.98687319548,
            "unit": "ns/iter",
            "extra": "iterations: 3809\ncpu: 184163.55998950018 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "d1143eedaeca215bd4d59936eed187ebbc5a2705",
          "message": "uncomment",
          "timestamp": "2023-12-12T16:24:18+03:00",
          "tree_id": "24d13ef9110c03a703c985f6237d2ba22581ead7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d1143eedaeca215bd4d59936eed187ebbc5a2705"
        },
        "date": 1702388133108,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1652.5626877695938,
            "unit": "ns/iter",
            "extra": "iterations: 422060\ncpu: 1652.348955124864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25021.6865513375,
            "unit": "ns/iter",
            "extra": "iterations: 33007\ncpu: 25019.995758475477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 54089.02891506219,
            "unit": "ns/iter",
            "extra": "iterations: 16047\ncpu: 54084.881909391166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 64485.47076045493,
            "unit": "ns/iter",
            "extra": "iterations: 13321\ncpu: 64482.621424817975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 91398.85639557726,
            "unit": "ns/iter",
            "extra": "iterations: 10132\ncpu: 91392.19305171733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 114412.41628485586,
            "unit": "ns/iter",
            "extra": "iterations: 7639\ncpu: 114406.80717371385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 140045.23506164586,
            "unit": "ns/iter",
            "extra": "iterations: 6326\ncpu: 140031.74201707233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 162688.1178128539,
            "unit": "ns/iter",
            "extra": "iterations: 5322\ncpu: 162679.8759864711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 185845.41108785843,
            "unit": "ns/iter",
            "extra": "iterations: 4780\ncpu: 185832.84518828473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1449.043334665981,
            "unit": "ns/iter",
            "extra": "iterations: 480216\ncpu: 1448.9365202325603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1147.6958622336374,
            "unit": "ns/iter",
            "extra": "iterations: 615767\ncpu: 1147.6081050137482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1129.8761935268099,
            "unit": "ns/iter",
            "extra": "iterations: 621268\ncpu: 1129.8354333395582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1146.353653473312,
            "unit": "ns/iter",
            "extra": "iterations: 611774\ncpu: 1146.325930817589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2281.5373187539963,
            "unit": "ns/iter",
            "extra": "iterations: 305731\ncpu: 2281.4644246085586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6993.5446797651775,
            "unit": "ns/iter",
            "extra": "iterations: 117570\ncpu: 6993.308667177001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 44069.68091122523,
            "unit": "ns/iter",
            "extra": "iterations: 18744\ncpu: 44069.23282116944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 33291.33679597413,
            "unit": "ns/iter",
            "extra": "iterations: 24644\ncpu: 33290.63057945137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 33010.253396195505,
            "unit": "ns/iter",
            "extra": "iterations: 25028\ncpu: 33009.90490650466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32237.28088836968,
            "unit": "ns/iter",
            "extra": "iterations: 25665\ncpu: 32236.259497369916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 79042.84142715334,
            "unit": "ns/iter",
            "extra": "iterations: 11099\ncpu: 79038.8953959819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 850837.1174863332,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 850750.9107468119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 695606.3016924195,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 695541.7954378214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 688299.901675164,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 688258.4850691907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 689886.7855563468,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 689838.3198231388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 494927.4241398952,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 494891.1449520578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 692684.1992646991,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 692630.2941176472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3750239.9803148317,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3750155.118110233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1631760.2884282991,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1631662.3488773757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4848630.055837626,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4848340.609137045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 11345.131401952649,
            "unit": "ns/iter",
            "extra": "iterations: 74489\ncpu: 11344.135375693077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51845.76259999858,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51843.70000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 47119.26077379231,
            "unit": "ns/iter",
            "extra": "iterations: 17705\ncpu: 47117.407512002224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 46887.515320804065,
            "unit": "ns/iter",
            "extra": "iterations: 17721\ncpu: 46884.54940466118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 46483.948898629234,
            "unit": "ns/iter",
            "extra": "iterations: 18023\ncpu: 46481.135216112845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 90987.8998854053,
            "unit": "ns/iter",
            "extra": "iterations: 9599\ncpu: 90981.93561829402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 876676.537019669,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 876608.4348641015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 715653.9285714271,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 715601.823708208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 708883.3481873109,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 708841.465256796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 706986.2731376805,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 706941.2340105359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 507293.2733563989,
            "unit": "ns/iter",
            "extra": "iterations: 1734\ncpu: 507259.05420992104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 695495.9802052915,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 695445.0146627591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3948040.3949579904,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3947874.7899159743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1694013.453262724,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1693918.3421516756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7536.908871850973,
            "unit": "ns/iter",
            "extra": "iterations: 109560\ncpu: 7536.7031763417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 43429.02916427154,
            "unit": "ns/iter",
            "extra": "iterations: 19133\ncpu: 43428.17122249531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 34393.70829203937,
            "unit": "ns/iter",
            "extra": "iterations: 24216\ncpu: 34392.95094152627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 33957.04839040256,
            "unit": "ns/iter",
            "extra": "iterations: 24385\ncpu: 33950.711502973245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 34348.54894671575,
            "unit": "ns/iter",
            "extra": "iterations: 24210\ncpu: 34346.63362247017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 75958.60487847363,
            "unit": "ns/iter",
            "extra": "iterations: 11561\ncpu: 75956.54355159572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 859489.6618444883,
            "unit": "ns/iter",
            "extra": "iterations: 1106\ncpu: 859439.8734177238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 689425.6430122873,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 689383.8522809561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 687741.0123188614,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 687686.1594202903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 687419.3134978199,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 687382.0754716975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 489916.0739081859,
            "unit": "ns/iter",
            "extra": "iterations: 1786\ncpu: 489897.03247480723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 679359.0989957057,
            "unit": "ns/iter",
            "extra": "iterations: 1394\ncpu: 679312.7690100424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 600.7868974099175,
            "unit": "ns/iter",
            "extra": "iterations: 1168456\ncpu: 600.7445723245033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4418.649367312842,
            "unit": "ns/iter",
            "extra": "iterations: 158214\ncpu: 4418.433261279032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3542.073379961107,
            "unit": "ns/iter",
            "extra": "iterations: 196307\ncpu: 3541.9006963582656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3377.5031210805623,
            "unit": "ns/iter",
            "extra": "iterations: 207300\ncpu: 3377.3077665219494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2608.819526924986,
            "unit": "ns/iter",
            "extra": "iterations: 268245\ncpu: 2608.595873175652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 21202.705318274082,
            "unit": "ns/iter",
            "extra": "iterations: 32849\ncpu: 21169.542451825044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 44231.74247871259,
            "unit": "ns/iter",
            "extra": "iterations: 15855\ncpu: 44230.476190476205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10824.322730521657,
            "unit": "ns/iter",
            "extra": "iterations: 64354\ncpu: 10824.099512073943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10793.926001849657,
            "unit": "ns/iter",
            "extra": "iterations: 64880\ncpu: 10793.395499383532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10792.874826768693,
            "unit": "ns/iter",
            "extra": "iterations: 64942\ncpu: 10792.62110806581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 22183.70032955294,
            "unit": "ns/iter",
            "extra": "iterations: 31558\ncpu: 22182.875974396356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 21221.36730745962,
            "unit": "ns/iter",
            "extra": "iterations: 33084\ncpu: 21220.95574900267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6229.412588799331,
            "unit": "ns/iter",
            "extra": "iterations: 110924\ncpu: 6229.114528866533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 31972.305975621,
            "unit": "ns/iter",
            "extra": "iterations: 21822\ncpu: 31972.02822839373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 25612.738827224563,
            "unit": "ns/iter",
            "extra": "iterations: 27388\ncpu: 25611.20198627138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 25349.958783832473,
            "unit": "ns/iter",
            "extra": "iterations: 27562\ncpu: 25349.3070169072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 26228.073096216976,
            "unit": "ns/iter",
            "extra": "iterations: 26513\ncpu: 26227.465771508745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 57474.48088103077,
            "unit": "ns/iter",
            "extra": "iterations: 12213\ncpu: 57471.74322443253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 216041.59858067828,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 216033.84757790787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 182558.92241604344,
            "unit": "ns/iter",
            "extra": "iterations: 3841\ncpu: 182551.26269200753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 182008.16145833206,
            "unit": "ns/iter",
            "extra": "iterations: 3840\ncpu: 182000.05208333462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 184201.49595827737,
            "unit": "ns/iter",
            "extra": "iterations: 3835\ncpu: 184188.52672750875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 106731.2632043802,
            "unit": "ns/iter",
            "extra": "iterations: 5661\ncpu: 106728.42254018689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 181783.83363660006,
            "unit": "ns/iter",
            "extra": "iterations: 3847\ncpu: 181779.51650636984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6131.995623842783,
            "unit": "ns/iter",
            "extra": "iterations: 114484\ncpu: 6131.717095838696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 31584.79003462657,
            "unit": "ns/iter",
            "extra": "iterations: 22237\ncpu: 31584.166029590055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 24923.47358685337,
            "unit": "ns/iter",
            "extra": "iterations: 28111\ncpu: 24922.695741880234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 24952.617335851504,
            "unit": "ns/iter",
            "extra": "iterations: 28069\ncpu: 24951.861484199442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 25784.33007855421,
            "unit": "ns/iter",
            "extra": "iterations: 27242\ncpu: 25783.217091255952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 56802.33874107323,
            "unit": "ns/iter",
            "extra": "iterations: 12328\ncpu: 56800.243348475175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 209730.25989207873,
            "unit": "ns/iter",
            "extra": "iterations: 3336\ncpu: 209718.22541966307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 176409.98789408122,
            "unit": "ns/iter",
            "extra": "iterations: 3965\ncpu: 176403.4047919286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 177858.60695254715,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 177854.47855874125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 179526.80337509903,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 179520.12273075845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 106445.32003046166,
            "unit": "ns/iter",
            "extra": "iterations: 6565\ncpu: 106442.81797410405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 176709.7471554984,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 176696.63716813925 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}