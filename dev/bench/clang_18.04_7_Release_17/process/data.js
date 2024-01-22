window.BENCHMARK_DATA = {
  "lastUpdate": 1705963416614,
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
        "date": 1702503960190,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1464.9096345649843,
            "unit": "ns/iter",
            "extra": "iterations: 496805\ncpu: 1464.8783728022063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16345.454879652001,
            "unit": "ns/iter",
            "extra": "iterations: 48692\ncpu: 16345.190174977406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34914.45718377391,
            "unit": "ns/iter",
            "extra": "iterations: 23741\ncpu: 34912.63215534308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51738.87213094651,
            "unit": "ns/iter",
            "extra": "iterations: 16251\ncpu: 51736.890037536126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57163.787800004684,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57161.23 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72008.41059710915,
            "unit": "ns/iter",
            "extra": "iterations: 12192\ncpu: 72006.96358267713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 86149.41640974849,
            "unit": "ns/iter",
            "extra": "iterations: 10055\ncpu: 86147.02138239676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99400.84272823279,
            "unit": "ns/iter",
            "extra": "iterations: 8533\ncpu: 99398.45306457285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 118490.90762838065,
            "unit": "ns/iter",
            "extra": "iterations: 7459\ncpu: 118486.0839254593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1170.699701042578,
            "unit": "ns/iter",
            "extra": "iterations: 597075\ncpu: 1170.6790604195435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 958.4957270335345,
            "unit": "ns/iter",
            "extra": "iterations: 731108\ncpu: 958.4947777893291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 941.2397565374209,
            "unit": "ns/iter",
            "extra": "iterations: 746891\ncpu: 941.2161881720357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 952.5031031923061,
            "unit": "ns/iter",
            "extra": "iterations: 735694\ncpu: 952.4916609351185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1905.3856648662045,
            "unit": "ns/iter",
            "extra": "iterations: 365675\ncpu: 1905.368428249128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5209.472649398603,
            "unit": "ns/iter",
            "extra": "iterations: 152227\ncpu: 5209.426711424384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25332.245789783432,
            "unit": "ns/iter",
            "extra": "iterations: 32243\ncpu: 25331.879787860937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20146.51582356022,
            "unit": "ns/iter",
            "extra": "iterations: 40762\ncpu: 20146.15818654627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19302.047710238843,
            "unit": "ns/iter",
            "extra": "iterations: 42297\ncpu: 19301.678606047764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19259.77375124847,
            "unit": "ns/iter",
            "extra": "iterations: 42082\ncpu: 19259.747635568663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65788.20369959275,
            "unit": "ns/iter",
            "extra": "iterations: 13515\ncpu: 65786.51868294501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 543933.6499999854,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543912.6999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 553550.7708861035,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 553542.8481012651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 545914.2118750293,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 545914.9375000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 551075.6517284927,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 551062.2279129324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 318122.3595177185,
            "unit": "ns/iter",
            "extra": "iterations: 2737\ncpu: 318115.63755937194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 572414.1858573308,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 572233.2916145179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2351952.444444284,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2351924.7474747445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1069762.0950173135,
            "unit": "ns/iter",
            "extra": "iterations: 863\ncpu: 1069730.5909617587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3245613.4000001745,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3245468.4210526277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7350.487011913206,
            "unit": "ns/iter",
            "extra": "iterations: 114913\ncpu: 7350.270204415507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39149.85006189877,
            "unit": "ns/iter",
            "extra": "iterations: 21002\ncpu: 39148.39062946378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31370.778830061292,
            "unit": "ns/iter",
            "extra": "iterations: 26292\ncpu: 31369.78168264116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30632.61451953873,
            "unit": "ns/iter",
            "extra": "iterations: 26943\ncpu: 30631.76335226215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30682.672571959552,
            "unit": "ns/iter",
            "extra": "iterations: 26925\ncpu: 30681.704735376203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76708.27926818313,
            "unit": "ns/iter",
            "extra": "iterations: 11369\ncpu: 76704.91687923281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 590674.2429999667,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590652.4000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 594694.4028435581,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 594674.6106973595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 594814.8928572006,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 594790.5906593396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 593150.0472602332,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 593124.7260273953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 338843.346527001,
            "unit": "ns/iter",
            "extra": "iterations: 2577\ncpu: 338831.81994567486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 575146.6026229864,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 575125.704918033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2474473.3941018535,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2474368.096514753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1110019.5887961984,
            "unit": "ns/iter",
            "extra": "iterations: 839\ncpu: 1110004.7675804459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5274.630324427942,
            "unit": "ns/iter",
            "extra": "iterations: 145579\ncpu: 5274.360312957203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26450.49360334293,
            "unit": "ns/iter",
            "extra": "iterations: 31110\ncpu: 26448.910318225702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20939.544177318665,
            "unit": "ns/iter",
            "extra": "iterations: 39432\ncpu: 20938.712213430565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19989.2123028397,
            "unit": "ns/iter",
            "extra": "iterations: 41210\ncpu: 19988.534336326058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 20109.300601692063,
            "unit": "ns/iter",
            "extra": "iterations: 41051\ncpu: 20108.65508757408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62404.876855452385,
            "unit": "ns/iter",
            "extra": "iterations: 13878\ncpu: 62401.91670269473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 567959.4450000422,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 567958.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 576437.5968688484,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 576411.8069145458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 580714.0715706159,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 580686.9449966898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 583420.8806068349,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 583407.1240105552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 331078.8685993685,
            "unit": "ns/iter",
            "extra": "iterations: 2656\ncpu: 331069.5783132538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 556878.844415794,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 556859.3285990967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 506.4223458614348,
            "unit": "ns/iter",
            "extra": "iterations: 1381079\ncpu: 506.3981133591913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3004.6162448981154,
            "unit": "ns/iter",
            "extra": "iterations: 232750\ncpu: 3004.50998925885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2444.84221337352,
            "unit": "ns/iter",
            "extra": "iterations: 285284\ncpu: 2444.7781859480256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2430.118980937653,
            "unit": "ns/iter",
            "extra": "iterations: 287794\ncpu: 2430.015219219282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1911.6522720664684,
            "unit": "ns/iter",
            "extra": "iterations: 364558\ncpu: 1911.5218977501545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17103.972186082057,
            "unit": "ns/iter",
            "extra": "iterations: 40735\ncpu: 17103.544863140014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30897.5452892924,
            "unit": "ns/iter",
            "extra": "iterations: 22555\ncpu: 30897.21126136171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7332.867006816305,
            "unit": "ns/iter",
            "extra": "iterations: 95644\ncpu: 7332.8530801722945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7426.809182463971,
            "unit": "ns/iter",
            "extra": "iterations: 96118\ncpu: 7426.67346386731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7459.580752826083,
            "unit": "ns/iter",
            "extra": "iterations: 93780\ncpu: 7459.336745574768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14094.550149896291,
            "unit": "ns/iter",
            "extra": "iterations: 49701\ncpu: 14093.813001750505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14034.213075449665,
            "unit": "ns/iter",
            "extra": "iterations: 50048\ncpu: 14033.765585038356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5236.610030592033,
            "unit": "ns/iter",
            "extra": "iterations: 134349\ncpu: 5236.546606227147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27033.02591527764,
            "unit": "ns/iter",
            "extra": "iterations: 26085\ncpu: 27032.34042553184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21445.755466528168,
            "unit": "ns/iter",
            "extra": "iterations: 32699\ncpu: 21445.57631731845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21208.699657148907,
            "unit": "ns/iter",
            "extra": "iterations: 32959\ncpu: 21208.33156345776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21591.025453308193,
            "unit": "ns/iter",
            "extra": "iterations: 32373\ncpu: 21590.433385846172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48577.29461442594,
            "unit": "ns/iter",
            "extra": "iterations: 14446\ncpu: 48576.422539111125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158227.67541873097,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 158226.0977818038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132357.6463137851,
            "unit": "ns/iter",
            "extra": "iterations: 5290\ncpu: 132350.5671077513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131921.2447867759,
            "unit": "ns/iter",
            "extra": "iterations: 5323\ncpu: 131915.51756528424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133093.6197906793,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 133085.74690770562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83078.51784655436,
            "unit": "ns/iter",
            "extra": "iterations: 8433\ncpu: 83072.58389659652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132043.57258826136,
            "unit": "ns/iter",
            "extra": "iterations: 5297\ncpu: 132041.57070039565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5089.892606132556,
            "unit": "ns/iter",
            "extra": "iterations: 137587\ncpu: 5089.841336754159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25953.510294769036,
            "unit": "ns/iter",
            "extra": "iterations: 27004\ncpu: 25953.506887868178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20638.041339627056,
            "unit": "ns/iter",
            "extra": "iterations: 33890\ncpu: 20636.99911478327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20304.892431318698,
            "unit": "ns/iter",
            "extra": "iterations: 34471\ncpu: 20303.8351077718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20859.929028797338,
            "unit": "ns/iter",
            "extra": "iterations: 33577\ncpu: 20858.65622300974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47162.36052914471,
            "unit": "ns/iter",
            "extra": "iterations: 14892\ncpu: 47162.422777329884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154227.41514418233,
            "unit": "ns/iter",
            "extra": "iterations: 4543\ncpu: 154218.37992516177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129654.8956409476,
            "unit": "ns/iter",
            "extra": "iterations: 5414\ncpu: 129634.44772811371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129142.64421480673,
            "unit": "ns/iter",
            "extra": "iterations: 5419\ncpu: 129134.06532570515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130256.96879617599,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 130247.74741506841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82282.02241257722,
            "unit": "ns/iter",
            "extra": "iterations: 8522\ncpu: 82278.96033794904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128884.36992316191,
            "unit": "ns/iter",
            "extra": "iterations: 5466\ncpu: 128880.44273691844 ns\nthreads: 1"
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
        "date": 1705575597836,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1395.2310885016775,
            "unit": "ns/iter",
            "extra": "iterations: 504997\ncpu: 1395.1910605409537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16926.241097515223,
            "unit": "ns/iter",
            "extra": "iterations: 48947\ncpu: 16925.370298486123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36348.183804013745,
            "unit": "ns/iter",
            "extra": "iterations: 22981\ncpu: 36346.521039119274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53522.12403100793,
            "unit": "ns/iter",
            "extra": "iterations: 15738\ncpu: 53521.11449993647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59389.0483999985,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59388.40000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74692.05527080163,
            "unit": "ns/iter",
            "extra": "iterations: 11706\ncpu: 74688.78352981374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87827.73584518777,
            "unit": "ns/iter",
            "extra": "iterations: 9767\ncpu: 87822.16647895976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 104777.47393201357,
            "unit": "ns/iter",
            "extra": "iterations: 8708\ncpu: 104768.51171336698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 118602.1289602133,
            "unit": "ns/iter",
            "extra": "iterations: 7165\ncpu: 118594.76622470327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1187.2473168462886,
            "unit": "ns/iter",
            "extra": "iterations: 589232\ncpu: 1187.1882382491108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 952.617694969664,
            "unit": "ns/iter",
            "extra": "iterations: 734819\ncpu: 952.5861470647862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 932.7372410422794,
            "unit": "ns/iter",
            "extra": "iterations: 750943\ncpu: 932.6686579407493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 947.7041732848649,
            "unit": "ns/iter",
            "extra": "iterations: 742269\ncpu: 947.6094246156039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1855.174224173929,
            "unit": "ns/iter",
            "extra": "iterations: 379402\ncpu: 1855.069556828905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5260.68275331629,
            "unit": "ns/iter",
            "extra": "iterations: 150829\ncpu: 5260.240404696709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25378.975079222997,
            "unit": "ns/iter",
            "extra": "iterations: 32503\ncpu: 25377.325169984295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20087.90353055692,
            "unit": "ns/iter",
            "extra": "iterations: 41070\ncpu: 20086.47674701734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19140.8396948361,
            "unit": "ns/iter",
            "extra": "iterations: 42731\ncpu: 19139.60590671876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19071.87205775152,
            "unit": "ns/iter",
            "extra": "iterations: 42527\ncpu: 19070.345897900166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65206.38515405891,
            "unit": "ns/iter",
            "extra": "iterations: 13566\ncpu: 65202.35883827229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 561975.3769999534,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561906.1000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 553778.6866077894,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 553743.5757987752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 554589.8015315849,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 554551.372048502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 557273.140283143,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 557221.1711711697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 326735.1399253853,
            "unit": "ns/iter",
            "extra": "iterations: 2680\ncpu: 326722.46268656704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 568497.3496815595,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 568442.484076432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2341797.7938930774,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2341605.5979643776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1067079.5086505492,
            "unit": "ns/iter",
            "extra": "iterations: 867\ncpu: 1066990.3114186865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3277148.9293285795,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3276878.798586575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7360.554996239976,
            "unit": "ns/iter",
            "extra": "iterations: 113035\ncpu: 7360.099084354397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39202.424057806464,
            "unit": "ns/iter",
            "extra": "iterations: 21174\ncpu: 39198.89487106829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30856.372857353934,
            "unit": "ns/iter",
            "extra": "iterations: 26836\ncpu: 30854.501416008392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30386.020781682462,
            "unit": "ns/iter",
            "extra": "iterations: 27428\ncpu: 30383.330902727135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30492.200080901624,
            "unit": "ns/iter",
            "extra": "iterations: 27194\ncpu: 30489.780834007724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76040.29075967713,
            "unit": "ns/iter",
            "extra": "iterations: 11439\ncpu: 76032.4503890201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 611553.6690000454,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 611514.3000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 577311.1450488039,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 577249.5118549546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 575943.86982647,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 575909.746328436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 587517.1305518084,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 587505.6527590827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 338228.0181326896,
            "unit": "ns/iter",
            "extra": "iterations: 2592\ncpu: 338211.9598765436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 578716.762824773,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 578694.470353101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2487707.3692722367,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2487650.404312666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1089029.9859648242,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 1088979.0643274807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5527.181462482673,
            "unit": "ns/iter",
            "extra": "iterations: 145424\ncpu: 5526.895835625486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26227.188878632267,
            "unit": "ns/iter",
            "extra": "iterations: 31417\ncpu: 26224.754114014562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19822.577194089317,
            "unit": "ns/iter",
            "extra": "iterations: 39595\ncpu: 19773.549690617525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19179.83971509095,
            "unit": "ns/iter",
            "extra": "iterations: 42961\ncpu: 19178.42228998395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19025.392030877414,
            "unit": "ns/iter",
            "extra": "iterations: 43267\ncpu: 19024.360367023357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62302.953955904144,
            "unit": "ns/iter",
            "extra": "iterations: 13878\ncpu: 62297.62934140382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 573696.9880000515,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573675.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 578274.6819973603,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 578229.6977660938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 575436.3363994929,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 575398.9487516396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 573527.4525065505,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 573505.0131926126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330956.35434861877,
            "unit": "ns/iter",
            "extra": "iterations: 2633\ncpu: 330936.99202430586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 571597.6043164927,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 571551.8639633723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 499.0216737571371,
            "unit": "ns/iter",
            "extra": "iterations: 1401649\ncpu: 499.0160161352812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3067.040118977968,
            "unit": "ns/iter",
            "extra": "iterations: 236347\ncpu: 3066.971867635291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2476.0449314129883,
            "unit": "ns/iter",
            "extra": "iterations: 280739\ncpu: 2475.994072786488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2467.336841767745,
            "unit": "ns/iter",
            "extra": "iterations: 280467\ncpu: 2467.2859908652445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1927.3623170435383,
            "unit": "ns/iter",
            "extra": "iterations: 362928\ncpu: 1927.3387558965005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17024.84408010854,
            "unit": "ns/iter",
            "extra": "iterations: 41842\ncpu: 17024.65226327642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30269.720915147755,
            "unit": "ns/iter",
            "extra": "iterations: 23122\ncpu: 30269.345212351833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7511.499325179476,
            "unit": "ns/iter",
            "extra": "iterations: 93358\ncpu: 7511.278090790393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7504.339605113142,
            "unit": "ns/iter",
            "extra": "iterations: 93647\ncpu: 7503.961685905632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7423.376178981458,
            "unit": "ns/iter",
            "extra": "iterations: 94043\ncpu: 7423.16918856266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14630.82372388655,
            "unit": "ns/iter",
            "extra": "iterations: 47488\ncpu: 14630.651954177878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14149.051238932196,
            "unit": "ns/iter",
            "extra": "iterations: 49357\ncpu: 14148.546305488795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5259.857412995996,
            "unit": "ns/iter",
            "extra": "iterations: 132207\ncpu: 5259.487772962046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26981.806157177492,
            "unit": "ns/iter",
            "extra": "iterations: 25856\ncpu: 26979.92728960387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21391.827862560996,
            "unit": "ns/iter",
            "extra": "iterations: 32567\ncpu: 21390.26929100038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21130.142986097464,
            "unit": "ns/iter",
            "extra": "iterations: 33234\ncpu: 21128.798820484753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21485.640419142637,
            "unit": "ns/iter",
            "extra": "iterations: 32638\ncpu: 21485.21049083877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48669.2119297262,
            "unit": "ns/iter",
            "extra": "iterations: 14401\ncpu: 48666.98145962068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159024.2080794326,
            "unit": "ns/iter",
            "extra": "iterations: 4431\ncpu: 159014.91762581622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133491.27076571685,
            "unit": "ns/iter",
            "extra": "iterations: 5237\ncpu: 133484.30399083576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132981.29289099213,
            "unit": "ns/iter",
            "extra": "iterations: 5275\ncpu: 132971.26066350902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133663.24225621202,
            "unit": "ns/iter",
            "extra": "iterations: 5230\ncpu: 133655.90822179633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83863.12823880762,
            "unit": "ns/iter",
            "extra": "iterations: 8375\ncpu: 83862.19701492506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133389.6713659742,
            "unit": "ns/iter",
            "extra": "iterations: 5249\ncpu: 133388.1691750803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5007.036228803217,
            "unit": "ns/iter",
            "extra": "iterations: 138757\ncpu: 5006.817674063323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25556.126778596295,
            "unit": "ns/iter",
            "extra": "iterations: 27339\ncpu: 25554.863016203664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20619.2451414753,
            "unit": "ns/iter",
            "extra": "iterations: 33858\ncpu: 20617.859885403916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20057.256294808612,
            "unit": "ns/iter",
            "extra": "iterations: 34870\ncpu: 20056.788069974402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20639.020114267165,
            "unit": "ns/iter",
            "extra": "iterations: 33956\ncpu: 20638.102249970427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46400.64987657341,
            "unit": "ns/iter",
            "extra": "iterations: 14989\ncpu: 46398.659016612284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155220.98537556833,
            "unit": "ns/iter",
            "extra": "iterations: 4513\ncpu: 155213.49434965712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129803.59024299901,
            "unit": "ns/iter",
            "extra": "iterations: 5391\ncpu: 129802.18883324006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128557.92405294537,
            "unit": "ns/iter",
            "extra": "iterations: 5438\ncpu: 128556.41780066123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129675.6522462538,
            "unit": "ns/iter",
            "extra": "iterations: 5409\ncpu: 129672.63819560096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82866.9541458835,
            "unit": "ns/iter",
            "extra": "iterations: 8418\ncpu: 82860.65573770598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129008.44764011535,
            "unit": "ns/iter",
            "extra": "iterations: 5424\ncpu: 128997.28982300786 ns\nthreads: 1"
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
        "date": 1705773418487,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1393.6505986237778,
            "unit": "ns/iter",
            "extra": "iterations: 499646\ncpu: 1393.598267573442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16420.618529578358,
            "unit": "ns/iter",
            "extra": "iterations: 47891\ncpu: 16420.25641561045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35013.916800475956,
            "unit": "ns/iter",
            "extra": "iterations: 23666\ncpu: 35013.44967463873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51971.91157010046,
            "unit": "ns/iter",
            "extra": "iterations: 16171\ncpu: 51971.43652216933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58059.36090000614,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58057.53000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71392.62333523738,
            "unit": "ns/iter",
            "extra": "iterations: 12239\ncpu: 71391.15123784624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85005.05372871528,
            "unit": "ns/iter",
            "extra": "iterations: 10218\ncpu: 85003.11215502048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98638.32923776988,
            "unit": "ns/iter",
            "extra": "iterations: 8790\ncpu: 98635.36973833897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115251.55514068458,
            "unit": "ns/iter",
            "extra": "iterations: 7499\ncpu: 115248.69982664345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1145.5569083737641,
            "unit": "ns/iter",
            "extra": "iterations: 609181\ncpu: 1145.5353991670788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 940.1004572160862,
            "unit": "ns/iter",
            "extra": "iterations: 744287\ncpu: 940.0854777794065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 922.3110004347875,
            "unit": "ns/iter",
            "extra": "iterations: 758970\ncpu: 922.2798002556091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 927.6517223655683,
            "unit": "ns/iter",
            "extra": "iterations: 754892\ncpu: 927.6499154845991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1834.6665755058896,
            "unit": "ns/iter",
            "extra": "iterations: 380281\ncpu: 1834.6220294992374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5176.153098650038,
            "unit": "ns/iter",
            "extra": "iterations: 153228\ncpu: 5176.052679666902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25042.891555499606,
            "unit": "ns/iter",
            "extra": "iterations: 32459\ncpu: 25006.55288209742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19603.79863183104,
            "unit": "ns/iter",
            "extra": "iterations: 41223\ncpu: 19603.335516580566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18913.346858852245,
            "unit": "ns/iter",
            "extra": "iterations: 43153\ncpu: 18912.79169466776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19265.2403098918,
            "unit": "ns/iter",
            "extra": "iterations: 42079\ncpu: 19264.390788754466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65080.57212731945,
            "unit": "ns/iter",
            "extra": "iterations: 13698\ncpu: 65077.37625930782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 565246.6750000258,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565211.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 551672.262230893,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 551657.729941293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 552975.100000001,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 552957.4213836474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 554669.0404105149,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 554639.1276459266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325937.478794661,
            "unit": "ns/iter",
            "extra": "iterations: 2688\ncpu: 325927.6041666661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 552331.7876669079,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 552299.4278448813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2338359.7229220127,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2338331.9899244383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1073636.9860464577,
            "unit": "ns/iter",
            "extra": "iterations: 860\ncpu: 1073598.4883720924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3259597.7578945453,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3259540.701754385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7302.218237118695,
            "unit": "ns/iter",
            "extra": "iterations: 115402\ncpu: 7301.908979047152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39214.452470589415,
            "unit": "ns/iter",
            "extra": "iterations: 21250\ncpu: 39213.83058823518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31095.21100469665,
            "unit": "ns/iter",
            "extra": "iterations: 26625\ncpu: 31093.79530516429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30512.325908690636,
            "unit": "ns/iter",
            "extra": "iterations: 27072\ncpu: 30511.34751773032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 31049.849784765094,
            "unit": "ns/iter",
            "extra": "iterations: 26715\ncpu: 31049.009919520908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76509.61817547135,
            "unit": "ns/iter",
            "extra": "iterations: 11466\ncpu: 76505.48578405712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 593019.5309999818,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592985.5999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 588552.0475866321,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 588525.7647858587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 582202.4102734545,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 582192.7284856599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 580274.3344481792,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 580248.0936454855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336422.13058417867,
            "unit": "ns/iter",
            "extra": "iterations: 2619\ncpu: 336412.90568919596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 589024.1293729001,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 589023.0363036293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2482320.010724056,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2482198.391420912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1063005.8956422512,
            "unit": "ns/iter",
            "extra": "iterations: 872\ncpu: 1062937.0412844068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5538.323237233262,
            "unit": "ns/iter",
            "extra": "iterations: 146063\ncpu: 5538.05755050907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24690.79425026078,
            "unit": "ns/iter",
            "extra": "iterations: 31271\ncpu: 24689.437498001356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 18949.92621619803,
            "unit": "ns/iter",
            "extra": "iterations: 42489\ncpu: 18949.05269599185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18667.412195783458,
            "unit": "ns/iter",
            "extra": "iterations: 44212\ncpu: 18666.839319641727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18799.413276130366,
            "unit": "ns/iter",
            "extra": "iterations: 42889\ncpu: 18798.62901909581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62291.846499999796,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62287.89999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 570119.3020000801,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570106.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 573455.870779207,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 573432.1428571428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 577959.9883870898,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 577931.8709677418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 575825.2485207611,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 575807.758053915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 327868.4766741943,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 327867.6824680213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 567464.633528304,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 567441.3255360589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 515.9115637959345,
            "unit": "ns/iter",
            "extra": "iterations: 1360721\ncpu: 515.9088453841745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3038.9233384800955,
            "unit": "ns/iter",
            "extra": "iterations: 230572\ncpu: 3038.8178096212973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2270.0130659492434,
            "unit": "ns/iter",
            "extra": "iterations: 306675\ncpu: 2269.977663650464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2351.0677401668936,
            "unit": "ns/iter",
            "extra": "iterations: 297283\ncpu: 2350.9901339800967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1918.6987060388747,
            "unit": "ns/iter",
            "extra": "iterations: 364385\ncpu: 1918.661854906215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17060.748368099008,
            "unit": "ns/iter",
            "extra": "iterations: 40750\ncpu: 17060.407361963375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31585.356530762994,
            "unit": "ns/iter",
            "extra": "iterations: 22172\ncpu: 31584.95399603117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7450.625530101338,
            "unit": "ns/iter",
            "extra": "iterations: 93850\ncpu: 7450.49334043687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7335.943388237157,
            "unit": "ns/iter",
            "extra": "iterations: 94468\ncpu: 7335.763433120233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7346.037557698082,
            "unit": "ns/iter",
            "extra": "iterations: 95107\ncpu: 7345.841000136698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14650.728141193924,
            "unit": "ns/iter",
            "extra": "iterations: 48047\ncpu: 14650.334047911447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13915.69232446302,
            "unit": "ns/iter",
            "extra": "iterations: 50459\ncpu: 13915.533403357224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5279.829893140235,
            "unit": "ns/iter",
            "extra": "iterations: 131388\ncpu: 5279.687642707019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26850.451211127933,
            "unit": "ns/iter",
            "extra": "iterations: 26174\ncpu: 26849.476579812228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21367.681243125262,
            "unit": "ns/iter",
            "extra": "iterations: 32724\ncpu: 21367.015034836822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21053.697044633635,
            "unit": "ns/iter",
            "extra": "iterations: 33160\ncpu: 21053.272014475293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21560.594731198573,
            "unit": "ns/iter",
            "extra": "iterations: 32645\ncpu: 21559.742686475598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49318.824261058035,
            "unit": "ns/iter",
            "extra": "iterations: 14311\ncpu: 49317.98616448864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156916.0631057221,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 156903.85395537477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132801.32534702576,
            "unit": "ns/iter",
            "extra": "iterations: 5259\ncpu: 132796.29207073583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132085.25094267647,
            "unit": "ns/iter",
            "extra": "iterations: 5304\ncpu: 132079.4871794876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132407.08722682053,
            "unit": "ns/iter",
            "extra": "iterations: 5308\ncpu: 132400.26375282535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82707.25901407258,
            "unit": "ns/iter",
            "extra": "iterations: 8459\ncpu: 82705.49710367661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131292.62010858936,
            "unit": "ns/iter",
            "extra": "iterations: 5341\ncpu: 131290.63845721685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5010.419593265158,
            "unit": "ns/iter",
            "extra": "iterations: 138272\ncpu: 5010.306497338541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25779.134391534397,
            "unit": "ns/iter",
            "extra": "iterations: 27405\ncpu: 25778.321474183438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20434.44036885245,
            "unit": "ns/iter",
            "extra": "iterations: 34160\ncpu: 20433.92271662775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20291.935508146667,
            "unit": "ns/iter",
            "extra": "iterations: 34547\ncpu: 20291.078820158316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20884.363163712427,
            "unit": "ns/iter",
            "extra": "iterations: 33467\ncpu: 20883.452356052007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46593.62761059101,
            "unit": "ns/iter",
            "extra": "iterations: 14987\ncpu: 46592.019750450716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153579.09253140236,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 153575.23683630547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128513.23258797936,
            "unit": "ns/iter",
            "extra": "iterations: 5456\ncpu: 128506.83651026564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128333.9987258806,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 128327.44812522847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129777.85584584212,
            "unit": "ns/iter",
            "extra": "iterations: 5397\ncpu: 129776.06077450511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82350.39785958064,
            "unit": "ns/iter",
            "extra": "iterations: 8503\ncpu: 82348.71221921557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128545.09865637605,
            "unit": "ns/iter",
            "extra": "iterations: 5433\ncpu: 128540.1435670885 ns\nthreads: 1"
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
        "date": 1705774836893,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1399.8604342107838,
            "unit": "ns/iter",
            "extra": "iterations: 509430\ncpu: 1399.7919243075596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16843.879870063523,
            "unit": "ns/iter",
            "extra": "iterations: 48639\ncpu: 16843.17317379058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35141.4781233986,
            "unit": "ns/iter",
            "extra": "iterations: 23404\ncpu: 35139.18988207144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52305.26230831461,
            "unit": "ns/iter",
            "extra": "iterations: 16107\ncpu: 52302.80623331471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58279.041000002966,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58274.929999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73045.97785916596,
            "unit": "ns/iter",
            "extra": "iterations: 12014\ncpu: 73041.92608623269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 86998.07096190412,
            "unit": "ns/iter",
            "extra": "iterations: 9949\ncpu: 86996.71323751127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102186.5826298139,
            "unit": "ns/iter",
            "extra": "iterations: 8647\ncpu: 102182.91893142127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 117652.1754010743,
            "unit": "ns/iter",
            "extra": "iterations: 7480\ncpu: 117650.84224598933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1200.454558065145,
            "unit": "ns/iter",
            "extra": "iterations: 583921\ncpu: 1200.438244214544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 963.9883358023363,
            "unit": "ns/iter",
            "extra": "iterations: 727011\ncpu: 963.9409857622519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 947.2313185670263,
            "unit": "ns/iter",
            "extra": "iterations: 740334\ncpu: 947.1947796535064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 950.0731226689202,
            "unit": "ns/iter",
            "extra": "iterations: 737856\ncpu: 950.0352372278584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1877.0227257491608,
            "unit": "ns/iter",
            "extra": "iterations: 372925\ncpu: 1876.9369176107832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5203.0379904598985,
            "unit": "ns/iter",
            "extra": "iterations: 153249\ncpu: 5202.847653165765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25036.50093389243,
            "unit": "ns/iter",
            "extra": "iterations: 32659\ncpu: 25035.4052481705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 21526.89530123346,
            "unit": "ns/iter",
            "extra": "iterations: 37861\ncpu: 21526.156202952883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 21006.660708323427,
            "unit": "ns/iter",
            "extra": "iterations: 38937\ncpu: 21005.4523974625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 20831.86195449558,
            "unit": "ns/iter",
            "extra": "iterations: 39161\ncpu: 20830.95171216254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65099.736241515355,
            "unit": "ns/iter",
            "extra": "iterations: 13846\ncpu: 65096.46829409223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 559544.4409999572,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559510.1999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 563112.5651041439,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 563080.9244791673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 561143.8028627761,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 561118.7378009113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 564306.2798459458,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 564285.6867779207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325020.0265780681,
            "unit": "ns/iter",
            "extra": "iterations: 2709\ncpu: 325001.40273163555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 567382.1388889111,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 567358.2687338504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2359556.0229593073,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2359431.122448983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1095469.0306965786,
            "unit": "ns/iter",
            "extra": "iterations: 847\ncpu: 1095409.445100355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3295414.135231132,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3295334.875444836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7389.243552681968,
            "unit": "ns/iter",
            "extra": "iterations: 114156\ncpu: 7389.177090998278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39519.02061300849,
            "unit": "ns/iter",
            "extra": "iterations: 20424\ncpu: 39517.6508029768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31271.445460363655,
            "unit": "ns/iter",
            "extra": "iterations: 26577\ncpu: 31269.96274974604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30562.501199481394,
            "unit": "ns/iter",
            "extra": "iterations: 27095\ncpu: 30561.59069939089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30699.939731230927,
            "unit": "ns/iter",
            "extra": "iterations: 26863\ncpu: 30698.59658266024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76398.47751923505,
            "unit": "ns/iter",
            "extra": "iterations: 11432\ncpu: 76395.13645906227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 604815.6220000465,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 604780.8000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 593529.9135802342,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 593510.4252400573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 591998.1278195122,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 591971.8386876286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 591099.0970808284,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 591075.0848608311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 334041.14165066846,
            "unit": "ns/iter",
            "extra": "iterations: 2605\ncpu: 334030.74856046203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 573389.8450889934,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 573362.5576796304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2485870.627345811,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2485737.533512067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1119978.8065296886,
            "unit": "ns/iter",
            "extra": "iterations: 827\ncpu: 1119906.6505441356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5439.111229574112,
            "unit": "ns/iter",
            "extra": "iterations: 146319\ncpu: 5438.899254368855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25973.871921644677,
            "unit": "ns/iter",
            "extra": "iterations: 31957\ncpu: 25973.06067528229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20348.223886119184,
            "unit": "ns/iter",
            "extra": "iterations: 40534\ncpu: 20347.064193023103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19751.741546357807,
            "unit": "ns/iter",
            "extra": "iterations: 41698\ncpu: 19751.02642812608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19918.256352547887,
            "unit": "ns/iter",
            "extra": "iterations: 41322\ncpu: 19917.310391558985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62165.8909999951,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62165.81999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 588745.5590000172,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 588704.0999999939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 582672.2495009858,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 582644.6440452418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 579704.0684210755,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 579667.4342105237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 579100.3563829423,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 579079.6542553179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 330434.6752363218,
            "unit": "ns/iter",
            "extra": "iterations: 2645\ncpu: 330415.9546313811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 564698.5359477018,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 564665.4248366003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 498.55053060041615,
            "unit": "ns/iter",
            "extra": "iterations: 1402091\ncpu: 498.5286974953843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3013.972540544935,
            "unit": "ns/iter",
            "extra": "iterations: 233690\ncpu: 3013.7695237280286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2187.5712676037933,
            "unit": "ns/iter",
            "extra": "iterations: 320384\ncpu: 2187.566482720734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2364.406814599267,
            "unit": "ns/iter",
            "extra": "iterations: 296892\ncpu: 2364.3749242148547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1920.7233838923505,
            "unit": "ns/iter",
            "extra": "iterations: 364657\ncpu: 1920.6843691469062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17224.758713863324,
            "unit": "ns/iter",
            "extra": "iterations: 40711\ncpu: 17224.347228021834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31481.084194308085,
            "unit": "ns/iter",
            "extra": "iterations: 22068\ncpu: 31479.404567699865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7430.182821995076,
            "unit": "ns/iter",
            "extra": "iterations: 94458\ncpu: 7429.849245167173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7388.669395055304,
            "unit": "ns/iter",
            "extra": "iterations: 95050\ncpu: 7388.582851130995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7397.429753026626,
            "unit": "ns/iter",
            "extra": "iterations: 94666\ncpu: 7397.0834301650275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14655.856832517582,
            "unit": "ns/iter",
            "extra": "iterations: 47874\ncpu: 14654.557797551804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 12495.040953676587,
            "unit": "ns/iter",
            "extra": "iterations: 55868\ncpu: 12494.759074962554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5379.500657616446,
            "unit": "ns/iter",
            "extra": "iterations: 130015\ncpu: 5379.4408337499935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27359.763474229436,
            "unit": "ns/iter",
            "extra": "iterations: 25456\ncpu: 27357.837052168245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21666.13732165456,
            "unit": "ns/iter",
            "extra": "iterations: 32311\ncpu: 21665.154281823507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21415.408177621488,
            "unit": "ns/iter",
            "extra": "iterations: 32699\ncpu: 21415.03104070477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21849.529347521056,
            "unit": "ns/iter",
            "extra": "iterations: 32047\ncpu: 21849.486691421884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48980.84523393377,
            "unit": "ns/iter",
            "extra": "iterations: 14299\ncpu: 48978.935589901244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160035.2749885798,
            "unit": "ns/iter",
            "extra": "iterations: 4382\ncpu: 160025.3765403914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134949.21913343747,
            "unit": "ns/iter",
            "extra": "iterations: 5216\ncpu: 134944.03757668598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134478.8351944678,
            "unit": "ns/iter",
            "extra": "iterations: 5194\ncpu: 134478.6869464757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134859.99092839326,
            "unit": "ns/iter",
            "extra": "iterations: 5181\ncpu: 134849.68152866006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84335.36196319108,
            "unit": "ns/iter",
            "extra": "iterations: 8313\ncpu: 84331.99807530326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134007.68061924737,
            "unit": "ns/iter",
            "extra": "iterations: 5232\ncpu: 133996.0818042801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5168.851132923949,
            "unit": "ns/iter",
            "extra": "iterations: 136108\ncpu: 5168.602139477483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26233.261757540677,
            "unit": "ns/iter",
            "extra": "iterations: 26685\ncpu: 26233.22840547146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21145.151004381172,
            "unit": "ns/iter",
            "extra": "iterations: 33105\ncpu: 21144.676030810704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20344.239129802558,
            "unit": "ns/iter",
            "extra": "iterations: 34383\ncpu: 20344.033388592954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21113.22241570747,
            "unit": "ns/iter",
            "extra": "iterations: 33307\ncpu: 21112.519890713585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47149.84975452149,
            "unit": "ns/iter",
            "extra": "iterations: 14869\ncpu: 47147.71000067192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156671.9944308279,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 156669.41412341237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130539.20305799431,
            "unit": "ns/iter",
            "extra": "iterations: 5363\ncpu: 130537.57225433586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130030.62337422081,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 130020.15979189715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130891.07817163647,
            "unit": "ns/iter",
            "extra": "iterations: 5360\ncpu: 130881.28731343201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83228.39642643258,
            "unit": "ns/iter",
            "extra": "iterations: 8395\ncpu: 83224.13341274517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129618.15825476887,
            "unit": "ns/iter",
            "extra": "iterations: 5409\ncpu: 129613.16324643939 ns\nthreads: 1"
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
        "date": 1705778408338,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1372.7986619320518,
            "unit": "ns/iter",
            "extra": "iterations: 512829\ncpu: 1372.6739322464214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16425.825708367902,
            "unit": "ns/iter",
            "extra": "iterations: 49727\ncpu: 16425.282039938058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35209.71605042555,
            "unit": "ns/iter",
            "extra": "iterations: 23638\ncpu: 35208.042135544456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52295.96893948616,
            "unit": "ns/iter",
            "extra": "iterations: 16162\ncpu: 52293.78171018439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58045.88629999899,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58043.61 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72729.43266666705,
            "unit": "ns/iter",
            "extra": "iterations: 12000\ncpu: 72728.325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 91076.28473689638,
            "unit": "ns/iter",
            "extra": "iterations: 9939\ncpu: 91072.12999295705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99767.93173665772,
            "unit": "ns/iter",
            "extra": "iterations: 8643\ncpu: 99763.26506999882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 118355.63290279602,
            "unit": "ns/iter",
            "extra": "iterations: 7355\ncpu: 118350.36029911616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1186.205659290411,
            "unit": "ns/iter",
            "extra": "iterations: 590180\ncpu: 1186.1867565827365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 949.8569467074316,
            "unit": "ns/iter",
            "extra": "iterations: 733405\ncpu: 949.8383567060483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 953.017081596561,
            "unit": "ns/iter",
            "extra": "iterations: 736992\ncpu: 952.9906701836642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 949.5521920030709,
            "unit": "ns/iter",
            "extra": "iterations: 737613\ncpu: 949.5221749074376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1916.2367082629182,
            "unit": "ns/iter",
            "extra": "iterations: 366299\ncpu: 1916.1417312086612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5260.731795699073,
            "unit": "ns/iter",
            "extra": "iterations: 151228\ncpu: 5260.599888909464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25208.492350531287,
            "unit": "ns/iter",
            "extra": "iterations: 32682\ncpu: 25207.845297105425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19769.315609873436,
            "unit": "ns/iter",
            "extra": "iterations: 41320\ncpu: 19768.516456921556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19215.280054484832,
            "unit": "ns/iter",
            "extra": "iterations: 42581\ncpu: 19214.821164369103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18982.045390437703,
            "unit": "ns/iter",
            "extra": "iterations: 42542\ncpu: 18980.868318367728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65293.49115398068,
            "unit": "ns/iter",
            "extra": "iterations: 13735\ncpu: 65291.65635238464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 540699.969000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540677.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 544976.2965517264,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 544959.4984326019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 558870.462276222,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 558835.3580562671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 555463.7807865993,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 555443.6492585433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 326766.60999999073,
            "unit": "ns/iter",
            "extra": "iterations: 2700\ncpu: 326754.2962962958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 552078.7764331041,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 552052.8025477724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2361122.6030533505,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2361050.890585244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1053774.3165137996,
            "unit": "ns/iter",
            "extra": "iterations: 872\ncpu: 1053707.1100917452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3283788.531690225,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3283738.0281690103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7343.297914088353,
            "unit": "ns/iter",
            "extra": "iterations: 113140\ncpu: 7343.075835248382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39382.07941077813,
            "unit": "ns/iter",
            "extra": "iterations: 20841\ncpu: 39381.15733410106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30708.394299821346,
            "unit": "ns/iter",
            "extra": "iterations: 26736\ncpu: 30706.814781568068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30355.74949620732,
            "unit": "ns/iter",
            "extra": "iterations: 27293\ncpu: 30355.14234419072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30862.17290015384,
            "unit": "ns/iter",
            "extra": "iterations: 26871\ncpu: 30860.585761601767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76283.8902385396,
            "unit": "ns/iter",
            "extra": "iterations: 11361\ncpu: 76281.97341783276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 596660.3959999474,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 596626.6000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 599979.7036011304,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 599962.3961218813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 595018.6617852241,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 594992.7475592766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 594200.1295159884,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 594178.5957736868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 339244.97494128405,
            "unit": "ns/iter",
            "extra": "iterations: 2554\ncpu: 339237.35317149817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 587438.8697706107,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 587424.2240215929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2483903.3763438817,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2483686.2903225794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1090513.9680851705,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1090468.085106384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5516.767095021187,
            "unit": "ns/iter",
            "extra": "iterations: 146841\ncpu: 5516.541020559643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 25450.781563696386,
            "unit": "ns/iter",
            "extra": "iterations: 31579\ncpu: 25449.91608347314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19319.903346754218,
            "unit": "ns/iter",
            "extra": "iterations: 39740\ncpu: 19318.034725717083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18306.2355449399,
            "unit": "ns/iter",
            "extra": "iterations: 44794\ncpu: 18305.085502522656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18411.854343832514,
            "unit": "ns/iter",
            "extra": "iterations: 44097\ncpu: 18410.751298274357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64427.4203539826,
            "unit": "ns/iter",
            "extra": "iterations: 13560\ncpu: 64294.815634218314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 578372.9080000058,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578343.5999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 567196.0090968248,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 567159.9090318384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 559086.3157551863,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 559049.739583331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 570386.0703226471,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 570372.7096774186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 320127.4937545798,
            "unit": "ns/iter",
            "extra": "iterations: 2722\ncpu: 320111.7927994111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 559250.5098163009,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 559215.7061431286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 500.6687850000162,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 500.62839999999653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2969.18158017499,
            "unit": "ns/iter",
            "extra": "iterations: 248656\ncpu: 2968.9884820796683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2420.096229107876,
            "unit": "ns/iter",
            "extra": "iterations: 287969\ncpu: 2419.9101292153136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2355.8727500058667,
            "unit": "ns/iter",
            "extra": "iterations: 262334\ncpu: 2355.807100871407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1889.9945862858156,
            "unit": "ns/iter",
            "extra": "iterations: 383840\ncpu: 1889.9830658607775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17158.767814814924,
            "unit": "ns/iter",
            "extra": "iterations: 41342\ncpu: 17158.185380484767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29285.91632934342,
            "unit": "ns/iter",
            "extra": "iterations: 23963\ncpu: 29285.761382130844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7362.379489444622,
            "unit": "ns/iter",
            "extra": "iterations: 95112\ncpu: 7361.852342501409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7424.38475907058,
            "unit": "ns/iter",
            "extra": "iterations: 94758\ncpu: 7423.9346545939015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7414.176521075607,
            "unit": "ns/iter",
            "extra": "iterations: 94374\ncpu: 7414.064254985455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14678.08561276801,
            "unit": "ns/iter",
            "extra": "iterations: 47563\ncpu: 14677.755818598533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14111.987514395756,
            "unit": "ns/iter",
            "extra": "iterations: 49497\ncpu: 14111.649190860135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5299.864178638869,
            "unit": "ns/iter",
            "extra": "iterations: 131349\ncpu: 5299.505896504687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26878.546860534818,
            "unit": "ns/iter",
            "extra": "iterations: 25928\ncpu: 26877.036408516153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21392.601064970153,
            "unit": "ns/iter",
            "extra": "iterations: 32677\ncpu: 21390.74884475338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21189.014358414024,
            "unit": "ns/iter",
            "extra": "iterations: 33012\ncpu: 21187.192536047405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21476.60763579222,
            "unit": "ns/iter",
            "extra": "iterations: 32531\ncpu: 21475.023823430056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 47739.130062358774,
            "unit": "ns/iter",
            "extra": "iterations: 14593\ncpu: 47735.660933324296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158303.44080889758,
            "unit": "ns/iter",
            "extra": "iterations: 4401\ncpu: 158289.0479436476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134107.61276020147,
            "unit": "ns/iter",
            "extra": "iterations: 5188\ncpu: 134097.05088666143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133619.3044741563,
            "unit": "ns/iter",
            "extra": "iterations: 5163\ncpu: 133608.52217702742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134025.4635926908,
            "unit": "ns/iter",
            "extra": "iterations: 5205\ncpu: 134022.4015369825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83652.0456173852,
            "unit": "ns/iter",
            "extra": "iterations: 8374\ncpu: 83647.96990685393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132331.32930055846,
            "unit": "ns/iter",
            "extra": "iterations: 5290\ncpu: 132325.5009451776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5046.512144859525,
            "unit": "ns/iter",
            "extra": "iterations: 138783\ncpu: 5046.23332828946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25634.128116497483,
            "unit": "ns/iter",
            "extra": "iterations: 27194\ncpu: 25629.973523571625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20463.163497874382,
            "unit": "ns/iter",
            "extra": "iterations: 34135\ncpu: 20462.065328841018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20226.549319336365,
            "unit": "ns/iter",
            "extra": "iterations: 34672\ncpu: 20225.121135210105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20670.51089073574,
            "unit": "ns/iter",
            "extra": "iterations: 33882\ncpu: 20669.373118469815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46411.413313923746,
            "unit": "ns/iter",
            "extra": "iterations: 15112\ncpu: 46407.27898358904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154208.70301829244,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 154195.02092971935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128761.2214259403,
            "unit": "ns/iter",
            "extra": "iterations: 5442\ncpu: 128745.95736861264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127354.73747495346,
            "unit": "ns/iter",
            "extra": "iterations: 5489\ncpu: 127342.92220805319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127983.62652799899,
            "unit": "ns/iter",
            "extra": "iterations: 5481\ncpu: 127981.48148148059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81946.2824382846,
            "unit": "ns/iter",
            "extra": "iterations: 8547\ncpu: 81936.97203697202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127443.20684633564,
            "unit": "ns/iter",
            "extra": "iterations: 5492\ncpu: 127431.62782228451 ns\nthreads: 1"
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
        "date": 1705953572387,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1374.5341236959653,
            "unit": "ns/iter",
            "extra": "iterations: 511917\ncpu: 1374.4694940781417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16712.952687481164,
            "unit": "ns/iter",
            "extra": "iterations: 49712\ncpu: 16711.96491792726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35070.420807913135,
            "unit": "ns/iter",
            "extra": "iterations: 23443\ncpu: 35069.06112698887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52020.77715724563,
            "unit": "ns/iter",
            "extra": "iterations: 16294\ncpu: 52012.170123972006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57641.68890000292,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57638.73000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71900.51853387286,
            "unit": "ns/iter",
            "extra": "iterations: 12059\ncpu: 71897.4375984742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85928.96287130108,
            "unit": "ns/iter",
            "extra": "iterations: 10100\ncpu: 85925.16831683172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99552.11464748638,
            "unit": "ns/iter",
            "extra": "iterations: 8766\ncpu: 99544.61556011863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 116885.64046307301,
            "unit": "ns/iter",
            "extra": "iterations: 7429\ncpu: 116879.55310270548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1191.938222321149,
            "unit": "ns/iter",
            "extra": "iterations: 596947\ncpu: 1191.8585737092246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 952.4899625483492,
            "unit": "ns/iter",
            "extra": "iterations: 735346\ncpu: 952.4796490359637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 932.9165899298895,
            "unit": "ns/iter",
            "extra": "iterations: 742800\ncpu: 932.8570274636517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 933.6815344606035,
            "unit": "ns/iter",
            "extra": "iterations: 750257\ncpu: 933.6138149993935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1872.6521633020714,
            "unit": "ns/iter",
            "extra": "iterations: 372856\ncpu: 1872.5687664943036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5223.263631829071,
            "unit": "ns/iter",
            "extra": "iterations: 154363\ncpu: 5223.092321346445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 24829.75125856471,
            "unit": "ns/iter",
            "extra": "iterations: 32974\ncpu: 24828.76508764482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19665.554698689564,
            "unit": "ns/iter",
            "extra": "iterations: 41884\ncpu: 19664.146213351185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18910.04658990514,
            "unit": "ns/iter",
            "extra": "iterations: 43078\ncpu: 18909.522261943475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 18902.586768352947,
            "unit": "ns/iter",
            "extra": "iterations: 42746\ncpu: 18901.908950545036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65528.09577992708,
            "unit": "ns/iter",
            "extra": "iterations: 13886\ncpu: 65526.19904940242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 590271.3469999981,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590257.7999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 566847.7062257023,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 566831.3229571984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 545954.2531407614,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 545941.331658291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 559933.8078879819,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 559895.1017811702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 321521.45856358926,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 321506.4825046051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 558508.097231138,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 558490.4700579512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2364533.2315527066,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2364365.3944020355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1093618.6599046409,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 1093536.8735083528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3292981.5248225816,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3292748.2269503525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7568.954102281362,
            "unit": "ns/iter",
            "extra": "iterations: 112925\ncpu: 7568.588886429048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40350.877315925034,
            "unit": "ns/iter",
            "extra": "iterations: 20834\ncpu: 40347.81127003941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31104.511620064422,
            "unit": "ns/iter",
            "extra": "iterations: 26678\ncpu: 31102.88627333374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30683.96135105744,
            "unit": "ns/iter",
            "extra": "iterations: 27297\ncpu: 30682.093270322657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30795.926857225742,
            "unit": "ns/iter",
            "extra": "iterations: 27043\ncpu: 30794.564212550296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75600.85601751071,
            "unit": "ns/iter",
            "extra": "iterations: 11425\ncpu: 75595.48358862125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 608613.8790001314,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608570.3000000038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 597279.0856545191,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 597242.4791086342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 586788.5299380681,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 586758.2931865118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 593174.5937286892,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 593170.0068166342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 337466.8723567309,
            "unit": "ns/iter",
            "extra": "iterations: 2601\ncpu: 337457.9777008843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 580954.109103143,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 580937.7510040178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2492855.4381723013,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2492772.580645163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1126854.3240627758,
            "unit": "ns/iter",
            "extra": "iterations: 827\ncpu: 1126826.2394195944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5515.025949997453,
            "unit": "ns/iter",
            "extra": "iterations: 145395\ncpu: 5514.92004539362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26231.212018067563,
            "unit": "ns/iter",
            "extra": "iterations: 31436\ncpu: 26229.98791194819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20987.333027872162,
            "unit": "ns/iter",
            "extra": "iterations: 39285\ncpu: 20986.877943235315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19000.68753373321,
            "unit": "ns/iter",
            "extra": "iterations: 40766\ncpu: 18999.40636805189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18538.891147932056,
            "unit": "ns/iter",
            "extra": "iterations: 42250\ncpu: 18538.80473372784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 61847.664300012184,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61843.20999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 564275.4569998942,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564255.4000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 570241.9980607915,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 570215.2553329024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 564854.4014221368,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 564837.6212023254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 570527.9024708227,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 570496.358907671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 325673.1635080019,
            "unit": "ns/iter",
            "extra": "iterations: 2691\ncpu: 325651.61649944243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 558732.5491329757,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 558702.633269108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 498.33298283609105,
            "unit": "ns/iter",
            "extra": "iterations: 1402769\ncpu: 498.2881714665784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3022.903376014386,
            "unit": "ns/iter",
            "extra": "iterations: 231723\ncpu: 3022.6343522222696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2350.0493323883948,
            "unit": "ns/iter",
            "extra": "iterations: 297553\ncpu: 2349.878845113304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2373.431476066985,
            "unit": "ns/iter",
            "extra": "iterations: 295488\ncpu: 2373.31837502708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1923.7972413754194,
            "unit": "ns/iter",
            "extra": "iterations: 361992\ncpu: 1923.6590863886695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17330.496888692473,
            "unit": "ns/iter",
            "extra": "iterations: 41301\ncpu: 17329.699038763938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31960.736243578158,
            "unit": "ns/iter",
            "extra": "iterations: 21808\ncpu: 31958.519809244463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7620.260621253732,
            "unit": "ns/iter",
            "extra": "iterations: 91750\ncpu: 7619.89209809268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7558.63596500671,
            "unit": "ns/iter",
            "extra": "iterations: 92362\ncpu: 7557.969727810206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7542.967886934148,
            "unit": "ns/iter",
            "extra": "iterations: 92548\ncpu: 7542.5638587543735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14040.329354171929,
            "unit": "ns/iter",
            "extra": "iterations: 49843\ncpu: 14038.980398451115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14226.686653893956,
            "unit": "ns/iter",
            "extra": "iterations: 48531\ncpu: 14225.999876367805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5387.8689094418905,
            "unit": "ns/iter",
            "extra": "iterations: 131474\ncpu: 5387.516162891537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27508.645213163963,
            "unit": "ns/iter",
            "extra": "iterations: 25497\ncpu: 27505.7771502532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21863.88229026588,
            "unit": "ns/iter",
            "extra": "iterations: 31909\ncpu: 21862.4902065248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21668.93925925425,
            "unit": "ns/iter",
            "extra": "iterations: 32400\ncpu: 21667.185185185488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22712.628319967545,
            "unit": "ns/iter",
            "extra": "iterations: 31928\ncpu: 22711.716988223496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49479.18152463016,
            "unit": "ns/iter",
            "extra": "iterations: 14246\ncpu: 49475.41766109731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158660.6134163469,
            "unit": "ns/iter",
            "extra": "iterations: 4338\ncpu: 158655.99354541267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133514.41928720064,
            "unit": "ns/iter",
            "extra": "iterations: 5247\ncpu: 133510.48218029385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132568.0349650335,
            "unit": "ns/iter",
            "extra": "iterations: 5291\ncpu: 132567.454167455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133920.61930189808,
            "unit": "ns/iter",
            "extra": "iterations: 5243\ncpu: 133913.5800114436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83546.38743267392,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 83543.7582286051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132362.44772171357,
            "unit": "ns/iter",
            "extra": "iterations: 5289\ncpu: 132360.3894876163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5057.195405794746,
            "unit": "ns/iter",
            "extra": "iterations: 138087\ncpu: 5057.087922831219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26127.744512532503,
            "unit": "ns/iter",
            "extra": "iterations: 26925\ncpu: 26127.24605385341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20860.875724100497,
            "unit": "ns/iter",
            "extra": "iterations: 33490\ncpu: 20859.68647357418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20520.56452701984,
            "unit": "ns/iter",
            "extra": "iterations: 34071\ncpu: 20520.24889201937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21154.943008933777,
            "unit": "ns/iter",
            "extra": "iterations: 33128\ncpu: 21154.346776141054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46723.260216336785,
            "unit": "ns/iter",
            "extra": "iterations: 14976\ncpu: 46722.282318376645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155030.7020851729,
            "unit": "ns/iter",
            "extra": "iterations: 4508\ncpu: 155018.36734693922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128378.52852688929,
            "unit": "ns/iter",
            "extra": "iterations: 5451\ncpu: 128374.40836543664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128047.59930824359,
            "unit": "ns/iter",
            "extra": "iterations: 5493\ncpu: 128040.97942836165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129898.52181987435,
            "unit": "ns/iter",
            "extra": "iterations: 5385\ncpu: 129893.89043639592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82567.10960037801,
            "unit": "ns/iter",
            "extra": "iterations: 8458\ncpu: 82566.81248522266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128781.16479470617,
            "unit": "ns/iter",
            "extra": "iterations: 5431\ncpu: 128773.30141778762 ns\nthreads: 1"
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
        "date": 1705955005719,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1456.7195281358916,
            "unit": "ns/iter",
            "extra": "iterations: 494973\ncpu: 1456.6976380529848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16665.458613019295,
            "unit": "ns/iter",
            "extra": "iterations: 49907\ncpu: 16664.790510349252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35402.089086764085,
            "unit": "ns/iter",
            "extra": "iterations: 23247\ncpu: 35401.342108659184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52598.217853150054,
            "unit": "ns/iter",
            "extra": "iterations: 16098\ncpu: 52597.25431730651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57984.91840000111,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57983.16000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72041.03710188375,
            "unit": "ns/iter",
            "extra": "iterations: 11994\ncpu: 72040.0533600134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 86520.08328334433,
            "unit": "ns/iter",
            "extra": "iterations: 10002\ncpu: 86516.29674065189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 100080.60873089355,
            "unit": "ns/iter",
            "extra": "iterations: 8636\ncpu: 100076.41269106072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 116262.98874728906,
            "unit": "ns/iter",
            "extra": "iterations: 7376\ncpu: 116257.94468546633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1168.0093240791657,
            "unit": "ns/iter",
            "extra": "iterations: 600381\ncpu: 1167.979333123465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 952.4824164617966,
            "unit": "ns/iter",
            "extra": "iterations: 736399\ncpu: 952.4775291655742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 934.2876169079394,
            "unit": "ns/iter",
            "extra": "iterations: 748666\ncpu: 934.2645452044039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 944.0643923085037,
            "unit": "ns/iter",
            "extra": "iterations: 740927\ncpu: 944.0407759468882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1862.6013407128016,
            "unit": "ns/iter",
            "extra": "iterations: 377262\ncpu: 1862.54936887362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5269.4058297297115,
            "unit": "ns/iter",
            "extra": "iterations: 151465\ncpu: 5269.321625458027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25575.582046690062,
            "unit": "ns/iter",
            "extra": "iterations: 32384\ncpu: 25574.802371541453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19491.072617925292,
            "unit": "ns/iter",
            "extra": "iterations: 42400\ncpu: 19490.14386792457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19406.663027295202,
            "unit": "ns/iter",
            "extra": "iterations: 42315\ncpu: 19405.68356374806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19544.26925456923,
            "unit": "ns/iter",
            "extra": "iterations: 42016\ncpu: 19543.209729626793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64861.16411188172,
            "unit": "ns/iter",
            "extra": "iterations: 13765\ncpu: 64855.99709407923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 568287.8139999729,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568248.7999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 567413.0765765929,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 567362.3552123562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 552494.4439546672,
            "unit": "ns/iter",
            "extra": "iterations: 1588\ncpu: 552464.7984886647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 552005.1174242423,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 551978.2828282828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 321962.5359357912,
            "unit": "ns/iter",
            "extra": "iterations: 2741\ncpu: 321937.1397300253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 566611.1886304829,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 566600.3875968994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2361555.5818639877,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2361504.534005046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1080220.4208675476,
            "unit": "ns/iter",
            "extra": "iterations: 853\ncpu: 1080214.419695193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3283547.7597172586,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3283469.9646643084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7330.78477378667,
            "unit": "ns/iter",
            "extra": "iterations: 112858\ncpu: 7330.689007425252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39238.24185240748,
            "unit": "ns/iter",
            "extra": "iterations: 20773\ncpu: 39237.736484860085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30712.900541823594,
            "unit": "ns/iter",
            "extra": "iterations: 26946\ncpu: 30712.14280412683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30154.31407639284,
            "unit": "ns/iter",
            "extra": "iterations: 27436\ncpu: 30153.863536958597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30214.426328634,
            "unit": "ns/iter",
            "extra": "iterations: 27453\ncpu: 30212.93483408024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75686.84019539079,
            "unit": "ns/iter",
            "extra": "iterations: 11464\ncpu: 75683.22575017439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 606806.4739999955,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606576.1000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 592716.2518874088,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 592685.5868222414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 583758.5819284745,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 583716.5205664192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 584121.4899463855,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 584059.3833780136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 339390.582298145,
            "unit": "ns/iter",
            "extra": "iterations: 2576\ncpu: 339373.68012422364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 577272.9801193061,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 577222.2664015905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2562097.727272909,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2561917.112299465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1085605.0187134028,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 1085550.6432748488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5451.403619766665,
            "unit": "ns/iter",
            "extra": "iterations: 145258\ncpu: 5451.018188326971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24485.97548902658,
            "unit": "ns/iter",
            "extra": "iterations: 33536\ncpu: 24484.765624999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19561.79633964725,
            "unit": "ns/iter",
            "extra": "iterations: 42291\ncpu: 19560.244496465028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19178.720732019963,
            "unit": "ns/iter",
            "extra": "iterations: 43059\ncpu: 19152.950602661524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19239.025616564522,
            "unit": "ns/iter",
            "extra": "iterations: 42980\ncpu: 19237.489530014078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62268.923649908334,
            "unit": "ns/iter",
            "extra": "iterations: 13962\ncpu: 62265.69259418397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 584674.791999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584648.7999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 582409.660000015,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 582379.2666666681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 580168.5589606846,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 580117.1219187242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 574722.9813581835,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 574673.5685752311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 333542.9077744041,
            "unit": "ns/iter",
            "extra": "iterations: 2624\ncpu: 333526.9054878053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 558185.0672703688,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 558132.0181112576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 500.3793764478535,
            "unit": "ns/iter",
            "extra": "iterations: 1336472\ncpu: 500.3430674192956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3062.713803008678,
            "unit": "ns/iter",
            "extra": "iterations: 229066\ncpu: 3062.4645298734895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2491.5826674069463,
            "unit": "ns/iter",
            "extra": "iterations: 293701\ncpu: 2491.4045236481893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2430.9222206964996,
            "unit": "ns/iter",
            "extra": "iterations: 298627\ncpu: 2430.708542764041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1926.6350200944805,
            "unit": "ns/iter",
            "extra": "iterations: 364031\ncpu: 1926.4991168334634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17213.223900356665,
            "unit": "ns/iter",
            "extra": "iterations: 40786\ncpu: 17212.09238464181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31316.58414159881,
            "unit": "ns/iter",
            "extra": "iterations: 22373\ncpu: 31314.642649622412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7431.006949004923,
            "unit": "ns/iter",
            "extra": "iterations: 94402\ncpu: 7430.972860744496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7331.928073005681,
            "unit": "ns/iter",
            "extra": "iterations: 95444\ncpu: 7331.460332760586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7403.094775931135,
            "unit": "ns/iter",
            "extra": "iterations: 94792\ncpu: 7402.709089374727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14698.441453964131,
            "unit": "ns/iter",
            "extra": "iterations: 47484\ncpu: 14697.0179428861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13975.48449550139,
            "unit": "ns/iter",
            "extra": "iterations: 49792\ncpu: 13974.630462724874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5298.872923537482,
            "unit": "ns/iter",
            "extra": "iterations: 132196\ncpu: 5298.768495264568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27010.40584903615,
            "unit": "ns/iter",
            "extra": "iterations: 25953\ncpu: 27009.262898316196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21641.796936638126,
            "unit": "ns/iter",
            "extra": "iterations: 32448\ncpu: 21641.22596153836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21056.096033780428,
            "unit": "ns/iter",
            "extra": "iterations: 33155\ncpu: 21054.941939375454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21734.15900513415,
            "unit": "ns/iter",
            "extra": "iterations: 32326\ncpu: 21734.121140877545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48901.61583025793,
            "unit": "ns/iter",
            "extra": "iterations: 14327\ncpu: 48898.01772876464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 161893.9290501523,
            "unit": "ns/iter",
            "extra": "iterations: 4327\ncpu: 161883.2678530169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132756.15727566392,
            "unit": "ns/iter",
            "extra": "iterations: 5271\ncpu: 132748.7763232782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132156.06233520163,
            "unit": "ns/iter",
            "extra": "iterations: 5310\ncpu: 132148.3615819198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134140.63980230267,
            "unit": "ns/iter",
            "extra": "iterations: 5261\ncpu: 134125.86960653882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84948.0775945785,
            "unit": "ns/iter",
            "extra": "iterations: 8248\ncpu: 84942.5072744897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133821.11896122785,
            "unit": "ns/iter",
            "extra": "iterations: 5237\ncpu: 133809.39469161737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5025.04590430136,
            "unit": "ns/iter",
            "extra": "iterations: 136741\ncpu: 5024.876957167207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25988.857026325117,
            "unit": "ns/iter",
            "extra": "iterations: 26970\ncpu: 25988.735632184234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20796.396812328378,
            "unit": "ns/iter",
            "extra": "iterations: 34006\ncpu: 20795.162618361413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20044.62050724854,
            "unit": "ns/iter",
            "extra": "iterations: 34973\ncpu: 20044.354216109467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20568.439888382833,
            "unit": "ns/iter",
            "extra": "iterations: 34045\ncpu: 20568.36833602558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46877.34058650744,
            "unit": "ns/iter",
            "extra": "iterations: 14936\ncpu: 46877.12238885872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155671.82492779664,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 155667.87380582202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130245.76166573116,
            "unit": "ns/iter",
            "extra": "iterations: 5379\ncpu: 130243.5954638406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129755.09279881246,
            "unit": "ns/iter",
            "extra": "iterations: 5388\ncpu: 129748.64513734182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129992.55357476397,
            "unit": "ns/iter",
            "extra": "iterations: 5329\ncpu: 129990.46725464422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82550.9056026288,
            "unit": "ns/iter",
            "extra": "iterations: 8496\ncpu: 82550.58851224137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129693.74509439112,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 129690.52202887792 ns\nthreads: 1"
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
        "date": 1705957015704,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1395.0062659079433,
            "unit": "ns/iter",
            "extra": "iterations: 498571\ncpu: 1394.9407406367397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16770.51584528473,
            "unit": "ns/iter",
            "extra": "iterations: 49226\ncpu: 16769.66643643603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35734.00008725388,
            "unit": "ns/iter",
            "extra": "iterations: 22922\ncpu: 35732.22668179041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52495.73762159288,
            "unit": "ns/iter",
            "extra": "iterations: 15935\ncpu: 52495.136491998725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58483.26250001037,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58481.489999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73463.87574013647,
            "unit": "ns/iter",
            "extra": "iterations: 11991\ncpu: 73462.26336418983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88330.56660583244,
            "unit": "ns/iter",
            "extra": "iterations: 9864\ncpu: 88326.83495539331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 100464.03204535828,
            "unit": "ns/iter",
            "extra": "iterations: 8644\ncpu: 100460.52753354935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 118612.89255750901,
            "unit": "ns/iter",
            "extra": "iterations: 7390\ncpu: 118610.2165087957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1193.8891075747363,
            "unit": "ns/iter",
            "extra": "iterations: 586839\ncpu: 1193.8625415147947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 965.6803171741359,
            "unit": "ns/iter",
            "extra": "iterations: 724271\ncpu: 965.6435229354753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 954.5139630745517,
            "unit": "ns/iter",
            "extra": "iterations: 734831\ncpu: 954.47674363221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 972.2305569887839,
            "unit": "ns/iter",
            "extra": "iterations: 674484\ncpu: 972.2217280172707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1866.2644361992673,
            "unit": "ns/iter",
            "extra": "iterations: 375168\ncpu: 1866.2508529512083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5250.003551905351,
            "unit": "ns/iter",
            "extra": "iterations: 151468\ncpu: 5249.912192674364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25630.812250291194,
            "unit": "ns/iter",
            "extra": "iterations: 31787\ncpu: 25629.62846446659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19705.858900876716,
            "unit": "ns/iter",
            "extra": "iterations: 41524\ncpu: 19704.325209517403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 18631.675541145996,
            "unit": "ns/iter",
            "extra": "iterations: 43796\ncpu: 18630.626084573938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19017.445603401233,
            "unit": "ns/iter",
            "extra": "iterations: 42567\ncpu: 19016.146310522185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64954.14497170242,
            "unit": "ns/iter",
            "extra": "iterations: 13782\ncpu: 64949.72427804379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 555428.4920000328,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555370.5000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 567524.3335509412,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 567485.1174934739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 556506.806722688,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 556459.8577892698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 548351.5658475031,
            "unit": "ns/iter",
            "extra": "iterations: 1587\ncpu: 548315.1228733471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 317967.21839912503,
            "unit": "ns/iter",
            "extra": "iterations: 2761\ncpu: 317947.8449837013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 544928.0258024223,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 544877.9106356204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2362557.5801527314,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2362374.809160303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1094938.9365453057,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 1094876.968272622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3303893.978647637,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3303690.7473309617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7350.540634837226,
            "unit": "ns/iter",
            "extra": "iterations: 114360\ncpu: 7349.879328436503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39256.95948197679,
            "unit": "ns/iter",
            "extra": "iterations: 21003\ncpu: 39254.97786030567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30484.846826484285,
            "unit": "ns/iter",
            "extra": "iterations: 26989\ncpu: 30483.571084515745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30396.908696928902,
            "unit": "ns/iter",
            "extra": "iterations: 27228\ncpu: 30395.03819597477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30219.060958981005,
            "unit": "ns/iter",
            "extra": "iterations: 27133\ncpu: 30216.599712526997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 76998.69033245934,
            "unit": "ns/iter",
            "extra": "iterations: 11099\ncpu: 76992.11640688326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 610375.7630000927,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 610363.4999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 599111.8832168143,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 599060.839160838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 500390.77099995664,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500372.09999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 600058.3903448449,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 600016.9655172419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 342156.8322981348,
            "unit": "ns/iter",
            "extra": "iterations: 2576\ncpu: 342132.45341614913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 588700.2198246686,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 588662.1038435627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2505779.905660185,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2505602.96495957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1141065.7358722724,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 1141032.6781326723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5531.291110637548,
            "unit": "ns/iter",
            "extra": "iterations: 145601\ncpu: 5530.780695187548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26241.7016523688,
            "unit": "ns/iter",
            "extra": "iterations: 31470\ncpu: 26239.930092151208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20875.89890054563,
            "unit": "ns/iter",
            "extra": "iterations: 39565\ncpu: 20874.879312523626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 20436.313509168904,
            "unit": "ns/iter",
            "extra": "iterations: 41061\ncpu: 20435.3668931589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 18832.4870609763,
            "unit": "ns/iter",
            "extra": "iterations: 41541\ncpu: 18831.966009484564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63868.05086975759,
            "unit": "ns/iter",
            "extra": "iterations: 13682\ncpu: 63864.581201578454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 586992.1290000093,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586931.9999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 584095.9190981241,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 584089.3236074277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 571438.0138522062,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 571409.8944590996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 568296.1784098446,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 568272.7860374954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329265.07493440324,
            "unit": "ns/iter",
            "extra": "iterations: 2669\ncpu: 329262.00824278826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 560040.6844817015,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 560026.0785576302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 502.56747965361797,
            "unit": "ns/iter",
            "extra": "iterations: 1384647\ncpu: 502.54880846887045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 2850.5862566013925,
            "unit": "ns/iter",
            "extra": "iterations: 245587\ncpu: 2850.5592722742003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2371.6196347527825,
            "unit": "ns/iter",
            "extra": "iterations: 294814\ncpu: 2371.5810646712853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2450.472274923202,
            "unit": "ns/iter",
            "extra": "iterations: 283570\ncpu: 2450.4658461755566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1917.3279001079623,
            "unit": "ns/iter",
            "extra": "iterations: 362952\ncpu: 1917.1942846436837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17206.16063847857,
            "unit": "ns/iter",
            "extra": "iterations: 41223\ncpu: 17205.669165271705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30602.399404918473,
            "unit": "ns/iter",
            "extra": "iterations: 22854\ncpu: 30601.754616260165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7301.84410939791,
            "unit": "ns/iter",
            "extra": "iterations: 95907\ncpu: 7301.77776387542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7277.132080954801,
            "unit": "ns/iter",
            "extra": "iterations: 96350\ncpu: 7276.946549040042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7274.627015730396,
            "unit": "ns/iter",
            "extra": "iterations: 96181\ncpu: 7274.3067757665185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14643.795113371145,
            "unit": "ns/iter",
            "extra": "iterations: 47763\ncpu: 14643.682348261309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13772.929235070804,
            "unit": "ns/iter",
            "extra": "iterations: 50802\ncpu: 13772.62706192686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5216.470063713099,
            "unit": "ns/iter",
            "extra": "iterations: 133567\ncpu: 5216.340113950238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26788.068504118528,
            "unit": "ns/iter",
            "extra": "iterations: 26232\ncpu: 26788.3348581885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21405.30199603896,
            "unit": "ns/iter",
            "extra": "iterations: 32815\ncpu: 21404.455279597434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21125.12175829659,
            "unit": "ns/iter",
            "extra": "iterations: 33123\ncpu: 21125.036983365346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21545.29953959705,
            "unit": "ns/iter",
            "extra": "iterations: 32363\ncpu: 21545.116336557523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48028.56521739263,
            "unit": "ns/iter",
            "extra": "iterations: 14559\ncpu: 48027.364516794056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160035.36743547366,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 160034.02603334104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133285.6686964921,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 133281.02759276985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132631.4010200312,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 132624.70721571485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134550.79761674852,
            "unit": "ns/iter",
            "extra": "iterations: 5203\ncpu: 134539.15049010218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83491.40059488395,
            "unit": "ns/iter",
            "extra": "iterations: 8405\ncpu: 83483.80725758625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132643.17834031206,
            "unit": "ns/iter",
            "extra": "iterations: 5254\ncpu: 132635.8012942535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5037.247977177316,
            "unit": "ns/iter",
            "extra": "iterations: 139162\ncpu: 5037.155976487851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25682.817255363498,
            "unit": "ns/iter",
            "extra": "iterations: 27377\ncpu: 25682.616795119542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20379.23930029151,
            "unit": "ns/iter",
            "extra": "iterations: 34300\ncpu: 20378.80174927094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 19982.40725136244,
            "unit": "ns/iter",
            "extra": "iterations: 34890\ncpu: 19980.965892805736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20536.291798568036,
            "unit": "ns/iter",
            "extra": "iterations: 34116\ncpu: 20535.361707117216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46505.095865905925,
            "unit": "ns/iter",
            "extra": "iterations: 15094\ncpu: 46504.836358817905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151635.8158411726,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 151623.71808858763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127732.21863013224,
            "unit": "ns/iter",
            "extra": "iterations: 5475\ncpu: 127721.6073059352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126266.03442061704,
            "unit": "ns/iter",
            "extra": "iterations: 5549\ncpu: 126257.95638853859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127513.01857924474,
            "unit": "ns/iter",
            "extra": "iterations: 5490\ncpu: 127505.91985428275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81690.04707526401,
            "unit": "ns/iter",
            "extra": "iterations: 8582\ncpu: 81688.58075040916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 126824.20705883544,
            "unit": "ns/iter",
            "extra": "iterations: 5525\ncpu: 126820.36199095007 ns\nthreads: 1"
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
        "date": 1705958474741,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1377.9799984624715,
            "unit": "ns/iter",
            "extra": "iterations: 507311\ncpu: 1377.8950190317182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16505.98338566601,
            "unit": "ns/iter",
            "extra": "iterations: 50318\ncpu: 16505.630191979017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34901.06132893923,
            "unit": "ns/iter",
            "extra": "iterations: 23643\ncpu: 34898.41813644632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51734.58854198898,
            "unit": "ns/iter",
            "extra": "iterations: 16303\ncpu: 51730.975894007264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57500.200199990555,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57497.120000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72979.85334882767,
            "unit": "ns/iter",
            "extra": "iterations: 12049\ncpu: 72977.38401527096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 86898.5260995854,
            "unit": "ns/iter",
            "extra": "iterations: 9981\ncpu: 86889.92084961427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99659.03201828926,
            "unit": "ns/iter",
            "extra": "iterations: 8745\ncpu: 99651.41223556311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 116080.84549585031,
            "unit": "ns/iter",
            "extra": "iterations: 7482\ncpu: 116069.29965249941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1174.3761952195507,
            "unit": "ns/iter",
            "extra": "iterations: 586294\ncpu: 1174.2994129225272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 958.8050417479627,
            "unit": "ns/iter",
            "extra": "iterations: 731413\ncpu: 958.7487507058249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 944.6688635355819,
            "unit": "ns/iter",
            "extra": "iterations: 740903\ncpu: 944.6206858387659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 954.2124069262134,
            "unit": "ns/iter",
            "extra": "iterations: 734364\ncpu: 954.1344619289599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1858.8409389787898,
            "unit": "ns/iter",
            "extra": "iterations: 371084\ncpu: 1858.718511172672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5133.304222721958,
            "unit": "ns/iter",
            "extra": "iterations: 157434\ncpu: 5132.911569292535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25341.20133410573,
            "unit": "ns/iter",
            "extra": "iterations: 32831\ncpu: 25339.46574883495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19851.403712071868,
            "unit": "ns/iter",
            "extra": "iterations: 41594\ncpu: 19850.14184738182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19201.218640703708,
            "unit": "ns/iter",
            "extra": "iterations: 42316\ncpu: 19200.597882597627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19348.39514937871,
            "unit": "ns/iter",
            "extra": "iterations: 41974\ncpu: 19347.479392004574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65247.26072703149,
            "unit": "ns/iter",
            "extra": "iterations: 13727\ncpu: 65244.765790048936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 564099.1619999341,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564087.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 551744.930789131,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 551723.8033635195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 559391.9616368185,
            "unit": "ns/iter",
            "extra": "iterations: 1564\ncpu: 559369.8209718672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 562121.0418848575,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 562088.1544502622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 321513.4214417734,
            "unit": "ns/iter",
            "extra": "iterations: 2705\ncpu: 321506.1367837329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 556904.193152491,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 556879.3281653732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2375743.5280611725,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2375602.295918366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1095690.9964285106,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 1095646.6666666681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3282354.7269502226,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3282281.560283688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7292.564606717113,
            "unit": "ns/iter",
            "extra": "iterations: 115197\ncpu: 7292.332265597201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 38740.86251719678,
            "unit": "ns/iter",
            "extra": "iterations: 21079\ncpu: 38739.04359789356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31085.00408041309,
            "unit": "ns/iter",
            "extra": "iterations: 26713\ncpu: 31083.34518773618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30861.956118642232,
            "unit": "ns/iter",
            "extra": "iterations: 27073\ncpu: 30861.707235991762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30811.102535709666,
            "unit": "ns/iter",
            "extra": "iterations: 27093\ncpu: 30809.412025246278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75867.45944049781,
            "unit": "ns/iter",
            "extra": "iterations: 11403\ncpu: 75864.16732438855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 588710.7460000607,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 588642.2000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 585804.9128378882,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 585784.5945945937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 579398.8697705843,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 579358.636977058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 588847.9578804668,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 588817.0516304341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 341898.72901958786,
            "unit": "ns/iter",
            "extra": "iterations: 2550\ncpu: 341896.54901960667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 584385.490716208,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 584340.6498673762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2511308.7384197544,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2511244.6866484974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1110047.1385902062,
            "unit": "ns/iter",
            "extra": "iterations: 837\ncpu: 1110000.1194743095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5340.396863345572,
            "unit": "ns/iter",
            "extra": "iterations: 150160\ncpu: 5340.203116675576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26070.448087955447,
            "unit": "ns/iter",
            "extra": "iterations: 31380\ncpu: 26069.365838113437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20541.815434552565,
            "unit": "ns/iter",
            "extra": "iterations: 39742\ncpu: 20541.052287252896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 18982.659671597066,
            "unit": "ns/iter",
            "extra": "iterations: 42935\ncpu: 18982.336089437445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19350.554886467,
            "unit": "ns/iter",
            "extra": "iterations: 42014\ncpu: 19349.76674441842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62314.427900003015,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62311.78000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 587167.3789999932,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 587146.9000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 583852.9370444281,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 583830.152418823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 573099.3320131728,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 573073.0693069288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 569972.0338762488,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 569942.1498371369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 329231.2961855183,
            "unit": "ns/iter",
            "extra": "iterations: 2674\ncpu: 329221.16679132456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 573369.9165588837,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 573339.1979301438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 501.8381900983476,
            "unit": "ns/iter",
            "extra": "iterations: 1387103\ncpu: 501.80758025899723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3079.5408090626147,
            "unit": "ns/iter",
            "extra": "iterations: 227572\ncpu: 3079.34543792735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2225.9371951893927,
            "unit": "ns/iter",
            "extra": "iterations: 315565\ncpu: 2225.8539445122296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2457.519066399229,
            "unit": "ns/iter",
            "extra": "iterations: 285004\ncpu: 2457.2858626545467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1952.2953034921918,
            "unit": "ns/iter",
            "extra": "iterations: 358543\ncpu: 1952.1775630816958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17405.14371374533,
            "unit": "ns/iter",
            "extra": "iterations: 40859\ncpu: 17404.61342666225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31749.882270277434,
            "unit": "ns/iter",
            "extra": "iterations: 22059\ncpu: 31749.64866947748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7455.470290528054,
            "unit": "ns/iter",
            "extra": "iterations: 93657\ncpu: 7455.237729160652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7414.743363114067,
            "unit": "ns/iter",
            "extra": "iterations: 94359\ncpu: 7414.325077628993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7427.203526133625,
            "unit": "ns/iter",
            "extra": "iterations: 94381\ncpu: 7426.762801835122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14729.464494307398,
            "unit": "ns/iter",
            "extra": "iterations: 47598\ncpu: 14728.394050170371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13998.071704878017,
            "unit": "ns/iter",
            "extra": "iterations: 49634\ncpu: 13997.328444211777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5255.363828400681,
            "unit": "ns/iter",
            "extra": "iterations: 133497\ncpu: 5255.193749672273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27040.615714783955,
            "unit": "ns/iter",
            "extra": "iterations: 25861\ncpu: 27040.102857584774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21502.433806112345,
            "unit": "ns/iter",
            "extra": "iterations: 32503\ncpu: 21501.59369904291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21386.188590462734,
            "unit": "ns/iter",
            "extra": "iterations: 32727\ncpu: 21385.192654383198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21558.783515331343,
            "unit": "ns/iter",
            "extra": "iterations: 32418\ncpu: 21557.57603800353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48424.93595786017,
            "unit": "ns/iter",
            "extra": "iterations: 14428\ncpu: 48424.00887163808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159957.55428309846,
            "unit": "ns/iter",
            "extra": "iterations: 4366\ncpu: 159950.02290426215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 136552.7748318827,
            "unit": "ns/iter",
            "extra": "iterations: 5205\ncpu: 136542.70893371798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134078.28011471042,
            "unit": "ns/iter",
            "extra": "iterations: 5230\ncpu: 134073.2122370934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134905.0877327701,
            "unit": "ns/iter",
            "extra": "iterations: 5209\ncpu: 134895.08542906537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84760.58614029325,
            "unit": "ns/iter",
            "extra": "iterations: 8283\ncpu: 84756.05456960066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134045.4059386955,
            "unit": "ns/iter",
            "extra": "iterations: 5220\ncpu: 134040.9195402278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5113.217732507567,
            "unit": "ns/iter",
            "extra": "iterations: 136856\ncpu: 5112.977874554202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26124.234560478373,
            "unit": "ns/iter",
            "extra": "iterations: 26620\ncpu: 26122.674680691536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20761.03656950143,
            "unit": "ns/iter",
            "extra": "iterations: 33826\ncpu: 20759.936143794457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20429.80623959175,
            "unit": "ns/iter",
            "extra": "iterations: 34233\ncpu: 20428.831828936833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21089.605838105716,
            "unit": "ns/iter",
            "extra": "iterations: 33367\ncpu: 21088.599514490434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46672.31270555082,
            "unit": "ns/iter",
            "extra": "iterations: 14899\ncpu: 46670.736291025874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156664.94622936903,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 156651.98572065972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130678.2286568312,
            "unit": "ns/iter",
            "extra": "iterations: 5353\ncpu: 130670.70801419854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129876.93537036615,
            "unit": "ns/iter",
            "extra": "iterations: 5400\ncpu: 129865.90740740718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130354.38412816818,
            "unit": "ns/iter",
            "extra": "iterations: 5368\ncpu: 130349.72056631952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83452.59892280614,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 83449.56313584597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130318.66238837659,
            "unit": "ns/iter",
            "extra": "iterations: 5376\ncpu: 130314.62053571451 ns\nthreads: 1"
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
        "date": 1705959937258,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1388.4286681811257,
            "unit": "ns/iter",
            "extra": "iterations: 504971\ncpu: 1388.3379441591699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16386.68275277616,
            "unit": "ns/iter",
            "extra": "iterations: 44842\ncpu: 16385.843628740917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34844.129757929186,
            "unit": "ns/iter",
            "extra": "iterations: 23960\ncpu: 34843.48080133557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52284.98021571406,
            "unit": "ns/iter",
            "extra": "iterations: 16225\ncpu: 52284.07395993838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57327.25139999957,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57324.96000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72695.96582955722,
            "unit": "ns/iter",
            "extra": "iterations: 12145\ncpu: 72693.77521613837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 86783.15935977829,
            "unit": "ns/iter",
            "extra": "iterations: 10059\ncpu: 86779.69977134897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98519.0073512468,
            "unit": "ns/iter",
            "extra": "iterations: 8706\ncpu: 98516.42545371006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114862.76408545315,
            "unit": "ns/iter",
            "extra": "iterations: 7490\ncpu: 114858.03738317764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1205.8111572911457,
            "unit": "ns/iter",
            "extra": "iterations: 575283\ncpu: 1205.8107053398069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 990.7635575324709,
            "unit": "ns/iter",
            "extra": "iterations: 711763\ncpu: 990.7176967614212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 964.9515724769517,
            "unit": "ns/iter",
            "extra": "iterations: 730122\ncpu: 964.922437620016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 972.9585157264572,
            "unit": "ns/iter",
            "extra": "iterations: 715259\ncpu: 972.9215570863145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1886.8757200689301,
            "unit": "ns/iter",
            "extra": "iterations: 370277\ncpu: 1886.7847584376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5049.455989586089,
            "unit": "ns/iter",
            "extra": "iterations: 158258\ncpu: 5049.218996827969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25286.027985531644,
            "unit": "ns/iter",
            "extra": "iterations: 32624\ncpu: 25284.805664541487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20074.69045538371,
            "unit": "ns/iter",
            "extra": "iterations: 41196\ncpu: 20073.06534615013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19464.32175588901,
            "unit": "ns/iter",
            "extra": "iterations: 42554\ncpu: 19463.66499036523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19105.72063746176,
            "unit": "ns/iter",
            "extra": "iterations: 41226\ncpu: 19105.23456071419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 67923.11804193814,
            "unit": "ns/iter",
            "extra": "iterations: 13258\ncpu: 67921.511540202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 551640.1849999966,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551626.1 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 546515.551767677,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 546497.0959595965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 559330.843511466,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 559318.3842239181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 559214.2633611927,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 559205.2157115253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 330239.20126722736,
            "unit": "ns/iter",
            "extra": "iterations: 2683\ncpu: 330218.15132314514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 557676.3073453004,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 557652.9639175255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2356399.2090678466,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2356316.876574312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1089809.1096699012,
            "unit": "ns/iter",
            "extra": "iterations: 848\ncpu: 1089786.0849056593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3273414.1866196557,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3273405.281690142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7249.681646370149,
            "unit": "ns/iter",
            "extra": "iterations: 114555\ncpu: 7249.408581030961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 38997.40419117607,
            "unit": "ns/iter",
            "extra": "iterations: 20233\ncpu: 38996.59467207037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31149.486394945103,
            "unit": "ns/iter",
            "extra": "iterations: 26571\ncpu: 31148.718527718203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30721.90427185717,
            "unit": "ns/iter",
            "extra": "iterations: 27014\ncpu: 30721.525875471947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30595.033260570726,
            "unit": "ns/iter",
            "extra": "iterations: 27029\ncpu: 30593.78815346489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79595.7142091609,
            "unit": "ns/iter",
            "extra": "iterations: 11197\ncpu: 79592.58730016951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 625855.5419999539,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625829.0000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 606989.2374050905,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 606982.7467218754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 604873.652472525,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 604861.263736266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 598454.4848066806,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 598434.3922651912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 339415.9041521244,
            "unit": "ns/iter",
            "extra": "iterations: 2577\ncpu: 339411.75785797316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 587891.7796609916,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 587875.7288135572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2503233.2479783404,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2503112.668463603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1117153.00598805,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 1117134.610778445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5507.721531231768,
            "unit": "ns/iter",
            "extra": "iterations: 145765\ncpu: 5507.562858024901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26361.289680375907,
            "unit": "ns/iter",
            "extra": "iterations: 31193\ncpu: 26358.69265540353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 20868.401040739132,
            "unit": "ns/iter",
            "extra": "iterations: 39395\ncpu: 20867.6304099504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 20222.705951506792,
            "unit": "ns/iter",
            "extra": "iterations: 40830\ncpu: 20222.233651726598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 21054.68883581038,
            "unit": "ns/iter",
            "extra": "iterations: 40191\ncpu: 21053.19350103264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62605.264996040154,
            "unit": "ns/iter",
            "extra": "iterations: 13887\ncpu: 62603.521278893866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 589475.335999964,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 589452.5000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 580076.4057679244,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 580060.4963112044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 582475.8665786373,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 582453.3025099084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 600333.3423180418,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 600295.0808625345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 327559.0434453797,
            "unit": "ns/iter",
            "extra": "iterations: 2647\ncpu: 327546.92104269005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 564245.8867187727,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 564216.3411458355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 502.9185963347627,
            "unit": "ns/iter",
            "extra": "iterations: 1395404\ncpu: 502.87995447912976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3031.9243350435136,
            "unit": "ns/iter",
            "extra": "iterations: 231970\ncpu: 3031.627365607622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2357.957166076102,
            "unit": "ns/iter",
            "extra": "iterations: 297171\ncpu: 2357.9535015193273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2422.148877814616,
            "unit": "ns/iter",
            "extra": "iterations: 292777\ncpu: 2422.0249541459793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1936.2013474970645,
            "unit": "ns/iter",
            "extra": "iterations: 362895\ncpu: 1936.1054850576709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17131.519673847757,
            "unit": "ns/iter",
            "extra": "iterations: 40104\ncpu: 17130.67275084791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31521.35269765745,
            "unit": "ns/iter",
            "extra": "iterations: 22223\ncpu: 31521.288754893194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7478.41026215061,
            "unit": "ns/iter",
            "extra": "iterations: 93801\ncpu: 7478.1804031939155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7404.826955251723,
            "unit": "ns/iter",
            "extra": "iterations: 94438\ncpu: 7404.738558631026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7393.958599130817,
            "unit": "ns/iter",
            "extra": "iterations: 94370\ncpu: 7393.71940235238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14526.750290457241,
            "unit": "ns/iter",
            "extra": "iterations: 48200\ncpu: 14526.300829875403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13985.059998404447,
            "unit": "ns/iter",
            "extra": "iterations: 50118\ncpu: 13984.791891137176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5165.176828454164,
            "unit": "ns/iter",
            "extra": "iterations: 134786\ncpu: 5165.028267030704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26675.87281690571,
            "unit": "ns/iter",
            "extra": "iterations: 26167\ncpu: 26673.986318645402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21240.243834286248,
            "unit": "ns/iter",
            "extra": "iterations: 32924\ncpu: 21239.979953833183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21155.05763826522,
            "unit": "ns/iter",
            "extra": "iterations: 33450\ncpu: 21154.63378176381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21490.59284006338,
            "unit": "ns/iter",
            "extra": "iterations: 32626\ncpu: 21490.510635689498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48100.254175294176,
            "unit": "ns/iter",
            "extra": "iterations: 14490\ncpu: 48098.81987577653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157137.30138516295,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 157134.5174262749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133106.2665908246,
            "unit": "ns/iter",
            "extra": "iterations: 5274\ncpu: 132768.9799014033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130698.578770951,
            "unit": "ns/iter",
            "extra": "iterations: 5370\ncpu: 130694.15270018649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131820.50684410584,
            "unit": "ns/iter",
            "extra": "iterations: 5260\ncpu: 131814.106463879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83123.45440476152,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 83117.45238095234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130937.6870901081,
            "unit": "ns/iter",
            "extra": "iterations: 5337\ncpu: 130931.85310099351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4967.097632352566,
            "unit": "ns/iter",
            "extra": "iterations: 139759\ncpu: 4966.960982834803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25358.99974229697,
            "unit": "ns/iter",
            "extra": "iterations: 27163\ncpu: 25358.701174391725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20238.09533045677,
            "unit": "ns/iter",
            "extra": "iterations: 34543\ncpu: 20237.205801464886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20136.855761503804,
            "unit": "ns/iter",
            "extra": "iterations: 34852\ncpu: 20136.193044875225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20628.27395843037,
            "unit": "ns/iter",
            "extra": "iterations: 31899\ncpu: 20627.389573341265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47363.50130933761,
            "unit": "ns/iter",
            "extra": "iterations: 14893\ncpu: 47362.80803061859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 158406.2473695955,
            "unit": "ns/iter",
            "extra": "iterations: 4467\ncpu: 158399.6642041634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131443.6130500716,
            "unit": "ns/iter",
            "extra": "iterations: 5272\ncpu: 131436.7981790598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130639.26809149272,
            "unit": "ns/iter",
            "extra": "iterations: 5334\ncpu: 130631.64604424404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 132590.1114846045,
            "unit": "ns/iter",
            "extra": "iterations: 5355\ncpu: 132584.18300653712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82356.57131107971,
            "unit": "ns/iter",
            "extra": "iterations: 8512\ncpu: 82355.02819548784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129593.16641983422,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 129590.91077378723 ns\nthreads: 1"
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
        "date": 1705961996056,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1429.5480780699684,
            "unit": "ns/iter",
            "extra": "iterations: 494685\ncpu: 1429.4492454794467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16992.794145943186,
            "unit": "ns/iter",
            "extra": "iterations: 41578\ncpu: 16992.23868391938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34993.776442813985,
            "unit": "ns/iter",
            "extra": "iterations: 23721\ncpu: 34993.12845158298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52131.10796645517,
            "unit": "ns/iter",
            "extra": "iterations: 16218\ncpu: 52130.127019361214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59155.01241635484,
            "unit": "ns/iter",
            "extra": "iterations: 13450\ncpu: 59155.197026022266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72406.39797862388,
            "unit": "ns/iter",
            "extra": "iterations: 12071\ncpu: 72402.02965785767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 86111.46144626883,
            "unit": "ns/iter",
            "extra": "iterations: 10012\ncpu: 86106.71194566511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99255.01680768379,
            "unit": "ns/iter",
            "extra": "iterations: 8746\ncpu: 99250.29727875604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114784.96510067576,
            "unit": "ns/iter",
            "extra": "iterations: 7450\ncpu: 114777.22147651014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1143.0543389919,
            "unit": "ns/iter",
            "extra": "iterations: 612746\ncpu: 1143.056992620106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 949.5587397526793,
            "unit": "ns/iter",
            "extra": "iterations: 736903\ncpu: 949.5143865610535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 925.5701041130749,
            "unit": "ns/iter",
            "extra": "iterations: 757830\ncpu: 925.5190478075566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 939.6205673189548,
            "unit": "ns/iter",
            "extra": "iterations: 745824\ncpu: 939.5506178401336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1867.3926373658578,
            "unit": "ns/iter",
            "extra": "iterations: 374893\ncpu: 1867.260791745911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5283.046106631118,
            "unit": "ns/iter",
            "extra": "iterations: 153145\ncpu: 5282.774494759871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25242.514559517138,
            "unit": "ns/iter",
            "extra": "iterations: 32453\ncpu: 25241.429143684698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 20159.360176093935,
            "unit": "ns/iter",
            "extra": "iterations: 40433\ncpu: 20158.65011253185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19883.268872086363,
            "unit": "ns/iter",
            "extra": "iterations: 41927\ncpu: 19882.138001764964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 20998.412567039366,
            "unit": "ns/iter",
            "extra": "iterations: 38784\ncpu: 20997.47318481847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64914.94015725336,
            "unit": "ns/iter",
            "extra": "iterations: 13736\ncpu: 64911.306057076166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 572738.7949999638,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572700.8999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 564906.3781512363,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 564879.63800905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 563789.0796117039,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 563758.964401296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 565920.4047773108,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 565902.0012911542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 324645.4328136587,
            "unit": "ns/iter",
            "extra": "iterations: 2694\ncpu: 324623.9792130661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 565439.0498059329,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 565402.9107373869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2358531.1658164836,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2358461.2244898034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1054188.102505625,
            "unit": "ns/iter",
            "extra": "iterations: 878\ncpu: 1054141.002277907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3301473.166666965,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3301354.6099290787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7429.586467436892,
            "unit": "ns/iter",
            "extra": "iterations: 112366\ncpu: 7429.353185127186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 40285.16943473121,
            "unit": "ns/iter",
            "extra": "iterations: 20592\ncpu: 40283.68298368314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 31720.317236341758,
            "unit": "ns/iter",
            "extra": "iterations: 26009\ncpu: 31718.44361567145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30594.55858048987,
            "unit": "ns/iter",
            "extra": "iterations: 27108\ncpu: 30593.315626383435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30694.873072493276,
            "unit": "ns/iter",
            "extra": "iterations: 26913\ncpu: 30693.345223497756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75134.94627048813,
            "unit": "ns/iter",
            "extra": "iterations: 11409\ncpu: 75132.29906214404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 610865.5479999925,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 610801.3000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 618640.6343335377,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 618588.2065596648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 588594.5119781286,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 588574.6064339483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 585683.2343434148,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 585670.0336700295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 336553.23421355156,
            "unit": "ns/iter",
            "extra": "iterations: 2613\ncpu: 336532.6061997711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 584708.0434782841,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 584695.6521739116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2496758.706989281,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2496669.354838714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1085994.7631887419,
            "unit": "ns/iter",
            "extra": "iterations: 853\ncpu: 1085975.3810082024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 4945.174111603658,
            "unit": "ns/iter",
            "extra": "iterations: 163131\ncpu: 4944.849844603431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 24650.91570765045,
            "unit": "ns/iter",
            "extra": "iterations: 32933\ncpu: 24649.73734551968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 19581.565607073437,
            "unit": "ns/iter",
            "extra": "iterations: 41840\ncpu: 19580.437380497155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 19069.11208467612,
            "unit": "ns/iter",
            "extra": "iterations: 42798\ncpu: 19068.290574326013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 19169.98690459233,
            "unit": "ns/iter",
            "extra": "iterations: 42534\ncpu: 19168.916631400858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 62232.21120000062,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62230.859999999666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 555351.8289999602,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555334.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 564295.080155119,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 564283.3872010319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 557729.0364916613,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 557702.8809218915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 560720.7364691105,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 560699.420103091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 331395.0100633459,
            "unit": "ns/iter",
            "extra": "iterations: 2683\ncpu: 331387.92396571155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 567820.2000000238,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 567787.1428571446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 500.0454656343749,
            "unit": "ns/iter",
            "extra": "iterations: 1401894\ncpu: 500.02111429251926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3050.3682829098025,
            "unit": "ns/iter",
            "extra": "iterations: 228596\ncpu: 3050.2366620588464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2444.6597691983993,
            "unit": "ns/iter",
            "extra": "iterations: 286047\ncpu: 2444.5227532538174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2455.0900633475135,
            "unit": "ns/iter",
            "extra": "iterations: 283989\ncpu: 2454.9806506589985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1931.6059166500147,
            "unit": "ns/iter",
            "extra": "iterations: 362063\ncpu: 1931.5494817200358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17284.25868115584,
            "unit": "ns/iter",
            "extra": "iterations: 40490\ncpu: 17284.097307977438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31428.352553765562,
            "unit": "ns/iter",
            "extra": "iterations: 22320\ncpu: 31427.464157705857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7455.971268731722,
            "unit": "ns/iter",
            "extra": "iterations: 93487\ncpu: 7455.8494763979015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7410.2956635025275,
            "unit": "ns/iter",
            "extra": "iterations: 94408\ncpu: 7410.310566901137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7414.530192710717,
            "unit": "ns/iter",
            "extra": "iterations: 94079\ncpu: 7414.480383507392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 13938.80821072268,
            "unit": "ns/iter",
            "extra": "iterations: 50227\ncpu: 13938.72220120669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14005.417243309297,
            "unit": "ns/iter",
            "extra": "iterations: 50002\ncpu: 14004.69981200737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5291.551326701673,
            "unit": "ns/iter",
            "extra": "iterations: 131793\ncpu: 5291.476785565281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27045.089415844446,
            "unit": "ns/iter",
            "extra": "iterations: 25935\ncpu: 27044.46115288243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21448.69639281619,
            "unit": "ns/iter",
            "extra": "iterations: 32463\ncpu: 21448.38739488045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21228.45035514694,
            "unit": "ns/iter",
            "extra": "iterations: 33085\ncpu: 21227.834366026862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21769.715872622055,
            "unit": "ns/iter",
            "extra": "iterations: 32408\ncpu: 21769.754381634044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48192.68037821467,
            "unit": "ns/iter",
            "extra": "iterations: 14489\ncpu: 48191.49699772272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160555.30811554796,
            "unit": "ns/iter",
            "extra": "iterations: 4362\ncpu: 160548.99128839816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134568.20665129775,
            "unit": "ns/iter",
            "extra": "iterations: 5202\ncpu: 134563.72549019638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131100.44674782557,
            "unit": "ns/iter",
            "extra": "iterations: 5258\ncpu: 131099.44845949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131834.01426160778,
            "unit": "ns/iter",
            "extra": "iterations: 5329\ncpu: 131833.15819102895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83040.16185517589,
            "unit": "ns/iter",
            "extra": "iterations: 8452\ncpu: 83035.97964978777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131049.31296711518,
            "unit": "ns/iter",
            "extra": "iterations: 5352\ncpu: 131046.26307922338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4999.80013729345,
            "unit": "ns/iter",
            "extra": "iterations: 139846\ncpu: 4999.700384708898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25830.458777570162,
            "unit": "ns/iter",
            "extra": "iterations: 27388\ncpu: 25830.513363516817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20309.674611670114,
            "unit": "ns/iter",
            "extra": "iterations: 34571\ncpu: 20309.7133435538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20192.078235193676,
            "unit": "ns/iter",
            "extra": "iterations: 34882\ncpu: 20192.110544120227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20720.4778607021,
            "unit": "ns/iter",
            "extra": "iterations: 33899\ncpu: 20720.38113218678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46569.436884150666,
            "unit": "ns/iter",
            "extra": "iterations: 15020\ncpu: 46569.54727030639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151527.05543526082,
            "unit": "ns/iter",
            "extra": "iterations: 4618\ncpu: 151527.54439151168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127303.0249272298,
            "unit": "ns/iter",
            "extra": "iterations: 5496\ncpu: 127302.3653566243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125973.25793650837,
            "unit": "ns/iter",
            "extra": "iterations: 5544\ncpu: 125972.33044733232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127033.82010581926,
            "unit": "ns/iter",
            "extra": "iterations: 5481\ncpu: 127028.26126619302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81783.94156070378,
            "unit": "ns/iter",
            "extra": "iterations: 8573\ncpu: 81780.21696022438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128531.36559339313,
            "unit": "ns/iter",
            "extra": "iterations: 5435\ncpu: 128530.06439742482 ns\nthreads: 1"
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
        "date": 1705963412425,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1395.254661055743,
            "unit": "ns/iter",
            "extra": "iterations: 502354\ncpu: 1395.2143309299815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16681.4205630817,
            "unit": "ns/iter",
            "extra": "iterations: 48057\ncpu: 16681.10993195581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35295.45094876168,
            "unit": "ns/iter",
            "extra": "iterations: 23557\ncpu: 35293.87018720551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52426.90362050392,
            "unit": "ns/iter",
            "extra": "iterations: 15937\ncpu: 52426.993788040396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57885.650900004744,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57882.91000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72864.63083802264,
            "unit": "ns/iter",
            "extra": "iterations: 12076\ncpu: 72862.35508446507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87047.9230846136,
            "unit": "ns/iter",
            "extra": "iterations: 9998\ncpu: 87042.81856371278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 100472.63776874215,
            "unit": "ns/iter",
            "extra": "iterations: 8605\ncpu: 100470.71470075537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115140.8335152893,
            "unit": "ns/iter",
            "extra": "iterations: 7328\ncpu: 115136.44923580786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1174.420838699522,
            "unit": "ns/iter",
            "extra": "iterations: 597091\ncpu: 1174.3616969607656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 957.3407442681981,
            "unit": "ns/iter",
            "extra": "iterations: 732881\ncpu: 957.3245861197121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 966.0358065667848,
            "unit": "ns/iter",
            "extra": "iterations: 742685\ncpu: 966.0384954590453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 953.7599596398089,
            "unit": "ns/iter",
            "extra": "iterations: 734389\ncpu: 953.7358266531777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1876.2020347599137,
            "unit": "ns/iter",
            "extra": "iterations: 375376\ncpu: 1876.090373385617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5262.410184493567,
            "unit": "ns/iter",
            "extra": "iterations: 151171\ncpu: 5262.202406546221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 25196.404878049143,
            "unit": "ns/iter",
            "extra": "iterations: 32595\ncpu: 25195.99018254328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 19609.454601590805,
            "unit": "ns/iter",
            "extra": "iterations: 42105\ncpu: 19609.495309345686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 19171.5828331905,
            "unit": "ns/iter",
            "extra": "iterations: 41988\ncpu: 19170.641611889056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 19296.624660575482,
            "unit": "ns/iter",
            "extra": "iterations: 42351\ncpu: 19296.53845245685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66973.23387880597,
            "unit": "ns/iter",
            "extra": "iterations: 13383\ncpu: 66970.0141971156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 577472.035000028,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577363.9000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 546139.6590908895,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 546105.6186868676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 542366.2869785569,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 542331.0998735783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 550202.7288666192,
            "unit": "ns/iter",
            "extra": "iterations: 1597\ncpu: 550188.1653099578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 324272.30955880927,
            "unit": "ns/iter",
            "extra": "iterations: 2720\ncpu: 324254.26470588235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 553873.8914974614,
            "unit": "ns/iter",
            "extra": "iterations: 1576\ncpu: 553858.6928934007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2345440.0202532453,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2345315.6962025254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1101681.9501187261,
            "unit": "ns/iter",
            "extra": "iterations: 842\ncpu: 1101638.242280284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3274092.212014073,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3273910.6007067156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 7347.191136252526,
            "unit": "ns/iter",
            "extra": "iterations: 112255\ncpu: 7346.910159903795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 39086.593450214685,
            "unit": "ns/iter",
            "extra": "iterations: 21161\ncpu: 39085.473276310186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 30539.073201314794,
            "unit": "ns/iter",
            "extra": "iterations: 27117\ncpu: 30537.46727145343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 30303.910659453824,
            "unit": "ns/iter",
            "extra": "iterations: 27356\ncpu: 30303.44714139494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 30719.813074075253,
            "unit": "ns/iter",
            "extra": "iterations: 27000\ncpu: 30719.444444444463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 75994.67819287884,
            "unit": "ns/iter",
            "extra": "iterations: 11510\ncpu: 75993.37098175548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 608936.6840000139,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608929.6000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 598242.7968210146,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 598222.391154111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 592204.3858806778,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 592193.1459904031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 576783.0207218745,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 576776.9385026781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 334201.856319652,
            "unit": "ns/iter",
            "extra": "iterations: 2603\ncpu: 334192.9312331927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 568015.7657774846,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 568002.0169160661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2493832.666666678,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2493807.3170731645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1105070.6536643133,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1104812.0567375906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5760.922509401963,
            "unit": "ns/iter",
            "extra": "iterations: 145979\ncpu: 5760.679960816266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 26717.446670120768,
            "unit": "ns/iter",
            "extra": "iterations: 30902\ncpu: 26716.60410329439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 21495.980090214412,
            "unit": "ns/iter",
            "extra": "iterations: 38574\ncpu: 21494.78405143361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 20493.96298405397,
            "unit": "ns/iter",
            "extra": "iterations: 40388\ncpu: 20493.178666930886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 20894.695176529705,
            "unit": "ns/iter",
            "extra": "iterations: 40220\ncpu: 20893.727001491803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63935.385599995694,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 63933.49000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 567753.8009999807,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 567746.9999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 586496.9065420277,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 586466.6889185577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 571879.9928385495,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 571872.0703124976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 573043.1583769987,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 573027.8795811507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 331710.6063021915,
            "unit": "ns/iter",
            "extra": "iterations: 2634\ncpu: 331698.06378132093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 563191.2483870345,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 563187.8064516119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 504.6422618426249,
            "unit": "ns/iter",
            "extra": "iterations: 1389575\ncpu: 504.6294730403166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3053.8817022463318,
            "unit": "ns/iter",
            "extra": "iterations: 229438\ncpu: 3053.8415606830877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2367.2920164219813,
            "unit": "ns/iter",
            "extra": "iterations: 294730\ncpu: 2367.231703593122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2254.1666028722475,
            "unit": "ns/iter",
            "extra": "iterations: 310895\ncpu: 2254.1076569259717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1911.5897797529074,
            "unit": "ns/iter",
            "extra": "iterations: 365862\ncpu: 1911.5497099999336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17440.808921006905,
            "unit": "ns/iter",
            "extra": "iterations: 40130\ncpu: 17440.585596810302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31979.07462140477,
            "unit": "ns/iter",
            "extra": "iterations: 21857\ncpu: 31977.915541931707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7563.638372029852,
            "unit": "ns/iter",
            "extra": "iterations: 92385\ncpu: 7563.461600909178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7530.331907852827,
            "unit": "ns/iter",
            "extra": "iterations: 93068\ncpu: 7530.344479305548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7504.215210857359,
            "unit": "ns/iter",
            "extra": "iterations: 93499\ncpu: 7504.052449758902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14677.361317633386,
            "unit": "ns/iter",
            "extra": "iterations: 47479\ncpu: 14676.452747530304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13970.428889423561,
            "unit": "ns/iter",
            "extra": "iterations: 49866\ncpu: 13969.534352063587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5283.648853235216,
            "unit": "ns/iter",
            "extra": "iterations: 132634\ncpu: 5283.470301732544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27175.471318607306,
            "unit": "ns/iter",
            "extra": "iterations: 25853\ncpu: 27174.061037404073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21678.712448876933,
            "unit": "ns/iter",
            "extra": "iterations: 32276\ncpu: 21678.538232742645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21207.923929929097,
            "unit": "ns/iter",
            "extra": "iterations: 32825\ncpu: 21207.750190403916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21565.159667746364,
            "unit": "ns/iter",
            "extra": "iterations: 32505\ncpu: 21564.96231349007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48615.83348372495,
            "unit": "ns/iter",
            "extra": "iterations: 14407\ncpu: 48613.29909071973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 161710.0389461732,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 161709.07216495063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133988.07074386443,
            "unit": "ns/iter",
            "extra": "iterations: 5216\ncpu: 133990.47162576535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132122.42959338386,
            "unit": "ns/iter",
            "extra": "iterations: 5312\ncpu: 132124.47289156512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134361.36194100033,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 134361.12274024572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83364.16768257033,
            "unit": "ns/iter",
            "extra": "iterations: 8367\ncpu: 83360.4398231151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132738.9915384786,
            "unit": "ns/iter",
            "extra": "iterations: 5200\ncpu: 132731.1346153829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5121.683016777152,
            "unit": "ns/iter",
            "extra": "iterations: 137206\ncpu: 5121.570485255736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26302.312095925008,
            "unit": "ns/iter",
            "extra": "iterations: 26604\ncpu: 26301.642610134222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20643.973752729595,
            "unit": "ns/iter",
            "extra": "iterations: 33413\ncpu: 20643.507018226526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20225.396872198566,
            "unit": "ns/iter",
            "extra": "iterations: 34593\ncpu: 20225.458907871343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20777.736120183577,
            "unit": "ns/iter",
            "extra": "iterations: 33682\ncpu: 20777.762603170762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 46758.58462463006,
            "unit": "ns/iter",
            "extra": "iterations: 14972\ncpu: 46759.42425861628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153921.98616298952,
            "unit": "ns/iter",
            "extra": "iterations: 4553\ncpu: 153926.40017570736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129166.75675675606,
            "unit": "ns/iter",
            "extra": "iterations: 5439\ncpu: 129166.50119507297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128275.55716644574,
            "unit": "ns/iter",
            "extra": "iterations: 5449\ncpu: 128271.20572582015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129017.92895270193,
            "unit": "ns/iter",
            "extra": "iterations: 5433\ncpu: 129014.26467881512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82009.34444182762,
            "unit": "ns/iter",
            "extra": "iterations: 8492\ncpu: 82008.8082901542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128295.8632541198,
            "unit": "ns/iter",
            "extra": "iterations: 5470\ncpu: 128296.39853747592 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}