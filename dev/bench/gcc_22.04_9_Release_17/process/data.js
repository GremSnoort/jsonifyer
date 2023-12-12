window.BENCHMARK_DATA = {
  "lastUpdate": 1702382262102,
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
      }
    ]
  }
}