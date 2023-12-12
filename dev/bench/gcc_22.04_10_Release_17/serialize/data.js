window.BENCHMARK_DATA = {
  "lastUpdate": 1702382254103,
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
      }
    ]
  }
}