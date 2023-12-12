window.BENCHMARK_DATA = {
  "lastUpdate": 1702396443085,
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
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387035898,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7665.736105148545,
            "unit": "ns/iter",
            "extra": "iterations: 90843\ncpu: 7665.362218332728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 93937.93443701112,
            "unit": "ns/iter",
            "extra": "iterations: 9121\ncpu: 93934.89748931039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 181946.9744919221,
            "unit": "ns/iter",
            "extra": "iterations: 4822\ncpu: 181945.14724180842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 273260.9870906785,
            "unit": "ns/iter",
            "extra": "iterations: 3176\ncpu: 273255.8879093199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 354345.2405326706,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 354343.5705368288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 440748.29462474934,
            "unit": "ns/iter",
            "extra": "iterations: 1972\ncpu: 440741.83569979714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 527091.0859564304,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 527034.2009685233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 614170.5392226147,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 614127.2084805655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 562131.016999956,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562077.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5973.285775931284,
            "unit": "ns/iter",
            "extra": "iterations: 118187\ncpu: 5972.4605921125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4800.2486112928445,
            "unit": "ns/iter",
            "extra": "iterations: 145279\ncpu: 4800.1073795937555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4862.6791383613245,
            "unit": "ns/iter",
            "extra": "iterations: 143819\ncpu: 4862.673916520082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4864.261481249747,
            "unit": "ns/iter",
            "extra": "iterations: 143865\ncpu: 4864.22618426997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8978.828898558191,
            "unit": "ns/iter",
            "extra": "iterations: 77907\ncpu: 8978.716931726276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46187.56360483329,
            "unit": "ns/iter",
            "extra": "iterations: 17876\ncpu: 46187.318191989216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 198618.05176797288,
            "unit": "ns/iter",
            "extra": "iterations: 4327\ncpu: 198618.34989600128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 157913.54451613495,
            "unit": "ns/iter",
            "extra": "iterations: 5425\ncpu: 157905.1059907833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 155547.98589256374,
            "unit": "ns/iter",
            "extra": "iterations: 5529\ncpu: 155541.11050822897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 153112.3939393952,
            "unit": "ns/iter",
            "extra": "iterations: 5577\ncpu: 153102.6716872872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 366515.089684215,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 366515.4526315791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2942479.4099378847,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2942433.8509316775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2375685.6045918316,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2375608.673469389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2403851.7570331395,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2403578.7723785182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2410597.1568122576,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2410386.1182519295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1439090.9407175968,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1439022.1528861173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2330631.6949999942,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2330345.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9986598.238095298,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 9985979.047619035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5584278.994047527,
            "unit": "ns/iter",
            "extra": "iterations: 168\ncpu: 5583855.35714286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11816826.533333194,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11816153.333333347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46568.86709218102,
            "unit": "ns/iter",
            "extra": "iterations: 17704\ncpu: 46565.742205151146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 199225.38828432484,
            "unit": "ns/iter",
            "extra": "iterations: 4319\ncpu: 199213.66056957634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 158163.40827637544,
            "unit": "ns/iter",
            "extra": "iterations: 5413\ncpu: 158151.61647884734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 154419.15850144453,
            "unit": "ns/iter",
            "extra": "iterations: 5552\ncpu: 154404.77305475477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 156542.6707048525,
            "unit": "ns/iter",
            "extra": "iterations: 5448\ncpu: 156530.89207048443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 369467.342627792,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 369439.8817068042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2913289.7663551182,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2913122.118380059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2385882.7648578663,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2385857.622739016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2409113.9097938314,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2409043.8144329847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2397259.3753212974,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2397253.4704370108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1428554.743827142,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1428530.709876543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2331283.888059632,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2331181.5920397956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10064577.103773491,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10064309.433962245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5632869.738095096,
            "unit": "ns/iter",
            "extra": "iterations: 168\ncpu: 5632698.80952382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45863.38983611799,
            "unit": "ns/iter",
            "extra": "iterations: 18123\ncpu: 45863.527009876634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 189588.5507535446,
            "unit": "ns/iter",
            "extra": "iterations: 4512\ncpu: 189587.03457446792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 155206.82669576793,
            "unit": "ns/iter",
            "extra": "iterations: 5499\ncpu: 155204.00072740493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 153883.3231795155,
            "unit": "ns/iter",
            "extra": "iterations: 5548\ncpu: 153879.23576063404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 156834.03454612877,
            "unit": "ns/iter",
            "extra": "iterations: 5442\ncpu: 156834.56449834644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 365108.0912897815,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 365105.7788944737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2900801.204968964,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2900648.4472049717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2375992.633587838,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2375935.877862589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2399448.3076924444,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2399429.7435897477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2397682.033333345,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2397674.102564105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1435391.5830769474,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1435340.6153846146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2336522.6334163863,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2336519.4513715543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2689.2771541196867,
            "unit": "ns/iter",
            "extra": "iterations: 260025\ncpu: 2689.2202672819853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19854.288741608827,
            "unit": "ns/iter",
            "extra": "iterations: 35156\ncpu: 19854.295141654162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14620.726068331283,
            "unit": "ns/iter",
            "extra": "iterations: 47855\ncpu: 14619.931041688442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14533.931156185756,
            "unit": "ns/iter",
            "extra": "iterations: 48167\ncpu: 14533.689040214269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11459.778680750771,
            "unit": "ns/iter",
            "extra": "iterations: 61156\ncpu: 11459.822421348663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 84549.79780166691,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 84549.96980311687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 186626.91203208902,
            "unit": "ns/iter",
            "extra": "iterations: 3740\ncpu: 186629.73262032305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45498.75264764967,
            "unit": "ns/iter",
            "extra": "iterations: 15391\ncpu: 45498.167760378885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46147.368602264345,
            "unit": "ns/iter",
            "extra": "iterations: 15103\ncpu: 46147.38793617123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 46168.029660458225,
            "unit": "ns/iter",
            "extra": "iterations: 15138\ncpu: 46168.133174791954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 97129.52101892603,
            "unit": "ns/iter",
            "extra": "iterations: 7184\ncpu: 97126.09966592558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 86736.2907077945,
            "unit": "ns/iter",
            "extra": "iterations: 8039\ncpu: 86736.7707426286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 24314.337545563958,
            "unit": "ns/iter",
            "extra": "iterations: 28805\ncpu: 24314.71272348528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 118516.15641416711,
            "unit": "ns/iter",
            "extra": "iterations: 5901\ncpu: 118514.20098288445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 95687.917862513,
            "unit": "ns/iter",
            "extra": "iterations: 7317\ncpu: 95688.04154708225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 95507.61286358078,
            "unit": "ns/iter",
            "extra": "iterations: 7323\ncpu: 95502.92229960379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 96609.69284828026,
            "unit": "ns/iter",
            "extra": "iterations: 7257\ncpu: 96608.11630150203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 178942.8983656702,
            "unit": "ns/iter",
            "extra": "iterations: 3916\ncpu: 178945.76098059342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 791929.231030579,
            "unit": "ns/iter",
            "extra": "iterations: 883\ncpu: 791930.1245753104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 663853.3232227467,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 663850.9952606709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 670065.1451767001,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 670028.4622731612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 673217.3848368368,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 673207.4856046074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 429013.08159509895,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 429002.08588956785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 653684.7644859668,
            "unit": "ns/iter",
            "extra": "iterations: 1070\ncpu: 653683.4579439287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24386.22125496216,
            "unit": "ns/iter",
            "extra": "iterations: 28718\ncpu: 24385.92868584154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 118120.89350211022,
            "unit": "ns/iter",
            "extra": "iterations: 5925\ncpu: 118119.4936708871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 95759.40677733015,
            "unit": "ns/iter",
            "extra": "iterations: 7289\ncpu: 95755.63177390577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 95398.68731117574,
            "unit": "ns/iter",
            "extra": "iterations: 7282\ncpu: 95396.12743751703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 97231.88381743076,
            "unit": "ns/iter",
            "extra": "iterations: 7230\ncpu: 97231.39695712159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 178776.18920991896,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 178769.16389669993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 789358.0587571095,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 789332.5423728807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 665075.1773255982,
            "unit": "ns/iter",
            "extra": "iterations: 1032\ncpu: 665085.0775193792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 671191.0499040049,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 671178.5988483694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 671744.6647454397,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 671740.5379442868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 428575.16942906723,
            "unit": "ns/iter",
            "extra": "iterations: 1629\ncpu: 428553.9594843428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 655853.7556179715,
            "unit": "ns/iter",
            "extra": "iterations: 1068\ncpu: 655820.3183520583 ns\nthreads: 1"
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
          "id": "89047ca37b911c271e1749e8de13632f782d585c",
          "message": "cmt clang 15 build",
          "timestamp": "2023-12-12T16:57:18+03:00",
          "tree_id": "2f2c9ed08ef5734141953c56ba19061c15b85598",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/89047ca37b911c271e1749e8de13632f782d585c"
        },
        "date": 1702390809627,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7784.642337641799,
            "unit": "ns/iter",
            "extra": "iterations: 89509\ncpu: 7784.252980147249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 96524.39789687672,
            "unit": "ns/iter",
            "extra": "iterations: 8844\ncpu: 96518.328810493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 186564.5578760368,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 186560.8753610309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 279061.9221864882,
            "unit": "ns/iter",
            "extra": "iterations: 3110\ncpu: 279044.083601286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 362954.5601871483,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 362932.113994045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 451864.81285640976,
            "unit": "ns/iter",
            "extra": "iterations: 1929\ncpu: 451830.68947641226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 539203.5451174498,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 539192.2126081581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 523531.3119999887,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523509.6000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 575773.2170000054,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575738.0000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6071.89224411672,
            "unit": "ns/iter",
            "extra": "iterations: 114945\ncpu: 6071.536821958328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4916.978044401944,
            "unit": "ns/iter",
            "extra": "iterations: 142606\ncpu: 4916.847117232096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4957.515291406273,
            "unit": "ns/iter",
            "extra": "iterations: 141452\ncpu: 4957.148714758361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5002.161445491143,
            "unit": "ns/iter",
            "extra": "iterations: 140326\ncpu: 5001.735245072186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8870.688101151058,
            "unit": "ns/iter",
            "extra": "iterations: 79327\ncpu: 8870.435034729673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47634.20771752407,
            "unit": "ns/iter",
            "extra": "iterations: 17389\ncpu: 47629.08160331242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 195736.90038839646,
            "unit": "ns/iter",
            "extra": "iterations: 4377\ncpu: 195732.14530500298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 163072.49686491088,
            "unit": "ns/iter",
            "extra": "iterations: 5263\ncpu: 163059.22477674298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 159340.14912930445,
            "unit": "ns/iter",
            "extra": "iterations: 5398\ncpu: 159336.32826972925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 156885.0286870142,
            "unit": "ns/iter",
            "extra": "iterations: 5438\ncpu: 156844.6855461566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 361819.47836937266,
            "unit": "ns/iter",
            "extra": "iterations: 2404\ncpu: 361805.5740432621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3035917.8814101447,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 3035470.833333343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2445541.793733798,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2445432.1148825088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2455287.223097122,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2455045.9317585295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2483841.8647215227,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2483680.3713527853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1455798.6817472544,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1455713.728549142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2388813.9487178833,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2388632.0512820575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10163973.657142833,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10163780.952380953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5774110.404908078,
            "unit": "ns/iter",
            "extra": "iterations: 163\ncpu: 5773619.631901832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12131586.147727478,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12130980.681818191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 47362.543162806156,
            "unit": "ns/iter",
            "extra": "iterations: 17573\ncpu: 47360.45638194955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 202949.46257698673,
            "unit": "ns/iter",
            "extra": "iterations: 4222\ncpu: 202932.8990999518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 163085.6199809736,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 163078.02093244498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 159671.561787248,
            "unit": "ns/iter",
            "extra": "iterations: 5349\ncpu: 159659.35688913727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 162637.03367579897,
            "unit": "ns/iter",
            "extra": "iterations: 5256\ncpu: 162634.3226788439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 357759.97166323115,
            "unit": "ns/iter",
            "extra": "iterations: 2435\ncpu: 357730.92402464163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3008278.176848894,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3008288.745980721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2460398.728947373,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2460166.8421052755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2458606.527559064,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2458552.4934383244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2480688.015957355,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2480572.340425545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1447024.7565891582,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1446937.2093023304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2393643.3239796013,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2393478.3163265274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10276407.905660065,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10275624.528301913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5824047.192546284,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 5823942.857142883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 46976.08449270525,
            "unit": "ns/iter",
            "extra": "iterations: 17682\ncpu: 46973.61723786902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 196879.53662455914,
            "unit": "ns/iter",
            "extra": "iterations: 4355\ncpu: 196868.95522388068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 158541.9296426621,
            "unit": "ns/iter",
            "extra": "iterations: 5401\ncpu: 158533.19755600858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 157730.75230883178,
            "unit": "ns/iter",
            "extra": "iterations: 5414\ncpu: 157720.53934244651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 158706.0311919728,
            "unit": "ns/iter",
            "extra": "iterations: 5386\ncpu: 158682.02747864922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 357097.53067104024,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 357065.62371346354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3008822.641025615,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 3008726.282051277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2439639.7676239796,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2439443.342036558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2463225.3342105057,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2463181.8421052624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2468831.5250659618,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2468681.26649078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1448355.643410897,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1448336.7441860475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2384726.913043448,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2384636.0613810774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2720.5209763154207,
            "unit": "ns/iter",
            "extra": "iterations: 257171\ncpu: 2720.5310863200007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20706.703917736562,
            "unit": "ns/iter",
            "extra": "iterations: 35301\ncpu: 20706.23211807034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 15371.899995587832,
            "unit": "ns/iter",
            "extra": "iterations: 45328\ncpu: 15371.467966819657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14729.9586549177,
            "unit": "ns/iter",
            "extra": "iterations: 47551\ncpu: 14729.217051166144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11538.35676102416,
            "unit": "ns/iter",
            "extra": "iterations: 60797\ncpu: 11538.25517706467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 83489.45454545066,
            "unit": "ns/iter",
            "extra": "iterations: 8371\ncpu: 83487.70756182153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 191937.4354617604,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 191938.58591394668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 46524.5549727785,
            "unit": "ns/iter",
            "extra": "iterations: 15062\ncpu: 46522.6663125746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 46576.37376155127,
            "unit": "ns/iter",
            "extra": "iterations: 15039\ncpu: 46575.7231198889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47083.89361702345,
            "unit": "ns/iter",
            "extra": "iterations: 14852\ncpu: 47082.426609211274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 99059.61846764004,
            "unit": "ns/iter",
            "extra": "iterations: 7061\ncpu: 99058.22121512634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 88798.03728042511,
            "unit": "ns/iter",
            "extra": "iterations: 7913\ncpu: 88794.33843043025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 25125.299408707524,
            "unit": "ns/iter",
            "extra": "iterations: 27905\ncpu: 25125.031356387888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 122001.91641947113,
            "unit": "ns/iter",
            "extra": "iterations: 5731\ncpu: 122000.1570406555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 98174.86614173507,
            "unit": "ns/iter",
            "extra": "iterations: 7112\ncpu: 98173.50956130527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 97253.82461752494,
            "unit": "ns/iter",
            "extra": "iterations: 7190\ncpu: 97252.29485396485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 98453.33995394481,
            "unit": "ns/iter",
            "extra": "iterations: 6948\ncpu: 98450.80598733365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 182631.88246025497,
            "unit": "ns/iter",
            "extra": "iterations: 3837\ncpu: 182629.89314568375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 812739.5900116598,
            "unit": "ns/iter",
            "extra": "iterations: 861\ncpu: 812713.5888501685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 684916.947110627,
            "unit": "ns/iter",
            "extra": "iterations: 1021\ncpu: 684920.6660137101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 689516.3510848017,
            "unit": "ns/iter",
            "extra": "iterations: 1014\ncpu: 689493.9842209097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 692000.0425742444,
            "unit": "ns/iter",
            "extra": "iterations: 1010\ncpu: 691977.0297029703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 434254.2670807369,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 434250.3105590103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 671748.0423484035,
            "unit": "ns/iter",
            "extra": "iterations: 1039\ncpu: 671725.1203079845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24929.55269529227,
            "unit": "ns/iter",
            "extra": "iterations: 28086\ncpu: 24929.27081108033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 121646.7544286204,
            "unit": "ns/iter",
            "extra": "iterations: 5758\ncpu: 121639.12816950348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 98163.83020453813,
            "unit": "ns/iter",
            "extra": "iterations: 7138\ncpu: 98162.49649761856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 97713.64894656518,
            "unit": "ns/iter",
            "extra": "iterations: 7167\ncpu: 97714.09236779745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 98873.53694023976,
            "unit": "ns/iter",
            "extra": "iterations: 7079\ncpu: 98870.0946461367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 182459.5937826535,
            "unit": "ns/iter",
            "extra": "iterations: 3828\ncpu: 182458.228840126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 810149.4191685494,
            "unit": "ns/iter",
            "extra": "iterations: 866\ncpu: 810117.6674364913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 681606.5258032879,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 681599.5131450816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 687005.6261040712,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 687009.4210009908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 690851.8226601126,
            "unit": "ns/iter",
            "extra": "iterations: 1015\ncpu: 690820.3940886599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 434912.4680322711,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 434908.13159528264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 670057.1513409619,
            "unit": "ns/iter",
            "extra": "iterations: 1044\ncpu: 670025.9578544111 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702391773647,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7415.663659367491,
            "unit": "ns/iter",
            "extra": "iterations: 93661\ncpu: 7415.138638280608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 91393.61666843796,
            "unit": "ns/iter",
            "extra": "iterations: 9407\ncpu: 91386.8395875412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 177250.99556898,
            "unit": "ns/iter",
            "extra": "iterations: 4965\ncpu: 177239.39577039276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 265538.5077910178,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 265523.3730522456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 344630.2763210989,
            "unit": "ns/iter",
            "extra": "iterations: 2479\ncpu: 344610.89148850343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 430422.5886699547,
            "unit": "ns/iter",
            "extra": "iterations: 2030\ncpu: 430399.35960591136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 514987.70477313676,
            "unit": "ns/iter",
            "extra": "iterations: 1697\ncpu: 514953.0936947556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 598765.9471516497,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 598719.4234728902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 548053.6890000281,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547999.7000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5756.968279326618,
            "unit": "ns/iter",
            "extra": "iterations: 121435\ncpu: 5756.614649812649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4699.197113188822,
            "unit": "ns/iter",
            "extra": "iterations: 148884\ncpu: 4698.868918083874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4691.526454679549,
            "unit": "ns/iter",
            "extra": "iterations: 144757\ncpu: 4691.296448530985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4684.328395791237,
            "unit": "ns/iter",
            "extra": "iterations: 148927\ncpu: 4684.115707695723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8643.87264477484,
            "unit": "ns/iter",
            "extra": "iterations: 80884\ncpu: 8643.467187577284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46933.77230630248,
            "unit": "ns/iter",
            "extra": "iterations: 17708\ncpu: 46932.742263383676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 191409.85077301736,
            "unit": "ns/iter",
            "extra": "iterations: 4463\ncpu: 191403.89872283197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 158986.3125116219,
            "unit": "ns/iter",
            "extra": "iterations: 5379\ncpu: 158981.70663692133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 152704.99429183247,
            "unit": "ns/iter",
            "extra": "iterations: 5606\ncpu: 152699.23296468097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 155300.8177357782,
            "unit": "ns/iter",
            "extra": "iterations: 5503\ncpu: 155295.92949300382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 358461.7689127623,
            "unit": "ns/iter",
            "extra": "iterations: 2419\ncpu: 358450.59942124825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2873791.198083065,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2873771.8849840257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2327931.9975124258,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2327726.3681591996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2320035.324257529,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2319914.3564356393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2337103.2100000377,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2336956.250000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1380744.3244444653,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1380633.7777777782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2257724.196125831,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2257562.2276029075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9725989.045871677,
            "unit": "ns/iter",
            "extra": "iterations: 109\ncpu: 9725340.366972474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5456665.624277686,
            "unit": "ns/iter",
            "extra": "iterations: 173\ncpu: 5456332.369942206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11646324.98913027,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11645143.478260878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46519.24528934691,
            "unit": "ns/iter",
            "extra": "iterations: 17885\ncpu: 46516.527816605994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 193564.19204699423,
            "unit": "ns/iter",
            "extra": "iterations: 4426\ncpu: 193551.6945323081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 157308.5895974998,
            "unit": "ns/iter",
            "extra": "iterations: 5441\ncpu: 157296.58151075128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 153210.04533238284,
            "unit": "ns/iter",
            "extra": "iterations: 5581\ncpu: 153200.03583587173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 155681.89985432543,
            "unit": "ns/iter",
            "extra": "iterations: 5492\ncpu: 155671.7589220687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 355475.8509060881,
            "unit": "ns/iter",
            "extra": "iterations: 2428\ncpu: 355471.99341021234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2836273.088145995,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2836218.2370820763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2356122.91414133,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2356073.2323232177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2325786.860696431,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2325685.5721393027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2332520.955112211,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2332445.3865336687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1381817.0650886858,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1381807.1005917238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2267214.8203883814,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2267199.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 9840124.618181728,
            "unit": "ns/iter",
            "extra": "iterations: 110\ncpu: 9839849.090909135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5509576.678362302,
            "unit": "ns/iter",
            "extra": "iterations: 171\ncpu: 5509369.59064328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45618.57090168377,
            "unit": "ns/iter",
            "extra": "iterations: 18166\ncpu: 45618.061213255496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 189653.71207430612,
            "unit": "ns/iter",
            "extra": "iterations: 4522\ncpu: 189652.1450685541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 155307.90907440466,
            "unit": "ns/iter",
            "extra": "iterations: 5510\ncpu: 155302.5226860262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 153846.00811102908,
            "unit": "ns/iter",
            "extra": "iterations: 5548\ncpu: 153832.26387887535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 155063.2629099425,
            "unit": "ns/iter",
            "extra": "iterations: 5519\ncpu: 155053.61478528733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 357482.1570552125,
            "unit": "ns/iter",
            "extra": "iterations: 2445\ncpu: 357459.3047034753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2837553.4712991174,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2837268.580060434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2328238.147132132,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2328111.720698255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2319283.4601989724,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2319096.517412945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2334319.3774999804,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2334126.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1377904.7640118606,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1377808.4070796366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2266560.5762712276,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2266427.6029055673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2654.0729346738067,
            "unit": "ns/iter",
            "extra": "iterations: 263784\ncpu: 2653.8285112061403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 19142.385270745777,
            "unit": "ns/iter",
            "extra": "iterations: 36621\ncpu: 19142.519319516126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14979.348552147732,
            "unit": "ns/iter",
            "extra": "iterations: 46828\ncpu: 14979.076620825155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 14741.054667452307,
            "unit": "ns/iter",
            "extra": "iterations: 47542\ncpu: 14740.67350973875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11240.84127391802,
            "unit": "ns/iter",
            "extra": "iterations: 62296\ncpu: 11240.368562989675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 82767.48008980328,
            "unit": "ns/iter",
            "extra": "iterations: 8463\ncpu: 82765.95769821468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 180650.83088425072,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 180646.24903325553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 43769.085095732284,
            "unit": "ns/iter",
            "extra": "iterations: 15982\ncpu: 43767.888874984106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 43979.363985395896,
            "unit": "ns/iter",
            "extra": "iterations: 15888\ncpu: 43977.36656596205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 44059.136938067786,
            "unit": "ns/iter",
            "extra": "iterations: 15905\ncpu: 44057.038667086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 93488.62709365935,
            "unit": "ns/iter",
            "extra": "iterations: 7463\ncpu: 93484.05466970366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 83737.30920582057,
            "unit": "ns/iter",
            "extra": "iterations: 8386\ncpu: 83733.87789172516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 23614.36268782684,
            "unit": "ns/iter",
            "extra": "iterations: 29615\ncpu: 23613.6518656087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 115476.94474683018,
            "unit": "ns/iter",
            "extra": "iterations: 6063\ncpu: 115472.25795810598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 93067.88326900182,
            "unit": "ns/iter",
            "extra": "iterations: 7513\ncpu: 93064.98070011984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 92795.75019877567,
            "unit": "ns/iter",
            "extra": "iterations: 7546\ncpu: 92789.67664988013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 93650.84512325746,
            "unit": "ns/iter",
            "extra": "iterations: 7464\ncpu: 93648.49946409359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 179016.75332652262,
            "unit": "ns/iter",
            "extra": "iterations: 3908\ncpu: 179009.85158648746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 765597.3603504993,
            "unit": "ns/iter",
            "extra": "iterations: 913\ncpu: 765578.7513691126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 646287.2751615784,
            "unit": "ns/iter",
            "extra": "iterations: 1083\ncpu: 646283.2871652732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 645652.8141674587,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 645634.4066237374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 651512.5911764632,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 651509.7058823612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 412541.81999998796,
            "unit": "ns/iter",
            "extra": "iterations: 1700\ncpu: 412546.11764705536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 635210.8278985521,
            "unit": "ns/iter",
            "extra": "iterations: 1104\ncpu: 635188.5869565171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 23836.675119128136,
            "unit": "ns/iter",
            "extra": "iterations: 29380\ncpu: 23836.443158611535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 113820.30076409742,
            "unit": "ns/iter",
            "extra": "iterations: 6151\ncpu: 113818.50105673981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 93312.40058674646,
            "unit": "ns/iter",
            "extra": "iterations: 7499\ncpu: 93312.1216162148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 92549.98640084136,
            "unit": "ns/iter",
            "extra": "iterations: 7574\ncpu: 92548.11196197546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 93620.75253739835,
            "unit": "ns/iter",
            "extra": "iterations: 7488\ncpu: 93618.84348290552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 177851.85452229582,
            "unit": "ns/iter",
            "extra": "iterations: 3925\ncpu: 177851.51592356613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 761808.0218102598,
            "unit": "ns/iter",
            "extra": "iterations: 917\ncpu: 761792.3664122138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 647719.7331486316,
            "unit": "ns/iter",
            "extra": "iterations: 1083\ncpu: 647717.5438596517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 643125.8366972442,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 643114.8623853287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 650579.48144714,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 650566.9758812675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 415106.29401304165,
            "unit": "ns/iter",
            "extra": "iterations: 1687\ncpu: 415096.6804979267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 634550.5090744138,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 634549.0925589829 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702396440562,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7411.656666631853,
            "unit": "ns/iter",
            "extra": "iterations: 95333\ncpu: 7411.49024996591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 91190.66324260905,
            "unit": "ns/iter",
            "extra": "iterations: 9443\ncpu: 91189.05009001376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 180250.39245667701,
            "unit": "ns/iter",
            "extra": "iterations: 4905\ncpu: 180238.67482161062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 275640.76410583046,
            "unit": "ns/iter",
            "extra": "iterations: 3137\ncpu: 275636.4042078418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 353357.6668060424,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 353357.1906354516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 444376.2459595976,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 444367.77777777804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 528612.2449464764,
            "unit": "ns/iter",
            "extra": "iterations: 1682\ncpu: 528602.913198573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 618785.3756166281,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 618784.4256518682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 558435.0000000313,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558424.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5785.560487118272,
            "unit": "ns/iter",
            "extra": "iterations: 122927\ncpu: 5785.403532177641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4693.001323595325,
            "unit": "ns/iter",
            "extra": "iterations: 145815\ncpu: 4692.927339436957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4739.479100786523,
            "unit": "ns/iter",
            "extra": "iterations: 147996\ncpu: 4739.474039838919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4778.410019498193,
            "unit": "ns/iter",
            "extra": "iterations: 147193\ncpu: 4778.303995434562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8615.065113744733,
            "unit": "ns/iter",
            "extra": "iterations: 80751\ncpu: 8614.983096184567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46640.064009661386,
            "unit": "ns/iter",
            "extra": "iterations: 18216\ncpu: 46639.75076855517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 203358.6880968922,
            "unit": "ns/iter",
            "extra": "iterations: 4293\ncpu: 202963.28907523863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 158708.27288167248,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 158702.7929798074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 158951.11854613828,
            "unit": "ns/iter",
            "extra": "iterations: 5365\ncpu: 158948.21994408185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 152924.1166014907,
            "unit": "ns/iter",
            "extra": "iterations: 5626\ncpu: 152922.59153928218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 367132.88808200124,
            "unit": "ns/iter",
            "extra": "iterations: 2341\ncpu: 367125.84365655715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2964187.9781250325,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2964100.624999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2373108.425742609,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2373036.386138615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2390919.2935063886,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2390871.428571433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2405200.339196008,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2405121.35678392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1400169.6656395078,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1400159.7842835134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2338845.567088569,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2338823.2911392385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 9754883.663551468,
            "unit": "ns/iter",
            "extra": "iterations: 107\ncpu: 9754750.467289723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5510864.266271998,
            "unit": "ns/iter",
            "extra": "iterations: 169\ncpu: 5510728.402366867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 11706796.430107666,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11706481.720430108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 46846.386579019156,
            "unit": "ns/iter",
            "extra": "iterations: 18255\ncpu: 46845.00684743924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 197658.9549077638,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 197647.05078569727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 159142.72079134258,
            "unit": "ns/iter",
            "extra": "iterations: 5358\ncpu: 159135.79693915628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 155756.56365216596,
            "unit": "ns/iter",
            "extra": "iterations: 5750\ncpu: 155749.30434782608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 159736.47172284964,
            "unit": "ns/iter",
            "extra": "iterations: 5340\ncpu: 159728.83895131122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 367296.95715473895,
            "unit": "ns/iter",
            "extra": "iterations: 2404\ncpu: 367281.19800332567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2921446.758730218,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2921391.111111111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2392885.2538859085,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2392762.1761658075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2366138.9064934403,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2366055.5844155913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2404646.286458423,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2404527.864583339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1380018.3823529806,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1379991.3235294065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2316638.396946479,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2316582.9516539536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 9779562.150442488,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 9779063.716814147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5555969.520958251,
            "unit": "ns/iter",
            "extra": "iterations: 167\ncpu: 5555827.544910173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45295.49101762946,
            "unit": "ns/iter",
            "extra": "iterations: 17924\ncpu: 45293.39433162223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 190747.17545454303,
            "unit": "ns/iter",
            "extra": "iterations: 4400\ncpu: 190740.79545454643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 153465.8379806805,
            "unit": "ns/iter",
            "extra": "iterations: 5487\ncpu: 153457.7546929107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 152782.81467045142,
            "unit": "ns/iter",
            "extra": "iterations: 5644\ncpu: 152779.73068745603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 153542.26186943686,
            "unit": "ns/iter",
            "extra": "iterations: 5392\ncpu: 153534.25445103823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 371955.31350891676,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 371950.21240441734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2866010.591195003,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2865900.9433962153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2341232.650124037,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2341155.0868486385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2389762.243781059,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2389693.034825871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2374636.421875002,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2374523.4374999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1399472.8582434696,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1399446.8412943047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2279778.244332523,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2279685.3904282097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2545.77804394215,
            "unit": "ns/iter",
            "extra": "iterations: 264665\ncpu: 2545.6898343188554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 18501.12878375354,
            "unit": "ns/iter",
            "extra": "iterations: 36736\ncpu: 18499.787674215946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 14867.444191918863,
            "unit": "ns/iter",
            "extra": "iterations: 47520\ncpu: 14867.121212121225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15052.10497803216,
            "unit": "ns/iter",
            "extra": "iterations: 46886\ncpu: 15051.281832529789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 11271.43358044882,
            "unit": "ns/iter",
            "extra": "iterations: 61375\ncpu: 11271.301018329914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 82698.50227817996,
            "unit": "ns/iter",
            "extra": "iterations: 8340\ncpu: 82696.5347721817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 185334.80723219173,
            "unit": "ns/iter",
            "extra": "iterations: 3678\ncpu: 185328.4665579121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 45155.000129181535,
            "unit": "ns/iter",
            "extra": "iterations: 15482\ncpu: 45154.94122206423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 45877.59896740954,
            "unit": "ns/iter",
            "extra": "iterations: 15495\ncpu: 45877.54759599883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 45642.77072880683,
            "unit": "ns/iter",
            "extra": "iterations: 15148\ncpu: 45642.29601267492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 95797.27416452538,
            "unit": "ns/iter",
            "extra": "iterations: 7780\ncpu: 95794.2287917744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 84681.33046800975,
            "unit": "ns/iter",
            "extra": "iterations: 8376\ncpu: 84681.25596943626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 23909.625543571237,
            "unit": "ns/iter",
            "extra": "iterations: 29205\ncpu: 23909.357986646053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 117140.62086928537,
            "unit": "ns/iter",
            "extra": "iterations: 6143\ncpu: 117140.5013836879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 96714.17841225782,
            "unit": "ns/iter",
            "extra": "iterations: 7180\ncpu: 96707.49303621182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 95637.1371412834,
            "unit": "ns/iter",
            "extra": "iterations: 7248\ncpu: 95634.76821192067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 97121.68999859743,
            "unit": "ns/iter",
            "extra": "iterations: 7129\ncpu: 97118.9647916958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 180362.2848924455,
            "unit": "ns/iter",
            "extra": "iterations: 3998\ncpu: 180356.12806403104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 794601.9645808798,
            "unit": "ns/iter",
            "extra": "iterations: 847\ncpu: 794596.1038961116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 659843.6795841492,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 659803.1190926274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 674125.7317784481,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 674108.4548104902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 677436.5863414394,
            "unit": "ns/iter",
            "extra": "iterations: 1025\ncpu: 677412.3902438971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 422537.40349818463,
            "unit": "ns/iter",
            "extra": "iterations: 1658\ncpu: 422527.14113390044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 662888.2591574737,
            "unit": "ns/iter",
            "extra": "iterations: 1092\ncpu: 662854.5787545837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24474.54420311921,
            "unit": "ns/iter",
            "extra": "iterations: 29421\ncpu: 24474.00836137447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 118988.71679028722,
            "unit": "ns/iter",
            "extra": "iterations: 5932\ncpu: 118988.57046527263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 96386.7873516725,
            "unit": "ns/iter",
            "extra": "iterations: 7416\ncpu: 96383.06364616986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 94375.18753431465,
            "unit": "ns/iter",
            "extra": "iterations: 7284\ncpu: 94374.12136188832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 97098.47386425258,
            "unit": "ns/iter",
            "extra": "iterations: 7308\ncpu: 97094.49917898225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 177848.63486425256,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 177844.4810961705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 793181.6260775549,
            "unit": "ns/iter",
            "extra": "iterations: 928\ncpu: 793163.7931034536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 659572.4902326025,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 659560.0930232559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 660166.8419593005,
            "unit": "ns/iter",
            "extra": "iterations: 1082\ncpu: 660140.2033271698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 670637.5559882874,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 670598.9289191889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 416074.86481595034,
            "unit": "ns/iter",
            "extra": "iterations: 1657\ncpu: 416064.1520820759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 641066.5108798068,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 641037.3699148541 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}