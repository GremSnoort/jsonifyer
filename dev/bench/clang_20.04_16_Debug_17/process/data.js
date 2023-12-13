window.BENCHMARK_DATA = {
  "lastUpdate": 1702503299158,
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
      }
    ]
  }
}