window.BENCHMARK_DATA = {
  "lastUpdate": 1702479541186,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-8 20.04 Release c++-17": [
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
        "date": 1702397895816,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1795.5121400015994,
            "unit": "ns/iter",
            "extra": "iterations: 367710\ncpu: 1795.3697207038158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26853.900347774863,
            "unit": "ns/iter",
            "extra": "iterations: 30767\ncpu: 26852.806578476942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 55024.99497354499,
            "unit": "ns/iter",
            "extra": "iterations: 15120\ncpu: 55022.47354497356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 68480.1757518785,
            "unit": "ns/iter",
            "extra": "iterations: 12768\ncpu: 68475.22713032586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 94550.5028901741,
            "unit": "ns/iter",
            "extra": "iterations: 9688\ncpu: 94546.9859620149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 117879.99770518532,
            "unit": "ns/iter",
            "extra": "iterations: 7408\ncpu: 117875.76943844499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 143314.08215848316,
            "unit": "ns/iter",
            "extra": "iterations: 6171\ncpu: 143311.06789823365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 164125.37471655416,
            "unit": "ns/iter",
            "extra": "iterations: 5292\ncpu: 164120.8805744519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 190060.5690134822,
            "unit": "ns/iter",
            "extra": "iterations: 4673\ncpu: 190055.44618018414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1570.1557467238074,
            "unit": "ns/iter",
            "extra": "iterations: 445332\ncpu: 1570.0877098434403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1275.8811907860957,
            "unit": "ns/iter",
            "extra": "iterations: 549385\ncpu: 1275.8502689370828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1243.4744149317069,
            "unit": "ns/iter",
            "extra": "iterations: 559721\ncpu: 1243.4309236208737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1284.7511507955014,
            "unit": "ns/iter",
            "extra": "iterations: 544406\ncpu: 1284.7220640477872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2299.9297758517387,
            "unit": "ns/iter",
            "extra": "iterations: 305066\ncpu: 2299.9147725410253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9737.956064744072,
            "unit": "ns/iter",
            "extra": "iterations: 84579\ncpu: 9737.894749287652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 50143.5434177058,
            "unit": "ns/iter",
            "extra": "iterations: 16514\ncpu: 50142.806103911855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37134.362694300464,
            "unit": "ns/iter",
            "extra": "iterations: 22195\ncpu: 37133.66523991892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 38977.29828061153,
            "unit": "ns/iter",
            "extra": "iterations: 21054\ncpu: 38976.37028593152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 37370.24868787309,
            "unit": "ns/iter",
            "extra": "iterations: 21911\ncpu: 37369.27114234853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 93077.92277583864,
            "unit": "ns/iter",
            "extra": "iterations: 9453\ncpu: 93075.45752671109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 862056.7969034626,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 862025.6830601089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 696574.4556776616,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 696555.8974358956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 696542.9845246963,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 696521.444362564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 692532.3732446578,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 692506.2823355508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 493993.68785151804,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 493972.1597300343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 690615.5208333449,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 690584.0029761927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3723645.637795291,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3723499.2125984244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1628511.4505119363,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1628427.9863481256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4804251.476923144,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4804045.64102564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12897.07367649514,
            "unit": "ns/iter",
            "extra": "iterations: 65489\ncpu: 12896.376490708357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 55630.093700000325,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55626.96999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 50417.11530827199,
            "unit": "ns/iter",
            "extra": "iterations: 16625\ncpu: 50414.97744360868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 52432.8746132953,
            "unit": "ns/iter",
            "extra": "iterations: 15839\ncpu: 52432.84929604124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 50312.19048197937,
            "unit": "ns/iter",
            "extra": "iterations: 16453\ncpu: 50310.520877651514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 102388.22390011845,
            "unit": "ns/iter",
            "extra": "iterations: 8410\ncpu: 102384.10225921463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 883706.4488636308,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 883665.8143939427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 716033.3270106288,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 716000.2276176009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 712271.512102884,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 712248.5627836611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 709097.2600454912,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 709069.9772554985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 503092.37186787947,
            "unit": "ns/iter",
            "extra": "iterations: 1756\ncpu: 503078.9863325751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 704884.6255605463,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 704861.8834080702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3868509.469135768,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3868334.567901217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1689387.3756613529,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1689294.356261023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 8659.28653575709,
            "unit": "ns/iter",
            "extra": "iterations: 95995\ncpu: 8659.042658471806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 49283.71283278407,
            "unit": "ns/iter",
            "extra": "iterations: 16715\ncpu: 49282.60843553696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 39824.5088315533,
            "unit": "ns/iter",
            "extra": "iterations: 20891\ncpu: 39823.49815710091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 39697.726482665596,
            "unit": "ns/iter",
            "extra": "iterations: 20942\ncpu: 39697.35459841464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 40130.599276585635,
            "unit": "ns/iter",
            "extra": "iterations: 20735\ncpu: 40129.97829756434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 88962.23605680154,
            "unit": "ns/iter",
            "extra": "iterations: 9718\ncpu: 88960.29018316485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 873671.2986301448,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 873660.5479452063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 698703.0956263959,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 698693.2542624194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 693655.3806734936,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 693645.3147877003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 691187.3887261923,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 691171.5226939925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 494099.42033896886,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 494092.76836158335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 696079.1747996833,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 696065.4042243232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 689.8526854630752,
            "unit": "ns/iter",
            "extra": "iterations: 1020904\ncpu: 689.8400829069175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4911.288042144026,
            "unit": "ns/iter",
            "extra": "iterations: 142559\ncpu: 4911.203782293625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3751.1085572634342,
            "unit": "ns/iter",
            "extra": "iterations: 186777\ncpu: 3751.1063996102207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3890.556496050277,
            "unit": "ns/iter",
            "extra": "iterations: 185836\ncpu: 3890.492692481556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2864.376725611836,
            "unit": "ns/iter",
            "extra": "iterations: 243899\ncpu: 2864.3516373580987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 23967.03664706696,
            "unit": "ns/iter",
            "extra": "iterations: 29252\ncpu: 23966.460412962995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 48478.61574266737,
            "unit": "ns/iter",
            "extra": "iterations: 14394\ncpu: 48478.14367097447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11343.48015661954,
            "unit": "ns/iter",
            "extra": "iterations: 62061\ncpu: 11343.276776075052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 11437.379232949892,
            "unit": "ns/iter",
            "extra": "iterations: 61039\ncpu: 11437.374465505558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 11400.165702398781,
            "unit": "ns/iter",
            "extra": "iterations: 61532\ncpu: 11399.860235324868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 23189.710351912257,
            "unit": "ns/iter",
            "extra": "iterations: 30178\ncpu: 23189.40287626738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 22607.945610347564,
            "unit": "ns/iter",
            "extra": "iterations: 30925\ncpu: 22607.534357316246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 7049.956378377222,
            "unit": "ns/iter",
            "extra": "iterations: 99171\ncpu: 7049.846225207071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 34655.83084181797,
            "unit": "ns/iter",
            "extra": "iterations: 20135\ncpu: 34654.76036751949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 27246.94724806064,
            "unit": "ns/iter",
            "extra": "iterations: 25800\ncpu: 27246.492248062237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 27367.30990676042,
            "unit": "ns/iter",
            "extra": "iterations: 25740\ncpu: 27366.857031856925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 27994.431977670694,
            "unit": "ns/iter",
            "extra": "iterations: 25080\ncpu: 27993.951355661873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 59183.898368143324,
            "unit": "ns/iter",
            "extra": "iterations: 11827\ncpu: 59182.71751078086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 222673.087053575,
            "unit": "ns/iter",
            "extra": "iterations: 3136\ncpu: 222669.0688775518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 186352.4046786837,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 186350.73944608547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 183899.1954748835,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 183893.9489607985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 185227.9242785202,
            "unit": "ns/iter",
            "extra": "iterations: 3777\ncpu: 185227.77336510507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 110286.84505269844,
            "unit": "ns/iter",
            "extra": "iterations: 6357\ncpu: 110284.77269152131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 182947.043421403,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 182945.20010462948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6383.259946803728,
            "unit": "ns/iter",
            "extra": "iterations: 109030\ncpu: 6383.161515179211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 35719.84041867205,
            "unit": "ns/iter",
            "extra": "iterations: 20159\ncpu: 35719.24202589394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 27562.161346192366,
            "unit": "ns/iter",
            "extra": "iterations: 25405\ncpu: 27561.424916355063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 28013.13405115606,
            "unit": "ns/iter",
            "extra": "iterations: 24983\ncpu: 28012.688628267475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 29337.373492971,
            "unit": "ns/iter",
            "extra": "iterations: 23971\ncpu: 29336.919611196983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 59947.28156004148,
            "unit": "ns/iter",
            "extra": "iterations: 11692\ncpu: 59945.843311666635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 214726.86373423363,
            "unit": "ns/iter",
            "extra": "iterations: 3251\ncpu: 214722.54690864496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 184122.0105124888,
            "unit": "ns/iter",
            "extra": "iterations: 3805\ncpu: 184115.58475690085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 183052.1058091271,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 183050.1815352711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 183043.46741689902,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 183038.15755037795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 109079.72015748481,
            "unit": "ns/iter",
            "extra": "iterations: 6350\ncpu: 109079.65354330663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 183085.34410843565,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 183079.87486965576 ns\nthreads: 1"
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
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409122944,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1692.6484199070371,
            "unit": "ns/iter",
            "extra": "iterations: 411653\ncpu: 1692.619997910862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25670.106885123547,
            "unit": "ns/iter",
            "extra": "iterations: 32287\ncpu: 25668.18224053025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 52824.95471890044,
            "unit": "ns/iter",
            "extra": "iterations: 15724\ncpu: 52822.704146527576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 65667.44192698601,
            "unit": "ns/iter",
            "extra": "iterations: 13285\ncpu: 65665.94655626648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 92734.44632315895,
            "unit": "ns/iter",
            "extra": "iterations: 9995\ncpu: 92732.44622311156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115264.80474235059,
            "unit": "ns/iter",
            "extra": "iterations: 7549\ncpu: 115261.21340574918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 140751.88528481437,
            "unit": "ns/iter",
            "extra": "iterations: 6320\ncpu: 140746.48734177218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 162494.9868346816,
            "unit": "ns/iter",
            "extra": "iterations: 5317\ncpu: 162489.82508933617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 185352.80803851815,
            "unit": "ns/iter",
            "extra": "iterations: 4777\ncpu: 185346.13774335338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1465.2777103801407,
            "unit": "ns/iter",
            "extra": "iterations: 477267\ncpu: 1465.2473353489763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1219.8441437951128,
            "unit": "ns/iter",
            "extra": "iterations: 575569\ncpu: 1219.8250774451024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1199.8572023264283,
            "unit": "ns/iter",
            "extra": "iterations: 583735\ncpu: 1199.7634200450548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1188.4118668283425,
            "unit": "ns/iter",
            "extra": "iterations: 582346\ncpu: 1188.345244923121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2335.894372638291,
            "unit": "ns/iter",
            "extra": "iterations: 299572\ncpu: 2335.7526738146403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9454.31886822661,
            "unit": "ns/iter",
            "extra": "iterations: 87544\ncpu: 9453.648451064593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 48512.75928738368,
            "unit": "ns/iter",
            "extra": "iterations: 17120\ncpu: 48417.272196261765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 35626.50038957684,
            "unit": "ns/iter",
            "extra": "iterations: 23102\ncpu: 35624.91992035318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 35838.044439597914,
            "unit": "ns/iter",
            "extra": "iterations: 22930\ncpu: 35836.81203663328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 35567.3891013776,
            "unit": "ns/iter",
            "extra": "iterations: 23269\ncpu: 35566.05784520177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 91506.49146792335,
            "unit": "ns/iter",
            "extra": "iterations: 9728\ncpu: 91505.03700657884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 831847.0970350556,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 831831.626235399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 674704.3393763498,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 674665.8448150831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 663989.5194804891,
            "unit": "ns/iter",
            "extra": "iterations: 1386\ncpu: 663986.6522366512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 672600.4906340103,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 672560.9510086447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 488441.3705981156,
            "unit": "ns/iter",
            "extra": "iterations: 1789\ncpu: 488421.6880939073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 670253.1681222877,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 670221.9796215418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3643221.1445314167,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3643101.1718750102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1623368.342105299,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1623221.9298245623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4751078.725888214,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4750396.954314718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 12466.908239090486,
            "unit": "ns/iter",
            "extra": "iterations: 67556\ncpu: 12465.974894902043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53514.33779999866,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53509.68000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 48840.99341107956,
            "unit": "ns/iter",
            "extra": "iterations: 17150\ncpu: 48840.040816326444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 48830.71865461154,
            "unit": "ns/iter",
            "extra": "iterations: 17036\ncpu: 48829.04437661424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 51223.01616656607,
            "unit": "ns/iter",
            "extra": "iterations: 16330\ncpu: 51222.36374770375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 101429.05509065956,
            "unit": "ns/iter",
            "extra": "iterations: 8604\ncpu: 101428.50999535124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 871643.2481202988,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 871645.3947368441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 709522.2348024682,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 709511.4741641358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 703867.7488653479,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 703857.2617246604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 707950.052114808,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 707936.178247731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 507537.8371958293,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 507534.5307068335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 693793.7271364452,
            "unit": "ns/iter",
            "extra": "iterations: 1334\ncpu: 693774.2128935553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3807810.2798353774,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3807744.4444444515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1668079.4812164616,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1668067.7996422213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 8404.285876170856,
            "unit": "ns/iter",
            "extra": "iterations: 99718\ncpu: 8404.148699332116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 47830.755735185216,
            "unit": "ns/iter",
            "extra": "iterations: 17567\ncpu: 47830.06204815844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 38348.90596687013,
            "unit": "ns/iter",
            "extra": "iterations: 21854\ncpu: 38348.62267777052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 38429.419835394656,
            "unit": "ns/iter",
            "extra": "iterations: 21749\ncpu: 38429.146167639716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 38094.576096848854,
            "unit": "ns/iter",
            "extra": "iterations: 21972\ncpu: 38094.442927362004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 87131.4327760549,
            "unit": "ns/iter",
            "extra": "iterations: 9989\ncpu: 87131.83501852077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 850060.3068591814,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 850054.602888084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 689053.5603759744,
            "unit": "ns/iter",
            "extra": "iterations: 1383\ncpu: 689049.6023138126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 690675.2942029058,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 690664.7826086982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 685734.3594202967,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 685697.7536231889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 488729.2289693766,
            "unit": "ns/iter",
            "extra": "iterations: 1795\ncpu: 488701.5041782724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 673847.9329999904,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 673803.4999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 665.2175219332545,
            "unit": "ns/iter",
            "extra": "iterations: 1053765\ncpu: 665.1777198901085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4462.8583007051875,
            "unit": "ns/iter",
            "extra": "iterations: 156818\ncpu: 4462.577000089314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3444.8944630101846,
            "unit": "ns/iter",
            "extra": "iterations: 202583\ncpu: 3444.6922989589625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3639.874731653485,
            "unit": "ns/iter",
            "extra": "iterations: 191916\ncpu: 3639.6402592801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2797.3287715073516,
            "unit": "ns/iter",
            "extra": "iterations: 249973\ncpu: 2797.086485340424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 23558.405389928335,
            "unit": "ns/iter",
            "extra": "iterations: 29685\ncpu: 23557.301667508764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 46612.24190766834,
            "unit": "ns/iter",
            "extra": "iterations: 15076\ncpu: 46611.40886176675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 11051.205385611363,
            "unit": "ns/iter",
            "extra": "iterations: 63354\ncpu: 11050.271490355684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10997.952153109552,
            "unit": "ns/iter",
            "extra": "iterations: 63536\ncpu: 10997.094560563986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10966.669718831978,
            "unit": "ns/iter",
            "extra": "iterations: 63343\ncpu: 10966.578785343208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 22233.082998066657,
            "unit": "ns/iter",
            "extra": "iterations: 31567\ncpu: 22232.91095131015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 19528.857624775977,
            "unit": "ns/iter",
            "extra": "iterations: 36165\ncpu: 19528.84280381605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6566.617988584903,
            "unit": "ns/iter",
            "extra": "iterations: 106701\ncpu: 6566.574821229353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 32230.675664488892,
            "unit": "ns/iter",
            "extra": "iterations: 21746\ncpu: 32229.87675894409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 26171.63589110776,
            "unit": "ns/iter",
            "extra": "iterations: 26742\ncpu: 26171.430708249496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 25946.569823492933,
            "unit": "ns/iter",
            "extra": "iterations: 26968\ncpu: 25945.824681103662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 26720.25777489001,
            "unit": "ns/iter",
            "extra": "iterations: 26174\ncpu: 26718.266218384502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 57112.96591556005,
            "unit": "ns/iter",
            "extra": "iterations: 12293\ncpu: 57111.624501749044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 215396.56971513756,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 215071.18440779907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 180049.8299459759,
            "unit": "ns/iter",
            "extra": "iterations: 3887\ncpu: 180037.8440957039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 178776.8061119709,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 178762.2496147929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 178448.10978095944,
            "unit": "ns/iter",
            "extra": "iterations: 3926\ncpu: 178435.60876209804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 107348.26342436188,
            "unit": "ns/iter",
            "extra": "iterations: 6518\ncpu: 107345.88830929725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 180600.73239436388,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 180599.28297055204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6702.423698229244,
            "unit": "ns/iter",
            "extra": "iterations: 104185\ncpu: 6702.447569227845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 31792.628746315208,
            "unit": "ns/iter",
            "extra": "iterations: 22055\ncpu: 31792.282929040757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 27009.43810628191,
            "unit": "ns/iter",
            "extra": "iterations: 25875\ncpu: 27009.116908212545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 27193.894630976134,
            "unit": "ns/iter",
            "extra": "iterations: 25852\ncpu: 27193.636855949168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 27676.738708013247,
            "unit": "ns/iter",
            "extra": "iterations: 25217\ncpu: 27676.777570686216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 59574.85094873265,
            "unit": "ns/iter",
            "extra": "iterations: 12385\ncpu: 59572.86233346807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 208313.1147982058,
            "unit": "ns/iter",
            "extra": "iterations: 3345\ncpu: 208313.6920777274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 179167.48255516455,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 179168.16316059485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 177128.94852940537,
            "unit": "ns/iter",
            "extra": "iterations: 3944\ncpu: 177129.63995943154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 180087.1189495371,
            "unit": "ns/iter",
            "extra": "iterations: 3884\ncpu: 180085.45314109157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 106919.69651286161,
            "unit": "ns/iter",
            "extra": "iterations: 6567\ncpu: 106916.91792294665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 179232.55674847562,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 179228.57873210806 ns\nthreads: 1"
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412536652,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1621.9787180447508,
            "unit": "ns/iter",
            "extra": "iterations: 432714\ncpu: 1621.899915417574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19469.7262227462,
            "unit": "ns/iter",
            "extra": "iterations: 42425\ncpu: 19468.445492044786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 39575.75068022431,
            "unit": "ns/iter",
            "extra": "iterations: 20949\ncpu: 39575.34011169983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 58381.00965613102,
            "unit": "ns/iter",
            "extra": "iterations: 14395\ncpu: 58380.72247308092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 64839.94083800694,
            "unit": "ns/iter",
            "extra": "iterations: 13556\ncpu: 64839.871643552644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 81564.88127556606,
            "unit": "ns/iter",
            "extra": "iterations: 10756\ncpu: 81564.94979546298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 96970.7897918039,
            "unit": "ns/iter",
            "extra": "iterations: 8934\ncpu: 96969.59928363556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 112851.82486613684,
            "unit": "ns/iter",
            "extra": "iterations: 7657\ncpu: 112850.52892777846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 131596.0658174104,
            "unit": "ns/iter",
            "extra": "iterations: 6594\ncpu: 131592.5235062176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1439.3381220874164,
            "unit": "ns/iter",
            "extra": "iterations: 484538\ncpu: 1439.3403613338903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1188.8812568803512,
            "unit": "ns/iter",
            "extra": "iterations: 588632\ncpu: 1188.8815083107982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1185.026391997862,
            "unit": "ns/iter",
            "extra": "iterations: 590141\ncpu: 1185.0389991544403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1180.871010909446,
            "unit": "ns/iter",
            "extra": "iterations: 593337\ncpu: 1180.8842192548238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2115.9935248995366,
            "unit": "ns/iter",
            "extra": "iterations: 333740\ncpu: 2115.9375561814577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7342.074328734602,
            "unit": "ns/iter",
            "extra": "iterations: 111841\ncpu: 7342.027521213148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 37944.81110293582,
            "unit": "ns/iter",
            "extra": "iterations: 21742\ncpu: 37942.59497746296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29695.400844039446,
            "unit": "ns/iter",
            "extra": "iterations: 27013\ncpu: 29695.161588864565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30475.74325471439,
            "unit": "ns/iter",
            "extra": "iterations: 27093\ncpu: 30474.62075074746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29816.680183930483,
            "unit": "ns/iter",
            "extra": "iterations: 27619\ncpu: 29816.7058908722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71915.40736255488,
            "unit": "ns/iter",
            "extra": "iterations: 12387\ncpu: 71915.19334786471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 668961.7229999953,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668962.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 523946.3519999958,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523946.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 524345.4569999812,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524343.7999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 519735.1779999622,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519741.5000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 378394.7921792623,
            "unit": "ns/iter",
            "extra": "iterations: 2276\ncpu: 378391.7398945527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 516834.8530000344,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516787.3000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2706069.296511598,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2705946.511627911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1316906.7918919136,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1316855.405405405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3637370.1058822935,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3637146.274509796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10637.626213900105,
            "unit": "ns/iter",
            "extra": "iterations: 78981\ncpu: 10637.06207822138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54729.953674542245,
            "unit": "ns/iter",
            "extra": "iterations: 15240\ncpu: 54727.355643044524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43347.538441543446,
            "unit": "ns/iter",
            "extra": "iterations: 19237\ncpu: 43346.5405208712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 43887.29224033322,
            "unit": "ns/iter",
            "extra": "iterations: 18957\ncpu: 43885.17697947992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 43366.59672386868,
            "unit": "ns/iter",
            "extra": "iterations: 19230\ncpu: 43365.45501820076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83468.30448839537,
            "unit": "ns/iter",
            "extra": "iterations: 10516\ncpu: 83465.36705971816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 677877.694196408,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 677844.3452380989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 542773.5160000111,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542738.5999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 543900.7980000383,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543899.500000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 543825.6190000175,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543793.2999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 394657.1581081002,
            "unit": "ns/iter",
            "extra": "iterations: 2220\ncpu: 394641.711711714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 529605.2389999772,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529578.6999999947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2838127.417682821,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2836204.2682926883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1269214.9062500258,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1269177.5815217418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7348.178198578886,
            "unit": "ns/iter",
            "extra": "iterations: 112167\ncpu: 7347.8055042927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 37455.34490678291,
            "unit": "ns/iter",
            "extra": "iterations: 22206\ncpu: 37453.93136990003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29788.107249935376,
            "unit": "ns/iter",
            "extra": "iterations: 27683\ncpu: 29786.31289961338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29545.20463827886,
            "unit": "ns/iter",
            "extra": "iterations: 28157\ncpu: 29543.363994743635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29431.13093463826,
            "unit": "ns/iter",
            "extra": "iterations: 28182\ncpu: 29430.959477680608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 68895.2473763143,
            "unit": "ns/iter",
            "extra": "iterations: 12673\ncpu: 68891.52528998665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 664554.8039999766,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 664508.1000000061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 536013.6939999621,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535991.4000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 534609.9470000354,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534587.8999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 537006.2659999917,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536976.0000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 383304.3258772138,
            "unit": "ns/iter",
            "extra": "iterations: 2280\ncpu: 383295.3508771927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 560791.451,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560745.4000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 699.1746929990624,
            "unit": "ns/iter",
            "extra": "iterations: 999834\ncpu: 699.1612607692882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4060.1618101977224,
            "unit": "ns/iter",
            "extra": "iterations: 172622\ncpu: 4059.937898993178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3110.2259210990105,
            "unit": "ns/iter",
            "extra": "iterations: 224813\ncpu: 3110.1012841783804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3083.389125451798,
            "unit": "ns/iter",
            "extra": "iterations: 226860\ncpu: 3083.1984483822644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2461.1504317995327,
            "unit": "ns/iter",
            "extra": "iterations: 285086\ncpu: 2461.0668359722954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19701.26720717066,
            "unit": "ns/iter",
            "extra": "iterations: 35029\ncpu: 19699.84869679413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 34832.89720047977,
            "unit": "ns/iter",
            "extra": "iterations: 19932\ncpu: 34831.67268713628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8863.577307316888,
            "unit": "ns/iter",
            "extra": "iterations: 78977\ncpu: 8863.255124909729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8838.93606338169,
            "unit": "ns/iter",
            "extra": "iterations: 79266\ncpu: 8838.312769661603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8858.795313506944,
            "unit": "ns/iter",
            "extra": "iterations: 79121\ncpu: 8858.529341135687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17500.41779686554,
            "unit": "ns/iter",
            "extra": "iterations: 39816\ncpu: 17500.035161744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15028.160748303793,
            "unit": "ns/iter",
            "extra": "iterations: 46719\ncpu: 15027.8987135855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5572.11055320299,
            "unit": "ns/iter",
            "extra": "iterations: 125867\ncpu: 5572.095942542536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27598.408605539815,
            "unit": "ns/iter",
            "extra": "iterations: 25379\ncpu: 27598.049568540977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22296.946945029344,
            "unit": "ns/iter",
            "extra": "iterations: 31326\ncpu: 22296.6768818234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22274.703066709128,
            "unit": "ns/iter",
            "extra": "iterations: 31630\ncpu: 22274.426177679503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22893.35085335503,
            "unit": "ns/iter",
            "extra": "iterations: 30175\ncpu: 22888.493786247047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52116.25662928273,
            "unit": "ns/iter",
            "extra": "iterations: 13463\ncpu: 52025.484661665665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 175810.0922806192,
            "unit": "ns/iter",
            "extra": "iterations: 3977\ncpu: 175806.36157907953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 148958.87779433673,
            "unit": "ns/iter",
            "extra": "iterations: 4697\ncpu: 148947.264211196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 148569.32655223238,
            "unit": "ns/iter",
            "extra": "iterations: 4719\ncpu: 148564.03899131063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 148405.5059296902,
            "unit": "ns/iter",
            "extra": "iterations: 4722\ncpu: 148396.42100804826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 93978.50498518042,
            "unit": "ns/iter",
            "extra": "iterations: 7422\ncpu: 93960.02425222317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 148865.54277224027,
            "unit": "ns/iter",
            "extra": "iterations: 4711\ncpu: 148858.28911059137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5520.112488406029,
            "unit": "ns/iter",
            "extra": "iterations: 127222\ncpu: 5519.818899247009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 28545.26930166006,
            "unit": "ns/iter",
            "extra": "iterations: 24415\ncpu: 28543.83780462839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22885.52927545725,
            "unit": "ns/iter",
            "extra": "iterations: 30640\ncpu: 22884.26892950374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 23029.731078798934,
            "unit": "ns/iter",
            "extra": "iterations: 30191\ncpu: 23028.949024543777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22441.707830163985,
            "unit": "ns/iter",
            "extra": "iterations: 31136\ncpu: 22440.77595066773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50220.654572882486,
            "unit": "ns/iter",
            "extra": "iterations: 13919\ncpu: 50220.43968675851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 176026.40743530614,
            "unit": "ns/iter",
            "extra": "iterations: 3981\ncpu: 176028.2592313477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 146910.07743826695,
            "unit": "ns/iter",
            "extra": "iterations: 4778\ncpu: 146906.90665550463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 145867.66024963532,
            "unit": "ns/iter",
            "extra": "iterations: 4727\ncpu: 145865.60186164491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 147446.6269035546,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 147442.57614213173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 93112.31338917473,
            "unit": "ns/iter",
            "extra": "iterations: 7521\ncpu: 93113.34928866016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 147672.153554898,
            "unit": "ns/iter",
            "extra": "iterations: 4754\ncpu: 147668.51072781 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418367665,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1593.9807747469333,
            "unit": "ns/iter",
            "extra": "iterations: 439266\ncpu: 1593.8358534464314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19381.975904464245,
            "unit": "ns/iter",
            "extra": "iterations: 42539\ncpu: 19379.83497496415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 39314.12094804813,
            "unit": "ns/iter",
            "extra": "iterations: 20885\ncpu: 39312.17141489106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 58465.046818557945,
            "unit": "ns/iter",
            "extra": "iterations: 14396\ncpu: 58462.5937760489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 64260.62312634017,
            "unit": "ns/iter",
            "extra": "iterations: 13543\ncpu: 64259.88333456396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 82341.24530930867,
            "unit": "ns/iter",
            "extra": "iterations: 10766\ncpu: 82339.00241501021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 96449.8565546423,
            "unit": "ns/iter",
            "extra": "iterations: 8986\ncpu: 96447.06209659476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 112369.65745568102,
            "unit": "ns/iter",
            "extra": "iterations: 7672\ncpu: 112366.05839416066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 131054.0851390728,
            "unit": "ns/iter",
            "extra": "iterations: 6507\ncpu: 131048.93191947138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1393.1171143480944,
            "unit": "ns/iter",
            "extra": "iterations: 504302\ncpu: 1393.071611851628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1177.6410137456146,
            "unit": "ns/iter",
            "extra": "iterations: 592772\ncpu: 1177.6104471871133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1153.961994661215,
            "unit": "ns/iter",
            "extra": "iterations: 605757\ncpu: 1153.966524530464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1173.764888199329,
            "unit": "ns/iter",
            "extra": "iterations: 597537\ncpu: 1173.6956874637049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2092.5600935544057,
            "unit": "ns/iter",
            "extra": "iterations: 334778\ncpu: 2092.538637544881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7504.823408361364,
            "unit": "ns/iter",
            "extra": "iterations: 109337\ncpu: 7504.680940578213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 39004.77065479767,
            "unit": "ns/iter",
            "extra": "iterations: 21121\ncpu: 39004.08598077743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30122.14717823028,
            "unit": "ns/iter",
            "extra": "iterations: 27341\ncpu: 30120.277239310875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30541.77119456955,
            "unit": "ns/iter",
            "extra": "iterations: 27106\ncpu: 30541.005681398998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29715.6933853272,
            "unit": "ns/iter",
            "extra": "iterations: 27696\ncpu: 29715.041883304442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71888.8836287124,
            "unit": "ns/iter",
            "extra": "iterations: 12357\ncpu: 71889.10738852476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 657259.8529999709,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 657192.5000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 526022.8089999828,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526006.3000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 523594.67299999093,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523597.8999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 530875.0920000307,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530851.6000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 382026.20887728344,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 382018.6248912088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 518979.83399999246,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518960.59999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2702258.533527699,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2702144.6064139954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1241546.9680850895,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 1241486.7021276595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3656539.33593757,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3656420.3125000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10560.477150435374,
            "unit": "ns/iter",
            "extra": "iterations: 79170\ncpu: 10560.089680434496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 55656.59832887694,
            "unit": "ns/iter",
            "extra": "iterations: 14960\ncpu: 55655.5748663102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43350.90529811675,
            "unit": "ns/iter",
            "extra": "iterations: 19271\ncpu: 43348.5548233095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 43500.401521113236,
            "unit": "ns/iter",
            "extra": "iterations: 19065\ncpu: 43499.627589824115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 43094.2974196228,
            "unit": "ns/iter",
            "extra": "iterations: 19222\ncpu: 43093.29934450095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83481.1920720067,
            "unit": "ns/iter",
            "extra": "iterations: 10444\ncpu: 83479.52891612414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 679897.3679031184,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 679871.0068130243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 550075.2929999635,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550064.7000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 542608.5889999968,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542586.3999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 543670.0930000029,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543627.800000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 396879.2432923973,
            "unit": "ns/iter",
            "extra": "iterations: 2199\ncpu: 396869.98635743646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 533766.6560000116,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533738.299999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2844502.270769191,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2844464.3076923187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1224083.7862796467,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1223992.6121372061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7330.47305410782,
            "unit": "ns/iter",
            "extra": "iterations: 111093\ncpu: 7330.302539313903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 39334.99383564873,
            "unit": "ns/iter",
            "extra": "iterations: 21089\ncpu: 39330.181611266606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29965.70967859758,
            "unit": "ns/iter",
            "extra": "iterations: 27380\ncpu: 29963.725346968615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29270.408688226496,
            "unit": "ns/iter",
            "extra": "iterations: 28107\ncpu: 29268.67684206785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29143.627774856122,
            "unit": "ns/iter",
            "extra": "iterations: 28515\ncpu: 29141.076626337024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 69273.99012188312,
            "unit": "ns/iter",
            "extra": "iterations: 12553\ncpu: 69264.38301601182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 665042.5839999912,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665023.9000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 533691.9979999948,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533643.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 530798.9500000189,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530746.7000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 526038.2939999886,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526040.7999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 379105.81042884436,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 379082.21247563366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 518716.8680000127,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518670.6000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 669.1206727072341,
            "unit": "ns/iter",
            "extra": "iterations: 1046815\ncpu: 669.0729498526485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4109.571741672411,
            "unit": "ns/iter",
            "extra": "iterations: 170187\ncpu: 4109.3309124668785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3087.2139702964487,
            "unit": "ns/iter",
            "extra": "iterations: 226910\ncpu: 3087.0455246573315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3124.8776079193576,
            "unit": "ns/iter",
            "extra": "iterations: 223454\ncpu: 3124.706203513929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2439.3362178289635,
            "unit": "ns/iter",
            "extra": "iterations: 286243\ncpu: 2439.1782506471823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19903.47053645069,
            "unit": "ns/iter",
            "extra": "iterations: 35213\ncpu: 19901.67835742492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 37082.97372038754,
            "unit": "ns/iter",
            "extra": "iterations: 18912\ncpu: 37079.72186971237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8855.904094978085,
            "unit": "ns/iter",
            "extra": "iterations: 78755\ncpu: 8855.233318519478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8724.64603245754,
            "unit": "ns/iter",
            "extra": "iterations: 80352\ncpu: 8724.509657506915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8813.730471649658,
            "unit": "ns/iter",
            "extra": "iterations: 79487\ncpu: 8813.116610263234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17432.6047563135,
            "unit": "ns/iter",
            "extra": "iterations: 40031\ncpu: 17432.652194549333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16636.522322703484,
            "unit": "ns/iter",
            "extra": "iterations: 42020\ncpu: 16635.73774393132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5565.693675653956,
            "unit": "ns/iter",
            "extra": "iterations: 125847\ncpu: 5565.504143920768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27363.910036359925,
            "unit": "ns/iter",
            "extra": "iterations: 25577\ncpu: 27362.032294640023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21785.793909614873,
            "unit": "ns/iter",
            "extra": "iterations: 31952\ncpu: 21784.589384076196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21862.397853163984,
            "unit": "ns/iter",
            "extra": "iterations: 31954\ncpu: 21861.53220254108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22472.93655424609,
            "unit": "ns/iter",
            "extra": "iterations: 31192\ncpu: 22469.947422416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51887.464428931904,
            "unit": "ns/iter",
            "extra": "iterations: 13466\ncpu: 51886.67013218425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 175739.2430188719,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 175728.22641509576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 148108.24650867563,
            "unit": "ns/iter",
            "extra": "iterations: 4726\ncpu: 148102.7930596692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 147972.98778175918,
            "unit": "ns/iter",
            "extra": "iterations: 4747\ncpu: 147955.63513798162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 147819.37587007924,
            "unit": "ns/iter",
            "extra": "iterations: 4741\ncpu: 147808.8167053349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 93890.60080863143,
            "unit": "ns/iter",
            "extra": "iterations: 7420\ncpu: 93883.76010781508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 150089.2674941119,
            "unit": "ns/iter",
            "extra": "iterations: 4673\ncpu: 150074.21356730032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5541.255644695123,
            "unit": "ns/iter",
            "extra": "iterations: 126269\ncpu: 5541.182713096612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27412.761906635205,
            "unit": "ns/iter",
            "extra": "iterations: 25406\ncpu: 27411.225694718167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22209.79501447341,
            "unit": "ns/iter",
            "extra": "iterations: 31090\ncpu: 22209.099388870927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 23009.74893857023,
            "unit": "ns/iter",
            "extra": "iterations: 30148\ncpu: 23007.177922250245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 23708.582685346006,
            "unit": "ns/iter",
            "extra": "iterations: 29836\ncpu: 23707.8127094784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51925.52320925066,
            "unit": "ns/iter",
            "extra": "iterations: 13486\ncpu: 51921.19976271775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 174676.7244212179,
            "unit": "ns/iter",
            "extra": "iterations: 4017\ncpu: 174664.42618869853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 145747.0422212921,
            "unit": "ns/iter",
            "extra": "iterations: 4808\ncpu: 145734.27620632263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 145605.15948996044,
            "unit": "ns/iter",
            "extra": "iterations: 4784\ncpu: 145589.54849498434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 146049.43385254368,
            "unit": "ns/iter",
            "extra": "iterations: 4815\ncpu: 146046.93665628196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 93867.54076850953,
            "unit": "ns/iter",
            "extra": "iterations: 7469\ncpu: 93860.69085553518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 146278.70668917548,
            "unit": "ns/iter",
            "extra": "iterations: 4739\ncpu: 146267.14496729095 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420973322,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1633.7023554703246,
            "unit": "ns/iter",
            "extra": "iterations: 430275\ncpu: 1633.6189646156529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19486.891581933964,
            "unit": "ns/iter",
            "extra": "iterations: 42290\ncpu: 19485.97777252306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40246.21251883022,
            "unit": "ns/iter",
            "extra": "iterations: 20577\ncpu: 40243.94712543131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 58498.877270529854,
            "unit": "ns/iter",
            "extra": "iterations: 14479\ncpu: 58497.216658608995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 64689.77587222142,
            "unit": "ns/iter",
            "extra": "iterations: 13586\ncpu: 64686.758427793335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 81310.67477711773,
            "unit": "ns/iter",
            "extra": "iterations: 10768\ncpu: 81306.27786032687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 97170.1782963046,
            "unit": "ns/iter",
            "extra": "iterations: 8957\ncpu: 97167.39979903986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 114803.70320821342,
            "unit": "ns/iter",
            "extra": "iterations: 7699\ncpu: 114798.0387063256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 131936.50960095882,
            "unit": "ns/iter",
            "extra": "iterations: 6666\ncpu: 131932.83828382846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1448.3021828894557,
            "unit": "ns/iter",
            "extra": "iterations: 483396\ncpu: 1448.2103699658267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1219.9887781395737,
            "unit": "ns/iter",
            "extra": "iterations: 573969\ncpu: 1219.9580465147053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1168.8537471278069,
            "unit": "ns/iter",
            "extra": "iterations: 597978\ncpu: 1168.7936679944746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1172.963785935317,
            "unit": "ns/iter",
            "extra": "iterations: 598193\ncpu: 1172.9299741053467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2112.674722287977,
            "unit": "ns/iter",
            "extra": "iterations: 333349\ncpu: 2112.488113058683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7516.039597800851,
            "unit": "ns/iter",
            "extra": "iterations: 109299\ncpu: 7515.787884610096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 38925.03449724601,
            "unit": "ns/iter",
            "extra": "iterations: 21422\ncpu: 38922.79432359257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30349.975603434534,
            "unit": "ns/iter",
            "extra": "iterations: 27012\ncpu: 30349.185547164165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30383.345224056542,
            "unit": "ns/iter",
            "extra": "iterations: 27136\ncpu: 30381.7511792453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29864.151911650904,
            "unit": "ns/iter",
            "extra": "iterations: 27437\ncpu: 29863.60389255388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71323.97497367546,
            "unit": "ns/iter",
            "extra": "iterations: 12347\ncpu: 71320.70138495165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 659270.2949999989,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 659245.8000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 529934.4599999926,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529924.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 521312.64799999143,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521281.0000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 528045.3899999884,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528028.5000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 378518.13345040457,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 378504.74100087886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 520995.6470000066,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520971.2000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2702193.0755814225,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2702011.3372092983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1241924.8902439103,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 1241857.994579945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3649892.6245059576,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3649837.1541502005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10568.289400121335,
            "unit": "ns/iter",
            "extra": "iterations: 79416\ncpu: 10568.05051878716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54092.48486253804,
            "unit": "ns/iter",
            "extra": "iterations: 15095\ncpu: 54091.136137794005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43227.088467122565,
            "unit": "ns/iter",
            "extra": "iterations: 19284\ncpu: 43224.616262186326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 43610.39703192885,
            "unit": "ns/iter",
            "extra": "iterations: 19137\ncpu: 43604.70293149407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 43050.40171647436,
            "unit": "ns/iter",
            "extra": "iterations: 19342\ncpu: 43048.97632095978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 82768.2037528452,
            "unit": "ns/iter",
            "extra": "iterations: 10552\ncpu: 82763.17285822594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 678599.3611111247,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 678563.8888888867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 546758.858999965,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546723.1000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 541894.9300000122,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541885.0000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 539898.8209999516,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539879.2000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 392486.3279497513,
            "unit": "ns/iter",
            "extra": "iterations: 2229\ncpu: 392471.51188873715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 528330.187999984,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528321.6000000053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2838194.953846176,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2838038.769230768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1262787.651351318,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1262761.486486487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7324.5999089504585,
            "unit": "ns/iter",
            "extra": "iterations: 112027\ncpu: 7324.413757397718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 37717.402953299395,
            "unit": "ns/iter",
            "extra": "iterations: 22077\ncpu: 37716.75952348592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29809.880244693682,
            "unit": "ns/iter",
            "extra": "iterations: 27790\ncpu: 29808.682979488978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29394.83542141185,
            "unit": "ns/iter",
            "extra": "iterations: 28096\ncpu: 29394.24829157179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29293.243174423602,
            "unit": "ns/iter",
            "extra": "iterations: 28276\ncpu: 29292.803083887484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 68817.08875552587,
            "unit": "ns/iter",
            "extra": "iterations: 12664\ncpu: 68814.797852179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 657435.9859999958,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 657390.1999999947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 531129.2769999909,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531109.3999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 529716.6960000368,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529708.399999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 528103.4820000059,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528070.3999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 381301.6289335678,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 381288.50524475303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 520372.45399998256,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520340.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 698.772844778924,
            "unit": "ns/iter",
            "extra": "iterations: 1000721\ncpu: 698.7589947647742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4095.1844822254457,
            "unit": "ns/iter",
            "extra": "iterations: 171339\ncpu: 4095.064171029345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3201.7146824924384,
            "unit": "ns/iter",
            "extra": "iterations: 218546\ncpu: 3201.5557365497407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3075.975644868823,
            "unit": "ns/iter",
            "extra": "iterations: 227837\ncpu: 3075.746696102915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2444.4147353627022,
            "unit": "ns/iter",
            "extra": "iterations: 286033\ncpu: 2444.305377351557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19659.120243744976,
            "unit": "ns/iter",
            "extra": "iterations: 35611\ncpu: 19658.321866838847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 37857.782390875574,
            "unit": "ns/iter",
            "extra": "iterations: 18763\ncpu: 37856.35559345503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8864.650731805428,
            "unit": "ns/iter",
            "extra": "iterations: 79051\ncpu: 8864.643078518979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8784.687770739356,
            "unit": "ns/iter",
            "extra": "iterations: 79874\ncpu: 8784.478052933408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8761.902067669409,
            "unit": "ns/iter",
            "extra": "iterations: 79800\ncpu: 8761.667919799462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17537.004571256537,
            "unit": "ns/iter",
            "extra": "iterations: 39814\ncpu: 17536.484653639433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16643.03017888188,
            "unit": "ns/iter",
            "extra": "iterations: 41983\ncpu: 16642.46718910043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5558.000896982403,
            "unit": "ns/iter",
            "extra": "iterations: 125978\ncpu: 5557.821206877381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27383.116254499077,
            "unit": "ns/iter",
            "extra": "iterations: 25556\ncpu: 27382.35639380194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22058.06483963472,
            "unit": "ns/iter",
            "extra": "iterations: 31709\ncpu: 22057.589327951107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22127.18941425112,
            "unit": "ns/iter",
            "extra": "iterations: 31703\ncpu: 22126.909125319362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22634.833139383987,
            "unit": "ns/iter",
            "extra": "iterations: 30936\ncpu: 22634.73622963531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51367.39196089815,
            "unit": "ns/iter",
            "extra": "iterations: 13708\ncpu: 51284.95039393086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 175710.17427282885,
            "unit": "ns/iter",
            "extra": "iterations: 3988\ncpu: 175704.43831494477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 148525.6313442381,
            "unit": "ns/iter",
            "extra": "iterations: 4709\ncpu: 148517.6895306858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 148496.02205259312,
            "unit": "ns/iter",
            "extra": "iterations: 4716\ncpu: 148491.2849872773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 148781.66772756382,
            "unit": "ns/iter",
            "extra": "iterations: 4713\ncpu: 148773.15934648877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 94545.92614019012,
            "unit": "ns/iter",
            "extra": "iterations: 7433\ncpu: 94543.49522400086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 148721.1801628085,
            "unit": "ns/iter",
            "extra": "iterations: 4668\ncpu: 148717.56640959674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5522.750153425024,
            "unit": "ns/iter",
            "extra": "iterations: 127098\ncpu: 5522.389022643942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 29274.694328081965,
            "unit": "ns/iter",
            "extra": "iterations: 23872\ncpu: 29273.873156836577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 23690.608198994203,
            "unit": "ns/iter",
            "extra": "iterations: 29589\ncpu: 23688.70188245625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 23349.085982997534,
            "unit": "ns/iter",
            "extra": "iterations: 29878\ncpu: 23348.216078720103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 24002.262178586,
            "unit": "ns/iter",
            "extra": "iterations: 29129\ncpu: 24001.084829551204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50459.72976660657,
            "unit": "ns/iter",
            "extra": "iterations: 13925\ncpu: 50457.57989228028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 173707.46579077205,
            "unit": "ns/iter",
            "extra": "iterations: 4034\ncpu: 173698.48785324773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 145352.91616517716,
            "unit": "ns/iter",
            "extra": "iterations: 4819\ncpu: 145350.96493048558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 146019.60875000467,
            "unit": "ns/iter",
            "extra": "iterations: 4800\ncpu: 146016.2500000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 147140.8987182193,
            "unit": "ns/iter",
            "extra": "iterations: 4759\ncpu: 147135.17545703048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 95245.05953513626,
            "unit": "ns/iter",
            "extra": "iterations: 7357\ncpu: 95242.06877803446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 147487.34990519923,
            "unit": "ns/iter",
            "extra": "iterations: 4747\ncpu: 147472.27722772444 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421413394,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1626.834737277202,
            "unit": "ns/iter",
            "extra": "iterations: 437933\ncpu: 1626.775328646163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19490.607604203913,
            "unit": "ns/iter",
            "extra": "iterations: 42345\ncpu: 19490.345967646717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40201.92813612277,
            "unit": "ns/iter",
            "extra": "iterations: 20511\ncpu: 40200.453415240605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 59129.527734758434,
            "unit": "ns/iter",
            "extra": "iterations: 14206\ncpu: 59126.31282556665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 65588.61460807943,
            "unit": "ns/iter",
            "extra": "iterations: 13472\ncpu: 65584.67933491686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 81662.70944423655,
            "unit": "ns/iter",
            "extra": "iterations: 10652\ncpu: 81657.91400675931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 97383.2822661719,
            "unit": "ns/iter",
            "extra": "iterations: 8949\ncpu: 97378.13163481954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 113276.05787823006,
            "unit": "ns/iter",
            "extra": "iterations: 7654\ncpu: 113266.67102168806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 131818.7675618281,
            "unit": "ns/iter",
            "extra": "iterations: 6591\ncpu: 131812.62327416168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1438.582382285363,
            "unit": "ns/iter",
            "extra": "iterations: 486919\ncpu: 1438.4452034116578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1203.621131605167,
            "unit": "ns/iter",
            "extra": "iterations: 579407\ncpu: 1203.5488007566373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1209.2115387605836,
            "unit": "ns/iter",
            "extra": "iterations: 578849\ncpu: 1209.1196495113597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1175.8314871112982,
            "unit": "ns/iter",
            "extra": "iterations: 593735\ncpu: 1175.7541664210453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2100.078071858545,
            "unit": "ns/iter",
            "extra": "iterations: 334602\ncpu: 2099.921100292287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7494.004122637123,
            "unit": "ns/iter",
            "extra": "iterations: 109396\ncpu: 7493.78770704595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 37199.65646984067,
            "unit": "ns/iter",
            "extra": "iterations: 22033\ncpu: 37197.24958017524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30221.752781666983,
            "unit": "ns/iter",
            "extra": "iterations: 27142\ncpu: 30218.852700611635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30219.411111931186,
            "unit": "ns/iter",
            "extra": "iterations: 27124\ncpu: 30217.86978321773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29891.486346140304,
            "unit": "ns/iter",
            "extra": "iterations: 27538\ncpu: 29891.055995351915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71531.80171638745,
            "unit": "ns/iter",
            "extra": "iterations: 12235\ncpu: 71527.60114425803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 652393.2780000336,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652384.5000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 532464.6330000177,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532463.4000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 526684.1709999994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526636.8999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 522829.4050000386,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522820.19999999815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 384433.487123528,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 384408.90440855536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 521200.3259999847,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521174.9000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2736310.017595319,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2736269.7947214143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1213939.1231978908,
            "unit": "ns/iter",
            "extra": "iterations: 763\ncpu: 1213867.3656618623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3782244.114285861,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3782095.5102040702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10577.703148899225,
            "unit": "ns/iter",
            "extra": "iterations: 79107\ncpu: 10577.376211966048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54746.827595356044,
            "unit": "ns/iter",
            "extra": "iterations: 15075\ncpu: 54744.37810945294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43500.55526684967,
            "unit": "ns/iter",
            "extra": "iterations: 19243\ncpu: 43500.32739177893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 43939.83495248131,
            "unit": "ns/iter",
            "extra": "iterations: 18940\ncpu: 43937.022175290236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 43206.24611142811,
            "unit": "ns/iter",
            "extra": "iterations: 19223\ncpu: 43204.97320917655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83286.04245147815,
            "unit": "ns/iter",
            "extra": "iterations: 10459\ncpu: 83283.32536571407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 681364.727871266,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 681360.7168983204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 548882.1819999999,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 548842.300000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 544180.8689999448,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544178.3000000058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 543952.8609999798,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543950.8999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 394556.34383440524,
            "unit": "ns/iter",
            "extra": "iterations: 2222\ncpu: 394543.29432943027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 531884.5780000174,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531882.5000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2862074.1172839343,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2861849.0740740784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1293937.2405063647,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1293914.2053445934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7313.94038303054,
            "unit": "ns/iter",
            "extra": "iterations: 112837\ncpu: 7313.531908859694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 37570.27154272162,
            "unit": "ns/iter",
            "extra": "iterations: 22026\ncpu: 37569.72214655397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29528.478293548982,
            "unit": "ns/iter",
            "extra": "iterations: 27941\ncpu: 29526.67048423467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29595.840211865758,
            "unit": "ns/iter",
            "extra": "iterations: 28131\ncpu: 29595.670257011894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 28856.228764819127,
            "unit": "ns/iter",
            "extra": "iterations: 28514\ncpu: 28855.705968997514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70102.52250080134,
            "unit": "ns/iter",
            "extra": "iterations: 12444\ncpu: 70102.13757634217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 657461.603999991,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 657414.5999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 525929.4069999782,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525927.2000000052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 524255.27799999824,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524252.9999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 523435.78199997864,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523399.6999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 383973.62510896893,
            "unit": "ns/iter",
            "extra": "iterations: 2294\ncpu: 383971.2292938113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 517607.5269999956,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517572.1000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 691.3247526112806,
            "unit": "ns/iter",
            "extra": "iterations: 1018640\ncpu: 691.3089020655035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4086.1465308809397,
            "unit": "ns/iter",
            "extra": "iterations: 171643\ncpu: 4085.9417511928746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3133.295139028285,
            "unit": "ns/iter",
            "extra": "iterations: 224091\ncpu: 3133.245868865747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3202.7723653588996,
            "unit": "ns/iter",
            "extra": "iterations: 218284\ncpu: 3202.6158582397234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2442.400011160856,
            "unit": "ns/iter",
            "extra": "iterations: 286717\ncpu: 2442.356748989436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19815.159519627974,
            "unit": "ns/iter",
            "extra": "iterations: 35306\ncpu: 19814.40265110741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 37038.06969231608,
            "unit": "ns/iter",
            "extra": "iterations: 18883\ncpu: 37037.31928189363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8981.45472392931,
            "unit": "ns/iter",
            "extra": "iterations: 77933\ncpu: 8981.418654485295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8949.16425367698,
            "unit": "ns/iter",
            "extra": "iterations: 78257\ncpu: 8948.832692283142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8992.976941169964,
            "unit": "ns/iter",
            "extra": "iterations: 77801\ncpu: 8992.957674065887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17778.74296411314,
            "unit": "ns/iter",
            "extra": "iterations: 39263\ncpu: 17777.943611033177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16312.583836733907,
            "unit": "ns/iter",
            "extra": "iterations: 42875\ncpu: 16312.515451895064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5611.6457161627495,
            "unit": "ns/iter",
            "extra": "iterations: 124818\ncpu: 5611.374160778098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28258.54461116469,
            "unit": "ns/iter",
            "extra": "iterations: 24792\ncpu: 28258.04291706987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22286.509995853627,
            "unit": "ns/iter",
            "extra": "iterations: 31363\ncpu: 22285.788987022966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22297.921954637713,
            "unit": "ns/iter",
            "extra": "iterations: 31392\ncpu: 22297.362385321245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22957.86240995327,
            "unit": "ns/iter",
            "extra": "iterations: 30540\ncpu: 22957.760314341584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52544.06011336711,
            "unit": "ns/iter",
            "extra": "iterations: 13408\ncpu: 52540.81891408149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 184520.06851119554,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 184519.235836626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 150711.38916361355,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 150697.93592775625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 153963.54300243434,
            "unit": "ns/iter",
            "extra": "iterations: 4523\ncpu: 153962.85651116332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 155134.42311110895,
            "unit": "ns/iter",
            "extra": "iterations: 4500\ncpu: 155123.79999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 95709.57735334498,
            "unit": "ns/iter",
            "extra": "iterations: 7330\ncpu: 95707.13506139074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 154249.34117388577,
            "unit": "ns/iter",
            "extra": "iterations: 4549\ncpu: 154246.4058034747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5525.155085988045,
            "unit": "ns/iter",
            "extra": "iterations: 126878\ncpu: 5524.867195258433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27892.57902475737,
            "unit": "ns/iter",
            "extra": "iterations: 25163\ncpu: 27892.449231013426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 23783.27800141989,
            "unit": "ns/iter",
            "extra": "iterations: 29561\ncpu: 23781.756368187805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 23090.41535108096,
            "unit": "ns/iter",
            "extra": "iterations: 30278\ncpu: 23090.389061364418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 23776.480682012123,
            "unit": "ns/iter",
            "extra": "iterations: 29325\ncpu: 23774.775788576444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51756.42613887398,
            "unit": "ns/iter",
            "extra": "iterations: 13566\ncpu: 51756.28777826849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 176994.06846891544,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 176982.79434057657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 148725.01934523968,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 148722.34268707622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 149065.66581578238,
            "unit": "ns/iter",
            "extra": "iterations: 4701\ncpu: 149064.9649010836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 149668.5579261735,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 149664.6682312791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 95263.73980635185,
            "unit": "ns/iter",
            "extra": "iterations: 7333\ncpu: 95261.35278876418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 149924.09046087376,
            "unit": "ns/iter",
            "extra": "iterations: 4665\ncpu: 149906.53804930355 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421908000,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1595.5618426221192,
            "unit": "ns/iter",
            "extra": "iterations: 430213\ncpu: 1595.4324950663975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19145.97674096348,
            "unit": "ns/iter",
            "extra": "iterations: 43295\ncpu: 19144.654117103593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40041.16952903215,
            "unit": "ns/iter",
            "extra": "iterations: 20787\ncpu: 40038.48559195651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 59152.06569804011,
            "unit": "ns/iter",
            "extra": "iterations: 14247\ncpu: 59148.683933459695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 65259.515314107026,
            "unit": "ns/iter",
            "extra": "iterations: 13419\ncpu: 65256.44235785088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 82614.54975945663,
            "unit": "ns/iter",
            "extra": "iterations: 10601\ncpu: 82609.92359211396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 98752.42165403106,
            "unit": "ns/iter",
            "extra": "iterations: 8839\ncpu: 98746.09118678578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 113785.07913859232,
            "unit": "ns/iter",
            "extra": "iterations: 7569\ncpu: 113776.24521072787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 133733.62689539162,
            "unit": "ns/iter",
            "extra": "iterations: 6529\ncpu: 133726.12957573892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1441.2900420151516,
            "unit": "ns/iter",
            "extra": "iterations: 485540\ncpu: 1441.1966058409214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1177.3458895243498,
            "unit": "ns/iter",
            "extra": "iterations: 594846\ncpu: 1177.2428494097655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1159.46714858133,
            "unit": "ns/iter",
            "extra": "iterations: 603703\ncpu: 1159.4169649645603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1158.1073648936454,
            "unit": "ns/iter",
            "extra": "iterations: 603987\ncpu: 1158.056050875269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2113.082383191404,
            "unit": "ns/iter",
            "extra": "iterations: 331354\ncpu: 2113.015687150294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7461.883694067492,
            "unit": "ns/iter",
            "extra": "iterations: 109083\ncpu: 7461.703473501816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 38238.896522832176,
            "unit": "ns/iter",
            "extra": "iterations: 21483\ncpu: 38237.117720988696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30749.613899899196,
            "unit": "ns/iter",
            "extra": "iterations: 26993\ncpu: 30748.85340643871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29692.057690216636,
            "unit": "ns/iter",
            "extra": "iterations: 27613\ncpu: 29691.388114293975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29793.728371246692,
            "unit": "ns/iter",
            "extra": "iterations: 27475\ncpu: 29791.093721565052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71797.81626530614,
            "unit": "ns/iter",
            "extra": "iterations: 12333\ncpu: 71794.04037946979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 661179.8989999897,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 661137.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 527937.3870000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527899.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 526833.9350000133,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526799.4000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 528810.5280000082,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528785.4999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 388218.9007155744,
            "unit": "ns/iter",
            "extra": "iterations: 2236\ncpu: 388198.07692307764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 525535.9020000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525491.2000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2724162.623906565,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2724016.3265306097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1250790.418109246,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1250701.9973368833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3656932.298039304,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3656673.333333339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10492.131211180442,
            "unit": "ns/iter",
            "extra": "iterations: 79856\ncpu: 10491.360699258628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54566.002157285846,
            "unit": "ns/iter",
            "extra": "iterations: 15297\ncpu: 54562.79662678944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43086.13741808096,
            "unit": "ns/iter",
            "extra": "iterations: 19226\ncpu: 43082.31041298229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 43566.20706360185,
            "unit": "ns/iter",
            "extra": "iterations: 19197\ncpu: 43565.14559566608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 43273.27733887736,
            "unit": "ns/iter",
            "extra": "iterations: 19240\ncpu: 43271.89708939702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 82252.9072735772,
            "unit": "ns/iter",
            "extra": "iterations: 10655\ncpu: 82249.45096198951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 687775.1406365809,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 687739.5262768327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 556112.3230000363,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 556093.1999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 545218.5689999851,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 545186.7999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 543681.6499999963,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543658.9000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 396960.9854346775,
            "unit": "ns/iter",
            "extra": "iterations: 2197\ncpu: 396939.3263541208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 530606.2129999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530571.0000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2861979.3907693326,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2861900.9230769165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1256820.6805929616,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1256755.7951482546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7336.154091524838,
            "unit": "ns/iter",
            "extra": "iterations: 112232\ncpu: 7335.963896215024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 37492.05465531389,
            "unit": "ns/iter",
            "extra": "iterations: 21846\ncpu: 37489.87457658173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29717.496476826153,
            "unit": "ns/iter",
            "extra": "iterations: 27532\ncpu: 29716.420892053015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29189.142999430464,
            "unit": "ns/iter",
            "extra": "iterations: 28112\ncpu: 29187.86639157644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29198.955334898754,
            "unit": "ns/iter",
            "extra": "iterations: 28098\ncpu: 29197.715139867512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 68650.66656188574,
            "unit": "ns/iter",
            "extra": "iterations: 12725\ncpu: 68644.97445972495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 659647.1700000279,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 659600.1999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 535309.7130000037,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535256.4000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 529619.6580000015,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529586.8999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 531539.9859999843,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531504.4000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 393950.4122845796,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 393913.52187362185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 522199.51399996487,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522150.5000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 706.0640707307372,
            "unit": "ns/iter",
            "extra": "iterations: 991139\ncpu: 706.038709000458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4079.7442801573598,
            "unit": "ns/iter",
            "extra": "iterations: 171989\ncpu: 4079.608579618484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3220.489016399602,
            "unit": "ns/iter",
            "extra": "iterations: 217324\ncpu: 3220.2292429736212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3053.2647049605293,
            "unit": "ns/iter",
            "extra": "iterations: 223343\ncpu: 3053.077553359621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2405.053414613058,
            "unit": "ns/iter",
            "extra": "iterations: 291175\ncpu: 2404.9008328325044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19569.60573807143,
            "unit": "ns/iter",
            "extra": "iterations: 35796\ncpu: 19569.273103140124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 36150.10133882703,
            "unit": "ns/iter",
            "extra": "iterations: 19420\ncpu: 36147.69824922742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8732.292436554715,
            "unit": "ns/iter",
            "extra": "iterations: 79990\ncpu: 8731.843980497557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8660.158078201976,
            "unit": "ns/iter",
            "extra": "iterations: 80612\ncpu: 8659.520915000237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8748.159339698273,
            "unit": "ns/iter",
            "extra": "iterations: 80024\ncpu: 8747.721933419969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17508.56186211758,
            "unit": "ns/iter",
            "extra": "iterations: 39976\ncpu: 17507.779667800703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16852.498881969677,
            "unit": "ns/iter",
            "extra": "iterations: 41591\ncpu: 16851.862181722052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5552.417528115048,
            "unit": "ns/iter",
            "extra": "iterations: 125467\ncpu: 5552.294228761369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27470.752124036087,
            "unit": "ns/iter",
            "extra": "iterations: 25541\ncpu: 27469.10849222845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22158.70277874408,
            "unit": "ns/iter",
            "extra": "iterations: 31633\ncpu: 22157.506401542785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21988.474644774764,
            "unit": "ns/iter",
            "extra": "iterations: 31670\ncpu: 21987.865487843323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22610.62189714922,
            "unit": "ns/iter",
            "extra": "iterations: 30899\ncpu: 22604.650635943006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51456.81011730273,
            "unit": "ns/iter",
            "extra": "iterations: 13640\ncpu: 51455.29325513268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 176871.85880861097,
            "unit": "ns/iter",
            "extra": "iterations: 3945\ncpu: 176866.18504435936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 148095.19043588077,
            "unit": "ns/iter",
            "extra": "iterations: 4726\ncpu: 148090.33008886955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 147744.89708368355,
            "unit": "ns/iter",
            "extra": "iterations: 4732\ncpu: 147738.22907861182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 147900.07202394598,
            "unit": "ns/iter",
            "extra": "iterations: 4679\ncpu: 147894.74246633775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 94044.12347335617,
            "unit": "ns/iter",
            "extra": "iterations: 7451\ncpu: 94041.60515367088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 149204.5227369315,
            "unit": "ns/iter",
            "extra": "iterations: 4706\ncpu: 149198.7675308126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5530.975284001368,
            "unit": "ns/iter",
            "extra": "iterations: 126760\ncpu: 5530.878826128116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27851.992502648816,
            "unit": "ns/iter",
            "extra": "iterations: 24542\ncpu: 27850.733436558083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 23032.48922895036,
            "unit": "ns/iter",
            "extra": "iterations: 30452\ncpu: 23032.148955733574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 23023.27351468807,
            "unit": "ns/iter",
            "extra": "iterations: 30364\ncpu: 23022.447635357632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 23407.944191609397,
            "unit": "ns/iter",
            "extra": "iterations: 30103\ncpu: 23407.610537155655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50730.99651820729,
            "unit": "ns/iter",
            "extra": "iterations: 13786\ncpu: 50729.70404758467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 176023.06157325234,
            "unit": "ns/iter",
            "extra": "iterations: 3979\ncpu: 176018.54737371157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 146194.05252101185,
            "unit": "ns/iter",
            "extra": "iterations: 4760\ncpu: 146190.06302521037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 148053.39683544615,
            "unit": "ns/iter",
            "extra": "iterations: 4740\ncpu: 148048.37552742678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 148928.88172728635,
            "unit": "ns/iter",
            "extra": "iterations: 4701\ncpu: 148926.5900872159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 94673.24184598406,
            "unit": "ns/iter",
            "extra": "iterations: 7389\ncpu: 94668.56137501686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 148596.75716408374,
            "unit": "ns/iter",
            "extra": "iterations: 4711\ncpu: 148594.5659095735 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453366945,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1694.2667587692747,
            "unit": "ns/iter",
            "extra": "iterations: 427060\ncpu: 1694.3050156886623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19479.69084829319,
            "unit": "ns/iter",
            "extra": "iterations: 42167\ncpu: 19482.697369981266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 40644.22044196218,
            "unit": "ns/iter",
            "extra": "iterations: 20409\ncpu: 40651.046107109614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 59768.93319564326,
            "unit": "ns/iter",
            "extra": "iterations: 14041\ncpu: 59768.50651662989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 66427.48664755585,
            "unit": "ns/iter",
            "extra": "iterations: 13256\ncpu: 66424.81894990942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 83215.41181474859,
            "unit": "ns/iter",
            "extra": "iterations: 10580\ncpu: 83215.12287334588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 99555.03620787608,
            "unit": "ns/iter",
            "extra": "iterations: 8755\ncpu: 99552.98686464877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 114612.66383655708,
            "unit": "ns/iter",
            "extra": "iterations: 7538\ncpu: 114611.36906341204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 134756.35851079976,
            "unit": "ns/iter",
            "extra": "iterations: 6527\ncpu: 134777.58541443228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1426.6124888885456,
            "unit": "ns/iter",
            "extra": "iterations: 490484\ncpu: 1426.9117850939037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1196.770627858036,
            "unit": "ns/iter",
            "extra": "iterations: 587155\ncpu: 1196.7633759399116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1179.727105133418,
            "unit": "ns/iter",
            "extra": "iterations: 594511\ncpu: 1179.7087017733918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1186.7008995034057,
            "unit": "ns/iter",
            "extra": "iterations: 591771\ncpu: 1186.7036404284777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2090.812875634231,
            "unit": "ns/iter",
            "extra": "iterations: 316132\ncpu: 2090.814912757959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7320.311647466893,
            "unit": "ns/iter",
            "extra": "iterations: 111286\ncpu: 7320.421256941568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 38235.60728355371,
            "unit": "ns/iter",
            "extra": "iterations: 21830\ncpu: 38235.02977553826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30027.868730378992,
            "unit": "ns/iter",
            "extra": "iterations: 27394\ncpu: 30028.597503102945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30264.25420553994,
            "unit": "ns/iter",
            "extra": "iterations: 27226\ncpu: 30264.533901417748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29836.787667755823,
            "unit": "ns/iter",
            "extra": "iterations: 27570\ncpu: 29837.297787450178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71632.21764104175,
            "unit": "ns/iter",
            "extra": "iterations: 12709\ncpu: 71631.38720591708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 653600.1340000439,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653605.3000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 531095.2490000319,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531086.2000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 528771.7549999797,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528767.3999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 529662.9150000172,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529659.0000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 381703.8425925998,
            "unit": "ns/iter",
            "extra": "iterations: 2268\ncpu: 381705.46737213316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 524640.5959999834,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524638.2000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2701408.4415204823,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2701395.6140350904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1221167.7336884285,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1221183.0892143825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3653256.007843021,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3653277.2549019586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10476.794856816514,
            "unit": "ns/iter",
            "extra": "iterations: 80456\ncpu: 10476.563587550958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54627.143515472766,
            "unit": "ns/iter",
            "extra": "iterations: 15190\ncpu: 54625.61553653726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43338.35870753093,
            "unit": "ns/iter",
            "extra": "iterations: 19219\ncpu: 43338.36307820393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 43455.553249477256,
            "unit": "ns/iter",
            "extra": "iterations: 19080\ncpu: 43455.00524108993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 43338.5107703535,
            "unit": "ns/iter",
            "extra": "iterations: 19173\ncpu: 43337.683200333806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83130.66074874254,
            "unit": "ns/iter",
            "extra": "iterations: 10364\ncpu: 83129.78579698947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 695700.5579819303,
            "unit": "ns/iter",
            "extra": "iterations: 1328\ncpu: 695691.2650602425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 557328.2940000013,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557312.7999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 552939.6459999701,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552938.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 543348.2079999977,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543339.8999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 396640.09303371556,
            "unit": "ns/iter",
            "extra": "iterations: 2225\ncpu: 396638.11235954927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 530521.7260000177,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530505.6999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2860329.130434682,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2860222.0496894396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1302969.353846127,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1302988.5314685311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7341.127334022417,
            "unit": "ns/iter",
            "extra": "iterations: 111235\ncpu: 7340.955634467619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 37587.174586539695,
            "unit": "ns/iter",
            "extra": "iterations: 21949\ncpu: 37587.16570230975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29664.68780256957,
            "unit": "ns/iter",
            "extra": "iterations: 27473\ncpu: 29664.779965784746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29332.82683674268,
            "unit": "ns/iter",
            "extra": "iterations: 28066\ncpu: 29331.789353666296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29051.45458710668,
            "unit": "ns/iter",
            "extra": "iterations: 28373\ncpu: 29051.446798012148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 68972.10029218998,
            "unit": "ns/iter",
            "extra": "iterations: 12663\ncpu: 68970.86788280847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 674995.1771428593,
            "unit": "ns/iter",
            "extra": "iterations: 1400\ncpu: 675010.7142857128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 539115.7430000248,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539087.6000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 533407.327999953,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533375.4000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 529997.2100000333,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529972.2000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 385065.24574424094,
            "unit": "ns/iter",
            "extra": "iterations: 2291\ncpu: 385048.49410737667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 517166.04300003155,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517172.5000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 696.3111923219998,
            "unit": "ns/iter",
            "extra": "iterations: 1005886\ncpu: 696.3088262487021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4103.363471261284,
            "unit": "ns/iter",
            "extra": "iterations: 170693\ncpu: 4103.30945029968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3170.745359409187,
            "unit": "ns/iter",
            "extra": "iterations: 219207\ncpu: 3170.7856044743125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3163.0115752208308,
            "unit": "ns/iter",
            "extra": "iterations: 222026\ncpu: 3162.991271292542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2486.88844371472,
            "unit": "ns/iter",
            "extra": "iterations: 282037\ncpu: 2486.8393154089763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20121.20134401799,
            "unit": "ns/iter",
            "extra": "iterations: 34821\ncpu: 20120.46466212905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 35278.172333768416,
            "unit": "ns/iter",
            "extra": "iterations: 19822\ncpu: 35278.105135707985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8970.579678924983,
            "unit": "ns/iter",
            "extra": "iterations: 77988\ncpu: 8970.66471764891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8939.34934436526,
            "unit": "ns/iter",
            "extra": "iterations: 78321\ncpu: 8939.246179185691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8930.516699635966,
            "unit": "ns/iter",
            "extra": "iterations: 78355\ncpu: 8930.268649096995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17935.025341431,
            "unit": "ns/iter",
            "extra": "iterations: 39027\ncpu: 17935.144899684874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16944.32548179897,
            "unit": "ns/iter",
            "extra": "iterations: 41096\ncpu: 16944.515281292635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5720.848655889838,
            "unit": "ns/iter",
            "extra": "iterations: 122423\ncpu: 5720.747735311224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28070.09586056672,
            "unit": "ns/iter",
            "extra": "iterations: 24786\ncpu: 28070.398612119836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 22466.1054133804,
            "unit": "ns/iter",
            "extra": "iterations: 31182\ncpu: 22465.666089410297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 22339.237256718967,
            "unit": "ns/iter",
            "extra": "iterations: 31291\ncpu: 22339.73346968762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22994.393910530045,
            "unit": "ns/iter",
            "extra": "iterations: 30446\ncpu: 22993.87440057784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51984.69568767061,
            "unit": "ns/iter",
            "extra": "iterations: 13473\ncpu: 51983.752690566114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 176907.0313131357,
            "unit": "ns/iter",
            "extra": "iterations: 3960\ncpu: 176897.17171717132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 150233.39790015426,
            "unit": "ns/iter",
            "extra": "iterations: 4667\ncpu: 150229.74073280487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 150576.77499460673,
            "unit": "ns/iter",
            "extra": "iterations: 4631\ncpu: 150577.132368819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 150765.47577186598,
            "unit": "ns/iter",
            "extra": "iterations: 4664\ncpu: 150759.0909090899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 94549.51515971741,
            "unit": "ns/iter",
            "extra": "iterations: 7388\ncpu: 94550.1218191663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 149826.10165130248,
            "unit": "ns/iter",
            "extra": "iterations: 4663\ncpu: 149820.24447780286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5710.738539967373,
            "unit": "ns/iter",
            "extra": "iterations: 123189\ncpu: 5710.652736851484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27975.605915268414,
            "unit": "ns/iter",
            "extra": "iterations: 25020\ncpu: 27974.26458832917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 23049.312010997834,
            "unit": "ns/iter",
            "extra": "iterations: 30547\ncpu: 23049.16358398563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22557.66484881719,
            "unit": "ns/iter",
            "extra": "iterations: 30989\ncpu: 22557.284843008874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 23350.6219736794,
            "unit": "ns/iter",
            "extra": "iterations: 29863\ncpu: 23350.852225161183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50563.50971906657,
            "unit": "ns/iter",
            "extra": "iterations: 13633\ncpu: 50563.39763808462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 175540.68273598634,
            "unit": "ns/iter",
            "extra": "iterations: 3962\ncpu: 175539.9545683976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 147433.1313853244,
            "unit": "ns/iter",
            "extra": "iterations: 4757\ncpu: 147427.79062434233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 148017.1493355877,
            "unit": "ns/iter",
            "extra": "iterations: 4741\ncpu: 148015.62961400338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 148619.66236241,
            "unit": "ns/iter",
            "extra": "iterations: 4724\ncpu: 148622.31160033977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 94952.6487034097,
            "unit": "ns/iter",
            "extra": "iterations: 7404\ncpu: 94950.21609940684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 148513.63615122254,
            "unit": "ns/iter",
            "extra": "iterations: 4708\ncpu: 148512.82922684797 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479539201,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1621.0311605805148,
            "unit": "ns/iter",
            "extra": "iterations: 428458\ncpu: 1620.9563131042016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19065.40960812058,
            "unit": "ns/iter",
            "extra": "iterations: 43151\ncpu: 19064.65435331742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 39192.25309444644,
            "unit": "ns/iter",
            "extra": "iterations: 20763\ncpu: 39191.87015363869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 58718.93661573003,
            "unit": "ns/iter",
            "extra": "iterations: 14136\ncpu: 58718.180531975064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 64934.46166455489,
            "unit": "ns/iter",
            "extra": "iterations: 13421\ncpu: 64934.26719320467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 81790.62825557153,
            "unit": "ns/iter",
            "extra": "iterations: 10674\ncpu: 81789.60089938171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 97110.27546531256,
            "unit": "ns/iter",
            "extra": "iterations: 8865\ncpu: 97109.41906373379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 112469.88794979716,
            "unit": "ns/iter",
            "extra": "iterations: 7809\ncpu: 112464.15674222057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 130676.2738255035,
            "unit": "ns/iter",
            "extra": "iterations: 6705\ncpu: 130673.24384787453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1414.503888074888,
            "unit": "ns/iter",
            "extra": "iterations: 497547\ncpu: 1414.4384349619233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1178.6967380267618,
            "unit": "ns/iter",
            "extra": "iterations: 591881\ncpu: 1178.6632785982306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1180.2356845391373,
            "unit": "ns/iter",
            "extra": "iterations: 590463\ncpu: 1180.2209452582129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1219.8358223662976,
            "unit": "ns/iter",
            "extra": "iterations: 568293\ncpu: 1219.7762421849284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2135.64847333042,
            "unit": "ns/iter",
            "extra": "iterations: 333602\ncpu: 2135.5621369176456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7509.785401473008,
            "unit": "ns/iter",
            "extra": "iterations: 109148\ncpu: 7509.622714112954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 37972.420653982816,
            "unit": "ns/iter",
            "extra": "iterations: 21652\ncpu: 37971.06964714574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30077.136111825308,
            "unit": "ns/iter",
            "extra": "iterations: 27257\ncpu: 30075.826393220144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30217.49728872329,
            "unit": "ns/iter",
            "extra": "iterations: 27109\ncpu: 30217.61407650591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29722.28053531409,
            "unit": "ns/iter",
            "extra": "iterations: 27722\ncpu: 29722.386552196815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72091.51301746682,
            "unit": "ns/iter",
            "extra": "iterations: 12368\ncpu: 72089.14941785237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 652880.1050000084,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652836.4999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 523807.8049999899,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523785.8000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 527732.7680000212,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527720.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 559348.6970000186,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559308.3999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 377780.4641127266,
            "unit": "ns/iter",
            "extra": "iterations: 2271\ncpu: 377763.584324086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 516999.0829999733,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516978.1000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2684419.554285731,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2684296.0000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1235786.7861885114,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 1235731.4741035888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3637734.376470645,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3637564.7058823584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10324.699791821222,
            "unit": "ns/iter",
            "extra": "iterations: 83582\ncpu: 10324.376061831503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 54482.48901636027,
            "unit": "ns/iter",
            "extra": "iterations: 15341\ncpu: 54481.226777915435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43454.26403641791,
            "unit": "ns/iter",
            "extra": "iterations: 19111\ncpu: 43453.09507613432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 43705.49602233789,
            "unit": "ns/iter",
            "extra": "iterations: 18981\ncpu: 43703.687898424825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 43112.63642972065,
            "unit": "ns/iter",
            "extra": "iterations: 19259\ncpu: 43111.56861727008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 80731.63129973446,
            "unit": "ns/iter",
            "extra": "iterations: 10556\ncpu: 80729.77453580925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 683128.5499255119,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 683110.7302533517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 578530.2220000403,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578508.7000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 534498.3049999996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534487.200000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 532622.0889999717,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532612.3999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 396164.30731268646,
            "unit": "ns/iter",
            "extra": "iterations: 2229\ncpu: 396150.51592642267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 520036.8389999994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520031.7000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2778902.0328358295,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2778791.0447761184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1228707.2097428814,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1228658.0514208437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7059.559897278779,
            "unit": "ns/iter",
            "extra": "iterations: 120715\ncpu: 7059.13763823883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 37613.73660226217,
            "unit": "ns/iter",
            "extra": "iterations: 21944\ncpu: 37612.84177907372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30038.387035825457,
            "unit": "ns/iter",
            "extra": "iterations: 27522\ncpu: 30037.261100210868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29062.45157427716,
            "unit": "ns/iter",
            "extra": "iterations: 28394\ncpu: 29061.928576459737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 28174.86521543962,
            "unit": "ns/iter",
            "extra": "iterations: 28987\ncpu: 28174.191879118338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 66253.08038635347,
            "unit": "ns/iter",
            "extra": "iterations: 12838\ncpu: 66251.90839694635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 638034.7260000007,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 638010.3999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 519375.52100002905,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519357.3000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 512454.9070000057,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512446.5000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 503276.6889999607,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503263.7999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 370572.07856246916,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 370564.81404095265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 510730.86700000655,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510715.6000000046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 670.6470943254499,
            "unit": "ns/iter",
            "extra": "iterations: 1043854\ncpu: 670.6217536168832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4019.0680500936637,
            "unit": "ns/iter",
            "extra": "iterations: 179265\ncpu: 4019.017655426345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3225.6647521511863,
            "unit": "ns/iter",
            "extra": "iterations: 224774\ncpu: 3225.6039399574897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3107.1670112799075,
            "unit": "ns/iter",
            "extra": "iterations: 237948\ncpu: 3107.078017045736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2321.7011861820993,
            "unit": "ns/iter",
            "extra": "iterations: 295823\ncpu: 2321.6859405793343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20458.554224414016,
            "unit": "ns/iter",
            "extra": "iterations: 36727\ncpu: 20458.395730661414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 35544.336584094075,
            "unit": "ns/iter",
            "extra": "iterations: 19175\ncpu: 35544.4693611474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8687.174094143662,
            "unit": "ns/iter",
            "extra": "iterations: 78986\ncpu: 8687.142025169054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8751.269352380465,
            "unit": "ns/iter",
            "extra": "iterations: 79383\ncpu: 8751.232631671783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8709.702066913527,
            "unit": "ns/iter",
            "extra": "iterations: 83361\ncpu: 8709.498446515783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16665.020375015323,
            "unit": "ns/iter",
            "extra": "iterations: 41865\ncpu: 16664.48584736649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16652.443430440195,
            "unit": "ns/iter",
            "extra": "iterations: 42187\ncpu: 16652.18669258296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5676.024296166822,
            "unit": "ns/iter",
            "extra": "iterations: 125740\ncpu: 5676.006044218231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26969.354764999953,
            "unit": "ns/iter",
            "extra": "iterations: 25383\ncpu: 26969.13682385869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21858.530961509077,
            "unit": "ns/iter",
            "extra": "iterations: 32605\ncpu: 21858.61984358254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21936.81200339203,
            "unit": "ns/iter",
            "extra": "iterations: 31841\ncpu: 21936.8958261362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21996.7797934957,
            "unit": "ns/iter",
            "extra": "iterations: 31089\ncpu: 21996.857409373293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50435.7893999952,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50434.899999999056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 173402.4079306057,
            "unit": "ns/iter",
            "extra": "iterations: 4035\ncpu: 173399.82651796754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 145122.57273499834,
            "unit": "ns/iter",
            "extra": "iterations: 4702\ncpu: 145120.69332198956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 146516.24474633829,
            "unit": "ns/iter",
            "extra": "iterations: 4711\ncpu: 146516.81171725833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 145641.86367347155,
            "unit": "ns/iter",
            "extra": "iterations: 4900\ncpu: 145639.95918367465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 91179.93065405793,
            "unit": "ns/iter",
            "extra": "iterations: 7614\ncpu: 91178.43446283063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 146216.96380368402,
            "unit": "ns/iter",
            "extra": "iterations: 4890\ncpu: 146216.2372188142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5467.231810463129,
            "unit": "ns/iter",
            "extra": "iterations: 121897\ncpu: 5467.186230998224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27116.906730692725,
            "unit": "ns/iter",
            "extra": "iterations: 25614\ncpu: 27116.40118685082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22039.845665102814,
            "unit": "ns/iter",
            "extra": "iterations: 31950\ncpu: 22039.59311424066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22303.373072399932,
            "unit": "ns/iter",
            "extra": "iterations: 30608\ncpu: 22302.75418191284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22267.152683093143,
            "unit": "ns/iter",
            "extra": "iterations: 29630\ncpu: 22266.722915963484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50052.2233982081,
            "unit": "ns/iter",
            "extra": "iterations: 14078\ncpu: 50051.39934649844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 163731.9725963749,
            "unit": "ns/iter",
            "extra": "iterations: 4306\ncpu: 163712.07617278214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 136773.89527845613,
            "unit": "ns/iter",
            "extra": "iterations: 4956\ncpu: 136772.55851493194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 144421.04345237438,
            "unit": "ns/iter",
            "extra": "iterations: 5040\ncpu: 144420.71428571502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 138925.0566226414,
            "unit": "ns/iter",
            "extra": "iterations: 4998\ncpu: 138920.16806722633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 89155.61096239975,
            "unit": "ns/iter",
            "extra": "iterations: 7845\ncpu: 89154.37858508702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 144485.1705579797,
            "unit": "ns/iter",
            "extra": "iterations: 5054\ncpu: 144483.4982192319 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}