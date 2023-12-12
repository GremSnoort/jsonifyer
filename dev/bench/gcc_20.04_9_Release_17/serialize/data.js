window.BENCHMARK_DATA = {
  "lastUpdate": 1702409091285,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-9 20.04 Release c++-17": [
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397904235,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 952.3100136912851,
            "unit": "ns/iter",
            "extra": "iterations: 734774\ncpu: 952.2541625043892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19113.145210605893,
            "unit": "ns/iter",
            "extra": "iterations: 43826\ncpu: 19111.707662118377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43627.96148575937,
            "unit": "ns/iter",
            "extra": "iterations: 20434\ncpu: 43625.34990701771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 55086.61609999876,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55080.85 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 66586.86325643622,
            "unit": "ns/iter",
            "extra": "iterations: 11964\ncpu: 66582.35539953195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 83383.5599087124,
            "unit": "ns/iter",
            "extra": "iterations: 10516\ncpu: 83377.72917459109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 104443.50108286836,
            "unit": "ns/iter",
            "extra": "iterations: 8773\ncpu: 104435.23310156165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 128961.67415433469,
            "unit": "ns/iter",
            "extra": "iterations: 7568\ncpu: 128955.54968287534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 145131.83358804576,
            "unit": "ns/iter",
            "extra": "iterations: 5889\ncpu: 145026.82968245898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 788.0300715304294,
            "unit": "ns/iter",
            "extra": "iterations: 890111\ncpu: 788.0178988912613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 662.5741110644931,
            "unit": "ns/iter",
            "extra": "iterations: 1062338\ncpu: 662.5290632548204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 654.8189257534085,
            "unit": "ns/iter",
            "extra": "iterations: 1065342\ncpu: 654.7690788497958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 655.4674489562775,
            "unit": "ns/iter",
            "extra": "iterations: 1073345\ncpu: 655.3983108879248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1203.0573975822867,
            "unit": "ns/iter",
            "extra": "iterations: 582028\ncpu: 1202.9244297525215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5540.376220000097,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5540.367999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 34179.62200252422,
            "unit": "ns/iter",
            "extra": "iterations: 28524\ncpu: 34177.30332351704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21491.21846671832,
            "unit": "ns/iter",
            "extra": "iterations: 38610\ncpu: 21490.968660968643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 22787.474810875283,
            "unit": "ns/iter",
            "extra": "iterations: 36484\ncpu: 22786.85451156667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 22146.030422609783,
            "unit": "ns/iter",
            "extra": "iterations: 37505\ncpu: 22145.05265964541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 54308.15830000029,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54305.92999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 622577.2360000405,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622513.6000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 617593.7350852272,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 617536.0795454554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 618229.9282195608,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 618174.7361013354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 614183.4025513924,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 614126.5768958181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 363060.17072165466,
            "unit": "ns/iter",
            "extra": "iterations: 2425\ncpu: 363031.42268041224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 614908.7749469227,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 614876.8577494696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2819618.988023969,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2819504.790419154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1212649.2591656146,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 1212581.1630847026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3684989.1003860803,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3684932.818532819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5451.0443800000985,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5450.800999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 31959.2551381446,
            "unit": "ns/iter",
            "extra": "iterations: 26566\ncpu: 31958.93247007455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 23027.81332997146,
            "unit": "ns/iter",
            "extra": "iterations: 35694\ncpu: 23026.480641004142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 24082.131965621415,
            "unit": "ns/iter",
            "extra": "iterations: 36070\ncpu: 24081.566398669143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 23059.41048059156,
            "unit": "ns/iter",
            "extra": "iterations: 35914\ncpu: 23058.673497800282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 53667.80200000107,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53666.319999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 621137.4239999828,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621108.9000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 510718.9130000052,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510671.3999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 503306.890000033,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503298.0000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 505267.1260000352,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505266.80000000115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 362623.32555283775,
            "unit": "ns/iter",
            "extra": "iterations: 2442\ncpu: 362610.4422604404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 618695.8656403149,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 618687.823652902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2954681.6050157878,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2954606.896551737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1241375.94002612,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 1241300.9126466725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5492.398740000226,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5492.31600000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 31375.909590898904,
            "unit": "ns/iter",
            "extra": "iterations: 26546\ncpu: 31375.2768778723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 23075.153811994198,
            "unit": "ns/iter",
            "extra": "iterations: 36031\ncpu: 23074.45255474434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 22771.376245756805,
            "unit": "ns/iter",
            "extra": "iterations: 36524\ncpu: 22771.016318037444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 22958.295059747106,
            "unit": "ns/iter",
            "extra": "iterations: 36152\ncpu: 22956.674596149616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 51867.134100001516,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51867.12 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 613994.2080000082,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 613939.8000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 500673.3900000313,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500652.8999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 628951.3797019158,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 628913.0589070272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 630653.7372158855,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 630625.7812499999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 365824.1737499897,
            "unit": "ns/iter",
            "extra": "iterations: 2400\ncpu: 365793.4583333352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 625783.0474840492,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 625763.9262934085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 307.6203044852292,
            "unit": "ns/iter",
            "extra": "iterations: 2266711\ncpu: 307.6193215632683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2757.426907360064,
            "unit": "ns/iter",
            "extra": "iterations: 253767\ncpu: 2757.3080818231088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1863.9291514825384,
            "unit": "ns/iter",
            "extra": "iterations: 374842\ncpu: 1863.9258674321381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1856.5247434876633,
            "unit": "ns/iter",
            "extra": "iterations: 377857\ncpu: 1856.4832727725052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1490.0448945961427,
            "unit": "ns/iter",
            "extra": "iterations: 470903\ncpu: 1490.02236129309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 11577.901463108386,
            "unit": "ns/iter",
            "extra": "iterations: 60556\ncpu: 11577.879978862558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 32147.246343586474,
            "unit": "ns/iter",
            "extra": "iterations: 21811\ncpu: 32146.747054238756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7580.433538670985,
            "unit": "ns/iter",
            "extra": "iterations: 92693\ncpu: 7580.4192333833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7580.680457449978,
            "unit": "ns/iter",
            "extra": "iterations: 92163\ncpu: 7580.366307520376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7548.7784381132415,
            "unit": "ns/iter",
            "extra": "iterations: 92209\ncpu: 7548.756628962451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15909.291608757907,
            "unit": "ns/iter",
            "extra": "iterations: 43891\ncpu: 15908.885648538357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14788.800674535834,
            "unit": "ns/iter",
            "extra": "iterations: 47440\ncpu: 14788.615092748534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4212.371800420919,
            "unit": "ns/iter",
            "extra": "iterations: 166350\ncpu: 4212.132251277439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22217.644593993293,
            "unit": "ns/iter",
            "extra": "iterations: 31502\ncpu: 22217.240175227053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17392.507026516392,
            "unit": "ns/iter",
            "extra": "iterations: 40276\ncpu: 17392.216208163933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17410.421782277026,
            "unit": "ns/iter",
            "extra": "iterations: 40106\ncpu: 17410.20794893505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18278.461670883487,
            "unit": "ns/iter",
            "extra": "iterations: 38339\ncpu: 18277.944129998214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 37714.57967032927,
            "unit": "ns/iter",
            "extra": "iterations: 18564\ncpu: 37713.95712131002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 151495.36069811712,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 151491.9629390194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 131149.64818283464,
            "unit": "ns/iter",
            "extra": "iterations: 5338\ncpu: 131138.0479580366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 131252.6936970899,
            "unit": "ns/iter",
            "extra": "iterations: 5315\ncpu: 131224.9294449654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 131523.8633283113,
            "unit": "ns/iter",
            "extra": "iterations: 5312\ncpu: 131509.46912650493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 79540.95824847478,
            "unit": "ns/iter",
            "extra": "iterations: 8838\ncpu: 79534.13668250758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 129604.98132395615,
            "unit": "ns/iter",
            "extra": "iterations: 5408\ncpu: 129601.66420118244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4175.369636529839,
            "unit": "ns/iter",
            "extra": "iterations: 167359\ncpu: 4175.005228281716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22361.787214378695,
            "unit": "ns/iter",
            "extra": "iterations: 31379\ncpu: 22359.44102743843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17673.19645101348,
            "unit": "ns/iter",
            "extra": "iterations: 39786\ncpu: 17672.67380485598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17268.312649340765,
            "unit": "ns/iter",
            "extra": "iterations: 40595\ncpu: 17268.28180810441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18300.07925999614,
            "unit": "ns/iter",
            "extra": "iterations: 38216\ncpu: 18299.60749424312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37600.431607189,
            "unit": "ns/iter",
            "extra": "iterations: 18635\ncpu: 37598.91601824485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 151851.5651607294,
            "unit": "ns/iter",
            "extra": "iterations: 4604\ncpu: 151849.67419634998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 132987.38619509203,
            "unit": "ns/iter",
            "extra": "iterations: 5259\ncpu: 132979.50180642653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 131876.89085102905,
            "unit": "ns/iter",
            "extra": "iterations: 5323\ncpu: 131866.0905504407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 130627.42188092798,
            "unit": "ns/iter",
            "extra": "iterations: 5274\ncpu: 130615.47212741835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 79079.87126152375,
            "unit": "ns/iter",
            "extra": "iterations: 8894\ncpu: 79072.56577468017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 128398.74274164237,
            "unit": "ns/iter",
            "extra": "iterations: 5442\ncpu: 128395.60823226607 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409090418,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 889.0990515529633,
            "unit": "ns/iter",
            "extra": "iterations: 787287\ncpu: 889.0485934608345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18210.387902221202,
            "unit": "ns/iter",
            "extra": "iterations: 45777\ncpu: 18209.46982108919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 41546.55529825678,
            "unit": "ns/iter",
            "extra": "iterations: 21592\ncpu: 41544.91478325304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 50702.73619999739,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50699.20999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 63250.08143022079,
            "unit": "ns/iter",
            "extra": "iterations: 13005\ncpu: 63247.1972318339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 78749.56488137905,
            "unit": "ns/iter",
            "extra": "iterations: 11128\ncpu: 78746.63012221422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 94282.52620794183,
            "unit": "ns/iter",
            "extra": "iterations: 9272\ncpu: 94281.6544434857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 120374.13332498418,
            "unit": "ns/iter",
            "extra": "iterations: 7988\ncpu: 120415.89884827238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 135925.51954241697,
            "unit": "ns/iter",
            "extra": "iterations: 6294\ncpu: 135956.10104861757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 709.1084888408398,
            "unit": "ns/iter",
            "extra": "iterations: 989770\ncpu: 709.1490952443496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 582.1483244225931,
            "unit": "ns/iter",
            "extra": "iterations: 1206032\ncpu: 582.1631598498224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 584.5826488459229,
            "unit": "ns/iter",
            "extra": "iterations: 1203090\ncpu: 584.6042274476549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 596.3061012973171,
            "unit": "ns/iter",
            "extra": "iterations: 1164572\ncpu: 596.308515059611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1071.5546611813652,
            "unit": "ns/iter",
            "extra": "iterations: 654834\ncpu: 1071.646096567986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5060.0337099996295,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5060.195000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 26993.48556104195,
            "unit": "ns/iter",
            "extra": "iterations: 30577\ncpu: 26994.858880858188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19585.59155830364,
            "unit": "ns/iter",
            "extra": "iterations: 42219\ncpu: 19586.089201544313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20924.379184672154,
            "unit": "ns/iter",
            "extra": "iterations: 38414\ncpu: 20925.100223876707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20308.056053470304,
            "unit": "ns/iter",
            "extra": "iterations: 39498\ncpu: 20309.13463972857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 51461.12220000418,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51462.10999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 563846.4599999792,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563899.2999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 577922.2943925158,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 577944.9933244319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 577530.7010581881,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 577570.3042328043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 579772.0456375858,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 579818.1208053707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 356535.255336612,
            "unit": "ns/iter",
            "extra": "iterations: 2436\ncpu: 356548.68637110054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 578640.6348464711,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 578640.253671561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2759881.931137761,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2759944.6107784435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1204236.6988417075,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 1204273.2303732303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3553823.928301718,
            "unit": "ns/iter",
            "extra": "iterations: 265\ncpu: 3553906.0377358515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5826.414595730926,
            "unit": "ns/iter",
            "extra": "iterations: 140315\ncpu: 5826.662153012857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 28274.3163397788,
            "unit": "ns/iter",
            "extra": "iterations: 29266\ncpu: 28275.767101756344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 20711.827509762537,
            "unit": "ns/iter",
            "extra": "iterations: 39695\ncpu: 20712.03426124196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20501.671872669405,
            "unit": "ns/iter",
            "extra": "iterations: 40210\ncpu: 20501.380253668176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 20613.590661752944,
            "unit": "ns/iter",
            "extra": "iterations: 39879\ncpu: 20613.739060658372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 51267.606800001886,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51269.87000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 588565.5569999813,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 588576.500000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 604654.8828016531,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 604673.7170596418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 603250.5521557552,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 603280.5285118248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 600916.8779310365,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 600935.9310344809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 358308.9228876231,
            "unit": "ns/iter",
            "extra": "iterations: 2438\ncpu: 358299.17965545505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 598186.7339765446,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 598181.8745692607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2869027.3742332547,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2869073.619631909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1222537.470741262,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 1222562.5487646328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5053.527069999859,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5053.712000000061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 28277.1574800444,
            "unit": "ns/iter",
            "extra": "iterations: 29191\ncpu: 28276.986057346534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 20859.055822100578,
            "unit": "ns/iter",
            "extra": "iterations: 39393\ncpu: 20859.56895895201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 20659.032214224622,
            "unit": "ns/iter",
            "extra": "iterations: 39734\ncpu: 20658.9419640609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 20841.00609709898,
            "unit": "ns/iter",
            "extra": "iterations: 39527\ncpu: 20840.749361196005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 50708.07230000014,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50710.310000000194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 605437.9450000057,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605426.399999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 616978.1615168682,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 616990.8707865148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 608910.2527855148,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 608922.9108635101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 612230.3237962174,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 612245.0104675516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 370833.37510512176,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 370837.9310344836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 606151.0799999865,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 606135.5862068947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 317.67641381798506,
            "unit": "ns/iter",
            "extra": "iterations: 2207038\ncpu: 317.6687487936322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2332.7217076290945,
            "unit": "ns/iter",
            "extra": "iterations: 300885\ncpu: 2332.7387540090167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1747.8126478342083,
            "unit": "ns/iter",
            "extra": "iterations: 398250\ncpu: 1747.8641556810983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1673.2060736505036,
            "unit": "ns/iter",
            "extra": "iterations: 424654\ncpu: 1673.280600206283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1326.0498454119265,
            "unit": "ns/iter",
            "extra": "iterations: 527531\ncpu: 1326.1078495860997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10735.188492218842,
            "unit": "ns/iter",
            "extra": "iterations: 64061\ncpu: 10735.502099561392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 29941.435767077604,
            "unit": "ns/iter",
            "extra": "iterations: 23407\ncpu: 29941.14153885598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7050.320540851053,
            "unit": "ns/iter",
            "extra": "iterations: 99251\ncpu: 7049.967254737973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7025.001304579211,
            "unit": "ns/iter",
            "extra": "iterations: 99649\ncpu: 7024.739836827267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7039.951621974473,
            "unit": "ns/iter",
            "extra": "iterations: 99570\ncpu: 7039.920658833007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15437.263874160713,
            "unit": "ns/iter",
            "extra": "iterations: 45264\ncpu: 15437.703252032688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14042.111028749443,
            "unit": "ns/iter",
            "extra": "iterations: 49915\ncpu: 14042.141640789316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3853.543879385309,
            "unit": "ns/iter",
            "extra": "iterations: 181338\ncpu: 3853.7206763061067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 19452.681877372237,
            "unit": "ns/iter",
            "extra": "iterations: 36093\ncpu: 19453.10448009301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 15231.3884061764,
            "unit": "ns/iter",
            "extra": "iterations: 45921\ncpu: 15231.693560680205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 15433.503419912955,
            "unit": "ns/iter",
            "extra": "iterations: 45469\ncpu: 15433.616310013318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 16595.215113242593,
            "unit": "ns/iter",
            "extra": "iterations: 42122\ncpu: 16594.71535064812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 34255.068820155466,
            "unit": "ns/iter",
            "extra": "iterations: 20401\ncpu: 34254.80123523348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 139832.0472299799,
            "unit": "ns/iter",
            "extra": "iterations: 5018\ncpu: 139827.1223595075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 121115.83854796167,
            "unit": "ns/iter",
            "extra": "iterations: 5785\ncpu: 121115.92048401118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 120954.26431642604,
            "unit": "ns/iter",
            "extra": "iterations: 5815\ncpu: 120957.35167669822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 119230.36971046323,
            "unit": "ns/iter",
            "extra": "iterations: 5837\ncpu: 119234.72674319056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 73177.01839657473,
            "unit": "ns/iter",
            "extra": "iterations: 9567\ncpu: 73178.53036479656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 120598.05525051222,
            "unit": "ns/iter",
            "extra": "iterations: 5828\ncpu: 120598.26698695865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3764.7369766251086,
            "unit": "ns/iter",
            "extra": "iterations: 185455\ncpu: 3764.762341268776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 19218.723157171662,
            "unit": "ns/iter",
            "extra": "iterations: 36425\ncpu: 19217.902539464518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 15110.603667745168,
            "unit": "ns/iter",
            "extra": "iterations: 46350\ncpu: 15110.051779935355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 15197.727531817745,
            "unit": "ns/iter",
            "extra": "iterations: 45965\ncpu: 15197.347982160372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 16006.954873852448,
            "unit": "ns/iter",
            "extra": "iterations: 43877\ncpu: 16007.201950908235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 35133.661405091734,
            "unit": "ns/iter",
            "extra": "iterations: 19956\ncpu: 35133.543796352205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 139011.23259052046,
            "unit": "ns/iter",
            "extra": "iterations: 5026\ncpu: 139016.01671309234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 119887.60422028598,
            "unit": "ns/iter",
            "extra": "iterations: 5829\ncpu: 119891.83393378086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 119233.92444444282,
            "unit": "ns/iter",
            "extra": "iterations: 5850\ncpu: 119236.35897435836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 120792.0413423208,
            "unit": "ns/iter",
            "extra": "iterations: 5781\ncpu: 120792.82131119048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 72718.35855911642,
            "unit": "ns/iter",
            "extra": "iterations: 9633\ncpu: 72716.13204609141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 120025.03703068223,
            "unit": "ns/iter",
            "extra": "iterations: 5833\ncpu: 120019.681124635 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}