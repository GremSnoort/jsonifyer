window.BENCHMARK_DATA = {
  "lastUpdate": 1702381111442,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-10 22.04 Release c++-17": [
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
        "date": 1702381111011,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 910.5467990809792,
            "unit": "ns/iter",
            "extra": "iterations: 777761\ncpu: 910.4991121951344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18746.80011294434,
            "unit": "ns/iter",
            "extra": "iterations: 44270\ncpu: 18745.87531059408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43411.925759171725,
            "unit": "ns/iter",
            "extra": "iterations: 20878\ncpu: 43408.70773062553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54221.85589999913,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54218.71999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 65441.499015750414,
            "unit": "ns/iter",
            "extra": "iterations: 12192\ncpu: 65440.83005249347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 81870.78157919305,
            "unit": "ns/iter",
            "extra": "iterations: 10727\ncpu: 81862.45921506485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 98081.50448731941,
            "unit": "ns/iter",
            "extra": "iterations: 8914\ncpu: 98077.51851020865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 113865.13593627523,
            "unit": "ns/iter",
            "extra": "iterations: 7658\ncpu: 113855.94149908591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 145112.58418061843,
            "unit": "ns/iter",
            "extra": "iterations: 6688\ncpu: 145107.35645933016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 732.6488064999716,
            "unit": "ns/iter",
            "extra": "iterations: 954713\ncpu: 732.5968118167449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 596.6888797553615,
            "unit": "ns/iter",
            "extra": "iterations: 1175163\ncpu: 596.6577402453962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 591.6095962759134,
            "unit": "ns/iter",
            "extra": "iterations: 1176769\ncpu: 591.5875588157063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 597.0381379802781,
            "unit": "ns/iter",
            "extra": "iterations: 1166239\ncpu: 597.0250523263253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1240.2882101271957,
            "unit": "ns/iter",
            "extra": "iterations: 562364\ncpu: 1240.3018329765068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5138.64725000019,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5138.236999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24105.968765436373,
            "unit": "ns/iter",
            "extra": "iterations: 34417\ncpu: 24104.584943487225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21148.299946817704,
            "unit": "ns/iter",
            "extra": "iterations: 39487\ncpu: 21146.92683668044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20743.37355805212,
            "unit": "ns/iter",
            "extra": "iterations: 40050\ncpu: 20742.45193508118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21359.474028181878,
            "unit": "ns/iter",
            "extra": "iterations: 38253\ncpu: 21358.243797872026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 59532.58456219595,
            "unit": "ns/iter",
            "extra": "iterations: 14173\ncpu: 59529.71847879769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 621366.6110000417,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621086.6000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 611073.3840682801,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 611075.7467994308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 612207.1749824082,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 612190.0210822211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 609205.2823943582,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 609191.8309859154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 360246.3650469707,
            "unit": "ns/iter",
            "extra": "iterations: 2449\ncpu: 360241.77215189853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 611642.5715287582,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 611615.2173913022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2778671.0678466028,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2778578.7610619445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1177234.1186650335,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1177208.6526576001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3430697.1949459426,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3430637.545126348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5128.928839999958,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5128.826000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23995.341828221583,
            "unit": "ns/iter",
            "extra": "iterations: 34766\ncpu: 23994.560777771385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 21154.35937499995,
            "unit": "ns/iter",
            "extra": "iterations: 39552\ncpu: 21154.05036407765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20653.962191510906,
            "unit": "ns/iter",
            "extra": "iterations: 40520\ncpu: 20653.524185587437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 21434.17570432375,
            "unit": "ns/iter",
            "extra": "iterations: 39151\ncpu: 21433.86375826933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 58573.07434119294,
            "unit": "ns/iter",
            "extra": "iterations: 14420\ncpu: 58571.26213592234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 606848.8989999992,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606843.0000000049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 508271.7760000151,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508265.60000000143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 622352.2514124212,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 622344.0677966124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 626611.1002132135,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 626587.8464818753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 356433.42387821246,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 356431.2500000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 617647.1632653053,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 617639.8311048559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2932103.66769227,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2932004.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1227180.611901718,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 1227132.4708926273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5241.667761910722,
            "unit": "ns/iter",
            "extra": "iterations: 150347\ncpu: 5241.527932050546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24696.37829620563,
            "unit": "ns/iter",
            "extra": "iterations: 34206\ncpu: 24696.19949716427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19661.031649097487,
            "unit": "ns/iter",
            "extra": "iterations: 41265\ncpu: 19660.419241488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 19205.517731310156,
            "unit": "ns/iter",
            "extra": "iterations: 43567\ncpu: 19205.38251428841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19379.291822937543,
            "unit": "ns/iter",
            "extra": "iterations: 43194\ncpu: 19378.83502338283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 58071.45509642003,
            "unit": "ns/iter",
            "extra": "iterations: 14520\ncpu: 58069.710743801515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 601534.0370000217,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601529.3000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 628791.3040685045,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 628777.6588151287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 619668.9444835086,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 619652.3541813056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 616911.3598326283,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 616894.769874479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 363779.04702969576,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 363766.83168317046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 621125.7928621361,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 621116.0251924394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 302.54134821193713,
            "unit": "ns/iter",
            "extra": "iterations: 2313123\ncpu: 302.5280540637056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2372.6405899306146,
            "unit": "ns/iter",
            "extra": "iterations: 294950\ncpu: 2372.625529750809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1920.6957256423268,
            "unit": "ns/iter",
            "extra": "iterations: 364546\ncpu: 1920.6292210036547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1865.3623525268115,
            "unit": "ns/iter",
            "extra": "iterations: 374729\ncpu: 1865.3269429374243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1455.1980394561112,
            "unit": "ns/iter",
            "extra": "iterations: 481091\ncpu: 1455.1365542069964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10639.150833993426,
            "unit": "ns/iter",
            "extra": "iterations: 65708\ncpu: 10638.884154136384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 31124.035817575877,
            "unit": "ns/iter",
            "extra": "iterations: 22475\ncpu: 31122.696329255185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7279.8830119854465,
            "unit": "ns/iter",
            "extra": "iterations: 95950\ncpu: 7279.723814486647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7248.270354970966,
            "unit": "ns/iter",
            "extra": "iterations: 96684\ncpu: 7248.206528484434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7248.745482550595,
            "unit": "ns/iter",
            "extra": "iterations: 96736\ncpu: 7248.359452530722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15537.073072318593,
            "unit": "ns/iter",
            "extra": "iterations: 45106\ncpu: 15536.961823260592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14380.651146931104,
            "unit": "ns/iter",
            "extra": "iterations: 48390\ncpu: 14380.23351932212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3176.4544551466156,
            "unit": "ns/iter",
            "extra": "iterations: 215425\ncpu: 3176.3147267030063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16033.432943706066,
            "unit": "ns/iter",
            "extra": "iterations: 43717\ncpu: 16032.408445227287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13180.329961191816,
            "unit": "ns/iter",
            "extra": "iterations: 53082\ncpu: 13179.863230473571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13088.98556255218,
            "unit": "ns/iter",
            "extra": "iterations: 53195\ncpu: 13088.895572892134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13603.226105910388,
            "unit": "ns/iter",
            "extra": "iterations: 51383\ncpu: 13602.627328104529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 31150.60423242633,
            "unit": "ns/iter",
            "extra": "iterations: 22493\ncpu: 31150.331214155238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 140523.0608067442,
            "unit": "ns/iter",
            "extra": "iterations: 4983\ncpu: 140516.23519967726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 120726.20265151984,
            "unit": "ns/iter",
            "extra": "iterations: 5808\ncpu: 120723.0888429761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 119432.60876236403,
            "unit": "ns/iter",
            "extra": "iterations: 5866\ncpu: 119429.21922945889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 122065.33152744269,
            "unit": "ns/iter",
            "extra": "iterations: 5722\ncpu: 122063.50926249674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 70701.29621043976,
            "unit": "ns/iter",
            "extra": "iterations: 9922\ncpu: 70700.7760532144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 118754.6687595435,
            "unit": "ns/iter",
            "extra": "iterations: 5893\ncpu: 118750.31393178375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3225.237289304623,
            "unit": "ns/iter",
            "extra": "iterations: 217494\ncpu: 3225.213569109926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15830.434619385576,
            "unit": "ns/iter",
            "extra": "iterations: 44218\ncpu: 15829.879234700771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13068.47863072816,
            "unit": "ns/iter",
            "extra": "iterations: 53722\ncpu: 13068.147127805987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13044.685626512462,
            "unit": "ns/iter",
            "extra": "iterations: 53710\ncpu: 13044.189164028885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13576.27435742963,
            "unit": "ns/iter",
            "extra": "iterations: 51473\ncpu: 13576.001010238333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30818.345992493145,
            "unit": "ns/iter",
            "extra": "iterations: 22645\ncpu: 30816.052108633143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 138005.0402923184,
            "unit": "ns/iter",
            "extra": "iterations: 5063\ncpu: 137999.62472842235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 119806.02019165194,
            "unit": "ns/iter",
            "extra": "iterations: 5844\ncpu: 119799.09308692624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 118340.22293531963,
            "unit": "ns/iter",
            "extra": "iterations: 5921\ncpu: 118335.83854078653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 119588.24351978205,
            "unit": "ns/iter",
            "extra": "iterations: 5864\ncpu: 119588.5914051842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 69775.71579576806,
            "unit": "ns/iter",
            "extra": "iterations: 10028\ncpu: 69772.41723175145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 118219.61565716335,
            "unit": "ns/iter",
            "extra": "iterations: 5927\ncpu: 118215.1847477647 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}