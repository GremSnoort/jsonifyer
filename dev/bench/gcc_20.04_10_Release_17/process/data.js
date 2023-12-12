window.BENCHMARK_DATA = {
  "lastUpdate": 1702381144925,
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
      }
    ]
  }
}