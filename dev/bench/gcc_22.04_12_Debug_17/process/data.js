window.BENCHMARK_DATA = {
  "lastUpdate": 1702399120987,
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
      }
    ]
  }
}