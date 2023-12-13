window.BENCHMARK_DATA = {
  "lastUpdate": 1702489603651,
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
      }
    ]
  }
}