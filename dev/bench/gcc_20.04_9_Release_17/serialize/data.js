window.BENCHMARK_DATA = {
  "lastUpdate": 1705573971450,
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
        "date": 1702418389879,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 786.1731763409512,
            "unit": "ns/iter",
            "extra": "iterations: 889215\ncpu: 786.1027985357872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12083.421616303314,
            "unit": "ns/iter",
            "extra": "iterations: 71150\ncpu: 12082.55094869993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25508.657536342525,
            "unit": "ns/iter",
            "extra": "iterations: 32675\ncpu: 25508.28462127008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39515.77915888934,
            "unit": "ns/iter",
            "extra": "iterations: 20354\ncpu: 39514.75876977496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50403.5296242314,
            "unit": "ns/iter",
            "extra": "iterations: 15781\ncpu: 50401.577846777815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 52806.251599997726,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52804.83999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62875.66967338073,
            "unit": "ns/iter",
            "extra": "iterations: 13747\ncpu: 62873.739725030915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72103.94294994473,
            "unit": "ns/iter",
            "extra": "iterations: 12007\ncpu: 72101.62405263595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 83362.63089882396,
            "unit": "ns/iter",
            "extra": "iterations: 10447\ncpu: 83359.3950416388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 633.4533299050481,
            "unit": "ns/iter",
            "extra": "iterations: 1096773\ncpu: 633.4352687383805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 529.508726704117,
            "unit": "ns/iter",
            "extra": "iterations: 1325128\ncpu: 529.4915660977665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 530.0293685166121,
            "unit": "ns/iter",
            "extra": "iterations: 1318657\ncpu: 530.0109126179124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 531.075243946123,
            "unit": "ns/iter",
            "extra": "iterations: 1314737\ncpu: 531.0552604817539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1023.3187254909532,
            "unit": "ns/iter",
            "extra": "iterations: 682145\ncpu: 1023.3057487777537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3984.6164945791115,
            "unit": "ns/iter",
            "extra": "iterations: 201254\ncpu: 3984.520059228635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19908.1985931657,
            "unit": "ns/iter",
            "extra": "iterations: 40943\ncpu: 19907.48845956571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15748.195715001533,
            "unit": "ns/iter",
            "extra": "iterations: 51902\ncpu: 15747.601248506808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15459.58225942922,
            "unit": "ns/iter",
            "extra": "iterations: 53155\ncpu: 15459.260652807803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15353.250714731897,
            "unit": "ns/iter",
            "extra": "iterations: 52817\ncpu: 15352.664861692314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42204.569181443636,
            "unit": "ns/iter",
            "extra": "iterations: 19962\ncpu: 42202.624987476185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 487521.38358458027,
            "unit": "ns/iter",
            "extra": "iterations: 1791\ncpu: 487509.60357342253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 401818.59372112545,
            "unit": "ns/iter",
            "extra": "iterations: 2166\ncpu: 401802.9085872574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 396883.7083523493,
            "unit": "ns/iter",
            "extra": "iterations: 2191\ncpu: 396874.5778183466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 399754.46522337943,
            "unit": "ns/iter",
            "extra": "iterations: 2171\ncpu: 399727.72915707045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 246695.86755909334,
            "unit": "ns/iter",
            "extra": "iterations: 3511\ncpu: 246689.68954713788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 396039.71610555117,
            "unit": "ns/iter",
            "extra": "iterations: 2198\ncpu: 396021.79253867135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1982985.3760684107,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1982903.4188034208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 793067.411665298,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 793032.2062552815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2706583.085043943,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2706460.703812314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3920.5218984828225,
            "unit": "ns/iter",
            "extra": "iterations: 200813\ncpu: 3920.4692923267044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19708.702177385905,
            "unit": "ns/iter",
            "extra": "iterations: 41931\ncpu: 19708.020319095678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15452.70403250058,
            "unit": "ns/iter",
            "extra": "iterations: 53168\ncpu: 15452.554167920478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15039.676944115401,
            "unit": "ns/iter",
            "extra": "iterations: 54845\ncpu: 15039.356367945973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15286.068845955,
            "unit": "ns/iter",
            "extra": "iterations: 53932\ncpu: 15285.620781725062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41131.46931891372,
            "unit": "ns/iter",
            "extra": "iterations: 20159\ncpu: 41129.956843097505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 505646.62945645006,
            "unit": "ns/iter",
            "extra": "iterations: 1711\ncpu: 505633.3722968999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 419036.08369407,
            "unit": "ns/iter",
            "extra": "iterations: 2079\ncpu: 419020.53872054094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 410804.44013251667,
            "unit": "ns/iter",
            "extra": "iterations: 2113\ncpu: 410786.4647420723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 407138.4291010224,
            "unit": "ns/iter",
            "extra": "iterations: 2158\ncpu: 407124.55977757304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 244806.5789034243,
            "unit": "ns/iter",
            "extra": "iterations: 3593\ncpu: 244799.77734483703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 408138.51542055164,
            "unit": "ns/iter",
            "extra": "iterations: 2140\ncpu: 408125.0467289724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1993172.072052323,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 1993010.4803493393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 811149.6065719586,
            "unit": "ns/iter",
            "extra": "iterations: 1126\ncpu: 811120.6927175841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4334.653208992125,
            "unit": "ns/iter",
            "extra": "iterations: 184653\ncpu: 4334.5112183392785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19663.620018645528,
            "unit": "ns/iter",
            "extra": "iterations: 41831\ncpu: 19662.479978962918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16100.142007875369,
            "unit": "ns/iter",
            "extra": "iterations: 52314\ncpu: 16099.648277707636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15468.577531556239,
            "unit": "ns/iter",
            "extra": "iterations: 53159\ncpu: 15468.163434225611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15308.08047687138,
            "unit": "ns/iter",
            "extra": "iterations: 53096\ncpu: 15307.56365827944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41459.15265389695,
            "unit": "ns/iter",
            "extra": "iterations: 20517\ncpu: 41457.211093239464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 501041.2157200162,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 501044.80780263816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 410010.8627358543,
            "unit": "ns/iter",
            "extra": "iterations: 2120\ncpu: 409987.07547169755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 405200.573466465,
            "unit": "ns/iter",
            "extra": "iterations: 2103\ncpu: 405187.68426058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 403947.4255617999,
            "unit": "ns/iter",
            "extra": "iterations: 2136\ncpu: 403934.1760299645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 244734.16373779517,
            "unit": "ns/iter",
            "extra": "iterations: 3585\ncpu: 244717.79637378088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 401339.888011152,
            "unit": "ns/iter",
            "extra": "iterations: 2152\ncpu: 401329.50743494503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 318.1541850159046,
            "unit": "ns/iter",
            "extra": "iterations: 2162441\ncpu: 318.14070302958675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1843.651685275446,
            "unit": "ns/iter",
            "extra": "iterations: 381540\ncpu: 1843.6247837710441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1312.5357085132769,
            "unit": "ns/iter",
            "extra": "iterations: 532086\ncpu: 1312.5165856647286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1364.677102157894,
            "unit": "ns/iter",
            "extra": "iterations: 512961\ncpu: 1364.6031569651493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1123.921985872444,
            "unit": "ns/iter",
            "extra": "iterations: 623605\ncpu: 1123.8942920598759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7297.899281625629,
            "unit": "ns/iter",
            "extra": "iterations: 95911\ncpu: 7297.6801409640675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20683.54644485374,
            "unit": "ns/iter",
            "extra": "iterations: 33782\ncpu: 20682.754129418077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4937.352159938571,
            "unit": "ns/iter",
            "extra": "iterations: 141254\ncpu: 4937.205318079501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4916.4019215372555,
            "unit": "ns/iter",
            "extra": "iterations: 142386\ncpu: 4916.187686991764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4959.591996889497,
            "unit": "ns/iter",
            "extra": "iterations: 141445\ncpu: 4959.51288486689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10481.074855443778,
            "unit": "ns/iter",
            "extra": "iterations: 66929\ncpu: 10480.867785265053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9373.685104617667,
            "unit": "ns/iter",
            "extra": "iterations: 74701\ncpu: 9373.491653391566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3374.7676928113124,
            "unit": "ns/iter",
            "extra": "iterations: 207768\ncpu: 3374.6934080319743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16305.840533806067,
            "unit": "ns/iter",
            "extra": "iterations: 42937\ncpu: 16305.366001350756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12999.525380142613,
            "unit": "ns/iter",
            "extra": "iterations: 53664\ncpu: 12999.405560524528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13132.064783681295,
            "unit": "ns/iter",
            "extra": "iterations: 53532\ncpu: 13131.568034073098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13655.073390710568,
            "unit": "ns/iter",
            "extra": "iterations: 50892\ncpu: 13654.293405643351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28707.281846152164,
            "unit": "ns/iter",
            "extra": "iterations: 24375\ncpu: 28706.219487179253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 105658.99005874377,
            "unit": "ns/iter",
            "extra": "iterations: 6639\ncpu: 105656.98147311469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 91007.47617192828,
            "unit": "ns/iter",
            "extra": "iterations: 7701\ncpu: 91006.29788339186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 90786.11544462013,
            "unit": "ns/iter",
            "extra": "iterations: 7692\ncpu: 90785.23140925763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 92171.44584482009,
            "unit": "ns/iter",
            "extra": "iterations: 7617\ncpu: 92167.61192070339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 59980.8222488842,
            "unit": "ns/iter",
            "extra": "iterations: 11668\ncpu: 59977.98251628413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 91758.52079233275,
            "unit": "ns/iter",
            "extra": "iterations: 7623\ncpu: 91757.03791158495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3280.1865491270605,
            "unit": "ns/iter",
            "extra": "iterations: 213488\ncpu: 3280.1314359589073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16548.85971120407,
            "unit": "ns/iter",
            "extra": "iterations: 42106\ncpu: 16548.620149147253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13117.235550748754,
            "unit": "ns/iter",
            "extra": "iterations: 53636\ncpu: 13116.839436199565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13150.959810052967,
            "unit": "ns/iter",
            "extra": "iterations: 51804\ncpu: 13150.864798085284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13924.367060918084,
            "unit": "ns/iter",
            "extra": "iterations: 51659\ncpu: 13924.125515398935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 31380.167804599438,
            "unit": "ns/iter",
            "extra": "iterations: 24606\ncpu: 31377.196618710444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 105334.92486503121,
            "unit": "ns/iter",
            "extra": "iterations: 6668\ncpu: 105328.26934613257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 89784.90800463004,
            "unit": "ns/iter",
            "extra": "iterations: 7783\ncpu: 89783.06565591539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 89403.25178753678,
            "unit": "ns/iter",
            "extra": "iterations: 7832\ncpu: 89401.9918283976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 89724.44438703521,
            "unit": "ns/iter",
            "extra": "iterations: 7741\ncpu: 89719.94574344404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 60643.03016904864,
            "unit": "ns/iter",
            "extra": "iterations: 11535\ncpu: 60639.00303424312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 90923.01051401506,
            "unit": "ns/iter",
            "extra": "iterations: 7704\ncpu: 90916.6796469363 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421402596,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 785.7941320924002,
            "unit": "ns/iter",
            "extra": "iterations: 891800\ncpu: 785.7853778874187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11527.575725982957,
            "unit": "ns/iter",
            "extra": "iterations: 71937\ncpu: 11526.620515173001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25321.11818981979,
            "unit": "ns/iter",
            "extra": "iterations: 32947\ncpu: 25320.183931769196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40883.40942379416,
            "unit": "ns/iter",
            "extra": "iterations: 21711\ncpu: 40882.97637142462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49483.22760820624,
            "unit": "ns/iter",
            "extra": "iterations: 15988\ncpu: 49480.22892169128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 50728.36919999873,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50726.90999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61543.92500000086,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61543.11000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71132.63034731733,
            "unit": "ns/iter",
            "extra": "iterations: 12179\ncpu: 71128.69693735112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81450.41295584379,
            "unit": "ns/iter",
            "extra": "iterations: 10667\ncpu: 81448.27036655102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 623.5899015820253,
            "unit": "ns/iter",
            "extra": "iterations: 1123067\ncpu: 623.5643109449388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 534.4432075641726,
            "unit": "ns/iter",
            "extra": "iterations: 1309118\ncpu: 534.4325721592711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 535.4782783453417,
            "unit": "ns/iter",
            "extra": "iterations: 1311134\ncpu: 535.4692960444937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 530.6559000457394,
            "unit": "ns/iter",
            "extra": "iterations: 1310439\ncpu: 530.6098948520299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1025.2667884791772,
            "unit": "ns/iter",
            "extra": "iterations: 681375\ncpu: 1025.212988442488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4089.2844290126427,
            "unit": "ns/iter",
            "extra": "iterations: 195845\ncpu: 4089.0949475350385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19532.000308225033,
            "unit": "ns/iter",
            "extra": "iterations: 42177\ncpu: 19531.465016478192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15784.888842614882,
            "unit": "ns/iter",
            "extra": "iterations: 52826\ncpu: 15784.187710597054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15485.94973644567,
            "unit": "ns/iter",
            "extra": "iterations: 53120\ncpu: 15485.527108433764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15564.649202001669,
            "unit": "ns/iter",
            "extra": "iterations: 52945\ncpu: 15564.11559165171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42238.5811666935,
            "unit": "ns/iter",
            "extra": "iterations: 19731\ncpu: 42237.67168415172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 492060.2911963826,
            "unit": "ns/iter",
            "extra": "iterations: 1772\ncpu: 492015.0112866828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 409021.12900187814,
            "unit": "ns/iter",
            "extra": "iterations: 2124\ncpu: 408996.8455743875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 403195.8903345941,
            "unit": "ns/iter",
            "extra": "iterations: 2152\ncpu: 403184.15427509276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 404264.1143529609,
            "unit": "ns/iter",
            "extra": "iterations: 2125\ncpu: 404236.80000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 247661.94329302647,
            "unit": "ns/iter",
            "extra": "iterations: 3474\ncpu: 247651.4680483594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 398505.4028810394,
            "unit": "ns/iter",
            "extra": "iterations: 2152\ncpu: 398467.657992564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1996071.5010845934,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 1995929.2841648618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 810222.0831903871,
            "unit": "ns/iter",
            "extra": "iterations: 1166\ncpu: 810137.2212692972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2694090.6549708075,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2693942.69005848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4151.490857075729,
            "unit": "ns/iter",
            "extra": "iterations: 195397\ncpu: 4151.342651115421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19499.33786558951,
            "unit": "ns/iter",
            "extra": "iterations: 42363\ncpu: 19498.118641267076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15489.545696606081,
            "unit": "ns/iter",
            "extra": "iterations: 53330\ncpu: 15489.24057753614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15051.083350056108,
            "unit": "ns/iter",
            "extra": "iterations: 54817\ncpu: 15050.420489993912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15201.21513591265,
            "unit": "ns/iter",
            "extra": "iterations: 54189\ncpu: 15199.981546070228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41645.831096921385,
            "unit": "ns/iter",
            "extra": "iterations: 20047\ncpu: 41642.20082805413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 502081.1463133517,
            "unit": "ns/iter",
            "extra": "iterations: 1736\ncpu: 502073.67511520715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 416541.78757704963,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 416522.1906116656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 408399.7555138237,
            "unit": "ns/iter",
            "extra": "iterations: 2131\ncpu: 407656.87470671115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 407593.7887650817,
            "unit": "ns/iter",
            "extra": "iterations: 2154\ncpu: 407582.54410399415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 243563.0442081638,
            "unit": "ns/iter",
            "extra": "iterations: 3574\ncpu: 243544.54392837133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 407485.3558139704,
            "unit": "ns/iter",
            "extra": "iterations: 2150\ncpu: 407474.09302325465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1996827.3187772743,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 1996690.6113537073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 796512.6624472694,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 796475.1898734143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4240.423239768691,
            "unit": "ns/iter",
            "extra": "iterations: 188711\ncpu: 4240.338401047106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19514.937308940203,
            "unit": "ns/iter",
            "extra": "iterations: 42526\ncpu: 19514.522880120316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15699.526469921278,
            "unit": "ns/iter",
            "extra": "iterations: 52928\ncpu: 15699.278264812523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15413.607150800019,
            "unit": "ns/iter",
            "extra": "iterations: 53952\ncpu: 15413.600978647733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15581.255381954004,
            "unit": "ns/iter",
            "extra": "iterations: 53187\ncpu: 15580.63624569911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41508.83568005464,
            "unit": "ns/iter",
            "extra": "iterations: 20241\ncpu: 41506.98582085883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 486687.154444433,
            "unit": "ns/iter",
            "extra": "iterations: 1800\ncpu: 486678.3333333342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 408045.8857808718,
            "unit": "ns/iter",
            "extra": "iterations: 2145\ncpu: 408031.70163170155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 401378.55063869123,
            "unit": "ns/iter",
            "extra": "iterations: 2192\ncpu: 401369.61678832135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 401374.16651204065,
            "unit": "ns/iter",
            "extra": "iterations: 2156\ncpu: 401364.42486085434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 246987.22683885187,
            "unit": "ns/iter",
            "extra": "iterations: 3562\ncpu: 246982.90286356036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 405455.3006416219,
            "unit": "ns/iter",
            "extra": "iterations: 2182\ncpu: 405433.5930339142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 324.8577596472365,
            "unit": "ns/iter",
            "extra": "iterations: 2145671\ncpu: 324.83512150744383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1834.8910968812136,
            "unit": "ns/iter",
            "extra": "iterations: 380889\ncpu: 1834.8227436339855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1397.9445451855424,
            "unit": "ns/iter",
            "extra": "iterations: 503491\ncpu: 1397.8758309483133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1418.3012391986856,
            "unit": "ns/iter",
            "extra": "iterations: 509200\ncpu: 1418.2390023566425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1127.556465570136,
            "unit": "ns/iter",
            "extra": "iterations: 619404\ncpu: 1127.5448657096115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7312.459746846396,
            "unit": "ns/iter",
            "extra": "iterations: 95831\ncpu: 7312.342561384135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20414.33786186947,
            "unit": "ns/iter",
            "extra": "iterations: 34301\ncpu: 20413.763447129593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4932.500179328597,
            "unit": "ns/iter",
            "extra": "iterations: 142197\ncpu: 4932.282678256234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4891.996520524021,
            "unit": "ns/iter",
            "extra": "iterations: 143125\ncpu: 4891.8253275109055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4917.766737778682,
            "unit": "ns/iter",
            "extra": "iterations: 142029\ncpu: 4917.536559435089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10405.495163552789,
            "unit": "ns/iter",
            "extra": "iterations: 67715\ncpu: 10405.400575943258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8853.851838314098,
            "unit": "ns/iter",
            "extra": "iterations: 79339\ncpu: 8853.648268821022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3300.305312045861,
            "unit": "ns/iter",
            "extra": "iterations: 212517\ncpu: 3300.2428041050957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16174.170499365682,
            "unit": "ns/iter",
            "extra": "iterations: 43355\ncpu: 16173.080382885239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12918.92210499158,
            "unit": "ns/iter",
            "extra": "iterations: 54214\ncpu: 12918.161360534197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12966.249172139309,
            "unit": "ns/iter",
            "extra": "iterations: 54055\ncpu: 12965.179909351597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13388.034951006326,
            "unit": "ns/iter",
            "extra": "iterations: 51844\ncpu: 13387.362086258754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28454.890469010894,
            "unit": "ns/iter",
            "extra": "iterations: 24541\ncpu: 28451.98239680562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 106067.49371116633,
            "unit": "ns/iter",
            "extra": "iterations: 6599\ncpu: 106065.35838763507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 90672.94033756739,
            "unit": "ns/iter",
            "extra": "iterations: 7643\ncpu: 90671.66034279775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 91054.84962209857,
            "unit": "ns/iter",
            "extra": "iterations: 7674\ncpu: 91046.75527756104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 92107.26735928319,
            "unit": "ns/iter",
            "extra": "iterations: 7604\ncpu: 92103.11678064222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 59772.144429276574,
            "unit": "ns/iter",
            "extra": "iterations: 11722\ncpu: 59766.447705169216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 91588.2542484556,
            "unit": "ns/iter",
            "extra": "iterations: 7591\ncpu: 91586.07561586103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3246.131669909992,
            "unit": "ns/iter",
            "extra": "iterations: 215820\ncpu: 3245.8261514224846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16407.6805393008,
            "unit": "ns/iter",
            "extra": "iterations: 42722\ncpu: 16407.310051027398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12946.457238546136,
            "unit": "ns/iter",
            "extra": "iterations: 54044\ncpu: 12946.047664865528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12709.143275971866,
            "unit": "ns/iter",
            "extra": "iterations: 54915\ncpu: 12708.15259947169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13279.291761753235,
            "unit": "ns/iter",
            "extra": "iterations: 52584\ncpu: 13278.752091891212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28405.515298885086,
            "unit": "ns/iter",
            "extra": "iterations: 24675\ncpu: 28403.359675785247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 104928.49385491326,
            "unit": "ns/iter",
            "extra": "iterations: 6672\ncpu: 104924.05575539469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 89323.05991841386,
            "unit": "ns/iter",
            "extra": "iterations: 7844\ncpu: 89314.54614992418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 89185.83500954544,
            "unit": "ns/iter",
            "extra": "iterations: 7855\ncpu: 89184.03564608666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 90375.10452196667,
            "unit": "ns/iter",
            "extra": "iterations: 7740\ncpu: 90370.34883720927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 59770.83671555419,
            "unit": "ns/iter",
            "extra": "iterations: 11728\ncpu: 59765.87653478785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 90990.04724818043,
            "unit": "ns/iter",
            "extra": "iterations: 7704\ncpu: 90985.18951194156 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421917674,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 783.8268923364941,
            "unit": "ns/iter",
            "extra": "iterations: 890209\ncpu: 783.7999840486898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11685.417240115146,
            "unit": "ns/iter",
            "extra": "iterations: 70916\ncpu: 11685.322071182805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25414.44253049635,
            "unit": "ns/iter",
            "extra": "iterations: 32626\ncpu: 25413.550542512112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39429.142684851795,
            "unit": "ns/iter",
            "extra": "iterations: 21558\ncpu: 39427.952500231935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49486.68288455576,
            "unit": "ns/iter",
            "extra": "iterations: 16155\ncpu: 49486.66047663264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51116.21339999601,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51113.460000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61823.13140000134,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61820.27999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71892.46056963949,
            "unit": "ns/iter",
            "extra": "iterations: 12148\ncpu: 71890.45110306224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81867.6291123834,
            "unit": "ns/iter",
            "extra": "iterations: 10669\ncpu: 81863.30490205258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 622.7190692571651,
            "unit": "ns/iter",
            "extra": "iterations: 1126541\ncpu: 622.7019700126316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 568.7718427199096,
            "unit": "ns/iter",
            "extra": "iterations: 1233443\ncpu: 568.7499138590097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 569.8932377865605,
            "unit": "ns/iter",
            "extra": "iterations: 1225368\ncpu: 569.847996683446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 578.8103162027493,
            "unit": "ns/iter",
            "extra": "iterations: 1214885\ncpu: 578.7992279104617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1052.3510693918067,
            "unit": "ns/iter",
            "extra": "iterations: 661778\ncpu: 1052.3016782062873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4145.8610518561845,
            "unit": "ns/iter",
            "extra": "iterations: 195483\ncpu: 4145.7712435352405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19633.736282764887,
            "unit": "ns/iter",
            "extra": "iterations: 42155\ncpu: 19632.757679990493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15678.720849133066,
            "unit": "ns/iter",
            "extra": "iterations: 52477\ncpu: 15678.451512091007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15471.491474915892,
            "unit": "ns/iter",
            "extra": "iterations: 53020\ncpu: 15470.984534138059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15569.569651037527,
            "unit": "ns/iter",
            "extra": "iterations: 53043\ncpu: 15569.370133665132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42186.49770687846,
            "unit": "ns/iter",
            "extra": "iterations: 20060\ncpu: 42184.91026919229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 483387.6844444439,
            "unit": "ns/iter",
            "extra": "iterations: 1800\ncpu: 483379.444444445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 401647.4547970468,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 401634.17896678956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 400173.18504846015,
            "unit": "ns/iter",
            "extra": "iterations: 2167\ncpu: 400162.7134287036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 401018.375981524,
            "unit": "ns/iter",
            "extra": "iterations: 2165\ncpu: 401013.2563510388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 245360.29280677965,
            "unit": "ns/iter",
            "extra": "iterations: 3545\ncpu: 245354.80959097305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 395261.4893327263,
            "unit": "ns/iter",
            "extra": "iterations: 2203\ncpu: 395249.84112573805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1976859.1659574164,
            "unit": "ns/iter",
            "extra": "iterations: 470\ncpu: 1976776.1702127696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 793281.7230639611,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 793269.6969696977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2680197.781976595,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2680072.093023262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4025.390426991153,
            "unit": "ns/iter",
            "extra": "iterations: 196093\ncpu: 4025.320128714423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19574.922084107307,
            "unit": "ns/iter",
            "extra": "iterations: 41994\ncpu: 19574.57732056956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15560.707145424476,
            "unit": "ns/iter",
            "extra": "iterations: 52859\ncpu: 15560.12599557309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15152.939793904952,
            "unit": "ns/iter",
            "extra": "iterations: 54247\ncpu: 15152.67388058328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15629.214921426808,
            "unit": "ns/iter",
            "extra": "iterations: 53708\ncpu: 15629.05898562594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41021.27760038689,
            "unit": "ns/iter",
            "extra": "iterations: 20670\ncpu: 41020.759554910466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 500979.05123774457,
            "unit": "ns/iter",
            "extra": "iterations: 1737\ncpu: 500964.99712147145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 416662.2497612433,
            "unit": "ns/iter",
            "extra": "iterations: 2094\ncpu: 416659.1212989505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 412156.02820875164,
            "unit": "ns/iter",
            "extra": "iterations: 2127\ncpu: 412149.5063469694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 409622.32550493896,
            "unit": "ns/iter",
            "extra": "iterations: 2129\ncpu: 409606.8107092531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 242865.82504145842,
            "unit": "ns/iter",
            "extra": "iterations: 3618\ncpu: 242858.51299060244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 405713.9541666709,
            "unit": "ns/iter",
            "extra": "iterations: 2160\ncpu: 405692.0833333356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1994663.7924944365,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 1994614.348785877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 786292.8481012385,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 786235.9493670875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4336.475807392342,
            "unit": "ns/iter",
            "extra": "iterations: 188570\ncpu: 4336.241183645354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19591.183415846604,
            "unit": "ns/iter",
            "extra": "iterations: 42619\ncpu: 19590.40099486144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15693.88940153478,
            "unit": "ns/iter",
            "extra": "iterations: 52668\ncpu: 15693.028024606967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15421.623343206003,
            "unit": "ns/iter",
            "extra": "iterations: 54020\ncpu: 15420.864494631553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15637.848614471943,
            "unit": "ns/iter",
            "extra": "iterations: 53301\ncpu: 15637.081855875153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41240.310462784655,
            "unit": "ns/iter",
            "extra": "iterations: 20463\ncpu: 41238.95811953281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 489084.6586592257,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 489061.2849162022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 405855.439148554,
            "unit": "ns/iter",
            "extra": "iterations: 2161\ncpu: 405832.43868579285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 403538.9637448301,
            "unit": "ns/iter",
            "extra": "iterations: 2179\ncpu: 403513.81367599725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 403415.62787488714,
            "unit": "ns/iter",
            "extra": "iterations: 2174\ncpu: 403387.9944802195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 244187.57731673887,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 244183.26417704008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 400443.63398991374,
            "unit": "ns/iter",
            "extra": "iterations: 2183\ncpu: 400432.4324324297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 319.5099382641946,
            "unit": "ns/iter",
            "extra": "iterations: 2192083\ncpu: 319.5062869426003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1813.9035035490022,
            "unit": "ns/iter",
            "extra": "iterations: 386294\ncpu: 1813.8389413244781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1324.8074532407563,
            "unit": "ns/iter",
            "extra": "iterations: 531232\ncpu: 1324.7854044937076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1307.9737142835634,
            "unit": "ns/iter",
            "extra": "iterations: 534663\ncpu: 1307.973620766718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1115.563226191889,
            "unit": "ns/iter",
            "extra": "iterations: 627675\ncpu: 1115.5206117815712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7379.002627181871,
            "unit": "ns/iter",
            "extra": "iterations: 95159\ncpu: 7379.008816822319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20469.443276325783,
            "unit": "ns/iter",
            "extra": "iterations: 34148\ncpu: 20468.689235094054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4993.165179799798,
            "unit": "ns/iter",
            "extra": "iterations: 138098\ncpu: 4992.926762154467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4930.805515188926,
            "unit": "ns/iter",
            "extra": "iterations: 141754\ncpu: 4930.600900150994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4982.815857941846,
            "unit": "ns/iter",
            "extra": "iterations: 138366\ncpu: 4982.763106543458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10448.253798168573,
            "unit": "ns/iter",
            "extra": "iterations: 67006\ncpu: 10448.168820702456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9452.388513468046,
            "unit": "ns/iter",
            "extra": "iterations: 74139\ncpu: 9452.115620658442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3356.855303491865,
            "unit": "ns/iter",
            "extra": "iterations: 208457\ncpu: 3356.853451790984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16238.986135583062,
            "unit": "ns/iter",
            "extra": "iterations: 43132\ncpu: 16238.347398683074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12909.559517006164,
            "unit": "ns/iter",
            "extra": "iterations: 54245\ncpu: 12909.27090054378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12884.606008237824,
            "unit": "ns/iter",
            "extra": "iterations: 54392\ncpu: 12883.843212237087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13558.817430370344,
            "unit": "ns/iter",
            "extra": "iterations: 51416\ncpu: 13558.223121207218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28875.85417872343,
            "unit": "ns/iter",
            "extra": "iterations: 24194\ncpu: 28874.745804744573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 106763.23779839094,
            "unit": "ns/iter",
            "extra": "iterations: 6577\ncpu: 106762.11038467448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 91566.16221497545,
            "unit": "ns/iter",
            "extra": "iterations: 7675\ncpu: 91565.38110749164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 90958.51063830065,
            "unit": "ns/iter",
            "extra": "iterations: 7708\ncpu: 90953.86611312935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 92123.61739697844,
            "unit": "ns/iter",
            "extra": "iterations: 7645\ncpu: 92122.40680183005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 59667.38969707509,
            "unit": "ns/iter",
            "extra": "iterations: 11686\ncpu: 59665.5570768449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 91091.53495007326,
            "unit": "ns/iter",
            "extra": "iterations: 7711\ncpu: 91090.63675268953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3213.5100513101024,
            "unit": "ns/iter",
            "extra": "iterations: 218280\ncpu: 3213.356239692129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16537.84958927414,
            "unit": "ns/iter",
            "extra": "iterations: 42364\ncpu: 16537.26277027663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13063.29892501175,
            "unit": "ns/iter",
            "extra": "iterations: 53582\ncpu: 13063.29364338775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 14042.933181237771,
            "unit": "ns/iter",
            "extra": "iterations: 54790\ncpu: 14042.275962767013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13468.922861123841,
            "unit": "ns/iter",
            "extra": "iterations: 52399\ncpu: 13468.810473482166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28221.64365633993,
            "unit": "ns/iter",
            "extra": "iterations: 24757\ncpu: 28220.616391323358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 104705.99850790437,
            "unit": "ns/iter",
            "extra": "iterations: 6702\ncpu: 104702.5216353329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 89481.83085786962,
            "unit": "ns/iter",
            "extra": "iterations: 7810\ncpu: 89477.38796414767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 89133.61841939158,
            "unit": "ns/iter",
            "extra": "iterations: 7883\ncpu: 89132.76671318189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 89128.92496503521,
            "unit": "ns/iter",
            "extra": "iterations: 7863\ncpu: 89128.28436983426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 59937.32039996039,
            "unit": "ns/iter",
            "extra": "iterations: 11701\ncpu: 59935.60379454758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 90509.21559515478,
            "unit": "ns/iter",
            "extra": "iterations: 7746\ncpu: 90507.79757294069 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702422459808,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 793.9997824969076,
            "unit": "ns/iter",
            "extra": "iterations: 882746\ncpu: 793.9475228434908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11747.351761579272,
            "unit": "ns/iter",
            "extra": "iterations: 70363\ncpu: 11746.821482881629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25320.231457485046,
            "unit": "ns/iter",
            "extra": "iterations: 32412\ncpu: 25315.06849315068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39760.014591992964,
            "unit": "ns/iter",
            "extra": "iterations: 21176\ncpu: 39758.20268228183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50134.760513801346,
            "unit": "ns/iter",
            "extra": "iterations: 16193\ncpu: 50131.10603347123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51871.65860000391,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51867.36999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62782.636920638455,
            "unit": "ns/iter",
            "extra": "iterations: 13873\ncpu: 62777.503063504686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 73253.80688735364,
            "unit": "ns/iter",
            "extra": "iterations: 11993\ncpu: 73252.57233386149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 83385.23839362219,
            "unit": "ns/iter",
            "extra": "iterations: 10533\ncpu: 83378.37273331432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 638.4077821216483,
            "unit": "ns/iter",
            "extra": "iterations: 1100394\ncpu: 638.406243581844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 530.7526479533395,
            "unit": "ns/iter",
            "extra": "iterations: 1319132\ncpu: 530.7376365670759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 533.5184202779708,
            "unit": "ns/iter",
            "extra": "iterations: 1314611\ncpu: 533.5017735284431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 532.9451772978522,
            "unit": "ns/iter",
            "extra": "iterations: 1316316\ncpu: 532.943001528509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1012.8270440890177,
            "unit": "ns/iter",
            "extra": "iterations: 689378\ncpu: 1012.8029905218906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4101.621853127912,
            "unit": "ns/iter",
            "extra": "iterations: 195313\ncpu: 4101.546236041639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19592.827711898684,
            "unit": "ns/iter",
            "extra": "iterations: 42249\ncpu: 19590.106274704714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15746.382667502474,
            "unit": "ns/iter",
            "extra": "iterations: 52641\ncpu: 15745.361980205545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15088.659054611673,
            "unit": "ns/iter",
            "extra": "iterations: 54475\ncpu: 15087.65121615421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15223.692941829544,
            "unit": "ns/iter",
            "extra": "iterations: 53980\ncpu: 15222.915894775875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42314.259104779194,
            "unit": "ns/iter",
            "extra": "iterations: 19660\ncpu: 42311.81078331628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 490577.7658263212,
            "unit": "ns/iter",
            "extra": "iterations: 1785\ncpu: 490549.80392156844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 404768.50815850985,
            "unit": "ns/iter",
            "extra": "iterations: 2145\ncpu: 404745.64102564054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 397658.0096330085,
            "unit": "ns/iter",
            "extra": "iterations: 2180\ncpu: 397633.348623852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 402222.5308187878,
            "unit": "ns/iter",
            "extra": "iterations: 2174\ncpu: 402198.6660533583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 249750.1512460608,
            "unit": "ns/iter",
            "extra": "iterations: 3491\ncpu: 249737.95474076187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 398482.67325366917,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 398456.29595588363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1985728.0797413657,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1985585.7758620647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 780414.4214876131,
            "unit": "ns/iter",
            "extra": "iterations: 1210\ncpu: 780365.619834711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2701908.96774195,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2701607.038123173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4076.1373918572845,
            "unit": "ns/iter",
            "extra": "iterations: 194997\ncpu: 4076.0288619824864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19573.492191566893,
            "unit": "ns/iter",
            "extra": "iterations: 42262\ncpu: 19573.37087691075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15505.549408983698,
            "unit": "ns/iter",
            "extra": "iterations: 52875\ncpu: 15505.210401891267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15105.58697766596,
            "unit": "ns/iter",
            "extra": "iterations: 54491\ncpu: 15105.48530950077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15115.666728514467,
            "unit": "ns/iter",
            "extra": "iterations: 53896\ncpu: 15114.965860175198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41775.45925629167,
            "unit": "ns/iter",
            "extra": "iterations: 19954\ncpu: 41774.476295479886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 513138.0934033874,
            "unit": "ns/iter",
            "extra": "iterations: 1713\ncpu: 513122.4168126081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 424636.0365071461,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 424614.35619141645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 417418.1711840304,
            "unit": "ns/iter",
            "extra": "iterations: 2103\ncpu: 417417.023300048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 414373.73684210476,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 414363.0630630604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 249157.2014306057,
            "unit": "ns/iter",
            "extra": "iterations: 3495\ncpu: 249154.82117310437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 412041.8978240238,
            "unit": "ns/iter",
            "extra": "iterations: 2114\ncpu: 412027.9564806051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2035555.6800000665,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2035442.8888888916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 821513.0793650537,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 821481.4814814792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4231.199463033047,
            "unit": "ns/iter",
            "extra": "iterations: 188466\ncpu: 4231.058121889393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19607.964611764946,
            "unit": "ns/iter",
            "extra": "iterations: 42500\ncpu: 19607.411764705856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15743.752391500211,
            "unit": "ns/iter",
            "extra": "iterations: 52373\ncpu: 15743.384950260579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15455.774912620242,
            "unit": "ns/iter",
            "extra": "iterations: 53788\ncpu: 15455.65553655093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15629.16635545812,
            "unit": "ns/iter",
            "extra": "iterations: 53019\ncpu: 15628.54448405293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41511.80490700561,
            "unit": "ns/iter",
            "extra": "iterations: 20216\ncpu: 41510.47190344309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 499023.88085826946,
            "unit": "ns/iter",
            "extra": "iterations: 1771\ncpu: 498985.20609824656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 404944.9386248115,
            "unit": "ns/iter",
            "extra": "iterations: 2167\ncpu: 404920.027688047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 402018.44827585784,
            "unit": "ns/iter",
            "extra": "iterations: 2175\ncpu: 401994.7126436783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 398535.47195622424,
            "unit": "ns/iter",
            "extra": "iterations: 2193\ncpu: 398519.97264021944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 247385.42172074108,
            "unit": "ns/iter",
            "extra": "iterations: 3545\ncpu: 247379.01269393365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 398555.9628099302,
            "unit": "ns/iter",
            "extra": "iterations: 2178\ncpu: 398533.7924701533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 322.7738499074972,
            "unit": "ns/iter",
            "extra": "iterations: 2169369\ncpu: 322.7654677466122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1806.4587079493506,
            "unit": "ns/iter",
            "extra": "iterations: 387508\ncpu: 1806.4295446803696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1415.126738860086,
            "unit": "ns/iter",
            "extra": "iterations: 494505\ncpu: 1415.1029817696508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1319.6657055461008,
            "unit": "ns/iter",
            "extra": "iterations: 529937\ncpu: 1319.6283709195604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1123.218508214138,
            "unit": "ns/iter",
            "extra": "iterations: 623615\ncpu: 1123.206625882957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7330.358005584373,
            "unit": "ns/iter",
            "extra": "iterations: 95627\ncpu: 7330.211132839001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20549.48904915951,
            "unit": "ns/iter",
            "extra": "iterations: 33970\ncpu: 20549.264056520515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4937.843976936706,
            "unit": "ns/iter",
            "extra": "iterations: 141697\ncpu: 4937.631001362043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4874.060415333551,
            "unit": "ns/iter",
            "extra": "iterations: 143788\ncpu: 4874.008262163764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4959.793717748038,
            "unit": "ns/iter",
            "extra": "iterations: 137976\ncpu: 4959.335681567889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10503.950546402582,
            "unit": "ns/iter",
            "extra": "iterations: 66709\ncpu: 10503.311397262605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9353.721518987102,
            "unit": "ns/iter",
            "extra": "iterations: 82397\ncpu: 9353.1499933249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3348.2475431059306,
            "unit": "ns/iter",
            "extra": "iterations: 209309\ncpu: 3348.0170465675137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16227.631705457565,
            "unit": "ns/iter",
            "extra": "iterations: 43267\ncpu: 16226.475142718693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12968.496064304709,
            "unit": "ns/iter",
            "extra": "iterations: 53993\ncpu: 12967.582834811974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13050.46688155672,
            "unit": "ns/iter",
            "extra": "iterations: 53671\ncpu: 13050.336308248498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13536.45993247716,
            "unit": "ns/iter",
            "extra": "iterations: 51538\ncpu: 13536.196592805454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28638.53844885164,
            "unit": "ns/iter",
            "extra": "iterations: 24253\ncpu: 28638.01591555677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 107726.26697388214,
            "unit": "ns/iter",
            "extra": "iterations: 6510\ncpu: 107719.46236559066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 91680.81199736161,
            "unit": "ns/iter",
            "extra": "iterations: 7585\ncpu: 91673.2630191167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 92138.31621798745,
            "unit": "ns/iter",
            "extra": "iterations: 7615\ncpu: 92132.18647406605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 93007.01438657544,
            "unit": "ns/iter",
            "extra": "iterations: 7507\ncpu: 93004.30265085875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 60584.213300960495,
            "unit": "ns/iter",
            "extra": "iterations: 11533\ncpu: 60583.04864302462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 92067.94776217811,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 92061.68788554979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3229.443527491794,
            "unit": "ns/iter",
            "extra": "iterations: 216902\ncpu: 3229.210887866408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16568.509433962565,
            "unit": "ns/iter",
            "extra": "iterations: 42188\ncpu: 16567.19683322254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13032.016529386623,
            "unit": "ns/iter",
            "extra": "iterations: 53783\ncpu: 13031.115780079403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12862.23779602835,
            "unit": "ns/iter",
            "extra": "iterations: 54429\ncpu: 12861.368020724252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13367.62474443552,
            "unit": "ns/iter",
            "extra": "iterations: 52335\ncpu: 13366.511894525644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28322.16356393625,
            "unit": "ns/iter",
            "extra": "iterations: 24602\ncpu: 28320.339809771514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 106770.55209906798,
            "unit": "ns/iter",
            "extra": "iterations: 6622\ncpu: 106767.5928722438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 90737.00563564955,
            "unit": "ns/iter",
            "extra": "iterations: 7630\ncpu: 90731.90039318366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 89846.57225507889,
            "unit": "ns/iter",
            "extra": "iterations: 7778\ncpu: 89843.0959115455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 90990.3969326751,
            "unit": "ns/iter",
            "extra": "iterations: 7694\ncpu: 90988.10761632457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 60349.72809667616,
            "unit": "ns/iter",
            "extra": "iterations: 11585\ncpu: 60349.04618040635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 92034.72020996784,
            "unit": "ns/iter",
            "extra": "iterations: 7620\ncpu: 92032.08661417321 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702468559448,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 817.2182153941213,
            "unit": "ns/iter",
            "extra": "iterations: 857758\ncpu: 817.2096325537041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11684.521127750002,
            "unit": "ns/iter",
            "extra": "iterations: 71186\ncpu: 11684.409855870535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26574.126658361063,
            "unit": "ns/iter",
            "extra": "iterations: 32110\ncpu: 26573.84926814076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40653.4920428853,
            "unit": "ns/iter",
            "extra": "iterations: 20799\ncpu: 40652.69003317469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50410.36819690805,
            "unit": "ns/iter",
            "extra": "iterations: 15967\ncpu: 50407.759754493636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51522.91819999846,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51521.319999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 63267.06780000108,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 63264.65000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72116.5840294007,
            "unit": "ns/iter",
            "extra": "iterations: 11972\ncpu: 72113.50651520214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 82119.8810126622,
            "unit": "ns/iter",
            "extra": "iterations: 10270\ncpu: 82117.1957156768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 655.7741274088801,
            "unit": "ns/iter",
            "extra": "iterations: 1101289\ncpu: 655.7270616523012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 550.8122879233656,
            "unit": "ns/iter",
            "extra": "iterations: 1269588\ncpu: 550.801992457396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 561.903025466222,
            "unit": "ns/iter",
            "extra": "iterations: 1246750\ncpu: 561.8601163023862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 554.1545316554694,
            "unit": "ns/iter",
            "extra": "iterations: 1260952\ncpu: 554.1287059301236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1056.5913351190798,
            "unit": "ns/iter",
            "extra": "iterations: 662675\ncpu: 1056.5163918964804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4085.3270660569556,
            "unit": "ns/iter",
            "extra": "iterations: 193545\ncpu: 4084.985403911237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19339.754078535803,
            "unit": "ns/iter",
            "extra": "iterations: 42172\ncpu: 19339.37683771221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15386.926129829244,
            "unit": "ns/iter",
            "extra": "iterations: 53039\ncpu: 15386.426968834232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15070.6699531033,
            "unit": "ns/iter",
            "extra": "iterations: 54162\ncpu: 15070.470071267679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15170.422928798549,
            "unit": "ns/iter",
            "extra": "iterations: 53749\ncpu: 15169.84502037245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41348.99740117168,
            "unit": "ns/iter",
            "extra": "iterations: 20009\ncpu: 41348.96796441614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 487256.759042839,
            "unit": "ns/iter",
            "extra": "iterations: 1797\ncpu: 487230.55091819697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 402984.5722196664,
            "unit": "ns/iter",
            "extra": "iterations: 2167\ncpu: 402970.46608214104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 400905.3653136666,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 400887.6845018458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 401992.73896888376,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 401976.4514630751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 249678.66210435747,
            "unit": "ns/iter",
            "extra": "iterations: 3507\ncpu: 249666.35300826968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 398958.37408086914,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 398938.7867647063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1978241.2939914467,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1978086.2660944168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 782450.0521523035,
            "unit": "ns/iter",
            "extra": "iterations: 1208\ncpu: 782414.6523178812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2682801.802898607,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2682595.3623188483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4117.500935036723,
            "unit": "ns/iter",
            "extra": "iterations: 196249\ncpu: 4117.281107164867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19397.012593206426,
            "unit": "ns/iter",
            "extra": "iterations: 42245\ncpu: 19395.741507870753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15473.684799549683,
            "unit": "ns/iter",
            "extra": "iterations: 53255\ncpu: 15472.667355177868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15036.222447785376,
            "unit": "ns/iter",
            "extra": "iterations: 54678\ncpu: 15035.35608471416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 14911.25624035581,
            "unit": "ns/iter",
            "extra": "iterations: 55085\ncpu: 14909.911954252606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41266.92840920243,
            "unit": "ns/iter",
            "extra": "iterations: 20254\ncpu: 41264.77732793547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 501197.437825352,
            "unit": "ns/iter",
            "extra": "iterations: 1729\ncpu: 501170.7923655302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 417731.367472743,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 417710.6211474619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 406323.1802515165,
            "unit": "ns/iter",
            "extra": "iterations: 2147\ncpu: 406306.2412668852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 406148.9308436946,
            "unit": "ns/iter",
            "extra": "iterations: 2169\ncpu: 406136.00737667247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 240569.28241123323,
            "unit": "ns/iter",
            "extra": "iterations: 3633\ncpu: 240554.1701073505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 405458.20512820396,
            "unit": "ns/iter",
            "extra": "iterations: 2145\ncpu: 405439.7668997672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1992683.8915401655,
            "unit": "ns/iter",
            "extra": "iterations: 461\ncpu: 1992586.3340564081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 787774.9881456626,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 787730.651989837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4277.324923253963,
            "unit": "ns/iter",
            "extra": "iterations: 187632\ncpu: 4277.242687814429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20234.37869210745,
            "unit": "ns/iter",
            "extra": "iterations: 42557\ncpu: 20234.013205818123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15776.144255899082,
            "unit": "ns/iter",
            "extra": "iterations: 52802\ncpu: 15775.978182644601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15547.020029923397,
            "unit": "ns/iter",
            "extra": "iterations: 53470\ncpu: 15546.78885356263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15746.521525587592,
            "unit": "ns/iter",
            "extra": "iterations: 52937\ncpu: 15746.23987003428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41724.10425699637,
            "unit": "ns/iter",
            "extra": "iterations: 20296\ncpu: 41722.132439889894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 490987.98146068543,
            "unit": "ns/iter",
            "extra": "iterations: 1780\ncpu: 490920.22471910075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 407382.88000001333,
            "unit": "ns/iter",
            "extra": "iterations: 2150\ncpu: 407362.139534883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 401706.8881215618,
            "unit": "ns/iter",
            "extra": "iterations: 2172\ncpu: 401686.9705340676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 400249.3765574526,
            "unit": "ns/iter",
            "extra": "iterations: 2167\ncpu: 400235.9021688953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 244749.75721895808,
            "unit": "ns/iter",
            "extra": "iterations: 3567\ncpu: 244731.56714325718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 400581.9545245512,
            "unit": "ns/iter",
            "extra": "iterations: 2177\ncpu: 400568.6265502963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 322.9693000616984,
            "unit": "ns/iter",
            "extra": "iterations: 2168734\ncpu: 322.95993883989667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2037.216749342075,
            "unit": "ns/iter",
            "extra": "iterations: 343512\ncpu: 2037.1465916765571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1412.1075059302557,
            "unit": "ns/iter",
            "extra": "iterations: 495768\ncpu: 1412.017112843097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1357.2100837240243,
            "unit": "ns/iter",
            "extra": "iterations: 515742\ncpu: 1357.1417491691652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1118.2430060840063,
            "unit": "ns/iter",
            "extra": "iterations: 625079\ncpu: 1118.208578435677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7679.730754520997,
            "unit": "ns/iter",
            "extra": "iterations: 91515\ncpu: 7679.526853521294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20460.254259080826,
            "unit": "ns/iter",
            "extra": "iterations: 34221\ncpu: 20459.90473685747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5019.787753110707,
            "unit": "ns/iter",
            "extra": "iterations: 139366\ncpu: 5019.611669991246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4986.896336949447,
            "unit": "ns/iter",
            "extra": "iterations: 140484\ncpu: 4986.883915606049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5044.455240844321,
            "unit": "ns/iter",
            "extra": "iterations: 138575\ncpu: 5044.318960851518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10431.769919814016,
            "unit": "ns/iter",
            "extra": "iterations: 67094\ncpu: 10431.513995290272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9323.200992720835,
            "unit": "ns/iter",
            "extra": "iterations: 75147\ncpu: 9322.920409331133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3322.834255400806,
            "unit": "ns/iter",
            "extra": "iterations: 210939\ncpu: 3322.754445597988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16270.656241305373,
            "unit": "ns/iter",
            "extra": "iterations: 43132\ncpu: 16270.360753036977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12901.392179636137,
            "unit": "ns/iter",
            "extra": "iterations: 54243\ncpu: 12900.956805486347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13016.933890280858,
            "unit": "ns/iter",
            "extra": "iterations: 53865\ncpu: 13016.797549429055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13568.284158300583,
            "unit": "ns/iter",
            "extra": "iterations: 51598\ncpu: 13567.975502926281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28803.755820158993,
            "unit": "ns/iter",
            "extra": "iterations: 24355\ncpu: 28803.46540751363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 106297.16305500903,
            "unit": "ns/iter",
            "extra": "iterations: 6599\ncpu: 106294.39308986242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 90976.49453267612,
            "unit": "ns/iter",
            "extra": "iterations: 7682\ncpu: 90974.00416558211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 91140.77036746815,
            "unit": "ns/iter",
            "extra": "iterations: 7647\ncpu: 91137.84490649935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 92099.21876640632,
            "unit": "ns/iter",
            "extra": "iterations: 7620\ncpu: 92095.40682414749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 59672.82178133631,
            "unit": "ns/iter",
            "extra": "iterations: 11744\ncpu: 59672.147479564155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 90809.29535756265,
            "unit": "ns/iter",
            "extra": "iterations: 7733\ncpu: 90806.27182206105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3239.671596716214,
            "unit": "ns/iter",
            "extra": "iterations: 216225\ncpu: 3239.5472308937515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 18627.07522197612,
            "unit": "ns/iter",
            "extra": "iterations: 42009\ncpu: 18625.856364112373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12924.283491341565,
            "unit": "ns/iter",
            "extra": "iterations: 54111\ncpu: 12923.584853356915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12754.026717068979,
            "unit": "ns/iter",
            "extra": "iterations: 54759\ncpu: 12753.434138680252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13250.789874424923,
            "unit": "ns/iter",
            "extra": "iterations: 52797\ncpu: 13250.652499195141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28461.21197595063,
            "unit": "ns/iter",
            "extra": "iterations: 24616\ncpu: 28460.350991225307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 103502.33362844463,
            "unit": "ns/iter",
            "extra": "iterations: 6777\ncpu: 103493.95012542485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 88325.53168703575,
            "unit": "ns/iter",
            "extra": "iterations: 7937\ncpu: 88322.1494267349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 89054.09548567414,
            "unit": "ns/iter",
            "extra": "iterations: 7886\ncpu: 89048.00913010244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 88815.58349230024,
            "unit": "ns/iter",
            "extra": "iterations: 7863\ncpu: 88812.13277375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 59227.800425717425,
            "unit": "ns/iter",
            "extra": "iterations: 11745\ncpu: 59225.432098765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 89933.0551494119,
            "unit": "ns/iter",
            "extra": "iterations: 7797\ncpu: 89928.74182377828 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479549900,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 831.2627257625605,
            "unit": "ns/iter",
            "extra": "iterations: 847572\ncpu: 831.2095019656148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11643.270191040523,
            "unit": "ns/iter",
            "extra": "iterations: 71294\ncpu: 11643.127051364769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25587.22712072423,
            "unit": "ns/iter",
            "extra": "iterations: 32595\ncpu: 25585.7462801043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40025.6599635223,
            "unit": "ns/iter",
            "extra": "iterations: 21383\ncpu: 40023.771220128154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50296.981005445115,
            "unit": "ns/iter",
            "extra": "iterations: 15794\ncpu: 50293.52285678106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51504.50830000182,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51501.69 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62293.51899277295,
            "unit": "ns/iter",
            "extra": "iterations: 13979\ncpu: 62290.32834966734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72233.70548572172,
            "unit": "ns/iter",
            "extra": "iterations: 12013\ncpu: 72232.60634312827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 82268.75397426353,
            "unit": "ns/iter",
            "extra": "iterations: 10568\ncpu: 82265.14950794849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 631.8344762020291,
            "unit": "ns/iter",
            "extra": "iterations: 1107593\ncpu: 631.8041916119021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 531.6329709098148,
            "unit": "ns/iter",
            "extra": "iterations: 1318623\ncpu: 531.6046360483624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 534.6039953113358,
            "unit": "ns/iter",
            "extra": "iterations: 1309535\ncpu: 534.5770827049289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 528.9437567890558,
            "unit": "ns/iter",
            "extra": "iterations: 1328427\ncpu: 528.9428022766768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1030.507569757374,
            "unit": "ns/iter",
            "extra": "iterations: 680537\ncpu: 1030.4847495433755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4093.4422218700347,
            "unit": "ns/iter",
            "extra": "iterations: 195619\ncpu: 4093.429574836805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19391.475227931616,
            "unit": "ns/iter",
            "extra": "iterations: 42447\ncpu: 19391.139538718864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15555.984786041952,
            "unit": "ns/iter",
            "extra": "iterations: 51926\ncpu: 15555.783229981147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15227.670134059916,
            "unit": "ns/iter",
            "extra": "iterations: 53931\ncpu: 15227.368303943946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15366.40491173344,
            "unit": "ns/iter",
            "extra": "iterations: 53871\ncpu: 15366.258283677664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42294.13847364415,
            "unit": "ns/iter",
            "extra": "iterations: 20336\ncpu: 42290.838906372934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 497885.5219347573,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 497852.64341957273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 404292.2055944024,
            "unit": "ns/iter",
            "extra": "iterations: 2145\ncpu: 404269.0442890443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 398702.5606270126,
            "unit": "ns/iter",
            "extra": "iterations: 2169\ncpu: 398688.6122637154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 405538.317039097,
            "unit": "ns/iter",
            "extra": "iterations: 2148\ncpu: 405525.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 250617.92221262644,
            "unit": "ns/iter",
            "extra": "iterations: 3471\ncpu: 250601.44050705858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 402587.3887336972,
            "unit": "ns/iter",
            "extra": "iterations: 2148\ncpu: 402567.83054003626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1969035.264392393,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1968935.8208955217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 774446.2730263168,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 774404.0296052631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2693664.064896837,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2693376.1061946936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3924.2197500821167,
            "unit": "ns/iter",
            "extra": "iterations: 200546\ncpu: 3924.0633071714287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19686.07799616441,
            "unit": "ns/iter",
            "extra": "iterations: 41720\ncpu: 19685.20853307769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15432.132296084288,
            "unit": "ns/iter",
            "extra": "iterations: 53282\ncpu: 15431.312638414505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15041.879689071822,
            "unit": "ns/iter",
            "extra": "iterations: 54675\ncpu: 15041.08459076361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15169.999282441315,
            "unit": "ns/iter",
            "extra": "iterations: 54351\ncpu: 15169.086125370284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40917.78061453955,
            "unit": "ns/iter",
            "extra": "iterations: 20015\ncpu: 40917.68673494876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 505561.6212121267,
            "unit": "ns/iter",
            "extra": "iterations: 1716\ncpu: 505533.50815850636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 418385.6857831273,
            "unit": "ns/iter",
            "extra": "iterations: 2075\ncpu: 418371.5180722896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 414287.61837122263,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 414266.4772727279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 415163.2129367302,
            "unit": "ns/iter",
            "extra": "iterations: 2118\ncpu: 415143.1539187914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 243509.52932961428,
            "unit": "ns/iter",
            "extra": "iterations: 3580\ncpu: 243507.40223463788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 408794.148528732,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 408776.1793554419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1989661.4357297819,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 1989462.5272331173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 794429.2623931641,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 794370.0854700826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4234.024460667022,
            "unit": "ns/iter",
            "extra": "iterations: 189447\ncpu: 4233.83795995712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19594.804146524133,
            "unit": "ns/iter",
            "extra": "iterations: 41577\ncpu: 19593.919715227094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15761.912728333164,
            "unit": "ns/iter",
            "extra": "iterations: 51460\ncpu: 15761.167897395984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15456.127679883506,
            "unit": "ns/iter",
            "extra": "iterations: 52381\ncpu: 15455.298677001234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15704.841174649344,
            "unit": "ns/iter",
            "extra": "iterations: 51692\ncpu: 15704.132167453316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40648.50052298745,
            "unit": "ns/iter",
            "extra": "iterations: 20077\ncpu: 40647.26801813021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 497735.19505179324,
            "unit": "ns/iter",
            "extra": "iterations: 1738\ncpu: 497734.4073647867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 409584.0685124292,
            "unit": "ns/iter",
            "extra": "iterations: 2131\ncpu: 409564.9460347275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 404825.50647546176,
            "unit": "ns/iter",
            "extra": "iterations: 2162\ncpu: 404803.93154486606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 405007.3684210397,
            "unit": "ns/iter",
            "extra": "iterations: 2147\ncpu: 404989.5668374477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 245245.121693134,
            "unit": "ns/iter",
            "extra": "iterations: 3591\ncpu: 245229.26761347867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 401681.78113553586,
            "unit": "ns/iter",
            "extra": "iterations: 2184\ncpu: 401681.043956043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 323.5498060566245,
            "unit": "ns/iter",
            "extra": "iterations: 2164807\ncpu: 323.5406666737476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1834.0847931854214,
            "unit": "ns/iter",
            "extra": "iterations: 394218\ncpu: 1834.0468979092852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1435.4690316976776,
            "unit": "ns/iter",
            "extra": "iterations: 488112\ncpu: 1435.410725407283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1306.5435836727422,
            "unit": "ns/iter",
            "extra": "iterations: 536405\ncpu: 1306.5323775878342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1122.4880981898973,
            "unit": "ns/iter",
            "extra": "iterations: 621082\ncpu: 1122.4281173822526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7431.440986394864,
            "unit": "ns/iter",
            "extra": "iterations: 94080\ncpu: 7431.2829506802655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20473.1807988784,
            "unit": "ns/iter",
            "extra": "iterations: 34248\ncpu: 20472.60569960308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4920.624042142064,
            "unit": "ns/iter",
            "extra": "iterations: 142375\ncpu: 4920.474802458259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4903.010374142415,
            "unit": "ns/iter",
            "extra": "iterations: 142566\ncpu: 4902.839386670027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4930.569803319064,
            "unit": "ns/iter",
            "extra": "iterations: 141956\ncpu: 4930.419989292426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10402.074877755544,
            "unit": "ns/iter",
            "extra": "iterations: 67283\ncpu: 10401.57692136196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9355.777854717275,
            "unit": "ns/iter",
            "extra": "iterations: 75095\ncpu: 9355.59358146357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3360.413504014118,
            "unit": "ns/iter",
            "extra": "iterations: 208264\ncpu: 3360.2389275150463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16397.31747840128,
            "unit": "ns/iter",
            "extra": "iterations: 42132\ncpu: 16396.49672457984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13153.789719713885,
            "unit": "ns/iter",
            "extra": "iterations: 53481\ncpu: 13152.884201866167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13025.299348757713,
            "unit": "ns/iter",
            "extra": "iterations: 53897\ncpu: 13024.77503386097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13603.611876512228,
            "unit": "ns/iter",
            "extra": "iterations: 51244\ncpu: 13603.44625712287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28856.071422654368,
            "unit": "ns/iter",
            "extra": "iterations: 24138\ncpu: 28854.722843649408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 105905.53454270645,
            "unit": "ns/iter",
            "extra": "iterations: 6615\ncpu: 105903.25018896337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 91625.17013207685,
            "unit": "ns/iter",
            "extra": "iterations: 7647\ncpu: 91619.45861122031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 91299.5497525329,
            "unit": "ns/iter",
            "extra": "iterations: 7678\ncpu: 91296.93930711098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 91598.40639328738,
            "unit": "ns/iter",
            "extra": "iterations: 7633\ncpu: 91595.06091969022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 59761.72938166266,
            "unit": "ns/iter",
            "extra": "iterations: 11725\ncpu: 59758.4562899786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 91318.5277234177,
            "unit": "ns/iter",
            "extra": "iterations: 7665\ncpu: 91316.37312459204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3237.4015156441296,
            "unit": "ns/iter",
            "extra": "iterations: 215222\ncpu: 3237.260596035748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16563.414641073592,
            "unit": "ns/iter",
            "extra": "iterations: 42251\ncpu: 16563.38784880812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13161.55889215085,
            "unit": "ns/iter",
            "extra": "iterations: 53148\ncpu: 13160.999473169328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13065.786180529736,
            "unit": "ns/iter",
            "extra": "iterations: 53620\ncpu: 13065.255501678446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13610.21564160902,
            "unit": "ns/iter",
            "extra": "iterations: 51363\ncpu: 13609.48348032631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28168.576456801336,
            "unit": "ns/iter",
            "extra": "iterations: 24746\ncpu: 28167.501818475328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 105088.63776579795,
            "unit": "ns/iter",
            "extra": "iterations: 6678\ncpu: 105087.4812818213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 88552.89960804401,
            "unit": "ns/iter",
            "extra": "iterations: 7909\ncpu: 88549.43734985501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 89164.61404853103,
            "unit": "ns/iter",
            "extra": "iterations: 7830\ncpu: 89162.7330779057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 91683.88658440545,
            "unit": "ns/iter",
            "extra": "iterations: 7618\ncpu: 91677.54003675423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 60618.71326627106,
            "unit": "ns/iter",
            "extra": "iterations: 11631\ncpu: 60615.948757629485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 91773.2960697565,
            "unit": "ns/iter",
            "extra": "iterations: 7684\ncpu: 91767.90733992674 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488597425,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 788.4653759543435,
            "unit": "ns/iter",
            "extra": "iterations: 889483\ncpu: 788.4137189805764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11810.51650560119,
            "unit": "ns/iter",
            "extra": "iterations: 70158\ncpu: 11810.055873884663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25930.99840848833,
            "unit": "ns/iter",
            "extra": "iterations: 32045\ncpu: 25929.580277734443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40345.69679943832,
            "unit": "ns/iter",
            "extra": "iterations: 19934\ncpu: 40343.077154610226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50783.12825278856,
            "unit": "ns/iter",
            "extra": "iterations: 15602\ncpu: 50780.94475067296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 52580.9578999997,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52577.78000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 63202.995291561725,
            "unit": "ns/iter",
            "extra": "iterations: 13805\ncpu: 63199.1886997465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72795.52810501616,
            "unit": "ns/iter",
            "extra": "iterations: 11884\ncpu: 72792.86435543584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 82612.55275858878,
            "unit": "ns/iter",
            "extra": "iterations: 10567\ncpu: 82608.4603009368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 629.3375183920313,
            "unit": "ns/iter",
            "extra": "iterations: 1100343\ncpu: 629.3281276838235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 533.640808251859,
            "unit": "ns/iter",
            "extra": "iterations: 1313254\ncpu: 533.6267774550853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 533.3447807678809,
            "unit": "ns/iter",
            "extra": "iterations: 1313220\ncpu: 533.3407197575419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 528.5585392084328,
            "unit": "ns/iter",
            "extra": "iterations: 1322242\ncpu: 528.5474217276412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1010.4094629344567,
            "unit": "ns/iter",
            "extra": "iterations: 693379\ncpu: 1010.3902771788604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4107.115583467889,
            "unit": "ns/iter",
            "extra": "iterations: 194578\ncpu: 4107.018265168719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19534.80589785561,
            "unit": "ns/iter",
            "extra": "iterations: 42117\ncpu: 19534.43265189829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15494.853637439937,
            "unit": "ns/iter",
            "extra": "iterations: 53183\ncpu: 15494.590376624106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15136.193384877215,
            "unit": "ns/iter",
            "extra": "iterations: 54451\ncpu: 15135.905676663413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15287.022402048513,
            "unit": "ns/iter",
            "extra": "iterations: 53879\ncpu: 15286.523506375335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 42164.37377603257,
            "unit": "ns/iter",
            "extra": "iterations: 20119\ncpu: 42163.000149112806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 490668.25576164795,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 490653.06351883005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 404897.06409661344,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 404875.42963306955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 404952.448484845,
            "unit": "ns/iter",
            "extra": "iterations: 2145\ncpu: 404925.22144522273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 406833.9473189227,
            "unit": "ns/iter",
            "extra": "iterations: 2126\ncpu: 406815.05174035876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 249133.78177112632,
            "unit": "ns/iter",
            "extra": "iterations: 3478\ncpu: 249123.4042553192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 400765.8905817269,
            "unit": "ns/iter",
            "extra": "iterations: 2166\ncpu: 400745.61403508764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1989001.1896551668,
            "unit": "ns/iter",
            "extra": "iterations: 464\ncpu: 1988853.2327586163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 823390.9964973597,
            "unit": "ns/iter",
            "extra": "iterations: 1142\ncpu: 823351.6637478096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2696736.552631621,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2696660.526315784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4038.3991118540735,
            "unit": "ns/iter",
            "extra": "iterations: 195013\ncpu: 4038.2928317599317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19451.73214918414,
            "unit": "ns/iter",
            "extra": "iterations: 42337\ncpu: 19451.56718709402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15392.832673563371,
            "unit": "ns/iter",
            "extra": "iterations: 53554\ncpu: 15392.542107032232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15029.655423449705,
            "unit": "ns/iter",
            "extra": "iterations: 54670\ncpu: 15029.281141393827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15374.299663362059,
            "unit": "ns/iter",
            "extra": "iterations: 54064\ncpu: 15358.419650784255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41454.55520458789,
            "unit": "ns/iter",
            "extra": "iterations: 20578\ncpu: 41451.433569831795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 505455.19895594177,
            "unit": "ns/iter",
            "extra": "iterations: 1724\ncpu: 505432.9466357305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 416251.43511450914,
            "unit": "ns/iter",
            "extra": "iterations: 2096\ncpu: 416210.9255725185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 414050.4004739324,
            "unit": "ns/iter",
            "extra": "iterations: 2110\ncpu: 414025.7345971567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 409245.37858151045,
            "unit": "ns/iter",
            "extra": "iterations: 2129\ncpu: 409210.89713480405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 246441.37830242477,
            "unit": "ns/iter",
            "extra": "iterations: 3558\ncpu: 246422.1753794251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 406804.76808905724,
            "unit": "ns/iter",
            "extra": "iterations: 2156\ncpu: 406787.38404452556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1994754.6506550799,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 1994523.3624454183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 807817.315245495,
            "unit": "ns/iter",
            "extra": "iterations: 1161\ncpu: 807757.4504737292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4220.740832959867,
            "unit": "ns/iter",
            "extra": "iterations: 189565\ncpu: 4220.665207184881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19476.799177051562,
            "unit": "ns/iter",
            "extra": "iterations: 42530\ncpu: 19476.374324006665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15660.968535502223,
            "unit": "ns/iter",
            "extra": "iterations: 52885\ncpu: 15660.571050392313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15374.735343755885,
            "unit": "ns/iter",
            "extra": "iterations: 53919\ncpu: 15374.109312116285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15564.699003009917,
            "unit": "ns/iter",
            "extra": "iterations: 53160\ncpu: 15564.401805869145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40157.79385127522,
            "unit": "ns/iter",
            "extra": "iterations: 20427\ncpu: 40157.05683653989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 497094.1475410037,
            "unit": "ns/iter",
            "extra": "iterations: 1769\ncpu: 497076.4838892015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 408283.90853372257,
            "unit": "ns/iter",
            "extra": "iterations: 2121\ncpu: 408273.9273927395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 403755.88029808045,
            "unit": "ns/iter",
            "extra": "iterations: 2147\ncpu: 403745.4587796924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 402686.6349279962,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 402668.7877380421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 243987.34159933735,
            "unit": "ns/iter",
            "extra": "iterations: 3589\ncpu: 243976.51156310938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 398979.16583144135,
            "unit": "ns/iter",
            "extra": "iterations: 2195\ncpu: 398965.3758542173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 318.85626487934684,
            "unit": "ns/iter",
            "extra": "iterations: 2197257\ncpu: 318.8436309453092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1815.4579556339434,
            "unit": "ns/iter",
            "extra": "iterations: 383131\ncpu: 1815.385599181491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1330.2332332103765,
            "unit": "ns/iter",
            "extra": "iterations: 525354\ncpu: 1330.1819344670419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1366.0134687929908,
            "unit": "ns/iter",
            "extra": "iterations: 514003\ncpu: 1365.9723775931277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1128.2724703076206,
            "unit": "ns/iter",
            "extra": "iterations: 620530\ncpu: 1128.2634199796937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7319.285198405239,
            "unit": "ns/iter",
            "extra": "iterations: 95814\ncpu: 7319.022272319255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21038.917678333928,
            "unit": "ns/iter",
            "extra": "iterations: 33855\ncpu: 21038.313395362595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4944.597496361802,
            "unit": "ns/iter",
            "extra": "iterations: 141554\ncpu: 4944.502451361323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4933.8652437394485,
            "unit": "ns/iter",
            "extra": "iterations: 142242\ncpu: 4933.727731612339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5007.124889003605,
            "unit": "ns/iter",
            "extra": "iterations: 139644\ncpu: 5006.790839563539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10365.524524331771,
            "unit": "ns/iter",
            "extra": "iterations: 67484\ncpu: 10365.216940311622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9312.765607158299,
            "unit": "ns/iter",
            "extra": "iterations: 75318\ncpu: 9312.467139329341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3324.949913414163,
            "unit": "ns/iter",
            "extra": "iterations: 210196\ncpu: 3324.8368189689504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16101.457315380474,
            "unit": "ns/iter",
            "extra": "iterations: 43224\ncpu: 16100.930038867276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12846.620950283883,
            "unit": "ns/iter",
            "extra": "iterations: 54510\ncpu: 12846.167675655932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12938.902823920931,
            "unit": "ns/iter",
            "extra": "iterations: 54180\ncpu: 12938.300110741879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13485.427040110153,
            "unit": "ns/iter",
            "extra": "iterations: 52056\ncpu: 13485.137159981508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28475.142897864895,
            "unit": "ns/iter",
            "extra": "iterations: 24556\ncpu: 28474.918553510102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 106395.61776295718,
            "unit": "ns/iter",
            "extra": "iterations: 6598\ncpu: 106393.6950591089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 91687.88982051604,
            "unit": "ns/iter",
            "extra": "iterations: 7633\ncpu: 91685.91641556301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 90703.30164913439,
            "unit": "ns/iter",
            "extra": "iterations: 7701\ncpu: 90698.15608362485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 92355.57402528808,
            "unit": "ns/iter",
            "extra": "iterations: 7592\ncpu: 92350.68493150774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 60363.192651096935,
            "unit": "ns/iter",
            "extra": "iterations: 11648\ncpu: 60362.843406594264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 91974.88204387369,
            "unit": "ns/iter",
            "extra": "iterations: 7613\ncpu: 91973.17745960843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3222.5186176091333,
            "unit": "ns/iter",
            "extra": "iterations: 217160\ncpu: 3222.4599373733663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16569.670184571245,
            "unit": "ns/iter",
            "extra": "iterations: 42260\ncpu: 16569.415522953313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13033.733812680857,
            "unit": "ns/iter",
            "extra": "iterations: 53545\ncpu: 13032.753758520861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12816.45775904987,
            "unit": "ns/iter",
            "extra": "iterations: 54343\ncpu: 12815.385606241856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13440.431698488905,
            "unit": "ns/iter",
            "extra": "iterations: 52217\ncpu: 13439.34733898935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28077.6348607658,
            "unit": "ns/iter",
            "extra": "iterations: 24922\ncpu: 28076.189711901516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 105181.7189384817,
            "unit": "ns/iter",
            "extra": "iterations: 6632\ncpu: 105173.68817852759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 89872.820166992,
            "unit": "ns/iter",
            "extra": "iterations: 7785\ncpu: 89872.10019267717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 88928.10569724509,
            "unit": "ns/iter",
            "extra": "iterations: 7881\ncpu: 88920.7841644461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 89566.15213500777,
            "unit": "ns/iter",
            "extra": "iterations: 7822\ncpu: 89559.000255689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 60614.68748380214,
            "unit": "ns/iter",
            "extra": "iterations: 11577\ncpu: 60609.96804007952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 90886.55961038837,
            "unit": "ns/iter",
            "extra": "iterations: 7700\ncpu: 90880.2857142872 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490829275,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 791.399568848837,
            "unit": "ns/iter",
            "extra": "iterations: 883217\ncpu: 791.3923758260994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11360.476212827623,
            "unit": "ns/iter",
            "extra": "iterations: 72434\ncpu: 11359.86967446227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25119.94419192601,
            "unit": "ns/iter",
            "extra": "iterations: 33221\ncpu: 25119.279973510736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39327.985583287016,
            "unit": "ns/iter",
            "extra": "iterations: 21156\ncpu: 39327.91170353565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49625.50749861018,
            "unit": "ns/iter",
            "extra": "iterations: 16203\ncpu: 49623.3228414491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51251.65370000104,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51250.070000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61916.220000000525,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61912.680000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71802.69335985734,
            "unit": "ns/iter",
            "extra": "iterations: 12063\ncpu: 71800.82898118212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81859.7392204845,
            "unit": "ns/iter",
            "extra": "iterations: 10622\ncpu: 81855.28149124465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 631.5102730502773,
            "unit": "ns/iter",
            "extra": "iterations: 1110235\ncpu: 631.4773899219538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 532.644370271206,
            "unit": "ns/iter",
            "extra": "iterations: 1312843\ncpu: 532.6345191313807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 535.4853392353978,
            "unit": "ns/iter",
            "extra": "iterations: 1308015\ncpu: 535.4653425228296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 532.0085051058201,
            "unit": "ns/iter",
            "extra": "iterations: 1309096\ncpu: 531.9945214101948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1028.355999181779,
            "unit": "ns/iter",
            "extra": "iterations: 674642\ncpu: 1028.273958632876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3975.391834023667,
            "unit": "ns/iter",
            "extra": "iterations: 201764\ncpu: 3975.2160940504737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19589.429883888242,
            "unit": "ns/iter",
            "extra": "iterations: 41253\ncpu: 19588.619009526556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15519.8014289233,
            "unit": "ns/iter",
            "extra": "iterations: 52767\ncpu: 15519.46860727347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15061.137509690325,
            "unit": "ns/iter",
            "extra": "iterations: 54178\ncpu: 15060.426741481771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15191.400618358528,
            "unit": "ns/iter",
            "extra": "iterations: 54014\ncpu: 15191.409634539144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 41673.308770563526,
            "unit": "ns/iter",
            "extra": "iterations: 20546\ncpu: 41672.74895356754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 483664.97591036896,
            "unit": "ns/iter",
            "extra": "iterations: 1785\ncpu: 483653.4453781514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 400067.0904915189,
            "unit": "ns/iter",
            "extra": "iterations: 2177\ncpu: 400066.6513550758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 397796.8165599304,
            "unit": "ns/iter",
            "extra": "iterations: 2186\ncpu: 397781.10704483144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 401480.71567268873,
            "unit": "ns/iter",
            "extra": "iterations: 2163\ncpu: 401485.43689320405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 247977.68353710102,
            "unit": "ns/iter",
            "extra": "iterations: 3517\ncpu: 247976.8268410581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 395453.2989644516,
            "unit": "ns/iter",
            "extra": "iterations: 2221\ncpu: 395444.21431787533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1975112.5321887883,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1975090.9871244654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 800557.1855319624,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 800540.2553191503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2678312.637681301,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2678284.057971016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 3924.396909129755,
            "unit": "ns/iter",
            "extra": "iterations: 204732\ncpu: 3924.1672039544474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19527.76487312365,
            "unit": "ns/iter",
            "extra": "iterations: 42207\ncpu: 19527.32958987841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15368.659425693791,
            "unit": "ns/iter",
            "extra": "iterations: 53630\ncpu: 15367.961961588666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14961.030213129596,
            "unit": "ns/iter",
            "extra": "iterations: 54943\ncpu: 14960.2205922501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15324.2548361987,
            "unit": "ns/iter",
            "extra": "iterations: 53968\ncpu: 15323.349021642483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 41062.51738484618,
            "unit": "ns/iter",
            "extra": "iterations: 20190\ncpu: 41061.589895988174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 497190.57469944895,
            "unit": "ns/iter",
            "extra": "iterations: 1747\ncpu: 497173.32570120314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 413231.07095861464,
            "unit": "ns/iter",
            "extra": "iterations: 2128\ncpu: 413212.3120300754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 406086.3424467076,
            "unit": "ns/iter",
            "extra": "iterations: 2158\ncpu: 406084.66172381694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 399182.80018329446,
            "unit": "ns/iter",
            "extra": "iterations: 2182\ncpu: 399163.1072410645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 243132.32928511582,
            "unit": "ns/iter",
            "extra": "iterations: 3623\ncpu: 243120.59067071427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 405750.00550459395,
            "unit": "ns/iter",
            "extra": "iterations: 2180\ncpu: 405734.4036697249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1988674.795206852,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 1988559.6949891152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 770400.8617549518,
            "unit": "ns/iter",
            "extra": "iterations: 1208\ncpu: 770373.9238410596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4366.5855303891385,
            "unit": "ns/iter",
            "extra": "iterations: 184110\ncpu: 4366.4988322198415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19998.52302829912,
            "unit": "ns/iter",
            "extra": "iterations: 41449\ncpu: 19998.692368935328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15722.460160534532,
            "unit": "ns/iter",
            "extra": "iterations: 52699\ncpu: 15722.163608417526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15477.108987796479,
            "unit": "ns/iter",
            "extra": "iterations: 53428\ncpu: 15477.199221382083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15664.487481981212,
            "unit": "ns/iter",
            "extra": "iterations: 52724\ncpu: 15664.063803960207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 41125.91696698132,
            "unit": "ns/iter",
            "extra": "iterations: 20534\ncpu: 41126.117658517476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 492654.69048960577,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 492652.16657287336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 404054.0557361876,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 404049.65164886287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 403152.19375576364,
            "unit": "ns/iter",
            "extra": "iterations: 2178\ncpu: 403147.01561065245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 403081.21629079996,
            "unit": "ns/iter",
            "extra": "iterations: 2173\ncpu: 403079.0612057066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 244833.65641598863,
            "unit": "ns/iter",
            "extra": "iterations: 3577\ncpu: 244832.9885378798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 401749.7099307369,
            "unit": "ns/iter",
            "extra": "iterations: 2165\ncpu: 401741.8475750583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 316.5421880996214,
            "unit": "ns/iter",
            "extra": "iterations: 2199388\ncpu: 316.52296002342666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1819.0897449242736,
            "unit": "ns/iter",
            "extra": "iterations: 384278\ncpu: 1818.9667376222326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1366.5363554057146,
            "unit": "ns/iter",
            "extra": "iterations: 512496\ncpu: 1366.4912506634314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1322.625439151659,
            "unit": "ns/iter",
            "extra": "iterations: 529145\ncpu: 1322.6025002598562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1123.7934767684096,
            "unit": "ns/iter",
            "extra": "iterations: 619049\ncpu: 1123.7877777041872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7326.07939492697,
            "unit": "ns/iter",
            "extra": "iterations: 95724\ncpu: 7325.7667878484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20342.896846467855,
            "unit": "ns/iter",
            "extra": "iterations: 34279\ncpu: 20341.909040520495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4865.843224264573,
            "unit": "ns/iter",
            "extra": "iterations: 143549\ncpu: 4865.537203324283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4812.551762023277,
            "unit": "ns/iter",
            "extra": "iterations: 144720\ncpu: 4812.573244886674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4868.342773743083,
            "unit": "ns/iter",
            "extra": "iterations: 143885\ncpu: 4868.0585189561625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10277.074588567924,
            "unit": "ns/iter",
            "extra": "iterations: 67812\ncpu: 10276.84185689835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9251.113704917248,
            "unit": "ns/iter",
            "extra": "iterations: 76250\ncpu: 9250.760655737527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3288.813607638171,
            "unit": "ns/iter",
            "extra": "iterations: 211881\ncpu: 3288.825803163088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15997.35447718492,
            "unit": "ns/iter",
            "extra": "iterations: 43543\ncpu: 15997.225730886803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13087.013732878642,
            "unit": "ns/iter",
            "extra": "iterations: 54395\ncpu: 13086.303888225157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12910.359853029357,
            "unit": "ns/iter",
            "extra": "iterations: 54161\ncpu: 12909.689629068947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13472.055524473259,
            "unit": "ns/iter",
            "extra": "iterations: 51833\ncpu: 13471.109138965652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28481.117094401754,
            "unit": "ns/iter",
            "extra": "iterations: 24587\ncpu: 28480.270061414092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 105227.29163550171,
            "unit": "ns/iter",
            "extra": "iterations: 6683\ncpu: 105224.37528056071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 91319.0438723207,
            "unit": "ns/iter",
            "extra": "iterations: 7613\ncpu: 91320.35991068002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 91557.8647621487,
            "unit": "ns/iter",
            "extra": "iterations: 7631\ncpu: 91557.90853099276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 91505.99071410186,
            "unit": "ns/iter",
            "extra": "iterations: 7646\ncpu: 91507.25869735774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 59797.37509740959,
            "unit": "ns/iter",
            "extra": "iterations: 11549\ncpu: 59797.43700753279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 90990.38051133847,
            "unit": "ns/iter",
            "extra": "iterations: 7666\ncpu: 90988.66423167152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3215.301132242082,
            "unit": "ns/iter",
            "extra": "iterations: 217798\ncpu: 3215.2916923019975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16442.51228400125,
            "unit": "ns/iter",
            "extra": "iterations: 42535\ncpu: 16442.395674150575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13021.448380377573,
            "unit": "ns/iter",
            "extra": "iterations: 53778\ncpu: 13021.625943694444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12881.570084700317,
            "unit": "ns/iter",
            "extra": "iterations: 54427\ncpu: 12881.751704117361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13363.682556942247,
            "unit": "ns/iter",
            "extra": "iterations: 52422\ncpu: 13363.393231849172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28441.124634147258,
            "unit": "ns/iter",
            "extra": "iterations: 24600\ncpu: 28440.597560975948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 103845.39884050009,
            "unit": "ns/iter",
            "extra": "iterations: 6727\ncpu: 103844.49234428444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 88628.19875854363,
            "unit": "ns/iter",
            "extra": "iterations: 7894\ncpu: 88629.40207752735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 88904.95508334792,
            "unit": "ns/iter",
            "extra": "iterations: 7859\ncpu: 88904.23718030436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 90284.28016519004,
            "unit": "ns/iter",
            "extra": "iterations: 7749\ncpu: 90284.33346238354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 59832.823288367676,
            "unit": "ns/iter",
            "extra": "iterations: 11714\ncpu: 59831.68004097628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 90162.20124724017,
            "unit": "ns/iter",
            "extra": "iterations: 7697\ncpu: 90160.06236195908 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "380c708d79f348a900173c4fb482ef4fb63a6372",
          "message": "Update parser.hpp",
          "timestamp": "2024-01-18T13:25:10+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/380c708d79f348a900173c4fb482ef4fb63a6372"
        },
        "date": 1705573968234,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 786.411029882455,
            "unit": "ns/iter",
            "extra": "iterations: 890490\ncpu: 786.4118631315345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11288.982090929583,
            "unit": "ns/iter",
            "extra": "iterations: 71528\ncpu: 11288.801588189242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24986.305730952172,
            "unit": "ns/iter",
            "extra": "iterations: 33258\ncpu: 24960.304287690175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39801.36427232252,
            "unit": "ns/iter",
            "extra": "iterations: 21871\ncpu: 39800.96474783961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49549.251743896675,
            "unit": "ns/iter",
            "extra": "iterations: 16056\ncpu: 49549.862979571495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51052.75939999956,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51051.71999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61734.50530000082,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61734.71999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71022.6170883465,
            "unit": "ns/iter",
            "extra": "iterations: 12055\ncpu: 71021.46827042721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81178.95409163024,
            "unit": "ns/iter",
            "extra": "iterations: 10717\ncpu: 81180.56359055717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 633.1062742900884,
            "unit": "ns/iter",
            "extra": "iterations: 997579\ncpu: 633.1134677053153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 533.7296291549785,
            "unit": "ns/iter",
            "extra": "iterations: 1310844\ncpu: 533.7270491378081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 535.4924347869331,
            "unit": "ns/iter",
            "extra": "iterations: 1309745\ncpu: 535.4954590397368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 535.5890192396441,
            "unit": "ns/iter",
            "extra": "iterations: 1303662\ncpu: 535.5862179000384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1026.6643138648435,
            "unit": "ns/iter",
            "extra": "iterations: 681032\ncpu: 1026.6847960154612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4105.073090294602,
            "unit": "ns/iter",
            "extra": "iterations: 195881\ncpu: 4105.07604106575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19544.98093806661,
            "unit": "ns/iter",
            "extra": "iterations: 41916\ncpu: 19545.414638801445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15668.96109358607,
            "unit": "ns/iter",
            "extra": "iterations: 52305\ncpu: 15668.882516011836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15552.057726080408,
            "unit": "ns/iter",
            "extra": "iterations: 52957\ncpu: 15551.98368487641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 14923.952648869838,
            "unit": "ns/iter",
            "extra": "iterations: 52966\ncpu: 14923.7850696673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 40534.01153320898,
            "unit": "ns/iter",
            "extra": "iterations: 19769\ncpu: 40533.77004400832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 485261.09171763883,
            "unit": "ns/iter",
            "extra": "iterations: 1799\ncpu: 485248.9716509177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 400956.5848708591,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 400954.4741697413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 393657.83514001087,
            "unit": "ns/iter",
            "extra": "iterations: 2214\ncpu: 393646.52213188825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 398541.9708162462,
            "unit": "ns/iter",
            "extra": "iterations: 2193\ncpu: 398524.8518011848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 247478.85218872904,
            "unit": "ns/iter",
            "extra": "iterations: 3518\ncpu: 247482.06367254193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 394165.3695255467,
            "unit": "ns/iter",
            "extra": "iterations: 2192\ncpu: 394167.2445255462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 1990197.2854077586,
            "unit": "ns/iter",
            "extra": "iterations: 466\ncpu: 1990210.9442060054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 790649.0375626296,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 790640.5676126884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2686538.9241982726,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2686520.991253643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4034.674967625273,
            "unit": "ns/iter",
            "extra": "iterations: 194596\ncpu: 4034.7278464099945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19607.430413474125,
            "unit": "ns/iter",
            "extra": "iterations: 42034\ncpu: 19607.629537993045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15544.139136524618,
            "unit": "ns/iter",
            "extra": "iterations: 52833\ncpu: 15544.37567429444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 14756.983276708412,
            "unit": "ns/iter",
            "extra": "iterations: 56807\ncpu: 14756.3363669969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15279.325530726697,
            "unit": "ns/iter",
            "extra": "iterations: 53700\ncpu: 15278.871508379878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 40940.0006978022,
            "unit": "ns/iter",
            "extra": "iterations: 20063\ncpu: 40939.301201216294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 498494.64421416895,
            "unit": "ns/iter",
            "extra": "iterations: 1737\ncpu: 498472.1358664357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 412838.13478880044,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 412826.8153773125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 408540.35904629075,
            "unit": "ns/iter",
            "extra": "iterations: 2139\ncpu: 408538.47592332645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 407231.3795180728,
            "unit": "ns/iter",
            "extra": "iterations: 2158\ncpu: 407221.40871177055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 240600.31565933148,
            "unit": "ns/iter",
            "extra": "iterations: 3640\ncpu: 240596.7857142861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 403369.1737930863,
            "unit": "ns/iter",
            "extra": "iterations: 2175\ncpu: 403362.71264368016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 1993463.816192578,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 1993363.894967168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 803045.2074010305,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 803026.1617900198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4162.273972025444,
            "unit": "ns/iter",
            "extra": "iterations: 189888\ncpu: 4162.270917593517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19468.687838757553,
            "unit": "ns/iter",
            "extra": "iterations: 42619\ncpu: 19468.88946244628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15661.143189107348,
            "unit": "ns/iter",
            "extra": "iterations: 52071\ncpu: 15661.0743023948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15362.909924999905,
            "unit": "ns/iter",
            "extra": "iterations: 53733\ncpu: 15362.633763236678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15564.766856474369,
            "unit": "ns/iter",
            "extra": "iterations: 53036\ncpu: 15564.40530960098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 40409.209263340046,
            "unit": "ns/iter",
            "extra": "iterations: 20878\ncpu: 40409.59383082667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 497780.66497461457,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 497762.6621545389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 406541.4867626485,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 406528.28611240146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 400919.99173175916,
            "unit": "ns/iter",
            "extra": "iterations: 2177\ncpu: 400914.6531924675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 401360.85497236456,
            "unit": "ns/iter",
            "extra": "iterations: 2172\ncpu: 401354.9723756883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 246386.20308990264,
            "unit": "ns/iter",
            "extra": "iterations: 3560\ncpu: 246379.07303370873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 398268.7079321809,
            "unit": "ns/iter",
            "extra": "iterations: 2181\ncpu: 398249.6102705186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 319.80037094404906,
            "unit": "ns/iter",
            "extra": "iterations: 2197636\ncpu: 319.79331427042473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1831.2785856640955,
            "unit": "ns/iter",
            "extra": "iterations: 382342\ncpu: 1831.2155086284024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1355.4919346088711,
            "unit": "ns/iter",
            "extra": "iterations: 525393\ncpu: 1355.446494338526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1338.8511409785126,
            "unit": "ns/iter",
            "extra": "iterations: 521789\ncpu: 1338.8386876687641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1129.6563146362469,
            "unit": "ns/iter",
            "extra": "iterations: 585972\ncpu: 1129.66438669425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7287.31474398375,
            "unit": "ns/iter",
            "extra": "iterations: 95951\ncpu: 7287.109045241808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20145.782126607875,
            "unit": "ns/iter",
            "extra": "iterations: 34722\ncpu: 20145.446690858604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4864.722659460753,
            "unit": "ns/iter",
            "extra": "iterations: 143578\ncpu: 4864.734847957269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4895.800020907247,
            "unit": "ns/iter",
            "extra": "iterations: 143490\ncpu: 4895.829674541797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4972.8297621665915,
            "unit": "ns/iter",
            "extra": "iterations: 140897\ncpu: 4972.926322065004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10435.379759070709,
            "unit": "ns/iter",
            "extra": "iterations: 67240\ncpu: 10435.39113622837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9368.351618669305,
            "unit": "ns/iter",
            "extra": "iterations: 74413\ncpu: 9368.420840444449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3388.2196969332936,
            "unit": "ns/iter",
            "extra": "iterations: 207677\ncpu: 3388.2813214751827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16232.81268756583,
            "unit": "ns/iter",
            "extra": "iterations: 43318\ncpu: 16232.887021561508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12943.088491484195,
            "unit": "ns/iter",
            "extra": "iterations: 54073\ncpu: 12943.047361899604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13054.441969627936,
            "unit": "ns/iter",
            "extra": "iterations: 53472\ncpu: 13054.325628366423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13607.351894172989,
            "unit": "ns/iter",
            "extra": "iterations: 51632\ncpu: 13607.561202355246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 28531.214271160836,
            "unit": "ns/iter",
            "extra": "iterations: 24539\ncpu: 28531.260442560793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 105681.6445856126,
            "unit": "ns/iter",
            "extra": "iterations: 6612\ncpu: 105683.52994555363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 91536.68411409682,
            "unit": "ns/iter",
            "extra": "iterations: 7642\ncpu: 91536.207799005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 90439.02270957097,
            "unit": "ns/iter",
            "extra": "iterations: 7706\ncpu: 90438.63223462235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 91369.32954842265,
            "unit": "ns/iter",
            "extra": "iterations: 7662\ncpu: 91371.0519446603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 59726.5423728754,
            "unit": "ns/iter",
            "extra": "iterations: 11682\ncpu: 59726.707755521755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 90252.5332645718,
            "unit": "ns/iter",
            "extra": "iterations: 7756\ncpu: 90252.23053120285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3257.6175249789376,
            "unit": "ns/iter",
            "extra": "iterations: 215384\ncpu: 3257.661200460572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16709.345994080122,
            "unit": "ns/iter",
            "extra": "iterations: 41888\ncpu: 16709.37261268151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13142.694182773506,
            "unit": "ns/iter",
            "extra": "iterations: 53290\ncpu: 13142.538937886924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13004.682027906205,
            "unit": "ns/iter",
            "extra": "iterations: 53967\ncpu: 13004.463839012647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13561.416098569249,
            "unit": "ns/iter",
            "extra": "iterations: 51781\ncpu: 13561.669338174122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28084.48582427831,
            "unit": "ns/iter",
            "extra": "iterations: 24937\ncpu: 28084.66535669848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 102068.64596091677,
            "unit": "ns/iter",
            "extra": "iterations: 6858\ncpu: 102070.57451151981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 90107.35052335737,
            "unit": "ns/iter",
            "extra": "iterations: 7834\ncpu: 90107.86316058224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 87665.47116948989,
            "unit": "ns/iter",
            "extra": "iterations: 7995\ncpu: 87665.7786116338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 88338.14458589752,
            "unit": "ns/iter",
            "extra": "iterations: 7933\ncpu: 88339.69494516592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 59199.657394848844,
            "unit": "ns/iter",
            "extra": "iterations: 11792\ncpu: 59199.423337856155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 89426.52229217738,
            "unit": "ns/iter",
            "extra": "iterations: 7783\ncpu: 89428.06115893641 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}