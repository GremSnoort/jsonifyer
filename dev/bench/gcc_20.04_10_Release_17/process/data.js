window.BENCHMARK_DATA = {
  "lastUpdate": 1702396449964,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-10 20.04 Release c++-17": [
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
        "date": 1702381143407,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1638.6846760183926,
            "unit": "ns/iter",
            "extra": "iterations: 423095\ncpu: 1638.6187499261396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24303.82492127546,
            "unit": "ns/iter",
            "extra": "iterations: 33979\ncpu: 24303.125459842846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 50345.582100367414,
            "unit": "ns/iter",
            "extra": "iterations: 16559\ncpu: 50342.9796485295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 62587.007400003364,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62586.07 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 88418.96027501755,
            "unit": "ns/iter",
            "extra": "iterations: 10472\ncpu: 88414.98281130636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 109911.82956125744,
            "unit": "ns/iter",
            "extra": "iterations: 7909\ncpu: 109907.08054115566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 133346.144219129,
            "unit": "ns/iter",
            "extra": "iterations: 6608\ncpu: 133341.58595641644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 154741.64262648515,
            "unit": "ns/iter",
            "extra": "iterations: 5574\ncpu: 154734.5174022246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 176350.59564696212,
            "unit": "ns/iter",
            "extra": "iterations: 5008\ncpu: 176344.42891373794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1524.0344625900645,
            "unit": "ns/iter",
            "extra": "iterations: 458207\ncpu: 1523.99810565967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1400.0750781648414,
            "unit": "ns/iter",
            "extra": "iterations: 500545\ncpu: 1400.0207773526874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1427.3500269700342,
            "unit": "ns/iter",
            "extra": "iterations: 491285\ncpu: 1427.3203944757145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1334.1236803501022,
            "unit": "ns/iter",
            "extra": "iterations: 526939\ncpu: 1334.063904930173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 3060.9585234844158,
            "unit": "ns/iter",
            "extra": "iterations: 240160\ncpu: 3060.900649566951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7460.996216794352,
            "unit": "ns/iter",
            "extra": "iterations: 109431\ncpu: 7460.986374976007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34644.31629258511,
            "unit": "ns/iter",
            "extra": "iterations: 23747\ncpu: 34642.818040173435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30445.34303188317,
            "unit": "ns/iter",
            "extra": "iterations: 27633\ncpu: 30445.185104766057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30416.517376226697,
            "unit": "ns/iter",
            "extra": "iterations: 27106\ncpu: 30416.870803512054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30612.209523436326,
            "unit": "ns/iter",
            "extra": "iterations: 25453\ncpu: 30612.556476643178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74282.88162071609,
            "unit": "ns/iter",
            "extra": "iterations: 11970\ncpu: 74281.5288220551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 788024.7803029952,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 788002.6936026941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 648828.7180000043,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648755.1000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 649663.3639999914,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649631.4000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 641641.9310000379,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641631.0000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 449795.4395833226,
            "unit": "ns/iter",
            "extra": "iterations: 1920\ncpu: 449765.520833334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 636536.9209999585,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 636535.1000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3501357.2767528086,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3501280.0738007496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1504457.9633173847,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1504361.7224880424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4502626.628571501,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4502438.571428564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10870.95447252591,
            "unit": "ns/iter",
            "extra": "iterations: 77909\ncpu: 10870.40136569589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 52112.78763002904,
            "unit": "ns/iter",
            "extra": "iterations: 15958\ncpu: 52112.05038225341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 44037.039327324084,
            "unit": "ns/iter",
            "extra": "iterations: 18969\ncpu: 44034.02393378668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44086.420820726365,
            "unit": "ns/iter",
            "extra": "iterations: 18837\ncpu: 44083.60142273195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 43177.48007895563,
            "unit": "ns/iter",
            "extra": "iterations: 19251\ncpu: 43176.157082749094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 85729.4206944153,
            "unit": "ns/iter",
            "extra": "iterations: 10138\ncpu: 85723.1505227854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 849705.0343580552,
            "unit": "ns/iter",
            "extra": "iterations: 1106\ncpu: 849654.9728752231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 683964.0584795258,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 683924.7076023389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 689196.8926223305,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 689156.0262965688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 681393.3498919972,
            "unit": "ns/iter",
            "extra": "iterations: 1389\ncpu: 681340.0287976953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 480192.0103825101,
            "unit": "ns/iter",
            "extra": "iterations: 1830\ncpu: 480180.05464480794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 670881.2682926834,
            "unit": "ns/iter",
            "extra": "iterations: 1394\ncpu: 670823.6011477762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3793375.7911645332,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3793210.4417670732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1629304.389273306,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1629204.3252595144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7566.439387261554,
            "unit": "ns/iter",
            "extra": "iterations: 111173\ncpu: 7566.220215340011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 34625.743718384256,
            "unit": "ns/iter",
            "extra": "iterations: 23919\ncpu: 34625.03031063169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 30132.453568045246,
            "unit": "ns/iter",
            "extra": "iterations: 27438\ncpu: 30130.7894161383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 30082.588293182296,
            "unit": "ns/iter",
            "extra": "iterations: 27437\ncpu: 30080.854320807543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 30016.667470760232,
            "unit": "ns/iter",
            "extra": "iterations: 27360\ncpu: 30015.080409356822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70638.33649213397,
            "unit": "ns/iter",
            "extra": "iterations: 12452\ncpu: 70634.9582396405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 819393.6891545951,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 819332.3654995739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 645113.7660000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645090.0999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 651334.1599999763,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651316.5000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 641417.338999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641363.6999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 457420.784711399,
            "unit": "ns/iter",
            "extra": "iterations: 1923\ncpu: 457411.0764430576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 639511.701999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639455.3000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 657.334037920465,
            "unit": "ns/iter",
            "extra": "iterations: 1084323\ncpu: 657.2948282015564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4355.023933156366,
            "unit": "ns/iter",
            "extra": "iterations: 160614\ncpu: 4354.755500765797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3410.7940248275104,
            "unit": "ns/iter",
            "extra": "iterations: 205015\ncpu: 3410.6626344413653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3400.5784910542134,
            "unit": "ns/iter",
            "extra": "iterations: 204845\ncpu: 3400.405184407728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2530.166001128489,
            "unit": "ns/iter",
            "extra": "iterations: 276468\ncpu: 2530.140197057155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20825.08568446164,
            "unit": "ns/iter",
            "extra": "iterations: 33530\ncpu: 20821.15717268107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 44170.53030875944,
            "unit": "ns/iter",
            "extra": "iterations: 15870\ncpu: 44169.287964712916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10545.76313708771,
            "unit": "ns/iter",
            "extra": "iterations: 65768\ncpu: 10545.306227952793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10587.085675389651,
            "unit": "ns/iter",
            "extra": "iterations: 66110\ncpu: 10586.769021328157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10510.33461410501,
            "unit": "ns/iter",
            "extra": "iterations: 66106\ncpu: 10510.180619005954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21505.801579013118,
            "unit": "ns/iter",
            "extra": "iterations: 32552\ncpu: 21505.283853526704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20410.32719901968,
            "unit": "ns/iter",
            "extra": "iterations: 34288\ncpu: 20410.560545963563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5375.86352382063,
            "unit": "ns/iter",
            "extra": "iterations: 130455\ncpu: 5375.735694300643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26943.450516467776,
            "unit": "ns/iter",
            "extra": "iterations: 25655\ncpu: 26942.54141492837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21851.828800296797,
            "unit": "ns/iter",
            "extra": "iterations: 32208\ncpu: 21850.443989071013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21822.601940535886,
            "unit": "ns/iter",
            "extra": "iterations: 32053\ncpu: 21822.100895392123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22658.10825176727,
            "unit": "ns/iter",
            "extra": "iterations: 30854\ncpu: 22656.01542749723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 53092.95912806553,
            "unit": "ns/iter",
            "extra": "iterations: 13212\ncpu: 53090.16046018754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 199660.05350028272,
            "unit": "ns/iter",
            "extra": "iterations: 3514\ncpu: 199646.86966419956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 168252.31523050045,
            "unit": "ns/iter",
            "extra": "iterations: 4143\ncpu: 168245.40188269425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 168575.20779221377,
            "unit": "ns/iter",
            "extra": "iterations: 4158\ncpu: 168574.69937469915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 167706.71342925902,
            "unit": "ns/iter",
            "extra": "iterations: 4170\ncpu: 167704.55635491468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 98831.30960754456,
            "unit": "ns/iter",
            "extra": "iterations: 7109\ncpu: 98829.3852862564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 168590.59220028654,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 168574.79537794643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5502.309426021011,
            "unit": "ns/iter",
            "extra": "iterations: 127827\ncpu: 5502.1388282600055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 28057.36449216301,
            "unit": "ns/iter",
            "extra": "iterations: 25707\ncpu: 28055.393472595104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 23412.028371406544,
            "unit": "ns/iter",
            "extra": "iterations: 29854\ncpu: 23411.261472499456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 23614.831939573218,
            "unit": "ns/iter",
            "extra": "iterations: 29656\ncpu: 23612.28419206902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 24781.796050065273,
            "unit": "ns/iter",
            "extra": "iterations: 28203\ncpu: 24780.952380952043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 53127.92380376269,
            "unit": "ns/iter",
            "extra": "iterations: 13229\ncpu: 53126.66112328985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 198541.37864627733,
            "unit": "ns/iter",
            "extra": "iterations: 3531\ncpu: 198535.34409515842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 168553.71072796112,
            "unit": "ns/iter",
            "extra": "iterations: 4176\ncpu: 168550.21551724002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 169881.67417635434,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 169864.94670542484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 169197.38165536802,
            "unit": "ns/iter",
            "extra": "iterations: 4132\ncpu: 169193.56243949494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 98195.14606111997,
            "unit": "ns/iter",
            "extra": "iterations: 7134\ncpu: 98186.68348752373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 168557.77641689964,
            "unit": "ns/iter",
            "extra": "iterations: 4164\ncpu: 168553.41018251606 ns\nthreads: 1"
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
        "date": 1702382276227,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1625.4102523976271,
            "unit": "ns/iter",
            "extra": "iterations: 428134\ncpu: 1625.4037287391332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24277.576564231684,
            "unit": "ns/iter",
            "extra": "iterations: 34298\ncpu: 24276.730421598928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 49719.1614381823,
            "unit": "ns/iter",
            "extra": "iterations: 16799\ncpu: 49715.000892910284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 62279.33839999764,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62276.660000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 87706.79287873209,
            "unit": "ns/iter",
            "extra": "iterations: 10588\ncpu: 87703.37174159424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 109516.23573667814,
            "unit": "ns/iter",
            "extra": "iterations: 7975\ncpu: 109508.90282131665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 133749.56799037257,
            "unit": "ns/iter",
            "extra": "iterations: 6648\ncpu: 133743.20096269558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 154697.7659650387,
            "unit": "ns/iter",
            "extra": "iterations: 5606\ncpu: 154691.937210132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 179085.1292503447,
            "unit": "ns/iter",
            "extra": "iterations: 5029\ncpu: 179075.87989659977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1416.5755711047257,
            "unit": "ns/iter",
            "extra": "iterations: 494349\ncpu: 1416.5075685396362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1146.2534491376302,
            "unit": "ns/iter",
            "extra": "iterations: 610225\ncpu: 1146.208201892744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1170.706894459416,
            "unit": "ns/iter",
            "extra": "iterations: 593288\ncpu: 1170.6677027008816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1162.3020370094332,
            "unit": "ns/iter",
            "extra": "iterations: 596119\ncpu: 1162.2541807927614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2220.0067458209815,
            "unit": "ns/iter",
            "extra": "iterations: 316344\ncpu: 2219.9972182181446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7284.754839568636,
            "unit": "ns/iter",
            "extra": "iterations: 112665\ncpu: 7284.523143833493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 35010.51215040858,
            "unit": "ns/iter",
            "extra": "iterations: 23456\ncpu: 35009.2513642565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30103.74515092183,
            "unit": "ns/iter",
            "extra": "iterations: 27067\ncpu: 30102.63420401233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30035.97253209534,
            "unit": "ns/iter",
            "extra": "iterations: 27341\ncpu: 30035.082842617285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30453.20828199256,
            "unit": "ns/iter",
            "extra": "iterations: 26781\ncpu: 30452.05929576931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 73911.6396875523,
            "unit": "ns/iter",
            "extra": "iterations: 12034\ncpu: 73909.17400697999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 782848.1619601307,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 781385.0498338871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 650900.0720000131,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650897.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 650478.5839999841,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650447.1999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 644442.056999992,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 644405.2999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 454033.68426555995,
            "unit": "ns/iter",
            "extra": "iterations: 1913\ncpu: 454017.4594877151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 641632.4099999998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641609.4999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3435609.4542123326,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3435443.5897435914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1525148.4881141025,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1525035.499207608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4343432.511520944,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4343212.442396304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10579.905690026795,
            "unit": "ns/iter",
            "extra": "iterations: 78910\ncpu: 10579.725003168167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51349.45450601275,
            "unit": "ns/iter",
            "extra": "iterations: 16134\ncpu: 51347.9794223378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43739.81495464262,
            "unit": "ns/iter",
            "extra": "iterations: 19071\ncpu: 43737.51769702703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 43311.6833444083,
            "unit": "ns/iter",
            "extra": "iterations: 19567\ncpu: 43310.471712577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 44038.46070845754,
            "unit": "ns/iter",
            "extra": "iterations: 18999\ncpu: 44037.08089899435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83887.82401012017,
            "unit": "ns/iter",
            "extra": "iterations: 10279\ncpu: 83885.1833835976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 820874.0917832206,
            "unit": "ns/iter",
            "extra": "iterations: 1144\ncpu: 820828.1468531473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 671826.5599999995,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 671788.9000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 669543.0369999825,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 669516.7999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 667739.3900000084,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 667724.800000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 471237.75201720564,
            "unit": "ns/iter",
            "extra": "iterations: 1859\ncpu: 471224.8520710066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 653604.0429999729,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653587.9999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3656338.9999998524,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3656249.416342415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1563745.3591433358,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1563674.2998352544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7157.309942119623,
            "unit": "ns/iter",
            "extra": "iterations: 117138\ncpu: 7157.140296061102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 33927.12391058922,
            "unit": "ns/iter",
            "extra": "iterations: 24784\ncpu: 33925.867495158156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29504.075844100393,
            "unit": "ns/iter",
            "extra": "iterations: 28018\ncpu: 29503.015918338304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29360.756012771184,
            "unit": "ns/iter",
            "extra": "iterations: 28190\ncpu: 29359.457254345623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29059.605373635488,
            "unit": "ns/iter",
            "extra": "iterations: 28584\ncpu: 29058.490764063703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70923.37234128495,
            "unit": "ns/iter",
            "extra": "iterations: 12365\ncpu: 70920.66316215169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 800994.7410866157,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 800978.1833616302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 646502.374000022,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 646493.2000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 648144.9870000234,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648142.1000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 642497.3789999626,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642494.499999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 474748.99530516454,
            "unit": "ns/iter",
            "extra": "iterations: 1917\ncpu: 474746.79186228436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 640222.1650000114,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640219.3000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 589.6106548697571,
            "unit": "ns/iter",
            "extra": "iterations: 1189916\ncpu: 589.6042241637235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4083.014980179894,
            "unit": "ns/iter",
            "extra": "iterations: 171293\ncpu: 4082.845767194247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3349.8842044016733,
            "unit": "ns/iter",
            "extra": "iterations: 216554\ncpu: 3349.722471069577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3364.4550426906403,
            "unit": "ns/iter",
            "extra": "iterations: 215738\ncpu: 3364.3345168676915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2575.1509507435658,
            "unit": "ns/iter",
            "extra": "iterations: 272208\ncpu: 2575.0826573796553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19790.049452730585,
            "unit": "ns/iter",
            "extra": "iterations: 35266\ncpu: 19789.173708387665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 43977.99404575441,
            "unit": "ns/iter",
            "extra": "iterations: 15955\ncpu: 43977.07928549052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10200.284651230451,
            "unit": "ns/iter",
            "extra": "iterations: 68670\ncpu: 10199.796126401649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10248.02981346474,
            "unit": "ns/iter",
            "extra": "iterations: 68459\ncpu: 10247.686936706612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10189.17295762362,
            "unit": "ns/iter",
            "extra": "iterations: 68670\ncpu: 10188.717052570253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 20696.413044784247,
            "unit": "ns/iter",
            "extra": "iterations: 33316\ncpu: 20695.65373994486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20024.61804519884,
            "unit": "ns/iter",
            "extra": "iterations: 34868\ncpu: 20024.340369392998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5305.530532501322,
            "unit": "ns/iter",
            "extra": "iterations: 132056\ncpu: 5305.4590476768135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26142.23084666173,
            "unit": "ns/iter",
            "extra": "iterations: 26823\ncpu: 26141.188532229935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21409.75087805121,
            "unit": "ns/iter",
            "extra": "iterations: 32743\ncpu: 21408.7346913845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21355.543039902397,
            "unit": "ns/iter",
            "extra": "iterations: 32830\ncpu: 21355.10813280539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22051.705871254253,
            "unit": "ns/iter",
            "extra": "iterations: 31799\ncpu: 22050.926129752446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51467.32421673308,
            "unit": "ns/iter",
            "extra": "iterations: 13565\ncpu: 51465.13085145534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 197295.93581081048,
            "unit": "ns/iter",
            "extra": "iterations: 3552\ncpu: 197290.4842342309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 165881.49212410336,
            "unit": "ns/iter",
            "extra": "iterations: 4190\ncpu: 165871.1455847259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 165150.99026822406,
            "unit": "ns/iter",
            "extra": "iterations: 4213\ncpu: 165146.68882031794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 166249.3199333953,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 166242.34062797163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 97112.85248856051,
            "unit": "ns/iter",
            "extra": "iterations: 7213\ncpu: 97110.14834326964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 166967.3961768231,
            "unit": "ns/iter",
            "extra": "iterations: 4185\ncpu: 166960.9080047789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5451.996256576263,
            "unit": "ns/iter",
            "extra": "iterations: 128492\ncpu: 5451.848364100424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26025.90541642114,
            "unit": "ns/iter",
            "extra": "iterations: 26992\ncpu: 26024.8147599292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21423.975920635978,
            "unit": "ns/iter",
            "extra": "iterations: 32559\ncpu: 21422.98903528978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21545.836956188985,
            "unit": "ns/iter",
            "extra": "iterations: 32617\ncpu: 21544.939755342195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22911.9706277675,
            "unit": "ns/iter",
            "extra": "iterations: 30505\ncpu: 22890.72611047374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51349.79039941202,
            "unit": "ns/iter",
            "extra": "iterations: 13645\ncpu: 51349.17552216933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 194123.84223636493,
            "unit": "ns/iter",
            "extra": "iterations: 3613\ncpu: 194120.97979518145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 163987.11202829232,
            "unit": "ns/iter",
            "extra": "iterations: 4240\ncpu: 163983.6556603776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 165432.62334280403,
            "unit": "ns/iter",
            "extra": "iterations: 4224\ncpu: 165426.42045454372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 166461.99642261793,
            "unit": "ns/iter",
            "extra": "iterations: 4193\ncpu: 166455.5688051512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 97291.48764829205,
            "unit": "ns/iter",
            "extra": "iterations: 7165\ncpu: 97288.27634333499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 165361.36174734324,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 165351.73553718938 ns\nthreads: 1"
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
        "date": 1702388099499,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1614.1634017360457,
            "unit": "ns/iter",
            "extra": "iterations: 384439\ncpu: 1614.0766155358847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25862.801735846308,
            "unit": "ns/iter",
            "extra": "iterations: 30187\ncpu: 25862.56335508663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 51832.81967008999,
            "unit": "ns/iter",
            "extra": "iterations: 16065\ncpu: 51832.966075319004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 64450.97411504647,
            "unit": "ns/iter",
            "extra": "iterations: 13560\ncpu: 64450.40560471972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 90945.64779997927,
            "unit": "ns/iter",
            "extra": "iterations: 10159\ncpu: 90936.27325524167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 112700.14852386556,
            "unit": "ns/iter",
            "extra": "iterations: 7689\ncpu: 112698.75146312924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 137863.73215940883,
            "unit": "ns/iter",
            "extra": "iterations: 6474\ncpu: 137860.7506950881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 160426.52275658151,
            "unit": "ns/iter",
            "extra": "iterations: 5427\ncpu: 160422.88557213912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 182114.76149776293,
            "unit": "ns/iter",
            "extra": "iterations: 4914\ncpu: 182107.0818070815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1412.4223067974826,
            "unit": "ns/iter",
            "extra": "iterations: 496073\ncpu: 1412.410270262644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1139.9935626458598,
            "unit": "ns/iter",
            "extra": "iterations: 616713\ncpu: 1139.9647810245617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1140.6126650759313,
            "unit": "ns/iter",
            "extra": "iterations: 614414\ncpu: 1140.6156109724052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1143.2186915092193,
            "unit": "ns/iter",
            "extra": "iterations: 610673\ncpu: 1143.197914432111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2215.1712761767435,
            "unit": "ns/iter",
            "extra": "iterations: 314784\ncpu: 2215.1773914811424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7292.937245119028,
            "unit": "ns/iter",
            "extra": "iterations: 113043\ncpu: 7292.853162071068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34711.61240441,
            "unit": "ns/iter",
            "extra": "iterations: 23669\ncpu: 34711.35240187588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30188.7711406445,
            "unit": "ns/iter",
            "extra": "iterations: 27388\ncpu: 30187.636921279398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29990.942772390506,
            "unit": "ns/iter",
            "extra": "iterations: 27644\ncpu: 29990.74663579792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30034.9513159345,
            "unit": "ns/iter",
            "extra": "iterations: 27319\ncpu: 30033.73476335153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 73250.10386393614,
            "unit": "ns/iter",
            "extra": "iterations: 12112\ncpu: 73249.59544253633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 777273.3150912042,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 777250.2487562189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 646240.1660000411,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 646235.5999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 645562.6219999999,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645564.6000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 643576.5149999497,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 643550.600000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 456752.4479330108,
            "unit": "ns/iter",
            "extra": "iterations: 1911\ncpu: 456749.29356357927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 645439.6630000474,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645416.0999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3458537.955719619,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3458516.9741697456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1545981.6862745006,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1545942.4836601287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4459107.504716997,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4458927.358490575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10530.71861832388,
            "unit": "ns/iter",
            "extra": "iterations: 80453\ncpu: 10530.591774079297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50713.34089945849,
            "unit": "ns/iter",
            "extra": "iterations: 16521\ncpu: 50712.487137582575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43016.398887212395,
            "unit": "ns/iter",
            "extra": "iterations: 19231\ncpu: 43016.515001820124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 43258.80525413905,
            "unit": "ns/iter",
            "extra": "iterations: 19261\ncpu: 43257.72285966436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 43251.41169388591,
            "unit": "ns/iter",
            "extra": "iterations: 19104\ncpu: 43251.51800670003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83847.93738596323,
            "unit": "ns/iter",
            "extra": "iterations: 10413\ncpu: 83847.42149236488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 825557.4788732465,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 825558.6267605653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 669200.4789999828,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 669177.3999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 689472.3209999825,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 689474.2999999934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 666403.618000004,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 666374.0999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 472078.12587037816,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 472079.0573111951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 658976.9760000195,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 658960.7000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3692208.2666665926,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3692163.5294117783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1539918.601957536,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1539881.239804236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7064.614775838281,
            "unit": "ns/iter",
            "extra": "iterations: 116880\ncpu: 7064.629534565338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 34288.5534181834,
            "unit": "ns/iter",
            "extra": "iterations: 24121\ncpu: 34287.703660710606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29654.698352436055,
            "unit": "ns/iter",
            "extra": "iterations: 27920\ncpu: 29654.76719197694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29369.072233477713,
            "unit": "ns/iter",
            "extra": "iterations: 28131\ncpu: 29368.46894884658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29010.41782164322,
            "unit": "ns/iter",
            "extra": "iterations: 28572\ncpu: 29010.489290214293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 71322.94596754643,
            "unit": "ns/iter",
            "extra": "iterations: 12511\ncpu: 71320.43002158114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 811307.3245762746,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 811308.9830508466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 651442.2559999957,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651427.0999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 649521.2930000208,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649486.1999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 646934.4529999716,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 646936.3000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 459167.301103519,
            "unit": "ns/iter",
            "extra": "iterations: 1903\ncpu: 459139.83184445545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 647384.7439999644,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647387.3000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 579.8757134108909,
            "unit": "ns/iter",
            "extra": "iterations: 1203549\ncpu: 579.8284905724632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4111.460070608933,
            "unit": "ns/iter",
            "extra": "iterations: 169950\ncpu: 4111.330391291564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3219.454070229073,
            "unit": "ns/iter",
            "extra": "iterations: 217887\ncpu: 3219.2985354793727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3247.5640140173928,
            "unit": "ns/iter",
            "extra": "iterations: 215445\ncpu: 3247.523033720886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2527.4297310825027,
            "unit": "ns/iter",
            "extra": "iterations: 275698\ncpu: 2527.2762225333486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19955.60977833403,
            "unit": "ns/iter",
            "extra": "iterations: 35098\ncpu: 19955.678386232936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 44329.67965749559,
            "unit": "ns/iter",
            "extra": "iterations: 15883\ncpu: 44329.446578102026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10363.7369671358,
            "unit": "ns/iter",
            "extra": "iterations: 68615\ncpu: 10363.52546819211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10421.334379162097,
            "unit": "ns/iter",
            "extra": "iterations: 67570\ncpu: 10421.107000147962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10353.99996960015,
            "unit": "ns/iter",
            "extra": "iterations: 65790\ncpu: 10354.03100775193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21035.524997754426,
            "unit": "ns/iter",
            "extra": "iterations: 33383\ncpu: 21034.72725638808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20143.340109572844,
            "unit": "ns/iter",
            "extra": "iterations: 34680\ncpu: 20143.408304498294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5303.566716756892,
            "unit": "ns/iter",
            "extra": "iterations: 130432\ncpu: 5303.443173454381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26610.686833962933,
            "unit": "ns/iter",
            "extra": "iterations: 26181\ncpu: 26610.75971124095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21663.706309929446,
            "unit": "ns/iter",
            "extra": "iterations: 32330\ncpu: 21663.498298793656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21572.369430674502,
            "unit": "ns/iter",
            "extra": "iterations: 32477\ncpu: 21572.23881516146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22356.842678679306,
            "unit": "ns/iter",
            "extra": "iterations: 31299\ncpu: 22356.337263171343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51534.388230093144,
            "unit": "ns/iter",
            "extra": "iterations: 13577\ncpu: 51533.276865287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 197581.055993253,
            "unit": "ns/iter",
            "extra": "iterations: 3554\ncpu: 197581.8232976932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 166697.29524265914,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 166692.01530002372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 165014.34638339342,
            "unit": "ns/iter",
            "extra": "iterations: 4189\ncpu: 165014.89615659934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 167071.73825983485,
            "unit": "ns/iter",
            "extra": "iterations: 4195\ncpu: 167068.53396900985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 98569.0002815752,
            "unit": "ns/iter",
            "extra": "iterations: 7103\ncpu: 98567.77417992408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 165881.80834325842,
            "unit": "ns/iter",
            "extra": "iterations: 4195\ncpu: 165882.09773540063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5173.269953915656,
            "unit": "ns/iter",
            "extra": "iterations: 135838\ncpu: 5173.078225533356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26024.43223865154,
            "unit": "ns/iter",
            "extra": "iterations: 26918\ncpu: 26024.13626569551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22899.316652993228,
            "unit": "ns/iter",
            "extra": "iterations: 30475\ncpu: 22898.795734208186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22380.5349072957,
            "unit": "ns/iter",
            "extra": "iterations: 30581\ncpu: 22380.582714757387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22340.609617967893,
            "unit": "ns/iter",
            "extra": "iterations: 31254\ncpu: 22339.892493760817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50230.23790062407,
            "unit": "ns/iter",
            "extra": "iterations: 13947\ncpu: 50230.38646303899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 195680.06634938315,
            "unit": "ns/iter",
            "extra": "iterations: 3572\ncpu: 195674.91601343945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 164730.06447024876,
            "unit": "ns/iter",
            "extra": "iterations: 4219\ncpu: 164727.51836928018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 164564.8087855369,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 164565.21024195562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 163431.86836517783,
            "unit": "ns/iter",
            "extra": "iterations: 4239\ncpu: 163425.43052606686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 96365.13510170518,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 96364.26608026374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 165462.65776413068,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 165459.56038761538 ns\nthreads: 1"
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
        "date": 1702390820549,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1635.4546138123026,
            "unit": "ns/iter",
            "extra": "iterations: 429558\ncpu: 1635.3884690775171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24119.42754704802,
            "unit": "ns/iter",
            "extra": "iterations: 34167\ncpu: 24118.09933561624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 49831.91541464582,
            "unit": "ns/iter",
            "extra": "iterations: 16906\ncpu: 49830.59268898617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 61819.863299996316,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61819.34 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 87371.1026440034,
            "unit": "ns/iter",
            "extra": "iterations: 10590\ncpu: 87363.70160528802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 109308.97651761501,
            "unit": "ns/iter",
            "extra": "iterations: 8006\ncpu: 109302.87284536606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 133718.0865222062,
            "unit": "ns/iter",
            "extra": "iterations: 6507\ncpu: 133707.22299062548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 155450.85420393222,
            "unit": "ns/iter",
            "extra": "iterations: 5590\ncpu: 155444.79427549196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 176082.30400956637,
            "unit": "ns/iter",
            "extra": "iterations: 5013\ncpu: 176067.98324356688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1420.0227754418902,
            "unit": "ns/iter",
            "extra": "iterations: 493997\ncpu: 1419.9252222179487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1164.3110503081277,
            "unit": "ns/iter",
            "extra": "iterations: 604137\ncpu: 1164.24519603997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1164.4200856094783,
            "unit": "ns/iter",
            "extra": "iterations: 600868\ncpu: 1164.3682139837701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1147.8589767106769,
            "unit": "ns/iter",
            "extra": "iterations: 610580\ncpu: 1147.8726784368976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2189.3024165686265,
            "unit": "ns/iter",
            "extra": "iterations: 316937\ncpu: 2189.228458652667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6980.9181858189095,
            "unit": "ns/iter",
            "extra": "iterations: 118158\ncpu: 6980.52946055281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33949.20849627508,
            "unit": "ns/iter",
            "extra": "iterations: 24293\ncpu: 33949.09644753633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29660.39718709233,
            "unit": "ns/iter",
            "extra": "iterations: 27516\ncpu: 29659.187381886884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29832.328482782254,
            "unit": "ns/iter",
            "extra": "iterations: 27557\ncpu: 29831.61810066404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29566.152478409116,
            "unit": "ns/iter",
            "extra": "iterations: 27558\ncpu: 29563.988678423793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71932.46827769352,
            "unit": "ns/iter",
            "extra": "iterations: 12042\ncpu: 71929.66284670324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 789727.7112033124,
            "unit": "ns/iter",
            "extra": "iterations: 1205\ncpu: 789656.9294605815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 649613.4120000078,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649591.9999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 645257.4099999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645201.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 644004.5990000272,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 643986.5000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 450990.7541666654,
            "unit": "ns/iter",
            "extra": "iterations: 1920\ncpu: 450991.4062500009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 638597.7909999951,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 638581.2999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3456238.1018182267,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3456242.1818181896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1521929.737012993,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1521880.6818181777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4428752.248826216,
            "unit": "ns/iter",
            "extra": "iterations: 213\ncpu: 4428759.624413147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10485.907747784437,
            "unit": "ns/iter",
            "extra": "iterations: 79868\ncpu: 10485.583713126684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51005.692331402286,
            "unit": "ns/iter",
            "extra": "iterations: 16222\ncpu: 51004.99321908521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43471.297637297386,
            "unit": "ns/iter",
            "extra": "iterations: 18919\ncpu: 43471.83783498075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 42631.94103371607,
            "unit": "ns/iter",
            "extra": "iterations: 19367\ncpu: 42631.249031858315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 43367.19715114936,
            "unit": "ns/iter",
            "extra": "iterations: 18955\ncpu: 43367.06937483509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83924.44460712514,
            "unit": "ns/iter",
            "extra": "iterations: 10245\ncpu: 83924.43142996551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 822613.618964028,
            "unit": "ns/iter",
            "extra": "iterations: 1139\ncpu: 822623.2660228262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 666662.7760000096,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 666650.1000000053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 665912.6829999877,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665920.100000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 663553.1539999988,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663529.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 471819.552701956,
            "unit": "ns/iter",
            "extra": "iterations: 1869\ncpu: 471819.6361690728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 656303.037999976,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656311.2999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3681009.8945312398,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3680984.765625006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1582761.3940397154,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1582718.377483441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7144.532358008037,
            "unit": "ns/iter",
            "extra": "iterations: 116679\ncpu: 7144.489582529856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 34362.5384203833,
            "unit": "ns/iter",
            "extra": "iterations: 24297\ncpu: 34362.97896859697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29735.9058940774,
            "unit": "ns/iter",
            "extra": "iterations: 28096\ncpu: 29736.296981776704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29651.499078668996,
            "unit": "ns/iter",
            "extra": "iterations: 28220\ncpu: 29651.0807937633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29519.662236675184,
            "unit": "ns/iter",
            "extra": "iterations: 28292\ncpu: 29520.00565530871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70487.35277599595,
            "unit": "ns/iter",
            "extra": "iterations: 12464\ncpu: 70485.86328626458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 812492.3846153698,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 812489.914529914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 648740.4430000084,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648741.4999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 703053.0879999901,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 703061.3000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 652226.9110000138,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652223.3000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 459122.3243953958,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 459109.30599369155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 646227.0840000315,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 646201.0999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 593.4006573798114,
            "unit": "ns/iter",
            "extra": "iterations: 1179227\ncpu: 593.3822749987933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4160.970216846253,
            "unit": "ns/iter",
            "extra": "iterations: 173118\ncpu: 4161.017918414059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3312.928554880559,
            "unit": "ns/iter",
            "extra": "iterations: 211505\ncpu: 3311.655989220132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3145.483099095605,
            "unit": "ns/iter",
            "extra": "iterations: 220787\ncpu: 3145.400770878715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2566.502653306202,
            "unit": "ns/iter",
            "extra": "iterations: 273244\ncpu: 2566.3300932499737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19789.00754706296,
            "unit": "ns/iter",
            "extra": "iterations: 35378\ncpu: 19788.368477585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 43891.35894862271,
            "unit": "ns/iter",
            "extra": "iterations: 15941\ncpu: 43889.83125274456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10316.42693082841,
            "unit": "ns/iter",
            "extra": "iterations: 67484\ncpu: 10315.821528065931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10474.372463898357,
            "unit": "ns/iter",
            "extra": "iterations: 67032\ncpu: 10473.830409356755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10399.509325937724,
            "unit": "ns/iter",
            "extra": "iterations: 67071\ncpu: 10398.998076665064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21399.661189142553,
            "unit": "ns/iter",
            "extra": "iterations: 32679\ncpu: 21398.714770953688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20191.10867102396,
            "unit": "ns/iter",
            "extra": "iterations: 34425\ncpu: 20189.664488017235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5311.162748189593,
            "unit": "ns/iter",
            "extra": "iterations: 131301\ncpu: 5311.057798493506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26490.27969435464,
            "unit": "ns/iter",
            "extra": "iterations: 26436\ncpu: 26488.803147223676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21557.85331592976,
            "unit": "ns/iter",
            "extra": "iterations: 32178\ncpu: 21557.794145068077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21632.420241411503,
            "unit": "ns/iter",
            "extra": "iterations: 32310\ncpu: 21630.15165583416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22531.493350548717,
            "unit": "ns/iter",
            "extra": "iterations: 30980\ncpu: 22529.87088444125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 52273.53632653156,
            "unit": "ns/iter",
            "extra": "iterations: 13475\ncpu: 52269.31354359935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 197925.2823129336,
            "unit": "ns/iter",
            "extra": "iterations: 3528\ncpu: 197914.0589569183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 166649.119961612,
            "unit": "ns/iter",
            "extra": "iterations: 4168\ncpu: 166639.32341650737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 169032.08895334305,
            "unit": "ns/iter",
            "extra": "iterations: 4137\ncpu: 169019.57940536723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 168148.0923412467,
            "unit": "ns/iter",
            "extra": "iterations: 4126\ncpu: 168144.30441105057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 98023.60260176135,
            "unit": "ns/iter",
            "extra": "iterations: 7149\ncpu: 98018.35221709158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 166171.78786431102,
            "unit": "ns/iter",
            "extra": "iterations: 4186\ncpu: 166165.3368370766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5168.011266019182,
            "unit": "ns/iter",
            "extra": "iterations: 134919\ncpu: 5167.393028409565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26151.19021372278,
            "unit": "ns/iter",
            "extra": "iterations: 26670\ncpu: 26150.172478440338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21951.404765652624,
            "unit": "ns/iter",
            "extra": "iterations: 31769\ncpu: 21950.297459787827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22015.398775702095,
            "unit": "ns/iter",
            "extra": "iterations: 31855\ncpu: 22013.77177837054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22439.630727933967,
            "unit": "ns/iter",
            "extra": "iterations: 31294\ncpu: 22437.988112737396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 52915.022699849105,
            "unit": "ns/iter",
            "extra": "iterations: 13260\ncpu: 52911.33484162893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 193624.84897846327,
            "unit": "ns/iter",
            "extra": "iterations: 3622\ncpu: 193620.4030922145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 165437.15642060287,
            "unit": "ns/iter",
            "extra": "iterations: 4213\ncpu: 165430.1922620466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 164363.54341140966,
            "unit": "ns/iter",
            "extra": "iterations: 4227\ncpu: 164358.12633073167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 165047.15754716122,
            "unit": "ns/iter",
            "extra": "iterations: 4240\ncpu: 165035.68396226477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 97531.37763684063,
            "unit": "ns/iter",
            "extra": "iterations: 7253\ncpu: 97525.89273404152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 166341.68595041856,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 166331.52302243208 ns\nthreads: 1"
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
        "date": 1702391749239,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1773.8152374515266,
            "unit": "ns/iter",
            "extra": "iterations: 417222\ncpu: 1773.708960697183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24480.837439598934,
            "unit": "ns/iter",
            "extra": "iterations: 33526\ncpu: 24480.319751834395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 50786.369076549614,
            "unit": "ns/iter",
            "extra": "iterations: 16460\ncpu: 50785.41312272176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 63027.37043453131,
            "unit": "ns/iter",
            "extra": "iterations: 13854\ncpu: 63025.790385448265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 89172.42098694453,
            "unit": "ns/iter",
            "extra": "iterations: 10416\ncpu: 89169.13402457755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 110614.50538861346,
            "unit": "ns/iter",
            "extra": "iterations: 7887\ncpu: 110611.55065297332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 134607.66742665993,
            "unit": "ns/iter",
            "extra": "iterations: 6579\ncpu: 134605.76075391393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 155456.84416961359,
            "unit": "ns/iter",
            "extra": "iterations: 5660\ncpu: 155451.8374558305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 177730.98977340708,
            "unit": "ns/iter",
            "extra": "iterations: 4987\ncpu: 177723.8820934431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1422.9618422789576,
            "unit": "ns/iter",
            "extra": "iterations: 492325\ncpu: 1422.9064134464024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1116.71076969983,
            "unit": "ns/iter",
            "extra": "iterations: 623230\ncpu: 1116.6951205814864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1105.356181073397,
            "unit": "ns/iter",
            "extra": "iterations: 634461\ncpu: 1105.2863769404266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1138.7696753214927,
            "unit": "ns/iter",
            "extra": "iterations: 633827\ncpu: 1138.7403818392079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2229.883169926811,
            "unit": "ns/iter",
            "extra": "iterations: 313635\ncpu: 2229.812361503016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7244.937031061303,
            "unit": "ns/iter",
            "extra": "iterations: 113421\ncpu: 7244.627538110214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33265.69743090136,
            "unit": "ns/iter",
            "extra": "iterations: 24639\ncpu: 33264.99452088155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30134.177371013164,
            "unit": "ns/iter",
            "extra": "iterations: 28026\ncpu: 30133.026475415623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30339.941463060313,
            "unit": "ns/iter",
            "extra": "iterations: 27504\ncpu: 30338.685282140832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30282.468934474287,
            "unit": "ns/iter",
            "extra": "iterations: 27104\ncpu: 30281.618949232583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 73856.95062034721,
            "unit": "ns/iter",
            "extra": "iterations: 12090\ncpu: 73854.44995864328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 786497.0325542539,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 786484.2237061757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 637420.437000003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 637406.5000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 638819.3069999772,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 638780.6000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 642009.1660000082,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641987.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 452204.4079084353,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 452187.77315296564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 637535.1819999934,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 637516.5999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3434062.4763635993,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3433971.636363641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1527255.3418940657,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1527231.6211877991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4398651.511627878,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4398493.488372093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10571.95258892779,
            "unit": "ns/iter",
            "extra": "iterations: 77619\ncpu: 10571.64611757431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51191.944936085376,
            "unit": "ns/iter",
            "extra": "iterations: 16272\ncpu: 51190.726401179934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 43161.11055616159,
            "unit": "ns/iter",
            "extra": "iterations: 19221\ncpu: 43159.22168461586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44139.94274223401,
            "unit": "ns/iter",
            "extra": "iterations: 18897\ncpu: 44098.41244641996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 43650.36542807552,
            "unit": "ns/iter",
            "extra": "iterations: 19027\ncpu: 43648.35759709873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 83659.99093189495,
            "unit": "ns/iter",
            "extra": "iterations: 10366\ncpu: 83655.71097819769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 824924.5917107748,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 824892.239858906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 668447.7770000114,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668388.7000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 667083.1680000048,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 667072.5999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 664883.2490000131,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 664876.4000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 472380.10517800273,
            "unit": "ns/iter",
            "extra": "iterations: 1854\ncpu: 472370.1725997822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 653852.7010000052,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653846.8000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3676010.9961240753,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3675846.8992248094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1564593.609555194,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1564502.800658979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7179.467357244749,
            "unit": "ns/iter",
            "extra": "iterations: 115845\ncpu: 7179.2645345073115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 34569.94132334604,
            "unit": "ns/iter",
            "extra": "iterations: 24030\ncpu: 34568.59758635032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 29132.494293333162,
            "unit": "ns/iter",
            "extra": "iterations: 28125\ncpu: 29131.30666666676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 29274.890748588045,
            "unit": "ns/iter",
            "extra": "iterations: 28320\ncpu: 29274.26906779658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 29104.08540975036,
            "unit": "ns/iter",
            "extra": "iterations: 28615\ncpu: 29103.77074960687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70390.63604097608,
            "unit": "ns/iter",
            "extra": "iterations: 12397\ncpu: 70389.4893925951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 810892.8114334363,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 810881.2286689398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 646935.0309999982,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 646935.8000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 647724.0830000142,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647717.4999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 647914.0269999561,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647902.600000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 461293.4734629686,
            "unit": "ns/iter",
            "extra": "iterations: 1903\ncpu: 461286.0220704151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 637253.2219999698,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 637239.8999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 582.0996372793908,
            "unit": "ns/iter",
            "extra": "iterations: 1203957\ncpu: 582.0950416003215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4113.877296572506,
            "unit": "ns/iter",
            "extra": "iterations: 170036\ncpu: 4113.819426474384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3404.0749722299433,
            "unit": "ns/iter",
            "extra": "iterations: 213359\ncpu: 3403.9670227175793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3368.638876216152,
            "unit": "ns/iter",
            "extra": "iterations: 214810\ncpu: 3368.562450537689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2590.596102886807,
            "unit": "ns/iter",
            "extra": "iterations: 270200\ncpu: 2590.572168763861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20088.762367440577,
            "unit": "ns/iter",
            "extra": "iterations: 34890\ncpu: 20088.466609343766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 43904.82158170628,
            "unit": "ns/iter",
            "extra": "iterations: 16792\ncpu: 43903.98404001944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10223.538641993207,
            "unit": "ns/iter",
            "extra": "iterations: 68630\ncpu: 10223.30904852107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10286.427400073428,
            "unit": "ns/iter",
            "extra": "iterations: 68175\ncpu: 10286.339567290073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10248.359939075128,
            "unit": "ns/iter",
            "extra": "iterations: 68281\ncpu: 10248.200817211167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21024.233912676482,
            "unit": "ns/iter",
            "extra": "iterations: 33256\ncpu: 21024.079865287575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20094.43205865409,
            "unit": "ns/iter",
            "extra": "iterations: 34780\ncpu: 20094.468085106706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5286.618318620368,
            "unit": "ns/iter",
            "extra": "iterations: 130381\ncpu: 5286.534847868922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26304.324149107513,
            "unit": "ns/iter",
            "extra": "iterations: 26531\ncpu: 26304.149862425125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21826.79170822917,
            "unit": "ns/iter",
            "extra": "iterations: 32080\ncpu: 21826.393391520985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21423.921250422678,
            "unit": "ns/iter",
            "extra": "iterations: 32597\ncpu: 21423.496027241777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22240.6396184417,
            "unit": "ns/iter",
            "extra": "iterations: 31450\ncpu: 22240.267090620113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51784.38365661337,
            "unit": "ns/iter",
            "extra": "iterations: 13559\ncpu: 51783.848366398386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 196319.15725919002,
            "unit": "ns/iter",
            "extra": "iterations: 3561\ncpu: 196316.37180567172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 166245.8787010542,
            "unit": "ns/iter",
            "extra": "iterations: 4188\ncpu: 166246.20343839534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 165936.32219060732,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 165936.55761024432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 166354.550273354,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 166351.41430948404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 97711.02443110757,
            "unit": "ns/iter",
            "extra": "iterations: 7163\ncpu: 97710.14937875223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 166681.9074513462,
            "unit": "ns/iter",
            "extra": "iterations: 4214\ncpu: 166678.54769814957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5234.191535636886,
            "unit": "ns/iter",
            "extra": "iterations: 134257\ncpu: 5234.087608094987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27951.77005983227,
            "unit": "ns/iter",
            "extra": "iterations: 24402\ncpu: 27951.52856323272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21978.72567066545,
            "unit": "ns/iter",
            "extra": "iterations: 31834\ncpu: 21978.32191995996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22074.74959699113,
            "unit": "ns/iter",
            "extra": "iterations: 31637\ncpu: 22074.801656288488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22641.528926422423,
            "unit": "ns/iter",
            "extra": "iterations: 30906\ncpu: 22641.58415841607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 52537.98497257185,
            "unit": "ns/iter",
            "extra": "iterations: 13309\ncpu: 52537.561048914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 192221.62995593864,
            "unit": "ns/iter",
            "extra": "iterations: 3632\ncpu: 192218.06167401024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 165502.65339689204,
            "unit": "ns/iter",
            "extra": "iterations: 4195\ncpu: 165501.3349225281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 166109.9550321239,
            "unit": "ns/iter",
            "extra": "iterations: 4203\ncpu: 166106.852248394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 166421.92816364949,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 166418.4586108446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 97806.90562613166,
            "unit": "ns/iter",
            "extra": "iterations: 7163\ncpu: 97807.105961189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 165487.5451536573,
            "unit": "ns/iter",
            "extra": "iterations: 4230\ncpu: 165487.825059101 ns\nthreads: 1"
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
        "date": 1702396448873,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1692.086661110413,
            "unit": "ns/iter",
            "extra": "iterations: 322763\ncpu: 1691.9510600657452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24236.731173354387,
            "unit": "ns/iter",
            "extra": "iterations: 34167\ncpu: 24234.85234290397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 49319.10859245118,
            "unit": "ns/iter",
            "extra": "iterations: 16852\ncpu: 49318.876097792534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 61738.65110000066,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61738.11000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 88301.5892570539,
            "unit": "ns/iter",
            "extra": "iterations: 10593\ncpu: 88296.28056263569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 108833.1623514694,
            "unit": "ns/iter",
            "extra": "iterations: 7995\ncpu: 108827.92995622258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 132769.37140287683,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 132681.14508393282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 154712.0430145795,
            "unit": "ns/iter",
            "extra": "iterations: 5626\ncpu: 154702.61286882331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 174218.70464886524,
            "unit": "ns/iter",
            "extra": "iterations: 5055\ncpu: 174211.53313550947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1447.6954056171537,
            "unit": "ns/iter",
            "extra": "iterations: 484940\ncpu: 1447.6001154782025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1166.7852915552355,
            "unit": "ns/iter",
            "extra": "iterations: 599166\ncpu: 1166.6997126005142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1151.0226892510602,
            "unit": "ns/iter",
            "extra": "iterations: 603722\ncpu: 1150.992509797557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1150.2876420559403,
            "unit": "ns/iter",
            "extra": "iterations: 609883\ncpu: 1150.2768563806508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2184.055642943237,
            "unit": "ns/iter",
            "extra": "iterations: 321047\ncpu: 2183.9718172105645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7193.526277591786,
            "unit": "ns/iter",
            "extra": "iterations: 112986\ncpu: 7193.146053493351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 36545.91408082161,
            "unit": "ns/iter",
            "extra": "iterations: 22172\ncpu: 36544.07811654337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 31928.572742214285,
            "unit": "ns/iter",
            "extra": "iterations: 25556\ncpu: 31927.023008295517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 31765.29329348829,
            "unit": "ns/iter",
            "extra": "iterations: 25766\ncpu: 31765.268182876567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 31730.523053925575,
            "unit": "ns/iter",
            "extra": "iterations: 26091\ncpu: 31729.20547315174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72721.43179209645,
            "unit": "ns/iter",
            "extra": "iterations: 12198\ncpu: 72719.30644367934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 785234.4624999812,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 785188.6666666659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 641746.5499999934,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641746.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 645142.9210000015,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645127.900000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 644728.7880000089,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 644701.6000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 453147.75183629233,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 453138.8772297997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 641011.4970000223,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640988.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3437937.6080586477,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3437787.912087903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1511981.9082125344,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1511913.6876006431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4417734.1441862285,
            "unit": "ns/iter",
            "extra": "iterations: 215\ncpu: 4417563.720930226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10516.30040361997,
            "unit": "ns/iter",
            "extra": "iterations: 81760\ncpu: 10515.927103718175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 53494.81234438647,
            "unit": "ns/iter",
            "extra": "iterations: 15262\ncpu: 53486.17481326175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 44538.792774220005,
            "unit": "ns/iter",
            "extra": "iterations: 18434\ncpu: 44536.703916675746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 44486.60673672892,
            "unit": "ns/iter",
            "extra": "iterations: 18555\ncpu: 44483.65400161671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 44986.16687294701,
            "unit": "ns/iter",
            "extra": "iterations: 18583\ncpu: 44982.59699725571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 84146.63865545783,
            "unit": "ns/iter",
            "extra": "iterations: 10353\ncpu: 84142.20032840763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 822586.8157894997,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 822533.5087719269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 668456.550999963,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668433.4999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 665866.6759999505,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 665852.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 662882.986999989,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 662786.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 472636.8779967942,
            "unit": "ns/iter",
            "extra": "iterations: 1877\ncpu: 472628.98241875326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 652978.356999995,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652959.6000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3655371.101167289,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3655240.077821024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1580912.386554678,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1580833.9495798347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7298.152808486138,
            "unit": "ns/iter",
            "extra": "iterations: 116237\ncpu: 7298.029026901927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 36506.412516355274,
            "unit": "ns/iter",
            "extra": "iterations: 22930\ncpu: 36504.95856955953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 31634.312174076036,
            "unit": "ns/iter",
            "extra": "iterations: 26655\ncpu: 31632.950665916193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 31636.445424352652,
            "unit": "ns/iter",
            "extra": "iterations: 27100\ncpu: 31635.350553505512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 31714.30022309265,
            "unit": "ns/iter",
            "extra": "iterations: 27343\ncpu: 31712.62846066618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70967.19900578611,
            "unit": "ns/iter",
            "extra": "iterations: 12271\ncpu: 70964.89283676971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 813294.8236301438,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 813256.763698633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 650560.8650000454,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650520.8999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 650033.2500000354,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650006.0999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 648520.6970000376,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648479.5000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 464399.8204317932,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 464384.67614534014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 642868.286999999,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642816.6999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 621.8910233425103,
            "unit": "ns/iter",
            "extra": "iterations: 1132270\ncpu: 621.8658977099078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4346.343248930555,
            "unit": "ns/iter",
            "extra": "iterations: 161093\ncpu: 4346.071523902367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3509.7679393924145,
            "unit": "ns/iter",
            "extra": "iterations: 198655\ncpu: 3509.6262364400673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3260.168614813797,
            "unit": "ns/iter",
            "extra": "iterations: 215675\ncpu: 3259.962907151983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2692.7276746209336,
            "unit": "ns/iter",
            "extra": "iterations: 259906\ncpu: 2692.5796249413365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 19976.310725777563,
            "unit": "ns/iter",
            "extra": "iterations: 35121\ncpu: 19975.06619970963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 44090.16284590229,
            "unit": "ns/iter",
            "extra": "iterations: 16009\ncpu: 44090.24923480524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10368.52549228772,
            "unit": "ns/iter",
            "extra": "iterations: 67491\ncpu: 10367.727548858424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10392.161002133209,
            "unit": "ns/iter",
            "extra": "iterations: 67496\ncpu: 10391.633578286077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10407.46423479022,
            "unit": "ns/iter",
            "extra": "iterations: 67328\ncpu: 10407.014912072194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21272.77204255598,
            "unit": "ns/iter",
            "extra": "iterations: 32993\ncpu: 21271.706119479768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20267.460331174178,
            "unit": "ns/iter",
            "extra": "iterations: 34725\ncpu: 20266.410367170774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5389.544788832372,
            "unit": "ns/iter",
            "extra": "iterations: 129731\ncpu: 5389.376479021977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26719.471734523937,
            "unit": "ns/iter",
            "extra": "iterations: 26428\ncpu: 26719.040411684997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21475.772989387002,
            "unit": "ns/iter",
            "extra": "iterations: 32602\ncpu: 21475.308263297025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21442.739328801574,
            "unit": "ns/iter",
            "extra": "iterations: 32658\ncpu: 21442.72460040422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22214.99064620399,
            "unit": "ns/iter",
            "extra": "iterations: 31538\ncpu: 22213.234827826538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50684.50985203551,
            "unit": "ns/iter",
            "extra": "iterations: 13855\ncpu: 50681.89823168526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 196350.79825302772,
            "unit": "ns/iter",
            "extra": "iterations: 3549\ncpu: 196340.29304029242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 166251.5493058841,
            "unit": "ns/iter",
            "extra": "iterations: 4178\ncpu: 166243.63331737687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 164890.7555555544,
            "unit": "ns/iter",
            "extra": "iterations: 4185\ncpu: 164882.31780167288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 166769.9355300898,
            "unit": "ns/iter",
            "extra": "iterations: 4188\ncpu: 166760.3151862466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 97804.8154146902,
            "unit": "ns/iter",
            "extra": "iterations: 7162\ncpu: 97801.94079865943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 167023.4897570219,
            "unit": "ns/iter",
            "extra": "iterations: 4198\ncpu: 167009.361600761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5322.368269893641,
            "unit": "ns/iter",
            "extra": "iterations: 130570\ncpu: 5322.144443593418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27035.66685925709,
            "unit": "ns/iter",
            "extra": "iterations: 25962\ncpu: 27033.768584854566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22806.97232273924,
            "unit": "ns/iter",
            "extra": "iterations: 30675\ncpu: 22805.541972289848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21723.196020334344,
            "unit": "ns/iter",
            "extra": "iterations: 32063\ncpu: 21721.978604622076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22701.63196953434,
            "unit": "ns/iter",
            "extra": "iterations: 30723\ncpu: 22700.312469485158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51704.27250572374,
            "unit": "ns/iter",
            "extra": "iterations: 13541\ncpu: 51701.86101469584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 195494.85233593863,
            "unit": "ns/iter",
            "extra": "iterations: 3596\ncpu: 195485.2057842057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 166456.44676805355,
            "unit": "ns/iter",
            "extra": "iterations: 4208\ncpu: 166452.8992395435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 166057.8662405294,
            "unit": "ns/iter",
            "extra": "iterations: 4224\ncpu: 166051.9649621207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 166661.63660099905,
            "unit": "ns/iter",
            "extra": "iterations: 4213\ncpu: 166654.49798243793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 98263.01822514356,
            "unit": "ns/iter",
            "extra": "iterations: 7133\ncpu: 98256.5260058872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 166180.19709247135,
            "unit": "ns/iter",
            "extra": "iterations: 4196\ncpu: 166173.18875119067 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}