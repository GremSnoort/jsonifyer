window.BENCHMARK_DATA = {
  "lastUpdate": 1702397907264,
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
      }
    ]
  }
}