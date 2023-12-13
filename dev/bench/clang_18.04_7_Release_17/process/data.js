window.BENCHMARK_DATA = {
  "lastUpdate": 1702492885724,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-7 18.04 Release c++-17": [
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
        "date": 1702490276554,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1424.0647093480388,
            "unit": "ns/iter",
            "extra": "iterations: 488832\ncpu: 1424.0477300995028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16690.44879094094,
            "unit": "ns/iter",
            "extra": "iterations: 49005\ncpu: 16690.270380573413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35687.568773393155,
            "unit": "ns/iter",
            "extra": "iterations: 23243\ncpu: 35686.65834875018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52948.393029829866,
            "unit": "ns/iter",
            "extra": "iterations: 15925\ncpu: 52947.36577708005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58405.15069999129,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58403.820000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73754.08017553488,
            "unit": "ns/iter",
            "extra": "iterations: 11849\ncpu: 73751.67524685629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87058.50849857905,
            "unit": "ns/iter",
            "extra": "iterations: 9884\ncpu: 87053.68271954668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99151.32861707495,
            "unit": "ns/iter",
            "extra": "iterations: 8764\ncpu: 99148.1172980375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115633.14412596176,
            "unit": "ns/iter",
            "extra": "iterations: 7431\ncpu: 115626.92773516342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1166.5746904044897,
            "unit": "ns/iter",
            "extra": "iterations: 600057\ncpu: 1166.583007947578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 959.7633813083189,
            "unit": "ns/iter",
            "extra": "iterations: 729824\ncpu: 959.7357719121333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 943.2270517991936,
            "unit": "ns/iter",
            "extra": "iterations: 742117\ncpu: 943.1975012026394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 950.1125605877836,
            "unit": "ns/iter",
            "extra": "iterations: 736741\ncpu: 950.0729564392379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1864.2011629735994,
            "unit": "ns/iter",
            "extra": "iterations: 375417\ncpu: 1864.1017854812105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5212.090802388967,
            "unit": "ns/iter",
            "extra": "iterations: 152507\ncpu: 5211.750280315003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24430.51783327789,
            "unit": "ns/iter",
            "extra": "iterations: 33673\ncpu: 24429.626109939734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19607.82449769539,
            "unit": "ns/iter",
            "extra": "iterations: 41857\ncpu: 19606.78739517883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19385.888774681825,
            "unit": "ns/iter",
            "extra": "iterations: 41834\ncpu: 19384.83291102934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19468.10639315245,
            "unit": "ns/iter",
            "extra": "iterations: 41826\ncpu: 19467.697126189432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65149.37040011563,
            "unit": "ns/iter",
            "extra": "iterations: 13696\ncpu: 65148.81717289718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 578043.1079999744,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577961.5000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 562379.0891346441,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 562371.5029277833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 563882.4113060193,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 563872.384665368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 569630.4009038047,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 569628.9218850867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 331130.1953418656,
            "unit": "ns/iter",
            "extra": "iterations: 2662\ncpu: 331125.28174305084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 562674.7466063645,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 562658.952811896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2369938.6106871674,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2369901.2722646333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1053967.9736238173,
            "unit": "ns/iter",
            "extra": "iterations: 872\ncpu: 1053959.7477064226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3281925.3156028786,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3281845.0354609936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7701.607825847433,
            "unit": "ns/iter",
            "extra": "iterations: 112269\ncpu: 7701.488389493096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39208.55489515703,
            "unit": "ns/iter",
            "extra": "iterations: 21031\ncpu: 39208.853597070934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31405.16766238997,
            "unit": "ns/iter",
            "extra": "iterations: 26279\ncpu: 31405.023022185185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30978.420400131097,
            "unit": "ns/iter",
            "extra": "iterations: 26941\ncpu: 30977.4804201773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31102.415011778838,
            "unit": "ns/iter",
            "extra": "iterations: 26739\ncpu: 31101.768951718437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76365.9997367274,
            "unit": "ns/iter",
            "extra": "iterations: 11395\ncpu: 76363.87889425206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 603514.748000066,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603483.2999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 598913.4899792415,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 598872.4948168623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 595859.1228668705,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 595863.9590443693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 592343.1337837857,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 592324.3918918939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 339286.18528502516,
            "unit": "ns/iter",
            "extra": "iterations: 2596\ncpu: 339261.9029275807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 589576.4004064994,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 589569.8509485093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2537129.2595628886,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2536938.5245901644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1125454.215590761,
            "unit": "ns/iter",
            "extra": "iterations: 821\ncpu: 1125400.1218026748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5444.8206818826775,
            "unit": "ns/iter",
            "extra": "iterations: 148178\ncpu: 5444.655751866024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25982.72270101079,
            "unit": "ns/iter",
            "extra": "iterations: 30981\ncpu: 25981.256253833017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20265.22884424734,
            "unit": "ns/iter",
            "extra": "iterations: 40320\ncpu: 20264.39732142849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19932.040002921636,
            "unit": "ns/iter",
            "extra": "iterations: 41072\ncpu: 19930.719224776083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19949.5152187149,
            "unit": "ns/iter",
            "extra": "iterations: 41035\ncpu: 19948.880224198903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62493.63037752688,
            "unit": "ns/iter",
            "extra": "iterations: 13668\ncpu: 62492.500731635664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 598199.869000041,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598165.1000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 589365.640816323,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 589324.6258503412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 588584.3819162785,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 588562.6180836698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 584693.6320000016,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 584662.0666666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 331112.3528516818,
            "unit": "ns/iter",
            "extra": "iterations: 2630\ncpu: 331096.73003802204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 569808.1141732441,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 569795.3412073524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 500.66881312194647,
            "unit": "ns/iter",
            "extra": "iterations: 1399672\ncpu: 500.6473659543089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3132.950244993934,
            "unit": "ns/iter",
            "extra": "iterations: 223475\ncpu: 3132.8439422754254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2289.532767605833,
            "unit": "ns/iter",
            "extra": "iterations: 305683\ncpu: 2289.37068793489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2530.0395098170206,
            "unit": "ns/iter",
            "extra": "iterations: 277121\ncpu: 2529.91797806736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1961.9541378947185,
            "unit": "ns/iter",
            "extra": "iterations: 353211\ncpu: 1961.9100197898586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17167.627204032062,
            "unit": "ns/iter",
            "extra": "iterations: 40891\ncpu: 17166.912034433008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30067.822264612423,
            "unit": "ns/iter",
            "extra": "iterations: 23068\ncpu: 30066.69412172711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7443.317294843927,
            "unit": "ns/iter",
            "extra": "iterations: 94294\ncpu: 7443.378157677068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7351.156891603171,
            "unit": "ns/iter",
            "extra": "iterations: 95123\ncpu: 7351.059154988714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7374.410896973448,
            "unit": "ns/iter",
            "extra": "iterations: 94228\ncpu: 7374.458759604326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 13968.99354620295,
            "unit": "ns/iter",
            "extra": "iterations: 50203\ncpu: 13968.934127442517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13964.481005329015,
            "unit": "ns/iter",
            "extra": "iterations: 50093\ncpu: 13963.891162437989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5268.810682309429,
            "unit": "ns/iter",
            "extra": "iterations: 133136\ncpu: 5268.789057805534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27023.889614150263,
            "unit": "ns/iter",
            "extra": "iterations: 25891\ncpu: 27024.077864894796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21595.20702992973,
            "unit": "ns/iter",
            "extra": "iterations: 32575\ncpu: 21595.339984650906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21384.66577924851,
            "unit": "ns/iter",
            "extra": "iterations: 32679\ncpu: 21384.565011169227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21759.989165965286,
            "unit": "ns/iter",
            "extra": "iterations: 32121\ncpu: 21759.5155817064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48613.36506940005,
            "unit": "ns/iter",
            "extra": "iterations: 14337\ncpu: 48613.68487131213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160428.16250856942,
            "unit": "ns/iter",
            "extra": "iterations: 4369\ncpu: 160429.2057679129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133999.22409499672,
            "unit": "ns/iter",
            "extra": "iterations: 5221\ncpu: 133996.64815169477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133299.25462874598,
            "unit": "ns/iter",
            "extra": "iterations: 5239\ncpu: 133295.53349875865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134852.12991749012,
            "unit": "ns/iter",
            "extra": "iterations: 5211\ncpu: 134850.4317789295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83513.84425349197,
            "unit": "ns/iter",
            "extra": "iterations: 8379\ncpu: 83514.4169948687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133512.68141762711,
            "unit": "ns/iter",
            "extra": "iterations: 5220\ncpu: 133512.24137930854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5022.556937032927,
            "unit": "ns/iter",
            "extra": "iterations: 139786\ncpu: 5022.535160888812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25877.926005162397,
            "unit": "ns/iter",
            "extra": "iterations: 27110\ncpu: 25877.75728513439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20470.99387564035,
            "unit": "ns/iter",
            "extra": "iterations: 34126\ncpu: 20471.124655687727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20187.42724879262,
            "unit": "ns/iter",
            "extra": "iterations: 34563\ncpu: 20187.153892891383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20808.844406165754,
            "unit": "ns/iter",
            "extra": "iterations: 33671\ncpu: 20808.52959520095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47131.36050346898,
            "unit": "ns/iter",
            "extra": "iterations: 14857\ncpu: 47131.13010702029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156655.96119537152,
            "unit": "ns/iter",
            "extra": "iterations: 4484\ncpu: 156655.30776092986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130664.7285768252,
            "unit": "ns/iter",
            "extra": "iterations: 5298\ncpu: 130664.1374103413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129736.66746765772,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 129736.11829944531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130055.58868275133,
            "unit": "ns/iter",
            "extra": "iterations: 5390\ncpu: 130053.5621521329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82560.46121197635,
            "unit": "ns/iter",
            "extra": "iterations: 8482\ncpu: 82561.01155387882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129615.37934220876,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 129616.29711751676 ns\nthreads: 1"
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
        "date": 1702492883629,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1364.3878003514221,
            "unit": "ns/iter",
            "extra": "iterations: 506490\ncpu: 1364.3761969634152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16824.54784875649,
            "unit": "ns/iter",
            "extra": "iterations: 48716\ncpu: 16823.932588882504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35490.941302299994,
            "unit": "ns/iter",
            "extra": "iterations: 23374\ncpu: 35489.52254641911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52829.27476635965,
            "unit": "ns/iter",
            "extra": "iterations: 16050\ncpu: 52827.856697819276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58234.439900002144,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58232.929999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 75087.83098591406,
            "unit": "ns/iter",
            "extra": "iterations: 11999\ncpu: 75081.38178181522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 86161.53938424484,
            "unit": "ns/iter",
            "extra": "iterations: 10004\ncpu: 86156.79728108749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99494.81309275495,
            "unit": "ns/iter",
            "extra": "iterations: 8646\ncpu: 99489.65995836232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 116466.3298615704,
            "unit": "ns/iter",
            "extra": "iterations: 7585\ncpu: 116458.37837837843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1158.8073057171055,
            "unit": "ns/iter",
            "extra": "iterations: 604595\ncpu: 1158.748418362707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 952.7119954260424,
            "unit": "ns/iter",
            "extra": "iterations: 729353\ncpu: 952.6949227603077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 933.9505419837137,
            "unit": "ns/iter",
            "extra": "iterations: 747624\ncpu: 933.8995270349789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 956.9738795404893,
            "unit": "ns/iter",
            "extra": "iterations: 731151\ncpu: 956.9325624939316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1899.5725880687494,
            "unit": "ns/iter",
            "extra": "iterations: 368263\ncpu: 1899.4417033478815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5230.200703669765,
            "unit": "ns/iter",
            "extra": "iterations: 152060\ncpu: 5229.955938445352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25530.309965719876,
            "unit": "ns/iter",
            "extra": "iterations: 32381\ncpu: 25528.671134307173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19617.06927526791,
            "unit": "ns/iter",
            "extra": "iterations: 40967\ncpu: 19615.724851709852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18896.92143556741,
            "unit": "ns/iter",
            "extra": "iterations: 42882\ncpu: 18895.615876125226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19009.72228343676,
            "unit": "ns/iter",
            "extra": "iterations: 42655\ncpu: 19008.56874926735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65135.35277116102,
            "unit": "ns/iter",
            "extra": "iterations: 13839\ncpu: 65131.44735891314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 560642.317000088,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560616.8000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 555028.8660597928,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 554977.1131339411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 551635.9089172187,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 551623.248407642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 551107.3707006794,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 551081.4649681541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 322164.5287440582,
            "unit": "ns/iter",
            "extra": "iterations: 2731\ncpu: 322141.92603441945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 546444.9448364057,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 546385.6959589493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2350352.191919081,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2350309.343434348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1080112.2203985457,
            "unit": "ns/iter",
            "extra": "iterations: 853\ncpu: 1080093.7866354021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3246803.1719298256,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3246646.6666666702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7290.040896924544,
            "unit": "ns/iter",
            "extra": "iterations: 113945\ncpu: 7289.576550089945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39570.234741335786,
            "unit": "ns/iter",
            "extra": "iterations: 21070\ncpu: 39569.13146654013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30753.896015406794,
            "unit": "ns/iter",
            "extra": "iterations: 27004\ncpu: 30751.6330913938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30180.000907343874,
            "unit": "ns/iter",
            "extra": "iterations: 27553\ncpu: 30179.044024244162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30306.59329109651,
            "unit": "ns/iter",
            "extra": "iterations: 27307\ncpu: 30304.05024352729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79173.51295759216,
            "unit": "ns/iter",
            "extra": "iterations: 11036\ncpu: 79169.50888002905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 594955.0199999295,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594894.8999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 585854.4848075978,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 585837.0695476033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 576204.4336223995,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 576201.4676450966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 582264.3729040339,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 582235.2783366907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 337497.6077902247,
            "unit": "ns/iter",
            "extra": "iterations: 2593\ncpu: 337487.5819514081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 586010.7538877575,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 585986.950642324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2489927.467914436,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2489899.4652406494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1088096.2523364197,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1088069.6261682252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5509.292403064345,
            "unit": "ns/iter",
            "extra": "iterations: 145019\ncpu: 5508.8891800384745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26602.332239383035,
            "unit": "ns/iter",
            "extra": "iterations: 31080\ncpu: 26601.303088803088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20972.979176682642,
            "unit": "ns/iter",
            "extra": "iterations: 39523\ncpu: 20971.563393467157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 20149.721213744695,
            "unit": "ns/iter",
            "extra": "iterations: 41096\ncpu: 20149.060735837993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 20485.310137838995,
            "unit": "ns/iter",
            "extra": "iterations: 40482\ncpu: 20483.953361987984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64542.09909043714,
            "unit": "ns/iter",
            "extra": "iterations: 13523\ncpu: 64539.84323005259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 591403.3779999955,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 591346.2000000038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 580007.6684527943,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 579989.2163429328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 577430.9325317479,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 577402.6052104206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 571931.2584943338,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 571894.2704863392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 325267.25493113976,
            "unit": "ns/iter",
            "extra": "iterations: 2687\ncpu: 325259.21101600415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 571582.3515981195,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 571576.6470971951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 500.33840300000065,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 500.3442000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3161.9403677210175,
            "unit": "ns/iter",
            "extra": "iterations: 220602\ncpu: 3161.909683502401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2356.990852508755,
            "unit": "ns/iter",
            "extra": "iterations: 296912\ncpu: 2357.0145362935837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2328.9427811267296,
            "unit": "ns/iter",
            "extra": "iterations: 299936\ncpu: 2328.86215726022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1999.782754944385,
            "unit": "ns/iter",
            "extra": "iterations: 350802\ncpu: 1999.7836386337717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17257.504075853612,
            "unit": "ns/iter",
            "extra": "iterations: 40605\ncpu: 17257.148134466242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32279.58847680973,
            "unit": "ns/iter",
            "extra": "iterations: 22164\ncpu: 32279.065150695125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7564.63446576832,
            "unit": "ns/iter",
            "extra": "iterations: 92544\ncpu: 7564.713001383091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7516.924130890224,
            "unit": "ns/iter",
            "extra": "iterations: 93055\ncpu: 7516.436516038801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7518.41547370072,
            "unit": "ns/iter",
            "extra": "iterations: 93255\ncpu: 7518.396868800658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14753.401791158023,
            "unit": "ns/iter",
            "extra": "iterations: 47567\ncpu: 14753.055689868836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14142.960819989159,
            "unit": "ns/iter",
            "extra": "iterations: 49464\ncpu: 14142.578440886133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5338.208320048895,
            "unit": "ns/iter",
            "extra": "iterations: 131730\ncpu: 5338.206938434604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27051.769935093154,
            "unit": "ns/iter",
            "extra": "iterations: 25884\ncpu: 27051.583990109335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21654.419584517167,
            "unit": "ns/iter",
            "extra": "iterations: 32444\ncpu: 21654.648008876473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21251.267159322637,
            "unit": "ns/iter",
            "extra": "iterations: 32883\ncpu: 21250.97466776143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21605.810850847338,
            "unit": "ns/iter",
            "extra": "iterations: 32403\ncpu: 21606.04882263992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49129.11123548668,
            "unit": "ns/iter",
            "extra": "iterations: 14294\ncpu: 49128.55044074498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159169.6072404603,
            "unit": "ns/iter",
            "extra": "iterations: 4392\ncpu: 159168.10109289578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134393.49635175668,
            "unit": "ns/iter",
            "extra": "iterations: 5208\ncpu: 134390.14976958436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133100.52634583373,
            "unit": "ns/iter",
            "extra": "iterations: 5257\ncpu: 133101.95929237068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134700.1947429035,
            "unit": "ns/iter",
            "extra": "iterations: 5212\ncpu: 134698.4267075965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83558.01489691348,
            "unit": "ns/iter",
            "extra": "iterations: 8391\ncpu: 83559.00369443557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133545.09485714603,
            "unit": "ns/iter",
            "extra": "iterations: 5250\ncpu: 133543.44761904713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5132.713479573721,
            "unit": "ns/iter",
            "extra": "iterations: 136807\ncpu: 5132.654030861031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25932.38146535909,
            "unit": "ns/iter",
            "extra": "iterations: 27106\ncpu: 25932.66066553516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20390.495731491203,
            "unit": "ns/iter",
            "extra": "iterations: 34204\ncpu: 20390.50111098109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20180.655137714293,
            "unit": "ns/iter",
            "extra": "iterations: 34782\ncpu: 20179.98102466802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20745.003675711094,
            "unit": "ns/iter",
            "extra": "iterations: 34007\ncpu: 20743.502808245485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46810.43934205895,
            "unit": "ns/iter",
            "extra": "iterations: 14895\ncpu: 46810.05035246777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152819.23616315337,
            "unit": "ns/iter",
            "extra": "iterations: 4535\ncpu: 152805.51267916098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128786.7383143087,
            "unit": "ns/iter",
            "extra": "iterations: 5434\ncpu: 128782.00220831769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128498.68745414822,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 128487.06896551809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130454.33768862701,
            "unit": "ns/iter",
            "extra": "iterations: 5434\ncpu: 130453.23886639788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83402.08349191224,
            "unit": "ns/iter",
            "extra": "iterations: 8408\ncpu: 83400.01189343474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129955.6142724663,
            "unit": "ns/iter",
            "extra": "iterations: 5395\ncpu: 129951.30676552317 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}