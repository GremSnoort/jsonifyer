window.BENCHMARK_DATA = {
  "lastUpdate": 1702416015253,
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412566114,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 994.8473134110726,
            "unit": "ns/iter",
            "extra": "iterations: 705039\ncpu: 994.7936213457696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12971.15603351715,
            "unit": "ns/iter",
            "extra": "iterations: 63371\ncpu: 12970.465986018844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27703.700120071742,
            "unit": "ns/iter",
            "extra": "iterations: 29982\ncpu: 27702.698285638053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42854.16252657711,
            "unit": "ns/iter",
            "extra": "iterations: 19283\ncpu: 42852.63185189026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 54017.857965054034,
            "unit": "ns/iter",
            "extra": "iterations: 14595\ncpu: 54015.88215142176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55563.58529999557,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55558.74000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 67677.82726711717,
            "unit": "ns/iter",
            "extra": "iterations: 12968\ncpu: 67674.62214682298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 76531.82298547175,
            "unit": "ns/iter",
            "extra": "iterations: 11355\ncpu: 76529.29106120656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 87044.69692964866,
            "unit": "ns/iter",
            "extra": "iterations: 9836\ncpu: 87039.49776331836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 741.0858703461131,
            "unit": "ns/iter",
            "extra": "iterations: 946520\ncpu: 741.0634746228295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 619.1019981751085,
            "unit": "ns/iter",
            "extra": "iterations: 1134285\ncpu: 619.0900875882156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 628.4977181181742,
            "unit": "ns/iter",
            "extra": "iterations: 1116184\ncpu: 628.4474602753671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 622.3090545380132,
            "unit": "ns/iter",
            "extra": "iterations: 1123271\ncpu: 622.2826904638328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1186.7822167713662,
            "unit": "ns/iter",
            "extra": "iterations: 587070\ncpu: 1186.7354829918063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4064.9027710554824,
            "unit": "ns/iter",
            "extra": "iterations: 196279\ncpu: 4064.7241936223427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19823.329114816315,
            "unit": "ns/iter",
            "extra": "iterations: 42590\ncpu: 19822.322141347715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15095.73062584733,
            "unit": "ns/iter",
            "extra": "iterations: 53112\ncpu: 15094.799668624788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15507.588722674678,
            "unit": "ns/iter",
            "extra": "iterations: 52743\ncpu: 15506.960165329963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15252.389755386395,
            "unit": "ns/iter",
            "extra": "iterations: 53472\ncpu: 15251.39325254339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 43294.109215726894,
            "unit": "ns/iter",
            "extra": "iterations: 19228\ncpu: 43291.2835448304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 518842.87448193296,
            "unit": "ns/iter",
            "extra": "iterations: 1689\ncpu: 518802.96033155645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 433557.37263682525,
            "unit": "ns/iter",
            "extra": "iterations: 2010\ncpu: 433546.46766169113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 426058.9140049269,
            "unit": "ns/iter",
            "extra": "iterations: 2035\ncpu: 426047.3710073698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 428095.1575546798,
            "unit": "ns/iter",
            "extra": "iterations: 2012\ncpu: 428070.6759443345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 263539.93826033577,
            "unit": "ns/iter",
            "extra": "iterations: 3288\ncpu: 263537.3783454993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 422786.8882900489,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 422766.78098971164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2105751.5743707526,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 2105668.6498855785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 854958.562385299,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 854915.7798165143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2829526.110091709,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2829423.853211011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4000.205304944259,
            "unit": "ns/iter",
            "extra": "iterations: 193970\ncpu: 4000.033510336643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19823.584956071176,
            "unit": "ns/iter",
            "extra": "iterations: 41545\ncpu: 19822.3829582381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15678.433884049955,
            "unit": "ns/iter",
            "extra": "iterations: 50177\ncpu: 15677.635171492879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15289.650367870003,
            "unit": "ns/iter",
            "extra": "iterations: 54503\ncpu: 15288.602462249728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15555.961137193775,
            "unit": "ns/iter",
            "extra": "iterations: 53676\ncpu: 15555.195990759448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 42194.62529700178,
            "unit": "ns/iter",
            "extra": "iterations: 19781\ncpu: 42192.02770335173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 533982.0012307498,
            "unit": "ns/iter",
            "extra": "iterations: 1625\ncpu: 533962.4615384607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 443595.276884416,
            "unit": "ns/iter",
            "extra": "iterations: 1990\ncpu: 443559.1457286451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 430420.6458333587,
            "unit": "ns/iter",
            "extra": "iterations: 2016\ncpu: 430391.71626984153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 427920.02883676067,
            "unit": "ns/iter",
            "extra": "iterations: 2046\ncpu: 427905.7673509267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 257401.14163468787,
            "unit": "ns/iter",
            "extra": "iterations: 3389\ncpu: 257383.6529949844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 426661.8307392963,
            "unit": "ns/iter",
            "extra": "iterations: 2056\ncpu: 426636.0408560331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2123576.564814853,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2123421.0648148158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 859648.1013824911,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 859639.5391705084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4343.637729964537,
            "unit": "ns/iter",
            "extra": "iterations: 180843\ncpu: 4343.486338979112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19986.678013325127,
            "unit": "ns/iter",
            "extra": "iterations: 41275\ncpu: 19986.311326468895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15995.803165144147,
            "unit": "ns/iter",
            "extra": "iterations: 51688\ncpu: 15995.358690605079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15866.144019700312,
            "unit": "ns/iter",
            "extra": "iterations: 51979\ncpu: 15865.91123338264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16029.94450934546,
            "unit": "ns/iter",
            "extra": "iterations: 51360\ncpu: 16029.369158878571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41902.11959449537,
            "unit": "ns/iter",
            "extra": "iterations: 20419\ncpu: 41900.45545815188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 515296.10743801796,
            "unit": "ns/iter",
            "extra": "iterations: 1694\ncpu: 515263.16410861653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 426787.3202709196,
            "unit": "ns/iter",
            "extra": "iterations: 2067\ncpu: 426762.602806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 420794.6618566751,
            "unit": "ns/iter",
            "extra": "iterations: 2079\ncpu: 420783.6940836919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 417938.41422395373,
            "unit": "ns/iter",
            "extra": "iterations: 2081\ncpu: 417915.6174915882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 258626.54099322576,
            "unit": "ns/iter",
            "extra": "iterations: 3403\ncpu: 258611.9600352615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 418688.14745439007,
            "unit": "ns/iter",
            "extra": "iterations: 2082\ncpu: 418669.40441883064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 440.7676847171827,
            "unit": "ns/iter",
            "extra": "iterations: 1590851\ncpu: 440.74630496507854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1969.1894965872991,
            "unit": "ns/iter",
            "extra": "iterations: 355732\ncpu: 1969.1841048879432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1572.0260881858621,
            "unit": "ns/iter",
            "extra": "iterations: 445604\ncpu: 1571.909363470705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1444.9898759142304,
            "unit": "ns/iter",
            "extra": "iterations: 483698\ncpu: 1444.9191437632524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1358.3317492261017,
            "unit": "ns/iter",
            "extra": "iterations: 516800\ncpu: 1358.2374226006095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7792.467012750147,
            "unit": "ns/iter",
            "extra": "iterations: 89959\ncpu: 7791.9240987561725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21754.510625720206,
            "unit": "ns/iter",
            "extra": "iterations: 32139\ncpu: 21753.856685024384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5594.077064688211,
            "unit": "ns/iter",
            "extra": "iterations: 125479\ncpu: 5593.8077287831975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5587.850579390654,
            "unit": "ns/iter",
            "extra": "iterations: 125304\ncpu: 5587.574219498154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5606.36709185541,
            "unit": "ns/iter",
            "extra": "iterations: 124729\ncpu: 5606.017044953445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11433.94867097454,
            "unit": "ns/iter",
            "extra": "iterations: 61135\ncpu: 11433.327880919287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10508.89054260334,
            "unit": "ns/iter",
            "extra": "iterations: 66181\ncpu: 10508.559858569799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3473.3269283300665,
            "unit": "ns/iter",
            "extra": "iterations: 201353\ncpu: 3473.139709862803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16749.35951993803,
            "unit": "ns/iter",
            "extra": "iterations: 41828\ncpu: 16748.46275222334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13408.803415691493,
            "unit": "ns/iter",
            "extra": "iterations: 52171\ncpu: 13408.23445975742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13730.260279861697,
            "unit": "ns/iter",
            "extra": "iterations: 51168\ncpu: 13730.026579112024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14009.123949747527,
            "unit": "ns/iter",
            "extra": "iterations: 49988\ncpu: 14008.167960310277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29386.05049616993,
            "unit": "ns/iter",
            "extra": "iterations: 23883\ncpu: 29384.532931373687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 110575.0047430893,
            "unit": "ns/iter",
            "extra": "iterations: 6325\ncpu: 110567.01976284472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 94730.9880774981,
            "unit": "ns/iter",
            "extra": "iterations: 7381\ncpu: 94724.72564693145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 94455.66653138254,
            "unit": "ns/iter",
            "extra": "iterations: 7392\ncpu: 94452.57034631951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 95944.96143362968,
            "unit": "ns/iter",
            "extra": "iterations: 7338\ncpu: 95939.49304987896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 63103.886731392144,
            "unit": "ns/iter",
            "extra": "iterations: 11124\ncpu: 63100.125854009166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 95584.75122616054,
            "unit": "ns/iter",
            "extra": "iterations: 7340\ncpu: 95577.09809264251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3395.416821593099,
            "unit": "ns/iter",
            "extra": "iterations: 205474\ncpu: 3395.275801317909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16936.62398024645,
            "unit": "ns/iter",
            "extra": "iterations: 41309\ncpu: 16935.471688978156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13428.904347655107,
            "unit": "ns/iter",
            "extra": "iterations: 51039\ncpu: 13428.21567820684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 14252.190714991271,
            "unit": "ns/iter",
            "extra": "iterations: 52644\ncpu: 14251.447458399876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13713.141571580152,
            "unit": "ns/iter",
            "extra": "iterations: 51006\ncpu: 13712.565188409011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28948.77440660383,
            "unit": "ns/iter",
            "extra": "iterations: 24225\ncpu: 28948.160990712022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 109543.77824726382,
            "unit": "ns/iter",
            "extra": "iterations: 6390\ncpu: 109538.24726134716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 92541.31827786853,
            "unit": "ns/iter",
            "extra": "iterations: 7572\ncpu: 92537.84997358698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 91703.87182840245,
            "unit": "ns/iter",
            "extra": "iterations: 7646\ncpu: 91699.03217368577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 91847.92011165633,
            "unit": "ns/iter",
            "extra": "iterations: 7523\ncpu: 91844.11803801684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 63055.49801479645,
            "unit": "ns/iter",
            "extra": "iterations: 11082\ncpu: 63054.574986465035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 94325.09766310941,
            "unit": "ns/iter",
            "extra": "iterations: 7403\ncpu: 94320.12697554888 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702416014718,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 811.0965565149551,
            "unit": "ns/iter",
            "extra": "iterations: 860843\ncpu: 811.0778620491775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11796.000468018654,
            "unit": "ns/iter",
            "extra": "iterations: 70510\ncpu: 11795.570841015458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25461.00567936248,
            "unit": "ns/iter",
            "extra": "iterations: 32398\ncpu: 25460.087042410025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40203.98291126983,
            "unit": "ns/iter",
            "extra": "iterations: 21008\ncpu: 40201.24238385377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50081.6316210825,
            "unit": "ns/iter",
            "extra": "iterations: 14990\ncpu: 50080.366911274185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51548.26250000042,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51545.40000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62938.2341127515,
            "unit": "ns/iter",
            "extra": "iterations: 13942\ncpu: 62934.28489456317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71898.82061855728,
            "unit": "ns/iter",
            "extra": "iterations: 12125\ncpu: 71894.80412371134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 83126.1165298686,
            "unit": "ns/iter",
            "extra": "iterations: 10478\ncpu: 83119.26894445502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 631.6174799874301,
            "unit": "ns/iter",
            "extra": "iterations: 1106431\ncpu: 631.5984458136105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 535.5026204862983,
            "unit": "ns/iter",
            "extra": "iterations: 1310253\ncpu: 535.4745991804634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 528.789319985874,
            "unit": "ns/iter",
            "extra": "iterations: 1312208\ncpu: 528.7653329350229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 527.2816630198538,
            "unit": "ns/iter",
            "extra": "iterations: 1329461\ncpu: 527.2751889675595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1013.7004029700232,
            "unit": "ns/iter",
            "extra": "iterations: 690374\ncpu: 1013.6307276925277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4082.1106563463377,
            "unit": "ns/iter",
            "extra": "iterations: 195217\ncpu: 4081.9165339084198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18568.240782578323,
            "unit": "ns/iter",
            "extra": "iterations: 44264\ncpu: 18567.235225013563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 14923.135175761405,
            "unit": "ns/iter",
            "extra": "iterations: 55217\ncpu: 14922.134487567238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15445.889118469628,
            "unit": "ns/iter",
            "extra": "iterations: 53237\ncpu: 15445.11336100829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15139.402216535682,
            "unit": "ns/iter",
            "extra": "iterations: 54319\ncpu: 15138.704688967033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41268.3324363385,
            "unit": "ns/iter",
            "extra": "iterations: 20067\ncpu: 41266.218169133266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 485894.0139586917,
            "unit": "ns/iter",
            "extra": "iterations: 1791\ncpu: 485862.31155778776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 405952.1929742375,
            "unit": "ns/iter",
            "extra": "iterations: 2135\ncpu: 405925.71428571525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 400085.2963644853,
            "unit": "ns/iter",
            "extra": "iterations: 2173\ncpu: 400065.7156005531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 405136.6188925143,
            "unit": "ns/iter",
            "extra": "iterations: 2149\ncpu: 405112.4243834355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 247043.10195966263,
            "unit": "ns/iter",
            "extra": "iterations: 3521\ncpu: 247033.0303890943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 399699.35704451316,
            "unit": "ns/iter",
            "extra": "iterations: 2179\ncpu: 399674.713171179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1979555.0299786497,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1979407.2805139136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 825451.809604009,
            "unit": "ns/iter",
            "extra": "iterations: 1187\ncpu: 825381.9713563598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2799159.33040947,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2798969.5906432713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4053.3116418212394,
            "unit": "ns/iter",
            "extra": "iterations: 198895\ncpu: 4053.0264712536773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19585.364742656337,
            "unit": "ns/iter",
            "extra": "iterations: 41909\ncpu: 19583.6502899138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15560.52775776427,
            "unit": "ns/iter",
            "extra": "iterations: 52742\ncpu: 15559.8119146032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15078.012916935606,
            "unit": "ns/iter",
            "extra": "iterations: 54115\ncpu: 15077.137577381467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15332.975251035105,
            "unit": "ns/iter",
            "extra": "iterations: 53578\ncpu: 15332.15312255034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41622.23684080235,
            "unit": "ns/iter",
            "extra": "iterations: 20195\ncpu: 41619.66823471154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 508388.8799533647,
            "unit": "ns/iter",
            "extra": "iterations: 1716\ncpu: 508338.344988343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 416413.96711153485,
            "unit": "ns/iter",
            "extra": "iterations: 2098\ncpu: 416370.82936129527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 414905.1545368713,
            "unit": "ns/iter",
            "extra": "iterations: 2116\ncpu: 414881.6162570864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 413049.7421027693,
            "unit": "ns/iter",
            "extra": "iterations: 2121\ncpu: 413027.10985384195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 245170.84171062795,
            "unit": "ns/iter",
            "extra": "iterations: 3601\ncpu: 245154.65148569757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 409899.8884220397,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 409865.8730158741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2000065.6217390492,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 1999947.8260869528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 793014.364249597,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 792959.5278246253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4273.091799122101,
            "unit": "ns/iter",
            "extra": "iterations: 187736\ncpu: 4272.834192696126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20461.7356825058,
            "unit": "ns/iter",
            "extra": "iterations: 42256\ncpu: 20460.211567587976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15766.703324708795,
            "unit": "ns/iter",
            "extra": "iterations: 51794\ncpu: 15765.561648067458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15491.671685730902,
            "unit": "ns/iter",
            "extra": "iterations: 53330\ncpu: 15490.774423401512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15660.844514646922,
            "unit": "ns/iter",
            "extra": "iterations: 52230\ncpu: 15660.005743825466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41190.30804226776,
            "unit": "ns/iter",
            "extra": "iterations: 20442\ncpu: 41186.79679092064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 500339.82640865346,
            "unit": "ns/iter",
            "extra": "iterations: 1757\ncpu: 500312.5213431964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 410533.1349464898,
            "unit": "ns/iter",
            "extra": "iterations: 2149\ncpu: 410513.1689157741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 401239.5943830722,
            "unit": "ns/iter",
            "extra": "iterations: 2172\ncpu: 401213.2136279924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 401333.4784403746,
            "unit": "ns/iter",
            "extra": "iterations: 2180\ncpu: 401310.6422018353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 244417.24180100192,
            "unit": "ns/iter",
            "extra": "iterations: 3598\ncpu: 244400.8893829897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 401807.8300772401,
            "unit": "ns/iter",
            "extra": "iterations: 2201\ncpu: 401787.46024534205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 323.1983361031025,
            "unit": "ns/iter",
            "extra": "iterations: 2164437\ncpu: 323.1882933067586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1820.058164731436,
            "unit": "ns/iter",
            "extra": "iterations: 386265\ncpu: 1820.0377978848758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1417.3967689219178,
            "unit": "ns/iter",
            "extra": "iterations: 487082\ncpu: 1417.3124853720733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1413.0635998746307,
            "unit": "ns/iter",
            "extra": "iterations: 494545\ncpu: 1412.9800119301656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1129.1534085593398,
            "unit": "ns/iter",
            "extra": "iterations: 619998\ncpu: 1129.068158284385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7313.6961023718295,
            "unit": "ns/iter",
            "extra": "iterations: 95417\ncpu: 7313.176897198644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20559.8932161538,
            "unit": "ns/iter",
            "extra": "iterations: 34022\ncpu: 20558.423960966487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4899.107826610061,
            "unit": "ns/iter",
            "extra": "iterations: 142961\ncpu: 4898.791978231793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4831.9562283533605,
            "unit": "ns/iter",
            "extra": "iterations: 145231\ncpu: 4831.5676405174945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4846.4515027465795,
            "unit": "ns/iter",
            "extra": "iterations: 142905\ncpu: 4846.335677547984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10291.149354838335,
            "unit": "ns/iter",
            "extra": "iterations: 68200\ncpu: 10290.351906158368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9283.21727355993,
            "unit": "ns/iter",
            "extra": "iterations: 75329\ncpu: 9282.629531787308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3348.9017682010412,
            "unit": "ns/iter",
            "extra": "iterations: 209026\ncpu: 3348.6594969046405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16217.227146301102,
            "unit": "ns/iter",
            "extra": "iterations: 43144\ncpu: 16216.238642684873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13006.086171750312,
            "unit": "ns/iter",
            "extra": "iterations: 53962\ncpu: 13005.157332937992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13056.419390323772,
            "unit": "ns/iter",
            "extra": "iterations: 53635\ncpu: 13056.259904913046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13484.089530116511,
            "unit": "ns/iter",
            "extra": "iterations: 51949\ncpu: 13483.816820343125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28521.956093188768,
            "unit": "ns/iter",
            "extra": "iterations: 24552\ncpu: 28520.869990224353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 106388.93909866095,
            "unit": "ns/iter",
            "extra": "iterations: 6568\ncpu: 106383.17600487205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 91308.96512687078,
            "unit": "ns/iter",
            "extra": "iterations: 7685\ncpu: 91300.22121015082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 90384.17389060883,
            "unit": "ns/iter",
            "extra": "iterations: 7752\ncpu: 90375.09029927758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 91954.7700394215,
            "unit": "ns/iter",
            "extra": "iterations: 7610\ncpu: 91946.18922470364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 59463.40273530284,
            "unit": "ns/iter",
            "extra": "iterations: 11772\ncpu: 59460.36357458303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 91308.05456439665,
            "unit": "ns/iter",
            "extra": "iterations: 7679\ncpu: 91301.01575726132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3186.8949137986947,
            "unit": "ns/iter",
            "extra": "iterations: 218906\ncpu: 3186.8518907659554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16453.31582290318,
            "unit": "ns/iter",
            "extra": "iterations: 42508\ncpu: 16452.366613343238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12950.644983420429,
            "unit": "ns/iter",
            "extra": "iterations: 52775\ncpu: 12949.654192325974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13106.722714569614,
            "unit": "ns/iter",
            "extra": "iterations: 54388\ncpu: 13105.846877987728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13441.913548486511,
            "unit": "ns/iter",
            "extra": "iterations: 52087\ncpu: 13440.812486801073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28249.711458460002,
            "unit": "ns/iter",
            "extra": "iterations: 24759\ncpu: 28248.2127711131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 104257.85737852669,
            "unit": "ns/iter",
            "extra": "iterations: 6668\ncpu: 104254.93401319816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 88731.28836147048,
            "unit": "ns/iter",
            "extra": "iterations: 7879\ncpu: 88727.40195456146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 88300.8395749006,
            "unit": "ns/iter",
            "extra": "iterations: 7904\ncpu: 88295.0278340073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 88572.66283524716,
            "unit": "ns/iter",
            "extra": "iterations: 7830\ncpu: 88566.28352490356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 59648.10561451825,
            "unit": "ns/iter",
            "extra": "iterations: 11684\ncpu: 59645.010270455474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 90258.23050012926,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 90257.10028504665 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}