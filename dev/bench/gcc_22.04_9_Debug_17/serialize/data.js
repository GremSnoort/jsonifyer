window.BENCHMARK_DATA = {
  "lastUpdate": 1702382257673,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-9 22.04 Debug c++-17": [
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381105944,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7706.696868965919,
            "unit": "ns/iter",
            "extra": "iterations: 91152\ncpu: 7706.222573284184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 94125.88075313564,
            "unit": "ns/iter",
            "extra": "iterations: 9082\ncpu: 94122.28584012332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 181846.88344067588,
            "unit": "ns/iter",
            "extra": "iterations: 4813\ncpu: 181840.9308123832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 272494.9930752109,
            "unit": "ns/iter",
            "extra": "iterations: 3177\ncpu: 272486.30783758266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 354806.2280847524,
            "unit": "ns/iter",
            "extra": "iterations: 2407\ncpu: 354790.9430826758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 440725.8359493668,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 440709.51898734184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 527621.9818401941,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 527610.108958838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 628591.5341309074,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 628552.3574947219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 573944.5050000427,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573930.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5860.722735033929,
            "unit": "ns/iter",
            "extra": "iterations: 118302\ncpu: 5860.723402816529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4826.386135957026,
            "unit": "ns/iter",
            "extra": "iterations: 145340\ncpu: 4826.248795926792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4812.182120708155,
            "unit": "ns/iter",
            "extra": "iterations: 145442\ncpu: 4811.918840499997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4808.798947238836,
            "unit": "ns/iter",
            "extra": "iterations: 145902\ncpu: 4808.665405546193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8766.943060097085,
            "unit": "ns/iter",
            "extra": "iterations: 79821\ncpu: 8766.406083612079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46325.21650349705,
            "unit": "ns/iter",
            "extra": "iterations: 17875\ncpu: 46324.03916083929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 194596.6422893481,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 194585.01022030445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 158990.28571428917,
            "unit": "ns/iter",
            "extra": "iterations: 5390\ncpu: 158986.641929499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 155799.0203082536,
            "unit": "ns/iter",
            "extra": "iterations: 5515\ncpu: 155789.91840435186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 154762.20992779676,
            "unit": "ns/iter",
            "extra": "iterations: 5540\ncpu: 154759.2057761731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 361335.1124896421,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 361309.6774193546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2913201.043343629,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2912912.6934984596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2387147.887468025,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2387014.8337595887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2389420.163682855,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2389340.920716116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2398226.838874787,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2398146.803069053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1422888.602134126,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1422826.524390243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2322509.0922693354,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2322401.4962593527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9855904.233645199,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 9855428.037383163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5620373.8263470465,
            "unit": "ns/iter",
            "extra": "iterations: 167\ncpu: 5620136.526946127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11720572.527472861,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11720225.274725258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46884.500958500845,
            "unit": "ns/iter",
            "extra": "iterations: 17736\ncpu: 46883.08525033831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 197563.64588644763,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 197561.8771726538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 159024.39796860816,
            "unit": "ns/iter",
            "extra": "iterations: 5415\ncpu: 159017.8578024007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 157607.5569620241,
            "unit": "ns/iter",
            "extra": "iterations: 5451\ncpu: 157607.63162722473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 156815.26927291806,
            "unit": "ns/iter",
            "extra": "iterations: 5474\ncpu: 156811.8012422365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 358323.84204080864,
            "unit": "ns/iter",
            "extra": "iterations: 2450\ncpu: 358320.7755102022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2908056.6894409703,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2907932.9192546555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2401045.874035987,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2400967.8663239074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2413310.989717353,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2413274.2930591325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2422833.867875672,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2422754.404145071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1425260.0793893284,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1425247.1755725192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2336037.765585961,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2335952.6184538514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10020535.537037218,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 10020395.370370401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5621397.410714446,
            "unit": "ns/iter",
            "extra": "iterations: 168\ncpu: 5620397.619047592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45730.52569364894,
            "unit": "ns/iter",
            "extra": "iterations: 18273\ncpu: 45729.1687188748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 191676.6170928668,
            "unit": "ns/iter",
            "extra": "iterations: 4458\ncpu: 191676.60385823215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 155648.5438660337,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 155641.5180196578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 156005.55215171672,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 156004.12107950356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 155306.81670913423,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 155301.8747724791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 356778.063951123,
            "unit": "ns/iter",
            "extra": "iterations: 2455\ncpu: 356777.75967413373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2902923.1863354137,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2902805.900621111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2385402.079081662,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2385380.102040813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2399032.3641025196,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2398938.461538445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2399729.043701752,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2399709.2544987104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1413260.8267477513,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1413168.2370820607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2327014.9551122934,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2326960.099750615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2632.3607462130562,
            "unit": "ns/iter",
            "extra": "iterations: 265447\ncpu: 2632.3043771449848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19108.69784349607,
            "unit": "ns/iter",
            "extra": "iterations: 36587\ncpu: 19108.691611774488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14716.721100454222,
            "unit": "ns/iter",
            "extra": "iterations: 47544\ncpu: 14716.18290425717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13950.686397007708,
            "unit": "ns/iter",
            "extra": "iterations: 50261\ncpu: 13950.281530411417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11498.648842174047,
            "unit": "ns/iter",
            "extra": "iterations: 60890\ncpu: 11498.126129085264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 82657.07771105839,
            "unit": "ns/iter",
            "extra": "iterations: 8493\ncpu: 82653.95031202238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 184717.58227847292,
            "unit": "ns/iter",
            "extra": "iterations: 3792\ncpu: 184711.1550632947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45652.70686056826,
            "unit": "ns/iter",
            "extra": "iterations: 15334\ncpu: 45651.25864092929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45607.25657038748,
            "unit": "ns/iter",
            "extra": "iterations: 15372\ncpu: 45605.37340619326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 45930.96668197224,
            "unit": "ns/iter",
            "extra": "iterations: 15247\ncpu: 45930.29448416011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 96486.02976846504,
            "unit": "ns/iter",
            "extra": "iterations: 7256\ncpu: 96479.41014332985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 86019.14290981098,
            "unit": "ns/iter",
            "extra": "iterations: 8138\ncpu: 86016.49053821579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24458.594330400723,
            "unit": "ns/iter",
            "extra": "iterations: 28644\ncpu: 24457.631615696293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 117976.19188689311,
            "unit": "ns/iter",
            "extra": "iterations: 5941\ncpu: 117971.51994613618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 95027.37345636672,
            "unit": "ns/iter",
            "extra": "iterations: 7369\ncpu: 95027.37142081653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 95691.41742931142,
            "unit": "ns/iter",
            "extra": "iterations: 7321\ncpu: 95688.22565223412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 95654.47484964192,
            "unit": "ns/iter",
            "extra": "iterations: 7316\ncpu: 95651.58556588308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 180938.8608313915,
            "unit": "ns/iter",
            "extra": "iterations: 3873\ncpu: 180931.00955331966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 787212.4426966637,
            "unit": "ns/iter",
            "extra": "iterations: 890\ncpu: 787181.573033703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 664324.8805687292,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 664304.6445497646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 667869.5614871167,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 667848.8083889382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 680065.025936604,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 680039.2891450576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 423876.62794917816,
            "unit": "ns/iter",
            "extra": "iterations: 1653\ncpu: 423865.69872958015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 651924.4939534813,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 651904.2790697699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24570.645932007796,
            "unit": "ns/iter",
            "extra": "iterations: 28503\ncpu: 24569.333052661197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 118651.49355495848,
            "unit": "ns/iter",
            "extra": "iterations: 5896\ncpu: 118648.08344640413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 95658.9274292699,
            "unit": "ns/iter",
            "extra": "iterations: 7317\ncpu: 95655.8835588357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 95278.16653038902,
            "unit": "ns/iter",
            "extra": "iterations: 7338\ncpu: 95276.9283183433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 96589.14116349923,
            "unit": "ns/iter",
            "extra": "iterations: 7254\ncpu: 96588.98538737358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 181854.84295371527,
            "unit": "ns/iter",
            "extra": "iterations: 3846\ncpu: 181850.57202288118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 784471.0313199313,
            "unit": "ns/iter",
            "extra": "iterations: 894\ncpu: 784447.8747203624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 661475.8960302571,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 661453.7807183247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 666451.2597526318,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 666425.0237868706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 669080.1728749006,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 669072.8748806213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 421507.7448733419,
            "unit": "ns/iter",
            "extra": "iterations: 1658\ncpu: 421503.73944511585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 650338.344475371,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 650337.6973073471 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381105944,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7706.696868965919,
            "unit": "ns/iter",
            "extra": "iterations: 91152\ncpu: 7706.222573284184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 94125.88075313564,
            "unit": "ns/iter",
            "extra": "iterations: 9082\ncpu: 94122.28584012332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 181846.88344067588,
            "unit": "ns/iter",
            "extra": "iterations: 4813\ncpu: 181840.9308123832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 272494.9930752109,
            "unit": "ns/iter",
            "extra": "iterations: 3177\ncpu: 272486.30783758266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 354806.2280847524,
            "unit": "ns/iter",
            "extra": "iterations: 2407\ncpu: 354790.9430826758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 440725.8359493668,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 440709.51898734184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 527621.9818401941,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 527610.108958838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 628591.5341309074,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 628552.3574947219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 573944.5050000427,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573930.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5860.722735033929,
            "unit": "ns/iter",
            "extra": "iterations: 118302\ncpu: 5860.723402816529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4826.386135957026,
            "unit": "ns/iter",
            "extra": "iterations: 145340\ncpu: 4826.248795926792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4812.182120708155,
            "unit": "ns/iter",
            "extra": "iterations: 145442\ncpu: 4811.918840499997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4808.798947238836,
            "unit": "ns/iter",
            "extra": "iterations: 145902\ncpu: 4808.665405546193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8766.943060097085,
            "unit": "ns/iter",
            "extra": "iterations: 79821\ncpu: 8766.406083612079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46325.21650349705,
            "unit": "ns/iter",
            "extra": "iterations: 17875\ncpu: 46324.03916083929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 194596.6422893481,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 194585.01022030445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 158990.28571428917,
            "unit": "ns/iter",
            "extra": "iterations: 5390\ncpu: 158986.641929499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 155799.0203082536,
            "unit": "ns/iter",
            "extra": "iterations: 5515\ncpu: 155789.91840435186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 154762.20992779676,
            "unit": "ns/iter",
            "extra": "iterations: 5540\ncpu: 154759.2057761731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 361335.1124896421,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 361309.6774193546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2913201.043343629,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2912912.6934984596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2387147.887468025,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2387014.8337595887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2389420.163682855,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2389340.920716116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2398226.838874787,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2398146.803069053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1422888.602134126,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1422826.524390243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2322509.0922693354,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2322401.4962593527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9855904.233645199,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 9855428.037383163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5620373.8263470465,
            "unit": "ns/iter",
            "extra": "iterations: 167\ncpu: 5620136.526946127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11720572.527472861,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11720225.274725258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46884.500958500845,
            "unit": "ns/iter",
            "extra": "iterations: 17736\ncpu: 46883.08525033831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 197563.64588644763,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 197561.8771726538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 159024.39796860816,
            "unit": "ns/iter",
            "extra": "iterations: 5415\ncpu: 159017.8578024007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 157607.5569620241,
            "unit": "ns/iter",
            "extra": "iterations: 5451\ncpu: 157607.63162722473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 156815.26927291806,
            "unit": "ns/iter",
            "extra": "iterations: 5474\ncpu: 156811.8012422365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 358323.84204080864,
            "unit": "ns/iter",
            "extra": "iterations: 2450\ncpu: 358320.7755102022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2908056.6894409703,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2907932.9192546555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2401045.874035987,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2400967.8663239074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2413310.989717353,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2413274.2930591325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2422833.867875672,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2422754.404145071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1425260.0793893284,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1425247.1755725192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2336037.765585961,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2335952.6184538514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10020535.537037218,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 10020395.370370401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5621397.410714446,
            "unit": "ns/iter",
            "extra": "iterations: 168\ncpu: 5620397.619047592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45730.52569364894,
            "unit": "ns/iter",
            "extra": "iterations: 18273\ncpu: 45729.1687188748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 191676.6170928668,
            "unit": "ns/iter",
            "extra": "iterations: 4458\ncpu: 191676.60385823215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 155648.5438660337,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 155641.5180196578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 156005.55215171672,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 156004.12107950356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 155306.81670913423,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 155301.8747724791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 356778.063951123,
            "unit": "ns/iter",
            "extra": "iterations: 2455\ncpu: 356777.75967413373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2902923.1863354137,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2902805.900621111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2385402.079081662,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2385380.102040813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2399032.3641025196,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2398938.461538445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2399729.043701752,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2399709.2544987104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1413260.8267477513,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1413168.2370820607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2327014.9551122934,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2326960.099750615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2632.3607462130562,
            "unit": "ns/iter",
            "extra": "iterations: 265447\ncpu: 2632.3043771449848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19108.69784349607,
            "unit": "ns/iter",
            "extra": "iterations: 36587\ncpu: 19108.691611774488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14716.721100454222,
            "unit": "ns/iter",
            "extra": "iterations: 47544\ncpu: 14716.18290425717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13950.686397007708,
            "unit": "ns/iter",
            "extra": "iterations: 50261\ncpu: 13950.281530411417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11498.648842174047,
            "unit": "ns/iter",
            "extra": "iterations: 60890\ncpu: 11498.126129085264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 82657.07771105839,
            "unit": "ns/iter",
            "extra": "iterations: 8493\ncpu: 82653.95031202238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 184717.58227847292,
            "unit": "ns/iter",
            "extra": "iterations: 3792\ncpu: 184711.1550632947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45652.70686056826,
            "unit": "ns/iter",
            "extra": "iterations: 15334\ncpu: 45651.25864092929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45607.25657038748,
            "unit": "ns/iter",
            "extra": "iterations: 15372\ncpu: 45605.37340619326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 45930.96668197224,
            "unit": "ns/iter",
            "extra": "iterations: 15247\ncpu: 45930.29448416011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 96486.02976846504,
            "unit": "ns/iter",
            "extra": "iterations: 7256\ncpu: 96479.41014332985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 86019.14290981098,
            "unit": "ns/iter",
            "extra": "iterations: 8138\ncpu: 86016.49053821579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24458.594330400723,
            "unit": "ns/iter",
            "extra": "iterations: 28644\ncpu: 24457.631615696293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 117976.19188689311,
            "unit": "ns/iter",
            "extra": "iterations: 5941\ncpu: 117971.51994613618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 95027.37345636672,
            "unit": "ns/iter",
            "extra": "iterations: 7369\ncpu: 95027.37142081653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 95691.41742931142,
            "unit": "ns/iter",
            "extra": "iterations: 7321\ncpu: 95688.22565223412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 95654.47484964192,
            "unit": "ns/iter",
            "extra": "iterations: 7316\ncpu: 95651.58556588308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 180938.8608313915,
            "unit": "ns/iter",
            "extra": "iterations: 3873\ncpu: 180931.00955331966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 787212.4426966637,
            "unit": "ns/iter",
            "extra": "iterations: 890\ncpu: 787181.573033703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 664324.8805687292,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 664304.6445497646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 667869.5614871167,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 667848.8083889382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 680065.025936604,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 680039.2891450576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 423876.62794917816,
            "unit": "ns/iter",
            "extra": "iterations: 1653\ncpu: 423865.69872958015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 651924.4939534813,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 651904.2790697699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24570.645932007796,
            "unit": "ns/iter",
            "extra": "iterations: 28503\ncpu: 24569.333052661197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 118651.49355495848,
            "unit": "ns/iter",
            "extra": "iterations: 5896\ncpu: 118648.08344640413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 95658.9274292699,
            "unit": "ns/iter",
            "extra": "iterations: 7317\ncpu: 95655.8835588357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 95278.16653038902,
            "unit": "ns/iter",
            "extra": "iterations: 7338\ncpu: 95276.9283183433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 96589.14116349923,
            "unit": "ns/iter",
            "extra": "iterations: 7254\ncpu: 96588.98538737358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 181854.84295371527,
            "unit": "ns/iter",
            "extra": "iterations: 3846\ncpu: 181850.57202288118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 784471.0313199313,
            "unit": "ns/iter",
            "extra": "iterations: 894\ncpu: 784447.8747203624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 661475.8960302571,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 661453.7807183247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 666451.2597526318,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 666425.0237868706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 669080.1728749006,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 669072.8748806213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 421507.7448733419,
            "unit": "ns/iter",
            "extra": "iterations: 1658\ncpu: 421503.73944511585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 650338.344475371,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 650337.6973073471 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381105944,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7706.696868965919,
            "unit": "ns/iter",
            "extra": "iterations: 91152\ncpu: 7706.222573284184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 94125.88075313564,
            "unit": "ns/iter",
            "extra": "iterations: 9082\ncpu: 94122.28584012332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 181846.88344067588,
            "unit": "ns/iter",
            "extra": "iterations: 4813\ncpu: 181840.9308123832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 272494.9930752109,
            "unit": "ns/iter",
            "extra": "iterations: 3177\ncpu: 272486.30783758266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 354806.2280847524,
            "unit": "ns/iter",
            "extra": "iterations: 2407\ncpu: 354790.9430826758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 440725.8359493668,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 440709.51898734184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 527621.9818401941,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 527610.108958838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 628591.5341309074,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 628552.3574947219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 573944.5050000427,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573930.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5860.722735033929,
            "unit": "ns/iter",
            "extra": "iterations: 118302\ncpu: 5860.723402816529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4826.386135957026,
            "unit": "ns/iter",
            "extra": "iterations: 145340\ncpu: 4826.248795926792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4812.182120708155,
            "unit": "ns/iter",
            "extra": "iterations: 145442\ncpu: 4811.918840499997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4808.798947238836,
            "unit": "ns/iter",
            "extra": "iterations: 145902\ncpu: 4808.665405546193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8766.943060097085,
            "unit": "ns/iter",
            "extra": "iterations: 79821\ncpu: 8766.406083612079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46325.21650349705,
            "unit": "ns/iter",
            "extra": "iterations: 17875\ncpu: 46324.03916083929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 194596.6422893481,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 194585.01022030445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 158990.28571428917,
            "unit": "ns/iter",
            "extra": "iterations: 5390\ncpu: 158986.641929499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 155799.0203082536,
            "unit": "ns/iter",
            "extra": "iterations: 5515\ncpu: 155789.91840435186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 154762.20992779676,
            "unit": "ns/iter",
            "extra": "iterations: 5540\ncpu: 154759.2057761731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 361335.1124896421,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 361309.6774193546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2913201.043343629,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2912912.6934984596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2387147.887468025,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2387014.8337595887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2389420.163682855,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2389340.920716116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2398226.838874787,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2398146.803069053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1422888.602134126,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1422826.524390243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2322509.0922693354,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2322401.4962593527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9855904.233645199,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 9855428.037383163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5620373.8263470465,
            "unit": "ns/iter",
            "extra": "iterations: 167\ncpu: 5620136.526946127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11720572.527472861,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11720225.274725258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46884.500958500845,
            "unit": "ns/iter",
            "extra": "iterations: 17736\ncpu: 46883.08525033831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 197563.64588644763,
            "unit": "ns/iter",
            "extra": "iterations: 4315\ncpu: 197561.8771726538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 159024.39796860816,
            "unit": "ns/iter",
            "extra": "iterations: 5415\ncpu: 159017.8578024007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 157607.5569620241,
            "unit": "ns/iter",
            "extra": "iterations: 5451\ncpu: 157607.63162722473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 156815.26927291806,
            "unit": "ns/iter",
            "extra": "iterations: 5474\ncpu: 156811.8012422365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 358323.84204080864,
            "unit": "ns/iter",
            "extra": "iterations: 2450\ncpu: 358320.7755102022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2908056.6894409703,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2907932.9192546555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2401045.874035987,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2400967.8663239074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2413310.989717353,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2413274.2930591325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2422833.867875672,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2422754.404145071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1425260.0793893284,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1425247.1755725192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2336037.765585961,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2335952.6184538514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10020535.537037218,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 10020395.370370401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5621397.410714446,
            "unit": "ns/iter",
            "extra": "iterations: 168\ncpu: 5620397.619047592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45730.52569364894,
            "unit": "ns/iter",
            "extra": "iterations: 18273\ncpu: 45729.1687188748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 191676.6170928668,
            "unit": "ns/iter",
            "extra": "iterations: 4458\ncpu: 191676.60385823215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 155648.5438660337,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 155641.5180196578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 156005.55215171672,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 156004.12107950356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 155306.81670913423,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 155301.8747724791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 356778.063951123,
            "unit": "ns/iter",
            "extra": "iterations: 2455\ncpu: 356777.75967413373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2902923.1863354137,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2902805.900621111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2385402.079081662,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2385380.102040813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2399032.3641025196,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2398938.461538445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2399729.043701752,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2399709.2544987104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1413260.8267477513,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1413168.2370820607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2327014.9551122934,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2326960.099750615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2632.3607462130562,
            "unit": "ns/iter",
            "extra": "iterations: 265447\ncpu: 2632.3043771449848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19108.69784349607,
            "unit": "ns/iter",
            "extra": "iterations: 36587\ncpu: 19108.691611774488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14716.721100454222,
            "unit": "ns/iter",
            "extra": "iterations: 47544\ncpu: 14716.18290425717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13950.686397007708,
            "unit": "ns/iter",
            "extra": "iterations: 50261\ncpu: 13950.281530411417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11498.648842174047,
            "unit": "ns/iter",
            "extra": "iterations: 60890\ncpu: 11498.126129085264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 82657.07771105839,
            "unit": "ns/iter",
            "extra": "iterations: 8493\ncpu: 82653.95031202238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 184717.58227847292,
            "unit": "ns/iter",
            "extra": "iterations: 3792\ncpu: 184711.1550632947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45652.70686056826,
            "unit": "ns/iter",
            "extra": "iterations: 15334\ncpu: 45651.25864092929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45607.25657038748,
            "unit": "ns/iter",
            "extra": "iterations: 15372\ncpu: 45605.37340619326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 45930.96668197224,
            "unit": "ns/iter",
            "extra": "iterations: 15247\ncpu: 45930.29448416011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 96486.02976846504,
            "unit": "ns/iter",
            "extra": "iterations: 7256\ncpu: 96479.41014332985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 86019.14290981098,
            "unit": "ns/iter",
            "extra": "iterations: 8138\ncpu: 86016.49053821579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24458.594330400723,
            "unit": "ns/iter",
            "extra": "iterations: 28644\ncpu: 24457.631615696293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 117976.19188689311,
            "unit": "ns/iter",
            "extra": "iterations: 5941\ncpu: 117971.51994613618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 95027.37345636672,
            "unit": "ns/iter",
            "extra": "iterations: 7369\ncpu: 95027.37142081653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 95691.41742931142,
            "unit": "ns/iter",
            "extra": "iterations: 7321\ncpu: 95688.22565223412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 95654.47484964192,
            "unit": "ns/iter",
            "extra": "iterations: 7316\ncpu: 95651.58556588308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 180938.8608313915,
            "unit": "ns/iter",
            "extra": "iterations: 3873\ncpu: 180931.00955331966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 787212.4426966637,
            "unit": "ns/iter",
            "extra": "iterations: 890\ncpu: 787181.573033703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 664324.8805687292,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 664304.6445497646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 667869.5614871167,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 667848.8083889382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 680065.025936604,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 680039.2891450576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 423876.62794917816,
            "unit": "ns/iter",
            "extra": "iterations: 1653\ncpu: 423865.69872958015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 651924.4939534813,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 651904.2790697699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24570.645932007796,
            "unit": "ns/iter",
            "extra": "iterations: 28503\ncpu: 24569.333052661197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 118651.49355495848,
            "unit": "ns/iter",
            "extra": "iterations: 5896\ncpu: 118648.08344640413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 95658.9274292699,
            "unit": "ns/iter",
            "extra": "iterations: 7317\ncpu: 95655.8835588357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 95278.16653038902,
            "unit": "ns/iter",
            "extra": "iterations: 7338\ncpu: 95276.9283183433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 96589.14116349923,
            "unit": "ns/iter",
            "extra": "iterations: 7254\ncpu: 96588.98538737358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 181854.84295371527,
            "unit": "ns/iter",
            "extra": "iterations: 3846\ncpu: 181850.57202288118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 784471.0313199313,
            "unit": "ns/iter",
            "extra": "iterations: 894\ncpu: 784447.8747203624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 661475.8960302571,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 661453.7807183247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 666451.2597526318,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 666425.0237868706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 669080.1728749006,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 669072.8748806213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 421507.7448733419,
            "unit": "ns/iter",
            "extra": "iterations: 1658\ncpu: 421503.73944511585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 650338.344475371,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 650337.6973073471 ns\nthreads: 1"
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
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382257337,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7701.497638471643,
            "unit": "ns/iter",
            "extra": "iterations: 90831\ncpu: 7700.690292961654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 94079.74290116437,
            "unit": "ns/iter",
            "extra": "iterations: 9086\ncpu: 94075.4567466432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 182349.61735330248,
            "unit": "ns/iter",
            "extra": "iterations: 4806\ncpu: 182337.51560549316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 272717.32033952395,
            "unit": "ns/iter",
            "extra": "iterations: 3181\ncpu: 272692.80100597296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 354168.4258950822,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 354142.4229808494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 445004.7134177215,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 444957.1139240508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 527396.5151514981,
            "unit": "ns/iter",
            "extra": "iterations: 1650\ncpu: 527347.7575757576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 625552.3054187411,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 625501.9704433496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 573331.2279999722,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573274.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6057.818892591187,
            "unit": "ns/iter",
            "extra": "iterations: 117030\ncpu: 6057.492096043758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4895.435146617959,
            "unit": "ns/iter",
            "extra": "iterations: 144048\ncpu: 4895.190492058201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4848.0112786037635,
            "unit": "ns/iter",
            "extra": "iterations: 119607\ncpu: 4847.844189721334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4799.754384284152,
            "unit": "ns/iter",
            "extra": "iterations: 146147\ncpu: 4799.463553819097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8696.827494197969,
            "unit": "ns/iter",
            "extra": "iterations: 80577\ncpu: 8696.239621728282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48524.540469971784,
            "unit": "ns/iter",
            "extra": "iterations: 17235\ncpu: 48522.04815781847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 189027.7996018639,
            "unit": "ns/iter",
            "extra": "iterations: 4521\ncpu: 189014.7976111484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 156606.13200292332,
            "unit": "ns/iter",
            "extra": "iterations: 5462\ncpu: 156598.66349322576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 154193.60247888818,
            "unit": "ns/iter",
            "extra": "iterations: 5567\ncpu: 154183.31237650415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 157364.7334658488,
            "unit": "ns/iter",
            "extra": "iterations: 5534\ncpu: 157351.15648717037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 355253.9392084966,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 355227.21338229364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2960837.062305317,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2960621.8068535896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2396359.925831242,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2396150.3836317165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2395463.289743615,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2395321.7948718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2402307.5025773505,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2402089.9484536033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1434845.0184331639,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1434770.8141321049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2334180.974999924,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2333953.5000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9943883.65384625,
            "unit": "ns/iter",
            "extra": "iterations: 104\ncpu: 9942901.923076922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5683026.478787711,
            "unit": "ns/iter",
            "extra": "iterations: 165\ncpu: 5682659.393939384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11799122.566666635,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11797902.222222194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 45680.7151992915,
            "unit": "ns/iter",
            "extra": "iterations: 18139\ncpu: 45678.5489828547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 203902.26832096747,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 203893.50649350518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 156954.68159851964,
            "unit": "ns/iter",
            "extra": "iterations: 5380\ncpu: 156950.85501858708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 152844.4360028668,
            "unit": "ns/iter",
            "extra": "iterations: 5594\ncpu: 152837.12906685696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 156890.87734116983,
            "unit": "ns/iter",
            "extra": "iterations: 5446\ncpu: 156887.71575468237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 354284.9118244537,
            "unit": "ns/iter",
            "extra": "iterations: 2461\ncpu: 354261.6822429923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2921543.3937499924,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2921334.3749999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2392361.9002557714,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2392215.6010230053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2404694.953727568,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2404520.0514138746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2407296.854922268,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2407198.7046632157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1426772.6697388322,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1426692.4731182707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2334479.822942634,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2334410.224438903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10069196.333333252,
            "unit": "ns/iter",
            "extra": "iterations: 108\ncpu: 10068512.962962985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5592272.089285662,
            "unit": "ns/iter",
            "extra": "iterations: 168\ncpu: 5591780.952380929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45615.059545429256,
            "unit": "ns/iter",
            "extra": "iterations: 18171\ncpu: 45614.14891860662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 189024.99625137512,
            "unit": "ns/iter",
            "extra": "iterations: 4535\ncpu: 189017.64057331803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 153686.4001797006,
            "unit": "ns/iter",
            "extra": "iterations: 5565\ncpu: 153682.47978436685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 153975.85485899774,
            "unit": "ns/iter",
            "extra": "iterations: 5567\ncpu: 153967.0379019222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 155454.50263492443,
            "unit": "ns/iter",
            "extra": "iterations: 5503\ncpu: 155449.7365073597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 353896.19551934703,
            "unit": "ns/iter",
            "extra": "iterations: 2455\ncpu: 353883.17718940764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2906649.5931678438,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2906444.7204969106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2379184.992346892,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2379084.948979578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2395788.419437278,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2395587.9795396416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2401390.3794872393,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2401238.2051282087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1428330.937308887,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1428214.5259938801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2330496.8924999516,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2330372.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2650.283259444596,
            "unit": "ns/iter",
            "extra": "iterations: 263910\ncpu: 2650.0625213140956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19387.24710510201,
            "unit": "ns/iter",
            "extra": "iterations: 36098\ncpu: 19386.215302786935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14604.25074676693,
            "unit": "ns/iter",
            "extra": "iterations: 47873\ncpu: 14602.796983685976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14846.77342657346,
            "unit": "ns/iter",
            "extra": "iterations: 47190\ncpu: 14845.679169315521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11396.521112322976,
            "unit": "ns/iter",
            "extra": "iterations: 61457\ncpu: 11395.68641489175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 82107.1627471632,
            "unit": "ns/iter",
            "extra": "iterations: 8547\ncpu: 82102.99520299499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 159208.61592718857,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 159200.1365187708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 44964.27068732507,
            "unit": "ns/iter",
            "extra": "iterations: 15553\ncpu: 44961.383655886086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45059.67695977259,
            "unit": "ns/iter",
            "extra": "iterations: 15512\ncpu: 45055.51186178446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 45381.773560465204,
            "unit": "ns/iter",
            "extra": "iterations: 15439\ncpu: 45378.84578016701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 96110.35265037045,
            "unit": "ns/iter",
            "extra": "iterations: 7282\ncpu: 96103.25460038429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 86686.04395061855,
            "unit": "ns/iter",
            "extra": "iterations: 8100\ncpu: 86682.07407407496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24369.585223321235,
            "unit": "ns/iter",
            "extra": "iterations: 28748\ncpu: 24369.09350215639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 119324.04800957012,
            "unit": "ns/iter",
            "extra": "iterations: 5853\ncpu: 119315.13753630636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 95218.17526193817,
            "unit": "ns/iter",
            "extra": "iterations: 7349\ncpu: 95213.28071846493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 95699.47125962985,
            "unit": "ns/iter",
            "extra": "iterations: 7272\ncpu: 95690.18151815163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 96472.27083047135,
            "unit": "ns/iter",
            "extra": "iterations: 7285\ncpu: 96464.22786547791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 180764.29046391768,
            "unit": "ns/iter",
            "extra": "iterations: 3880\ncpu: 180752.44845360742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 791733.3069082602,
            "unit": "ns/iter",
            "extra": "iterations: 883\ncpu: 791698.7542468925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 664855.1151284339,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 664819.9809704958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 667509.6297010342,
            "unit": "ns/iter",
            "extra": "iterations: 1037\ncpu: 667440.5978784924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 675905.6186359706,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 675856.292026897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 424792.01877649134,
            "unit": "ns/iter",
            "extra": "iterations: 1651\ncpu: 424753.96729254635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 653013.932773106,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 652960.597572358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24107.747788372963,
            "unit": "ns/iter",
            "extra": "iterations: 29051\ncpu: 24106.240749027795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 118966.5597484249,
            "unit": "ns/iter",
            "extra": "iterations: 5883\ncpu: 118960.36036035976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 95798.29389993068,
            "unit": "ns/iter",
            "extra": "iterations: 7295\ncpu: 95793.46127484545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 95736.16978555387,
            "unit": "ns/iter",
            "extra": "iterations: 7321\ncpu: 95725.1604971994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 96797.09828586991,
            "unit": "ns/iter",
            "extra": "iterations: 7234\ncpu: 96790.6967099805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 180805.26898327656,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 180791.48005147884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 788358.2395950299,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 788328.9088863913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 664191.7428842601,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 664177.9886147879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 667277.544761895,
            "unit": "ns/iter",
            "extra": "iterations: 1050\ncpu: 667213.9999999905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 667270.0514775692,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 667220.6863679612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 426410.81158537674,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 426365.2439024425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 651312.95255818,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 651269.6744186071 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}