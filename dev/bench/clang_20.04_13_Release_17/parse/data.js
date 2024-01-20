window.BENCHMARK_DATA = {
  "lastUpdate": 1705773504382,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-13 20.04 Release c++-17": [
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
        "date": 1702490337032,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 554.6854950374258,
            "unit": "ns/iter",
            "extra": "iterations: 1247249\ncpu: 554.6701580839111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5183.285959999466,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5183.169000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10141.18952429858,
            "unit": "ns/iter",
            "extra": "iterations: 81942\ncpu: 10140.810573332354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15061.199905866704,
            "unit": "ns/iter",
            "extra": "iterations: 55241\ncpu: 15060.583624481815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19668.90044242456,
            "unit": "ns/iter",
            "extra": "iterations: 43171\ncpu: 19668.36302147274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24709.07578092379,
            "unit": "ns/iter",
            "extra": "iterations: 33742\ncpu: 24708.25973564103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28887.40408206545,
            "unit": "ns/iter",
            "extra": "iterations: 28368\ncpu: 28887.04526226733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34296.3027049004,
            "unit": "ns/iter",
            "extra": "iterations: 24585\ncpu: 34294.122432377466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38476.80183776111,
            "unit": "ns/iter",
            "extra": "iterations: 21548\ncpu: 38475.94672359385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 506.45192199999656,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 506.44140000000175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 401.1216731368731,
            "unit": "ns/iter",
            "extra": "iterations: 1743121\ncpu: 401.11650309989966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 413.6767442232549,
            "unit": "ns/iter",
            "extra": "iterations: 1685693\ncpu: 413.6600199443198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 402.77623100491456,
            "unit": "ns/iter",
            "extra": "iterations: 1735513\ncpu: 402.7629294623548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 847.4815201263874,
            "unit": "ns/iter",
            "extra": "iterations: 835720\ncpu: 847.4547695400383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1932.171174765244,
            "unit": "ns/iter",
            "extra": "iterations: 413589\ncpu: 1932.1011922464086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10045.301109485545,
            "unit": "ns/iter",
            "extra": "iterations: 82651\ncpu: 10045.019419002796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7715.629957397145,
            "unit": "ns/iter",
            "extra": "iterations: 106331\ncpu: 7715.560843027909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7889.994805728739,
            "unit": "ns/iter",
            "extra": "iterations: 102228\ncpu: 7889.625151621847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7697.631368792388,
            "unit": "ns/iter",
            "extra": "iterations: 105436\ncpu: 7697.240980310321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29713.451827358655,
            "unit": "ns/iter",
            "extra": "iterations: 28128\ncpu: 29711.739192263984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 239833.7873864149,
            "unit": "ns/iter",
            "extra": "iterations: 3631\ncpu: 239828.17405673437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181478.94620186556,
            "unit": "ns/iter",
            "extra": "iterations: 4647\ncpu: 181474.84398536655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 186900.38830360313,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 186898.15093528276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 187907.93377767492,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 187902.9456030962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99057.96881401789,
            "unit": "ns/iter",
            "extra": "iterations: 8786\ncpu: 99057.19326200748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 179455.34580216106,
            "unit": "ns/iter",
            "extra": "iterations: 4812\ncpu: 179451.37157107258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5089.218790000132,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5088.909999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26782.78406470207,
            "unit": "ns/iter",
            "extra": "iterations: 30787\ncpu: 26782.193783090253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20714.435487519186,
            "unit": "ns/iter",
            "extra": "iterations: 39783\ncpu: 20713.27200060329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20932.44979169362,
            "unit": "ns/iter",
            "extra": "iterations: 39605\ncpu: 20931.556621638632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20748.689641502733,
            "unit": "ns/iter",
            "extra": "iterations: 40363\ncpu: 20748.212471818282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44828.732358617905,
            "unit": "ns/iter",
            "extra": "iterations: 18125\ncpu: 44827.37655172404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 257928.5011890707,
            "unit": "ns/iter",
            "extra": "iterations: 3364\ncpu: 257927.91319857255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201908.28775984075,
            "unit": "ns/iter",
            "extra": "iterations: 4330\ncpu: 201906.6974595849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202149.8105214228,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 202144.85567970318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 202152.89195455148,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 202147.9248782755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111927.71697148288,
            "unit": "ns/iter",
            "extra": "iterations: 7819\ncpu: 111926.11587159502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 192235.3693814134,
            "unit": "ns/iter",
            "extra": "iterations: 4494\ncpu: 192231.3751668893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 798730.0575000708,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 798700.1666666652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 445540.4278557065,
            "unit": "ns/iter",
            "extra": "iterations: 1996\ncpu: 445526.2525050105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2067.759792794065,
            "unit": "ns/iter",
            "extra": "iterations: 388985\ncpu: 2067.7110942581485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9526.968346146312,
            "unit": "ns/iter",
            "extra": "iterations: 84034\ncpu: 9526.69395720778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7267.324175098731,
            "unit": "ns/iter",
            "extra": "iterations: 113741\ncpu: 7267.214988438614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7252.312932396979,
            "unit": "ns/iter",
            "extra": "iterations: 113900\ncpu: 7252.022827041261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7282.627668193259,
            "unit": "ns/iter",
            "extra": "iterations: 113560\ncpu: 7282.57308911592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28591.966969611854,
            "unit": "ns/iter",
            "extra": "iterations: 29488\ncpu: 28590.97938144326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 247397.43400385015,
            "unit": "ns/iter",
            "extra": "iterations: 3629\ncpu: 247391.4301460465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 188318.45341879732,
            "unit": "ns/iter",
            "extra": "iterations: 4680\ncpu: 188307.22222222362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 187576.724871134,
            "unit": "ns/iter",
            "extra": "iterations: 4656\ncpu: 187568.8359106541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 181123.68303005243,
            "unit": "ns/iter",
            "extra": "iterations: 4726\ncpu: 181117.68937790953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95279.9992358065,
            "unit": "ns/iter",
            "extra": "iterations: 9160\ncpu: 95278.56986899585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 176829.80701755002,
            "unit": "ns/iter",
            "extra": "iterations: 4902\ncpu: 176824.17380661058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 199.05084835521893,
            "unit": "ns/iter",
            "extra": "iterations: 3512208\ncpu: 199.04735140971172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1481.6669860729398,
            "unit": "ns/iter",
            "extra": "iterations: 470665\ncpu: 1481.6090000318702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1083.3212047296547,
            "unit": "ns/iter",
            "extra": "iterations: 642833\ncpu: 1083.3077953371976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1126.9208823947276,
            "unit": "ns/iter",
            "extra": "iterations: 618952\ncpu: 1126.8849603846445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 842.6145755099172,
            "unit": "ns/iter",
            "extra": "iterations: 826839\ncpu: 842.5812038377436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9166.804274286653,
            "unit": "ns/iter",
            "extra": "iterations: 75381\ncpu: 9166.459717966005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11699.612604930127,
            "unit": "ns/iter",
            "extra": "iterations: 59802\ncpu: 11699.148857897728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2633.7086092216555,
            "unit": "ns/iter",
            "extra": "iterations: 265657\ncpu: 2633.6226788678587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2712.452780497983,
            "unit": "ns/iter",
            "extra": "iterations: 256303\ncpu: 2712.307698310201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2651.0847076915916,
            "unit": "ns/iter",
            "extra": "iterations: 264002\ncpu: 2650.9939318641477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5094.610216149581,
            "unit": "ns/iter",
            "extra": "iterations: 137312\ncpu: 5094.490649032814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5061.33650000038,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5061.085999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1948.3759734371818,
            "unit": "ns/iter",
            "extra": "iterations: 358395\ncpu: 1948.3410761868788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10231.708135780771,
            "unit": "ns/iter",
            "extra": "iterations: 68758\ncpu: 10231.308356845742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8127.470397958737,
            "unit": "ns/iter",
            "extra": "iterations: 87798\ncpu: 8127.398118408201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8053.425058751462,
            "unit": "ns/iter",
            "extra": "iterations: 86381\ncpu: 8053.287181208807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7964.77240963373,
            "unit": "ns/iter",
            "extra": "iterations: 87864\ncpu: 7964.363106619311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18722.35279902237,
            "unit": "ns/iter",
            "extra": "iterations: 37656\ncpu: 18721.850435521435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51791.18557770872,
            "unit": "ns/iter",
            "extra": "iterations: 13493\ncpu: 51788.43844956655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42159.130906690414,
            "unit": "ns/iter",
            "extra": "iterations: 16676\ncpu: 42158.07147997142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41677.009763399976,
            "unit": "ns/iter",
            "extra": "iterations: 16695\ncpu: 41675.543575921234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41703.92367964468,
            "unit": "ns/iter",
            "extra": "iterations: 16719\ncpu: 41702.44033734088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25108.981566323782,
            "unit": "ns/iter",
            "extra": "iterations: 27938\ncpu: 25108.422220631408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41237.43075839899,
            "unit": "ns/iter",
            "extra": "iterations: 17049\ncpu: 41236.67663792596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1964.517494812432,
            "unit": "ns/iter",
            "extra": "iterations: 356620\ncpu: 1964.4935785990597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10044.32220902501,
            "unit": "ns/iter",
            "extra": "iterations: 69877\ncpu: 10044.063139516518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9111.67069257861,
            "unit": "ns/iter",
            "extra": "iterations: 76670\ncpu: 9111.134733272445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9156.638768054787,
            "unit": "ns/iter",
            "extra": "iterations: 77471\ncpu: 9156.432729666698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9328.381185259906,
            "unit": "ns/iter",
            "extra": "iterations: 74431\ncpu: 9328.098507342396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19521.751457502727,
            "unit": "ns/iter",
            "extra": "iterations: 35849\ncpu: 19521.518033975983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53084.634151886254,
            "unit": "ns/iter",
            "extra": "iterations: 13194\ncpu: 53082.711838714225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40730.60854256856,
            "unit": "ns/iter",
            "extra": "iterations: 17325\ncpu: 40730.25108225085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40627.281145667075,
            "unit": "ns/iter",
            "extra": "iterations: 17073\ncpu: 40626.15826158329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42185.04136981036,
            "unit": "ns/iter",
            "extra": "iterations: 16703\ncpu: 42184.35610369378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27209.738860669495,
            "unit": "ns/iter",
            "extra": "iterations: 25787\ncpu: 27208.473261720977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42215.671530652624,
            "unit": "ns/iter",
            "extra": "iterations: 16653\ncpu: 42214.952260853745 ns\nthreads: 1"
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
        "date": 1702490337032,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 554.6854950374258,
            "unit": "ns/iter",
            "extra": "iterations: 1247249\ncpu: 554.6701580839111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5183.285959999466,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5183.169000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10141.18952429858,
            "unit": "ns/iter",
            "extra": "iterations: 81942\ncpu: 10140.810573332354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15061.199905866704,
            "unit": "ns/iter",
            "extra": "iterations: 55241\ncpu: 15060.583624481815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19668.90044242456,
            "unit": "ns/iter",
            "extra": "iterations: 43171\ncpu: 19668.36302147274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24709.07578092379,
            "unit": "ns/iter",
            "extra": "iterations: 33742\ncpu: 24708.25973564103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28887.40408206545,
            "unit": "ns/iter",
            "extra": "iterations: 28368\ncpu: 28887.04526226733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34296.3027049004,
            "unit": "ns/iter",
            "extra": "iterations: 24585\ncpu: 34294.122432377466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38476.80183776111,
            "unit": "ns/iter",
            "extra": "iterations: 21548\ncpu: 38475.94672359385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 506.45192199999656,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 506.44140000000175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 401.1216731368731,
            "unit": "ns/iter",
            "extra": "iterations: 1743121\ncpu: 401.11650309989966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 413.6767442232549,
            "unit": "ns/iter",
            "extra": "iterations: 1685693\ncpu: 413.6600199443198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 402.77623100491456,
            "unit": "ns/iter",
            "extra": "iterations: 1735513\ncpu: 402.7629294623548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 847.4815201263874,
            "unit": "ns/iter",
            "extra": "iterations: 835720\ncpu: 847.4547695400383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1932.171174765244,
            "unit": "ns/iter",
            "extra": "iterations: 413589\ncpu: 1932.1011922464086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10045.301109485545,
            "unit": "ns/iter",
            "extra": "iterations: 82651\ncpu: 10045.019419002796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7715.629957397145,
            "unit": "ns/iter",
            "extra": "iterations: 106331\ncpu: 7715.560843027909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7889.994805728739,
            "unit": "ns/iter",
            "extra": "iterations: 102228\ncpu: 7889.625151621847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7697.631368792388,
            "unit": "ns/iter",
            "extra": "iterations: 105436\ncpu: 7697.240980310321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29713.451827358655,
            "unit": "ns/iter",
            "extra": "iterations: 28128\ncpu: 29711.739192263984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 239833.7873864149,
            "unit": "ns/iter",
            "extra": "iterations: 3631\ncpu: 239828.17405673437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181478.94620186556,
            "unit": "ns/iter",
            "extra": "iterations: 4647\ncpu: 181474.84398536655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 186900.38830360313,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 186898.15093528276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 187907.93377767492,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 187902.9456030962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99057.96881401789,
            "unit": "ns/iter",
            "extra": "iterations: 8786\ncpu: 99057.19326200748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 179455.34580216106,
            "unit": "ns/iter",
            "extra": "iterations: 4812\ncpu: 179451.37157107258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5089.218790000132,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5088.909999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26782.78406470207,
            "unit": "ns/iter",
            "extra": "iterations: 30787\ncpu: 26782.193783090253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20714.435487519186,
            "unit": "ns/iter",
            "extra": "iterations: 39783\ncpu: 20713.27200060329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20932.44979169362,
            "unit": "ns/iter",
            "extra": "iterations: 39605\ncpu: 20931.556621638632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20748.689641502733,
            "unit": "ns/iter",
            "extra": "iterations: 40363\ncpu: 20748.212471818282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44828.732358617905,
            "unit": "ns/iter",
            "extra": "iterations: 18125\ncpu: 44827.37655172404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 257928.5011890707,
            "unit": "ns/iter",
            "extra": "iterations: 3364\ncpu: 257927.91319857255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201908.28775984075,
            "unit": "ns/iter",
            "extra": "iterations: 4330\ncpu: 201906.6974595849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202149.8105214228,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 202144.85567970318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 202152.89195455148,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 202147.9248782755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111927.71697148288,
            "unit": "ns/iter",
            "extra": "iterations: 7819\ncpu: 111926.11587159502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 192235.3693814134,
            "unit": "ns/iter",
            "extra": "iterations: 4494\ncpu: 192231.3751668893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 798730.0575000708,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 798700.1666666652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 445540.4278557065,
            "unit": "ns/iter",
            "extra": "iterations: 1996\ncpu: 445526.2525050105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2067.759792794065,
            "unit": "ns/iter",
            "extra": "iterations: 388985\ncpu: 2067.7110942581485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9526.968346146312,
            "unit": "ns/iter",
            "extra": "iterations: 84034\ncpu: 9526.69395720778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7267.324175098731,
            "unit": "ns/iter",
            "extra": "iterations: 113741\ncpu: 7267.214988438614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7252.312932396979,
            "unit": "ns/iter",
            "extra": "iterations: 113900\ncpu: 7252.022827041261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7282.627668193259,
            "unit": "ns/iter",
            "extra": "iterations: 113560\ncpu: 7282.57308911592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28591.966969611854,
            "unit": "ns/iter",
            "extra": "iterations: 29488\ncpu: 28590.97938144326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 247397.43400385015,
            "unit": "ns/iter",
            "extra": "iterations: 3629\ncpu: 247391.4301460465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 188318.45341879732,
            "unit": "ns/iter",
            "extra": "iterations: 4680\ncpu: 188307.22222222362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 187576.724871134,
            "unit": "ns/iter",
            "extra": "iterations: 4656\ncpu: 187568.8359106541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 181123.68303005243,
            "unit": "ns/iter",
            "extra": "iterations: 4726\ncpu: 181117.68937790953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95279.9992358065,
            "unit": "ns/iter",
            "extra": "iterations: 9160\ncpu: 95278.56986899585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 176829.80701755002,
            "unit": "ns/iter",
            "extra": "iterations: 4902\ncpu: 176824.17380661058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 199.05084835521893,
            "unit": "ns/iter",
            "extra": "iterations: 3512208\ncpu: 199.04735140971172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1481.6669860729398,
            "unit": "ns/iter",
            "extra": "iterations: 470665\ncpu: 1481.6090000318702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1083.3212047296547,
            "unit": "ns/iter",
            "extra": "iterations: 642833\ncpu: 1083.3077953371976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1126.9208823947276,
            "unit": "ns/iter",
            "extra": "iterations: 618952\ncpu: 1126.8849603846445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 842.6145755099172,
            "unit": "ns/iter",
            "extra": "iterations: 826839\ncpu: 842.5812038377436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9166.804274286653,
            "unit": "ns/iter",
            "extra": "iterations: 75381\ncpu: 9166.459717966005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11699.612604930127,
            "unit": "ns/iter",
            "extra": "iterations: 59802\ncpu: 11699.148857897728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2633.7086092216555,
            "unit": "ns/iter",
            "extra": "iterations: 265657\ncpu: 2633.6226788678587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2712.452780497983,
            "unit": "ns/iter",
            "extra": "iterations: 256303\ncpu: 2712.307698310201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2651.0847076915916,
            "unit": "ns/iter",
            "extra": "iterations: 264002\ncpu: 2650.9939318641477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5094.610216149581,
            "unit": "ns/iter",
            "extra": "iterations: 137312\ncpu: 5094.490649032814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5061.33650000038,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5061.085999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1948.3759734371818,
            "unit": "ns/iter",
            "extra": "iterations: 358395\ncpu: 1948.3410761868788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10231.708135780771,
            "unit": "ns/iter",
            "extra": "iterations: 68758\ncpu: 10231.308356845742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8127.470397958737,
            "unit": "ns/iter",
            "extra": "iterations: 87798\ncpu: 8127.398118408201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8053.425058751462,
            "unit": "ns/iter",
            "extra": "iterations: 86381\ncpu: 8053.287181208807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7964.77240963373,
            "unit": "ns/iter",
            "extra": "iterations: 87864\ncpu: 7964.363106619311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18722.35279902237,
            "unit": "ns/iter",
            "extra": "iterations: 37656\ncpu: 18721.850435521435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51791.18557770872,
            "unit": "ns/iter",
            "extra": "iterations: 13493\ncpu: 51788.43844956655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42159.130906690414,
            "unit": "ns/iter",
            "extra": "iterations: 16676\ncpu: 42158.07147997142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41677.009763399976,
            "unit": "ns/iter",
            "extra": "iterations: 16695\ncpu: 41675.543575921234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41703.92367964468,
            "unit": "ns/iter",
            "extra": "iterations: 16719\ncpu: 41702.44033734088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25108.981566323782,
            "unit": "ns/iter",
            "extra": "iterations: 27938\ncpu: 25108.422220631408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41237.43075839899,
            "unit": "ns/iter",
            "extra": "iterations: 17049\ncpu: 41236.67663792596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1964.517494812432,
            "unit": "ns/iter",
            "extra": "iterations: 356620\ncpu: 1964.4935785990597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10044.32220902501,
            "unit": "ns/iter",
            "extra": "iterations: 69877\ncpu: 10044.063139516518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9111.67069257861,
            "unit": "ns/iter",
            "extra": "iterations: 76670\ncpu: 9111.134733272445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9156.638768054787,
            "unit": "ns/iter",
            "extra": "iterations: 77471\ncpu: 9156.432729666698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9328.381185259906,
            "unit": "ns/iter",
            "extra": "iterations: 74431\ncpu: 9328.098507342396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19521.751457502727,
            "unit": "ns/iter",
            "extra": "iterations: 35849\ncpu: 19521.518033975983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53084.634151886254,
            "unit": "ns/iter",
            "extra": "iterations: 13194\ncpu: 53082.711838714225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40730.60854256856,
            "unit": "ns/iter",
            "extra": "iterations: 17325\ncpu: 40730.25108225085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40627.281145667075,
            "unit": "ns/iter",
            "extra": "iterations: 17073\ncpu: 40626.15826158329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42185.04136981036,
            "unit": "ns/iter",
            "extra": "iterations: 16703\ncpu: 42184.35610369378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27209.738860669495,
            "unit": "ns/iter",
            "extra": "iterations: 25787\ncpu: 27208.473261720977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42215.671530652624,
            "unit": "ns/iter",
            "extra": "iterations: 16653\ncpu: 42214.952260853745 ns\nthreads: 1"
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
        "date": 1702490337032,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 554.6854950374258,
            "unit": "ns/iter",
            "extra": "iterations: 1247249\ncpu: 554.6701580839111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5183.285959999466,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5183.169000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10141.18952429858,
            "unit": "ns/iter",
            "extra": "iterations: 81942\ncpu: 10140.810573332354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15061.199905866704,
            "unit": "ns/iter",
            "extra": "iterations: 55241\ncpu: 15060.583624481815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19668.90044242456,
            "unit": "ns/iter",
            "extra": "iterations: 43171\ncpu: 19668.36302147274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24709.07578092379,
            "unit": "ns/iter",
            "extra": "iterations: 33742\ncpu: 24708.25973564103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28887.40408206545,
            "unit": "ns/iter",
            "extra": "iterations: 28368\ncpu: 28887.04526226733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34296.3027049004,
            "unit": "ns/iter",
            "extra": "iterations: 24585\ncpu: 34294.122432377466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38476.80183776111,
            "unit": "ns/iter",
            "extra": "iterations: 21548\ncpu: 38475.94672359385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 506.45192199999656,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 506.44140000000175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 401.1216731368731,
            "unit": "ns/iter",
            "extra": "iterations: 1743121\ncpu: 401.11650309989966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 413.6767442232549,
            "unit": "ns/iter",
            "extra": "iterations: 1685693\ncpu: 413.6600199443198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 402.77623100491456,
            "unit": "ns/iter",
            "extra": "iterations: 1735513\ncpu: 402.7629294623548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 847.4815201263874,
            "unit": "ns/iter",
            "extra": "iterations: 835720\ncpu: 847.4547695400383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1932.171174765244,
            "unit": "ns/iter",
            "extra": "iterations: 413589\ncpu: 1932.1011922464086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10045.301109485545,
            "unit": "ns/iter",
            "extra": "iterations: 82651\ncpu: 10045.019419002796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7715.629957397145,
            "unit": "ns/iter",
            "extra": "iterations: 106331\ncpu: 7715.560843027909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7889.994805728739,
            "unit": "ns/iter",
            "extra": "iterations: 102228\ncpu: 7889.625151621847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7697.631368792388,
            "unit": "ns/iter",
            "extra": "iterations: 105436\ncpu: 7697.240980310321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29713.451827358655,
            "unit": "ns/iter",
            "extra": "iterations: 28128\ncpu: 29711.739192263984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 239833.7873864149,
            "unit": "ns/iter",
            "extra": "iterations: 3631\ncpu: 239828.17405673437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181478.94620186556,
            "unit": "ns/iter",
            "extra": "iterations: 4647\ncpu: 181474.84398536655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 186900.38830360313,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 186898.15093528276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 187907.93377767492,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 187902.9456030962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99057.96881401789,
            "unit": "ns/iter",
            "extra": "iterations: 8786\ncpu: 99057.19326200748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 179455.34580216106,
            "unit": "ns/iter",
            "extra": "iterations: 4812\ncpu: 179451.37157107258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5089.218790000132,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5088.909999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26782.78406470207,
            "unit": "ns/iter",
            "extra": "iterations: 30787\ncpu: 26782.193783090253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20714.435487519186,
            "unit": "ns/iter",
            "extra": "iterations: 39783\ncpu: 20713.27200060329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20932.44979169362,
            "unit": "ns/iter",
            "extra": "iterations: 39605\ncpu: 20931.556621638632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20748.689641502733,
            "unit": "ns/iter",
            "extra": "iterations: 40363\ncpu: 20748.212471818282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44828.732358617905,
            "unit": "ns/iter",
            "extra": "iterations: 18125\ncpu: 44827.37655172404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 257928.5011890707,
            "unit": "ns/iter",
            "extra": "iterations: 3364\ncpu: 257927.91319857255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201908.28775984075,
            "unit": "ns/iter",
            "extra": "iterations: 4330\ncpu: 201906.6974595849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202149.8105214228,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 202144.85567970318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 202152.89195455148,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 202147.9248782755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111927.71697148288,
            "unit": "ns/iter",
            "extra": "iterations: 7819\ncpu: 111926.11587159502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 192235.3693814134,
            "unit": "ns/iter",
            "extra": "iterations: 4494\ncpu: 192231.3751668893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 798730.0575000708,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 798700.1666666652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 445540.4278557065,
            "unit": "ns/iter",
            "extra": "iterations: 1996\ncpu: 445526.2525050105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2067.759792794065,
            "unit": "ns/iter",
            "extra": "iterations: 388985\ncpu: 2067.7110942581485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9526.968346146312,
            "unit": "ns/iter",
            "extra": "iterations: 84034\ncpu: 9526.69395720778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7267.324175098731,
            "unit": "ns/iter",
            "extra": "iterations: 113741\ncpu: 7267.214988438614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7252.312932396979,
            "unit": "ns/iter",
            "extra": "iterations: 113900\ncpu: 7252.022827041261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7282.627668193259,
            "unit": "ns/iter",
            "extra": "iterations: 113560\ncpu: 7282.57308911592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28591.966969611854,
            "unit": "ns/iter",
            "extra": "iterations: 29488\ncpu: 28590.97938144326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 247397.43400385015,
            "unit": "ns/iter",
            "extra": "iterations: 3629\ncpu: 247391.4301460465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 188318.45341879732,
            "unit": "ns/iter",
            "extra": "iterations: 4680\ncpu: 188307.22222222362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 187576.724871134,
            "unit": "ns/iter",
            "extra": "iterations: 4656\ncpu: 187568.8359106541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 181123.68303005243,
            "unit": "ns/iter",
            "extra": "iterations: 4726\ncpu: 181117.68937790953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95279.9992358065,
            "unit": "ns/iter",
            "extra": "iterations: 9160\ncpu: 95278.56986899585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 176829.80701755002,
            "unit": "ns/iter",
            "extra": "iterations: 4902\ncpu: 176824.17380661058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 199.05084835521893,
            "unit": "ns/iter",
            "extra": "iterations: 3512208\ncpu: 199.04735140971172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1481.6669860729398,
            "unit": "ns/iter",
            "extra": "iterations: 470665\ncpu: 1481.6090000318702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1083.3212047296547,
            "unit": "ns/iter",
            "extra": "iterations: 642833\ncpu: 1083.3077953371976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1126.9208823947276,
            "unit": "ns/iter",
            "extra": "iterations: 618952\ncpu: 1126.8849603846445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 842.6145755099172,
            "unit": "ns/iter",
            "extra": "iterations: 826839\ncpu: 842.5812038377436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9166.804274286653,
            "unit": "ns/iter",
            "extra": "iterations: 75381\ncpu: 9166.459717966005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11699.612604930127,
            "unit": "ns/iter",
            "extra": "iterations: 59802\ncpu: 11699.148857897728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2633.7086092216555,
            "unit": "ns/iter",
            "extra": "iterations: 265657\ncpu: 2633.6226788678587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2712.452780497983,
            "unit": "ns/iter",
            "extra": "iterations: 256303\ncpu: 2712.307698310201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2651.0847076915916,
            "unit": "ns/iter",
            "extra": "iterations: 264002\ncpu: 2650.9939318641477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5094.610216149581,
            "unit": "ns/iter",
            "extra": "iterations: 137312\ncpu: 5094.490649032814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5061.33650000038,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5061.085999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1948.3759734371818,
            "unit": "ns/iter",
            "extra": "iterations: 358395\ncpu: 1948.3410761868788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10231.708135780771,
            "unit": "ns/iter",
            "extra": "iterations: 68758\ncpu: 10231.308356845742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8127.470397958737,
            "unit": "ns/iter",
            "extra": "iterations: 87798\ncpu: 8127.398118408201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8053.425058751462,
            "unit": "ns/iter",
            "extra": "iterations: 86381\ncpu: 8053.287181208807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7964.77240963373,
            "unit": "ns/iter",
            "extra": "iterations: 87864\ncpu: 7964.363106619311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18722.35279902237,
            "unit": "ns/iter",
            "extra": "iterations: 37656\ncpu: 18721.850435521435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51791.18557770872,
            "unit": "ns/iter",
            "extra": "iterations: 13493\ncpu: 51788.43844956655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42159.130906690414,
            "unit": "ns/iter",
            "extra": "iterations: 16676\ncpu: 42158.07147997142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41677.009763399976,
            "unit": "ns/iter",
            "extra": "iterations: 16695\ncpu: 41675.543575921234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41703.92367964468,
            "unit": "ns/iter",
            "extra": "iterations: 16719\ncpu: 41702.44033734088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25108.981566323782,
            "unit": "ns/iter",
            "extra": "iterations: 27938\ncpu: 25108.422220631408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41237.43075839899,
            "unit": "ns/iter",
            "extra": "iterations: 17049\ncpu: 41236.67663792596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1964.517494812432,
            "unit": "ns/iter",
            "extra": "iterations: 356620\ncpu: 1964.4935785990597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10044.32220902501,
            "unit": "ns/iter",
            "extra": "iterations: 69877\ncpu: 10044.063139516518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9111.67069257861,
            "unit": "ns/iter",
            "extra": "iterations: 76670\ncpu: 9111.134733272445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9156.638768054787,
            "unit": "ns/iter",
            "extra": "iterations: 77471\ncpu: 9156.432729666698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9328.381185259906,
            "unit": "ns/iter",
            "extra": "iterations: 74431\ncpu: 9328.098507342396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19521.751457502727,
            "unit": "ns/iter",
            "extra": "iterations: 35849\ncpu: 19521.518033975983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53084.634151886254,
            "unit": "ns/iter",
            "extra": "iterations: 13194\ncpu: 53082.711838714225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40730.60854256856,
            "unit": "ns/iter",
            "extra": "iterations: 17325\ncpu: 40730.25108225085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40627.281145667075,
            "unit": "ns/iter",
            "extra": "iterations: 17073\ncpu: 40626.15826158329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42185.04136981036,
            "unit": "ns/iter",
            "extra": "iterations: 16703\ncpu: 42184.35610369378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27209.738860669495,
            "unit": "ns/iter",
            "extra": "iterations: 25787\ncpu: 27208.473261720977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42215.671530652624,
            "unit": "ns/iter",
            "extra": "iterations: 16653\ncpu: 42214.952260853745 ns\nthreads: 1"
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
        "date": 1702492989288,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 568.1494641850434,
            "unit": "ns/iter",
            "extra": "iterations: 1237554\ncpu: 568.0954528044838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5188.996385353843,
            "unit": "ns/iter",
            "extra": "iterations: 134453\ncpu: 5188.8615352576735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10156.331752055323,
            "unit": "ns/iter",
            "extra": "iterations: 82212\ncpu: 10155.693815987934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15084.735957492849,
            "unit": "ns/iter",
            "extra": "iterations: 55332\ncpu: 15083.624304200099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19835.789182515742,
            "unit": "ns/iter",
            "extra": "iterations: 42117\ncpu: 19833.682361041858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24684.915712185826,
            "unit": "ns/iter",
            "extra": "iterations: 34050\ncpu: 24684.452276064618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29316.428390633377,
            "unit": "ns/iter",
            "extra": "iterations: 28446\ncpu: 29315.74913871897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34235.838231052854,
            "unit": "ns/iter",
            "extra": "iterations: 24263\ncpu: 34235.03276593992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39140.555503468015,
            "unit": "ns/iter",
            "extra": "iterations: 21332\ncpu: 39140.25407837991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 514.2992445975275,
            "unit": "ns/iter",
            "extra": "iterations: 1364703\ncpu: 514.2920474271691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 409.9222556775668,
            "unit": "ns/iter",
            "extra": "iterations: 1731329\ncpu: 409.924399117672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 413.0137302842186,
            "unit": "ns/iter",
            "extra": "iterations: 1683869\ncpu: 413.0096224825096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 405.5457355978302,
            "unit": "ns/iter",
            "extra": "iterations: 1733420\ncpu: 405.54781876290804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 858.3543370983577,
            "unit": "ns/iter",
            "extra": "iterations: 789906\ncpu: 858.3469425475956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2010.1914926489865,
            "unit": "ns/iter",
            "extra": "iterations: 394835\ncpu: 2010.1708308533957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10300.019372897776,
            "unit": "ns/iter",
            "extra": "iterations: 76447\ncpu: 10299.7370727432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7715.99802738853,
            "unit": "ns/iter",
            "extra": "iterations: 104937\ncpu: 7715.958146316354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7566.688985496746,
            "unit": "ns/iter",
            "extra": "iterations: 105352\ncpu: 7566.490432075356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7406.056224752434,
            "unit": "ns/iter",
            "extra": "iterations: 108671\ncpu: 7405.952830101851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29707.704824464116,
            "unit": "ns/iter",
            "extra": "iterations: 27858\ncpu: 29707.52387106043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 237726.4652872344,
            "unit": "ns/iter",
            "extra": "iterations: 3673\ncpu: 237724.5303566575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182373.52306354066,
            "unit": "ns/iter",
            "extra": "iterations: 4596\ncpu: 182369.90861618827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 187849.44986923135,
            "unit": "ns/iter",
            "extra": "iterations: 4588\ncpu: 187844.26765475128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 190010.85278859414,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 190010.03026372724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99228.94459738501,
            "unit": "ns/iter",
            "extra": "iterations: 8718\ncpu: 99228.04542326227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 181437.71984276094,
            "unit": "ns/iter",
            "extra": "iterations: 4833\ncpu: 181432.23670597954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5747.938975883469,
            "unit": "ns/iter",
            "extra": "iterations: 143304\ncpu: 5747.72930274104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27114.25702196895,
            "unit": "ns/iter",
            "extra": "iterations: 30725\ncpu: 27113.669650122003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21176.73822164149,
            "unit": "ns/iter",
            "extra": "iterations: 38991\ncpu: 21176.671539586063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21191.05003680909,
            "unit": "ns/iter",
            "extra": "iterations: 39391\ncpu: 21190.414053971683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21073.227945426308,
            "unit": "ns/iter",
            "extra": "iterations: 39799\ncpu: 21073.16012965143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47192.56398024493,
            "unit": "ns/iter",
            "extra": "iterations: 17818\ncpu: 47192.238186103736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 258611.99615042616,
            "unit": "ns/iter",
            "extra": "iterations: 3377\ncpu: 258607.34379626892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202774.2220666966,
            "unit": "ns/iter",
            "extra": "iterations: 4287\ncpu: 202770.2822486591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202940.38831773846,
            "unit": "ns/iter",
            "extra": "iterations: 4280\ncpu: 202935.53738317767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 202837.8131535974,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 202834.53404601404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112476.58725224363,
            "unit": "ns/iter",
            "extra": "iterations: 7719\ncpu: 112472.35393185612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193467.44634422334,
            "unit": "ns/iter",
            "extra": "iterations: 4445\ncpu: 193464.43194600788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 814421.1066208805,
            "unit": "ns/iter",
            "extra": "iterations: 1163\ncpu: 814416.8529664642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 457414.8960165324,
            "unit": "ns/iter",
            "extra": "iterations: 1933\ncpu: 457412.26073460805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2078.25892502369,
            "unit": "ns/iter",
            "extra": "iterations: 385069\ncpu: 2078.2490930196836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9647.94783929079,
            "unit": "ns/iter",
            "extra": "iterations: 84949\ncpu: 9647.992324806673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7724.972270495629,
            "unit": "ns/iter",
            "extra": "iterations: 105880\ncpu: 7724.91783150735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7917.179091935633,
            "unit": "ns/iter",
            "extra": "iterations: 103539\ncpu: 7917.211871855033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7596.439962031811,
            "unit": "ns/iter",
            "extra": "iterations: 107457\ncpu: 7596.3483067645775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28734.02168199686,
            "unit": "ns/iter",
            "extra": "iterations: 28918\ncpu: 28733.394425617313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 249536.1026785746,
            "unit": "ns/iter",
            "extra": "iterations: 3584\ncpu: 249530.8872767856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 189570.75503213797,
            "unit": "ns/iter",
            "extra": "iterations: 4670\ncpu: 189568.77944325545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 189007.8045192868,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 189004.94564058792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 188412.72238741207,
            "unit": "ns/iter",
            "extra": "iterations: 4708\ncpu: 188411.5760407811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97784.67705790779,
            "unit": "ns/iter",
            "extra": "iterations: 9014\ncpu: 97784.23563345944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 179664.17667342856,
            "unit": "ns/iter",
            "extra": "iterations: 4930\ncpu: 179664.92900608532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 201.4151757381351,
            "unit": "ns/iter",
            "extra": "iterations: 3486921\ncpu: 201.41276501532286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1476.538059028641,
            "unit": "ns/iter",
            "extra": "iterations: 475669\ncpu: 1476.5263239773774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1142.1599630293738,
            "unit": "ns/iter",
            "extra": "iterations: 610216\ncpu: 1142.1483540254599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1135.0234073312954,
            "unit": "ns/iter",
            "extra": "iterations: 618396\ncpu: 1135.004430817793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 844.5583042013343,
            "unit": "ns/iter",
            "extra": "iterations: 831844\ncpu: 844.5487375036669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9447.907475148155,
            "unit": "ns/iter",
            "extra": "iterations: 73537\ncpu: 9447.837143206776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11256.856898753005,
            "unit": "ns/iter",
            "extra": "iterations: 62620\ncpu: 11256.772596614479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2728.477624529312,
            "unit": "ns/iter",
            "extra": "iterations: 256084\ncpu: 2728.4570687742994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2816.2871392291418,
            "unit": "ns/iter",
            "extra": "iterations: 250436\ncpu: 2816.2620390039574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2730.483790387779,
            "unit": "ns/iter",
            "extra": "iterations: 257008\ncpu: 2730.460530411502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5173.658149130033,
            "unit": "ns/iter",
            "extra": "iterations: 134272\ncpu: 5173.603580791255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5134.24386539659,
            "unit": "ns/iter",
            "extra": "iterations: 138273\ncpu: 5134.264823935275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1970.4948894196327,
            "unit": "ns/iter",
            "extra": "iterations: 358472\ncpu: 1970.4780289674045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10173.868212270963,
            "unit": "ns/iter",
            "extra": "iterations: 68064\ncpu: 10173.78349788428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8177.415635369204,
            "unit": "ns/iter",
            "extra": "iterations: 85895\ncpu: 8177.203562489019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8113.99786170009,
            "unit": "ns/iter",
            "extra": "iterations: 85582\ncpu: 8113.7563973732185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8051.709096536056,
            "unit": "ns/iter",
            "extra": "iterations: 87242\ncpu: 8051.566905848171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18895.422046905638,
            "unit": "ns/iter",
            "extra": "iterations: 37266\ncpu: 18894.549991949865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52260.675203466846,
            "unit": "ns/iter",
            "extra": "iterations: 13393\ncpu: 52256.462331068426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42387.58449725539,
            "unit": "ns/iter",
            "extra": "iterations: 16539\ncpu: 42385.724650824835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41962.06075523922,
            "unit": "ns/iter",
            "extra": "iterations: 16657\ncpu: 41961.04940865685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42260.97978697452,
            "unit": "ns/iter",
            "extra": "iterations: 16524\ncpu: 42258.25465988865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25406.673486416603,
            "unit": "ns/iter",
            "extra": "iterations: 27567\ncpu: 25404.976965212016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41427.6260603159,
            "unit": "ns/iter",
            "extra": "iterations: 16976\ncpu: 41423.50966069804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2192.522920693977,
            "unit": "ns/iter",
            "extra": "iterations: 318664\ncpu: 2192.359350287464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10080.274982742212,
            "unit": "ns/iter",
            "extra": "iterations: 69528\ncpu: 10080.052640662818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8437.995770502976,
            "unit": "ns/iter",
            "extra": "iterations: 83225\ncpu: 8437.757885250823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9312.027460760248,
            "unit": "ns/iter",
            "extra": "iterations: 73778\ncpu: 9311.225568597665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9533.966551860105,
            "unit": "ns/iter",
            "extra": "iterations: 73457\ncpu: 9532.95941843511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18894.32829994257,
            "unit": "ns/iter",
            "extra": "iterations: 36887\ncpu: 18892.997533006168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53304.88996937542,
            "unit": "ns/iter",
            "extra": "iterations: 13060\ncpu: 53300.17611026015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42749.789016105045,
            "unit": "ns/iter",
            "extra": "iterations: 16333\ncpu: 42747.064225800495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42437.918673953594,
            "unit": "ns/iter",
            "extra": "iterations: 16108\ncpu: 42434.324559225715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41379.9195191249,
            "unit": "ns/iter",
            "extra": "iterations: 16886\ncpu: 41377.35402108215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27066.84729082719,
            "unit": "ns/iter",
            "extra": "iterations: 26115\ncpu: 27065.020103388615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42124.390875610174,
            "unit": "ns/iter",
            "extra": "iterations: 16834\ncpu: 42121.7535939171 ns\nthreads: 1"
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
        "date": 1702503991420,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 551.399723208842,
            "unit": "ns/iter",
            "extra": "iterations: 1266659\ncpu: 551.3701793458224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5116.295880000052,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5116.325000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9949.931932133706,
            "unit": "ns/iter",
            "extra": "iterations: 84166\ncpu: 9949.407124016825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14704.397437043115,
            "unit": "ns/iter",
            "extra": "iterations: 55951\ncpu: 14703.862308091007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19226.99109364279,
            "unit": "ns/iter",
            "extra": "iterations: 43003\ncpu: 19226.244680603675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24205.77952482918,
            "unit": "ns/iter",
            "extra": "iterations: 34598\ncpu: 24204.743048731125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28960.468966714518,
            "unit": "ns/iter",
            "extra": "iterations: 28840\ncpu: 28958.11373092926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33532.105610565304,
            "unit": "ns/iter",
            "extra": "iterations: 24846\ncpu: 33531.70731707317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38448.643601941796,
            "unit": "ns/iter",
            "extra": "iterations: 21866\ncpu: 38446.44196469408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 526.903659636963,
            "unit": "ns/iter",
            "extra": "iterations: 1358714\ncpu: 526.8963887911652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 399.6131882966174,
            "unit": "ns/iter",
            "extra": "iterations: 1718645\ncpu: 399.6070741776226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 439.0995115511791,
            "unit": "ns/iter",
            "extra": "iterations: 1704375\ncpu: 438.8853392005861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 404.78881067616476,
            "unit": "ns/iter",
            "extra": "iterations: 1721659\ncpu: 404.7681916105335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 856.8597463380166,
            "unit": "ns/iter",
            "extra": "iterations: 823458\ncpu: 856.8268205542967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1882.8855655680388,
            "unit": "ns/iter",
            "extra": "iterations: 422469\ncpu: 1882.7890330414775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9772.847960698244,
            "unit": "ns/iter",
            "extra": "iterations: 82847\ncpu: 9772.457662920817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7443.11236255679,
            "unit": "ns/iter",
            "extra": "iterations: 108408\ncpu: 7442.932255922095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7521.275992403472,
            "unit": "ns/iter",
            "extra": "iterations: 107945\ncpu: 7520.827273148359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7102.042544883244,
            "unit": "ns/iter",
            "extra": "iterations: 112681\ncpu: 7101.642690426943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29344.517196529596,
            "unit": "ns/iter",
            "extra": "iterations: 27680\ncpu: 29343.656069364133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 238587.7080011064,
            "unit": "ns/iter",
            "extra": "iterations: 3637\ncpu: 238585.18009348324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 184016.10979548917,
            "unit": "ns/iter",
            "extra": "iterations: 4645\ncpu: 184012.766415501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183988.83379978593,
            "unit": "ns/iter",
            "extra": "iterations: 4645\ncpu: 183987.64262647988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 185411.14458611945,
            "unit": "ns/iter",
            "extra": "iterations: 4627\ncpu: 185408.5368489301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98528.32701421472,
            "unit": "ns/iter",
            "extra": "iterations: 8862\ncpu: 98527.2963213722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 180036.5661310196,
            "unit": "ns/iter",
            "extra": "iterations: 4854\ncpu: 180030.49031726446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5686.5307813574545,
            "unit": "ns/iter",
            "extra": "iterations: 143366\ncpu: 5686.392868602031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26541.546010909806,
            "unit": "ns/iter",
            "extra": "iterations: 31536\ncpu: 26541.111745306902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20911.665397454843,
            "unit": "ns/iter",
            "extra": "iterations: 40445\ncpu: 20910.401780195323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20558.74845279475,
            "unit": "ns/iter",
            "extra": "iterations: 40557\ncpu: 20557.65959020634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20481.674629079655,
            "unit": "ns/iter",
            "extra": "iterations: 40440\ncpu: 20480.867952522254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47004.18513451848,
            "unit": "ns/iter",
            "extra": "iterations: 17544\ncpu: 47002.17168262677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 258824.80778372343,
            "unit": "ns/iter",
            "extra": "iterations: 3366\ncpu: 258811.0219845514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 203617.48358555732,
            "unit": "ns/iter",
            "extra": "iterations: 4295\ncpu: 203603.44586728673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202834.78910614023,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 202822.7188081939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 202934.72267161016,
            "unit": "ns/iter",
            "extra": "iterations: 4327\ncpu: 202933.37185116787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112253.2686663326,
            "unit": "ns/iter",
            "extra": "iterations: 7768\ncpu: 112245.57157569454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 192471.62665198173,
            "unit": "ns/iter",
            "extra": "iterations: 4540\ncpu: 192468.8546255515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 810273.0563140269,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 810228.0716723588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 453447.56393278175,
            "unit": "ns/iter",
            "extra": "iterations: 1963\ncpu: 453423.22975038167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2076.677199290068,
            "unit": "ns/iter",
            "extra": "iterations: 384931\ncpu: 2076.61502970661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9952.971916318687,
            "unit": "ns/iter",
            "extra": "iterations: 82361\ncpu: 9952.445939218785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7662.3919551941235,
            "unit": "ns/iter",
            "extra": "iterations: 106951\ncpu: 7662.434198838716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7663.741068673774,
            "unit": "ns/iter",
            "extra": "iterations: 106955\ncpu: 7663.709971483384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7531.550710106919,
            "unit": "ns/iter",
            "extra": "iterations: 108716\ncpu: 7531.212517016819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28859.949469917992,
            "unit": "ns/iter",
            "extra": "iterations: 29052\ncpu: 28859.496764422398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 245291.3725110623,
            "unit": "ns/iter",
            "extra": "iterations: 3616\ncpu: 245284.67920354148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 187086.2253105867,
            "unit": "ns/iter",
            "extra": "iterations: 4749\ncpu: 187077.06885660032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 188282.24926255108,
            "unit": "ns/iter",
            "extra": "iterations: 4746\ncpu: 188273.19848293267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 186286.48088573763,
            "unit": "ns/iter",
            "extra": "iterations: 4787\ncpu: 186274.3263003971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97409.28637669305,
            "unit": "ns/iter",
            "extra": "iterations: 9058\ncpu: 97406.01678074645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 179527.04784979208,
            "unit": "ns/iter",
            "extra": "iterations: 4953\ncpu: 179515.54613365562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 204.5511884412874,
            "unit": "ns/iter",
            "extra": "iterations: 3424738\ncpu: 204.54230367403284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1429.310100746668,
            "unit": "ns/iter",
            "extra": "iterations: 490934\ncpu: 1429.2794958181692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1193.8484960426738,
            "unit": "ns/iter",
            "extra": "iterations: 584724\ncpu: 1193.8541944575527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1085.5627937546967,
            "unit": "ns/iter",
            "extra": "iterations: 645096\ncpu: 1085.5021578183787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 831.1621337370802,
            "unit": "ns/iter",
            "extra": "iterations: 841472\ncpu: 831.1145231213885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9409.27402673904,
            "unit": "ns/iter",
            "extra": "iterations: 74646\ncpu: 9408.915414087778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11154.735357569287,
            "unit": "ns/iter",
            "extra": "iterations: 62575\ncpu: 11153.943268078305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2656.547379012806,
            "unit": "ns/iter",
            "extra": "iterations: 261371\ncpu: 2656.504355877261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2729.38072018411,
            "unit": "ns/iter",
            "extra": "iterations: 259017\ncpu: 2729.261785905947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2665.72275271299,
            "unit": "ns/iter",
            "extra": "iterations: 259613\ncpu: 2665.7347667489607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5081.81713652552,
            "unit": "ns/iter",
            "extra": "iterations: 136282\ncpu: 5081.671827534125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5067.410529459148,
            "unit": "ns/iter",
            "extra": "iterations: 137291\ncpu: 5067.082328776073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1937.8965050341906,
            "unit": "ns/iter",
            "extra": "iterations: 361148\ncpu: 1937.906896895447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10227.028995869798,
            "unit": "ns/iter",
            "extra": "iterations: 68527\ncpu: 10226.891590176141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8112.625887391965,
            "unit": "ns/iter",
            "extra": "iterations: 85926\ncpu: 8112.497963363818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8024.790604875673,
            "unit": "ns/iter",
            "extra": "iterations: 86960\ncpu: 8024.74816007359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8027.859164783827,
            "unit": "ns/iter",
            "extra": "iterations: 87187\ncpu: 8027.467397662561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18918.68877097388,
            "unit": "ns/iter",
            "extra": "iterations: 37127\ncpu: 18918.455571417177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51961.405538188126,
            "unit": "ns/iter",
            "extra": "iterations: 13434\ncpu: 51959.55039452111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42234.814924112165,
            "unit": "ns/iter",
            "extra": "iterations: 16604\ncpu: 42234.51577933063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42126.64522883591,
            "unit": "ns/iter",
            "extra": "iterations: 16715\ncpu: 42125.34250673041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41906.546406559304,
            "unit": "ns/iter",
            "extra": "iterations: 16711\ncpu: 41906.773981209786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25139.493558514463,
            "unit": "ns/iter",
            "extra": "iterations: 27711\ncpu: 25138.721085489753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41150.67508834162,
            "unit": "ns/iter",
            "extra": "iterations: 16980\ncpu: 41150.359246171865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2053.4261629805187,
            "unit": "ns/iter",
            "extra": "iterations: 340053\ncpu: 2053.3937356823812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 12053.472219342008,
            "unit": "ns/iter",
            "extra": "iterations: 57882\ncpu: 12053.522684081414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8604.410848993184,
            "unit": "ns/iter",
            "extra": "iterations: 81261\ncpu: 8604.153283863126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9298.60334026419,
            "unit": "ns/iter",
            "extra": "iterations: 75503\ncpu: 9298.270267406644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9453.48151002614,
            "unit": "ns/iter",
            "extra": "iterations: 73959\ncpu: 9453.495855812016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18667.515783858133,
            "unit": "ns/iter",
            "extra": "iterations: 37475\ncpu: 18667.234156104045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52088.06311548468,
            "unit": "ns/iter",
            "extra": "iterations: 13404\ncpu: 52088.33930170099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41471.30975143478,
            "unit": "ns/iter",
            "extra": "iterations: 16736\ncpu: 41471.026529636954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41190.438239472096,
            "unit": "ns/iter",
            "extra": "iterations: 16904\ncpu: 41190.60577378139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42377.388530383505,
            "unit": "ns/iter",
            "extra": "iterations: 16426\ncpu: 42377.57214172667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24922.511955590897,
            "unit": "ns/iter",
            "extra": "iterations: 28104\ncpu: 24921.6588385991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41857.45120218351,
            "unit": "ns/iter",
            "extra": "iterations: 16886\ncpu: 41857.20123178978 ns\nthreads: 1"
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
        "date": 1705575684650,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 559.2534620924584,
            "unit": "ns/iter",
            "extra": "iterations: 1251122\ncpu: 559.2211630840158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5289.570029999595,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5289.441999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10251.380294875125,
            "unit": "ns/iter",
            "extra": "iterations: 81187\ncpu: 10250.638649044795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15110.331888500223,
            "unit": "ns/iter",
            "extra": "iterations: 55139\ncpu: 15109.757159179528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19961.047651331704,
            "unit": "ns/iter",
            "extra": "iterations: 41300\ncpu: 19959.98789346247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24914.413172946708,
            "unit": "ns/iter",
            "extra": "iterations: 33918\ncpu: 24913.73901763076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29592.33429689475,
            "unit": "ns/iter",
            "extra": "iterations: 28367\ncpu: 29592.265660803037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34179.3423419741,
            "unit": "ns/iter",
            "extra": "iterations: 24458\ncpu: 34178.980292746746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39126.23309747028,
            "unit": "ns/iter",
            "extra": "iterations: 21905\ncpu: 39125.26820360646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 510.62776171848907,
            "unit": "ns/iter",
            "extra": "iterations: 1370614\ncpu: 510.61553435175705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 402.7077656134789,
            "unit": "ns/iter",
            "extra": "iterations: 1737506\ncpu: 402.71026402211055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 415.6227392821001,
            "unit": "ns/iter",
            "extra": "iterations: 1693378\ncpu: 415.62126117145755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 408.7226537849759,
            "unit": "ns/iter",
            "extra": "iterations: 1717788\ncpu: 408.7200516012453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 864.0503271250752,
            "unit": "ns/iter",
            "extra": "iterations: 787925\ncpu: 864.0500047593367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1982.2123482020884,
            "unit": "ns/iter",
            "extra": "iterations: 403168\ncpu: 1982.1922870862734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9767.626865671515,
            "unit": "ns/iter",
            "extra": "iterations: 81070\ncpu: 9767.593437769829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7841.042951390421,
            "unit": "ns/iter",
            "extra": "iterations: 102162\ncpu: 7840.922260723174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7865.437104859634,
            "unit": "ns/iter",
            "extra": "iterations: 102337\ncpu: 7865.098644673972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 8037.237105047158,
            "unit": "ns/iter",
            "extra": "iterations: 101183\ncpu: 8037.123825148504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29498.559530663642,
            "unit": "ns/iter",
            "extra": "iterations: 27784\ncpu: 29497.14943852576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 238981.72053234608,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 238973.43834872395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 186212.0816724409,
            "unit": "ns/iter",
            "extra": "iterations: 4616\ncpu: 186203.48786828385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 184359.76887921736,
            "unit": "ns/iter",
            "extra": "iterations: 4595\ncpu: 184354.18933623502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 189243.15533773144,
            "unit": "ns/iter",
            "extra": "iterations: 4693\ncpu: 189237.56658853593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 100474.98538550899,
            "unit": "ns/iter",
            "extra": "iterations: 8690\ncpu: 100473.14154200247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 181685.25720804304,
            "unit": "ns/iter",
            "extra": "iterations: 4821\ncpu: 181677.2246421906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5748.652563327508,
            "unit": "ns/iter",
            "extra": "iterations: 142354\ncpu: 5748.559225592542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27092.93254675629,
            "unit": "ns/iter",
            "extra": "iterations: 30851\ncpu: 27092.687433146388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21046.529178354183,
            "unit": "ns/iter",
            "extra": "iterations: 39567\ncpu: 21046.291101170144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20941.615899203854,
            "unit": "ns/iter",
            "extra": "iterations: 39763\ncpu: 20941.692025249566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21033.37355787566,
            "unit": "ns/iter",
            "extra": "iterations: 39785\ncpu: 21032.74098278248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47377.20331223523,
            "unit": "ns/iter",
            "extra": "iterations: 17692\ncpu: 47375.542618132735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 259282.60457516686,
            "unit": "ns/iter",
            "extra": "iterations: 3366\ncpu: 259281.2240047535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201236.73898931846,
            "unit": "ns/iter",
            "extra": "iterations: 4314\ncpu: 201230.08808530468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 201552.4214434871,
            "unit": "ns/iter",
            "extra": "iterations: 4309\ncpu: 201544.02413553136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201680.25635693365,
            "unit": "ns/iter",
            "extra": "iterations: 4326\ncpu: 201663.36107258566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110794.54109501431,
            "unit": "ns/iter",
            "extra": "iterations: 7799\ncpu: 110788.96012309314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193233.6980841303,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 193216.9345959041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 809308.3950299863,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 809272.2365038578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 441052.7629224581,
            "unit": "ns/iter",
            "extra": "iterations: 2012\ncpu: 441047.8131212707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2084.10462951714,
            "unit": "ns/iter",
            "extra": "iterations: 387319\ncpu: 2084.098637040792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10033.436094958426,
            "unit": "ns/iter",
            "extra": "iterations: 81003\ncpu: 10033.260496524797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7576.171548737762,
            "unit": "ns/iter",
            "extra": "iterations: 107946\ncpu: 7575.922220369453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7646.240938165933,
            "unit": "ns/iter",
            "extra": "iterations: 107401\ncpu: 7645.62806677773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7514.014465541191,
            "unit": "ns/iter",
            "extra": "iterations: 109709\ncpu: 7513.955099399313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28847.327076185444,
            "unit": "ns/iter",
            "extra": "iterations: 29140\ncpu: 28844.81468771452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 247165.43664335978,
            "unit": "ns/iter",
            "extra": "iterations: 3575\ncpu: 247157.7342657341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 189536.79764707433,
            "unit": "ns/iter",
            "extra": "iterations: 4675\ncpu: 189525.13368983916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 188985.8938488029,
            "unit": "ns/iter",
            "extra": "iterations: 4682\ncpu: 188975.6087142249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 187813.70713072811,
            "unit": "ns/iter",
            "extra": "iterations: 4712\ncpu: 187799.66044142612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98294.83381729374,
            "unit": "ns/iter",
            "extra": "iterations: 8954\ncpu: 98288.50792941717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 179609.19678880536,
            "unit": "ns/iter",
            "extra": "iterations: 4858\ncpu: 179600.32935364448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 199.9893257755837,
            "unit": "ns/iter",
            "extra": "iterations: 3499458\ncpu: 199.97833950285903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1455.5223053122886,
            "unit": "ns/iter",
            "extra": "iterations: 492237\ncpu: 1455.4279747357402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1175.2220885430652,
            "unit": "ns/iter",
            "extra": "iterations: 590967\ncpu: 1175.2287352762494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1179.4893303738827,
            "unit": "ns/iter",
            "extra": "iterations: 592898\ncpu: 1179.4610540092935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 827.7536913599176,
            "unit": "ns/iter",
            "extra": "iterations: 847181\ncpu: 827.7063579093499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9312.081268949494,
            "unit": "ns/iter",
            "extra": "iterations: 75527\ncpu: 9311.148331060438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11728.650102166463,
            "unit": "ns/iter",
            "extra": "iterations: 59706\ncpu: 11727.53659598705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2658.5783432281596,
            "unit": "ns/iter",
            "extra": "iterations: 263271\ncpu: 2658.4261084585773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2703.9028049273034,
            "unit": "ns/iter",
            "extra": "iterations: 259365\ncpu: 2703.7325776415523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2651.0508031054874,
            "unit": "ns/iter",
            "extra": "iterations: 262917\ncpu: 2650.88335862647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5163.638870028307,
            "unit": "ns/iter",
            "extra": "iterations: 145809\ncpu: 5163.334224910658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5039.722540152513,
            "unit": "ns/iter",
            "extra": "iterations: 139094\ncpu: 5039.511409550418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1939.2485194250853,
            "unit": "ns/iter",
            "extra": "iterations: 354592\ncpu: 1939.1359647143743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10059.146555936219,
            "unit": "ns/iter",
            "extra": "iterations: 69598\ncpu: 10059.040489669236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8133.663657978697,
            "unit": "ns/iter",
            "extra": "iterations: 86638\ncpu: 8133.455296751997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7960.006257378068,
            "unit": "ns/iter",
            "extra": "iterations: 87257\ncpu: 7959.600948920884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8003.129693808325,
            "unit": "ns/iter",
            "extra": "iterations: 87429\ncpu: 8002.201786592535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18790.22671334135,
            "unit": "ns/iter",
            "extra": "iterations: 37135\ncpu: 18788.91342399352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52580.84566012336,
            "unit": "ns/iter",
            "extra": "iterations: 13399\ncpu: 52579.102918129065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42948.117781344605,
            "unit": "ns/iter",
            "extra": "iterations: 16208\ncpu: 42944.2620927939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42277.19197102016,
            "unit": "ns/iter",
            "extra": "iterations: 16565\ncpu: 42273.73377603434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42498.37643991992,
            "unit": "ns/iter",
            "extra": "iterations: 16494\ncpu: 42495.774220928484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25442.2604227187,
            "unit": "ns/iter",
            "extra": "iterations: 27536\ncpu: 25440.02760023243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41487.98261746569,
            "unit": "ns/iter",
            "extra": "iterations: 16856\ncpu: 41485.73801613675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2255.733368649732,
            "unit": "ns/iter",
            "extra": "iterations: 309581\ncpu: 2255.5586421647195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11079.621560031244,
            "unit": "ns/iter",
            "extra": "iterations: 63191\ncpu: 11079.05556170988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9580.184380320376,
            "unit": "ns/iter",
            "extra": "iterations: 72844\ncpu: 9579.053868540956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9176.602991207688,
            "unit": "ns/iter",
            "extra": "iterations: 76424\ncpu: 9175.668638124236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8395.362034918488,
            "unit": "ns/iter",
            "extra": "iterations: 83050\ncpu: 8395.40758579159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18876.65348925543,
            "unit": "ns/iter",
            "extra": "iterations: 36856\ncpu: 18875.90622965063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 58756.58023749032,
            "unit": "ns/iter",
            "extra": "iterations: 11790\ncpu: 58752.71416454518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 48135.88978717433,
            "unit": "ns/iter",
            "extra": "iterations: 14472\ncpu: 48133.75483692641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 47113.2405319584,
            "unit": "ns/iter",
            "extra": "iterations: 14813\ncpu: 47113.42739485593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 46765.43120794154,
            "unit": "ns/iter",
            "extra": "iterations: 15009\ncpu: 46762.469185156064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 27958.192108891428,
            "unit": "ns/iter",
            "extra": "iterations: 23216\ncpu: 27956.1293935216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 47695.27311064737,
            "unit": "ns/iter",
            "extra": "iterations: 14939\ncpu: 47692.47606934938 ns\nthreads: 1"
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
        "date": 1705773503956,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 549.9838392682929,
            "unit": "ns/iter",
            "extra": "iterations: 1260834\ncpu: 549.9687508426963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5177.372450000348,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5177.338999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10082.755464448406,
            "unit": "ns/iter",
            "extra": "iterations: 83174\ncpu: 10082.457258277826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15011.822038178922,
            "unit": "ns/iter",
            "extra": "iterations: 55422\ncpu: 15011.493630688168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19444.001312582197,
            "unit": "ns/iter",
            "extra": "iterations: 42664\ncpu: 19443.72070129382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24552.658437179416,
            "unit": "ns/iter",
            "extra": "iterations: 34105\ncpu: 24552.490837120655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30088.94295937662,
            "unit": "ns/iter",
            "extra": "iterations: 28506\ncpu: 30088.237564021598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34123.54361169481,
            "unit": "ns/iter",
            "extra": "iterations: 24764\ncpu: 34123.23534162496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38592.51694029109,
            "unit": "ns/iter",
            "extra": "iterations: 21989\ncpu: 38591.736777479666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 509.13642650129833,
            "unit": "ns/iter",
            "extra": "iterations: 1362228\ncpu: 509.1329792075926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 404.01899852693145,
            "unit": "ns/iter",
            "extra": "iterations: 1733766\ncpu: 403.9983481046452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 413.0290049756262,
            "unit": "ns/iter",
            "extra": "iterations: 1695054\ncpu: 413.01516057895464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 404.9455126536803,
            "unit": "ns/iter",
            "extra": "iterations: 1729062\ncpu: 404.92908871977977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 846.8346213765774,
            "unit": "ns/iter",
            "extra": "iterations: 814543\ncpu: 846.8199959977562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1976.6952292223916,
            "unit": "ns/iter",
            "extra": "iterations: 403582\ncpu: 1976.6548062103845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10341.374638999956,
            "unit": "ns/iter",
            "extra": "iterations: 78601\ncpu: 10341.05036831592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8037.175976995862,
            "unit": "ns/iter",
            "extra": "iterations: 101894\ncpu: 8037.104245588548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8632.131892359388,
            "unit": "ns/iter",
            "extra": "iterations: 94797\ncpu: 8632.137092945999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7945.286767547722,
            "unit": "ns/iter",
            "extra": "iterations: 103488\ncpu: 7945.126004947452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29807.42731721299,
            "unit": "ns/iter",
            "extra": "iterations: 27792\ncpu: 29807.32944732297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 238999.55134839396,
            "unit": "ns/iter",
            "extra": "iterations: 3671\ncpu: 238994.87877962468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 183386.39373794023,
            "unit": "ns/iter",
            "extra": "iterations: 4663\ncpu: 183384.73085996116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 182836.95993937607,
            "unit": "ns/iter",
            "extra": "iterations: 4618\ncpu: 182835.51320918094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 188281.43630091415,
            "unit": "ns/iter",
            "extra": "iterations: 4639\ncpu: 188276.91312782903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98414.13502584158,
            "unit": "ns/iter",
            "extra": "iterations: 8902\ncpu: 98412.67130981812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 180785.58226803938,
            "unit": "ns/iter",
            "extra": "iterations: 4850\ncpu: 180782.24742268023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5706.758223958563,
            "unit": "ns/iter",
            "extra": "iterations: 143848\ncpu: 5706.645904009794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26972.851644778937,
            "unit": "ns/iter",
            "extra": "iterations: 30764\ncpu: 26972.50032505531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21079.34320442414,
            "unit": "ns/iter",
            "extra": "iterations: 39408\ncpu: 21078.905298416572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20870.69451073983,
            "unit": "ns/iter",
            "extra": "iterations: 39805\ncpu: 20870.445923878935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20777.836563229055,
            "unit": "ns/iter",
            "extra": "iterations: 39991\ncpu: 20777.077342402048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46638.988080059025,
            "unit": "ns/iter",
            "extra": "iterations: 18037\ncpu: 46637.966402394835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 258329.29985270696,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 258326.0382916056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 200647.33171184137,
            "unit": "ns/iter",
            "extra": "iterations: 4317\ncpu: 200647.34769515868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200925.5496535608,
            "unit": "ns/iter",
            "extra": "iterations: 4330\ncpu: 200924.9884526562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201249.1356010092,
            "unit": "ns/iter",
            "extra": "iterations: 4351\ncpu: 201241.13996782372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111466.7229885085,
            "unit": "ns/iter",
            "extra": "iterations: 7830\ncpu: 111466.1813537668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194076.6318840546,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 194073.04347826002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 811114.174171605,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 811098.4706881923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 457295.5781573523,
            "unit": "ns/iter",
            "extra": "iterations: 1932\ncpu: 457285.5590062139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2065.928043812497,
            "unit": "ns/iter",
            "extra": "iterations: 386374\ncpu: 2065.8553629385065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10096.709245323711,
            "unit": "ns/iter",
            "extra": "iterations: 81598\ncpu: 10096.65187872246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7696.54369690163,
            "unit": "ns/iter",
            "extra": "iterations: 106289\ncpu: 7696.391912615633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7762.216024513551,
            "unit": "ns/iter",
            "extra": "iterations: 105738\ncpu: 7762.073237625083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7969.368303247073,
            "unit": "ns/iter",
            "extra": "iterations: 103203\ncpu: 7969.365231630855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28895.660726001803,
            "unit": "ns/iter",
            "extra": "iterations: 28953\ncpu: 28895.022968258814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 247295.41513119327,
            "unit": "ns/iter",
            "extra": "iterations: 3582\ncpu: 247292.21105527758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 187637.2849221682,
            "unit": "ns/iter",
            "extra": "iterations: 4689\ncpu: 187633.3333333338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 185867.18037304256,
            "unit": "ns/iter",
            "extra": "iterations: 4718\ncpu: 185865.13353115745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 186186.3791208796,
            "unit": "ns/iter",
            "extra": "iterations: 4732\ncpu: 186183.6010143706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98211.4094827523,
            "unit": "ns/iter",
            "extra": "iterations: 8816\ncpu: 98210.69646097999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 180370.11677935213,
            "unit": "ns/iter",
            "extra": "iterations: 4881\ncpu: 180366.1544765421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 201.90899975775986,
            "unit": "ns/iter",
            "extra": "iterations: 3463771\ncpu: 201.9071410898699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1419.8906792658145,
            "unit": "ns/iter",
            "extra": "iterations: 492944\ncpu: 1419.8578337498789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1174.7046267286755,
            "unit": "ns/iter",
            "extra": "iterations: 595907\ncpu: 1174.698065302138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1190.224589314605,
            "unit": "ns/iter",
            "extra": "iterations: 594494\ncpu: 1190.2059566623052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 828.9389533296836,
            "unit": "ns/iter",
            "extra": "iterations: 842978\ncpu: 828.9230561177111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9338.151249433695,
            "unit": "ns/iter",
            "extra": "iterations: 75154\ncpu: 9338.05652393753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11589.862497301687,
            "unit": "ns/iter",
            "extra": "iterations: 60217\ncpu: 11589.742099407234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2795.738120464543,
            "unit": "ns/iter",
            "extra": "iterations: 262384\ncpu: 2795.700576254633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2698.1013758423546,
            "unit": "ns/iter",
            "extra": "iterations: 259332\ncpu: 2698.0044884549616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2697.126999911174,
            "unit": "ns/iter",
            "extra": "iterations: 259449\ncpu: 2697.1015498228985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4859.200293999536,
            "unit": "ns/iter",
            "extra": "iterations: 144218\ncpu: 4859.1042726982905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5048.391211269839,
            "unit": "ns/iter",
            "extra": "iterations: 139201\ncpu: 5048.346635440807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1957.1748868223758,
            "unit": "ns/iter",
            "extra": "iterations: 360496\ncpu: 1957.1268474546175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10130.190643870686,
            "unit": "ns/iter",
            "extra": "iterations: 68725\ncpu: 10130.168061113105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8188.3736588637985,
            "unit": "ns/iter",
            "extra": "iterations: 86587\ncpu: 8188.15988543307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8126.68893730016,
            "unit": "ns/iter",
            "extra": "iterations: 85838\ncpu: 8126.522053169812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8015.801927342715,
            "unit": "ns/iter",
            "extra": "iterations: 87478\ncpu: 8015.6039232721305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18810.885168236255,
            "unit": "ns/iter",
            "extra": "iterations: 37150\ncpu: 18810.419919246197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51861.4274023881,
            "unit": "ns/iter",
            "extra": "iterations: 12831\ncpu: 51861.15657392248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42272.22782221689,
            "unit": "ns/iter",
            "extra": "iterations: 16627\ncpu: 42271.01100619493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41763.5879585513,
            "unit": "ns/iter",
            "extra": "iterations: 16792\ncpu: 41763.143163410976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42163.265234913866,
            "unit": "ns/iter",
            "extra": "iterations: 16623\ncpu: 42161.727726644494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25123.22832411501,
            "unit": "ns/iter",
            "extra": "iterations: 27842\ncpu: 25122.80008620098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41320.470757823045,
            "unit": "ns/iter",
            "extra": "iterations: 16996\ncpu: 41319.175100023334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2412.773532396475,
            "unit": "ns/iter",
            "extra": "iterations: 290695\ncpu: 2412.7332771461442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10075.31097360419,
            "unit": "ns/iter",
            "extra": "iterations: 69977\ncpu: 10075.126112865588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9167.669303985196,
            "unit": "ns/iter",
            "extra": "iterations: 75961\ncpu: 9167.724226906035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8815.00269185942,
            "unit": "ns/iter",
            "extra": "iterations: 78756\ncpu: 8814.871247904992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9148.544956311256,
            "unit": "ns/iter",
            "extra": "iterations: 76452\ncpu: 9148.493172186607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19126.753420957986,
            "unit": "ns/iter",
            "extra": "iterations: 37051\ncpu: 19126.563385603906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53461.03849996339,
            "unit": "ns/iter",
            "extra": "iterations: 13013\ncpu: 53460.92369169233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43066.46321070197,
            "unit": "ns/iter",
            "extra": "iterations: 16146\ncpu: 43065.675709153795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42230.15555420578,
            "unit": "ns/iter",
            "extra": "iterations: 16528\ncpu: 42229.92497579861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41175.13151087576,
            "unit": "ns/iter",
            "extra": "iterations: 17010\ncpu: 41174.168136390865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25843.12077615252,
            "unit": "ns/iter",
            "extra": "iterations: 27108\ncpu: 25843.079533716955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42591.28222491077,
            "unit": "ns/iter",
            "extra": "iterations: 16540\ncpu: 42590.4897218858 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}