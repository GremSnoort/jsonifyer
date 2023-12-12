window.BENCHMARK_DATA = {
  "lastUpdate": 1702382250157,
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
      }
    ]
  }
}