window.BENCHMARK_DATA = {
  "lastUpdate": 1702382594739,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-12 22.04 Release c++-17": [
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
        "date": 1702381437367,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1684.66849201968,
            "unit": "ns/iter",
            "extra": "iterations: 419097\ncpu: 1684.6398327833413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24827.33950712892,
            "unit": "ns/iter",
            "extra": "iterations: 32341\ncpu: 24826.270059676575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 51131.54190458156,
            "unit": "ns/iter",
            "extra": "iterations: 16287\ncpu: 51129.43451832749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 64116.509048278764,
            "unit": "ns/iter",
            "extra": "iterations: 13649\ncpu: 64112.17671624294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 90882.65564335855,
            "unit": "ns/iter",
            "extra": "iterations: 10251\ncpu: 90876.41205736031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 113533.57142857245,
            "unit": "ns/iter",
            "extra": "iterations: 7714\ncpu: 113521.85636505057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 139623.6064495881,
            "unit": "ns/iter",
            "extra": "iterations: 6388\ncpu: 139617.73638071376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 162075.47812265114,
            "unit": "ns/iter",
            "extra": "iterations: 5348\ncpu: 162064.7531787586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186017.98574770152,
            "unit": "ns/iter",
            "extra": "iterations: 4701\ncpu: 186009.04062965338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1428.8701521991436,
            "unit": "ns/iter",
            "extra": "iterations: 487979\ncpu: 1428.726031243149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1141.5282802013292,
            "unit": "ns/iter",
            "extra": "iterations: 612531\ncpu: 1141.510062347866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1140.3504271412705,
            "unit": "ns/iter",
            "extra": "iterations: 612795\ncpu: 1140.3224569391077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1122.1696559567365,
            "unit": "ns/iter",
            "extra": "iterations: 624340\ncpu: 1122.1006182528768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2304.5976448368538,
            "unit": "ns/iter",
            "extra": "iterations: 303928\ncpu: 2304.4431575899557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7346.280477469347,
            "unit": "ns/iter",
            "extra": "iterations: 110918\ncpu: 7345.610270650382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33478.3819240805,
            "unit": "ns/iter",
            "extra": "iterations: 24552\ncpu: 33476.02639296188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29173.673045515003,
            "unit": "ns/iter",
            "extra": "iterations: 28166\ncpu: 29172.101114819285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29052.11826710167,
            "unit": "ns/iter",
            "extra": "iterations: 28461\ncpu: 29051.26664558519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29729.578954973516,
            "unit": "ns/iter",
            "extra": "iterations: 27674\ncpu: 29729.063380790634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 73850.04483446966,
            "unit": "ns/iter",
            "extra": "iterations: 12022\ncpu: 73845.84927632664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 822745.9169580181,
            "unit": "ns/iter",
            "extra": "iterations: 1144\ncpu: 822678.846153844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 678397.539180408,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 678343.3501078354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 672666.7898498842,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 672626.6619013585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 668420.7480201843,
            "unit": "ns/iter",
            "extra": "iterations: 1389\ncpu: 668396.4722822171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 482169.01274236455,
            "unit": "ns/iter",
            "extra": "iterations: 1805\ncpu: 482154.18282548396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 669374.2100000008,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 669336.3000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3582417.722433497,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3582252.4714828976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1571008.5794702256,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1570916.7218543012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4631531.269607795,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4631367.156862739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10708.582232605162,
            "unit": "ns/iter",
            "extra": "iterations: 79190\ncpu: 10707.954287157454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51434.784166920064,
            "unit": "ns/iter",
            "extra": "iterations: 16295\ncpu: 51430.05830009204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43078.27536531064,
            "unit": "ns/iter",
            "extra": "iterations: 19367\ncpu: 43077.580420302475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 42077.29086067331,
            "unit": "ns/iter",
            "extra": "iterations: 19903\ncpu: 42073.62206702508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 42823.839626011046,
            "unit": "ns/iter",
            "extra": "iterations: 19573\ncpu: 42821.49900372961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 86125.77106769782,
            "unit": "ns/iter",
            "extra": "iterations: 10134\ncpu: 86120.41641997245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 869995.8378128366,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 869961.8164967574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 698809.4692819683,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 698759.2153960048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 694296.0956585754,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 694267.3289183241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 689397.244134961,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 689350.0000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 490593.4883073645,
            "unit": "ns/iter",
            "extra": "iterations: 1796\ncpu: 490559.29844098084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 678393.6839080221,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 678357.7586206896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3825792.382113791,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3825569.1056910674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1597912.517766459,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1597835.7021996635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7422.21925530277,
            "unit": "ns/iter",
            "extra": "iterations: 111938\ncpu: 7420.87226857726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32765.52921495776,
            "unit": "ns/iter",
            "extra": "iterations: 25107\ncpu: 32763.050145377616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 28583.78978802574,
            "unit": "ns/iter",
            "extra": "iterations: 28966\ncpu: 28581.826969550486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 26736.726899054516,
            "unit": "ns/iter",
            "extra": "iterations: 30897\ncpu: 26735.602162022005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 28360.96990218284,
            "unit": "ns/iter",
            "extra": "iterations: 29238\ncpu: 28358.153772487924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 71643.31500080728,
            "unit": "ns/iter",
            "extra": "iterations: 12346\ncpu: 71638.4254009395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 843481.5080644435,
            "unit": "ns/iter",
            "extra": "iterations: 1116\ncpu: 843462.0071684631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 675250.2285100268,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 675198.7106017175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 670999.1960000253,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 670932.7000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 670507.5080000142,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 670426.5999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 478586.60564913513,
            "unit": "ns/iter",
            "extra": "iterations: 1841\ncpu: 478574.1444866939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 665284.5700000398,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665242.8000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 579.8769339140019,
            "unit": "ns/iter",
            "extra": "iterations: 1205263\ncpu: 579.8546043477644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3889.2954334521073,
            "unit": "ns/iter",
            "extra": "iterations: 179939\ncpu: 3889.0624044815027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3102.1027950116404,
            "unit": "ns/iter",
            "extra": "iterations: 225974\ncpu: 3101.9205749334133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3277.9467955166465,
            "unit": "ns/iter",
            "extra": "iterations: 213685\ncpu: 3277.768210215957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2594.430088468978,
            "unit": "ns/iter",
            "extra": "iterations: 266873\ncpu: 2594.2871703019728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19709.008133514624,
            "unit": "ns/iter",
            "extra": "iterations: 35532\ncpu: 19707.93369357195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 45736.9114760522,
            "unit": "ns/iter",
            "extra": "iterations: 15284\ncpu: 45734.38890342841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10655.934567806433,
            "unit": "ns/iter",
            "extra": "iterations: 65885\ncpu: 10655.490627608777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10518.521125283274,
            "unit": "ns/iter",
            "extra": "iterations: 66721\ncpu: 10517.844456767716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10497.902258937866,
            "unit": "ns/iter",
            "extra": "iterations: 66093\ncpu: 10497.309851269996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21675.210978445895,
            "unit": "ns/iter",
            "extra": "iterations: 32245\ncpu: 21674.135524887464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20717.579014579,
            "unit": "ns/iter",
            "extra": "iterations: 33671\ncpu: 20716.803777731366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5355.576076041687,
            "unit": "ns/iter",
            "extra": "iterations: 130455\ncpu: 5355.449005404109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26955.831233871824,
            "unit": "ns/iter",
            "extra": "iterations: 25959\ncpu: 26954.26634307962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21901.110291349207,
            "unit": "ns/iter",
            "extra": "iterations: 31852\ncpu: 21900.470928042218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21743.237435706567,
            "unit": "ns/iter",
            "extra": "iterations: 32274\ncpu: 21742.139183243453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22623.997382537127,
            "unit": "ns/iter",
            "extra": "iterations: 30946\ncpu: 22623.372972274432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 53141.38481945569,
            "unit": "ns/iter",
            "extra": "iterations: 13570\ncpu: 53136.17538688322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 204154.67435074478,
            "unit": "ns/iter",
            "extra": "iterations: 3427\ncpu: 204142.0484388678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 171879.6170580986,
            "unit": "ns/iter",
            "extra": "iterations: 4045\ncpu: 171866.40296662424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 172698.2985370739,
            "unit": "ns/iter",
            "extra": "iterations: 4033\ncpu: 172688.86684849762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 171806.575147364,
            "unit": "ns/iter",
            "extra": "iterations: 4072\ncpu: 171800.19646365396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 99487.41000852773,
            "unit": "ns/iter",
            "extra": "iterations: 7034\ncpu: 99482.86892237782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 171878.78009826373,
            "unit": "ns/iter",
            "extra": "iterations: 4070\ncpu: 171874.02948402942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5169.4387170167365,
            "unit": "ns/iter",
            "extra": "iterations: 135372\ncpu: 5169.111042165346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26312.408705121867,
            "unit": "ns/iter",
            "extra": "iterations: 26628\ncpu: 26248.76445846476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21261.871572169555,
            "unit": "ns/iter",
            "extra": "iterations: 32929\ncpu: 21260.220474353988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21343.624229476125,
            "unit": "ns/iter",
            "extra": "iterations: 32770\ncpu: 21342.346658529146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21813.981995193357,
            "unit": "ns/iter",
            "extra": "iterations: 32047\ncpu: 21812.637688395258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50099.323251150294,
            "unit": "ns/iter",
            "extra": "iterations: 13952\ncpu: 50097.369552752534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 197205.38571022975,
            "unit": "ns/iter",
            "extra": "iterations: 3513\ncpu: 197193.4244235694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 168960.3628722409,
            "unit": "ns/iter",
            "extra": "iterations: 4164\ncpu: 168948.8712776157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 169020.16080522427,
            "unit": "ns/iter",
            "extra": "iterations: 4123\ncpu: 169013.72786805924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 167491.736537062,
            "unit": "ns/iter",
            "extra": "iterations: 4141\ncpu: 167478.89398696058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 98433.59800057161,
            "unit": "ns/iter",
            "extra": "iterations: 7102\ncpu: 98428.86510841864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 167840.65223665972,
            "unit": "ns/iter",
            "extra": "iterations: 4158\ncpu: 167827.72967773082 ns\nthreads: 1"
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
        "date": 1702382594113,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1680.4100431226518,
            "unit": "ns/iter",
            "extra": "iterations: 414632\ncpu: 1680.3567983175444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25303.98558768145,
            "unit": "ns/iter",
            "extra": "iterations: 33513\ncpu: 25302.73923552055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 50789.81719842434,
            "unit": "ns/iter",
            "extra": "iterations: 16455\ncpu: 50789.89364934672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 63939.57978997069,
            "unit": "ns/iter",
            "extra": "iterations: 13617\ncpu: 63938.10677829186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 90841.86049454984,
            "unit": "ns/iter",
            "extra": "iterations: 10272\ncpu: 90840.00194704054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 112936.57024467856,
            "unit": "ns/iter",
            "extra": "iterations: 7602\ncpu: 112931.67587476982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 138320.9711404146,
            "unit": "ns/iter",
            "extra": "iterations: 6445\ncpu: 138319.51900698227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 161144.6711436772,
            "unit": "ns/iter",
            "extra": "iterations: 4914\ncpu: 161139.64183964187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 183689.91233101898,
            "unit": "ns/iter",
            "extra": "iterations: 4882\ncpu: 183686.68578451444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1426.3997726310488,
            "unit": "ns/iter",
            "extra": "iterations: 483795\ncpu: 1426.3872094585533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1133.8871248322737,
            "unit": "ns/iter",
            "extra": "iterations: 617957\ncpu: 1133.8578574237363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1126.990813355948,
            "unit": "ns/iter",
            "extra": "iterations: 619704\ncpu: 1126.9723932716274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1104.0778205077356,
            "unit": "ns/iter",
            "extra": "iterations: 633175\ncpu: 1104.0473802661193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2258.015218491831,
            "unit": "ns/iter",
            "extra": "iterations: 310149\ncpu: 2257.9750378044128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7429.711360127301,
            "unit": "ns/iter",
            "extra": "iterations: 110747\ncpu: 7429.5980929505995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34307.73679495026,
            "unit": "ns/iter",
            "extra": "iterations: 24555\ncpu: 34307.187945428646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29237.68823758907,
            "unit": "ns/iter",
            "extra": "iterations: 28217\ncpu: 29236.9068292164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29112.772568528093,
            "unit": "ns/iter",
            "extra": "iterations: 28347\ncpu: 29112.385790383487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29867.432177681534,
            "unit": "ns/iter",
            "extra": "iterations: 27690\ncpu: 29866.807511737043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74219.1521519853,
            "unit": "ns/iter",
            "extra": "iterations: 11896\ncpu: 74218.1069266981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 824010.1278459042,
            "unit": "ns/iter",
            "extra": "iterations: 1142\ncpu: 823980.472854643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 676340.3192252693,
            "unit": "ns/iter",
            "extra": "iterations: 1394\ncpu: 676326.0401721654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 670154.1099999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 670136.8000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 668003.4940000041,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668005.2000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 480791.5492256621,
            "unit": "ns/iter",
            "extra": "iterations: 1808\ncpu: 480781.47123893764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 670544.6932471496,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 670520.7614942535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3606207.087786432,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3606027.480916028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1592375.8877722581,
            "unit": "ns/iter",
            "extra": "iterations: 597\ncpu: 1592315.2428810692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4587490.5700483555,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4587345.410628018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10846.665365977577,
            "unit": "ns/iter",
            "extra": "iterations: 78420\ncpu: 10846.430757459817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51936.30356921676,
            "unit": "ns/iter",
            "extra": "iterations: 16138\ncpu: 51932.51951914745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43627.469152546495,
            "unit": "ns/iter",
            "extra": "iterations: 19175\ncpu: 43625.674054758914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 42439.53731495562,
            "unit": "ns/iter",
            "extra": "iterations: 19657\ncpu: 42437.864374014054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 42809.28838164083,
            "unit": "ns/iter",
            "extra": "iterations: 19495\ncpu: 42807.899461400564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 85847.31473590338,
            "unit": "ns/iter",
            "extra": "iterations: 10091\ncpu: 85844.55455356278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 863971.1831637182,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 863929.9722479174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 701540.2320895809,
            "unit": "ns/iter",
            "extra": "iterations: 1340\ncpu: 701510.8955223887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 697098.0200594702,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 697077.4888558657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 692178.796433881,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 692147.9940564623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 496016.0642615651,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 495990.58624577225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 683571.0880866151,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 683547.0758122737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3809976.616935273,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3809883.870967751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1577571.589018173,
            "unit": "ns/iter",
            "extra": "iterations: 601\ncpu: 1577545.9234608975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7486.660352246196,
            "unit": "ns/iter",
            "extra": "iterations: 109696\ncpu: 7486.679550758483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 33285.071715225764,
            "unit": "ns/iter",
            "extra": "iterations: 24918\ncpu: 33284.428926880275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 28461.713180161027,
            "unit": "ns/iter",
            "extra": "iterations: 29074\ncpu: 28461.5257618489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 27921.038548829085,
            "unit": "ns/iter",
            "extra": "iterations: 29521\ncpu: 27920.38887571555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29112.417811597603,
            "unit": "ns/iter",
            "extra": "iterations: 28386\ncpu: 29111.94955259624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70836.08565897627,
            "unit": "ns/iter",
            "extra": "iterations: 12398\ncpu: 70834.33618325576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 845049.1834372375,
            "unit": "ns/iter",
            "extra": "iterations: 1123\ncpu: 845034.1050756889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 677443.4637681344,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 677432.8985507236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 668613.6779999287,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668607.6999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 682112.1030000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 682097.8000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 478687.6623306126,
            "unit": "ns/iter",
            "extra": "iterations: 1845\ncpu: 478679.78319783363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 671838.256000001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 671818.800000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 596.5437379374036,
            "unit": "ns/iter",
            "extra": "iterations: 1161646\ncpu: 596.5396514945166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4168.706420381405,
            "unit": "ns/iter",
            "extra": "iterations: 168152\ncpu: 4168.626005043051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3237.910668860486,
            "unit": "ns/iter",
            "extra": "iterations: 224860\ncpu: 3237.9160366450287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3300.482348007283,
            "unit": "ns/iter",
            "extra": "iterations: 212214\ncpu: 3300.4028951906907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2614.1309217833555,
            "unit": "ns/iter",
            "extra": "iterations: 267297\ncpu: 2614.085455504538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20110.579250059534,
            "unit": "ns/iter",
            "extra": "iterations: 34776\ncpu: 20109.981021393993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 46089.39332938056,
            "unit": "ns/iter",
            "extra": "iterations: 15201\ncpu: 46089.04677323839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10721.773031954064,
            "unit": "ns/iter",
            "extra": "iterations: 65344\ncpu: 10721.524547012657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10600.657992903261,
            "unit": "ns/iter",
            "extra": "iterations: 66215\ncpu: 10600.475723023435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10656.126688239316,
            "unit": "ns/iter",
            "extra": "iterations: 65823\ncpu: 10656.045759081082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21522.400346137332,
            "unit": "ns/iter",
            "extra": "iterations: 32357\ncpu: 21522.066322588907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20625.757515444682,
            "unit": "ns/iter",
            "extra": "iterations: 33664\ncpu: 20625.600047528493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5373.655449149141,
            "unit": "ns/iter",
            "extra": "iterations: 130213\ncpu: 5373.555635765915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27235.681004977807,
            "unit": "ns/iter",
            "extra": "iterations: 25712\ncpu: 27235.244243932997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22185.30711020345,
            "unit": "ns/iter",
            "extra": "iterations: 31715\ncpu: 22184.55305060706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21992.43344677899,
            "unit": "ns/iter",
            "extra": "iterations: 31734\ncpu: 21992.257515598274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22688.67872732371,
            "unit": "ns/iter",
            "extra": "iterations: 30927\ncpu: 22688.240049148026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51961.90963317007,
            "unit": "ns/iter",
            "extra": "iterations: 13412\ncpu: 51961.549358782424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 205734.75990608076,
            "unit": "ns/iter",
            "extra": "iterations: 3407\ncpu: 205734.89873789344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 172772.34151730133,
            "unit": "ns/iter",
            "extra": "iterations: 4073\ncpu: 172772.69825681482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 169493.8722680945,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 169485.62408936262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 169426.27094562762,
            "unit": "ns/iter",
            "extra": "iterations: 4082\ncpu: 169421.04360607517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 100317.99398022585,
            "unit": "ns/iter",
            "extra": "iterations: 6977\ncpu: 100311.07926042636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 172454.92904819796,
            "unit": "ns/iter",
            "extra": "iterations: 4045\ncpu: 172446.3288009878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5155.4362423996745,
            "unit": "ns/iter",
            "extra": "iterations: 136023\ncpu: 5155.170081530366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26107.877455184578,
            "unit": "ns/iter",
            "extra": "iterations: 26831\ncpu: 26106.88755543982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20984.560162600625,
            "unit": "ns/iter",
            "extra": "iterations: 33210\ncpu: 20983.821138211384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21166.598642328427,
            "unit": "ns/iter",
            "extra": "iterations: 33145\ncpu: 21165.967717604693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21716.410136960632,
            "unit": "ns/iter",
            "extra": "iterations: 32199\ncpu: 21716.457032827093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50909.30276564263,
            "unit": "ns/iter",
            "extra": "iterations: 13740\ncpu: 50868.29694323106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 197710.4855932416,
            "unit": "ns/iter",
            "extra": "iterations: 3540\ncpu: 197704.97175141203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 168733.3229949047,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 168733.58371698664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 167815.42723116325,
            "unit": "ns/iter",
            "extra": "iterations: 4157\ncpu: 167812.34063026126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 169922.9139056779,
            "unit": "ns/iter",
            "extra": "iterations: 4135\ncpu: 169923.1680773893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 98308.14523344202,
            "unit": "ns/iter",
            "extra": "iterations: 7154\ncpu: 98307.3525300538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 167315.42200289844,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 167314.54020221386 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}