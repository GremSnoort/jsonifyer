window.BENCHMARK_DATA = {
  "lastUpdate": 1702392404056,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-10 18.04 Debug c++-17": [
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
        "date": 1702392403680,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9350.763040059213,
            "unit": "ns/iter",
            "extra": "iterations: 75038\ncpu: 9350.466430341961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 113810.57402735495,
            "unit": "ns/iter",
            "extra": "iterations: 7531\ncpu: 113805.86907449209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 219481.84176264302,
            "unit": "ns/iter",
            "extra": "iterations: 3994\ncpu: 219475.53830746116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 327703.7721280584,
            "unit": "ns/iter",
            "extra": "iterations: 2655\ncpu: 327692.42937853106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 430252.83466135984,
            "unit": "ns/iter",
            "extra": "iterations: 2008\ncpu: 430227.83864541847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 532233.6607579264,
            "unit": "ns/iter",
            "extra": "iterations: 1636\ncpu: 532216.9315403418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 511443.73200008884,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511396.30000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 594844.791000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594812.4000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 678543.9561403666,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 678511.1111111108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7407.394134433451,
            "unit": "ns/iter",
            "extra": "iterations: 94620\ncpu: 7407.0915239906935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 6046.478537676966,
            "unit": "ns/iter",
            "extra": "iterations: 115761\ncpu: 6046.248736621142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5997.869186246015,
            "unit": "ns/iter",
            "extra": "iterations: 116792\ncpu: 5997.58973217345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6038.5688332453665,
            "unit": "ns/iter",
            "extra": "iterations: 115097\ncpu: 6038.367637731652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10655.01199233917,
            "unit": "ns/iter",
            "extra": "iterations: 65792\ncpu: 10654.790856031135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 57369.98660931427,
            "unit": "ns/iter",
            "extra": "iterations: 14413\ncpu: 57368.479844584836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 211036.41375061756,
            "unit": "ns/iter",
            "extra": "iterations: 4058\ncpu: 211030.92656481036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 178709.33934563235,
            "unit": "ns/iter",
            "extra": "iterations: 4768\ncpu: 178706.5855704696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 176964.17605778642,
            "unit": "ns/iter",
            "extra": "iterations: 4845\ncpu: 176955.87203302377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 179317.9005466842,
            "unit": "ns/iter",
            "extra": "iterations: 4756\ncpu: 179313.05719091673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 400388.269070744,
            "unit": "ns/iter",
            "extra": "iterations: 2163\ncpu: 400368.14609339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3508563.8239698377,
            "unit": "ns/iter",
            "extra": "iterations: 267\ncpu: 3508476.404494374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2867325.9386504125,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2867312.8834355893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2835192.8398790644,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2835162.839879158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2882749.5092593557,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2882683.641975306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1673383.9477476133,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1673364.1441441444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2785129.821428576,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2785036.3095238167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11553736.065933323,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11553248.351648364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6625105.908450594,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6624873.943661959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 14295878.054053288,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14295322.972972991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 54506.40275035752,
            "unit": "ns/iter",
            "extra": "iterations: 15198\ncpu: 54504.61244900635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 222947.26380209796,
            "unit": "ns/iter",
            "extra": "iterations: 3840\ncpu: 222940.3645833322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 179825.7529510939,
            "unit": "ns/iter",
            "extra": "iterations: 4744\ncpu: 179816.98988195675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 176590.58298927115,
            "unit": "ns/iter",
            "extra": "iterations: 4844\ncpu: 176586.54004954596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 179554.84158414914,
            "unit": "ns/iter",
            "extra": "iterations: 4747\ncpu: 179550.97956604144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 409044.38443396025,
            "unit": "ns/iter",
            "extra": "iterations: 2120\ncpu: 409038.82075471885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3539645.5475283144,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3539369.2015209305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2912789.0498442003,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2912654.8286604173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2884172.4506172724,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2884045.3703703703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2971826.6708462844,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2971731.9749216363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1704729.465201549,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1704666.4835164838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2808289.759036392,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2808086.1445783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11863805.73333281,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11862787.777777743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6690507.685714562,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 6690172.857142888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 54748.88572563402,
            "unit": "ns/iter",
            "extra": "iterations: 15104\ncpu: 54747.95418432195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 217721.10063695066,
            "unit": "ns/iter",
            "extra": "iterations: 3925\ncpu: 217722.34394904503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 177451.4056702162,
            "unit": "ns/iter",
            "extra": "iterations: 4797\ncpu: 177450.74004586219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 181187.09218228777,
            "unit": "ns/iter",
            "extra": "iterations: 4784\ncpu: 181165.5936454849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 178888.60827353442,
            "unit": "ns/iter",
            "extra": "iterations: 4738\ncpu: 178883.19966230544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 396200.0390625148,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 396188.419117649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3552106.0304181655,
            "unit": "ns/iter",
            "extra": "iterations: 263\ncpu: 3551954.752851699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2895917.6822430287,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2895765.7320872215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2889214.2716047764,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2889086.419753092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2920190.0313478503,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2920005.0156739745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1699365.364468813,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1699316.8498168509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2807307.876505876,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2807227.710843366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3332.3741602340597,
            "unit": "ns/iter",
            "extra": "iterations: 209731\ncpu: 3332.257987612695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 22898.7494274678,
            "unit": "ns/iter",
            "extra": "iterations: 30566\ncpu: 22898.28894850485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17480.833449964222,
            "unit": "ns/iter",
            "extra": "iterations: 40012\ncpu: 17480.0909727083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 18187.323696501713,
            "unit": "ns/iter",
            "extra": "iterations: 39605\ncpu: 18187.191011236013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13763.382760379562,
            "unit": "ns/iter",
            "extra": "iterations: 50964\ncpu: 13763.254454124357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 93954.92052623603,
            "unit": "ns/iter",
            "extra": "iterations: 7449\ncpu: 93952.26204859746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 218539.9800311981,
            "unit": "ns/iter",
            "extra": "iterations: 3205\ncpu: 218527.45709828215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 55897.258404537824,
            "unit": "ns/iter",
            "extra": "iterations: 12523\ncpu: 55895.00918310214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 55362.42664872054,
            "unit": "ns/iter",
            "extra": "iterations: 12631\ncpu: 55358.09516269489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 55917.26771590942,
            "unit": "ns/iter",
            "extra": "iterations: 12517\ncpu: 55913.94104018562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 116964.37316667622,
            "unit": "ns/iter",
            "extra": "iterations: 6000\ncpu: 116953.63333333358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 105009.69853161792,
            "unit": "ns/iter",
            "extra": "iterations: 6674\ncpu: 105002.89181899861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 30575.174953075017,
            "unit": "ns/iter",
            "extra": "iterations: 22909\ncpu: 30573.75267362186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 150923.89121520534,
            "unit": "ns/iter",
            "extra": "iterations: 4633\ncpu: 150917.41851931688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 122774.31162218901,
            "unit": "ns/iter",
            "extra": "iterations: 5696\ncpu: 122765.58988764095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 122228.90150720293,
            "unit": "ns/iter",
            "extra": "iterations: 5706\ncpu: 122213.89765159621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 124629.99198717698,
            "unit": "ns/iter",
            "extra": "iterations: 5616\ncpu: 124628.38319088232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 215072.3237189522,
            "unit": "ns/iter",
            "extra": "iterations: 3259\ncpu: 215057.5023013177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 983745.4053295923,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 983700.9817671815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 819272.3508771674,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 819237.7777777837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 818624.3875878433,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 818602.2248243615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 823561.45347473,
            "unit": "ns/iter",
            "extra": "iterations: 849\ncpu: 823464.5465253189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 526188.9321267103,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 526171.7194570175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 801039.4770115025,
            "unit": "ns/iter",
            "extra": "iterations: 870\ncpu: 801015.2873563173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 30844.38624080656,
            "unit": "ns/iter",
            "extra": "iterations: 22574\ncpu: 30843.3241782584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 151330.73055314692,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 151326.03716508133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 122121.935196506,
            "unit": "ns/iter",
            "extra": "iterations: 5725\ncpu: 122115.16157205301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 121947.02614151279,
            "unit": "ns/iter",
            "extra": "iterations: 5738\ncpu: 121939.24712443394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 123233.4238900655,
            "unit": "ns/iter",
            "extra": "iterations: 5676\ncpu: 123229.08738548278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 215631.807965408,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 215632.88051868152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 972560.8444445773,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 972539.3055555641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 822722.3247361615,
            "unit": "ns/iter",
            "extra": "iterations: 853\ncpu: 822699.8827667054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 813937.1290697845,
            "unit": "ns/iter",
            "extra": "iterations: 860\ncpu: 813915.348837213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 825855.5454545912,
            "unit": "ns/iter",
            "extra": "iterations: 847\ncpu: 825821.0153482996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 526085.6407546769,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 526088.7547169788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 803220.4094036715,
            "unit": "ns/iter",
            "extra": "iterations: 872\ncpu: 803192.3165137651 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}