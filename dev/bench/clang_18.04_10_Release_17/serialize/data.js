window.BENCHMARK_DATA = {
  "lastUpdate": 1705963485346,
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
        "date": 1705953596112,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 699.9556130759064,
            "unit": "ns/iter",
            "extra": "iterations: 995203\ncpu: 699.9277534332192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10662.415675035374,
            "unit": "ns/iter",
            "extra": "iterations: 77818\ncpu: 10662.166850857131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23750.324863523714,
            "unit": "ns/iter",
            "extra": "iterations: 34987\ncpu: 23749.764198130746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37430.37805657154,
            "unit": "ns/iter",
            "extra": "iterations: 21920\ncpu: 37428.94160583942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 47322.11179065263,
            "unit": "ns/iter",
            "extra": "iterations: 17005\ncpu: 47319.97059688327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59140.35908141423,
            "unit": "ns/iter",
            "extra": "iterations: 14370\ncpu: 59138.97007654832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 59148.82270000135,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59147.070000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68163.29362403227,
            "unit": "ns/iter",
            "extra": "iterations: 12751\ncpu: 68160.69327895845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78009.13525835544,
            "unit": "ns/iter",
            "extra": "iterations: 11186\ncpu: 78005.59628106574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 602.746865727782,
            "unit": "ns/iter",
            "extra": "iterations: 1181614\ncpu: 602.7365112464817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 463.57253963161617,
            "unit": "ns/iter",
            "extra": "iterations: 1286159\ncpu: 463.1356620759958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 464.2057270572171,
            "unit": "ns/iter",
            "extra": "iterations: 1517219\ncpu: 464.19297411909577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 473.7262878644058,
            "unit": "ns/iter",
            "extra": "iterations: 1477640\ncpu: 473.71172951463114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 939.3950107567341,
            "unit": "ns/iter",
            "extra": "iterations: 741395\ncpu: 939.3773899203535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3230.6329645034707,
            "unit": "ns/iter",
            "extra": "iterations: 247630\ncpu: 3230.4785365262733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14117.295174538343,
            "unit": "ns/iter",
            "extra": "iterations: 58440\ncpu: 14116.762491444208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11517.941700621459,
            "unit": "ns/iter",
            "extra": "iterations: 70927\ncpu: 11517.361512541087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11423.387830577523,
            "unit": "ns/iter",
            "extra": "iterations: 71655\ncpu: 11423.20145139907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11807.984382789406,
            "unit": "ns/iter",
            "extra": "iterations: 68194\ncpu: 11807.688359679747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41544.0635421809,
            "unit": "ns/iter",
            "extra": "iterations: 20270\ncpu: 41542.29896398617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 433079.7808904521,
            "unit": "ns/iter",
            "extra": "iterations: 1999\ncpu: 433063.631815908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 356269.6111806831,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 356259.94993742194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 359930.48271602154,
            "unit": "ns/iter",
            "extra": "iterations: 2430\ncpu: 359918.148148148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 357674.5979424123,
            "unit": "ns/iter",
            "extra": "iterations: 2430\ncpu: 357661.8106995881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 222821.64602447816,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 222814.65341488342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 358159.49669966195,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 358143.5643564358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1840228.9461077717,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1840136.7265469076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 719391.8293803283,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 719362.739097168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2462531.544235826,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2462461.662198387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3173.99936094214,
            "unit": "ns/iter",
            "extra": "iterations: 247239\ncpu: 3173.886401417255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14169.899451428582,
            "unit": "ns/iter",
            "extra": "iterations: 58151\ncpu: 14169.37283967604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11542.011988264201,
            "unit": "ns/iter",
            "extra": "iterations: 71570\ncpu: 11541.57887382979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11438.805911482423,
            "unit": "ns/iter",
            "extra": "iterations: 71488\ncpu: 11438.584098030404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11971.634915704048,
            "unit": "ns/iter",
            "extra": "iterations: 70822\ncpu: 11971.209511168849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41325.66731016855,
            "unit": "ns/iter",
            "extra": "iterations: 20202\ncpu: 41323.70062370076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 453705.1895459211,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 453690.44350580673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 374790.8547341169,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 374774.79463899595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 370247.67608044227,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 370232.3063756933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 364600.8008350816,
            "unit": "ns/iter",
            "extra": "iterations: 2395\ncpu: 364583.13152400864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221943.6379837199,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 221934.3940936872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 366639.43991594855,
            "unit": "ns/iter",
            "extra": "iterations: 2380\ncpu: 366612.8151260494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1864350.1727642228,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1864243.292682924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 704270.4352134427,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 704226.676829269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3204.1640923688697,
            "unit": "ns/iter",
            "extra": "iterations: 248482\ncpu: 3204.0787662687644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14553.640114925287,
            "unit": "ns/iter",
            "extra": "iterations: 56732\ncpu: 14552.904886131226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11880.439698889993,
            "unit": "ns/iter",
            "extra": "iterations: 69609\ncpu: 11879.860362884174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11749.690377459514,
            "unit": "ns/iter",
            "extra": "iterations: 70418\ncpu: 11748.94061177538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12369.61002207766,
            "unit": "ns/iter",
            "extra": "iterations: 67491\ncpu: 12369.161814167801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41323.9057935515,
            "unit": "ns/iter",
            "extra": "iterations: 20402\ncpu: 41321.40476423885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 446149.414772734,
            "unit": "ns/iter",
            "extra": "iterations: 1936\ncpu: 446122.5723140503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 365871.6505922511,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 365859.8561759723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 364282.43657821044,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 364259.6291613988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 366235.76194502856,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 366217.632135307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 220899.1905124296,
            "unit": "ns/iter",
            "extra": "iterations: 3942\ncpu: 220884.77929984895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 365127.6970464395,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 365115.9071729937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 293.79711246390735,
            "unit": "ns/iter",
            "extra": "iterations: 2389442\ncpu: 293.7896379154623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1447.6363953822067,
            "unit": "ns/iter",
            "extra": "iterations: 483957\ncpu: 1447.6089817897064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1056.024263539077,
            "unit": "ns/iter",
            "extra": "iterations: 660456\ncpu: 1055.9577019513856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1141.6810976414831,
            "unit": "ns/iter",
            "extra": "iterations: 612987\ncpu: 1141.6413398652833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 954.1484381294313,
            "unit": "ns/iter",
            "extra": "iterations: 732359\ncpu: 954.0940986592655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7365.999279870265,
            "unit": "ns/iter",
            "extra": "iterations: 95816\ncpu: 7365.79276947483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18548.364055054208,
            "unit": "ns/iter",
            "extra": "iterations: 37780\ncpu: 18548.00952885119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4375.371208190599,
            "unit": "ns/iter",
            "extra": "iterations: 159983\ncpu: 4375.176112461968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4376.73255296649,
            "unit": "ns/iter",
            "extra": "iterations: 159583\ncpu: 4376.449872480171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4378.165345512419,
            "unit": "ns/iter",
            "extra": "iterations: 159835\ncpu: 4377.896580848983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 8723.728761870738,
            "unit": "ns/iter",
            "extra": "iterations: 80339\ncpu: 8723.120775712858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8257.49788422878,
            "unit": "ns/iter",
            "extra": "iterations: 84839\ncpu: 8257.16946215774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3113.1796647856036,
            "unit": "ns/iter",
            "extra": "iterations: 222186\ncpu: 3112.9855166392376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15718.798520882685,
            "unit": "ns/iter",
            "extra": "iterations: 44486\ncpu: 15718.284404082242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12554.126821660311,
            "unit": "ns/iter",
            "extra": "iterations: 55787\ncpu: 12553.862010862793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12527.861781908954,
            "unit": "ns/iter",
            "extra": "iterations: 55738\ncpu: 12527.143062183703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12926.614169882483,
            "unit": "ns/iter",
            "extra": "iterations: 54143\ncpu: 12926.140036569845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 27991.05312850057,
            "unit": "ns/iter",
            "extra": "iterations: 24996\ncpu: 27989.142262761994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98666.84161620868,
            "unit": "ns/iter",
            "extra": "iterations: 7103\ncpu: 98660.88976488798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83912.7008526175,
            "unit": "ns/iter",
            "extra": "iterations: 8210\ncpu: 83906.16321559121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83916.24017361504,
            "unit": "ns/iter",
            "extra": "iterations: 8294\ncpu: 83914.74559922704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83808.10339840886,
            "unit": "ns/iter",
            "extra": "iterations: 8298\ncpu: 83805.26632923628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 53719.38230988339,
            "unit": "ns/iter",
            "extra": "iterations: 12979\ncpu: 53715.66376454337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83731.38317757045,
            "unit": "ns/iter",
            "extra": "iterations: 8346\ncpu: 83727.03091301175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2932.9945883182686,
            "unit": "ns/iter",
            "extra": "iterations: 238558\ncpu: 2932.8263986116417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14983.428653453588,
            "unit": "ns/iter",
            "extra": "iterations: 47024\ncpu: 14982.908727458474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11838.547941949868,
            "unit": "ns/iter",
            "extra": "iterations: 58915\ncpu: 11838.212679283797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11776.821962553317,
            "unit": "ns/iter",
            "extra": "iterations: 59392\ncpu: 11776.444639008543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12302.45896954845,
            "unit": "ns/iter",
            "extra": "iterations: 57043\ncpu: 12301.838963588863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26854.627162202127,
            "unit": "ns/iter",
            "extra": "iterations: 26073\ncpu: 26852.759559697635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96830.8641770354,
            "unit": "ns/iter",
            "extra": "iterations: 7230\ncpu: 96826.45919778735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82002.37698783078,
            "unit": "ns/iter",
            "extra": "iterations: 8552\ncpu: 81996.88961646358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81848.60696749973,
            "unit": "ns/iter",
            "extra": "iterations: 8554\ncpu: 81844.38859013225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82393.93098177401,
            "unit": "ns/iter",
            "extra": "iterations: 8505\ncpu: 82392.43974132957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54381.31927805251,
            "unit": "ns/iter",
            "extra": "iterations: 12854\ncpu: 54377.3300140035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82827.48852343103,
            "unit": "ns/iter",
            "extra": "iterations: 8452\ncpu: 82824.47941315568 ns\nthreads: 1"
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
        "date": 1705955080611,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 693.6818912519026,
            "unit": "ns/iter",
            "extra": "iterations: 1012726\ncpu: 693.6443815997615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10544.22524068448,
            "unit": "ns/iter",
            "extra": "iterations: 79253\ncpu: 10544.233025879148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23694.472697844107,
            "unit": "ns/iter",
            "extra": "iterations: 35217\ncpu: 23694.627594627593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 36583.46166387599,
            "unit": "ns/iter",
            "extra": "iterations: 22694\ncpu: 36583.72697629331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46695.56608976336,
            "unit": "ns/iter",
            "extra": "iterations: 17045\ncpu: 46695.72895277208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58822.35758280923,
            "unit": "ns/iter",
            "extra": "iterations: 14612\ncpu: 58823.015329865855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58022.64449999939,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58021.540000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66972.43149204676,
            "unit": "ns/iter",
            "extra": "iterations: 12962\ncpu: 66972.31137170194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76926.90234617126,
            "unit": "ns/iter",
            "extra": "iterations: 11295\ncpu: 76926.39220894204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 574.2338539824851,
            "unit": "ns/iter",
            "extra": "iterations: 1218799\ncpu: 574.2416099783471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 469.9302561962411,
            "unit": "ns/iter",
            "extra": "iterations: 1485580\ncpu: 469.93309010622085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 466.76730849130985,
            "unit": "ns/iter",
            "extra": "iterations: 1499423\ncpu: 466.76534907094214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 473.11304908950217,
            "unit": "ns/iter",
            "extra": "iterations: 1476854\ncpu: 473.1131851895989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 942.5440889872132,
            "unit": "ns/iter",
            "extra": "iterations: 744018\ncpu: 942.5531371552845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3197.888123876033,
            "unit": "ns/iter",
            "extra": "iterations: 249088\ncpu: 3197.89391700925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14558.460993920457,
            "unit": "ns/iter",
            "extra": "iterations: 56081\ncpu: 14558.057095986158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11819.693890508503,
            "unit": "ns/iter",
            "extra": "iterations: 69302\ncpu: 11819.742575971848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 10967.969026251438,
            "unit": "ns/iter",
            "extra": "iterations: 74547\ncpu: 10968.047003903566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11571.443601578108,
            "unit": "ns/iter",
            "extra": "iterations: 68681\ncpu: 11571.360347112006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41555.77984541929,
            "unit": "ns/iter",
            "extra": "iterations: 20313\ncpu: 41553.48791414371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 436710.70649998,
            "unit": "ns/iter",
            "extra": "iterations: 2000\ncpu: 436691.39999999903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 359931.725953564,
            "unit": "ns/iter",
            "extra": "iterations: 2412\ncpu: 359920.43946932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 361178.8069593867,
            "unit": "ns/iter",
            "extra": "iterations: 2414\ncpu: 361174.27506213874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 358574.89954524394,
            "unit": "ns/iter",
            "extra": "iterations: 2419\ncpu: 358573.70814386173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 222203.25392406923,
            "unit": "ns/iter",
            "extra": "iterations: 3950\ncpu: 222206.30379746857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 359782.12795031164,
            "unit": "ns/iter",
            "extra": "iterations: 2415\ncpu: 359781.5734989656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1860469.9919516635,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1860393.5613682077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 721657.7741934744,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 721630.1075268815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2495110.970189708,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2495017.615176155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3150.8313130714287,
            "unit": "ns/iter",
            "extra": "iterations: 254175\ncpu: 3150.6757155503146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14267.388299349108,
            "unit": "ns/iter",
            "extra": "iterations: 57672\ncpu: 14266.758565681821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11163.111702637854,
            "unit": "ns/iter",
            "extra": "iterations: 73069\ncpu: 11162.62436874737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11145.841226834093,
            "unit": "ns/iter",
            "extra": "iterations: 73816\ncpu: 11145.506394277674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11826.476363846281,
            "unit": "ns/iter",
            "extra": "iterations: 69216\ncpu: 11825.85240406841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41424.85019940466,
            "unit": "ns/iter",
            "extra": "iterations: 20060\ncpu: 41422.248255234226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 454698.5225131111,
            "unit": "ns/iter",
            "extra": "iterations: 1910\ncpu: 454684.3979057584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 376522.1185925701,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 376520.6776715913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 373779.1851374489,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 373762.41408934764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 368633.74978902587,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 368610.5485232067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 221212.00176543757,
            "unit": "ns/iter",
            "extra": "iterations: 3965\ncpu: 221205.57377049196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 396538.7564482143,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 396531.6701902752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1864061.5498980468,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1864069.4501018238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 726486.4886630613,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 726484.5973416739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3249.653502484535,
            "unit": "ns/iter",
            "extra": "iterations: 251136\ncpu: 3249.6372483435357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14719.84714023378,
            "unit": "ns/iter",
            "extra": "iterations: 56071\ncpu: 14719.880151950314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11635.54358800871,
            "unit": "ns/iter",
            "extra": "iterations: 70914\ncpu: 11635.365372140885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11526.52579095558,
            "unit": "ns/iter",
            "extra": "iterations: 71401\ncpu: 11526.46741642276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11973.287128278162,
            "unit": "ns/iter",
            "extra": "iterations: 68398\ncpu: 11973.357408111371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41769.96191566586,
            "unit": "ns/iter",
            "extra": "iterations: 20087\ncpu: 41769.881017573476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 445869.64111857506,
            "unit": "ns/iter",
            "extra": "iterations: 1931\ncpu: 445871.2066286871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 366584.409264782,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 366590.0127496829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 367049.487783988,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 367050.2786112307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 363563.0074074188,
            "unit": "ns/iter",
            "extra": "iterations: 2160\ncpu: 363559.67592592485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 226853.04270188545,
            "unit": "ns/iter",
            "extra": "iterations: 3864\ncpu: 226852.6397515535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 366576.765526003,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 366581.8757921412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 286.9154264106743,
            "unit": "ns/iter",
            "extra": "iterations: 2443044\ncpu: 286.91292502304464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1454.4001840002388,
            "unit": "ns/iter",
            "extra": "iterations: 483695\ncpu: 1454.391920528437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1096.3871199387206,
            "unit": "ns/iter",
            "extra": "iterations: 641969\ncpu: 1096.37910864854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1091.3065943392921,
            "unit": "ns/iter",
            "extra": "iterations: 640974\ncpu: 1091.3199287334558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 961.1015799296913,
            "unit": "ns/iter",
            "extra": "iterations: 724336\ncpu: 961.0947129508904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7411.439084900396,
            "unit": "ns/iter",
            "extra": "iterations: 94722\ncpu: 7411.436625071162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18737.565224393387,
            "unit": "ns/iter",
            "extra": "iterations: 37256\ncpu: 18737.45705389699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4373.988589827804,
            "unit": "ns/iter",
            "extra": "iterations: 159945\ncpu: 4374.042327049955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4393.036727613468,
            "unit": "ns/iter",
            "extra": "iterations: 156803\ncpu: 4392.910212177083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4416.222934684326,
            "unit": "ns/iter",
            "extra": "iterations: 158293\ncpu: 4416.135899881825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9137.889403091229,
            "unit": "ns/iter",
            "extra": "iterations: 76494\ncpu: 9137.8160378591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8413.061373093178,
            "unit": "ns/iter",
            "extra": "iterations: 83636\ncpu: 8413.079295996931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3161.112782766881,
            "unit": "ns/iter",
            "extra": "iterations: 222268\ncpu: 3161.0906653229063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15730.482223120445,
            "unit": "ns/iter",
            "extra": "iterations: 44496\ncpu: 15730.49937073024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12620.131453877551,
            "unit": "ns/iter",
            "extra": "iterations: 55548\ncpu: 12620.04752646377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12653.010364947737,
            "unit": "ns/iter",
            "extra": "iterations: 55186\ncpu: 12652.90653426582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12975.298079423823,
            "unit": "ns/iter",
            "extra": "iterations: 53838\ncpu: 12975.46899959149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28209.42077472081,
            "unit": "ns/iter",
            "extra": "iterations: 24809\ncpu: 28209.2627675438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98239.80217298912,
            "unit": "ns/iter",
            "extra": "iterations: 7087\ncpu: 98237.84393960747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84079.11293216169,
            "unit": "ns/iter",
            "extra": "iterations: 8359\ncpu: 84077.91601866293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84550.02721578686,
            "unit": "ns/iter",
            "extra": "iterations: 8304\ncpu: 84550.75867051924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84755.61534749954,
            "unit": "ns/iter",
            "extra": "iterations: 8288\ncpu: 84756.28619691073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55114.51392898528,
            "unit": "ns/iter",
            "extra": "iterations: 12815\ncpu: 55113.86656262184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84546.76498251533,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 84543.96478958204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2981.3084222004095,
            "unit": "ns/iter",
            "extra": "iterations: 234808\ncpu: 2981.288968007891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14905.54769638563,
            "unit": "ns/iter",
            "extra": "iterations: 46796\ncpu: 14905.741943756117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11950.457638698348,
            "unit": "ns/iter",
            "extra": "iterations: 58544\ncpu: 11950.608089642028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11962.416368889935,
            "unit": "ns/iter",
            "extra": "iterations: 58489\ncpu: 11962.449349450257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12395.085529463273,
            "unit": "ns/iter",
            "extra": "iterations: 56425\ncpu: 12395.00930438642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27004.76257273668,
            "unit": "ns/iter",
            "extra": "iterations: 25949\ncpu: 27004.616748236946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97732.31992176612,
            "unit": "ns/iter",
            "extra": "iterations: 7158\ncpu: 97733.50097792651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82389.4055614469,
            "unit": "ns/iter",
            "extra": "iterations: 8487\ncpu: 82386.9918699178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82048.23997201197,
            "unit": "ns/iter",
            "extra": "iterations: 8576\ncpu: 82048.5074626867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82263.73310612336,
            "unit": "ns/iter",
            "extra": "iterations: 8509\ncpu: 82262.94511693495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54496.50011654668,
            "unit": "ns/iter",
            "extra": "iterations: 12871\ncpu: 54494.86442389788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82757.31883200705,
            "unit": "ns/iter",
            "extra": "iterations: 8459\ncpu: 82758.48209008091 ns\nthreads: 1"
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
        "date": 1705957060402,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 699.8902069844294,
            "unit": "ns/iter",
            "extra": "iterations: 1007177\ncpu: 699.8763871692861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10727.650655526117,
            "unit": "ns/iter",
            "extra": "iterations: 77800\ncpu: 10727.447300771208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23744.459659997356,
            "unit": "ns/iter",
            "extra": "iterations: 35176\ncpu: 23743.677507391396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 36944.271966344604,
            "unit": "ns/iter",
            "extra": "iterations: 22819\ncpu: 36943.04746044961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49119.72252294743,
            "unit": "ns/iter",
            "extra": "iterations: 16996\ncpu: 49118.04542245234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58765.08206834365,
            "unit": "ns/iter",
            "extra": "iterations: 14427\ncpu: 58762.6256324946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58716.055900003994,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58714.77999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 68001.65710499475,
            "unit": "ns/iter",
            "extra": "iterations: 12829\ncpu: 67998.67487723133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 78439.65630843399,
            "unit": "ns/iter",
            "extra": "iterations: 11231\ncpu: 78436.69308164905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 571.8966862552403,
            "unit": "ns/iter",
            "extra": "iterations: 1225713\ncpu: 571.8846092029689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 476.38397086080073,
            "unit": "ns/iter",
            "extra": "iterations: 1473479\ncpu: 476.3689879530007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 470.9844516369667,
            "unit": "ns/iter",
            "extra": "iterations: 1484272\ncpu: 470.9684613062834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 494.85000988479834,
            "unit": "ns/iter",
            "extra": "iterations: 1416320\ncpu: 494.83937245820204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 932.6788381211649,
            "unit": "ns/iter",
            "extra": "iterations: 750061\ncpu: 932.6457448127536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3263.103135754595,
            "unit": "ns/iter",
            "extra": "iterations: 250466\ncpu: 3263.0392947545756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14160.046612204955,
            "unit": "ns/iter",
            "extra": "iterations: 54106\ncpu: 14159.449968580213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11246.686383609805,
            "unit": "ns/iter",
            "extra": "iterations: 73507\ncpu: 11246.228250370685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11104.46481511567,
            "unit": "ns/iter",
            "extra": "iterations: 73668\ncpu: 11104.013954498558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11629.79223982434,
            "unit": "ns/iter",
            "extra": "iterations: 70952\ncpu: 11629.497406697508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41894.223331663015,
            "unit": "ns/iter",
            "extra": "iterations: 19930\ncpu: 41892.69944806825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 433909.65365608555,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 433898.66600790474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 356061.19443306903,
            "unit": "ns/iter",
            "extra": "iterations: 2443\ncpu: 356048.9971346698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 359350.67325106787,
            "unit": "ns/iter",
            "extra": "iterations: 2430\ncpu: 359338.27160493954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 360221.8893034893,
            "unit": "ns/iter",
            "extra": "iterations: 2412\ncpu: 360210.8623548924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 222596.54608829718,
            "unit": "ns/iter",
            "extra": "iterations: 3873\ncpu: 222589.62044926346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 357131.0540206168,
            "unit": "ns/iter",
            "extra": "iterations: 2425\ncpu: 357113.6494845359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1855776.430861688,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1855692.785571142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 731030.0186046411,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 731010.5426356568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2494690.102980836,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2494557.723577237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3152.5873696136427,
            "unit": "ns/iter",
            "extra": "iterations: 248971\ncpu: 3152.476794486103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14275.90083305701,
            "unit": "ns/iter",
            "extra": "iterations: 57499\ncpu: 14275.331744899879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11243.197080995295,
            "unit": "ns/iter",
            "extra": "iterations: 72696\ncpu: 11242.956971497748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11116.172598785994,
            "unit": "ns/iter",
            "extra": "iterations: 73442\ncpu: 11115.830178916687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11263.02356213723,
            "unit": "ns/iter",
            "extra": "iterations: 73338\ncpu: 11262.784640977468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41764.55914940037,
            "unit": "ns/iter",
            "extra": "iterations: 20127\ncpu: 41762.31927261901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 450958.4966057465,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 450934.72584856424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 374215.5226000978,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 374199.3542832543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 372916.9026586526,
            "unit": "ns/iter",
            "extra": "iterations: 2332\ncpu: 372895.4974271015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 370600.8473053852,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 370583.57570573123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 220382.88196719694,
            "unit": "ns/iter",
            "extra": "iterations: 3965\ncpu: 220371.04665825985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 371420.5114212839,
            "unit": "ns/iter",
            "extra": "iterations: 2364\ncpu: 371413.53637902025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1860388.9509203364,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1860023.7218813912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 723923.007003825,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 723889.4163424149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3172.7017076434586,
            "unit": "ns/iter",
            "extra": "iterations: 250345\ncpu: 3172.56346242185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14296.240805330594,
            "unit": "ns/iter",
            "extra": "iterations: 57914\ncpu: 14295.655627309403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11586.880960766535,
            "unit": "ns/iter",
            "extra": "iterations: 73816\ncpu: 11586.273978541301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11145.372857411443,
            "unit": "ns/iter",
            "extra": "iterations: 74326\ncpu: 11145.16992707807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11578.940472198248,
            "unit": "ns/iter",
            "extra": "iterations: 71580\ncpu: 11578.512154232982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41585.28021110857,
            "unit": "ns/iter",
            "extra": "iterations: 20274\ncpu: 41584.27049422915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 441420.5172239312,
            "unit": "ns/iter",
            "extra": "iterations: 1974\ncpu: 441412.8672745705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 362332.9987546454,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 362322.08385222225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 367212.3612740753,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 367202.6404023469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 364742.33194673114,
            "unit": "ns/iter",
            "extra": "iterations: 2404\ncpu: 364730.94841929857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 223661.8687724617,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 223657.52439650687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 362464.58034584596,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 362457.31758751755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 287.75311142902706,
            "unit": "ns/iter",
            "extra": "iterations: 2431198\ncpu: 287.7474397395847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1458.6456384975509,
            "unit": "ns/iter",
            "extra": "iterations: 478929\ncpu: 1458.619544859454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1139.283394985223,
            "unit": "ns/iter",
            "extra": "iterations: 614471\ncpu: 1139.2596233182744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1124.4698269636904,
            "unit": "ns/iter",
            "extra": "iterations: 623106\ncpu: 1124.4337239570827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 969.1245452831507,
            "unit": "ns/iter",
            "extra": "iterations: 721328\ncpu: 969.093671672252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7500.663195822511,
            "unit": "ns/iter",
            "extra": "iterations: 93253\ncpu: 7500.443953545774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18515.790632292916,
            "unit": "ns/iter",
            "extra": "iterations: 37704\ncpu: 18515.417462338446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4429.387142088864,
            "unit": "ns/iter",
            "extra": "iterations: 158035\ncpu: 4429.232764893822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4425.040482891502,
            "unit": "ns/iter",
            "extra": "iterations: 158462\ncpu: 4424.945412780327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4459.220709867393,
            "unit": "ns/iter",
            "extra": "iterations: 157297\ncpu: 4459.069785183494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 8962.506781403163,
            "unit": "ns/iter",
            "extra": "iterations: 77860\ncpu: 8962.322116619633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8452.650935651722,
            "unit": "ns/iter",
            "extra": "iterations: 82830\ncpu: 8452.363877821974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3183.1448442379824,
            "unit": "ns/iter",
            "extra": "iterations: 219919\ncpu: 3183.053305989876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16063.518169734642,
            "unit": "ns/iter",
            "extra": "iterations: 43644\ncpu: 16063.023554211488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12717.732689620707,
            "unit": "ns/iter",
            "extra": "iterations: 55097\ncpu: 12717.483710546825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12738.077474552372,
            "unit": "ns/iter",
            "extra": "iterations: 54818\ncpu: 12737.706592724944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13089.170759993336,
            "unit": "ns/iter",
            "extra": "iterations: 53461\ncpu: 13088.915284038894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28370.181008660726,
            "unit": "ns/iter",
            "extra": "iterations: 24706\ncpu: 28369.33133651733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98793.71003666417,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 98791.03467719095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84321.70036100902,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 84319.12154031232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84025.29732645894,
            "unit": "ns/iter",
            "extra": "iterations: 8341\ncpu: 84023.40246972836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84591.39064015231,
            "unit": "ns/iter",
            "extra": "iterations: 8248\ncpu: 84588.8336566441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54454.908019046765,
            "unit": "ns/iter",
            "extra": "iterations: 12807\ncpu: 54453.283360662484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83706.50383324407,
            "unit": "ns/iter",
            "extra": "iterations: 8348\ncpu: 83703.59367513267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2989.562772307565,
            "unit": "ns/iter",
            "extra": "iterations: 233192\ncpu: 2989.4751964046654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14977.382421692646,
            "unit": "ns/iter",
            "extra": "iterations: 47058\ncpu: 14976.027455480511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11949.736254735188,
            "unit": "ns/iter",
            "extra": "iterations: 58602\ncpu: 11948.880584280263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11824.115840243878,
            "unit": "ns/iter",
            "extra": "iterations: 59090\ncpu: 11823.428668133376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12347.445484901838,
            "unit": "ns/iter",
            "extra": "iterations: 56599\ncpu: 12346.949592748979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 26883.459821082135,
            "unit": "ns/iter",
            "extra": "iterations: 25934\ncpu: 26882.3783450297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 94994.80509968306,
            "unit": "ns/iter",
            "extra": "iterations: 7373\ncpu: 94992.87942492733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81096.13621608453,
            "unit": "ns/iter",
            "extra": "iterations: 8626\ncpu: 81090.91119870156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80367.40121614993,
            "unit": "ns/iter",
            "extra": "iterations: 8716\ncpu: 80360.95686094555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 80826.45285416734,
            "unit": "ns/iter",
            "extra": "iterations: 8654\ncpu: 80822.40582389614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53914.59993828373,
            "unit": "ns/iter",
            "extra": "iterations: 12963\ncpu: 53913.59253259194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 81876.0036080102,
            "unit": "ns/iter",
            "extra": "iterations: 8592\ncpu: 81873.35893854685 ns\nthreads: 1"
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
        "date": 1705958477640,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 715.3873212703198,
            "unit": "ns/iter",
            "extra": "iterations: 979972\ncpu: 715.3630920067105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10914.648076568628,
            "unit": "ns/iter",
            "extra": "iterations: 76062\ncpu: 10914.511845599642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24059.9738511212,
            "unit": "ns/iter",
            "extra": "iterations: 34686\ncpu: 24059.208326125805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37892.72151953907,
            "unit": "ns/iter",
            "extra": "iterations: 22928\ncpu: 37891.717550593174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 48031.93208543089,
            "unit": "ns/iter",
            "extra": "iterations: 16668\ncpu: 48030.615550755945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60098.96343628267,
            "unit": "ns/iter",
            "extra": "iterations: 14085\ncpu: 60096.812211572586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 60478.04990000714,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60475.11000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 69522.79874718748,
            "unit": "ns/iter",
            "extra": "iterations: 12452\ncpu: 69521.28172181183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 79873.47700262807,
            "unit": "ns/iter",
            "extra": "iterations: 11023\ncpu: 79872.7025310714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 613.4902460447399,
            "unit": "ns/iter",
            "extra": "iterations: 1152148\ncpu: 613.4529591684396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 540.5781842855241,
            "unit": "ns/iter",
            "extra": "iterations: 1072933\ncpu: 540.5607805892813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 515.0335220731033,
            "unit": "ns/iter",
            "extra": "iterations: 1356718\ncpu: 515.0224291267613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 532.2566860559574,
            "unit": "ns/iter",
            "extra": "iterations: 1316359\ncpu: 532.24735805354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 951.9546487764619,
            "unit": "ns/iter",
            "extra": "iterations: 733806\ncpu: 951.9355251933082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3187.3549186001974,
            "unit": "ns/iter",
            "extra": "iterations: 249939\ncpu: 3187.2780958553885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14413.915923724278,
            "unit": "ns/iter",
            "extra": "iterations: 56532\ncpu: 14413.503856223031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11850.422850394521,
            "unit": "ns/iter",
            "extra": "iterations: 68594\ncpu: 11849.989795025802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11771.161715026934,
            "unit": "ns/iter",
            "extra": "iterations: 69270\ncpu: 11770.66551176557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11858.291764221947,
            "unit": "ns/iter",
            "extra": "iterations: 67911\ncpu: 11857.902254421255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42329.38723319564,
            "unit": "ns/iter",
            "extra": "iterations: 20099\ncpu: 42328.36957062547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 435823.6803030613,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 435815.4545454545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 360533.18744872336,
            "unit": "ns/iter",
            "extra": "iterations: 2438\ncpu: 360520.26251025376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 358693.18374121346,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 358685.1099128994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 365667.45745122293,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 365658.1154005808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 223217.5492346929,
            "unit": "ns/iter",
            "extra": "iterations: 3920\ncpu: 223212.27040816325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 357117.147254546,
            "unit": "ns/iter",
            "extra": "iterations: 2404\ncpu: 357103.49417637195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1835093.9720558706,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1835047.9041916167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 728523.6462744519,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 728502.745098038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2457005.1786668045,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2456706.400000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3286.6562466646847,
            "unit": "ns/iter",
            "extra": "iterations: 252975\ncpu: 3286.5634944164462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14104.624057589883,
            "unit": "ns/iter",
            "extra": "iterations: 58759\ncpu: 14104.578022090209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11842.750415300909,
            "unit": "ns/iter",
            "extra": "iterations: 69227\ncpu: 11842.56865095989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 12054.165402384135,
            "unit": "ns/iter",
            "extra": "iterations: 70132\ncpu: 12054.053784292419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11898.217794672113,
            "unit": "ns/iter",
            "extra": "iterations: 68661\ncpu: 11897.971191797413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41293.46925405748,
            "unit": "ns/iter",
            "extra": "iterations: 20149\ncpu: 41292.4065710458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 454264.33158445865,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 454253.7250787008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 374308.9825160096,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 374300.59701492544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 369320.71711636905,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 369315.0505902217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 367372.75471697375,
            "unit": "ns/iter",
            "extra": "iterations: 2385\ncpu: 367361.9706498952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 219384.07449999888,
            "unit": "ns/iter",
            "extra": "iterations: 4000\ncpu: 219382.10000000068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 366721.0600588135,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 366714.69970600464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1854780.977596614,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1854627.6985743502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 724252.5109718393,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 724230.7210031329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3152.9231797239077,
            "unit": "ns/iter",
            "extra": "iterations: 254412\ncpu: 3152.8178702262353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14704.508613778684,
            "unit": "ns/iter",
            "extra": "iterations: 56131\ncpu: 14704.23295505169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 12319.609125327916,
            "unit": "ns/iter",
            "extra": "iterations: 67088\ncpu: 12319.222513713368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 12174.578702335248,
            "unit": "ns/iter",
            "extra": "iterations: 67660\ncpu: 12174.184156074496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12591.451327296883,
            "unit": "ns/iter",
            "extra": "iterations: 64605\ncpu: 12590.96045197744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 42143.91497374046,
            "unit": "ns/iter",
            "extra": "iterations: 20182\ncpu: 42142.77078584854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 457159.3628178171,
            "unit": "ns/iter",
            "extra": "iterations: 1888\ncpu: 457150.47669491364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 372912.2520500386,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 372900.90634441195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 368186.7922580662,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 368180.7741935503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 368624.8819503638,
            "unit": "ns/iter",
            "extra": "iterations: 2338\ncpu: 368615.95380667225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 227674.5651499294,
            "unit": "ns/iter",
            "extra": "iterations: 3868\ncpu: 227663.00413650463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 368181.6085106143,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 368172.25531914923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 287.56580831786715,
            "unit": "ns/iter",
            "extra": "iterations: 2431995\ncpu: 287.55971948955533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1430.768943403926,
            "unit": "ns/iter",
            "extra": "iterations: 489326\ncpu: 1430.758839710135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1128.4704319141135,
            "unit": "ns/iter",
            "extra": "iterations: 619012\ncpu: 1128.4653609299942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1168.2235115549936,
            "unit": "ns/iter",
            "extra": "iterations: 621941\ncpu: 1168.2137051585266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 967.7763990324579,
            "unit": "ns/iter",
            "extra": "iterations: 724733\ncpu: 967.7790303463419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7589.1042572523265,
            "unit": "ns/iter",
            "extra": "iterations: 91303\ncpu: 7588.944503466509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19259.193741384137,
            "unit": "ns/iter",
            "extra": "iterations: 36270\ncpu: 19259.054314860765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4468.320935216254,
            "unit": "ns/iter",
            "extra": "iterations: 155857\ncpu: 4468.278614370826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4442.249637302344,
            "unit": "ns/iter",
            "extra": "iterations: 157845\ncpu: 4442.233203459053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4437.288993040432,
            "unit": "ns/iter",
            "extra": "iterations: 155329\ncpu: 4437.220351640694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9398.111473411482,
            "unit": "ns/iter",
            "extra": "iterations: 75444\ncpu: 9398.03828004883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 7769.189105766984,
            "unit": "ns/iter",
            "extra": "iterations: 90066\ncpu: 7769.103768347718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3192.516950633119,
            "unit": "ns/iter",
            "extra": "iterations: 217514\ncpu: 3192.5016320788855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16012.762119869576,
            "unit": "ns/iter",
            "extra": "iterations: 42946\ncpu: 16012.413263167551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12658.522943580301,
            "unit": "ns/iter",
            "extra": "iterations: 55266\ncpu: 12658.431947309391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12670.844934764602,
            "unit": "ns/iter",
            "extra": "iterations: 55338\ncpu: 12670.747045430022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12996.522543157576,
            "unit": "ns/iter",
            "extra": "iterations: 53697\ncpu: 12996.385272920428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28008.023345839076,
            "unit": "ns/iter",
            "extra": "iterations: 25058\ncpu: 28007.785936627373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98525.40941671284,
            "unit": "ns/iter",
            "extra": "iterations: 7115\ncpu: 98524.0477863676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83734.79013527562,
            "unit": "ns/iter",
            "extra": "iterations: 8353\ncpu: 83734.1673650189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83648.5249489007,
            "unit": "ns/iter",
            "extra": "iterations: 8317\ncpu: 83646.87988457434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84534.7373651683,
            "unit": "ns/iter",
            "extra": "iterations: 8251\ncpu: 84533.53532905104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54032.912129385564,
            "unit": "ns/iter",
            "extra": "iterations: 12985\ncpu: 54032.49133615735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83750.34705108024,
            "unit": "ns/iter",
            "extra": "iterations: 8359\ncpu: 83749.38389759531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2956.3598829551015,
            "unit": "ns/iter",
            "extra": "iterations: 236149\ncpu: 2956.3377359209367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15004.845303748649,
            "unit": "ns/iter",
            "extra": "iterations: 46420\ncpu: 15004.659629470341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12173.703994467256,
            "unit": "ns/iter",
            "extra": "iterations: 57830\ncpu: 12173.626145599219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12018.242328334713,
            "unit": "ns/iter",
            "extra": "iterations: 58136\ncpu: 12018.054217696445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12567.589111047528,
            "unit": "ns/iter",
            "extra": "iterations: 55616\ncpu: 12567.620828538456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27204.00081814162,
            "unit": "ns/iter",
            "extra": "iterations: 25668\ncpu: 27203.775128564852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96939.6214463048,
            "unit": "ns/iter",
            "extra": "iterations: 7246\ncpu: 96937.66215843377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81880.43393358591,
            "unit": "ns/iter",
            "extra": "iterations: 8552\ncpu: 81879.36155285269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81378.52261365244,
            "unit": "ns/iter",
            "extra": "iterations: 8601\ncpu: 81377.3165910942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82077.13720441042,
            "unit": "ns/iter",
            "extra": "iterations: 8542\ncpu: 82076.44579723768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54479.40875686035,
            "unit": "ns/iter",
            "extra": "iterations: 12927\ncpu: 54479.02839019048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83002.82063152954,
            "unit": "ns/iter",
            "extra": "iterations: 8424\ncpu: 83000.3679962027 ns\nthreads: 1"
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
        "date": 1705959963240,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 694.4337171221562,
            "unit": "ns/iter",
            "extra": "iterations: 1008888\ncpu: 694.3751932821086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10657.097130242915,
            "unit": "ns/iter",
            "extra": "iterations: 77916\ncpu: 10656.478772010885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23612.996487351855,
            "unit": "ns/iter",
            "extra": "iterations: 35301\ncpu: 23611.764539248183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 36888.4595997023,
            "unit": "ns/iter",
            "extra": "iterations: 22933\ncpu: 36887.22365150656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46677.10642287842,
            "unit": "ns/iter",
            "extra": "iterations: 17064\ncpu: 46675.63877168307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58871.557754863985,
            "unit": "ns/iter",
            "extra": "iterations: 14449\ncpu: 58869.34043878468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 57522.038499996605,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57519.35000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66603.78110404492,
            "unit": "ns/iter",
            "extra": "iterations: 13061\ncpu: 66603.05489625604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76497.45875251947,
            "unit": "ns/iter",
            "extra": "iterations: 11431\ncpu: 76494.65488583679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 572.166487150753,
            "unit": "ns/iter",
            "extra": "iterations: 1225518\ncpu: 572.1531629890378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 475.4169108985636,
            "unit": "ns/iter",
            "extra": "iterations: 1471962\ncpu: 475.3955604832194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 480.6227163999187,
            "unit": "ns/iter",
            "extra": "iterations: 1466544\ncpu: 480.6140831778665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 481.2639214164057,
            "unit": "ns/iter",
            "extra": "iterations: 1452618\ncpu: 481.24544787411395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 961.9371832680183,
            "unit": "ns/iter",
            "extra": "iterations: 724982\ncpu: 961.9430551379216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3251.0201129158986,
            "unit": "ns/iter",
            "extra": "iterations: 245315\ncpu: 3250.940627356666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14343.1071080469,
            "unit": "ns/iter",
            "extra": "iterations: 56429\ncpu: 14342.937142249588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11738.636743395047,
            "unit": "ns/iter",
            "extra": "iterations: 69422\ncpu: 11738.290455475208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11637.744717305322,
            "unit": "ns/iter",
            "extra": "iterations: 70040\ncpu: 11637.709880068502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 12178.071132051446,
            "unit": "ns/iter",
            "extra": "iterations: 66004\ncpu: 12177.902854372505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42223.77806605686,
            "unit": "ns/iter",
            "extra": "iterations: 20042\ncpu: 42223.11146592157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 454784.997984899,
            "unit": "ns/iter",
            "extra": "iterations: 1985\ncpu: 454757.1284634769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 357290.92249998945,
            "unit": "ns/iter",
            "extra": "iterations: 2400\ncpu: 357279.8750000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 359634.97910691286,
            "unit": "ns/iter",
            "extra": "iterations: 2441\ncpu: 359627.3248668573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 360802.9038142229,
            "unit": "ns/iter",
            "extra": "iterations: 2412\ncpu: 360791.1276948589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 219459.2416666789,
            "unit": "ns/iter",
            "extra": "iterations: 3960\ncpu: 219456.64141414122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 355838.85189770634,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 355831.0643564366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1851495.0521042617,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1851437.2745490985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 738161.7837626551,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 738110.9289617483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2468228.6149731767,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2467930.748663107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3126.7014145525086,
            "unit": "ns/iter",
            "extra": "iterations: 246509\ncpu: 3126.497206998518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14578.58336467529,
            "unit": "ns/iter",
            "extra": "iterations: 55833\ncpu: 14577.64583669157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11903.530003072468,
            "unit": "ns/iter",
            "extra": "iterations: 68343\ncpu: 11902.960069063334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11786.709974550757,
            "unit": "ns/iter",
            "extra": "iterations: 69156\ncpu: 11786.385852276013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12232.917825420047,
            "unit": "ns/iter",
            "extra": "iterations: 65300\ncpu: 12232.442572741264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41665.22827599673,
            "unit": "ns/iter",
            "extra": "iterations: 20116\ncpu: 41662.93497713291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 454545.6087414506,
            "unit": "ns/iter",
            "extra": "iterations: 1899\ncpu: 454527.6461295394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 375686.03209017136,
            "unit": "ns/iter",
            "extra": "iterations: 2306\ncpu: 375672.59323503904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 371034.24627814174,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 371029.77456401405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 371295.92500002094,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 371280.5084745787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 220510.0886974082,
            "unit": "ns/iter",
            "extra": "iterations: 3946\ncpu: 220499.72123669498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 367647.8942675406,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 367626.9639065808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1866891.9755102755,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1866768.9795918239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 725675.4298039454,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 725636.705882352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3214.056982733238,
            "unit": "ns/iter",
            "extra": "iterations: 251234\ncpu: 3213.9423804102958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14120.984563965594,
            "unit": "ns/iter",
            "extra": "iterations: 58046\ncpu: 14120.366605795383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11870.73655976186,
            "unit": "ns/iter",
            "extra": "iterations: 69158\ncpu: 11869.861765811671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11780.527113534694,
            "unit": "ns/iter",
            "extra": "iterations: 69670\ncpu: 11779.97416391561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12218.73964586327,
            "unit": "ns/iter",
            "extra": "iterations: 66302\ncpu: 12218.36445356088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41376.02092728102,
            "unit": "ns/iter",
            "extra": "iterations: 19735\ncpu: 41374.32480364847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 442262.27071540395,
            "unit": "ns/iter",
            "extra": "iterations: 1943\ncpu: 442238.03396809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 368699.2070879608,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 368695.7728437246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 366910.75718578213,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 366894.8090948085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 367103.15618315263,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 367098.24561403587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 223634.07931211387,
            "unit": "ns/iter",
            "extra": "iterations: 3896\ncpu: 223627.695071869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 362390.225929069,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 362392.440878377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 289.5780786040994,
            "unit": "ns/iter",
            "extra": "iterations: 2406261\ncpu: 289.5730762373669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1449.4268310358264,
            "unit": "ns/iter",
            "extra": "iterations: 482978\ncpu: 1449.3798889390405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1100.547098067756,
            "unit": "ns/iter",
            "extra": "iterations: 636438\ncpu: 1100.5092404916109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1155.2338549822966,
            "unit": "ns/iter",
            "extra": "iterations: 605388\ncpu: 1155.2039353274236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 972.6198652596486,
            "unit": "ns/iter",
            "extra": "iterations: 721239\ncpu: 972.5828747474767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7535.873183947404,
            "unit": "ns/iter",
            "extra": "iterations: 92646\ncpu: 7535.7500593657915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18386.51191475851,
            "unit": "ns/iter",
            "extra": "iterations: 38104\ncpu: 18386.25078731915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4376.5303309912215,
            "unit": "ns/iter",
            "extra": "iterations: 159853\ncpu: 4376.4320969891605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4394.163616049013,
            "unit": "ns/iter",
            "extra": "iterations: 159312\ncpu: 4394.10590539319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4398.107484312188,
            "unit": "ns/iter",
            "extra": "iterations: 158879\ncpu: 4398.024912040016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9183.304537189424,
            "unit": "ns/iter",
            "extra": "iterations: 76457\ncpu: 9183.025753037755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8290.789185538864,
            "unit": "ns/iter",
            "extra": "iterations: 84387\ncpu: 8290.63599843574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3126.5853681368067,
            "unit": "ns/iter",
            "extra": "iterations: 224305\ncpu: 3126.545551815613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15853.22735173967,
            "unit": "ns/iter",
            "extra": "iterations: 44297\ncpu: 15852.978757026673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12665.412479755143,
            "unit": "ns/iter",
            "extra": "iterations: 54953\ncpu: 12665.21209033168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12729.309785660023,
            "unit": "ns/iter",
            "extra": "iterations: 55193\ncpu: 12729.023608066143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13186.123260360648,
            "unit": "ns/iter",
            "extra": "iterations: 52669\ncpu: 13186.22149651599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28201.13494277935,
            "unit": "ns/iter",
            "extra": "iterations: 24729\ncpu: 28200.465041044572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98778.50077519109,
            "unit": "ns/iter",
            "extra": "iterations: 7095\ncpu: 98776.94150810527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84077.87292418805,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 84074.00722021518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84215.80594321343,
            "unit": "ns/iter",
            "extra": "iterations: 8312\ncpu: 84213.51058710378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84766.54066119145,
            "unit": "ns/iter",
            "extra": "iterations: 8288\ncpu: 84767.14527027153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54268.806884258855,
            "unit": "ns/iter",
            "extra": "iterations: 12899\ncpu: 54267.64865493436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84183.7242996229,
            "unit": "ns/iter",
            "extra": "iterations: 8317\ncpu: 84182.27726343568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2987.2400096630495,
            "unit": "ns/iter",
            "extra": "iterations: 235953\ncpu: 2987.1610024030065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15080.345017655945,
            "unit": "ns/iter",
            "extra": "iterations: 46444\ncpu: 15079.898372233265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12025.78374829433,
            "unit": "ns/iter",
            "extra": "iterations: 57877\ncpu: 12025.699327884808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11929.818558283068,
            "unit": "ns/iter",
            "extra": "iterations: 58680\ncpu: 11929.621676891624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12366.683736216279,
            "unit": "ns/iter",
            "extra": "iterations: 56592\ncpu: 12366.505866553449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27333.150443852952,
            "unit": "ns/iter",
            "extra": "iterations: 25684\ncpu: 27332.44821678883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96731.10619468564,
            "unit": "ns/iter",
            "extra": "iterations: 7232\ncpu: 96731.81692477792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81711.39271826461,
            "unit": "ns/iter",
            "extra": "iterations: 8487\ncpu: 81710.16849298895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81080.39207049474,
            "unit": "ns/iter",
            "extra": "iterations: 8626\ncpu: 81078.9125898436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81583.45109453944,
            "unit": "ns/iter",
            "extra": "iterations: 8588\ncpu: 81582.16115510064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54363.41962210847,
            "unit": "ns/iter",
            "extra": "iterations: 12914\ncpu: 54361.59981415464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82362.38451596792,
            "unit": "ns/iter",
            "extra": "iterations: 8512\ncpu: 82363.08740601483 ns\nthreads: 1"
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
        "date": 1705962032582,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 710.3854318427102,
            "unit": "ns/iter",
            "extra": "iterations: 986343\ncpu: 710.372760794166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10760.582834255063,
            "unit": "ns/iter",
            "extra": "iterations: 78144\ncpu: 10760.364199426698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23739.160897690806,
            "unit": "ns/iter",
            "extra": "iterations: 35246\ncpu: 23738.91505419055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 38319.53047768706,
            "unit": "ns/iter",
            "extra": "iterations: 22902\ncpu: 38319.59217535588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50597.57131933845,
            "unit": "ns/iter",
            "extra": "iterations: 17001\ncpu: 50596.9295923769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58389.025874558094,
            "unit": "ns/iter",
            "extra": "iterations: 14493\ncpu: 58388.2563996412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 58385.62039999715,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58384.44999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 67491.05195713762,
            "unit": "ns/iter",
            "extra": "iterations: 12876\ncpu: 67490.23765144456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 77084.04998233756,
            "unit": "ns/iter",
            "extra": "iterations: 11324\ncpu: 77082.8329212292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 574.20599557307,
            "unit": "ns/iter",
            "extra": "iterations: 1213929\ncpu: 574.1989029012406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 476.28615416022893,
            "unit": "ns/iter",
            "extra": "iterations: 1459832\ncpu: 476.2711051682666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 462.3617632236788,
            "unit": "ns/iter",
            "extra": "iterations: 1498165\ncpu: 462.3438673310358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 471.8418986891341,
            "unit": "ns/iter",
            "extra": "iterations: 1482328\ncpu: 471.8299863458022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1001.8245940440182,
            "unit": "ns/iter",
            "extra": "iterations: 746571\ncpu: 1001.7751828024403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3023.1036995265076,
            "unit": "ns/iter",
            "extra": "iterations: 265980\ncpu: 3023.041958041959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14388.80333509007,
            "unit": "ns/iter",
            "extra": "iterations: 56970\ncpu: 14387.700544146024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11761.735867968924,
            "unit": "ns/iter",
            "extra": "iterations: 70832\ncpu: 11761.058561102307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11635.459785945735,
            "unit": "ns/iter",
            "extra": "iterations: 69702\ncpu: 11635.03342802215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11815.520438988653,
            "unit": "ns/iter",
            "extra": "iterations: 68521\ncpu: 11804.01044935128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41631.5664859581,
            "unit": "ns/iter",
            "extra": "iterations: 20290\ncpu: 41630.03942828975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 433583.56648268324,
            "unit": "ns/iter",
            "extra": "iterations: 1993\ncpu: 433572.85499247425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 358549.3915562684,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 358531.125827814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 360630.38747955416,
            "unit": "ns/iter",
            "extra": "iterations: 2444\ncpu: 360611.82487725036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 360563.2491610875,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 360541.61073825473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 221056.49183674002,
            "unit": "ns/iter",
            "extra": "iterations: 3920\ncpu: 221044.92346938752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 358806.043153517,
            "unit": "ns/iter",
            "extra": "iterations: 2410\ncpu: 358784.64730290364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1851564.653999958,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1851436.800000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 733628.2971698116,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 733588.9937106912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2468657.7935655206,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2468579.892761396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3131.7611786935126,
            "unit": "ns/iter",
            "extra": "iterations: 254010\ncpu: 3131.7507184756505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14208.001739492598,
            "unit": "ns/iter",
            "extra": "iterations: 57488\ncpu: 14208.130392429743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11177.664370486986,
            "unit": "ns/iter",
            "extra": "iterations: 72294\ncpu: 11177.529255539908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11080.127806185677,
            "unit": "ns/iter",
            "extra": "iterations: 73142\ncpu: 11080.197424188556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 11210.138528983742,
            "unit": "ns/iter",
            "extra": "iterations: 71624\ncpu: 11210.20188763545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41198.33354829512,
            "unit": "ns/iter",
            "extra": "iterations: 20159\ncpu: 41198.69537179402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 455268.37011617277,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 455262.7771911319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 375534.8184187893,
            "unit": "ns/iter",
            "extra": "iterations: 2302\ncpu: 375531.32059078966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 372941.5097529214,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 372938.0147377551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 373350.39167738525,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 373345.47404547373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 223779.0202304592,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 223779.20614596573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 370829.605957421,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 370829.61702127586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1864498.792260673,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1864337.6782077388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 723814.4323689907,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 723773.5731039841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3240.2628826569376,
            "unit": "ns/iter",
            "extra": "iterations: 253752\ncpu: 3240.174264636351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14752.952736318493,
            "unit": "ns/iter",
            "extra": "iterations: 56280\ncpu: 14752.65991471225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11597.902199049066,
            "unit": "ns/iter",
            "extra": "iterations: 71349\ncpu: 11597.77992683846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11535.962128909334,
            "unit": "ns/iter",
            "extra": "iterations: 71849\ncpu: 11535.793121685763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 11867.941228375752,
            "unit": "ns/iter",
            "extra": "iterations: 69132\ncpu: 11867.841231267741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41408.00930668085,
            "unit": "ns/iter",
            "extra": "iterations: 20308\ncpu: 41407.31238920629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 439188.6833333285,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 439184.24242424156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 362808.72438309,
            "unit": "ns/iter",
            "extra": "iterations: 2391\ncpu: 362801.29652865126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 361919.17779635557,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 361914.1903171935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 361128.87473992084,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 361132.2097378293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 223789.83132837046,
            "unit": "ns/iter",
            "extra": "iterations: 3907\ncpu: 223786.51138981222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 361932.3142737765,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 361923.2470784644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 286.94794227430197,
            "unit": "ns/iter",
            "extra": "iterations: 2442308\ncpu: 286.94333392839803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1471.0813427125797,
            "unit": "ns/iter",
            "extra": "iterations: 476945\ncpu: 1471.0616528111264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1098.6797403172532,
            "unit": "ns/iter",
            "extra": "iterations: 636777\ncpu: 1098.6513331982758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1154.4796170842048,
            "unit": "ns/iter",
            "extra": "iterations: 607862\ncpu: 1154.478154581134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 968.1431359450471,
            "unit": "ns/iter",
            "extra": "iterations: 724528\ncpu: 968.1345648477326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7570.824250100706,
            "unit": "ns/iter",
            "extra": "iterations: 91579\ncpu: 7570.83610871494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18616.696703237383,
            "unit": "ns/iter",
            "extra": "iterations: 37643\ncpu: 18616.486464946982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4390.836017946883,
            "unit": "ns/iter",
            "extra": "iterations: 159365\ncpu: 4390.806638847984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4381.823833318384,
            "unit": "ns/iter",
            "extra": "iterations: 159298\ncpu: 4381.741139248423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4394.844379173401,
            "unit": "ns/iter",
            "extra": "iterations: 159336\ncpu: 4394.8856504494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9198.677663843317,
            "unit": "ns/iter",
            "extra": "iterations: 76262\ncpu: 9198.553670241927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 7433.780659863488,
            "unit": "ns/iter",
            "extra": "iterations: 91716\ncpu: 7433.749836451591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3074.9370635812247,
            "unit": "ns/iter",
            "extra": "iterations: 227992\ncpu: 3074.881574792119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15764.475735327465,
            "unit": "ns/iter",
            "extra": "iterations: 44674\ncpu: 15764.254376147048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12500.978373948334,
            "unit": "ns/iter",
            "extra": "iterations: 56136\ncpu: 12500.958386775079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12506.471604364935,
            "unit": "ns/iter",
            "extra": "iterations: 56153\ncpu: 12506.31845137372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12918.42303025776,
            "unit": "ns/iter",
            "extra": "iterations: 54398\ncpu: 12918.403250119498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28228.4415088271,
            "unit": "ns/iter",
            "extra": "iterations: 24867\ncpu: 28228.06128604143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98531.45540370312,
            "unit": "ns/iter",
            "extra": "iterations: 7097\ncpu: 98532.37987882234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84219.76271185592,
            "unit": "ns/iter",
            "extra": "iterations: 8319\ncpu: 84218.78831590395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84273.56914575332,
            "unit": "ns/iter",
            "extra": "iterations: 8323\ncpu: 84271.53670551465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85213.58901150683,
            "unit": "ns/iter",
            "extra": "iterations: 8336\ncpu: 85212.09213051872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54302.79869145437,
            "unit": "ns/iter",
            "extra": "iterations: 12533\ncpu: 54301.970797096146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83733.77460582615,
            "unit": "ns/iter",
            "extra": "iterations: 8372\ncpu: 83733.8509316767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2947.8219416136913,
            "unit": "ns/iter",
            "extra": "iterations: 237658\ncpu: 2947.7484452448725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 14908.529303639425,
            "unit": "ns/iter",
            "extra": "iterations: 46786\ncpu: 14908.459795665454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 11892.026141459934,
            "unit": "ns/iter",
            "extra": "iterations: 58872\ncpu: 11891.739706481887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11818.184213194452,
            "unit": "ns/iter",
            "extra": "iterations: 59176\ncpu: 11817.970123022997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12330.19065127738,
            "unit": "ns/iter",
            "extra": "iterations: 56842\ncpu: 12330.319130220576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27133.023452594156,
            "unit": "ns/iter",
            "extra": "iterations: 25882\ncpu: 27132.32748628381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97150.6228825395,
            "unit": "ns/iter",
            "extra": "iterations: 7202\ncpu: 97150.79144682043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82018.04681648762,
            "unit": "ns/iter",
            "extra": "iterations: 8544\ncpu: 82016.16338951186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81664.65320971466,
            "unit": "ns/iter",
            "extra": "iterations: 8521\ncpu: 81663.7483863398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82215.36855066448,
            "unit": "ns/iter",
            "extra": "iterations: 8528\ncpu: 82215.17354596667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54636.45852444316,
            "unit": "ns/iter",
            "extra": "iterations: 12863\ncpu: 54635.93251962988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82310.03734146684,
            "unit": "ns/iter",
            "extra": "iterations: 8516\ncpu: 82309.89901362112 ns\nthreads: 1"
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
        "date": 1705963484473,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 694.661784406791,
            "unit": "ns/iter",
            "extra": "iterations: 1005477\ncpu: 694.6350836468661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 10710.737773032426,
            "unit": "ns/iter",
            "extra": "iterations: 77738\ncpu: 10710.656307082765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 23573.537190785904,
            "unit": "ns/iter",
            "extra": "iterations: 35291\ncpu: 23572.670085857582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 37039.92012975654,
            "unit": "ns/iter",
            "extra": "iterations: 22812\ncpu: 37039.159214448526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 46648.51568775781,
            "unit": "ns/iter",
            "extra": "iterations: 17179\ncpu: 46645.951452354595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57147.77320005139,
            "unit": "ns/iter",
            "extra": "iterations: 14806\ncpu: 57146.67702282859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 57767.53359999702,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57766.57999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 66715.81744079078,
            "unit": "ns/iter",
            "extra": "iterations: 13004\ncpu: 66711.79637034755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 76693.57341495078,
            "unit": "ns/iter",
            "extra": "iterations: 11435\ncpu: 76688.5526891123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 563.6325896173511,
            "unit": "ns/iter",
            "extra": "iterations: 1224930\ncpu: 563.5967769586825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 465.8375087370319,
            "unit": "ns/iter",
            "extra": "iterations: 1507958\ncpu: 465.81105044039697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 461.5603600491473,
            "unit": "ns/iter",
            "extra": "iterations: 1516682\ncpu: 461.53669655207824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 472.43102950967636,
            "unit": "ns/iter",
            "extra": "iterations: 1480365\ncpu: 472.4286915726861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 942.7745530785377,
            "unit": "ns/iter",
            "extra": "iterations: 742636\ncpu: 942.7409928955789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3191.318454422299,
            "unit": "ns/iter",
            "extra": "iterations: 250780\ncpu: 3191.1962676449507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 14183.256608761916,
            "unit": "ns/iter",
            "extra": "iterations: 58256\ncpu: 14183.366520186748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 11623.326157732172,
            "unit": "ns/iter",
            "extra": "iterations: 71260\ncpu: 11624.73758069042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 11290.396485289371,
            "unit": "ns/iter",
            "extra": "iterations: 76820\ncpu: 11290.585784951827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 11553.030401925082,
            "unit": "ns/iter",
            "extra": "iterations: 69864\ncpu: 11552.469082789426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41785.89495163373,
            "unit": "ns/iter",
            "extra": "iterations: 19848\ncpu: 41783.837162434356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 435114.6048144651,
            "unit": "ns/iter",
            "extra": "iterations: 1994\ncpu: 435090.5215646955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 359612.44160128705,
            "unit": "ns/iter",
            "extra": "iterations: 2423\ncpu: 359593.974411886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 359817.09355508664,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 359797.04781704856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 361051.9340842757,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 361069.08635794744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 218986.27254202848,
            "unit": "ns/iter",
            "extra": "iterations: 3926\ncpu: 218978.55323484488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 362817.9338358348,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 362798.70184254594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1850507.2971888,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1850407.0281124525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 733939.2818110946,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 733897.5800156137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2465671.323529312,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2465609.893048123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3197.312224962673,
            "unit": "ns/iter",
            "extra": "iterations: 253375\ncpu: 3197.194671928946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 14559.794034066112,
            "unit": "ns/iter",
            "extra": "iterations: 58063\ncpu: 14559.435440814264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 11981.086325318074,
            "unit": "ns/iter",
            "extra": "iterations: 69157\ncpu: 11980.672961522405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 11802.402336750378,
            "unit": "ns/iter",
            "extra": "iterations: 69755\ncpu: 11802.48440971977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 12387.72457268915,
            "unit": "ns/iter",
            "extra": "iterations: 66228\ncpu: 12387.481125807792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 43196.95447337363,
            "unit": "ns/iter",
            "extra": "iterations: 19549\ncpu: 43195.97933398159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 457170.39098140254,
            "unit": "ns/iter",
            "extra": "iterations: 1885\ncpu: 457156.0742705583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 386560.96973626554,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 386543.4068309553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 373090.6203941816,
            "unit": "ns/iter",
            "extra": "iterations: 2334\ncpu: 373089.802913452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 369789.1111110774,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 369785.28528528253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 220533.6527428125,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 220534.97735279388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 372369.1757498891,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 372367.1313899462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1855415.9877800539,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1855409.775967419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 736657.9769475486,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 736659.0620031777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 3157.043479811183,
            "unit": "ns/iter",
            "extra": "iterations: 252439\ncpu: 3157.026846089561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 14577.57091669155,
            "unit": "ns/iter",
            "extra": "iterations: 56933\ncpu: 14577.313684506345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 11915.376756436297,
            "unit": "ns/iter",
            "extra": "iterations: 69103\ncpu: 11915.197603577299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 11816.159966114681,
            "unit": "ns/iter",
            "extra": "iterations: 69646\ncpu: 11816.171783016905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 12315.086318456868,
            "unit": "ns/iter",
            "extra": "iterations: 66301\ncpu: 12315.212440234645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41450.72562212488,
            "unit": "ns/iter",
            "extra": "iterations: 20213\ncpu: 41449.94310592185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 449315.70155436936,
            "unit": "ns/iter",
            "extra": "iterations: 1930\ncpu: 449314.9740932651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 368117.3433403656,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 368120.9302325591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 367843.99874266284,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 367841.3243922892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 375735.59223708184,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 375734.18196994974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 226299.05966708864,
            "unit": "ns/iter",
            "extra": "iterations: 3905\ncpu: 226301.02432778434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 367155.1365914752,
            "unit": "ns/iter",
            "extra": "iterations: 2394\ncpu: 367154.67836257175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 286.5373066712399,
            "unit": "ns/iter",
            "extra": "iterations: 2430316\ncpu: 286.5333150092401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1440.7387835958027,
            "unit": "ns/iter",
            "extra": "iterations: 487634\ncpu: 1440.73362398849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1115.4151921224848,
            "unit": "ns/iter",
            "extra": "iterations: 629234\ncpu: 1115.4263755614015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1117.4759128205699,
            "unit": "ns/iter",
            "extra": "iterations: 620330\ncpu: 1117.4852094852788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 957.2912152401299,
            "unit": "ns/iter",
            "extra": "iterations: 731016\ncpu: 957.2733018155557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7442.847025347467,
            "unit": "ns/iter",
            "extra": "iterations: 95944\ncpu: 7442.760360210113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 18655.962495337106,
            "unit": "ns/iter",
            "extra": "iterations: 37542\ncpu: 18655.9053859676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4406.930974197251,
            "unit": "ns/iter",
            "extra": "iterations: 159013\ncpu: 4406.973643664327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4402.857606970839,
            "unit": "ns/iter",
            "extra": "iterations: 158828\ncpu: 4402.796106480021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4415.662656163198,
            "unit": "ns/iter",
            "extra": "iterations: 158168\ncpu: 4415.7054524303385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9217.416371461308,
            "unit": "ns/iter",
            "extra": "iterations: 76218\ncpu: 9217.364664514846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8330.917678876514,
            "unit": "ns/iter",
            "extra": "iterations: 84304\ncpu: 8330.999715315944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3097.2543925675536,
            "unit": "ns/iter",
            "extra": "iterations: 224527\ncpu: 3097.2007820886147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15659.190609154475,
            "unit": "ns/iter",
            "extra": "iterations: 44767\ncpu: 15658.945205173397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12528.865861945867,
            "unit": "ns/iter",
            "extra": "iterations: 55920\ncpu: 12528.75178826896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12501.487914598883,
            "unit": "ns/iter",
            "extra": "iterations: 56018\ncpu: 12501.576279053246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 12965.577490841235,
            "unit": "ns/iter",
            "extra": "iterations: 54058\ncpu: 12965.6813052648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28186.897373930453,
            "unit": "ns/iter",
            "extra": "iterations: 24828\ncpu: 28186.817303045274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98452.46807610977,
            "unit": "ns/iter",
            "extra": "iterations: 7095\ncpu: 98453.15010570793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83675.97655205888,
            "unit": "ns/iter",
            "extra": "iterations: 8231\ncpu: 83674.38950309798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83925.7600721543,
            "unit": "ns/iter",
            "extra": "iterations: 8315\ncpu: 83926.57847264026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84967.53293703769,
            "unit": "ns/iter",
            "extra": "iterations: 8243\ncpu: 84966.4685187441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 54482.793194124904,
            "unit": "ns/iter",
            "extra": "iterations: 12930\ncpu: 54482.69141531301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84337.51937424162,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 84337.37665463284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2948.305120061706,
            "unit": "ns/iter",
            "extra": "iterations: 237087\ncpu: 2948.2928207788655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15007.789948564086,
            "unit": "ns/iter",
            "extra": "iterations: 46660\ncpu: 15007.884697813974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12008.817910498867,
            "unit": "ns/iter",
            "extra": "iterations: 58301\ncpu: 12008.752851580655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 11800.146106853992,
            "unit": "ns/iter",
            "extra": "iterations: 59258\ncpu: 11799.974686962125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 12479.245317316623,
            "unit": "ns/iter",
            "extra": "iterations: 56111\ncpu: 12479.19124592314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 27141.094432670972,
            "unit": "ns/iter",
            "extra": "iterations: 25955\ncpu: 27141.360046233804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96687.68775962177,
            "unit": "ns/iter",
            "extra": "iterations: 7222\ncpu: 96688.71503738603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82388.80025864227,
            "unit": "ns/iter",
            "extra": "iterations: 8506\ncpu: 82387.31483658504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81825.69776119017,
            "unit": "ns/iter",
            "extra": "iterations: 8576\ncpu: 81824.28871268708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82773.08778760496,
            "unit": "ns/iter",
            "extra": "iterations: 8475\ncpu: 82772.20058997067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 54547.29386991303,
            "unit": "ns/iter",
            "extra": "iterations: 12822\ncpu: 54547.239120262224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82958.7848940462,
            "unit": "ns/iter",
            "extra": "iterations: 8447\ncpu: 82959.55960696051 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}