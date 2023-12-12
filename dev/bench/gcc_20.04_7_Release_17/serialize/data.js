window.BENCHMARK_DATA = {
  "lastUpdate": 1702391786411,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-7 20.04 Release c++-17": [
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
        "date": 1702381103814,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 999.1238989630841,
            "unit": "ns/iter",
            "extra": "iterations: 667439\ncpu: 999.0902539408097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20003.796417135207,
            "unit": "ns/iter",
            "extra": "iterations: 41531\ncpu: 20003.02424694806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 45073.328222257915,
            "unit": "ns/iter",
            "extra": "iterations: 19761\ncpu: 45070.39623500835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 56389.83290000397,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56387.44999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69065.74740753669,
            "unit": "ns/iter",
            "extra": "iterations: 11572\ncpu: 69061.14759764944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 87144.34689042596,
            "unit": "ns/iter",
            "extra": "iterations: 10130\ncpu: 87140.5034550839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 105405.50908221668,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 105398.90057361378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 133922.9215961723,
            "unit": "ns/iter",
            "extra": "iterations: 7117\ncpu: 133918.39258114365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 151964.48067255717,
            "unit": "ns/iter",
            "extra": "iterations: 5769\ncpu: 151952.67810712417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 828.7769184146113,
            "unit": "ns/iter",
            "extra": "iterations: 841450\ncpu: 828.7831719056386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 694.0162703292063,
            "unit": "ns/iter",
            "extra": "iterations: 1005204\ncpu: 693.9690848822717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 659.2982656495644,
            "unit": "ns/iter",
            "extra": "iterations: 1060397\ncpu: 659.2659164445013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 674.6540902649568,
            "unit": "ns/iter",
            "extra": "iterations: 1039407\ncpu: 674.6286103518626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1333.0172897258617,
            "unit": "ns/iter",
            "extra": "iterations: 524589\ncpu: 1332.8640135420294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5704.919789999963,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5704.9620000000095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 33993.54464358475,
            "unit": "ns/iter",
            "extra": "iterations: 24550\ncpu: 33991.1853360489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 24562.170495623985,
            "unit": "ns/iter",
            "extra": "iterations: 33473\ncpu: 24562.342783736134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 24600.850407625552,
            "unit": "ns/iter",
            "extra": "iterations: 33364\ncpu: 24599.892099268644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 25384.936562895822,
            "unit": "ns/iter",
            "extra": "iterations: 32347\ncpu: 25385.111447738505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 59156.10050000168,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59150.800000000105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 648172.2249999961,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648106.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 515947.3460000186,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515951.1000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 514236.45199997735,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514183.70000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 518554.62999998283,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518535.20000000234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 380066.70421922137,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 380053.9364941288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 510838.9490000036,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510796.69999999664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2954547.9252336454,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2954437.071651083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1268308.5830012967,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 1268273.837981408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3756449.296000028,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3756359.200000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6262.125507823367,
            "unit": "ns/iter",
            "extra": "iterations: 134151\ncpu: 6262.006992120799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 35770.22153438933,
            "unit": "ns/iter",
            "extra": "iterations: 23423\ncpu: 35768.93651539091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 26545.064749117355,
            "unit": "ns/iter",
            "extra": "iterations: 31429\ncpu: 26545.079385281148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 26116.74508019174,
            "unit": "ns/iter",
            "extra": "iterations: 31861\ncpu: 26116.26125984745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 25070.335161340066,
            "unit": "ns/iter",
            "extra": "iterations: 33005\ncpu: 25069.216785335604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 58692.66960000346,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58689.58000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 627032.875999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 626978.5999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 521483.6709999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521448.9000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 534945.2560000145,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534949.9000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 515056.67800000764,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515005.3999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 375545.127605278,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 375530.02977456216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 509601.0239999487,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509563.9000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3055515.741100275,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3055333.980582544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1257566.1838623818,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 1257499.6031746017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6400.7901176470605,
            "unit": "ns/iter",
            "extra": "iterations: 129625\ncpu: 6400.5523625844135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 36394.349020628026,
            "unit": "ns/iter",
            "extra": "iterations: 23076\ncpu: 36391.95701161379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 26530.989982248117,
            "unit": "ns/iter",
            "extra": "iterations: 31544\ncpu: 26530.287851889418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 26375.0271812821,
            "unit": "ns/iter",
            "extra": "iterations: 31713\ncpu: 26373.591271718255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 25347.309931619682,
            "unit": "ns/iter",
            "extra": "iterations: 30710\ncpu: 25345.249104526152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 57210.26530000018,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57207.91000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 628975.4769999831,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 628947.3000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 517308.0170000048,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517311.8999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 511625.77200000215,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511612.49999999825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 511183.2489999983,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511177.19999999873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 382993.07145948615,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 382992.5075790395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 513703.74600003293,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513688.60000000184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 336.4336406340791,
            "unit": "ns/iter",
            "extra": "iterations: 2086013\ncpu: 336.4360624789979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2888.8086599194344,
            "unit": "ns/iter",
            "extra": "iterations: 242866\ncpu: 2888.7439987482867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2096.710274840669,
            "unit": "ns/iter",
            "extra": "iterations: 336122\ncpu: 2096.7249986611896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2053.184026460894,
            "unit": "ns/iter",
            "extra": "iterations: 340125\ncpu: 2053.0878353546523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1589.243705968975,
            "unit": "ns/iter",
            "extra": "iterations: 441450\ncpu: 1589.240910635393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 12561.670411176276,
            "unit": "ns/iter",
            "extra": "iterations: 55548\ncpu: 12561.445956650181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 30880.445144518984,
            "unit": "ns/iter",
            "extra": "iterations: 22696\ncpu: 30879.54265068747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 8088.731981069763,
            "unit": "ns/iter",
            "extra": "iterations: 86423\ncpu: 8088.570172292102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7898.998289369892,
            "unit": "ns/iter",
            "extra": "iterations: 87687\ncpu: 7898.704482990665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 8000.986356780726,
            "unit": "ns/iter",
            "extra": "iterations: 87516\ncpu: 8001.045523104299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 17083.82861113847,
            "unit": "ns/iter",
            "extra": "iterations: 41012\ncpu: 17083.568223934402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15927.103338488178,
            "unit": "ns/iter",
            "extra": "iterations: 43972\ncpu: 15927.219594287246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4286.977672692168,
            "unit": "ns/iter",
            "extra": "iterations: 163253\ncpu: 4286.838220430862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22364.824474660618,
            "unit": "ns/iter",
            "extra": "iterations: 31551\ncpu: 22365.009032994363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17305.810987816505,
            "unit": "ns/iter",
            "extra": "iterations: 40463\ncpu: 17305.281368163534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17215.062550711104,
            "unit": "ns/iter",
            "extra": "iterations: 40671\ncpu: 17215.212313442076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18120.35438903386,
            "unit": "ns/iter",
            "extra": "iterations: 38881\ncpu: 18119.919755150386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37097.501640386254,
            "unit": "ns/iter",
            "extra": "iterations: 18898\ncpu: 37097.81987511897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 152753.52615518356,
            "unit": "ns/iter",
            "extra": "iterations: 4588\ncpu: 152750.0217959915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 130723.57449188537,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 130718.32929330705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 130449.81698113108,
            "unit": "ns/iter",
            "extra": "iterations: 5300\ncpu: 130448.99999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 133423.93066821538,
            "unit": "ns/iter",
            "extra": "iterations: 5178\ncpu: 133415.4499806887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 80552.14480780411,
            "unit": "ns/iter",
            "extra": "iterations: 8715\ncpu: 80552.74813539877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 135993.12157168202,
            "unit": "ns/iter",
            "extra": "iterations: 5141\ncpu: 135990.44932892633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4155.191704395457,
            "unit": "ns/iter",
            "extra": "iterations: 168306\ncpu: 4155.2226302092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 21913.902221664528,
            "unit": "ns/iter",
            "extra": "iterations: 31868\ncpu: 21912.991088239123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17038.6342701669,
            "unit": "ns/iter",
            "extra": "iterations: 41167\ncpu: 17038.834503364338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 16751.870063939074,
            "unit": "ns/iter",
            "extra": "iterations: 41759\ncpu: 16751.493091309687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 17895.630889307587,
            "unit": "ns/iter",
            "extra": "iterations: 38693\ncpu: 17895.236864549224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 36807.04822469502,
            "unit": "ns/iter",
            "extra": "iterations: 18870\ncpu: 36806.27980922116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 152565.94406964295,
            "unit": "ns/iter",
            "extra": "iterations: 4595\ncpu: 152562.06746463457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 133253.4051360673,
            "unit": "ns/iter",
            "extra": "iterations: 5218\ncpu: 133252.62552702252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 131885.02442718673,
            "unit": "ns/iter",
            "extra": "iterations: 5281\ncpu: 131878.8865745121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 134522.9903938474,
            "unit": "ns/iter",
            "extra": "iterations: 5205\ncpu: 134523.97694524482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 80599.06166436485,
            "unit": "ns/iter",
            "extra": "iterations: 8676\ncpu: 80595.96588289525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 135760.02714148388,
            "unit": "ns/iter",
            "extra": "iterations: 5195\ncpu: 135757.97882579514 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381103814,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 999.1238989630841,
            "unit": "ns/iter",
            "extra": "iterations: 667439\ncpu: 999.0902539408097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20003.796417135207,
            "unit": "ns/iter",
            "extra": "iterations: 41531\ncpu: 20003.02424694806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 45073.328222257915,
            "unit": "ns/iter",
            "extra": "iterations: 19761\ncpu: 45070.39623500835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 56389.83290000397,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56387.44999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69065.74740753669,
            "unit": "ns/iter",
            "extra": "iterations: 11572\ncpu: 69061.14759764944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 87144.34689042596,
            "unit": "ns/iter",
            "extra": "iterations: 10130\ncpu: 87140.5034550839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 105405.50908221668,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 105398.90057361378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 133922.9215961723,
            "unit": "ns/iter",
            "extra": "iterations: 7117\ncpu: 133918.39258114365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 151964.48067255717,
            "unit": "ns/iter",
            "extra": "iterations: 5769\ncpu: 151952.67810712417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 828.7769184146113,
            "unit": "ns/iter",
            "extra": "iterations: 841450\ncpu: 828.7831719056386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 694.0162703292063,
            "unit": "ns/iter",
            "extra": "iterations: 1005204\ncpu: 693.9690848822717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 659.2982656495644,
            "unit": "ns/iter",
            "extra": "iterations: 1060397\ncpu: 659.2659164445013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 674.6540902649568,
            "unit": "ns/iter",
            "extra": "iterations: 1039407\ncpu: 674.6286103518626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1333.0172897258617,
            "unit": "ns/iter",
            "extra": "iterations: 524589\ncpu: 1332.8640135420294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5704.919789999963,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5704.9620000000095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 33993.54464358475,
            "unit": "ns/iter",
            "extra": "iterations: 24550\ncpu: 33991.1853360489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 24562.170495623985,
            "unit": "ns/iter",
            "extra": "iterations: 33473\ncpu: 24562.342783736134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 24600.850407625552,
            "unit": "ns/iter",
            "extra": "iterations: 33364\ncpu: 24599.892099268644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 25384.936562895822,
            "unit": "ns/iter",
            "extra": "iterations: 32347\ncpu: 25385.111447738505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 59156.10050000168,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59150.800000000105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 648172.2249999961,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648106.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 515947.3460000186,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515951.1000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 514236.45199997735,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514183.70000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 518554.62999998283,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518535.20000000234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 380066.70421922137,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 380053.9364941288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 510838.9490000036,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510796.69999999664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2954547.9252336454,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2954437.071651083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1268308.5830012967,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 1268273.837981408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3756449.296000028,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3756359.200000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6262.125507823367,
            "unit": "ns/iter",
            "extra": "iterations: 134151\ncpu: 6262.006992120799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 35770.22153438933,
            "unit": "ns/iter",
            "extra": "iterations: 23423\ncpu: 35768.93651539091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 26545.064749117355,
            "unit": "ns/iter",
            "extra": "iterations: 31429\ncpu: 26545.079385281148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 26116.74508019174,
            "unit": "ns/iter",
            "extra": "iterations: 31861\ncpu: 26116.26125984745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 25070.335161340066,
            "unit": "ns/iter",
            "extra": "iterations: 33005\ncpu: 25069.216785335604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 58692.66960000346,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58689.58000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 627032.875999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 626978.5999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 521483.6709999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521448.9000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 534945.2560000145,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534949.9000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 515056.67800000764,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515005.3999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 375545.127605278,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 375530.02977456216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 509601.0239999487,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509563.9000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3055515.741100275,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3055333.980582544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1257566.1838623818,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 1257499.6031746017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6400.7901176470605,
            "unit": "ns/iter",
            "extra": "iterations: 129625\ncpu: 6400.5523625844135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 36394.349020628026,
            "unit": "ns/iter",
            "extra": "iterations: 23076\ncpu: 36391.95701161379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 26530.989982248117,
            "unit": "ns/iter",
            "extra": "iterations: 31544\ncpu: 26530.287851889418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 26375.0271812821,
            "unit": "ns/iter",
            "extra": "iterations: 31713\ncpu: 26373.591271718255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 25347.309931619682,
            "unit": "ns/iter",
            "extra": "iterations: 30710\ncpu: 25345.249104526152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 57210.26530000018,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57207.91000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 628975.4769999831,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 628947.3000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 517308.0170000048,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517311.8999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 511625.77200000215,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511612.49999999825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 511183.2489999983,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511177.19999999873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 382993.07145948615,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 382992.5075790395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 513703.74600003293,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513688.60000000184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 336.4336406340791,
            "unit": "ns/iter",
            "extra": "iterations: 2086013\ncpu: 336.4360624789979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2888.8086599194344,
            "unit": "ns/iter",
            "extra": "iterations: 242866\ncpu: 2888.7439987482867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2096.710274840669,
            "unit": "ns/iter",
            "extra": "iterations: 336122\ncpu: 2096.7249986611896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2053.184026460894,
            "unit": "ns/iter",
            "extra": "iterations: 340125\ncpu: 2053.0878353546523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1589.243705968975,
            "unit": "ns/iter",
            "extra": "iterations: 441450\ncpu: 1589.240910635393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 12561.670411176276,
            "unit": "ns/iter",
            "extra": "iterations: 55548\ncpu: 12561.445956650181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 30880.445144518984,
            "unit": "ns/iter",
            "extra": "iterations: 22696\ncpu: 30879.54265068747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 8088.731981069763,
            "unit": "ns/iter",
            "extra": "iterations: 86423\ncpu: 8088.570172292102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7898.998289369892,
            "unit": "ns/iter",
            "extra": "iterations: 87687\ncpu: 7898.704482990665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 8000.986356780726,
            "unit": "ns/iter",
            "extra": "iterations: 87516\ncpu: 8001.045523104299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 17083.82861113847,
            "unit": "ns/iter",
            "extra": "iterations: 41012\ncpu: 17083.568223934402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15927.103338488178,
            "unit": "ns/iter",
            "extra": "iterations: 43972\ncpu: 15927.219594287246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4286.977672692168,
            "unit": "ns/iter",
            "extra": "iterations: 163253\ncpu: 4286.838220430862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22364.824474660618,
            "unit": "ns/iter",
            "extra": "iterations: 31551\ncpu: 22365.009032994363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17305.810987816505,
            "unit": "ns/iter",
            "extra": "iterations: 40463\ncpu: 17305.281368163534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17215.062550711104,
            "unit": "ns/iter",
            "extra": "iterations: 40671\ncpu: 17215.212313442076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18120.35438903386,
            "unit": "ns/iter",
            "extra": "iterations: 38881\ncpu: 18119.919755150386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37097.501640386254,
            "unit": "ns/iter",
            "extra": "iterations: 18898\ncpu: 37097.81987511897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 152753.52615518356,
            "unit": "ns/iter",
            "extra": "iterations: 4588\ncpu: 152750.0217959915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 130723.57449188537,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 130718.32929330705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 130449.81698113108,
            "unit": "ns/iter",
            "extra": "iterations: 5300\ncpu: 130448.99999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 133423.93066821538,
            "unit": "ns/iter",
            "extra": "iterations: 5178\ncpu: 133415.4499806887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 80552.14480780411,
            "unit": "ns/iter",
            "extra": "iterations: 8715\ncpu: 80552.74813539877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 135993.12157168202,
            "unit": "ns/iter",
            "extra": "iterations: 5141\ncpu: 135990.44932892633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4155.191704395457,
            "unit": "ns/iter",
            "extra": "iterations: 168306\ncpu: 4155.2226302092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 21913.902221664528,
            "unit": "ns/iter",
            "extra": "iterations: 31868\ncpu: 21912.991088239123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17038.6342701669,
            "unit": "ns/iter",
            "extra": "iterations: 41167\ncpu: 17038.834503364338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 16751.870063939074,
            "unit": "ns/iter",
            "extra": "iterations: 41759\ncpu: 16751.493091309687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 17895.630889307587,
            "unit": "ns/iter",
            "extra": "iterations: 38693\ncpu: 17895.236864549224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 36807.04822469502,
            "unit": "ns/iter",
            "extra": "iterations: 18870\ncpu: 36806.27980922116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 152565.94406964295,
            "unit": "ns/iter",
            "extra": "iterations: 4595\ncpu: 152562.06746463457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 133253.4051360673,
            "unit": "ns/iter",
            "extra": "iterations: 5218\ncpu: 133252.62552702252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 131885.02442718673,
            "unit": "ns/iter",
            "extra": "iterations: 5281\ncpu: 131878.8865745121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 134522.9903938474,
            "unit": "ns/iter",
            "extra": "iterations: 5205\ncpu: 134523.97694524482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 80599.06166436485,
            "unit": "ns/iter",
            "extra": "iterations: 8676\ncpu: 80595.96588289525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 135760.02714148388,
            "unit": "ns/iter",
            "extra": "iterations: 5195\ncpu: 135757.97882579514 ns\nthreads: 1"
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
        "date": 1702382249841,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 956.8008479454115,
            "unit": "ns/iter",
            "extra": "iterations: 729764\ncpu: 956.7671192330671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19730.17137561487,
            "unit": "ns/iter",
            "extra": "iterations: 42083\ncpu: 19729.83389967445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 44706.73129473004,
            "unit": "ns/iter",
            "extra": "iterations: 19981\ncpu: 44706.11581001951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 55654.61240000218,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55655.06 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 68443.82567796798,
            "unit": "ns/iter",
            "extra": "iterations: 11800\ncpu: 68443.02542372883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 86253.98057965448,
            "unit": "ns/iter",
            "extra": "iterations: 10144\ncpu: 86251.2125394321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 103690.77729308938,
            "unit": "ns/iter",
            "extra": "iterations: 8482\ncpu: 103689.01202546572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 119620.65913475057,
            "unit": "ns/iter",
            "extra": "iterations: 7258\ncpu: 119618.44860843201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 149959.93613682446,
            "unit": "ns/iter",
            "extra": "iterations: 6373\ncpu: 149953.63251216064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 810.9967900363362,
            "unit": "ns/iter",
            "extra": "iterations: 861692\ncpu: 810.961225124521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 676.7510600478182,
            "unit": "ns/iter",
            "extra": "iterations: 1036274\ncpu: 676.7456290517754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 655.9226195149113,
            "unit": "ns/iter",
            "extra": "iterations: 1069908\ncpu: 655.8886371538484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 658.0144996345471,
            "unit": "ns/iter",
            "extra": "iterations: 1065751\ncpu: 658.0169289074087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1332.883826104874,
            "unit": "ns/iter",
            "extra": "iterations: 526478\ncpu: 1332.8585429970467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6318.495879618316,
            "unit": "ns/iter",
            "extra": "iterations: 132512\ncpu: 6318.3364525476945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 35815.12465995865,
            "unit": "ns/iter",
            "extra": "iterations: 23159\ncpu: 35814.633619759086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 26701.33284175461,
            "unit": "ns/iter",
            "extra": "iterations: 31192\ncpu: 26701.231084893545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 26506.404256678827,
            "unit": "ns/iter",
            "extra": "iterations: 31292\ncpu: 26505.66918062131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 27327.523599356053,
            "unit": "ns/iter",
            "extra": "iterations: 30361\ncpu: 27326.51427818573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 59744.128300002325,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59743.63999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 636638.2390000354,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 636592.4000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 520248.58700002596,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520229.7999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 514923.1560000089,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514907.2999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 514301.7729999997,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514276.8000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 372987.7576278527,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 372976.06360120326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 503189.3180000111,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503184.6000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2899519.9630769375,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2899427.0769230686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1255711.9894458775,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1255627.9683377298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3708350.732283607,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3708068.110236211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6293.507029430859,
            "unit": "ns/iter",
            "extra": "iterations: 134008\ncpu: 6293.165333412938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 36501.93144547357,
            "unit": "ns/iter",
            "extra": "iterations: 22989\ncpu: 36500.46109008664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 26618.484616365993,
            "unit": "ns/iter",
            "extra": "iterations: 31332\ncpu: 26617.26669219972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 26349.047508283387,
            "unit": "ns/iter",
            "extra": "iterations: 31384\ncpu: 26348.113688503676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 27347.48922975444,
            "unit": "ns/iter",
            "extra": "iterations: 30315\ncpu: 27346.8777832756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 58993.48589999817,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58990.20999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 648110.4879999862,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648093.7000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 531594.2059999657,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531565.0000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 522774.55300003337,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522745.90000000386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 523881.65299998946,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523870.00000000227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 381257.7891798839,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 381249.2056676673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 520240.34700002626,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520207.5999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3026832.5584415463,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3026645.779220793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1287932.0582655126,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 1287923.1707317058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6088.386517582534,
            "unit": "ns/iter",
            "extra": "iterations: 135673\ncpu: 6088.2334731302835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 35153.720797000984,
            "unit": "ns/iter",
            "extra": "iterations: 23739\ncpu: 35152.08728253095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 24784.98538237655,
            "unit": "ns/iter",
            "extra": "iterations: 33658\ncpu: 24784.000831897178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 24287.684225878053,
            "unit": "ns/iter",
            "extra": "iterations: 34284\ncpu: 24286.547660716307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 24892.172861003382,
            "unit": "ns/iter",
            "extra": "iterations: 33310\ncpu: 24891.63014109891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 57570.487300000656,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57569.11000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 631094.9099999449,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 631031.3999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 518796.0509999812,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518779.29999999853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 514140.68300005054,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514120.2000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 515212.63700004737,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515191.20000000385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 382206.84908933786,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 382203.38248048496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 515129.35699997796,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515126.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 334.82109598595474,
            "unit": "ns/iter",
            "extra": "iterations: 2081742\ncpu: 334.8103655496213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2824.33506876752,
            "unit": "ns/iter",
            "extra": "iterations: 248737\ncpu: 2824.2384526628502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2089.971575028851,
            "unit": "ns/iter",
            "extra": "iterations: 336324\ncpu: 2089.9457071157603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2067.286027683531,
            "unit": "ns/iter",
            "extra": "iterations: 338684\ncpu: 2067.2316968029168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1629.4945848207753,
            "unit": "ns/iter",
            "extra": "iterations: 429718\ncpu: 1629.4262749058707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 12763.417597003125,
            "unit": "ns/iter",
            "extra": "iterations: 54998\ncpu: 12762.984108513007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 33575.02864533395,
            "unit": "ns/iter",
            "extra": "iterations: 20876\ncpu: 33573.88867599147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7987.589439177147,
            "unit": "ns/iter",
            "extra": "iterations: 87853\ncpu: 7987.248016573173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7897.144746202942,
            "unit": "ns/iter",
            "extra": "iterations: 88555\ncpu: 7896.951047371688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7898.127858933103,
            "unit": "ns/iter",
            "extra": "iterations: 88582\ncpu: 7897.997335801862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15123.548473347964,
            "unit": "ns/iter",
            "extra": "iterations: 46376\ncpu: 15122.619458340554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15381.825386928349,
            "unit": "ns/iter",
            "extra": "iterations: 44905\ncpu: 15381.218127157243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4197.152717280562,
            "unit": "ns/iter",
            "extra": "iterations: 166674\ncpu: 4196.917935610841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22543.718688418066,
            "unit": "ns/iter",
            "extra": "iterations: 30955\ncpu: 22542.765304474167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17700.552502479044,
            "unit": "ns/iter",
            "extra": "iterations: 39341\ncpu: 17699.91611804486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17607.291555599924,
            "unit": "ns/iter",
            "extra": "iterations: 39766\ncpu: 17606.57848413216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18765.46857066645,
            "unit": "ns/iter",
            "extra": "iterations: 37465\ncpu: 18764.740424396092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37858.198387795834,
            "unit": "ns/iter",
            "extra": "iterations: 18484\ncpu: 37856.27028781651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 154494.39135230926,
            "unit": "ns/iter",
            "extra": "iterations: 4533\ncpu: 154484.42532539228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 133034.62056535934,
            "unit": "ns/iter",
            "extra": "iterations: 5271\ncpu: 133028.57142857072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 132356.21405690545,
            "unit": "ns/iter",
            "extra": "iterations: 5307\ncpu: 132357.11324665695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 134266.26056067934,
            "unit": "ns/iter",
            "extra": "iterations: 5208\ncpu: 134263.82488479305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 81071.95984261055,
            "unit": "ns/iter",
            "extra": "iterations: 8641\ncpu: 81069.20495313041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 133965.86412834117,
            "unit": "ns/iter",
            "extra": "iterations: 5174\ncpu: 133961.20989563243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4161.327792300181,
            "unit": "ns/iter",
            "extra": "iterations: 168320\ncpu: 4161.23395912549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22137.84650764443,
            "unit": "ns/iter",
            "extra": "iterations: 31526\ncpu: 22136.712554716512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17358.968308372958,
            "unit": "ns/iter",
            "extra": "iterations: 40263\ncpu: 17358.378660308455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17201.76734284358,
            "unit": "ns/iter",
            "extra": "iterations: 40867\ncpu: 17200.968996990145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18329.81485824522,
            "unit": "ns/iter",
            "extra": "iterations: 38376\ncpu: 18329.229205753483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37105.79643966893,
            "unit": "ns/iter",
            "extra": "iterations: 18987\ncpu: 37103.59193132114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 150037.2243659291,
            "unit": "ns/iter",
            "extra": "iterations: 4613\ncpu: 150029.41686538194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 133338.1142475769,
            "unit": "ns/iter",
            "extra": "iterations: 5243\ncpu: 133330.9555597952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 131957.63550697934,
            "unit": "ns/iter",
            "extra": "iterations: 5306\ncpu: 131953.03430079058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 132987.518665905,
            "unit": "ns/iter",
            "extra": "iterations: 5277\ncpu: 132988.59200303367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 79857.28401962222,
            "unit": "ns/iter",
            "extra": "iterations: 8767\ncpu: 79853.63294171219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 132139.78371261034,
            "unit": "ns/iter",
            "extra": "iterations: 5317\ncpu: 132135.90370509634 ns\nthreads: 1"
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
        "date": 1702387025395,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 981.9484386030211,
            "unit": "ns/iter",
            "extra": "iterations: 711094\ncpu: 981.8746888597009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20191.167614603164,
            "unit": "ns/iter",
            "extra": "iterations: 41142\ncpu: 20190.046667638908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 46624.43732186274,
            "unit": "ns/iter",
            "extra": "iterations: 19297\ncpu: 46621.67694460277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 58089.748200001166,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58089.370000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 70516.42864726407,
            "unit": "ns/iter",
            "extra": "iterations: 11303\ncpu: 70511.24480226489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 89207.99979843042,
            "unit": "ns/iter",
            "extra": "iterations: 9922\ncpu: 89205.37190082643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 104271.45698924849,
            "unit": "ns/iter",
            "extra": "iterations: 8370\ncpu: 104266.37992831545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 121105.36984215118,
            "unit": "ns/iter",
            "extra": "iterations: 7222\ncpu: 121102.72777623932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 151850.77761767714,
            "unit": "ns/iter",
            "extra": "iterations: 6246\ncpu: 151845.83733589502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 815.5227273783208,
            "unit": "ns/iter",
            "extra": "iterations: 860724\ncpu: 815.5144970977911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 680.5931158422219,
            "unit": "ns/iter",
            "extra": "iterations: 1034985\ncpu: 680.5604912148482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 634.320596145734,
            "unit": "ns/iter",
            "extra": "iterations: 1084567\ncpu: 634.299218028947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 636.8432820665872,
            "unit": "ns/iter",
            "extra": "iterations: 1098113\ncpu: 636.8140619408017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1323.8251218303944,
            "unit": "ns/iter",
            "extra": "iterations: 530861\ncpu: 1323.7301289791487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6211.426133006108,
            "unit": "ns/iter",
            "extra": "iterations: 131994\ncpu: 6210.938375986785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 35663.18554695772,
            "unit": "ns/iter",
            "extra": "iterations: 23649\ncpu: 35659.60928580492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 24847.738023137408,
            "unit": "ns/iter",
            "extra": "iterations: 33022\ncpu: 24846.39331354855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 24116.470150122448,
            "unit": "ns/iter",
            "extra": "iterations: 34372\ncpu: 24115.6871872454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 25006.75759036022,
            "unit": "ns/iter",
            "extra": "iterations: 33200\ncpu: 25005.984939758942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 58537.15080000369,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58532.81999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 641668.535000008,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641614.7999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 503019.4990000041,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503016.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 509581.69699998735,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509569.7999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 501960.52500001545,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501930.0000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 374941.9422583345,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 374934.4311377247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 502251.43699998397,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502208.99999999703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2900044.043076902,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2899979.384615392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1209900.581956759,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 1209851.7153748446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3692279.1607843926,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3692140.784313724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6389.280962571864,
            "unit": "ns/iter",
            "extra": "iterations: 131772\ncpu: 6389.037883617144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 36290.34314531786,
            "unit": "ns/iter",
            "extra": "iterations: 23101\ncpu: 36290.12163975592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 26587.91307559063,
            "unit": "ns/iter",
            "extra": "iterations: 31142\ncpu: 26586.821655641856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 26342.82626556268,
            "unit": "ns/iter",
            "extra": "iterations: 31646\ncpu: 26342.18542627817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 27220.015045692955,
            "unit": "ns/iter",
            "extra": "iterations: 30640\ncpu: 27219.59530026116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 58610.60970000267,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58610.260000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 624699.9880000317,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 624682.4999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 520249.0639999837,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520233.79999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 516084.1850000111,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516057.19999999873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 512028.7400000052,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512004.60000000446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 375213.77136751876,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 375205.94017094094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 505940.7410000176,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505939.29999999434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2996230.6181230797,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2996098.0582524263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1229631.364812419,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 1229595.3428201834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6571.958673711015,
            "unit": "ns/iter",
            "extra": "iterations: 128901\ncpu: 6571.659645774663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 36502.35704013623,
            "unit": "ns/iter",
            "extra": "iterations: 22947\ncpu: 36502.1527868566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 26535.082109755847,
            "unit": "ns/iter",
            "extra": "iterations: 31397\ncpu: 26534.723062712965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 26316.46325848338,
            "unit": "ns/iter",
            "extra": "iterations: 31708\ncpu: 26315.51974265167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 27045.927371750957,
            "unit": "ns/iter",
            "extra": "iterations: 30663\ncpu: 27044.793399210903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 58084.68160000188,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58082.51999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 629827.180999996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 629798.2999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 519060.0619999941,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519051.4000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 511499.6009999686,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511478.9000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 506750.3119999515,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506717.5000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 383611.73142111953,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 383609.6045197754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 516674.6219999822,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516663.7999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 342.08953342845643,
            "unit": "ns/iter",
            "extra": "iterations: 2048732\ncpu: 342.0845186193185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2912.331526900637,
            "unit": "ns/iter",
            "extra": "iterations: 240068\ncpu: 2912.24028192012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2136.306137806925,
            "unit": "ns/iter",
            "extra": "iterations: 326892\ncpu: 2136.272224465579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2149.5952475872405,
            "unit": "ns/iter",
            "extra": "iterations: 348665\ncpu: 2149.5825505857993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1649.5046388678586,
            "unit": "ns/iter",
            "extra": "iterations: 425966\ncpu: 1649.477423080725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 12952.302786651211,
            "unit": "ns/iter",
            "extra": "iterations: 54474\ncpu: 12951.859602746294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 34233.58686710442,
            "unit": "ns/iter",
            "extra": "iterations: 20422\ncpu: 34233.06728038385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 8047.482246655969,
            "unit": "ns/iter",
            "extra": "iterations: 85674\ncpu: 8047.437962508989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7841.538761208467,
            "unit": "ns/iter",
            "extra": "iterations: 89329\ncpu: 7841.25871777358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7917.366271111833,
            "unit": "ns/iter",
            "extra": "iterations: 88399\ncpu: 7917.2479326689045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 17378.798901886177,
            "unit": "ns/iter",
            "extra": "iterations: 40433\ncpu: 17378.14409022326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14900.177307987728,
            "unit": "ns/iter",
            "extra": "iterations: 46924\ncpu: 14899.897706930276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4315.63338311114,
            "unit": "ns/iter",
            "extra": "iterations: 162723\ncpu: 4315.49197101822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22929.640921453065,
            "unit": "ns/iter",
            "extra": "iterations: 30517\ncpu: 22929.278762656868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17834.812385414218,
            "unit": "ns/iter",
            "extra": "iterations: 39272\ncpu: 17834.3527194948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17627.95183058915,
            "unit": "ns/iter",
            "extra": "iterations: 39714\ncpu: 17627.657752933468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18832.98022750428,
            "unit": "ns/iter",
            "extra": "iterations: 37274\ncpu: 18832.642056124903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 38013.626816918855,
            "unit": "ns/iter",
            "extra": "iterations: 18369\ncpu: 38013.02193913684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 153657.6679850623,
            "unit": "ns/iter",
            "extra": "iterations: 4551\ncpu: 153654.01010766748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 134238.7314129955,
            "unit": "ns/iter",
            "extra": "iterations: 5138\ncpu: 134230.51771117092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 133094.12215113977,
            "unit": "ns/iter",
            "extra": "iterations: 5002\ncpu: 133093.642542981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 135704.58611975168,
            "unit": "ns/iter",
            "extra": "iterations: 5144\ncpu: 135700.25272161645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 80232.87071849039,
            "unit": "ns/iter",
            "extra": "iterations: 8671\ncpu: 80231.72644446984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 134515.80011566126,
            "unit": "ns/iter",
            "extra": "iterations: 5188\ncpu: 134512.68311487956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4213.227665949732,
            "unit": "ns/iter",
            "extra": "iterations: 165532\ncpu: 4212.970905927505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22272.526076014838,
            "unit": "ns/iter",
            "extra": "iterations: 31389\ncpu: 22266.6698524959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17170.20390897115,
            "unit": "ns/iter",
            "extra": "iterations: 40778\ncpu: 17169.054392074206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17035.576875351133,
            "unit": "ns/iter",
            "extra": "iterations: 41099\ncpu: 17035.068979780503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18042.573701062967,
            "unit": "ns/iter",
            "extra": "iterations: 38724\ncpu: 18041.971387253583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37544.32633945328,
            "unit": "ns/iter",
            "extra": "iterations: 18683\ncpu: 37543.74565112667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 152216.25114955267,
            "unit": "ns/iter",
            "extra": "iterations: 4567\ncpu: 152210.46638931442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 133328.6168781201,
            "unit": "ns/iter",
            "extra": "iterations: 5202\ncpu: 133320.33833141005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 132350.59733587288,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 132341.00856327367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 132768.78435477687,
            "unit": "ns/iter",
            "extra": "iterations: 5254\ncpu: 132761.286638752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 79274.27464471443,
            "unit": "ns/iter",
            "extra": "iterations: 8866\ncpu: 79270.47146402083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 132252.8399005295,
            "unit": "ns/iter",
            "extra": "iterations: 5228\ncpu: 132247.58990053617 ns\nthreads: 1"
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
        "date": 1702388106183,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 985.9252161626508,
            "unit": "ns/iter",
            "extra": "iterations: 699242\ncpu: 985.7188212378547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20181.809558590878,
            "unit": "ns/iter",
            "extra": "iterations: 41073\ncpu: 20181.31375843011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 46203.12806945374,
            "unit": "ns/iter",
            "extra": "iterations: 19466\ncpu: 46201.366485153594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 57037.391300002586,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57033.88 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 70337.27059653014,
            "unit": "ns/iter",
            "extra": "iterations: 11349\ncpu: 70334.85769671337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 87319.02442210943,
            "unit": "ns/iter",
            "extra": "iterations: 9950\ncpu: 87316.39195979902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 103371.25577518476,
            "unit": "ns/iter",
            "extra": "iterations: 8398\ncpu: 103362.68159085496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 119594.92744263304,
            "unit": "ns/iter",
            "extra": "iterations: 7277\ncpu: 119586.86271815305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 149186.09215286066,
            "unit": "ns/iter",
            "extra": "iterations: 6359\ncpu: 149173.0618021703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 803.1848755539056,
            "unit": "ns/iter",
            "extra": "iterations: 869493\ncpu: 803.1231993817079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 658.5907641136429,
            "unit": "ns/iter",
            "extra": "iterations: 1054084\ncpu: 658.5766409508161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 664.084001335859,
            "unit": "ns/iter",
            "extra": "iterations: 1051019\ncpu: 664.0755305089627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 649.6979227194358,
            "unit": "ns/iter",
            "extra": "iterations: 1065287\ncpu: 649.6838880038895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1321.677872517992,
            "unit": "ns/iter",
            "extra": "iterations: 529753\ncpu: 1321.6500897588119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6226.39619683576,
            "unit": "ns/iter",
            "extra": "iterations: 132679\ncpu: 6226.136012481254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 36879.98525938029,
            "unit": "ns/iter",
            "extra": "iterations: 22862\ncpu: 36879.42437232087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 26550.188916232906,
            "unit": "ns/iter",
            "extra": "iterations: 31289\ncpu: 26550.186966665635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 24737.905485433217,
            "unit": "ns/iter",
            "extra": "iterations: 33434\ncpu: 24736.47185499795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 26340.242306946424,
            "unit": "ns/iter",
            "extra": "iterations: 31002\ncpu: 26339.79743242378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 58594.640100000106,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58592.54000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 656128.1629999485,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656081.1000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 524414.3569999551,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524408.3000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 519508.98199999076,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519470.59999999823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 514123.82900002744,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514109.0000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 380019.61923412554,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 380002.5239338553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 507679.999000004,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507661.1999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2895674.0652172314,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2895577.0186335375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1242048.1575520595,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 1241961.718749999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3715918.154150379,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3715847.4308300423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5861.430329999848,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5861.248000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 36141.73550351535,
            "unit": "ns/iter",
            "extra": "iterations: 23316\ncpu: 36141.2720878367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 26427.158032077867,
            "unit": "ns/iter",
            "extra": "iterations: 31424\ncpu: 26425.633273930674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 26304.401278276226,
            "unit": "ns/iter",
            "extra": "iterations: 31918\ncpu: 26303.48706059279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 27124.171805446305,
            "unit": "ns/iter",
            "extra": "iterations: 30552\ncpu: 27123.60238282268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 58809.18970000266,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58802.38999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 637508.1529999988,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 637463.1999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 528076.9320000331,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528077.7999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 524214.37999998947,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524215.4000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 513303.5289999839,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513282.1000000049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 380036.05617493624,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 380030.7032590061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 518517.1539999942,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518518.09999999433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3004273.754777097,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 3004161.783439497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1256926.1666666258,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 1256911.1111111122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6585.79420544475,
            "unit": "ns/iter",
            "extra": "iterations: 128638\ncpu: 6585.526827220586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 36448.71662967132,
            "unit": "ns/iter",
            "extra": "iterations: 22977\ncpu: 36447.72598685643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 26509.827515075536,
            "unit": "ns/iter",
            "extra": "iterations: 31510\ncpu: 26509.498571881726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 26209.491592795035,
            "unit": "ns/iter",
            "extra": "iterations: 31699\ncpu: 26208.735291334156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 27076.420046031642,
            "unit": "ns/iter",
            "extra": "iterations: 30849\ncpu: 27076.40766313328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 57753.689800000524,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57752.70999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 635984.7289999721,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 635947.7999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 521448.02899999835,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521449.0999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 509612.5029999712,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509613.20000000397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 505033.7330000048,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505011.4000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 383329.98966410145,
            "unit": "ns/iter",
            "extra": "iterations: 2322\ncpu: 383330.27562446124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 514243.75900001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514222.0999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 331.459387239096,
            "unit": "ns/iter",
            "extra": "iterations: 2109534\ncpu: 331.45979159378305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2867.640537472702,
            "unit": "ns/iter",
            "extra": "iterations: 244031\ncpu: 2867.574611422343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1983.9680530097207,
            "unit": "ns/iter",
            "extra": "iterations: 352991\ncpu: 1983.9692796700224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2050.5696362606077,
            "unit": "ns/iter",
            "extra": "iterations: 340821\ncpu: 2050.5432470417018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1582.0652591041776,
            "unit": "ns/iter",
            "extra": "iterations: 442467\ncpu: 1582.0284902603041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 12352.703011495061,
            "unit": "ns/iter",
            "extra": "iterations: 56716\ncpu: 12352.018830665023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 33303.139864832236,
            "unit": "ns/iter",
            "extra": "iterations: 20863\ncpu: 33300.84359871574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7896.7640770424305,
            "unit": "ns/iter",
            "extra": "iterations: 88211\ncpu: 7896.7713777193385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7896.9106935796835,
            "unit": "ns/iter",
            "extra": "iterations: 88829\ncpu: 7896.689144310932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7725.578209804949,
            "unit": "ns/iter",
            "extra": "iterations: 89912\ncpu: 7725.154595604592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16699.789541826547,
            "unit": "ns/iter",
            "extra": "iterations: 41709\ncpu: 16699.26634539308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15255.105686788049,
            "unit": "ns/iter",
            "extra": "iterations: 45720\ncpu: 15254.25634295724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4204.006059473457,
            "unit": "ns/iter",
            "extra": "iterations: 165856\ncpu: 4203.823196025447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22281.453812315936,
            "unit": "ns/iter",
            "extra": "iterations: 31372\ncpu: 22280.4220323856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17469.310128949735,
            "unit": "ns/iter",
            "extra": "iterations: 40093\ncpu: 17468.77509789741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17402.22259218817,
            "unit": "ns/iter",
            "extra": "iterations: 40244\ncpu: 17401.001391511883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18628.98819453761,
            "unit": "ns/iter",
            "extra": "iterations: 37525\ncpu: 18628.1678880746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37412.61253743985,
            "unit": "ns/iter",
            "extra": "iterations: 18696\ncpu: 37409.90051347885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 153072.9541284362,
            "unit": "ns/iter",
            "extra": "iterations: 4578\ncpu: 153068.02096985324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 131139.5713477825,
            "unit": "ns/iter",
            "extra": "iterations: 5305\ncpu: 131134.11875589096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 131894.81617086206,
            "unit": "ns/iter",
            "extra": "iterations: 5244\ncpu: 131894.96567505616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 133708.2985899407,
            "unit": "ns/iter",
            "extra": "iterations: 5248\ncpu: 133699.19969512423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 80252.3101331778,
            "unit": "ns/iter",
            "extra": "iterations: 8635\ncpu: 80248.73190503751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 134320.3082231124,
            "unit": "ns/iter",
            "extra": "iterations: 5217\ncpu: 134316.52290588577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4217.084433817051,
            "unit": "ns/iter",
            "extra": "iterations: 165609\ncpu: 4216.918766492144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22211.477394757403,
            "unit": "ns/iter",
            "extra": "iterations: 31475\ncpu: 22210.427323272015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17163.9875046396,
            "unit": "ns/iter",
            "extra": "iterations: 40415\ncpu: 17162.77124829915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17266.047346757652,
            "unit": "ns/iter",
            "extra": "iterations: 40573\ncpu: 17265.272471840904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18439.62436948254,
            "unit": "ns/iter",
            "extra": "iterations: 38064\ncpu: 18438.319672131212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37133.39383161632,
            "unit": "ns/iter",
            "extra": "iterations: 18838\ncpu: 37132.206179000386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 150697.1673856762,
            "unit": "ns/iter",
            "extra": "iterations: 4636\ncpu: 150686.6695427101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 131631.17509578096,
            "unit": "ns/iter",
            "extra": "iterations: 5220\ncpu: 131631.20689655122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 132188.34793278732,
            "unit": "ns/iter",
            "extra": "iterations: 5297\ncpu: 132180.2529733806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 131022.12689217376,
            "unit": "ns/iter",
            "extra": "iterations: 5351\ncpu: 131015.60455989555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 78718.99671611293,
            "unit": "ns/iter",
            "extra": "iterations: 8831\ncpu: 78716.40810780114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 132524.57113129288,
            "unit": "ns/iter",
            "extra": "iterations: 5286\ncpu: 132514.16950435142 ns\nthreads: 1"
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
          "id": "89047ca37b911c271e1749e8de13632f782d585c",
          "message": "cmt clang 15 build",
          "timestamp": "2023-12-12T16:57:18+03:00",
          "tree_id": "2f2c9ed08ef5734141953c56ba19061c15b85598",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/89047ca37b911c271e1749e8de13632f782d585c"
        },
        "date": 1702390803408,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 968.5049335072783,
            "unit": "ns/iter",
            "extra": "iterations: 722711\ncpu: 968.4883722539162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20423.475368257943,
            "unit": "ns/iter",
            "extra": "iterations: 41004\ncpu: 20423.07091991025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 45877.67452952297,
            "unit": "ns/iter",
            "extra": "iterations: 19289\ncpu: 45876.71730001555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 56376.46559999894,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56373.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 70337.44860055088,
            "unit": "ns/iter",
            "extra": "iterations: 11576\ncpu: 70336.85210780925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 88085.67486641396,
            "unit": "ns/iter",
            "extra": "iterations: 9919\ncpu: 88084.73636455287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 105040.9259943324,
            "unit": "ns/iter",
            "extra": "iterations: 8121\ncpu: 105038.75138529736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 122835.1313553388,
            "unit": "ns/iter",
            "extra": "iterations: 7179\ncpu: 122832.6089984678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 151690.35130772047,
            "unit": "ns/iter",
            "extra": "iterations: 6194\ncpu: 151682.83823054584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 810.1443735430521,
            "unit": "ns/iter",
            "extra": "iterations: 865678\ncpu: 810.1287083650033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 666.6761135575008,
            "unit": "ns/iter",
            "extra": "iterations: 1047117\ncpu: 666.6622736523236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 649.3723934361606,
            "unit": "ns/iter",
            "extra": "iterations: 1077664\ncpu: 649.367613653236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 653.5370148936449,
            "unit": "ns/iter",
            "extra": "iterations: 1072136\ncpu: 653.522407605005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1326.120559788611,
            "unit": "ns/iter",
            "extra": "iterations: 527199\ncpu: 1326.04822846781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5738.862300000278,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5738.6749999999865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 34600.101516774936,
            "unit": "ns/iter",
            "extra": "iterations: 24262\ncpu: 34598.61923996375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 25100.342176809383,
            "unit": "ns/iter",
            "extra": "iterations: 33471\ncpu: 25099.79086373279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 24675.572395570518,
            "unit": "ns/iter",
            "extra": "iterations: 33683\ncpu: 24674.901285514952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 25440.57119975851,
            "unit": "ns/iter",
            "extra": "iterations: 33090\ncpu: 25440.003022061013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 58808.142099996985,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58806.75999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 643738.7849999822,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 643726.9999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 517271.84300000314,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517240.09999999864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 510893.5789999691,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510709.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 508136.8870000347,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508097.5999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 373247.2895522376,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 373226.8656716415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 503503.43599995994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503506.20000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2940687.504615373,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2940537.846153848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1284250.4371728008,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 1284172.3821989517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3721817.660079178,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3721586.1660079053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6303.535547529412,
            "unit": "ns/iter",
            "extra": "iterations: 134285\ncpu: 6303.182038202324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 36284.53988439296,
            "unit": "ns/iter",
            "extra": "iterations: 23355\ncpu: 36282.179404838425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 26524.62498416691,
            "unit": "ns/iter",
            "extra": "iterations: 31580\ncpu: 26523.2995566814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 26089.18143883541,
            "unit": "ns/iter",
            "extra": "iterations: 31873\ncpu: 26088.12788253383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 27153.58352001652,
            "unit": "ns/iter",
            "extra": "iterations: 30801\ncpu: 27151.378202006446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 58513.93510000093,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58509.749999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 632389.0040000037,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632398.699999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 526680.9280000189,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526659.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 512306.0139999893,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512287.0000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 511137.92599994666,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511112.49999999587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 388434.8123938842,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 388431.62139219075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 508691.3880000452,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508672.1999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2977998.149681537,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2978006.050955431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1230744.0530400819,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 1230709.4437257405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6652.056392288716,
            "unit": "ns/iter",
            "extra": "iterations: 129007\ncpu: 6651.993302689022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 36845.8317954118,
            "unit": "ns/iter",
            "extra": "iterations: 22758\ncpu: 36844.44151507163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 26563.459152677882,
            "unit": "ns/iter",
            "extra": "iterations: 31275\ncpu: 26563.54916067155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 26325.033623004936,
            "unit": "ns/iter",
            "extra": "iterations: 31645\ncpu: 26324.31663769949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 26639.06303138666,
            "unit": "ns/iter",
            "extra": "iterations: 31286\ncpu: 26638.780924374896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 58106.403400000774,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58103.39000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 625943.7449999723,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625947.4000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 510160.03500001266,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510163.09999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 503425.98099996394,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503405.49999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 505793.9220000094,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505783.39999999857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 377817.5877796866,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 377777.9690189349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 514198.2999999754,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514146.9000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 346.2544136829003,
            "unit": "ns/iter",
            "extra": "iterations: 2023197\ncpu: 346.2519467950963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2905.795224234602,
            "unit": "ns/iter",
            "extra": "iterations: 241176\ncpu: 2905.7368892427185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2138.8115829200183,
            "unit": "ns/iter",
            "extra": "iterations: 328829\ncpu: 2138.7879414528616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2128.587304539656,
            "unit": "ns/iter",
            "extra": "iterations: 327944\ncpu: 2128.4496743346485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1639.0985547305197,
            "unit": "ns/iter",
            "extra": "iterations: 426910\ncpu: 1638.998149492863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 12749.016656947442,
            "unit": "ns/iter",
            "extra": "iterations: 54872\ncpu: 12747.711036594199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 34374.43143236821,
            "unit": "ns/iter",
            "extra": "iterations: 20323\ncpu: 34372.646754908346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 8613.058843199904,
            "unit": "ns/iter",
            "extra": "iterations: 86722\ncpu: 8612.031549087855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7632.725240138474,
            "unit": "ns/iter",
            "extra": "iterations: 91822\ncpu: 7632.181830062571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7694.497762274467,
            "unit": "ns/iter",
            "extra": "iterations: 91164\ncpu: 7694.099644596544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16724.66886646885,
            "unit": "ns/iter",
            "extra": "iterations: 42125\ncpu: 16723.5109792285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15121.372665426778,
            "unit": "ns/iter",
            "extra": "iterations: 39247\ncpu: 15121.430937396455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4214.005351383691,
            "unit": "ns/iter",
            "extra": "iterations: 166499\ncpu: 4213.890173514549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 21978.374721515298,
            "unit": "ns/iter",
            "extra": "iterations: 31869\ncpu: 21977.784053469048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17115.982350197606,
            "unit": "ns/iter",
            "extra": "iterations: 40737\ncpu: 17115.597613962735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 16966.42385565571,
            "unit": "ns/iter",
            "extra": "iterations: 41290\ncpu: 16965.802857834886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18259.1461850992,
            "unit": "ns/iter",
            "extra": "iterations: 37904\ncpu: 18257.73005487556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 36611.58019925908,
            "unit": "ns/iter",
            "extra": "iterations: 19171\ncpu: 36609.92645141107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 150966.33290239074,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 150960.26718379668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 130141.71449925921,
            "unit": "ns/iter",
            "extra": "iterations: 5352\ncpu: 130135.42600896733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 128904.56516129129,
            "unit": "ns/iter",
            "extra": "iterations: 5425\ncpu: 128897.1612903226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 129020.20096136839,
            "unit": "ns/iter",
            "extra": "iterations: 5409\ncpu: 129013.88426696311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 78843.48505358456,
            "unit": "ns/iter",
            "extra": "iterations: 8865\ncpu: 78839.9774393685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 132645.81699470486,
            "unit": "ns/iter",
            "extra": "iterations: 5284\ncpu: 132644.09538228408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4132.746734792681,
            "unit": "ns/iter",
            "extra": "iterations: 168902\ncpu: 4132.6881860487065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 21898.840416875828,
            "unit": "ns/iter",
            "extra": "iterations: 31952\ncpu: 21897.956309464385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17043.400603436687,
            "unit": "ns/iter",
            "extra": "iterations: 41098\ncpu: 17042.880432137787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 16841.64664743991,
            "unit": "ns/iter",
            "extra": "iterations: 41610\ncpu: 16840.461427541395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 17918.115988342135,
            "unit": "ns/iter",
            "extra": "iterations: 39116\ncpu: 17917.396973105766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 36883.538785835335,
            "unit": "ns/iter",
            "extra": "iterations: 18976\ncpu: 36881.99304384487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 148219.99133192186,
            "unit": "ns/iter",
            "extra": "iterations: 4730\ncpu: 148210.1902748404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 132826.18876873178,
            "unit": "ns/iter",
            "extra": "iterations: 5271\ncpu: 132819.5219123509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 130271.99420019238,
            "unit": "ns/iter",
            "extra": "iterations: 5345\ncpu: 130269.26099158004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 130925.07937102641,
            "unit": "ns/iter",
            "extra": "iterations: 5342\ncpu: 130917.50280793838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 78655.63400737467,
            "unit": "ns/iter",
            "extra": "iterations: 8951\ncpu: 78649.9944140317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 132770.50430127647,
            "unit": "ns/iter",
            "extra": "iterations: 5231\ncpu: 132763.5251385964 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702391779803,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1000.0286432533817,
            "unit": "ns/iter",
            "extra": "iterations: 700514\ncpu: 1000.0035688080467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19822.31607509469,
            "unit": "ns/iter",
            "extra": "iterations: 40908\ncpu: 19821.504351227148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 45250.819082456146,
            "unit": "ns/iter",
            "extra": "iterations: 19683\ncpu: 45249.021998679076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 56487.38079999589,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56485.75 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 70082.22181754949,
            "unit": "ns/iter",
            "extra": "iterations: 11532\ncpu: 70082.74366978841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 87369.96625150708,
            "unit": "ns/iter",
            "extra": "iterations: 9956\ncpu: 87366.38208115708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 105041.77757685361,
            "unit": "ns/iter",
            "extra": "iterations: 8295\ncpu: 105037.56479807117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 121453.70511379647,
            "unit": "ns/iter",
            "extra": "iterations: 7118\ncpu: 121447.8083731386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 150184.13124108504,
            "unit": "ns/iter",
            "extra": "iterations: 6309\ncpu: 150179.4896180059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 828.8161842957952,
            "unit": "ns/iter",
            "extra": "iterations: 845684\ncpu: 828.7864024860347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 686.0792618408033,
            "unit": "ns/iter",
            "extra": "iterations: 1023519\ncpu: 686.0502833850672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 670.9866443897167,
            "unit": "ns/iter",
            "extra": "iterations: 1042034\ncpu: 670.9524833162826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 678.9857937904217,
            "unit": "ns/iter",
            "extra": "iterations: 1029409\ncpu: 678.963560644992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1305.6942589995501,
            "unit": "ns/iter",
            "extra": "iterations: 535499\ncpu: 1305.6816165856544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6282.591022878964,
            "unit": "ns/iter",
            "extra": "iterations: 131824\ncpu: 6282.418982886269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 36258.34519806121,
            "unit": "ns/iter",
            "extra": "iterations: 22897\ncpu: 36257.78486264581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 26506.681895856735,
            "unit": "ns/iter",
            "extra": "iterations: 31015\ncpu: 26506.567789779154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 26304.402071024426,
            "unit": "ns/iter",
            "extra": "iterations: 31482\ncpu: 26303.570294136396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 27042.973111606258,
            "unit": "ns/iter",
            "extra": "iterations: 30608\ncpu: 27042.19811813905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 59019.0124000003,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59016.85000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 650698.3809999838,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650614.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 516066.12699998775,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516041.7000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 513381.00399999577,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513385.2000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 509019.89299995877,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508988.90000000206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 381690.7928633442,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 381680.76588337764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 506452.56100000325,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506440.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2948040.6300941044,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2947971.1598746115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1253170.1553273243,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 1253083.9537869066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3672492.2226563096,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3672303.515625003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5815.8623499997475,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5815.302000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 34171.54091396437,
            "unit": "ns/iter",
            "extra": "iterations: 24246\ncpu: 34170.48172894502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 26650.975846034868,
            "unit": "ns/iter",
            "extra": "iterations: 30968\ncpu: 26649.09907000771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 26259.934363791424,
            "unit": "ns/iter",
            "extra": "iterations: 31507\ncpu: 26258.49811153071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 27289.045669187813,
            "unit": "ns/iter",
            "extra": "iterations: 30283\ncpu: 27286.794571211627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 59018.666499997606,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59015.09999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 639437.5910000462,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639426.5000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 528276.8959999657,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528231.2000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 521658.6419999771,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521662.1000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 518601.85499998584,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518555.1000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 377472.3206172432,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 377447.14959279954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 515161.2290000003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515119.4000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3050353.7443364197,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3050104.854368942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1271096.7834224487,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 1271006.550802138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6554.673935309158,
            "unit": "ns/iter",
            "extra": "iterations: 127901\ncpu: 6554.150475758627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 36683.481617167796,
            "unit": "ns/iter",
            "extra": "iterations: 22929\ncpu: 36683.239565615615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 26584.603813693982,
            "unit": "ns/iter",
            "extra": "iterations: 31518\ncpu: 26584.38035408326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 26341.795107614733,
            "unit": "ns/iter",
            "extra": "iterations: 31641\ncpu: 26341.439903922113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 26734.90078457066,
            "unit": "ns/iter",
            "extra": "iterations: 30590\ncpu: 26734.6910755149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 57805.42059999902,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57800.61000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 622209.880000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622176.1999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 511605.32400001556,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511600.2999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 510294.67799997976,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510291.6999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 508521.3829999589,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508508.19999999425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 387055.2840909048,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 387030.8129370618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 515713.10599996423,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515688.7999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 350.89241410253715,
            "unit": "ns/iter",
            "extra": "iterations: 1983615\ncpu: 350.8891090256938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 3010.0783836896685,
            "unit": "ns/iter",
            "extra": "iterations: 233569\ncpu: 3010.030868822504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2247.8589911146955,
            "unit": "ns/iter",
            "extra": "iterations: 311413\ncpu: 2247.8306942869963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2140.6593215000034,
            "unit": "ns/iter",
            "extra": "iterations: 326927\ncpu: 2140.671159004905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1710.2944765848135,
            "unit": "ns/iter",
            "extra": "iterations: 410525\ncpu: 1710.2673406004428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 12343.274258177602,
            "unit": "ns/iter",
            "extra": "iterations: 56651\ncpu: 12343.252546292135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 33908.008977532554,
            "unit": "ns/iter",
            "extra": "iterations: 20607\ncpu: 33907.24511088467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 8075.870213428315,
            "unit": "ns/iter",
            "extra": "iterations: 86727\ncpu: 8075.926758679514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7917.740189031334,
            "unit": "ns/iter",
            "extra": "iterations: 88345\ncpu: 7917.627483162583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7927.468276439877,
            "unit": "ns/iter",
            "extra": "iterations: 88294\ncpu: 7927.517158583804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 17012.84104725257,
            "unit": "ns/iter",
            "extra": "iterations: 41289\ncpu: 17012.606263169317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15727.983121698646,
            "unit": "ns/iter",
            "extra": "iterations: 44495\ncpu: 15727.560400044924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4333.180042231872,
            "unit": "ns/iter",
            "extra": "iterations: 161962\ncpu: 4333.144194317209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22253.752572033132,
            "unit": "ns/iter",
            "extra": "iterations: 31201\ncpu: 22253.450209929157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17596.10140307722,
            "unit": "ns/iter",
            "extra": "iterations: 39841\ncpu: 17596.046785974177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17710.903814431138,
            "unit": "ns/iter",
            "extra": "iterations: 39403\ncpu: 17710.6057914372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18919.30868656098,
            "unit": "ns/iter",
            "extra": "iterations: 36827\ncpu: 18919.455834034998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37862.66772989954,
            "unit": "ns/iter",
            "extra": "iterations: 18497\ncpu: 37861.728929015706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 154661.69802530148,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 154661.72620368272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 133502.8270218884,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 133498.15413891443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 133128.2016742786,
            "unit": "ns/iter",
            "extra": "iterations: 5256\ncpu: 133129.0525114145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 134727.5178193069,
            "unit": "ns/iter",
            "extra": "iterations: 5191\ncpu: 134725.0818724707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 80424.80866132567,
            "unit": "ns/iter",
            "extra": "iterations: 8613\ncpu: 80423.917334262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 133859.62894428681,
            "unit": "ns/iter",
            "extra": "iterations: 5134\ncpu: 133859.36891312888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4208.772426249281,
            "unit": "ns/iter",
            "extra": "iterations: 164439\ncpu: 4208.71204519612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22293.38686830007,
            "unit": "ns/iter",
            "extra": "iterations: 31344\ncpu: 22293.520290964625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17300.979736574896,
            "unit": "ns/iter",
            "extra": "iterations: 40467\ncpu: 17300.6424988259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17357.11570330019,
            "unit": "ns/iter",
            "extra": "iterations: 40310\ncpu: 17357.08012900036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18047.23164423332,
            "unit": "ns/iter",
            "extra": "iterations: 37890\ncpu: 18046.545262602223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37716.45800581227,
            "unit": "ns/iter",
            "extra": "iterations: 18574\ncpu: 37716.7707548186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 150479.0732608695,
            "unit": "ns/iter",
            "extra": "iterations: 4600\ncpu: 150472.0434782623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 133083.03240030783,
            "unit": "ns/iter",
            "extra": "iterations: 5216\ncpu: 133083.9148773032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 132328.71774956977,
            "unit": "ns/iter",
            "extra": "iterations: 5279\ncpu: 132323.50824019738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 131769.75201802686,
            "unit": "ns/iter",
            "extra": "iterations: 5327\ncpu: 131770.8278580819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 80452.7020764079,
            "unit": "ns/iter",
            "extra": "iterations: 8717\ncpu: 80453.25226568656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 131783.5015980506,
            "unit": "ns/iter",
            "extra": "iterations: 5319\ncpu: 131772.7956382789 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}