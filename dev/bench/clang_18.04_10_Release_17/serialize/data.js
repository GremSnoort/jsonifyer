window.BENCHMARK_DATA = {
  "lastUpdate": 1705778435276,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-10 18.04 Release c++-17": [
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
        "date": 1702490336107,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 713.0418568072135,
            "unit": "ns/iter",
            "extra": "iterations: 979100\ncpu: 713.016750076601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10766.744040250245,
            "unit": "ns/iter",
            "extra": "iterations: 75926\ncpu: 10766.343545030686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23623.70810032174,
            "unit": "ns/iter",
            "extra": "iterations: 35406\ncpu: 23623.207930859182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37796.08851034087,
            "unit": "ns/iter",
            "extra": "iterations: 22777\ncpu: 37794.674452298364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46561.33959731744,
            "unit": "ns/iter",
            "extra": "iterations: 17135\ncpu: 46560.96294134808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58403.34949328413,
            "unit": "ns/iter",
            "extra": "iterations: 14604\ncpu: 58400.951794029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58211.253600006785,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58208.35999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67174.7837649817,
            "unit": "ns/iter",
            "extra": "iterations: 12935\ncpu: 67174.34866640887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77090.47091118508,
            "unit": "ns/iter",
            "extra": "iterations: 11293\ncpu: 77090.01151155579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 570.2225190115311,
            "unit": "ns/iter",
            "extra": "iterations: 1223464\ncpu: 570.2077870701556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 500.013071503313,
            "unit": "ns/iter",
            "extra": "iterations: 1383544\ncpu: 499.9716669654167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 518.7905789999832,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 518.7849999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 494.8881295117217,
            "unit": "ns/iter",
            "extra": "iterations: 1410220\ncpu: 494.8573981364619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 931.3738516295223,
            "unit": "ns/iter",
            "extra": "iterations: 751282\ncpu: 931.353872447363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3259.9210793184875,
            "unit": "ns/iter",
            "extra": "iterations: 251455\ncpu: 3259.7661609433144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14742.012907633201,
            "unit": "ns/iter",
            "extra": "iterations: 55626\ncpu: 14741.807787725167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11510.731497759687,
            "unit": "ns/iter",
            "extra": "iterations: 70532\ncpu: 11510.857483128206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10830.794444371119,
            "unit": "ns/iter",
            "extra": "iterations: 75527\ncpu: 10830.745296384097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11503.400858637557,
            "unit": "ns/iter",
            "extra": "iterations: 70344\ncpu: 11502.973956556387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41801.69983194838,
            "unit": "ns/iter",
            "extra": "iterations: 20232\ncpu: 41800.355871886124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 460224.98612589866,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 460211.47278548684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 358643.63337657624,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 358615.0021616941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 360928.4596607105,
            "unit": "ns/iter",
            "extra": "iterations: 2417\ncpu: 360912.7016963167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 360068.65114344115,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 360060.70686070726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224060.03633128866,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 224059.6544715452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 360234.0575569196,
            "unit": "ns/iter",
            "extra": "iterations: 2415\ncpu: 360220.7453416152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1845605.8467741574,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1845511.8951612876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 733140.4317829596,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 733113.798449612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2520298.084699605,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2520219.9453551965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3174.5777778649162,
            "unit": "ns/iter",
            "extra": "iterations: 255079\ncpu: 3174.3761736560014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14750.145685797153,
            "unit": "ns/iter",
            "extra": "iterations: 56059\ncpu: 14749.93667386147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11621.623589093622,
            "unit": "ns/iter",
            "extra": "iterations: 70965\ncpu: 11620.996265764781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11407.011696232663,
            "unit": "ns/iter",
            "extra": "iterations: 71818\ncpu: 11406.73229552476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11606.28727887802,
            "unit": "ns/iter",
            "extra": "iterations: 70945\ncpu: 11605.841144548605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41236.6204856918,
            "unit": "ns/iter",
            "extra": "iterations: 20795\ncpu: 41235.93171435448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 458054.1074249448,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 458046.7087941029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 374046.5791289294,
            "unit": "ns/iter",
            "extra": "iterations: 2319\ncpu: 374033.2470892648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 375268.62019851553,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 375266.03366422147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 372546.37596240104,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 372534.73053892405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222192.32294327003,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 222188.96269800724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 372122.88428696,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 372103.3731853114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1869446.985655706,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1869323.9754098405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 722264.4390054821,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 722249.961149963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3126.204042627357,
            "unit": "ns/iter",
            "extra": "iterations: 255329\ncpu: 3126.081643683252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14719.977317783665,
            "unit": "ns/iter",
            "extra": "iterations: 55991\ncpu: 14719.317390294906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11272.85955094713,
            "unit": "ns/iter",
            "extra": "iterations: 73087\ncpu: 11272.371283538867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11179.097277849252,
            "unit": "ns/iter",
            "extra": "iterations: 73655\ncpu: 11178.733283551686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11636.596802790455,
            "unit": "ns/iter",
            "extra": "iterations: 69936\ncpu: 11636.058682223767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41264.664884665406,
            "unit": "ns/iter",
            "extra": "iterations: 20202\ncpu: 41262.8403128404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 448881.57536382886,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 448875.57172557147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 369448.97402042104,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 369435.30664395104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 367477.70203737443,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 367464.51612903486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 366351.06973794085,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 366332.1217244293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224479.4374516314,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 224474.25844725335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 364587.3420940852,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 364565.8753709194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 286.8716283051495,
            "unit": "ns/iter",
            "extra": "iterations: 2413141\ncpu: 286.86032022165165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1478.4687383074227,
            "unit": "ns/iter",
            "extra": "iterations: 475726\ncpu: 1478.4203512105655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1174.2057103767186,
            "unit": "ns/iter",
            "extra": "iterations: 597894\ncpu: 1174.1619751996277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1120.8801916446735,
            "unit": "ns/iter",
            "extra": "iterations: 625741\ncpu: 1120.841370471172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 986.2048136426044,
            "unit": "ns/iter",
            "extra": "iterations: 709899\ncpu: 986.166201107475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7695.33189745243,
            "unit": "ns/iter",
            "extra": "iterations: 91001\ncpu: 7695.267084977086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18993.719219179537,
            "unit": "ns/iter",
            "extra": "iterations: 35501\ncpu: 18993.656516717867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4468.783358014581,
            "unit": "ns/iter",
            "extra": "iterations: 156664\ncpu: 4468.837129142604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4486.477881499948,
            "unit": "ns/iter",
            "extra": "iterations: 155865\ncpu: 4486.229108523378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4482.484721573933,
            "unit": "ns/iter",
            "extra": "iterations: 156397\ncpu: 4482.256053504854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9516.328202278328,
            "unit": "ns/iter",
            "extra": "iterations: 73799\ncpu: 9516.063903304892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8561.02479096441,
            "unit": "ns/iter",
            "extra": "iterations: 81804\ncpu: 8561.132707447086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3160.778360632184,
            "unit": "ns/iter",
            "extra": "iterations: 221134\ncpu: 3160.689446218108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16076.677819826684,
            "unit": "ns/iter",
            "extra": "iterations: 43336\ncpu: 16076.435296289443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12867.086142391507,
            "unit": "ns/iter",
            "extra": "iterations: 54526\ncpu: 12866.733301544218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12878.745761466453,
            "unit": "ns/iter",
            "extra": "iterations: 54382\ncpu: 12878.3439373321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13254.578745049817,
            "unit": "ns/iter",
            "extra": "iterations: 52289\ncpu: 13253.795253303788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28513.665284213323,
            "unit": "ns/iter",
            "extra": "iterations: 24594\ncpu: 28512.09238025576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100195.61584582421,
            "unit": "ns/iter",
            "extra": "iterations: 7005\ncpu: 100191.9200571019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84732.28214155651,
            "unit": "ns/iter",
            "extra": "iterations: 8237\ncpu: 84731.7348549226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85128.04183436731,
            "unit": "ns/iter",
            "extra": "iterations: 8199\ncpu: 85127.97902183136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85731.3891601541,
            "unit": "ns/iter",
            "extra": "iterations: 8192\ncpu: 85726.33056640536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55849.66768170435,
            "unit": "ns/iter",
            "extra": "iterations: 12479\ncpu: 55845.24400993673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84861.71586358597,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 84856.64522393577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2905.4530809056396,
            "unit": "ns/iter",
            "extra": "iterations: 233519\ncpu: 2905.3537399526203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14765.305921816233,
            "unit": "ns/iter",
            "extra": "iterations: 47401\ncpu: 14765.47541191116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11866.66768359857,
            "unit": "ns/iter",
            "extra": "iterations: 59001\ncpu: 11866.663276893476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11775.258029708357,
            "unit": "ns/iter",
            "extra": "iterations: 59311\ncpu: 11774.524118628822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12286.792086318113,
            "unit": "ns/iter",
            "extra": "iterations: 57091\ncpu: 12285.507347918065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27110.219152643207,
            "unit": "ns/iter",
            "extra": "iterations: 25845\ncpu: 27109.491197523945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 95497.32647220412,
            "unit": "ns/iter",
            "extra": "iterations: 7336\ncpu: 95491.289531079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 80912.33679593001,
            "unit": "ns/iter",
            "extra": "iterations: 8664\ncpu: 80907.47922437683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81743.19323220522,
            "unit": "ns/iter",
            "extra": "iterations: 8570\ncpu: 81741.38856475972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81192.11012805892,
            "unit": "ns/iter",
            "extra": "iterations: 8590\ncpu: 81187.48544819563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54193.78753454611,
            "unit": "ns/iter",
            "extra": "iterations: 13028\ncpu: 54191.441510593366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 81891.47654697423,
            "unit": "ns/iter",
            "extra": "iterations: 8549\ncpu: 81887.82313720856 ns\nthreads: 1"
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
        "date": 1702490336107,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 713.0418568072135,
            "unit": "ns/iter",
            "extra": "iterations: 979100\ncpu: 713.016750076601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10766.744040250245,
            "unit": "ns/iter",
            "extra": "iterations: 75926\ncpu: 10766.343545030686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23623.70810032174,
            "unit": "ns/iter",
            "extra": "iterations: 35406\ncpu: 23623.207930859182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37796.08851034087,
            "unit": "ns/iter",
            "extra": "iterations: 22777\ncpu: 37794.674452298364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46561.33959731744,
            "unit": "ns/iter",
            "extra": "iterations: 17135\ncpu: 46560.96294134808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58403.34949328413,
            "unit": "ns/iter",
            "extra": "iterations: 14604\ncpu: 58400.951794029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58211.253600006785,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58208.35999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67174.7837649817,
            "unit": "ns/iter",
            "extra": "iterations: 12935\ncpu: 67174.34866640887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77090.47091118508,
            "unit": "ns/iter",
            "extra": "iterations: 11293\ncpu: 77090.01151155579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 570.2225190115311,
            "unit": "ns/iter",
            "extra": "iterations: 1223464\ncpu: 570.2077870701556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 500.013071503313,
            "unit": "ns/iter",
            "extra": "iterations: 1383544\ncpu: 499.9716669654167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 518.7905789999832,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 518.7849999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 494.8881295117217,
            "unit": "ns/iter",
            "extra": "iterations: 1410220\ncpu: 494.8573981364619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 931.3738516295223,
            "unit": "ns/iter",
            "extra": "iterations: 751282\ncpu: 931.353872447363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3259.9210793184875,
            "unit": "ns/iter",
            "extra": "iterations: 251455\ncpu: 3259.7661609433144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14742.012907633201,
            "unit": "ns/iter",
            "extra": "iterations: 55626\ncpu: 14741.807787725167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11510.731497759687,
            "unit": "ns/iter",
            "extra": "iterations: 70532\ncpu: 11510.857483128206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10830.794444371119,
            "unit": "ns/iter",
            "extra": "iterations: 75527\ncpu: 10830.745296384097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11503.400858637557,
            "unit": "ns/iter",
            "extra": "iterations: 70344\ncpu: 11502.973956556387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41801.69983194838,
            "unit": "ns/iter",
            "extra": "iterations: 20232\ncpu: 41800.355871886124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 460224.98612589866,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 460211.47278548684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 358643.63337657624,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 358615.0021616941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 360928.4596607105,
            "unit": "ns/iter",
            "extra": "iterations: 2417\ncpu: 360912.7016963167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 360068.65114344115,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 360060.70686070726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224060.03633128866,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 224059.6544715452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 360234.0575569196,
            "unit": "ns/iter",
            "extra": "iterations: 2415\ncpu: 360220.7453416152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1845605.8467741574,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1845511.8951612876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 733140.4317829596,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 733113.798449612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2520298.084699605,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2520219.9453551965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3174.5777778649162,
            "unit": "ns/iter",
            "extra": "iterations: 255079\ncpu: 3174.3761736560014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14750.145685797153,
            "unit": "ns/iter",
            "extra": "iterations: 56059\ncpu: 14749.93667386147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11621.623589093622,
            "unit": "ns/iter",
            "extra": "iterations: 70965\ncpu: 11620.996265764781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11407.011696232663,
            "unit": "ns/iter",
            "extra": "iterations: 71818\ncpu: 11406.73229552476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11606.28727887802,
            "unit": "ns/iter",
            "extra": "iterations: 70945\ncpu: 11605.841144548605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41236.6204856918,
            "unit": "ns/iter",
            "extra": "iterations: 20795\ncpu: 41235.93171435448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 458054.1074249448,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 458046.7087941029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 374046.5791289294,
            "unit": "ns/iter",
            "extra": "iterations: 2319\ncpu: 374033.2470892648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 375268.62019851553,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 375266.03366422147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 372546.37596240104,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 372534.73053892405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222192.32294327003,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 222188.96269800724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 372122.88428696,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 372103.3731853114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1869446.985655706,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1869323.9754098405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 722264.4390054821,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 722249.961149963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3126.204042627357,
            "unit": "ns/iter",
            "extra": "iterations: 255329\ncpu: 3126.081643683252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14719.977317783665,
            "unit": "ns/iter",
            "extra": "iterations: 55991\ncpu: 14719.317390294906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11272.85955094713,
            "unit": "ns/iter",
            "extra": "iterations: 73087\ncpu: 11272.371283538867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11179.097277849252,
            "unit": "ns/iter",
            "extra": "iterations: 73655\ncpu: 11178.733283551686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11636.596802790455,
            "unit": "ns/iter",
            "extra": "iterations: 69936\ncpu: 11636.058682223767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41264.664884665406,
            "unit": "ns/iter",
            "extra": "iterations: 20202\ncpu: 41262.8403128404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 448881.57536382886,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 448875.57172557147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 369448.97402042104,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 369435.30664395104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 367477.70203737443,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 367464.51612903486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 366351.06973794085,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 366332.1217244293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224479.4374516314,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 224474.25844725335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 364587.3420940852,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 364565.8753709194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 286.8716283051495,
            "unit": "ns/iter",
            "extra": "iterations: 2413141\ncpu: 286.86032022165165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1478.4687383074227,
            "unit": "ns/iter",
            "extra": "iterations: 475726\ncpu: 1478.4203512105655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1174.2057103767186,
            "unit": "ns/iter",
            "extra": "iterations: 597894\ncpu: 1174.1619751996277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1120.8801916446735,
            "unit": "ns/iter",
            "extra": "iterations: 625741\ncpu: 1120.841370471172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 986.2048136426044,
            "unit": "ns/iter",
            "extra": "iterations: 709899\ncpu: 986.166201107475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7695.33189745243,
            "unit": "ns/iter",
            "extra": "iterations: 91001\ncpu: 7695.267084977086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18993.719219179537,
            "unit": "ns/iter",
            "extra": "iterations: 35501\ncpu: 18993.656516717867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4468.783358014581,
            "unit": "ns/iter",
            "extra": "iterations: 156664\ncpu: 4468.837129142604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4486.477881499948,
            "unit": "ns/iter",
            "extra": "iterations: 155865\ncpu: 4486.229108523378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4482.484721573933,
            "unit": "ns/iter",
            "extra": "iterations: 156397\ncpu: 4482.256053504854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9516.328202278328,
            "unit": "ns/iter",
            "extra": "iterations: 73799\ncpu: 9516.063903304892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8561.02479096441,
            "unit": "ns/iter",
            "extra": "iterations: 81804\ncpu: 8561.132707447086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3160.778360632184,
            "unit": "ns/iter",
            "extra": "iterations: 221134\ncpu: 3160.689446218108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16076.677819826684,
            "unit": "ns/iter",
            "extra": "iterations: 43336\ncpu: 16076.435296289443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12867.086142391507,
            "unit": "ns/iter",
            "extra": "iterations: 54526\ncpu: 12866.733301544218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12878.745761466453,
            "unit": "ns/iter",
            "extra": "iterations: 54382\ncpu: 12878.3439373321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13254.578745049817,
            "unit": "ns/iter",
            "extra": "iterations: 52289\ncpu: 13253.795253303788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28513.665284213323,
            "unit": "ns/iter",
            "extra": "iterations: 24594\ncpu: 28512.09238025576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100195.61584582421,
            "unit": "ns/iter",
            "extra": "iterations: 7005\ncpu: 100191.9200571019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84732.28214155651,
            "unit": "ns/iter",
            "extra": "iterations: 8237\ncpu: 84731.7348549226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85128.04183436731,
            "unit": "ns/iter",
            "extra": "iterations: 8199\ncpu: 85127.97902183136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85731.3891601541,
            "unit": "ns/iter",
            "extra": "iterations: 8192\ncpu: 85726.33056640536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55849.66768170435,
            "unit": "ns/iter",
            "extra": "iterations: 12479\ncpu: 55845.24400993673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84861.71586358597,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 84856.64522393577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2905.4530809056396,
            "unit": "ns/iter",
            "extra": "iterations: 233519\ncpu: 2905.3537399526203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14765.305921816233,
            "unit": "ns/iter",
            "extra": "iterations: 47401\ncpu: 14765.47541191116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11866.66768359857,
            "unit": "ns/iter",
            "extra": "iterations: 59001\ncpu: 11866.663276893476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11775.258029708357,
            "unit": "ns/iter",
            "extra": "iterations: 59311\ncpu: 11774.524118628822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12286.792086318113,
            "unit": "ns/iter",
            "extra": "iterations: 57091\ncpu: 12285.507347918065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27110.219152643207,
            "unit": "ns/iter",
            "extra": "iterations: 25845\ncpu: 27109.491197523945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 95497.32647220412,
            "unit": "ns/iter",
            "extra": "iterations: 7336\ncpu: 95491.289531079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 80912.33679593001,
            "unit": "ns/iter",
            "extra": "iterations: 8664\ncpu: 80907.47922437683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81743.19323220522,
            "unit": "ns/iter",
            "extra": "iterations: 8570\ncpu: 81741.38856475972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81192.11012805892,
            "unit": "ns/iter",
            "extra": "iterations: 8590\ncpu: 81187.48544819563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54193.78753454611,
            "unit": "ns/iter",
            "extra": "iterations: 13028\ncpu: 54191.441510593366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 81891.47654697423,
            "unit": "ns/iter",
            "extra": "iterations: 8549\ncpu: 81887.82313720856 ns\nthreads: 1"
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
        "date": 1702490336107,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 713.0418568072135,
            "unit": "ns/iter",
            "extra": "iterations: 979100\ncpu: 713.016750076601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10766.744040250245,
            "unit": "ns/iter",
            "extra": "iterations: 75926\ncpu: 10766.343545030686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23623.70810032174,
            "unit": "ns/iter",
            "extra": "iterations: 35406\ncpu: 23623.207930859182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37796.08851034087,
            "unit": "ns/iter",
            "extra": "iterations: 22777\ncpu: 37794.674452298364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46561.33959731744,
            "unit": "ns/iter",
            "extra": "iterations: 17135\ncpu: 46560.96294134808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58403.34949328413,
            "unit": "ns/iter",
            "extra": "iterations: 14604\ncpu: 58400.951794029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58211.253600006785,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58208.35999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67174.7837649817,
            "unit": "ns/iter",
            "extra": "iterations: 12935\ncpu: 67174.34866640887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77090.47091118508,
            "unit": "ns/iter",
            "extra": "iterations: 11293\ncpu: 77090.01151155579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 570.2225190115311,
            "unit": "ns/iter",
            "extra": "iterations: 1223464\ncpu: 570.2077870701556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 500.013071503313,
            "unit": "ns/iter",
            "extra": "iterations: 1383544\ncpu: 499.9716669654167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 518.7905789999832,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 518.7849999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 494.8881295117217,
            "unit": "ns/iter",
            "extra": "iterations: 1410220\ncpu: 494.8573981364619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 931.3738516295223,
            "unit": "ns/iter",
            "extra": "iterations: 751282\ncpu: 931.353872447363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3259.9210793184875,
            "unit": "ns/iter",
            "extra": "iterations: 251455\ncpu: 3259.7661609433144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14742.012907633201,
            "unit": "ns/iter",
            "extra": "iterations: 55626\ncpu: 14741.807787725167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11510.731497759687,
            "unit": "ns/iter",
            "extra": "iterations: 70532\ncpu: 11510.857483128206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10830.794444371119,
            "unit": "ns/iter",
            "extra": "iterations: 75527\ncpu: 10830.745296384097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11503.400858637557,
            "unit": "ns/iter",
            "extra": "iterations: 70344\ncpu: 11502.973956556387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41801.69983194838,
            "unit": "ns/iter",
            "extra": "iterations: 20232\ncpu: 41800.355871886124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 460224.98612589866,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 460211.47278548684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 358643.63337657624,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 358615.0021616941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 360928.4596607105,
            "unit": "ns/iter",
            "extra": "iterations: 2417\ncpu: 360912.7016963167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 360068.65114344115,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 360060.70686070726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224060.03633128866,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 224059.6544715452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 360234.0575569196,
            "unit": "ns/iter",
            "extra": "iterations: 2415\ncpu: 360220.7453416152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1845605.8467741574,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1845511.8951612876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 733140.4317829596,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 733113.798449612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2520298.084699605,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2520219.9453551965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3174.5777778649162,
            "unit": "ns/iter",
            "extra": "iterations: 255079\ncpu: 3174.3761736560014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14750.145685797153,
            "unit": "ns/iter",
            "extra": "iterations: 56059\ncpu: 14749.93667386147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11621.623589093622,
            "unit": "ns/iter",
            "extra": "iterations: 70965\ncpu: 11620.996265764781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11407.011696232663,
            "unit": "ns/iter",
            "extra": "iterations: 71818\ncpu: 11406.73229552476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11606.28727887802,
            "unit": "ns/iter",
            "extra": "iterations: 70945\ncpu: 11605.841144548605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41236.6204856918,
            "unit": "ns/iter",
            "extra": "iterations: 20795\ncpu: 41235.93171435448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 458054.1074249448,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 458046.7087941029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 374046.5791289294,
            "unit": "ns/iter",
            "extra": "iterations: 2319\ncpu: 374033.2470892648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 375268.62019851553,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 375266.03366422147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 372546.37596240104,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 372534.73053892405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222192.32294327003,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 222188.96269800724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 372122.88428696,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 372103.3731853114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1869446.985655706,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1869323.9754098405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 722264.4390054821,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 722249.961149963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3126.204042627357,
            "unit": "ns/iter",
            "extra": "iterations: 255329\ncpu: 3126.081643683252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14719.977317783665,
            "unit": "ns/iter",
            "extra": "iterations: 55991\ncpu: 14719.317390294906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11272.85955094713,
            "unit": "ns/iter",
            "extra": "iterations: 73087\ncpu: 11272.371283538867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11179.097277849252,
            "unit": "ns/iter",
            "extra": "iterations: 73655\ncpu: 11178.733283551686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11636.596802790455,
            "unit": "ns/iter",
            "extra": "iterations: 69936\ncpu: 11636.058682223767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41264.664884665406,
            "unit": "ns/iter",
            "extra": "iterations: 20202\ncpu: 41262.8403128404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 448881.57536382886,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 448875.57172557147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 369448.97402042104,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 369435.30664395104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 367477.70203737443,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 367464.51612903486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 366351.06973794085,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 366332.1217244293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224479.4374516314,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 224474.25844725335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 364587.3420940852,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 364565.8753709194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 286.8716283051495,
            "unit": "ns/iter",
            "extra": "iterations: 2413141\ncpu: 286.86032022165165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1478.4687383074227,
            "unit": "ns/iter",
            "extra": "iterations: 475726\ncpu: 1478.4203512105655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1174.2057103767186,
            "unit": "ns/iter",
            "extra": "iterations: 597894\ncpu: 1174.1619751996277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1120.8801916446735,
            "unit": "ns/iter",
            "extra": "iterations: 625741\ncpu: 1120.841370471172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 986.2048136426044,
            "unit": "ns/iter",
            "extra": "iterations: 709899\ncpu: 986.166201107475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7695.33189745243,
            "unit": "ns/iter",
            "extra": "iterations: 91001\ncpu: 7695.267084977086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18993.719219179537,
            "unit": "ns/iter",
            "extra": "iterations: 35501\ncpu: 18993.656516717867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4468.783358014581,
            "unit": "ns/iter",
            "extra": "iterations: 156664\ncpu: 4468.837129142604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4486.477881499948,
            "unit": "ns/iter",
            "extra": "iterations: 155865\ncpu: 4486.229108523378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4482.484721573933,
            "unit": "ns/iter",
            "extra": "iterations: 156397\ncpu: 4482.256053504854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9516.328202278328,
            "unit": "ns/iter",
            "extra": "iterations: 73799\ncpu: 9516.063903304892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8561.02479096441,
            "unit": "ns/iter",
            "extra": "iterations: 81804\ncpu: 8561.132707447086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3160.778360632184,
            "unit": "ns/iter",
            "extra": "iterations: 221134\ncpu: 3160.689446218108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16076.677819826684,
            "unit": "ns/iter",
            "extra": "iterations: 43336\ncpu: 16076.435296289443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12867.086142391507,
            "unit": "ns/iter",
            "extra": "iterations: 54526\ncpu: 12866.733301544218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12878.745761466453,
            "unit": "ns/iter",
            "extra": "iterations: 54382\ncpu: 12878.3439373321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13254.578745049817,
            "unit": "ns/iter",
            "extra": "iterations: 52289\ncpu: 13253.795253303788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28513.665284213323,
            "unit": "ns/iter",
            "extra": "iterations: 24594\ncpu: 28512.09238025576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100195.61584582421,
            "unit": "ns/iter",
            "extra": "iterations: 7005\ncpu: 100191.9200571019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84732.28214155651,
            "unit": "ns/iter",
            "extra": "iterations: 8237\ncpu: 84731.7348549226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85128.04183436731,
            "unit": "ns/iter",
            "extra": "iterations: 8199\ncpu: 85127.97902183136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85731.3891601541,
            "unit": "ns/iter",
            "extra": "iterations: 8192\ncpu: 85726.33056640536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55849.66768170435,
            "unit": "ns/iter",
            "extra": "iterations: 12479\ncpu: 55845.24400993673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84861.71586358597,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 84856.64522393577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2905.4530809056396,
            "unit": "ns/iter",
            "extra": "iterations: 233519\ncpu: 2905.3537399526203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14765.305921816233,
            "unit": "ns/iter",
            "extra": "iterations: 47401\ncpu: 14765.47541191116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11866.66768359857,
            "unit": "ns/iter",
            "extra": "iterations: 59001\ncpu: 11866.663276893476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11775.258029708357,
            "unit": "ns/iter",
            "extra": "iterations: 59311\ncpu: 11774.524118628822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12286.792086318113,
            "unit": "ns/iter",
            "extra": "iterations: 57091\ncpu: 12285.507347918065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27110.219152643207,
            "unit": "ns/iter",
            "extra": "iterations: 25845\ncpu: 27109.491197523945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 95497.32647220412,
            "unit": "ns/iter",
            "extra": "iterations: 7336\ncpu: 95491.289531079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 80912.33679593001,
            "unit": "ns/iter",
            "extra": "iterations: 8664\ncpu: 80907.47922437683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81743.19323220522,
            "unit": "ns/iter",
            "extra": "iterations: 8570\ncpu: 81741.38856475972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81192.11012805892,
            "unit": "ns/iter",
            "extra": "iterations: 8590\ncpu: 81187.48544819563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54193.78753454611,
            "unit": "ns/iter",
            "extra": "iterations: 13028\ncpu: 54191.441510593366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 81891.47654697423,
            "unit": "ns/iter",
            "extra": "iterations: 8549\ncpu: 81887.82313720856 ns\nthreads: 1"
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
        "date": 1702490336107,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 713.0418568072135,
            "unit": "ns/iter",
            "extra": "iterations: 979100\ncpu: 713.016750076601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10766.744040250245,
            "unit": "ns/iter",
            "extra": "iterations: 75926\ncpu: 10766.343545030686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23623.70810032174,
            "unit": "ns/iter",
            "extra": "iterations: 35406\ncpu: 23623.207930859182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37796.08851034087,
            "unit": "ns/iter",
            "extra": "iterations: 22777\ncpu: 37794.674452298364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46561.33959731744,
            "unit": "ns/iter",
            "extra": "iterations: 17135\ncpu: 46560.96294134808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58403.34949328413,
            "unit": "ns/iter",
            "extra": "iterations: 14604\ncpu: 58400.951794029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58211.253600006785,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58208.35999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67174.7837649817,
            "unit": "ns/iter",
            "extra": "iterations: 12935\ncpu: 67174.34866640887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77090.47091118508,
            "unit": "ns/iter",
            "extra": "iterations: 11293\ncpu: 77090.01151155579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 570.2225190115311,
            "unit": "ns/iter",
            "extra": "iterations: 1223464\ncpu: 570.2077870701556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 500.013071503313,
            "unit": "ns/iter",
            "extra": "iterations: 1383544\ncpu: 499.9716669654167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 518.7905789999832,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 518.7849999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 494.8881295117217,
            "unit": "ns/iter",
            "extra": "iterations: 1410220\ncpu: 494.8573981364619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 931.3738516295223,
            "unit": "ns/iter",
            "extra": "iterations: 751282\ncpu: 931.353872447363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3259.9210793184875,
            "unit": "ns/iter",
            "extra": "iterations: 251455\ncpu: 3259.7661609433144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14742.012907633201,
            "unit": "ns/iter",
            "extra": "iterations: 55626\ncpu: 14741.807787725167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11510.731497759687,
            "unit": "ns/iter",
            "extra": "iterations: 70532\ncpu: 11510.857483128206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10830.794444371119,
            "unit": "ns/iter",
            "extra": "iterations: 75527\ncpu: 10830.745296384097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11503.400858637557,
            "unit": "ns/iter",
            "extra": "iterations: 70344\ncpu: 11502.973956556387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41801.69983194838,
            "unit": "ns/iter",
            "extra": "iterations: 20232\ncpu: 41800.355871886124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 460224.98612589866,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 460211.47278548684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 358643.63337657624,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 358615.0021616941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 360928.4596607105,
            "unit": "ns/iter",
            "extra": "iterations: 2417\ncpu: 360912.7016963167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 360068.65114344115,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 360060.70686070726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224060.03633128866,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 224059.6544715452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 360234.0575569196,
            "unit": "ns/iter",
            "extra": "iterations: 2415\ncpu: 360220.7453416152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1845605.8467741574,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1845511.8951612876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 733140.4317829596,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 733113.798449612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2520298.084699605,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2520219.9453551965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3174.5777778649162,
            "unit": "ns/iter",
            "extra": "iterations: 255079\ncpu: 3174.3761736560014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14750.145685797153,
            "unit": "ns/iter",
            "extra": "iterations: 56059\ncpu: 14749.93667386147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11621.623589093622,
            "unit": "ns/iter",
            "extra": "iterations: 70965\ncpu: 11620.996265764781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11407.011696232663,
            "unit": "ns/iter",
            "extra": "iterations: 71818\ncpu: 11406.73229552476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11606.28727887802,
            "unit": "ns/iter",
            "extra": "iterations: 70945\ncpu: 11605.841144548605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41236.6204856918,
            "unit": "ns/iter",
            "extra": "iterations: 20795\ncpu: 41235.93171435448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 458054.1074249448,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 458046.7087941029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 374046.5791289294,
            "unit": "ns/iter",
            "extra": "iterations: 2319\ncpu: 374033.2470892648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 375268.62019851553,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 375266.03366422147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 372546.37596240104,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 372534.73053892405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222192.32294327003,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 222188.96269800724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 372122.88428696,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 372103.3731853114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1869446.985655706,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1869323.9754098405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 722264.4390054821,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 722249.961149963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3126.204042627357,
            "unit": "ns/iter",
            "extra": "iterations: 255329\ncpu: 3126.081643683252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14719.977317783665,
            "unit": "ns/iter",
            "extra": "iterations: 55991\ncpu: 14719.317390294906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11272.85955094713,
            "unit": "ns/iter",
            "extra": "iterations: 73087\ncpu: 11272.371283538867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11179.097277849252,
            "unit": "ns/iter",
            "extra": "iterations: 73655\ncpu: 11178.733283551686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11636.596802790455,
            "unit": "ns/iter",
            "extra": "iterations: 69936\ncpu: 11636.058682223767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41264.664884665406,
            "unit": "ns/iter",
            "extra": "iterations: 20202\ncpu: 41262.8403128404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 448881.57536382886,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 448875.57172557147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 369448.97402042104,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 369435.30664395104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 367477.70203737443,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 367464.51612903486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 366351.06973794085,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 366332.1217244293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224479.4374516314,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 224474.25844725335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 364587.3420940852,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 364565.8753709194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 286.8716283051495,
            "unit": "ns/iter",
            "extra": "iterations: 2413141\ncpu: 286.86032022165165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1478.4687383074227,
            "unit": "ns/iter",
            "extra": "iterations: 475726\ncpu: 1478.4203512105655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1174.2057103767186,
            "unit": "ns/iter",
            "extra": "iterations: 597894\ncpu: 1174.1619751996277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1120.8801916446735,
            "unit": "ns/iter",
            "extra": "iterations: 625741\ncpu: 1120.841370471172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 986.2048136426044,
            "unit": "ns/iter",
            "extra": "iterations: 709899\ncpu: 986.166201107475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7695.33189745243,
            "unit": "ns/iter",
            "extra": "iterations: 91001\ncpu: 7695.267084977086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18993.719219179537,
            "unit": "ns/iter",
            "extra": "iterations: 35501\ncpu: 18993.656516717867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4468.783358014581,
            "unit": "ns/iter",
            "extra": "iterations: 156664\ncpu: 4468.837129142604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4486.477881499948,
            "unit": "ns/iter",
            "extra": "iterations: 155865\ncpu: 4486.229108523378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4482.484721573933,
            "unit": "ns/iter",
            "extra": "iterations: 156397\ncpu: 4482.256053504854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9516.328202278328,
            "unit": "ns/iter",
            "extra": "iterations: 73799\ncpu: 9516.063903304892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8561.02479096441,
            "unit": "ns/iter",
            "extra": "iterations: 81804\ncpu: 8561.132707447086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3160.778360632184,
            "unit": "ns/iter",
            "extra": "iterations: 221134\ncpu: 3160.689446218108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16076.677819826684,
            "unit": "ns/iter",
            "extra": "iterations: 43336\ncpu: 16076.435296289443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12867.086142391507,
            "unit": "ns/iter",
            "extra": "iterations: 54526\ncpu: 12866.733301544218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12878.745761466453,
            "unit": "ns/iter",
            "extra": "iterations: 54382\ncpu: 12878.3439373321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13254.578745049817,
            "unit": "ns/iter",
            "extra": "iterations: 52289\ncpu: 13253.795253303788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28513.665284213323,
            "unit": "ns/iter",
            "extra": "iterations: 24594\ncpu: 28512.09238025576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100195.61584582421,
            "unit": "ns/iter",
            "extra": "iterations: 7005\ncpu: 100191.9200571019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84732.28214155651,
            "unit": "ns/iter",
            "extra": "iterations: 8237\ncpu: 84731.7348549226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85128.04183436731,
            "unit": "ns/iter",
            "extra": "iterations: 8199\ncpu: 85127.97902183136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85731.3891601541,
            "unit": "ns/iter",
            "extra": "iterations: 8192\ncpu: 85726.33056640536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55849.66768170435,
            "unit": "ns/iter",
            "extra": "iterations: 12479\ncpu: 55845.24400993673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84861.71586358597,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 84856.64522393577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2905.4530809056396,
            "unit": "ns/iter",
            "extra": "iterations: 233519\ncpu: 2905.3537399526203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14765.305921816233,
            "unit": "ns/iter",
            "extra": "iterations: 47401\ncpu: 14765.47541191116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11866.66768359857,
            "unit": "ns/iter",
            "extra": "iterations: 59001\ncpu: 11866.663276893476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11775.258029708357,
            "unit": "ns/iter",
            "extra": "iterations: 59311\ncpu: 11774.524118628822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12286.792086318113,
            "unit": "ns/iter",
            "extra": "iterations: 57091\ncpu: 12285.507347918065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27110.219152643207,
            "unit": "ns/iter",
            "extra": "iterations: 25845\ncpu: 27109.491197523945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 95497.32647220412,
            "unit": "ns/iter",
            "extra": "iterations: 7336\ncpu: 95491.289531079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 80912.33679593001,
            "unit": "ns/iter",
            "extra": "iterations: 8664\ncpu: 80907.47922437683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81743.19323220522,
            "unit": "ns/iter",
            "extra": "iterations: 8570\ncpu: 81741.38856475972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81192.11012805892,
            "unit": "ns/iter",
            "extra": "iterations: 8590\ncpu: 81187.48544819563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54193.78753454611,
            "unit": "ns/iter",
            "extra": "iterations: 13028\ncpu: 54191.441510593366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 81891.47654697423,
            "unit": "ns/iter",
            "extra": "iterations: 8549\ncpu: 81887.82313720856 ns\nthreads: 1"
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
        "date": 1702490336107,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 713.0418568072135,
            "unit": "ns/iter",
            "extra": "iterations: 979100\ncpu: 713.016750076601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10766.744040250245,
            "unit": "ns/iter",
            "extra": "iterations: 75926\ncpu: 10766.343545030686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23623.70810032174,
            "unit": "ns/iter",
            "extra": "iterations: 35406\ncpu: 23623.207930859182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37796.08851034087,
            "unit": "ns/iter",
            "extra": "iterations: 22777\ncpu: 37794.674452298364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46561.33959731744,
            "unit": "ns/iter",
            "extra": "iterations: 17135\ncpu: 46560.96294134808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58403.34949328413,
            "unit": "ns/iter",
            "extra": "iterations: 14604\ncpu: 58400.951794029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58211.253600006785,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58208.35999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67174.7837649817,
            "unit": "ns/iter",
            "extra": "iterations: 12935\ncpu: 67174.34866640887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77090.47091118508,
            "unit": "ns/iter",
            "extra": "iterations: 11293\ncpu: 77090.01151155579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 570.2225190115311,
            "unit": "ns/iter",
            "extra": "iterations: 1223464\ncpu: 570.2077870701556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 500.013071503313,
            "unit": "ns/iter",
            "extra": "iterations: 1383544\ncpu: 499.9716669654167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 518.7905789999832,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 518.7849999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 494.8881295117217,
            "unit": "ns/iter",
            "extra": "iterations: 1410220\ncpu: 494.8573981364619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 931.3738516295223,
            "unit": "ns/iter",
            "extra": "iterations: 751282\ncpu: 931.353872447363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3259.9210793184875,
            "unit": "ns/iter",
            "extra": "iterations: 251455\ncpu: 3259.7661609433144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14742.012907633201,
            "unit": "ns/iter",
            "extra": "iterations: 55626\ncpu: 14741.807787725167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11510.731497759687,
            "unit": "ns/iter",
            "extra": "iterations: 70532\ncpu: 11510.857483128206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10830.794444371119,
            "unit": "ns/iter",
            "extra": "iterations: 75527\ncpu: 10830.745296384097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11503.400858637557,
            "unit": "ns/iter",
            "extra": "iterations: 70344\ncpu: 11502.973956556387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41801.69983194838,
            "unit": "ns/iter",
            "extra": "iterations: 20232\ncpu: 41800.355871886124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 460224.98612589866,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 460211.47278548684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 358643.63337657624,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 358615.0021616941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 360928.4596607105,
            "unit": "ns/iter",
            "extra": "iterations: 2417\ncpu: 360912.7016963167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 360068.65114344115,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 360060.70686070726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224060.03633128866,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 224059.6544715452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 360234.0575569196,
            "unit": "ns/iter",
            "extra": "iterations: 2415\ncpu: 360220.7453416152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1845605.8467741574,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1845511.8951612876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 733140.4317829596,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 733113.798449612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2520298.084699605,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2520219.9453551965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3174.5777778649162,
            "unit": "ns/iter",
            "extra": "iterations: 255079\ncpu: 3174.3761736560014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14750.145685797153,
            "unit": "ns/iter",
            "extra": "iterations: 56059\ncpu: 14749.93667386147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11621.623589093622,
            "unit": "ns/iter",
            "extra": "iterations: 70965\ncpu: 11620.996265764781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11407.011696232663,
            "unit": "ns/iter",
            "extra": "iterations: 71818\ncpu: 11406.73229552476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11606.28727887802,
            "unit": "ns/iter",
            "extra": "iterations: 70945\ncpu: 11605.841144548605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41236.6204856918,
            "unit": "ns/iter",
            "extra": "iterations: 20795\ncpu: 41235.93171435448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 458054.1074249448,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 458046.7087941029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 374046.5791289294,
            "unit": "ns/iter",
            "extra": "iterations: 2319\ncpu: 374033.2470892648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 375268.62019851553,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 375266.03366422147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 372546.37596240104,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 372534.73053892405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 222192.32294327003,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 222188.96269800724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 372122.88428696,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 372103.3731853114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1869446.985655706,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1869323.9754098405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 722264.4390054821,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 722249.961149963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3126.204042627357,
            "unit": "ns/iter",
            "extra": "iterations: 255329\ncpu: 3126.081643683252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14719.977317783665,
            "unit": "ns/iter",
            "extra": "iterations: 55991\ncpu: 14719.317390294906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11272.85955094713,
            "unit": "ns/iter",
            "extra": "iterations: 73087\ncpu: 11272.371283538867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11179.097277849252,
            "unit": "ns/iter",
            "extra": "iterations: 73655\ncpu: 11178.733283551686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11636.596802790455,
            "unit": "ns/iter",
            "extra": "iterations: 69936\ncpu: 11636.058682223767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41264.664884665406,
            "unit": "ns/iter",
            "extra": "iterations: 20202\ncpu: 41262.8403128404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 448881.57536382886,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 448875.57172557147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 369448.97402042104,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 369435.30664395104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 367477.70203737443,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 367464.51612903486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 366351.06973794085,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 366332.1217244293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224479.4374516314,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 224474.25844725335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 364587.3420940852,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 364565.8753709194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 286.8716283051495,
            "unit": "ns/iter",
            "extra": "iterations: 2413141\ncpu: 286.86032022165165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1478.4687383074227,
            "unit": "ns/iter",
            "extra": "iterations: 475726\ncpu: 1478.4203512105655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1174.2057103767186,
            "unit": "ns/iter",
            "extra": "iterations: 597894\ncpu: 1174.1619751996277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1120.8801916446735,
            "unit": "ns/iter",
            "extra": "iterations: 625741\ncpu: 1120.841370471172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 986.2048136426044,
            "unit": "ns/iter",
            "extra": "iterations: 709899\ncpu: 986.166201107475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7695.33189745243,
            "unit": "ns/iter",
            "extra": "iterations: 91001\ncpu: 7695.267084977086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18993.719219179537,
            "unit": "ns/iter",
            "extra": "iterations: 35501\ncpu: 18993.656516717867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4468.783358014581,
            "unit": "ns/iter",
            "extra": "iterations: 156664\ncpu: 4468.837129142604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4486.477881499948,
            "unit": "ns/iter",
            "extra": "iterations: 155865\ncpu: 4486.229108523378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4482.484721573933,
            "unit": "ns/iter",
            "extra": "iterations: 156397\ncpu: 4482.256053504854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9516.328202278328,
            "unit": "ns/iter",
            "extra": "iterations: 73799\ncpu: 9516.063903304892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8561.02479096441,
            "unit": "ns/iter",
            "extra": "iterations: 81804\ncpu: 8561.132707447086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3160.778360632184,
            "unit": "ns/iter",
            "extra": "iterations: 221134\ncpu: 3160.689446218108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16076.677819826684,
            "unit": "ns/iter",
            "extra": "iterations: 43336\ncpu: 16076.435296289443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12867.086142391507,
            "unit": "ns/iter",
            "extra": "iterations: 54526\ncpu: 12866.733301544218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12878.745761466453,
            "unit": "ns/iter",
            "extra": "iterations: 54382\ncpu: 12878.3439373321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13254.578745049817,
            "unit": "ns/iter",
            "extra": "iterations: 52289\ncpu: 13253.795253303788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28513.665284213323,
            "unit": "ns/iter",
            "extra": "iterations: 24594\ncpu: 28512.09238025576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100195.61584582421,
            "unit": "ns/iter",
            "extra": "iterations: 7005\ncpu: 100191.9200571019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84732.28214155651,
            "unit": "ns/iter",
            "extra": "iterations: 8237\ncpu: 84731.7348549226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85128.04183436731,
            "unit": "ns/iter",
            "extra": "iterations: 8199\ncpu: 85127.97902183136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85731.3891601541,
            "unit": "ns/iter",
            "extra": "iterations: 8192\ncpu: 85726.33056640536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55849.66768170435,
            "unit": "ns/iter",
            "extra": "iterations: 12479\ncpu: 55845.24400993673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84861.71586358597,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 84856.64522393577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2905.4530809056396,
            "unit": "ns/iter",
            "extra": "iterations: 233519\ncpu: 2905.3537399526203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14765.305921816233,
            "unit": "ns/iter",
            "extra": "iterations: 47401\ncpu: 14765.47541191116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11866.66768359857,
            "unit": "ns/iter",
            "extra": "iterations: 59001\ncpu: 11866.663276893476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11775.258029708357,
            "unit": "ns/iter",
            "extra": "iterations: 59311\ncpu: 11774.524118628822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12286.792086318113,
            "unit": "ns/iter",
            "extra": "iterations: 57091\ncpu: 12285.507347918065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27110.219152643207,
            "unit": "ns/iter",
            "extra": "iterations: 25845\ncpu: 27109.491197523945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 95497.32647220412,
            "unit": "ns/iter",
            "extra": "iterations: 7336\ncpu: 95491.289531079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 80912.33679593001,
            "unit": "ns/iter",
            "extra": "iterations: 8664\ncpu: 80907.47922437683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81743.19323220522,
            "unit": "ns/iter",
            "extra": "iterations: 8570\ncpu: 81741.38856475972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81192.11012805892,
            "unit": "ns/iter",
            "extra": "iterations: 8590\ncpu: 81187.48544819563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54193.78753454611,
            "unit": "ns/iter",
            "extra": "iterations: 13028\ncpu: 54191.441510593366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 81891.47654697423,
            "unit": "ns/iter",
            "extra": "iterations: 8549\ncpu: 81887.82313720856 ns\nthreads: 1"
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
        "date": 1702492922345,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 693.1640305304217,
            "unit": "ns/iter",
            "extra": "iterations: 1013415\ncpu: 693.1557160689352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10698.734992942605,
            "unit": "ns/iter",
            "extra": "iterations: 77930\ncpu: 10698.276658539713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23681.594690264275,
            "unit": "ns/iter",
            "extra": "iterations: 35030\ncpu: 23679.803025977733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37530.67050668816,
            "unit": "ns/iter",
            "extra": "iterations: 20920\ncpu: 37529.38336520076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47173.35578667497,
            "unit": "ns/iter",
            "extra": "iterations: 16538\ncpu: 47170.54057322531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58963.17533143818,
            "unit": "ns/iter",
            "extra": "iterations: 14407\ncpu: 58960.040258207875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58663.42839999561,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58659.269999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68334.05800046587,
            "unit": "ns/iter",
            "extra": "iterations: 12793\ncpu: 68330.11803329948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78673.96802012573,
            "unit": "ns/iter",
            "extra": "iterations: 11132\ncpu: 78670.16708587862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 582.19161623451,
            "unit": "ns/iter",
            "extra": "iterations: 1204423\ncpu: 582.1908914060924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 487.3163764554585,
            "unit": "ns/iter",
            "extra": "iterations: 1437057\ncpu: 487.2849163255181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 490.2062414257649,
            "unit": "ns/iter",
            "extra": "iterations: 1430891\ncpu: 490.1744437556739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 495.07636857263003,
            "unit": "ns/iter",
            "extra": "iterations: 1409991\ncpu: 495.04003926266245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 963.8502809960665,
            "unit": "ns/iter",
            "extra": "iterations: 728124\ncpu: 963.7873494075195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3175.0412830380637,
            "unit": "ns/iter",
            "extra": "iterations: 251871\ncpu: 3174.858955576466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14318.434834430373,
            "unit": "ns/iter",
            "extra": "iterations: 57891\ncpu: 14317.621046449347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11287.795587633591,
            "unit": "ns/iter",
            "extra": "iterations: 73430\ncpu: 11287.107449271403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11170.352861945046,
            "unit": "ns/iter",
            "extra": "iterations: 73499\ncpu: 11169.80367079823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11569.788791812902,
            "unit": "ns/iter",
            "extra": "iterations: 70163\ncpu: 11569.200290751514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42500.33584924626,
            "unit": "ns/iter",
            "extra": "iterations: 20271\ncpu: 42498.07606926153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 438374.15922917775,
            "unit": "ns/iter",
            "extra": "iterations: 1972\ncpu: 438350.65922920965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 359381.9661576929,
            "unit": "ns/iter",
            "extra": "iterations: 2423\ncpu: 359373.545191911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 362747.2224979296,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 362729.23904053017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 364046.08291454305,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 364030.2763819094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224134.7315505234,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 224124.29930573417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 362158.1320201022,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 362143.126571668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1855915.688755051,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1855845.9839357422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 708041.1591251952,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 708018.476621418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2487356.800539255,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2487096.2264150986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3163.975702500911,
            "unit": "ns/iter",
            "extra": "iterations: 252989\ncpu: 3163.8711564534406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14357.493756576163,
            "unit": "ns/iter",
            "extra": "iterations: 57020\ncpu: 14357.064188004202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11298.063490969955,
            "unit": "ns/iter",
            "extra": "iterations: 72593\ncpu: 11297.62511536919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11201.395520453896,
            "unit": "ns/iter",
            "extra": "iterations: 73311\ncpu: 11200.982117281168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11867.154370869455,
            "unit": "ns/iter",
            "extra": "iterations: 70661\ncpu: 11866.772335517478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41589.23502027448,
            "unit": "ns/iter",
            "extra": "iterations: 19977\ncpu: 41588.436702207386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 457243.56114346965,
            "unit": "ns/iter",
            "extra": "iterations: 1889\ncpu: 457238.6977236653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 379883.4023336265,
            "unit": "ns/iter",
            "extra": "iterations: 2314\ncpu: 379875.1944684529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 398069.2333908648,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 398056.0828300258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 374468.565086198,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 374458.06034482695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221173.4708565627,
            "unit": "ns/iter",
            "extra": "iterations: 3946\ncpu: 221166.11758742962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 370684.19743040815,
            "unit": "ns/iter",
            "extra": "iterations: 2335\ncpu: 370672.591006425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1869443.4446722723,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1869211.270491801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 733170.5509404306,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 733146.2382445129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3124.4950100513934,
            "unit": "ns/iter",
            "extra": "iterations: 252708\ncpu: 3124.443626636298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14320.110817211913,
            "unit": "ns/iter",
            "extra": "iterations: 57843\ncpu: 14319.80706394894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11255.764193268007,
            "unit": "ns/iter",
            "extra": "iterations: 73556\ncpu: 11255.299363750108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11177.415927051698,
            "unit": "ns/iter",
            "extra": "iterations: 74025\ncpu: 11177.067207024622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11585.636422280215,
            "unit": "ns/iter",
            "extra": "iterations: 71308\ncpu: 11585.327032030078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41589.21709937628,
            "unit": "ns/iter",
            "extra": "iterations: 20106\ncpu: 41588.257236645826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 442598.98986830644,
            "unit": "ns/iter",
            "extra": "iterations: 1974\ncpu: 442587.28470111504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 366371.9608091355,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 366358.3649388955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 366006.012210547,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 365994.69473684335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 365387.2667509353,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 365374.7998314376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 223247.56357124937,
            "unit": "ns/iter",
            "extra": "iterations: 3909\ncpu: 223243.4126375032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 360916.646043788,
            "unit": "ns/iter",
            "extra": "iterations: 2376\ncpu: 360910.35353535373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 290.1343200640862,
            "unit": "ns/iter",
            "extra": "iterations: 2413154\ncpu: 290.128147644121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1456.5080374763838,
            "unit": "ns/iter",
            "extra": "iterations: 481370\ncpu: 1456.478800091407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1132.4017695406412,
            "unit": "ns/iter",
            "extra": "iterations: 620500\ncpu: 1132.372119258665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1146.9412224467158,
            "unit": "ns/iter",
            "extra": "iterations: 614129\ncpu: 1146.897964434179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 981.1532025457452,
            "unit": "ns/iter",
            "extra": "iterations: 713167\ncpu: 981.130787038666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7443.749177546749,
            "unit": "ns/iter",
            "extra": "iterations: 96662\ncpu: 7443.397612298535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18691.052375348216,
            "unit": "ns/iter",
            "extra": "iterations: 37384\ncpu: 18690.616306441574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4396.185060509873,
            "unit": "ns/iter",
            "extra": "iterations: 159229\ncpu: 4396.044690351627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4375.082787269223,
            "unit": "ns/iter",
            "extra": "iterations: 160085\ncpu: 4374.988287472322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4420.289638606096,
            "unit": "ns/iter",
            "extra": "iterations: 158608\ncpu: 4420.19381115709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9217.135147242665,
            "unit": "ns/iter",
            "extra": "iterations: 75895\ncpu: 9216.929969036182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8299.007862870372,
            "unit": "ns/iter",
            "extra": "iterations: 84066\ncpu: 8298.822353864774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3131.6378311466265,
            "unit": "ns/iter",
            "extra": "iterations: 222145\ncpu: 3131.5393099101816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15936.865140644395,
            "unit": "ns/iter",
            "extra": "iterations: 43905\ncpu: 15936.515203279809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12738.945237098182,
            "unit": "ns/iter",
            "extra": "iterations: 55019\ncpu: 12738.655737109146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12768.033508671171,
            "unit": "ns/iter",
            "extra": "iterations: 54941\ncpu: 12767.874629147655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13183.838133423302,
            "unit": "ns/iter",
            "extra": "iterations: 53124\ncpu: 13183.352157217074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28402.676943701546,
            "unit": "ns/iter",
            "extra": "iterations: 24618\ncpu: 28401.72637907202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99100.29896614229,
            "unit": "ns/iter",
            "extra": "iterations: 7061\ncpu: 99097.93230420638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84357.0376447787,
            "unit": "ns/iter",
            "extra": "iterations: 8288\ncpu: 84354.82625482637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 85783.18169550235,
            "unit": "ns/iter",
            "extra": "iterations: 8151\ncpu: 85781.03300208446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85103.30003659124,
            "unit": "ns/iter",
            "extra": "iterations: 8199\ncpu: 85101.56116599681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54494.49626749616,
            "unit": "ns/iter",
            "extra": "iterations: 12860\ncpu: 54492.43390357711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84649.57710478989,
            "unit": "ns/iter",
            "extra": "iterations: 8255\ncpu: 84647.6438522111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3024.9597419780134,
            "unit": "ns/iter",
            "extra": "iterations: 232848\ncpu: 3024.8874802446426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15308.780278063616,
            "unit": "ns/iter",
            "extra": "iterations: 45817\ncpu: 15308.328786258353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12227.741472705566,
            "unit": "ns/iter",
            "extra": "iterations: 57228\ncpu: 12227.372964283355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12297.244277760175,
            "unit": "ns/iter",
            "extra": "iterations: 56927\ncpu: 12296.957506982493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12670.726892429113,
            "unit": "ns/iter",
            "extra": "iterations: 55220\ncpu: 12670.38572980805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26983.25665859237,
            "unit": "ns/iter",
            "extra": "iterations: 26019\ncpu: 26982.92017371936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97191.86319308521,
            "unit": "ns/iter",
            "extra": "iterations: 7178\ncpu: 97188.64586235645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82512.86165961236,
            "unit": "ns/iter",
            "extra": "iterations: 8508\ncpu: 82510.80159849543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82528.05199388711,
            "unit": "ns/iter",
            "extra": "iterations: 8501\ncpu: 82525.54993530185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 83092.41573700086,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 83091.54996439526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 55153.66911300713,
            "unit": "ns/iter",
            "extra": "iterations: 12672\ncpu: 55152.8488005057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83450.21501910195,
            "unit": "ns/iter",
            "extra": "iterations: 8376\ncpu: 83446.91977077347 ns\nthreads: 1"
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
        "date": 1702504008498,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 682.1681600284819,
            "unit": "ns/iter",
            "extra": "iterations: 973977\ncpu: 682.1219597588034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10464.508686074381,
            "unit": "ns/iter",
            "extra": "iterations: 79898\ncpu: 10464.158051515682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23138.418181819354,
            "unit": "ns/iter",
            "extra": "iterations: 36025\ncpu: 23137.246356696734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 36502.35165352933,
            "unit": "ns/iter",
            "extra": "iterations: 23344\ncpu: 36499.55020562029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46107.10972072165,
            "unit": "ns/iter",
            "extra": "iterations: 17581\ncpu: 46104.18064956488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57540.69903306248,
            "unit": "ns/iter",
            "extra": "iterations: 14789\ncpu: 57537.41970383395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 57678.17839999907,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57673.97000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66271.92065068394,
            "unit": "ns/iter",
            "extra": "iterations: 13094\ncpu: 66264.79303497788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76043.89580066613,
            "unit": "ns/iter",
            "extra": "iterations: 11478\ncpu: 76040.12894232458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 574.7232508485315,
            "unit": "ns/iter",
            "extra": "iterations: 1221478\ncpu: 574.6912347172843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 476.5015018263382,
            "unit": "ns/iter",
            "extra": "iterations: 1469877\ncpu: 476.47782773660646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 474.88612386184184,
            "unit": "ns/iter",
            "extra": "iterations: 1474207\ncpu: 474.85733007644063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 479.61103667346373,
            "unit": "ns/iter",
            "extra": "iterations: 1457595\ncpu: 479.6048971079078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 951.7349166156672,
            "unit": "ns/iter",
            "extra": "iterations: 734550\ncpu: 951.6597917092104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3181.719186409474,
            "unit": "ns/iter",
            "extra": "iterations: 250052\ncpu: 3181.523043207015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 13829.59726548775,
            "unit": "ns/iter",
            "extra": "iterations: 59389\ncpu: 13828.705652561915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11225.869528244142,
            "unit": "ns/iter",
            "extra": "iterations: 74085\ncpu: 11224.96456772628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11705.594235255603,
            "unit": "ns/iter",
            "extra": "iterations: 69422\ncpu: 11704.84716660425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11745.210120239888,
            "unit": "ns/iter",
            "extra": "iterations: 69860\ncpu: 11744.534783853453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42142.78910404525,
            "unit": "ns/iter",
            "extra": "iterations: 19934\ncpu: 42139.73612922633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 442374.0682951223,
            "unit": "ns/iter",
            "extra": "iterations: 2006\ncpu: 442307.9262213365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 359758.2726899336,
            "unit": "ns/iter",
            "extra": "iterations: 2435\ncpu: 359730.75975359266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 360542.6300978704,
            "unit": "ns/iter",
            "extra": "iterations: 2452\ncpu: 360518.71941272356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 362471.8142503933,
            "unit": "ns/iter",
            "extra": "iterations: 2428\ncpu: 362441.3509060966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 219854.64132106007,
            "unit": "ns/iter",
            "extra": "iterations: 3906\ncpu: 219841.24423963076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 357987.39275421714,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 357963.3182379569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1860808.27108433,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1860635.542168672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 734454.3422501434,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 734449.4099134537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2474695.9649594724,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2474643.396226412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3167.1274680615948,
            "unit": "ns/iter",
            "extra": "iterations: 251969\ncpu: 3167.105874135305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14775.16941369192,
            "unit": "ns/iter",
            "extra": "iterations: 56182\ncpu: 14775.034708625466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11611.240680368559,
            "unit": "ns/iter",
            "extra": "iterations: 70550\ncpu: 11611.108433734898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11529.491698737409,
            "unit": "ns/iter",
            "extra": "iterations: 71194\ncpu: 11529.197685198265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12014.8140466547,
            "unit": "ns/iter",
            "extra": "iterations: 67646\ncpu: 12014.726665286853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41290.28399500875,
            "unit": "ns/iter",
            "extra": "iterations: 20025\ncpu: 41289.443196004824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 455060.5971638741,
            "unit": "ns/iter",
            "extra": "iterations: 1904\ncpu: 455051.3130252098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 379011.70677674544,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 379008.557775846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 374570.9617058629,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 374563.05483028624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 369516.43303380354,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 369513.43602909794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 220715.13103971383,
            "unit": "ns/iter",
            "extra": "iterations: 3953\ncpu: 220713.33164685068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 366361.0650887496,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 366349.95773457125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1867853.963190175,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1867798.5685071566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 725081.8188915104,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 725058.3918813427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3186.471962206754,
            "unit": "ns/iter",
            "extra": "iterations: 250626\ncpu: 3186.404443274046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14727.316657182806,
            "unit": "ns/iter",
            "extra": "iterations: 56228\ncpu: 14726.586398235742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11354.058803503147,
            "unit": "ns/iter",
            "extra": "iterations: 73431\ncpu: 11353.812422546327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11250.64799601335,
            "unit": "ns/iter",
            "extra": "iterations: 66218\ncpu: 11250.41076444474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11717.285684180924,
            "unit": "ns/iter",
            "extra": "iterations: 71180\ncpu: 11717.316661983697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42142.06068469738,
            "unit": "ns/iter",
            "extra": "iterations: 20038\ncpu: 42140.453139035526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 441551.2724489422,
            "unit": "ns/iter",
            "extra": "iterations: 1960\ncpu: 441542.2959183667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 365604.106400629,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 365589.7339983349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 365949.7557220298,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 365947.8152309598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 365391.9344194068,
            "unit": "ns/iter",
            "extra": "iterations: 2394\ncpu: 365384.58646616567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 222452.51816103287,
            "unit": "ns/iter",
            "extra": "iterations: 3937\ncpu: 222445.08509016893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 375722.3223003781,
            "unit": "ns/iter",
            "extra": "iterations: 2417\ncpu: 375720.2316921793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 288.8424808074519,
            "unit": "ns/iter",
            "extra": "iterations: 2403669\ncpu: 288.83327945736386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1450.728727108361,
            "unit": "ns/iter",
            "extra": "iterations: 482492\ncpu: 1450.7154522769188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1122.7797321610367,
            "unit": "ns/iter",
            "extra": "iterations: 624181\ncpu: 1122.7669538162838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1133.2379696598346,
            "unit": "ns/iter",
            "extra": "iterations: 617335\ncpu: 1133.229121951614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 962.0174957931906,
            "unit": "ns/iter",
            "extra": "iterations: 725603\ncpu: 962.0122849547224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7471.630594352303,
            "unit": "ns/iter",
            "extra": "iterations: 93867\ncpu: 7471.38930614595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18706.217000421286,
            "unit": "ns/iter",
            "extra": "iterations: 38152\ncpu: 18704.508282658768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4332.51885302958,
            "unit": "ns/iter",
            "extra": "iterations: 160876\ncpu: 4332.405082175069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4339.821507044608,
            "unit": "ns/iter",
            "extra": "iterations: 161110\ncpu: 4339.797653776908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4345.483044582515,
            "unit": "ns/iter",
            "extra": "iterations: 160981\ncpu: 4345.4345543884665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 8792.01404946174,
            "unit": "ns/iter",
            "extra": "iterations: 79576\ncpu: 8791.904594349966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8319.122828843423,
            "unit": "ns/iter",
            "extra": "iterations: 84402\ncpu: 8318.862112272325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3133.487196305599,
            "unit": "ns/iter",
            "extra": "iterations: 224115\ncpu: 3133.4381902148684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15742.75472501809,
            "unit": "ns/iter",
            "extra": "iterations: 44603\ncpu: 15742.299845301677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12551.59987075298,
            "unit": "ns/iter",
            "extra": "iterations: 55707\ncpu: 12551.458524063455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12656.141695305849,
            "unit": "ns/iter",
            "extra": "iterations: 55577\ncpu: 12655.992586861452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13012.491547826006,
            "unit": "ns/iter",
            "extra": "iterations: 53714\ncpu: 13012.525598540602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27990.01129039001,
            "unit": "ns/iter",
            "extra": "iterations: 24977\ncpu: 27989.9067141775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98646.28008474456,
            "unit": "ns/iter",
            "extra": "iterations: 7080\ncpu: 98643.10734463252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83642.27559530862,
            "unit": "ns/iter",
            "extra": "iterations: 8273\ncpu: 83630.30339659129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84863.81806091948,
            "unit": "ns/iter",
            "extra": "iterations: 8272\ncpu: 84858.07543520218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84547.71721558245,
            "unit": "ns/iter",
            "extra": "iterations: 8289\ncpu: 84538.4244179031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54343.52863639753,
            "unit": "ns/iter",
            "extra": "iterations: 12973\ncpu: 54341.8638711169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83722.27601103907,
            "unit": "ns/iter",
            "extra": "iterations: 8333\ncpu: 83717.02868114744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2949.8126656522295,
            "unit": "ns/iter",
            "extra": "iterations: 237319\ncpu: 2949.7865741891965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14968.691256014148,
            "unit": "ns/iter",
            "extra": "iterations: 46958\ncpu: 14967.937305677322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12164.899477315217,
            "unit": "ns/iter",
            "extra": "iterations: 58544\ncpu: 12164.814498496906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11895.417256637933,
            "unit": "ns/iter",
            "extra": "iterations: 58760\ncpu: 11894.937031994403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12375.744509037442,
            "unit": "ns/iter",
            "extra": "iterations: 56593\ncpu: 12375.601222765925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27149.123769666247,
            "unit": "ns/iter",
            "extra": "iterations: 25806\ncpu: 27148.28334495866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 95415.11774370392,
            "unit": "ns/iter",
            "extra": "iterations: 7304\ncpu: 95413.93756845516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81657.06082102691,
            "unit": "ns/iter",
            "extra": "iterations: 8599\ncpu: 81656.43679497615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82324.46972713833,
            "unit": "ns/iter",
            "extra": "iterations: 8539\ncpu: 82321.00948588767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81838.89845758052,
            "unit": "ns/iter",
            "extra": "iterations: 8558\ncpu: 81838.08132741164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54141.34339213348,
            "unit": "ns/iter",
            "extra": "iterations: 12924\ncpu: 54140.74589910226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82435.46495162115,
            "unit": "ns/iter",
            "extra": "iterations: 8474\ncpu: 82431.96837385048 ns\nthreads: 1"
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
        "date": 1705575624127,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 693.2214195565596,
            "unit": "ns/iter",
            "extra": "iterations: 1007061\ncpu: 693.2079586042952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10654.744384386384,
            "unit": "ns/iter",
            "extra": "iterations: 78442\ncpu: 10654.390505086561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23646.624004535734,
            "unit": "ns/iter",
            "extra": "iterations: 35285\ncpu: 23646.11307921213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 36891.0184565237,
            "unit": "ns/iter",
            "extra": "iterations: 22702\ncpu: 36890.36208263589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46750.47792177809,
            "unit": "ns/iter",
            "extra": "iterations: 17438\ncpu: 46748.6982452116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58566.65302319154,
            "unit": "ns/iter",
            "extra": "iterations: 14488\ncpu: 58563.88045278851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58589.81310000217,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58587.209999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67452.26137076288,
            "unit": "ns/iter",
            "extra": "iterations: 12752\ncpu: 67449.58437892103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76680.50648658528,
            "unit": "ns/iter",
            "extra": "iterations: 11254\ncpu: 76678.30993424558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 569.1846488630894,
            "unit": "ns/iter",
            "extra": "iterations: 1226046\ncpu: 569.1786441944257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 473.7471786973051,
            "unit": "ns/iter",
            "extra": "iterations: 1479104\ncpu: 473.74971604430885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 472.0138357195033,
            "unit": "ns/iter",
            "extra": "iterations: 1475890\ncpu: 472.00773770402975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 474.48693692093656,
            "unit": "ns/iter",
            "extra": "iterations: 1464892\ncpu: 474.4698585288199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 945.7445096909397,
            "unit": "ns/iter",
            "extra": "iterations: 739758\ncpu: 945.711300181953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3196.1435213429663,
            "unit": "ns/iter",
            "extra": "iterations: 250785\ncpu: 3196.06236417649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14127.0359215253,
            "unit": "ns/iter",
            "extra": "iterations: 57904\ncpu: 14126.443768996942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11569.672332735443,
            "unit": "ns/iter",
            "extra": "iterations: 70831\ncpu: 11569.031921051523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10746.030451388882,
            "unit": "ns/iter",
            "extra": "iterations: 76187\ncpu: 10745.581267145319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11660.276603629,
            "unit": "ns/iter",
            "extra": "iterations: 70169\ncpu: 11659.998004816936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41962.265997304006,
            "unit": "ns/iter",
            "extra": "iterations: 20019\ncpu: 41960.45257005839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 437091.3418932747,
            "unit": "ns/iter",
            "extra": "iterations: 1986\ncpu: 437072.50755287026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 358092.8872366365,
            "unit": "ns/iter",
            "extra": "iterations: 2421\ncpu: 358085.9149111935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 358441.7332506549,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 358431.0587262191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 362188.7673640044,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 362174.6861924685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 224141.91739355595,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 224136.63417137013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 356255.87863879127,
            "unit": "ns/iter",
            "extra": "iterations: 2439\ncpu: 356242.4764247643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1852261.8416834425,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1852183.3667334646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 728933.0756630193,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 728884.321372857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2443189.852941149,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2443064.705882353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3092.552224486831,
            "unit": "ns/iter",
            "extra": "iterations: 252238\ncpu: 3092.4630705920604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14104.288508090121,
            "unit": "ns/iter",
            "extra": "iterations: 57423\ncpu: 14103.752851644827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11565.8882937374,
            "unit": "ns/iter",
            "extra": "iterations: 70757\ncpu: 11565.388583461712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11476.095343896763,
            "unit": "ns/iter",
            "extra": "iterations: 71562\ncpu: 11475.61555015234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12020.091446422764,
            "unit": "ns/iter",
            "extra": "iterations: 68182\ncpu: 12019.785280572583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41481.938887214026,
            "unit": "ns/iter",
            "extra": "iterations: 19914\ncpu: 41480.60158682355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 445535.5630817359,
            "unit": "ns/iter",
            "extra": "iterations: 1934\ncpu: 445526.57704239915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 366363.41544275125,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 366348.8040285348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 367851.72198817274,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 367838.205560237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 361479.39983339247,
            "unit": "ns/iter",
            "extra": "iterations: 2401\ncpu: 361461.4327363589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 220319.5881753161,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 220311.62079510622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 368929.7227138634,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 368919.72187104734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1856714.6883908834,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1856622.1995926602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 707718.8849962113,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 707683.0921553657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3308.0373452089752,
            "unit": "ns/iter",
            "extra": "iterations: 245654\ncpu: 3307.9986485056347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 15117.173203729306,
            "unit": "ns/iter",
            "extra": "iterations: 52776\ncpu: 15116.839093527318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12055.149549576072,
            "unit": "ns/iter",
            "extra": "iterations: 69268\ncpu: 12054.678928220812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11973.513975755355,
            "unit": "ns/iter",
            "extra": "iterations: 69871\ncpu: 11973.134776946119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12374.657480314852,
            "unit": "ns/iter",
            "extra": "iterations: 67056\ncpu: 12374.19022906229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42980.50864768195,
            "unit": "ns/iter",
            "extra": "iterations: 19485\ncpu: 42980.36438285876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 443463.3074186938,
            "unit": "ns/iter",
            "extra": "iterations: 1968\ncpu: 443451.8800813013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 366950.4802686545,
            "unit": "ns/iter",
            "extra": "iterations: 2382\ncpu: 366937.5314861451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 366207.6333053182,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 366200.79899074946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 364842.63224714104,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 364830.765975457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224367.20449846247,
            "unit": "ns/iter",
            "extra": "iterations: 3868\ncpu: 224359.10031023767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 360971.39227893285,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 360958.57202158635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 288.20276599698406,
            "unit": "ns/iter",
            "extra": "iterations: 2430516\ncpu: 288.1930421359096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1437.4267581432173,
            "unit": "ns/iter",
            "extra": "iterations: 487119\ncpu: 1437.4214514317798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1131.2639242728233,
            "unit": "ns/iter",
            "extra": "iterations: 618219\ncpu: 1131.2510615170386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1144.759420959941,
            "unit": "ns/iter",
            "extra": "iterations: 614189\ncpu: 1144.7090390742887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 966.1588083322334,
            "unit": "ns/iter",
            "extra": "iterations: 726914\ncpu: 966.1387729497557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7607.085555276426,
            "unit": "ns/iter",
            "extra": "iterations: 95412\ncpu: 7606.823041126877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18493.083392862452,
            "unit": "ns/iter",
            "extra": "iterations: 37797\ncpu: 18492.687250310923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4383.042232569771,
            "unit": "ns/iter",
            "extra": "iterations: 159995\ncpu: 4382.87321478797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4404.95491769845,
            "unit": "ns/iter",
            "extra": "iterations: 159109\ncpu: 4404.8501341847195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4419.14189163614,
            "unit": "ns/iter",
            "extra": "iterations: 158614\ncpu: 4418.985083283895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9371.742169222407,
            "unit": "ns/iter",
            "extra": "iterations: 74801\ncpu: 9371.388083046953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8295.817905289321,
            "unit": "ns/iter",
            "extra": "iterations: 84489\ncpu: 8295.442010202443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3121.253228625651,
            "unit": "ns/iter",
            "extra": "iterations: 224244\ncpu: 3121.2166211805034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15777.072453550038,
            "unit": "ns/iter",
            "extra": "iterations: 43973\ncpu: 15776.63111454761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12554.111240840874,
            "unit": "ns/iter",
            "extra": "iterations: 55672\ncpu: 12553.951717200896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12536.307376828358,
            "unit": "ns/iter",
            "extra": "iterations: 55837\ncpu: 12536.0567365726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12980.123374704304,
            "unit": "ns/iter",
            "extra": "iterations: 54144\ncpu: 12979.534205082626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28159.734336646423,
            "unit": "ns/iter",
            "extra": "iterations: 24851\ncpu: 28159.08816546619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98106.21502954932,
            "unit": "ns/iter",
            "extra": "iterations: 7106\ncpu: 98102.74415986452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83808.68668500362,
            "unit": "ns/iter",
            "extra": "iterations: 8359\ncpu: 83806.14906089184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84162.16099664613,
            "unit": "ns/iter",
            "extra": "iterations: 8348\ncpu: 84160.44561571593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84598.7966244716,
            "unit": "ns/iter",
            "extra": "iterations: 8295\ncpu: 84597.14285714296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54785.77692126339,
            "unit": "ns/iter",
            "extra": "iterations: 12713\ncpu: 54784.087154880755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84531.02378938951,
            "unit": "ns/iter",
            "extra": "iterations: 8281\ncpu: 84528.12462263116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3004.634105421592,
            "unit": "ns/iter",
            "extra": "iterations: 233652\ncpu: 3004.520825843592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15019.072209738608,
            "unit": "ns/iter",
            "extra": "iterations: 46725\ncpu: 15018.446227929378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11985.184260436425,
            "unit": "ns/iter",
            "extra": "iterations: 57473\ncpu: 11985.029492109305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11938.083575010935,
            "unit": "ns/iter",
            "extra": "iterations: 58618\ncpu: 11937.940564331728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12398.292500132786,
            "unit": "ns/iter",
            "extra": "iterations: 56441\ncpu: 12398.04043160115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27298.707217217157,
            "unit": "ns/iter",
            "extra": "iterations: 25647\ncpu: 27297.941279681505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97111.60113683634,
            "unit": "ns/iter",
            "extra": "iterations: 7213\ncpu: 97107.90239844914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81953.3886211318,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 81951.4635006468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81359.35244285001,
            "unit": "ns/iter",
            "extra": "iterations: 8617\ncpu: 81355.33248230247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82720.36595142276,
            "unit": "ns/iter",
            "extra": "iterations: 8482\ncpu: 82716.17543032269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54540.390948737615,
            "unit": "ns/iter",
            "extra": "iterations: 12838\ncpu: 54538.43277769167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82779.8240065805,
            "unit": "ns/iter",
            "extra": "iterations: 8506\ncpu: 82775.48789089997 ns\nthreads: 1"
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
        "date": 1705773447560,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 697.6526310742772,
            "unit": "ns/iter",
            "extra": "iterations: 1001169\ncpu: 697.6315686961942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10564.446372319815,
            "unit": "ns/iter",
            "extra": "iterations: 78728\ncpu: 10564.22238593639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23503.695373002418,
            "unit": "ns/iter",
            "extra": "iterations: 35509\ncpu: 23503.354079247507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37627.198837470096,
            "unit": "ns/iter",
            "extra": "iterations: 22365\ncpu: 37625.73664207468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46767.54532240093,
            "unit": "ns/iter",
            "extra": "iterations: 17199\ncpu: 46765.62590848305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58072.796268452534,
            "unit": "ns/iter",
            "extra": "iterations: 14632\ncpu: 58071.01558228539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 57910.46859999369,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57907.41000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67245.99569991097,
            "unit": "ns/iter",
            "extra": "iterations: 13023\ncpu: 67243.12370421561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78700.47711376862,
            "unit": "ns/iter",
            "extra": "iterations: 11295\ncpu: 78695.5289951306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 571.5901504888544,
            "unit": "ns/iter",
            "extra": "iterations: 1225340\ncpu: 571.5430003101183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 464.7413805141445,
            "unit": "ns/iter",
            "extra": "iterations: 1446519\ncpu: 464.73057042458447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 463.26240780264806,
            "unit": "ns/iter",
            "extra": "iterations: 1512516\ncpu: 463.24356238215034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 472.4576870465126,
            "unit": "ns/iter",
            "extra": "iterations: 1482572\ncpu: 472.44471094827117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 950.8492651363285,
            "unit": "ns/iter",
            "extra": "iterations: 734694\ncpu: 950.8212943075622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3240.656879839175,
            "unit": "ns/iter",
            "extra": "iterations: 246045\ncpu: 3240.623463187627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14400.414105166376,
            "unit": "ns/iter",
            "extra": "iterations: 57128\ncpu: 14400.140036409453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11908.770317352011,
            "unit": "ns/iter",
            "extra": "iterations: 68599\ncpu: 11908.564264785224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11152.532122105078,
            "unit": "ns/iter",
            "extra": "iterations: 73314\ncpu: 11152.181029544145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12073.161570956543,
            "unit": "ns/iter",
            "extra": "iterations: 67704\ncpu: 12073.032612548712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41752.27332005948,
            "unit": "ns/iter",
            "extra": "iterations: 20090\ncpu: 41750.12941762062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 453388.471378787,
            "unit": "ns/iter",
            "extra": "iterations: 2009\ncpu: 453324.2906918871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 366810.8114144034,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 366804.5492142267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 357953.85554171226,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 357947.5300954751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 361238.663764506,
            "unit": "ns/iter",
            "extra": "iterations: 2412\ncpu: 361232.79436152574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 221405.28487927982,
            "unit": "ns/iter",
            "extra": "iterations: 3935\ncpu: 221397.63659466282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 359482.42577958776,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 359472.88981289003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1863428.3126252894,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1863238.677354707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 716842.2796934521,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 716820.0766283511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2476352.0187165835,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2476271.122994653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3269.85308328923,
            "unit": "ns/iter",
            "extra": "iterations: 242144\ncpu: 3269.728343465046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14508.396296169085,
            "unit": "ns/iter",
            "extra": "iterations: 57886\ncpu: 14508.22996924991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11857.413452086035,
            "unit": "ns/iter",
            "extra": "iterations: 69164\ncpu: 11856.954484992233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11753.39730154418,
            "unit": "ns/iter",
            "extra": "iterations: 69373\ncpu: 11753.236850071386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12343.932270668132,
            "unit": "ns/iter",
            "extra": "iterations: 64241\ncpu: 12343.796018119312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41554.62318541257,
            "unit": "ns/iter",
            "extra": "iterations: 19357\ncpu: 41554.04246525805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 455885.81240148575,
            "unit": "ns/iter",
            "extra": "iterations: 1903\ncpu: 455873.5155018387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 374095.3664383832,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 374090.8818493147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 373596.18897978746,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 373576.452862678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 370718.62675756076,
            "unit": "ns/iter",
            "extra": "iterations: 2347\ncpu: 370709.2458457589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221108.15597483475,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 221104.98113207647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 374501.56761339295,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 374487.367528614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1861809.2688390925,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1861534.4195519385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 723368.468018655,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 723347.6599063934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3231.987344566565,
            "unit": "ns/iter",
            "extra": "iterations: 249142\ncpu: 3231.919949265892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14052.89997933108,
            "unit": "ns/iter",
            "extra": "iterations: 58058\ncpu: 14052.511281821657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11530.261136907662,
            "unit": "ns/iter",
            "extra": "iterations: 71070\ncpu: 11529.520191360647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11423.901976912543,
            "unit": "ns/iter",
            "extra": "iterations: 71728\ncpu: 11423.734106625014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12005.987503266995,
            "unit": "ns/iter",
            "extra": "iterations: 68898\ncpu: 12005.103196028871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42007.524502717184,
            "unit": "ns/iter",
            "extra": "iterations: 20059\ncpu: 42005.359190388626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 443645.8098445768,
            "unit": "ns/iter",
            "extra": "iterations: 1930\ncpu: 443610.8290155404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 369125.4932318143,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 369099.3231810517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 368599.3036693419,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 368584.05735976354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 365465.3850357477,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 365451.49222362274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 222721.77766444147,
            "unit": "ns/iter",
            "extra": "iterations: 3922\ncpu: 222710.27536970962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 365677.04138799576,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 365658.1939799349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 287.7367849100339,
            "unit": "ns/iter",
            "extra": "iterations: 2433033\ncpu: 287.7159084977477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1462.337985046656,
            "unit": "ns/iter",
            "extra": "iterations: 478820\ncpu: 1462.2528298734508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1115.5712935678446,
            "unit": "ns/iter",
            "extra": "iterations: 627497\ncpu: 1115.5288391816966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1154.9227108971836,
            "unit": "ns/iter",
            "extra": "iterations: 612609\ncpu: 1154.8801927493719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 959.7945272730884,
            "unit": "ns/iter",
            "extra": "iterations: 729216\ncpu: 959.7643222309952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7602.741779288238,
            "unit": "ns/iter",
            "extra": "iterations: 92936\ncpu: 7602.237023327892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18679.15639570526,
            "unit": "ns/iter",
            "extra": "iterations: 37533\ncpu: 18678.064636453462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4429.831466011137,
            "unit": "ns/iter",
            "extra": "iterations: 157891\ncpu: 4429.614734215399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4436.253180508151,
            "unit": "ns/iter",
            "extra": "iterations: 157915\ncpu: 4436.126397112305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4428.611259375364,
            "unit": "ns/iter",
            "extra": "iterations: 158126\ncpu: 4428.515234686245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9209.175295664958,
            "unit": "ns/iter",
            "extra": "iterations: 76100\ncpu: 9208.825229960608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8409.501339033051,
            "unit": "ns/iter",
            "extra": "iterations: 83269\ncpu: 8402.615619258053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3121.9979153953122,
            "unit": "ns/iter",
            "extra": "iterations: 224503\ncpu: 3121.7106230205986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15665.161578090841,
            "unit": "ns/iter",
            "extra": "iterations: 44839\ncpu: 15664.04692343721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12615.707256120837,
            "unit": "ns/iter",
            "extra": "iterations: 55622\ncpu: 12614.99946064513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12656.612989388816,
            "unit": "ns/iter",
            "extra": "iterations: 54660\ncpu: 12655.742773508973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12986.805782308053,
            "unit": "ns/iter",
            "extra": "iterations: 54269\ncpu: 12986.679319685432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28310.64168315577,
            "unit": "ns/iter",
            "extra": "iterations: 24763\ncpu: 28310.14416670049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98106.9392071721,
            "unit": "ns/iter",
            "extra": "iterations: 7139\ncpu: 98105.9812298632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84099.91029659125,
            "unit": "ns/iter",
            "extra": "iterations: 8294\ncpu: 84095.21340728084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84194.13932261225,
            "unit": "ns/iter",
            "extra": "iterations: 8326\ncpu: 84188.2656737932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84686.77844890387,
            "unit": "ns/iter",
            "extra": "iterations: 8278\ncpu: 84681.26359023928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54646.25287805932,
            "unit": "ns/iter",
            "extra": "iterations: 12769\ncpu: 54645.64962017401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83866.1009580762,
            "unit": "ns/iter",
            "extra": "iterations: 8350\ncpu: 83860.02395209465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3018.4868849277814,
            "unit": "ns/iter",
            "extra": "iterations: 231985\ncpu: 3018.318425760314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15190.064127909569,
            "unit": "ns/iter",
            "extra": "iterations: 46033\ncpu: 15188.571242369506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12151.871305973014,
            "unit": "ns/iter",
            "extra": "iterations: 57796\ncpu: 12151.35822548273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12062.529890975526,
            "unit": "ns/iter",
            "extra": "iterations: 58061\ncpu: 12061.319991043918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12597.207594618701,
            "unit": "ns/iter",
            "extra": "iterations: 55671\ncpu: 12596.366151138065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27167.781114047586,
            "unit": "ns/iter",
            "extra": "iterations: 25744\ncpu: 27165.7123990059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97665.91089109519,
            "unit": "ns/iter",
            "extra": "iterations: 7171\ncpu: 97664.99790823995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82661.39202736208,
            "unit": "ns/iter",
            "extra": "iterations: 8479\ncpu: 82657.22372921449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81955.98705425105,
            "unit": "ns/iter",
            "extra": "iterations: 8497\ncpu: 81947.19312698668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82766.59002835018,
            "unit": "ns/iter",
            "extra": "iterations: 8464\ncpu: 82762.09829867684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54623.27218981254,
            "unit": "ns/iter",
            "extra": "iterations: 12686\ncpu: 54619.47028220057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82866.4004262289,
            "unit": "ns/iter",
            "extra": "iterations: 8446\ncpu: 82863.67511247844 ns\nthreads: 1"
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
        "date": 1705774870911,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 692.2768496868495,
            "unit": "ns/iter",
            "extra": "iterations: 1009779\ncpu: 692.2472144895071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10508.608010613272,
            "unit": "ns/iter",
            "extra": "iterations: 79145\ncpu: 10507.924695179732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23562.92978591198,
            "unit": "ns/iter",
            "extra": "iterations: 35406\ncpu: 23561.424617296503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37100.44633879606,
            "unit": "ns/iter",
            "extra": "iterations: 22875\ncpu: 37098.41748633881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46787.18624040201,
            "unit": "ns/iter",
            "extra": "iterations: 16672\ncpu: 46784.04510556625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57781.08137583408,
            "unit": "ns/iter",
            "extra": "iterations: 14304\ncpu: 57777.57969798658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 57800.623000002815,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57799.65000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66967.1795071725,
            "unit": "ns/iter",
            "extra": "iterations: 12824\ncpu: 66965.88427947594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76837.56015103484,
            "unit": "ns/iter",
            "extra": "iterations: 11388\ncpu: 76835.61643835605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 578.9079401963859,
            "unit": "ns/iter",
            "extra": "iterations: 1207552\ncpu: 578.8995422143317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 471.58216850586734,
            "unit": "ns/iter",
            "extra": "iterations: 1484340\ncpu: 471.56493795222025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 471.85644475102924,
            "unit": "ns/iter",
            "extra": "iterations: 1481764\ncpu: 471.83201913395146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 475.0541951001983,
            "unit": "ns/iter",
            "extra": "iterations: 1470096\ncpu: 475.03095035970466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 953.5684221269614,
            "unit": "ns/iter",
            "extra": "iterations: 734850\ncpu: 953.5219432537247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3193.408944916637,
            "unit": "ns/iter",
            "extra": "iterations: 248767\ncpu: 3193.216543994983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14927.05741901081,
            "unit": "ns/iter",
            "extra": "iterations: 54111\ncpu: 14926.696974737095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11859.436609883322,
            "unit": "ns/iter",
            "extra": "iterations: 68741\ncpu: 11859.241209758378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11765.195363856094,
            "unit": "ns/iter",
            "extra": "iterations: 69368\ncpu: 11765.015569138506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11726.506156797772,
            "unit": "ns/iter",
            "extra": "iterations: 67730\ncpu: 11725.778827698174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42095.136938022806,
            "unit": "ns/iter",
            "extra": "iterations: 19863\ncpu: 42093.41992649664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 437267.99442754866,
            "unit": "ns/iter",
            "extra": "iterations: 1974\ncpu: 437237.1833839904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 357567.54209869506,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 357544.71173786826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 358245.82873610954,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 358227.6245368464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 362208.70728641044,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 362200.1675041883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 223074.82615466716,
            "unit": "ns/iter",
            "extra": "iterations: 3854\ncpu: 223063.7519460297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 357984.49027719616,
            "unit": "ns/iter",
            "extra": "iterations: 2417\ncpu: 357962.3913942894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1835246.241999812,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1835070.9999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 737360.5948072921,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 737320.7710464185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2470642.2486630003,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2470439.0374331484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3226.9339536080893,
            "unit": "ns/iter",
            "extra": "iterations: 248492\ncpu: 3226.7437181076225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14224.1207721928,
            "unit": "ns/iter",
            "extra": "iterations: 57654\ncpu: 14223.219551115271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11178.229009922925,
            "unit": "ns/iter",
            "extra": "iterations: 73368\ncpu: 11177.948151782755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11107.158636136475,
            "unit": "ns/iter",
            "extra": "iterations: 74113\ncpu: 11106.846302268159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11481.329532578151,
            "unit": "ns/iter",
            "extra": "iterations: 70600\ncpu: 11481.137393767704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41017.38064129931,
            "unit": "ns/iter",
            "extra": "iterations: 20053\ncpu: 41014.7957911534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 460639.5235076813,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 460612.6782884309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 379313.61149826413,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 379297.73519163625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 375711.39654427586,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 375684.7516198705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 372126.1967769234,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 372098.85496183264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223662.2487205814,
            "unit": "ns/iter",
            "extra": "iterations: 3908\ncpu: 223649.69293756425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 366744.6696619436,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 366727.9845956358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1869407.8340164274,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1869310.6557376992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 733224.6513834279,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 733187.9841897233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3265.67649944404,
            "unit": "ns/iter",
            "extra": "iterations: 244624\ncpu: 3265.5029759958297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14699.29094733796,
            "unit": "ns/iter",
            "extra": "iterations: 57519\ncpu: 14698.36054173407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11604.237742739424,
            "unit": "ns/iter",
            "extra": "iterations: 70652\ncpu: 11603.38277755758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11497.850884097601,
            "unit": "ns/iter",
            "extra": "iterations: 71146\ncpu: 11497.333651927034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11757.01176925475,
            "unit": "ns/iter",
            "extra": "iterations: 69843\ncpu: 11756.224675343243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41471.91787221248,
            "unit": "ns/iter",
            "extra": "iterations: 19908\ncpu: 41469.09785011037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 442706.0885363473,
            "unit": "ns/iter",
            "extra": "iterations: 1954\ncpu: 442704.6571136135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 364873.18684100604,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 364861.49304091313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 362494.5417541075,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 362485.9420898035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 361770.5539174089,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 361758.38247683237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 224504.20818227265,
            "unit": "ns/iter",
            "extra": "iterations: 3862\ncpu: 224496.55618850337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 363153.51699538535,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 363130.3818715904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 362.09702416456264,
            "unit": "ns/iter",
            "extra": "iterations: 1932869\ncpu: 362.08434198075423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1411.1474350177032,
            "unit": "ns/iter",
            "extra": "iterations: 495520\ncpu: 1411.1430416532162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1152.334952152528,
            "unit": "ns/iter",
            "extra": "iterations: 606615\ncpu: 1152.2664292838044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1132.5423283503721,
            "unit": "ns/iter",
            "extra": "iterations: 618120\ncpu: 1132.4359347699549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1017.5686578226909,
            "unit": "ns/iter",
            "extra": "iterations: 690788\ncpu: 1017.5026201960634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7701.822900238392,
            "unit": "ns/iter",
            "extra": "iterations: 90034\ncpu: 7701.488326632055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18554.123953587954,
            "unit": "ns/iter",
            "extra": "iterations: 37748\ncpu: 18553.9816679028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4380.196108759459,
            "unit": "ns/iter",
            "extra": "iterations: 159692\ncpu: 4379.847456353451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4415.431608975037,
            "unit": "ns/iter",
            "extra": "iterations: 159151\ncpu: 4415.171755125656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4397.067368566719,
            "unit": "ns/iter",
            "extra": "iterations: 158902\ncpu: 4396.643214056467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9245.441183042807,
            "unit": "ns/iter",
            "extra": "iterations: 76075\ncpu: 9244.849162011169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8305.941472684506,
            "unit": "ns/iter",
            "extra": "iterations: 84200\ncpu: 8305.298099762484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3072.162685729317,
            "unit": "ns/iter",
            "extra": "iterations: 226203\ncpu: 3071.9433429264955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15666.74004972442,
            "unit": "ns/iter",
            "extra": "iterations: 44647\ncpu: 15665.97979707479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12490.519564830887,
            "unit": "ns/iter",
            "extra": "iterations: 56070\ncpu: 12490.354913500987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12535.514806133877,
            "unit": "ns/iter",
            "extra": "iterations: 55889\ncpu: 12534.788598829842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12926.52606283413,
            "unit": "ns/iter",
            "extra": "iterations: 53889\ncpu: 12925.357679675013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28220.21424544789,
            "unit": "ns/iter",
            "extra": "iterations: 24836\ncpu: 28218.52150104688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98572.29579051565,
            "unit": "ns/iter",
            "extra": "iterations: 7103\ncpu: 98557.70801070122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83587.77861409623,
            "unit": "ns/iter",
            "extra": "iterations: 8370\ncpu: 83582.93906809932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83711.3972471601,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 83709.8743267496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83788.0477044487,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 83782.25729316099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54185.337835755134,
            "unit": "ns/iter",
            "extra": "iterations: 12956\ncpu: 54182.15498610651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 82820.36222615774,
            "unit": "ns/iter",
            "extra": "iterations: 8445\ncpu: 82811.69923031279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2955.6297024699597,
            "unit": "ns/iter",
            "extra": "iterations: 237455\ncpu: 2955.4029184477063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15055.600021492799,
            "unit": "ns/iter",
            "extra": "iterations: 46525\ncpu: 15054.196668457744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12013.987120263519,
            "unit": "ns/iter",
            "extra": "iterations: 58231\ncpu: 12013.841424670507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11924.35433819404,
            "unit": "ns/iter",
            "extra": "iterations: 58907\ncpu: 11924.16860474981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12473.665352301388,
            "unit": "ns/iter",
            "extra": "iterations: 56301\ncpu: 12472.890357187289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27058.233268857948,
            "unit": "ns/iter",
            "extra": "iterations: 25850\ncpu: 27056.630560928286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96692.69317863874,
            "unit": "ns/iter",
            "extra": "iterations: 7154\ncpu: 96683.15627621053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82590.67057582781,
            "unit": "ns/iter",
            "extra": "iterations: 8527\ncpu: 82585.07095109635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81083.54056877084,
            "unit": "ns/iter",
            "extra": "iterations: 8615\ncpu: 81075.15960534012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 80525.5315637531,
            "unit": "ns/iter",
            "extra": "iterations: 8665\ncpu: 80524.32775533745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53991.9963698135,
            "unit": "ns/iter",
            "extra": "iterations: 12947\ncpu: 53988.38340928363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 81987.37846407271,
            "unit": "ns/iter",
            "extra": "iterations: 8516\ncpu: 81980.04931892888 ns\nthreads: 1"
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
        "date": 1705778434629,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 694.9313421535214,
            "unit": "ns/iter",
            "extra": "iterations: 1016985\ncpu: 694.8869452351804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10551.661997965832,
            "unit": "ns/iter",
            "extra": "iterations: 78680\ncpu: 10550.937976614134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23522.720978804184,
            "unit": "ns/iter",
            "extra": "iterations: 35431\ncpu: 23520.498998052546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38421.90763734355,
            "unit": "ns/iter",
            "extra": "iterations: 22953\ncpu: 38419.182677645615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48401.58075362327,
            "unit": "ns/iter",
            "extra": "iterations: 17250\ncpu: 48398.13333333331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57859.68759403448,
            "unit": "ns/iter",
            "extra": "iterations: 14622\ncpu: 57857.65285186705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58272.606599996376,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58268.07 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67254.00899100999,
            "unit": "ns/iter",
            "extra": "iterations: 13013\ncpu: 67249.22001075842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77365.632581866,
            "unit": "ns/iter",
            "extra": "iterations: 11178\ncpu: 77361.48684916813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 575.0795920924548,
            "unit": "ns/iter",
            "extra": "iterations: 1221453\ncpu: 575.0387448391373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 480.6856110301981,
            "unit": "ns/iter",
            "extra": "iterations: 1456581\ncpu: 480.6518827308605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 524.979340503633,
            "unit": "ns/iter",
            "extra": "iterations: 1465573\ncpu: 524.9363900672298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 469.0545121032922,
            "unit": "ns/iter",
            "extra": "iterations: 1489926\ncpu: 469.04792587014435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 943.9494529947737,
            "unit": "ns/iter",
            "extra": "iterations: 740578\ncpu: 943.9482404284213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3196.2510023766795,
            "unit": "ns/iter",
            "extra": "iterations: 248659\ncpu: 3196.208864348359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14257.396175289023,
            "unit": "ns/iter",
            "extra": "iterations: 57573\ncpu: 14256.83393257257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11664.483412658692,
            "unit": "ns/iter",
            "extra": "iterations: 70596\ncpu: 11664.183523145783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11511.905629792262,
            "unit": "ns/iter",
            "extra": "iterations: 70944\ncpu: 11511.348387460548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12057.877655918657,
            "unit": "ns/iter",
            "extra": "iterations: 66926\ncpu: 12057.435077548314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41399.62219581266,
            "unit": "ns/iter",
            "extra": "iterations: 20193\ncpu: 41398.544049918404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 441414.27168498083,
            "unit": "ns/iter",
            "extra": "iterations: 2006\ncpu: 441396.2612163504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 354964.01923861884,
            "unit": "ns/iter",
            "extra": "iterations: 2443\ncpu: 354956.2832582899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 357625.7849462417,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 357611.2903225795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 362088.0309106035,
            "unit": "ns/iter",
            "extra": "iterations: 2394\ncpu: 362083.0409356733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 219732.49130325206,
            "unit": "ns/iter",
            "extra": "iterations: 3967\ncpu: 219722.10738593386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 359746.50993378175,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 359730.83609271486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1844340.6322067888,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1844300.5964214723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 732185.3624317723,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 732149.9610288388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2472809.8422461175,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2472717.914438501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3092.243476574651,
            "unit": "ns/iter",
            "extra": "iterations: 252628\ncpu: 3092.085992051566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14122.741337726731,
            "unit": "ns/iter",
            "extra": "iterations: 58876\ncpu: 14121.974998301512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11522.788675444861,
            "unit": "ns/iter",
            "extra": "iterations: 71473\ncpu: 11521.983126495319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11800.079606555302,
            "unit": "ns/iter",
            "extra": "iterations: 69743\ncpu: 11800.065956440176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12274.711034126372,
            "unit": "ns/iter",
            "extra": "iterations: 65814\ncpu: 12274.551007384489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41375.665778834235,
            "unit": "ns/iter",
            "extra": "iterations: 20274\ncpu: 41374.02584591096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 456088.7148128909,
            "unit": "ns/iter",
            "extra": "iterations: 1897\ncpu: 456063.73220874975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 374700.8799826505,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 374685.22530329216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 371462.94014538836,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 371448.439504063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 368482.52035618847,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 368481.89143341844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221570.1859398721,
            "unit": "ns/iter",
            "extra": "iterations: 3926\ncpu: 221569.76566479888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 370802.0729122414,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 370359.559135227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1865580.5519349955,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1865334.0122199527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 720503.4703160867,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 720468.7740940603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3159.2495842698468,
            "unit": "ns/iter",
            "extra": "iterations: 253169\ncpu: 3159.044353771613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14273.77387792996,
            "unit": "ns/iter",
            "extra": "iterations: 57951\ncpu: 14273.025487049352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11701.798531764502,
            "unit": "ns/iter",
            "extra": "iterations: 71242\ncpu: 11701.313831728445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11829.92819393024,
            "unit": "ns/iter",
            "extra": "iterations: 71902\ncpu: 11829.313510055443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12438.620709186547,
            "unit": "ns/iter",
            "extra": "iterations: 67091\ncpu: 12438.30021910534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42632.07850853078,
            "unit": "ns/iter",
            "extra": "iterations: 20329\ncpu: 42620.10428451946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 441696.9882292567,
            "unit": "ns/iter",
            "extra": "iterations: 1954\ncpu: 441674.6161719546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 364660.7368421093,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 364642.40000000066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 364855.9149473601,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 364827.74736841867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 365619.96764708287,
            "unit": "ns/iter",
            "extra": "iterations: 2380\ncpu: 365598.1092436968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 228395.57799119674,
            "unit": "ns/iter",
            "extra": "iterations: 3853\ncpu: 228378.17285232194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 363534.66051968967,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 363510.5196982409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 292.8207721119905,
            "unit": "ns/iter",
            "extra": "iterations: 2385198\ncpu: 292.7969501902984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1418.5567851198366,
            "unit": "ns/iter",
            "extra": "iterations: 493219\ncpu: 1418.4715106271344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1128.6136865661003,
            "unit": "ns/iter",
            "extra": "iterations: 623838\ncpu: 1128.5296823854967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1154.991154949491,
            "unit": "ns/iter",
            "extra": "iterations: 620460\ncpu: 1154.922315701256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 971.9238217980861,
            "unit": "ns/iter",
            "extra": "iterations: 722372\ncpu: 971.8808314829538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7414.608740273811,
            "unit": "ns/iter",
            "extra": "iterations: 95489\ncpu: 7414.000565510207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18318.65115610787,
            "unit": "ns/iter",
            "extra": "iterations: 38275\ncpu: 18317.51796211635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4382.787954862044,
            "unit": "ns/iter",
            "extra": "iterations: 159334\ncpu: 4382.662834046733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4378.767013504989,
            "unit": "ns/iter",
            "extra": "iterations: 159344\ncpu: 4378.581559393504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4385.138990503903,
            "unit": "ns/iter",
            "extra": "iterations: 159644\ncpu: 4384.875097091011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9127.43992139663,
            "unit": "ns/iter",
            "extra": "iterations: 76841\ncpu: 9127.170390806874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8294.2591208511,
            "unit": "ns/iter",
            "extra": "iterations: 84559\ncpu: 8293.55479605962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3103.846471746334,
            "unit": "ns/iter",
            "extra": "iterations: 226486\ncpu: 3103.7189936684636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15747.41955637526,
            "unit": "ns/iter",
            "extra": "iterations: 44497\ncpu: 15746.257051037124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12567.181920924877,
            "unit": "ns/iter",
            "extra": "iterations: 55744\ncpu: 12566.42149827797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12573.048504780048,
            "unit": "ns/iter",
            "extra": "iterations: 55644\ncpu: 12572.032923585624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12992.256627487634,
            "unit": "ns/iter",
            "extra": "iterations: 53942\ncpu: 12991.479737496064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28200.801029227205,
            "unit": "ns/iter",
            "extra": "iterations: 24873\ncpu: 28198.773770755543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97570.16740592795,
            "unit": "ns/iter",
            "extra": "iterations: 6989\ncpu: 97565.98941193329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83207.28710636233,
            "unit": "ns/iter",
            "extra": "iterations: 8415\ncpu: 83204.89601901424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83732.45743663871,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 83724.79674796865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83896.17473986074,
            "unit": "ns/iter",
            "extra": "iterations: 8361\ncpu: 83889.96531515327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54398.58586880225,
            "unit": "ns/iter",
            "extra": "iterations: 12851\ncpu: 54394.54517158125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83951.98519403167,
            "unit": "ns/iter",
            "extra": "iterations: 8375\ncpu: 83949.56417910452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2956.583210635,
            "unit": "ns/iter",
            "extra": "iterations: 237031\ncpu: 2956.4968295286135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14848.92354746464,
            "unit": "ns/iter",
            "extra": "iterations: 47245\ncpu: 14848.49190390508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11983.345569599098,
            "unit": "ns/iter",
            "extra": "iterations: 58787\ncpu: 11982.480820589724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11783.786028862894,
            "unit": "ns/iter",
            "extra": "iterations: 59036\ncpu: 11782.920590825936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12325.258870186486,
            "unit": "ns/iter",
            "extra": "iterations: 56735\ncpu: 12324.41526394641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26720.547184199815,
            "unit": "ns/iter",
            "extra": "iterations: 26227\ncpu: 26718.587714950587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97436.55660638925,
            "unit": "ns/iter",
            "extra": "iterations: 7190\ncpu: 97430.79276773277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81982.5976119427,
            "unit": "ns/iter",
            "extra": "iterations: 8375\ncpu: 81978.92537313535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82343.08862836541,
            "unit": "ns/iter",
            "extra": "iterations: 8530\ncpu: 82337.25674091413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82449.44871794486,
            "unit": "ns/iter",
            "extra": "iterations: 8502\ncpu: 82444.42484121509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54493.192787898886,
            "unit": "ns/iter",
            "extra": "iterations: 12895\ncpu: 54488.576967817105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83299.80925816504,
            "unit": "ns/iter",
            "extra": "iterations: 8425\ncpu: 83297.41246290639 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}