window.BENCHMARK_DATA = {
  "lastUpdate": 1702490342162,
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
      }
    ]
  }
}