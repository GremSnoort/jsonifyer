window.BENCHMARK_DATA = {
  "lastUpdate": 1702492990099,
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
      }
    ]
  }
}