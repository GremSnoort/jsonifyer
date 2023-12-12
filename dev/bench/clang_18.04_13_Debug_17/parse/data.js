window.BENCHMARK_DATA = {
  "lastUpdate": 1702392431580,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-13 18.04 Debug c++-17": [
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
        "date": 1702392431214,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7998.150170256568,
            "unit": "ns/iter",
            "extra": "iterations: 87221\ncpu: 7997.836530193416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58397.38530000887,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58391.11 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 108075.38353941248,
            "unit": "ns/iter",
            "extra": "iterations: 8007\ncpu: 108067.82815036844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 156117.85996019977,
            "unit": "ns/iter",
            "extra": "iterations: 5527\ncpu: 156111.77854170438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 205330.06821411228,
            "unit": "ns/iter",
            "extra": "iterations: 4222\ncpu: 205322.71435338698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 268031.78550555586,
            "unit": "ns/iter",
            "extra": "iterations: 3422\ncpu: 268021.24488603167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 300600.20706317533,
            "unit": "ns/iter",
            "extra": "iterations: 2690\ncpu: 300584.6840148697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 352763.5218623476,
            "unit": "ns/iter",
            "extra": "iterations: 2470\ncpu: 352738.66396761156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 400222.89558416023,
            "unit": "ns/iter",
            "extra": "iterations: 2174\ncpu: 400213.4774609018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6552.849316736233,
            "unit": "ns/iter",
            "extra": "iterations: 106767\ncpu: 6552.563057873682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5442.0623003447035,
            "unit": "ns/iter",
            "extra": "iterations: 128972\ncpu: 5441.782712526759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5435.184645482985,
            "unit": "ns/iter",
            "extra": "iterations: 128809\ncpu: 5434.909051386155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5538.945732702986,
            "unit": "ns/iter",
            "extra": "iterations: 126743\ncpu: 5538.743757051661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9557.554551411968,
            "unit": "ns/iter",
            "extra": "iterations: 73252\ncpu: 9557.49058046195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 32494.963982211488,
            "unit": "ns/iter",
            "extra": "iterations: 25182\ncpu: 32493.876578508425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 156806.65461186602,
            "unit": "ns/iter",
            "extra": "iterations: 5475\ncpu: 156802.53881278555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 117214.20825853373,
            "unit": "ns/iter",
            "extra": "iterations: 7241\ncpu: 117211.33821295404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116878.46746128959,
            "unit": "ns/iter",
            "extra": "iterations: 7299\ncpu: 116874.88697081794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110872.44069117327,
            "unit": "ns/iter",
            "extra": "iterations: 7697\ncpu: 110866.3375341046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 363803.2065009872,
            "unit": "ns/iter",
            "extra": "iterations: 2615\ncpu: 363788.06883365207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1908282.8045268746,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1908187.4485596698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1510869.8825447932,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1510803.4257748805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1512500.8944804366,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1512405.0324675345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1513973.6871960878,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1513895.1377633736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 840948.1299999945,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 840894.545454544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1457221.9199371445,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1457165.620094196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 40509.17024495016,
            "unit": "ns/iter",
            "extra": "iterations: 20494\ncpu: 40507.670537718295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 195150.80292792534,
            "unit": "ns/iter",
            "extra": "iterations: 4440\ncpu: 195143.87387387408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 148210.76625173818,
            "unit": "ns/iter",
            "extra": "iterations: 5784\ncpu: 148206.36237897642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 146673.01945392485,
            "unit": "ns/iter",
            "extra": "iterations: 5860\ncpu: 146668.75426621208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 140910.58958297886,
            "unit": "ns/iter",
            "extra": "iterations: 6067\ncpu: 140905.4557441903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 334050.201771281,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 334019.29149018123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1944315.5157232354,
            "unit": "ns/iter",
            "extra": "iterations: 477\ncpu: 1944215.094339628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1543783.3741722917,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1543722.8476821228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1559413.2785235764,
            "unit": "ns/iter",
            "extra": "iterations: 596\ncpu: 1559318.4563758292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1539320.3056478146,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1539257.9734219252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 881330.7745556897,
            "unit": "ns/iter",
            "extra": "iterations: 1069\ncpu: 881302.9934518222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1503648.3624595704,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1503564.2394822084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5440033.079999012,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5439931.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3217117.662068725,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3217063.1034482745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28913.5060913136,
            "unit": "ns/iter",
            "extra": "iterations: 28319\ncpu: 28912.133196793693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 152171.39243876887,
            "unit": "ns/iter",
            "extra": "iterations: 5634\ncpu: 152164.7852325161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111322.64155132048,
            "unit": "ns/iter",
            "extra": "iterations: 7658\ncpu: 111319.96604857632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 112317.15124950897,
            "unit": "ns/iter",
            "extra": "iterations: 7643\ncpu: 112314.4053382177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105776.14395441159,
            "unit": "ns/iter",
            "extra": "iterations: 8072\ncpu: 105774.52923686792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 279403.473616483,
            "unit": "ns/iter",
            "extra": "iterations: 3108\ncpu: 279396.4607464591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1907921.9959016454,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1907850.0000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1494286.7795527852,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1494241.5335463178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1503438.6951612993,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1503392.096774192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1509456.1066236214,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1509412.439418409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 830658.0035650769,
            "unit": "ns/iter",
            "extra": "iterations: 1122\ncpu: 830595.0980392118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1454029.0420561002,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1453928.6604361301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3163.5118522915195,
            "unit": "ns/iter",
            "extra": "iterations: 220759\ncpu: 3163.34418981785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20201.556851984624,
            "unit": "ns/iter",
            "extra": "iterations: 34625\ncpu: 20200.410108303262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16526.529606039436,
            "unit": "ns/iter",
            "extra": "iterations: 42390\ncpu: 16525.543760320834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15738.351361073264,
            "unit": "ns/iter",
            "extra": "iterations: 44487\ncpu: 15737.864994268128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11918.683750508939,
            "unit": "ns/iter",
            "extra": "iterations: 58808\ncpu: 11918.604611617455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 104938.79733372404,
            "unit": "ns/iter",
            "extra": "iterations: 6676\ncpu: 104932.96884361914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 133748.70747125457,
            "unit": "ns/iter",
            "extra": "iterations: 5220\ncpu: 133739.96168582333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31818.215777473524,
            "unit": "ns/iter",
            "extra": "iterations: 21930\ncpu: 31815.927952576374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 32339.932433061775,
            "unit": "ns/iter",
            "extra": "iterations: 21549\ncpu: 32338.437978560745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 32265.08801877407,
            "unit": "ns/iter",
            "extra": "iterations: 21734\ncpu: 32263.329345725728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62858.67802996893,
            "unit": "ns/iter",
            "extra": "iterations: 11147\ncpu: 62855.81770880037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 60902.96414032002,
            "unit": "ns/iter",
            "extra": "iterations: 11545\ncpu: 60898.64876569981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23504.57236864406,
            "unit": "ns/iter",
            "extra": "iterations: 29785\ncpu: 23503.202954507055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 114822.23510097532,
            "unit": "ns/iter",
            "extra": "iterations: 6091\ncpu: 114820.16089312053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 92688.19503451756,
            "unit": "ns/iter",
            "extra": "iterations: 7532\ncpu: 92685.43547530494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93464.5731267445,
            "unit": "ns/iter",
            "extra": "iterations: 7487\ncpu: 93459.31614798907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 91602.33633987494,
            "unit": "ns/iter",
            "extra": "iterations: 7650\ncpu: 91596.66666666715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 168085.05851317703,
            "unit": "ns/iter",
            "extra": "iterations: 4170\ncpu: 168076.69064748095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 559605.0767999259,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 559581.7600000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 469208.8777703591,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 469194.62726662436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 469897.66599602374,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 469880.3487592191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 468180.57965196046,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 468172.55689424125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 303046.7621527835,
            "unit": "ns/iter",
            "extra": "iterations: 2304\ncpu: 303038.3680555576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 459039.17859493825,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 459019.5666447823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23091.995968273593,
            "unit": "ns/iter",
            "extra": "iterations: 30260\ncpu: 23091.22934567064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113780.42404548955,
            "unit": "ns/iter",
            "extra": "iterations: 6155\ncpu: 113778.55402112025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93648.32459541273,
            "unit": "ns/iter",
            "extra": "iterations: 7477\ncpu: 93644.6836966694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91091.56915656592,
            "unit": "ns/iter",
            "extra": "iterations: 7671\ncpu: 91088.25446486844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92301.2202475003,
            "unit": "ns/iter",
            "extra": "iterations: 7596\ncpu: 92296.59031068956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 167203.5113392173,
            "unit": "ns/iter",
            "extra": "iterations: 4189\ncpu: 167196.27596084974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 562249.7951612382,
            "unit": "ns/iter",
            "extra": "iterations: 1240\ncpu: 562233.5483870929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 469227.83322167175,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 469199.9999999923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 464695.0398142241,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 464666.15792966017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 469042.9240000261,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 468989.46666667034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 297081.7171331542,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 297063.9949109407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 460605.3992146781,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 460596.53141360875 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}