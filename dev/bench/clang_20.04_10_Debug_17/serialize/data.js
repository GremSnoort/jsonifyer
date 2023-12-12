window.BENCHMARK_DATA = {
  "lastUpdate": 1702392463976,
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
      }
    ]
  }
}