window.BENCHMARK_DATA = {
  "lastUpdate": 1705958203128,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-16 20.04 Debug c++-17": [
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702489600708,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14355.47338017596,
            "unit": "ns/iter",
            "extra": "iterations: 48817\ncpu: 14354.843599565727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 114572.52226003804,
            "unit": "ns/iter",
            "extra": "iterations: 7345\ncpu: 114563.74404356706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 216262.8574975171,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 216255.98311817273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 314190.47613843123,
            "unit": "ns/iter",
            "extra": "iterations: 2745\ncpu: 314175.26411657565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 412279.9853011283,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 412254.95495495497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 515926.4808032839,
            "unit": "ns/iter",
            "extra": "iterations: 1693\ncpu: 515913.4081512108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 610378.3856438443,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 610343.4201266719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 572328.0099999784,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572308.6000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 653917.1419999548,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653863.7999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11410.165824805545,
            "unit": "ns/iter",
            "extra": "iterations: 61372\ncpu: 11409.916574333582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9434.726099446541,
            "unit": "ns/iter",
            "extra": "iterations: 74151\ncpu: 9434.723739396637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9530.300664181123,
            "unit": "ns/iter",
            "extra": "iterations: 73474\ncpu: 9529.746577020427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9563.186826985368,
            "unit": "ns/iter",
            "extra": "iterations: 73271\ncpu: 9562.776541878777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15651.211815496988,
            "unit": "ns/iter",
            "extra": "iterations: 44704\ncpu: 15649.961972083025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 49910.38009938009,
            "unit": "ns/iter",
            "extra": "iterations: 16301\ncpu: 49908.71112201705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 233066.20263231156,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 233055.36057033174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 184928.28432222758,
            "unit": "ns/iter",
            "extra": "iterations: 4618\ncpu: 184919.7055002166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 185006.38155047136,
            "unit": "ns/iter",
            "extra": "iterations: 4618\ncpu: 184994.8462537895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 182504.04177377242,
            "unit": "ns/iter",
            "extra": "iterations: 4668\ncpu: 182493.5304198798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 427786.0974534669,
            "unit": "ns/iter",
            "extra": "iterations: 2042\ncpu: 427772.38001958834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3594458.364341071,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3594199.2248062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2861057.2693497734,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2860938.0804953547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2880472.375776414,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2880335.0931677013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2911104.7421386205,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2910963.83647798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1678553.0362976335,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1678446.6424682434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2813793.3495441056,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2813653.4954407234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10793880.535354191,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10793606.060606075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6253979.7114092205,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 6253754.3624161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14292306.56756809,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14291939.189189225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58075.59424651821,
            "unit": "ns/iter",
            "extra": "iterations: 14287\ncpu: 58074.38930496272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 274580.8983050947,
            "unit": "ns/iter",
            "extra": "iterations: 3127\ncpu: 274571.8260313411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 211131.44863266763,
            "unit": "ns/iter",
            "extra": "iterations: 4059\ncpu: 211125.54816457222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 214965.3422433241,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 214961.72870347375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 212583.8874287379,
            "unit": "ns/iter",
            "extra": "iterations: 4033\ncpu: 212576.2955616176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 462613.2714132602,
            "unit": "ns/iter",
            "extra": "iterations: 1868\ncpu: 462594.32548179553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3665998.5983932307,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3665903.2128514023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2921304.490566153,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2921265.094339629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2937986.851734795,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2937882.965299677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2950473.6835445794,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2950411.0759493643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1723429.0222221364,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1723415.1851851912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2861207.37116541,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2861145.7055214653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11046830.835051803,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11046404.123711342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6568010.929577629,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6567923.943661944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 47459.03593404974,
            "unit": "ns/iter",
            "extra": "iterations: 17226\ncpu: 47457.92987344724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 241631.66239083532,
            "unit": "ns/iter",
            "extra": "iterations: 3664\ncpu: 241617.2489082978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 189920.39262040617,
            "unit": "ns/iter",
            "extra": "iterations: 4526\ncpu: 189912.7485638545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 186161.0034926906,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 186149.7053045187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 187079.573280605,
            "unit": "ns/iter",
            "extra": "iterations: 4551\ncpu: 187068.55636123908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 429936.96105841844,
            "unit": "ns/iter",
            "extra": "iterations: 2003\ncpu: 429909.8352471311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3618561.3346302444,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3618496.4980544928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2858479.076923266,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2858434.153846168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2918366.7053292305,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2918154.231974915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2912255.187500179,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2912158.1250000084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1694052.1981650568,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1693930.8256880674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2829651.8810976306,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2829507.926829266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5723.434733423638,
            "unit": "ns/iter",
            "extra": "iterations: 122873\ncpu: 5723.016447877091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32400.488642144865,
            "unit": "ns/iter",
            "extra": "iterations: 21615\ncpu: 32398.824890122527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26050.8738064022,
            "unit": "ns/iter",
            "extra": "iterations: 26705\ncpu: 26049.12563190407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25990.519434626232,
            "unit": "ns/iter",
            "extra": "iterations: 26885\ncpu: 25989.08685140403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20191.574218297104,
            "unit": "ns/iter",
            "extra": "iterations: 34668\ncpu: 20189.930194992525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 125123.1006244455,
            "unit": "ns/iter",
            "extra": "iterations: 5605\ncpu: 125118.19803746772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 245167.0322806932,
            "unit": "ns/iter",
            "extra": "iterations: 2850\ncpu: 245148.80701754565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62486.349959850064,
            "unit": "ns/iter",
            "extra": "iterations: 11207\ncpu: 62485.77674667668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62866.97829388786,
            "unit": "ns/iter",
            "extra": "iterations: 11195\ncpu: 62865.72577043337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 62480.673300021466,
            "unit": "ns/iter",
            "extra": "iterations: 11206\ncpu: 62477.41388541845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 125383.19135580648,
            "unit": "ns/iter",
            "extra": "iterations: 5576\ncpu: 125379.62697274011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 115284.01681226326,
            "unit": "ns/iter",
            "extra": "iterations: 6067\ncpu: 115281.6218889095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38961.370409580784,
            "unit": "ns/iter",
            "extra": "iterations: 17945\ncpu: 38959.97213708616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 189461.79402173188,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 189455.43478261013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 151484.49891915763,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 151479.37743190565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 151626.4997828022,
            "unit": "ns/iter",
            "extra": "iterations: 4604\ncpu: 151624.02258905562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 152478.13893728988,
            "unit": "ns/iter",
            "extra": "iterations: 4592\ncpu: 152476.6986062701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 269177.83890813374,
            "unit": "ns/iter",
            "extra": "iterations: 2601\ncpu: 269172.31833909807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1057845.208774559,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1057822.6928895493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 871238.8715710794,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 871221.6957605887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 881160.6322418072,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 881138.1612090726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 880160.7616646404,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 880138.965952073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 581945.9034941535,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 581920.1331114894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 867773.1985111312,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 867753.5980148977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39134.55051719061,
            "unit": "ns/iter",
            "extra": "iterations: 17885\ncpu: 39134.17388873402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 192894.30060841425,
            "unit": "ns/iter",
            "extra": "iterations: 3616\ncpu: 192891.20575221206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 155639.7029195619,
            "unit": "ns/iter",
            "extra": "iterations: 4487\ncpu: 155636.68375306632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 156036.88286479088,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 156025.74743418006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 157386.42386922787,
            "unit": "ns/iter",
            "extra": "iterations: 4466\ncpu: 157376.39946260667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 274537.64593116473,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 274521.7136150244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1056043.7028658027,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1056002.5641025503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 871792.5895523003,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 871791.5422885586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 879310.860025205,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 879286.1286254717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 873956.259675389,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 873920.4744069942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 581498.4033195174,
            "unit": "ns/iter",
            "extra": "iterations: 1205\ncpu: 581462.8215767596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 869131.0820895795,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 869086.5671641908 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702489600708,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14355.47338017596,
            "unit": "ns/iter",
            "extra": "iterations: 48817\ncpu: 14354.843599565727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 114572.52226003804,
            "unit": "ns/iter",
            "extra": "iterations: 7345\ncpu: 114563.74404356706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 216262.8574975171,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 216255.98311817273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 314190.47613843123,
            "unit": "ns/iter",
            "extra": "iterations: 2745\ncpu: 314175.26411657565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 412279.9853011283,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 412254.95495495497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 515926.4808032839,
            "unit": "ns/iter",
            "extra": "iterations: 1693\ncpu: 515913.4081512108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 610378.3856438443,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 610343.4201266719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 572328.0099999784,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572308.6000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 653917.1419999548,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653863.7999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11410.165824805545,
            "unit": "ns/iter",
            "extra": "iterations: 61372\ncpu: 11409.916574333582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9434.726099446541,
            "unit": "ns/iter",
            "extra": "iterations: 74151\ncpu: 9434.723739396637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9530.300664181123,
            "unit": "ns/iter",
            "extra": "iterations: 73474\ncpu: 9529.746577020427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9563.186826985368,
            "unit": "ns/iter",
            "extra": "iterations: 73271\ncpu: 9562.776541878777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15651.211815496988,
            "unit": "ns/iter",
            "extra": "iterations: 44704\ncpu: 15649.961972083025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 49910.38009938009,
            "unit": "ns/iter",
            "extra": "iterations: 16301\ncpu: 49908.71112201705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 233066.20263231156,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 233055.36057033174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 184928.28432222758,
            "unit": "ns/iter",
            "extra": "iterations: 4618\ncpu: 184919.7055002166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 185006.38155047136,
            "unit": "ns/iter",
            "extra": "iterations: 4618\ncpu: 184994.8462537895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 182504.04177377242,
            "unit": "ns/iter",
            "extra": "iterations: 4668\ncpu: 182493.5304198798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 427786.0974534669,
            "unit": "ns/iter",
            "extra": "iterations: 2042\ncpu: 427772.38001958834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3594458.364341071,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3594199.2248062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2861057.2693497734,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2860938.0804953547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2880472.375776414,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2880335.0931677013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2911104.7421386205,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2910963.83647798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1678553.0362976335,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1678446.6424682434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2813793.3495441056,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2813653.4954407234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10793880.535354191,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10793606.060606075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6253979.7114092205,
            "unit": "ns/iter",
            "extra": "iterations: 149\ncpu: 6253754.3624161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14292306.56756809,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14291939.189189225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58075.59424651821,
            "unit": "ns/iter",
            "extra": "iterations: 14287\ncpu: 58074.38930496272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 274580.8983050947,
            "unit": "ns/iter",
            "extra": "iterations: 3127\ncpu: 274571.8260313411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 211131.44863266763,
            "unit": "ns/iter",
            "extra": "iterations: 4059\ncpu: 211125.54816457222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 214965.3422433241,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 214961.72870347375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 212583.8874287379,
            "unit": "ns/iter",
            "extra": "iterations: 4033\ncpu: 212576.2955616176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 462613.2714132602,
            "unit": "ns/iter",
            "extra": "iterations: 1868\ncpu: 462594.32548179553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3665998.5983932307,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3665903.2128514023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2921304.490566153,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2921265.094339629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2937986.851734795,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2937882.965299677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2950473.6835445794,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2950411.0759493643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1723429.0222221364,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1723415.1851851912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2861207.37116541,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2861145.7055214653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11046830.835051803,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11046404.123711342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6568010.929577629,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6567923.943661944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 47459.03593404974,
            "unit": "ns/iter",
            "extra": "iterations: 17226\ncpu: 47457.92987344724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 241631.66239083532,
            "unit": "ns/iter",
            "extra": "iterations: 3664\ncpu: 241617.2489082978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 189920.39262040617,
            "unit": "ns/iter",
            "extra": "iterations: 4526\ncpu: 189912.7485638545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 186161.0034926906,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 186149.7053045187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 187079.573280605,
            "unit": "ns/iter",
            "extra": "iterations: 4551\ncpu: 187068.55636123908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 429936.96105841844,
            "unit": "ns/iter",
            "extra": "iterations: 2003\ncpu: 429909.8352471311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3618561.3346302444,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3618496.4980544928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2858479.076923266,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2858434.153846168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2918366.7053292305,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2918154.231974915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2912255.187500179,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2912158.1250000084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1694052.1981650568,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1693930.8256880674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2829651.8810976306,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2829507.926829266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5723.434733423638,
            "unit": "ns/iter",
            "extra": "iterations: 122873\ncpu: 5723.016447877091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32400.488642144865,
            "unit": "ns/iter",
            "extra": "iterations: 21615\ncpu: 32398.824890122527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26050.8738064022,
            "unit": "ns/iter",
            "extra": "iterations: 26705\ncpu: 26049.12563190407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25990.519434626232,
            "unit": "ns/iter",
            "extra": "iterations: 26885\ncpu: 25989.08685140403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20191.574218297104,
            "unit": "ns/iter",
            "extra": "iterations: 34668\ncpu: 20189.930194992525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 125123.1006244455,
            "unit": "ns/iter",
            "extra": "iterations: 5605\ncpu: 125118.19803746772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 245167.0322806932,
            "unit": "ns/iter",
            "extra": "iterations: 2850\ncpu: 245148.80701754565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62486.349959850064,
            "unit": "ns/iter",
            "extra": "iterations: 11207\ncpu: 62485.77674667668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62866.97829388786,
            "unit": "ns/iter",
            "extra": "iterations: 11195\ncpu: 62865.72577043337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 62480.673300021466,
            "unit": "ns/iter",
            "extra": "iterations: 11206\ncpu: 62477.41388541845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 125383.19135580648,
            "unit": "ns/iter",
            "extra": "iterations: 5576\ncpu: 125379.62697274011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 115284.01681226326,
            "unit": "ns/iter",
            "extra": "iterations: 6067\ncpu: 115281.6218889095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38961.370409580784,
            "unit": "ns/iter",
            "extra": "iterations: 17945\ncpu: 38959.97213708616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 189461.79402173188,
            "unit": "ns/iter",
            "extra": "iterations: 3680\ncpu: 189455.43478261013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 151484.49891915763,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 151479.37743190565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 151626.4997828022,
            "unit": "ns/iter",
            "extra": "iterations: 4604\ncpu: 151624.02258905562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 152478.13893728988,
            "unit": "ns/iter",
            "extra": "iterations: 4592\ncpu: 152476.6986062701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 269177.83890813374,
            "unit": "ns/iter",
            "extra": "iterations: 2601\ncpu: 269172.31833909807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1057845.208774559,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1057822.6928895493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 871238.8715710794,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 871221.6957605887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 881160.6322418072,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 881138.1612090726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 880160.7616646404,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 880138.965952073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 581945.9034941535,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 581920.1331114894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 867773.1985111312,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 867753.5980148977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39134.55051719061,
            "unit": "ns/iter",
            "extra": "iterations: 17885\ncpu: 39134.17388873402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 192894.30060841425,
            "unit": "ns/iter",
            "extra": "iterations: 3616\ncpu: 192891.20575221206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 155639.7029195619,
            "unit": "ns/iter",
            "extra": "iterations: 4487\ncpu: 155636.68375306632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 156036.88286479088,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 156025.74743418006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 157386.42386922787,
            "unit": "ns/iter",
            "extra": "iterations: 4466\ncpu: 157376.39946260667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 274537.64593116473,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 274521.7136150244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1056043.7028658027,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1056002.5641025503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 871792.5895523003,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 871791.5422885586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 879310.860025205,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 879286.1286254717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 873956.259675389,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 873920.4744069942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 581498.4033195174,
            "unit": "ns/iter",
            "extra": "iterations: 1205\ncpu: 581462.8215767596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 869131.0820895795,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 869086.5671641908 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702492224657,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14060.699515082706,
            "unit": "ns/iter",
            "extra": "iterations: 48668\ncpu: 14060.670255609435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 111819.05679377614,
            "unit": "ns/iter",
            "extra": "iterations: 7448\ncpu: 111818.05853920514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 212459.37386837543,
            "unit": "ns/iter",
            "extra": "iterations: 4087\ncpu: 212458.77171519454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 310941.5693641342,
            "unit": "ns/iter",
            "extra": "iterations: 2768\ncpu: 310923.80780346814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 406149.880660356,
            "unit": "ns/iter",
            "extra": "iterations: 2120\ncpu: 406139.4811320752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 508432.79695726896,
            "unit": "ns/iter",
            "extra": "iterations: 1709\ncpu: 508428.6717378587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 605422.9540389956,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 605396.7270194985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 566426.4959999628,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566418.7000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 640433.8650000909,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640424.4000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11153.181089846332,
            "unit": "ns/iter",
            "extra": "iterations: 62284\ncpu: 11152.939759809893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9301.516744377604,
            "unit": "ns/iter",
            "extra": "iterations: 75279\ncpu: 9301.510381381253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9316.647954085258,
            "unit": "ns/iter",
            "extra": "iterations: 74050\ncpu: 9316.530722484811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9271.90007557028,
            "unit": "ns/iter",
            "extra": "iterations: 75427\ncpu: 9271.606984236405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15412.13091117574,
            "unit": "ns/iter",
            "extra": "iterations: 45359\ncpu: 15412.233514848218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 53346.95352941523,
            "unit": "ns/iter",
            "extra": "iterations: 15300\ncpu: 53343.8823529412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 233263.71620143994,
            "unit": "ns/iter",
            "extra": "iterations: 3654\ncpu: 233259.41434044857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 187432.5228023757,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 187432.297862965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 185242.99585694395,
            "unit": "ns/iter",
            "extra": "iterations: 4586\ncpu: 185242.7823811598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 183435.70693368305,
            "unit": "ns/iter",
            "extra": "iterations: 4644\ncpu: 183435.37898363426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 432237.87344909995,
            "unit": "ns/iter",
            "extra": "iterations: 2015\ncpu: 432218.8089330032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3461585.559701509,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3461580.9701492484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2781282.9277107646,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2781237.3493975927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2835067.4373088195,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2835010.0917431167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2832220.386706816,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2832172.5075528654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1638123.2753107948,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1638112.788632328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2725967.405882222,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2725947.9411764746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10504000.821781866,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10503718.81188118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6334972.020407786,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6335012.925170078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13852622.000000205,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 13852419.736842124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 50419.054400003915,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50419.39999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 285721.26084079844,
            "unit": "ns/iter",
            "extra": "iterations: 3021\ncpu: 285715.3260509778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 216140.02392343912,
            "unit": "ns/iter",
            "extra": "iterations: 3971\ncpu: 216137.79904306104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 216445.02653523211,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 216440.40940106154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 214296.78440714092,
            "unit": "ns/iter",
            "extra": "iterations: 3989\ncpu: 214295.0614189028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 464005.10048105946,
            "unit": "ns/iter",
            "extra": "iterations: 1871\ncpu: 463999.1448423322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3517974.6603053897,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3517972.51908396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2860497.2668713094,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2860517.4846625733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2874977.302180527,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2874906.8535825657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2894307.1925464747,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2894324.2236024826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1692304.8756855428,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1692280.4387568648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2795125.348348484,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2795066.966966977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10800469.616162097,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10799743.434343472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6485288.958041584,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6485008.391608381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 49222.45127742974,
            "unit": "ns/iter",
            "extra": "iterations: 16635\ncpu: 49222.38052299367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 236984.78181818084,
            "unit": "ns/iter",
            "extra": "iterations: 3630\ncpu: 236969.50413223082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 193554.6272604031,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 193550.20343580452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 189849.365393143,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 189838.64948911572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 186203.5698080267,
            "unit": "ns/iter",
            "extra": "iterations: 4584\ncpu: 186196.90226876136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 422811.41116007755,
            "unit": "ns/iter",
            "extra": "iterations: 2043\ncpu: 422797.50367107213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3465363.1203007917,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3465215.0375940064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2815792.954682783,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2815700.906344419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2832268.2691130424,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2832088.3792048725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2828037.4786584303,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2827979.8780487715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1668387.0519714416,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1668314.8745519787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2758772.4955490623,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2758612.4629080174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5707.6664050358595,
            "unit": "ns/iter",
            "extra": "iterations: 122310\ncpu: 5707.331371106195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32114.20557395535,
            "unit": "ns/iter",
            "extra": "iterations: 21744\ncpu: 32113.08406916851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25368.778974471395,
            "unit": "ns/iter",
            "extra": "iterations: 27576\ncpu: 25366.837104728806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25975.874239273788,
            "unit": "ns/iter",
            "extra": "iterations: 26948\ncpu: 25974.610360694634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20036.356789101097,
            "unit": "ns/iter",
            "extra": "iterations: 34931\ncpu: 20035.593026251667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 121832.08937868115,
            "unit": "ns/iter",
            "extra": "iterations: 5762\ncpu: 121832.83582089437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 236774.10120242095,
            "unit": "ns/iter",
            "extra": "iterations: 2994\ncpu: 236769.13827655374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61061.24250609795,
            "unit": "ns/iter",
            "extra": "iterations: 11476\ncpu: 61058.225862670275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61102.4877131618,
            "unit": "ns/iter",
            "extra": "iterations: 11435\ncpu: 61097.735024047965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61048.685791638825,
            "unit": "ns/iter",
            "extra": "iterations: 11451\ncpu: 61044.24067766925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 117151.36157023418,
            "unit": "ns/iter",
            "extra": "iterations: 5808\ncpu: 117152.0833333328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 112471.85985213808,
            "unit": "ns/iter",
            "extra": "iterations: 6222\ncpu: 112467.08453873404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38255.68232317682,
            "unit": "ns/iter",
            "extra": "iterations: 18182\ncpu: 38255.615443845556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 186617.74196120835,
            "unit": "ns/iter",
            "extra": "iterations: 3763\ncpu: 186608.5570023914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 148805.72118247102,
            "unit": "ns/iter",
            "extra": "iterations: 4702\ncpu: 148801.40365801804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 150112.3656444253,
            "unit": "ns/iter",
            "extra": "iterations: 4663\ncpu: 150100.9007076999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 151136.0094868568,
            "unit": "ns/iter",
            "extra": "iterations: 4638\ncpu: 151126.0672703766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 262485.5244177363,
            "unit": "ns/iter",
            "extra": "iterations: 2662\ncpu: 262470.24793388275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1002091.2789700177,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1002026.895565092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 856029.3663844609,
            "unit": "ns/iter",
            "extra": "iterations: 827\ncpu: 856034.8246674764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 858858.5398773066,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 858833.6196318946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 844229.0516826963,
            "unit": "ns/iter",
            "extra": "iterations: 832\ncpu: 844205.8894230818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 566791.0258481384,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 566749.1114701136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 847004.9648485656,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 846948.9696969822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39016.93582679489,
            "unit": "ns/iter",
            "extra": "iterations: 17967\ncpu: 39015.38932487291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 186912.10873630404,
            "unit": "ns/iter",
            "extra": "iterations: 3743\ncpu: 186900.26716537614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 151060.71345031427,
            "unit": "ns/iter",
            "extra": "iterations: 4617\ncpu: 151050.68226120842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 153637.0201710212,
            "unit": "ns/iter",
            "extra": "iterations: 4561\ncpu: 153631.15544836645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 153287.15678524502,
            "unit": "ns/iter",
            "extra": "iterations: 4554\ncpu: 153288.07641633667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 267053.86717558146,
            "unit": "ns/iter",
            "extra": "iterations: 2620\ncpu: 267044.8854961812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1015978.0640465526,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1015948.3260553183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 846780.9243902926,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 846735.7317073265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 859282.4113300599,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 859243.8423645279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 855859.9390244402,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 855864.8780487799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 559276.8030302551,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 559260.1275917096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 836875.4062127437,
            "unit": "ns/iter",
            "extra": "iterations: 837\ncpu: 836842.2939068027 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702503292374,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14492.550346506005,
            "unit": "ns/iter",
            "extra": "iterations: 48484\ncpu: 14492.215988779804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 116271.36133099518,
            "unit": "ns/iter",
            "extra": "iterations: 6822\ncpu: 116264.5558487247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 217182.8964570877,
            "unit": "ns/iter",
            "extra": "iterations: 4008\ncpu: 217170.1347305389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 316596.7776146876,
            "unit": "ns/iter",
            "extra": "iterations: 2725\ncpu: 316583.41284403676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 418181.4699952018,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 418158.71339414275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 517856.20892857085,
            "unit": "ns/iter",
            "extra": "iterations: 1680\ncpu: 517834.88095238095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 615480.8651525757,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 615455.6422995031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 575539.563999996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575536.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 661792.4460000495,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 661741.5000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11366.592316439457,
            "unit": "ns/iter",
            "extra": "iterations: 61560\ncpu: 11366.208576998051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9434.439446785947,
            "unit": "ns/iter",
            "extra": "iterations: 74257\ncpu: 9434.276903187576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9503.299568227676,
            "unit": "ns/iter",
            "extra": "iterations: 72955\ncpu: 9502.929202933305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9399.048318962354,
            "unit": "ns/iter",
            "extra": "iterations: 74567\ncpu: 9398.99151099011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15580.24907920932,
            "unit": "ns/iter",
            "extra": "iterations: 45070\ncpu: 15579.928999334361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 49753.18944213828,
            "unit": "ns/iter",
            "extra": "iterations: 16348\ncpu: 49751.91460729146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 233468.7326218097,
            "unit": "ns/iter",
            "extra": "iterations: 3654\ncpu: 233459.5511767923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 180106.97101143064,
            "unit": "ns/iter",
            "extra": "iterations: 4726\ncpu: 180105.6072788823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 179964.50818624283,
            "unit": "ns/iter",
            "extra": "iterations: 4703\ncpu: 179957.2400595363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 178425.25225415052,
            "unit": "ns/iter",
            "extra": "iterations: 4769\ncpu: 178419.81547494195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 433109.3185664338,
            "unit": "ns/iter",
            "extra": "iterations: 2009\ncpu: 433091.0403185666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3551047.9318184815,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3550924.621212123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2829535.1441718517,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2829404.601227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2852469.1661536614,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2852295.076923081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2847810.6134970086,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2847792.331288345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1648467.0767856154,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1648376.249999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2774348.856287483,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2774258.38323353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10610374.14999987,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10609283.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6310792.0952374805,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6310187.755102031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14043700.618420992,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 14042572.368421039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 50751.76210000336,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50744.30999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 286046.37317394617,
            "unit": "ns/iter",
            "extra": "iterations: 3012\ncpu: 286030.0464807435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 213567.69313093406,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 213541.33897461343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 212161.7490701908,
            "unit": "ns/iter",
            "extra": "iterations: 4033\ncpu: 212141.33399454577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 207981.2424168789,
            "unit": "ns/iter",
            "extra": "iterations: 4121\ncpu: 207958.43241931652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 467478.9778975704,
            "unit": "ns/iter",
            "extra": "iterations: 1855\ncpu: 467458.2210242574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3588821.631782957,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3588471.317829469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2898410.426332118,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2898168.965517251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2917890.5454544825,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2917736.3636363517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2885987.2484472874,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2885598.1366459564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1688074.645454559,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1687942.5454545391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2813678.9758308707,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2813360.120845902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10893334.204081615,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10893033.673469374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6572475.598591315,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6572307.746478885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 47541.74127991342,
            "unit": "ns/iter",
            "extra": "iterations: 17173\ncpu: 47540.12112036333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 238691.94359543693,
            "unit": "ns/iter",
            "extra": "iterations: 3599\ncpu: 238690.74742984003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 188388.36022929245,
            "unit": "ns/iter",
            "extra": "iterations: 4536\ncpu: 188382.45149911792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 185430.64020012124,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 185423.75462257979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 179869.2317433475,
            "unit": "ns/iter",
            "extra": "iterations: 4738\ncpu: 179862.62135922414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 427267.0000000491,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 427264.18352244707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3578742.0992366904,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3578612.213740473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2857037.819018404,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2856752.453987734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2891696.58074525,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2891562.422360255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2868316.506172971,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2868057.716049396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1681479.1189189819,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1679956.216216219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2801860.752266002,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2801727.7945619463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5657.8462661871645,
            "unit": "ns/iter",
            "extra": "iterations: 123935\ncpu: 5657.819824908226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32016.421175503845,
            "unit": "ns/iter",
            "extra": "iterations: 21846\ncpu: 32015.293417559158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25010.737977672172,
            "unit": "ns/iter",
            "extra": "iterations: 27948\ncpu: 25009.975669099724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25175.98984698384,
            "unit": "ns/iter",
            "extra": "iterations: 27775\ncpu: 25174.095409540936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20252.33644021378,
            "unit": "ns/iter",
            "extra": "iterations: 34547\ncpu: 20252.253451819124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 126541.92889287914,
            "unit": "ns/iter",
            "extra": "iterations: 5555\ncpu: 126536.45364536248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 239387.17418031875,
            "unit": "ns/iter",
            "extra": "iterations: 2928\ncpu: 239374.5901639349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61345.72286940423,
            "unit": "ns/iter",
            "extra": "iterations: 11417\ncpu: 61340.68494350502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61446.30495708901,
            "unit": "ns/iter",
            "extra": "iterations: 11418\ncpu: 61440.7076545797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61447.63863775712,
            "unit": "ns/iter",
            "extra": "iterations: 11393\ncpu: 61447.371192837934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 124743.01957294045,
            "unit": "ns/iter",
            "extra": "iterations: 5620\ncpu: 124728.48754448333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 113831.38359057534,
            "unit": "ns/iter",
            "extra": "iterations: 6155\ncpu: 113819.22014622486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39873.571746322574,
            "unit": "ns/iter",
            "extra": "iterations: 17534\ncpu: 39869.22550473363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 189996.07937364292,
            "unit": "ns/iter",
            "extra": "iterations: 3704\ncpu: 189988.5529157641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 152150.99302377278,
            "unit": "ns/iter",
            "extra": "iterations: 4587\ncpu: 152129.4528013943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 151733.35232935357,
            "unit": "ns/iter",
            "extra": "iterations: 4615\ncpu: 151712.76273022805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 153883.55054945571,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 153870.63736263677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 260035.0390334537,
            "unit": "ns/iter",
            "extra": "iterations: 2690\ncpu: 260026.50557620783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1031499.0501475909,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1031474.9262536758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 855476.8960880045,
            "unit": "ns/iter",
            "extra": "iterations: 818\ncpu: 855445.3545232214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 865783.2256472677,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 865739.2108507933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 860664.9203431079,
            "unit": "ns/iter",
            "extra": "iterations: 816\ncpu: 860642.6470588192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 578041.6737880508,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 578017.1733771478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 853820.1002445093,
            "unit": "ns/iter",
            "extra": "iterations: 818\ncpu: 853816.0146699379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40063.00995366044,
            "unit": "ns/iter",
            "extra": "iterations: 17481\ncpu: 40061.134946513805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 193983.95132744193,
            "unit": "ns/iter",
            "extra": "iterations: 3616\ncpu: 193980.4756637205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 156508.32467531972,
            "unit": "ns/iter",
            "extra": "iterations: 4466\ncpu: 156499.86565158973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 157650.45399187086,
            "unit": "ns/iter",
            "extra": "iterations: 4434\ncpu: 157649.84212900256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 156370.9404017796,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 156362.8124999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 261941.49608355312,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 261932.22678105175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1035474.9245562574,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1035477.3668639152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 859819.3690037181,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 859805.9040590427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 862507.899014776,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 862506.1576354702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 856345.0429447902,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 856315.092024534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 577605.5530863411,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 577588.6419753075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 857147.1995104889,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 857143.3292533654 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1705574959918,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14760.804832832431,
            "unit": "ns/iter",
            "extra": "iterations: 47467\ncpu: 14759.898455769273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 121092.11274022514,
            "unit": "ns/iter",
            "extra": "iterations: 7025\ncpu: 121081.73665480428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 228912.71375953563,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 228894.05419626416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 331377.3636007792,
            "unit": "ns/iter",
            "extra": "iterations: 2555\ncpu: 331369.27592954977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 437906.27887035464,
            "unit": "ns/iter",
            "extra": "iterations: 1983\ncpu: 437885.27483610704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 543107.0331664853,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 543083.7296620775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 520695.72499999596,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520678.1999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 607270.4919999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607247.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 690965.7793567525,
            "unit": "ns/iter",
            "extra": "iterations: 1337\ncpu: 690923.1114435302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11579.897569932582,
            "unit": "ns/iter",
            "extra": "iterations: 60451\ncpu: 11578.99621180791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9638.633711552295,
            "unit": "ns/iter",
            "extra": "iterations: 72533\ncpu: 9637.64217666441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9638.16574151771,
            "unit": "ns/iter",
            "extra": "iterations: 72601\ncpu: 9637.894794837532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9711.390694903828,
            "unit": "ns/iter",
            "extra": "iterations: 72197\ncpu: 9711.415986813858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15899.458737370296,
            "unit": "ns/iter",
            "extra": "iterations: 44241\ncpu: 15898.52851427408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50710.10997458195,
            "unit": "ns/iter",
            "extra": "iterations: 16131\ncpu: 50695.617134709595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 234315.14458162908,
            "unit": "ns/iter",
            "extra": "iterations: 3645\ncpu: 234315.55555555562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 191251.39256107048,
            "unit": "ns/iter",
            "extra": "iterations: 4463\ncpu: 191251.87093883072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 189158.96752669645,
            "unit": "ns/iter",
            "extra": "iterations: 4496\ncpu: 189156.29448398558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 181529.55026678843,
            "unit": "ns/iter",
            "extra": "iterations: 4685\ncpu: 181519.16755602992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 445620.69681655953,
            "unit": "ns/iter",
            "extra": "iterations: 1979\ncpu: 445602.67812026176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3764765.943548164,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3764421.3709677313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3002243.50809065,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3002069.579288031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3038655.9283385663,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3038449.511400654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3079818.6754966523,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3079625.1655629124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1752232.6034154338,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1752103.2258064477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2957528.5463256813,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2957305.7507987167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11113806.416666705,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11113441.666666687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5177019.600000677,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5176600.000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14667462.805554187,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14666505.55555556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 50263.104500004374,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50263.36000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 276393.39106681704,
            "unit": "ns/iter",
            "extra": "iterations: 3112\ncpu: 276374.22879177355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 221155.1884843763,
            "unit": "ns/iter",
            "extra": "iterations: 3873\ncpu: 221155.7707203723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 225717.0897840825,
            "unit": "ns/iter",
            "extra": "iterations: 3798\ncpu: 225704.686677199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 213529.65316328392,
            "unit": "ns/iter",
            "extra": "iterations: 3999\ncpu: 213523.25581395475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 490074.8295710855,
            "unit": "ns/iter",
            "extra": "iterations: 1772\ncpu: 490049.9435665928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3790847.4734691405,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3790601.63265305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3083190.088815968,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3083020.394736852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3055618.347541179,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3055501.311475403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3101647.372092954,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3101487.3754153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1773979.3422562978,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1773832.5047801135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2985433.1153849685,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2985267.9487179583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11389635.319148432,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11389182.97872342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5036853.049999763,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5036295.000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 49403.06953361674,
            "unit": "ns/iter",
            "extra": "iterations: 16510\ncpu: 49400.10902483368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 233970.24215982144,
            "unit": "ns/iter",
            "extra": "iterations: 3667\ncpu: 233954.54049631793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 192192.15924428872,
            "unit": "ns/iter",
            "extra": "iterations: 4446\ncpu: 192184.16554206077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 193912.49569939935,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 193899.9773653244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 188458.72983692153,
            "unit": "ns/iter",
            "extra": "iterations: 4538\ncpu: 188446.12163948826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 439626.7089439494,
            "unit": "ns/iter",
            "extra": "iterations: 1979\ncpu: 439599.1409802926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3756594.4637094615,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3756510.0806451696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3018521.1003233404,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3018355.0161812305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3041831.856209454,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3041610.784313733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3057566.01006699,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3057420.46979864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1751715.7650375704,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1751639.285714285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2949682.1803797525,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2949560.12658227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5826.286184702952,
            "unit": "ns/iter",
            "extra": "iterations: 120258\ncpu: 5825.977481747561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32499.62650939263,
            "unit": "ns/iter",
            "extra": "iterations: 21449\ncpu: 32498.302951186753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26383.434330104938,
            "unit": "ns/iter",
            "extra": "iterations: 26519\ncpu: 26381.688600625926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25853.102101770633,
            "unit": "ns/iter",
            "extra": "iterations: 27120\ncpu: 25851.073008849417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20497.043530339226,
            "unit": "ns/iter",
            "extra": "iterations: 34229\ncpu: 20495.828098980488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 131142.86732784653,
            "unit": "ns/iter",
            "extra": "iterations: 5344\ncpu: 131136.32110778417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 252283.35966812205,
            "unit": "ns/iter",
            "extra": "iterations: 2772\ncpu: 252266.16161616214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 63723.52279189696,
            "unit": "ns/iter",
            "extra": "iterations: 10903\ncpu: 63718.91222599254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 63853.30409409946,
            "unit": "ns/iter",
            "extra": "iterations: 10967\ncpu: 63852.0652867689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 64017.83619587197,
            "unit": "ns/iter",
            "extra": "iterations: 10946\ncpu: 64013.557463913225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 128822.24007353131,
            "unit": "ns/iter",
            "extra": "iterations: 5440\ncpu: 128814.83455882529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 118930.7312065166,
            "unit": "ns/iter",
            "extra": "iterations: 5893\ncpu: 118920.68555913733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39511.71939353176,
            "unit": "ns/iter",
            "extra": "iterations: 17676\ncpu: 39509.0574790675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 195650.54050279074,
            "unit": "ns/iter",
            "extra": "iterations: 3580\ncpu: 195634.2737430189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 154497.77106834063,
            "unit": "ns/iter",
            "extra": "iterations: 4521\ncpu: 154488.4096438859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 159867.97368422223,
            "unit": "ns/iter",
            "extra": "iterations: 4522\ncpu: 159858.22644847364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 156538.80910523652,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 156534.61798512546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 271747.98644460295,
            "unit": "ns/iter",
            "extra": "iterations: 2582\ncpu: 271739.8915569358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1082573.049689441,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1082554.0372670966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 908084.8426528075,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 908048.8946683945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 915504.8455496526,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 915427.0942408383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 925800.3196285893,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 925710.2122015934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 593275.9838435223,
            "unit": "ns/iter",
            "extra": "iterations: 1176\ncpu: 593269.1326530682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 903445.3444730042,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 903439.203084842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 40014.768012350454,
            "unit": "ns/iter",
            "extra": "iterations: 17488\ncpu: 40014.39272644096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 193218.5102266497,
            "unit": "ns/iter",
            "extra": "iterations: 3618\ncpu: 193214.89773355724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 159482.40304961955,
            "unit": "ns/iter",
            "extra": "iterations: 4394\ncpu: 159478.92580792078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 159396.3536779579,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 159382.55522659942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 159368.813921434,
            "unit": "ns/iter",
            "extra": "iterations: 4353\ncpu: 159364.00183781443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 275232.12637363194,
            "unit": "ns/iter",
            "extra": "iterations: 2548\ncpu: 275226.8053375172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1085134.7076205593,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1085068.1181959528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 905890.0415583323,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 905892.5974026073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 913613.2441253175,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 913584.7258485656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 922691.1576159797,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 922694.3046357499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 599133.6518391373,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 599121.8135158287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 903434.513548423,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 903382.8387096734 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705773020111,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14262.820211898676,
            "unit": "ns/iter",
            "extra": "iterations: 49080\ncpu: 14262.695599022005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 115807.2257976173,
            "unit": "ns/iter",
            "extra": "iterations: 7303\ncpu: 115799.82199096264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 218655.70030272342,
            "unit": "ns/iter",
            "extra": "iterations: 3964\ncpu: 218653.25428859744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 320042.6367679672,
            "unit": "ns/iter",
            "extra": "iterations: 2698\ncpu: 320040.2891030394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 420102.6565408923,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 420094.07153356203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 526065.3983152644,
            "unit": "ns/iter",
            "extra": "iterations: 1662\ncpu: 526064.259927798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 501343.82099997764,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501349.29999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 581108.0549999587,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581116.8999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 661414.8480000495,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 661394.3999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11362.845578330256,
            "unit": "ns/iter",
            "extra": "iterations: 61617\ncpu: 11362.810587987075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9430.74851160218,
            "unit": "ns/iter",
            "extra": "iterations: 73737\ncpu: 9430.753895601936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9447.87533922953,
            "unit": "ns/iter",
            "extra": "iterations: 74065\ncpu: 9447.747249038002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9457.77414885531,
            "unit": "ns/iter",
            "extra": "iterations: 74341\ncpu: 9457.871161270376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15634.482316689664,
            "unit": "ns/iter",
            "extra": "iterations: 44788\ncpu: 15634.66776815217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50171.35998277051,
            "unit": "ns/iter",
            "extra": "iterations: 16248\ncpu: 50169.62703101928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 228414.75709692878,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 228412.21210498133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 183964.62155172048,
            "unit": "ns/iter",
            "extra": "iterations: 4640\ncpu: 183956.33620689687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 182269.65156350457,
            "unit": "ns/iter",
            "extra": "iterations: 4701\ncpu: 182269.79366092352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 181545.82060580238,
            "unit": "ns/iter",
            "extra": "iterations: 4688\ncpu: 181536.47610921517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 440222.7374810428,
            "unit": "ns/iter",
            "extra": "iterations: 1977\ncpu: 440181.84117349534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3571580.0269232346,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3571449.230769238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2915238.8808779363,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2914919.435736678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2887075.3260872667,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2886852.48447205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2899537.4374996885,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2899211.8749999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1693629.7435896723,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1693628.5714285723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2822969.088414907,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2822746.0365853696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10906757.459182773,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10905857.142857155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6570860.347517524,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6570492.907801423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14238777.87837799,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14237520.270270295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 50091.01040000132,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50086.62000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 272816.50834120635,
            "unit": "ns/iter",
            "extra": "iterations: 3177\ncpu: 272797.7966635191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 212377.2068367793,
            "unit": "ns/iter",
            "extra": "iterations: 4037\ncpu: 212372.60341838014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 214334.3293383406,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 214319.7253433209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 212515.6078089919,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 212505.52101467308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 474119.1008771526,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 474092.32456140313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3627477.519531297,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3627311.3281249935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2969571.682692381,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2969436.5384615324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2937576.281645254,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2937356.012658227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2939563.113564494,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2939516.0883280784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1727955.1604478606,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1727852.9850746237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2850534.630769149,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2850512.9230769146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11113495.729166089,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11113431.25000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6578788.283687856,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6578799.29078016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 47745.80273860865,
            "unit": "ns/iter",
            "extra": "iterations: 17089\ncpu: 47745.42103107272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 228428.2798616582,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 228428.14578345185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 187953.03979013974,
            "unit": "ns/iter",
            "extra": "iterations: 4574\ncpu: 187954.98469610774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 183942.11435941665,
            "unit": "ns/iter",
            "extra": "iterations: 4652\ncpu: 183940.32674118664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 187054.19864212704,
            "unit": "ns/iter",
            "extra": "iterations: 4566\ncpu: 187050.70083223793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 435163.9351106497,
            "unit": "ns/iter",
            "extra": "iterations: 1988\ncpu: 435168.76257545355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3595087.888031132,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3595122.393822379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2919000.9905957473,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2918932.9153605066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2912032.640625029,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2912037.4999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2907105.281250111,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2907133.1249999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1713368.6544118838,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1713370.9558823488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2833685.5714287236,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2833501.519756826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5705.109947473431,
            "unit": "ns/iter",
            "extra": "iterations: 122604\ncpu: 5705.047143649468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31686.601673070178,
            "unit": "ns/iter",
            "extra": "iterations: 22115\ncpu: 31685.236264978495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25027.151285712534,
            "unit": "ns/iter",
            "extra": "iterations: 28000\ncpu: 25025.77142857148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 24132.61049180347,
            "unit": "ns/iter",
            "extra": "iterations: 28975\ncpu: 24132.310612597088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20177.40472277239,
            "unit": "ns/iter",
            "extra": "iterations: 34683\ncpu: 20177.60574344784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 124251.59361777498,
            "unit": "ns/iter",
            "extra": "iterations: 5672\ncpu: 124250.5994358246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 244485.98218652094,
            "unit": "ns/iter",
            "extra": "iterations: 2863\ncpu: 244476.94725812235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62506.6860195831,
            "unit": "ns/iter",
            "extra": "iterations: 11230\ncpu: 62505.32502226211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62348.98469614465,
            "unit": "ns/iter",
            "extra": "iterations: 11239\ncpu: 62348.98122608759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 62124.58447325902,
            "unit": "ns/iter",
            "extra": "iterations: 11258\ncpu: 62124.444839225864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 120414.86018917312,
            "unit": "ns/iter",
            "extra": "iterations: 5815\ncpu: 120415.99312123646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 115619.29919047277,
            "unit": "ns/iter",
            "extra": "iterations: 6053\ncpu: 115615.69469684373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39800.79452365996,
            "unit": "ns/iter",
            "extra": "iterations: 17603\ncpu: 39800.738510481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 191520.5499999916,
            "unit": "ns/iter",
            "extra": "iterations: 3620\ncpu: 191522.67955801106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 152733.2631349441,
            "unit": "ns/iter",
            "extra": "iterations: 4587\ncpu: 152734.7721822542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 153884.87083334057,
            "unit": "ns/iter",
            "extra": "iterations: 4560\ncpu: 153880.13157894654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 154723.72958058427,
            "unit": "ns/iter",
            "extra": "iterations: 4530\ncpu: 154717.1743929349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 266301.5638783099,
            "unit": "ns/iter",
            "extra": "iterations: 2630\ncpu: 266301.5209125472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1048667.5763994246,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1048667.3222390404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 878620.8143036717,
            "unit": "ns/iter",
            "extra": "iterations: 797\ncpu: 878628.9836888245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 882967.1666666318,
            "unit": "ns/iter",
            "extra": "iterations: 780\ncpu: 882965.3846153754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 882173.4594936417,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 882162.1518987363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 583056.2844037291,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 583046.0383652954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 870101.0421835632,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 870101.2406947989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39219.612462178666,
            "unit": "ns/iter",
            "extra": "iterations: 17846\ncpu: 39219.959654824546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 193474.5725739783,
            "unit": "ns/iter",
            "extra": "iterations: 3617\ncpu: 193472.380425764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 156691.8633928438,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 156690.7812500018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 157885.8148648707,
            "unit": "ns/iter",
            "extra": "iterations: 4440\ncpu: 157887.25225225062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 157625.06347061545,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 157626.4911096099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 268263.8888039492,
            "unit": "ns/iter",
            "extra": "iterations: 2617\ncpu: 268263.24035154376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1050089.2170657772,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1050076.6467065776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 876378.3158551196,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 876385.767790254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 884056.8288972697,
            "unit": "ns/iter",
            "extra": "iterations: 789\ncpu: 884055.0063371412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 881160.9192938621,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 881169.2307692384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 582250.6003415994,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 582242.527754064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 868996.5883084525,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 868975.000000007 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705774812659,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14483.110849153141,
            "unit": "ns/iter",
            "extra": "iterations: 48354\ncpu: 14482.551598626795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 116371.7411279173,
            "unit": "ns/iter",
            "extra": "iterations: 7270\ncpu: 116367.60660247595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 218479.8784530348,
            "unit": "ns/iter",
            "extra": "iterations: 3982\ncpu: 218469.0356604721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 318016.0753676292,
            "unit": "ns/iter",
            "extra": "iterations: 2720\ncpu: 318009.33823529416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 418025.39199616166,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 417999.1321118614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 518325.3133612962,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 518305.8717795087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 619623.5952891033,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 619605.4960742332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 585722.5569999401,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585710.4999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 659335.0842856743,
            "unit": "ns/iter",
            "extra": "iterations: 1400\ncpu: 659303.9999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11372.060518215449,
            "unit": "ns/iter",
            "extra": "iterations: 61403\ncpu: 11371.498135270265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9505.432888091816,
            "unit": "ns/iter",
            "extra": "iterations: 73668\ncpu: 9504.783623825808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9500.931015280277,
            "unit": "ns/iter",
            "extra": "iterations: 73625\ncpu: 9500.480814940578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9574.470625290855,
            "unit": "ns/iter",
            "extra": "iterations: 73022\ncpu: 9574.294048368987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15864.26269571199,
            "unit": "ns/iter",
            "extra": "iterations: 44070\ncpu: 15864.057181756278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50339.63230902897,
            "unit": "ns/iter",
            "extra": "iterations: 16076\ncpu: 50337.04279671568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 228305.3013076914,
            "unit": "ns/iter",
            "extra": "iterations: 3747\ncpu: 228296.3704296771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 182913.97271748795,
            "unit": "ns/iter",
            "extra": "iterations: 4655\ncpu: 182902.36305048337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 181503.5391989598,
            "unit": "ns/iter",
            "extra": "iterations: 4694\ncpu: 181494.098849595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 180183.71582962523,
            "unit": "ns/iter",
            "extra": "iterations: 4719\ncpu: 180174.93112947652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 433499.6454500017,
            "unit": "ns/iter",
            "extra": "iterations: 2011\ncpu: 433480.00994530134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3560725.957854333,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3560583.908045979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2882027.2246153206,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2880763.6923076967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2859998.2646154296,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2859861.538461541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2855934.211656496,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2855738.6503067506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1685818.235831723,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1685734.9177330912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2794390.0030212854,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2794339.2749244687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10728370.050504632,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10728157.575757593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6492971.230768903,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6492820.979020989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14104431.920000024,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14103886.666666673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 50113.25579999948,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50113.100000000086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 269105.1077694172,
            "unit": "ns/iter",
            "extra": "iterations: 3192\ncpu: 269101.25313283183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 210936.90973929316,
            "unit": "ns/iter",
            "extra": "iterations: 4066\ncpu: 210933.76783079188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 211744.35499011163,
            "unit": "ns/iter",
            "extra": "iterations: 4048\ncpu: 211737.12944664023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 211875.56707919083,
            "unit": "ns/iter",
            "extra": "iterations: 4040\ncpu: 211875.99009900936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 476074.8036303342,
            "unit": "ns/iter",
            "extra": "iterations: 1818\ncpu: 476068.8118811892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3600137.468992244,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3599995.736434096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2898636.677115894,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2898582.445141074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2905792.9812498884,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2905752.4999999804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2898963.341615032,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2898922.3602484474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1720799.8868274384,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1720748.979591843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2822395.684848523,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2822369.393939388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11045140.968750644,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11044897.916666629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5036019.570000008,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5035786.999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 47913.882908237196,
            "unit": "ns/iter",
            "extra": "iterations: 17055\ncpu: 47912.07270595131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 227519.28962764353,
            "unit": "ns/iter",
            "extra": "iterations: 3760\ncpu: 227516.32978723294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 184963.96859432638,
            "unit": "ns/iter",
            "extra": "iterations: 4617\ncpu: 184958.56616850727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 182430.54531819202,
            "unit": "ns/iter",
            "extra": "iterations: 4667\ncpu: 182425.99100064326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 185010.32478260857,
            "unit": "ns/iter",
            "extra": "iterations: 4600\ncpu: 185006.2391304349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 431650.1751383956,
            "unit": "ns/iter",
            "extra": "iterations: 1987\ncpu: 431644.48917966906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3573803.815384753,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3573740.3846153845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2853150.5932720606,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2853048.318042802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2883770.0154797677,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2883726.625387005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2878905.061728335,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2878838.8888888806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1696671.5633026245,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1696621.834862393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2801164.066265112,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2801127.1084337463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5748.904810880895,
            "unit": "ns/iter",
            "extra": "iterations: 121537\ncpu: 5748.881410599258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32023.213608683065,
            "unit": "ns/iter",
            "extra": "iterations: 21839\ncpu: 32023.096295617706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26036.041359985396,
            "unit": "ns/iter",
            "extra": "iterations: 26765\ncpu: 26033.685783672878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25185.884468327877,
            "unit": "ns/iter",
            "extra": "iterations: 27724\ncpu: 25183.624296638256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20061.489936349175,
            "unit": "ns/iter",
            "extra": "iterations: 34878\ncpu: 20060.161133092373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 127433.3830827852,
            "unit": "ns/iter",
            "extra": "iterations: 5521\ncpu: 127425.14037312094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 240030.61248286229,
            "unit": "ns/iter",
            "extra": "iterations: 2916\ncpu: 240022.1193415646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62001.51564986456,
            "unit": "ns/iter",
            "extra": "iterations: 11310\ncpu: 61999.48717948678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61252.56140966142,
            "unit": "ns/iter",
            "extra": "iterations: 11407\ncpu: 61246.88349259159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61368.57283171502,
            "unit": "ns/iter",
            "extra": "iterations: 11403\ncpu: 61364.92151188389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 125524.43297492432,
            "unit": "ns/iter",
            "extra": "iterations: 5580\ncpu: 125514.05017921186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 113909.81464604472,
            "unit": "ns/iter",
            "extra": "iterations: 6145\ncpu: 113906.39544345003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38719.445514951694,
            "unit": "ns/iter",
            "extra": "iterations: 18060\ncpu: 38716.788482835036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 185636.40564278723,
            "unit": "ns/iter",
            "extra": "iterations: 3757\ncpu: 185625.8450891691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 148535.85108650482,
            "unit": "ns/iter",
            "extra": "iterations: 4694\ncpu: 148532.1261184482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 148840.14306973107,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 148833.37585034154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 150159.38611528368,
            "unit": "ns/iter",
            "extra": "iterations: 4667\ncpu: 150147.82515534345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 268123.3552833478,
            "unit": "ns/iter",
            "extra": "iterations: 2612\ncpu: 268100.4211332288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1033179.1669128195,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1033128.8035450515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 857198.0738007433,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 857116.2361623689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 862907.8520344569,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 862893.834771885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 860186.7047970028,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 860164.5756457724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 574519.3442622309,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 574517.1311475382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 851414.2277709873,
            "unit": "ns/iter",
            "extra": "iterations: 821\ncpu: 851411.0840438551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39676.77919656718,
            "unit": "ns/iter",
            "extra": "iterations: 17699\ncpu: 39673.33182665687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 187802.660757452,
            "unit": "ns/iter",
            "extra": "iterations: 3723\ncpu: 187791.56594144343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 152918.00196807197,
            "unit": "ns/iter",
            "extra": "iterations: 4573\ncpu: 152905.7730155264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 152420.46928105416,
            "unit": "ns/iter",
            "extra": "iterations: 4590\ncpu: 152408.58387799436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 153991.0747910205,
            "unit": "ns/iter",
            "extra": "iterations: 4546\ncpu: 153982.68807743088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 276634.12918287993,
            "unit": "ns/iter",
            "extra": "iterations: 2570\ncpu: 276609.29961089254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1035483.8385184713,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1035467.8518518558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 860081.539312088,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 860004.9140049207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 864983.2747525437,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 864925.8663366217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 860810.4049382049,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 860719.135802465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 574674.6162116951,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 574657.2373862657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 856036.9388753087,
            "unit": "ns/iter",
            "extra": "iterations: 818\ncpu: 856019.0709046468 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705777736163,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14348.840256114643,
            "unit": "ns/iter",
            "extra": "iterations: 48728\ncpu: 14348.25151863405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 115720.06154475777,
            "unit": "ns/iter",
            "extra": "iterations: 7328\ncpu: 115714.26037117904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 217804.4602657292,
            "unit": "ns/iter",
            "extra": "iterations: 3989\ncpu: 217791.10052644773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 316951.49944995774,
            "unit": "ns/iter",
            "extra": "iterations: 2727\ncpu: 316943.381004767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 420835.8114753862,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 420818.5149469624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 519916.3261000246,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 519893.670886076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 505109.81000002177,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505083.1000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 579327.879999937,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579304.5000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 662440.7529999417,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 662373.6999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11156.094269456382,
            "unit": "ns/iter",
            "extra": "iterations: 62385\ncpu: 11155.53418289653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9396.04991954963,
            "unit": "ns/iter",
            "extra": "iterations: 74580\ncpu: 9395.358004827029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9259.148180116572,
            "unit": "ns/iter",
            "extra": "iterations: 75307\ncpu: 9258.75018258594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9253.290868318652,
            "unit": "ns/iter",
            "extra": "iterations: 75364\ncpu: 9252.688286184386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15270.02122522634,
            "unit": "ns/iter",
            "extra": "iterations: 45559\ncpu: 15268.833819881916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50783.77287713602,
            "unit": "ns/iter",
            "extra": "iterations: 16075\ncpu: 50780.85225505449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 231874.904168938,
            "unit": "ns/iter",
            "extra": "iterations: 3694\ncpu: 231862.66919328633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 180905.32276595637,
            "unit": "ns/iter",
            "extra": "iterations: 4700\ncpu: 180899.97872340435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 179916.90025251821,
            "unit": "ns/iter",
            "extra": "iterations: 4752\ncpu: 179904.8400673407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 175973.45708376152,
            "unit": "ns/iter",
            "extra": "iterations: 4835\ncpu: 175965.23267838694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 440566.7529173018,
            "unit": "ns/iter",
            "extra": "iterations: 1971\ncpu: 440562.1004566209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3565622.3977276864,
            "unit": "ns/iter",
            "extra": "iterations: 264\ncpu: 3565373.106060606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2838336.1284403517,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2838200.3058104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2858911.110429443,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2858723.3128834325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2859634.5184050705,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2859542.9447852834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1671046.7210145907,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1670959.4202898545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2777140.488024224,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2777015.868263475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10634574.299999712,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10634170.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6313080.333333514,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6312753.7414965825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13980859.605263611,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 13980059.210526315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 50426.23859999367,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50423.05999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 277392.4741240911,
            "unit": "ns/iter",
            "extra": "iterations: 3111\ncpu: 277386.04950176773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 212532.68906522283,
            "unit": "ns/iter",
            "extra": "iterations: 4033\ncpu: 212524.79543763935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 211361.78344419308,
            "unit": "ns/iter",
            "extra": "iterations: 4059\ncpu: 211349.2978566158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 206353.37945137726,
            "unit": "ns/iter",
            "extra": "iterations: 4156\ncpu: 206344.41770933603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 474831.0650272978,
            "unit": "ns/iter",
            "extra": "iterations: 1830\ncpu: 474814.3715847011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3583053.918918913,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3582899.227799221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2893846.857142923,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2893666.14906831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2895691.931464194,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2895399.6884735306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2889966.6614904264,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2889968.0124223586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1707176.988970611,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1707080.1470588273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2814051.939577203,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2813834.7432024055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10927926.530612519,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10927304.081632685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6529753.2816904215,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6529579.577464807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 49383.194261555596,
            "unit": "ns/iter",
            "extra": "iterations: 16555\ncpu: 49383.22561159771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 231353.40230810328,
            "unit": "ns/iter",
            "extra": "iterations: 3726\ncpu: 231353.40848094426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 189059.5272407931,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 189057.66695957838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 182619.6782738792,
            "unit": "ns/iter",
            "extra": "iterations: 4681\ncpu: 182613.37321085288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 184225.10964444614,
            "unit": "ns/iter",
            "extra": "iterations: 4697\ncpu: 184224.8882265287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 439853.65517241537,
            "unit": "ns/iter",
            "extra": "iterations: 1972\ncpu: 439850.60851926793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3559179.6030533137,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3559061.832061074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2850010.6422020216,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2849993.883792066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2881151.1574075175,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2881151.234567897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2886486.5727552567,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2886409.9071207605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1685923.334545433,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1685896.0000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2794971.108108178,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2794946.8468468613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5645.362861460222,
            "unit": "ns/iter",
            "extra": "iterations: 123769\ncpu: 5645.353844662285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32059.892706423216,
            "unit": "ns/iter",
            "extra": "iterations: 21800\ncpu: 32058.678899082584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25951.389734475386,
            "unit": "ns/iter",
            "extra": "iterations: 27003\ncpu: 25950.320334777804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 24945.51204218665,
            "unit": "ns/iter",
            "extra": "iterations: 28068\ncpu: 24943.58344021662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20098.920343313413,
            "unit": "ns/iter",
            "extra": "iterations: 34837\ncpu: 20097.69497947569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 127086.78914896716,
            "unit": "ns/iter",
            "extra": "iterations: 5511\ncpu: 127079.80402830744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 239557.63437706942,
            "unit": "ns/iter",
            "extra": "iterations: 3066\ncpu: 239539.92172211225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61314.980146926195,
            "unit": "ns/iter",
            "extra": "iterations: 11434\ncpu: 61309.50673430201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61049.553152526176,
            "unit": "ns/iter",
            "extra": "iterations: 11467\ncpu: 61049.646812592655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61343.784781270224,
            "unit": "ns/iter",
            "extra": "iterations: 11407\ncpu: 61343.859033926696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 123647.65754150262,
            "unit": "ns/iter",
            "extra": "iterations: 5662\ncpu: 123641.18685976832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 113449.52566801278,
            "unit": "ns/iter",
            "extra": "iterations: 6175\ncpu: 113440.43724696244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39160.70078390091,
            "unit": "ns/iter",
            "extra": "iterations: 17987\ncpu: 39158.40329126587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 190648.5193777179,
            "unit": "ns/iter",
            "extra": "iterations: 3664\ncpu: 190638.18231441357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 152161.39195100823,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 152147.41907261507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 153003.5114603851,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 152988.3213272213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 153293.23691156492,
            "unit": "ns/iter",
            "extra": "iterations: 4546\ncpu: 153281.9841619024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 262316.5346831607,
            "unit": "ns/iter",
            "extra": "iterations: 2667\ncpu: 262297.93775778025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1036058.4761905721,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1036042.7083333513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 863625.5751230686,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 863558.4975369337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 862827.9975217527,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 862761.3382899651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 857996.1707617568,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 857927.0270270355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 565920.4783318867,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 565919.8691741641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 851833.2073171079,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 851823.414634142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39321.02149206874,
            "unit": "ns/iter",
            "extra": "iterations: 17774\ncpu: 39320.63688533837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 192616.99535394122,
            "unit": "ns/iter",
            "extra": "iterations: 3659\ncpu: 192611.6425252819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 155347.81148452213,
            "unit": "ns/iter",
            "extra": "iterations: 4493\ncpu: 155346.31649232353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 155486.45781527366,
            "unit": "ns/iter",
            "extra": "iterations: 4504\ncpu: 155481.28330373092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 154930.51453941673,
            "unit": "ns/iter",
            "extra": "iterations: 4505\ncpu: 154922.59711431875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 270066.632369916,
            "unit": "ns/iter",
            "extra": "iterations: 2595\ncpu: 270053.64161849814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1037007.5710058898,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1036954.7337278158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 859042.9246914431,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 858993.7037036944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 861705.3092024032,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 861681.7177914005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 857441.5845589221,
            "unit": "ns/iter",
            "extra": "iterations: 816\ncpu: 857390.0735294236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 569615.5430195467,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 569598.944805188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 854258.9449878345,
            "unit": "ns/iter",
            "extra": "iterations: 818\ncpu: 854234.2298288415 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705952925240,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13893.066695771358,
            "unit": "ns/iter",
            "extra": "iterations: 50393\ncpu: 13892.504911396427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 112768.65813333643,
            "unit": "ns/iter",
            "extra": "iterations: 7500\ncpu: 112763.97333333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 213042.76262874095,
            "unit": "ns/iter",
            "extra": "iterations: 4078\ncpu: 213034.91907797937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 310434.4593716342,
            "unit": "ns/iter",
            "extra": "iterations: 2769\ncpu: 310413.28999638866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 410472.6196984361,
            "unit": "ns/iter",
            "extra": "iterations: 2122\ncpu: 410453.53440150793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 512098.6570247963,
            "unit": "ns/iter",
            "extra": "iterations: 1694\ncpu: 512070.18890200707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 608036.7764456574,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 607996.1918194639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 568114.0169999708,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568077.1000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 650160.188999962,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650102.9000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11065.593487961038,
            "unit": "ns/iter",
            "extra": "iterations: 63206\ncpu: 11065.163117425553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9217.087295720656,
            "unit": "ns/iter",
            "extra": "iterations: 75754\ncpu: 9216.762151173545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9251.131393958778,
            "unit": "ns/iter",
            "extra": "iterations: 76107\ncpu: 9250.708870406135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9271.31931191762,
            "unit": "ns/iter",
            "extra": "iterations: 75456\ncpu: 9270.661047497877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15623.153327010366,
            "unit": "ns/iter",
            "extra": "iterations: 45341\ncpu: 15622.335193312903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50558.501616112524,
            "unit": "ns/iter",
            "extra": "iterations: 16088\ncpu: 50554.74888115367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 227172.08652821052,
            "unit": "ns/iter",
            "extra": "iterations: 3756\ncpu: 227162.75292864745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 179304.74002954556,
            "unit": "ns/iter",
            "extra": "iterations: 4739\ncpu: 179295.37877189275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 177012.5613669621,
            "unit": "ns/iter",
            "extra": "iterations: 4799\ncpu: 177006.58470514647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 175885.76493611527,
            "unit": "ns/iter",
            "extra": "iterations: 4854\ncpu: 175872.49690976512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 428602.6174728377,
            "unit": "ns/iter",
            "extra": "iterations: 2026\ncpu: 428578.62783810357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3393153.926470869,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3393099.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2781858.179640674,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2781698.5029940093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2820915.0636364417,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2820800.909090908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2814249.7462235442,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2814092.4471299145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1627049.7879858029,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1626979.6819787978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2717628.929411831,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2717473.823529413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10536379.009804523,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 10535750.980392134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6342280.557822849,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6342021.088435377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13869960.157894399,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 13868932.89473682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 57561.43689251381,
            "unit": "ns/iter",
            "extra": "iterations: 14198\ncpu: 57558.06451612899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 268905.47205744777,
            "unit": "ns/iter",
            "extra": "iterations: 3203\ncpu: 268899.8438963456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 209934.27863248432,
            "unit": "ns/iter",
            "extra": "iterations: 4095\ncpu: 209927.15506715522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 209756.76539588647,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 209757.42913000984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 204501.72362768924,
            "unit": "ns/iter",
            "extra": "iterations: 4190\ncpu: 204485.99045346043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 469115.643318966,
            "unit": "ns/iter",
            "extra": "iterations: 1856\ncpu: 469101.07758620806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3454585.1449813712,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 3454529.7397769485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2827693.015243803,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2827668.9024390206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2875467.768518547,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2875388.580246914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2867573.7015384166,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2867414.1538461456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1678677.371376784,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1678620.2898550653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2757652.925816062,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2757483.9762611235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10890511.602041192,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10889957.14285714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6495955.580419775,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6495675.524475503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 47455.44665776713,
            "unit": "ns/iter",
            "extra": "iterations: 17219\ncpu: 47451.658052151826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 228301.1476456549,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 228291.2742750716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 183963.01843120434,
            "unit": "ns/iter",
            "extra": "iterations: 4666\ncpu: 183950.72867552534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 180452.6401267203,
            "unit": "ns/iter",
            "extra": "iterations: 4735\ncpu: 180441.92185849967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 179509.85678285937,
            "unit": "ns/iter",
            "extra": "iterations: 4762\ncpu: 179497.6270474583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 421210.6655356338,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 421183.6645661679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3439110.334558727,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3438949.264705873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2799842.588588349,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2799639.3393393317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2850565.9816514025,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2850459.3272171277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2831572.945454451,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2831402.42424241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1646578.6283186842,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1646512.920353984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2733044.642228776,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2732844.281524941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5632.65470205221,
            "unit": "ns/iter",
            "extra": "iterations: 124116\ncpu: 5632.277063392272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31722.509315926036,
            "unit": "ns/iter",
            "extra": "iterations: 22059\ncpu: 31720.00543995651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 24130.105067345034,
            "unit": "ns/iter",
            "extra": "iterations: 29029\ncpu: 24128.840125391762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 24969.44662961334,
            "unit": "ns/iter",
            "extra": "iterations: 28068\ncpu: 24967.27946415869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 19984.032913482813,
            "unit": "ns/iter",
            "extra": "iterations: 35092\ncpu: 19982.64276758232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 120175.48327903164,
            "unit": "ns/iter",
            "extra": "iterations: 5831\ncpu: 120170.62253472717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 233429.21679490097,
            "unit": "ns/iter",
            "extra": "iterations: 2989\ncpu: 233425.25928404144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 60630.093166092025,
            "unit": "ns/iter",
            "extra": "iterations: 11560\ncpu: 60626.07266436087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 61551.8468961872,
            "unit": "ns/iter",
            "extra": "iterations: 11502\ncpu: 61548.05251260685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61006.191392982,
            "unit": "ns/iter",
            "extra": "iterations: 11479\ncpu: 61004.56485756522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 117706.76819632924,
            "unit": "ns/iter",
            "extra": "iterations: 5949\ncpu: 117704.47133972053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 111700.57126913207,
            "unit": "ns/iter",
            "extra": "iterations: 6272\ncpu: 111698.8679846934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38091.38939015103,
            "unit": "ns/iter",
            "extra": "iterations: 18398\ncpu: 38091.50994673359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 194222.88630967503,
            "unit": "ns/iter",
            "extra": "iterations: 3791\ncpu: 194220.6805592202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 147422.16564418067,
            "unit": "ns/iter",
            "extra": "iterations: 4727\ncpu: 147420.5627247714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 149812.768174989,
            "unit": "ns/iter",
            "extra": "iterations: 4663\ncpu: 149809.15719494078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 151562.21332755618,
            "unit": "ns/iter",
            "extra": "iterations: 4622\ncpu: 151554.7598442246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 274220.98356805975,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 274208.6854460134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1008813.5592485877,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1008765.7514450707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 852513.9487804198,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 852495.1219512314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 865161.4759555887,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 865128.7299630067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 860439.6498149285,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 860430.9494451184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 564868.8679092323,
            "unit": "ns/iter",
            "extra": "iterations: 1234\ncpu: 564850.5672609314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 847234.8737864448,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 847192.5970873843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39417.35458866323,
            "unit": "ns/iter",
            "extra": "iterations: 17674\ncpu: 39415.338915921464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 186045.3124502121,
            "unit": "ns/iter",
            "extra": "iterations: 3767\ncpu: 186039.660207063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 151901.36407029454,
            "unit": "ns/iter",
            "extra": "iterations: 4609\ncpu: 151894.72770665868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 155522.38882730078,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 155514.98559077593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 154780.86193207244,
            "unit": "ns/iter",
            "extra": "iterations: 4534\ncpu: 154775.43008381047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 277667.1653449776,
            "unit": "ns/iter",
            "extra": "iterations: 2522\ncpu: 277658.12846946815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1001340.7011493607,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1001331.8965517274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 852279.7023087088,
            "unit": "ns/iter",
            "extra": "iterations: 823\ncpu: 852229.4046172535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 862816.8914920787,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 862796.3008631383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 857817.0563035589,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 857759.4859241114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 565759.2134740297,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 565744.967532472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 844627.5929526469,
            "unit": "ns/iter",
            "extra": "iterations: 823\ncpu: 844617.8614823835 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705954995270,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14607.636281438265,
            "unit": "ns/iter",
            "extra": "iterations: 47556\ncpu: 14607.22726890403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 115120.20635354704,
            "unit": "ns/iter",
            "extra": "iterations: 7303\ncpu: 115112.69341366562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 218198.13534589717,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 218192.02515723265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 319907.8808290097,
            "unit": "ns/iter",
            "extra": "iterations: 2702\ncpu: 319906.3656550702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 418540.36442722974,
            "unit": "ns/iter",
            "extra": "iterations: 2069\ncpu: 418512.95311744773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 518741.69354837516,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 518720.0716845877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 618041.8582621017,
            "unit": "ns/iter",
            "extra": "iterations: 1404\ncpu: 618015.8119658119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 583975.7349999673,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583963.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 659863.1979999254,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 659813.8000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11400.939923617512,
            "unit": "ns/iter",
            "extra": "iterations: 61272\ncpu: 11399.887387387402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9475.605822645035,
            "unit": "ns/iter",
            "extra": "iterations: 73987\ncpu: 9474.873964345074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9536.4377745043,
            "unit": "ns/iter",
            "extra": "iterations: 73314\ncpu: 9536.298660555978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9508.135686999392,
            "unit": "ns/iter",
            "extra": "iterations: 73559\ncpu: 9507.926970187204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15518.974795127464,
            "unit": "ns/iter",
            "extra": "iterations: 45150\ncpu: 15518.846068660028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 49923.853505916304,
            "unit": "ns/iter",
            "extra": "iterations: 16301\ncpu: 49923.0967425312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 229966.05768193543,
            "unit": "ns/iter",
            "extra": "iterations: 3710\ncpu: 229962.8571428576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 186847.08993201033,
            "unit": "ns/iter",
            "extra": "iterations: 4559\ncpu: 186839.30686554033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 187667.2742681138,
            "unit": "ns/iter",
            "extra": "iterations: 4543\ncpu: 187652.1021351524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 183172.28125671382,
            "unit": "ns/iter",
            "extra": "iterations: 4647\ncpu: 183166.9248977835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 446763.1167176779,
            "unit": "ns/iter",
            "extra": "iterations: 1962\ncpu: 446757.49235474126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3547249.290076398,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3547043.5114503806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2863575.495355946,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2863432.5077399393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2892609.657320574,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2892507.165109032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2909000.67812494,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2908890.6250000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1680575.2377494536,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1680486.2068965528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2805110.655589037,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2804946.827794562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10776282.808080276,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 10775606.060606055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6333996.482993405,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6333572.789115647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13972797.684211377,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 13971652.631578922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58652.679628185324,
            "unit": "ns/iter",
            "extra": "iterations: 14093\ncpu: 58648.25800042578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 272925.04737679934,
            "unit": "ns/iter",
            "extra": "iterations: 3145\ncpu: 272910.33386327483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 216278.73393801934,
            "unit": "ns/iter",
            "extra": "iterations: 3969\ncpu: 216259.4608213666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 219072.5319366372,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 219072.04905467684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 214419.6765883102,
            "unit": "ns/iter",
            "extra": "iterations: 3998\ncpu: 214407.30365182503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 480611.55413659906,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 480598.00111049565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3630380.683593781,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3630101.562499988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2952685.9999998864,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2952530.6962025426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2965829.3503183476,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2965716.8789808988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2937278.8012616164,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2937243.533123035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1709688.6777162699,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1709674.7697974197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2857748.761468028,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2857706.422018341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10995988.381443905,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 10995454.63917525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6376277.068027491,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6376138.775510232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 47973.85551015048,
            "unit": "ns/iter",
            "extra": "iterations: 16887\ncpu: 47972.26860898893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 229957.4345844443,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 229949.65147453127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 194472.90981190524,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 194457.2852934509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 192318.98203456905,
            "unit": "ns/iter",
            "extra": "iterations: 4453\ncpu: 192308.1068942295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 189011.51430471867,
            "unit": "ns/iter",
            "extra": "iterations: 4509\ncpu: 188995.897094699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 447048.90123456175,
            "unit": "ns/iter",
            "extra": "iterations: 1944\ncpu: 447038.6316872459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3575218.2758624153,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3575133.3333333484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2859400.0276923627,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2859372.3076923103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2935768.5520503633,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2935723.0283911573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2907372.809969031,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2907280.996884737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1698069.7668489653,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1698034.2440801517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2817870.9516618904,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2817862.8398791607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5707.63861132151,
            "unit": "ns/iter",
            "extra": "iterations: 122793\ncpu: 5707.34732435887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 29993.461934159794,
            "unit": "ns/iter",
            "extra": "iterations: 23328\ncpu: 29990.47925240054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 24558.579418577432,
            "unit": "ns/iter",
            "extra": "iterations: 28482\ncpu: 24558.29997893404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26487.484660487695,
            "unit": "ns/iter",
            "extra": "iterations: 26435\ncpu: 26487.37658407445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20331.54718297718,
            "unit": "ns/iter",
            "extra": "iterations: 34398\ncpu: 20330.940752369323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 127357.74241046411,
            "unit": "ns/iter",
            "extra": "iterations: 5501\ncpu: 127355.71714233847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 228630.9160405174,
            "unit": "ns/iter",
            "extra": "iterations: 3061\ncpu: 228628.552760536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61646.15120790188,
            "unit": "ns/iter",
            "extra": "iterations: 11342\ncpu: 61645.85611003399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62007.16322041994,
            "unit": "ns/iter",
            "extra": "iterations: 11365\ncpu: 62006.95116585957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 61268.799053959396,
            "unit": "ns/iter",
            "extra": "iterations: 11416\ncpu: 61266.59950946082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 124553.18368074416,
            "unit": "ns/iter",
            "extra": "iterations: 5613\ncpu: 124548.76180295661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 102671.71564605295,
            "unit": "ns/iter",
            "extra": "iterations: 6826\ncpu: 102669.41107529962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38760.38887037235,
            "unit": "ns/iter",
            "extra": "iterations: 18006\ncpu: 38759.985560368696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 184685.96279686334,
            "unit": "ns/iter",
            "extra": "iterations: 3790\ncpu: 184681.34564643895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 146365.32698745345,
            "unit": "ns/iter",
            "extra": "iterations: 4780\ncpu: 146360.54393305458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 147599.8047058761,
            "unit": "ns/iter",
            "extra": "iterations: 4675\ncpu: 147587.67914438547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 149214.10883920384,
            "unit": "ns/iter",
            "extra": "iterations: 4695\ncpu: 149202.83280085158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 262878.38580018346,
            "unit": "ns/iter",
            "extra": "iterations: 2662\ncpu: 262861.6078136762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1028742.1967694763,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1028653.5976505064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 853482.9559363505,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 853404.6511628019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 868014.1483312091,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 867970.8281829384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 859676.1112484891,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 859624.721878852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 566923.3785540465,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 566875.1421608531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 859835.2357920788,
            "unit": "ns/iter",
            "extra": "iterations: 827\ncpu: 859786.8198307191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39197.248920536025,
            "unit": "ns/iter",
            "extra": "iterations: 17833\ncpu: 39195.01486009111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 185886.390521593,
            "unit": "ns/iter",
            "extra": "iterations: 3777\ncpu: 185874.82128673673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 151181.5589378264,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 151171.84801381596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 151827.34993503251,
            "unit": "ns/iter",
            "extra": "iterations: 4618\ncpu: 151818.1030749226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 151516.3456310787,
            "unit": "ns/iter",
            "extra": "iterations: 4635\ncpu: 151513.44120819733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 269329.3740369588,
            "unit": "ns/iter",
            "extra": "iterations: 2596\ncpu: 269326.84899846034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1024920.9677891622,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1024916.5446559297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 856909.607099203,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 856905.9975520199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 865259.7095180278,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 865196.4153275749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 864194.540173057,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 864171.446229908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 569874.209415647,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 569859.4155844133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 852846.311274521,
            "unit": "ns/iter",
            "extra": "iterations: 816\ncpu: 852822.4264705825 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705956480880,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14408.730919141288,
            "unit": "ns/iter",
            "extra": "iterations: 48491\ncpu: 14408.861438205027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 118631.92533969066,
            "unit": "ns/iter",
            "extra": "iterations: 7139\ncpu: 118627.48284073401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 223400.651767156,
            "unit": "ns/iter",
            "extra": "iterations: 3848\ncpu: 223396.36174636177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 326448.83211397554,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 326440.7778205623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 428877.7312253119,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 428874.3577075099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 536068.3632451978,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 536063.7984019668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 518552.21100004204,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518540.99999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 593078.5680000099,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 593046.3000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 676143.6467153557,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 676132.91970803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11348.564462300572,
            "unit": "ns/iter",
            "extra": "iterations: 61726\ncpu: 11348.324855004359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9478.231392220014,
            "unit": "ns/iter",
            "extra": "iterations: 73961\ncpu: 9478.050594232081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9464.947291046805,
            "unit": "ns/iter",
            "extra": "iterations: 74143\ncpu: 9464.669624914015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9545.49359323968,
            "unit": "ns/iter",
            "extra": "iterations: 73360\ncpu: 9544.944111232277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15411.752992623915,
            "unit": "ns/iter",
            "extra": "iterations: 45278\ncpu: 15411.855647334243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50486.13513847947,
            "unit": "ns/iter",
            "extra": "iterations: 16176\ncpu: 50484.39663699306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 232484.09083471136,
            "unit": "ns/iter",
            "extra": "iterations: 3666\ncpu: 232467.703218767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 192326.38421644704,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 192317.7001127395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 192856.7157989744,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 192853.7750732477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 184186.51663067413,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 184176.06911447042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 439745.08676030923,
            "unit": "ns/iter",
            "extra": "iterations: 1994\ncpu: 439730.5416248737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3664511.537549641,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3664446.2450592876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2929622.703469932,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2929489.589905367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2962518.568690172,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2962423.9616613314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2975497.2243588385,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2975353.5256410246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1711398.5899812884,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1711396.846011132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2886119.3146416117,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2886040.1869158926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10950597.193876937,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10950172.448979579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6627723.81560286,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6627568.794326237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14268074.229729902,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14267552.702702692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 50153.024600001576,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50147.62000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 278328.5251126974,
            "unit": "ns/iter",
            "extra": "iterations: 3106\ncpu: 278313.10367031454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 220822.18893178643,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 220813.89961389892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 224890.71574532927,
            "unit": "ns/iter",
            "extra": "iterations: 3817\ncpu: 224881.76578464799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 214130.14666334906,
            "unit": "ns/iter",
            "extra": "iterations: 4016\ncpu: 214116.60856573668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 473029.3157608833,
            "unit": "ns/iter",
            "extra": "iterations: 1840\ncpu: 473014.13043478533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3717661.5960001983,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3717569.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2981142.7220448265,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2980996.166134189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3001381.206451565,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3001287.741935473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3010620.470967839,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3010610.0000000102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1756008.4393939278,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1755949.4318181863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2923651.845911971,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2923609.7484276854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11237712.36842147,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11237413.684210576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5063104.97999948,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5063073.999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 48083.13739560094,
            "unit": "ns/iter",
            "extra": "iterations: 17002\ncpu: 48082.1079872957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 234950.10367525276,
            "unit": "ns/iter",
            "extra": "iterations: 3646\ncpu: 234937.46571585187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 195307.93521255688,
            "unit": "ns/iter",
            "extra": "iterations: 4399\ncpu: 195295.27165264855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 196890.81416743246,
            "unit": "ns/iter",
            "extra": "iterations: 4348\ncpu: 196885.34958601624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 192796.2975411887,
            "unit": "ns/iter",
            "extra": "iterations: 4433\ncpu: 192793.7062937068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 446944.6636038815,
            "unit": "ns/iter",
            "extra": "iterations: 1959\ncpu: 446927.9734558441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3700658.0592889492,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3700651.3833992234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2951215.193038004,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2951115.189873436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2995862.3826369555,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2995799.035369757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2978320.324840807,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2978293.949044596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1727405.0650557843,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1727387.9182156234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2893379.507787922,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2893235.825545173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5674.641548159055,
            "unit": "ns/iter",
            "extra": "iterations: 123269\ncpu: 5674.565381401638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31647.81859707498,
            "unit": "ns/iter",
            "extra": "iterations: 22111\ncpu: 31647.700239699523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26441.85213316797,
            "unit": "ns/iter",
            "extra": "iterations: 26463\ncpu: 26441.48811548218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25357.017895957313,
            "unit": "ns/iter",
            "extra": "iterations: 27604\ncpu: 25356.933777713573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20305.886152956216,
            "unit": "ns/iter",
            "extra": "iterations: 34520\ncpu: 20305.431633835487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 126272.3115994337,
            "unit": "ns/iter",
            "extra": "iterations: 5552\ncpu: 126269.63256484107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 247895.38176031373,
            "unit": "ns/iter",
            "extra": "iterations: 2829\ncpu: 247888.8653234349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62565.09868244147,
            "unit": "ns/iter",
            "extra": "iterations: 11157\ncpu: 62562.34650891777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62567.45900178315,
            "unit": "ns/iter",
            "extra": "iterations: 11220\ncpu: 62566.96078431429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 62976.84846851577,
            "unit": "ns/iter",
            "extra": "iterations: 11133\ncpu: 62974.840564089216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 127994.97604680031,
            "unit": "ns/iter",
            "extra": "iterations: 5469\ncpu: 127994.2951179371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 116669.32905912188,
            "unit": "ns/iter",
            "extra": "iterations: 6005\ncpu: 116667.92672772601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39450.295476366286,
            "unit": "ns/iter",
            "extra": "iterations: 17707\ncpu: 39449.32512565629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 189839.0390349806,
            "unit": "ns/iter",
            "extra": "iterations: 3689\ncpu: 189836.92057468076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 152895.57784561845,
            "unit": "ns/iter",
            "extra": "iterations: 4586\ncpu: 152889.96947230602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 151520.7573131147,
            "unit": "ns/iter",
            "extra": "iterations: 4615\ncpu: 151520.30335861558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 153715.0057155392,
            "unit": "ns/iter",
            "extra": "iterations: 4549\ncpu: 153708.79314135082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 264464.40620274126,
            "unit": "ns/iter",
            "extra": "iterations: 2644\ncpu: 264458.3207261735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1057878.456193415,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1057842.7492447074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 877589.2765956752,
            "unit": "ns/iter",
            "extra": "iterations: 799\ncpu: 877586.9837296697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 885285.0367088073,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 885265.8227848085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 888796.3729456888,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 888754.8672566353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 579278.0132560212,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 579265.617232816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 873837.7627965297,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 873794.5068664117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39316.635185183586,
            "unit": "ns/iter",
            "extra": "iterations: 17820\ncpu: 39316.22895622904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 188447.9752621651,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 188441.89298198337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 154046.50933860644,
            "unit": "ns/iter",
            "extra": "iterations: 4551\ncpu: 154044.21006372204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 156185.83763919506,
            "unit": "ns/iter",
            "extra": "iterations: 4490\ncpu: 156183.63028953085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 156134.4228622442,
            "unit": "ns/iter",
            "extra": "iterations: 4479\ncpu: 156135.5436481346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 270719.565753995,
            "unit": "ns/iter",
            "extra": "iterations: 2593\ncpu: 270721.59660624666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1056163.0438729664,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1056124.6596066447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 876637.4786967989,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 876570.3007518812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 882250.5881612393,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 882211.8387909284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 881578.4294709761,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 881562.0906801017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 586912.4983221835,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 586906.5436241631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 875941.6050000368,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 875888.2500000098 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705958199814,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14264.613188142388,
            "unit": "ns/iter",
            "extra": "iterations: 49590\ncpu: 14263.889897156687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 113379.51285155806,
            "unit": "ns/iter",
            "extra": "iterations: 7431\ncpu: 113371.1075225407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 213818.66101693243,
            "unit": "ns/iter",
            "extra": "iterations: 4071\ncpu: 213812.28199459595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 310865.18644067756,
            "unit": "ns/iter",
            "extra": "iterations: 2773\ncpu: 310843.23836999654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 409219.8585572676,
            "unit": "ns/iter",
            "extra": "iterations: 2121\ncpu: 409198.2083922675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 507684.22072603117,
            "unit": "ns/iter",
            "extra": "iterations: 1708\ncpu: 507662.47072599543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 604900.1889818832,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 604859.6234309624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 565139.1820000526,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565115.4999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 647831.197999949,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647818.3999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11216.269178939196,
            "unit": "ns/iter",
            "extra": "iterations: 61591\ncpu: 11216.039681122225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9287.422174755135,
            "unit": "ns/iter",
            "extra": "iterations: 75374\ncpu: 9287.149414917629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9271.007186531524,
            "unit": "ns/iter",
            "extra": "iterations: 75558\ncpu: 9270.744328859952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9282.358706612917,
            "unit": "ns/iter",
            "extra": "iterations: 75368\ncpu: 9282.282931748228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15342.931910211631,
            "unit": "ns/iter",
            "extra": "iterations: 45440\ncpu: 15342.711267605608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50480.315505366874,
            "unit": "ns/iter",
            "extra": "iterations: 16117\ncpu: 50479.59918098902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 231231.1346828681,
            "unit": "ns/iter",
            "extra": "iterations: 3705\ncpu: 231226.3967611337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 181319.9797657088,
            "unit": "ns/iter",
            "extra": "iterations: 4695\ncpu: 181316.48562300298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 181276.81187486844,
            "unit": "ns/iter",
            "extra": "iterations: 4699\ncpu: 181266.22685677843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 179644.7231092608,
            "unit": "ns/iter",
            "extra": "iterations: 4760\ncpu: 179638.13025210088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 417971.78120548703,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 417945.04034171783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3489113.07251886,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3488954.5801526774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2810741.35542174,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2810646.3855421655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2773882.7514969297,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2773755.0898203566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2777289.3573570517,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2777224.02402402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1618218.3601398452,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1618191.433566433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2716140.432748518,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2716013.7426900584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10305101.912620964,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10304808.737864053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6431458.5763890855,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6431304.861111123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 13734428.376622347,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 13733912.987012962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 58327.285896981586,
            "unit": "ns/iter",
            "extra": "iterations: 14075\ncpu: 58325.25754884562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 276966.24147909175,
            "unit": "ns/iter",
            "extra": "iterations: 3110\ncpu: 276957.3633440503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 214215.41020509688,
            "unit": "ns/iter",
            "extra": "iterations: 3998\ncpu: 214209.204602301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 211215.17771753078,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 211208.40522553647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 208964.00391295867,
            "unit": "ns/iter",
            "extra": "iterations: 4089\ncpu: 208961.1885546594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 437356.98741191014,
            "unit": "ns/iter",
            "extra": "iterations: 1986\ncpu: 437349.9496475337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3558379.2298853025,
            "unit": "ns/iter",
            "extra": "iterations: 261\ncpu: 3558318.390804587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 2856535.6646154565,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2856438.1538461703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 2824737.6990881,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2824650.7598784044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 2823001.996969679,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2822953.3333333475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1647117.1301247876,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1647049.554367206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2765240.32142841,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2765201.190476196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 10656295.139999656,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 10656012.999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6285658.054054011,
            "unit": "ns/iter",
            "extra": "iterations: 148\ncpu: 6285439.189189184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 47449.55462429521,
            "unit": "ns/iter",
            "extra": "iterations: 17181\ncpu: 47449.29282346773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 228038.34803401423,
            "unit": "ns/iter",
            "extra": "iterations: 3764\ncpu: 228026.88629117922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 187224.33449934432,
            "unit": "ns/iter",
            "extra": "iterations: 4574\ncpu: 187217.75251421006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 183728.84074790624,
            "unit": "ns/iter",
            "extra": "iterations: 4653\ncpu: 183722.13625618006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 180233.92554990438,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 180230.4780033839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 414624.06010412436,
            "unit": "ns/iter",
            "extra": "iterations: 2113\ncpu: 414602.0823473728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3524562.6127820993,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 3524418.796992493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2819448.6435045553,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2819280.664652571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2804675.632530168,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2804619.8795180656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2787598.664670435,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2787504.1916167676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1634885.5298245149,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1634815.2631578932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2731935.805309552,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2731895.2802359946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5684.649295016349,
            "unit": "ns/iter",
            "extra": "iterations: 122556\ncpu: 5684.594797480339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 31293.76782441524,
            "unit": "ns/iter",
            "extra": "iterations: 22371\ncpu: 31293.38429216401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25549.380250805683,
            "unit": "ns/iter",
            "extra": "iterations: 29186\ncpu: 25548.180634550656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25943.30314220139,
            "unit": "ns/iter",
            "extra": "iterations: 28706\ncpu: 25942.851668640636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20035.502866971103,
            "unit": "ns/iter",
            "extra": "iterations: 34880\ncpu: 20034.959862385465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 122073.2347328078,
            "unit": "ns/iter",
            "extra": "iterations: 5764\ncpu: 122066.8806384474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 236701.22900508234,
            "unit": "ns/iter",
            "extra": "iterations: 2965\ncpu: 236688.66779089384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 61636.420920141434,
            "unit": "ns/iter",
            "extra": "iterations: 11520\ncpu: 61635.78124999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 60194.368669938034,
            "unit": "ns/iter",
            "extra": "iterations: 11631\ncpu: 60192.91548448181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 60370.835804175396,
            "unit": "ns/iter",
            "extra": "iterations: 11602\ncpu: 60369.46216169624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 120906.11295336252,
            "unit": "ns/iter",
            "extra": "iterations: 5790\ncpu: 120904.52504317737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 111545.12156549325,
            "unit": "ns/iter",
            "extra": "iterations: 6260\ncpu: 111539.3290734819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38553.764845214035,
            "unit": "ns/iter",
            "extra": "iterations: 18154\ncpu: 38553.76776468048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 183872.2755494373,
            "unit": "ns/iter",
            "extra": "iterations: 3640\ncpu: 183864.14835165074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 147945.5195024202,
            "unit": "ns/iter",
            "extra": "iterations: 4743\ncpu: 147933.41766814125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 146089.534767176,
            "unit": "ns/iter",
            "extra": "iterations: 4789\ncpu: 146082.83566506612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 148697.56431446385,
            "unit": "ns/iter",
            "extra": "iterations: 4719\ncpu: 148684.04322949727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 259211.06229142245,
            "unit": "ns/iter",
            "extra": "iterations: 2697\ncpu: 259201.85391175534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1029886.6165192168,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1029849.4100294915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 851970.5717761512,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 851959.8540145977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 846285.9879227177,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 846247.7053140211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 844992.9578313436,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 844938.5542168574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 562239.57177033,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 562218.261563001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 840821.5342136836,
            "unit": "ns/iter",
            "extra": "iterations: 833\ncpu: 840794.9579831847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39236.665061321,
            "unit": "ns/iter",
            "extra": "iterations: 17857\ncpu: 39235.25788206332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 188119.46982756382,
            "unit": "ns/iter",
            "extra": "iterations: 3712\ncpu: 188111.4493534514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 151824.11154599395,
            "unit": "ns/iter",
            "extra": "iterations: 4599\ncpu: 151822.74407479877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 150309.36688170244,
            "unit": "ns/iter",
            "extra": "iterations: 4650\ncpu: 150305.4193548364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 151259.87980147338,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 151251.25161847338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 263185.2096168505,
            "unit": "ns/iter",
            "extra": "iterations: 2662\ncpu: 263177.91134485253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1025231.8722466275,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1025170.1908957395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 850857.2834549504,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 850817.3965936773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 842927.0674697824,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 842878.5542168741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 843883.0903613446,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 843871.0843373464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 558236.9322169281,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 558220.0956937774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 844592.4127556804,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 844532.8519855596 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}