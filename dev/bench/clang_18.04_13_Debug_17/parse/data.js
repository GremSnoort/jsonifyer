window.BENCHMARK_DATA = {
  "lastUpdate": 1702394278704,
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
        "date": 1702394272162,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7794.76571530458,
            "unit": "ns/iter",
            "extra": "iterations: 89801\ncpu: 7794.712753755526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57630.530200003705,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57629.33999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 105827.39300664242,
            "unit": "ns/iter",
            "extra": "iterations: 8122\ncpu: 105825.58483132231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 153154.08567865976,
            "unit": "ns/iter",
            "extra": "iterations: 5614\ncpu: 153151.38938368362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 201530.28647644792,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 201528.4852702388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 249128.50559860197,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 249114.78610393347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 299701.9103401187,
            "unit": "ns/iter",
            "extra": "iterations: 2911\ncpu: 299683.407763655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 345877.6941689595,
            "unit": "ns/iter",
            "extra": "iterations: 2521\ncpu: 345853.51051170164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 392900.8306997899,
            "unit": "ns/iter",
            "extra": "iterations: 2215\ncpu: 392885.68848758406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6626.007535510856,
            "unit": "ns/iter",
            "extra": "iterations: 106164\ncpu: 6626.021061753506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5487.674074771111,
            "unit": "ns/iter",
            "extra": "iterations: 127563\ncpu: 5487.562224155918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5466.708722487208,
            "unit": "ns/iter",
            "extra": "iterations: 128805\ncpu: 5466.596793602728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5452.8301961486995,
            "unit": "ns/iter",
            "extra": "iterations: 128831\ncpu: 5452.742740489477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9254.147384326707,
            "unit": "ns/iter",
            "extra": "iterations: 75449\ncpu: 9254.036501477825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30270.78014341711,
            "unit": "ns/iter",
            "extra": "iterations: 27054\ncpu: 30269.771567975138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 153515.96798424903,
            "unit": "ns/iter",
            "extra": "iterations: 5591\ncpu: 153505.741370059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 118075.34249033722,
            "unit": "ns/iter",
            "extra": "iterations: 7244\ncpu: 118069.22970734403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116456.4378496477,
            "unit": "ns/iter",
            "extra": "iterations: 7329\ncpu: 116449.07900122803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109637.05478035769,
            "unit": "ns/iter",
            "extra": "iterations: 7740\ncpu: 109629.56072351434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 347991.80161646777,
            "unit": "ns/iter",
            "extra": "iterations: 2722\ncpu: 347969.8016164591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1888060.1585365406,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1888009.3495934932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1482030.1261980142,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1481925.239616612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1473482.7603175535,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1473433.1746031747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1464068.078616239,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1463954.5597484238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 824171.3790035198,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 824129.7153024882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1433495.5479876185,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1433362.2291021654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 40288.28098285348,
            "unit": "ns/iter",
            "extra": "iterations: 20471\ncpu: 40286.25372478134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 188210.84470024746,
            "unit": "ns/iter",
            "extra": "iterations: 4604\ncpu: 188194.07037358763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 145839.43053202156,
            "unit": "ns/iter",
            "extra": "iterations: 5902\ncpu: 145829.31209759388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 146368.43549487667,
            "unit": "ns/iter",
            "extra": "iterations: 5860\ncpu: 146364.64163822515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 141168.471180833,
            "unit": "ns/iter",
            "extra": "iterations: 6055\ncpu: 141166.91990090802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 309082.38555080397,
            "unit": "ns/iter",
            "extra": "iterations: 2796\ncpu: 309079.32761087315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1932177.4161491184,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1932119.8757764015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1525014.8690671094,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1525006.873977077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1520499.666121239,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1520471.522094922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1489039.568000044,
            "unit": "ns/iter",
            "extra": "iterations: 625\ncpu: 1489021.1199999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 850500.4839302686,
            "unit": "ns/iter",
            "extra": "iterations: 1089\ncpu: 850487.9706152409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1474726.4556962713,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1474621.360759501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5412979.420000284,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5412775.000000068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3199062.839416247,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3199026.642335761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27374.668490299857,
            "unit": "ns/iter",
            "extra": "iterations: 29794\ncpu: 27374.689534805653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142594.37982689912,
            "unit": "ns/iter",
            "extra": "iterations: 6008\ncpu: 142592.5932090539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111782.95312703094,
            "unit": "ns/iter",
            "extra": "iterations: 7659\ncpu: 111781.86447316887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111334.40195695331,
            "unit": "ns/iter",
            "extra": "iterations: 7665\ncpu: 111327.27984344463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103360.16721311936,
            "unit": "ns/iter",
            "extra": "iterations: 8235\ncpu: 103358.26350941129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 268252.9083050429,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 268237.1719666569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1987963.2693110695,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1987894.154488515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1511632.9611649965,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1511532.524271841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1493049.5208333037,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1492969.230769225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1483088.9475357377,
            "unit": "ns/iter",
            "extra": "iterations: 629\ncpu: 1483057.869634345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 823231.7475642614,
            "unit": "ns/iter",
            "extra": "iterations: 1129\ncpu: 823206.2001771531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1472084.3312302667,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1471996.8454258626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3204.958630618693,
            "unit": "ns/iter",
            "extra": "iterations: 219486\ncpu: 3204.7620349361673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20789.97027847361,
            "unit": "ns/iter",
            "extra": "iterations: 33612\ncpu: 20789.28656432219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16602.190313793486,
            "unit": "ns/iter",
            "extra": "iterations: 42225\ncpu: 16601.612788632356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15842.35252808891,
            "unit": "ns/iter",
            "extra": "iterations: 44144\ncpu: 15841.896973541097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11734.492704768014,
            "unit": "ns/iter",
            "extra": "iterations: 59628\ncpu: 11733.92366002541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 104010.59215801384,
            "unit": "ns/iter",
            "extra": "iterations: 6733\ncpu: 103998.06921134771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 132189.90480678322,
            "unit": "ns/iter",
            "extra": "iterations: 5305\ncpu: 132179.3967954763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 31906.77180166595,
            "unit": "ns/iter",
            "extra": "iterations: 21902\ncpu: 31903.077344534773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 31851.01280345167,
            "unit": "ns/iter",
            "extra": "iterations: 21791\ncpu: 31849.240512137858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 31382.54951160392,
            "unit": "ns/iter",
            "extra": "iterations: 22318\ncpu: 31379.348507931063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64701.97077321893,
            "unit": "ns/iter",
            "extra": "iterations: 10812\ncpu: 64697.28079911247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 59670.94818917226,
            "unit": "ns/iter",
            "extra": "iterations: 11735\ncpu: 59668.214742224125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23532.20495890291,
            "unit": "ns/iter",
            "extra": "iterations: 29684\ncpu: 23531.313165341635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 114910.48504765455,
            "unit": "ns/iter",
            "extra": "iterations: 6086\ncpu: 114909.51363785593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 93923.86675621648,
            "unit": "ns/iter",
            "extra": "iterations: 7445\ncpu: 93913.90194761449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 93764.81602572893,
            "unit": "ns/iter",
            "extra": "iterations: 7463\ncpu: 93759.34610746327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 92367.92083114978,
            "unit": "ns/iter",
            "extra": "iterations: 7604\ncpu: 92360.48132561913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 165504.07112374683,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 165499.31247036715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 562856.4160643001,
            "unit": "ns/iter",
            "extra": "iterations: 1245\ncpu: 562848.4337349444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 458029.60117884027,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 458025.01637196424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 462451.1476821536,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 462437.4834437112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 457786.0137344379,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 457773.0542838526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 297177.62558437145,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 297171.3132171701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 453047.27472525614,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 453042.2107304448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23831.85275550525,
            "unit": "ns/iter",
            "extra": "iterations: 29305\ncpu: 23831.660126258128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 114050.79450495595,
            "unit": "ns/iter",
            "extra": "iterations: 6151\ncpu: 114048.18728662067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 94624.86310087777,
            "unit": "ns/iter",
            "extra": "iterations: 7385\ncpu: 94621.90927555713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 92991.51378579494,
            "unit": "ns/iter",
            "extra": "iterations: 7544\ncpu: 92988.65323435837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 94255.2636045223,
            "unit": "ns/iter",
            "extra": "iterations: 7424\ncpu: 94251.36045258654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 161387.88170310436,
            "unit": "ns/iter",
            "extra": "iterations: 4345\ncpu: 161380.48331415263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 559666.7166800168,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 559645.1715881897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 465008.2287798404,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 464993.4350132608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 462533.8152317641,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 462520.0662251686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 453379.12191956973,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 453359.27367055445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 288088.63486164366,
            "unit": "ns/iter",
            "extra": "iterations: 2421\ncpu: 288068.31887649815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 455833.1184124883,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 455813.272608981 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}