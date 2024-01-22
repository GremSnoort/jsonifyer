window.BENCHMARK_DATA = {
  "lastUpdate": 1705958901158,
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
        "date": 1705775403274,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 570.3244926468077,
            "unit": "ns/iter",
            "extra": "iterations: 1227695\ncpu: 570.306957346898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5129.826810000395,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5129.637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10003.513600826034,
            "unit": "ns/iter",
            "extra": "iterations: 83267\ncpu: 10003.250987786278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15109.937685355224,
            "unit": "ns/iter",
            "extra": "iterations: 55974\ncpu: 15109.400793225426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19798.094735091006,
            "unit": "ns/iter",
            "extra": "iterations: 42033\ncpu: 19797.604263316905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24369.152509990814,
            "unit": "ns/iter",
            "extra": "iterations: 34024\ncpu: 24368.475193980707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29221.517347185432,
            "unit": "ns/iter",
            "extra": "iterations: 28679\ncpu: 29220.4260957495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34664.53496314073,
            "unit": "ns/iter",
            "extra": "iterations: 24011\ncpu: 34663.491732955736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38312.35413947423,
            "unit": "ns/iter",
            "extra": "iterations: 21452\ncpu: 38311.1597986202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 527.1944860228896,
            "unit": "ns/iter",
            "extra": "iterations: 1318794\ncpu: 527.1828655574712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 405.8003302017,
            "unit": "ns/iter",
            "extra": "iterations: 1721372\ncpu: 405.7891612039702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 409.84561235874173,
            "unit": "ns/iter",
            "extra": "iterations: 1701723\ncpu: 409.830154496354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 399.703884586594,
            "unit": "ns/iter",
            "extra": "iterations: 1743506\ncpu: 399.69653101279835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 852.4363973260588,
            "unit": "ns/iter",
            "extra": "iterations: 825720\ncpu: 852.3793779973826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1881.9377435761683,
            "unit": "ns/iter",
            "extra": "iterations: 423892\ncpu: 1881.8595302577055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10139.520470536148,
            "unit": "ns/iter",
            "extra": "iterations: 80164\ncpu: 10139.081133675969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7330.670678936683,
            "unit": "ns/iter",
            "extra": "iterations: 111159\ncpu: 7330.226972175011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7526.843275437565,
            "unit": "ns/iter",
            "extra": "iterations: 108126\ncpu: 7526.583800381036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7187.837845715313,
            "unit": "ns/iter",
            "extra": "iterations: 113207\ncpu: 7173.484855176803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29518.33855810416,
            "unit": "ns/iter",
            "extra": "iterations: 27880\ncpu: 29517.521520803406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 236970.42361299234,
            "unit": "ns/iter",
            "extra": "iterations: 3659\ncpu: 236964.82645531552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 184472.6966364825,
            "unit": "ns/iter",
            "extra": "iterations: 4638\ncpu: 184465.58861578256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183228.2584901621,
            "unit": "ns/iter",
            "extra": "iterations: 4623\ncpu: 183221.93380921517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 184408.8011657934,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 184401.20898100123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99071.14450012069,
            "unit": "ns/iter",
            "extra": "iterations: 8782\ncpu: 99067.29674333861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 179568.78840156493,
            "unit": "ns/iter",
            "extra": "iterations: 4811\ncpu: 179563.74974017835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5053.700419999814,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5053.625000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26696.442226585907,
            "unit": "ns/iter",
            "extra": "iterations: 31061\ncpu: 26695.882296126936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21410.860654072603,
            "unit": "ns/iter",
            "extra": "iterations: 39384\ncpu: 21410.390006093847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21076.947828290606,
            "unit": "ns/iter",
            "extra": "iterations: 39485\ncpu: 21076.522730150733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20550.45564895118,
            "unit": "ns/iter",
            "extra": "iterations: 40450\ncpu: 20549.99505562426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45641.03641178379,
            "unit": "ns/iter",
            "extra": "iterations: 18126\ncpu: 45639.78263268229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 257931.3695587873,
            "unit": "ns/iter",
            "extra": "iterations: 3377\ncpu: 257919.30707728883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202308.17603514978,
            "unit": "ns/iter",
            "extra": "iterations: 4323\ncpu: 202300.4163775159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 203085.57289242593,
            "unit": "ns/iter",
            "extra": "iterations: 4294\ncpu: 203076.05961807194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 202033.28340640824,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 202026.28663743497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112333.18762064126,
            "unit": "ns/iter",
            "extra": "iterations: 7771\ncpu: 112327.53828336191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193266.6998441497,
            "unit": "ns/iter",
            "extra": "iterations: 4491\ncpu: 193258.13849922147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 812491.1844577522,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 812448.1639624239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 457832.7209543431,
            "unit": "ns/iter",
            "extra": "iterations: 1928\ncpu: 457818.9315352722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2072.1789831330284,
            "unit": "ns/iter",
            "extra": "iterations: 388802\ncpu: 2072.1217997849794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9713.527591358856,
            "unit": "ns/iter",
            "extra": "iterations: 84338\ncpu: 9713.390168133014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7516.160648353412,
            "unit": "ns/iter",
            "extra": "iterations: 108336\ncpu: 7515.96514547331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7749.34281963602,
            "unit": "ns/iter",
            "extra": "iterations: 104361\ncpu: 7749.1438372572175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7433.076664327358,
            "unit": "ns/iter",
            "extra": "iterations: 109699\ncpu: 7432.821630096857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28613.82987367832,
            "unit": "ns/iter",
            "extra": "iterations: 29290\ncpu: 28613.199044042263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 245820.60296173216,
            "unit": "ns/iter",
            "extra": "iterations: 3579\ncpu: 245814.02626431856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 187601.20899356497,
            "unit": "ns/iter",
            "extra": "iterations: 4670\ncpu: 187596.35974304072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 185549.2988505915,
            "unit": "ns/iter",
            "extra": "iterations: 4698\ncpu: 185544.61472967194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 184656.80879259337,
            "unit": "ns/iter",
            "extra": "iterations: 4754\ncpu: 184654.16491375768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97319.19435216645,
            "unit": "ns/iter",
            "extra": "iterations: 9030\ncpu: 97316.71096345535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 180220.8220946962,
            "unit": "ns/iter",
            "extra": "iterations: 4879\ncpu: 180216.6837466688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 200.43207355089905,
            "unit": "ns/iter",
            "extra": "iterations: 3484173\ncpu: 200.42328552572062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1448.5832841767276,
            "unit": "ns/iter",
            "extra": "iterations: 478062\ncpu: 1448.4738381214163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1169.5244650181453,
            "unit": "ns/iter",
            "extra": "iterations: 599039\ncpu: 1169.4584158961263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1166.5017570582966,
            "unit": "ns/iter",
            "extra": "iterations: 598728\ncpu: 1166.4522120228162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 787.6097704624315,
            "unit": "ns/iter",
            "extra": "iterations: 893100\ncpu: 787.5735080058186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9174.71968475139,
            "unit": "ns/iter",
            "extra": "iterations: 76257\ncpu: 9174.541353580687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11596.544282639556,
            "unit": "ns/iter",
            "extra": "iterations: 60430\ncpu: 11595.965580009972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2634.7876066730623,
            "unit": "ns/iter",
            "extra": "iterations: 264594\ncpu: 2634.635706025062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2709.925402428034,
            "unit": "ns/iter",
            "extra": "iterations: 257810\ncpu: 2709.7525309336334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2662.2185485588157,
            "unit": "ns/iter",
            "extra": "iterations: 263104\ncpu: 2662.082294453895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5068.208643631506,
            "unit": "ns/iter",
            "extra": "iterations: 137905\ncpu: 5068.003335629611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5089.8682993413695,
            "unit": "ns/iter",
            "extra": "iterations: 137729\ncpu: 5089.570823864288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1935.102511955149,
            "unit": "ns/iter",
            "extra": "iterations: 363860\ncpu: 1935.014566041893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10126.858037009035,
            "unit": "ns/iter",
            "extra": "iterations: 69659\ncpu: 10126.534977533382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8083.002256786989,
            "unit": "ns/iter",
            "extra": "iterations: 86406\ncpu: 8082.625049186485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7960.840706343037,
            "unit": "ns/iter",
            "extra": "iterations: 87323\ncpu: 7960.562509304506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7960.122783535822,
            "unit": "ns/iter",
            "extra": "iterations: 87414\ncpu: 7959.699819250841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18631.293451554,
            "unit": "ns/iter",
            "extra": "iterations: 37444\ncpu: 18630.62974041252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52003.12712630111,
            "unit": "ns/iter",
            "extra": "iterations: 13286\ncpu: 52001.20427517589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42023.060462604364,
            "unit": "ns/iter",
            "extra": "iterations: 16688\ncpu: 42021.782118887335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41708.95702212313,
            "unit": "ns/iter",
            "extra": "iterations: 16683\ncpu: 41707.00113888403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 42053.58852538002,
            "unit": "ns/iter",
            "extra": "iterations: 16628\ncpu: 42051.97257637753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25073.877668104244,
            "unit": "ns/iter",
            "extra": "iterations: 28063\ncpu: 25072.700709118824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41186.77729977815,
            "unit": "ns/iter",
            "extra": "iterations: 16969\ncpu: 41185.55012080787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2071.8796168092836,
            "unit": "ns/iter",
            "extra": "iterations: 338004\ncpu: 2071.7358374457067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11368.729550084268,
            "unit": "ns/iter",
            "extra": "iterations: 61834\ncpu: 11368.664488792467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9243.615190642055,
            "unit": "ns/iter",
            "extra": "iterations: 75744\ncpu: 9243.429182509533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9060.892061478968,
            "unit": "ns/iter",
            "extra": "iterations: 77294\ncpu: 9060.841721220357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9454.84280251734,
            "unit": "ns/iter",
            "extra": "iterations: 73748\ncpu: 9454.791994359142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19968.08905866554,
            "unit": "ns/iter",
            "extra": "iterations: 36257\ncpu: 19967.735885484086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53134.55299574094,
            "unit": "ns/iter",
            "extra": "iterations: 13152\ncpu: 53134.329379561575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41474.82372738891,
            "unit": "ns/iter",
            "extra": "iterations: 16639\ncpu: 41474.21720055287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41472.75070821085,
            "unit": "ns/iter",
            "extra": "iterations: 16944\ncpu: 41471.85434371988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40808.83538299187,
            "unit": "ns/iter",
            "extra": "iterations: 17076\ncpu: 40807.73014757529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26265.861263837523,
            "unit": "ns/iter",
            "extra": "iterations: 26554\ncpu: 26265.462830458844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41317.19490528271,
            "unit": "ns/iter",
            "extra": "iterations: 16998\ncpu: 41316.67254971192 ns\nthreads: 1"
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
        "date": 1705778459398,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 558.8244519708111,
            "unit": "ns/iter",
            "extra": "iterations: 1259285\ncpu: 558.7952687437713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5205.395639999324,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5205.052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9943.328037325053,
            "unit": "ns/iter",
            "extra": "iterations: 81445\ncpu: 9943.148136779422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14860.55625402977,
            "unit": "ns/iter",
            "extra": "iterations: 55836\ncpu: 14860.108173937959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19608.443172776566,
            "unit": "ns/iter",
            "extra": "iterations: 42726\ncpu: 19608.531105181857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24165.12653402934,
            "unit": "ns/iter",
            "extra": "iterations: 34631\ncpu: 24163.89073373568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29281.200821670976,
            "unit": "ns/iter",
            "extra": "iterations: 28722\ncpu: 29280.990181742196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34891.975579828875,
            "unit": "ns/iter",
            "extra": "iterations: 24447\ncpu: 34890.58780218434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38963.42479934673,
            "unit": "ns/iter",
            "extra": "iterations: 21928\ncpu: 38962.63225100327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 524.7609428791698,
            "unit": "ns/iter",
            "extra": "iterations: 1338496\ncpu: 524.7366447116771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 409.0483638242225,
            "unit": "ns/iter",
            "extra": "iterations: 1701437\ncpu: 409.01749521140084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 416.8018993453953,
            "unit": "ns/iter",
            "extra": "iterations: 1687950\ncpu: 416.78473888444626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 407.7271406322176,
            "unit": "ns/iter",
            "extra": "iterations: 1714330\ncpu: 407.706975903123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 851.2798911583639,
            "unit": "ns/iter",
            "extra": "iterations: 800061\ncpu: 851.2433426951196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1982.33067033986,
            "unit": "ns/iter",
            "extra": "iterations: 402930\ncpu: 1982.2333904152072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9924.126552270363,
            "unit": "ns/iter",
            "extra": "iterations: 81413\ncpu: 9923.475366341972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7626.00880028894,
            "unit": "ns/iter",
            "extra": "iterations: 107951\ncpu: 7626.052560884107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7749.487186108056,
            "unit": "ns/iter",
            "extra": "iterations: 104574\ncpu: 7749.2216038403485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7616.3629439491915,
            "unit": "ns/iter",
            "extra": "iterations: 107529\ncpu: 7615.965925471241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30040.18939285421,
            "unit": "ns/iter",
            "extra": "iterations: 27868\ncpu: 30038.66441797049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 239968.82099447263,
            "unit": "ns/iter",
            "extra": "iterations: 3620\ncpu: 239966.7955801102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 184558.33268356044,
            "unit": "ns/iter",
            "extra": "iterations: 4617\ncpu: 184557.11500974634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 184791.59630435728,
            "unit": "ns/iter",
            "extra": "iterations: 4600\ncpu: 184788.32608695645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 186444.80586318995,
            "unit": "ns/iter",
            "extra": "iterations: 4605\ncpu: 186442.99674267106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99015.09669009353,
            "unit": "ns/iter",
            "extra": "iterations: 8822\ncpu: 99014.55452278396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 181798.65199247692,
            "unit": "ns/iter",
            "extra": "iterations: 4793\ncpu: 181796.16106822493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5727.455782696082,
            "unit": "ns/iter",
            "extra": "iterations: 142105\ncpu: 5727.227754125466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27001.265104607846,
            "unit": "ns/iter",
            "extra": "iterations: 30686\ncpu: 27000.39105781142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20856.02237906422,
            "unit": "ns/iter",
            "extra": "iterations: 39814\ncpu: 20855.33731853112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20831.219588751148,
            "unit": "ns/iter",
            "extra": "iterations: 40462\ncpu: 20830.149275863787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20764.62770423821,
            "unit": "ns/iter",
            "extra": "iterations: 40492\ncpu: 20763.106292601016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46152.846902802696,
            "unit": "ns/iter",
            "extra": "iterations: 17871\ncpu: 46151.16109898732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 258177.97739948006,
            "unit": "ns/iter",
            "extra": "iterations: 3407\ncpu: 258169.47461109518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201947.9034722409,
            "unit": "ns/iter",
            "extra": "iterations: 4320\ncpu: 201940.04629629562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 203372.33068661147,
            "unit": "ns/iter",
            "extra": "iterations: 4282\ncpu: 203369.96730499776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 202176.45401899508,
            "unit": "ns/iter",
            "extra": "iterations: 4317\ncpu: 202175.26059763768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112560.33200616113,
            "unit": "ns/iter",
            "extra": "iterations: 7786\ncpu: 112559.91523246813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 192850.45773241896,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 192846.6163745295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 811430.4940273175,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 811410.5802047781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 458887.4561403582,
            "unit": "ns/iter",
            "extra": "iterations: 1938\ncpu: 458844.84004128067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2080.0702500850307,
            "unit": "ns/iter",
            "extra": "iterations: 388028\ncpu: 2079.9143360788435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10075.0894622445,
            "unit": "ns/iter",
            "extra": "iterations: 81431\ncpu: 10074.736893811865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8008.693898109061,
            "unit": "ns/iter",
            "extra": "iterations: 102247\ncpu: 8008.360147485995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7941.7095810358915,
            "unit": "ns/iter",
            "extra": "iterations: 106095\ncpu: 7941.749375559678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7512.395269558515,
            "unit": "ns/iter",
            "extra": "iterations: 109123\ncpu: 7512.42542818658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28462.96465809009,
            "unit": "ns/iter",
            "extra": "iterations: 29540\ncpu: 28462.769126608015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 244928.53294573366,
            "unit": "ns/iter",
            "extra": "iterations: 3612\ncpu: 244920.26578073163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 186544.37858345438,
            "unit": "ns/iter",
            "extra": "iterations: 4744\ncpu: 186535.68718381092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 186993.73712104795,
            "unit": "ns/iter",
            "extra": "iterations: 4717\ncpu: 186985.43565825684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 185387.58711166965,
            "unit": "ns/iter",
            "extra": "iterations: 4764\ncpu: 185378.25356843128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96822.14966508541,
            "unit": "ns/iter",
            "extra": "iterations: 9107\ncpu: 96816.65751619602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 177933.62121832592,
            "unit": "ns/iter",
            "extra": "iterations: 4892\ncpu: 177927.78004905948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 199.79637664498614,
            "unit": "ns/iter",
            "extra": "iterations: 3514312\ncpu: 199.78909100842515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1460.7931382231882,
            "unit": "ns/iter",
            "extra": "iterations: 477952\ncpu: 1460.8004569496616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1133.599883389321,
            "unit": "ns/iter",
            "extra": "iterations: 617440\ncpu: 1133.6058564394827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1181.436271267238,
            "unit": "ns/iter",
            "extra": "iterations: 591107\ncpu: 1181.3916938896002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 824.9101355986501,
            "unit": "ns/iter",
            "extra": "iterations: 848534\ncpu: 824.8761982430901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9168.714088161716,
            "unit": "ns/iter",
            "extra": "iterations: 75929\ncpu: 9168.22689617938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11668.556968565366,
            "unit": "ns/iter",
            "extra": "iterations: 59998\ncpu: 11668.067268908992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2636.109458818736,
            "unit": "ns/iter",
            "extra": "iterations: 265826\ncpu: 2635.9374177093237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2723.3634172565057,
            "unit": "ns/iter",
            "extra": "iterations: 257657\ncpu: 2723.25494746892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2681.7409293564588,
            "unit": "ns/iter",
            "extra": "iterations: 260180\ncpu: 2681.5800599584895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5123.717524428136,
            "unit": "ns/iter",
            "extra": "iterations: 142561\ncpu: 5123.482579387114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5107.280958518023,
            "unit": "ns/iter",
            "extra": "iterations: 137337\ncpu: 5107.072383989773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1943.4395689417702,
            "unit": "ns/iter",
            "extra": "iterations: 363199\ncpu: 1943.362729522925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10180.170057449477,
            "unit": "ns/iter",
            "extra": "iterations: 69453\ncpu: 10180.225476221405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8005.536809710526,
            "unit": "ns/iter",
            "extra": "iterations: 87409\ncpu: 8005.142491047781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7997.106679857616,
            "unit": "ns/iter",
            "extra": "iterations: 86933\ncpu: 7996.800984666334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7996.704069714521,
            "unit": "ns/iter",
            "extra": "iterations: 87328\ncpu: 7996.356266031514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18663.355207302713,
            "unit": "ns/iter",
            "extra": "iterations: 37457\ncpu: 18662.586432442517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52324.57871165126,
            "unit": "ns/iter",
            "extra": "iterations: 13397\ncpu: 52323.01261476346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42398.5108970535,
            "unit": "ns/iter",
            "extra": "iterations: 16610\ncpu: 42394.24443106564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42031.96856641306,
            "unit": "ns/iter",
            "extra": "iterations: 16511\ncpu: 42028.53249348891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41915.339945733045,
            "unit": "ns/iter",
            "extra": "iterations: 16585\ncpu: 41913.67500753757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25051.366403971544,
            "unit": "ns/iter",
            "extra": "iterations: 27789\ncpu: 25050.03058764268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41436.518227942346,
            "unit": "ns/iter",
            "extra": "iterations: 16952\ncpu: 41433.96059461998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2094.9686972090326,
            "unit": "ns/iter",
            "extra": "iterations: 336232\ncpu: 2094.886863832123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10766.182060405006,
            "unit": "ns/iter",
            "extra": "iterations: 64929\ncpu: 10765.611668129846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9413.069814721863,
            "unit": "ns/iter",
            "extra": "iterations: 73781\ncpu: 9412.413765061416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9516.936572272325,
            "unit": "ns/iter",
            "extra": "iterations: 73769\ncpu: 9516.649270018588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9835.497529387443,
            "unit": "ns/iter",
            "extra": "iterations: 71035\ncpu: 9834.844794819435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18650.972810149146,
            "unit": "ns/iter",
            "extra": "iterations: 37514\ncpu: 18650.2105880473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53144.14712662057,
            "unit": "ns/iter",
            "extra": "iterations: 13016\ncpu: 53141.96373693954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41321.61931579483,
            "unit": "ns/iter",
            "extra": "iterations: 16691\ncpu: 41319.30980768056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41861.239947731374,
            "unit": "ns/iter",
            "extra": "iterations: 16837\ncpu: 41858.68028746259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41352.468125038366,
            "unit": "ns/iter",
            "extra": "iterations: 17051\ncpu: 41352.68899184755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26086.413736533195,
            "unit": "ns/iter",
            "extra": "iterations: 26819\ncpu: 26085.9167008463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41871.50283119087,
            "unit": "ns/iter",
            "extra": "iterations: 16954\ncpu: 41871.735283708775 ns\nthreads: 1"
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
        "date": 1705953605974,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 556.3925296297828,
            "unit": "ns/iter",
            "extra": "iterations: 1260473\ncpu: 556.3890698174415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5258.15587000011,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5258.133999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10479.589950152338,
            "unit": "ns/iter",
            "extra": "iterations: 82051\ncpu: 10479.442054332061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15124.867031889546,
            "unit": "ns/iter",
            "extra": "iterations: 55126\ncpu: 15124.491165693144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19690.969086571757,
            "unit": "ns/iter",
            "extra": "iterations: 41503\ncpu: 19689.651350504788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25662.378924833083,
            "unit": "ns/iter",
            "extra": "iterations: 33632\ncpu: 25660.585156993355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29148.84462616942,
            "unit": "ns/iter",
            "extra": "iterations: 29104\ncpu: 29147.26841671247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33632.2632762006,
            "unit": "ns/iter",
            "extra": "iterations: 24913\ncpu: 33630.71087384096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38046.853629032004,
            "unit": "ns/iter",
            "extra": "iterations: 22320\ncpu: 38045.70788530466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 509.8682611852844,
            "unit": "ns/iter",
            "extra": "iterations: 1371532\ncpu: 509.8653184905627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 402.6857445261013,
            "unit": "ns/iter",
            "extra": "iterations: 1740342\ncpu: 402.6838403026527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 412.2571568791509,
            "unit": "ns/iter",
            "extra": "iterations: 1695292\ncpu: 412.2551749197192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 405.3344491251146,
            "unit": "ns/iter",
            "extra": "iterations: 1726726\ncpu: 405.3262648503583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 855.2885009744147,
            "unit": "ns/iter",
            "extra": "iterations: 804129\ncpu: 855.2743403110686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1990.102287282033,
            "unit": "ns/iter",
            "extra": "iterations: 400519\ncpu: 1990.088610028491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10128.813341295789,
            "unit": "ns/iter",
            "extra": "iterations: 80382\ncpu: 10128.643228583525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7789.7557085342705,
            "unit": "ns/iter",
            "extra": "iterations: 103573\ncpu: 7789.7154663860465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7880.318376996525,
            "unit": "ns/iter",
            "extra": "iterations: 103635\ncpu: 7880.204564095146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7577.129212962592,
            "unit": "ns/iter",
            "extra": "iterations: 107822\ncpu: 7577.099293279654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30022.963706731058,
            "unit": "ns/iter",
            "extra": "iterations: 27388\ncpu: 30022.07536147222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 237196.17310327795,
            "unit": "ns/iter",
            "extra": "iterations: 3651\ncpu: 237194.68638729182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 189460.42315154758,
            "unit": "ns/iter",
            "extra": "iterations: 4639\ncpu: 189455.65854710023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 184841.33549783283,
            "unit": "ns/iter",
            "extra": "iterations: 4620\ncpu: 184838.70129870137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 185897.86669551223,
            "unit": "ns/iter",
            "extra": "iterations: 4621\ncpu: 185893.6377407489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99328.16750342424,
            "unit": "ns/iter",
            "extra": "iterations: 8764\ncpu: 99323.37973528053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 181512.73683118023,
            "unit": "ns/iter",
            "extra": "iterations: 4822\ncpu: 181504.811281626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5745.271798163261,
            "unit": "ns/iter",
            "extra": "iterations: 141778\ncpu: 5744.965368392829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27144.74244099191,
            "unit": "ns/iter",
            "extra": "iterations: 30758\ncpu: 27143.595162234145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21052.330557803045,
            "unit": "ns/iter",
            "extra": "iterations: 39512\ncpu: 21051.32111763514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20923.659378626526,
            "unit": "ns/iter",
            "extra": "iterations: 39654\ncpu: 20922.45675089526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20736.980200243546,
            "unit": "ns/iter",
            "extra": "iterations: 40051\ncpu: 20736.019075678476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47347.750000000495,
            "unit": "ns/iter",
            "extra": "iterations: 17504\ncpu: 47345.12111517363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 256558.1972246818,
            "unit": "ns/iter",
            "extra": "iterations: 3387\ncpu: 256544.31650427933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201106.49712311925,
            "unit": "ns/iter",
            "extra": "iterations: 4345\ncpu: 201100.7364787127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200205.1092092465,
            "unit": "ns/iter",
            "extra": "iterations: 4148\ncpu: 200198.04725168753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 200252.14475190995,
            "unit": "ns/iter",
            "extra": "iterations: 4373\ncpu: 200247.70180654118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 110823.06900494536,
            "unit": "ns/iter",
            "extra": "iterations: 7869\ncpu: 110821.48938874088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 192840.92996023843,
            "unit": "ns/iter",
            "extra": "iterations: 4526\ncpu: 192837.89217852394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 805705.3327673925,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 805686.5874363341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 449969.846819352,
            "unit": "ns/iter",
            "extra": "iterations: 1965\ncpu: 449963.1552162855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2056.8808175354184,
            "unit": "ns/iter",
            "extra": "iterations: 386332\ncpu: 2056.8542082975337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9590.805708270134,
            "unit": "ns/iter",
            "extra": "iterations: 85490\ncpu: 9590.67493274065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7837.581298830767,
            "unit": "ns/iter",
            "extra": "iterations: 104571\ncpu: 7837.442503179694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7847.173435521813,
            "unit": "ns/iter",
            "extra": "iterations: 104252\ncpu: 7847.041783371095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7644.486825842428,
            "unit": "ns/iter",
            "extra": "iterations: 106800\ncpu: 7644.13764044945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28960.172702812437,
            "unit": "ns/iter",
            "extra": "iterations: 28992\ncpu: 28958.402317880824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 246272.75434172704,
            "unit": "ns/iter",
            "extra": "iterations: 3570\ncpu: 246262.63305322104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 186055.902558641,
            "unit": "ns/iter",
            "extra": "iterations: 4690\ncpu: 186042.15351812416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 186390.84266553374,
            "unit": "ns/iter",
            "extra": "iterations: 4697\ncpu: 186385.22461145473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 185470.92238805877,
            "unit": "ns/iter",
            "extra": "iterations: 4690\ncpu: 185459.33901918944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97534.69864384616,
            "unit": "ns/iter",
            "extra": "iterations: 8996\ncpu: 97530.71365051108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 178654.6413109536,
            "unit": "ns/iter",
            "extra": "iterations: 4943\ncpu: 178641.99878616145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 199.64857207037392,
            "unit": "ns/iter",
            "extra": "iterations: 3512393\ncpu: 199.6453699799524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1440.3596971398506,
            "unit": "ns/iter",
            "extra": "iterations: 484844\ncpu: 1440.2840913778452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1177.5445468195176,
            "unit": "ns/iter",
            "extra": "iterations: 657387\ncpu: 1177.4867771951597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1122.037304592852,
            "unit": "ns/iter",
            "extra": "iterations: 625553\ncpu: 1121.980231890827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 845.5624043964933,
            "unit": "ns/iter",
            "extra": "iterations: 825022\ncpu: 845.5129681390365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9432.5833992842,
            "unit": "ns/iter",
            "extra": "iterations: 74551\ncpu: 9432.431489852654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11702.483546968871,
            "unit": "ns/iter",
            "extra": "iterations: 59837\ncpu: 11702.07229640525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2631.6552930359408,
            "unit": "ns/iter",
            "extra": "iterations: 266435\ncpu: 2631.605081914902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2695.36824583221,
            "unit": "ns/iter",
            "extra": "iterations: 261024\ncpu: 2695.3226523231842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2641.8622033138954,
            "unit": "ns/iter",
            "extra": "iterations: 265137\ncpu: 2641.845913621996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5049.021941513846,
            "unit": "ns/iter",
            "extra": "iterations: 138459\ncpu: 5048.990675940187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4986.315839916781,
            "unit": "ns/iter",
            "extra": "iterations: 146074\ncpu: 4986.21999808314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1940.0340649573286,
            "unit": "ns/iter",
            "extra": "iterations: 359930\ncpu: 1939.9849970827402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10083.725395553542,
            "unit": "ns/iter",
            "extra": "iterations: 68575\ncpu: 10083.4400291653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8098.90472917837,
            "unit": "ns/iter",
            "extra": "iterations: 85850\ncpu: 8098.393709959268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8012.828718719556,
            "unit": "ns/iter",
            "extra": "iterations: 87873\ncpu: 8012.383781138676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7989.172776233811,
            "unit": "ns/iter",
            "extra": "iterations: 88195\ncpu: 7989.023187255641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18615.942476696076,
            "unit": "ns/iter",
            "extra": "iterations: 37550\ncpu: 18615.33155792279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52025.67081068968,
            "unit": "ns/iter",
            "extra": "iterations: 13433\ncpu: 52022.31072731313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42331.459935798324,
            "unit": "ns/iter",
            "extra": "iterations: 16511\ncpu: 42329.992126460944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41835.3692234094,
            "unit": "ns/iter",
            "extra": "iterations: 16727\ncpu: 41834.54295450478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41778.05172413772,
            "unit": "ns/iter",
            "extra": "iterations: 16646\ncpu: 41775.81400937215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25084.562817850172,
            "unit": "ns/iter",
            "extra": "iterations: 27922\ncpu: 25083.654466012697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41154.96386249424,
            "unit": "ns/iter",
            "extra": "iterations: 17046\ncpu: 41152.66924791754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2086.331492256061,
            "unit": "ns/iter",
            "extra": "iterations: 335492\ncpu: 2086.2351412254015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11242.2045663134,
            "unit": "ns/iter",
            "extra": "iterations: 62107\ncpu: 11241.819762667645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9163.396672126471,
            "unit": "ns/iter",
            "extra": "iterations: 76325\ncpu: 9163.241401899764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9739.153192140358,
            "unit": "ns/iter",
            "extra": "iterations: 71864\ncpu: 9738.460146944226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9547.895988052824,
            "unit": "ns/iter",
            "extra": "iterations: 73655\ncpu: 9547.274455230443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18614.873664913994,
            "unit": "ns/iter",
            "extra": "iterations: 37638\ncpu: 18613.728147085596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52890.61622111288,
            "unit": "ns/iter",
            "extra": "iterations: 13242\ncpu: 52887.056335900816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41221.12036384351,
            "unit": "ns/iter",
            "extra": "iterations: 17040\ncpu: 41218.644366197266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41135.546456135715,
            "unit": "ns/iter",
            "extra": "iterations: 16973\ncpu: 41132.73434277972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41558.7103624144,
            "unit": "ns/iter",
            "extra": "iterations: 16859\ncpu: 41556.331929533284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24930.6225491964,
            "unit": "ns/iter",
            "extra": "iterations: 27389\ncpu: 24929.205155354084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40812.24606457616,
            "unit": "ns/iter",
            "extra": "iterations: 17406\ncpu: 40809.76674709942 ns\nthreads: 1"
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
        "date": 1705955074820,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 567.1188603082973,
            "unit": "ns/iter",
            "extra": "iterations: 1246337\ncpu: 567.1035201554637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5235.497669999631,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5235.154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10163.897769948795,
            "unit": "ns/iter",
            "extra": "iterations: 81747\ncpu: 10163.413947912459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15190.951041059896,
            "unit": "ns/iter",
            "extra": "iterations: 54944\ncpu: 15190.33379440886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20026.774059873125,
            "unit": "ns/iter",
            "extra": "iterations: 41989\ncpu: 20026.040153373513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25912.303688413343,
            "unit": "ns/iter",
            "extra": "iterations: 33429\ncpu: 25910.775075533234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29489.73485548132,
            "unit": "ns/iter",
            "extra": "iterations: 28162\ncpu: 29488.00156238906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34056.36834270756,
            "unit": "ns/iter",
            "extra": "iterations: 24184\ncpu: 34054.953688388996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37815.83262798811,
            "unit": "ns/iter",
            "extra": "iterations: 21975\ncpu: 37814.07963594999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 518.5685126590641,
            "unit": "ns/iter",
            "extra": "iterations: 1348561\ncpu: 518.5456942622544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 407.57397071752507,
            "unit": "ns/iter",
            "extra": "iterations: 1729360\ncpu: 407.56753943655485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 413.68286233853075,
            "unit": "ns/iter",
            "extra": "iterations: 1692057\ncpu: 413.67885360835993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 406.0768242224222,
            "unit": "ns/iter",
            "extra": "iterations: 1725146\ncpu: 406.0600668001431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 847.1325557093669,
            "unit": "ns/iter",
            "extra": "iterations: 794300\ncpu: 847.130681102857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1985.14421213245,
            "unit": "ns/iter",
            "extra": "iterations: 402428\ncpu: 1985.1399505004633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10561.32512071619,
            "unit": "ns/iter",
            "extra": "iterations: 76833\ncpu: 10560.992021657374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7721.914056524665,
            "unit": "ns/iter",
            "extra": "iterations: 104592\ncpu: 7721.608727244899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7978.357121177775,
            "unit": "ns/iter",
            "extra": "iterations: 102139\ncpu: 7978.100431764551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7856.633784089784,
            "unit": "ns/iter",
            "extra": "iterations: 101533\ncpu: 7856.259541232889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29683.192067254575,
            "unit": "ns/iter",
            "extra": "iterations: 27834\ncpu: 29682.427965797167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 240094.77954920128,
            "unit": "ns/iter",
            "extra": "iterations: 3638\ncpu: 240086.72347443635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 183393.36675293275,
            "unit": "ns/iter",
            "extra": "iterations: 4638\ncpu: 183388.4001724876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 184538.99355254037,
            "unit": "ns/iter",
            "extra": "iterations: 4653\ncpu: 184530.04513217276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 185195.16522679353,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 185189.46004319654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 100357.37644633134,
            "unit": "ns/iter",
            "extra": "iterations: 8729\ncpu: 100353.72894947871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 180846.21246106227,
            "unit": "ns/iter",
            "extra": "iterations: 4815\ncpu: 180840.41536863975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5749.859797438478,
            "unit": "ns/iter",
            "extra": "iterations: 143364\ncpu: 5749.802600373863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26907.085543723097,
            "unit": "ns/iter",
            "extra": "iterations: 30990\ncpu: 26905.830913197748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20933.762887643024,
            "unit": "ns/iter",
            "extra": "iterations: 39437\ncpu: 20933.14400182564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21049.778791795266,
            "unit": "ns/iter",
            "extra": "iterations: 39447\ncpu: 21049.154561817108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 21543.690625928284,
            "unit": "ns/iter",
            "extra": "iterations: 37049\ncpu: 21543.326405570955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45598.82033512928,
            "unit": "ns/iter",
            "extra": "iterations: 17605\ncpu: 45595.24566884399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 260133.02638601157,
            "unit": "ns/iter",
            "extra": "iterations: 3373\ncpu: 260123.03587310997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201551.5800604168,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 201542.27283290634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200907.92305904732,
            "unit": "ns/iter",
            "extra": "iterations: 4302\ncpu: 200900.30218502984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 202008.3365695725,
            "unit": "ns/iter",
            "extra": "iterations: 4326\ncpu: 201999.28340268115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112195.73943752171,
            "unit": "ns/iter",
            "extra": "iterations: 7787\ncpu: 112189.30268396066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 194146.58901978738,
            "unit": "ns/iter",
            "extra": "iterations: 4499\ncpu: 194134.6965992447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 813119.1735042892,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 813088.3760683793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 447647.4381965418,
            "unit": "ns/iter",
            "extra": "iterations: 1974\ncpu: 447624.8733535971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2073.8270668940177,
            "unit": "ns/iter",
            "extra": "iterations: 388046\ncpu: 2073.80671363704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9886.267263533626,
            "unit": "ns/iter",
            "extra": "iterations: 83659\ncpu: 9885.68833000632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7669.205677272415,
            "unit": "ns/iter",
            "extra": "iterations: 106988\ncpu: 7668.864732493346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7518.530776256182,
            "unit": "ns/iter",
            "extra": "iterations: 109500\ncpu: 7518.184474885828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7672.381191813551,
            "unit": "ns/iter",
            "extra": "iterations: 107198\ncpu: 7672.018134666716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28538.249286105467,
            "unit": "ns/iter",
            "extra": "iterations: 29416\ncpu: 28536.54473755771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 246774.7394934782,
            "unit": "ns/iter",
            "extra": "iterations: 3593\ncpu: 246766.54606178513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 194499.63715684137,
            "unit": "ns/iter",
            "extra": "iterations: 4699\ncpu: 194486.848265589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 186746.9410392288,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 186738.36691410342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 185357.4017292196,
            "unit": "ns/iter",
            "extra": "iterations: 4742\ncpu: 185349.45170814122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97600.8113626365,
            "unit": "ns/iter",
            "extra": "iterations: 9012\ncpu: 97597.95827785165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 180236.43932883863,
            "unit": "ns/iter",
            "extra": "iterations: 4887\ncpu: 180228.0949457752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 201.22322707827794,
            "unit": "ns/iter",
            "extra": "iterations: 3489057\ncpu: 201.22136153121124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1430.6111323524133,
            "unit": "ns/iter",
            "extra": "iterations: 486474\ncpu: 1430.5444895307953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1139.8612627229245,
            "unit": "ns/iter",
            "extra": "iterations: 612676\ncpu: 1139.8016243495667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1191.8736935244103,
            "unit": "ns/iter",
            "extra": "iterations: 614822\ncpu: 1191.8186076620523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 830.4678559187945,
            "unit": "ns/iter",
            "extra": "iterations: 843219\ncpu: 830.4342051115992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9258.68303019959,
            "unit": "ns/iter",
            "extra": "iterations: 75269\ncpu: 9258.690828893647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11745.84284829092,
            "unit": "ns/iter",
            "extra": "iterations: 59713\ncpu: 11745.179441662513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2647.923678367108,
            "unit": "ns/iter",
            "extra": "iterations: 265259\ncpu: 2647.8234480262736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2701.1499017756623,
            "unit": "ns/iter",
            "extra": "iterations: 259610\ncpu: 2701.004198605619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2665.2437618422796,
            "unit": "ns/iter",
            "extra": "iterations: 262297\ncpu: 2665.1048239209563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5116.785979207013,
            "unit": "ns/iter",
            "extra": "iterations: 136968\ncpu: 5116.460049062597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5101.520960996723,
            "unit": "ns/iter",
            "extra": "iterations: 137732\ncpu: 5101.32213283767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1932.8438487818007,
            "unit": "ns/iter",
            "extra": "iterations: 360644\ncpu: 1932.7591752531757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10188.765476622959,
            "unit": "ns/iter",
            "extra": "iterations: 68765\ncpu: 10188.37344579364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8116.530143948447,
            "unit": "ns/iter",
            "extra": "iterations: 86767\ncpu: 8116.455564903677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8008.68769798407,
            "unit": "ns/iter",
            "extra": "iterations: 88075\ncpu: 8008.116945784896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7899.541397314811,
            "unit": "ns/iter",
            "extra": "iterations: 88484\ncpu: 7899.064237602308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18817.88354294935,
            "unit": "ns/iter",
            "extra": "iterations: 37370\ncpu: 18816.919989296057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52024.567567569815,
            "unit": "ns/iter",
            "extra": "iterations: 13320\ncpu: 52023.10060059989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42215.52278980244,
            "unit": "ns/iter",
            "extra": "iterations: 16718\ncpu: 42213.70379231933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41831.163952097115,
            "unit": "ns/iter",
            "extra": "iterations: 16700\ncpu: 41829.55089820376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41648.64453194654,
            "unit": "ns/iter",
            "extra": "iterations: 16761\ncpu: 41645.59990454033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25299.1456006354,
            "unit": "ns/iter",
            "extra": "iterations: 27754\ncpu: 25298.11919002658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41089.272177537176,
            "unit": "ns/iter",
            "extra": "iterations: 17033\ncpu: 41086.091704338374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2043.3362387327925,
            "unit": "ns/iter",
            "extra": "iterations: 342810\ncpu: 2043.2621568798766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10855.075672062252,
            "unit": "ns/iter",
            "extra": "iterations: 64317\ncpu: 10854.231385170395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9653.696207377236,
            "unit": "ns/iter",
            "extra": "iterations: 73142\ncpu: 9653.30453091251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9798.101337548509,
            "unit": "ns/iter",
            "extra": "iterations: 71474\ncpu: 9798.016061784645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8903.167428418668,
            "unit": "ns/iter",
            "extra": "iterations: 78547\ncpu: 8902.92181751049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19555.749022868276,
            "unit": "ns/iter",
            "extra": "iterations: 36075\ncpu: 19555.570339570368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51747.77369826591,
            "unit": "ns/iter",
            "extra": "iterations: 13482\ncpu: 51743.851060672765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41211.59521547815,
            "unit": "ns/iter",
            "extra": "iterations: 16846\ncpu: 41210.03205508773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42423.82298879371,
            "unit": "ns/iter",
            "extra": "iterations: 15886\ncpu: 42423.13987158522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41143.27978941148,
            "unit": "ns/iter",
            "extra": "iterations: 17095\ncpu: 41143.22901433183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25173.173983097317,
            "unit": "ns/iter",
            "extra": "iterations: 27928\ncpu: 25172.35391005484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41134.38920604798,
            "unit": "ns/iter",
            "extra": "iterations: 16991\ncpu: 41132.08757577526 ns\nthreads: 1"
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
        "date": 1705957167593,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 549.2837590657933,
            "unit": "ns/iter",
            "extra": "iterations: 1267815\ncpu: 549.206942653305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5220.447340000192,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5219.996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10017.054421358363,
            "unit": "ns/iter",
            "extra": "iterations: 82927\ncpu: 10016.44458379056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14945.871504864203,
            "unit": "ns/iter",
            "extra": "iterations: 55613\ncpu: 14944.951719921597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20071.058360340165,
            "unit": "ns/iter",
            "extra": "iterations: 41655\ncpu: 20069.396230944654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24996.29873723278,
            "unit": "ns/iter",
            "extra": "iterations: 33973\ncpu: 24994.654578635975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30017.253503276046,
            "unit": "ns/iter",
            "extra": "iterations: 28402\ncpu: 30015.136258009974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34545.96783505396,
            "unit": "ns/iter",
            "extra": "iterations: 24250\ncpu: 34542.94845360825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38960.53801412466,
            "unit": "ns/iter",
            "extra": "iterations: 21663\ncpu: 38957.6697594978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 513.1515293188785,
            "unit": "ns/iter",
            "extra": "iterations: 1373193\ncpu: 513.1165830294793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 400.1543846492642,
            "unit": "ns/iter",
            "extra": "iterations: 1746890\ncpu: 400.11689345064667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 411.8403761872563,
            "unit": "ns/iter",
            "extra": "iterations: 1696921\ncpu: 411.81380865697355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 402.7191783810485,
            "unit": "ns/iter",
            "extra": "iterations: 1741732\ncpu: 402.7112667161195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 881.404704732345,
            "unit": "ns/iter",
            "extra": "iterations: 775432\ncpu: 881.3487191655735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1885.7333445167149,
            "unit": "ns/iter",
            "extra": "iterations: 423239\ncpu: 1885.5911199109742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9718.9559512867,
            "unit": "ns/iter",
            "extra": "iterations: 83839\ncpu: 9718.524791564772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7369.658098512614,
            "unit": "ns/iter",
            "extra": "iterations: 111965\ncpu: 7369.073371142764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7351.08662499821,
            "unit": "ns/iter",
            "extra": "iterations: 109114\ncpu: 7350.7148486903825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7248.892408040468,
            "unit": "ns/iter",
            "extra": "iterations: 110538\ncpu: 7248.5027773254615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29523.33459350482,
            "unit": "ns/iter",
            "extra": "iterations: 27774\ncpu: 29521.81896737962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 237753.0777201861,
            "unit": "ns/iter",
            "extra": "iterations: 3667\ncpu: 237735.8331060817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182330.04605121832,
            "unit": "ns/iter",
            "extra": "iterations: 4647\ncpu: 182320.6369700882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 186492.03783318822,
            "unit": "ns/iter",
            "extra": "iterations: 4652\ncpu: 186481.16938951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 187811.6561826735,
            "unit": "ns/iter",
            "extra": "iterations: 4642\ncpu: 187801.31408875532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 100253.50434683134,
            "unit": "ns/iter",
            "extra": "iterations: 8742\ncpu: 100246.29375428955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 180884.20149717515,
            "unit": "ns/iter",
            "extra": "iterations: 4809\ncpu: 180872.34352256192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5659.346617038845,
            "unit": "ns/iter",
            "extra": "iterations: 143735\ncpu: 5659.1011235954875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27087.089178423503,
            "unit": "ns/iter",
            "extra": "iterations: 30624\ncpu: 27085.292580982266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21254.413492404456,
            "unit": "ns/iter",
            "extra": "iterations: 39563\ncpu: 21253.322548846154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21091.333536492497,
            "unit": "ns/iter",
            "extra": "iterations: 39378\ncpu: 21090.723246482783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20837.64691659612,
            "unit": "ns/iter",
            "extra": "iterations: 40118\ncpu: 20837.4171194975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 46425.036501226845,
            "unit": "ns/iter",
            "extra": "iterations: 17972\ncpu: 46422.24571555766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 259210.5875555717,
            "unit": "ns/iter",
            "extra": "iterations: 3375\ncpu: 259197.03703703833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201981.93884641613,
            "unit": "ns/iter",
            "extra": "iterations: 4317\ncpu: 201969.14523974954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 202632.16535614757,
            "unit": "ns/iter",
            "extra": "iterations: 4324\ncpu: 202617.22941720617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 202014.5076530641,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 201998.88682745807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 112055.50199408042,
            "unit": "ns/iter",
            "extra": "iterations: 7773\ncpu: 112049.44037051333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 192920.781402568,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 192910.91877496667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 809561.0731292097,
            "unit": "ns/iter",
            "extra": "iterations: 1176\ncpu: 809519.4727891118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 453351.37826756394,
            "unit": "ns/iter",
            "extra": "iterations: 1951\ncpu: 453319.88723731233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2063.2122932141524,
            "unit": "ns/iter",
            "extra": "iterations: 385302\ncpu: 2063.0949229435755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10230.720277471428,
            "unit": "ns/iter",
            "extra": "iterations: 80873\ncpu: 10230.261026547842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7740.797923615459,
            "unit": "ns/iter",
            "extra": "iterations: 106435\ncpu: 7740.347630008926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7731.24292492785,
            "unit": "ns/iter",
            "extra": "iterations: 106218\ncpu: 7730.649230827117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7559.985178083394,
            "unit": "ns/iter",
            "extra": "iterations: 108488\ncpu: 7559.248949192566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28470.185952674216,
            "unit": "ns/iter",
            "extra": "iterations: 29244\ncpu: 28468.30460949255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 245507.99722990108,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 245486.48199446086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 188260.8409479134,
            "unit": "ns/iter",
            "extra": "iterations: 4684\ncpu: 188250.2775405637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 188436.34108858652,
            "unit": "ns/iter",
            "extra": "iterations: 4685\ncpu: 188427.1504802554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 187136.54923599813,
            "unit": "ns/iter",
            "extra": "iterations: 4712\ncpu: 187128.2682512747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98279.35833427508,
            "unit": "ns/iter",
            "extra": "iterations: 8933\ncpu: 98274.93563192665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 181221.7563317185,
            "unit": "ns/iter",
            "extra": "iterations: 4896\ncpu: 181208.33333333395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 202.53535637413475,
            "unit": "ns/iter",
            "extra": "iterations: 3455063\ncpu: 202.52111177133415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1477.3423689071383,
            "unit": "ns/iter",
            "extra": "iterations: 476819\ncpu: 1477.2444051096973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1186.7882705751204,
            "unit": "ns/iter",
            "extra": "iterations: 589219\ncpu: 1186.740074573286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1187.6892083345263,
            "unit": "ns/iter",
            "extra": "iterations: 587963\ncpu: 1187.578810231246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 828.937149762039,
            "unit": "ns/iter",
            "extra": "iterations: 844961\ncpu: 828.9139972140748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9255.181671345643,
            "unit": "ns/iter",
            "extra": "iterations: 75532\ncpu: 9254.414023195464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11076.783710666006,
            "unit": "ns/iter",
            "extra": "iterations: 63207\ncpu: 11075.872925467113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2693.3027227999005,
            "unit": "ns/iter",
            "extra": "iterations: 260357\ncpu: 2693.0491594233986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2736.9279904952446,
            "unit": "ns/iter",
            "extra": "iterations: 255869\ncpu: 2736.644532944602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2693.1008204212276,
            "unit": "ns/iter",
            "extra": "iterations: 260354\ncpu: 2692.869324074156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5104.512356961364,
            "unit": "ns/iter",
            "extra": "iterations: 136239\ncpu: 5104.122167661234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5170.942767267675,
            "unit": "ns/iter",
            "extra": "iterations: 134154\ncpu: 5170.524173710809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1942.1211837260805,
            "unit": "ns/iter",
            "extra": "iterations: 359644\ncpu: 1941.9884663723058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10284.237239797914,
            "unit": "ns/iter",
            "extra": "iterations: 68024\ncpu: 10283.915970833865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8071.718756880706,
            "unit": "ns/iter",
            "extra": "iterations: 86299\ncpu: 8070.881470237269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8010.871080538587,
            "unit": "ns/iter",
            "extra": "iterations: 87225\ncpu: 8010.346804241858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7974.379480927543,
            "unit": "ns/iter",
            "extra": "iterations: 85306\ncpu: 7973.739244601847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19032.09918677138,
            "unit": "ns/iter",
            "extra": "iterations: 36890\ncpu: 19029.444293846474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52210.85519514736,
            "unit": "ns/iter",
            "extra": "iterations: 13349\ncpu: 52209.199190950996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42225.02198001069,
            "unit": "ns/iter",
            "extra": "iterations: 16606\ncpu: 42222.93147055296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42381.15841703392,
            "unit": "ns/iter",
            "extra": "iterations: 16627\ncpu: 42378.03572502562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41836.325052629,
            "unit": "ns/iter",
            "extra": "iterations: 16625\ncpu: 41832.733834585924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25142.273649626335,
            "unit": "ns/iter",
            "extra": "iterations: 27696\ncpu: 25141.262276140835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41283.05539203794,
            "unit": "ns/iter",
            "extra": "iterations: 16988\ncpu: 41279.92112079077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2182.1242402995667,
            "unit": "ns/iter",
            "extra": "iterations: 318053\ncpu: 2181.9457763328815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10988.578516250713,
            "unit": "ns/iter",
            "extra": "iterations: 64337\ncpu: 10962.952888695552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9222.705809559804,
            "unit": "ns/iter",
            "extra": "iterations: 75152\ncpu: 9222.30945284215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9036.62417087909,
            "unit": "ns/iter",
            "extra": "iterations: 77341\ncpu: 9036.296401649848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 10018.458603352814,
            "unit": "ns/iter",
            "extra": "iterations: 70211\ncpu: 10017.941633077586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19312.113542412426,
            "unit": "ns/iter",
            "extra": "iterations: 36286\ncpu: 19310.246376012758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52412.465526375825,
            "unit": "ns/iter",
            "extra": "iterations: 13213\ncpu: 52407.15961553052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40940.86117521863,
            "unit": "ns/iter",
            "extra": "iterations: 16899\ncpu: 40937.08503461793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42255.88358836125,
            "unit": "ns/iter",
            "extra": "iterations: 16665\ncpu: 42252.79927992761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40842.319517313845,
            "unit": "ns/iter",
            "extra": "iterations: 17154\ncpu: 40840.74851346622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 26178.75750921233,
            "unit": "ns/iter",
            "extra": "iterations: 26867\ncpu: 26178.237242714455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42298.59750987343,
            "unit": "ns/iter",
            "extra": "iterations: 16706\ncpu: 42296.02538010336 ns\nthreads: 1"
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
        "date": 1705958900297,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 576.818573934221,
            "unit": "ns/iter",
            "extra": "iterations: 1206971\ncpu: 576.7903288480005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5216.07609000057,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5215.895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9999.03026388842,
            "unit": "ns/iter",
            "extra": "iterations: 82838\ncpu: 9998.45360824742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15084.70187223968,
            "unit": "ns/iter",
            "extra": "iterations: 55228\ncpu: 15083.376185992614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19647.159636371365,
            "unit": "ns/iter",
            "extra": "iterations: 42791\ncpu: 19646.79722371526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24417.92571059327,
            "unit": "ns/iter",
            "extra": "iterations: 34056\ncpu: 24417.262743716223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29132.77893381417,
            "unit": "ns/iter",
            "extra": "iterations: 28738\ncpu: 29131.557519660368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34350.073660528964,
            "unit": "ns/iter",
            "extra": "iterations: 24450\ncpu: 34348.58895705522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38729.334039221045,
            "unit": "ns/iter",
            "extra": "iterations: 21722\ncpu: 38727.60795506861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 509.99833059466977,
            "unit": "ns/iter",
            "extra": "iterations: 1373543\ncpu: 509.96481362432854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 398.9753793650024,
            "unit": "ns/iter",
            "extra": "iterations: 1739354\ncpu: 398.9527146285347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 412.2974242219524,
            "unit": "ns/iter",
            "extra": "iterations: 1709037\ncpu: 412.27779152821194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 401.03577739676325,
            "unit": "ns/iter",
            "extra": "iterations: 1744090\ncpu: 401.01158770476223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 859.9016738149278,
            "unit": "ns/iter",
            "extra": "iterations: 826077\ncpu: 859.8145209223848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1984.7282965696772,
            "unit": "ns/iter",
            "extra": "iterations: 403116\ncpu: 1984.6265094910675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10111.052351738803,
            "unit": "ns/iter",
            "extra": "iterations: 80685\ncpu: 10110.734337237413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7984.280753264292,
            "unit": "ns/iter",
            "extra": "iterations: 102859\ncpu: 7984.119036739612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8038.338325358957,
            "unit": "ns/iter",
            "extra": "iterations: 101562\ncpu: 8037.961048423608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7801.431477739954,
            "unit": "ns/iter",
            "extra": "iterations: 104944\ncpu: 7801.108210093019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 29276.08171371744,
            "unit": "ns/iter",
            "extra": "iterations: 28196\ncpu: 29274.54248829618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 238632.89158268223,
            "unit": "ns/iter",
            "extra": "iterations: 3671\ncpu: 238624.02615091304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 188669.6784788121,
            "unit": "ns/iter",
            "extra": "iterations: 4628\ncpu: 188657.60587726848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183486.56333477303,
            "unit": "ns/iter",
            "extra": "iterations: 4642\ncpu: 183475.6570443771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 188365.62692058136,
            "unit": "ns/iter",
            "extra": "iterations: 4621\ncpu: 188355.0962995019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99714.1422394222,
            "unit": "ns/iter",
            "extra": "iterations: 8788\ncpu: 99709.36504324086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 180886.50921515047,
            "unit": "ns/iter",
            "extra": "iterations: 4829\ncpu: 180870.88424104365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5695.088693862283,
            "unit": "ns/iter",
            "extra": "iterations: 143798\ncpu: 5694.63970291661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26742.58062146539,
            "unit": "ns/iter",
            "extra": "iterations: 31313\ncpu: 26741.414109155947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21592.18585184254,
            "unit": "ns/iter",
            "extra": "iterations: 38945\ncpu: 21590.753626909758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 21700.847114901975,
            "unit": "ns/iter",
            "extra": "iterations: 39860\ncpu: 21699.13447064727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20566.1457994168,
            "unit": "ns/iter",
            "extra": "iterations: 40542\ncpu: 20564.79206748561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 47274.150062692606,
            "unit": "ns/iter",
            "extra": "iterations: 17546\ncpu: 47273.800296363705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 257819.2919621543,
            "unit": "ns/iter",
            "extra": "iterations: 3384\ncpu: 257797.04491725666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 202284.19333022778,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 202277.8218283594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 201014.14507531773,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 200996.77867902638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 201422.73973237103,
            "unit": "ns/iter",
            "extra": "iterations: 4334\ncpu: 201411.95200738363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 111719.52800204861,
            "unit": "ns/iter",
            "extra": "iterations: 7803\ncpu: 111708.97090862505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193627.17636565768,
            "unit": "ns/iter",
            "extra": "iterations: 4485\ncpu: 193614.09141583066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 806794.5114310007,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 806730.3132938175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 456847.9891079009,
            "unit": "ns/iter",
            "extra": "iterations: 1928\ncpu: 456812.60373444244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 2078.136995764346,
            "unit": "ns/iter",
            "extra": "iterations: 383625\ncpu: 2078.003519061582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9562.270336384214,
            "unit": "ns/iter",
            "extra": "iterations: 85438\ncpu: 9561.752381844095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7733.48329277787,
            "unit": "ns/iter",
            "extra": "iterations: 104386\ncpu: 7733.3196022455095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7586.778393880781,
            "unit": "ns/iter",
            "extra": "iterations: 104600\ncpu: 7586.484703632914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7357.39479128053,
            "unit": "ns/iter",
            "extra": "iterations: 110699\ncpu: 7356.97973784773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28773.546371521305,
            "unit": "ns/iter",
            "extra": "iterations: 29048\ncpu: 28772.58675296062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 244155.7392140767,
            "unit": "ns/iter",
            "extra": "iterations: 3639\ncpu: 244146.16652926704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 186945.77444559932,
            "unit": "ns/iter",
            "extra": "iterations: 4735\ncpu: 186937.02217529062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 186817.02242438082,
            "unit": "ns/iter",
            "extra": "iterations: 4727\ncpu: 186807.25618785658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 184826.78717569463,
            "unit": "ns/iter",
            "extra": "iterations: 4741\ncpu: 184819.04661463702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97746.5263859574,
            "unit": "ns/iter",
            "extra": "iterations: 9001\ncpu: 97744.59504499496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 178948.2972256364,
            "unit": "ns/iter",
            "extra": "iterations: 4902\ncpu: 178942.6356589149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 199.38845704675884,
            "unit": "ns/iter",
            "extra": "iterations: 3479924\ncpu: 199.37409552622302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1440.9044014492072,
            "unit": "ns/iter",
            "extra": "iterations: 488271\ncpu: 1440.7923059120856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1178.859744872648,
            "unit": "ns/iter",
            "extra": "iterations: 616555\ncpu: 1178.816974965733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1182.3021951933263,
            "unit": "ns/iter",
            "extra": "iterations: 591793\ncpu: 1182.2938088149056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 834.3475088961166,
            "unit": "ns/iter",
            "extra": "iterations: 840531\ncpu: 834.2826142045959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9283.806591246564,
            "unit": "ns/iter",
            "extra": "iterations: 75312\ncpu: 9283.033248353548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11712.814757092885,
            "unit": "ns/iter",
            "extra": "iterations: 59673\ncpu: 11711.981968394337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2667.436013507982,
            "unit": "ns/iter",
            "extra": "iterations: 262657\ncpu: 2667.2721458023343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2698.112946937359,
            "unit": "ns/iter",
            "extra": "iterations: 259768\ncpu: 2697.980120723095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2683.1461794526736,
            "unit": "ns/iter",
            "extra": "iterations: 261049\ncpu: 2682.9514765426998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5086.319063681599,
            "unit": "ns/iter",
            "extra": "iterations: 137261\ncpu: 5086.22114074646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5073.816895941677,
            "unit": "ns/iter",
            "extra": "iterations: 139134\ncpu: 5073.3501516523465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1952.1296176803412,
            "unit": "ns/iter",
            "extra": "iterations: 359542\ncpu: 1952.0364797436962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10156.551995487835,
            "unit": "ns/iter",
            "extra": "iterations: 69131\ncpu: 10155.728978316452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8206.62476197293,
            "unit": "ns/iter",
            "extra": "iterations: 84549\ncpu: 8205.922009722219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8089.507686398544,
            "unit": "ns/iter",
            "extra": "iterations: 85931\ncpu: 8089.318173883669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8111.86760458471,
            "unit": "ns/iter",
            "extra": "iterations: 85864\ncpu: 8111.300428584703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 19134.48315622101,
            "unit": "ns/iter",
            "extra": "iterations: 36512\ncpu: 19133.509531113312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 52029.37640407383,
            "unit": "ns/iter",
            "extra": "iterations: 13443\ncpu: 52023.5587294507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42402.30077229113,
            "unit": "ns/iter",
            "extra": "iterations: 16574\ncpu: 42399.475081452685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41566.61517936542,
            "unit": "ns/iter",
            "extra": "iterations: 16865\ncpu: 41564.624962941154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41881.88000716433,
            "unit": "ns/iter",
            "extra": "iterations: 16751\ncpu: 41881.571249477274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25296.206213273228,
            "unit": "ns/iter",
            "extra": "iterations: 27908\ncpu: 25294.87960441437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41365.76001423957,
            "unit": "ns/iter",
            "extra": "iterations: 16851\ncpu: 41363.34935612091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2079.0863813250103,
            "unit": "ns/iter",
            "extra": "iterations: 337654\ncpu: 2078.8656435285748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11396.640832832656,
            "unit": "ns/iter",
            "extra": "iterations: 61573\ncpu: 11396.552060156246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9174.816998680351,
            "unit": "ns/iter",
            "extra": "iterations: 76453\ncpu: 9174.088655775342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9492.272726038102,
            "unit": "ns/iter",
            "extra": "iterations: 73649\ncpu: 9491.330500074691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9186.977140744335,
            "unit": "ns/iter",
            "extra": "iterations: 75768\ncpu: 9186.48769929262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18726.369012800555,
            "unit": "ns/iter",
            "extra": "iterations: 37267\ncpu: 18725.19655459284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52804.586622527335,
            "unit": "ns/iter",
            "extra": "iterations: 11781\ncpu: 52804.26958662267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41275.58295670632,
            "unit": "ns/iter",
            "extra": "iterations: 16816\ncpu: 41273.12083729808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41174.311078202016,
            "unit": "ns/iter",
            "extra": "iterations: 16880\ncpu: 41171.61729857822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41074.79446382799,
            "unit": "ns/iter",
            "extra": "iterations: 16907\ncpu: 41072.496599041864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25835.39731179115,
            "unit": "ns/iter",
            "extra": "iterations: 26858\ncpu: 25834.012212376332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41660.96977118945,
            "unit": "ns/iter",
            "extra": "iterations: 16739\ncpu: 41658.02616643737 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}