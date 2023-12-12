window.BENCHMARK_DATA = {
  "lastUpdate": 1702394241044,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-13 20.04 Debug c++-17": [
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
        "date": 1702392462183,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16042.414881755565,
            "unit": "ns/iter",
            "extra": "iterations: 43046\ncpu: 16042.03410305255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 151021.33788821186,
            "unit": "ns/iter",
            "extra": "iterations: 5635\ncpu: 151013.0612244898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 286009.90687723266,
            "unit": "ns/iter",
            "extra": "iterations: 3039\ncpu: 285993.84666008555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 419386.5467312221,
            "unit": "ns/iter",
            "extra": "iterations: 2065\ncpu: 419372.00968523015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 562291.6938776112,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 562040.0510204079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 557615.7909999893,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557559.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 668234.7604316302,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 668204.3884892084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 785045.3116123666,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 785025.0626566418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 885209.1042064723,
            "unit": "ns/iter",
            "extra": "iterations: 1046\ncpu: 885183.5564053544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12873.5144313339,
            "unit": "ns/iter",
            "extra": "iterations: 54153\ncpu: 12873.260945838658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10588.22582890738,
            "unit": "ns/iter",
            "extra": "iterations: 66081\ncpu: 10587.686324359485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10556.147044580286,
            "unit": "ns/iter",
            "extra": "iterations: 66082\ncpu: 10555.885112436068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10686.443198225961,
            "unit": "ns/iter",
            "extra": "iterations: 65799\ncpu: 10685.993708111086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17243.594171454086,
            "unit": "ns/iter",
            "extra": "iterations: 40559\ncpu: 17242.673635937794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63550.366312348124,
            "unit": "ns/iter",
            "extra": "iterations: 13453\ncpu: 63546.51750538915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 321629.72147146944,
            "unit": "ns/iter",
            "extra": "iterations: 2664\ncpu: 321613.43843843875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 256659.32702132114,
            "unit": "ns/iter",
            "extra": "iterations: 3327\ncpu: 256645.2660054101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 259357.45473878796,
            "unit": "ns/iter",
            "extra": "iterations: 3292\ncpu: 259353.7970838395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 255942.98494883918,
            "unit": "ns/iter",
            "extra": "iterations: 3322\ncpu: 255934.07585791696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 587112.1142472939,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 587091.4650537632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4728698.827411075,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4728519.796954324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3814704.336065233,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3814554.508196724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3855864.355371951,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3855823.14049587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3840128.3842977285,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3839939.256198336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2206118.2748815,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2206074.1706161182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3737128.293172496,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3737010.4417670667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14680523.388888232,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14679749.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6428378.479999992,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6427960.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18711499.561403032,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18710387.71929827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 68553.1580855725,
            "unit": "ns/iter",
            "extra": "iterations: 12411\ncpu: 68547.80436709395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 366574.8769824167,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 366553.19331333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 290539.633310703,
            "unit": "ns/iter",
            "extra": "iterations: 2948\ncpu: 290523.27001356863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 286845.8318791848,
            "unit": "ns/iter",
            "extra": "iterations: 2980\ncpu: 286832.8187919458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 286208.098996661,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 286195.3511705673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 592852.0547945638,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 592822.5342465752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4807906.561855469,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 4807571.134020628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3884378.2500000163,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3884117.9166666665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3939588.27118639,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3939453.389830498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3938390.105485123,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3938133.33333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2251366.186893167,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2251259.223300957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3804627.0163263497,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3804441.2244897727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 15040213.774647117,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 15039207.042253517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6653378.170000224,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6652885.9999999665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 63057.33122583035,
            "unit": "ns/iter",
            "extra": "iterations: 13444\ncpu: 63053.76376078543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 322283.8773656361,
            "unit": "ns/iter",
            "extra": "iterations: 2642\ncpu: 322263.28538985614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 260357.9942161342,
            "unit": "ns/iter",
            "extra": "iterations: 3285\ncpu: 260342.16133942155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 258477.97692775133,
            "unit": "ns/iter",
            "extra": "iterations: 3294\ncpu: 258464.93624772227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 257203.4695493243,
            "unit": "ns/iter",
            "extra": "iterations: 3284\ncpu: 257192.14372716247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 584793.9027684374,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 584767.5219446315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4753393.448979472,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4753071.428571455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3821775.0450816993,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3821532.7868852452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3864527.400825999,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3864411.983471075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3845411.032921875,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3845113.991769552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2220317.009615404,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 2220237.740384618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3744146.7068274724,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3743972.6907630283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5982.425743163883,
            "unit": "ns/iter",
            "extra": "iterations: 117538\ncpu: 5982.074733277723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39724.26210729282,
            "unit": "ns/iter",
            "extra": "iterations: 17634\ncpu: 39721.49257116955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31627.78429389904,
            "unit": "ns/iter",
            "extra": "iterations: 23736\ncpu: 31627.165487023995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30897.158210006502,
            "unit": "ns/iter",
            "extra": "iterations: 22704\ncpu: 30896.2209302327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23825.659037879574,
            "unit": "ns/iter",
            "extra": "iterations: 29144\ncpu: 23825.665660170056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 154523.89163540283,
            "unit": "ns/iter",
            "extra": "iterations: 4531\ncpu: 154504.01677333657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 315097.6125856292,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 315095.6763698631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 78187.18625153851,
            "unit": "ns/iter",
            "extra": "iterations: 8961\ncpu: 78183.0710858161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 78476.63031735388,
            "unit": "ns/iter",
            "extra": "iterations: 8886\ncpu: 78475.24195363554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 78508.00707388806,
            "unit": "ns/iter",
            "extra": "iterations: 8906\ncpu: 78507.98338199021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 160172.60990642224,
            "unit": "ns/iter",
            "extra": "iterations: 4381\ncpu: 160168.24925816117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 150032.6761680192,
            "unit": "ns/iter",
            "extra": "iterations: 4666\ncpu: 150030.45435061946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 47742.44018551523,
            "unit": "ns/iter",
            "extra": "iterations: 14662\ncpu: 47741.93834401891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 234065.49498325522,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 234061.20401337836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 189043.06136794324,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 189037.95620437802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 188907.8673854472,
            "unit": "ns/iter",
            "extra": "iterations: 3710\ncpu: 188901.18598382868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 189289.23871317314,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 189278.9672884533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 321998.0137615022,
            "unit": "ns/iter",
            "extra": "iterations: 2180\ncpu: 321998.256880733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1359578.565891456,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1359505.0387596758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1127383.103059713,
            "unit": "ns/iter",
            "extra": "iterations: 621\ncpu: 1127319.0016103114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1139951.831147509,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1139876.229508217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1133390.5948136474,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1133332.090761751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 721328.4353670975,
            "unit": "ns/iter",
            "extra": "iterations: 967\ncpu: 721310.8583247098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1121523.8408359895,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1121426.527331174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 48137.95669507876,
            "unit": "ns/iter",
            "extra": "iterations: 14548\ncpu: 48136.362386582216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 232484.36880614172,
            "unit": "ns/iter",
            "extra": "iterations: 3007\ncpu: 232482.07515796658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 192072.00602902763,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 192069.74513565347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 189592.93419983875,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 189578.66233414548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 191056.92270004778,
            "unit": "ns/iter",
            "extra": "iterations: 3674\ncpu: 191043.6037016909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 321722.09775123745,
            "unit": "ns/iter",
            "extra": "iterations: 2179\ncpu: 321698.99036254716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1349998.1891892331,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1349914.6718146503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1129877.8322580552,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1129788.0645161415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1135641.3512604537,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1135566.0504201686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1136447.3186992055,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1136415.6097560977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 722907.9194214713,
            "unit": "ns/iter",
            "extra": "iterations: 968\ncpu: 722899.7933884239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1123582.3842443612,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1123492.9260450334 ns\nthreads: 1"
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
        "date": 1702394238831,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15992.17916174723,
            "unit": "ns/iter",
            "extra": "iterations: 44044\ncpu: 15991.501680138044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 152878.34881210202,
            "unit": "ns/iter",
            "extra": "iterations: 5556\ncpu: 152874.532037437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 289012.5051580693,
            "unit": "ns/iter",
            "extra": "iterations: 3005\ncpu: 289003.0615640599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 425135.9788697805,
            "unit": "ns/iter",
            "extra": "iterations: 2035\ncpu: 425120.9336609339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 565860.3037323145,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 565805.1480051482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 565245.1450000057,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565218.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 676446.6525855747,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 676423.5251274583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 782848.5367088794,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 782821.9409282707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 890549.8140655523,
            "unit": "ns/iter",
            "extra": "iterations: 1038\ncpu: 890505.4913294804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12662.137308088748,
            "unit": "ns/iter",
            "extra": "iterations: 55299\ncpu: 12661.946870648664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10385.42954066352,
            "unit": "ns/iter",
            "extra": "iterations: 67358\ncpu: 10384.62098043293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10668.500720893873,
            "unit": "ns/iter",
            "extra": "iterations: 66584\ncpu: 10667.908206175658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10564.520726954046,
            "unit": "ns/iter",
            "extra": "iterations: 66194\ncpu: 10563.43022026167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16950.785272653207,
            "unit": "ns/iter",
            "extra": "iterations: 41243\ncpu: 16949.72722643842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 64346.897318409036,
            "unit": "ns/iter",
            "extra": "iterations: 13313\ncpu: 64343.35611808001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 316381.6653091477,
            "unit": "ns/iter",
            "extra": "iterations: 2701\ncpu: 316364.0873750462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 253825.20000000202,
            "unit": "ns/iter",
            "extra": "iterations: 3345\ncpu: 253787.41405082244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 257536.62787182475,
            "unit": "ns/iter",
            "extra": "iterations: 3308\ncpu: 257515.93107617946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 254103.37028230657,
            "unit": "ns/iter",
            "extra": "iterations: 3365\ncpu: 254082.16939078827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 555133.4164556897,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 555098.4810126573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4730743.385786825,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4730454.314720813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3840254.6460906053,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3839895.473251031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3840182.349794175,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3839997.530864193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3866873.4190871636,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3866475.933609956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2194131.143529536,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2194071.7647058833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3740542.526104555,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3740352.6104417713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14698817.602739425,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14697373.972602714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6601225.350000276,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6600709.000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 18772370.596491925,
            "unit": "ns/iter",
            "extra": "iterations: 57\ncpu: 18770794.736842122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 66901.4391413788,
            "unit": "ns/iter",
            "extra": "iterations: 12718\ncpu: 66897.54678408576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 368139.4950665155,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 368093.00729300844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 290223.1584124955,
            "unit": "ns/iter",
            "extra": "iterations: 2948\ncpu: 290205.73270013684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 286364.5789297423,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 286338.09364548593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 286314.34843434655,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 286294.570286475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 565130.3103225532,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 565098.5806451604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4795575.625640735,
            "unit": "ns/iter",
            "extra": "iterations: 195\ncpu: 4795550.769230772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3912653.497908171,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3912552.301255224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3918312.394957598,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3918176.4705882473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3930895.277311005,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3930876.890756295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2241784.0264425264,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 2241706.4903846276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3789585.0163262626,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3789459.9999999884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14988114.971831083,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14986867.605633723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6592372.479999539,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6591523.999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 61022.64768221935,
            "unit": "ns/iter",
            "extra": "iterations: 13871\ncpu: 61019.52274529611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 318395.6922503762,
            "unit": "ns/iter",
            "extra": "iterations: 2684\ncpu: 318361.84798807645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 256982.08561953346,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 256969.79198070566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 254840.20083683115,
            "unit": "ns/iter",
            "extra": "iterations: 3346\ncpu: 254816.7662881034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 253891.29586679224,
            "unit": "ns/iter",
            "extra": "iterations: 3363\ncpu: 253871.03776390088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 550762.8517109837,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 550731.6223067201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4734670.1675125705,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4734268.020304592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3851096.622950957,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3850845.081967213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3875275.842323922,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3875031.120331962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3887790.566666638,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3887519.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2209996.4491725806,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2209893.1442080275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3739845.8554216665,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3739445.381526108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6074.022828947991,
            "unit": "ns/iter",
            "extra": "iterations: 115117\ncpu: 6073.630306557716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 39327.0233410356,
            "unit": "ns/iter",
            "extra": "iterations: 17737\ncpu: 39322.34312454215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 31755.443991300974,
            "unit": "ns/iter",
            "extra": "iterations: 22068\ncpu: 31753.82001087544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 31169.164009620727,
            "unit": "ns/iter",
            "extra": "iterations: 22456\ncpu: 31165.376736729668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23698.705113001324,
            "unit": "ns/iter",
            "extra": "iterations: 29513\ncpu: 23697.523125402586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 149592.8459240363,
            "unit": "ns/iter",
            "extra": "iterations: 4686\ncpu: 149577.1020059748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 315501.76048713195,
            "unit": "ns/iter",
            "extra": "iterations: 2217\ncpu: 315486.2426702747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 77943.03842299094,
            "unit": "ns/iter",
            "extra": "iterations: 8979\ncpu: 77937.36496268978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 78542.74574181995,
            "unit": "ns/iter",
            "extra": "iterations: 8924\ncpu: 78540.78888390801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 78625.96074472104,
            "unit": "ns/iter",
            "extra": "iterations: 8916\ncpu: 78624.84297891389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 158928.90206300918,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 158928.33824529615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 149580.6407455098,
            "unit": "ns/iter",
            "extra": "iterations: 4668\ncpu: 149578.06341045414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 47318.19073035735,
            "unit": "ns/iter",
            "extra": "iterations: 14801\ncpu: 47316.113776096325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 235618.63884214536,
            "unit": "ns/iter",
            "extra": "iterations: 2971\ncpu: 235614.87714574175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 189677.4428803303,
            "unit": "ns/iter",
            "extra": "iterations: 3694\ncpu: 189676.61072008812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 188493.9591068092,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 188490.07263922546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 189672.25325027757,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 189666.5222101834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 308602.80786215997,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 308587.5000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1360664.3482490187,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1360613.2295719832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1133012.5000000265,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1132964.285714291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1145651.8903435469,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1145613.4206219164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1143696.0212418195,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1143652.1241830038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 728862.6032888382,
            "unit": "ns/iter",
            "extra": "iterations: 973\ncpu: 728839.2600205445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1124700.951845844,
            "unit": "ns/iter",
            "extra": "iterations: 623\ncpu: 1124679.775280903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 48368.071986185074,
            "unit": "ns/iter",
            "extra": "iterations: 14475\ncpu: 48366.55613126157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 235045.53543833774,
            "unit": "ns/iter",
            "extra": "iterations: 2977\ncpu: 235041.3503527035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 190112.1797172352,
            "unit": "ns/iter",
            "extra": "iterations: 3678\ncpu: 190107.80315388564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 189780.02878087966,
            "unit": "ns/iter",
            "extra": "iterations: 3683\ncpu: 189775.5362476232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 189964.19929404938,
            "unit": "ns/iter",
            "extra": "iterations: 3683\ncpu: 189958.1048058674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 310994.5430727882,
            "unit": "ns/iter",
            "extra": "iterations: 2252\ncpu: 310952.61989342724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1350564.162162054,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1350465.0579150624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1133396.8802589637,
            "unit": "ns/iter",
            "extra": "iterations: 618\ncpu: 1133319.4174757295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1145981.2606556653,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1145950.491803264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1142956.7138157599,
            "unit": "ns/iter",
            "extra": "iterations: 608\ncpu: 1142922.3684210447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 714287.2979591871,
            "unit": "ns/iter",
            "extra": "iterations: 980\ncpu: 714181.122448971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1126430.3553054407,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1126338.9067524222 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}