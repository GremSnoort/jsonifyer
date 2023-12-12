window.BENCHMARK_DATA = {
  "lastUpdate": 1702409373447,
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
      }
    ]
  }
}