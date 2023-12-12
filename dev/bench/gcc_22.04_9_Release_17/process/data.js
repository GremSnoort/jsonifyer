window.BENCHMARK_DATA = {
  "lastUpdate": 1702398774860,
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
      }
    ]
  }
}