window.BENCHMARK_DATA = {
  "lastUpdate": 1705772284178,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-9 22.04 Release c++-17": [
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
        "date": 1702397900814,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1675.0781472395342,
            "unit": "ns/iter",
            "extra": "iterations: 411710\ncpu: 1675.0581720142818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25742.05525050452,
            "unit": "ns/iter",
            "extra": "iterations: 32235\ncpu: 25741.119900729023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 52688.46097006326,
            "unit": "ns/iter",
            "extra": "iterations: 15834\ncpu: 52686.427939876216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 66151.41241203694,
            "unit": "ns/iter",
            "extra": "iterations: 13358\ncpu: 66150.2695014224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 92239.54318272666,
            "unit": "ns/iter",
            "extra": "iterations: 10004\ncpu: 92232.16713314675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115107.66429136878,
            "unit": "ns/iter",
            "extra": "iterations: 7578\ncpu: 115107.40300870946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141257.01009782226,
            "unit": "ns/iter",
            "extra": "iterations: 6338\ncpu: 141254.654465131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 163386.63296163044,
            "unit": "ns/iter",
            "extra": "iterations: 5291\ncpu: 163383.7837837839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186409.38648253126,
            "unit": "ns/iter",
            "extra": "iterations: 4779\ncpu: 186400.5440468718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1465.3147993005307,
            "unit": "ns/iter",
            "extra": "iterations: 478651\ncpu: 1465.2830559217443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1197.222238766871,
            "unit": "ns/iter",
            "extra": "iterations: 584277\ncpu: 1197.2069754585598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1204.3922394083763,
            "unit": "ns/iter",
            "extra": "iterations: 581734\ncpu: 1204.3666005425157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1201.62715516502,
            "unit": "ns/iter",
            "extra": "iterations: 579654\ncpu: 1201.5769752300478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2271.721008234139,
            "unit": "ns/iter",
            "extra": "iterations: 307984\ncpu: 2271.5225466258016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7393.961906897646,
            "unit": "ns/iter",
            "extra": "iterations: 111490\ncpu: 7393.626334200373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 42133.53106273942,
            "unit": "ns/iter",
            "extra": "iterations: 19525\ncpu: 42130.832266325255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 33753.02791961661,
            "unit": "ns/iter",
            "extra": "iterations: 24284\ncpu: 33750.9800691814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 33116.22914331468,
            "unit": "ns/iter",
            "extra": "iterations: 24980\ncpu: 33115.14411529223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32612.30171334573,
            "unit": "ns/iter",
            "extra": "iterations: 25564\ncpu: 32611.649194179332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 79839.21411912794,
            "unit": "ns/iter",
            "extra": "iterations: 11148\ncpu: 79836.73304628622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 848165.6491387333,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 848154.9410698074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 695392.3409091032,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 695360.1906158368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 699142.0895084533,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 699134.2626559079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 693808.7553743466,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 693784.3587842865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 504635.1467048783,
            "unit": "ns/iter",
            "extra": "iterations: 1745\ncpu: 504607.3352435516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 695950.1475409742,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 695934.6497764533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3793963.756000039,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3793756.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1690929.3160714307,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1690868.3928571413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4881971.747422669,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4881628.3505154615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 11494.275567552972,
            "unit": "ns/iter",
            "extra": "iterations: 72240\ncpu: 11493.758305647854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51796.006899996886,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51791.50999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 48044.10532612076,
            "unit": "ns/iter",
            "extra": "iterations: 17555\ncpu: 48042.386784392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 46941.47890401775,
            "unit": "ns/iter",
            "extra": "iterations: 17847\ncpu: 46940.77996301916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 46372.17627043202,
            "unit": "ns/iter",
            "extra": "iterations: 17927\ncpu: 46368.32710436786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 91193.040731066,
            "unit": "ns/iter",
            "extra": "iterations: 9575\ncpu: 91188.66840731066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 889682.200567669,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 889630.9366130605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 720943.6717325487,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 720931.3829787261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 718023.6028963493,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 718014.634146341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 717984.8813303048,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 717977.3242630418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 513661.93333330523,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 513642.89855072595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 705042.7124132696,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 705024.1326137289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3990130.3529411373,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3989822.2689075586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1758474.8124999758,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1758422.2426470476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7781.51018535325,
            "unit": "ns/iter",
            "extra": "iterations: 110060\ncpu: 7781.0403416318595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 43656.34988512854,
            "unit": "ns/iter",
            "extra": "iterations: 19152\ncpu: 43655.05430242272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 34478.42530450016,
            "unit": "ns/iter",
            "extra": "iterations: 24138\ncpu: 34477.955920125816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 34080.34426832323,
            "unit": "ns/iter",
            "extra": "iterations: 24478\ncpu: 34078.52765748834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 34235.85616466334,
            "unit": "ns/iter",
            "extra": "iterations: 24389\ncpu: 34235.27409897907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 76372.56220955712,
            "unit": "ns/iter",
            "extra": "iterations: 11405\ncpu: 76369.55721174908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 894828.1048758378,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 894805.0597976102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 692941.8541210926,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 692915.4631655735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 693645.8481752104,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 693637.9562043821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 690877.8975859629,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 690855.7425018284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 494109.0476724401,
            "unit": "ns/iter",
            "extra": "iterations: 1783\ncpu: 494089.68031407485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 685016.8000000124,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 684982.608695652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 606.835073705544,
            "unit": "ns/iter",
            "extra": "iterations: 1157511\ncpu: 606.8261122356541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4662.2504175778795,
            "unit": "ns/iter",
            "extra": "iterations: 155061\ncpu: 4662.1323221183875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3555.8058317351692,
            "unit": "ns/iter",
            "extra": "iterations: 203370\ncpu: 3555.744210060462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3505.2449318339236,
            "unit": "ns/iter",
            "extra": "iterations: 206041\ncpu: 3505.167903475514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2596.8144671636073,
            "unit": "ns/iter",
            "extra": "iterations: 268788\ncpu: 2596.8116136136914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20917.053655749376,
            "unit": "ns/iter",
            "extra": "iterations: 33249\ncpu: 20915.81400944391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 47106.28686814204,
            "unit": "ns/iter",
            "extra": "iterations: 14857\ncpu: 47102.52406273189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10864.750316215608,
            "unit": "ns/iter",
            "extra": "iterations: 63248\ncpu: 10864.405198583408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10837.331993098343,
            "unit": "ns/iter",
            "extra": "iterations: 64914\ncpu: 10837.15993468275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10765.578426552029,
            "unit": "ns/iter",
            "extra": "iterations: 65080\ncpu: 10764.6358328212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21663.722989111142,
            "unit": "ns/iter",
            "extra": "iterations: 32237\ncpu: 21663.489158420416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 21505.49198668395,
            "unit": "ns/iter",
            "extra": "iterations: 32446\ncpu: 21504.431979288576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6166.399342413351,
            "unit": "ns/iter",
            "extra": "iterations: 113141\ncpu: 6165.778099893052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 31733.10473386143,
            "unit": "ns/iter",
            "extra": "iterations: 22075\ncpu: 31730.160815402196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 25264.174399247542,
            "unit": "ns/iter",
            "extra": "iterations: 27632\ncpu: 25262.764186450462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 25146.996375643095,
            "unit": "ns/iter",
            "extra": "iterations: 27867\ncpu: 25144.776976352034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 25966.322848421605,
            "unit": "ns/iter",
            "extra": "iterations: 26864\ncpu: 25965.518910065442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 57245.22859239878,
            "unit": "ns/iter",
            "extra": "iterations: 12262\ncpu: 57242.68471701156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 214566.48754229964,
            "unit": "ns/iter",
            "extra": "iterations: 3251\ncpu: 214563.27283912437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 180560.22958001413,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 180553.46560164852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 182777.4489051056,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 182764.72888425572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 183252.12012562674,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 183249.22795079934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 108441.65857054446,
            "unit": "ns/iter",
            "extra": "iterations: 6464\ncpu: 108435.8446782176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 181445.2135997852,
            "unit": "ns/iter",
            "extra": "iterations: 3853\ncpu: 181439.42382559108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5990.574254366,
            "unit": "ns/iter",
            "extra": "iterations: 116478\ncpu: 5990.308041003388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 31344.271521991566,
            "unit": "ns/iter",
            "extra": "iterations: 22326\ncpu: 31343.881573053626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 24804.219461843928,
            "unit": "ns/iter",
            "extra": "iterations: 28096\ncpu: 24803.59481776765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 25025.78513373236,
            "unit": "ns/iter",
            "extra": "iterations: 27929\ncpu: 25025.049231981022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 25943.850719626476,
            "unit": "ns/iter",
            "extra": "iterations: 26889\ncpu: 25943.103127673035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 55911.948104912866,
            "unit": "ns/iter",
            "extra": "iterations: 12506\ncpu: 55911.330561330695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 211563.0329007019,
            "unit": "ns/iter",
            "extra": "iterations: 3313\ncpu: 211559.4627226076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 177896.22055455827,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 177877.33401170105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 184486.69062181664,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 184478.8990825691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 178568.280581041,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 178551.68195718605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 107266.00748777669,
            "unit": "ns/iter",
            "extra": "iterations: 6544\ncpu: 107257.8239608817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 178511.61652217092,
            "unit": "ns/iter",
            "extra": "iterations: 3922\ncpu: 178498.29168791257 ns\nthreads: 1"
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
        "date": 1702397900814,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1675.0781472395342,
            "unit": "ns/iter",
            "extra": "iterations: 411710\ncpu: 1675.0581720142818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25742.05525050452,
            "unit": "ns/iter",
            "extra": "iterations: 32235\ncpu: 25741.119900729023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 52688.46097006326,
            "unit": "ns/iter",
            "extra": "iterations: 15834\ncpu: 52686.427939876216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 66151.41241203694,
            "unit": "ns/iter",
            "extra": "iterations: 13358\ncpu: 66150.2695014224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 92239.54318272666,
            "unit": "ns/iter",
            "extra": "iterations: 10004\ncpu: 92232.16713314675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115107.66429136878,
            "unit": "ns/iter",
            "extra": "iterations: 7578\ncpu: 115107.40300870946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141257.01009782226,
            "unit": "ns/iter",
            "extra": "iterations: 6338\ncpu: 141254.654465131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 163386.63296163044,
            "unit": "ns/iter",
            "extra": "iterations: 5291\ncpu: 163383.7837837839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186409.38648253126,
            "unit": "ns/iter",
            "extra": "iterations: 4779\ncpu: 186400.5440468718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1465.3147993005307,
            "unit": "ns/iter",
            "extra": "iterations: 478651\ncpu: 1465.2830559217443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1197.222238766871,
            "unit": "ns/iter",
            "extra": "iterations: 584277\ncpu: 1197.2069754585598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1204.3922394083763,
            "unit": "ns/iter",
            "extra": "iterations: 581734\ncpu: 1204.3666005425157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1201.62715516502,
            "unit": "ns/iter",
            "extra": "iterations: 579654\ncpu: 1201.5769752300478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2271.721008234139,
            "unit": "ns/iter",
            "extra": "iterations: 307984\ncpu: 2271.5225466258016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7393.961906897646,
            "unit": "ns/iter",
            "extra": "iterations: 111490\ncpu: 7393.626334200373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 42133.53106273942,
            "unit": "ns/iter",
            "extra": "iterations: 19525\ncpu: 42130.832266325255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 33753.02791961661,
            "unit": "ns/iter",
            "extra": "iterations: 24284\ncpu: 33750.9800691814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 33116.22914331468,
            "unit": "ns/iter",
            "extra": "iterations: 24980\ncpu: 33115.14411529223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32612.30171334573,
            "unit": "ns/iter",
            "extra": "iterations: 25564\ncpu: 32611.649194179332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 79839.21411912794,
            "unit": "ns/iter",
            "extra": "iterations: 11148\ncpu: 79836.73304628622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 848165.6491387333,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 848154.9410698074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 695392.3409091032,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 695360.1906158368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 699142.0895084533,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 699134.2626559079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 693808.7553743466,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 693784.3587842865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 504635.1467048783,
            "unit": "ns/iter",
            "extra": "iterations: 1745\ncpu: 504607.3352435516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 695950.1475409742,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 695934.6497764533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3793963.756000039,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3793756.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1690929.3160714307,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1690868.3928571413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4881971.747422669,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4881628.3505154615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 11494.275567552972,
            "unit": "ns/iter",
            "extra": "iterations: 72240\ncpu: 11493.758305647854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51796.006899996886,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51791.50999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 48044.10532612076,
            "unit": "ns/iter",
            "extra": "iterations: 17555\ncpu: 48042.386784392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 46941.47890401775,
            "unit": "ns/iter",
            "extra": "iterations: 17847\ncpu: 46940.77996301916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 46372.17627043202,
            "unit": "ns/iter",
            "extra": "iterations: 17927\ncpu: 46368.32710436786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 91193.040731066,
            "unit": "ns/iter",
            "extra": "iterations: 9575\ncpu: 91188.66840731066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 889682.200567669,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 889630.9366130605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 720943.6717325487,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 720931.3829787261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 718023.6028963493,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 718014.634146341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 717984.8813303048,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 717977.3242630418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 513661.93333330523,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 513642.89855072595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 705042.7124132696,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 705024.1326137289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3990130.3529411373,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3989822.2689075586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1758474.8124999758,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1758422.2426470476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7781.51018535325,
            "unit": "ns/iter",
            "extra": "iterations: 110060\ncpu: 7781.0403416318595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 43656.34988512854,
            "unit": "ns/iter",
            "extra": "iterations: 19152\ncpu: 43655.05430242272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 34478.42530450016,
            "unit": "ns/iter",
            "extra": "iterations: 24138\ncpu: 34477.955920125816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 34080.34426832323,
            "unit": "ns/iter",
            "extra": "iterations: 24478\ncpu: 34078.52765748834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 34235.85616466334,
            "unit": "ns/iter",
            "extra": "iterations: 24389\ncpu: 34235.27409897907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 76372.56220955712,
            "unit": "ns/iter",
            "extra": "iterations: 11405\ncpu: 76369.55721174908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 894828.1048758378,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 894805.0597976102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 692941.8541210926,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 692915.4631655735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 693645.8481752104,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 693637.9562043821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 690877.8975859629,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 690855.7425018284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 494109.0476724401,
            "unit": "ns/iter",
            "extra": "iterations: 1783\ncpu: 494089.68031407485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 685016.8000000124,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 684982.608695652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 606.835073705544,
            "unit": "ns/iter",
            "extra": "iterations: 1157511\ncpu: 606.8261122356541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4662.2504175778795,
            "unit": "ns/iter",
            "extra": "iterations: 155061\ncpu: 4662.1323221183875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3555.8058317351692,
            "unit": "ns/iter",
            "extra": "iterations: 203370\ncpu: 3555.744210060462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3505.2449318339236,
            "unit": "ns/iter",
            "extra": "iterations: 206041\ncpu: 3505.167903475514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2596.8144671636073,
            "unit": "ns/iter",
            "extra": "iterations: 268788\ncpu: 2596.8116136136914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20917.053655749376,
            "unit": "ns/iter",
            "extra": "iterations: 33249\ncpu: 20915.81400944391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 47106.28686814204,
            "unit": "ns/iter",
            "extra": "iterations: 14857\ncpu: 47102.52406273189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10864.750316215608,
            "unit": "ns/iter",
            "extra": "iterations: 63248\ncpu: 10864.405198583408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10837.331993098343,
            "unit": "ns/iter",
            "extra": "iterations: 64914\ncpu: 10837.15993468275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10765.578426552029,
            "unit": "ns/iter",
            "extra": "iterations: 65080\ncpu: 10764.6358328212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21663.722989111142,
            "unit": "ns/iter",
            "extra": "iterations: 32237\ncpu: 21663.489158420416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 21505.49198668395,
            "unit": "ns/iter",
            "extra": "iterations: 32446\ncpu: 21504.431979288576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6166.399342413351,
            "unit": "ns/iter",
            "extra": "iterations: 113141\ncpu: 6165.778099893052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 31733.10473386143,
            "unit": "ns/iter",
            "extra": "iterations: 22075\ncpu: 31730.160815402196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 25264.174399247542,
            "unit": "ns/iter",
            "extra": "iterations: 27632\ncpu: 25262.764186450462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 25146.996375643095,
            "unit": "ns/iter",
            "extra": "iterations: 27867\ncpu: 25144.776976352034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 25966.322848421605,
            "unit": "ns/iter",
            "extra": "iterations: 26864\ncpu: 25965.518910065442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 57245.22859239878,
            "unit": "ns/iter",
            "extra": "iterations: 12262\ncpu: 57242.68471701156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 214566.48754229964,
            "unit": "ns/iter",
            "extra": "iterations: 3251\ncpu: 214563.27283912437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 180560.22958001413,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 180553.46560164852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 182777.4489051056,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 182764.72888425572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 183252.12012562674,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 183249.22795079934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 108441.65857054446,
            "unit": "ns/iter",
            "extra": "iterations: 6464\ncpu: 108435.8446782176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 181445.2135997852,
            "unit": "ns/iter",
            "extra": "iterations: 3853\ncpu: 181439.42382559108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5990.574254366,
            "unit": "ns/iter",
            "extra": "iterations: 116478\ncpu: 5990.308041003388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 31344.271521991566,
            "unit": "ns/iter",
            "extra": "iterations: 22326\ncpu: 31343.881573053626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 24804.219461843928,
            "unit": "ns/iter",
            "extra": "iterations: 28096\ncpu: 24803.59481776765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 25025.78513373236,
            "unit": "ns/iter",
            "extra": "iterations: 27929\ncpu: 25025.049231981022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 25943.850719626476,
            "unit": "ns/iter",
            "extra": "iterations: 26889\ncpu: 25943.103127673035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 55911.948104912866,
            "unit": "ns/iter",
            "extra": "iterations: 12506\ncpu: 55911.330561330695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 211563.0329007019,
            "unit": "ns/iter",
            "extra": "iterations: 3313\ncpu: 211559.4627226076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 177896.22055455827,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 177877.33401170105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 184486.69062181664,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 184478.8990825691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 178568.280581041,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 178551.68195718605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 107266.00748777669,
            "unit": "ns/iter",
            "extra": "iterations: 6544\ncpu: 107257.8239608817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 178511.61652217092,
            "unit": "ns/iter",
            "extra": "iterations: 3922\ncpu: 178498.29168791257 ns\nthreads: 1"
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
        "date": 1702397900814,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1675.0781472395342,
            "unit": "ns/iter",
            "extra": "iterations: 411710\ncpu: 1675.0581720142818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25742.05525050452,
            "unit": "ns/iter",
            "extra": "iterations: 32235\ncpu: 25741.119900729023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 52688.46097006326,
            "unit": "ns/iter",
            "extra": "iterations: 15834\ncpu: 52686.427939876216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 66151.41241203694,
            "unit": "ns/iter",
            "extra": "iterations: 13358\ncpu: 66150.2695014224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 92239.54318272666,
            "unit": "ns/iter",
            "extra": "iterations: 10004\ncpu: 92232.16713314675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115107.66429136878,
            "unit": "ns/iter",
            "extra": "iterations: 7578\ncpu: 115107.40300870946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141257.01009782226,
            "unit": "ns/iter",
            "extra": "iterations: 6338\ncpu: 141254.654465131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 163386.63296163044,
            "unit": "ns/iter",
            "extra": "iterations: 5291\ncpu: 163383.7837837839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186409.38648253126,
            "unit": "ns/iter",
            "extra": "iterations: 4779\ncpu: 186400.5440468718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1465.3147993005307,
            "unit": "ns/iter",
            "extra": "iterations: 478651\ncpu: 1465.2830559217443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1197.222238766871,
            "unit": "ns/iter",
            "extra": "iterations: 584277\ncpu: 1197.2069754585598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1204.3922394083763,
            "unit": "ns/iter",
            "extra": "iterations: 581734\ncpu: 1204.3666005425157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1201.62715516502,
            "unit": "ns/iter",
            "extra": "iterations: 579654\ncpu: 1201.5769752300478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2271.721008234139,
            "unit": "ns/iter",
            "extra": "iterations: 307984\ncpu: 2271.5225466258016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7393.961906897646,
            "unit": "ns/iter",
            "extra": "iterations: 111490\ncpu: 7393.626334200373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 42133.53106273942,
            "unit": "ns/iter",
            "extra": "iterations: 19525\ncpu: 42130.832266325255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 33753.02791961661,
            "unit": "ns/iter",
            "extra": "iterations: 24284\ncpu: 33750.9800691814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 33116.22914331468,
            "unit": "ns/iter",
            "extra": "iterations: 24980\ncpu: 33115.14411529223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32612.30171334573,
            "unit": "ns/iter",
            "extra": "iterations: 25564\ncpu: 32611.649194179332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 79839.21411912794,
            "unit": "ns/iter",
            "extra": "iterations: 11148\ncpu: 79836.73304628622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 848165.6491387333,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 848154.9410698074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 695392.3409091032,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 695360.1906158368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 699142.0895084533,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 699134.2626559079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 693808.7553743466,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 693784.3587842865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 504635.1467048783,
            "unit": "ns/iter",
            "extra": "iterations: 1745\ncpu: 504607.3352435516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 695950.1475409742,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 695934.6497764533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3793963.756000039,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3793756.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1690929.3160714307,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1690868.3928571413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4881971.747422669,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4881628.3505154615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 11494.275567552972,
            "unit": "ns/iter",
            "extra": "iterations: 72240\ncpu: 11493.758305647854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51796.006899996886,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51791.50999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 48044.10532612076,
            "unit": "ns/iter",
            "extra": "iterations: 17555\ncpu: 48042.386784392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 46941.47890401775,
            "unit": "ns/iter",
            "extra": "iterations: 17847\ncpu: 46940.77996301916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 46372.17627043202,
            "unit": "ns/iter",
            "extra": "iterations: 17927\ncpu: 46368.32710436786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 91193.040731066,
            "unit": "ns/iter",
            "extra": "iterations: 9575\ncpu: 91188.66840731066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 889682.200567669,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 889630.9366130605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 720943.6717325487,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 720931.3829787261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 718023.6028963493,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 718014.634146341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 717984.8813303048,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 717977.3242630418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 513661.93333330523,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 513642.89855072595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 705042.7124132696,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 705024.1326137289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3990130.3529411373,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3989822.2689075586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1758474.8124999758,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1758422.2426470476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7781.51018535325,
            "unit": "ns/iter",
            "extra": "iterations: 110060\ncpu: 7781.0403416318595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 43656.34988512854,
            "unit": "ns/iter",
            "extra": "iterations: 19152\ncpu: 43655.05430242272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 34478.42530450016,
            "unit": "ns/iter",
            "extra": "iterations: 24138\ncpu: 34477.955920125816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 34080.34426832323,
            "unit": "ns/iter",
            "extra": "iterations: 24478\ncpu: 34078.52765748834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 34235.85616466334,
            "unit": "ns/iter",
            "extra": "iterations: 24389\ncpu: 34235.27409897907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 76372.56220955712,
            "unit": "ns/iter",
            "extra": "iterations: 11405\ncpu: 76369.55721174908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 894828.1048758378,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 894805.0597976102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 692941.8541210926,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 692915.4631655735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 693645.8481752104,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 693637.9562043821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 690877.8975859629,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 690855.7425018284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 494109.0476724401,
            "unit": "ns/iter",
            "extra": "iterations: 1783\ncpu: 494089.68031407485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 685016.8000000124,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 684982.608695652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 606.835073705544,
            "unit": "ns/iter",
            "extra": "iterations: 1157511\ncpu: 606.8261122356541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4662.2504175778795,
            "unit": "ns/iter",
            "extra": "iterations: 155061\ncpu: 4662.1323221183875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3555.8058317351692,
            "unit": "ns/iter",
            "extra": "iterations: 203370\ncpu: 3555.744210060462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3505.2449318339236,
            "unit": "ns/iter",
            "extra": "iterations: 206041\ncpu: 3505.167903475514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2596.8144671636073,
            "unit": "ns/iter",
            "extra": "iterations: 268788\ncpu: 2596.8116136136914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20917.053655749376,
            "unit": "ns/iter",
            "extra": "iterations: 33249\ncpu: 20915.81400944391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 47106.28686814204,
            "unit": "ns/iter",
            "extra": "iterations: 14857\ncpu: 47102.52406273189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10864.750316215608,
            "unit": "ns/iter",
            "extra": "iterations: 63248\ncpu: 10864.405198583408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10837.331993098343,
            "unit": "ns/iter",
            "extra": "iterations: 64914\ncpu: 10837.15993468275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10765.578426552029,
            "unit": "ns/iter",
            "extra": "iterations: 65080\ncpu: 10764.6358328212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21663.722989111142,
            "unit": "ns/iter",
            "extra": "iterations: 32237\ncpu: 21663.489158420416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 21505.49198668395,
            "unit": "ns/iter",
            "extra": "iterations: 32446\ncpu: 21504.431979288576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6166.399342413351,
            "unit": "ns/iter",
            "extra": "iterations: 113141\ncpu: 6165.778099893052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 31733.10473386143,
            "unit": "ns/iter",
            "extra": "iterations: 22075\ncpu: 31730.160815402196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 25264.174399247542,
            "unit": "ns/iter",
            "extra": "iterations: 27632\ncpu: 25262.764186450462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 25146.996375643095,
            "unit": "ns/iter",
            "extra": "iterations: 27867\ncpu: 25144.776976352034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 25966.322848421605,
            "unit": "ns/iter",
            "extra": "iterations: 26864\ncpu: 25965.518910065442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 57245.22859239878,
            "unit": "ns/iter",
            "extra": "iterations: 12262\ncpu: 57242.68471701156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 214566.48754229964,
            "unit": "ns/iter",
            "extra": "iterations: 3251\ncpu: 214563.27283912437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 180560.22958001413,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 180553.46560164852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 182777.4489051056,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 182764.72888425572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 183252.12012562674,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 183249.22795079934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 108441.65857054446,
            "unit": "ns/iter",
            "extra": "iterations: 6464\ncpu: 108435.8446782176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 181445.2135997852,
            "unit": "ns/iter",
            "extra": "iterations: 3853\ncpu: 181439.42382559108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5990.574254366,
            "unit": "ns/iter",
            "extra": "iterations: 116478\ncpu: 5990.308041003388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 31344.271521991566,
            "unit": "ns/iter",
            "extra": "iterations: 22326\ncpu: 31343.881573053626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 24804.219461843928,
            "unit": "ns/iter",
            "extra": "iterations: 28096\ncpu: 24803.59481776765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 25025.78513373236,
            "unit": "ns/iter",
            "extra": "iterations: 27929\ncpu: 25025.049231981022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 25943.850719626476,
            "unit": "ns/iter",
            "extra": "iterations: 26889\ncpu: 25943.103127673035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 55911.948104912866,
            "unit": "ns/iter",
            "extra": "iterations: 12506\ncpu: 55911.330561330695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 211563.0329007019,
            "unit": "ns/iter",
            "extra": "iterations: 3313\ncpu: 211559.4627226076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 177896.22055455827,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 177877.33401170105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 184486.69062181664,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 184478.8990825691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 178568.280581041,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 178551.68195718605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 107266.00748777669,
            "unit": "ns/iter",
            "extra": "iterations: 6544\ncpu: 107257.8239608817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 178511.61652217092,
            "unit": "ns/iter",
            "extra": "iterations: 3922\ncpu: 178498.29168791257 ns\nthreads: 1"
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
        "date": 1702397900814,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1675.0781472395342,
            "unit": "ns/iter",
            "extra": "iterations: 411710\ncpu: 1675.0581720142818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25742.05525050452,
            "unit": "ns/iter",
            "extra": "iterations: 32235\ncpu: 25741.119900729023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 52688.46097006326,
            "unit": "ns/iter",
            "extra": "iterations: 15834\ncpu: 52686.427939876216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 66151.41241203694,
            "unit": "ns/iter",
            "extra": "iterations: 13358\ncpu: 66150.2695014224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 92239.54318272666,
            "unit": "ns/iter",
            "extra": "iterations: 10004\ncpu: 92232.16713314675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115107.66429136878,
            "unit": "ns/iter",
            "extra": "iterations: 7578\ncpu: 115107.40300870946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141257.01009782226,
            "unit": "ns/iter",
            "extra": "iterations: 6338\ncpu: 141254.654465131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 163386.63296163044,
            "unit": "ns/iter",
            "extra": "iterations: 5291\ncpu: 163383.7837837839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186409.38648253126,
            "unit": "ns/iter",
            "extra": "iterations: 4779\ncpu: 186400.5440468718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1465.3147993005307,
            "unit": "ns/iter",
            "extra": "iterations: 478651\ncpu: 1465.2830559217443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1197.222238766871,
            "unit": "ns/iter",
            "extra": "iterations: 584277\ncpu: 1197.2069754585598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1204.3922394083763,
            "unit": "ns/iter",
            "extra": "iterations: 581734\ncpu: 1204.3666005425157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1201.62715516502,
            "unit": "ns/iter",
            "extra": "iterations: 579654\ncpu: 1201.5769752300478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2271.721008234139,
            "unit": "ns/iter",
            "extra": "iterations: 307984\ncpu: 2271.5225466258016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7393.961906897646,
            "unit": "ns/iter",
            "extra": "iterations: 111490\ncpu: 7393.626334200373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 42133.53106273942,
            "unit": "ns/iter",
            "extra": "iterations: 19525\ncpu: 42130.832266325255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 33753.02791961661,
            "unit": "ns/iter",
            "extra": "iterations: 24284\ncpu: 33750.9800691814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 33116.22914331468,
            "unit": "ns/iter",
            "extra": "iterations: 24980\ncpu: 33115.14411529223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32612.30171334573,
            "unit": "ns/iter",
            "extra": "iterations: 25564\ncpu: 32611.649194179332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 79839.21411912794,
            "unit": "ns/iter",
            "extra": "iterations: 11148\ncpu: 79836.73304628622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 848165.6491387333,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 848154.9410698074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 695392.3409091032,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 695360.1906158368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 699142.0895084533,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 699134.2626559079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 693808.7553743466,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 693784.3587842865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 504635.1467048783,
            "unit": "ns/iter",
            "extra": "iterations: 1745\ncpu: 504607.3352435516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 695950.1475409742,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 695934.6497764533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3793963.756000039,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3793756.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1690929.3160714307,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1690868.3928571413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4881971.747422669,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4881628.3505154615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 11494.275567552972,
            "unit": "ns/iter",
            "extra": "iterations: 72240\ncpu: 11493.758305647854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51796.006899996886,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51791.50999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 48044.10532612076,
            "unit": "ns/iter",
            "extra": "iterations: 17555\ncpu: 48042.386784392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 46941.47890401775,
            "unit": "ns/iter",
            "extra": "iterations: 17847\ncpu: 46940.77996301916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 46372.17627043202,
            "unit": "ns/iter",
            "extra": "iterations: 17927\ncpu: 46368.32710436786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 91193.040731066,
            "unit": "ns/iter",
            "extra": "iterations: 9575\ncpu: 91188.66840731066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 889682.200567669,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 889630.9366130605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 720943.6717325487,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 720931.3829787261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 718023.6028963493,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 718014.634146341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 717984.8813303048,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 717977.3242630418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 513661.93333330523,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 513642.89855072595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 705042.7124132696,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 705024.1326137289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3990130.3529411373,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3989822.2689075586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1758474.8124999758,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1758422.2426470476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7781.51018535325,
            "unit": "ns/iter",
            "extra": "iterations: 110060\ncpu: 7781.0403416318595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 43656.34988512854,
            "unit": "ns/iter",
            "extra": "iterations: 19152\ncpu: 43655.05430242272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 34478.42530450016,
            "unit": "ns/iter",
            "extra": "iterations: 24138\ncpu: 34477.955920125816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 34080.34426832323,
            "unit": "ns/iter",
            "extra": "iterations: 24478\ncpu: 34078.52765748834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 34235.85616466334,
            "unit": "ns/iter",
            "extra": "iterations: 24389\ncpu: 34235.27409897907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 76372.56220955712,
            "unit": "ns/iter",
            "extra": "iterations: 11405\ncpu: 76369.55721174908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 894828.1048758378,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 894805.0597976102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 692941.8541210926,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 692915.4631655735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 693645.8481752104,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 693637.9562043821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 690877.8975859629,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 690855.7425018284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 494109.0476724401,
            "unit": "ns/iter",
            "extra": "iterations: 1783\ncpu: 494089.68031407485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 685016.8000000124,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 684982.608695652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 606.835073705544,
            "unit": "ns/iter",
            "extra": "iterations: 1157511\ncpu: 606.8261122356541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4662.2504175778795,
            "unit": "ns/iter",
            "extra": "iterations: 155061\ncpu: 4662.1323221183875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3555.8058317351692,
            "unit": "ns/iter",
            "extra": "iterations: 203370\ncpu: 3555.744210060462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3505.2449318339236,
            "unit": "ns/iter",
            "extra": "iterations: 206041\ncpu: 3505.167903475514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2596.8144671636073,
            "unit": "ns/iter",
            "extra": "iterations: 268788\ncpu: 2596.8116136136914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20917.053655749376,
            "unit": "ns/iter",
            "extra": "iterations: 33249\ncpu: 20915.81400944391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 47106.28686814204,
            "unit": "ns/iter",
            "extra": "iterations: 14857\ncpu: 47102.52406273189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10864.750316215608,
            "unit": "ns/iter",
            "extra": "iterations: 63248\ncpu: 10864.405198583408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10837.331993098343,
            "unit": "ns/iter",
            "extra": "iterations: 64914\ncpu: 10837.15993468275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10765.578426552029,
            "unit": "ns/iter",
            "extra": "iterations: 65080\ncpu: 10764.6358328212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21663.722989111142,
            "unit": "ns/iter",
            "extra": "iterations: 32237\ncpu: 21663.489158420416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 21505.49198668395,
            "unit": "ns/iter",
            "extra": "iterations: 32446\ncpu: 21504.431979288576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6166.399342413351,
            "unit": "ns/iter",
            "extra": "iterations: 113141\ncpu: 6165.778099893052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 31733.10473386143,
            "unit": "ns/iter",
            "extra": "iterations: 22075\ncpu: 31730.160815402196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 25264.174399247542,
            "unit": "ns/iter",
            "extra": "iterations: 27632\ncpu: 25262.764186450462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 25146.996375643095,
            "unit": "ns/iter",
            "extra": "iterations: 27867\ncpu: 25144.776976352034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 25966.322848421605,
            "unit": "ns/iter",
            "extra": "iterations: 26864\ncpu: 25965.518910065442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 57245.22859239878,
            "unit": "ns/iter",
            "extra": "iterations: 12262\ncpu: 57242.68471701156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 214566.48754229964,
            "unit": "ns/iter",
            "extra": "iterations: 3251\ncpu: 214563.27283912437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 180560.22958001413,
            "unit": "ns/iter",
            "extra": "iterations: 3881\ncpu: 180553.46560164852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 182777.4489051056,
            "unit": "ns/iter",
            "extra": "iterations: 3836\ncpu: 182764.72888425572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 183252.12012562674,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 183249.22795079934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 108441.65857054446,
            "unit": "ns/iter",
            "extra": "iterations: 6464\ncpu: 108435.8446782176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 181445.2135997852,
            "unit": "ns/iter",
            "extra": "iterations: 3853\ncpu: 181439.42382559108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5990.574254366,
            "unit": "ns/iter",
            "extra": "iterations: 116478\ncpu: 5990.308041003388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 31344.271521991566,
            "unit": "ns/iter",
            "extra": "iterations: 22326\ncpu: 31343.881573053626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 24804.219461843928,
            "unit": "ns/iter",
            "extra": "iterations: 28096\ncpu: 24803.59481776765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 25025.78513373236,
            "unit": "ns/iter",
            "extra": "iterations: 27929\ncpu: 25025.049231981022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 25943.850719626476,
            "unit": "ns/iter",
            "extra": "iterations: 26889\ncpu: 25943.103127673035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 55911.948104912866,
            "unit": "ns/iter",
            "extra": "iterations: 12506\ncpu: 55911.330561330695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 211563.0329007019,
            "unit": "ns/iter",
            "extra": "iterations: 3313\ncpu: 211559.4627226076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 177896.22055455827,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 177877.33401170105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 184486.69062181664,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 184478.8990825691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 178568.280581041,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 178551.68195718605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 107266.00748777669,
            "unit": "ns/iter",
            "extra": "iterations: 6544\ncpu: 107257.8239608817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 178511.61652217092,
            "unit": "ns/iter",
            "extra": "iterations: 3922\ncpu: 178498.29168791257 ns\nthreads: 1"
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
        "date": 1702398773921,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1702.5336260319355,
            "unit": "ns/iter",
            "extra": "iterations: 412939\ncpu: 1702.5231329566836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25598.585869528968,
            "unit": "ns/iter",
            "extra": "iterations: 30459\ncpu: 25597.875833087095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 52403.94919954772,
            "unit": "ns/iter",
            "extra": "iterations: 15866\ncpu: 52403.67452413966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 65667.28449310208,
            "unit": "ns/iter",
            "extra": "iterations: 13336\ncpu: 65666.49670065986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 92916.76571031613,
            "unit": "ns/iter",
            "extra": "iterations: 10073\ncpu: 92913.57093219491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 116526.54553952997,
            "unit": "ns/iter",
            "extra": "iterations: 7488\ncpu: 116523.14369658125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 142738.93334679652,
            "unit": "ns/iter",
            "extra": "iterations: 4951\ncpu: 142736.5986669359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 164664.01887151945,
            "unit": "ns/iter",
            "extra": "iterations: 5246\ncpu: 164657.33892489522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 188789.72257518204,
            "unit": "ns/iter",
            "extra": "iterations: 4722\ncpu: 188785.83227445988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1509.7028864498502,
            "unit": "ns/iter",
            "extra": "iterations: 462298\ncpu: 1509.6396696503111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1188.5894985035145,
            "unit": "ns/iter",
            "extra": "iterations: 590373\ncpu: 1188.583996896878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1176.312254320972,
            "unit": "ns/iter",
            "extra": "iterations: 591473\ncpu: 1176.2481127625415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1193.6479386961203,
            "unit": "ns/iter",
            "extra": "iterations: 589457\ncpu: 1193.6307482988593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2311.6368285767476,
            "unit": "ns/iter",
            "extra": "iterations: 301896\ncpu: 2311.5443728966216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7402.239287092318,
            "unit": "ns/iter",
            "extra": "iterations: 111431\ncpu: 7402.202259694337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 44174.8034552637,
            "unit": "ns/iter",
            "extra": "iterations: 18754\ncpu: 44171.84600618537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 33754.7035436127,
            "unit": "ns/iter",
            "extra": "iterations: 24523\ncpu: 33754.18178852506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 33257.25888140681,
            "unit": "ns/iter",
            "extra": "iterations: 24799\ncpu: 33255.824831646416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32436.90131219272,
            "unit": "ns/iter",
            "extra": "iterations: 25606\ncpu: 32437.010856830464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 81015.51669800197,
            "unit": "ns/iter",
            "extra": "iterations: 11169\ncpu: 81010.94995075677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 852646.7983501303,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 852631.3473877184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 703916.8502949901,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 703891.8879056061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 694082.5163204834,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 694070.25222552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 699367.7589020756,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 698743.6943620165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 499316.8027444226,
            "unit": "ns/iter",
            "extra": "iterations: 1749\ncpu: 499302.6872498563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 691658.0736059439,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 691613.6059479542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3797644.5760000385,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3797445.199999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1668886.5398229843,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1668857.8761061942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4913765.497409315,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 4913674.0932642585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 11639.423272827737,
            "unit": "ns/iter",
            "extra": "iterations: 72445\ncpu: 11639.464421285109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 52311.4253999978,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52310.20999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 47617.39655860118,
            "unit": "ns/iter",
            "extra": "iterations: 17551\ncpu: 47616.751182268985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 46974.912163676854,
            "unit": "ns/iter",
            "extra": "iterations: 17840\ncpu: 46974.61883408066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 46207.91513977254,
            "unit": "ns/iter",
            "extra": "iterations: 18065\ncpu: 46206.57071685596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 92407.0669324392,
            "unit": "ns/iter",
            "extra": "iterations: 9532\ncpu: 92402.73814519511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 885991.0386427806,
            "unit": "ns/iter",
            "extra": "iterations: 1061\ncpu: 885961.4514608864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 723309.8147013697,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 723283.9969372118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 715556.6305007482,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 715527.921092564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 713190.0075414797,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 713136.953242836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 514306.7669392558,
            "unit": "ns/iter",
            "extra": "iterations: 1712\ncpu: 514287.85046728654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 698238.9799405631,
            "unit": "ns/iter",
            "extra": "iterations: 1346\ncpu: 698205.7206537885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3969687.8661088296,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3969470.292887027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1698217.2813067017,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1698136.6606170686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7628.804556134808,
            "unit": "ns/iter",
            "extra": "iterations: 108952\ncpu: 7628.518980835639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 43253.409557743966,
            "unit": "ns/iter",
            "extra": "iterations: 19084\ncpu: 43252.33179626894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 34225.428183501666,
            "unit": "ns/iter",
            "extra": "iterations: 24305\ncpu: 34224.87142563275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 33906.65678881461,
            "unit": "ns/iter",
            "extra": "iterations: 24533\ncpu: 33906.1875840704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 34586.48411315764,
            "unit": "ns/iter",
            "extra": "iterations: 24108\ncpu: 34585.6520657042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 76423.5147558095,
            "unit": "ns/iter",
            "extra": "iterations: 11487\ncpu: 76422.5994602596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 861984.4205268032,
            "unit": "ns/iter",
            "extra": "iterations: 1101\ncpu: 861964.1235240673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 695315.046579332,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 695312.7365356641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 688636.1411935916,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 688617.6128093151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 689552.6787790746,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 689543.7499999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 495670.5248307016,
            "unit": "ns/iter",
            "extra": "iterations: 1772\ncpu: 495654.853273134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 680923.2166666742,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 680913.8405797117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 591.9238913574269,
            "unit": "ns/iter",
            "extra": "iterations: 1182888\ncpu: 591.914111902394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4449.824153677389,
            "unit": "ns/iter",
            "extra": "iterations: 156796\ncpu: 4449.704074083556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3558.8754115712677,
            "unit": "ns/iter",
            "extra": "iterations: 196503\ncpu: 3558.8866327740757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3440.9066783132976,
            "unit": "ns/iter",
            "extra": "iterations: 203779\ncpu: 3440.851608850768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2644.499254126992,
            "unit": "ns/iter",
            "extra": "iterations: 264120\ncpu: 2644.5127214902295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 21346.711815298193,
            "unit": "ns/iter",
            "extra": "iterations: 32788\ncpu: 21346.093082835156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 46317.715164483154,
            "unit": "ns/iter",
            "extra": "iterations: 14956\ncpu: 46317.31746456279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10845.543172208687,
            "unit": "ns/iter",
            "extra": "iterations: 64567\ncpu: 10845.311072219583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10840.270289200718,
            "unit": "ns/iter",
            "extra": "iterations: 64246\ncpu: 10840.053855492959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10884.729831435847,
            "unit": "ns/iter",
            "extra": "iterations: 64308\ncpu: 10884.456055234037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 22371.097777919465,
            "unit": "ns/iter",
            "extra": "iterations: 31367\ncpu: 22370.226671342447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 21112.6067650081,
            "unit": "ns/iter",
            "extra": "iterations: 33082\ncpu: 21112.003506438294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 6051.808029657543,
            "unit": "ns/iter",
            "extra": "iterations: 115721\ncpu: 6051.261223114136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 31632.92126447213,
            "unit": "ns/iter",
            "extra": "iterations: 22112\ncpu: 31631.72485528205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 25208.13436075493,
            "unit": "ns/iter",
            "extra": "iterations: 27642\ncpu: 25206.78315606695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 25168.013859889044,
            "unit": "ns/iter",
            "extra": "iterations: 27778\ncpu: 25167.459860321113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 26231.890072784743,
            "unit": "ns/iter",
            "extra": "iterations: 26654\ncpu: 26230.880918435836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 56521.14888817217,
            "unit": "ns/iter",
            "extra": "iterations: 12412\ncpu: 56521.40670319062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 216523.02880149471,
            "unit": "ns/iter",
            "extra": "iterations: 3229\ncpu: 216513.25487767163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 181806.27232490949,
            "unit": "ns/iter",
            "extra": "iterations: 3841\ncpu: 181797.21426711732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 182377.2341920472,
            "unit": "ns/iter",
            "extra": "iterations: 3843\ncpu: 182367.8116055167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 182916.07843651416,
            "unit": "ns/iter",
            "extra": "iterations: 3812\ncpu: 182911.43756558117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 108612.75632076849,
            "unit": "ns/iter",
            "extra": "iterations: 6447\ncpu: 108607.77105630632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 182980.58473916058,
            "unit": "ns/iter",
            "extra": "iterations: 3853\ncpu: 182975.707241112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 6033.548393495011,
            "unit": "ns/iter",
            "extra": "iterations: 115966\ncpu: 6033.574495973002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 31464.623125084836,
            "unit": "ns/iter",
            "extra": "iterations: 22201\ncpu: 31463.298950497683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 25144.736433551418,
            "unit": "ns/iter",
            "extra": "iterations: 27826\ncpu: 25144.095450298424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 25242.214896636386,
            "unit": "ns/iter",
            "extra": "iterations: 26073\ncpu: 25241.610094734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 26170.66567791804,
            "unit": "ns/iter",
            "extra": "iterations: 26633\ncpu: 26170.5065144745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 56765.784590426134,
            "unit": "ns/iter",
            "extra": "iterations: 12330\ncpu: 56764.52554744571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 209189.67374402983,
            "unit": "ns/iter",
            "extra": "iterations: 3344\ncpu: 209190.4605263183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 177675.0460091513,
            "unit": "ns/iter",
            "extra": "iterations: 3934\ncpu: 177671.55566853215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 178278.44362054838,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 178272.84581948278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 179003.00334877768,
            "unit": "ns/iter",
            "extra": "iterations: 3882\ncpu: 179002.03503348495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 106989.3650600646,
            "unit": "ns/iter",
            "extra": "iterations: 6577\ncpu: 106985.52531549474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 178533.30351682944,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 178522.75739041803 ns\nthreads: 1"
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
        "date": 1702409105633,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1586.5945945946287,
            "unit": "ns/iter",
            "extra": "iterations: 439301\ncpu: 1586.4780640153335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24327.951508242873,
            "unit": "ns/iter",
            "extra": "iterations: 34212\ncpu: 24326.812229627034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 49650.477875044264,
            "unit": "ns/iter",
            "extra": "iterations: 16678\ncpu: 49649.32845664947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 62159.20980000079,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62155.79 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 88550.16311590615,
            "unit": "ns/iter",
            "extra": "iterations: 10655\ncpu: 88547.0107930549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 109589.58126339952,
            "unit": "ns/iter",
            "extra": "iterations: 7931\ncpu: 109584.97036943644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 134570.84831034933,
            "unit": "ns/iter",
            "extra": "iterations: 6599\ncpu: 134564.07031368403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 156168.4891813901,
            "unit": "ns/iter",
            "extra": "iterations: 5546\ncpu: 156160.15146051213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 181820.36017717206,
            "unit": "ns/iter",
            "extra": "iterations: 4967\ncpu: 181812.80450976465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1349.343355466357,
            "unit": "ns/iter",
            "extra": "iterations: 519284\ncpu: 1349.2786221027404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1105.9486651458853,
            "unit": "ns/iter",
            "extra": "iterations: 635650\ncpu: 1105.8763470463298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1093.5917730136764,
            "unit": "ns/iter",
            "extra": "iterations: 638946\ncpu: 1093.5260569750787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1098.1726055222123,
            "unit": "ns/iter",
            "extra": "iterations: 639012\ncpu: 1098.1361852359564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2175.260502739825,
            "unit": "ns/iter",
            "extra": "iterations: 321916\ncpu: 2175.255967395223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7037.496867259232,
            "unit": "ns/iter",
            "extra": "iterations: 116671\ncpu: 7037.194332781925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 42194.341941458115,
            "unit": "ns/iter",
            "extra": "iterations: 19439\ncpu: 42193.80112145684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 32070.946024511755,
            "unit": "ns/iter",
            "extra": "iterations: 25456\ncpu: 32068.96213073542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 31834.517343402433,
            "unit": "ns/iter",
            "extra": "iterations: 25687\ncpu: 31833.125705609753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 31406.637040998165,
            "unit": "ns/iter",
            "extra": "iterations: 26171\ncpu: 31404.535554621485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 77212.82491084376,
            "unit": "ns/iter",
            "extra": "iterations: 11497\ncpu: 77209.29807775925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 809940.5688888812,
            "unit": "ns/iter",
            "extra": "iterations: 1125\ncpu: 809882.6666666652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 660539.1500000338,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660530.5000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 660911.6160000212,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660881.3999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 657461.163999983,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 657417.1 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 479488.2597688558,
            "unit": "ns/iter",
            "extra": "iterations: 1817\ncpu: 479457.62245459476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 669246.6949999698,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 667932.6000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 3596194.4809161755,
            "unit": "ns/iter",
            "extra": "iterations: 262\ncpu: 3596070.610687021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1613138.5259515706,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1613043.5986159192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 4721253.190721715,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4721118.041237113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 10890.550203492701,
            "unit": "ns/iter",
            "extra": "iterations: 77644\ncpu: 10890.535005924474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 59703.96349014174,
            "unit": "ns/iter",
            "extra": "iterations: 14051\ncpu: 59701.94292221209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 45412.93184903545,
            "unit": "ns/iter",
            "extra": "iterations: 18415\ncpu: 45409.90496877534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 45000.944405613016,
            "unit": "ns/iter",
            "extra": "iterations: 18599\ncpu: 44998.89241357046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 44799.05764800438,
            "unit": "ns/iter",
            "extra": "iterations: 18665\ncpu: 44798.04982587758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 88845.16595267048,
            "unit": "ns/iter",
            "extra": "iterations: 9804\ncpu: 88842.08486332119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 851874.7053980104,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 851820.0365965185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 690020.7917586378,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 689999.9264164838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 692370.7267355995,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 692341.9497784317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 689068.2628865617,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 689039.8379970548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 495002.8583473866,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 494978.63968521595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 682748.8477940967,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 682715.4411764728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 3784178.6213991065,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3783898.7654320747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1652610.2319859182,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1652575.746924438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 7150.496006020932,
            "unit": "ns/iter",
            "extra": "iterations: 116926\ncpu: 7150.2428886646185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 41499.36149105736,
            "unit": "ns/iter",
            "extra": "iterations: 19959\ncpu: 41498.281477027886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 33067.8587732946,
            "unit": "ns/iter",
            "extra": "iterations: 25059\ncpu: 33066.103994572804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 32347.405580486982,
            "unit": "ns/iter",
            "extra": "iterations: 25625\ncpu: 32346.165853658564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 32341.503470597658,
            "unit": "ns/iter",
            "extra": "iterations: 25644\ncpu: 32340.660583372246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 75299.54371816873,
            "unit": "ns/iter",
            "extra": "iterations: 11780\ncpu: 75294.98302207178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 850371.3534716165,
            "unit": "ns/iter",
            "extra": "iterations: 1109\ncpu: 850311.0009017152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 679347.5708123855,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 679313.1560028758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 684592.8576563356,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 684562.2573688026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 676815.0230000174,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 676792.4999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 478827.18022936996,
            "unit": "ns/iter",
            "extra": "iterations: 1831\ncpu: 478797.43309666816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 664007.0450000053,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663970.4999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 602.7198955879245,
            "unit": "ns/iter",
            "extra": "iterations: 1160785\ncpu: 602.6937805019884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 4219.403869655203,
            "unit": "ns/iter",
            "extra": "iterations: 166113\ncpu: 4219.238108998082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3123.323260380537,
            "unit": "ns/iter",
            "extra": "iterations: 223569\ncpu: 3122.8846575330344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 3337.3665549986654,
            "unit": "ns/iter",
            "extra": "iterations: 209251\ncpu: 3337.2657717286743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2538.457665026004,
            "unit": "ns/iter",
            "extra": "iterations: 276320\ncpu: 2538.3891864504817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 20281.59944596641,
            "unit": "ns/iter",
            "extra": "iterations: 33933\ncpu: 20280.505702413528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 41383.38995130269,
            "unit": "ns/iter",
            "extra": "iterations: 16838\ncpu: 41382.53355505403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 10289.205154993275,
            "unit": "ns/iter",
            "extra": "iterations: 67003\ncpu: 10288.901989463264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 10365.16006637326,
            "unit": "ns/iter",
            "extra": "iterations: 67497\ncpu: 10364.659170037106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 10358.267140597474,
            "unit": "ns/iter",
            "extra": "iterations: 67661\ncpu: 10357.992048595195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 21193.75962964093,
            "unit": "ns/iter",
            "extra": "iterations: 33049\ncpu: 21192.22366788715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 20125.15071722145,
            "unit": "ns/iter",
            "extra": "iterations: 34787\ncpu: 20124.34242676885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5844.591529643827,
            "unit": "ns/iter",
            "extra": "iterations: 119688\ncpu: 5844.351981819402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 29888.317190041977,
            "unit": "ns/iter",
            "extra": "iterations: 23374\ncpu: 29887.357747924936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 23964.348958154635,
            "unit": "ns/iter",
            "extra": "iterations: 29227\ncpu: 23963.59872720408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 24010.451764624795,
            "unit": "ns/iter",
            "extra": "iterations: 29128\ncpu: 24009.69513869782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 24515.774110008948,
            "unit": "ns/iter",
            "extra": "iterations: 28961\ncpu: 24513.77369565969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 55268.9460162332,
            "unit": "ns/iter",
            "extra": "iterations: 12689\ncpu: 55268.397824886924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 204288.2058389736,
            "unit": "ns/iter",
            "extra": "iterations: 3391\ncpu: 204281.74579770022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 174444.8780730038,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 174434.34318351146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 171701.1379563857,
            "unit": "ns/iter",
            "extra": "iterations: 4081\ncpu: 171693.72702769144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 171525.1088501996,
            "unit": "ns/iter",
            "extra": "iterations: 4079\ncpu: 171515.7881833796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 102335.99722221942,
            "unit": "ns/iter",
            "extra": "iterations: 6840\ncpu: 102332.7192982474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 173811.43247269263,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 173802.55710029713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5971.131275279353,
            "unit": "ns/iter",
            "extra": "iterations: 117684\ncpu: 5970.950171646093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 29540.650291458616,
            "unit": "ns/iter",
            "extra": "iterations: 23674\ncpu: 29539.38075525932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 23854.07665174287,
            "unit": "ns/iter",
            "extra": "iterations: 29484\ncpu: 23853.846153846396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 24099.502647867528,
            "unit": "ns/iter",
            "extra": "iterations: 29080\ncpu: 24099.23314993135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 24813.36197278258,
            "unit": "ns/iter",
            "extra": "iterations: 28143\ncpu: 24812.884198557684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 53902.120033747866,
            "unit": "ns/iter",
            "extra": "iterations: 13038\ncpu: 53900.4141739526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 197825.1464305832,
            "unit": "ns/iter",
            "extra": "iterations: 3558\ncpu: 197812.3946037105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 169839.5620455646,
            "unit": "ns/iter",
            "extra": "iterations: 4126\ncpu: 169834.05235094647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 169657.65662943135,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 169648.42156386928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 169410.09410623694,
            "unit": "ns/iter",
            "extra": "iterations: 4123\ncpu: 169404.77807421758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 99887.3546819193,
            "unit": "ns/iter",
            "extra": "iterations: 6995\ncpu: 99884.50321658362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 169762.29358911215,
            "unit": "ns/iter",
            "extra": "iterations: 4118\ncpu: 169760.12627489155 ns\nthreads: 1"
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
        "date": 1702412536887,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1536.339937748101,
            "unit": "ns/iter",
            "extra": "iterations: 452677\ncpu: 1536.283045085127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17927.429796408484,
            "unit": "ns/iter",
            "extra": "iterations: 40817\ncpu: 17926.932405615313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37448.056420232184,
            "unit": "ns/iter",
            "extra": "iterations: 22102\ncpu: 37445.692697493454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 55912.78810875201,
            "unit": "ns/iter",
            "extra": "iterations: 15154\ncpu: 55910.380097663954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 62036.92889999957,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62035.820000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 77829.35449875935,
            "unit": "ns/iter",
            "extra": "iterations: 11292\ncpu: 77826.4169323415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 92699.63246586734,
            "unit": "ns/iter",
            "extra": "iterations: 9376\ncpu: 92694.4219283276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 111257.11297898855,
            "unit": "ns/iter",
            "extra": "iterations: 8090\ncpu: 111255.71075401727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 125633.7078700366,
            "unit": "ns/iter",
            "extra": "iterations: 6925\ncpu: 125628.5631768953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1282.7548679012664,
            "unit": "ns/iter",
            "extra": "iterations: 546334\ncpu: 1282.7457196513506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1043.308653177161,
            "unit": "ns/iter",
            "extra": "iterations: 671187\ncpu: 1043.260522030373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1037.456861519693,
            "unit": "ns/iter",
            "extra": "iterations: 675244\ncpu: 1037.449425689082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1031.5917616121453,
            "unit": "ns/iter",
            "extra": "iterations: 679162\ncpu: 1031.57523536358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2076.4499720663525,
            "unit": "ns/iter",
            "extra": "iterations: 338301\ncpu: 2076.4224758425216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5651.571550000084,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5651.347000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33701.937829675684,
            "unit": "ns/iter",
            "extra": "iterations: 24835\ncpu: 33700.25367425007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 26214.488297369262,
            "unit": "ns/iter",
            "extra": "iterations: 31745\ncpu: 26214.19436131675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25506.184274579635,
            "unit": "ns/iter",
            "extra": "iterations: 32457\ncpu: 25505.29007610067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 25259.848223441546,
            "unit": "ns/iter",
            "extra": "iterations: 33154\ncpu: 25259.1331362731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 61228.21570000383,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61223.40000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 637853.8480000203,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 637848.7999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 519671.66199995065,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519661.99999999674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 518313.5689999858,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518287.0000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 513368.096000022,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513353.30000000214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 370828.1206675181,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 370809.7133076583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 515341.2999999887,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515325.6000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2631036.589235128,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2630981.5864022644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1179671.8680203303,
            "unit": "ns/iter",
            "extra": "iterations: 788\ncpu: 1179617.7664974614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3689751.031872611,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3689563.745019911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9240.478835197711,
            "unit": "ns/iter",
            "extra": "iterations: 91449\ncpu: 9240.061673719789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50729.364901150235,
            "unit": "ns/iter",
            "extra": "iterations: 16388\ncpu: 50727.77642177199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39914.02204971954,
            "unit": "ns/iter",
            "extra": "iterations: 20998\ncpu: 39912.88694161348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39629.954275282675,
            "unit": "ns/iter",
            "extra": "iterations: 21367\ncpu: 39628.21640848025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38556.88404319279,
            "unit": "ns/iter",
            "extra": "iterations: 21577\ncpu: 38556.33776706667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 74016.78808958539,
            "unit": "ns/iter",
            "extra": "iterations: 11788\ncpu: 74013.63250763452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 690618.1853513118,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 690592.4514200289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 547149.1749999586,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547116.1999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 538785.4990000278,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538769.2999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 537869.6239999953,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537866.1000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 388373.6691695964,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 388359.3197879873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 525989.7770000066,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525986.6000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2804283.1411411366,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2804132.1321321162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1240552.5213333324,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1240497.4666666721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5569.555719999926,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5569.28400000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32226.87851652523,
            "unit": "ns/iter",
            "extra": "iterations: 26020\ncpu: 32225.734050730163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 25305.43834618386,
            "unit": "ns/iter",
            "extra": "iterations: 32942\ncpu: 25304.274178859996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24455.503543804673,
            "unit": "ns/iter",
            "extra": "iterations: 34003\ncpu: 24454.089345057822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24530.302284709112,
            "unit": "ns/iter",
            "extra": "iterations: 34140\ncpu: 24528.512009373157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64061.47149999697,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 64057.37000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 664849.6500000078,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 664817.5999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 525935.1419999803,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525902.7999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 522955.3820000206,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522925.7999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 523998.0540000033,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523994.10000000306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 371586.9911504439,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 371576.2747576917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 510272.9920000115,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510246.49999999383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 615.6611120901678,
            "unit": "ns/iter",
            "extra": "iterations: 1112176\ncpu: 615.6246853016067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3781.847907942902,
            "unit": "ns/iter",
            "extra": "iterations: 184842\ncpu: 3781.717358608972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2861.6975166708494,
            "unit": "ns/iter",
            "extra": "iterations: 243987\ncpu: 2861.517211982623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2813.5343697079543,
            "unit": "ns/iter",
            "extra": "iterations: 249202\ncpu: 2813.349411320933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2239.65433537155,
            "unit": "ns/iter",
            "extra": "iterations: 311565\ncpu: 2239.458218991203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17225.857582192686,
            "unit": "ns/iter",
            "extra": "iterations: 40971\ncpu: 17224.995728686084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 34639.63676018429,
            "unit": "ns/iter",
            "extra": "iterations: 20174\ncpu: 34637.513631406866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8392.61415701686,
            "unit": "ns/iter",
            "extra": "iterations: 84029\ncpu: 8392.234823691824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8393.438033626087,
            "unit": "ns/iter",
            "extra": "iterations: 83626\ncpu: 8393.15643460163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8430.892699261545,
            "unit": "ns/iter",
            "extra": "iterations: 83019\ncpu: 8430.470133342984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16622.992963439287,
            "unit": "ns/iter",
            "extra": "iterations: 42066\ncpu: 16622.440926163614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15914.59933903148,
            "unit": "ns/iter",
            "extra": "iterations: 49019\ncpu: 15913.766090699617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5407.911839322103,
            "unit": "ns/iter",
            "extra": "iterations: 128107\ncpu: 5407.581943219343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27056.438960338557,
            "unit": "ns/iter",
            "extra": "iterations: 25893\ncpu: 27054.512802687917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21828.05287291706,
            "unit": "ns/iter",
            "extra": "iterations: 32058\ncpu: 21827.082163578427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21776.72626808384,
            "unit": "ns/iter",
            "extra": "iterations: 32214\ncpu: 21774.7563171293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22205.865290379028,
            "unit": "ns/iter",
            "extra": "iterations: 31631\ncpu: 22204.508235591373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50891.822741498974,
            "unit": "ns/iter",
            "extra": "iterations: 13737\ncpu: 50889.79398704279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 180746.83181699368,
            "unit": "ns/iter",
            "extra": "iterations: 3847\ncpu: 180738.34156485405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 152042.35449389514,
            "unit": "ns/iter",
            "extra": "iterations: 4584\ncpu: 152036.4092495642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 151064.31659483156,
            "unit": "ns/iter",
            "extra": "iterations: 4640\ncpu: 151055.92672413914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 152742.718763697,
            "unit": "ns/iter",
            "extra": "iterations: 4562\ncpu: 152735.4888206902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 93698.15564774905,
            "unit": "ns/iter",
            "extra": "iterations: 7472\ncpu: 93693.95074946462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 151481.7218858143,
            "unit": "ns/iter",
            "extra": "iterations: 4624\ncpu: 151474.7837370214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5336.574431009838,
            "unit": "ns/iter",
            "extra": "iterations: 131417\ncpu: 5336.532564280102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26491.599856240762,
            "unit": "ns/iter",
            "extra": "iterations: 26433\ncpu: 26490.75019861501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21399.8691840033,
            "unit": "ns/iter",
            "extra": "iterations: 32733\ncpu: 21399.18736443351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21291.189749975663,
            "unit": "ns/iter",
            "extra": "iterations: 32917\ncpu: 21289.154540206797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21778.467551348873,
            "unit": "ns/iter",
            "extra": "iterations: 32328\ncpu: 21777.555060628532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49394.19905347309,
            "unit": "ns/iter",
            "extra": "iterations: 14157\ncpu: 49392.413646959234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 176855.77332324375,
            "unit": "ns/iter",
            "extra": "iterations: 3966\ncpu: 176852.74836107204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 148600.77622080434,
            "unit": "ns/iter",
            "extra": "iterations: 4710\ncpu: 148588.38641188786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 150244.81193337627,
            "unit": "ns/iter",
            "extra": "iterations: 4743\ncpu: 150239.1524351683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 149404.70113955045,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 149394.64631262072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 92547.89720611587,
            "unit": "ns/iter",
            "extra": "iterations: 7588\ncpu: 92542.68581971584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 147638.16088327445,
            "unit": "ns/iter",
            "extra": "iterations: 4755\ncpu: 147630.43112513187 ns\nthreads: 1"
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
        "date": 1702415982994,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1506.67771386577,
            "unit": "ns/iter",
            "extra": "iterations: 465397\ncpu: 1506.6667812641683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17764.243748247063,
            "unit": "ns/iter",
            "extra": "iterations: 46347\ncpu: 17763.397846678316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37714.908921595146,
            "unit": "ns/iter",
            "extra": "iterations: 22014\ncpu: 37714.29544835106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 57299.34685193804,
            "unit": "ns/iter",
            "extra": "iterations: 15041\ncpu: 57296.45635263613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 61780.82440000025,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61777.99999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 78418.55509040695,
            "unit": "ns/iter",
            "extra": "iterations: 11227\ncpu: 78417.85873341055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 93535.87346675145,
            "unit": "ns/iter",
            "extra": "iterations: 9294\ncpu: 93533.49472778135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 108462.00298247952,
            "unit": "ns/iter",
            "extra": "iterations: 8047\ncpu: 108460.90468497579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 127654.88288417451,
            "unit": "ns/iter",
            "extra": "iterations: 6976\ncpu: 127653.59805045881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1302.244068886123,
            "unit": "ns/iter",
            "extra": "iterations: 535144\ncpu: 1302.196791891528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1060.307769121727,
            "unit": "ns/iter",
            "extra": "iterations: 660937\ncpu: 1060.2700408662258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1054.1507066210831,
            "unit": "ns/iter",
            "extra": "iterations: 663156\ncpu: 1054.1109482535032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1049.6198385599553,
            "unit": "ns/iter",
            "extra": "iterations: 667740\ncpu: 1049.6118249618105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2122.9347515627833,
            "unit": "ns/iter",
            "extra": "iterations: 330506\ncpu: 2122.8464838762347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5612.161729999912,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5611.929999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 32626.647310880704,
            "unit": "ns/iter",
            "extra": "iterations: 24971\ncpu: 32625.389451764055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25773.303468756192,
            "unit": "ns/iter",
            "extra": "iterations: 31654\ncpu: 25772.5753459278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25087.426451691917,
            "unit": "ns/iter",
            "extra": "iterations: 32686\ncpu: 25087.132105488643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 25282.270910437426,
            "unit": "ns/iter",
            "extra": "iterations: 32424\ncpu: 25281.125092524086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 61131.62200000204,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61128.300000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 640794.4970000017,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640768.399999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 517109.19399999967,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517081.09999999864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 517195.22500002314,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517186.8999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 509376.38700000325,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509357.6999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 369160.8604651166,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 369146.8498942911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 513271.6610000045,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513263.50000000076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2626968.3087819414,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2626852.6912181266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1210613.7624020735,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 1210554.8302872078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3620261.233463047,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3620141.2451361828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9141.616494046983,
            "unit": "ns/iter",
            "extra": "iterations: 92979\ncpu: 9141.317932006148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50542.19462227866,
            "unit": "ns/iter",
            "extra": "iterations: 16401\ncpu: 50540.52801658441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39660.00897331807,
            "unit": "ns/iter",
            "extra": "iterations: 20951\ncpu: 39658.21679156123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39006.1593388576,
            "unit": "ns/iter",
            "extra": "iterations: 21357\ncpu: 39005.492344430415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38990.298392764074,
            "unit": "ns/iter",
            "extra": "iterations: 21341\ncpu: 38988.257345016704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 74065.91156404497,
            "unit": "ns/iter",
            "extra": "iterations: 11726\ncpu: 74065.14582977981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 679544.1364963475,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 678933.0656934328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 537871.2699999823,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537823.699999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 536446.7590000003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536427.0000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 534211.3549999965,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534183.800000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 384202.0659630657,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 384186.4995602475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 524414.7679999855,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524382.6000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2794433.645833311,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2794307.440476183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1180936.9279392897,
            "unit": "ns/iter",
            "extra": "iterations: 791\ncpu: 1180889.7597977195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5531.5835600001155,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5531.42600000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32092.1476320968,
            "unit": "ns/iter",
            "extra": "iterations: 25909\ncpu: 32091.431548882596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 25438.788793103864,
            "unit": "ns/iter",
            "extra": "iterations: 32480\ncpu: 25437.841748768627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24589.064818418312,
            "unit": "ns/iter",
            "extra": "iterations: 33401\ncpu: 24588.13508577587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24712.4790975643,
            "unit": "ns/iter",
            "extra": "iterations: 33465\ncpu: 24711.752577319563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 59662.582299998234,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59660.61999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 651151.3490000027,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651093.5000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 525126.4510000056,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525092.8999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 519095.35999999434,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519073.2000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 517554.4429999945,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517538.2999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 367666.0335008395,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 367643.9279731992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 506845.9000000018,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506819.7999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 610.1005243299356,
            "unit": "ns/iter",
            "extra": "iterations: 1146797\ncpu: 610.0768488232875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3768.9362801501206,
            "unit": "ns/iter",
            "extra": "iterations: 185986\ncpu: 3768.8164700568886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2963.263699731082,
            "unit": "ns/iter",
            "extra": "iterations: 236428\ncpu: 2963.1934457847765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2940.3457985005157,
            "unit": "ns/iter",
            "extra": "iterations: 238879\ncpu: 2940.2957145667992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2300.446508316239,
            "unit": "ns/iter",
            "extra": "iterations: 304767\ncpu: 2300.3684782144987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17341.11875556484,
            "unit": "ns/iter",
            "extra": "iterations: 40436\ncpu: 17340.644475220182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 36639.34444677309,
            "unit": "ns/iter",
            "extra": "iterations: 19106\ncpu: 36637.155867266876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8490.832731911545,
            "unit": "ns/iter",
            "extra": "iterations: 82305\ncpu: 8490.468379806813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8489.221169726992,
            "unit": "ns/iter",
            "extra": "iterations: 82344\ncpu: 8488.77028077339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8459.53421476858,
            "unit": "ns/iter",
            "extra": "iterations: 83122\ncpu: 8459.135968816934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16725.561509974275,
            "unit": "ns/iter",
            "extra": "iterations: 41855\ncpu: 16724.945645681615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15987.926303025282,
            "unit": "ns/iter",
            "extra": "iterations: 43706\ncpu: 15987.70420537221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5279.666070835976,
            "unit": "ns/iter",
            "extra": "iterations: 132588\ncpu: 5279.400096539652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26702.454884640916,
            "unit": "ns/iter",
            "extra": "iterations: 26266\ncpu: 26701.560953323828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21315.42355271248,
            "unit": "ns/iter",
            "extra": "iterations: 32820\ncpu: 21314.753199268875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21427.926482771458,
            "unit": "ns/iter",
            "extra": "iterations: 32591\ncpu: 21426.81415114591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21770.108932395433,
            "unit": "ns/iter",
            "extra": "iterations: 32231\ncpu: 21769.703080884952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50696.47308720599,
            "unit": "ns/iter",
            "extra": "iterations: 13841\ncpu: 50694.17672133539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 172556.0170076355,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 172547.76928765213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 144410.54424143102,
            "unit": "ns/iter",
            "extra": "iterations: 4871\ncpu: 144405.29665366356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 144367.77901693212,
            "unit": "ns/iter",
            "extra": "iterations: 4842\ncpu: 144363.19702602318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 143634.3022395782,
            "unit": "ns/iter",
            "extra": "iterations: 4867\ncpu: 143631.8471337582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 90184.46591789302,
            "unit": "ns/iter",
            "extra": "iterations: 7746\ncpu: 90180.20914020087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 144016.96784168176,
            "unit": "ns/iter",
            "extra": "iterations: 4851\ncpu: 144013.3580704985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5236.436233620264,
            "unit": "ns/iter",
            "extra": "iterations: 133550\ncpu: 5236.140022463494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26204.632105400255,
            "unit": "ns/iter",
            "extra": "iterations: 26793\ncpu: 26202.892546560593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21191.75404363771,
            "unit": "ns/iter",
            "extra": "iterations: 32953\ncpu: 21191.063029162837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20764.73314506609,
            "unit": "ns/iter",
            "extra": "iterations: 33640\ncpu: 20763.4363852556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21362.03578710215,
            "unit": "ns/iter",
            "extra": "iterations: 32861\ncpu: 21361.452785977046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48967.8324263985,
            "unit": "ns/iter",
            "extra": "iterations: 14334\ncpu: 48964.02260359911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 169715.72266861555,
            "unit": "ns/iter",
            "extra": "iterations: 4107\ncpu: 169706.03847090495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 141819.9622488331,
            "unit": "ns/iter",
            "extra": "iterations: 4927\ncpu: 141806.14978688947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 142092.88884397724,
            "unit": "ns/iter",
            "extra": "iterations: 4948\ncpu: 142088.0153597415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 142759.51405295127,
            "unit": "ns/iter",
            "extra": "iterations: 4910\ncpu: 142750.71283095502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 89521.7528118547,
            "unit": "ns/iter",
            "extra": "iterations: 7824\ncpu: 89518.4176891618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 141860.7548321428,
            "unit": "ns/iter",
            "extra": "iterations: 4915\ncpu: 141858.0467955231 ns\nthreads: 1"
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
        "date": 1702418345168,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1493.7015463753019,
            "unit": "ns/iter",
            "extra": "iterations: 470455\ncpu: 1493.6731462095206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17939.171891304508,
            "unit": "ns/iter",
            "extra": "iterations: 46000\ncpu: 17939.069565217393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37527.60793111274,
            "unit": "ns/iter",
            "extra": "iterations: 22065\ncpu: 37526.75277588942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 55708.50423785048,
            "unit": "ns/iter",
            "extra": "iterations: 15102\ncpu: 55708.52205005955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 62906.60939999952,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62905.24999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 78760.9945721008,
            "unit": "ns/iter",
            "extra": "iterations: 11054\ncpu: 78759.20933598699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 94642.42955622666,
            "unit": "ns/iter",
            "extra": "iterations: 9284\ncpu: 94639.98276604906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 109489.53425338752,
            "unit": "ns/iter",
            "extra": "iterations: 8043\ncpu: 109487.82792490361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 127020.50250737616,
            "unit": "ns/iter",
            "extra": "iterations: 6780\ncpu: 127013.49557522126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1321.149208180371,
            "unit": "ns/iter",
            "extra": "iterations: 530487\ncpu: 1321.112864217219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1122.4511501956167,
            "unit": "ns/iter",
            "extra": "iterations: 622981\ncpu: 1122.4183402062013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1190.066422995671,
            "unit": "ns/iter",
            "extra": "iterations: 588772\ncpu: 1190.0854660208036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1133.3150392905936,
            "unit": "ns/iter",
            "extra": "iterations: 617323\ncpu: 1133.2780408311369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2139.6643236994264,
            "unit": "ns/iter",
            "extra": "iterations: 324375\ncpu: 2139.6624277456654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5629.852639999911,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5629.853000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33210.03248105288,
            "unit": "ns/iter",
            "extra": "iterations: 24014\ncpu: 33209.20712917464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 26445.350737295525,
            "unit": "ns/iter",
            "extra": "iterations: 31602\ncpu: 26445.40535409156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25407.35464953934,
            "unit": "ns/iter",
            "extra": "iterations: 32229\ncpu: 25407.195383040053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 25420.715128069205,
            "unit": "ns/iter",
            "extra": "iterations: 32053\ncpu: 25420.450503853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 61458.05010000061,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61456.86000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 664676.500000013,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 664383.6000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 522459.32600001764,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522450.79999999783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 518559.1400000078,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518536.300000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 517576.46900000505,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517585.40000000154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 372012.2129115065,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 372001.0260795218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 517774.0489999963,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517763.6000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2635993.129943493,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2635957.6271186466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1156647.2769423423,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 1156635.7142857146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3632742.3891050317,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3632660.700389107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9159.274299941872,
            "unit": "ns/iter",
            "extra": "iterations: 92778\ncpu: 9159.148720601852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50511.11999266073,
            "unit": "ns/iter",
            "extra": "iterations: 16351\ncpu: 50510.71494098209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 40168.64425810839,
            "unit": "ns/iter",
            "extra": "iterations: 20751\ncpu: 40168.1798467543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39402.0884631847,
            "unit": "ns/iter",
            "extra": "iterations: 21037\ncpu: 39401.60193944008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38676.68667040547,
            "unit": "ns/iter",
            "extra": "iterations: 21396\ncpu: 38675.490745933785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 74026.98534146883,
            "unit": "ns/iter",
            "extra": "iterations: 11802\ncpu: 74025.6566683613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 674604.5442028915,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 674586.9565217417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 545718.6559999912,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 545728.1999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 541061.4170000087,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541041.3999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 537001.8850000236,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536989.400000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 387086.49779347604,
            "unit": "ns/iter",
            "extra": "iterations: 2266\ncpu: 387080.05295675294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 528071.8850000028,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528080.199999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2798700.6426427,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2798685.5855855704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1184312.6281725888,
            "unit": "ns/iter",
            "extra": "iterations: 788\ncpu: 1184294.035532994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5505.756969999993,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5505.787000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32094.01926548012,
            "unit": "ns/iter",
            "extra": "iterations: 25486\ncpu: 32094.267440947933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 25313.0051644206,
            "unit": "ns/iter",
            "extra": "iterations: 32143\ncpu: 25312.618610584126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24451.80346198709,
            "unit": "ns/iter",
            "extra": "iterations: 33449\ncpu: 24451.92382432952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 25333.030895062424,
            "unit": "ns/iter",
            "extra": "iterations: 32400\ncpu: 25332.379629629617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 59721.0213999972,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59721.96999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 656011.8390000298,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 655989.9999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 522972.4859999578,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522950.7000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 523139.2549999896,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523147.90000000503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 520639.66499997606,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520629.99999999703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 370778.98655462556,
            "unit": "ns/iter",
            "extra": "iterations: 2380\ncpu: 370773.61344537913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 510753.3110000304,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510761.69999999617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 611.0715387422038,
            "unit": "ns/iter",
            "extra": "iterations: 1148217\ncpu: 611.0521791612537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3783.7910284228533,
            "unit": "ns/iter",
            "extra": "iterations: 185274\ncpu: 3778.7962693092295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2852.943971908541,
            "unit": "ns/iter",
            "extra": "iterations: 245484\ncpu: 2852.9423506216535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2749.8738989667163,
            "unit": "ns/iter",
            "extra": "iterations: 254193\ncpu: 2749.9152218983177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2266.1866035850067,
            "unit": "ns/iter",
            "extra": "iterations: 308172\ncpu: 2266.143906649547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17501.553301759264,
            "unit": "ns/iter",
            "extra": "iterations: 40327\ncpu: 17501.4952761176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 35403.58623301786,
            "unit": "ns/iter",
            "extra": "iterations: 19801\ncpu: 35403.19680824195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8450.604865904117,
            "unit": "ns/iter",
            "extra": "iterations: 82739\ncpu: 8450.55777807325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8465.679279279273,
            "unit": "ns/iter",
            "extra": "iterations: 82695\ncpu: 8465.41145172018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8385.018284123928,
            "unit": "ns/iter",
            "extra": "iterations: 82640\ncpu: 8384.886253630259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16732.463457907856,
            "unit": "ns/iter",
            "extra": "iterations: 43963\ncpu: 16732.34765598338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15775.251981802849,
            "unit": "ns/iter",
            "extra": "iterations: 44404\ncpu: 15775.171155751734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5324.143301115222,
            "unit": "ns/iter",
            "extra": "iterations: 131604\ncpu: 5324.16567885476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26663.957702549054,
            "unit": "ns/iter",
            "extra": "iterations: 26290\ncpu: 26663.168505134887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21256.166944908262,
            "unit": "ns/iter",
            "extra": "iterations: 32945\ncpu: 21255.914402792638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21328.997939143628,
            "unit": "ns/iter",
            "extra": "iterations: 32996\ncpu: 21328.59740574609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21697.06806282734,
            "unit": "ns/iter",
            "extra": "iterations: 32279\ncpu: 21696.762601071838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50768.09918910971,
            "unit": "ns/iter",
            "extra": "iterations: 13812\ncpu: 50766.232261801524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 174800.1362955619,
            "unit": "ns/iter",
            "extra": "iterations: 4006\ncpu: 174797.60359460773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 147437.03635217686,
            "unit": "ns/iter",
            "extra": "iterations: 4759\ncpu: 147437.8230720754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 145871.76228144084,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 145872.3771856805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 146137.09282877325,
            "unit": "ns/iter",
            "extra": "iterations: 4783\ncpu: 146133.45180848672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 90720.50251970477,
            "unit": "ns/iter",
            "extra": "iterations: 7739\ncpu: 90717.39242796278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 145925.0468031762,
            "unit": "ns/iter",
            "extra": "iterations: 4786\ncpu: 145920.6644379454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5294.223977800985,
            "unit": "ns/iter",
            "extra": "iterations: 131897\ncpu: 5293.966504166069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26257.0988374273,
            "unit": "ns/iter",
            "extra": "iterations: 26579\ncpu: 26256.67256104451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21083.904059373453,
            "unit": "ns/iter",
            "extra": "iterations: 33281\ncpu: 21084.020912832915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20719.4508174916,
            "unit": "ns/iter",
            "extra": "iterations: 33823\ncpu: 20719.619785353298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21321.607956447027,
            "unit": "ns/iter",
            "extra": "iterations: 32879\ncpu: 21321.64907691814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48981.85107275361,
            "unit": "ns/iter",
            "extra": "iterations: 14309\ncpu: 48981.10979104031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 169026.91946472466,
            "unit": "ns/iter",
            "extra": "iterations: 4110\ncpu: 169025.3771289525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 141643.83957868908,
            "unit": "ns/iter",
            "extra": "iterations: 4937\ncpu: 141639.43690500478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 142385.29087220802,
            "unit": "ns/iter",
            "extra": "iterations: 4930\ncpu: 142380.56795131674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 142353.92343813574,
            "unit": "ns/iter",
            "extra": "iterations: 4898\ncpu: 142346.10044916254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 89482.61198016108,
            "unit": "ns/iter",
            "extra": "iterations: 7863\ncpu: 89481.36843443984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 141790.24489383274,
            "unit": "ns/iter",
            "extra": "iterations: 4945\ncpu: 141784.12537917023 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420961523,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1490.5868785215994,
            "unit": "ns/iter",
            "extra": "iterations: 480769\ncpu: 1490.5865394815391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17955.279849562732,
            "unit": "ns/iter",
            "extra": "iterations: 47329\ncpu: 17954.659933655894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37780.17216067933,
            "unit": "ns/iter",
            "extra": "iterations: 22206\ncpu: 37779.32090426012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 55459.22269241158,
            "unit": "ns/iter",
            "extra": "iterations: 15124\ncpu: 55459.197302300985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 62285.1838000031,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62284.44999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 77428.04035388517,
            "unit": "ns/iter",
            "extra": "iterations: 11077\ncpu: 77426.1713460323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 92940.51483163021,
            "unit": "ns/iter",
            "extra": "iterations: 9473\ncpu: 92938.0871951863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 108194.00961064524,
            "unit": "ns/iter",
            "extra": "iterations: 8116\ncpu: 108191.72005914248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 127966.81439619565,
            "unit": "ns/iter",
            "extra": "iterations: 6724\ncpu: 127965.91314693628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1287.9498713194293,
            "unit": "ns/iter",
            "extra": "iterations: 537377\ncpu: 1287.915560211918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1019.4808038277686,
            "unit": "ns/iter",
            "extra": "iterations: 679250\ncpu: 1019.4589620905426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1061.4119644343768,
            "unit": "ns/iter",
            "extra": "iterations: 675034\ncpu: 1061.3860931449374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1032.92897701894,
            "unit": "ns/iter",
            "extra": "iterations: 693874\ncpu: 1032.9203861219758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2062.554721454008,
            "unit": "ns/iter",
            "extra": "iterations: 346747\ncpu: 2062.5317594672742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5702.567970000132,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5702.368999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 32406.55633634133,
            "unit": "ns/iter",
            "extra": "iterations: 25046\ncpu: 32406.132715802898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 26256.962493071853,
            "unit": "ns/iter",
            "extra": "iterations: 32474\ncpu: 26256.552934655374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24563.81035720749,
            "unit": "ns/iter",
            "extra": "iterations: 33426\ncpu: 24563.60617483396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24802.138756123113,
            "unit": "ns/iter",
            "extra": "iterations: 33476\ncpu: 24801.631019237637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 62120.45109999735,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62119.389999999796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 661090.0069999844,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660890.2999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 523851.9840000322,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523834.49999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 519230.991000029,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519230.70000000135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 520295.09400000505,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520267.00000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 372936.50926326035,
            "unit": "ns/iter",
            "extra": "iterations: 2321\ncpu: 372926.66953899304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 518514.58999999525,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518492.4000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2633120.201133071,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2633050.424929179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1176437.1867852535,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 1176410.5463786537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3621159.5642023995,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3621090.6614786033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9278.015341111202,
            "unit": "ns/iter",
            "extra": "iterations: 89824\ncpu: 9277.688591022436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50305.36252670151,
            "unit": "ns/iter",
            "extra": "iterations: 16385\ncpu: 50304.62618248402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39615.37146071577,
            "unit": "ns/iter",
            "extra": "iterations: 21332\ncpu: 39613.571160697444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39085.457100037536,
            "unit": "ns/iter",
            "extra": "iterations: 21352\ncpu: 39084.4183214687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 39317.40276005624,
            "unit": "ns/iter",
            "extra": "iterations: 21159\ncpu: 39316.24840493417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 73550.07218146605,
            "unit": "ns/iter",
            "extra": "iterations: 11859\ncpu: 73548.60443544995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 677785.3380074071,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 677760.9594095942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 544139.9819999901,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544127.7999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 538627.1840000063,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538603.5999999947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 535887.315000025,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535863.9000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 388273.2034728437,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 388272.484416743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 529173.472000025,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529149.6999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2787369.5315315807,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2787303.00300301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1230992.064558584,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 1230944.5322793196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5647.249339999689,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5646.689000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 31941.165451528035,
            "unit": "ns/iter",
            "extra": "iterations: 25923\ncpu: 31939.10812791716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 25311.8335727616,
            "unit": "ns/iter",
            "extra": "iterations: 32717\ncpu: 25311.168505669822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24282.945635236138,
            "unit": "ns/iter",
            "extra": "iterations: 34011\ncpu: 24282.117550204417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24283.950485751073,
            "unit": "ns/iter",
            "extra": "iterations: 34071\ncpu: 24283.57547474396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 59172.222500001226,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59169.090000000324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 653730.0069999788,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653711.9000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 519924.03600002034,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519913.19999999774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 521531.2369999765,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521512.2000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 520316.6620000275,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520304.2999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 368448.25537294085,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 368447.7454698673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 509396.6290000366,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509372.4999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 594.5933047421508,
            "unit": "ns/iter",
            "extra": "iterations: 1169126\ncpu: 594.5748362451989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3788.8109681422593,
            "unit": "ns/iter",
            "extra": "iterations: 185355\ncpu: 3788.6914299587156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2930.122367634113,
            "unit": "ns/iter",
            "extra": "iterations: 254144\ncpu: 2930.064845127167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2910.770099648959,
            "unit": "ns/iter",
            "extra": "iterations: 245763\ncpu: 2910.611849627485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2267.9146442919064,
            "unit": "ns/iter",
            "extra": "iterations: 308919\ncpu: 2267.8611545421336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 16918.95168134218,
            "unit": "ns/iter",
            "extra": "iterations: 40771\ncpu: 16918.339015476668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 34993.04037370565,
            "unit": "ns/iter",
            "extra": "iterations: 20979\ncpu: 34992.239858906636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8366.339112496966,
            "unit": "ns/iter",
            "extra": "iterations: 86287\ncpu: 8366.114246642033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8352.339010883934,
            "unit": "ns/iter",
            "extra": "iterations: 83428\ncpu: 8352.053267488167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8372.43196425887,
            "unit": "ns/iter",
            "extra": "iterations: 85727\ncpu: 8372.300442101092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16388.353418335166,
            "unit": "ns/iter",
            "extra": "iterations: 42038\ncpu: 16387.884770921617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14801.246554661175,
            "unit": "ns/iter",
            "extra": "iterations: 46367\ncpu: 14800.996398300498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5261.917475873788,
            "unit": "ns/iter",
            "extra": "iterations: 133670\ncpu: 5261.690730904438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26425.831690646017,
            "unit": "ns/iter",
            "extra": "iterations: 26481\ncpu: 26425.18787054858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21062.43115370638,
            "unit": "ns/iter",
            "extra": "iterations: 32972\ncpu: 21061.661409681034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21202.274703318046,
            "unit": "ns/iter",
            "extra": "iterations: 33032\ncpu: 21201.764955195213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21485.42798417647,
            "unit": "ns/iter",
            "extra": "iterations: 32354\ncpu: 21484.87667676335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51219.410981940186,
            "unit": "ns/iter",
            "extra": "iterations: 13677\ncpu: 51217.2771806691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 172701.97015292803,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 172699.11198815875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 146948.1492723567,
            "unit": "ns/iter",
            "extra": "iterations: 4810\ncpu: 146941.3721413728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 145112.5029142428,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 145108.88842631283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 144952.89634399873,
            "unit": "ns/iter",
            "extra": "iterations: 4814\ncpu: 144946.0324054827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 90688.78961039452,
            "unit": "ns/iter",
            "extra": "iterations: 7700\ncpu: 90685.66233766318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 146425.98980652724,
            "unit": "ns/iter",
            "extra": "iterations: 4807\ncpu: 146421.15664655657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5281.098056403446,
            "unit": "ns/iter",
            "extra": "iterations: 132332\ncpu: 5280.960765347748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26250.343579183715,
            "unit": "ns/iter",
            "extra": "iterations: 26710\ncpu: 26250.351928116725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21004.029990993946,
            "unit": "ns/iter",
            "extra": "iterations: 33310\ncpu: 21002.701891323613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20887.845375332414,
            "unit": "ns/iter",
            "extra": "iterations: 33397\ncpu: 20887.861185136575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21357.17546479732,
            "unit": "ns/iter",
            "extra": "iterations: 32810\ncpu: 21356.872904602023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49316.719867641616,
            "unit": "ns/iter",
            "extra": "iterations: 14204\ncpu: 49316.66431990973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 168510.30985233004,
            "unit": "ns/iter",
            "extra": "iterations: 4131\ncpu: 168506.12442507903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 141012.1060126586,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 141010.14918625826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 140945.31858406035,
            "unit": "ns/iter",
            "extra": "iterations: 4972\ncpu: 140945.19308125423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 142045.53467153542,
            "unit": "ns/iter",
            "extra": "iterations: 4932\ncpu: 142044.30251419378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 89357.31232564044,
            "unit": "ns/iter",
            "extra": "iterations: 7886\ncpu: 89356.09941668797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 142402.01092674962,
            "unit": "ns/iter",
            "extra": "iterations: 4942\ncpu: 142397.36948604006 ns\nthreads: 1"
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
        "date": 1702421401610,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1487.7885050312427,
            "unit": "ns/iter",
            "extra": "iterations: 465595\ncpu: 1487.6510701360628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17969.969752298697,
            "unit": "ns/iter",
            "extra": "iterations: 45458\ncpu: 17969.389326411194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37555.741008495475,
            "unit": "ns/iter",
            "extra": "iterations: 22132\ncpu: 37553.44297849269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 55452.266662110946,
            "unit": "ns/iter",
            "extra": "iterations: 14629\ncpu: 55452.6146694921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 61773.2133000004,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61769.71 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 77948.84289387007,
            "unit": "ns/iter",
            "extra": "iterations: 11279\ncpu: 77945.73987055592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 92315.31339457323,
            "unit": "ns/iter",
            "extra": "iterations: 9362\ncpu: 92310.7455671865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 107882.77067159551,
            "unit": "ns/iter",
            "extra": "iterations: 8115\ncpu: 107878.76771410971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 125356.84891146062,
            "unit": "ns/iter",
            "extra": "iterations: 6890\ncpu: 125352.06095791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1303.6646059020711,
            "unit": "ns/iter",
            "extra": "iterations: 536047\ncpu: 1303.615541174561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1057.2673736944062,
            "unit": "ns/iter",
            "extra": "iterations: 660323\ncpu: 1057.2363828005364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1071.6641985732028,
            "unit": "ns/iter",
            "extra": "iterations: 658538\ncpu: 1071.6081683972686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1056.6478922861952,
            "unit": "ns/iter",
            "extra": "iterations: 669849\ncpu: 1056.6375406994705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2078.533153497568,
            "unit": "ns/iter",
            "extra": "iterations: 335862\ncpu: 2078.425365179746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5564.402149999523,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5564.163999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33061.04025227929,
            "unit": "ns/iter",
            "extra": "iterations: 24893\ncpu: 33058.46623548795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25823.564124320495,
            "unit": "ns/iter",
            "extra": "iterations: 31821\ncpu: 25823.478206216023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25191.90854993428,
            "unit": "ns/iter",
            "extra": "iterations: 32433\ncpu: 25190.716245799093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 25094.198699977853,
            "unit": "ns/iter",
            "extra": "iterations: 32461\ncpu: 25093.207233295354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 61673.620400000575,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61670.489999999845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 659222.5379999945,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 659044.0000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 521825.3080000181,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521829.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 521764.9150000057,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521738.59999999905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 519852.07999996416,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519837.5999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 372727.74344649684,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 372705.4146970354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 517749.4940000429,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517717.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2645446.0909090084,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2645348.579545449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1208775.8980391703,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 1208713.9869281056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3624251.992156962,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3624051.7647058824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9204.039394928273,
            "unit": "ns/iter",
            "extra": "iterations: 91890\ncpu: 9203.502013276724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50633.160223003346,
            "unit": "ns/iter",
            "extra": "iterations: 16502\ncpu: 50632.28093564404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39968.58898750003,
            "unit": "ns/iter",
            "extra": "iterations: 20958\ncpu: 39966.638037980716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39342.81940446195,
            "unit": "ns/iter",
            "extra": "iterations: 21191\ncpu: 39341.527063375965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38755.47095220031,
            "unit": "ns/iter",
            "extra": "iterations: 21172\ncpu: 38753.79274513497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 74477.8238521266,
            "unit": "ns/iter",
            "extra": "iterations: 11848\ncpu: 74472.18939905443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 681916.0487444898,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 681879.9852289561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 546410.5609999592,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546393.6999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 538515.4040000088,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538485.8000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 537046.201999999,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537013.3000000053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 386232.4271290582,
            "unit": "ns/iter",
            "extra": "iterations: 2278\ncpu: 386214.2669007902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 525267.0159999866,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525241.1000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2804933.2934131827,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2804811.077844292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1198285.0295250462,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 1198221.6944801027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5485.777449999887,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5485.81900000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32168.617711001316,
            "unit": "ns/iter",
            "extra": "iterations: 25758\ncpu: 32167.19465797026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 25015.133772803947,
            "unit": "ns/iter",
            "extra": "iterations: 32615\ncpu: 25013.987429096982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24359.954756620733,
            "unit": "ns/iter",
            "extra": "iterations: 33795\ncpu: 24358.325196034893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 25894.218916743117,
            "unit": "ns/iter",
            "extra": "iterations: 33547\ncpu: 25893.814648105526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 59077.65310000173,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59075.71999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 663940.2729999803,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663900.9000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 526116.1139999899,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526098.399999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 522875.5370000045,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522854.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 521929.2090000067,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521902.79999999946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 372230.67664418306,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 372218.9713322076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 512831.4770000202,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512798.4000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 610.8294616827533,
            "unit": "ns/iter",
            "extra": "iterations: 1154245\ncpu: 610.820926233163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3773.937317352939,
            "unit": "ns/iter",
            "extra": "iterations: 185809\ncpu: 3773.8258103751614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2979.9522861018586,
            "unit": "ns/iter",
            "extra": "iterations: 242487\ncpu: 2979.933357252168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2950.2135902951486,
            "unit": "ns/iter",
            "extra": "iterations: 245484\ncpu: 2950.137279822728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2268.745207500535,
            "unit": "ns/iter",
            "extra": "iterations: 310433\ncpu: 2268.669567990516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17268.600551167536,
            "unit": "ns/iter",
            "extra": "iterations: 40641\ncpu: 17268.054427794592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 35631.82409479293,
            "unit": "ns/iter",
            "extra": "iterations: 19664\ncpu: 35632.06875508568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8516.99216350653,
            "unit": "ns/iter",
            "extra": "iterations: 82052\ncpu: 8516.758884609753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8503.878802962055,
            "unit": "ns/iter",
            "extra": "iterations: 82370\ncpu: 8503.427218647494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8459.373504759425,
            "unit": "ns/iter",
            "extra": "iterations: 82679\ncpu: 8459.016195164486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16142.608755792608,
            "unit": "ns/iter",
            "extra": "iterations: 43377\ncpu: 16141.87242086825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15984.779083484947,
            "unit": "ns/iter",
            "extra": "iterations: 43229\ncpu: 15984.424807420952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5335.6986409657775,
            "unit": "ns/iter",
            "extra": "iterations: 131564\ncpu: 5335.5720409838605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26785.491960430765,
            "unit": "ns/iter",
            "extra": "iterations: 26183\ncpu: 26785.356910972772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21376.341647029316,
            "unit": "ns/iter",
            "extra": "iterations: 32677\ncpu: 21375.713804816813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21333.525431495906,
            "unit": "ns/iter",
            "extra": "iterations: 32735\ncpu: 21333.432106308344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21759.69462934304,
            "unit": "ns/iter",
            "extra": "iterations: 32901\ncpu: 21758.55141181112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50540.385344826995,
            "unit": "ns/iter",
            "extra": "iterations: 13920\ncpu: 50536.30028735667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 173738.71780209185,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 173733.61511685624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 146269.19059561135,
            "unit": "ns/iter",
            "extra": "iterations: 4785\ncpu: 146259.85370950785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 146038.95292647433,
            "unit": "ns/iter",
            "extra": "iterations: 4801\ncpu: 146035.57592168177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 144587.84709038874,
            "unit": "ns/iter",
            "extra": "iterations: 4846\ncpu: 144584.37886917064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 90889.67226999693,
            "unit": "ns/iter",
            "extra": "iterations: 7674\ncpu: 90882.7860307532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 144201.94073612246,
            "unit": "ns/iter",
            "extra": "iterations: 4809\ncpu: 144193.94884591358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5310.389785724211,
            "unit": "ns/iter",
            "extra": "iterations: 131326\ncpu: 5310.230266664639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26690.95321924007,
            "unit": "ns/iter",
            "extra": "iterations: 26528\ncpu: 26690.379975874417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21159.873879042276,
            "unit": "ns/iter",
            "extra": "iterations: 33119\ncpu: 21158.996346508102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20697.703836045683,
            "unit": "ns/iter",
            "extra": "iterations: 33863\ncpu: 20697.091220506165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21352.772576169875,
            "unit": "ns/iter",
            "extra": "iterations: 32789\ncpu: 21351.66061789019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49374.60859744303,
            "unit": "ns/iter",
            "extra": "iterations: 14167\ncpu: 49372.80299287109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 170614.3586291311,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 170606.19339045318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 142210.61804542437,
            "unit": "ns/iter",
            "extra": "iterations: 4799\ncpu: 142205.7720358408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 141321.53625529792,
            "unit": "ns/iter",
            "extra": "iterations: 4951\ncpu: 141318.66289638533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 142817.5189951006,
            "unit": "ns/iter",
            "extra": "iterations: 4896\ncpu: 142818.50490196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 89483.93543428357,
            "unit": "ns/iter",
            "extra": "iterations: 7806\ncpu: 89478.61901101645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 143042.94350050908,
            "unit": "ns/iter",
            "extra": "iterations: 4885\ncpu: 143034.30910951822 ns\nthreads: 1"
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
        "date": 1702421896087,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1491.2700616261998,
            "unit": "ns/iter",
            "extra": "iterations: 468145\ncpu: 1491.159149408837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17995.323521007092,
            "unit": "ns/iter",
            "extra": "iterations: 45487\ncpu: 17994.301668608612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 38101.94903057252,
            "unit": "ns/iter",
            "extra": "iterations: 21817\ncpu: 38099.11536874914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 56269.143228646935,
            "unit": "ns/iter",
            "extra": "iterations: 14997\ncpu: 56266.633326665346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 62523.46139999645,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62517.780000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 78770.585348382,
            "unit": "ns/iter",
            "extra": "iterations: 11166\ncpu: 78765.37703743506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 93512.46530087238,
            "unit": "ns/iter",
            "extra": "iterations: 9323\ncpu: 93505.11637884809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 109494.77834474204,
            "unit": "ns/iter",
            "extra": "iterations: 8035\ncpu: 109486.24766645925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 125897.5212703047,
            "unit": "ns/iter",
            "extra": "iterations: 6770\ncpu: 125888.2422451994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1318.3558136045351,
            "unit": "ns/iter",
            "extra": "iterations: 533060\ncpu: 1318.2733650996126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1051.422478951574,
            "unit": "ns/iter",
            "extra": "iterations: 666677\ncpu: 1051.4231029419059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1050.4502547728598,
            "unit": "ns/iter",
            "extra": "iterations: 666476\ncpu: 1050.4265719995915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1046.5795745490677,
            "unit": "ns/iter",
            "extra": "iterations: 672181\ncpu: 1046.5385067414893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2122.064683295597,
            "unit": "ns/iter",
            "extra": "iterations: 330750\ncpu: 2121.939229024942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5600.605949999817,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5600.278999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 32931.48627907797,
            "unit": "ns/iter",
            "extra": "iterations: 24889\ncpu: 32929.430672184506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25698.301325645734,
            "unit": "ns/iter",
            "extra": "iterations: 31909\ncpu: 25696.687454950017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25117.101127026606,
            "unit": "ns/iter",
            "extra": "iterations: 32741\ncpu: 25115.292752206704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 25054.20306806747,
            "unit": "ns/iter",
            "extra": "iterations: 32659\ncpu: 25052.760341712852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 61525.00719999807,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61519.05000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 638681.7750000091,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 638649.9000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 518654.6350000185,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518609.99999999895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 519487.0500000093,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519477.6999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 516102.4309999789,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516064.00000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 371113.0594732314,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 371095.836873407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 516386.6529999837,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516316.8999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2638286.4034091695,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2638129.5454545445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1215291.0244215406,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 1215225.3213367602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3645749.511811011,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3645553.543307084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9489.288511778484,
            "unit": "ns/iter",
            "extra": "iterations: 89570\ncpu: 9488.403483309125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50956.514308425845,
            "unit": "ns/iter",
            "extra": "iterations: 16354\ncpu: 50956.5610859728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39794.84405075422,
            "unit": "ns/iter",
            "extra": "iterations: 20885\ncpu: 39792.86569308121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39423.86768050032,
            "unit": "ns/iter",
            "extra": "iterations: 21108\ncpu: 39421.34261891225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 39235.147251708135,
            "unit": "ns/iter",
            "extra": "iterations: 21195\ncpu: 39233.70134465681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 74604.71197629803,
            "unit": "ns/iter",
            "extra": "iterations: 11815\ncpu: 74601.14261531919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 683393.6711012598,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 683362.9711751634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 543443.6470000037,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543443.9999999938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 539859.0789999957,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539838.0000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 532874.2649999753,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532847.0999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 387213.14083260245,
            "unit": "ns/iter",
            "extra": "iterations: 2258\ncpu: 387189.681133745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 529356.7420000045,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529345.5999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2792800.4939758945,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2792569.8795180726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1205898.884715033,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 1205851.0362694312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5542.2897099998645,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5542.051999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32693.15057340747,
            "unit": "ns/iter",
            "extra": "iterations: 25549\ncpu: 32692.524169243377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 25119.678576859635,
            "unit": "ns/iter",
            "extra": "iterations: 32885\ncpu: 25119.075566367683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24391.750632196232,
            "unit": "ns/iter",
            "extra": "iterations: 33613\ncpu: 24384.755898015617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24619.569890865616,
            "unit": "ns/iter",
            "extra": "iterations: 33445\ncpu: 24619.363133502775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 59678.199800004,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59676.7799999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 662013.5510000295,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 661956.6999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 526591.8640000109,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526583.7999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 521363.1529999816,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521311.0000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 523084.02800002793,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523047.6999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 372618.9189531386,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 372596.53862389206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 512478.0560000204,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512470.9999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 618.9628778818122,
            "unit": "ns/iter",
            "extra": "iterations: 1127899\ncpu: 618.9384865134181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3763.677417105255,
            "unit": "ns/iter",
            "extra": "iterations: 186411\ncpu: 3763.3428284811625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2994.6484113426995,
            "unit": "ns/iter",
            "extra": "iterations: 234160\ncpu: 2994.6528015032427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2968.9758804334742,
            "unit": "ns/iter",
            "extra": "iterations: 237525\ncpu: 2968.8858014945904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2231.1080172567404,
            "unit": "ns/iter",
            "extra": "iterations: 313848\ncpu: 2231.076508373467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18101.29309711866,
            "unit": "ns/iter",
            "extra": "iterations: 40867\ncpu: 18100.354809504126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33584.57582174457,
            "unit": "ns/iter",
            "extra": "iterations: 20779\ncpu: 33583.32451032292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8431.408615496073,
            "unit": "ns/iter",
            "extra": "iterations: 82990\ncpu: 8430.2928063622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8363.21926413392,
            "unit": "ns/iter",
            "extra": "iterations: 83575\ncpu: 8362.960215375397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8372.146036610826,
            "unit": "ns/iter",
            "extra": "iterations: 83527\ncpu: 8371.66066062478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16860.48350144051,
            "unit": "ns/iter",
            "extra": "iterations: 41640\ncpu: 16860.50192122959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15294.768923176243,
            "unit": "ns/iter",
            "extra": "iterations: 46015\ncpu: 15294.482234054116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5345.112978489697,
            "unit": "ns/iter",
            "extra": "iterations: 132866\ncpu: 5344.653259675157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26573.89419071496,
            "unit": "ns/iter",
            "extra": "iterations: 26406\ncpu: 26572.290388548205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21488.12922312872,
            "unit": "ns/iter",
            "extra": "iterations: 32618\ncpu: 21486.72205530706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21261.909575757312,
            "unit": "ns/iter",
            "extra": "iterations: 33000\ncpu: 21261.096969697082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21780.044768690503,
            "unit": "ns/iter",
            "extra": "iterations: 32143\ncpu: 21778.645428242406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50435.09754870331,
            "unit": "ns/iter",
            "extra": "iterations: 13911\ncpu: 50432.39882107658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 174397.32942935935,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 174386.86768004042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 146014.36122704216,
            "unit": "ns/iter",
            "extra": "iterations: 4792\ncpu: 146009.59933222158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 145892.31627132223,
            "unit": "ns/iter",
            "extra": "iterations: 4806\ncpu: 145889.99167707082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 145521.8794105399,
            "unit": "ns/iter",
            "extra": "iterations: 4818\ncpu: 145518.97052719066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 91091.13772532831,
            "unit": "ns/iter",
            "extra": "iterations: 7711\ncpu: 91089.67708468447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 145641.11383975932,
            "unit": "ns/iter",
            "extra": "iterations: 4805\ncpu: 145634.71383975027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5280.495313099871,
            "unit": "ns/iter",
            "extra": "iterations: 132817\ncpu: 5280.43925099951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26367.14878814292,
            "unit": "ns/iter",
            "extra": "iterations: 26447\ncpu: 26366.869588232596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20961.954359327043,
            "unit": "ns/iter",
            "extra": "iterations: 33457\ncpu: 20961.71204830055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20733.983730440483,
            "unit": "ns/iter",
            "extra": "iterations: 33744\ncpu: 20733.979374111055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21356.337360082056,
            "unit": "ns/iter",
            "extra": "iterations: 32698\ncpu: 21355.890268517753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48695.94665832037,
            "unit": "ns/iter",
            "extra": "iterations: 14379\ncpu: 48694.297239029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 168653.13818006078,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 168651.4443909488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 141708.9640113276,
            "unit": "ns/iter",
            "extra": "iterations: 4946\ncpu: 141706.38900121508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 140988.28057843068,
            "unit": "ns/iter",
            "extra": "iterations: 4979\ncpu: 140980.35750150782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 142217.35972583605,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 142207.79957456567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 89649.41044680767,
            "unit": "ns/iter",
            "extra": "iterations: 7811\ncpu: 89642.83702471026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 141607.44514169238,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 141597.97570850232 ns\nthreads: 1"
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
        "date": 1702422466726,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1501.0027411196318,
            "unit": "ns/iter",
            "extra": "iterations: 460031\ncpu: 1500.9395019031326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17999.713000498552,
            "unit": "ns/iter",
            "extra": "iterations: 46129\ncpu: 17998.187691040344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37604.67365024511,
            "unit": "ns/iter",
            "extra": "iterations: 22004\ncpu: 37602.663152154164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 55441.901200187145,
            "unit": "ns/iter",
            "extra": "iterations: 15081\ncpu: 55440.03713281614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 61924.42959999766,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61921.26 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 77267.8798925213,
            "unit": "ns/iter",
            "extra": "iterations: 11165\ncpu: 77263.94984326017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 92171.47592158405,
            "unit": "ns/iter",
            "extra": "iterations: 9386\ncpu: 92165.3313445557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 108295.25747240611,
            "unit": "ns/iter",
            "extra": "iterations: 8063\ncpu: 108289.5696390921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 125115.77344649305,
            "unit": "ns/iter",
            "extra": "iterations: 6952\ncpu: 125112.52876869962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1294.349650181304,
            "unit": "ns/iter",
            "extra": "iterations: 540137\ncpu: 1294.27256418279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1045.186298809241,
            "unit": "ns/iter",
            "extra": "iterations: 676204\ncpu: 1045.1468787525648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1031.5785910504715,
            "unit": "ns/iter",
            "extra": "iterations: 670897\ncpu: 1031.499022949871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1023.4097688855376,
            "unit": "ns/iter",
            "extra": "iterations: 682043\ncpu: 1023.3633363292323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2047.8360170346207,
            "unit": "ns/iter",
            "extra": "iterations: 342127\ncpu: 2047.7615037690662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5714.786090000529,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5714.497000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 32907.72040653554,
            "unit": "ns/iter",
            "extra": "iterations: 25090\ncpu: 32906.10203268231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 26072.679756392143,
            "unit": "ns/iter",
            "extra": "iterations: 31526\ncpu: 26071.287191524432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25128.718638872007,
            "unit": "ns/iter",
            "extra": "iterations: 32620\ncpu: 25127.924586143487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24842.94860554043,
            "unit": "ns/iter",
            "extra": "iterations: 32163\ncpu: 24841.849329975405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 61100.44939999852,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61096.74999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 650200.5509999549,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650134.6000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 514933.2230000141,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514915.20000000077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 517457.60300002526,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517437.2999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 516686.19599996647,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516667.0000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 370402.78196443256,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 370382.85351397103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 514522.9230088543,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 514503.62831858324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2638834.7677053716,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2638688.1019830047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1218706.4585987898,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 1218650.5732484092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3591121.0753968568,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3590914.28571428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9364.820485060638,
            "unit": "ns/iter",
            "extra": "iterations: 89597\ncpu: 9364.155049834268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50685.329559978025,
            "unit": "ns/iter",
            "extra": "iterations: 16431\ncpu: 50682.046132310716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39946.17348852729,
            "unit": "ns/iter",
            "extra": "iterations: 20791\ncpu: 39942.696359001515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39344.94618178214,
            "unit": "ns/iter",
            "extra": "iterations: 21201\ncpu: 39343.42719683044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 39312.26568720247,
            "unit": "ns/iter",
            "extra": "iterations: 21100\ncpu: 39311.80568720381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 74451.08533175269,
            "unit": "ns/iter",
            "extra": "iterations: 11801\ncpu: 74447.84340310167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 679357.5955719536,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 679343.0258302568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 544001.8549999762,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543938.4000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 536740.5470000221,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536735.1000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 532795.3780000029,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532779.2000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 386455.8969616926,
            "unit": "ns/iter",
            "extra": "iterations: 2271\ncpu: 386419.6829590485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 524597.6630000087,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524577.800000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2791492.7940297453,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2791226.5671641896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1228110.4313984395,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1227990.501319255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5664.123259999768,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5663.636000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32177.29484423159,
            "unit": "ns/iter",
            "extra": "iterations: 25583\ncpu: 32174.10780596498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 25397.586934613373,
            "unit": "ns/iter",
            "extra": "iterations: 32743\ncpu: 25395.92890083371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24365.462973364287,
            "unit": "ns/iter",
            "extra": "iterations: 33827\ncpu: 24363.11821917393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24316.576968619906,
            "unit": "ns/iter",
            "extra": "iterations: 33780\ncpu: 24315.085849615098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 59195.41430000096,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59189.179999999906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 658531.6890000287,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 658507.9999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 526189.7860000317,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526152.0000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 522906.4600000015,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522851.5000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 522737.25999998534,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522712.60000000556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 372149.940109665,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 372137.19949388277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 514382.1730000013,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514370.299999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 601.0989574465497,
            "unit": "ns/iter",
            "extra": "iterations: 1162914\ncpu: 601.0926001406809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3635.064259762665,
            "unit": "ns/iter",
            "extra": "iterations: 192391\ncpu: 3635.0291853569133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2727.242168599828,
            "unit": "ns/iter",
            "extra": "iterations: 257106\ncpu: 2727.2144562943013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2945.0293195870795,
            "unit": "ns/iter",
            "extra": "iterations: 238032\ncpu: 2944.970424144667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2253.195423968182,
            "unit": "ns/iter",
            "extra": "iterations: 310837\ncpu: 2253.1732065359074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17164.59884276852,
            "unit": "ns/iter",
            "extra": "iterations: 40787\ncpu: 17163.85367886836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 35653.8809135424,
            "unit": "ns/iter",
            "extra": "iterations: 19616\ncpu: 35653.51243882565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8434.519194469784,
            "unit": "ns/iter",
            "extra": "iterations: 83175\ncpu: 8434.076345055648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8439.197763666845,
            "unit": "ns/iter",
            "extra": "iterations: 82993\ncpu: 8439.041846902723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8396.149301530588,
            "unit": "ns/iter",
            "extra": "iterations: 83683\ncpu: 8395.083828256595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16742.17667389809,
            "unit": "ns/iter",
            "extra": "iterations: 41953\ncpu: 16740.94820394258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15951.790446876621,
            "unit": "ns/iter",
            "extra": "iterations: 43860\ncpu: 15950.81851345194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5271.46725762373,
            "unit": "ns/iter",
            "extra": "iterations: 132779\ncpu: 5271.0300574638795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26956.56778746081,
            "unit": "ns/iter",
            "extra": "iterations: 25934\ncpu: 26954.584715045843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21635.408016980626,
            "unit": "ns/iter",
            "extra": "iterations: 32506\ncpu: 21633.873746385467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21622.700919015722,
            "unit": "ns/iter",
            "extra": "iterations: 32426\ncpu: 21621.8281625858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22036.254681414288,
            "unit": "ns/iter",
            "extra": "iterations: 31828\ncpu: 22035.19542541159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51139.344374727545,
            "unit": "ns/iter",
            "extra": "iterations: 13706\ncpu: 51137.86662775394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 175170.68001000935,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 175162.72204152873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 158551.216010166,
            "unit": "ns/iter",
            "extra": "iterations: 4722\ncpu: 158535.83227445948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 147048.0881496877,
            "unit": "ns/iter",
            "extra": "iterations: 4810\ncpu: 147042.53638253748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 145603.08478801927,
            "unit": "ns/iter",
            "extra": "iterations: 4812\ncpu: 145593.9110556952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 94350.06620707441,
            "unit": "ns/iter",
            "extra": "iterations: 7688\ncpu: 94341.88345473396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 145521.98151226013,
            "unit": "ns/iter",
            "extra": "iterations: 4814\ncpu: 145505.83714167064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5272.0432213529875,
            "unit": "ns/iter",
            "extra": "iterations: 132851\ncpu: 5271.751812180637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26420.71723955913,
            "unit": "ns/iter",
            "extra": "iterations: 26503\ncpu: 26418.29604195786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21029.39989760912,
            "unit": "ns/iter",
            "extra": "iterations: 33206\ncpu: 21027.979883153563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20805.962481792063,
            "unit": "ns/iter",
            "extra": "iterations: 33637\ncpu: 20804.61693967963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21345.035473333148,
            "unit": "ns/iter",
            "extra": "iterations: 32757\ncpu: 21343.917330646953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49394.02672933658,
            "unit": "ns/iter",
            "extra": "iterations: 14254\ncpu: 49389.392451241336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 171339.5957498783,
            "unit": "ns/iter",
            "extra": "iterations: 4094\ncpu: 171328.74938935143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 142791.6122782073,
            "unit": "ns/iter",
            "extra": "iterations: 4903\ncpu: 142782.09259636968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 141691.09821064997,
            "unit": "ns/iter",
            "extra": "iterations: 4918\ncpu: 141683.18422122957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 142299.9951278973,
            "unit": "ns/iter",
            "extra": "iterations: 4926\ncpu: 142298.27446203877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 89249.79849986601,
            "unit": "ns/iter",
            "extra": "iterations: 7866\ncpu: 89242.93160437318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 142073.4370820654,
            "unit": "ns/iter",
            "extra": "iterations: 4935\ncpu: 142061.15501519636 ns\nthreads: 1"
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
        "date": 1702453352049,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1498.9604213268208,
            "unit": "ns/iter",
            "extra": "iterations: 469849\ncpu: 1498.8670828287386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17799.409443683762,
            "unit": "ns/iter",
            "extra": "iterations: 45999\ncpu: 17797.84777929955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37221.059099480226,
            "unit": "ns/iter",
            "extra": "iterations: 21743\ncpu: 37221.11024237685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 55642.47147519615,
            "unit": "ns/iter",
            "extra": "iterations: 15320\ncpu: 55641.94516971277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 61512.30099999907,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61510.29999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 80366.19286156041,
            "unit": "ns/iter",
            "extra": "iterations: 11319\ncpu: 80362.22281120234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 92235.29612903368,
            "unit": "ns/iter",
            "extra": "iterations: 9300\ncpu: 92232.13978494618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 108433.02889959126,
            "unit": "ns/iter",
            "extra": "iterations: 8097\ncpu: 108428.2820797826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 126508.40389401616,
            "unit": "ns/iter",
            "extra": "iterations: 6831\ncpu: 126500.70267896363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1303.13925127991,
            "unit": "ns/iter",
            "extra": "iterations: 536943\ncpu: 1303.061777507113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1057.0553153482333,
            "unit": "ns/iter",
            "extra": "iterations: 661697\ncpu: 1056.9995027935734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1063.5900117741944,
            "unit": "ns/iter",
            "extra": "iterations: 639533\ncpu: 1063.55575083694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1038.5549932326853,
            "unit": "ns/iter",
            "extra": "iterations: 668655\ncpu: 1038.5322774824092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2066.8471818726666,
            "unit": "ns/iter",
            "extra": "iterations: 340084\ncpu: 2066.7014619917413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5525.0863000000545,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5525.027999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33071.10249173376,
            "unit": "ns/iter",
            "extra": "iterations: 24802\ncpu: 33071.12329650836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25856.731347535213,
            "unit": "ns/iter",
            "extra": "iterations: 31591\ncpu: 25856.33883067962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25290.777523785535,
            "unit": "ns/iter",
            "extra": "iterations: 32372\ncpu: 25290.56901025574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 25309.979903460367,
            "unit": "ns/iter",
            "extra": "iterations: 31697\ncpu: 25309.783260245465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 60752.638299999264,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60751.819999999774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 639778.2129999996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639743.5000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 517222.6070000079,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517224.19999999757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 522462.8000000279,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522439.90000000194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 519874.44299999194,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519853.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 372742.9761803571,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 372730.0297745635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 514326.4349999868,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514327.09999999916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2634475.4900849424,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2634431.4447592027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1191039.8314028485,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 1191012.870012874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3640004.098039138,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3639880.7843137267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9176.37248854108,
            "unit": "ns/iter",
            "extra": "iterations: 92725\ncpu: 9176.287948234001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51690.033047050616,
            "unit": "ns/iter",
            "extra": "iterations: 16068\ncpu: 51689.21458800107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 40015.14589139981,
            "unit": "ns/iter",
            "extra": "iterations: 20810\ncpu: 40014.36328688133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39545.406328454446,
            "unit": "ns/iter",
            "extra": "iterations: 21111\ncpu: 39544.9623419071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38978.26846208158,
            "unit": "ns/iter",
            "extra": "iterations: 21165\ncpu: 38977.95416961963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 73473.33943554484,
            "unit": "ns/iter",
            "extra": "iterations: 11799\ncpu: 73470.26019154167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 675711.2944606555,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 675685.2040816321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 543465.0170000168,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543438.6999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 535090.1759999829,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535094.6000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 532075.9260000045,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532045.4000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 383824.47644210386,
            "unit": "ns/iter",
            "extra": "iterations: 2271\ncpu: 383809.6873623936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 526821.6460000303,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526781.8000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2788796.2650602646,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2788675.903614453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1202169.2769230604,
            "unit": "ns/iter",
            "extra": "iterations: 780\ncpu: 1202077.435897436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5499.175410000134,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5499.194000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32075.661747528757,
            "unit": "ns/iter",
            "extra": "iterations: 25682\ncpu: 32074.8228331125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 25107.615933594425,
            "unit": "ns/iter",
            "extra": "iterations: 32648\ncpu: 25107.34807645171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24313.464162503446,
            "unit": "ns/iter",
            "extra": "iterations: 33624\ncpu: 24312.098501070668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24684.44725254723,
            "unit": "ns/iter",
            "extra": "iterations: 33158\ncpu: 24683.79274986446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 59009.92830000291,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59009.1600000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 655111.0550000203,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 655068.8000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 536603.5629999714,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536583.6999999942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 517704.36199996085,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517694.2000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 518298.08100001176,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518264.50000000076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 369067.8164291892,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 369057.87929589354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 517626.40300000843,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517574.7999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 604.4963538652295,
            "unit": "ns/iter",
            "extra": "iterations: 1159447\ncpu: 604.4683370606833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3768.815315363964,
            "unit": "ns/iter",
            "extra": "iterations: 185500\ncpu: 3768.621563342324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2928.5620124690136,
            "unit": "ns/iter",
            "extra": "iterations: 238831\ncpu: 2928.472853189052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2939.958604254156,
            "unit": "ns/iter",
            "extra": "iterations: 237923\ncpu: 2939.9251018186637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2267.854038012534,
            "unit": "ns/iter",
            "extra": "iterations: 308320\ncpu: 2267.8003373118872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17553.906178661222,
            "unit": "ns/iter",
            "extra": "iterations: 39863\ncpu: 17553.503248626555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 35599.24813442265,
            "unit": "ns/iter",
            "extra": "iterations: 19699\ncpu: 35598.63444844937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8396.437759509981,
            "unit": "ns/iter",
            "extra": "iterations: 83571\ncpu: 8396.45690490719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8330.447366852079,
            "unit": "ns/iter",
            "extra": "iterations: 83873\ncpu: 8330.367341099012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8329.68877781756,
            "unit": "ns/iter",
            "extra": "iterations: 84030\ncpu: 8329.581101987385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16714.930644978944,
            "unit": "ns/iter",
            "extra": "iterations: 44265\ncpu: 16714.598441206414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15883.019526908858,
            "unit": "ns/iter",
            "extra": "iterations: 44093\ncpu: 15882.831741999782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5273.57023528595,
            "unit": "ns/iter",
            "extra": "iterations: 132647\ncpu: 5273.493558090249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26579.99685069231,
            "unit": "ns/iter",
            "extra": "iterations: 26355\ncpu: 26579.157655094008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21323.615182927337,
            "unit": "ns/iter",
            "extra": "iterations: 32800\ncpu: 21323.09451219501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21289.32642785577,
            "unit": "ns/iter",
            "extra": "iterations: 32969\ncpu: 21288.795535199828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21864.330884880525,
            "unit": "ns/iter",
            "extra": "iterations: 31993\ncpu: 21864.357828274624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50597.23038614493,
            "unit": "ns/iter",
            "extra": "iterations: 13855\ncpu: 50595.019848429765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 175961.35733934576,
            "unit": "ns/iter",
            "extra": "iterations: 3999\ncpu: 175958.88972243282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 146117.98872416635,
            "unit": "ns/iter",
            "extra": "iterations: 4789\ncpu: 146111.79787012105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 143605.14641168216,
            "unit": "ns/iter",
            "extra": "iterations: 4863\ncpu: 143602.50873946212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 145426.5475796412,
            "unit": "ns/iter",
            "extra": "iterations: 4834\ncpu: 145426.8928423664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 90694.85431235252,
            "unit": "ns/iter",
            "extra": "iterations: 7722\ncpu: 90691.50479150329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 145332.08613532758,
            "unit": "ns/iter",
            "extra": "iterations: 4818\ncpu: 145329.99169779723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5288.923941573799,
            "unit": "ns/iter",
            "extra": "iterations: 132201\ncpu: 5288.69600078667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27036.930875748913,
            "unit": "ns/iter",
            "extra": "iterations: 26720\ncpu: 27036.055389221725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20959.580348312138,
            "unit": "ns/iter",
            "extra": "iterations: 33361\ncpu: 20958.283624591604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20774.918300653786,
            "unit": "ns/iter",
            "extra": "iterations: 33660\ncpu: 20774.129530600276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21293.48951625135,
            "unit": "ns/iter",
            "extra": "iterations: 32765\ncpu: 21291.55501297126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49233.67096365501,
            "unit": "ns/iter",
            "extra": "iterations: 14196\ncpu: 49232.16398985677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 169890.92851951724,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 169881.6573782377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 141185.5370445449,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 141178.11740890687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 140654.9707307212,
            "unit": "ns/iter",
            "extra": "iterations: 4954\ncpu: 140648.28421477415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 140624.0107222338,
            "unit": "ns/iter",
            "extra": "iterations: 4943\ncpu: 140618.43010317694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 88993.37604774782,
            "unit": "ns/iter",
            "extra": "iterations: 7874\ncpu: 88989.95427990858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 141399.53418542573,
            "unit": "ns/iter",
            "extra": "iterations: 4929\ncpu: 141384.5404747417 ns\nthreads: 1"
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
        "date": 1702479519387,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1521.1451941722291,
            "unit": "ns/iter",
            "extra": "iterations: 462064\ncpu: 1521.117853803802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17990.06532071678,
            "unit": "ns/iter",
            "extra": "iterations: 45866\ncpu: 17989.124841930843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37257.325227007976,
            "unit": "ns/iter",
            "extra": "iterations: 22246\ncpu: 37256.43261709971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 55850.18263990444,
            "unit": "ns/iter",
            "extra": "iterations: 15046\ncpu: 55845.89924232354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 62043.16230000018,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62042.09999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 80033.43403916033,
            "unit": "ns/iter",
            "extra": "iterations: 11287\ncpu: 80025.09967218923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 92564.98956114368,
            "unit": "ns/iter",
            "extra": "iterations: 9388\ncpu: 92560.16190881978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 108061.14326084444,
            "unit": "ns/iter",
            "extra": "iterations: 8139\ncpu: 108059.35618626364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 125734.72384269451,
            "unit": "ns/iter",
            "extra": "iterations: 6891\ncpu: 125732.98505296747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1290.7687367430851,
            "unit": "ns/iter",
            "extra": "iterations: 542170\ncpu: 1290.7034693915189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1028.5490007358474,
            "unit": "ns/iter",
            "extra": "iterations: 679500\ncpu: 1028.4685798381142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1042.3580972333425,
            "unit": "ns/iter",
            "extra": "iterations: 667302\ncpu: 1042.3057326367987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1034.2944641345366,
            "unit": "ns/iter",
            "extra": "iterations: 676877\ncpu: 1034.2300004284396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2082.4631914011647,
            "unit": "ns/iter",
            "extra": "iterations: 335207\ncpu: 2082.456213623223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5646.435719999943,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5646.060000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33025.31550823597,
            "unit": "ns/iter",
            "extra": "iterations: 24890\ncpu: 33023.09361189236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25666.060152718775,
            "unit": "ns/iter",
            "extra": "iterations: 32085\ncpu: 25664.301075268813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25112.21970881198,
            "unit": "ns/iter",
            "extra": "iterations: 32625\ncpu: 25111.340996168554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 25027.887483619143,
            "unit": "ns/iter",
            "extra": "iterations: 32813\ncpu: 25026.79730594575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 61759.40340000068,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61752.50999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 642408.7489999976,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642350.7999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 520786.89800001145,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520757.40000000084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 521016.3180000222,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520969.8999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 515845.2469999872,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515832.79999999836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 369507.026706229,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 369475.3709198817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 513437.1170000236,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513437.29999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2632516.977401191,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2632262.994350284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1193448.869845327,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 1193374.871134022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3615071.739299609,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3614793.3852140056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9216.027508272346,
            "unit": "ns/iter",
            "extra": "iterations: 88846\ncpu: 9215.494225964054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50410.29536936405,
            "unit": "ns/iter",
            "extra": "iterations: 16542\ncpu: 50407.665336718535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39400.58857714608,
            "unit": "ns/iter",
            "extra": "iterations: 20993\ncpu: 39397.494402896205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39204.97509632546,
            "unit": "ns/iter",
            "extra": "iterations: 21282\ncpu: 39202.29771638013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 39072.65171170105,
            "unit": "ns/iter",
            "extra": "iterations: 21353\ncpu: 39071.582447431254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 73773.66598535089,
            "unit": "ns/iter",
            "extra": "iterations: 11742\ncpu: 73769.9369783687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 677644.1063829594,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 677598.0924431426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 539017.4120000211,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538943.7999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 534782.3129999938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534767.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 532007.7540000057,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531977.3000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 381655.43611953146,
            "unit": "ns/iter",
            "extra": "iterations: 2309\ncpu: 381633.47769597016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 525390.5710000027,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525349.0999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2806839.014925375,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2806652.835820913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1193962.907096765,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 1193844.0000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5536.32605999951,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5535.877000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32140.71159983235,
            "unit": "ns/iter",
            "extra": "iterations: 26009\ncpu: 32139.13645276649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 25082.08441165689,
            "unit": "ns/iter",
            "extra": "iterations: 33076\ncpu: 25080.2878219857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24524.252708646924,
            "unit": "ns/iter",
            "extra": "iterations: 33873\ncpu: 24522.690638561577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 26071.352717439728,
            "unit": "ns/iter",
            "extra": "iterations: 33653\ncpu: 26068.817044542775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 59572.3453000005,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59566.68999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 657032.761000039,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656968.599999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 520363.0440000211,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520278.5999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 523088.37400005356,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523070.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 519492.1240000099,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519405.10000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 367119.09932942566,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 367095.76697401685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 508983.9770000139,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508938.7000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 598.6547297395512,
            "unit": "ns/iter",
            "extra": "iterations: 1169927\ncpu: 598.6039299887909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3768.1246277717883,
            "unit": "ns/iter",
            "extra": "iterations: 183691\ncpu: 3767.9189508467803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2894.203133852427,
            "unit": "ns/iter",
            "extra": "iterations: 241811\ncpu: 2894.011025139485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2833.7994302848956,
            "unit": "ns/iter",
            "extra": "iterations: 247141\ncpu: 2833.6030848786722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2253.2016309593687,
            "unit": "ns/iter",
            "extra": "iterations: 310860\ncpu: 2253.033198224279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17504.28362536556,
            "unit": "ns/iter",
            "extra": "iterations: 40007\ncpu: 17503.359412102865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 35736.8489742043,
            "unit": "ns/iter",
            "extra": "iterations: 19692\ncpu: 35733.90209222006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8441.762954663312,
            "unit": "ns/iter",
            "extra": "iterations: 83001\ncpu: 8441.738051348759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8448.128604438758,
            "unit": "ns/iter",
            "extra": "iterations: 83092\ncpu: 8447.762720839597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8347.513725771192,
            "unit": "ns/iter",
            "extra": "iterations: 83784\ncpu: 8346.865750023846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17136.391230177273,
            "unit": "ns/iter",
            "extra": "iterations: 41620\ncpu: 17135.194617972036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15931.103445122188,
            "unit": "ns/iter",
            "extra": "iterations: 43743\ncpu: 15929.997942527956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5253.694430887186,
            "unit": "ns/iter",
            "extra": "iterations: 133181\ncpu: 5253.421283816786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26459.37480166194,
            "unit": "ns/iter",
            "extra": "iterations: 26470\ncpu: 26456.93237627489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21279.16482482199,
            "unit": "ns/iter",
            "extra": "iterations: 32938\ncpu: 21279.097091505173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21092.854505547093,
            "unit": "ns/iter",
            "extra": "iterations: 33259\ncpu: 21092.0592922216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21750.600454488966,
            "unit": "ns/iter",
            "extra": "iterations: 32124\ncpu: 21750.146308056308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51566.20932459245,
            "unit": "ns/iter",
            "extra": "iterations: 13577\ncpu: 51560.93393238606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 173408.79162537144,
            "unit": "ns/iter",
            "extra": "iterations: 4036\ncpu: 173391.37760158567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 144849.17034568428,
            "unit": "ns/iter",
            "extra": "iterations: 4802\ncpu: 144840.6497292797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 145369.9894300536,
            "unit": "ns/iter",
            "extra": "iterations: 4825\ncpu: 145359.41968911892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 143930.1674360026,
            "unit": "ns/iter",
            "extra": "iterations: 4766\ncpu: 143922.21989089425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 89969.15483539118,
            "unit": "ns/iter",
            "extra": "iterations: 7776\ncpu: 89963.42592592548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 145902.38160348104,
            "unit": "ns/iter",
            "extra": "iterations: 4827\ncpu: 145894.9658172772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5272.973317020911,
            "unit": "ns/iter",
            "extra": "iterations: 133231\ncpu: 5272.562691866048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26308.789004290506,
            "unit": "ns/iter",
            "extra": "iterations: 26574\ncpu: 26306.841273425158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21119.74739741017,
            "unit": "ns/iter",
            "extra": "iterations: 33044\ncpu: 21118.366420530456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20918.590718677795,
            "unit": "ns/iter",
            "extra": "iterations: 33659\ncpu: 20916.869188032782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21487.432605629554,
            "unit": "ns/iter",
            "extra": "iterations: 32614\ncpu: 21486.45673637093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50230.48007815285,
            "unit": "ns/iter",
            "extra": "iterations: 14331\ncpu: 50223.306119601366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 170301.57031630233,
            "unit": "ns/iter",
            "extra": "iterations: 4110\ncpu: 170296.18004866072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 141633.6133279275,
            "unit": "ns/iter",
            "extra": "iterations: 4937\ncpu: 141620.84261697417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 141199.76541716795,
            "unit": "ns/iter",
            "extra": "iterations: 4962\ncpu: 141190.64893188438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 141634.3854251079,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 141618.1781376523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 88925.65066225102,
            "unit": "ns/iter",
            "extra": "iterations: 7852\ncpu: 88923.19154355573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 141371.66410205065,
            "unit": "ns/iter",
            "extra": "iterations: 4939\ncpu: 141363.19092933813 ns\nthreads: 1"
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
        "date": 1702488562974,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1523.1844600751917,
            "unit": "ns/iter",
            "extra": "iterations: 351160\ncpu: 1523.1714887800435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17863.463824769242,
            "unit": "ns/iter",
            "extra": "iterations: 45791\ncpu: 17863.58673101701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37330.36121124801,
            "unit": "ns/iter",
            "extra": "iterations: 22192\ncpu: 37329.92970439799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 55378.17025207771,
            "unit": "ns/iter",
            "extra": "iterations: 15154\ncpu: 55377.32611851656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 62996.984199998,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62997.38000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 77973.47717990131,
            "unit": "ns/iter",
            "extra": "iterations: 11262\ncpu: 77973.78795950983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 92864.68239564345,
            "unit": "ns/iter",
            "extra": "iterations: 9367\ncpu: 92865.16494074948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 107572.511360834,
            "unit": "ns/iter",
            "extra": "iterations: 8098\ncpu: 107570.42479624599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 126578.7474932928,
            "unit": "ns/iter",
            "extra": "iterations: 7081\ncpu: 126562.95720943369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1315.769304213874,
            "unit": "ns/iter",
            "extra": "iterations: 532060\ncpu: 1315.777731834755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1051.2010396202008,
            "unit": "ns/iter",
            "extra": "iterations: 668321\ncpu: 1051.1460809999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1066.113996942448,
            "unit": "ns/iter",
            "extra": "iterations: 656079\ncpu: 1066.073445423491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1043.3945161492304,
            "unit": "ns/iter",
            "extra": "iterations: 672046\ncpu: 1043.3294744704986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2060.6845916722095,
            "unit": "ns/iter",
            "extra": "iterations: 339972\ncpu: 2060.568223265448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5585.439760000099,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5585.473000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 32804.15433891614,
            "unit": "ns/iter",
            "extra": "iterations: 25133\ncpu: 32803.38996538412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25716.315289707654,
            "unit": "ns/iter",
            "extra": "iterations: 32015\ncpu: 25715.698891144806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25288.86177317512,
            "unit": "ns/iter",
            "extra": "iterations: 32642\ncpu: 25287.699895839796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24643.545034364055,
            "unit": "ns/iter",
            "extra": "iterations: 33319\ncpu: 24641.6909270986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 60714.169800002084,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60713.12000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 647308.4830000175,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647209.7000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 516256.94899996684,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516251.9000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 513477.751000039,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513472.1000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 512659.37499999837,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512654.90000000113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 367511.38428874174,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 367510.02123142325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 513952.2239999792,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513943.4999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2618324.2450704547,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2618316.9014084553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1189001.6932990053,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 1188983.762886597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3615831.844961333,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3615849.224806204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9453.428688361171,
            "unit": "ns/iter",
            "extra": "iterations: 90406\ncpu: 9453.477645289047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50294.9631375362,
            "unit": "ns/iter",
            "extra": "iterations: 16548\ncpu: 50293.23785351699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39720.5575707459,
            "unit": "ns/iter",
            "extra": "iterations: 20566\ncpu: 39720.7672858114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39414.80379209547,
            "unit": "ns/iter",
            "extra": "iterations: 21202\ncpu: 39415.0363173284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38769.2247593342,
            "unit": "ns/iter",
            "extra": "iterations: 21503\ncpu: 38769.42287122725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 73810.81051023041,
            "unit": "ns/iter",
            "extra": "iterations: 11779\ncpu: 73810.51023007039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 674555.3816460398,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 674559.1405680958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 542397.6579999704,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542390.4999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 537659.7220000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537663.5999999947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 533910.1160000155,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533914.1999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 384642.93951435055,
            "unit": "ns/iter",
            "extra": "iterations: 2265\ncpu: 384640.6622516572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 526759.8640000415,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526763.8000000048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2778500.0925373016,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2778427.164179114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1261182.9418919317,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 1261104.3243243264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5538.695900000335,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5538.118999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32026.13378420354,
            "unit": "ns/iter",
            "extra": "iterations: 25728\ncpu: 32024.245957711395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 25202.121975097765,
            "unit": "ns/iter",
            "extra": "iterations: 32687\ncpu: 25200.660813167367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24575.940258967545,
            "unit": "ns/iter",
            "extra": "iterations: 33595\ncpu: 24574.793868135155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24249.10031569909,
            "unit": "ns/iter",
            "extra": "iterations: 33893\ncpu: 24246.97135101638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 58981.80570000023,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58977.39999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 650277.103999997,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650269.5000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 523127.269999975,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523118.9000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 516781.29200001876,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516784.10000000236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 519228.7030000102,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519231.60000000475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 367600.8940286026,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 367584.5668629108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 512533.1639999899,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512514.69999999704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 607.825618033445,
            "unit": "ns/iter",
            "extra": "iterations: 1148886\ncpu: 607.8292363210974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3762.2094221152433,
            "unit": "ns/iter",
            "extra": "iterations: 186179\ncpu: 3762.173499696539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2967.17312463161,
            "unit": "ns/iter",
            "extra": "iterations: 235807\ncpu: 2967.189693266099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2732.2525276702254,
            "unit": "ns/iter",
            "extra": "iterations: 259033\ncpu: 2732.271563854802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2267.231759850782,
            "unit": "ns/iter",
            "extra": "iterations: 309441\ncpu: 2267.248360753754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17257.155118440576,
            "unit": "ns/iter",
            "extra": "iterations: 40569\ncpu: 17257.265399689473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 34108.19162609632,
            "unit": "ns/iter",
            "extra": "iterations: 20540\ncpu: 34108.378773125725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8461.257959973216,
            "unit": "ns/iter",
            "extra": "iterations: 82695\ncpu: 8461.205635165368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8383.189675626112,
            "unit": "ns/iter",
            "extra": "iterations: 83453\ncpu: 8383.231279882095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8480.395202706468,
            "unit": "ns/iter",
            "extra": "iterations: 82755\ncpu: 8480.316597184466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16663.267807745804,
            "unit": "ns/iter",
            "extra": "iterations: 40488\ncpu: 16663.149575182677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15854.481576322996,
            "unit": "ns/iter",
            "extra": "iterations: 44128\ncpu: 15854.142494561214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5293.544483715741,
            "unit": "ns/iter",
            "extra": "iterations: 131846\ncpu: 5293.571287714462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26596.23009152199,
            "unit": "ns/iter",
            "extra": "iterations: 26333\ncpu: 26596.350586716366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21318.219307066473,
            "unit": "ns/iter",
            "extra": "iterations: 32817\ncpu: 21318.350245299822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21555.371326010252,
            "unit": "ns/iter",
            "extra": "iterations: 32594\ncpu: 21555.497944406838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21892.701029314547,
            "unit": "ns/iter",
            "extra": "iterations: 31963\ncpu: 21892.563276288325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50956.246530556535,
            "unit": "ns/iter",
            "extra": "iterations: 13763\ncpu: 50956.499309743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 174702.66866266745,
            "unit": "ns/iter",
            "extra": "iterations: 4008\ncpu: 174703.54291417295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 144951.03804010616,
            "unit": "ns/iter",
            "extra": "iterations: 4837\ncpu: 144951.85032044558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 144660.39667706066,
            "unit": "ns/iter",
            "extra": "iterations: 4815\ncpu: 144657.52855659518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 145683.43106674042,
            "unit": "ns/iter",
            "extra": "iterations: 4809\ncpu: 145684.19629860748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 90274.00956938024,
            "unit": "ns/iter",
            "extra": "iterations: 7733\ncpu: 90274.51183240811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 145422.01829521844,
            "unit": "ns/iter",
            "extra": "iterations: 4810\ncpu: 145422.7442827454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5262.233407645894,
            "unit": "ns/iter",
            "extra": "iterations: 132772\ncpu: 5262.25860874283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26078.164658035155,
            "unit": "ns/iter",
            "extra": "iterations: 26801\ncpu: 26078.012014477306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20953.244253131215,
            "unit": "ns/iter",
            "extra": "iterations: 33453\ncpu: 20953.36741099448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20742.314727122142,
            "unit": "ns/iter",
            "extra": "iterations: 33788\ncpu: 20742.020835799645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21238.582580938833,
            "unit": "ns/iter",
            "extra": "iterations: 32895\ncpu: 21238.367533059787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49479.64725857911,
            "unit": "ns/iter",
            "extra": "iterations: 14135\ncpu: 49479.25716306989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 171683.72523180884,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 171684.77306002987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 142682.35477978253,
            "unit": "ns/iter",
            "extra": "iterations: 4927\ncpu: 142667.26202557262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 142352.682352944,
            "unit": "ns/iter",
            "extra": "iterations: 4930\ncpu: 142339.6146044621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 141898.19873107213,
            "unit": "ns/iter",
            "extra": "iterations: 4886\ncpu: 141891.6086778553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 89409.0040878918,
            "unit": "ns/iter",
            "extra": "iterations: 7828\ncpu: 89404.22841083206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 143115.2694904776,
            "unit": "ns/iter",
            "extra": "iterations: 4887\ncpu: 143110.53816247283 ns\nthreads: 1"
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
        "date": 1702491200688,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1552.7710039017693,
            "unit": "ns/iter",
            "extra": "iterations: 419553\ncpu: 1552.7158666485525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17745.37167171686,
            "unit": "ns/iter",
            "extra": "iterations: 46533\ncpu: 17745.062643715213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37380.611161401066,
            "unit": "ns/iter",
            "extra": "iterations: 22094\ncpu: 37379.5510093238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 56209.36655650775,
            "unit": "ns/iter",
            "extra": "iterations: 15130\ncpu: 56208.69795109051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 62205.52109999744,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62201.89999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 77811.02364444653,
            "unit": "ns/iter",
            "extra": "iterations: 11250\ncpu: 77809.82222222224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 92586.48968906801,
            "unit": "ns/iter",
            "extra": "iterations: 9359\ncpu: 92579.20718025426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 107642.76468396794,
            "unit": "ns/iter",
            "extra": "iterations: 8053\ncpu: 107638.73090773623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 124965.71574047663,
            "unit": "ns/iter",
            "extra": "iterations: 6874\ncpu: 124956.02269420991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1385.2013325632213,
            "unit": "ns/iter",
            "extra": "iterations: 505492\ncpu: 1385.156837299104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1097.0544191407396,
            "unit": "ns/iter",
            "extra": "iterations: 636798\ncpu: 1096.9721952644338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1114.9105978022667,
            "unit": "ns/iter",
            "extra": "iterations: 628385\ncpu: 1114.9246083213327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1095.1978149450204,
            "unit": "ns/iter",
            "extra": "iterations: 638794\ncpu: 1095.111726158982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2130.4440978129737,
            "unit": "ns/iter",
            "extra": "iterations: 329200\ncpu: 2130.3037667071667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5712.333010000066,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5711.959999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 32835.71407513588,
            "unit": "ns/iter",
            "extra": "iterations: 25101\ncpu: 32832.62818214414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25635.209007653997,
            "unit": "ns/iter",
            "extra": "iterations: 31884\ncpu: 25634.183289424178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24988.09664999147,
            "unit": "ns/iter",
            "extra": "iterations: 32985\ncpu: 24985.884492951318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 25170.086286547186,
            "unit": "ns/iter",
            "extra": "iterations: 32253\ncpu: 25168.59826992839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 61173.57989999732,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61167.359999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 653543.3919999604,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653549.9000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 518150.13600003114,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518111.6999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 513204.2550000051,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513164.4999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 517205.5119999754,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517175.79999999685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 371049.3487877437,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 371007.4011059126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 515024.6939999761,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514987.9999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2645808.7954545175,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2645685.7954545445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1225417.7148541242,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 1225400.3978779824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3633235.389105029,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3633168.0933852154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9191.928577675197,
            "unit": "ns/iter",
            "extra": "iterations: 91484\ncpu: 9191.6980018364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50187.70444511408,
            "unit": "ns/iter",
            "extra": "iterations: 16535\ncpu: 50188.491079528285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39783.82892281193,
            "unit": "ns/iter",
            "extra": "iterations: 20897\ncpu: 39783.102837727885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39242.05887638249,
            "unit": "ns/iter",
            "extra": "iterations: 21146\ncpu: 39242.078880166526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 39109.50616820808,
            "unit": "ns/iter",
            "extra": "iterations: 21319\ncpu: 39109.29218068367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 73612.0000000029,
            "unit": "ns/iter",
            "extra": "iterations: 11801\ncpu: 73612.06677400219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 681723.2213235262,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 681693.0882352925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 543730.3789999533,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543714.9999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 538359.27800003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538352.8999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 535689.8740000133,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535686.5999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 385294.11560438055,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 385295.032967033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 526489.0340000079,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526474.2000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2804059.303303193,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2803986.4864864754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1265641.032679698,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1265608.8235294113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5639.1494399997555,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5639.214999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 31960.62488861449,
            "unit": "ns/iter",
            "extra": "iterations: 25811\ncpu: 31960.392855759113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 25130.183215886795,
            "unit": "ns/iter",
            "extra": "iterations: 32781\ncpu: 25129.779445410397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24196.238002935715,
            "unit": "ns/iter",
            "extra": "iterations: 34050\ncpu: 24195.90602055798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24257.885198428135,
            "unit": "ns/iter",
            "extra": "iterations: 33841\ncpu: 24257.202801335763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 60312.057999999524,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60308.489999999896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 651781.045000007,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651748.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 523221.4319999571,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523186.0000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 517985.814000042,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517953.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 516817.1340000072,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516823.1000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 373419.56457092345,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 373394.01019541064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 508345.17399999866,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508343.7999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 601.3071387749058,
            "unit": "ns/iter",
            "extra": "iterations: 1163575\ncpu: 601.2784736695108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3595.6196795982705,
            "unit": "ns/iter",
            "extra": "iterations: 193195\ncpu: 3595.433111622993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2989.9656451680653,
            "unit": "ns/iter",
            "extra": "iterations: 233970\ncpu: 2989.8854554002833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2933.109982311694,
            "unit": "ns/iter",
            "extra": "iterations: 238011\ncpu: 2932.974946536088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2258.0160810218576,
            "unit": "ns/iter",
            "extra": "iterations: 309744\ncpu: 2257.9146004442446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17246.454138316076,
            "unit": "ns/iter",
            "extra": "iterations: 40415\ncpu: 17245.770134850976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 35195.30132233927,
            "unit": "ns/iter",
            "extra": "iterations: 19889\ncpu: 35194.26818844607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8306.647080686114,
            "unit": "ns/iter",
            "extra": "iterations: 83410\ncpu: 8305.903368900543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8314.546169914318,
            "unit": "ns/iter",
            "extra": "iterations: 84254\ncpu: 8314.303178484075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8295.514411339742,
            "unit": "ns/iter",
            "extra": "iterations: 84378\ncpu: 8295.19661523152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16487.934421955484,
            "unit": "ns/iter",
            "extra": "iterations: 42194\ncpu: 16488.116793856887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15836.590193553833,
            "unit": "ns/iter",
            "extra": "iterations: 44277\ncpu: 15836.059353614733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5262.911408578881,
            "unit": "ns/iter",
            "extra": "iterations: 133049\ncpu: 5262.601748228089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26570.182453594898,
            "unit": "ns/iter",
            "extra": "iterations: 26182\ncpu: 26568.963409976288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21167.530707608617,
            "unit": "ns/iter",
            "extra": "iterations: 32956\ncpu: 21165.90909090922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21322.928920304774,
            "unit": "ns/iter",
            "extra": "iterations: 32963\ncpu: 21322.27345811956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21162.024564592375,
            "unit": "ns/iter",
            "extra": "iterations: 33015\ncpu: 21161.366045736948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50308.198733177094,
            "unit": "ns/iter",
            "extra": "iterations: 13893\ncpu: 50307.57935651017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 172779.5132655666,
            "unit": "ns/iter",
            "extra": "iterations: 4033\ncpu: 172779.09744607031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 143776.9566378948,
            "unit": "ns/iter",
            "extra": "iterations: 4866\ncpu: 143776.67488697078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 144035.76024589437,
            "unit": "ns/iter",
            "extra": "iterations: 4880\ncpu: 144036.1065573795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 144285.90304537723,
            "unit": "ns/iter",
            "extra": "iterations: 4827\ncpu: 144286.05759270582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 90214.52758041353,
            "unit": "ns/iter",
            "extra": "iterations: 7741\ncpu: 90212.94406407405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 146232.19916579497,
            "unit": "ns/iter",
            "extra": "iterations: 4795\ncpu: 146231.94994786047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5264.247270449672,
            "unit": "ns/iter",
            "extra": "iterations: 132531\ncpu: 5264.157065139501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26532.387915042564,
            "unit": "ns/iter",
            "extra": "iterations: 26413\ncpu: 26532.393139741605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21143.829691010553,
            "unit": "ns/iter",
            "extra": "iterations: 32946\ncpu: 21143.143325441397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21102.526979369282,
            "unit": "ns/iter",
            "extra": "iterations: 34026\ncpu: 21102.180685358257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21333.36791935723,
            "unit": "ns/iter",
            "extra": "iterations: 32836\ncpu: 21333.344499938772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49087.62543773417,
            "unit": "ns/iter",
            "extra": "iterations: 14278\ncpu: 49087.337162068325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 168619.54092441613,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 168617.30861819757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 140666.1460266282,
            "unit": "ns/iter",
            "extra": "iterations: 4958\ncpu: 140665.67164179074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 139554.3188521302,
            "unit": "ns/iter",
            "extra": "iterations: 5018\ncpu: 139555.77919489812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 141188.19650391248,
            "unit": "ns/iter",
            "extra": "iterations: 4977\ncpu: 141187.54269640235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 87720.18758672575,
            "unit": "ns/iter",
            "extra": "iterations: 7927\ncpu: 87719.90664816364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 140509.35178500082,
            "unit": "ns/iter",
            "extra": "iterations: 4986\ncpu: 140507.64139590666 ns\nthreads: 1"
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
        "date": 1705573901660,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1527.3751768723314,
            "unit": "ns/iter",
            "extra": "iterations: 462198\ncpu: 1527.3216240658764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 18138.772570128072,
            "unit": "ns/iter",
            "extra": "iterations: 45702\ncpu: 18138.171196008934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 38389.2767989722,
            "unit": "ns/iter",
            "extra": "iterations: 20206\ncpu: 38387.15728001582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 56835.9458430717,
            "unit": "ns/iter",
            "extra": "iterations: 14975\ncpu: 56833.72954924873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 62471.15635537518,
            "unit": "ns/iter",
            "extra": "iterations: 13642\ncpu: 62467.746664711885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 78926.5831021226,
            "unit": "ns/iter",
            "extra": "iterations: 11173\ncpu: 78921.67725767472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 94782.95732036947,
            "unit": "ns/iter",
            "extra": "iterations: 9255\ncpu: 94773.57104267966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 108727.8195376593,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 108725.36664180961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 126742.18255369282,
            "unit": "ns/iter",
            "extra": "iterations: 6798\ncpu: 126739.21741688739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1315.9348346676131,
            "unit": "ns/iter",
            "extra": "iterations: 533259\ncpu: 1315.839582641829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1068.8041770123466,
            "unit": "ns/iter",
            "extra": "iterations: 656067\ncpu: 1068.7291084599592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1071.818288991602,
            "unit": "ns/iter",
            "extra": "iterations: 653147\ncpu: 1071.8083371737143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1053.159087249428,
            "unit": "ns/iter",
            "extra": "iterations: 664497\ncpu: 1053.151631986299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2065.3816938584705,
            "unit": "ns/iter",
            "extra": "iterations: 338706\ncpu: 2065.26692765998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5577.519500000108,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5577.20699999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33081.18434425057,
            "unit": "ns/iter",
            "extra": "iterations: 24796\ncpu: 33079.73463461846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25823.6170947685,
            "unit": "ns/iter",
            "extra": "iterations: 31846\ncpu: 25821.44696351188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25326.758917247636,
            "unit": "ns/iter",
            "extra": "iterations: 32325\ncpu: 25325.116782675967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 25003.639465374876,
            "unit": "ns/iter",
            "extra": "iterations: 32621\ncpu: 25002.106005333902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 61120.08619999755,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61115.64999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 639194.9819999923,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639180.2999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 517379.27099998156,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517332.8999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 517695.34099997825,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517644.40000000177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 517579.09399998427,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517581.50000000215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 367586.5430997899,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 367570.7430997875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 511436.78300002194,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511386.60000000155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2634389.371830917,
            "unit": "ns/iter",
            "extra": "iterations: 355\ncpu: 2634188.450704225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1147596.9305211203,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 1147546.0297766747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3608123.2441860666,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3608063.1782945674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9517.862270070986,
            "unit": "ns/iter",
            "extra": "iterations: 92420\ncpu: 9516.778835749836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50486.92656325768,
            "unit": "ns/iter",
            "extra": "iterations: 16504\ncpu: 50484.11900145424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 40182.4639714626,
            "unit": "ns/iter",
            "extra": "iterations: 21025\ncpu: 40181.95481569561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39180.82845682073,
            "unit": "ns/iter",
            "extra": "iterations: 21190\ncpu: 39179.67909391233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38820.046194641676,
            "unit": "ns/iter",
            "extra": "iterations: 21496\ncpu: 38818.91514700421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 73421.19623406163,
            "unit": "ns/iter",
            "extra": "iterations: 11843\ncpu: 73418.85501984323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 674045.9162417875,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 674037.3634377283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 542329.7900000534,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542294.3999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 539280.4080000247,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539130.4000000048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 536830.043000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536821.4000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 387291.32556093193,
            "unit": "ns/iter",
            "extra": "iterations: 2273\ncpu: 387273.64716234163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 528656.8459999899,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528647.9000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2798451.549549609,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2798230.930930937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1225672.8026490454,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 1225655.0993377434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5504.423419999966,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5504.224000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32064.39238139696,
            "unit": "ns/iter",
            "extra": "iterations: 25674\ncpu: 32063.998597803296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 25191.89965175936,
            "unit": "ns/iter",
            "extra": "iterations: 32736\ncpu: 25190.961021505354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24460.021445331902,
            "unit": "ns/iter",
            "extra": "iterations: 33667\ncpu: 24459.660795437685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24567.721869247187,
            "unit": "ns/iter",
            "extra": "iterations: 33682\ncpu: 24566.376699720946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 59153.51710000323,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59152.5500000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 656670.2290000421,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656647.3999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 524731.8919999771,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524693.8000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 519781.74999999284,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519776.6000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 520639.18999999715,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520625.6000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 370461.8252221675,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 370421.70969107095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 512302.7830000524,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512292.8000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 605.7469559406541,
            "unit": "ns/iter",
            "extra": "iterations: 1170148\ncpu: 605.7156872464038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3728.791990474364,
            "unit": "ns/iter",
            "extra": "iterations: 188126\ncpu: 3728.7291496125144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2842.708215859933,
            "unit": "ns/iter",
            "extra": "iterations: 246864\ncpu: 2842.6805852615093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2798.3728289105543,
            "unit": "ns/iter",
            "extra": "iterations: 249817\ncpu: 2798.346789850182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2240.2604906454717,
            "unit": "ns/iter",
            "extra": "iterations: 311182\ncpu: 2240.2343323199866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17079.896247348213,
            "unit": "ns/iter",
            "extra": "iterations: 41011\ncpu: 17079.093413962066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 35990.08519718243,
            "unit": "ns/iter",
            "extra": "iterations: 19449\ncpu: 35989.09455499008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8542.505205485677,
            "unit": "ns/iter",
            "extra": "iterations: 82317\ncpu: 8542.0459929298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8468.854728545162,
            "unit": "ns/iter",
            "extra": "iterations: 82721\ncpu: 8468.397383977488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8475.466429298252,
            "unit": "ns/iter",
            "extra": "iterations: 82572\ncpu: 8475.008477449968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16643.728625154577,
            "unit": "ns/iter",
            "extra": "iterations: 42012\ncpu: 16642.728268113922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16093.082640272887,
            "unit": "ns/iter",
            "extra": "iterations: 43647\ncpu: 16092.970880014647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5235.099244738958,
            "unit": "ns/iter",
            "extra": "iterations: 133861\ncpu: 5235.064731325801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26559.236806291527,
            "unit": "ns/iter",
            "extra": "iterations: 26452\ncpu: 26539.539543323768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21178.391692111785,
            "unit": "ns/iter",
            "extra": "iterations: 33077\ncpu: 21177.340750370477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21450.238640890893,
            "unit": "ns/iter",
            "extra": "iterations: 32639\ncpu: 21449.370385122274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21647.37863205547,
            "unit": "ns/iter",
            "extra": "iterations: 32282\ncpu: 21646.577039836495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51215.384362441015,
            "unit": "ns/iter",
            "extra": "iterations: 13685\ncpu: 51214.307636097736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 176630.50050302644,
            "unit": "ns/iter",
            "extra": "iterations: 3976\ncpu: 176624.4718309869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 146030.3477530365,
            "unit": "ns/iter",
            "extra": "iterations: 4762\ncpu: 146025.80848383124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 145241.10288239399,
            "unit": "ns/iter",
            "extra": "iterations: 4753\ncpu: 145229.79171049802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 146084.29425287232,
            "unit": "ns/iter",
            "extra": "iterations: 4785\ncpu: 146080.6896551729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 90387.59586563347,
            "unit": "ns/iter",
            "extra": "iterations: 7740\ncpu: 90385.21963824314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 146615.1205450762,
            "unit": "ns/iter",
            "extra": "iterations: 4770\ncpu: 146605.09433962338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5274.167775074936,
            "unit": "ns/iter",
            "extra": "iterations: 132773\ncpu: 5274.061744481209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26051.745643306844,
            "unit": "ns/iter",
            "extra": "iterations: 26970\ncpu: 26049.911012235763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20967.066567074547,
            "unit": "ns/iter",
            "extra": "iterations: 33470\ncpu: 20966.764266507547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20917.184618166968,
            "unit": "ns/iter",
            "extra": "iterations: 33182\ncpu: 20916.632511602456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21320.792755073402,
            "unit": "ns/iter",
            "extra": "iterations: 32961\ncpu: 21319.938715451506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49515.20029757552,
            "unit": "ns/iter",
            "extra": "iterations: 14114\ncpu: 49512.61159132742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 170870.02784563974,
            "unit": "ns/iter",
            "extra": "iterations: 4094\ncpu: 170865.8768930142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 142388.2965911512,
            "unit": "ns/iter",
            "extra": "iterations: 4899\ncpu: 142384.91528883387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 141333.00831136748,
            "unit": "ns/iter",
            "extra": "iterations: 4933\ncpu: 141329.63713764437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 141020.64036326046,
            "unit": "ns/iter",
            "extra": "iterations: 4955\ncpu: 141018.46619576158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 89591.718662239,
            "unit": "ns/iter",
            "extra": "iterations: 7834\ncpu: 89587.00536124519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 142149.5784652987,
            "unit": "ns/iter",
            "extra": "iterations: 4913\ncpu: 142146.54996947022 ns\nthreads: 1"
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
        "date": 1705771597984,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1501.4029499718235,
            "unit": "ns/iter",
            "extra": "iterations: 440072\ncpu: 1501.260475558545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 18193.030275614277,
            "unit": "ns/iter",
            "extra": "iterations: 45317\ncpu: 18192.33841604696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 38202.60492520075,
            "unit": "ns/iter",
            "extra": "iterations: 21725\ncpu: 38202.13118527042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 57637.096539653656,
            "unit": "ns/iter",
            "extra": "iterations: 14854\ncpu: 57634.960280059226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 62939.27820000249,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62937.99 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 79292.35801135043,
            "unit": "ns/iter",
            "extra": "iterations: 11103\ncpu: 79287.50788075296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 94146.26075122278,
            "unit": "ns/iter",
            "extra": "iterations: 9185\ncpu: 94142.04681546001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 109523.92658259098,
            "unit": "ns/iter",
            "extra": "iterations: 8009\ncpu: 109515.68235734793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 128445.85697381619,
            "unit": "ns/iter",
            "extra": "iterations: 6761\ncpu: 128440.71882857558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1301.916298654577,
            "unit": "ns/iter",
            "extra": "iterations: 535535\ncpu: 1301.8783086072822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1060.1493420115773,
            "unit": "ns/iter",
            "extra": "iterations: 660042\ncpu: 1060.1231436787348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1056.9338742766981,
            "unit": "ns/iter",
            "extra": "iterations: 663902\ncpu: 1056.903127268782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1046.5000253472258,
            "unit": "ns/iter",
            "extra": "iterations: 670684\ncpu: 1046.4264840073706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2088.683150810223,
            "unit": "ns/iter",
            "extra": "iterations: 335939\ncpu: 2088.598525327514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5604.70821000024,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5604.648000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 32803.458630357374,
            "unit": "ns/iter",
            "extra": "iterations: 24970\ncpu: 32802.30676812172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25778.901936702692,
            "unit": "ns/iter",
            "extra": "iterations: 31755\ncpu: 25776.910722720855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25258.520072878873,
            "unit": "ns/iter",
            "extra": "iterations: 32382\ncpu: 25257.371379161206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24656.74105895881,
            "unit": "ns/iter",
            "extra": "iterations: 32938\ncpu: 24655.470884692397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 61717.350099996795,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61715.170000000086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 640916.9819999647,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640909.0999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 516104.2249999923,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516061.40000000165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 514480.0240000222,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514464.7000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 513370.28099999315,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513363.19999999704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 369920.8349679956,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 369905.7995735618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 516147.20599997096,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516126.4999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2630185.781869632,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2629994.90084986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1225217.7249999812,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 1225167.105263158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3612012.6759999497,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3611689.600000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9189.861484524372,
            "unit": "ns/iter",
            "extra": "iterations: 92986\ncpu: 9189.634998817019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50487.65124620069,
            "unit": "ns/iter",
            "extra": "iterations: 16450\ncpu: 50485.08814589653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39660.59611909132,
            "unit": "ns/iter",
            "extra": "iterations: 21026\ncpu: 39658.79863026725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 38900.47322183594,
            "unit": "ns/iter",
            "extra": "iterations: 21286\ncpu: 38899.07920699049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38988.968320015214,
            "unit": "ns/iter",
            "extra": "iterations: 21149\ncpu: 38986.982836068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 73868.12584745981,
            "unit": "ns/iter",
            "extra": "iterations: 11800\ncpu: 73865.56779660996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 681837.7753731185,
            "unit": "ns/iter",
            "extra": "iterations: 1340\ncpu: 681806.2686567211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 540445.3740000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540425.5999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 537557.0749999951,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537524.0999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 538601.9549999901,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538592.9999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 385326.4577246553,
            "unit": "ns/iter",
            "extra": "iterations: 2259\ncpu: 385308.05666223814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 532132.8790000166,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532114.9000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2803680.0996979075,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2803449.244713007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1217312.4869791311,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 1217272.3958333298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5547.987950000106,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5547.357999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32353.029737315614,
            "unit": "ns/iter",
            "extra": "iterations: 25658\ncpu: 32351.551173123367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 25096.276114659457,
            "unit": "ns/iter",
            "extra": "iterations: 33037\ncpu: 25095.172079789307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24662.212391215147,
            "unit": "ns/iter",
            "extra": "iterations: 33782\ncpu: 24613.015807234577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24758.9831445577,
            "unit": "ns/iter",
            "extra": "iterations: 33461\ncpu: 24757.77173425776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 59444.34010000351,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59442.41000000048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 665957.4939068148,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 665915.1971326208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 533375.9029999783,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533348.1000000049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 526411.4649999669,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526413.4000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 531681.4899999826,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531645.6000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 372081.7471554873,
            "unit": "ns/iter",
            "extra": "iterations: 2373\ncpu: 372055.583649389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 517430.6929999943,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517419.60000000376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 596.9765056742544,
            "unit": "ns/iter",
            "extra": "iterations: 1158833\ncpu: 596.9184515801671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3864.62471243011,
            "unit": "ns/iter",
            "extra": "iterations: 158657\ncpu: 3864.6287273804182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2760.6851030760363,
            "unit": "ns/iter",
            "extra": "iterations: 253502\ncpu: 2760.604650061915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2931.8168657847336,
            "unit": "ns/iter",
            "extra": "iterations: 238803\ncpu: 2931.6583125002753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2280.0290499630473,
            "unit": "ns/iter",
            "extra": "iterations: 307367\ncpu: 2279.9529552619515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17068.447774014603,
            "unit": "ns/iter",
            "extra": "iterations: 40746\ncpu: 17068.46561625678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 36663.27330364189,
            "unit": "ns/iter",
            "extra": "iterations: 19085\ncpu: 36656.73041655757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8495.948971073909,
            "unit": "ns/iter",
            "extra": "iterations: 82659\ncpu: 8495.693148961438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8484.626244562854,
            "unit": "ns/iter",
            "extra": "iterations: 82760\ncpu: 8484.183180280335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8505.61074518706,
            "unit": "ns/iter",
            "extra": "iterations: 82288\ncpu: 8505.39689869734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16777.002614975463,
            "unit": "ns/iter",
            "extra": "iterations: 41683\ncpu: 16775.923038169054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16105.631730658399,
            "unit": "ns/iter",
            "extra": "iterations: 43365\ncpu: 16105.029401591153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5323.107316001686,
            "unit": "ns/iter",
            "extra": "iterations: 132012\ncpu: 5323.0100293912665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26895.67733517537,
            "unit": "ns/iter",
            "extra": "iterations: 26058\ncpu: 26894.151508174065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21495.430980983383,
            "unit": "ns/iter",
            "extra": "iterations: 32549\ncpu: 21495.111985007123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21571.506460106022,
            "unit": "ns/iter",
            "extra": "iterations: 32662\ncpu: 21569.92223378851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21872.903058352742,
            "unit": "ns/iter",
            "extra": "iterations: 31978\ncpu: 21871.63675026581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51149.07336917085,
            "unit": "ns/iter",
            "extra": "iterations: 13766\ncpu: 51146.45503414266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 176702.7328263579,
            "unit": "ns/iter",
            "extra": "iterations: 3945\ncpu: 176697.13561470187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 147288.40885141524,
            "unit": "ns/iter",
            "extra": "iterations: 4745\ncpu: 147282.31822971636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 146433.11273792182,
            "unit": "ns/iter",
            "extra": "iterations: 4781\ncpu: 146425.99874503023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 147132.99936935777,
            "unit": "ns/iter",
            "extra": "iterations: 4757\ncpu: 147128.14799243398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 90799.3612266115,
            "unit": "ns/iter",
            "extra": "iterations: 7696\ncpu: 90794.06185031126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 147429.53883392856,
            "unit": "ns/iter",
            "extra": "iterations: 4751\ncpu: 147426.268154074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5274.738688158492,
            "unit": "ns/iter",
            "extra": "iterations: 132516\ncpu: 5274.5396782275575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26508.79166191483,
            "unit": "ns/iter",
            "extra": "iterations: 26313\ncpu: 26507.737620187898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21076.645427263382,
            "unit": "ns/iter",
            "extra": "iterations: 32989\ncpu: 21075.561550820068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20732.443684287926,
            "unit": "ns/iter",
            "extra": "iterations: 33765\ncpu: 20731.28091218712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21273.268519644203,
            "unit": "ns/iter",
            "extra": "iterations: 32884\ncpu: 21272.877387179262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49104.74567130166,
            "unit": "ns/iter",
            "extra": "iterations: 14092\ncpu: 49103.20749361299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 170296.70265659716,
            "unit": "ns/iter",
            "extra": "iterations: 4103\ncpu: 170287.83816719393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 142480.18176254473,
            "unit": "ns/iter",
            "extra": "iterations: 4902\ncpu: 142474.92860057094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 142650.62454435174,
            "unit": "ns/iter",
            "extra": "iterations: 4938\ncpu: 142648.70392871436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 143082.08000000153,
            "unit": "ns/iter",
            "extra": "iterations: 4900\ncpu: 143068.79591836603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 91091.45561900079,
            "unit": "ns/iter",
            "extra": "iterations: 7706\ncpu: 91082.74072151598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 142989.74760643687,
            "unit": "ns/iter",
            "extra": "iterations: 4909\ncpu: 142982.8070890195 ns\nthreads: 1"
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
        "date": 1705772282153,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1512.3938615176426,
            "unit": "ns/iter",
            "extra": "iterations: 450209\ncpu: 1512.3320502255622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 18585.8899212324,
            "unit": "ns/iter",
            "extra": "iterations: 45958\ncpu: 18584.642499673617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 37583.86601793094,
            "unit": "ns/iter",
            "extra": "iterations: 22197\ncpu: 37582.921115466066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 55287.02171631132,
            "unit": "ns/iter",
            "extra": "iterations: 15242\ncpu: 55285.172549534196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 62223.71299999736,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62222.17999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 78033.24112399516,
            "unit": "ns/iter",
            "extra": "iterations: 11210\ncpu: 78029.5807314897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 92968.17879240448,
            "unit": "ns/iter",
            "extra": "iterations: 9374\ncpu: 92967.14316193738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 108111.43857266306,
            "unit": "ns/iter",
            "extra": "iterations: 8099\ncpu: 108104.75367329303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 125578.4057908357,
            "unit": "ns/iter",
            "extra": "iterations: 6942\ncpu: 125573.20656871203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1311.793281542412,
            "unit": "ns/iter",
            "extra": "iterations: 533813\ncpu: 1311.7792185653032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1072.5968533054095,
            "unit": "ns/iter",
            "extra": "iterations: 652812\ncpu: 1072.567906227214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1055.4230090524122,
            "unit": "ns/iter",
            "extra": "iterations: 663026\ncpu: 1055.3827451713807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1064.1526582414317,
            "unit": "ns/iter",
            "extra": "iterations: 652405\ncpu: 1064.108797449437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2061.7976705922306,
            "unit": "ns/iter",
            "extra": "iterations: 339743\ncpu: 2061.7516770029124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5668.63794000028,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5668.492999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33254.01016211104,
            "unit": "ns/iter",
            "extra": "iterations: 24798\ncpu: 33253.113154286606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25886.234447642426,
            "unit": "ns/iter",
            "extra": "iterations: 31619\ncpu: 25884.325880008822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25336.284695080776,
            "unit": "ns/iter",
            "extra": "iterations: 32238\ncpu: 25335.03939450338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24841.17041376619,
            "unit": "ns/iter",
            "extra": "iterations: 32603\ncpu: 24839.637456675806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 61560.17040000279,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61559.90000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 654157.9559999491,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 654087.8999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 520115.14099996246,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520075.2999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 519418.9860000051,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519425.2000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 516627.86599996476,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516600.90000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 373867.57022075716,
            "unit": "ns/iter",
            "extra": "iterations: 2129\ncpu: 373849.5068107094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 516037.4689999685,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516023.50000000285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2634692.252124673,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2634643.6260623224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1196174.6662371166,
            "unit": "ns/iter",
            "extra": "iterations: 776\ncpu: 1196157.989690723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3624410.4496124107,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3624260.4651162704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 9610.038368176758,
            "unit": "ns/iter",
            "extra": "iterations: 91456\ncpu: 9609.949046536012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 50935.91600614718,
            "unit": "ns/iter",
            "extra": "iterations: 16275\ncpu: 50934.94930875584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39959.18364604765,
            "unit": "ns/iter",
            "extra": "iterations: 20839\ncpu: 39958.87998464417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39294.80395201257,
            "unit": "ns/iter",
            "extra": "iterations: 21255\ncpu: 39293.700305810285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38819.63965747504,
            "unit": "ns/iter",
            "extra": "iterations: 21721\ncpu: 38818.894157727416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 73349.73178413569,
            "unit": "ns/iter",
            "extra": "iterations: 11748\ncpu: 73348.63806605412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 712258.8392469271,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 712212.3823316452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 540917.7829999976,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540916.799999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 537757.4579999874,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537740.6000000064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 540467.25500001,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540458.9000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 387191.98422436893,
            "unit": "ns/iter",
            "extra": "iterations: 2282\ncpu: 387178.6590709882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 527732.4669999643,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527729.8000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2816453.3413897185,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2816430.21148035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1224254.2999999842,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1224216.2666666636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5530.767749999654,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5530.832000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 32442.191095945935,
            "unit": "ns/iter",
            "extra": "iterations: 25202\ncpu: 32441.742718831716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 25263.65607926679,
            "unit": "ns/iter",
            "extra": "iterations: 32397\ncpu: 25262.589128623098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24550.72125917836,
            "unit": "ns/iter",
            "extra": "iterations: 33228\ncpu: 24550.385217286617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24286.55454572845,
            "unit": "ns/iter",
            "extra": "iterations: 33229\ncpu: 24286.809714406034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 59866.55890000066,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59866.149999999856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 658481.3929999882,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 658451.8000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 526670.0710000123,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526646.1000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 523078.8640000128,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523069.10000000073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 521016.0789999918,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521010.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 370838.84267784236,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 370839.53974895243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 511503.2150000047,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511500.599999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 599.0233804234957,
            "unit": "ns/iter",
            "extra": "iterations: 1170167\ncpu: 599.0057829352571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3769.8263416364484,
            "unit": "ns/iter",
            "extra": "iterations: 185911\ncpu: 3769.678502078943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 3004.7422511767204,
            "unit": "ns/iter",
            "extra": "iterations: 243295\ncpu: 3004.694301157055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2927.2585744439307,
            "unit": "ns/iter",
            "extra": "iterations: 262466\ncpu: 2927.2202875801213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2238.5180360369977,
            "unit": "ns/iter",
            "extra": "iterations: 312735\ncpu: 2238.465793723121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17164.30529022726,
            "unit": "ns/iter",
            "extra": "iterations: 40830\ncpu: 17163.766838109153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 34709.60846718027,
            "unit": "ns/iter",
            "extra": "iterations: 20172\ncpu: 34707.48066626994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8426.189808225414,
            "unit": "ns/iter",
            "extra": "iterations: 82910\ncpu: 8426.000482450881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 8372.399760751014,
            "unit": "ns/iter",
            "extra": "iterations: 83595\ncpu: 8371.97440038282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 8463.212280257525,
            "unit": "ns/iter",
            "extra": "iterations: 82881\ncpu: 8463.183359274137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15739.03161921202,
            "unit": "ns/iter",
            "extra": "iterations: 44182\ncpu: 15738.40025349694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 15782.859222427342,
            "unit": "ns/iter",
            "extra": "iterations: 44446\ncpu: 15782.180623678181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5278.639532067917,
            "unit": "ns/iter",
            "extra": "iterations: 132156\ncpu: 5278.530675867909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26547.008890577097,
            "unit": "ns/iter",
            "extra": "iterations: 26320\ncpu: 26545.208966565573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21543.3394355917,
            "unit": "ns/iter",
            "extra": "iterations: 32884\ncpu: 21542.275878846944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21255.645197466547,
            "unit": "ns/iter",
            "extra": "iterations: 32993\ncpu: 21254.575212923926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21727.582134273758,
            "unit": "ns/iter",
            "extra": "iterations: 32039\ncpu: 21726.814195199833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50857.001373330175,
            "unit": "ns/iter",
            "extra": "iterations: 13835\ncpu: 50853.77665341562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 173688.35393398997,
            "unit": "ns/iter",
            "extra": "iterations: 4029\ncpu: 173683.4450235775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 145589.8509212742,
            "unit": "ns/iter",
            "extra": "iterations: 4776\ncpu: 145581.49078726943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 144075.66721547538,
            "unit": "ns/iter",
            "extra": "iterations: 4859\ncpu: 144073.67771146502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 143766.45734207664,
            "unit": "ns/iter",
            "extra": "iterations: 4876\ncpu: 143765.17637407628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 90083.68923433202,
            "unit": "ns/iter",
            "extra": "iterations: 7784\ncpu: 90080.58838643381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 144576.96188293336,
            "unit": "ns/iter",
            "extra": "iterations: 4801\ncpu: 144568.83982503897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5573.091305257538,
            "unit": "ns/iter",
            "extra": "iterations: 133782\ncpu: 5572.96273041217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26606.496869493803,
            "unit": "ns/iter",
            "extra": "iterations: 26673\ncpu: 26606.43347205038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21212.518616940662,
            "unit": "ns/iter",
            "extra": "iterations: 33115\ncpu: 21211.62011173208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20855.514720752722,
            "unit": "ns/iter",
            "extra": "iterations: 33626\ncpu: 20852.521858085893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21544.198816603774,
            "unit": "ns/iter",
            "extra": "iterations: 32618\ncpu: 21542.81378380011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49717.895333997665,
            "unit": "ns/iter",
            "extra": "iterations: 14102\ncpu: 49714.26038859737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 170923.18931561292,
            "unit": "ns/iter",
            "extra": "iterations: 4062\ncpu: 170919.05465287983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 141366.72267042875,
            "unit": "ns/iter",
            "extra": "iterations: 4958\ncpu: 141362.68656716342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 141886.91935157322,
            "unit": "ns/iter",
            "extra": "iterations: 4935\ncpu: 141878.15602837002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 141443.994543252,
            "unit": "ns/iter",
            "extra": "iterations: 4948\ncpu: 141440.84478577424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 89839.43400820265,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 89837.5192209127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 142431.47247800248,
            "unit": "ns/iter",
            "extra": "iterations: 4887\ncpu: 142425.291589931 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}