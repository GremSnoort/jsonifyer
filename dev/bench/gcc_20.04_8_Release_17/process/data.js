window.BENCHMARK_DATA = {
  "lastUpdate": 1702397896714,
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
      }
    ]
  }
}