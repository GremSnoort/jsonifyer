window.BENCHMARK_DATA = {
  "lastUpdate": 1702396460842,
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
        "date": 1702382253782,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 919.1023708973503,
            "unit": "ns/iter",
            "extra": "iterations: 762707\ncpu: 919.0506970566679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19059.984541018788,
            "unit": "ns/iter",
            "extra": "iterations: 43858\ncpu: 19059.250307811573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43857.58554760425,
            "unit": "ns/iter",
            "extra": "iterations: 20398\ncpu: 43856.18197862535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 55157.30829999938,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55154.10000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 66614.98756965064,
            "unit": "ns/iter",
            "extra": "iterations: 11665\ncpu: 66611.21303043293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 82682.09577598312,
            "unit": "ns/iter",
            "extra": "iterations: 10535\ncpu: 82676.630280019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 98654.4491477595,
            "unit": "ns/iter",
            "extra": "iterations: 8859\ncpu: 98650.53617789812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 114499.20738299261,
            "unit": "ns/iter",
            "extra": "iterations: 7585\ncpu: 114494.84508899135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 146249.30221686375,
            "unit": "ns/iter",
            "extra": "iterations: 6631\ncpu: 146239.23993364483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 762.5591142336465,
            "unit": "ns/iter",
            "extra": "iterations: 921191\ncpu: 762.5234071978556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 613.0540145665875,
            "unit": "ns/iter",
            "extra": "iterations: 1143710\ncpu: 613.0521723164085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 620.6596086842319,
            "unit": "ns/iter",
            "extra": "iterations: 1131107\ncpu: 620.6204187579066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 609.1372112042147,
            "unit": "ns/iter",
            "extra": "iterations: 1151852\ncpu: 609.1065518834024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1289.803695044185,
            "unit": "ns/iter",
            "extra": "iterations: 544892\ncpu: 1289.7579703867905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5162.0661200001905,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5161.988999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24343.793029085748,
            "unit": "ns/iter",
            "extra": "iterations: 34314\ncpu: 24343.70227895315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21536.334178252848,
            "unit": "ns/iter",
            "extra": "iterations: 39057\ncpu: 21535.811762296114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20809.81884039833,
            "unit": "ns/iter",
            "extra": "iterations: 39893\ncpu: 20809.500413606405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21600.96121028084,
            "unit": "ns/iter",
            "extra": "iterations: 38206\ncpu: 21600.429251950027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 50462.230299996234,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50462.07000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 609389.7589999528,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609350.3999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 612755.0775194071,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 612728.1183932346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 600217.3593530131,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 600200.4922644165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 606125.3725085683,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 606107.6288659803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 358485.2728764747,
            "unit": "ns/iter",
            "extra": "iterations: 2437\ncpu: 358473.2457940085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 521700.1139999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521699.2000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2787093.0032467977,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 2786962.3376623327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1205486.8963794822,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 1205460.9238451922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3438218.0071941176,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3438062.230215821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5189.756319999788,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5189.595000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 24222.33151806074,
            "unit": "ns/iter",
            "extra": "iterations: 33971\ncpu: 24221.22104147656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 21145.92152292041,
            "unit": "ns/iter",
            "extra": "iterations: 38610\ncpu: 21145.66692566692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20703.261247926333,
            "unit": "ns/iter",
            "extra": "iterations: 39185\ncpu: 20702.868444557927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 21212.391617382018,
            "unit": "ns/iter",
            "extra": "iterations: 38890\ncpu: 21212.185651838492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 50394.76860000037,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50393.009999999806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 605514.2820000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605490.5000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 505521.8819999823,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505520.2999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 500585.8670000407,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500565.199999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 628274.9359430936,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 628258.7188612086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 355704.9060975529,
            "unit": "ns/iter",
            "extra": "iterations: 2460\ncpu: 355697.23577235773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 618424.0307907428,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 618409.0972708162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2914018.608695711,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2913864.285714286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1192272.1382316556,
            "unit": "ns/iter",
            "extra": "iterations: 803\ncpu: 1192239.4769613934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5260.0035747695065,
            "unit": "ns/iter",
            "extra": "iterations: 149660\ncpu: 5259.917145529843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24529.762223964914,
            "unit": "ns/iter",
            "extra": "iterations: 34461\ncpu: 24528.530802936562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19578.99318081373,
            "unit": "ns/iter",
            "extra": "iterations: 42967\ncpu: 19578.22049479845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 19085.425644399747,
            "unit": "ns/iter",
            "extra": "iterations: 44072\ncpu: 19084.341532038503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19334.13036606004,
            "unit": "ns/iter",
            "extra": "iterations: 43654\ncpu: 19333.33944197559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 58533.02998079229,
            "unit": "ns/iter",
            "extra": "iterations: 14576\ncpu: 58529.9670691546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 595900.1389999798,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595869.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 619279.6067179546,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 619252.4842547219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 609610.2378640636,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 609590.9847434136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 607302.8873531431,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 607284.4505874226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 362968.98048780666,
            "unit": "ns/iter",
            "extra": "iterations: 2460\ncpu: 362958.94308943115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 620377.7120055534,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 620356.6273421238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 303.05140378575516,
            "unit": "ns/iter",
            "extra": "iterations: 2296718\ncpu: 303.04974315523367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2368.101589853128,
            "unit": "ns/iter",
            "extra": "iterations: 293612\ncpu: 2368.0353664019294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1907.301946583325,
            "unit": "ns/iter",
            "extra": "iterations: 367002\ncpu: 1907.2718949760363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1941.7178206094277,
            "unit": "ns/iter",
            "extra": "iterations: 371480\ncpu: 1941.632927748454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1476.9113684942527,
            "unit": "ns/iter",
            "extra": "iterations: 474865\ncpu: 1476.8485780169035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10783.744360902389,
            "unit": "ns/iter",
            "extra": "iterations: 65170\ncpu: 10783.171704772205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 31237.352406943435,
            "unit": "ns/iter",
            "extra": "iterations: 22352\ncpu: 31236.278632784528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7319.748976420914,
            "unit": "ns/iter",
            "extra": "iterations: 95254\ncpu: 7319.49944359295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7186.645012766643,
            "unit": "ns/iter",
            "extra": "iterations: 97519\ncpu: 7185.978117084862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7298.015198129945,
            "unit": "ns/iter",
            "extra": "iterations: 97512\ncpu: 7297.736688817742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15394.924832629722,
            "unit": "ns/iter",
            "extra": "iterations: 45259\ncpu: 15394.266333768159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14246.116457718897,
            "unit": "ns/iter",
            "extra": "iterations: 48816\ncpu: 14245.62438544748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3231.4984144131267,
            "unit": "ns/iter",
            "extra": "iterations: 214747\ncpu: 3231.2260473953233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15980.313798626905,
            "unit": "ns/iter",
            "extra": "iterations: 43700\ncpu: 15979.544622425872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13176.519252922062,
            "unit": "ns/iter",
            "extra": "iterations: 52953\ncpu: 13175.914490208372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13034.810439305584,
            "unit": "ns/iter",
            "extra": "iterations: 53835\ncpu: 13034.386551500025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13555.46988376281,
            "unit": "ns/iter",
            "extra": "iterations: 51102\ncpu: 13554.999804312929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 31912.656154675413,
            "unit": "ns/iter",
            "extra": "iterations: 22292\ncpu: 31910.573299838903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 137770.4401990053,
            "unit": "ns/iter",
            "extra": "iterations: 5025\ncpu: 137769.87064676604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 119646.8252595139,
            "unit": "ns/iter",
            "extra": "iterations: 5780\ncpu: 119643.66782007061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 119759.09131326295,
            "unit": "ns/iter",
            "extra": "iterations: 5848\ncpu: 119754.92476060177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 119784.37115515397,
            "unit": "ns/iter",
            "extra": "iterations: 5852\ncpu: 119777.25563909729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 70020.32741065939,
            "unit": "ns/iter",
            "extra": "iterations: 10018\ncpu: 70017.25893391899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 118183.64043604376,
            "unit": "ns/iter",
            "extra": "iterations: 5871\ncpu: 118179.44132175126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3205.1942231211683,
            "unit": "ns/iter",
            "extra": "iterations: 218007\ncpu: 3205.0136004807728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15766.261409747469,
            "unit": "ns/iter",
            "extra": "iterations: 43866\ncpu: 15766.005562394459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12967.391011820631,
            "unit": "ns/iter",
            "extra": "iterations: 53804\ncpu: 12966.61400639355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12950.565352449314,
            "unit": "ns/iter",
            "extra": "iterations: 54405\ncpu: 12949.982538369826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13401.327438197222,
            "unit": "ns/iter",
            "extra": "iterations: 52303\ncpu: 13400.565933120448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30822.275874204075,
            "unit": "ns/iter",
            "extra": "iterations: 22735\ncpu: 30821.293160325178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 137088.5673039397,
            "unit": "ns/iter",
            "extra": "iterations: 5126\ncpu: 137081.89621537132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 120268.11548331812,
            "unit": "ns/iter",
            "extra": "iterations: 5845\ncpu: 120261.16338751135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 118136.48482307057,
            "unit": "ns/iter",
            "extra": "iterations: 5963\ncpu: 118132.50041925158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 119527.4739627834,
            "unit": "ns/iter",
            "extra": "iterations: 5857\ncpu: 119523.08348984146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 70378.27358490777,
            "unit": "ns/iter",
            "extra": "iterations: 9964\ncpu: 70377.9706945008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 118150.53917752778,
            "unit": "ns/iter",
            "extra": "iterations: 5909\ncpu: 118142.61296327667 ns\nthreads: 1"
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
        "date": 1702387057754,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 935.2021347993037,
            "unit": "ns/iter",
            "extra": "iterations: 747986\ncpu: 935.1883591404119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18933.29981830547,
            "unit": "ns/iter",
            "extra": "iterations: 44030\ncpu: 18932.393822393824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43598.694948812685,
            "unit": "ns/iter",
            "extra": "iterations: 20708\ncpu: 43596.68727062004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54715.244300001585,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54715.31 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 66136.36514522714,
            "unit": "ns/iter",
            "extra": "iterations: 12050\ncpu: 66134.78008298752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 82214.48365148088,
            "unit": "ns/iter",
            "extra": "iterations: 10582\ncpu: 82207.83405783406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 98674.78422535295,
            "unit": "ns/iter",
            "extra": "iterations: 8875\ncpu: 98670.68169014079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 115344.71220280926,
            "unit": "ns/iter",
            "extra": "iterations: 7613\ncpu: 115334.79574412183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 146031.64460192702,
            "unit": "ns/iter",
            "extra": "iterations: 6632\ncpu: 146026.65862484922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 792.5791357254377,
            "unit": "ns/iter",
            "extra": "iterations: 883261\ncpu: 792.5291618219285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 636.9846837173028,
            "unit": "ns/iter",
            "extra": "iterations: 1100724\ncpu: 636.9452287766961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 671.6327761094385,
            "unit": "ns/iter",
            "extra": "iterations: 1110565\ncpu: 671.6239931926551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 636.1043079490723,
            "unit": "ns/iter",
            "extra": "iterations: 1131304\ncpu: 636.0792501396623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1258.1527514350262,
            "unit": "ns/iter",
            "extra": "iterations: 561507\ncpu: 1258.1166396857027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5133.875669999952,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5133.383000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24076.693473193638,
            "unit": "ns/iter",
            "extra": "iterations: 33462\ncpu: 24075.862172015986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21301.81676542689,
            "unit": "ns/iter",
            "extra": "iterations: 39152\ncpu: 21301.271965672247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20809.334762023147,
            "unit": "ns/iter",
            "extra": "iterations: 40130\ncpu: 20808.74906553696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 22206.664981334467,
            "unit": "ns/iter",
            "extra": "iterations: 34019\ncpu: 22204.306417002284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 50059.77579999694,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50059.78999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 618744.8130000348,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 618510.9000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 610521.2743732517,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 610494.7075208927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 608203.7416666945,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 608172.8472222226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 612416.8448275998,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 612392.4137931023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 359240.56408162514,
            "unit": "ns/iter",
            "extra": "iterations: 2450\ncpu: 359228.9795918365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 606485.7224546939,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 606445.1882845188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2780759.497092994,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2780589.2441860484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1172631.2730582308,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 1172546.7233009727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3406275.7184116007,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3406160.6498194872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5128.8369999997485,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5128.602999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 24164.632900082997,
            "unit": "ns/iter",
            "extra": "iterations: 34699\ncpu: 24163.624311939857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 21195.993265222805,
            "unit": "ns/iter",
            "extra": "iterations: 39348\ncpu: 21194.724001219904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20704.95293707428,
            "unit": "ns/iter",
            "extra": "iterations: 40159\ncpu: 20704.225702831267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 21421.52151689638,
            "unit": "ns/iter",
            "extra": "iterations: 38737\ncpu: 21420.60562253152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 59317.25049631279,
            "unit": "ns/iter",
            "extra": "iterations: 14104\ncpu: 59315.73312535485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 621094.5930000093,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 619630.799999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 502253.4789999895,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502245.699999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 626486.8884181032,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 626435.9463276828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 625810.3649893613,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 625790.5031892305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 355980.8953535351,
            "unit": "ns/iter",
            "extra": "iterations: 2475\ncpu: 355972.36363636365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 617256.7513927674,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 617202.0891364923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2895924.5474007293,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2895784.0978593295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1209503.075544167,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 1209417.6696542848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5223.0791348033,
            "unit": "ns/iter",
            "extra": "iterations: 152474\ncpu: 5222.992772538289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24274.96513057774,
            "unit": "ns/iter",
            "extra": "iterations: 34156\ncpu: 24274.127532497998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19507.837815600422,
            "unit": "ns/iter",
            "extra": "iterations: 42538\ncpu: 19506.26733743948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18896.918680615952,
            "unit": "ns/iter",
            "extra": "iterations: 43778\ncpu: 18896.97108136514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19108.616881914888,
            "unit": "ns/iter",
            "extra": "iterations: 43206\ncpu: 19108.015090496654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 59069.23871692172,
            "unit": "ns/iter",
            "extra": "iterations: 14247\ncpu: 59066.95444655051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 595455.200999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595438.5999999943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 623482.6558533293,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 623467.559943586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 617567.5506638774,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 617526.2753319353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 617608.5939902248,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 617566.3172606577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 358918.2366935331,
            "unit": "ns/iter",
            "extra": "iterations: 2480\ncpu: 358910.28225806286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 617786.1180167361,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 617744.9022346392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 305.9930856181333,
            "unit": "ns/iter",
            "extra": "iterations: 2292902\ncpu: 305.99162109850107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2404.342105534288,
            "unit": "ns/iter",
            "extra": "iterations: 291109\ncpu: 2404.315565647241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1843.6083139562504,
            "unit": "ns/iter",
            "extra": "iterations: 379314\ncpu: 1843.5570529956665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1863.8690511175275,
            "unit": "ns/iter",
            "extra": "iterations: 374314\ncpu: 1863.7379312555645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1474.5275801687671,
            "unit": "ns/iter",
            "extra": "iterations: 474000\ncpu: 1474.4765822784868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10776.396237733552,
            "unit": "ns/iter",
            "extra": "iterations: 65014\ncpu: 10775.640631248627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 31512.30766807611,
            "unit": "ns/iter",
            "extra": "iterations: 22222\ncpu: 31511.430114301023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7321.153916239561,
            "unit": "ns/iter",
            "extra": "iterations: 95487\ncpu: 7320.715908971927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7302.42772000781,
            "unit": "ns/iter",
            "extra": "iterations: 95974\ncpu: 7302.282909954877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7270.00255552565,
            "unit": "ns/iter",
            "extra": "iterations: 96262\ncpu: 7269.640148760687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15272.715362510693,
            "unit": "ns/iter",
            "extra": "iterations: 45240\ncpu: 15271.684350132797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14355.09192251839,
            "unit": "ns/iter",
            "extra": "iterations: 48889\ncpu: 14354.535785145814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3266.0878316816534,
            "unit": "ns/iter",
            "extra": "iterations: 214023\ncpu: 3265.8176924909644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16323.718889657783,
            "unit": "ns/iter",
            "extra": "iterations: 43410\ncpu: 16322.957843814629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13579.816007751686,
            "unit": "ns/iter",
            "extra": "iterations: 51600\ncpu: 13578.854651162723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13518.17109411003,
            "unit": "ns/iter",
            "extra": "iterations: 52024\ncpu: 13517.776410887504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13959.375927403204,
            "unit": "ns/iter",
            "extra": "iterations: 50140\ncpu: 13959.192261667304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 31406.234032990273,
            "unit": "ns/iter",
            "extra": "iterations: 22249\ncpu: 31405.47440334422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 139227.4089004168,
            "unit": "ns/iter",
            "extra": "iterations: 5011\ncpu: 139226.20235482077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 119259.46735217853,
            "unit": "ns/iter",
            "extra": "iterations: 5835\ncpu: 119254.24164524366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 120207.29832076136,
            "unit": "ns/iter",
            "extra": "iterations: 5836\ncpu: 120174.34886908738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 120640.29172461288,
            "unit": "ns/iter",
            "extra": "iterations: 5752\ncpu: 120630.44158553482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 69902.95449078274,
            "unit": "ns/iter",
            "extra": "iterations: 9976\ncpu: 69899.28829190052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 119654.3487301909,
            "unit": "ns/iter",
            "extra": "iterations: 5867\ncpu: 119644.80995397813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3205.2691713090244,
            "unit": "ns/iter",
            "extra": "iterations: 218634\ncpu: 3205.192696469903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15865.709395698925,
            "unit": "ns/iter",
            "extra": "iterations: 44084\ncpu: 15865.098448416767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12910.262917736463,
            "unit": "ns/iter",
            "extra": "iterations: 54131\ncpu: 12909.730099203796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12951.735871416135,
            "unit": "ns/iter",
            "extra": "iterations: 54004\ncpu: 12951.594326346318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13395.80656386982,
            "unit": "ns/iter",
            "extra": "iterations: 52012\ncpu: 13395.156886872344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30660.964412343244,
            "unit": "ns/iter",
            "extra": "iterations: 22845\ncpu: 30659.916830815968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 135827.23273155218,
            "unit": "ns/iter",
            "extra": "iterations: 5096\ncpu: 135817.62166405196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 118743.7540595363,
            "unit": "ns/iter",
            "extra": "iterations: 5912\ncpu: 118738.78552097421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 116587.90656982854,
            "unit": "ns/iter",
            "extra": "iterations: 6058\ncpu: 116584.31825685147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 118816.70037199867,
            "unit": "ns/iter",
            "extra": "iterations: 5914\ncpu: 118816.70612106794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 68931.23983819697,
            "unit": "ns/iter",
            "extra": "iterations: 10136\ncpu: 68928.67008681799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 116600.64037433256,
            "unit": "ns/iter",
            "extra": "iterations: 5984\ncpu: 116591.17647058988 ns\nthreads: 1"
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
        "date": 1702391118750,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 913.8709372033946,
            "unit": "ns/iter",
            "extra": "iterations: 765821\ncpu: 913.8296024789082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18990.38773459978,
            "unit": "ns/iter",
            "extra": "iterations: 43798\ncpu: 18989.06571076305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43848.57882099123,
            "unit": "ns/iter",
            "extra": "iterations: 20407\ncpu: 43846.77806634979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 55094.762800001714,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55091.54 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 66665.58400267617,
            "unit": "ns/iter",
            "extra": "iterations: 11952\ncpu: 66664.4494645248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 84273.70854319455,
            "unit": "ns/iter",
            "extra": "iterations: 10523\ncpu: 84267.93690012353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 100407.22805212937,
            "unit": "ns/iter",
            "extra": "iterations: 8748\ncpu: 100400.6287151349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 116051.15830576043,
            "unit": "ns/iter",
            "extra": "iterations: 7555\ncpu: 116048.28590337525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 147626.25837904325,
            "unit": "ns/iter",
            "extra": "iterations: 6564\ncpu: 147615.99634369274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 738.0089591103878,
            "unit": "ns/iter",
            "extra": "iterations: 930896\ncpu: 737.9369983327891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 594.5829785606425,
            "unit": "ns/iter",
            "extra": "iterations: 1176575\ncpu: 594.5402545524081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 604.9239565569737,
            "unit": "ns/iter",
            "extra": "iterations: 1157562\ncpu: 604.9007310191605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 601.7105107109469,
            "unit": "ns/iter",
            "extra": "iterations: 1168665\ncpu: 601.6800366229844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1252.8619790130963,
            "unit": "ns/iter",
            "extra": "iterations: 559683\ncpu: 1252.740926560213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5136.856679999937,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5136.694000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23877.075981033056,
            "unit": "ns/iter",
            "extra": "iterations: 34377\ncpu: 23876.17302266051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19765.10458657763,
            "unit": "ns/iter",
            "extra": "iterations: 41229\ncpu: 19763.99379077833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20704.93052371833,
            "unit": "ns/iter",
            "extra": "iterations: 39697\ncpu: 20703.375569942313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21290.46552851344,
            "unit": "ns/iter",
            "extra": "iterations: 39772\ncpu: 21289.60826712253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 50095.30689999906,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50092.150000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 622081.7440000132,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621790.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 605401.3868254992,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 605351.7869656624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 610856.5479833216,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 610832.6147426985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 605351.5793814455,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 605253.470790379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 357230.5216503322,
            "unit": "ns/iter",
            "extra": "iterations: 2448\ncpu: 357207.0261437911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 615166.7991572875,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 615123.1741573031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2802992.3923303788,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2802685.545722713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1183534.2571075964,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1183462.793572313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3401421.134545382,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3401104.0000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5205.278500000077,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5204.692000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23914.55223109132,
            "unit": "ns/iter",
            "extra": "iterations: 34826\ncpu: 23912.40452535464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 21009.655697409773,
            "unit": "ns/iter",
            "extra": "iterations: 39869\ncpu: 21008.364895031224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20545.178962691585,
            "unit": "ns/iter",
            "extra": "iterations: 40528\ncpu: 20543.347808922197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 21213.55142621362,
            "unit": "ns/iter",
            "extra": "iterations: 38774\ncpu: 21212.25047712386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 50163.49169999899,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50161.469999999754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 615155.3120000131,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 615058.4999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 512452.74199999357,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512437.0999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 625856.5456475483,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 625762.6326963919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 623990.7542372652,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 623951.4124293771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 352802.67079999705,
            "unit": "ns/iter",
            "extra": "iterations: 2500\ncpu: 352778.9200000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 615353.9234550273,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 615306.1095505612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2903333.98159501,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2903226.9938650327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1187849.4313968008,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1187735.2286773778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5400.846906716652,
            "unit": "ns/iter",
            "extra": "iterations: 146414\ncpu: 5400.426871747239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 25560.386364336293,
            "unit": "ns/iter",
            "extra": "iterations: 32503\ncpu: 25559.50835307507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 20270.610652552972,
            "unit": "ns/iter",
            "extra": "iterations: 41192\ncpu: 20269.535346669236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18981.987320314576,
            "unit": "ns/iter",
            "extra": "iterations: 44244\ncpu: 18981.287858240805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19185.58821644321,
            "unit": "ns/iter",
            "extra": "iterations: 43688\ncpu: 19184.645669291407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 60013.566885734115,
            "unit": "ns/iter",
            "extra": "iterations: 14151\ncpu: 60008.755564977735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 600541.8469999881,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600439.8999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 629911.8938428768,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 629853.3616418956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 614947.1046430905,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 614930.0762300763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 611732.8655172263,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 611691.7241379299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 362409.2641353737,
            "unit": "ns/iter",
            "extra": "iterations: 2423\ncpu: 362392.5711927362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 618243.9686192541,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 618230.7531380717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 303.2142714085892,
            "unit": "ns/iter",
            "extra": "iterations: 2316758\ncpu: 303.19722646905876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2386.494581737471,
            "unit": "ns/iter",
            "extra": "iterations: 293452\ncpu: 2386.421629431733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1774.411155069023,
            "unit": "ns/iter",
            "extra": "iterations: 394063\ncpu: 1774.3302466864473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1914.7900581284603,
            "unit": "ns/iter",
            "extra": "iterations: 366430\ncpu: 1914.7280517424995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1490.8981890065443,
            "unit": "ns/iter",
            "extra": "iterations: 470460\ncpu: 1490.843854950474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10910.188166767513,
            "unit": "ns/iter",
            "extra": "iterations: 64209\ncpu: 10909.646622747548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 31611.89745556247,
            "unit": "ns/iter",
            "extra": "iterations: 22166\ncpu: 31610.773256338543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7363.402190217425,
            "unit": "ns/iter",
            "extra": "iterations: 95333\ncpu: 7362.906863310736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7277.132082731112,
            "unit": "ns/iter",
            "extra": "iterations: 96167\ncpu: 7276.800773654082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7235.600141719742,
            "unit": "ns/iter",
            "extra": "iterations: 95964\ncpu: 7235.32678921274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15453.890352921355,
            "unit": "ns/iter",
            "extra": "iterations: 45081\ncpu: 15452.960227146834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14154.059650270001,
            "unit": "ns/iter",
            "extra": "iterations: 48952\ncpu: 14153.523860108002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3209.363596386678,
            "unit": "ns/iter",
            "extra": "iterations: 218308\ncpu: 3209.2488594096394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16230.264414945761,
            "unit": "ns/iter",
            "extra": "iterations: 43167\ncpu: 16229.661547015055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13216.455844596985,
            "unit": "ns/iter",
            "extra": "iterations: 52972\ncpu: 13215.408140149653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13076.191688632576,
            "unit": "ns/iter",
            "extra": "iterations: 53493\ncpu: 13075.563157796432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13697.000956452577,
            "unit": "ns/iter",
            "extra": "iterations: 51231\ncpu: 13695.975093205161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 31259.826036609484,
            "unit": "ns/iter",
            "extra": "iterations: 22453\ncpu: 31259.662405914958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 144307.45346453672,
            "unit": "ns/iter",
            "extra": "iterations: 4878\ncpu: 144305.02255022601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 122961.75696513505,
            "unit": "ns/iter",
            "extra": "iterations: 5707\ncpu: 122959.3832135978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 120997.0781303935,
            "unit": "ns/iter",
            "extra": "iterations: 5798\ncpu: 120996.51604001573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 122021.91010259313,
            "unit": "ns/iter",
            "extra": "iterations: 5751\ncpu: 122012.69344461848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 70959.31217838774,
            "unit": "ns/iter",
            "extra": "iterations: 9911\ncpu: 70955.4737160728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 120045.43525981753,
            "unit": "ns/iter",
            "extra": "iterations: 5831\ncpu: 120038.72406105453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3191.2727828970073,
            "unit": "ns/iter",
            "extra": "iterations: 219002\ncpu: 3191.104190829259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15773.68679474732,
            "unit": "ns/iter",
            "extra": "iterations: 44399\ncpu: 15772.677312552112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13016.566625803218,
            "unit": "ns/iter",
            "extra": "iterations: 53838\ncpu: 13016.107582005054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12726.291049242032,
            "unit": "ns/iter",
            "extra": "iterations: 55135\ncpu: 12725.526435113668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13358.773849970949,
            "unit": "ns/iter",
            "extra": "iterations: 52390\ncpu: 13358.091238786226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30791.872250572633,
            "unit": "ns/iter",
            "extra": "iterations: 22732\ncpu: 30790.64754531064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 138156.2394366255,
            "unit": "ns/iter",
            "extra": "iterations: 5041\ncpu: 138148.8196786367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 118067.47054710494,
            "unit": "ns/iter",
            "extra": "iterations: 5721\ncpu: 118061.03828002122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 115466.7875391457,
            "unit": "ns/iter",
            "extra": "iterations: 6067\ncpu: 115455.21674633278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 117210.24088933184,
            "unit": "ns/iter",
            "extra": "iterations: 5982\ncpu: 117207.63958542283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 70064.20259740212,
            "unit": "ns/iter",
            "extra": "iterations: 10010\ncpu: 70061.63836163725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 117964.5933086826,
            "unit": "ns/iter",
            "extra": "iterations: 5948\ncpu: 117960.02017484985 ns\nthreads: 1"
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
        "date": 1702391737942,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 905.928937321771,
            "unit": "ns/iter",
            "extra": "iterations: 766422\ncpu: 905.7467035132081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18689.009470802586,
            "unit": "ns/iter",
            "extra": "iterations: 44558\ncpu: 18688.29166479645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43091.45688012352,
            "unit": "ns/iter",
            "extra": "iterations: 20988\ncpu: 43088.27901658091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54012.58579999535,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54011.64 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 65570.27516059838,
            "unit": "ns/iter",
            "extra": "iterations: 12142\ncpu: 65565.32696425628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 81570.62552673198,
            "unit": "ns/iter",
            "extra": "iterations: 10679\ncpu: 81564.5659705965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 98589.22404494356,
            "unit": "ns/iter",
            "extra": "iterations: 8900\ncpu: 98581.48314606746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 115490.90278507827,
            "unit": "ns/iter",
            "extra": "iterations: 7612\ncpu: 115485.50972149245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 147051.11262902428,
            "unit": "ns/iter",
            "extra": "iterations: 6588\ncpu: 147038.99514268362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 746.5828370041828,
            "unit": "ns/iter",
            "extra": "iterations: 928987\ncpu: 746.5325133720927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 610.0409613783114,
            "unit": "ns/iter",
            "extra": "iterations: 1142027\ncpu: 609.986804164875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 604.4355882652834,
            "unit": "ns/iter",
            "extra": "iterations: 1157522\ncpu: 604.4178857939644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 608.051679720045,
            "unit": "ns/iter",
            "extra": "iterations: 1161384\ncpu: 608.009667775688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1217.550442641384,
            "unit": "ns/iter",
            "extra": "iterations: 573602\ncpu: 1217.447986583032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5133.148669999628,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5132.919999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22499.7376584074,
            "unit": "ns/iter",
            "extra": "iterations: 37009\ncpu: 22498.605744548648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20238.28228085645,
            "unit": "ns/iter",
            "extra": "iterations: 42107\ncpu: 20236.85372978364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20581.407101179466,
            "unit": "ns/iter",
            "extra": "iterations: 40275\ncpu: 20580.6306641837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20958.852600371316,
            "unit": "ns/iter",
            "extra": "iterations: 40475\ncpu: 20956.99814700433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 59299.13566708996,
            "unit": "ns/iter",
            "extra": "iterations: 14226\ncpu: 59298.530858990525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 603000.4309999981,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602977.1000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 609322.1198026903,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 609308.7385482729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 610818.1399579886,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 610795.6613016102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 605555.520308138,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 605535.6442577027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 357369.45668970206,
            "unit": "ns/iter",
            "extra": "iterations: 2459\ncpu: 357344.7742984955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 606861.0374739515,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 606859.7501734898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2759860.213450305,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2759646.1988304155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1150184.6614832182,
            "unit": "ns/iter",
            "extra": "iterations: 836\ncpu: 1150135.5263157894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3396927.7168459017,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3396679.569892466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5162.723700000242,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5162.565999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 24220.285627302554,
            "unit": "ns/iter",
            "extra": "iterations: 34489\ncpu: 24219.28151004669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 21258.20288378247,
            "unit": "ns/iter",
            "extra": "iterations: 39254\ncpu: 21258.15967799457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20811.783048289624,
            "unit": "ns/iter",
            "extra": "iterations: 39760\ncpu: 20810.746981891287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 21498.105151601685,
            "unit": "ns/iter",
            "extra": "iterations: 38687\ncpu: 21496.799958642445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 50096.15289999942,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50095.18999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 601610.2919999753,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601549.300000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 504710.2969999742,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504709.400000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 625548.3181818455,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 625504.4034090929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 614267.2498250435,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 614235.129461165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 355492.92149758764,
            "unit": "ns/iter",
            "extra": "iterations: 2484\ncpu: 355474.79871175636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 620136.4231578896,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 620085.3333333319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2902379.8926381213,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2902328.8343558186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1247617.880201726,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 1247579.3190416142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5206.146538100119,
            "unit": "ns/iter",
            "extra": "iterations: 149961\ncpu: 5205.647468341745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24218.751100556336,
            "unit": "ns/iter",
            "extra": "iterations: 34528\ncpu: 24217.530699721883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19857.990977227706,
            "unit": "ns/iter",
            "extra": "iterations: 41894\ncpu: 19856.86255788424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18985.75835201967,
            "unit": "ns/iter",
            "extra": "iterations: 44151\ncpu: 18984.83613055201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19139.90858771157,
            "unit": "ns/iter",
            "extra": "iterations: 42817\ncpu: 19138.491720578288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 58671.961611207815,
            "unit": "ns/iter",
            "extra": "iterations: 14275\ncpu: 58668.63747810871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 602469.3890000207,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602450.900000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 624680.3211267825,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 624646.5492957743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 617594.9135888498,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 617548.1533101049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 613444.0766526189,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 613376.0196905765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 359170.8317073178,
            "unit": "ns/iter",
            "extra": "iterations: 2460\ncpu: 359152.64227642334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 615518.0257301978,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 615472.948539639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 306.01012075952895,
            "unit": "ns/iter",
            "extra": "iterations: 2270877\ncpu: 306.00499278472614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2426.299384528745,
            "unit": "ns/iter",
            "extra": "iterations: 287747\ncpu: 2426.1959290626796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1793.2984376840168,
            "unit": "ns/iter",
            "extra": "iterations: 390574\ncpu: 1793.140096370972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1891.2884045120663,
            "unit": "ns/iter",
            "extra": "iterations: 373309\ncpu: 1891.1446013892105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1481.7514937096962,
            "unit": "ns/iter",
            "extra": "iterations: 472314\ncpu: 1481.6660103236486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10933.42484994729,
            "unit": "ns/iter",
            "extra": "iterations: 64644\ncpu: 10932.692902666913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 31181.19992897875,
            "unit": "ns/iter",
            "extra": "iterations: 22528\ncpu: 31179.674183238458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7282.372153851263,
            "unit": "ns/iter",
            "extra": "iterations: 95963\ncpu: 7281.5616435500315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7307.758615973881,
            "unit": "ns/iter",
            "extra": "iterations: 95056\ncpu: 7307.537662009747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7291.059887350196,
            "unit": "ns/iter",
            "extra": "iterations: 95162\ncpu: 7290.582375317959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15529.281598637437,
            "unit": "ns/iter",
            "extra": "iterations: 44638\ncpu: 15528.318921098375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14277.239022597136,
            "unit": "ns/iter",
            "extra": "iterations: 48987\ncpu: 14276.383530324258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3223.23608068246,
            "unit": "ns/iter",
            "extra": "iterations: 216354\ncpu: 3222.9993436682557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16135.352203568766,
            "unit": "ns/iter",
            "extra": "iterations: 43543\ncpu: 16134.363732402382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13191.387910078389,
            "unit": "ns/iter",
            "extra": "iterations: 53069\ncpu: 13190.350298667674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13122.259033881965,
            "unit": "ns/iter",
            "extra": "iterations: 53244\ncpu: 13122.017504319982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13592.667291434618,
            "unit": "ns/iter",
            "extra": "iterations: 51219\ncpu: 13592.202112497329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 31227.594793713215,
            "unit": "ns/iter",
            "extra": "iterations: 22396\ncpu: 31226.68780139283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 141762.0462006071,
            "unit": "ns/iter",
            "extra": "iterations: 4935\ncpu: 141753.23201621062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 121361.17325017352,
            "unit": "ns/iter",
            "extra": "iterations: 5772\ncpu: 121352.06167706143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 121937.21273641808,
            "unit": "ns/iter",
            "extra": "iterations: 5763\ncpu: 121930.27936838332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 122880.31402922058,
            "unit": "ns/iter",
            "extra": "iterations: 5681\ncpu: 122871.55430382078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 70105.73125188304,
            "unit": "ns/iter",
            "extra": "iterations: 9961\ncpu: 70104.74851922534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 118454.11284575136,
            "unit": "ns/iter",
            "extra": "iterations: 5893\ncpu: 118452.2823689131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3168.3579165035726,
            "unit": "ns/iter",
            "extra": "iterations: 219554\ncpu: 3168.3522049245275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15766.785901847583,
            "unit": "ns/iter",
            "extra": "iterations: 44176\ncpu: 15766.579137993689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12888.89047391439,
            "unit": "ns/iter",
            "extra": "iterations: 54398\ncpu: 12887.828596639407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12761.973847591078,
            "unit": "ns/iter",
            "extra": "iterations: 54603\ncpu: 12760.267750856232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13410.8102034919,
            "unit": "ns/iter",
            "extra": "iterations: 51845\ncpu: 13409.948886103053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30894.74401660163,
            "unit": "ns/iter",
            "extra": "iterations: 22646\ncpu: 30892.329771262444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 136076.8195856169,
            "unit": "ns/iter",
            "extra": "iterations: 5116\ncpu: 136056.84128225117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 119340.98542023472,
            "unit": "ns/iter",
            "extra": "iterations: 5830\ncpu: 119336.15780445887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 117971.56679494263,
            "unit": "ns/iter",
            "extra": "iterations: 5457\ncpu: 117969.54370533222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 118260.81164787286,
            "unit": "ns/iter",
            "extra": "iterations: 5941\ncpu: 118252.7015653927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 69606.44518437667,
            "unit": "ns/iter",
            "extra": "iterations: 10061\ncpu: 69602.39538813166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 116872.98645032164,
            "unit": "ns/iter",
            "extra": "iterations: 5978\ncpu: 116864.4529943133 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702396460118,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 911.5327493852449,
            "unit": "ns/iter",
            "extra": "iterations: 770274\ncpu: 911.4944811846174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18920.59672257734,
            "unit": "ns/iter",
            "extra": "iterations: 44059\ncpu: 18920.295512835062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 44134.83519182613,
            "unit": "ns/iter",
            "extra": "iterations: 20357\ncpu: 44133.75742987671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54426.46530000274,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54426.43 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 66312.35553904352,
            "unit": "ns/iter",
            "extra": "iterations: 12114\ncpu: 66310.88822849594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 82953.73139832016,
            "unit": "ns/iter",
            "extra": "iterations: 10577\ncpu: 82949.36182282318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 99586.48776880174,
            "unit": "ns/iter",
            "extra": "iterations: 8789\ncpu: 99580.11150301511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 115706.45198039422,
            "unit": "ns/iter",
            "extra": "iterations: 7549\ncpu: 115701.51013379257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 144887.7572948337,
            "unit": "ns/iter",
            "extra": "iterations: 6580\ncpu: 144885.80547112462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 742.3957091073746,
            "unit": "ns/iter",
            "extra": "iterations: 933279\ncpu: 742.3690021954851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 602.8402682008455,
            "unit": "ns/iter",
            "extra": "iterations: 1165992\ncpu: 602.8308084446545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 595.859477090744,
            "unit": "ns/iter",
            "extra": "iterations: 1172058\ncpu: 595.8547273257805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 598.8233816378838,
            "unit": "ns/iter",
            "extra": "iterations: 1172698\ncpu: 598.8202418696031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1253.686962587653,
            "unit": "ns/iter",
            "extra": "iterations: 557649\ncpu: 1253.6882519290782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5159.788050000316,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5159.377999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24083.257147869088,
            "unit": "ns/iter",
            "extra": "iterations: 34206\ncpu: 24082.848038355834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20979.287690779885,
            "unit": "ns/iter",
            "extra": "iterations: 39247\ncpu: 20978.49771957094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20553.86855554974,
            "unit": "ns/iter",
            "extra": "iterations: 40306\ncpu: 20553.867910484834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21282.2611661732,
            "unit": "ns/iter",
            "extra": "iterations: 38845\ncpu: 21281.39014030124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 58814.76545100197,
            "unit": "ns/iter",
            "extra": "iterations: 14368\ncpu: 58813.55094654777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 623194.0260000215,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 623028.2000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 617528.018413596,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 617517.0679886665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 610009.5278939878,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 609994.5606694563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 610030.1022964724,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 610003.2707028525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 361816.5775113591,
            "unit": "ns/iter",
            "extra": "iterations: 2419\ncpu: 361807.35841256764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 613916.0261484216,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 613891.6607773844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2793234.499999953,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2793094.674556211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1203260.741488023,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 1203261.6645649415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3428647.3862815723,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3428469.675090256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5220.499199999722,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5220.500000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23895.67936203631,
            "unit": "ns/iter",
            "extra": "iterations: 34422\ncpu: 23894.657486491167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 19865.166080359588,
            "unit": "ns/iter",
            "extra": "iterations: 41787\ncpu: 19864.69954770623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20628.859976140833,
            "unit": "ns/iter",
            "extra": "iterations: 40236\ncpu: 20627.99980117314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 21318.211515803654,
            "unit": "ns/iter",
            "extra": "iterations: 39042\ncpu: 21317.42994723641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 59609.64283188197,
            "unit": "ns/iter",
            "extra": "iterations: 14139\ncpu: 59606.563406181514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 612374.6360000268,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 612374.299999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 509304.7710000178,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509278.9000000053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 503559.3179999864,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503532.5000000057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 500655.3310000186,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500635.299999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 357074.17704121117,
            "unit": "ns/iter",
            "extra": "iterations: 2474\ncpu: 357059.1754244159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 621274.8691062471,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 621260.3800140773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2928875.9006211036,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2928743.167701856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1215002.3444302427,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 1214954.1613316266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5365.350701348929,
            "unit": "ns/iter",
            "extra": "iterations: 147858\ncpu: 5365.138849436635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24488.222916116163,
            "unit": "ns/iter",
            "extra": "iterations: 34107\ncpu: 24487.052511214708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19642.92775773104,
            "unit": "ns/iter",
            "extra": "iterations: 42399\ncpu: 19642.03636878233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 19252.734113519415,
            "unit": "ns/iter",
            "extra": "iterations: 43323\ncpu: 19252.09011379642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19447.267069866873,
            "unit": "ns/iter",
            "extra": "iterations: 42824\ncpu: 19446.126004109767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 58927.35058840321,
            "unit": "ns/iter",
            "extra": "iterations: 14276\ncpu: 58924.43961894128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 596124.1869999866,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 596117.7000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 629531.5493257754,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 629494.6770759403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 511387.3440000134,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511373.8999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 616783.2247034097,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 616746.9644103304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 360575.9049737264,
            "unit": "ns/iter",
            "extra": "iterations: 2473\ncpu: 360561.98948645184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 621293.1556802476,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 621266.9705469838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 354.4716766533208,
            "unit": "ns/iter",
            "extra": "iterations: 1972966\ncpu: 354.46515550698643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2401.8554481562915,
            "unit": "ns/iter",
            "extra": "iterations: 285849\ncpu: 2401.7561719649298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1921.7397541605376,
            "unit": "ns/iter",
            "extra": "iterations: 362269\ncpu: 1921.6317156588152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1929.886722676997,
            "unit": "ns/iter",
            "extra": "iterations: 362076\ncpu: 1929.833515615499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1518.034475280939,
            "unit": "ns/iter",
            "extra": "iterations: 461142\ncpu: 1518.020479591973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10406.173639342238,
            "unit": "ns/iter",
            "extra": "iterations: 65924\ncpu: 10405.315211455638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 29907.368506423933,
            "unit": "ns/iter",
            "extra": "iterations: 23427\ncpu: 29905.92905621731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7304.278156730168,
            "unit": "ns/iter",
            "extra": "iterations: 96025\ncpu: 7303.747982296219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7288.243580268463,
            "unit": "ns/iter",
            "extra": "iterations: 96071\ncpu: 7288.170207450769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7276.320759438415,
            "unit": "ns/iter",
            "extra": "iterations: 95913\ncpu: 7275.976145048039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15326.404272981357,
            "unit": "ns/iter",
            "extra": "iterations: 45776\ncpu: 15325.535214959647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 12892.041831362727,
            "unit": "ns/iter",
            "extra": "iterations: 53381\ncpu: 12891.779846762083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3238.248564798948,
            "unit": "ns/iter",
            "extra": "iterations: 216346\ncpu: 3238.201769387897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16007.89546942537,
            "unit": "ns/iter",
            "extra": "iterations: 43681\ncpu: 16007.751654037154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13259.651515724567,
            "unit": "ns/iter",
            "extra": "iterations: 52846\ncpu: 13259.393331567246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13171.678543225607,
            "unit": "ns/iter",
            "extra": "iterations: 53186\ncpu: 13171.342082502877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13686.82719568872,
            "unit": "ns/iter",
            "extra": "iterations: 51214\ncpu: 13686.599367360548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 31176.469265033433,
            "unit": "ns/iter",
            "extra": "iterations: 22450\ncpu: 31176.14699331796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 139349.2032649816,
            "unit": "ns/iter",
            "extra": "iterations: 5023\ncpu: 139345.15229942184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 119777.24142661586,
            "unit": "ns/iter",
            "extra": "iterations: 5832\ncpu: 119774.55418381447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 120838.52015156657,
            "unit": "ns/iter",
            "extra": "iterations: 5806\ncpu: 120836.58284533287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 120987.57692307881,
            "unit": "ns/iter",
            "extra": "iterations: 5798\ncpu: 120984.6153846155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 69921.65304902768,
            "unit": "ns/iter",
            "extra": "iterations: 10036\ncpu: 69920.99442008762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 119963.29538831097,
            "unit": "ns/iter",
            "extra": "iterations: 5833\ncpu: 119959.98628493148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3196.79311170022,
            "unit": "ns/iter",
            "extra": "iterations: 217296\ncpu: 3196.6925300051885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15649.053861766473,
            "unit": "ns/iter",
            "extra": "iterations: 44837\ncpu: 15648.870352610485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12933.72841456054,
            "unit": "ns/iter",
            "extra": "iterations: 53821\ncpu: 12933.122758774556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13129.216974386956,
            "unit": "ns/iter",
            "extra": "iterations: 54541\ncpu: 13116.226325149817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13362.799083022925,
            "unit": "ns/iter",
            "extra": "iterations: 52564\ncpu: 13362.042462521846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30739.300114145495,
            "unit": "ns/iter",
            "extra": "iterations: 22778\ncpu: 30738.44060057947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 138826.97540492122,
            "unit": "ns/iter",
            "extra": "iterations: 5001\ncpu: 138818.83623275286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 120172.43755384618,
            "unit": "ns/iter",
            "extra": "iterations: 5805\ncpu: 120168.92334194572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 118387.69946092852,
            "unit": "ns/iter",
            "extra": "iterations: 5936\ncpu: 118385.1246630729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 120988.77028196582,
            "unit": "ns/iter",
            "extra": "iterations: 5781\ncpu: 120986.4383324669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 69106.89741046335,
            "unit": "ns/iter",
            "extra": "iterations: 10079\ncpu: 69105.0004960812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 119711.7223637248,
            "unit": "ns/iter",
            "extra": "iterations: 5889\ncpu: 119704.63576158948 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}