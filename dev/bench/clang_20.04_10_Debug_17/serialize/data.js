window.BENCHMARK_DATA = {
  "lastUpdate": 1702394191447,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-10 20.04 Debug c++-17": [
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
        "date": 1702392462074,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8589.24774785907,
            "unit": "ns/iter",
            "extra": "iterations: 81256\ncpu: 8588.54976863247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 104033.18235650075,
            "unit": "ns/iter",
            "extra": "iterations: 8275\ncpu: 104029.48640483383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 200914.0332721652,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 200906.86094538783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 298701.76893807,
            "unit": "ns/iter",
            "extra": "iterations: 2891\ncpu: 298690.62608094094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 389122.16168478894,
            "unit": "ns/iter",
            "extra": "iterations: 2208\ncpu: 389103.7590579708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 482233.3647973557,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 482210.16102165484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 581542.1273458115,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 581506.5683646112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 541038.4250000106,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541038.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 618464.5429999591,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 618424.8000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6623.460036463802,
            "unit": "ns/iter",
            "extra": "iterations: 105859\ncpu: 6623.126989674944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5534.6055982126845,
            "unit": "ns/iter",
            "extra": "iterations: 123075\ncpu: 5534.479788746691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5367.596672064675,
            "unit": "ns/iter",
            "extra": "iterations: 130291\ncpu: 5367.537281930441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5428.466293882344,
            "unit": "ns/iter",
            "extra": "iterations: 128582\ncpu: 5428.2325675444545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9814.868395275747,
            "unit": "ns/iter",
            "extra": "iterations: 71464\ncpu: 9814.4506324863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 53570.30089637291,
            "unit": "ns/iter",
            "extra": "iterations: 15507\ncpu: 53568.3884697234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 208497.66209261026,
            "unit": "ns/iter",
            "extra": "iterations: 4081\ncpu: 208487.2825287922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 171363.5962545219,
            "unit": "ns/iter",
            "extra": "iterations: 4966\ncpu: 171357.06806282725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 168886.15116738775,
            "unit": "ns/iter",
            "extra": "iterations: 5054\ncpu: 168879.73882073603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 179588.04481967955,
            "unit": "ns/iter",
            "extra": "iterations: 4797\ncpu: 179583.38544923853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 381083.8192717738,
            "unit": "ns/iter",
            "extra": "iterations: 2252\ncpu: 381080.37300177617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3177668.246621579,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3177518.5810810775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2636780.1887324317,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2636661.408450701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2542276.437158372,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2542163.1147540975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2590657.104972641,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2590511.8784530354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1553426.8033331954,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1553364.1666666695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2516024.262162183,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2515910.8108108067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10834008.459183604,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10833373.469387785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6237513.304635563,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6237225.827814583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12854078.421685655,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12853628.915662676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52375.9512535697,
            "unit": "ns/iter",
            "extra": "iterations: 15755\ncpu: 52373.54490637879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 221467.38664593853,
            "unit": "ns/iter",
            "extra": "iterations: 3864\ncpu: 221459.4202898558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 174940.55729594358,
            "unit": "ns/iter",
            "extra": "iterations: 4852\ncpu: 174931.98680956344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 176175.37082130156,
            "unit": "ns/iter",
            "extra": "iterations: 4846\ncpu: 176168.79900949312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 178654.91391709133,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 178647.8637901868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 386103.7844364655,
            "unit": "ns/iter",
            "extra": "iterations: 2236\ncpu: 386090.2057245098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3167579.5170068946,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3167495.5782312793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2632891.0168540766,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2632799.4382022386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2566697.524725259,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2566511.538461526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2586330.837988684,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2586239.3854748714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1551604.9382304482,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1551542.2370617704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2531913.0806451538,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2531707.526881724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11004348.234694459,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 11003868.367346931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6391560.878378678,
            "unit": "ns/iter",
            "extra": "iterations: 148\ncpu: 6391268.243243239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 49501.9544149327,
            "unit": "ns/iter",
            "extra": "iterations: 16716\ncpu: 49499.4795405601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 213930.1625282174,
            "unit": "ns/iter",
            "extra": "iterations: 3987\ncpu: 213922.04665161882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 175709.5570220601,
            "unit": "ns/iter",
            "extra": "iterations: 4849\ncpu: 175702.9284388525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 174065.5254237119,
            "unit": "ns/iter",
            "extra": "iterations: 4897\ncpu: 174054.44149479317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 176062.62476625256,
            "unit": "ns/iter",
            "extra": "iterations: 4813\ncpu: 176054.24890920328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 382328.90319719026,
            "unit": "ns/iter",
            "extra": "iterations: 2252\ncpu: 382323.5346358774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3165777.425675512,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3165661.486486499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2633265.991573297,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2633126.1235955027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2550651.3671232774,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2550544.383561649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2580008.743093986,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2579924.5856353585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1560910.735785924,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1560859.3645484927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2537707.6000000746,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2537600.810810826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3037.5618913228222,
            "unit": "ns/iter",
            "extra": "iterations: 230315\ncpu: 3037.472157697069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 22535.26344623283,
            "unit": "ns/iter",
            "extra": "iterations: 31031\ncpu: 22535.23250942606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17959.407410248838,
            "unit": "ns/iter",
            "extra": "iterations: 39108\ncpu: 17958.70410146259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17225.888776689568,
            "unit": "ns/iter",
            "extra": "iterations: 40603\ncpu: 17225.16070241105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12944.82528204106,
            "unit": "ns/iter",
            "extra": "iterations: 54070\ncpu: 12944.168670242338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 89016.26893315079,
            "unit": "ns/iter",
            "extra": "iterations: 7883\ncpu: 89012.20347583471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 204435.18411024232,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 204428.78921137215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 50656.43450617851,
            "unit": "ns/iter",
            "extra": "iterations: 13841\ncpu: 50655.94248970454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 50276.74283445549,
            "unit": "ns/iter",
            "extra": "iterations: 13851\ncpu: 50272.89726373511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 50517.50625315538,
            "unit": "ns/iter",
            "extra": "iterations: 13833\ncpu: 50514.891925106924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 106888.19969467283,
            "unit": "ns/iter",
            "extra": "iterations: 6550\ncpu: 106883.66412213646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 94973.95985896014,
            "unit": "ns/iter",
            "extra": "iterations: 7374\ncpu: 94971.58936805041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25816.883053660073,
            "unit": "ns/iter",
            "extra": "iterations: 27115\ncpu: 25815.832565000743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 127366.98854543896,
            "unit": "ns/iter",
            "extra": "iterations: 5500\ncpu: 127365.43636363639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 103003.23042835612,
            "unit": "ns/iter",
            "extra": "iterations: 6770\ncpu: 102998.64106351456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 103542.37118419337,
            "unit": "ns/iter",
            "extra": "iterations: 6781\ncpu: 103536.97094823795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 104999.2064747037,
            "unit": "ns/iter",
            "extra": "iterations: 6703\ncpu: 104991.82455616961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 197959.84762981097,
            "unit": "ns/iter",
            "extra": "iterations: 3544\ncpu: 197945.1185101564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 853613.1829269534,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 853569.5121951075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 726828.2901553988,
            "unit": "ns/iter",
            "extra": "iterations: 965\ncpu: 726829.015544045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 715125.7879713674,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 715094.0876656503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 726306.7562241305,
            "unit": "ns/iter",
            "extra": "iterations: 964\ncpu: 726275.20746888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 468009.8335579365,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 467987.8706199501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 709361.2277328509,
            "unit": "ns/iter",
            "extra": "iterations: 988\ncpu: 709316.3967611315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26325.145353875156,
            "unit": "ns/iter",
            "extra": "iterations: 26549\ncpu: 26323.12328147934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 128418.8376694698,
            "unit": "ns/iter",
            "extra": "iterations: 5458\ncpu: 128411.3777940626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 103761.5033348052,
            "unit": "ns/iter",
            "extra": "iterations: 6747\ncpu: 103756.78079146465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 103903.88426199992,
            "unit": "ns/iter",
            "extra": "iterations: 6748\ncpu: 103901.14107883975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 105242.7295559839,
            "unit": "ns/iter",
            "extra": "iterations: 6689\ncpu: 105234.20541186992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 198580.4410008383,
            "unit": "ns/iter",
            "extra": "iterations: 3517\ncpu: 198568.55274381646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 856136.7179487024,
            "unit": "ns/iter",
            "extra": "iterations: 819\ncpu: 856103.663003654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 729220.2249999491,
            "unit": "ns/iter",
            "extra": "iterations: 960\ncpu: 729188.6458333341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 719142.9989732334,
            "unit": "ns/iter",
            "extra": "iterations: 974\ncpu: 719134.2915811146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 725694.1754932998,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 725679.9584631494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 465554.6889920369,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 465554.4429708176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 705541.7042253658,
            "unit": "ns/iter",
            "extra": "iterations: 994\ncpu: 705535.4124748497 ns\nthreads: 1"
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
        "date": 1702392462074,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8589.24774785907,
            "unit": "ns/iter",
            "extra": "iterations: 81256\ncpu: 8588.54976863247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 104033.18235650075,
            "unit": "ns/iter",
            "extra": "iterations: 8275\ncpu: 104029.48640483383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 200914.0332721652,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 200906.86094538783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 298701.76893807,
            "unit": "ns/iter",
            "extra": "iterations: 2891\ncpu: 298690.62608094094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 389122.16168478894,
            "unit": "ns/iter",
            "extra": "iterations: 2208\ncpu: 389103.7590579708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 482233.3647973557,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 482210.16102165484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 581542.1273458115,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 581506.5683646112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 541038.4250000106,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541038.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 618464.5429999591,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 618424.8000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6623.460036463802,
            "unit": "ns/iter",
            "extra": "iterations: 105859\ncpu: 6623.126989674944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5534.6055982126845,
            "unit": "ns/iter",
            "extra": "iterations: 123075\ncpu: 5534.479788746691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5367.596672064675,
            "unit": "ns/iter",
            "extra": "iterations: 130291\ncpu: 5367.537281930441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5428.466293882344,
            "unit": "ns/iter",
            "extra": "iterations: 128582\ncpu: 5428.2325675444545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9814.868395275747,
            "unit": "ns/iter",
            "extra": "iterations: 71464\ncpu: 9814.4506324863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 53570.30089637291,
            "unit": "ns/iter",
            "extra": "iterations: 15507\ncpu: 53568.3884697234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 208497.66209261026,
            "unit": "ns/iter",
            "extra": "iterations: 4081\ncpu: 208487.2825287922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 171363.5962545219,
            "unit": "ns/iter",
            "extra": "iterations: 4966\ncpu: 171357.06806282725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 168886.15116738775,
            "unit": "ns/iter",
            "extra": "iterations: 5054\ncpu: 168879.73882073603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 179588.04481967955,
            "unit": "ns/iter",
            "extra": "iterations: 4797\ncpu: 179583.38544923853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 381083.8192717738,
            "unit": "ns/iter",
            "extra": "iterations: 2252\ncpu: 381080.37300177617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3177668.246621579,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3177518.5810810775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2636780.1887324317,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2636661.408450701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2542276.437158372,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2542163.1147540975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2590657.104972641,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2590511.8784530354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1553426.8033331954,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1553364.1666666695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2516024.262162183,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2515910.8108108067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10834008.459183604,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10833373.469387785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6237513.304635563,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6237225.827814583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12854078.421685655,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12853628.915662676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52375.9512535697,
            "unit": "ns/iter",
            "extra": "iterations: 15755\ncpu: 52373.54490637879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 221467.38664593853,
            "unit": "ns/iter",
            "extra": "iterations: 3864\ncpu: 221459.4202898558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 174940.55729594358,
            "unit": "ns/iter",
            "extra": "iterations: 4852\ncpu: 174931.98680956344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 176175.37082130156,
            "unit": "ns/iter",
            "extra": "iterations: 4846\ncpu: 176168.79900949312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 178654.91391709133,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 178647.8637901868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 386103.7844364655,
            "unit": "ns/iter",
            "extra": "iterations: 2236\ncpu: 386090.2057245098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3167579.5170068946,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3167495.5782312793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2632891.0168540766,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2632799.4382022386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2566697.524725259,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2566511.538461526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2586330.837988684,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2586239.3854748714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1551604.9382304482,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1551542.2370617704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2531913.0806451538,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2531707.526881724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11004348.234694459,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 11003868.367346931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6391560.878378678,
            "unit": "ns/iter",
            "extra": "iterations: 148\ncpu: 6391268.243243239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 49501.9544149327,
            "unit": "ns/iter",
            "extra": "iterations: 16716\ncpu: 49499.4795405601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 213930.1625282174,
            "unit": "ns/iter",
            "extra": "iterations: 3987\ncpu: 213922.04665161882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 175709.5570220601,
            "unit": "ns/iter",
            "extra": "iterations: 4849\ncpu: 175702.9284388525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 174065.5254237119,
            "unit": "ns/iter",
            "extra": "iterations: 4897\ncpu: 174054.44149479317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 176062.62476625256,
            "unit": "ns/iter",
            "extra": "iterations: 4813\ncpu: 176054.24890920328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 382328.90319719026,
            "unit": "ns/iter",
            "extra": "iterations: 2252\ncpu: 382323.5346358774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3165777.425675512,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3165661.486486499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2633265.991573297,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2633126.1235955027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2550651.3671232774,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2550544.383561649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2580008.743093986,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2579924.5856353585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1560910.735785924,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1560859.3645484927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2537707.6000000746,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2537600.810810826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3037.5618913228222,
            "unit": "ns/iter",
            "extra": "iterations: 230315\ncpu: 3037.472157697069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 22535.26344623283,
            "unit": "ns/iter",
            "extra": "iterations: 31031\ncpu: 22535.23250942606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17959.407410248838,
            "unit": "ns/iter",
            "extra": "iterations: 39108\ncpu: 17958.70410146259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17225.888776689568,
            "unit": "ns/iter",
            "extra": "iterations: 40603\ncpu: 17225.16070241105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12944.82528204106,
            "unit": "ns/iter",
            "extra": "iterations: 54070\ncpu: 12944.168670242338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 89016.26893315079,
            "unit": "ns/iter",
            "extra": "iterations: 7883\ncpu: 89012.20347583471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 204435.18411024232,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 204428.78921137215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 50656.43450617851,
            "unit": "ns/iter",
            "extra": "iterations: 13841\ncpu: 50655.94248970454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 50276.74283445549,
            "unit": "ns/iter",
            "extra": "iterations: 13851\ncpu: 50272.89726373511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 50517.50625315538,
            "unit": "ns/iter",
            "extra": "iterations: 13833\ncpu: 50514.891925106924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 106888.19969467283,
            "unit": "ns/iter",
            "extra": "iterations: 6550\ncpu: 106883.66412213646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 94973.95985896014,
            "unit": "ns/iter",
            "extra": "iterations: 7374\ncpu: 94971.58936805041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25816.883053660073,
            "unit": "ns/iter",
            "extra": "iterations: 27115\ncpu: 25815.832565000743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 127366.98854543896,
            "unit": "ns/iter",
            "extra": "iterations: 5500\ncpu: 127365.43636363639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 103003.23042835612,
            "unit": "ns/iter",
            "extra": "iterations: 6770\ncpu: 102998.64106351456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 103542.37118419337,
            "unit": "ns/iter",
            "extra": "iterations: 6781\ncpu: 103536.97094823795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 104999.2064747037,
            "unit": "ns/iter",
            "extra": "iterations: 6703\ncpu: 104991.82455616961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 197959.84762981097,
            "unit": "ns/iter",
            "extra": "iterations: 3544\ncpu: 197945.1185101564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 853613.1829269534,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 853569.5121951075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 726828.2901553988,
            "unit": "ns/iter",
            "extra": "iterations: 965\ncpu: 726829.015544045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 715125.7879713674,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 715094.0876656503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 726306.7562241305,
            "unit": "ns/iter",
            "extra": "iterations: 964\ncpu: 726275.20746888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 468009.8335579365,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 467987.8706199501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 709361.2277328509,
            "unit": "ns/iter",
            "extra": "iterations: 988\ncpu: 709316.3967611315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26325.145353875156,
            "unit": "ns/iter",
            "extra": "iterations: 26549\ncpu: 26323.12328147934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 128418.8376694698,
            "unit": "ns/iter",
            "extra": "iterations: 5458\ncpu: 128411.3777940626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 103761.5033348052,
            "unit": "ns/iter",
            "extra": "iterations: 6747\ncpu: 103756.78079146465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 103903.88426199992,
            "unit": "ns/iter",
            "extra": "iterations: 6748\ncpu: 103901.14107883975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 105242.7295559839,
            "unit": "ns/iter",
            "extra": "iterations: 6689\ncpu: 105234.20541186992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 198580.4410008383,
            "unit": "ns/iter",
            "extra": "iterations: 3517\ncpu: 198568.55274381646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 856136.7179487024,
            "unit": "ns/iter",
            "extra": "iterations: 819\ncpu: 856103.663003654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 729220.2249999491,
            "unit": "ns/iter",
            "extra": "iterations: 960\ncpu: 729188.6458333341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 719142.9989732334,
            "unit": "ns/iter",
            "extra": "iterations: 974\ncpu: 719134.2915811146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 725694.1754932998,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 725679.9584631494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 465554.6889920369,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 465554.4429708176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 705541.7042253658,
            "unit": "ns/iter",
            "extra": "iterations: 994\ncpu: 705535.4124748497 ns\nthreads: 1"
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
        "date": 1702392462074,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8589.24774785907,
            "unit": "ns/iter",
            "extra": "iterations: 81256\ncpu: 8588.54976863247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 104033.18235650075,
            "unit": "ns/iter",
            "extra": "iterations: 8275\ncpu: 104029.48640483383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 200914.0332721652,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 200906.86094538783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 298701.76893807,
            "unit": "ns/iter",
            "extra": "iterations: 2891\ncpu: 298690.62608094094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 389122.16168478894,
            "unit": "ns/iter",
            "extra": "iterations: 2208\ncpu: 389103.7590579708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 482233.3647973557,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 482210.16102165484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 581542.1273458115,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 581506.5683646112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 541038.4250000106,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541038.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 618464.5429999591,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 618424.8000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6623.460036463802,
            "unit": "ns/iter",
            "extra": "iterations: 105859\ncpu: 6623.126989674944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5534.6055982126845,
            "unit": "ns/iter",
            "extra": "iterations: 123075\ncpu: 5534.479788746691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5367.596672064675,
            "unit": "ns/iter",
            "extra": "iterations: 130291\ncpu: 5367.537281930441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5428.466293882344,
            "unit": "ns/iter",
            "extra": "iterations: 128582\ncpu: 5428.2325675444545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9814.868395275747,
            "unit": "ns/iter",
            "extra": "iterations: 71464\ncpu: 9814.4506324863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 53570.30089637291,
            "unit": "ns/iter",
            "extra": "iterations: 15507\ncpu: 53568.3884697234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 208497.66209261026,
            "unit": "ns/iter",
            "extra": "iterations: 4081\ncpu: 208487.2825287922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 171363.5962545219,
            "unit": "ns/iter",
            "extra": "iterations: 4966\ncpu: 171357.06806282725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 168886.15116738775,
            "unit": "ns/iter",
            "extra": "iterations: 5054\ncpu: 168879.73882073603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 179588.04481967955,
            "unit": "ns/iter",
            "extra": "iterations: 4797\ncpu: 179583.38544923853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 381083.8192717738,
            "unit": "ns/iter",
            "extra": "iterations: 2252\ncpu: 381080.37300177617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3177668.246621579,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3177518.5810810775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2636780.1887324317,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2636661.408450701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2542276.437158372,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2542163.1147540975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2590657.104972641,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2590511.8784530354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1553426.8033331954,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1553364.1666666695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2516024.262162183,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2515910.8108108067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10834008.459183604,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10833373.469387785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6237513.304635563,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6237225.827814583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12854078.421685655,
            "unit": "ns/iter",
            "extra": "iterations: 83\ncpu: 12853628.915662676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52375.9512535697,
            "unit": "ns/iter",
            "extra": "iterations: 15755\ncpu: 52373.54490637879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 221467.38664593853,
            "unit": "ns/iter",
            "extra": "iterations: 3864\ncpu: 221459.4202898558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 174940.55729594358,
            "unit": "ns/iter",
            "extra": "iterations: 4852\ncpu: 174931.98680956344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 176175.37082130156,
            "unit": "ns/iter",
            "extra": "iterations: 4846\ncpu: 176168.79900949312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 178654.91391709133,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 178647.8637901868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 386103.7844364655,
            "unit": "ns/iter",
            "extra": "iterations: 2236\ncpu: 386090.2057245098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3167579.5170068946,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3167495.5782312793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2632891.0168540766,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2632799.4382022386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2566697.524725259,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2566511.538461526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2586330.837988684,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2586239.3854748714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1551604.9382304482,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 1551542.2370617704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2531913.0806451538,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2531707.526881724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11004348.234694459,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 11003868.367346931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6391560.878378678,
            "unit": "ns/iter",
            "extra": "iterations: 148\ncpu: 6391268.243243239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 49501.9544149327,
            "unit": "ns/iter",
            "extra": "iterations: 16716\ncpu: 49499.4795405601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 213930.1625282174,
            "unit": "ns/iter",
            "extra": "iterations: 3987\ncpu: 213922.04665161882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 175709.5570220601,
            "unit": "ns/iter",
            "extra": "iterations: 4849\ncpu: 175702.9284388525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 174065.5254237119,
            "unit": "ns/iter",
            "extra": "iterations: 4897\ncpu: 174054.44149479317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 176062.62476625256,
            "unit": "ns/iter",
            "extra": "iterations: 4813\ncpu: 176054.24890920328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 382328.90319719026,
            "unit": "ns/iter",
            "extra": "iterations: 2252\ncpu: 382323.5346358774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3165777.425675512,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3165661.486486499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2633265.991573297,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2633126.1235955027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2550651.3671232774,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2550544.383561649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2580008.743093986,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2579924.5856353585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1560910.735785924,
            "unit": "ns/iter",
            "extra": "iterations: 598\ncpu: 1560859.3645484927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2537707.6000000746,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2537600.810810826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3037.5618913228222,
            "unit": "ns/iter",
            "extra": "iterations: 230315\ncpu: 3037.472157697069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 22535.26344623283,
            "unit": "ns/iter",
            "extra": "iterations: 31031\ncpu: 22535.23250942606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17959.407410248838,
            "unit": "ns/iter",
            "extra": "iterations: 39108\ncpu: 17958.70410146259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17225.888776689568,
            "unit": "ns/iter",
            "extra": "iterations: 40603\ncpu: 17225.16070241105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12944.82528204106,
            "unit": "ns/iter",
            "extra": "iterations: 54070\ncpu: 12944.168670242338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 89016.26893315079,
            "unit": "ns/iter",
            "extra": "iterations: 7883\ncpu: 89012.20347583471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 204435.18411024232,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 204428.78921137215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 50656.43450617851,
            "unit": "ns/iter",
            "extra": "iterations: 13841\ncpu: 50655.94248970454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 50276.74283445549,
            "unit": "ns/iter",
            "extra": "iterations: 13851\ncpu: 50272.89726373511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 50517.50625315538,
            "unit": "ns/iter",
            "extra": "iterations: 13833\ncpu: 50514.891925106924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 106888.19969467283,
            "unit": "ns/iter",
            "extra": "iterations: 6550\ncpu: 106883.66412213646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 94973.95985896014,
            "unit": "ns/iter",
            "extra": "iterations: 7374\ncpu: 94971.58936805041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25816.883053660073,
            "unit": "ns/iter",
            "extra": "iterations: 27115\ncpu: 25815.832565000743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 127366.98854543896,
            "unit": "ns/iter",
            "extra": "iterations: 5500\ncpu: 127365.43636363639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 103003.23042835612,
            "unit": "ns/iter",
            "extra": "iterations: 6770\ncpu: 102998.64106351456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 103542.37118419337,
            "unit": "ns/iter",
            "extra": "iterations: 6781\ncpu: 103536.97094823795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 104999.2064747037,
            "unit": "ns/iter",
            "extra": "iterations: 6703\ncpu: 104991.82455616961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 197959.84762981097,
            "unit": "ns/iter",
            "extra": "iterations: 3544\ncpu: 197945.1185101564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 853613.1829269534,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 853569.5121951075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 726828.2901553988,
            "unit": "ns/iter",
            "extra": "iterations: 965\ncpu: 726829.015544045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 715125.7879713674,
            "unit": "ns/iter",
            "extra": "iterations: 981\ncpu: 715094.0876656503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 726306.7562241305,
            "unit": "ns/iter",
            "extra": "iterations: 964\ncpu: 726275.20746888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 468009.8335579365,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 467987.8706199501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 709361.2277328509,
            "unit": "ns/iter",
            "extra": "iterations: 988\ncpu: 709316.3967611315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26325.145353875156,
            "unit": "ns/iter",
            "extra": "iterations: 26549\ncpu: 26323.12328147934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 128418.8376694698,
            "unit": "ns/iter",
            "extra": "iterations: 5458\ncpu: 128411.3777940626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 103761.5033348052,
            "unit": "ns/iter",
            "extra": "iterations: 6747\ncpu: 103756.78079146465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 103903.88426199992,
            "unit": "ns/iter",
            "extra": "iterations: 6748\ncpu: 103901.14107883975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 105242.7295559839,
            "unit": "ns/iter",
            "extra": "iterations: 6689\ncpu: 105234.20541186992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 198580.4410008383,
            "unit": "ns/iter",
            "extra": "iterations: 3517\ncpu: 198568.55274381646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 856136.7179487024,
            "unit": "ns/iter",
            "extra": "iterations: 819\ncpu: 856103.663003654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 729220.2249999491,
            "unit": "ns/iter",
            "extra": "iterations: 960\ncpu: 729188.6458333341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 719142.9989732334,
            "unit": "ns/iter",
            "extra": "iterations: 974\ncpu: 719134.2915811146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 725694.1754932998,
            "unit": "ns/iter",
            "extra": "iterations: 963\ncpu: 725679.9584631494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 465554.6889920369,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 465554.4429708176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 705541.7042253658,
            "unit": "ns/iter",
            "extra": "iterations: 994\ncpu: 705535.4124748497 ns\nthreads: 1"
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
        "date": 1702394191057,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8608.859074688595,
            "unit": "ns/iter",
            "extra": "iterations: 81270\ncpu: 8608.59726836471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 105751.9633197439,
            "unit": "ns/iter",
            "extra": "iterations: 8097\ncpu: 105749.1293071508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 205029.48036465968,
            "unit": "ns/iter",
            "extra": "iterations: 4278\ncpu: 205027.9102384292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 306013.0182009124,
            "unit": "ns/iter",
            "extra": "iterations: 2857\ncpu: 306008.33041652077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 400339.3517401542,
            "unit": "ns/iter",
            "extra": "iterations: 2155\ncpu: 400331.8329466357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 497793.11415523884,
            "unit": "ns/iter",
            "extra": "iterations: 1752\ncpu: 497765.35388127854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 598045.9890261313,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 598001.9204389577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 559185.64600006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559175.8000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 638925.0040000434,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 638888.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6893.091960196965,
            "unit": "ns/iter",
            "extra": "iterations: 102403\ncpu: 6892.5148677284915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5377.809038203331,
            "unit": "ns/iter",
            "extra": "iterations: 130225\ncpu: 5377.766173929739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5458.587316154809,
            "unit": "ns/iter",
            "extra": "iterations: 128573\ncpu: 5458.18795548054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5519.367284048257,
            "unit": "ns/iter",
            "extra": "iterations: 127204\ncpu: 5519.25725606113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9956.021993362052,
            "unit": "ns/iter",
            "extra": "iterations: 70203\ncpu: 9955.92211159068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50586.345178288335,
            "unit": "ns/iter",
            "extra": "iterations: 16322\ncpu: 50585.142752113745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 207202.44882082092,
            "unit": "ns/iter",
            "extra": "iterations: 4113\ncpu: 207202.94189156333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 168922.07200975835,
            "unit": "ns/iter",
            "extra": "iterations: 4916\ncpu: 168920.62652563068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 167812.66069295479,
            "unit": "ns/iter",
            "extra": "iterations: 5022\ncpu: 167810.37435284743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 174087.11728648347,
            "unit": "ns/iter",
            "extra": "iterations: 4894\ncpu: 174084.49121373091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 376424.28274968243,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 376419.3255512327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3269410.9895470566,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3269344.2508710725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2645371.0734461946,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2645268.0790960416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2610311.2625697176,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2610316.480446927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2672707.767241415,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2672687.93103448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1583639.9914676605,
            "unit": "ns/iter",
            "extra": "iterations: 586\ncpu: 1583632.0819112682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2569987.5911601787,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2569963.535911601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11067873.08333305,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11067683.333333338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6177030.289473345,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6176927.631578949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12987643.402437897,
            "unit": "ns/iter",
            "extra": "iterations: 82\ncpu: 12987414.634146346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52643.59035684194,
            "unit": "ns/iter",
            "extra": "iterations: 15721\ncpu: 52640.69715666943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 215560.42566036762,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 215549.30817609964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 178420.96722653788,
            "unit": "ns/iter",
            "extra": "iterations: 4882\ncpu: 178418.8652191733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 173391.84091807975,
            "unit": "ns/iter",
            "extra": "iterations: 5054\ncpu: 173390.70043529928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 180895.20495971953,
            "unit": "ns/iter",
            "extra": "iterations: 4718\ncpu: 180895.57015684686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 380261.2642825809,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 380255.0370693424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3243974.100371572,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3243934.2007434913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2645553.317280625,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2645530.028328618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2649081.5965907187,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2649051.1363636306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2696319.5129681965,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2696272.3342939443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1596376.9137930865,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1596331.724137924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2583828.9030469195,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2583833.5180055336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11307417.957895221,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11307210.52631579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6260779.288591008,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 6260424.16107384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 49031.82181968591,
            "unit": "ns/iter",
            "extra": "iterations: 16893\ncpu: 49030.1545018645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 213579.57164214272,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 213565.4622476963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 177452.74500832136,
            "unit": "ns/iter",
            "extra": "iterations: 4808\ncpu: 177450.43677204667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 165512.2049291606,
            "unit": "ns/iter",
            "extra": "iterations: 5153\ncpu: 165507.85949932114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 171253.13711631318,
            "unit": "ns/iter",
            "extra": "iterations: 4952\ncpu: 171251.51453958073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 379232.7765679328,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 379224.73867595795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3272503.368420905,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3272483.859649106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2640771.011331234,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2640748.158640228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2611040.1483680992,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2611046.884273005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2669705.6600002204,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2669691.4285714356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1605909.517241477,
            "unit": "ns/iter",
            "extra": "iterations: 580\ncpu: 1605896.0344827573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2588447.2277776166,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2588452.222222237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2982.3498298803283,
            "unit": "ns/iter",
            "extra": "iterations: 235423\ncpu: 2982.2273099909635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 22497.428097309017,
            "unit": "ns/iter",
            "extra": "iterations: 31035\ncpu: 22497.28693410675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17600.171047007403,
            "unit": "ns/iter",
            "extra": "iterations: 39761\ncpu: 17599.79879781692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 16665.86411124544,
            "unit": "ns/iter",
            "extra": "iterations: 41350\ncpu: 16665.8887545345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12860.19174008744,
            "unit": "ns/iter",
            "extra": "iterations: 54480\ncpu: 12860.227606461041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 89124.07487584844,
            "unit": "ns/iter",
            "extra": "iterations: 7853\ncpu: 89122.95937858081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 211005.85456189726,
            "unit": "ns/iter",
            "extra": "iterations: 3321\ncpu: 211006.1126166797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 50939.59693469702,
            "unit": "ns/iter",
            "extra": "iterations: 13767\ncpu: 50938.89736325928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 51293.898846034055,
            "unit": "ns/iter",
            "extra": "iterations: 13692\ncpu: 51293.16389132289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 51233.18730275393,
            "unit": "ns/iter",
            "extra": "iterations: 13625\ncpu: 51232.60917431136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 109445.6124139971,
            "unit": "ns/iter",
            "extra": "iterations: 6396\ncpu: 109445.8724202631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 97336.1475819972,
            "unit": "ns/iter",
            "extra": "iterations: 7196\ncpu: 97335.4502501408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26481.247974251357,
            "unit": "ns/iter",
            "extra": "iterations: 26410\ncpu: 26480.931465354064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 131909.82636534944,
            "unit": "ns/iter",
            "extra": "iterations: 5310\ncpu: 131910.05649717513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 106445.72534464336,
            "unit": "ns/iter",
            "extra": "iterations: 6601\ncpu: 106440.99378882041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 105278.16984819592,
            "unit": "ns/iter",
            "extra": "iterations: 6653\ncpu: 105275.86051405357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 107710.44818014055,
            "unit": "ns/iter",
            "extra": "iterations: 6484\ncpu: 107707.89636027005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 196954.06903351992,
            "unit": "ns/iter",
            "extra": "iterations: 3549\ncpu: 196943.5052127372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 890624.6662436712,
            "unit": "ns/iter",
            "extra": "iterations: 788\ncpu: 890613.07106598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 734565.3945435635,
            "unit": "ns/iter",
            "extra": "iterations: 953\ncpu: 734551.4165792132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 735824.479623821,
            "unit": "ns/iter",
            "extra": "iterations: 957\ncpu: 735807.7324973831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 749559.7970085378,
            "unit": "ns/iter",
            "extra": "iterations: 936\ncpu: 749553.632478637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 474546.459918464,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 474547.89402174467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 719338.3053278733,
            "unit": "ns/iter",
            "extra": "iterations: 976\ncpu: 719333.2991803186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26836.615169934757,
            "unit": "ns/iter",
            "extra": "iterations: 26157\ncpu: 26835.252513667234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 133266.4813895743,
            "unit": "ns/iter",
            "extra": "iterations: 5239\ncpu: 133258.31265508523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 106820.85095716377,
            "unit": "ns/iter",
            "extra": "iterations: 6582\ncpu: 106816.27164995424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 106326.07208201541,
            "unit": "ns/iter",
            "extra": "iterations: 6340\ncpu: 106326.29337539288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 108948.84692928898,
            "unit": "ns/iter",
            "extra": "iterations: 6448\ncpu: 108942.67990074468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 201207.11864404602,
            "unit": "ns/iter",
            "extra": "iterations: 3481\ncpu: 201195.57598391562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 880827.4645570571,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 880769.2405063331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 740696.0116033544,
            "unit": "ns/iter",
            "extra": "iterations: 948\ncpu: 740648.7341772135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 733186.8623949464,
            "unit": "ns/iter",
            "extra": "iterations: 952\ncpu: 733187.7100840288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 738342.2597265887,
            "unit": "ns/iter",
            "extra": "iterations: 951\ncpu: 738284.0168243994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 477320.00068168755,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 477316.08725289546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 724403.7662203538,
            "unit": "ns/iter",
            "extra": "iterations: 971\ncpu: 724370.5458290478 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}