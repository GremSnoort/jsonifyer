window.BENCHMARK_DATA = {
  "lastUpdate": 1702381438771,
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
      }
    ]
  }
}