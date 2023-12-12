window.BENCHMARK_DATA = {
  "lastUpdate": 1702381107361,
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
      }
    ]
  }
}