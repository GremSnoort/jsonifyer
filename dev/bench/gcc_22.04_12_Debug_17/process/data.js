window.BENCHMARK_DATA = {
  "lastUpdate": 1702479819663,
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
      }
    ]
  }
}