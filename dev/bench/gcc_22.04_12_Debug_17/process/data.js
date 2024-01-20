window.BENCHMARK_DATA = {
  "lastUpdate": 1705772321316,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-12 22.04 Debug c++-17": [
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
        "date": 1702399119785,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15379.750049323618,
            "unit": "ns/iter",
            "extra": "iterations: 45617\ncpu: 15379.233619045533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 148489.10807497264,
            "unit": "ns/iter",
            "extra": "iterations: 5709\ncpu: 148485.60168155548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 281072.6026554108,
            "unit": "ns/iter",
            "extra": "iterations: 3088\ncpu: 281056.67098445585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 412806.71870536,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 412795.90671109007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 549304.3143036182,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 549267.2521957338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 551167.9149999509,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551160.7000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 655807.0370000451,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 655750.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 764731.0230832141,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 764688.8705688374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 871483.9435559321,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 871433.3019755405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12319.863768370755,
            "unit": "ns/iter",
            "extra": "iterations: 56815\ncpu: 12319.603977822748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10164.33603726508,
            "unit": "ns/iter",
            "extra": "iterations: 68912\ncpu: 10164.129614580908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10012.220534550273,
            "unit": "ns/iter",
            "extra": "iterations: 69853\ncpu: 10011.970853077177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10110.115930303518,
            "unit": "ns/iter",
            "extra": "iterations: 69214\ncpu: 10110.064437830484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16564.655021212537,
            "unit": "ns/iter",
            "extra": "iterations: 42191\ncpu: 16564.570643028128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63790.63452079264,
            "unit": "ns/iter",
            "extra": "iterations: 13418\ncpu: 63789.342674019994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 335036.1416861893,
            "unit": "ns/iter",
            "extra": "iterations: 2562\ncpu: 335032.3965651839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 266076.48648649757,
            "unit": "ns/iter",
            "extra": "iterations: 3219\ncpu: 266073.6564150361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 262355.4578979559,
            "unit": "ns/iter",
            "extra": "iterations: 3254\ncpu: 262354.0872771969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 259003.42357944214,
            "unit": "ns/iter",
            "extra": "iterations: 3291\ncpu: 258999.93922819835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 572058.1930627833,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 572033.5732984294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4657711.4599995185,
            "unit": "ns/iter",
            "extra": "iterations: 200\ncpu: 4657672.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3792345.191057142,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3792274.390243908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3768436.395161291,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3768315.3225806416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3762209.3306453056,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3762063.7096774187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2162008.2587411385,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2161952.4475524463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3669612.6758889575,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3669528.4584980146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14477462.378378019,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14477104.054054052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6358362.500000112,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6358191.000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18101873.355931275,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 18101388.135593213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 69538.59350449561,
            "unit": "ns/iter",
            "extra": "iterations: 12347\ncpu: 69537.18312140615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 363613.61620014504,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 363603.9864291755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 293670.36708859855,
            "unit": "ns/iter",
            "extra": "iterations: 2923\ncpu: 293668.6623332211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 291815.50950442726,
            "unit": "ns/iter",
            "extra": "iterations: 2946\ncpu: 291811.8805159538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 287967.1538722677,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 287961.71874999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 585810.4915483437,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 585808.5192697797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4738718.57575765,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4738664.141414125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3836813.5122950994,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3836747.540983597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3820089.8114758194,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3820045.491803253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3815197.2530608783,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3815105.714285726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2214737.599009685,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2214636.386138624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3713789.8127489877,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3713737.0517928204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14923727.902778221,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14923230.555555556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6497216.359999811,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6497065.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 62253.45640724999,
            "unit": "ns/iter",
            "extra": "iterations: 13672\ncpu: 62251.81392627243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 329163.51844734995,
            "unit": "ns/iter",
            "extra": "iterations: 2602\ncpu: 329160.4150653319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 263040.930218248,
            "unit": "ns/iter",
            "extra": "iterations: 3253\ncpu: 263032.58530587016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 258806.32729469758,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 258795.6521739145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 257832.9475587472,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 257825.82881253795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 559991.5418814935,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 559980.4123711355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4688066.69849258,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4687992.964824119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3793884.0772359828,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3793863.0081300647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3744545.1767071867,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3744527.3092369274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3788852.670731458,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3788817.073170729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2190268.391408335,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2190226.968973745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3684465.3241105657,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3684346.6403162074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5665.59774203955,
            "unit": "ns/iter",
            "extra": "iterations: 123120\ncpu: 5665.573424301517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38374.85528624501,
            "unit": "ns/iter",
            "extra": "iterations: 18236\ncpu: 38374.182934854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31660.931496920017,
            "unit": "ns/iter",
            "extra": "iterations: 22072\ncpu: 31660.461217832468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31566.159400670447,
            "unit": "ns/iter",
            "extra": "iterations: 22158\ncpu: 31566.287571080396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23479.509098220708,
            "unit": "ns/iter",
            "extra": "iterations: 29841\ncpu: 23479.60524111134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 150556.38363831578,
            "unit": "ns/iter",
            "extra": "iterations: 4645\ncpu: 150555.67276641744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 308809.9310650057,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 308805.78877595806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76169.75136194933,
            "unit": "ns/iter",
            "extra": "iterations: 9178\ncpu: 76168.79494443288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76313.37962560603,
            "unit": "ns/iter",
            "extra": "iterations: 9188\ncpu: 76313.0713974739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76108.17385621561,
            "unit": "ns/iter",
            "extra": "iterations: 9180\ncpu: 76107.64705882355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 157018.86630775526,
            "unit": "ns/iter",
            "extra": "iterations: 4458\ncpu: 157019.65006729454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 150024.76354678115,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 150023.77382736988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 44207.55470817754,
            "unit": "ns/iter",
            "extra": "iterations: 15866\ncpu: 44207.33644270786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 215069.0144171997,
            "unit": "ns/iter",
            "extra": "iterations: 3260\ncpu: 215068.09815950858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174540.2237237091,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 174541.36636636624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 175372.31286035632,
            "unit": "ns/iter",
            "extra": "iterations: 3989\ncpu: 175369.81699674216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 176240.6385876391,
            "unit": "ns/iter",
            "extra": "iterations: 3965\ncpu: 176238.31021437392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 295158.52764880424,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 295157.57703672495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1305519.3202980359,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1305497.7653631296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1093564.4625000407,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1093559.8437500137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1084950.4356589348,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1084926.821705415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1082257.1962905275,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1082262.4420401906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 691929.9521913097,
            "unit": "ns/iter",
            "extra": "iterations: 1004\ncpu: 691927.1912350615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1080234.718701754,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1080213.9103554718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44228.61017590436,
            "unit": "ns/iter",
            "extra": "iterations: 15861\ncpu: 44227.99319084535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 213292.58028833047,
            "unit": "ns/iter",
            "extra": "iterations: 2983\ncpu: 213291.71974522114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 177342.40465350862,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 177341.70460293366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 176671.28863121395,
            "unit": "ns/iter",
            "extra": "iterations: 3967\ncpu: 176668.61608268062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 177456.89254943002,
            "unit": "ns/iter",
            "extra": "iterations: 3946\ncpu: 177456.66497719154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 295201.88463155995,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 295197.47368421557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1312484.9626169677,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1312481.1214953207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1087579.9937790874,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1087575.8942457312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1083989.0277779142,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1083997.0679012358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1082278.2407407877,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1082262.345679016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 686040.0273972376,
            "unit": "ns/iter",
            "extra": "iterations: 1022\ncpu: 686028.0821917849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1077137.0138462982,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1077133.0769230758 ns\nthreads: 1"
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
        "date": 1702409371800,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15650.09888097167,
            "unit": "ns/iter",
            "extra": "iterations: 44771\ncpu: 15649.954211431506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152263.7443019976,
            "unit": "ns/iter",
            "extra": "iterations: 5616\ncpu: 152260.64814814815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 286250.88217821857,
            "unit": "ns/iter",
            "extra": "iterations: 3030\ncpu: 286248.84488448844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 419565.2823244163,
            "unit": "ns/iter",
            "extra": "iterations: 2065\ncpu: 419550.7021791766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 561289.9703989769,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 561246.7824967821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 560812.1330000131,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560791.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 670555.0701881116,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 670521.4905933432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 781545.7296390234,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 781511.8387909322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 889783.0470700582,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 889744.3804034584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12486.575645238183,
            "unit": "ns/iter",
            "extra": "iterations: 56917\ncpu: 12486.144737073279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10140.781633007438,
            "unit": "ns/iter",
            "extra": "iterations: 69026\ncpu: 10140.519514385887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9998.725122140391,
            "unit": "ns/iter",
            "extra": "iterations: 70002\ncpu: 9998.288620325135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10097.05132381076,
            "unit": "ns/iter",
            "extra": "iterations: 69383\ncpu: 10096.476082037374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16695.726811646527,
            "unit": "ns/iter",
            "extra": "iterations: 41799\ncpu: 16695.081222038825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63559.79819433547,
            "unit": "ns/iter",
            "extra": "iterations: 13513\ncpu: 63559.34285502855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 336329.77882350545,
            "unit": "ns/iter",
            "extra": "iterations: 2550\ncpu: 336319.99999999936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 264811.9918952625,
            "unit": "ns/iter",
            "extra": "iterations: 3208\ncpu: 264813.02992518723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 262910.08993246354,
            "unit": "ns/iter",
            "extra": "iterations: 3258\ncpu: 262901.65745856427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 260630.58746576234,
            "unit": "ns/iter",
            "extra": "iterations: 3287\ncpu: 260616.9151201696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 581807.0424559241,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 581783.9320705411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4762725.231958685,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4762558.762886592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3904335.0794974803,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3904108.368200842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3839186.8471073154,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3839016.9421487614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3874485.9958509197,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3874346.0580912824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2220973.7870812924,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2220967.2248803787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3762812.71544707,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3761964.6341463323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14748473.136987679,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14747947.94520545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6414737.689999584,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6414429.999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18183092.694914456,
            "unit": "ns/iter",
            "extra": "iterations: 59\ncpu: 18182815.25423726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 68343.69256025762,
            "unit": "ns/iter",
            "extra": "iterations: 12487\ncpu: 68340.49811804284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 368304.6156143312,
            "unit": "ns/iter",
            "extra": "iterations: 2344\ncpu: 368290.7423208199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 293092.048705718,
            "unit": "ns/iter",
            "extra": "iterations: 2936\ncpu: 293081.16485013557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 290028.43935311167,
            "unit": "ns/iter",
            "extra": "iterations: 2968\ncpu: 290020.38409703644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 288622.3940107702,
            "unit": "ns/iter",
            "extra": "iterations: 2972\ncpu: 288619.85195154964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 583381.2505036548,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 583351.1752854235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4831134.27461138,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 4830965.284974101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3954283.6228814987,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3954248.3050847515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3891253.606694766,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3891095.8158996035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3901679.3849369152,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3901652.301255238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2246983.6280194153,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2246936.231884056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3800385.827868594,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3800296.3114754036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15024459.361111693,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 15023884.722222231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6397548.859999916,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6397173.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 61680.64698210028,
            "unit": "ns/iter",
            "extra": "iterations: 13801\ncpu: 61679.37106006845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 335010.3112915942,
            "unit": "ns/iter",
            "extra": "iterations: 2586\ncpu: 335003.86697602546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 266701.8484660432,
            "unit": "ns/iter",
            "extra": "iterations: 3227\ncpu: 266697.70684846566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 256720.7005379712,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 256713.23968918232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 257039.67594255673,
            "unit": "ns/iter",
            "extra": "iterations: 3342\ncpu: 257035.72710951586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 556301.5499359475,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 556257.1702944954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4770027.456410366,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4769801.538461539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3917617.45606705,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3917519.6652719765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3861702.971074307,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3861504.5454545408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3851127.066115702,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3851052.8925619824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2214098.0642856923,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2214056.904761903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3754973.520161244,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3754885.080645175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5828.1273293979975,
            "unit": "ns/iter",
            "extra": "iterations: 120632\ncpu: 5827.879003912703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37012.12633188746,
            "unit": "ns/iter",
            "extra": "iterations: 18958\ncpu: 37011.8736153602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29736.95588485196,
            "unit": "ns/iter",
            "extra": "iterations: 23552\ncpu: 29735.69548233712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30164.03471652657,
            "unit": "ns/iter",
            "extra": "iterations: 23159\ncpu: 30163.750593721925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23720.937620580193,
            "unit": "ns/iter",
            "extra": "iterations: 29545\ncpu: 23720.666779488845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 147654.8841772135,
            "unit": "ns/iter",
            "extra": "iterations: 4740\ncpu: 147648.31223628786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 309267.9301811702,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 309254.26425099804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 76601.03459600982,
            "unit": "ns/iter",
            "extra": "iterations: 9134\ncpu: 76598.13882198418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 76153.16007430069,
            "unit": "ns/iter",
            "extra": "iterations: 9152\ncpu: 76148.77622377644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 76282.55841045232,
            "unit": "ns/iter",
            "extra": "iterations: 9185\ncpu: 76280.07621121366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 157658.86600701974,
            "unit": "ns/iter",
            "extra": "iterations: 4851\ncpu: 157654.99896928688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 149559.99999999822,
            "unit": "ns/iter",
            "extra": "iterations: 4671\ncpu: 149558.42432027578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43018.739740354715,
            "unit": "ns/iter",
            "extra": "iterations: 16253\ncpu: 43017.07992370696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 216710.71503710875,
            "unit": "ns/iter",
            "extra": "iterations: 3232\ncpu: 216708.6633663371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 177675.42560121653,
            "unit": "ns/iter",
            "extra": "iterations: 3992\ncpu: 177671.51803607354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 175691.86703461656,
            "unit": "ns/iter",
            "extra": "iterations: 3986\ncpu: 175690.09031610627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 176293.38637506784,
            "unit": "ns/iter",
            "extra": "iterations: 3978\ncpu: 176288.15987933852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 292718.48555885314,
            "unit": "ns/iter",
            "extra": "iterations: 2389\ncpu: 292705.3160318146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1329587.9564392804,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1329532.007575745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1116224.2344497417,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1116175.2791068736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1102177.2818896968,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1102120.1574803218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1106006.5624012295,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1105959.8736176912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 691829.6126481824,
            "unit": "ns/iter",
            "extra": "iterations: 1012\ncpu: 691822.1343873402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1097266.888888778,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1097230.8294209782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44259.50502623234,
            "unit": "ns/iter",
            "extra": "iterations: 15817\ncpu: 44259.01245495357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 216579.81747992922,
            "unit": "ns/iter",
            "extra": "iterations: 3238\ncpu: 216578.1964175415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 178570.42970147333,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 178560.1173768833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177785.26382545626,
            "unit": "ns/iter",
            "extra": "iterations: 3942\ncpu: 177777.62557077472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178547.4748660352,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 178539.6274559832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 293675.5435789804,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 293666.56842105504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1315018.4519772937,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1314946.3276836027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1109854.630158766,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1109826.9841269825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1099788.044025166,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1099765.4088050218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1101485.773228422,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1101455.748031493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 691432.4891304636,
            "unit": "ns/iter",
            "extra": "iterations: 1012\ncpu: 691435.4743082989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1094771.1250000936,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1094733.1249999914 ns\nthreads: 1"
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
        "date": 1702412789140,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14221.959933636763,
            "unit": "ns/iter",
            "extra": "iterations: 48220\ncpu: 14221.84570717545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 117258.3745646923,
            "unit": "ns/iter",
            "extra": "iterations: 7179\ncpu: 117258.90792589498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 220046.56031424514,
            "unit": "ns/iter",
            "extra": "iterations: 3946\ncpu: 220041.86517992913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 322183.1580127325,
            "unit": "ns/iter",
            "extra": "iterations: 2677\ncpu: 322178.1098244302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 427696.88823816867,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 427679.64860907797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 527896.9848116935,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 527893.3171324424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 507891.2559999935,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507876.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 588031.9219999136,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 588023.0000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 673575.711901309,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 673557.9100145138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11422.799260719727,
            "unit": "ns/iter",
            "extra": "iterations: 60870\ncpu: 11422.57105306392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9687.94058843807,
            "unit": "ns/iter",
            "extra": "iterations: 72225\ncpu: 9687.842159916925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9678.321333204478,
            "unit": "ns/iter",
            "extra": "iterations: 72277\ncpu: 9678.13965715236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9580.177377224172,
            "unit": "ns/iter",
            "extra": "iterations: 73121\ncpu: 9580.072756116588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15801.86194215205,
            "unit": "ns/iter",
            "extra": "iterations: 44322\ncpu: 15801.94485808401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56604.45514995709,
            "unit": "ns/iter",
            "extra": "iterations: 14437\ncpu: 56602.0295075155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 250752.1544074619,
            "unit": "ns/iter",
            "extra": "iterations: 3426\ncpu: 250748.19030939892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 198383.486964627,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 198371.4851024207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 202659.06405529258,
            "unit": "ns/iter",
            "extra": "iterations: 4340\ncpu: 202633.80184331804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195048.86866835086,
            "unit": "ns/iter",
            "extra": "iterations: 4363\ncpu: 195040.9580563835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 468782.2008501321,
            "unit": "ns/iter",
            "extra": "iterations: 1882\ncpu: 468760.3613177476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3732179.8629033854,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3732120.564516124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3039737.1405226793,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3039627.7777777743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3035637.302931902,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3035473.2899022773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3034010.862745023,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3033882.6797385626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1737846.393996129,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1737747.0919324548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2938299.668789589,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2938192.675159237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11153096.979166813,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11152842.70833335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6541918.8098591715,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6541404.92957747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14328657.648649355,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14328131.081081092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54914.964199997485,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54909.53000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 281928.20661426213,
            "unit": "ns/iter",
            "extra": "iterations: 3054\ncpu: 281918.7622789785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 224842.25078699362,
            "unit": "ns/iter",
            "extra": "iterations: 3812\ncpu: 224828.14795383142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 228430.1185047685,
            "unit": "ns/iter",
            "extra": "iterations: 3772\ncpu: 228417.57688229013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 220737.99071924653,
            "unit": "ns/iter",
            "extra": "iterations: 3879\ncpu: 220726.24387728685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 475990.0125958868,
            "unit": "ns/iter",
            "extra": "iterations: 1826\ncpu: 475967.74370207934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3812732.233606513,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3812644.2622950827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3084007.354304853,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3083823.50993378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3077106.778877945,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3077014.521452144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3079217.5445543365,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3079067.9867986855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1770971.9142857508,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1770907.6190476208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2984752.6623794176,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2984631.832797411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11413126.297872836,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11412509.574468046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5048147.900000686,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5047747.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55303.66581956397,
            "unit": "ns/iter",
            "extra": "iterations: 14953\ncpu: 55301.37096234845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 252117.96284731763,
            "unit": "ns/iter",
            "extra": "iterations: 3203\ncpu: 252116.60942866097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 196807.04792628082,
            "unit": "ns/iter",
            "extra": "iterations: 4340\ncpu: 196804.17050691223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 194960.7751371257,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 194953.67915904958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 192207.99819900366,
            "unit": "ns/iter",
            "extra": "iterations: 4442\ncpu: 192201.80099054452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 449669.92923554673,
            "unit": "ns/iter",
            "extra": "iterations: 1936\ncpu: 449666.2706611593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3734460.524000042,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3734368.7999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3035634.690553905,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3035545.928338752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3022825.694805002,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3022684.415584414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3016665.732899196,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3016648.5342019545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1734315.7033582965,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1734306.1567164247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2926446.1320755095,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2926366.6666666763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5748.040372289465,
            "unit": "ns/iter",
            "extra": "iterations: 122163\ncpu: 5747.96951613827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32937.28307214171,
            "unit": "ns/iter",
            "extra": "iterations: 21249\ncpu: 32936.364064191264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26810.846648052717,
            "unit": "ns/iter",
            "extra": "iterations: 26149\ncpu: 26810.516654556643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27490.021283279766,
            "unit": "ns/iter",
            "extra": "iterations: 25466\ncpu: 27489.228775622218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21142.20993608997,
            "unit": "ns/iter",
            "extra": "iterations: 33172\ncpu: 21141.429518871388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 125926.75085632842,
            "unit": "ns/iter",
            "extra": "iterations: 5547\ncpu: 125927.45628267484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 247589.65437788898,
            "unit": "ns/iter",
            "extra": "iterations: 2821\ncpu: 247579.5462601913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 63095.64729729384,
            "unit": "ns/iter",
            "extra": "iterations: 11100\ncpu: 63095.23423423341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62855.04780697795,
            "unit": "ns/iter",
            "extra": "iterations: 11149\ncpu: 62851.43062158041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 62577.86571428678,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 62577.38392857069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 126022.06155507667,
            "unit": "ns/iter",
            "extra": "iterations: 5556\ncpu: 126019.06047516156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 118750.03974075039,
            "unit": "ns/iter",
            "extra": "iterations: 5863\ncpu: 118745.84683609194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38359.84631440013,
            "unit": "ns/iter",
            "extra": "iterations: 18206\ncpu: 38358.50269142031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 185859.2192584678,
            "unit": "ns/iter",
            "extra": "iterations: 3749\ncpu: 185855.88156841672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 152767.27357873827,
            "unit": "ns/iter",
            "extra": "iterations: 4591\ncpu: 152768.22043127913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 152186.11091777254,
            "unit": "ns/iter",
            "extra": "iterations: 4598\ncpu: 152178.57764245343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 153337.95082681734,
            "unit": "ns/iter",
            "extra": "iterations: 4596\ncpu: 153334.05134899865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 259627.07044865531,
            "unit": "ns/iter",
            "extra": "iterations: 2697\ncpu: 259610.49314052696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1147113.7600618503,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1147104.0247678016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 902749.2286995441,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 902721.5246636609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 900445.1819354502,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 900424.7741935498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 899907.0089974054,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 899899.4858611891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 577391.9859966314,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 577349.5057660589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 891431.4305732249,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 891423.3121019171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 38669.96081893636,
            "unit": "ns/iter",
            "extra": "iterations: 18121\ncpu: 38667.65079189926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 187898.39667651654,
            "unit": "ns/iter",
            "extra": "iterations: 3731\ncpu: 187895.55079067475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 152475.68952754114,
            "unit": "ns/iter",
            "extra": "iterations: 4593\ncpu: 152467.7552797738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 150919.66178055355,
            "unit": "ns/iter",
            "extra": "iterations: 4639\ncpu: 150918.15046346374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 151350.83767927348,
            "unit": "ns/iter",
            "extra": "iterations: 4602\ncpu: 151351.71664493688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 257928.76115001497,
            "unit": "ns/iter",
            "extra": "iterations: 2713\ncpu: 257921.34168816748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1070196.2743903468,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1070187.0426829157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 896463.040868506,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 896401.5325670529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 893051.2531806399,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 893042.7480915962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 883660.8219696998,
            "unit": "ns/iter",
            "extra": "iterations: 792\ncpu: 883640.5303030275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 572654.1225329048,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 572642.105263164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 883448.4634761534,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 883362.8463476219 ns\nthreads: 1"
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
        "date": 1702418615498,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15256.416471985875,
            "unit": "ns/iter",
            "extra": "iterations: 48798\ncpu: 15255.451043075536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 119394.92453095861,
            "unit": "ns/iter",
            "extra": "iterations: 7089\ncpu: 119388.066017774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 224655.9237134854,
            "unit": "ns/iter",
            "extra": "iterations: 3867\ncpu: 224647.6338246703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 328606.7820464037,
            "unit": "ns/iter",
            "extra": "iterations: 2629\ncpu: 328587.21947508544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 433518.4559637363,
            "unit": "ns/iter",
            "extra": "iterations: 1987\ncpu: 433503.4222445899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 536988.9584882755,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 536965.0557620821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 516692.31500000024,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516669.0999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 599902.830000019,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 599880.5000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 683960.7164948509,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 683953.4609720174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11701.00156792033,
            "unit": "ns/iter",
            "extra": "iterations: 59952\ncpu: 11700.652188417418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9697.179881574204,
            "unit": "ns/iter",
            "extra": "iterations: 71775\ncpu: 9697.063044235456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9745.901522020622,
            "unit": "ns/iter",
            "extra": "iterations: 71681\ncpu: 9745.81827820484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9756.170149836504,
            "unit": "ns/iter",
            "extra": "iterations: 71678\ncpu: 9756.12740310836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15889.92993616063,
            "unit": "ns/iter",
            "extra": "iterations: 44017\ncpu: 15889.75395869775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56453.144390579684,
            "unit": "ns/iter",
            "extra": "iterations: 14440\ncpu: 56451.60664819947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 247424.4685598451,
            "unit": "ns/iter",
            "extra": "iterations: 3451\ncpu: 247420.89249492873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 195944.34569323392,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 195939.9355135879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 196486.68206079878,
            "unit": "ns/iter",
            "extra": "iterations: 4309\ncpu: 196484.42794151834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 194605.17165031668,
            "unit": "ns/iter",
            "extra": "iterations: 4381\ncpu: 194592.12508559722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 464183.95094931894,
            "unit": "ns/iter",
            "extra": "iterations: 1896\ncpu: 464158.7552742611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3780831.7428573216,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3780683.265306124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3064415.6085527567,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3064271.3815789423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3070171.072368423,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3070024.0131578944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3063117.85808584,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3062984.8184818467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1765504.645714351,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1765450.666666671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2974146.7266880004,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2974021.5434083645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11346971.975308126,
            "unit": "ns/iter",
            "extra": "iterations: 81\ncpu: 11346522.222222213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5145845.959999633,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5145859.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14565202.315067885,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14565123.287671242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53781.26729999622,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53780.06000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 284615.35292186803,
            "unit": "ns/iter",
            "extra": "iterations: 3046\ncpu: 284435.5548260014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 223538.5726271393,
            "unit": "ns/iter",
            "extra": "iterations: 3814\ncpu: 223528.23807026786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 222929.10800744352,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 222929.98137802596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 217896.71516868644,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 217891.06361060904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 471687.8637855368,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 471673.19474836194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3847123.5041320818,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3847002.4793388387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3115107.9799332954,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3114925.0836120397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3112737.3411369645,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3112597.9933110517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3092773.5133335926,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3092644.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1799519.3223300395,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1799464.4660194085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3006217.2944984287,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3006103.236245946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11549883.311827658,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11549108.602150545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6627924.328570804,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 6627837.857142842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53955.340937481735,
            "unit": "ns/iter",
            "extra": "iterations: 15211\ncpu: 53954.5657747683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 244708.0593268461,
            "unit": "ns/iter",
            "extra": "iterations: 3506\ncpu: 244702.25328009133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 193551.21183379815,
            "unit": "ns/iter",
            "extra": "iterations: 4428\ncpu: 193542.88617886163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 193485.9069082437,
            "unit": "ns/iter",
            "extra": "iterations: 4415\ncpu: 193480.13590034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 191987.2819304079,
            "unit": "ns/iter",
            "extra": "iterations: 4455\ncpu: 191984.13019079744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 444094.9135549979,
            "unit": "ns/iter",
            "extra": "iterations: 1955\ncpu: 444084.50127877196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3809626.163934272,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3809540.983606548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3084871.1622516084,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3084710.9271523175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3093704.5761590786,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3093541.059602645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3090835.438538412,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3090700.996677741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1762729.1571969725,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1762649.8106060587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2993892.9137381325,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2993641.214057499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5716.097124005348,
            "unit": "ns/iter",
            "extra": "iterations: 122462\ncpu: 5715.728144240651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32159.41285583464,
            "unit": "ns/iter",
            "extra": "iterations: 21780\ncpu: 32158.191000918323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25958.049390020024,
            "unit": "ns/iter",
            "extra": "iterations: 27050\ncpu: 25956.129390018243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 24637.282423686014,
            "unit": "ns/iter",
            "extra": "iterations: 28436\ncpu: 24636.04234069509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21134.739202659475,
            "unit": "ns/iter",
            "extra": "iterations: 33110\ncpu: 21132.95379039563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 125402.55903398561,
            "unit": "ns/iter",
            "extra": "iterations: 5590\ncpu: 125394.34704830062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 254056.82316630398,
            "unit": "ns/iter",
            "extra": "iterations: 2754\ncpu: 254044.08133623828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 64579.73423797847,
            "unit": "ns/iter",
            "extra": "iterations: 10833\ncpu: 64576.32234837996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 64861.93456640566,
            "unit": "ns/iter",
            "extra": "iterations: 10759\ncpu: 64861.27892926788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 64691.91557240497,
            "unit": "ns/iter",
            "extra": "iterations: 10814\ncpu: 64688.0987608656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 128134.59249770774,
            "unit": "ns/iter",
            "extra": "iterations: 5465\ncpu: 128127.86825251633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 121218.95858602498,
            "unit": "ns/iter",
            "extra": "iterations: 5771\ncpu: 121211.08993241974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39014.52061741016,
            "unit": "ns/iter",
            "extra": "iterations: 17946\ncpu: 39012.20884876829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 191360.06712140897,
            "unit": "ns/iter",
            "extra": "iterations: 3665\ncpu: 191351.84174625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 154715.03008851147,
            "unit": "ns/iter",
            "extra": "iterations: 4520\ncpu: 154706.79203539903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 153468.29350935045,
            "unit": "ns/iter",
            "extra": "iterations: 4545\ncpu: 153458.7458745896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 154617.7516674031,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 154611.96087149568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 264357.4973584914,
            "unit": "ns/iter",
            "extra": "iterations: 2650\ncpu: 264352.33962263924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1106415.4691943356,
            "unit": "ns/iter",
            "extra": "iterations: 633\ncpu: 1106406.4770932042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 927420.1609497622,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 927388.2585751989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 925096.4219576857,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 925044.3121693237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 914843.7316754081,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 914799.7382198839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 591153.0278716078,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 591148.3108108118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 909096.2561448875,
            "unit": "ns/iter",
            "extra": "iterations: 773\ncpu: 909080.4657179873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39129.479984301885,
            "unit": "ns/iter",
            "extra": "iterations: 17836\ncpu: 39129.61986992588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 187625.91362662244,
            "unit": "ns/iter",
            "extra": "iterations: 3728\ncpu: 187620.68133046955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 155037.65921666127,
            "unit": "ns/iter",
            "extra": "iterations: 4519\ncpu: 155030.0508962154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 153236.5609969525,
            "unit": "ns/iter",
            "extra": "iterations: 4574\ncpu: 153225.6668124169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 154592.97684164258,
            "unit": "ns/iter",
            "extra": "iterations: 4534\ncpu: 154585.42126157862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 260465.02415458174,
            "unit": "ns/iter",
            "extra": "iterations: 2691\ncpu: 260447.97473058567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1088542.968895781,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1088495.3343701295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 912675.1586476027,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 912667.3602080493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 910254.7379399418,
            "unit": "ns/iter",
            "extra": "iterations: 767\ncpu: 910242.2425032529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 911736.59346412,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 911705.4901960711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 583462.9082569181,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 583426.6889074295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 902567.4103226734,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 902522.4516129114 ns\nthreads: 1"
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
        "date": 1702479817628,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14200.823491279001,
            "unit": "ns/iter",
            "extra": "iterations: 49363\ncpu: 14199.96961286794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 116706.6067400288,
            "unit": "ns/iter",
            "extra": "iterations: 7270\ncpu: 116703.21870701513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 217377.18040591295,
            "unit": "ns/iter",
            "extra": "iterations: 3991\ncpu: 217377.22375344526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 319193.08946396306,
            "unit": "ns/iter",
            "extra": "iterations: 2705\ncpu: 319192.68022181164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 423244.80688985507,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 423225.5701115962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 526540.5162650627,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 526533.0120481928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 503890.37399997964,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503890.60000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 583097.4290000199,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583089.1999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 668649.0705543765,
            "unit": "ns/iter",
            "extra": "iterations: 1389\ncpu: 668627.5737940958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11517.196946011503,
            "unit": "ns/iter",
            "extra": "iterations: 60773\ncpu: 11517.091471541617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9665.732860243084,
            "unit": "ns/iter",
            "extra": "iterations: 68204\ncpu: 9665.525482376403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9705.849526394388,
            "unit": "ns/iter",
            "extra": "iterations: 72212\ncpu: 9705.723425469429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9646.518276350054,
            "unit": "ns/iter",
            "extra": "iterations: 72799\ncpu: 9646.322064863527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15873.740893626073,
            "unit": "ns/iter",
            "extra": "iterations: 44090\ncpu: 15873.731004762976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56603.208500618224,
            "unit": "ns/iter",
            "extra": "iterations: 14446\ncpu: 56602.644330610485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 245347.69299252194,
            "unit": "ns/iter",
            "extra": "iterations: 3482\ncpu: 245344.91671453184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 196747.19496114852,
            "unit": "ns/iter",
            "extra": "iterations: 4247\ncpu: 196746.90369672712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 195597.37520505922,
            "unit": "ns/iter",
            "extra": "iterations: 4267\ncpu: 195597.11741270206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 192853.42148197873,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 192851.52957171967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 467790.42743642523,
            "unit": "ns/iter",
            "extra": "iterations: 1888\ncpu: 467761.7055084743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3708334.248000028,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3708174.400000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2985592.7845660388,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2985407.7170417923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2992204.797427806,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2992007.395498388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2983161.6410255707,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2983090.3846153854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1701769.530386728,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1701715.4696132562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2896833.8718751594,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2896630.3125000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 10891613.40816334,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 10890932.653061202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6523465.566433229,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6522639.860139873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14056371.473684162,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 14056047.368421067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53531.83529999797,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53528.17999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 277918.88022011647,
            "unit": "ns/iter",
            "extra": "iterations: 3089\ncpu: 277903.33441243076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 222710.4109375174,
            "unit": "ns/iter",
            "extra": "iterations: 3840\ncpu: 222699.8958333337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 223804.4959476967,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 223790.32679738553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 219047.89575880702,
            "unit": "ns/iter",
            "extra": "iterations: 3914\ncpu: 219040.62340316887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 475323.8676551082,
            "unit": "ns/iter",
            "extra": "iterations: 1821\ncpu: 475323.44865458494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3773324.2642277246,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3773286.9918699358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3018505.7564932625,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3018500.3246753346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3102729.403908731,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3102688.9250814337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3007112.2025721935,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3007108.038585202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1722879.4359924635,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1722868.4601113219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2931883.772870382,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2931824.605678235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11141217.84375044,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11141019.79166667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6408739.620689693,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6408351.724137947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54206.582789318025,
            "unit": "ns/iter",
            "extra": "iterations: 15165\ncpu: 54203.343224530174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 244113.04944584024,
            "unit": "ns/iter",
            "extra": "iterations: 3519\ncpu: 244098.6643932948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 194164.8939256516,
            "unit": "ns/iter",
            "extra": "iterations: 4412\ncpu: 194156.84496826824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 193286.99273884046,
            "unit": "ns/iter",
            "extra": "iterations: 4407\ncpu: 193273.859768549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 189787.35222223503,
            "unit": "ns/iter",
            "extra": "iterations: 4500\ncpu: 189776.35555555613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 446761.83452865796,
            "unit": "ns/iter",
            "extra": "iterations: 1952\ncpu: 446738.6782786875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3741228.2720001712,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3741001.9999999804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2992498.0128204958,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2992368.269230766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 2996849.6378205307,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2996711.538461551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 2984457.8722042986,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2984300.9584664633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1698886.2025547768,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1698807.664233574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2904503.3500000983,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2904311.8749999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5754.895304156304,
            "unit": "ns/iter",
            "extra": "iterations: 121533\ncpu: 5754.456814198606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32958.77696992633,
            "unit": "ns/iter",
            "extra": "iterations: 21181\ncpu: 32956.05967612471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27290.405151218623,
            "unit": "ns/iter",
            "extra": "iterations: 25625\ncpu: 27288.87804878052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27335.888901937902,
            "unit": "ns/iter",
            "extra": "iterations: 25545\ncpu: 27333.14542963382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20912.355548232565,
            "unit": "ns/iter",
            "extra": "iterations: 33371\ncpu: 20910.928650624945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 127364.29194690175,
            "unit": "ns/iter",
            "extra": "iterations: 5501\ncpu: 127354.4628249412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 248274.79518074225,
            "unit": "ns/iter",
            "extra": "iterations: 2822\ncpu: 248262.43798724213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62886.85592307064,
            "unit": "ns/iter",
            "extra": "iterations: 11126\ncpu: 62886.07765594071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 63085.61146095027,
            "unit": "ns/iter",
            "extra": "iterations: 11116\ncpu: 63080.37063691995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 62874.34558031151,
            "unit": "ns/iter",
            "extra": "iterations: 11132\ncpu: 62870.939633488335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 124565.44741086107,
            "unit": "ns/iter",
            "extra": "iterations: 5581\ncpu: 124554.32718150933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 105726.80361717033,
            "unit": "ns/iter",
            "extra": "iterations: 6635\ncpu: 105719.54785229827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38187.00939839365,
            "unit": "ns/iter",
            "extra": "iterations: 18301\ncpu: 38183.48177695249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 185357.0854205094,
            "unit": "ns/iter",
            "extra": "iterations: 3793\ncpu: 185345.90034273732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 151680.388612237,
            "unit": "ns/iter",
            "extra": "iterations: 4619\ncpu: 151680.4286642127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 151124.7823173298,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 151122.91396454716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 150833.95482899406,
            "unit": "ns/iter",
            "extra": "iterations: 4649\ncpu: 150834.02882340451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 260502.89166666594,
            "unit": "ns/iter",
            "extra": "iterations: 2640\ncpu: 260503.06818181858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1082578.0696593842,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1082532.8173374587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 899857.6113255455,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 899776.0617760522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 894480.0179028265,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 894433.6317135555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 884049.7206067864,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 884049.4310998766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 566400.2835218487,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 566400.8885298874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 881424.0552763252,
            "unit": "ns/iter",
            "extra": "iterations: 796\ncpu: 881424.4974874348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 38566.817491748996,
            "unit": "ns/iter",
            "extra": "iterations: 18180\ncpu: 38566.46864686495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 184702.08513440494,
            "unit": "ns/iter",
            "extra": "iterations: 3794\ncpu: 184702.02952029617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 151418.9928771979,
            "unit": "ns/iter",
            "extra": "iterations: 4633\ncpu: 151416.87891215362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 150456.86419486828,
            "unit": "ns/iter",
            "extra": "iterations: 4639\ncpu: 150456.714809227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 151085.92151787534,
            "unit": "ns/iter",
            "extra": "iterations: 4638\ncpu: 151085.89909443964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 257044.67327459692,
            "unit": "ns/iter",
            "extra": "iterations: 2724\ncpu: 257044.60352423182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1060182.1471926994,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1060154.0212443215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 883903.625472909,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 883863.6822194201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 883629.0454545612,
            "unit": "ns/iter",
            "extra": "iterations: 792\ncpu: 883578.7878787902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 874631.0787499568,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 874554.7499999873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 566139.6545601556,
            "unit": "ns/iter",
            "extra": "iterations: 1239\ncpu: 566106.1339790096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 869864.5862499177,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 869853.2499999878 ns\nthreads: 1"
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
        "date": 1702488824496,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14406.145794507585,
            "unit": "ns/iter",
            "extra": "iterations: 48294\ncpu: 14405.315360086139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 118529.04056338406,
            "unit": "ns/iter",
            "extra": "iterations: 7100\ncpu: 118525.84507042253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 222522.05521313762,
            "unit": "ns/iter",
            "extra": "iterations: 3894\ncpu: 222517.41140215716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 328772.06153264985,
            "unit": "ns/iter",
            "extra": "iterations: 2649\ncpu: 328764.32616081537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 429563.98614543106,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 429542.00890648196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 545164.2850031453,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 545158.8052271313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 512188.4779999846,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512171.79999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 593720.4809999912,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 593703.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 678926.9963396963,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 678891.2884333818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11477.875913367672,
            "unit": "ns/iter",
            "extra": "iterations: 60901\ncpu: 11477.598068997238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9629.29588773181,
            "unit": "ns/iter",
            "extra": "iterations: 72612\ncpu: 9629.210047925955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9627.780002200983,
            "unit": "ns/iter",
            "extra": "iterations: 72728\ncpu: 9627.384226157723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9644.29794417152,
            "unit": "ns/iter",
            "extra": "iterations: 72866\ncpu: 9644.039744187954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15713.217243780606,
            "unit": "ns/iter",
            "extra": "iterations: 44503\ncpu: 15712.754196346325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57637.92819935276,
            "unit": "ns/iter",
            "extra": "iterations: 14206\ncpu: 57637.427847388426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 257726.7327923217,
            "unit": "ns/iter",
            "extra": "iterations: 3327\ncpu: 257715.11872557903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 205594.7571770294,
            "unit": "ns/iter",
            "extra": "iterations: 4180\ncpu: 205589.04306220086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 203309.13986181663,
            "unit": "ns/iter",
            "extra": "iterations: 4197\ncpu: 203299.9761734579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 201039.36079077094,
            "unit": "ns/iter",
            "extra": "iterations: 4249\ncpu: 201037.13815015298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 473963.1025917516,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 473947.24622030364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3767257.06097598,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3767086.9918699227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3051719.118421135,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3051660.8552631526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3061238.3486843137,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3061096.0526315714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3025742.2671011463,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3025703.2573289867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1741703.1016950833,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1741602.8248587574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2957513.0031948914,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2957442.492012783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11184816.499999546,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11184312.499999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5038452.759999927,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5038446.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14498169.135134883,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14497459.459459493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54222.6186999983,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54219.51999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 286245.74376038415,
            "unit": "ns/iter",
            "extra": "iterations: 3005\ncpu: 286227.18801996735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 229676.5798499683,
            "unit": "ns/iter",
            "extra": "iterations: 3732\ncpu: 229668.24758842518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 232737.633495152,
            "unit": "ns/iter",
            "extra": "iterations: 3708\ncpu: 232727.56202804737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 226765.32551318133,
            "unit": "ns/iter",
            "extra": "iterations: 3751\ncpu: 226752.33271127602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 478549.97788833437,
            "unit": "ns/iter",
            "extra": "iterations: 1809\ncpu: 478525.1520176917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3827842.7800828298,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3827564.3153526727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3089448.823920386,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3089307.641196019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3086463.089404098,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3086318.211920514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3060139.654605253,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3059943.750000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1768008.5992218514,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1767964.0077821086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2984670.816720176,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2984584.5659164004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11474326.90322603,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11473949.462365603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5125439.619999952,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5125369.0000000065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55033.87797338561,
            "unit": "ns/iter",
            "extra": "iterations: 14882\ncpu: 55031.27939793042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 255408.5960047923,
            "unit": "ns/iter",
            "extra": "iterations: 3354\ncpu: 255396.39236732307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 202514.3089104104,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 202503.00165445666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 201727.7898704358,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 201718.51590105938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 199254.41353560597,
            "unit": "ns/iter",
            "extra": "iterations: 4285\ncpu: 199243.75729288274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 455042.20429542055,
            "unit": "ns/iter",
            "extra": "iterations: 1909\ncpu: 455016.6579360929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3779759.4308944377,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3779587.398374003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3049018.656862747,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3048877.450980402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3051620.648026256,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3051416.4473684225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3033956.237784786,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3033744.9511400703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1734712.4562382703,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1734572.9981377968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2951105.490506253,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2951035.1265822835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5657.197656710131,
            "unit": "ns/iter",
            "extra": "iterations: 124099\ncpu: 5656.960974705673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33441.26660951411,
            "unit": "ns/iter",
            "extra": "iterations: 20997\ncpu: 33440.834404915084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26975.24157692372,
            "unit": "ns/iter",
            "extra": "iterations: 26000\ncpu: 26973.842307692088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26699.079148511366,
            "unit": "ns/iter",
            "extra": "iterations: 26166\ncpu: 26698.78468241216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21327.02098712729,
            "unit": "ns/iter",
            "extra": "iterations: 32782\ncpu: 21325.751937038513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 127586.94403937324,
            "unit": "ns/iter",
            "extra": "iterations: 5486\ncpu: 127585.28982865611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 254293.67412033785,
            "unit": "ns/iter",
            "extra": "iterations: 3041\ncpu: 254277.70470239958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 64075.714599347826,
            "unit": "ns/iter",
            "extra": "iterations: 10932\ncpu: 64075.68605927571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 64641.83579218226,
            "unit": "ns/iter",
            "extra": "iterations: 10913\ncpu: 64632.02602400829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 63929.27941848865,
            "unit": "ns/iter",
            "extra": "iterations: 10937\ncpu: 63925.619456889995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 126563.53293522,
            "unit": "ns/iter",
            "extra": "iterations: 5526\ncpu: 126559.3919652547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 119684.5971943803,
            "unit": "ns/iter",
            "extra": "iterations: 6487\ncpu: 119674.87282256897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39331.948053403976,
            "unit": "ns/iter",
            "extra": "iterations: 17826\ncpu: 39330.1077078425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 187817.051178987,
            "unit": "ns/iter",
            "extra": "iterations: 3732\ncpu: 187804.23365487787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 153328.44820804524,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 153316.34615384575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 154672.4032757972,
            "unit": "ns/iter",
            "extra": "iterations: 4518\ncpu: 154663.2802124839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 153587.30266931246,
            "unit": "ns/iter",
            "extra": "iterations: 4533\ncpu: 153583.6532097963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 260415.16324242068,
            "unit": "ns/iter",
            "extra": "iterations: 2677\ncpu: 260407.02278669793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1084365.3199380967,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1084318.083462132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 911591.868660481,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 911554.7464239215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 903859.6365979622,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 903781.185567017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 902254.294723215,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 902196.9111969166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 584612.6629787366,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 584585.5319148904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 892281.643311991,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 892254.2675159101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39655.95246449156,
            "unit": "ns/iter",
            "extra": "iterations: 17671\ncpu: 39654.78467545695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 187452.89893048877,
            "unit": "ns/iter",
            "extra": "iterations: 3740\ncpu: 187447.19251336978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 153700.13886445042,
            "unit": "ns/iter",
            "extra": "iterations: 4544\ncpu: 153694.850352115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 153180.65301205532,
            "unit": "ns/iter",
            "extra": "iterations: 4565\ncpu: 153172.31106242942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 154318.91456181923,
            "unit": "ns/iter",
            "extra": "iterations: 4553\ncpu: 154311.70656709804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 257129.38018349372,
            "unit": "ns/iter",
            "extra": "iterations: 2725\ncpu: 257120.1100917437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1074647.8955452864,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1074622.5806451556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 901527.6360102943,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 901487.1761658156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 897963.3564101674,
            "unit": "ns/iter",
            "extra": "iterations: 780\ncpu: 897932.0512820594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 894419.7535121365,
            "unit": "ns/iter",
            "extra": "iterations: 783\ncpu: 894396.2962962874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 578475.1494632345,
            "unit": "ns/iter",
            "extra": "iterations: 1211\ncpu: 578445.9950454088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 888292.6974683581,
            "unit": "ns/iter",
            "extra": "iterations: 790\ncpu: 888280.8860759516 ns\nthreads: 1"
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
        "date": 1702491077973,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14566.870737458425,
            "unit": "ns/iter",
            "extra": "iterations: 47067\ncpu: 14566.626298680607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 117320.2096953014,
            "unit": "ns/iter",
            "extra": "iterations: 7220\ncpu: 117314.76454293629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 222578.57052097787,
            "unit": "ns/iter",
            "extra": "iterations: 3935\ncpu: 222570.52096569244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 323419.6980142253,
            "unit": "ns/iter",
            "extra": "iterations: 2669\ncpu: 323406.8939677783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 427296.2929590961,
            "unit": "ns/iter",
            "extra": "iterations: 2031\ncpu: 427275.3323485972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 527932.1717417404,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 527924.0560292329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 508362.1689999518,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508322.50000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 590604.2949999345,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590578.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 672259.3677324911,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 672243.6773255819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11484.032327409,
            "unit": "ns/iter",
            "extra": "iterations: 60939\ncpu: 11483.614762303283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9610.454743744425,
            "unit": "ns/iter",
            "extra": "iterations: 72896\ncpu: 9610.173397717299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9631.673893604011,
            "unit": "ns/iter",
            "extra": "iterations: 72691\ncpu: 9631.360140870267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9615.38212017704,
            "unit": "ns/iter",
            "extra": "iterations: 72909\ncpu: 9615.127076218301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15851.008384559465,
            "unit": "ns/iter",
            "extra": "iterations: 44248\ncpu: 15850.926595552352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56799.75899604613,
            "unit": "ns/iter",
            "extra": "iterations: 14423\ncpu: 56798.75199334402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 247437.42146369797,
            "unit": "ns/iter",
            "extra": "iterations: 3457\ncpu: 247425.16632918708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 197092.80788744267,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 197084.4787822876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 194837.4776357929,
            "unit": "ns/iter",
            "extra": "iterations: 4382\ncpu: 194820.67549064418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 194888.2490791977,
            "unit": "ns/iter",
            "extra": "iterations: 4344\ncpu: 194883.44843462258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 466647.02273927006,
            "unit": "ns/iter",
            "extra": "iterations: 1891\ncpu: 466626.4410364891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3681609.1190475603,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3681286.5079365005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3004514.369775153,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3004414.147909963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3009092.216828389,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3008891.585760522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3006897.019354842,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3006755.8064516108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1745434.9078946908,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1745371.9924812068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2908475.3364781043,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2908398.1132075423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11180055.177083166,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11179396.874999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6596915.9219853375,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6596715.60283686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14194125.146665707,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14193808.000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53408.24779999594,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53406.640000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 277218.7961290324,
            "unit": "ns/iter",
            "extra": "iterations: 3100\ncpu: 277208.129032258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 222361.29943064545,
            "unit": "ns/iter",
            "extra": "iterations: 3864\ncpu: 222354.4513457545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 220709.08080289263,
            "unit": "ns/iter",
            "extra": "iterations: 3886\ncpu: 220705.37828100912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 217702.8287828742,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 217695.84077570794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 473367.2326975721,
            "unit": "ns/iter",
            "extra": "iterations: 1835\ncpu: 473351.1716621258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3752492.028225667,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3752387.0967742107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3038873.159609054,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3038857.65472312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3051132.3672130187,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3050962.62295082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3040663.0457519195,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3040570.5882352907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1760658.8204158223,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1760608.317580336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2953977.482539697,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2953853.333333328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11429876.244681345,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11429171.276595697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6645519.878571804,
            "unit": "ns/iter",
            "extra": "iterations: 140\ncpu: 6645325.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54220.39562993387,
            "unit": "ns/iter",
            "extra": "iterations: 15057\ncpu: 54218.32370326101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 242807.41891508357,
            "unit": "ns/iter",
            "extra": "iterations: 3521\ncpu: 242795.99545583627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 193864.96740607463,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 193858.96333182504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 193801.46990951127,
            "unit": "ns/iter",
            "extra": "iterations: 4420\ncpu: 193795.15837104115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 192149.0658749757,
            "unit": "ns/iter",
            "extra": "iterations: 4463\ncpu: 192140.77974456677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 446948.99999998393,
            "unit": "ns/iter",
            "extra": "iterations: 1954\ncpu: 446943.80757420836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3698140.3928573327,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3697939.68253969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 2983246.856229815,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2983148.242811502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3018228.980582479,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3018050.4854368996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3004601.7161291805,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3004492.258064524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1733844.6778397746,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1733775.232774674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2907817.499999865,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2907696.5625000065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5762.618282966135,
            "unit": "ns/iter",
            "extra": "iterations: 121873\ncpu: 5762.478974013914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32627.59689742096,
            "unit": "ns/iter",
            "extra": "iterations: 21466\ncpu: 32627.03344824375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26733.749188281494,
            "unit": "ns/iter",
            "extra": "iterations: 26179\ncpu: 26733.595630085227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26305.360850648685,
            "unit": "ns/iter",
            "extra": "iterations: 26662\ncpu: 26304.91711049435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20722.956998465397,
            "unit": "ns/iter",
            "extra": "iterations: 33836\ncpu: 20722.419907790616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 126491.48651582756,
            "unit": "ns/iter",
            "extra": "iterations: 5525\ncpu: 126485.33936651531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 236187.12284846278,
            "unit": "ns/iter",
            "extra": "iterations: 2963\ncpu: 236178.67026661974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 63378.8333635352,
            "unit": "ns/iter",
            "extra": "iterations: 11036\ncpu: 63375.317143892746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 63285.767286509,
            "unit": "ns/iter",
            "extra": "iterations: 11078\ncpu: 63283.54396100295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 63290.687731664526,
            "unit": "ns/iter",
            "extra": "iterations: 11061\ncpu: 63290.28116806727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 126391.86234892179,
            "unit": "ns/iter",
            "extra": "iterations: 5543\ncpu: 126389.77088219483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 118423.76808654632,
            "unit": "ns/iter",
            "extra": "iterations: 5916\ncpu: 118420.3008789726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38852.489874047176,
            "unit": "ns/iter",
            "extra": "iterations: 18023\ncpu: 38850.2801975258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 184567.6624506171,
            "unit": "ns/iter",
            "extra": "iterations: 3795\ncpu: 184556.86429512565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 151810.95386614642,
            "unit": "ns/iter",
            "extra": "iterations: 4617\ncpu: 151803.29218106813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 151807.8694239979,
            "unit": "ns/iter",
            "extra": "iterations: 4618\ncpu: 151803.52966652426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 151396.4150495848,
            "unit": "ns/iter",
            "extra": "iterations: 4638\ncpu: 151389.21949115884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 260100.8757879335,
            "unit": "ns/iter",
            "extra": "iterations: 2697\ncpu: 260082.72154245674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1076577.5291410196,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1076526.5337423373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 898024.4910025808,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 897998.3290488349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 898070.7628205518,
            "unit": "ns/iter",
            "extra": "iterations: 780\ncpu: 898038.9743589748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 889825.9897437246,
            "unit": "ns/iter",
            "extra": "iterations: 780\ncpu: 889782.8205128268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 572178.8190709373,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 572137.3268133618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 886158.4090908823,
            "unit": "ns/iter",
            "extra": "iterations: 792\ncpu: 886153.1565656437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39097.5315275088,
            "unit": "ns/iter",
            "extra": "iterations: 17905\ncpu: 39096.09606255238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 185670.49206348846,
            "unit": "ns/iter",
            "extra": "iterations: 3780\ncpu: 185661.5608465589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 151603.23540899184,
            "unit": "ns/iter",
            "extra": "iterations: 4609\ncpu: 151599.73963983587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 152177.26866320922,
            "unit": "ns/iter",
            "extra": "iterations: 4608\ncpu: 152172.35243055678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 151714.80043384488,
            "unit": "ns/iter",
            "extra": "iterations: 4610\ncpu: 151708.4164858999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 258461.09151291373,
            "unit": "ns/iter",
            "extra": "iterations: 2710\ncpu: 258448.4870848727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1067851.61042939,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1067803.9877300628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 891226.6513995548,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 891165.394402039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 894670.015345274,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 894637.0843989654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 886845.4930113644,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 886830.241423115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 569160.0048820621,
            "unit": "ns/iter",
            "extra": "iterations: 1229\ncpu: 569142.9617575192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 879835.6150943373,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 879797.8616352133 ns\nthreads: 1"
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
        "date": 1705574178211,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14559.328916458046,
            "unit": "ns/iter",
            "extra": "iterations: 48526\ncpu: 14558.51090137246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 119912.65283443574,
            "unit": "ns/iter",
            "extra": "iterations: 7109\ncpu: 119908.862005908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 224529.4253615673,
            "unit": "ns/iter",
            "extra": "iterations: 3872\ncpu: 224529.13223140495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 328076.37105959613,
            "unit": "ns/iter",
            "extra": "iterations: 2633\ncpu: 328063.53968856815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 431765.54179104976,
            "unit": "ns/iter",
            "extra": "iterations: 2010\ncpu: 431750.895522388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 537324.8072884048,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 537297.6528721432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 516230.567999969,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516210.5999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 596904.456758997,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 596863.7279596978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 684527.8797935296,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 684521.2389380535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11807.001857428299,
            "unit": "ns/iter",
            "extra": "iterations: 59760\ncpu: 11806.68507362786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9690.575880872426,
            "unit": "ns/iter",
            "extra": "iterations: 72258\ncpu: 9690.580973733015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9750.314409081939,
            "unit": "ns/iter",
            "extra": "iterations: 71795\ncpu: 9749.36834041369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9702.231048275531,
            "unit": "ns/iter",
            "extra": "iterations: 72500\ncpu: 9701.154482758644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15975.783762169425,
            "unit": "ns/iter",
            "extra": "iterations: 43762\ncpu: 15974.925734655635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57418.27894257134,
            "unit": "ns/iter",
            "extra": "iterations: 14261\ncpu: 57412.5306780731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 247272.51374820294,
            "unit": "ns/iter",
            "extra": "iterations: 3455\ncpu: 247270.4196816209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 197247.74209919688,
            "unit": "ns/iter",
            "extra": "iterations: 4335\ncpu: 197238.22376009246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 198096.48603095504,
            "unit": "ns/iter",
            "extra": "iterations: 4331\ncpu: 198091.27222350557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 196517.90435387177,
            "unit": "ns/iter",
            "extra": "iterations: 4318\ncpu: 196500.39370078756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 471530.8156484469,
            "unit": "ns/iter",
            "extra": "iterations: 1866\ncpu: 471492.76527331176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3735649.700404991,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3735608.906882585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3014643.543974227,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3014445.602605856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3029333.503267929,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3029157.843137258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3021128.8474024427,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3020918.8311688323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1736472.1928838969,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1736457.8651685398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2938398.9493673733,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2938366.4556962047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11071249.69072179,
            "unit": "ns/iter",
            "extra": "iterations: 97\ncpu: 11070484.536082484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5010016.059999316,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5009887.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14385299.013512751,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14384971.621621616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53514.60059999908,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53511.49999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 281762.985050353,
            "unit": "ns/iter",
            "extra": "iterations: 3077\ncpu: 281754.436139097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 222340.0268929304,
            "unit": "ns/iter",
            "extra": "iterations: 3830\ncpu: 222324.62140992287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 222690.42222799145,
            "unit": "ns/iter",
            "extra": "iterations: 3851\ncpu: 222675.7725266153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 220493.66521293035,
            "unit": "ns/iter",
            "extra": "iterations: 3898\ncpu: 220476.65469471656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 480132.90354766115,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 480096.1197339229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3791438.2816325086,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3791367.75510205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3104937.062499708,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3104905.2631579046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3060922.434210505,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3060865.131578953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3069141.7326735626,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3069080.5280528083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1763620.589353707,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1763598.6692015312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2971895.247588352,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2971841.1575562684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11371567.840425774,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11371444.680851132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6559803.986014409,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6559720.979020993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54484.911220557544,
            "unit": "ns/iter",
            "extra": "iterations: 15026\ncpu: 54483.80806601876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 246130.45857144502,
            "unit": "ns/iter",
            "extra": "iterations: 3500\ncpu: 246127.85714285832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 194149.06609324695,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 194146.92168401953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 194095.15126812886,
            "unit": "ns/iter",
            "extra": "iterations: 4416\ncpu: 194092.9347826088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 192296.227036792,
            "unit": "ns/iter",
            "extra": "iterations: 4431\ncpu: 192289.95712028898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 450089.50232797494,
            "unit": "ns/iter",
            "extra": "iterations: 1933\ncpu: 450075.4785307808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3757266.088709435,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3757176.6129032304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3030049.230519521,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3029897.077922091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3028246.8084415644,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3028084.415584423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3023161.074675532,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3023128.246753241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1733873.34014873,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1733854.089219334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2941489.9936710624,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2941404.7468354465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5749.99312934552,
            "unit": "ns/iter",
            "extra": "iterations: 121968\ncpu: 5749.908172635467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32962.2486712765,
            "unit": "ns/iter",
            "extra": "iterations: 21261\ncpu: 32961.3705846387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27257.252186699057,
            "unit": "ns/iter",
            "extra": "iterations: 26524\ncpu: 27256.95219423909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27245.846630068758,
            "unit": "ns/iter",
            "extra": "iterations: 25683\ncpu: 27244.741657905986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21114.581757776134,
            "unit": "ns/iter",
            "extra": "iterations: 33110\ncpu: 21114.3461189972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 127029.88647866773,
            "unit": "ns/iter",
            "extra": "iterations: 5532\ncpu: 127027.60303687569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 251737.22266046275,
            "unit": "ns/iter",
            "extra": "iterations: 2789\ncpu: 251733.52456077246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 63909.67351035066,
            "unit": "ns/iter",
            "extra": "iterations: 10959\ncpu: 63908.17592846026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 63876.089559076056,
            "unit": "ns/iter",
            "extra": "iterations: 10909\ncpu: 63875.35979466447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 63802.544726546155,
            "unit": "ns/iter",
            "extra": "iterations: 10989\ncpu: 63801.829101828225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 126132.85381278502,
            "unit": "ns/iter",
            "extra": "iterations: 5534\ncpu: 126130.44813878072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 119146.3252170915,
            "unit": "ns/iter",
            "extra": "iterations: 5873\ncpu: 119144.98552698952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39504.09503081124,
            "unit": "ns/iter",
            "extra": "iterations: 17689\ncpu: 39502.77008310226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 188450.5850321667,
            "unit": "ns/iter",
            "extra": "iterations: 3728\ncpu: 188448.06866952532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 152679.10754797678,
            "unit": "ns/iter",
            "extra": "iterations: 4584\ncpu: 152676.94153577567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 153638.5862749593,
            "unit": "ns/iter",
            "extra": "iterations: 4561\ncpu: 153636.24205218165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 155120.9125804328,
            "unit": "ns/iter",
            "extra": "iterations: 4507\ncpu: 155114.93232749234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 266162.18081463606,
            "unit": "ns/iter",
            "extra": "iterations: 2627\ncpu: 266158.6220022827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1081511.4283512929,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1081478.4283513157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 903545.7432258726,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 903521.29032259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 908453.2256808584,
            "unit": "ns/iter",
            "extra": "iterations: 771\ncpu: 908439.9481193081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 900103.3217503261,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 900086.1003861018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 579098.3052109532,
            "unit": "ns/iter",
            "extra": "iterations: 1209\ncpu: 579091.3978494578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 892589.5114796787,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 892578.9540816391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39642.39666799006,
            "unit": "ns/iter",
            "extra": "iterations: 17647\ncpu: 39641.865472885205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 186318.34539647237,
            "unit": "ns/iter",
            "extra": "iterations: 3758\ncpu: 186316.04576902676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 152770.72001745395,
            "unit": "ns/iter",
            "extra": "iterations: 4586\ncpu: 152768.64369821237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 153736.83347959237,
            "unit": "ns/iter",
            "extra": "iterations: 4558\ncpu: 153734.66432645716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 154524.28536799867,
            "unit": "ns/iter",
            "extra": "iterations: 4538\ncpu: 154520.11899515084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 263979.1699395739,
            "unit": "ns/iter",
            "extra": "iterations: 2648\ncpu: 263966.35196374246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1077546.3717357018,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1077519.8156681864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 896144.9333333769,
            "unit": "ns/iter",
            "extra": "iterations: 780\ncpu: 896131.4102564098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 902904.0579896657,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 902890.9793814302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 895623.0473751763,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 895599.7439180525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 575469.9942576156,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 575462.1000820296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 886820.251908447,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 886802.4173027927 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705771886456,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14189.45497359794,
            "unit": "ns/iter",
            "extra": "iterations: 49049\ncpu: 14189.074191115007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 117141.426925748,
            "unit": "ns/iter",
            "extra": "iterations: 7205\ncpu: 117136.71061762664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 219582.1921906613,
            "unit": "ns/iter",
            "extra": "iterations: 3944\ncpu: 219577.8397565923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 324346.5158051432,
            "unit": "ns/iter",
            "extra": "iterations: 2689\ncpu: 324337.00260319834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 426987.99071809306,
            "unit": "ns/iter",
            "extra": "iterations: 2047\ncpu: 426973.22911577893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 527314.2677164803,
            "unit": "ns/iter",
            "extra": "iterations: 1651\ncpu: 527305.5118110236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 507275.5300000154,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507267.0000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 586692.2530000239,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586657.4 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 671296.4267053123,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 671285.2685050798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11538.878297969946,
            "unit": "ns/iter",
            "extra": "iterations: 61174\ncpu: 11538.573577009822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9515.46083522296,
            "unit": "ns/iter",
            "extra": "iterations: 73178\ncpu: 9515.357074530591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9571.691929834322,
            "unit": "ns/iter",
            "extra": "iterations: 73084\ncpu: 9571.594329812277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9566.998536611674,
            "unit": "ns/iter",
            "extra": "iterations: 73118\ncpu: 9566.74279931069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15702.36673994102,
            "unit": "ns/iter",
            "extra": "iterations: 44582\ncpu: 15702.287918891065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56823.32696582404,
            "unit": "ns/iter",
            "extra": "iterations: 14396\ncpu: 56822.17977215898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 245831.23249139177,
            "unit": "ns/iter",
            "extra": "iterations: 3484\ncpu: 245826.69345579817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 197649.2664359852,
            "unit": "ns/iter",
            "extra": "iterations: 4335\ncpu: 197643.78316032272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 197488.50890175553,
            "unit": "ns/iter",
            "extra": "iterations: 4325\ncpu: 197485.10982659017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195540.81822355706,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 195538.60454441138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 483581.8536985991,
            "unit": "ns/iter",
            "extra": "iterations: 1825\ncpu: 483574.4657534248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3717705.8519996535,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3717645.5999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3008882.620129973,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3008794.15584416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2994480.2218648065,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2994357.2347266935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3007860.2491906676,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3007685.436893209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1720826.2973977206,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1720764.1263940495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2914579.750788971,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2914410.725552054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11017428.02040801,
            "unit": "ns/iter",
            "extra": "iterations: 98\ncpu: 11016912.244897945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6626422.276595894,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6626171.631205671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14151335.039999442,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 14150538.666666675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53650.19070000017,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53649.44000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 278386.558508903,
            "unit": "ns/iter",
            "extra": "iterations: 3085\ncpu: 278373.3225283624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 222968.52063740054,
            "unit": "ns/iter",
            "extra": "iterations: 3828\ncpu: 222958.881922676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 221274.6350025771,
            "unit": "ns/iter",
            "extra": "iterations: 3874\ncpu: 221269.74703149236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 221178.9183620944,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 221168.7355137768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 492514.89142859227,
            "unit": "ns/iter",
            "extra": "iterations: 1750\ncpu: 492494.6857142832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3786039.4878047984,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3785851.219512193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3064015.266447559,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3063874.3421052583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3055202.406557194,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3055075.409836044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3040214.5114752874,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3040110.163934429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1747252.973782775,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1747178.464419475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2977089.2088607335,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2976969.9367088596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11304468.351062631,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11304027.659574488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6479433.209789989,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6479055.944055986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54926.01451785041,
            "unit": "ns/iter",
            "extra": "iterations: 15016\ncpu: 54925.546084176865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 245956.73037249024,
            "unit": "ns/iter",
            "extra": "iterations: 3490\ncpu: 245954.15472779277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 194171.24143446443,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 194169.1411603463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 193942.74535146423,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 193939.13832199588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 191806.87792265526,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 191803.14748201298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 463471.54404697404,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 463455.2589428736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3755194.0120964344,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3755064.1129032113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3032316.1396104856,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3032260.7142857118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3010101.410423524,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3010000.9771987097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3017490.3993507135,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3017410.0649350686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1722352.9575644315,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1722309.0405904104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2919005.6927899146,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2918921.3166144234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5705.286189255972,
            "unit": "ns/iter",
            "extra": "iterations: 124519\ncpu: 5705.130943872042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32675.92936872655,
            "unit": "ns/iter",
            "extra": "iterations: 21322\ncpu: 32674.978895038068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26405.01517057123,
            "unit": "ns/iter",
            "extra": "iterations: 26235\ncpu: 26404.10901467497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26060.020781163155,
            "unit": "ns/iter",
            "extra": "iterations: 26755\ncpu: 26059.170248551636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 20798.587416942,
            "unit": "ns/iter",
            "extra": "iterations: 33712\ncpu: 20797.94138585702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 129558.80096010808,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 129555.24372230556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 247749.67196482816,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 247743.72675008661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 62390.63078724114,
            "unit": "ns/iter",
            "extra": "iterations: 11102\ncpu: 62390.47919293823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 62119.78689979701,
            "unit": "ns/iter",
            "extra": "iterations: 11267\ncpu: 62116.94328570112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 62568.197857148436,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 62565.13392857092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 124166.192600471,
            "unit": "ns/iter",
            "extra": "iterations: 5649\ncpu: 124159.65657638469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 117710.08357105868,
            "unit": "ns/iter",
            "extra": "iterations: 5959\ncpu: 117704.88336969355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 38050.058056806825,
            "unit": "ns/iter",
            "extra": "iterations: 18413\ncpu: 38048.172486829935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 183462.76590730296,
            "unit": "ns/iter",
            "extra": "iterations: 3819\ncpu: 183456.11416601445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 150365.05048544853,
            "unit": "ns/iter",
            "extra": "iterations: 4635\ncpu: 150356.78532901988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 150588.3460133186,
            "unit": "ns/iter",
            "extra": "iterations: 4653\ncpu: 150583.10767247112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 151784.89293454264,
            "unit": "ns/iter",
            "extra": "iterations: 4614\ncpu: 151782.96488946615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 261198.13902345163,
            "unit": "ns/iter",
            "extra": "iterations: 2683\ncpu: 261184.7185985838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1067334.9314024549,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1067298.9329268183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 894770.9897958705,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 894702.8061224511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 897719.1358974907,
            "unit": "ns/iter",
            "extra": "iterations: 780\ncpu: 897670.1282051271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 896630.2888317966,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 896598.9730423634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 568809.3387490155,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 568783.4281072296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 883074.9482975831,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 883023.3291298867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 38539.713475720426,
            "unit": "ns/iter",
            "extra": "iterations: 18166\ncpu: 38538.34085654571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 184040.4613564462,
            "unit": "ns/iter",
            "extra": "iterations: 3804\ncpu: 184031.57202944206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 151509.6819558505,
            "unit": "ns/iter",
            "extra": "iterations: 4622\ncpu: 151497.641713545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 150612.7980253058,
            "unit": "ns/iter",
            "extra": "iterations: 4659\ncpu: 150604.55033269158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 151745.18431881978,
            "unit": "ns/iter",
            "extra": "iterations: 4617\ncpu: 151733.93978774126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 259249.198439228,
            "unit": "ns/iter",
            "extra": "iterations: 2691\ncpu: 259236.04607952462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1060665.1575757854,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1060629.6969696975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 889194.041931358,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 889155.5273189197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 886858.0088718829,
            "unit": "ns/iter",
            "extra": "iterations: 789\ncpu: 886827.3764258572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 884547.1656132102,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 884530.2149178328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 565888.4470492644,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 565881.2449474498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 876791.6097867109,
            "unit": "ns/iter",
            "extra": "iterations: 797\ncpu: 876780.1756587256 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705772318537,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14312.964290226922,
            "unit": "ns/iter",
            "extra": "iterations: 47494\ncpu: 14311.972038573293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 118439.07563025519,
            "unit": "ns/iter",
            "extra": "iterations: 7140\ncpu: 118431.24649859944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 222747.71707317053,
            "unit": "ns/iter",
            "extra": "iterations: 3895\ncpu: 222736.02053915276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 325212.12118930963,
            "unit": "ns/iter",
            "extra": "iterations: 2657\ncpu: 325201.3549115543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 428519.86024690047,
            "unit": "ns/iter",
            "extra": "iterations: 2025\ncpu: 428479.06172839494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 530993.0378973159,
            "unit": "ns/iter",
            "extra": "iterations: 1636\ncpu: 530951.8337408315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 511043.1580000068,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510976.40000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 600801.2849999886,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600765.1000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 679294.9788166749,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 679250.4747991232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11591.492414685723,
            "unit": "ns/iter",
            "extra": "iterations: 60248\ncpu: 11591.425441508427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9612.128077872121,
            "unit": "ns/iter",
            "extra": "iterations: 72940\ncpu: 9611.797367699484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9612.632392371073,
            "unit": "ns/iter",
            "extra": "iterations: 72727\ncpu: 9612.480921803446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9622.148476408727,
            "unit": "ns/iter",
            "extra": "iterations: 72887\ncpu: 9621.858493284128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15730.558575761352,
            "unit": "ns/iter",
            "extra": "iterations: 44515\ncpu: 15730.308884645649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56561.85247716592,
            "unit": "ns/iter",
            "extra": "iterations: 14452\ncpu: 56560.1785220039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 249240.89528795046,
            "unit": "ns/iter",
            "extra": "iterations: 3438\ncpu: 249226.7597440375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 199653.403656819,
            "unit": "ns/iter",
            "extra": "iterations: 4266\ncpu: 199642.92076887024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 198462.45673858686,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 197997.88912085342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195193.84571428547,
            "unit": "ns/iter",
            "extra": "iterations: 4375\ncpu: 195072.2285714286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 476886.7183783973,
            "unit": "ns/iter",
            "extra": "iterations: 1850\ncpu: 476878.70270270173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3740677.0522087608,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3740534.5381526146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3041169.1535947756,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3041057.5163398786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3024938.221498277,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3024860.5863192156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3010594.4789643795,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3010401.941747567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1737584.8611632187,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1737554.221388364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2937506.275316442,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2937160.1265822705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11096673.625000145,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11095754.166666675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6590005.007092098,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6589524.113475173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14336961.081080455,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14336191.891891908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55311.08459999814,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55304.60000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 288968.81463255093,
            "unit": "ns/iter",
            "extra": "iterations: 3048\ncpu: 288951.2139107599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 223737.87134655626,
            "unit": "ns/iter",
            "extra": "iterations: 3832\ncpu: 223719.96346555307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 224619.18534032148,
            "unit": "ns/iter",
            "extra": "iterations: 3820\ncpu: 224592.59162303663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 220719.05554126517,
            "unit": "ns/iter",
            "extra": "iterations: 3889\ncpu: 220693.46875803545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 481501.04666667123,
            "unit": "ns/iter",
            "extra": "iterations: 1800\ncpu: 481473.8888888886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3827598.8559671473,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3827385.5967078167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3085838.3079468817,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3085575.8278145827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3064404.089108995,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3064168.316831688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3073916.347079088,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3073672.1649484565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1769596.4380952015,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1769458.285714282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2982014.8076922237,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2981898.3974358835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11354593.244680913,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11353481.914893607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6562777.8111889595,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6562427.272727262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54545.50307281084,
            "unit": "ns/iter",
            "extra": "iterations: 14970\ncpu: 54543.00601202365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 248642.19674984796,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 248620.45850261033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 196931.18876611238,
            "unit": "ns/iter",
            "extra": "iterations: 4344\ncpu: 196927.02578268925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 195318.61448810674,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 195298.83455210278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 197901.10382882782,
            "unit": "ns/iter",
            "extra": "iterations: 4440\ncpu: 197894.43693693724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 454504.97074189933,
            "unit": "ns/iter",
            "extra": "iterations: 1914\ncpu: 454490.64785788965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3789516.5650405395,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3789221.5447154627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3059402.9770493195,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3059295.409836064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3033316.2156863804,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3033023.856209146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3029819.413680614,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3029750.81433226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1733821.5959031975,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1733711.9180633156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2956686.683706102,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2956507.6677316274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5717.282254635681,
            "unit": "ns/iter",
            "extra": "iterations: 122308\ncpu: 5717.085554501759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 32952.35389763333,
            "unit": "ns/iter",
            "extra": "iterations: 21218\ncpu: 32951.69195965679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27606.12085569955,
            "unit": "ns/iter",
            "extra": "iterations: 25336\ncpu: 27604.96526681419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26646.184741376255,
            "unit": "ns/iter",
            "extra": "iterations: 28207\ncpu: 26644.832842911448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21010.16060433273,
            "unit": "ns/iter",
            "extra": "iterations: 33293\ncpu: 21008.881746913485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 127446.76479155512,
            "unit": "ns/iter",
            "extra": "iterations: 5493\ncpu: 127441.5255780072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 251828.66979430558,
            "unit": "ns/iter",
            "extra": "iterations: 2771\ncpu: 251804.98015156604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 64282.08124999871,
            "unit": "ns/iter",
            "extra": "iterations: 10880\ncpu: 64278.18014705867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 63689.70467968792,
            "unit": "ns/iter",
            "extra": "iterations: 11005\ncpu: 63680.51794638793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 63693.3469369182,
            "unit": "ns/iter",
            "extra": "iterations: 11002\ncpu: 63687.602254136174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 126787.23111838893,
            "unit": "ns/iter",
            "extra": "iterations: 5508\ncpu: 126781.02759622592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 120218.63659748436,
            "unit": "ns/iter",
            "extra": "iterations: 5831\ncpu: 120210.01543474526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 39127.07330953331,
            "unit": "ns/iter",
            "extra": "iterations: 17924\ncpu: 39125.1004240132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 190241.03270647454,
            "unit": "ns/iter",
            "extra": "iterations: 3669\ncpu: 190225.56554919682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 154544.28404065635,
            "unit": "ns/iter",
            "extra": "iterations: 4524\ncpu: 154540.38461538483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 154445.68363074202,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 154429.19145186257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 154750.69021257665,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 154742.4933569529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 267272.4439817915,
            "unit": "ns/iter",
            "extra": "iterations: 2642\ncpu: 267252.80090840306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1090538.6609907218,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1090502.6315789295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 905282.6912145325,
            "unit": "ns/iter",
            "extra": "iterations: 774\ncpu: 905240.5684754488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 906650.9038960886,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 906586.2337662198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 905764.8348387433,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 905745.4193548475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 580851.2725766412,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 580801.4913007464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 894320.1176470261,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 894282.9923273686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 39608.87738465313,
            "unit": "ns/iter",
            "extra": "iterations: 17665\ncpu: 39606.10812340804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 187568.9919657087,
            "unit": "ns/iter",
            "extra": "iterations: 3734\ncpu: 187562.37279057316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 153910.74246754978,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 153901.82537937045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 153975.92610511667,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 153969.38640861935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 153926.97562048543,
            "unit": "ns/iter",
            "extra": "iterations: 4553\ncpu: 153923.72062376348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 261281.45057812033,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 261262.70048489308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1130301.4463453263,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1130257.8538102745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 901737.9549550418,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 901648.2625482667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 895782.7506393755,
            "unit": "ns/iter",
            "extra": "iterations: 782\ncpu: 895742.8388746793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 893940.2461733698,
            "unit": "ns/iter",
            "extra": "iterations: 784\ncpu: 893912.6275510237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 575330.8898931805,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 575297.5349219444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 889151.3837358142,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 889132.5285895969 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}