window.BENCHMARK_DATA = {
  "lastUpdate": 1702388100108,
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
      }
    ]
  }
}